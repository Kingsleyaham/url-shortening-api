<template>
  <div class="max-w-[85rem] mx-auto md:p-14 p-8 my-8 md:bg-shorted-desktop bg-shorted-mobile rounded-lg bg-dark-violet">
    <form @submit.prevent="handleFormSubmit">
      <div class="flex md:gap-2 gap-4 md:flex-row flex-col">
        <input
          type="text"
          id="url"
          v-model="formData.url"
          class="rounded-lg p-3.5 md:w-10/12 w-full text-dark-violet form-control"
          :class="{ 'is-invalid': errors.url }"
          placeholder="Shorten a link here..."
        />
        <BaseButton
          label="Shorten&nbsp;It!"
          size="lg"
          variant="primary"
          class="rounded-lg py-3.5 w-full md:w-2/12 min-w-fit text-xl"
        />
      </div>
      <div v-if="errors.url" class="invalid-feedback">
        {{ errors.url }}
      </div>
    </form>

    <div class="mt-5 space-y-5">
      <UrlList
        v-for="urlItem in shortenedUrls"
        :key="urlItem.shortenedUrl"
        :url="urlItem.originalUrl"
        :shortenedUrl="urlItem.shortenedUrl"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { UrlFormData, urlValidationSchema } from "@/schema/urlValidation";
import { ref } from "vue";
import { ValidationError } from "yup";
import UrlList from "./UrlList.vue";
import axios from "axios";
import { API_KEY, API_URL } from "@/config";
import BaseButton from "./BaseButton.vue";

interface ShortenedUrl {
  originalUrl: string;
  shortenedUrl: string;
}

const formData = ref<UrlFormData>({
  url: "",
});

// Errors
const errors = ref<Partial<Record<keyof UrlFormData, string>>>({});

// success state
const submitSuccess = ref(false);

const processedUrl = ref("");

// Array to store shortened URLs
const shortenedUrls = ref<ShortenedUrl[]>([]);

const handleFormSubmit = async () => {
  try {
    errors.value = {};
    submitSuccess.value = false;
    processedUrl.value = "";

    // validate form
    const validateForm = await urlValidationSchema.validate(formData.value);

    processedUrl.value = validateForm.url;

    console.log("validated data", processedUrl.value);

    const shortenedUrl = await shortenUrl(processedUrl.value);

    if (!shortenedUrl) throw new Error("An Error occurred");

    submitSuccess.value = true;
    formData.value.url = "";

    shortenedUrls.value.unshift({
      originalUrl: processedUrl.value,
      shortenedUrl,
    });

    console.log(shortenedUrls);
  } catch (err: any) {
    if (err instanceof ValidationError) {
      errors.value = {
        [err.path as keyof UrlFormData]: err.message,
      };
    } else {
      errors.value = { url: err.message };
    }
  }
};

const shortenUrl = async (url: string): Promise<string | undefined> => {
  try {
    let shortenedUrl = "";
    const response = await axios.post(
      "/create",
      { url },
      {
        params: { api_token: API_KEY },
        headers: { "Content-Type": "application/json", accept: "application/json" },
        baseURL: API_URL,
      }
    );

    if (response.status === 200) {
      shortenedUrl = response.data.data.tiny_url;

      return shortenedUrl;
    }

    return;
  } catch (error: any) {
    console.error("Error shortening URL:", error.message);
    throw error;
  }
};
</script>

<style scoped>
.invalid-feedback {
  color: #fa3b3b;
  font-style: italic;
  padding-top: 5px;
}

.is-invalid {
  border: 1px solid #fa3b3b;
}
</style>
