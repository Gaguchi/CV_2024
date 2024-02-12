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
      <main className="dark:bg-gray-800 bg-white relative overflow-hidden">
        <header className="h-24 sm:h-32 flex items-center z-30 w-full">
          <div className="container mx-auto px-6 flex items-center justify-between">
            <div className="uppercase text-gray-800 dark:text-white font-black text-3xl">
              Watch.ME
            </div>
            <div className="flex items-center">
              <nav className="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden">
                <a href="#" className="py-2 px-6 flex">
                  Home
                </a>
                <a href="#" className="py-2 px-6 flex">
                  Watch
                </a>
                <a href="#" className="py-2 px-6 flex">
                  Product
                </a>
                <a href="#" className="py-2 px-6 flex">
                  Contact
                </a>
                <a href="#" className="py-2 px-6 flex">
                  Carrer
                </a>
              </nav>
              <button className="lg:hidden flex flex-col ml-4">
                <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                </span>
                <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                </span>
                <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                </span>
              </button>
            </div>
          </div>
        </header>
    <div className="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
        <div className="container mx-auto px-6 flex  flex-wrap-reverse relative py-16">
            <div className="xs:w-full sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12">
                </span>
                <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                    Be on
                    <span className="text-5xl sm:text-7xl">
                        Time
                    </span>
                </h1>
                <p className="text-sm sm:text-base text-gray-700 dark:text-white">
                    Dimension of reality that makes change possible and understandable. An indefinite and homogeneous environment in which natural events and human existence take place.
                </p>
            <input type="range" min="0" max="2" step="0.01" value={rotation} onChange={handleSliderChange} />
                <div className="flex mt-8">
                    <a href="#" className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400">
                        Get started
                    </a>
                    <a href="#" className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md">
                        Read more
                    </a>
                </div>
            </div>
            <div className="xs:w-1/3 sm:w-1/3 lg:w-3/5 relative">
                <ThreeScene className="h-full" rotation={rotation * Math.PI} />
            </div>
        </div>
    </div>
</main>
          <section className="flex flex-col justify-center max-w-6xl min-h-screen px-10 py-10 mx-auto sm:px-16">
            <div className="flex flex-wrap -mx-4">
              <div className="relative w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/4 flex flex-col">
                <div className="absolute top-0 left-0 transform -translate-x-4 -translate-y-1/2 z-10 w-20 h-20 bg-orange-500 rounded-full"></div>
                  <img src="https://source.unsplash.com/Lki74Jj7H-U/400x300" alt="Card img" className="object-cover object-center w-full h-48" />
                  <div className="flex flex-grow">
                      <div className="triangle"></div>
                      <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400 text">
                          <div>
                              <a href="#"
                                  className="inline-block mb-4 text-xs font-bold capitalize border-b-2 border-blue-600 hover:text-blue-600">Reliable
                                  Schemas</a>
                              <a href="#"
                                  className="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-blue-600">
                                  What Zombies Can Teach You About Food
                              </a>
                              <p className="mb-4">
                                  Lorem ipsum dolor,?
                              </p>
                          </div>
                          <div>
                              <a href="#"
                                  className="inline-block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600">Read
                                  More </a>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/4 flex flex-col">
                  <img
                  src="https://source.unsplash.com/L9_6GOv40_E/400x300"
                  alt="Card img"
                  className="object-cover object-center w-full h-48"
                />
                  <div className="flex flex-grow">
                      <div className="triangle"></div>
                      <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400">
                          <div>
                              <a href="#"
                                  className="inline-block mb-4 text-xs font-bold capitalize border-b-2 border-blue-600 hover:text-blue-600">Client-based
                                  Adoption</a>
                              <a href="#"
                                  className="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-blue-600">
                                  Old School Art
                              </a>
                              <p className="mb-4">
                                  Lorem ipsum dolor, .
                              </p>
                          </div>
                          <div>
                              <a href="#"
                                  className="inline-block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600">Read
                                  More </a>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/4 flex flex-col">
                  <img
                  src="https://source.unsplash.com/7JX0-bfiuxQ/400x300"
                  alt="Card img"
                  className="object-cover object-center w-full h-48"
                />
                  <div className="flex flex-grow">
                      <div className="triangle"></div>
                      <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400">
                          <div>
                              <a href="#"
                                  className="inline-block mb-4 text-xs font-bold capitalize border-b-2 border-blue-600 hover:text-blue-600">Intellectual
                                  Capital</a>
                              <a href="#"
                                  className="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-blue-600">
                                  5 Things To Do About Rain
                              </a>
                              <p className="mb-4">
                                  Lorem ipsum dolor sit amet.
                              </p>
                          </div>
                          <div>
                              <a href="#"
                                  className="inline-block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600">Read
                                  More </a>
                          </div>
                      </div>
                  </div>
              </div>
              
              <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/4 flex flex-col">
                  <img
                  src="https://source.unsplash.com/7JX0-bfiuxQ/400x300"
                  alt="Card img"
                  className="object-cover object-center w-full h-48"
                />
                  <div className="flex flex-grow">
                      <div className="triangle"></div>
                      <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400">
                          <div>
                              <a href="#"
                                  className="inline-block mb-4 text-xs font-bold capitalize border-b-2 border-blue-600 hover:text-blue-600">Intellectual
                                  Capital</a>
                              <a href="#"
                                  className="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-blue-600">
                                  5 Things To Do About Rain
                              </a>
                              <p className="mb-4">
                                  Lorem ipsum dolor sit amet.
                              </p>
                          </div>
                          <div>
                              <a href="#"
                                  className="inline-block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600">Read
                                  More </a>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
          </section>
            <section className="bg-gray-300 flex flex-col-reverse sm:flex-row justify-center mt-2 mb-2 p-5">
                <div className='max-w-5xl w-full md:min-w-2xl flex flex-col sm:flex-row'>
                    <div className="text-left flex-1 relative order-2 sm:order-1 place-self-center">
                        <h1 className="text-2xl font-bold mb-2">Centered Content</h1>
                        <p>This is some centered content in a section with a grey background.</p>
                    </div>
                    <div className="relative flex-1 order-1 sm:order-2">
                        <div style={{ paddingTop: '40.25%' }}>
                            <div style={{position:'absolute', top: '-50%', left: 0, width: '100%', height: '100%'}}>
                                <img style={{ position: 'absolute', zIndex: 1 }} src="/images/laptop.png" alt="Description of Image 1" />
                                <img style={{ position: 'absolute', zIndex: 2 }} src="/images/tablet.png" alt="Description of Image 2" />
                                <img style={{ position: 'absolute', zIndex: 3 }} src="/images/phone.png" alt="Description of Image 3" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

      </div>
    );
  }
  

export default App;