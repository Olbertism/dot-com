import classNames from 'classnames';
import parse from 'html-react-parser';
import { createElement, FC, useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { layoutColor, orange } from '../util/colors';
import {
  blockContent,
  blockObject,
  blogPostItem,
  getPage,
  isCodeBlockData,
  isHeadingBlockData,
  isNestedListBlockData,
  isTextBlockData,
} from '../util/directus';
import { createRandomString } from '../util/pseudo-random-string';

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

const parseBlock: (block: blockObject) => React.JSX.Element = (
  block: blockObject,
) => {
  if (block.type === 'header' && isHeadingBlockData(block.data)) {
    return createElement(
      `h${block.data.level}`,
      { key: block.id },
      block.data.text,
    );
  }

  if (block.type === 'paragraph' && isTextBlockData(block.data)) {
    return createElement('p', { key: block.id }, parse(block.data.text));
  }

  if (block.type === 'code' && isCodeBlockData(block.data)) {
    return createElement('div', { key: block.id }, block.data.code);
  }

  if (block.type === 'nestedlist' && isNestedListBlockData(block.data)) {
    return createElement(
      block.data.style === 'unordered' ? 'ul' : 'ol',
      { key: block.id },
      block.data.items.map((li, i) => {
        return createElement('li', { key: block.id + i.toString() }, [
          li.content,
          li.items.length > 0
            ? parseBlock({
                id: createRandomString(8),
                type: 'nestedlist',
                data: { style: block.data.style, items: li.items },
              })
            : null,
        ]);
      }),
    );
  }

  // Fallback
  return createElement(
    'div',
    { key: block.id ? block.id : createRandomString(8) },
    '',
  );
};

export const BlogContentPage: FC = () => {
  const [pageNotFound, setPageNotFound] = useState(false);
  const [page, setPage] = useState<blogPostItem | undefined>(undefined);
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

  // Used for WYSIWYG block contents to put them in proper layout
  const parseWysiwygContents = useCallback((content: string | null) => {
    if (!content) return '';
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
    return transformedContents;
  }, []);

  const parseBlockContents = useCallback((data: blockContent) => {
    const parsedBlockContents: React.JSX.Element[] = [];

    let currentH2Block: null | blockObject = null;

    // for layout section:
    let currentChildrenArray: React.JSX.Element[] = [];
    let currentColor: layoutColor = orange;

    data.blocks.forEach((block) => {
      if (
        block.type === 'header' &&
        isHeadingBlockData(block.data) &&
        block.data.level === 2
      ) {
        if (currentH2Block) {
          parsedBlockContents.push(
            createLayoutSection(currentChildrenArray, currentColor),
          );
          currentChildrenArray = [parseBlock(block)];
          currentColor = currentColor.next!;
        } else {
          currentH2Block = block;
          currentChildrenArray.push(parseBlock(block));
        }
      } else {
        currentChildrenArray.push(parseBlock(block));
      }
    });
    parsedBlockContents.push(
      createLayoutSection(currentChildrenArray, currentColor),
    );
    // console.log(parsedBlockContents);
    return parsedBlockContents;
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
          <div className="flex flex-col">
            {page.toggle_blocks
              ? parseBlockContents(page.blocks)
              : parseWysiwygContents(page.content)}
          </div>
        </div>
      )}
    </div>
  );
};
