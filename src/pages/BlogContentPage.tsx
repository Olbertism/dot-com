import parse from 'html-react-parser';
import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getPage } from '../util/directus';

export const BlogContentPage: FC = () => {
  const [pageNotFound, setPageNotFound] = useState(false);
  const [page, setPage] = useState<Record<string, any> | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const { blogPageSlug } = useParams();

  useEffect(() => {
    const fetchPage = async () => {
      if (!blogPageSlug) return;
      setLoading(true);
      const page = await getPage(blogPageSlug);
      if (!page) {
        setPageNotFound(true);
      } else {
        setPage(page);
      }
      setLoading(false);
    };
    fetchPage();
  }, [blogPageSlug]);

  return (
    <div className={'p-2'}>
      {loading ? (
        <div>Loading...</div>
      ) : pageNotFound ? (
        <div>page not found</div>
      ) : !page ? (
        <div>unexpected error</div>
      ) : (
        <div>
          <h1>{page.title}</h1>
          <div>{parse(page.content)}</div>
        </div>
      )}
    </div>
  );
};
