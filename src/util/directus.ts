import { createDirectus, readItems, rest } from '@directus/sdk';

console.log(import.meta.env.VITE_DIRECTUS_URL);
export const directus = createDirectus(
  `http://${import.meta.env.VITE_DIRECTUS_URL}`,
).with(rest());

export const getPage = async (slug: string) => {
  try {
    const pages = await directus.request(
      readItems('posts', {
        filter: {
          slug: {
            _eq: slug,
          },
        },
      }),
    );
    return pages[0] as blogPostItem;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    console.log('TODO');
  }
};

export const getAllBlogPages = async () => {
  try {
    const pages = await directus.request(
      readItems('posts', {
        filter: { status: { _eq: 'published' } },
        sort: ['-date_created'],
        fields: ['id', 'title', 'date_created', 'slug', 'publish_date'],
      }),
    );
    return pages as blogPostLandingPageItem[];
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    console.log('TODO');
  }
};

export interface blogPostLandingPageItem {
  id: number;
  title: string;
  slug: string;
  date_created: string;
  publish_date: string | null;
}

export interface blogPostItem {
  id: number;
  status: string;
  sort: number | null;
  user_created: string;
  date_created: string;
  user_updated: string;
  date_updated: string;
  slug: string;
  title: string;
  content: string | null;
  image: string | null;
  publish_date: string | null;
}
