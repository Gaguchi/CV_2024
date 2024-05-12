// App.jsx
import React, { useState, useRef, useEffect, memo } from 'react';
import { motion, useAnimation } from 'framer-motion';
import  { ThreeScene, MarshallScene }  from './main.jsx';
import startInterval from './public/js/ButtonBehavior.js';
import ScrollTrigger from 'react-scroll-trigger';


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
  const [isAnimatingClose, setIsAnimatingClose] = useState(false);
  const [SVGisActive, setSVGActive] = useState(false);


  useEffect(() => {
    if (isAnimatingClose) {
      const timer = setTimeout(() => {
        setIsModalOpen(false);
        setIsAnimatingClose(false);
      }, 500); // match this with your longest animation time
  
      return () => clearTimeout(timer); // clean up on unmount
    }
  }, [isAnimatingClose]);
  
  const handleClose = () => {
    setIsAnimatingClose(true);
  
    setTimeout(() => {
      setIsModalOpen(false);
      setIsAnimatingClose(false);
    }, 500); // match this with your longest animation time
  };
  

  function modalClick(e) {
  const id = e.currentTarget.id;
  let content;

  switch (id) {
    case 'harvard':
      content = (
        <>
        <div className="stacked-images">
          <img className="phone-modal stacked-image" src="/images/phone.png" alt="" />
          <img className="tablet-modal stacked-image" src="/images/tablet.png" alt="" />
          <img className="laptop-modal stacked-image" src="/images/laptop.png" alt="" />
        </div>
        <div className="p-6">
          <h3 className="EU">CS50W Harvard Final Project</h3>
          <p>For my final project in CS50W at Harvard, I developed a mobile app for movie recommendations and a gamified movie selection system. This involved creating games similar to the Wheel of Fortune or Plinketto.</p>
          <p>I used <strong>Django</strong> and <strong>React</strong> for the app development, and integrated the <strong>TMDB API</strong> for movie data. Additionally, I generated my own API to make the system work.</p>
        </div>
        </>
      );
      break;
    case 'milnort':
      content = (
        <>
          <img className="rounded-t-lg max-h-xl w-full" src="/images/1c-1.png" alt="" />
          <div className="p-6">
            <p>At <strong>Milnort</strong>, my role centered around maintaining and enhancing a production cost calculator. I used <strong>1C</strong> for raw data generation, and <strong>Excel</strong> and <strong>Microsoft PowerBI</strong> for data optimization and visualization.</p>
            <p>I also developed a web scraping system using <strong>Python</strong> and <strong>JavaScript</strong>, with libraries like <strong>BeautifulSoup</strong>, <strong>Selenium</strong>, and <strong>Playwright</strong>. This system gathered and standardized pricing data across all regions of Russia for a specific product category.</p>
          </div>
        </>
      );
      break;
    case 'petroholod':
      setSVGActive(true)
      content = (
        <>
        <img className="rounded-t-lg max-h-xl w-full" src="/images/1c-1.png" alt="" />
        <div className="p-6">
          <h3 className="EU">Experience at Petroholod</h3>
          <p>During my tenure at <strong>Petroholod</strong>, I was involved in creating several webpages for different products of the company. These pages were primarily developed using <strong>PHP</strong> and served various purposes such as introducing new products to the market.</p>
          <p>Some of these webpages were also used for advertising and conducting contests. For instance, one such web app was designed to accept information from customers and assign winners using a built-in random number generator.</p>
        </div>
        </>
      );
      break;
  case 'iceberry':
    content = (
      <>
      <img className="rounded-t-lg max-h-xl w-full" src="/images/1c-1.png" alt="" />
      <div className="p-6">
        <h3 className="EU">Work at Iceberry</h3>
        <p>At <strong>Iceberry</strong>, I implemented an in-house training and testing system for the company's merchandisers. This was done using <strong>Django</strong> and was aimed at educating new employees, testing them, and providing a simple system for their daily work.</p>
        <p>To facilitate maintenance, I created a CMS system with several admin layers. This system was also built using <strong>Django</strong>.</p>
      </div>
      </>
    );
    break;
case '3d':
  content = (
    <>
    <img className="rounded-t-lg max-h-xl w-full" src="/images/1c-1.png" alt="" />
      <div className="p-6">
        <h3 className="EU">3D Modeling Experience</h3>
        <p>I have experience in creating 3D models using software like <strong>Blender</strong> (which is my preferred tool, although I also have experience with Autodesk 3DS Max). My focus is on creating visually appealing yet lightweight models that won't be taxing for mobile users.</p>
      </div>
    </>
  );
  break;
    case 'agro':
      content = (
        <>
        <img className="rounded-t-lg max-h-xl w-full" src="/images/1c-1.png" alt="" />
        <div className='p-6'>
          <h3 className="EU">Agro E-commerce Project</h3>
          <p>For Agro, I developed a relatively simple e-commerce website using <strong>PHP</strong> and vanilla <strong>JavaScript</strong>. One of the key features of this site was an auto-updating price system.</p>
          <p>This system would dynamically change the price based on the quantity the user desired. It would inform the user how many more items they needed to purchase to qualify for a discount, and would display the discount percentage and the amount saved.</p>
        </div>
        </>
      );
      break;
  case 'mksbonat':
    content = (
      <>
      <img className="rounded-t-lg max-h-xl w-full" src="/images/1c-1.png" alt="" />
      <div className='p-6'>
        <h3 className="EU">Experience at MKSBonat</h3>
        <p>At <strong>MKSBonat</strong>, I maintained their e-commerce website, which was created with <strong>Drupal</strong>. My responsibilities included implementing updates to the site content and creating graphical designs for different products or events.</p>
        <p>One of my designs was used for a commercial truck, which was especially gratifying for me whenever I saw my design on the sides and back of trucks throughout the city.</p>
      </div>
      </>
    );
    break;
case 'mutabalis':
  content = (
    <>
    <img className="rounded-t-lg max-h-xl w-full" src="/images/1c-1.png" alt="" />
    <div className='p-6'>
    <h3 className="EU">Work for Mutabalis</h3>
    <p>For <strong>Mutabalis</strong>, a data analytics firm based in London, UK, I created a straightforward informative website. I find it relatively easy to work with foreign companies and clients, especially English-speaking ones, due to my education at Brunel University and my confidence in my English communication skills.</p>
    </div>
    </>
  );
  break;
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
  const img1 = new Image();
  const img2 = new Image();
  img1.src = "/images/tablet.png";
  img2.src = "/images/phone.png";
}, []);


