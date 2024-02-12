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
            <section className="bg-gray-300 flex flex-col-reverse sm:flex-row justify-center p-5">
                <div className='lg:max-w-7xl w-full'>
                    <div className="relative">
                        <div style={{ paddingTop: '30.25%' }}>
                            <div style={{position:'absolute', top: '-70%', left: 0, width: '100%', height: '100%'}}>
                                <img style={{ position: 'absolute', zIndex: 1 }} src="/images/laptop.png" alt="Description of Image 1" />
                                <img style={{ position: 'absolute', zIndex: 2 }} src="/images/tablet.png" alt="Description of Image 2" />
                                <img style={{ position: 'absolute', zIndex: 3 }} src="/images/phone.png" alt="Description of Image 3" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="body-font relative bg-gray-900 text-gray-400">

<div class="container mx-auto px-5 py-24">
  
  <div class="mb-12 flex w-full flex-col text-center">
    <h1 class="title-font mb-4 text-2xl font-medium text-white sm:text-3xl">Contact Us</h1>
    <p class="mx-auto text-base leading-relaxed lg:w-2/3">Feel free to reach out to us! Whether you have a question,
      feedback, or a collaboration proposal, we'd love to hear from you.
    </p>
  </div>

  <div class="mx-auto md:w-2/3 lg:w-1/2">
    <div class="-m-2 flex flex-wrap">

      <div class="w-1/2 p-2">
        <div class="relative">
          <input type="text" id="name" name="name" class="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900" placeholder="Name" />
          <label for="name" class="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500">Name</label>
        </div>
      </div>
      <div class="w-1/2 p-2">
        <div class="relative">
          <input type="email" id="email" name="email" class="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900" placeholder="Email" />
          <label for="email" class="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500">Email</label>
        </div>
      </div>
      <div class="mt-4 w-full p-2">
        <div class="relative">
          <textarea id="message" name="message" class="peer h-32 w-full resize-none rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-6 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900" placeholder="Message"></textarea>
          <label for="message" class="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500">Message</label>
        </div>
      </div>
      <div class="w-full p-2">
        <button class="mx-auto flex rounded border-0 bg-indigo-500 py-2 px-8 text-lg text-white hover:bg-indigo-600 focus:outline-none">Button</button>
      </div>



      <div class="mt-8 w-full border-t border-gray-800 p-2 pt-8 text-center">
        <a class="text-indigo-400">example@email.com</a>
        <p class="my-5 leading-normal">49 Smith St. <br />Saint Cloud, MN 56301</p>
        <span class="inline-flex">
          <a class="text-gray-500">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="h-5 w-5" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a class="ml-4 text-gray-500">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="h-5 w-5" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a class="ml-4 text-gray-500">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="h-5 w-5" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a class="ml-4 text-gray-500">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="h-5 w-5" viewBox="0 0 24 24">
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
            </svg>
          </a>
        </span>
      </div>

    </div>
  </div>

</div>

</section>
      </div>
    );
  }
  

export default App;