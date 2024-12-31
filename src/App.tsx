import { useState } from 'react';
import { NavBar } from './components/NavBar.tsx';
import { Outlet, Route, Routes } from 'react-router';
import { Resume } from './pages/Resume.tsx';
import { Blog } from './pages/Blog.tsx';
import { Contact } from './pages/Contact.tsx';

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
        <div className={'flex md:flex-col h-[95%] grow'}>
          <div
            className={
              'md:w-full h-full md:h-12 border-b-black md:border-b-2 border-r-2 md:border-r-0'
            }
          >
            <NavBar />
          </div>
          <div className={'h-full p-2'}>
            <h1>olbertism</h1>
            <p>lorem ipsum</p>
            <Routes>
              <Route index element={<App />} />
              <Route path="resume" element={<Resume />} />
              <Route path="blog" element={<Blog />} />
              <Route path="contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
        <div
          className={
            'border-black border-t-2 md:border-t-0 md:border-l-2 basis-1/12'
          }
        >
          footer
        </div>
      </div>
    </main>
  );
}

export default App;
