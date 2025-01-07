import { FC } from 'react';

export const ResumeSection: FC<ResumeSectionProps> = ({
  logoPath,
  companyName,
  position,
  tenure,
  bulletPoints,
}) => {
  return (
    <div className={'flex border-grey border-t-2 py-2'}>
      <div className={'min-w-12 max-w-12 pt-2 pr-1'}>
        {logoPath ? <img src={logoPath} alt={companyName + ' logo'} /> : null}
      </div>
      <div className={'space-y-1 p-1'}>
        <h3>{companyName}</h3>
        <h4>{position}</h4>
        <p>{tenure}</p>
        <ul>
          {bulletPoints.map((bulletPoint) => {
            return <li>{bulletPoint}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

interface ResumeSectionProps {
  logoPath?: string;
  companyName: string;
  position: string;
  tenure: string;
  bulletPoints: string[];
}