useEffect(() => {
  // Call the function to start the interval
  startInterval(buttons, scale, 'mySection');
}, []);         


let greetings = ['Hello', 'გამარჯობა', 'Привет', 'გამარჯობა', 'こんにちは','გამარჯობა', '你好', 'გამარჯობა','안녕하세요', 'გამარჯობა','สวัสดี', 'გამარჯობა','नमस्ते', 'გამარჯობა','مرحبا','გამარჯობა'];
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
        <div className="bg-grad-preload">
        <svg id="BKLogo_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 131.41 147.38" className="bklogo-container">
          <g id="BKLogo">
            <polyline id="K" points="87.87 67.9 122.63 107.65 63.82 141.6 5 107.65 5 39.73 63.82 5.77 122.63 39.73 74.49 78.93" className="bklogo-style"/>
            <line id="I" x1="74.73" y1="35.76" x2="74.73" y2="114.6" className="bklogo-style"/>
            <path id="B" d="M5,44.91h33.14c8.28,0,15,6.72,15,15v.27c0,8.28-6.72,15-15,15H5h33.14c8.28,0,15,6.72,15,15v2.85c0,8.28-6.72,15-15,15H5" className="bklogo-style"/>
          </g>
        </svg>
        </div>
      </div>
    )}


{(isModalOpen || isAnimatingClose) && (
    <div className={`modal fixed w-full h-full top-0 left-0 flex items-center justify-center`}>
      <div className="modal-overlay absolute w-full h-full bg-zinc-900 opacity-50" onClick={handleClose}></div>
        
      <div className={`modal-container w-11/12 md:max-w-3xl mx-auto rounded-xl shadow-lg z-50 overflow-y-auto  ${isAnimatingClose ? 'modal-closing' : 'modal-opening'}`} onClick={e => e.stopPropagation()} style={{transform: `${isModalOpen ? 'scale(1)' : 'scale(0.7)'}`, transition: 'transform 0.3s ease-out'}}>
        
        <div className="bg-grad-element sm:row-span-2 w-full rounded-xl border border-white border-opacity-10  duration-200 hover:border-opacity-0 hover:no-underline hover:shadow-lg text-white hover:bg-white hover:bg-opacity-10 sm:flex-col sm:hover:shadow-2xl modal-content modal-content">
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
    <div className="bg-darker flex relative z-20 items-center overflow-hidden">
        <div className="h-full xl container mx-auto flex  flex-wrap-reverse relative ">
            <div className="xs:w-full sm:w-2/3 lg:w-2/5 flex flex-col relative z-20 py-10 px-10">
                <span className="w-20 h-2 bg-white mb-12">
                </span>
                <h1 className="font-bebas-neue uppercase text-5xl sm:text-8xl font-black flex flex-col leading-none text-white " >
                  <span className='text-3xl sm:text-6xl' style={{ marginBottom: '-20px' }}>
                    <span id='greeting'></span><span className="caret">|</span>
                  </span>
                  <ScrollTrigger onEnter={onEnterViewport} onExit={onExitViewport}>
                    <span className={`text-4xl sm:text-7xl ${isVisible ? 'animate-slide-in' : ''}`}>
                      I'm <span className='gradient-text'>Boris</span>
                    </span>
                  </ScrollTrigger>
                </h1>
                <p className="text-base text-white mt-8">
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
            <div className="xs:w-1/3 sm:w-1/3 lg:w-3/5 relative calc-h">
                <ThreeScene className="h-full" rotation={rotation * Math.PI} />
            </div>
        </div>
    </div>
<div className="mx-auto mb-20 max-w-6xl text-center p-6 bg-darker">
    <h2 className="Hex mb-12 text-center text-4xl font-extrabold text-gray-200 sm:text-5xl">About Me
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

<h2 className="Hex mb-12 text-center text-4xl font-extrabold text-gray-200 sm:text-5xl">My Skills
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
    <h2 className="Hex mb-12 text-center text-4xl font-extrabold text-gray-200 sm:text-5xl">My Projects
    </h2>
      <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-4 gap-4">

      <div  id='petroholod'  onMouseEnter={() => setSVGActive(true)} onMouseLeave={() => setSVGActive(false)} onClick={modalClick}  className="bg-grad-element sm:row-span-2 flex w-full items-center rounded-xl border border-white border-opacity-10 px-4 py-6  duration-200 hover:border-opacity-0 hover:no-underline hover:shadow-lg text-white hover:bg-white hover:bg-opacity-10 sm:flex-col sm:hover:shadow-2xl">
        <div  className='pt-44 md:pt-20 pb-30 md:pb-20 flex flex-col items-center justify-center relative w-full h-full'>
          <img className="absolute z-20 pointer-events-none overflow w-20 h-20 object-cover" id='tabl' src="/images/tablet.png" alt="Description of Image 2"/>
          <video className="absolute z-19 pointer-events-none w-20 h-20 object-cover" id='tabl-vid' src="/videos/cv_example_2_sm.mp4" autoPlay loop muted playsInline />
          <img className="absolute z-30 pointer-events-none w-20 h-20 object-cover" id='mobl' src="/images/phone.png" alt="Description of Image 3"/>
          <video className="absolute z-29 pointer-events-none w-20 h-20 object-cover" id='mobl-vid' src="/videos/cv_example_3_sm.mp4" autoPlay loop muted playsInline />
          <h1 className="z-40 text-center mt-4">Petroholod</h1>
          <p className="z-40 text-center text-xs mt-2">I used my web-design and graphic design skills to market the products of the company.</p>
          <div className="svgmask">
              <svg  id="petrosvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 106.45 102.64" width="106.44999694824219" height="102.63999938964844"><g id="seal"><path id="ball-line" d="M56.54,27.32c-7.23.1-13.12-6.15-13.21-13.21-.1-7.42,6.22-13.9,13.6-13.6,6.67.27,11.99,6,12.43,12.43.49,7.21-5.22,14.28-12.82,14.38Z" className={`svg-elem-1`}></path><path id="body-line" d="M.69,102.03c1.31-3.97,4.09-10.39,10.17-15.54,3.97-3.35,8.04-4.83,16.18-7.8,6.23-2.27,15.73-5.73,21.7-6.26,1.77-.16,3.53-.73,7.05-1.86.53-.17,1.57-.52,2.5-1.45.15-.15.94-.97,1.38-2.31.33-1.02.3-1.85.26-2.88-.05-1.17-.24-2.01-.47-3.01-.25-1.1-.65-2.48-1.31-4.13-.39-.97-.8-1.81-1.62-3.46-1.63-3.27-1.78-3.26-2.39-4.78,0,0-.74-1.86-1.21-3.85-.25-1.02-.37-1.54-.37-1.76,0-.11.01-.41-.07-.43-.08-.02-.2.22-.26.34-.3.57-.27.3-.91,1.34-.49.8-.79,1.29-1.08,2-.31.76-.31,1.06-.69,1.43-.16.15-.53.51-1.07.51-.07,0-.63,0-.97-.43-.22-.26-.27-.59-.26-.91,0-.28.07-1.61,1.66-3.84.88-1.23,1.32-1.85,2-2.26.13-.08.58-.34,1.03-.84.32-.36.75-.96.61-1.11-.12-.14-.68.15-1.02.32-.68.36-1.17.78-1.47,1.07-.51.49-.97,1.06-1.16,1.29-.45.56-.57.77-.91.91-.52.21-1.03.02-1.13-.02-.13-.05-.71-.28-.79-.75-.06-.33.15-.61.35-.88.73-.96,1.09-1.43,1.48-1.8,1.35-1.26,2.02-1.9,2.88-2.29.55-.25,1.1-.41,1.83-.95.48-.35.8-.68.89-.78.3-.32.39-.49,1.16-1.72,1.03-1.65.99-1.56,1.01-1.6.12-.28.22-.6.55-.85.09-.07.47-.33.83-.22.03.01.1.04.38.26.21.17.31.26.49.45.32.33.78.63,1.26.94,1.07.69,2.07,1.07,2.4,1.18.57.2,1.47.51,2.66.6.6.04.72,0,1.53.06.41.04,1.07.09,1.9.28.41.09,1.23.31,2.21.75.46.2,1.05.51,2.23,1.3,1.56,1.05,2.68,1.97,2.9,2.15.53.44,3.08,2.58,5.13,4.91,4.52,5.14,7.12,11.8,7.46,12.69,1.11,2.91,3.64,9.74,2.95,18.8-.28,3.72-.74,9.76-4.72,16,0,0-3.9,6.12-12.05,10.64-.31.17-.64.25-.64.25-.38.1-.69.07-.77.07-1.43-.08-17.59,0-18.28,0-.33,0-.66-.04-.98,0-.4.04-.63.12-.81-.02-.14-.11-.23-.32-.17-.46.06-.13.21-.15.46-.24.06-.02.26-.14.68-.37,1.18-.66,2.13-1.33,2.13-1.33.35-.24,1.05-.74,1.83-1.43.59-.52,1.84-1.65,2.98-3.44.78-1.24,1.18-2.26,1.57-3.27.62-1.62.91-2.91,1.11-3.8,0,0,.56-2.54.67-5.12.06-1.47-.12-1.57.02-2.03.02-.08.11-.33-.02-.49-.1-.12-.31-.16-.46-.09-.18.08-.24.29-.29.53-.15.69-.11,1.18-.14,1.7-.01.23-.06.51-.14,1.08,0,0-.14.92-.34,1.78-.14.63-.6,2.4-1.38,4.13-.29.63-1.58,3.37-4.35,6.12-2.4,2.37-4.65,3.5-7.12,4.75-2.66,1.34-4.47,1.82-5.98,2.04,0,0-.76.11-1.54.16-4.08.24-33.95.06-41.08.02Z" className={`svg-elem-2`}></path><path id="foot-line" d="M78.73,101.9c-.12-.21.51-.79.74-1,.37-.34.56-.51,1.01-.77,1.17-.66,3.02-2.79,3.55-3.4,2.63-3.02,4.2-6.56,4.63-7.58,1.66-3.92,2.24-7.61,2.28-8.27.02-.29.05-.45.12-.75.15-.68.24-1.11.53-1.21.36-.12.82.36.91.45.22.23.31.46.43.74.62,1.48.54,1.22.63,1.48.36,1.06.52,1.93.54,2.06.33,1.77,1,3.87,1.32,4.85.42,1.29,1.37,4.15,3.65,6.88,1.38,1.65,2.87,2.83,2.87,2.83,2.21,1.76,3.32,2.64,3.35,2.65.13.05.61.24.65.57.02.17-.07.37-.22.46-.18.11-.37.04-.66,0-.32-.05-.65,0-.98,0h-24.34c-.7.03-.95.12-1.02,0Z" className={`svg-elem-3`}></path><path id="foot" d="M93.59,86.78c-.62,3.41-.84,6.84,1.06,9.94,1.48,2.54,3.8,3.43,6.75,3.54q-5.8-5.31-7.81-13.48Z" style={{ fill: "rgb(31, 32, 33)", strokeWidth: "0px" }} className={`svg-elem-4`}></path><path id="body" d="M86.08,58.82l-.32.11c0,2.87.1,5.75,0,8.63-.11,6.16-1.66,12.21-4.53,17.66-3.49,6.53-8.76,10.84-15,14.14-.55.3-1.08.63-1.59,1l.11.56c1.11.11,2.22.16,3.33.15,7.97-1.33,14.66-6.74,17.62-14.25,2.85-6.3,3.16-12.93,2.21-19.67-.54-2.89-1.27-5.67-1.83-8.33ZM29.97,82.47l-.1-.34c-.45-.09-.91-.13-1.37-.11-6,.56-11.72,2-16.68,5.86-2.75,2.1-5.17,4.64-6,8.28-.41,1.3-.14,2.71.73,3.76l.32-.66c2.46-3.74,5.7-6.9,9.49-9.28,3.8-2.32,7.81-4.31,11.72-6.53.65-.28,1.29-.62,1.89-1v.02ZM56.34,32.2c-1.46,1.54-2.63,4.81-2.94,8.06-.22,1.62.13,3.26,1,4.65.37.39.77.76,1.2,1.09l.31-.21c-1.83-4.65-.94-9.07.43-13.59h0ZM67.65,40.37c-.06-1.16-.96-2.1-2.12-2.2-1.11.06-1.99.97-2,2.09-.08,1.13.76,2.12,1.89,2.22h.11c1.16-.03,2.09-.95,2.12-2.11h0Z" style={{ fill: "rgb(31, 32, 33)", strokeWidth: "0px" }} className={`svg-elem-5`}></path><path id="ball" d="M63.84,5.35c-2.4-3.75-10.13-4.52-13.92-1.77-4.54,3.32-6.44,11.49-3.49,15.65.53-4.65,1.2-9.07,4.81-12.16s8.09-2.49,12.6-1.72Z" style={{ fill: "rgb(31, 32, 33)", strokeWidth: "0px" }} className={`svg-elem-6`}></path></g></svg>
          </div>

        </div>
      </div>

        <div id='harvard'  onClick={modalClick}   className="bg-grad-element flex w-full items-center justify-center rounded-xl border border-white border-opacity-10 px-4 py-6  duration-200 hover:border-opacity-0 hover:no-underline hover:shadow-lg text-white hover:bg-white hover:bg-opacity-10 sm:flex-col sm:hover:shadow-2xl">
            <img className=" h-32 w-32" src="/images/Harvard_University_logo.svg" alt="Harvard"></img>
        </div>

        <div id='milnort'  onClick={modalClick}  className="flex w-full items-center justify-center rounded-xl border border-white border-opacity-10 px-4 py-6  duration-200 hover:border-opacity-0 hover:no-underline hover:shadow-lg text-white hover:bg-white hover:bg-opacity-10 sm:flex-col sm:hover:shadow-2xl">
            <img  className=" h-32 w-32" src="/images/milnort.svg" alt="Milnort"></img>
        </div>

        <div id='iceberry' onClick={modalClick}  className="bg-grad-element sm:col-span-2 flex flex-row w-full items-center justify-center rounded-xl border border-white border-opacity-10 px-4 py-6 duration-200 hover:border-opacity-0 hover:no-underline hover:shadow-lg text-white hover:bg-white hover:bg-opacity-10 sm:hover:shadow-2xl">
          <div className="ice-app relative flex justify-center h-[173px] w-[83px] border border-4 border-black rounded-2xl bg-gray-50"
              style={{ boxShadow: "rgb(209, 218, 218) 3px 4px 3px 0px" }}>
            <span className="border border-black bg-black w-13 h-1 rounded-br-xl rounded-bl-xl"></span>
            <span className="absolute border border-red bg-red w-13 h-1 rounded-br-xl rounded-bl-xl"></span>
            <span className="absolute -right-2 top-3 border border-3 border-black h-7 rounded-md"></span>
            <span className="absolute -right-2 top-12 border border-3 border-black h-10 rounded-md"></span>
          <video className="absolute z-19 pointer-events-none w-20 h-20 object-cover " id='ice-vid' src="/videos/Ice-Gif-Sm-4.mp4" autoPlay loop muted playsInline/>
          </div>
          <img className="h-32 w-32" id="scanner" src="/images/scanner.svg" alt="Scanner"></img>
          <div className="flex flex-col justify-center items-center">
            <h2>Your Header</h2>
            <p>Your paragraph text goes here.</p>
          </div>
        </div>

        <div id='3d'  onClick={modalClick}  className="bg-grad-element sm:row-span-2 flex w-full items-center rounded-xl border border-white border-opacity-10 px-4 py-6  duration-200 hover:border-opacity-0 hover:no-underline hover:shadow-lg text-white hover:bg-white hover:bg-opacity-10 sm:flex-col sm:hover:shadow-2xl">
          <MarshallScene rotation={Math.PI / 4} />
        </div>

        <div id='agro'  onClick={modalClick}  className="bg-grad-element flex w-full items-center justify-center rounded-xl border border-white border-opacity-10 px-4 py-6  duration-200 hover:border-opacity-0 hover:no-underline hover:shadow-lg text-white hover:bg-white hover:bg-opacity-10 sm:flex-col sm:hover:shadow-2xl">
          <div id='agro-bg'>
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
        </div>
        
    <div id='mksbonat' onClick={modalClick} 
     className="bg-grad-element sm:row-span-2 flex flex-wrap justify-center overflow-hidden w-full items-center rounded-xl border border-white border-opacity-10 px-4 py-6  duration-200 hover:border-opacity-0 hover:no-underline hover:shadow-lg text-white hover:bg-white hover:bg-opacity-10 sm:flex-col sm:hover:shadow-2xl"
>
    <img className="h-16" src="/images/mks-logo.png" alt="Mksbonat"></img>
    <div className="scrolling-background scroll-right"></div>
    <div className="scrolling-background scroll-left"></div>
</div>

    <div id='mutabalis' className="bg-grad-element flex w-full items-center rounded-xl border border-white border-opacity-10 px-4 py-6  duration-200 hover:border-opacity-0 hover:no-underline hover:shadow-lg text-white hover:bg-white hover:bg-opacity-10 sm:flex-col sm:hover:shadow-2xl"
      onMouseEnter={() => setBookClicked(!isClicked)}
      onMouseLeave={() => setBookClicked(!isClicked)}
      onClick={modalClick} >
      <div className="wrap">
        <div className="perspective">
          <div className={`book-wrap ${isHovered ? 'rotate' : ''} ${isClicked ? 'flip' : ''}`}>
            <div className="book book-1"></div>
            <div className="book-title book-1"></div>
            <div className="book-back book-1"></div>
          </div>
        </div>
      </div>
      </div>
      </div>
    </div>
    </section>

    <section className="body-font relative text-gray-400">
<div className="container mx-auto px-5 py-24">
  
  <div className="mb-12 flex w-full flex-col text-center">
    <h1 className="Hex title-font mb-4 text-2xl font-medium text-white sm:text-3xl">Contact me</h1>
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