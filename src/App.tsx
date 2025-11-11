import './App.css';
import { CharacterInfo, CharactersList } from '@pages';
import { createBrowserRouter } from 'react-router';

// @ts-ignore
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
