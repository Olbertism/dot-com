import classNames from 'classnames';
import parse from 'html-react-parser';
import { createElement, FC, useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { layoutColor, orange } from '../util/colors';
import { getPage } from '../util/directus';

const createLayoutSection = (
  content: React.JSX.Element[],
  color: layoutColor,
) => {
  return (
    <div
      className={classNames(
        'content-section',
        'flex',
        'flex-wrap',
        'flex-col',
        'sm:flex-row',
        !color.blogRightAlign && 'sm:flex-row-reverse',
      )}
    >
      <div className="basis-2/3 p-3 border-t-2 border-black text-wrapper">
        {content}
      </div>
      <div
        className={classNames(
          'basis-1/3 min-h-16 border-t-2 border-black',
          color.twBgClassName,
        )}
      />
    </div>
  );
};

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

  const transformContents = useCallback((content: string | null) => {
    if (!content) return '';
    console.log(parse(content));
    const parsed = parse(content);
    if (!Array.isArray(parsed)) return parsed;
    const transformedContents: React.JSX.Element[] = [];
    let foundH2 = false;
    let currentH2Section: null | React.JSX.Element = null;
    let currentChildrenArray: React.JSX.Element[] = [];

    let currentColor: layoutColor = orange;

    parsed.forEach((element, i) => {
      if (element.type === 'h2') {
        if (currentH2Section) {
          const section = createLayoutSection(
            currentChildrenArray,
            currentColor,
          );

          currentChildrenArray = [];
          transformedContents.push(section);
          currentH2Section = null;
          currentColor = currentColor.next!; // assert non-null because null is only used in initialization
        }
        foundH2 = true;
        currentH2Section = element;
        currentChildrenArray.push(element);
      } else if (foundH2 && currentH2Section) {
        currentChildrenArray.push(element);
      } else {
        transformedContents.push(
          createElement(
            'div',
            { className: 'px-2 space-y-2 mb-2', key: `wrapper-${i}` },
            element,
          ),
        );
      }
    });

    if (currentChildrenArray.length > 0) {
      const section = createLayoutSection(currentChildrenArray, currentColor);
      currentChildrenArray = [];
      transformedContents.push(section);
    }

    console.log(transformedContents);
    return transformedContents;
  }, []);

  return (
    <div className={''}>
      {loading ? (
        <div>Loading...</div>
      ) : pageNotFound ? (
        <div>page not found</div>
      ) : !page ? (
        <div>unexpected error</div>
      ) : (
        <div>
          <div className="p-2 mb-2">
            <h1>{page.title}</h1>
          </div>
          <div className="flex flex-col">{transformContents(page.content)}</div>
        </div>
      )}
    </div>
  );
};
