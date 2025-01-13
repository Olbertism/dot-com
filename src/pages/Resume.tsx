import { FC, useMemo } from 'react';
import { ResumeSection } from '../components/ResumeSection.tsx';

export const Resume: FC = () => {
  const ResumeSections3Binfra = useMemo(() => {
    return (
      <>
        <div>
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
        <div>
          <h4>software developer</h4>
          <p>2022/07 - 2022/10</p>
          <ul>
            <li>
              design and development of data conversion tools in python/qt
            </li>
          </ul>
        </div>
        <div>
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
        <div>
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
        <div>
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
        <div>
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
        <div>
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
        <div>
          <h4>introduction to computational thinking and data science</h4>
          <p>2020</p>
        </div>
        <div>
          <h4>introduction to computer science and programming using python</h4>
          <p>2020</p>
        </div>
      </>
    );
  }, []);

  const ResumeSectionCS50 = useMemo(() => {
    return (
      <>
        <div>
          <h4>cs50's introduction to computer science</h4>
          <p>2020</p>
        </div>
      </>
    );
  }, []);

  const ResumeSectionTech = useMemo(() => {
    return (
      <>
        <div>
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
        <div>
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
      <div className={'flex'}>
        <h1 className={'md:hidden mx-auto'}>resume</h1>
      </div>
      <div className="grid md:grid-cols-3">
        <div className="md:col-span-2">
          <div className={'p-2'}>
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
              logoPath={'../../traumzeugen_logo.png'}
              children={ResumeSectionTraumzeugen}
            />
          </div>
        </div>
        <div className={'row-start-1 md:row-start-auto bg-green min-h-12'}>
          <div className={'flex flex-row-reverse md:flex-col justify-evenly'}>
            <img
              className={'w-44 h-44 md:w-auto md:h-auto lg:max-w-80 md:mx-auto'}
              src={'../../me_sm.jpg'}
              alt={'resume picture of Albert Pichler'}
            />
            <div className={'flex flex-col justify-evenly basis-2/3'}>
              <h3 className={'mx-auto text-xl leading-loose'}>
                Albert Pichler
              </h3>
              <div className={'flex justify-evenly'}>
                <a href={'#'}>
                  <svg className={'w-12 h-12 text-black'} viewBox="0 0 72 72">
                    <g fill-rule="evenodd">
                      <path
                        className={'fill-black'}
                        d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z"
                      />
                      <path
                        d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z"
                        fill="#FFF"
                      />
                    </g>
                  </svg>
                </a>
                <a href={'#'}>
                  <svg
                    className={'w-12 h-12 text-black'}
                    viewBox="0 0 1024 1024"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                      transform="scale(64)"
                      className={'fill-black'}
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={'bg-blue border-black border-t-2 min-h-12'} />
        <div className="md:col-span-2 border-black border-t-2">
          <div className={'p-2'}>
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
        <div className="md:col-span-2 border-black border-t-2">
          <div className={'p-2'}>
            <div className={'2xl:flex 2xl:justify-end'}>
              <h2 className={'2xl:w-[66%]'}>other & trivia</h2>
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
            'row-start-5 md:row-start-auto bg-orange border-black border-t-2 min-h-12'
          }
        />
      </div>
    </article>
  );
};
