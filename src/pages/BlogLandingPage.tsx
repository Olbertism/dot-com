import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router';
import { getAllBlogPages } from '../util/directus';

export const BlogLandingPage: FC = () => {
  const [blogPosts, setBlogPosts] = useState<Record<string, any>[]>([]);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
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
    <article className={'md:h-full'}>
      <div className={'flex'}>
        <h1 className={'md:hidden mx-auto leading-loose text-3xl'}>blog</h1>
      </div>
      <div className={'p-2'}>
        <h1 className={'hidden md:block'}>blog</h1>
        <h2>posts</h2>
        {loading ? (
          <div>loading...</div>
        ) : fetchError ? (
          <div>error...</div>
        ) : (
          <div className="grid">
            {blogPosts.map((post) => {
              return (
                <Link to={post.slug}>
                  <div>{post.title}</div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </article>
  );
};
