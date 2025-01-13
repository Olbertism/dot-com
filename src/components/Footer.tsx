import { FC } from 'react';

export const Footer: FC = () => {
  return (
    <div
      className={
        'border-black border-t-2 md:border-t-0 md:border-l-2 basis-1/12 md:max-w-16 flex md:flex-col'
      }
    >
      <div
        className={
          'w-9 md:w-auto h-auto md:h-12 border-black border-r-2 md:border-r-0 md:border-b-2'
        }
      ></div>
      <div>
        <p>footer</p>
      </div>
    </div>
  );
};
