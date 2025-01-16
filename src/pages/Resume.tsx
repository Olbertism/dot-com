import { FC, useMemo, useState } from 'react';
import { ResumeSection } from '../components/ResumeSection.tsx';
import classNames from 'classnames';

export const Resume: FC = () => {
  const [contactButtonClicked, setContactButtonClicked] = useState(false);

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
        <h1 className={'md:hidden mx-auto leading-loose'}>resume</h1>
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
              logoPath={'../../tz_logo.png'}
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
            <div className={'flex flex-col justify-evenly basis-2/3 px-3'}>
              <h2 className={'mx-auto leading-loose'}>Albert Pichler</h2>
              <div className={'m-auto flex flex-col gap-2'}>
                <div className={'flex'}>
                  <div
                    className={classNames(
                      'm-auto w-[85%] relative infobox-area',
                      contactButtonClicked ? 'area-expand' : '',
                    )}
                  >
                    <button
                      className={
                        'border-black border-2 bg-white px-2 py-1 relative z-20'
                      }
                      onClick={() =>
                        setContactButtonClicked((prevState) => !prevState)
                      }
                    >
                      {`click to ${contactButtonClicked ? 'hide' : 'show'} contact information`}
                    </button>

                    <div
                      className={classNames(
                        'border-black border-b-2 border-l-2 border-r-2 px-2 py-1 absolute top-0 w-full infobox',
                        contactButtonClicked ? 'box-slide' : '',
                      )}
                    >
                      <p>
                        mail: {contactButtonClicked ? 'abcdefg@mail.com' : ''}
                      </p>
                      <p>phone: {contactButtonClicked ? '0000' : ''}</p>
                    </div>
                  </div>
                </div>
                <div className={'flex'}>
                  <a href={'#'} target={'_blank'} className={'m-auto'}>
                    <span>→</span> github portfolio
                  </a>
                </div>
                <div className={'flex'}>
                  <a href={'#'} target={'_blank'} className={'m-auto'}>
                    <span>→</span> linkedIn
                  </a>
                </div>
                <div>
                  <a className="relative after:bg-orange after:absolute after:h-[2px] after:w-0 after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer hover:no-underline">
                    Text you want to underline
                  </a>
                </div>
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
            'row-start-5 md:row-start-auto bg-orange border-black border-t-2 min-h-12'
          }
        />
      </div>
    </article>
  );
};
