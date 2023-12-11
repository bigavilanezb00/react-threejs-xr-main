import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/index.css';
import SceneA from './components/exA/SceneA';
import SceneB from './components/exB/SceneB';
import SceneC from './components/exC/SceneC';
import SceneD from './components/exD/SceneD';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SceneA />
    <SceneB />
    <SceneC />
    <SceneD />
  </React.StrictMode>
);