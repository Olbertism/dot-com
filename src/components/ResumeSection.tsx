import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import classNames from 'classnames';

export const ResumeSection: FC<ResumeSectionProps> = ({
  logoPath,
  faIconName,
  companyName,
  children,
  alignment,
}) => {
  return (
    <div
      className={classNames(
        'flex border-grey border-t-2 py-2',
        alignment === 'right' ? '2xl:justify-start' : '2xl:justify-end',
      )}
    >
      <div className={'flex 2xl:w-[66%]'}>
        <div className={'min-w-12 max-w-12 pt-2 pr-1'}>
          {logoPath ? (
            <img src={logoPath} alt={companyName + ' logo'} />
          ) : faIconName ? (
            <div className={'w-9 h-9 text-black'}>
              <FontAwesomeIcon
                className={'w-auto h-auto'}
                icon={faIconName as IconProp}
              />
            </div>
          ) : null}
        </div>
        <div className={'space-y-1 p-1'}>
          <h3>{companyName}</h3>
          {children}
        </div>
      </div>
    </div>
  );
};

interface ResumeSectionProps {
  logoPath?: string;
  faIconName?: IconProp | string;
  companyName: string;
  children: React.ReactNode;
  alignment?: 'left' | 'right';
}
