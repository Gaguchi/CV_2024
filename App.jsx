// App.jsx
import React, { useState, useRef, useEffect } from 'react';
import 'windi.css';
import { motion, useAnimation } from 'framer-motion';
import ThreeScene from './main.jsx';

function App() {
  const [rotation, setRotation] = useState(0);
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const image3Ref = useRef(null);
  const [scale, setScale] = useState(1);
  // Add a new state variable
  const [hasAnimated, setHasAnimated] = useState(false);
  
const buttons = [
  { name: 'Docker', color: 'blue' },
  { name: 'MySQL', color: 'blue' },
  { name: 'Node.js', color: 'blue' },
  { name: 'React', color: 'blue' },
  { name: 'Kubernetes', color: 'green' },
  { name: 'MongoDB', color: 'green' },
  { name: 'Python', color: 'green' },
  { name: 'Vue', color: 'green' },
  { name: 'Jenkins', color: 'red' },
  { name: 'PostgreSQL', color: 'red' },
  { name: 'Java', color: 'red' },
  { name: 'Angular', color: 'red' },
  { name: 'Docker', color: 'blue' },
  { name: 'MySQL', color: 'blue' },
  { name: 'Node.js', color: 'blue' },
  { name: 'React', color: 'blue' },
  { name: 'Kubernetes', color: 'green' },
  { name: 'MongoDB', color: 'green' },
  { name: 'Python', color: 'green' },
  { name: 'Vue', color: 'green' },
  { name: 'Jenkins', color: 'red' },
  { name: 'PostgreSQL', color: 'red' },
  { name: 'Java', color: 'red' },
  { name: 'Angular', color: 'red' },
  { name: 'Docker', color: 'blue' },
  { name: 'MySQL', color: 'blue' },
  { name: 'Node.js', color: 'blue' },
  { name: 'React', color: 'blue' },
  { name: 'Kubernetes', color: 'green' },
  { name: 'MongoDB', color: 'green' },
  { name: 'Python', color: 'green' },
  { name: 'Vue', color: 'green' },
  { name: 'Jenkins', color: 'red' },
  { name: 'PostgreSQL', color: 'red' },
  { name: 'Java', color: 'red' },
  { name: 'Angular', color: 'red' },
];


useEffect(() => {
  const handleResize = () => {
    setScale(Math.min(window.innerWidth / 1000, 1));
  };

  window.addEventListener('resize', handleResize);
  handleResize();

  return () => window.removeEventListener('resize', handleResize);
}, []);

  useEffect(() => {
    if (window.innerWidth >= 639) {
      console.log(window.innerWidth)
      const observer = new IntersectionObserver(
        ([entry]) => {
          console.log("Intersecting element:", entry.target);
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);  // Set the state variable to true
            if (entry.target.isSameNode(image1Ref.current)) {
              console.log("Animating image 1");
              controls1.start({
                x: 0,
                transition: { duration: 1 },
              });
              console.log("Animating image 2");
              controls2.start({
                x: 0,
                transition: { duration: 1},
              });
              console.log("Animating image 3");
              controls3.start({
                y: 0,
                transition: { duration: 1},
              });
            }
          }
        },
        { threshold: 0.1 }
      );

      if (image1Ref.current) observer.observe(image1Ref.current);
      if (image2Ref.current) observer.observe(image2Ref.current);
      if (image3Ref.current) observer.observe(image3Ref.current);

      return () => {
        observer.disconnect();
      };
    }
  }, [controls1, controls2, controls3, image1Ref.current, image2Ref.current, image3Ref.current, hasAnimated]);  // Add the state variable to the dependency array

  useEffect(() => {
    // Check if the viewport width is less than or equal to 768px (typical breakpoint for mobile devices)
    if (window.innerWidth <= 639) {
      console.log(window.innerWidth)
      const observer = new IntersectionObserver(
        ([entry]) => {
          console.log("Intersecting element:", entry.target);
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);  // Set the state variable to true
            if (image2Ref.current && entry.target.isSameNode(image2Ref.current)) {
              console.log("Animating image 2");
              controls2.start({
                x: 0,
                transition: { duration: 1},
              });
              console.log("Animating image 3");
              controls3.start({
                y: 0,
                transition: { duration: 1},
              });
            }
          }
        },
        { threshold: 0.1 }
      );

      if (image2Ref.current) observer.observe(image2Ref.current);
      if (image3Ref.current) observer.observe(image3Ref.current);

      return () => {
        observer.disconnect();
      };
    }
  }, [controls2, controls3, image2Ref.current, image3Ref.current, hasAnimated]);  // Remove controls1 and image1Ref.current from the dependency array

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
    <div className=" bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
        <div className="max-w-15c;c;,d, xl container mx-auto px-6 flex  flex-wrap-reverse relative py-16">
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
          
          <section>
          <div className="p-1 flex flex-wrap items-center justify-center max-w-6xl min-h-screen px-10 py-10 mx-auto sm:px-16">

          <div className="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg">
              <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none"
                  style={{ transform: "scale(1.5)", opacity: 0.1 }}>
                  <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                  <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
              </svg>
              <div className="relative pt-10 px-10 flex items-center justify-center">
                  <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                      style={{ 
  background: "radial-gradient(black, transparent 60%)", 
  transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)", 
  opacity: 0.2 
}}>
                  </div>
                  <img className="relative w-40" src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png" alt=""/>
              </div>
              <div className="relative text-white px-6 pb-6 mt-6">
                  <span className="block opacity-75 -mb-1">Indoor</span>
                  <div className="flex justify-between">
                      <span className="block font-semibold text-xl">Peace Lily</span>
                      <span className="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">$36.00</span>
                  </div>
              </div>
          </div>
          <div className="flex-shrink-0 m-6 relative overflow-hidden bg-teal-500 rounded-lg max-w-xs shadow-lg">
              <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none"
                  style={{ transform: "scale(1.5)", opacity: 0.1 }}>
                  <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                  <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
              </svg>
              <div className="relative pt-10 px-10 flex items-center justify-center">
                  <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                      style={{ 
  background: "radial-gradient(black, transparent 60%)", 
  transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)", 
  opacity: 0.2 
}}>
                  </div>
                  <img className="relative w-40" src="https://user-images.githubusercontent.com/2805249/64069998-305de300-cc9a-11e9-8ae7-5a0fe00299f2.png" alt=""/>
              </div>
              <div className="relative text-white px-6 pb-6 mt-6">
                  <span className="block opacity-75 -mb-1">Outdoor</span>
                  <div className="flex justify-between">
                      <span className="block font-semibold text-xl">Monstera</span>
                      <span className="block bg-white rounded-full text-teal-500 text-xs font-bold px-3 py-2 leading-none flex items-center">$45.00</span>
                  </div>
              </div>
          </div>
          <div className="flex-shrink-0 m-6 relative overflow-hidden bg-purple-500 rounded-lg max-w-xs shadow-lg">
              <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none"
                  style={{ transform: "scale(1.5)", opacity: 0.1 }}>
                  <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                  <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
              </svg>
              <div className="relative pt-10 px-10 flex items-center justify-center">
                  <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                      style={{ 
  background: "radial-gradient(black, transparent 60%)", 
  transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)", 
  opacity: 0.2 
}}>
                  </div>
                  <img className="relative w-40" src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png" alt=""/>
              </div>
              <div className="relative text-white px-6 pb-6 mt-6">
                  <span className="block opacity-75 -mb-1">Outdoor</span>
                  <div className="flex justify-between">
                      <span className="block font-semibold text-xl">Oak Tree</span>
                      <span className="block bg-white rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none flex items-center">$68.50</span>
                  </div>
              </div>
          </div>

          <div className="flex-shrink-0 m-6 relative overflow-hidden bg-purple-500 rounded-lg max-w-xs shadow-lg">
              <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none"
                  style={{ transform: "scale(1.5)", opacity: 0.1 }}>
                  <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                  <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
              </svg>
              <div className="relative pt-10 px-10 flex items-center justify-center">
                  <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                      style={{ 
  background: "radial-gradient(black, transparent 60%)", 
  transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)", 
  opacity: 0.2 
}}>
                  </div>
                  <img className="relative w-40" src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png" alt=""/>
              </div>
              <div className="relative text-white px-6 pb-6 mt-6">
                  <span className="block opacity-75 -mb-1">Outdoor</span>
                  <div className="flex justify-between">
                      <span className="block font-semibold text-xl">Oak Tree</span>
                      <span className="block bg-white rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none flex items-center">$68.50</span>
                  </div>
              </div>
          </div>

          <div className="flex-shrink-0 m-6 relative overflow-hidden bg-purple-500 rounded-lg max-w-xs shadow-lg">
              <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none"
                  style={{ transform: "scale(1.5)", opacity: 0.1 }}>
                  <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                  <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
              </svg>
              <div className="relative pt-10 px-10 flex items-center justify-center">
                  <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                      style={{ 
                        background: "radial-gradient(black, transparent 60%)", 
                        transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)", 
                        opacity: 0.2 
                      }}>
                  </div>
                  <img className="relative w-40" src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png" alt=""/>
              </div>
              <div className="relative text-white px-6 pb-6 mt-6">
                  <span className="block opacity-75 -mb-1">Outdoor</span>
                  <div className="flex justify-between">
                      <span className="block font-semibold text-xl">Oak Tree</span>
                      <span className="block bg-white rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none flex items-center">$68.50</span>
                  </div>
              </div>
          </div>
          </div>
          </section>


