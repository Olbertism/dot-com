import { useState } from "react";

function App() {
  return (
    <main
      className={"h-screen text-black flex justify-center items-center m-auto"}
    >
      <div className={"bg-white h-[96%] w-[98%] border-black border-2"}>
        <div className={"flex md:flex-col h-[95%]"}>
          <div
            className={
              "md:w-full h-full md:h-12 border-b-black md:border-b-2 border-r-2 md:border-r-0"
            }
          >
            <nav
              className={"flex flex-col md:flex-row h-1/2 md:h-full md:w-1/2"}
            >
              <a
                className={
                  "h-full md:w-full w-9 flex flex-col justify-center border-black border-b-2 md:border-r-2 md:border-b-0 md:pl-1"
                }
                href="/"
              >
                <p className={"-rotate-90 md:rotate-0"}>resume</p>
              </a>
              <a
                className={
                  "h-full md:w-full w-9 flex flex-col justify-center border-black border-b-2 md:border-r-2 md:border-b-0 md:pl-1"
                }
                href="/about"
              >
                <p className={"-rotate-90 md:rotate-0"}>blog</p>
              </a>
              <a
                className={
                  "h-full md:w-full w-9 flex flex-col justify-center border-black border-b-2 md:border-b-0 md:border-r-2 md:pl-1"
                }
                href="/contact"
              >
                <p className={"-rotate-90 md:rotate-0"}>contact</p>
              </a>
            </nav>
          </div>
          <div>
            <h1>olbertism</h1>
            <div className="card"></div>
            <p className="read-the-docs">lorem ipsum</p>
          </div>
        </div>
        <div className={"border-black border-t-2"}>footer</div>
      </div>
    </main>
  );
}

export default App;
