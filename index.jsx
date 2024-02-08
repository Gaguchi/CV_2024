// index.jsx
import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import 'windi.css'

const root = document.getElementById('root');
createRoot(root).render(<App />);