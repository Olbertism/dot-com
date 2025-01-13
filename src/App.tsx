import { NavBar } from './components/NavBar.tsx';
import { Route, Routes } from 'react-router';
import { Resume } from './pages/Resume.tsx';
import { Blog } from './pages/Blog.tsx';
import { Contact } from './pages/Contact.tsx';
import { Footer } from './components/Footer.tsx';
import { LandingPage } from './pages/LandingPage.tsx';

import { library } from '@fortawesome/fontawesome-svg-core';

import {
  fas,
  faLayerGroup,
  faLanguage,
} from '@fortawesome/free-solid-svg-icons';

library.add(fas, faLayerGroup, faLanguage);

function App() {
  return (
    <main
      className={'h-screen text-black flex justify-center items-center m-auto'}
    >
      <div
        className={
          'bg-white h-[96%] w-[98%] border-black border-2 flex flex-col md:flex-row'
        }
      >
        <div className={'flex md:flex-col h-[95%] md:h-full grow'}>
          <div
            className={
              'w-9 md:w-full h-full md:h-12 border-b-black md:border-b-2 border-r-2 md:border-r-0'
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
    </main>
  );
}

export default App;
