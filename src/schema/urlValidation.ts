import * as Yup from "yup";

// Define an interface for the form data
export interface UrlFormData {
  url: string;
}

// Create the validation schema
export const urlValidationSchema = Yup.object().shape({
  url: Yup.string()
    // Trim whitespace
    .trim()
    .required("Please add a link")

    // Check for spaces with detailed error message
    .test("no-spaces", (value: string) => {
      // Check for various types of whitespace
      if (/\s/.test(value)) {
        // Provide specific guidance about whitespace
        if (value.includes(" ")) {
          return "URL must not contain spaces. Use %20 or + for spaces.";
        }
        if (/\t/.test(value)) {
          return "URL must not contain tabs.";
        }
        if (/\n|\r/.test(value)) {
          return "URL must not contain newlines.";
        }
        return "URL contains invalid whitespace characters.";
      }
      return true;
    })

    // Validate protocol
    .matches(/^(https?:\/\/)/, "URL must start with http:// or https://")

    // Check for reserved characters
    .test("no-reserved-chars", (value: string) => {
      if (!value) return true;

      // Check for unencoded reserved characters
      if (value.includes("&")) {
        return 'URL contains unencoded "&". Use URL encoding.';
      }
      if (value.includes("?")) {
        return 'URL contains unencoded "?". Use URL encoding.';
      }
      if (value.includes("#")) {
        return 'URL contains unencoded "#". Use URL encoding.';
      }

      return true;
    })

    // Transform the URL to ensure it's properly encoded
    .transform((value) => {
      if (!value) return value;

      try {
        // Encode the URL to handle reserved characters
        return encodeURI(value.trim());
      } catch (error) {
        return value;
      }
    })

    // Additional validation after encoding
    .test("is-valid-url", (value: string) => {
      if (!value) return "URL is required";

      try {
        // Attempt to create a URL object to validate
        new URL(value);
        return true;
      } catch (error) {
        // Provide specific error messages
        if (error instanceof Error) {
          if (error.message.includes("Invalid URL")) {
            return "Invalid URL format";
          }
          if (error.message.includes("protocol")) {
            return "Missing or invalid protocol";
          }
        }
        return "Unable to parse URL";
      }
    }),
});
