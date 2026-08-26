import { defineConfig } from "tinacms";
import { schema } from "./schema";

export default defineConfig({
  branch: "main",
  client: {
    clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
    token: process.env.TINA_TOKEN || "",
  },
  build: {
    publicFolder: "public",
    outputFolder: "admin",
  },
  schema,
});
