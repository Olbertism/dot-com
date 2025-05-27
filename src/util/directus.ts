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

export interface blockContent {
  time: number;
  version: string;
  blocks: blockObject[];
}

export interface blockObject {
  id: string;
  type: 'paragraph' | 'header' | 'nestedlist' | 'code';
  data: textBlockData | codeBlockData | headingBlockData | nestedListBlockData;
}

export type textBlockData = {
  text: string;
};

export type codeBlockData = {
  code: string;
};

export type headingBlockData = {
  text: string;
  level: number;
};

export type nestedListBlockData = {
  style: string;
  items: nestedListBlockDataItem[];
};

export type nestedListBlockDataItem = {
  content: string;
  items: nestedListBlockDataItem[];
};

export function isTextBlockData(data: unknown): data is textBlockData {
  return (
    typeof data === 'object' &&
    data !== null &&
    'text' in data &&
    typeof data.text === 'string'
  );
}

export function isCodeBlockData(data: unknown): data is codeBlockData {
  return (
    typeof data === 'object' &&
    data !== null &&
    'code' in data &&
    typeof data.code === 'string'
  );
}

export function isHeadingBlockData(data: unknown): data is headingBlockData {
  return (
    typeof data === 'object' &&
    data !== null &&
    'text' in data &&
    'level' in data &&
    typeof data.text === 'string' &&
    typeof data.level === 'number'
  );
}

export function isNestedListBlockData(
  data: unknown,
): data is nestedListBlockData {
  return (
    typeof data === 'object' &&
    data !== null &&
    'style' in data &&
    'items' in data &&
    typeof data.style === 'string' &&
    Array.isArray(data.items)
  );
}

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
  blocks: blockContent;
  toggle_blocks: boolean;
}
