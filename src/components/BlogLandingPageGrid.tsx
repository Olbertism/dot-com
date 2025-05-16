import classNames from 'classnames';
import { FC, useCallback } from 'react';
import { Link } from 'react-router';

export const BlogLandingPageGrid: FC<BlogLandingPageGridProps> = ({
  gridEntries,
}) => {
  const GRIDCOLS = 3;
  const createGrid = useCallback(() => {
    const gridJSXArray = [];

    // It is necessary to include the amount of empty tiles in the length,
    // otherwise computations with the length will be erroneous.
    const arrayLen =
      gridEntries.length + Math.ceil(gridEntries.length / GRIDCOLS);

    // Edge-Case handling first: If there are so few items, that we only have one row
    if (gridEntries.length < GRIDCOLS) {
      gridEntries.forEach((entry, i) => {
        gridJSXArray.push(
          <div key={`grid-element-${i}`}>
            <Link to={entry.slug}>
              <div>{entry.title}</div>
            </Link>
          </div>,
        );
      });

      gridJSXArray.push(
        <div
          key={'grid-empty-tile'}
          className={classNames(
            'bg-orange border-b-2 border-black sm:row-start-auto',
            gridEntries.length % GRIDCOLS === 1 && 'col-span-2',
          )}
        />,
      );
    } else {
      // Place the empty blocks between the links according to 3-col layout
      let currentArrayIndex = 0;
      for (let i = 0; i < Math.ceil(arrayLen / GRIDCOLS); i++) {
        for (let j = 0; j < GRIDCOLS; j++) {
          if (!gridEntries[currentArrayIndex]) break;
          // At certain positions in the grid, empty tiles are added
          if ((i % 2 === 0 && j === 2) || (i % 2 !== 0 && j === 0)) {
            gridJSXArray.push(
              <div
                className={classNames(
                  'border-b-2 border-black sm:row-start-auto',
                  j === 2 && 'row-start-1 bg-orange',
                  j === 0 && 'bg-green',
                )}
                key={`grid-element-empty-${currentArrayIndex}-${j}`}
              />,
            );
          } else {
            gridJSXArray.push(
              <div
                className={
                  'border-b-2 border-black p-2 h-full hover:bg-black/25'
                }
                key={`grid-element-${currentArrayIndex}`}
              >
                <Link
                  to={gridEntries[currentArrayIndex].slug}
                  className="w-full h-full"
                >
                  <div className="sm:h-full">
                    {gridEntries[currentArrayIndex].title}
                  </div>
                </Link>
              </div>,
            );
            currentArrayIndex += 1;
          }
        }
      }
    }

    return gridJSXArray;
  }, [gridEntries]);

  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-full h-full">
      {createGrid()}
    </div>
  );
};

interface BlogLandingPageGridProps {
  gridEntries: Record<string, any>[];
}
