import { createClient, type SanityClient } from "next-sanity";
import {
  apiVersion,
  dataset,
  projectId,
  token,
  useCdn,
} from "@/lib/sanity.api";
import imageUrlBuilder from "@sanity/image-url";

export const getClient = (preview?: { token: string }): SanityClient => {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn,
    perspective: "published",
  });
  if (preview) {
    if (!preview.token) {
      throw new Error("You must provide a token to preview drafts");
    }
    return client.withConfig({
      token: preview.token,
      useCdn: false,
      ignoreBrowserTokenWarning: true,
      perspective: "previewDrafts",
    });
  }
  return client;
};

const builder = imageUrlBuilder(getClient({ token }));

export const urlFor = (source: any) => builder.image(source);
