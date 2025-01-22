import { FC } from 'react';
import { Link } from 'react-router';

export const LandingPage: FC = () => {
  return (
    <article className='h-full'>
      <div className="grid md:grid-cols-3 h-full">
        <div className="md:col-span-2 bg-orange dark:bg-dark-orange min-h-[40%] flex">
          <div className={'p-2 w-full'}>
            <div className={'2xl:flex 2xl:justify-end h-full'}>
              <div className={'flex flex-col 2xl:w-[66%]  h-full'}>
                <div className='basis-4/5 flex'>
                  <h1 className={'lg:text-8xl md:text-7xl text-5xl text-center m-auto'}>&ldquo;olbert•ism&rdquo;</h1>
                </div>
                <div className='flex flex-col'>
                  <p className='md:text-end'><span className='italic'>noun</span> [u]</p>
                  <p className='md:text-end'><span>/ˈɒlbətːɪzᵊm/</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={'min-h-12'}>
          <div
            className={'flex h-full'}
          >
            <div className={'p-2 md:my-auto w-full'}>
              <ol className='list-decimal list-inside text-lg leading-relaxed space-y-3'>
                <li>a personal webpage from a guy called Albert</li>
                <li>the one true answer to everything, next to 42</li>
                <li>hogwash and hubris</li>
              </ol>
            </div>
          </div>
        </div>
        <div className="flex border-black dark:border-white border-t-2 md:border-t-0">
          <Link to='/resume' className='w-full flex hover:text-grey dark:hover:text-white'>
            <div className='m-auto'>
              <h2 className='text-bold'>CV</h2>
            </div>
          </Link>
        </div>
        <div className="bg-blue dark:bg-dark-blue min-h-[40%] flex">
          <Link to='/blog' className='w-full flex hover:text-white'>
            <div className='m-auto'>
              <h2 className='text-bold'>latest post</h2>
            </div>
          </Link>
        </div>
        <div className="bg-green dark:bg-dark-green min-h-[40%] flex">
          <Link to='contact' className='w-full flex hover:text-white'>
            <div className='m-auto'>
              <h2 className='text-bold'>contact</h2>
            </div>
          </Link>

        </div>
      </div>
    </article>);
};
