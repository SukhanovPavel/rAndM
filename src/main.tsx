import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router/dom';
import { router } from './App.tsx';
import { Layout } from '@widgets';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  </StrictMode>
);
