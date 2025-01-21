import { FC, useMemo } from 'react';
import { ContactBox } from '../components/ContactBox.tsx';
import { ResumeSection } from '../components/ResumeSection.tsx';

export const Resume: FC = () => {

  const ResumeSections3Binfra = useMemo(() => {
    return (
      <>
        <div className='space-y-1'>
          <h4>software developer</h4>
          <p>2022/11 - 2025/01</p>
          <ul>
            <li>
              setting up a directus headless cms instance and creating a front
              end for it
            </li>
            <li>prototyping micro front ends based on single-spa</li>
            <li>
              working with legacy code and legacy frameworks like jquery,
              require.js, backbone.js...
            </li>
            <li>
              defining internal front end scaffolding guidelines based on react,
              vite, tailwind css and zustand global state manager
            </li>
            <li>
              integrating custom front end solutions into third-party
              environments
            </li>
          </ul>
        </div>
      </>
    );
  }, []);

  const ResumeSectionsNexxar = useMemo(() => {
    return (
      <>
        <div className='space-y-1'>
          <h4>software developer</h4>
          <p>2022/07 - 2022/10</p>
          <ul>
            <li>
              design and development of data conversion tools in python/qt
            </li>
          </ul>
        </div>
        <div className='space-y-1'>
          <h4>senior project manager</h4>
          <p>2021/01 - 2022/07</p>
          <ul>
            <li>development of new internal work tools</li>
            <li>
              conceptualisation and consulting of yearly financial report
              publications
            </li>
          </ul>
        </div>
        <div className='space-y-1'>
          <h4>project manager</h4>
          <p>2017/10 - 2021/01</p>
          <ul>
            <li>concept creation for financial reports</li>
            <li>organisation of project teams</li>
            <li>client communication</li>
          </ul>
        </div>
      </>
    );
  }, []);

  const ResumeSectionsUnivie = useMemo(() => {
    return (
      <>
        <div className='space-y-1'>
          <h4>BA + MA slavonic studies</h4>
          <p>2010/10 - 2017/10</p>
          <ul>
            <li>
              Master's thesis: Fairytale and mythological elements in the later
              works of E. N. Čirikov
            </li>
          </ul>
        </div>
      </>
    );
  }, []);

  const ResumeSectionUpleveled = useMemo(() => {
    return (
      <>
        <div className='space-y-1'>
          <h4>full stack web development bootcamp</h4>
          <p>2022/04 - 2022/07</p>
          <ul>
            <li>
              Tech stack and tools covered: HTML, CSS, JavaScript, React,
              TypeScript, Next.js, Node.js, REST API, GraphQL, PostgreSQL,
              GitHub, Figma, Slack, as well as fundamentals of UX/UI design,
              Scrum and Agile methodologies
            </li>
            <li>Final Project: Delphy - Your fact check assistant</li>
          </ul>
        </div>
      </>
    );
  }, []);

  const ResumeSectionTraumzeugen = useMemo(() => {
    return (
      <>
        <div className='space-y-1'>
          <h4>video creation and editing (self-employed)</h4>
          <p>2017/11 - 2018/10</p>
          <ul>
            <li>
              recording, editing, and mastering of wedding and other personal
              videos
            </li>
          </ul>
        </div>
      </>
    );
  }, []);

  const ResumeSectionMIT = useMemo(() => {
    return (
      <>
        <div className='space-y-1'>
          <h4>introduction to computational thinking and data science</h4>
          <p>2020</p>
        </div>
        <div className='space-y-1'>
          <h4>introduction to computer science and programming using python</h4>
          <p>2020</p>
        </div>
      </>
    );
  }, []);

  const ResumeSectionCS50 = useMemo(() => {
    return (
      <>
        <div className='space-y-1'>
          <h4>cs50's introduction to computer science</h4>
          <p>2020</p>
        </div>
      </>
    );
  }, []);

  const ResumeSectionTech = useMemo(() => {
    return (
      <>
        <div className='space-y-1'>
          <ul>
            <li>
              javascript, typescript, react, node, python, c#, html+css,
              tailwindcss, sql, git, jira, confluence, agile methods
            </li>
          </ul>
        </div>
      </>
    );
  }, []);

  const ResumeSectionLanguages = useMemo(() => {
    return (
      <>
        <div className='space-y-1'>
          <ul>
            <li>german - native</li>
            <li>english - fluent</li>
            <li>russian - fluent</li>
          </ul>
        </div>
      </>
    );
  }, []);

  return (
    <article className={'h-full'}>
      <div className={'flex border-black dark:border-white border-b-2 md:hidden'}>
        <h1 className={'md:hidden mx-auto leading-loose text-3xl'}>resume</h1>
      </div>
      <div className="grid md:grid-cols-3 xl:grid-cols-4">
        <div className="md:col-span-2 xl:col-span-3">
          <div className={'p-2 xl:px-4'}>
            <div className={'2xl:flex 2xl:justify-end'}>
              <div className={'2xl:flex 2xl:flex-col 2xl:w-[66%]'}>
                <h1 className={'hidden md:block'}>resume</h1>
                <h2>work experience</h2>
              </div>
            </div>

            <ResumeSection
              logoPath={'../../3b_logo.png'}
              companyName={'3BInfra'}
              children={ResumeSections3Binfra}
            />
            <ResumeSection
              logoPath={'../../nexxar_logo.jpg'}
              companyName={'nexxar'}
              children={ResumeSectionsNexxar}
            />
            <ResumeSection
              companyName={'traumzeugen'}
              logoPath={'../../tz_logo.png'}
              children={ResumeSectionTraumzeugen}
            />
          </div>
        </div>
        <div className={'row-start-1 md:row-start-auto bg-green dark:bg-dark-green min-h-12'}>
          <div className={'flex flex-row-reverse md:flex-col border-black dark:border-white border-b-2 md:border-b-0'}>
            <div className='basis-2/5 lg:flex lg:border-black lg:dark:border-white lg:border-b-2'>

              <picture className={'md:w-auto md:h-auto  lg:max-w-80 md:mx-auto lg:border-black lg:border-r-2'}>
                <source media="(max-width: 480px)" srcSet="me-248w.jpg" />
                <source media="(min-width: 481px)" srcSet="me-300w.jpg" />
                <source media="(min-width: 640px)" srcSet="me-400w.jpg" />
                <source media="(min-width: 768px)" srcSet="me-400w.jpg" />
                <source media="(min-width: 1024px)" srcSet="me-300w.jpg" />
                <img src="me-400w.jpg" alt="Resume picture of Albert Pichler" />
              </picture>

              <div className='hidden lg:block lg:basis-2/3 lg:grow lg:bg-blue lg:dark:bg-dark-blue' />
            </div>

            <div className={'flex flex-col justify-evenly basis-2/3 px-3 py-2 xl:py-3 md:gap-2 xl:gap-4'}>
              <h2 className={'mx-auto sm:leading-loose text-lg sm:text-xl md:text-2xl xl:text-3xl'}>Albert Pichler</h2>
              <div className={'m-auto flex flex-col gap-2 md:gap-3'}>
                <div className={'md:px-3'}>
                  <ContactBox />
                </div>
                <div className={'flex'}>
                  <a href={'https://github.com/Olbertism/'} target={'_blank'} rel='noopener' className={'m-auto hover:decoration-2 text-xs sm:text-sm md:text-base'}>
                    <span>→</span> github portfolio
                  </a>
                </div>
                <div className={'flex'}>
                  <a href={'https://www.linkedin.com/in/albert-pichler/'} rel='noopener' target={'_blank'} className={'m-auto hover:decoration-2 text-xs sm:text-sm md:text-base'}>
                    <span>→</span> linkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={'bg-blue dark:bg-dark-blue border-black border-t-2 min-h-12'} />
        <div className="md:col-span-2 xl:col-span-3 border-black border-t-2">
          <div className={'p-2 xl:px-4'}>
            <h2>education</h2>
            <ResumeSection
              logoPath={'../../univie_logo.jpg'}
              companyName={'University of Vienna'}
              children={ResumeSectionsUnivie}
              alignment={'right'}
            />
            <ResumeSection
              logoPath={'../../upleveled_logo.jpg'}
              companyName={'UpLeveled'}
              children={ResumeSectionUpleveled}
              alignment={'right'}
            />
            <ResumeSection
              logoPath={'../../mitx_logo.jpg'}
              companyName={'MITx'}
              children={ResumeSectionMIT}
              alignment={'right'}
            />
            <ResumeSection
              logoPath={'../../cs50_logo.jpg'}
              companyName={'Harvard CS50x'}
              children={ResumeSectionCS50}
              alignment={'right'}
            />
          </div>
        </div>
        <div className="md:col-span-2  xl:col-span-3 border-black border-t-2">
          <div className={'p-2 xl:px-4'}>
            <div className={'2xl:flex 2xl:justify-end'}>
              <h2 className={'2xl:w-[66%]'}>other &amp; trivia</h2>
            </div>
            <ResumeSection
              faIconName={'fa-solid fa-layer-group'}
              companyName={'tech stack & tools'}
              children={ResumeSectionTech}
            />
            <ResumeSection
              faIconName={'fa-solid fa-language'}
              companyName={'languages'}
              children={ResumeSectionLanguages}
            />
          </div>
        </div>
        <div
          className={
            'row-start-5 md:row-start-auto bg-orange dark:bg-dark-orange border-black border-t-2 min-h-12'
          }
        />
      </div>
    </article>
  );
};
