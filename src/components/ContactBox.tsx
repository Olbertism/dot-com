import {
  faHandPointer,
  faMousePointer,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { FC, useState } from 'react';

export const ContactBox: FC = () => {
  const [contactButtonClicked, setContactButtonClicked] = useState(false);

  return (
    <div
      className={classNames(
        'w-full max-w-80 relative infobox-area',
        contactButtonClicked ? 'area-expand' : '',
      )}
    >
      <button
        className={
          'border-black border-2 bg-white px-2 py-1 relative z-20 text-sm md:text-base'
        }
        onClick={() =>
          setContactButtonClicked((prevState) => !prevState)
        }
      >
        <div className='flex gap-1'>
          <div className='basis-1/6 text-grey flex'>
            <FontAwesomeIcon icon={faHandPointer} className='md:hidden w-5 h-5 m-auto' />
            <FontAwesomeIcon icon={faMousePointer} className='hidden md:block w-5 h-5 m-auto' />
          </div>
          <div className='text-left hover:decoration-2 underline'>
            <span className='hidden md:inline'>click</span>
            <span className='md:hidden'>tap</span>
            {` to ${contactButtonClicked ? 'hide' : 'show'} contact information`}
          </div>
        </div>

      </button>
      <div
        className={classNames(
          'text-sm md:text-base border-black border-b-2 border-l-2 border-r-2 px-2 py-1 absolute top-0 w-full infobox',
          contactButtonClicked ? 'box-slide' : '',
        )}
      >
        <p>
          mail: {contactButtonClicked ? 'abcdefg@mail.com' : ''}
        </p>
        <p>phone: {contactButtonClicked ? '0000' : ''}</p>
      </div>
    </div>
  );
}