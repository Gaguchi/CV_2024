// App.jsx
import React, { useState } from 'react';
import 'windi.css';
import ThreeScene from './main.jsx';

function App() {
    const [rotation, setRotation] = useState(0);

    const handleSliderChange = (event) => {
      setRotation(event.target.value);
    };

    return (
      <div className="font-sans text-gray-900 antialiased">
      <main class="dark:bg-gray-800 bg-white relative overflow-hidden h-screen">
    <header class="h-24 sm:h-32 flex items-center z-30 w-full">
        <div class="container mx-auto px-6 flex items-center justify-between">
            <div class="uppercase text-gray-800 dark:text-white font-black text-3xl">
                Watch.ME
            </div>
            <div class="flex items-center">
                <nav class="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden">
                    <a href="#" class="py-2 px-6 flex">
                        Home
                    </a>
                    <a href="#" class="py-2 px-6 flex">
                        Watch
                    </a>
                    <a href="#" class="py-2 px-6 flex">
                        Product
                    </a>
                    <a href="#" class="py-2 px-6 flex">
                        Contact
                    </a>
                    <a href="#" class="py-2 px-6 flex">
                        Carrer
                    </a>
                </nav>
                <button class="lg:hidden flex flex-col ml-4">
                    <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                    </span>
                    <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                    </span>
                    <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                    </span>
                </button>
            </div>
        </div>
    </header>
    <div class="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
        <div class="container mx-auto px-6 flex relative py-16">
            <div class="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                <span class="w-20 h-2 bg-gray-800 dark:bg-white mb-12">
                </span>
                <h1 class="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                    Be on
                    <span class="text-5xl sm:text-7xl">
                        Time
                    </span>
                </h1>
                <p class="text-sm sm:text-base text-gray-700 dark:text-white">
                    Dimension of reality that makes change possible and understandable. An indefinite and homogeneous environment in which natural events and human existence take place.
                </p>
            <input type="range" min="0" max="2" step="0.01" value={rotation} onChange={handleSliderChange} />
                <div class="flex mt-8">
                    <a href="#" class="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400">
                        Get started
                    </a>
                    <a href="#" class="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md">
                        Read more
                    </a>
                </div>
            </div>
            <div class="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
            <ThreeScene rotation={rotation * Math.PI} />
            </div>
        </div>
    </div>
</main>
          <section className="flex flex-col justify-center max-w-6xl min-h-screen px-10 py-10 mx-auto sm:px-16">
            <div class="flex flex-wrap -mx-4">
              <div class="relative w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/4 flex flex-col">
                <div class="absolute top-0 left-0 transform -translate-x-4 -translate-y-1/2 z-10 w-20 h-20 bg-orange-500 rounded-full"></div>
                  <img src="https://source.unsplash.com/Lki74Jj7H-U/400x300" alt="Card img" class="object-cover object-center w-full h-48" />
                  <div class="flex flex-grow">
                      <div class="triangle"></div>
                      <div class="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400 text">
                          <div>
                              <a href="#"
                                  class="inline-block mb-4 text-xs font-bold capitalize border-b-2 border-blue-600 hover:text-blue-600">Reliable
                                  Schemas</a>
                              <a href="#"
                                  class="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-blue-600">
                                  What Zombies Can Teach You About Food
                              </a>
                              <p class="mb-4">
                                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla delectus corporis commodi
                                  aperiam, amet cupiditate?
                              </p>
                          </div>
                          <div>
                              <a href="#"
                                  class="inline-block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600">Read
                                  More </a>
                          </div>
                      </div>
                  </div>
              </div>

              <div class="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/4 flex flex-col">
                  <img
                  src="https://source.unsplash.com/L9_6GOv40_E/400x300"
                  alt="Card img"
                  class="object-cover object-center w-full h-48"
                />
                  <div class="flex flex-grow">
                      <div class="triangle"></div>
                      <div class="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400">
                          <div>
                              <a href="#"
                                  class="inline-block mb-4 text-xs font-bold capitalize border-b-2 border-blue-600 hover:text-blue-600">Client-based
                                  Adoption</a>
                              <a href="#"
                                  class="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-blue-600">
                                  Old School Art
                              </a>
                              <p class="mb-4">
                                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla delectus.
                              </p>
                          </div>
                          <div>
                              <a href="#"
                                  class="inline-block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600">Read
                                  More </a>
                          </div>
                      </div>
                  </div>
              </div>

              <div class="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/4 flex flex-col">
                  <img
                  src="https://source.unsplash.com/7JX0-bfiuxQ/400x300"
                  alt="Card img"
                  class="object-cover object-center w-full h-48"
                />
                  <div class="flex flex-grow">
                      <div class="triangle"></div>
                      <div class="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400">
                          <div>
                              <a href="#"
                                  class="inline-block mb-4 text-xs font-bold capitalize border-b-2 border-blue-600 hover:text-blue-600">Intellectual
                                  Capital</a>
                              <a href="#"
                                  class="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-blue-600">
                                  5 Things To Do About Rain
                              </a>
                              <p class="mb-4">
                                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, neque. Eius, ea possimus.
                              </p>
                          </div>
                          <div>
                              <a href="#"
                                  class="inline-block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600">Read
                                  More </a>
                          </div>
                      </div>
                  </div>
              </div>
              
              <div class="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/4 flex flex-col">
                  <img
                  src="https://source.unsplash.com/7JX0-bfiuxQ/400x300"
                  alt="Card img"
                  class="object-cover object-center w-full h-48"
                />
                  <div class="flex flex-grow">
                      <div class="triangle"></div>
                      <div class="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400">
                          <div>
                              <a href="#"
                                  class="inline-block mb-4 text-xs font-bold capitalize border-b-2 border-blue-600 hover:text-blue-600">Intellectual
                                  Capital</a>
                              <a href="#"
                                  class="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-blue-600">
                                  5 Things To Do About Rain
                              </a>
                              <p class="mb-4">
                                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, neque. Eius, ea possimus.
                              </p>
                          </div>
                          <div>
                              <a href="#"
                                  class="inline-block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600">Read
                                  More </a>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
          </section>
      </div>
    );
  }
  

export default App;