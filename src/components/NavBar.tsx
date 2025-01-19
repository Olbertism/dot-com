import { FC } from 'react';
import { NavLink } from 'react-router';

export const NavBar: FC = () => {
  return (
    <nav className={'flex flex-col md:flex-row h-1/2 md:h-12 md:w-1/2 xl:w-1/3'}>
      <NavLink
        to="resume"
        className={({ isActive }) =>
          (isActive ? 'active bg-orange dark:bg-dark-orange ' : '') +
          'hover:bg-orange dark:hover:bg-dark-orange h-full md:h-[calc(3rem-2px)] md:w-full w-[calc(2.25rem-2px)] flex flex-col justify-end md:justify-center border-black dark:border-white border-b-2 md:border-r-2 md:border-b-0 md:pl-1'
        }
      >
        <p className={'-rotate-90 md:rotate-0 pl-3'}>resume</p>
      </NavLink>

      <NavLink
        to="blog"
        className={({ isActive }) =>
          (isActive ? 'active bg-blue dark:bg-dark-blue ' : '') +
          'hover:bg-blue dark:hover:bg-dark-blue h-full md:h-[calc(3rem-2px)] md:w-full w-[calc(2.25rem-2px)] flex flex-col justify-end md:justify-center border-black dark:border-white border-b-2 md:border-r-2 md:border-b-0 md:pl-1'
        }
      >
        <p className={'-rotate-90 md:rotate-0 pl-3'}>blog</p>
      </NavLink>

      <NavLink
        to="contact"
        className={({ isActive }) =>
          (isActive ? 'active bg-green dark:bg-dark-green ' : '') +
          'hover:bg-green dark:hover:bg-dark-green h-full md:h-[calc(3rem-2px)] md:w-full w-[calc(2.25rem-2px)] flex flex-col justify-end md:justify-center border-black dark:border-white border-b-2 md:border-b-0 md:border-r-2 md:pl-1'
        }
      >
        <p className={'-rotate-90 md:rotate-0 pl-3'}>contact</p>
      </NavLink>
    </nav>
  );
};
