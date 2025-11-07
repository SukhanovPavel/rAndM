import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import App from './App.tsx';
import { CharactersList, CharacterInfo } from '@pages';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path={'/'}
          element={<App />}
        />
        <Route
          path={'/character-list'}
          element={<CharactersList />}
        />
        <Route
          path={'/character-info'}
          element={<CharacterInfo />}
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
