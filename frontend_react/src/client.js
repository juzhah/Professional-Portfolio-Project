import sanityClient from '@sanity/client';
import imageBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: import.meta.env.VITE_SANITY_TOKEN
});

const builder = imageBuilder(client);

export const urlFor = (source) => builder.image(source);
