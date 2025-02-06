import {
  faHandPointer,
  faMousePointer,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { FC, useState } from 'react';
import { mailArray, phoneArray } from '../util/obfuscators';

export const ContactBox: FC<ContactBoxProps> = ({ width }) => {
  const [contactButtonClicked, setContactButtonClicked] = useState(false);

  return (
    <div
      className={classNames(
        'w-full relative infobox-area h-full',
        contactButtonClicked ? 'area-expand' : '',
      )}
      style={width ? { width: width } : { maxWidth: '20rem' }}
    >
      <button
        className={
          'w-full min-h-16 md:min-h-20 border-black border-2 bg-white dark:bg-dark-bg px-2 md:py-1 relative z-20 text-xs sm:text-sm md:text-base cursor-pointer'
        }
        onClick={() =>
          setContactButtonClicked((prevState) => !prevState)
        }
      >
        <div className='flex gap-1'>
          <div className='basis-1/6 text-grey flex'>
            <FontAwesomeIcon icon={faHandPointer} className='md:hidden! w-5 h-5! m-auto' />
            <FontAwesomeIcon icon={faMousePointer} className='hidden! md:block! w-5 h-5! m-auto' />
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
          'text-xs sm:text-sm md:text-base border-black border-b-2 border-l-2 border-r-2 p-2 pt-3 sm:pt-1 md:pt-3 absolute top-0 w-full bg-white dark:bg-dark-bg space-y-2 infobox',
          contactButtonClicked ? 'box-slide' : '',
        )}
      >
        <p className={classNames(contactButtonClicked ? '' : 'text-white dark:text-bg-dark')}>
          {contactButtonClicked ? <a href={'mailto:' + mailArray.join('')}>{mailArray.join('')}</a> : 'mail'}
        </p>
        <p className={classNames(contactButtonClicked ? '' : 'text-white dark:text-bg-dark')}>
          {contactButtonClicked ? <a href={'tel:' + phoneArray.join('')}>{phoneArray.join('')}</a> : 'phone'}
        </p>
      </div>
    </div>
  );
}

interface ContactBoxProps {
  width?: number;
}