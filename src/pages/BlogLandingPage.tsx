import { FC, useEffect, useState } from 'react';
import { BlogLandingPageGrid } from '../components/BlogLandingPageGrid';
import { blogPostLandingPageItem, getAllBlogPages } from '../util/directus';

export const BlogLandingPage: FC = () => {
  const [blogPosts, setBlogPosts] = useState<blogPostLandingPageItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    if (!!import.meta.env.VITE_ENABLE_DIRECTUS) return;
    const fetchBlogPosts = async () => {
      setLoading(true);
      const posts = await getAllBlogPages();
      if (!posts) {
        setFetchError(true);
      } else {
        setBlogPosts(posts);
      }
      setLoading(false);
    };
    fetchBlogPosts();
  }, []);

  return (
    <>
      {!!import.meta.env.VITE_ENABLE_DIRECTUS ? (
        <article className={'md:h-full h-[95%]'}>
          <div className={'flex'}>
            <h1 className={'md:hidden mx-auto leading-loose text-3xl'}>blog</h1>
          </div>
          <div className={'md:p-2 h-full flex flex-col'}>
            <h1 className={'hidden md:block'}>blog</h1>
            <h2 className="border-b-2 border-black">posts</h2>
            {loading ? (
              <div>loading...</div>
            ) : fetchError ? (
              <div>error...</div>
            ) : (
              <BlogLandingPageGrid gridEntries={blogPosts} />
            )}
          </div>
        </article>
      ) : (
        <div>
          <p>Under Construction</p>
        </div>
      )}
    </>
  );
};
