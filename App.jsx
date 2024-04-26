// App.jsx
import React, { useState, useRef, useEffect, memo } from 'react';
import { motion, useAnimation } from 'framer-motion';
import  { ThreeScene, MarshallScene }  from './main.jsx';
import startInterval from './public/js/ButtonBehavior.js';
import ScrollTrigger from 'react-scroll-trigger';
import Preloader from './Preloader';


function App() {
  const [rotation, setRotation] = useState(0);
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const image3Ref = useRef(null);
  const [scale, setScale] = useState(1);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [activeButtonSet, setActiveButtonSet] = useState(null);
  const gridRef = useRef(null);
  const [isHovered, setBookHovered] = useState(false);
  const [isClicked, setBookClicked] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  
  const [rotationX, setRotationX] = useState(0);
  const [rotationY, setRotationY] = useState(0);
  const [rotationZ, setRotationZ] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  function modalClick(e) {
  const id = e.currentTarget.id;
  let content;

  switch (id) {
    case 'milnort':
      content = (
        <>
          <img class="rounded-t-lg max-h-xl w-full" src="/images/1c-1.png" alt="" />
          <div class="p-6">
            <p>At <strong>Milnort</strong>, my role centered around maintaining and enhancing a production cost calculator. I used <strong>1C</strong> for raw data generation, and <strong>Excel</strong> and <strong>Microsoft PowerBI</strong> for data optimization and visualization.</p>
            <p>I also developed a web scraping system using <strong>Python</strong> and <strong>JavaScript</strong>, with libraries like <strong>BeautifulSoup</strong>, <strong>Selenium</strong>, and <strong>Playwright</strong>. This system gathered and standardized pricing data across all regions of Russia for a specific product category.</p>
          </div>
        </>
      );
      break;
    // Add more cases for other ids
    default:
      content = 'Default content';
  }

  setModalContent(content);
  setIsModalOpen(true);
}

const [isLoading, setIsLoading] = useState(true);
useEffect(() => {
    const timer = setTimeout(() => {
        setIsLoading(false);
    }, 3000); // Change this to the amount of time you want the preloader to show

    return () => clearTimeout(timer); // This will clear the timeout if the component unmounts before the timeout finishes
}, []);
  
  const [isVisible, setIsVisible] = useState(false);

  const onEnterViewport = () => {
    setIsVisible(true);
    console.log('Entered viewport');
  };

  const onExitViewport = () => {
    setIsVisible(false);
    console.log('Exited viewport');
  };

  const handleSliderChangeX = (event) => {
    setRotationX(event.target.value);
  };

  const handleSliderChangeY = (event) => {
    setRotationY(event.target.value);
  };

  const handleSliderChangeZ = (event) => {
    setRotationZ(event.target.value);
  };

  const [buttons, setButtons] = useState([
  { name: 'angular', class: '' , set: 1},
  { name: 'aws', class: '' , set: 10},
  { name: 'azure', class: '' , set: 2},
  { name: 'blender', class: '' , set: 11},
  { name: 'bootstrap', class: '' , set: 3},
  { name: 'css', class: '' , set: 12},
  { name: 'django', class: '' , set: 9},
  { name: 'docker', class: '' , set: 2},
  { name: 'firebase', class: '' , set: 10},
  { name: 'git-bash', class: '' , set: 3},
  { name: 'github', class: '' , set: 11},
  { name: 'graphql', class: '' , set: 4},
  { name: 'html', class: '' , set: 2},
  { name: 'javascript', class: '' , set: 9},
  { name: 'laravel', class: '' , set: 3},
  { name: 'mongodb', class: '' , set: 10},
  { name: 'nextjs', class: '' , set: 4},
  { name: 'nodejs', class: '' , set: 11},
  { name: 'php', class: '' , set: 8},
  { name: 'postgresql', class: '' , set: 3},
  { name: 'python', class: '' , set: 9},
  { name: 'rails', class: '' , set: 4},
  { name: 'react', class: '' , set: 10},
  { name: 'sass', class: '' , set: 5},
  { name: 'svelte', class: '' , set: 3},
  { name: 'tailwindcss', class: '' , set: 8},
  { name: 'threejs', class: '' , set: 4},
  { name: 'vue', class: '' , set: 9},
  { name: 'wordpress', class: '' , set: 5},
  { name: 'java', class: '' , set: 10},
  { name: 'mysql', class: '' , set: 7},
  { name: 'flutter', class: '' , set: 4},
  { name: 'json', class: '' , set: 8},
  { name: 'xampp', class: '' , set: 5},
  { name: 'vitejs', class: '' , set: 9},
  { name: 'kotlin', class: '' , set: 6},
]);

const [smallScreenButtons, setSmallScreenButtons] = useState([
  { name: 'angular', class: '' , set: 1},
  { name: 'aws', class: '' , set: 10},
  { name: 'azure', class: '' , set: 2},
  { name: 'blender', class: '' , set: 11},
  { name: 'bootstrap', class: '' , set: 3},
  { name: 'css', class: '' , set: 12},
  { name: 'django', class: '' , set: 9},
  { name: 'docker', class: '' , set: 2},
  { name: 'firebase', class: '' , set: 10},
  { name: 'git-bash', class: '' , set: 3},
  { name: 'github', class: '' , set: 11},
  { name: 'graphql', class: '' , set: 4},
  { name: 'html', class: '' , set: 2},
  { name: 'javascript', class: '' , set: 9},
  { name: 'laravel', class: '' , set: 3},
  { name: 'mongodb', class: '' , set: 10},
  { name: 'nextjs', class: '' , set: 4},
  { name: 'nodejs', class: '' , set: 11},
  { name: 'php', class: '' , set: 8},
  { name: 'postgresql', class: '' , set: 3},
]);


useEffect(() => {
  // Call the function to start the interval
  startInterval(buttons, scale, 'mySection');
}, []);         


let greetings = ['Hello', 'Hola', 'Привет', 'გამარჯობა'];
let currentGreeting = greetings[0];
let isErasing = false;
let greetingIndex = 0;
let timer;

function updateGreeting() {
  let greetingElement = document.getElementById('greeting');

  if (isErasing) {
    currentGreeting = currentGreeting.slice(0, currentGreeting.length - 1);
    if (currentGreeting === '') {
      isErasing = false;
      greetingIndex = (greetingIndex + 1) % greetings.length;
    }
  } else {
    currentGreeting = greetings[greetingIndex].slice(0, currentGreeting.length + 1);
    if (currentGreeting === greetings[greetingIndex]) {
      isErasing = true;
    }
  }

  greetingElement.textContent = currentGreeting;

  clearTimeout(timer);
  timer = setTimeout(updateGreeting, isErasing ? 100 : 500); // Erase faster than typing
}

useEffect(() => {
  updateGreeting();
}, []);

const ButtonComponent = React.memo(({ button, scale, activeButtonSet }) => {
  const [isHovered, setIsHovered] = useState(false);
  const buttonRef = useRef(null);

  const isActive = button.set === activeButtonSet;

  useEffect(() => {
    if (isActive) {
      setIsHovered(true);
    } else if (!buttonRef.current.classList.contains('animactive')) {
      setIsHovered(false);
    }
  }, [isActive]);

  const buttonClass = `set-${button.set} group w-20 h-20 anim flex text-center items-center justify-center relative overflow-hidden  ${isActive ? 'animactive' : 'bg-grad-element'} `;

  return (
    <button 
      ref={buttonRef}
      className={buttonClass}
      style={{ transform: `scale(${isActive || isHovered ? scale-0.1 : scale-0.3})`, transition: 'transform 0.3s ease'  }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        if (!buttonRef.current.classList.contains('animactive')) {
          setIsHovered(false);
        }
      }}
    >
      <img 
        src={`images/${button.name}${isActive || isHovered ? '-1' : '-w'}.svg`} 
        alt={`${button.name}`} 
        style={{ 
          transform: `scale(${isActive || isHovered ? scale-0.3 : scale-0.5})`, 
          paddingBottom: isActive || isHovered ? '15px' : '0px',
          transition: 'transform 0.3s ease, padding-bottom 0.3s ease',
          maxHeight: '80px',
        }} 
      />
      <span 
        className={`absolute bottom-0 flex items-center justify-center transition-opacity ${isActive || isHovered ? 'hovered-span' : ''}`}
        style={{ opacity: isActive || isHovered ? 1 : 0,
                 transition: 'opacity 0.3s ease',
               }}
      >
        {button.name}
      </span>
    </button>
  );
});


