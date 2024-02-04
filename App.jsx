// App.jsx
import React from 'react';
import 'windi.css'

function App() {
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
        <main className="flex mt-10 mx-6">
          <div className="w-1/2">
            <h2 className="text-3xl font-bold mb-2">Hello, world!</h2>
            <p className="text-gray-700">Welcome to our website. We're glad to have you here.</p>
          </div>
          <div className="w-1/2 bg-gray-200"></div>
        </main>
      </div>
    );
  }
  

export default App;