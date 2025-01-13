import { FC } from 'react';

export const Contact: FC = () => {
  return (
    <article className={'md:h-full'}>
      <div className={'flex'}>
        <h1 className={'md:hidden mx-auto leading-loose'}>contact</h1>
      </div>
      <div className="grid md:grid-cols-3 md:h-full">
        <div className="md:col-span-2">
          <div className={'p-2'}>
            <div className={'2xl:flex 2xl:justify-end'}>
              <div className={'2xl:flex 2xl:flex-col 2xl:w-[66%]'}>
                <h1 className={'hidden md:block'}>contact</h1>
                <h2>work experience</h2>
              </div>
            </div>
          </div>
        </div>
        <div className={'row-start-1 md:row-start-auto bg-blue min-h-12'}>
          <div
            className={'flex flex-row-reverse md:flex-col justify-evenly'}
          ></div>
        </div>
      </div>
    </article>
  );
};
