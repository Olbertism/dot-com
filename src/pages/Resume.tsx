import { FC } from 'react';
import { ResumeSection } from '../components/ResumeSection.tsx';

export const Resume: FC = () => {
  return (
    <article>
      <div className="grid grid-cols-3">
        <div className="col-span-2">
          <div className={'p-2'}>
            <h1>resume</h1>
            <h2>work experience</h2>
            <ResumeSection
              logoPath={'../../public/3b_logo.png'}
              companyName={'3BInfra'}
              position={'software developer'}
              tenure={'2022/11 - 2025/01'}
              bulletPoints={[
                'setting up a directus headless cms instance and creating a front end for it',
                'prototyping micro front ends based on single-spa',
                'working with legacy code and legacy frameworks like jquery, require.js, backbone.js...',
                'defining internal front end scaffolding guidelines based on react, vite, tailwind css and zustand global state manager',
                'integrating custom front end solutions into third-party environments',
              ]}
            />
            <ResumeSection
              logoPath={'../../public/nexxar_logo.jpg'}
              companyName={'nexxar'}
              position={'software developer'}
              tenure={'2022/07 - 2022/10'}
              bulletPoints={[
                'design and development of data conversion tools in python/qt',
              ]}
            />
          </div>
        </div>
        <div className={'bg-green'} />
        <div className={'bg-blue border-black border-t-2'} />
        <div className="col-span-2 border-black border-t-2">
          <div className={'p-2'}>
            <h2>education</h2>
            <ResumeSection
              logoPath={'../../public/univie_logo.jpg'}
              companyName={'University of Vienna'}
              position={'BA + MA slavonic studies'}
              tenure={'2010/10 - 2017/10'}
              bulletPoints={[
                "Master's thesis: Fairytale and mythological elements in the later works of E. N. Čirikov",
              ]}
            />
            <ResumeSection
              logoPath={'../../public/upleveled_logo.jpg'}
              companyName={'UpLeveled'}
              position={'full stack web development bootcamp'}
              tenure={'2022/04 - 2022/07'}
              bulletPoints={[
                'Tech stack and tools covered: HTML, CSS, JavaScript, React, TypeScript, Next.js, Node.js, REST API, GraphQL, PostgreSQL, GitHub, Figma, Slack, as well as fundamentals of UX/UI design, Scrum and Agile methodologies.',
                'Final Project: Delphy - Your fact check assistant',
              ]}
            />
          </div>
        </div>
        <div className="col-span-2 border-black border-t-2">
          <div className={'p-2'}>
            <h2>trivia</h2>
          </div>
        </div>
        <div className={'bg-orange border-black border-t-2'} />
        <p>a</p>
      </div>
    </article>
  );
};
