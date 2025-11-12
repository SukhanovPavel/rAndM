import { CharacterInfo, CharactersList } from '@pages';
import { createBrowserRouter } from 'react-router';

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