<section className="p-1 flex flex-wrap items-center justify-center max-w-6xl min-h-screen px-0 py-0 mx-auto ">
  <div className="bg-gray-300 p-5 pt-15 pb-15 grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <h2 className="text-2xl font-bold mb-2">Header</h2>
      <h3 className="text-xl mb-2">Sub-header</h3>
      <p>Some paragraph text goes here.</p>
    </div>
    <div className="grid grid-cols-6 grid-rows-6 gap-4"  style={{maxWidth:'600px', maxHeight:'600px', transform: `scale(${scale})`,aspectRatio:'1' }}>
      {buttons.map((button, index) => (
        <button key={index} className={`group w-20 h-20 bg-${button.color}-500 relative overflow-hidden`} style={{ transform: `scale(${scale-0.1})` }}>
          <span className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">{button.name}</span>
        </button>
      ))}
    </div>
  </div>
</section>

            {/* <section className="bg-gray-300 flex flex-col-reverse sm:flex-row justify-center p-5">
                <div className='lg:max-w-7xl w-full'>
                    <div className="relative">
                        <div style={{ paddingTop: '30.25%' }}>
                            <div style={{position:'absolute', top: '-70%', left: 0, width: '100%', height: '100%'}}>
                            <motion.img
                              ref={image1Ref}
                              className="absolute z-10"
                              src="/images/laptop.png"
                              alt="Description of Image 1"
                              initial={{ x: 100, y: 55 }}  // Start from 100px to the right and 50px up
                              animate={controls1}
                            />

                            <motion.video 
                              className="absolute z-8" 
                              src="/videos/cv_example_1v2_sm.mp4" 
                              autoPlay 
                              loop 
                              muted 
                              initial={{ x: 100, y: 55  }}  // Start from 200px below
                              animate={controls1}
                              style={{ height: '99.8%', top: '37%', left: '37.8%' }}
                            />

                            <motion.img
                              ref={image2Ref}
                              className="absolute z-20"
                              src="/images/tablet.png"
                              alt="Description of Image 2"
                              initial={{ x: -250, y:50 }}  // Start from 150px to the left and 50px up
                              animate={controls2}
                              transition={{ delay: 0.5 }}  // Add a delay of 0.5 seconds
                            />
                            
                            <motion.video 
                              className="absolute z-19" 
                              src="/videos/cv_example_2_sm.mp4" 
                              autoPlay 
                              loop 
                              muted 
                              initial={{ x: -250, y:50 }}  // Start from 200px below
                              animate={controls2}
                              transition={{ delay: 0.5 }}
                              style={{ height: '101.8%', top: '59.3%', left: '11.8%' }}
                            />

                            <motion.img
                              ref={image3Ref}
                              className="absolute z-30"
                              src="/images/phone.png"
                              alt="Description of Image 3"
                              initial={{ y: 250 }}  // Start from 200px below
                              animate={controls3}
                            />

                            <motion.video 
                              className="absolute z-29" 
                              src="/videos/cv_example_3_sm.mp4" 
                              autoPlay 
                              loop 
                              muted 
                              initial={{ y: 250 }}  // Start from 200px below
                              animate={controls3}
                              style={{ height: '91.8%', top: '95.1%', left: '29.8%' }}
                            />
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <section className="body-font relative bg-gray-900 text-gray-400">
            <div className="bg-white dark:bg-gray-800 relative z-20 items-center ">
        <div className="container mx-auto  flex  relative py-16 justify-evenly">
            
            <div className='lg:max-w-7xl w-full'>
                    <div className="relative">
                        <div style={{ paddingTop: '35.250%' }}>
                            <div style={{position:'absolute', top: '-60%', left:0, width: '100%', height: '100%', pointerEvents: 'none'}}>
                            <motion.img
                              ref={image1Ref}
                              className="absolute z-10 sm:block hidden pointer-events-none" // Change here
                              src="/images/laptop.png"
                              alt="Description of Image 1"
                              initial={{ x: 100, y: 55 }}  // Start from 100px to the right and 50px up
                              animate={controls1}
                            />

                            <motion.video 
                              className="absolute z-8 sm:block hidden pointer-events-none" // Change here
                              src="/videos/cv_example_1v2_sm.mp4" 
                              autoPlay 
                              loop 
                              muted 
                              initial={{ x: 100, y: 55  }}  // Start from 200px below
                              animate={controls1}
                              style={{ height: '85.5%', top: '32%', left: '38%', filter: 'blur(2px)' }}
                            />

                            <motion.img
                              ref={image2Ref}
                              className="absolute z-20 pointer-events-none overflow-x-hidden"
                              src="/images/tablet.png"
                              alt="Description of Image 2"
                              initial={window.innerWidth <= 639 ? {  x: 100, y:50 }:{ x: -250, y:50 }}  // Start from 150px to the left and 50px up
                              animate={controls2}
                              transition={{ delay: 0.5 }}  // Add a delay of 0.5 seconds
                              style={window.innerWidth <= 639 ? {height: '87.7%', top: '0%', left: '100%',scale:4.5 } : { height: '178.7%', top: '-1%', left: '-0.1%'}}
                            />
                            
                            <motion.video 
                              className="absolute z-19 pointer-events-none" 
                              src="/videos/cv_example_2_sm.mp4" 
                              autoPlay 
                              loop 
                              muted 
                              initial={window.innerWidth <= 639 ? { x: 100, y:50 }:{ x: -250, y:50 }}  // Start from 200px below
                              animate={controls2}
                              transition={{ delay: 0.5 }}
                              style={window.innerWidth <= 639 ? {height: '195.2%', top: '-40.6%', left: '39.8%', filter: 'blur(2px)'} : { height: '87.7%', top: '50.1%', left: '11.7%', filter: 'blur(2px)' }}
                            />

                            <motion.img
                              ref={image3Ref}
                              className="absolute z-30 pointer-events-none"
                              src="/images/phone.png"
                              alt="Description of Image 3"
                              initial={{ y: 250 }}  // Start from 200px below
                              animate={controls3}
                              style={window.innerWidth <= 639 ? { height: '80%', top: '16.2%%', left: '36%', scale:5.1 } : { height: '178.1%', top: '-0.2%', left: '-0.2%' }}
                            />

                            <motion.video 
                              className="absolute z-29 pointer-events-none" 
                              src="/videos/cv_example_3_sm.mp4" 
                              autoPlay 
                              loop 
                              muted 
                              initial={{ y: 250 }}  // Start from 200px below
                              animate={controls3}
                              style={window.innerWidth <= 639 ? { height: '183.2%', top: '24.2%', left: '12.5%' } : { height: '79.2%', top: '81.2%', left: '29.8%' }}
                            />

                            
                            
                            </div>
                            <div className="relative z-20" style={{position:'absolute', top: '28%', left: '43.2%'}}>
                                <h1 className="font-bebas-neue uppercase md:text-6xl sm:text-5xl text-2xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                                    My 
                                    <span className="sm:text-4xl md:text-7xl text-1xl">
                                    Projects
                                    </span>
                                </h1>
                                <div className="flex mt-2">
                                    <a href="#" className="sm:text-1xl md:text-2xl text-xs uppercase py-1 px-2 sm:py-2 sm:px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400">
                                        Get started
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
<div className="container mx-auto px-5 py-24">
  
  <div className="mb-12 flex w-full flex-col text-center">
    <h1 className="title-font mb-4 text-2xl font-medium text-white sm:text-3xl">Contact Us</h1>
    <p className="mx-auto text-base leading-relaxed lg:w-2/3">Feel free to reach out to us! Whether you have a question,
      feedback, or a collaboration proposal, we'd love to hear from you.
    </p>
  </div>

  <div className="mx-auto md:w-2/3 lg:w-1/2">
    <div className="-m-2 flex flex-wrap">

      <div className="w-1/2 p-2">
        <div className="relative">
          <input type="text" id="name" name="name" className="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900" placeholder="Name" />
          <label htmlFor="name" className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500">Name</label>
        </div>
      </div>
      <div className="w-1/2 p-2">
        <div className="relative">
          <input type="email" id="email" name="email" className="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900" placeholder="Email" />
          <label htmlFor="email" className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500">Email</label>
        </div>
      </div>
      <div className="mt-4 w-full p-2">
        <div className="relative">
          <textarea id="message" name="message" className="peer h-32 w-full resize-none rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-6 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900" placeholder="Message"></textarea>
          <label htmlFor="message" className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500">Message</label>
        </div>
      </div>
      <div className="w-full p-2">
        <button className="mx-auto flex rounded border-0 bg-indigo-500 py-2 px-8 text-lg text-white hover:bg-indigo-600 focus:outline-none">Button</button>
      </div>



      <div className="mt-8 w-full border-t border-gray-800 p-2 pt-8 text-center">
        <a className="text-indigo-400">example@email.com</a>
        <p className="my-5 leading-normal">49 Smith St. <br />Saint Cloud, MN 56301</p>
        <span className="inline-flex">
          <a className="text-gray-500">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-5 w-5" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a className="ml-4 text-gray-500">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-5 w-5" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a className="ml-4 text-gray-500">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-5 w-5" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a className="ml-4 text-gray-500">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-5 w-5" viewBox="0 0 24 24">
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