useEffect(() => {
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
    if (window.innerWidth < 767) {
      setScale(1);
    } else {
      setScale(Math.min(window.innerWidth / 1000, 1));
    }
  };

  window.addEventListener('resize', handleResize);
  handleResize();

  return () => window.removeEventListener('resize', handleResize);
}, []);


  const handleSliderChange = (event) => {
    setRotation(event.target.value);
  };



  return (
    <>
    {isLoading && (
      <div className="preloader">
        <div className="preloader::before"></div>
      </div>
    )}


{isModalOpen && (
<div className={`modal fixed w-full h-full top-0 left-0 flex items-center justify-center ${isModalOpen ? '' : 'opacity-0 pointer-events-none'}`}>
  <div class="modal-overlay absolute w-full h-full bg-zinc-900 opacity-50" onClick={() => setIsModalOpen(false)}></div>
  
  <div class="modal-container w-11/12 md:max-w-md mx-auto rounded-xl shadow-lg z-50 overflow-y-auto" onClick={e => e.stopPropagation()}>
    
    <div class="bg-grad-element sm:row-span-2 w-full rounded-xl border border-white border-opacity-10  duration-200 hover:border-opacity-0 hover:no-underline hover:shadow-lg text-white hover:bg-white hover:bg-opacity-10 sm:flex-col sm:hover:shadow-2xl modal-content modal-content">
        {modalContent}
    </div>
  </div>
</div>
    )}
    {
      
    <div className="font-sans text-gray-900 antialiased">
      <main className="bg-darker relative overflow-hidden">
        <header className="h-24 sm:h-32 flex items-center z-30 w-full">
          <div className="container mx-auto px-6 flex items-center justify-between">
            <div className="uppercase text-white font-black text-3xl">
              Boris.K
            </div>
            <div className="flex items-center">
              <nav className="font-sen text-white uppercase text-lg lg:flex items-center hidden">
                <a href="#" className="py-2 px-6 flex">
                  Home
                </a>
                <a href="#" className="py-2 px-6 flex">
                  About
                </a>
                <a href="#" className="py-2 px-6 flex">
                  Skills
                </a>
                <a href="#" className="py-2 px-6 flex">
                  Projects
                </a>
                <a href="#" className="py-2 px-6 flex">
                  Contact
                </a>
              </nav>
              <div className="flex flex-col ml-4">
              </div>
            </div>
          </div>
        </header>
    <div className="bg-darker flex relative z-20 items-center overflow-hidden calc-h">
        <div className="h-full xl container mx-auto px-6 flex  flex-wrap-reverse relative py-10 px-10">
            <div className="xs:w-full sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                <span className="w-20 h-2 bg-white mb-12">
                </span>
                <h1 className="font-bebas-neue uppercase text-5xl sm:text-8xl font-black flex flex-col leading-none text-white " >
                  <span className='text-3xl sm:text-6xl'>
                    <span id='greeting'></span><span className="caret">|</span>
                  </span>
                  <ScrollTrigger onEnter={onEnterViewport} onExit={onExitViewport}>
                    <span className={`text-4xl sm:text-7xl ${isVisible ? 'animate-slide-in' : ''}`}>
                      I'm <span className='gradient-text'>Boris</span>
                    </span>
                  </ScrollTrigger>
                </h1>
                <p className="text-sm sm:text-base text-white">
                As a passionate web developer, I specialize in creating dynamic and beautiful web applications. I have been in the field for nearly a decade, and have been loving every minute of it. I am a developer, an engineer, a problem solver, and a perfectionist. Always hungry for new technologies and techniques in web development.
                </p>
                <div className="flex mt-8">
                    <a href="#" className="uppercase py-2 px-4 rounded-lg bg-red-500 border-2 border-transparent text-white text-md mr-4 hover:bg-red-400">
                        About Me
                    </a>
                    <a href="#" className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-red-500 text-white hover:bg-red-500 hover:text-white text-md">
                        My Projects
                    </a>
                </div>
            </div>
            <div className="xs:w-1/3 sm:w-1/3 lg:w-3/5 relative">
                <ThreeScene className="h-full" rotation={rotation * Math.PI} />
            </div>
        </div>
    </div>
<div className="mx-auto mb-20 max-w-6xl text-center p-6 bg-darker">
    <h2 className="mb-12 text-center text-4xl font-extrabold text-gray-200 sm:text-5xl">About Me
    </h2>
    <div
        className="gr mx-auto max-w-3xl items-stretch space-y-4 text-left sm:flex sm:space-y-0 sm:space-x-8 sm:text-center">
          <a className="flex w-full items-center rounded-xl border border-white border-opacity-10 px-4 py-6 duration-200 hover:border-opacity-0 hover:no-underline hover:shadow-lg text-white hover:bg-white hover:bg-opacity-10 sm:flex-col sm:hover:shadow-2xl bg-grad-element"
            href="#" target="_blank">
            <img className="mr-4 w-12 sm:mr-0 sm:h-32 sm:w-32 transform group-hover:-translate-y-1 group-hover:scale-90 transition-all ease-in-out" src="https://swiperjs.com/images/projects/framework7.svg" alt="Framework7"></img>
            <div>
              <div className="font-semibold text-white sm:mt-4 sm:mb-2 text-base group-hover:text-lg transition-all ease-in-out">Frontend Development</div>
              <div className="text-sm opacity-75">Proficient in HTML, CSS, and JavaScript. Experienced in using modern frameworks like React &amp; Vue.js.
              </div>
            </div>
          </a>
        <a className="flex w-full items-center rounded-xl border border-white border-opacity-10 px-4 py-6  duration-200 hover:border-opacity-0 hover:no-underline hover:shadow-lg text-white hover:bg-white hover:bg-opacity-10 sm:flex-col sm:hover:shadow-2xl bg-grad-element"
            href="#" target="_blank">
            <img className="mr-4 w-12 sm:mr-0 sm:h-32 sm:w-32" src="https://swiperjs.com/images/projects/atropos.svg" alt="Atropos"></img>
            <div>
                <div className="font-semibold text-white sm:mt-4 sm:mb-2">Backend Development</div>
                <div className="text-sm opacity-75">Specialized in backend development using Django and Laravel, providing robust and efficient solutions.</div>
            </div>
        </a>
        <a className="flex w-full items-center rounded-xl border border-white border-opacity-10 px-4 py-6  duration-200 hover:border-opacity-0 hover:no-underline hover:shadow-lg text-white hover:bg-white hover:bg-opacity-10 sm:flex-col sm:hover:shadow-2xl bg-grad-element"
            href="#" target="_blank">
            <img className="mr-4 w-12 sm:mr-0 sm:h-32 sm:w-32" src="https://swiperjs.com/images/projects/konsta.svg" alt="Konsta UI"></img>
            <div>
                <div className="font-semibold text-white sm:mt-4 sm:mb-2">Diverse Skillset</div>
                <div className="text-sm opacity-75">Leveraged a variety of programming languages like Python and Java, and tools such as Blender and Photoshop, to accomplish diverse tasks across multiple projects.</div>
            </div>
        </a>
    </div>
</div>

<h2 className="mb-12 text-center text-4xl font-extrabold text-gray-200 sm:text-5xl">My Skills
    </h2>

<section id="mySection" className="flex justify-center">
  <div className=" max-w-screen-lg pl-5 pr-5 sm:pr-15 sm:pl-15 pt-15 pb-15 grid grid-cols-1 md:grid-cols-2 gap-4 "><div>
  <h2 className="text-2xl font-bold mb-2 text-white">Diverse Solutions</h2>
  <h3 className="text-xl mb-2 text-white">Fields of Expertise</h3>
<p className='text-white'>
  I have experience in various fields of software development, including:
</p>
<p className='text-white'>
Throughout my career, I've had the opportunity to wear many hats and tackle a variety of challenges. In the realm of web development, I've utilized <span className="font-bold text-html">HTML</span> <img className="logo" src="/images/html-1.svg" alt="JavaScript logo" />, <span className="font-bold text-css">CSS</span> <img className="logo" src="/images/css-1.svg" alt="JavaScript logo" />, and vanilla <span className="font-bold text-js">JavaScript</span> <img className="logo" src="/images/javascript-1.svg" alt="JavaScript logo" />, along with PHP, Laravel, and Django for a diverse range of projects. These projects span from public-facing websites to internal tools, each with their unique requirements and objectives. Beyond web development, I've leveraged Python's powerful capabilities for data analysis and web scraping tasks, extracting valuable insights and automating processes. Additionally, I've had the chance to delve into mobile application development, specifically working on an Android application using Java. Each experience has enriched my skill set and broadened my understanding of the vast landscape of software development.
</p>
</div>
    {windowWidth < 640 ? (
      <div className="grid grid-cols-4 grid-rows-5 gap-4 justify-center" style={{ maxWidth: '600px', maxHeight: '600px', transform: `scale(${scale})`, aspectRatio: '1' }}>
        {smallScreenButtons.map((button, index) => (
          <ButtonComponent key={index} button={button} scale={scale-0.3} />
        ))}
      </div>
    ) : (
      <div className="grid grid-cols-6 grid-rows-6 gap-4" style={{ maxWidth: '600px', maxHeight: '600px', transform: `scale(${scale})`, aspectRatio: '1' }}>
        {buttons.map((button, index) => (
          <ButtonComponent key={index} button={button} scale={scale} />
        ))}
      </div>
    )}
  </div>
</section>
<section className="text-center content-center">
    <div className="max-w-screen-lg pl-5 pr-5 sm:pr-15 sm:pl-15 pt-15 pb-15 text-center p-6 bg-darker">
    <h2 className="mb-12 text-center text-4xl font-extrabold text-gray-200 sm:text-5xl">My Projects
    </h2>
      <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-4 gap-4">

      <div  id='petroholod'  className="bg-grad-element sm:row-span-2 flex w-full items-center rounded-xl border border-white border-opacity-10 px-4 py-6  duration-200 hover:border-opacity-0 hover:no-underline hover:shadow-lg text-white hover:bg-white hover:bg-opacity-10 sm:flex-col sm:hover:shadow-2xl">
        <div className='flex flex-col items-center justify-center relative w-full h-full'>
          <img className="absolute z-20 pointer-events-none overflow w-20 h-20 object-cover" id='tabl' src="/images/tablet.png" alt="Description of Image 2"/>
          <video className="absolute z-19 pointer-events-none w-20 h-20 object-cover " id='tabl-vid' src="/videos/cv_example_2_sm.mp4" autoPlay loop muted />
          <img className="absolute z-30 pointer-events-none w-20 h-20 object-cover " id='mobl' src="/images/phone.png"alt="Description of Image 3"/>
          <video className="absolute z-29 pointer-events-none w-20 h-20 object-cover " id='mobl-vid' src="/videos/cv_example_3_sm.mp4" autoPlay loop muted />

          <h1 className="z-40 text-center mt-4">Petroholod</h1>
          <p className="z-40 text-center text-xs mt-2">I used my web-design and graphic design skills to market the products of the company.</p>
        </div>
      </div>

        <div id='harvard' className="bg-grad-element flex w-full items-center justify-center rounded-xl border border-white border-opacity-10 px-4 py-6  duration-200 hover:border-opacity-0 hover:no-underline hover:shadow-lg text-white hover:bg-white hover:bg-opacity-10 sm:flex-col sm:hover:shadow-2xl">
            <img className=" h-32 w-32" src="/images/iceberry-1.svg" alt="IceBerry"></img>
        </div>

        <div id='milnort'  onClick={modalClick}  className="flex w-full items-center justify-center rounded-xl border border-white border-opacity-10 px-4 py-6  duration-200 hover:border-opacity-0 hover:no-underline hover:shadow-lg text-white hover:bg-white hover:bg-opacity-10 sm:flex-col sm:hover:shadow-2xl">
            <img  className=" h-32 w-32" src="/images/milnort.svg" alt="Milnort"></img>
        </div>

        <div id='iceberry' className="bg-grad-element sm:col-span-2 flex flex-row w-full items-center rounded-xl border border-white border-opacity-10 px-4 py-6 duration-200 hover:border-opacity-0 hover:no-underline hover:shadow-lg text-white hover:bg-white hover:bg-opacity-10 sm:hover:shadow-2xl">
          <div className="relative flex justify-center h-[173px] w-[83px] border border-4 border-black rounded-2xl bg-gray-50"
              style={{ boxShadow: "rgb(209, 218, 218) 3px 4px 3px 0px" }}>
            <span className="border border-black bg-black w-13 h-1 rounded-br-xl rounded-bl-xl"></span>
            <span className="absolute -right-2 top-3 border border-3 border-black h-7 rounded-md"></span>
            <span className="absolute -right-2 top-12 border border-3 border-black h-10 rounded-md"></span>
          </div>
          <img  className=" h-32 w-32" src="/images/scanner.svg" alt="Scanner"></img>
        </div>

        <div id='3d' className="bg-grad-element sm:row-span-2 flex w-full items-center rounded-xl border border-white border-opacity-10 px-4 py-6  duration-200 hover:border-opacity-0 hover:no-underline hover:shadow-lg text-white hover:bg-white hover:bg-opacity-10 sm:flex-col sm:hover:shadow-2xl">
          <MarshallScene rotation={Math.PI / 4} />
        </div>

        <div id='agro' className="bg-grad-element flex w-full items-center justify-center rounded-xl border border-white border-opacity-10 px-4 py-6  duration-200 hover:border-opacity-0 hover:no-underline hover:shadow-lg text-white hover:bg-white hover:bg-opacity-10 sm:flex-col sm:hover:shadow-2xl">
          <div className="centered-frame flex flex-col items-center justify-center relative">
            <div className="frame lab-bg" id="soil">
              <div className="mask flex flex-col items-center justify-center relative">
                <img className="absolute w-20 h-20" src="/images/bloom.png" id="bloom"></img>
                <img className="absolute w-20 h-20" src="/images/particle2.png" id="particle-bg"></img>
                <img className="absolute w-20 h-20" src="/images/scientist.png" id="scientist"></img>
                <img className="absolute w-4 h-10" src="/images/scientist-hand-2.png" id="scientist-hand"></img>
                <img className="absolute w-20 h-20" src="/images/particle1.png" id="particle-fg"></img>
              </div>
            </div>
          </div>
        </div>
        
    <div  id='mksbonat'
      className="bg-grad-element sm:row-span-2 flex w-full items-center rounded-xl border border-white border-opacity-10 px-4 py-6  duration-200 hover:border-opacity-0 hover:no-underline hover:shadow-lg text-white hover:bg-white hover:bg-opacity-10 sm:flex-col sm:hover:shadow-2xl"
    >MKSBonat
    </div>
        <div id='mutabalis' className="bg-grad-element flex w-full items-center rounded-xl border border-white border-opacity-10 px-4 py-6  duration-200 hover:border-opacity-0 hover:no-underline hover:shadow-lg text-white hover:bg-white hover:bg-opacity-10 sm:flex-col sm:hover:shadow-2xl"
      onMouseEnter={() => setBookHovered(true)}
      onMouseLeave={() => setBookHovered(false)}
      onClick={() => setBookClicked(!isClicked)}>
      <div className="wrap">
        <div className="perspective">
          <div className={`book-wrap ${isHovered ? 'rotate' : ''} ${isClicked ? 'flip' : ''}`}>
            <div className="book book-1"></div>
            <div className="book-title book-1"></div>
            <div className="book-back book-1"></div>
          </div>
        </div>
      </div></div>
      </div>
    </div>
    </section>

    <section className="body-font relative text-gray-400">
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
          <input type="text" id="name" name="name" className="peer w-full rounded border border-gray-700 bg-darker bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-classs duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900" placeholder="Name" />
          <label htmlFor="name" className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500">Name</label>
        </div>
      </div>
      <div className="w-1/2 p-2">
        <div className="relative">
          <input type="email" id="email" name="email" className="peer w-full rounded border border-gray-700 bg-darker bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-classs duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900" placeholder="Email" />
          <label htmlFor="email" className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500">Email</label>
        </div>
      </div>
      <div className="mt-4 w-full p-2">
        <div className="relative">
          <textarea id="message" name="message" className="peer h-32 w-full resize-none rounded border border-gray-700 bg-darker bg-opacity-40 py-1 px-3 text-base leading-6 text-gray-100 placeholder-transparent outline-none transition-classs duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900" placeholder="Message"></textarea>
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
            <svg fill="currentclass" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-5 w-5" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a className="ml-4 text-gray-500">
            <svg fill="currentclass" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-5 w-5" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a className="ml-4 text-gray-500">
            <svg fill="none" stroke="currentclass" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-5 w-5" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a className="ml-4 text-gray-500">
            <svg fill="currentclass" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-5 w-5" viewBox="0 0 24 24">
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
            </svg>
          </a>
        </span>
      </div>

    </div>
  </div>

</div>

</section>
</main>

      </div>
        }
    </>
    );
  }
  

export default App;