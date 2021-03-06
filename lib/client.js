import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: process.env.PROJECT_ID,
  dataset: process.env.DATASET,
  apiVersion: "2022-06-27",
  useCdn: true,
  token: process.env.TOKEN,
});
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
