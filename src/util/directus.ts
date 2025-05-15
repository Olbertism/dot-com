import { createDirectus, readItems, rest } from '@directus/sdk';

console.log(import.meta.env.VITE_DIRECTUS_URL);
export const directus = createDirectus(
  `http://${import.meta.env.VITE_DIRECTUS_URL}`,
).with(rest());

export const getPage = async (slug: string) => {
  try {
    const pages = await directus.request(
      readItems('posts', {
        fields: [{ slug }],
      }),
    );
    return pages[0];
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    console.log('TODO');
  }
};

export const getAllBlogPages = async () => {
  try {
    const pages = await directus.request(readItems('posts'));
    return pages;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    console.log('TODO');
  }
};
