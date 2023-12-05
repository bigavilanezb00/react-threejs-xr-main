import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/index.css';
import Scene from './components/Scene';
import SceneA from './components/SceneA';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SceneA />
  </React.StrictMode>
);