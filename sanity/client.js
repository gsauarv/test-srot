import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID, // you can find this in sanity.json
  dataset: "production", // or the name you chose in step 1
  useCdn: false, // `false` i
  apiVersion: "2021-08-31",
});
