import { FC } from 'react';

export const Blog: FC = () => {
  return (
    <article className={'md:h-full'}>
      <div className={'flex'}>
        <h1 className={'md:hidden mx-auto leading-loose text-3xl'}>blog</h1>
      </div>
      <div className={'p-2'}>
        <h1 className={'hidden md:block'}>blog</h1>
        <h3>under construction</h3>
      </div>
    </article>
  );
};
