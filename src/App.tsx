import { createBrowserRouter } from 'react-router';
import { CharacterInfo, CharactersList } from '@pages';

import './App.css';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <CharactersList />
  },
  {
    path: 'character/:id',
    element: <CharacterInfo />
  }
]);
