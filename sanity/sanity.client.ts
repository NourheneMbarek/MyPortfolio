// sanity/sanity.client.ts

import { createClient, type ClientConfig } from "@sanity/client";
// dzdt2na7
const config: ClientConfig = {
  projectId: "dzdt2na7",
  dataset: "production",
  apiVersion: "2023-08-14",
  useCdn: false,
};

const client = createClient(config);

export default client;