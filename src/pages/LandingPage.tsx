import { FC } from 'react';

export const LandingPage: FC = () => {
  return (
    <article className='h-full'>
      <div className="grid md:grid-cols-3 h-full">
        <div className="md:col-span-2 bg-orange min-h-[40%] flex">
          <div className={'p-2 my-auto w-full'}>
            <div className={'2xl:flex 2xl:justify-end'}>
              <div className={'2xl:flex 2xl:flex-col 2xl:w-[66%] '}>
                <h1 className={'lg:text-8xl md:text-7xl text-6xl text-center'}>&ldquo;olbert•ism&rdquo;</h1>
                <p><span className='italic'>noun</span> [u]</p>
              </div>
            </div>
          </div>
        </div>
        <div className={'min-h-12'}>
          <div
            className={'flex h-full'}
          >
            <div className={'p-2 md:my-auto w-full h-[60%]'}>
              <div>1. a personal webpage from a guy called Albert</div>
              <div>2. the one true answer to everything, next to 42</div>
              <div>3. hogwash</div>
            </div>
          </div>
        </div>
        <div className="flex border-black border-t-2 md:border-t-0">
          <div className='m-auto'>
            <h2 className='text-bold'>CV</h2>
          </div>
        </div>
        <div className="bg-blue min-h-[40%] flex">
          <div className='m-auto'>
            <h2 className='text-bold'>latest post</h2>
          </div>
        </div>
        <div className="bg-green min-h-[40%] flex">
          <div className='m-auto'>
            <h2 className='text-bold'>contact</h2>
          </div>
        </div>
      </div>
    </article>);
};
