import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faHome,
  faLanguage,
  faLayerGroup,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router';
import { Slide, toast, ToastContainer } from 'react-toastify';
import { Footer } from './components/Footer.tsx';
import { NavBar } from './components/NavBar.tsx';
import { ToastMessage } from './components/ToastMessage.tsx';
import { Blog } from './pages/Blog.tsx';
import { Contact } from './pages/Contact.tsx';
import { LandingPage } from './pages/LandingPage.tsx';
import { Resume } from './pages/Resume.tsx';

library.add(faLayerGroup, faLanguage, faHome);

export const App = () => {
  // display toast on first load
  useEffect(() => {
    toast(ToastMessage, {
      className: 'border-2 border-black',
      position: 'bottom-right',
      transition: Slide,
    });
  }, []);

  return (
    <main
      className={
        'h-screen w-full text-black dark:text-dark-text dark:bg-black p-2 md:p-3'
      }
    >
      <div
        className={
          'h-full w-full bg-white dark:bg-dark-bg border-black dark:border-white border-2 flex flex-col md:flex-row'
        }
      >
        <div className={'flex md:flex-col h-[95%] md:h-full grow'}>
          <div
            className={
              'w-9 md:w-full h-full md:h-12 border-b-black dark:border-b-white md:border-b-2 border-r-2 md:border-r-0'
            }
          >
            <NavBar />
          </div>
          <div className={'h-full overflow-auto grow'}>
            <Routes>
              <Route path={'/*'} index element={<LandingPage />} />
              <Route path="resume" element={<Resume />} />
              <Route path="blog" element={<Blog />} />
              <Route path="contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
      <ToastContainer />
    </main>
  );
};

export default App;
