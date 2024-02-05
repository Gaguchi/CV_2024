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
        <header className="flex items-center justify-between p-6 bg-blue-500 text-white">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold">Logo</h1>
            <nav>
              <ul className="flex items-center space-x-4">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </nav>
          </div>
          <div>
            <button className="py-2 px-4 bg-blue-700 text-white rounded hover:bg-blue-600">Button</button>
          </div>
        </header>
        <main className="flex mt-10 mx-6 h-full" style={{ height: 'calc(90vh - 64px)' }}>
          <div className="w-1/2">
            <h2 className="text-3xl font-bold mb-2">Hello, world!</h2>
            <p className="text-gray-700">Welcome to our website. We're glad to have you here.</p>
            <input type="range" min="0" max="2" step="0.01" value={rotation} onChange={handleSliderChange} />
          </div>
          <div className="w-1/2 bg-gray-200 h-full">
            <ThreeScene rotation={rotation * Math.PI} /></div>
        </main>
          <section className="flex justify-around p-6">
          <div className="flex flex-col items-center">
            <img src="https://picsum.photos/id/237/200/300" alt="Image 1" className="w-32 h-32" />
            <h2 className="text-xl font-bold mt-2">Subtext 1</h2>
            <p>Description 1</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://picsum.photos/id/233/200/300.jpg" alt="Image 2" className="w-32 h-32" />
            <h2 className="text-xl font-bold mt-2">Subtext 2</h2>
            <p>Description 2</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://picsum.photos/id/238/200/300.jpg" alt="Image 3" className="w-32 h-32" />
            <h2 className="text-xl font-bold mt-2">Subtext 3</h2>
            <p>Description 3</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://picsum.photos/id/235/200/300.jpg" alt="Image 4" className="w-32 h-32" />
            <h2 className="text-xl font-bold mt-2">Subtext 4</h2>
            <p>Description 4</p>
          </div>
        </section>
      </div>
    );
  }
  

export default App;