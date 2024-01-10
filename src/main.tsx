import './main.css';

import type { Router as RemixRouter } from '@remix-run/router';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';

import { loginRoutes } from './modules/login/routes';

const mainRoutes: RouteObject[] = [
  {
    path: '/',
    element: <div>Tela principal</div>,
    errorElement: <div>Pagina não encontrada</div>,
  },
];

const router: RemixRouter = createBrowserRouter([...mainRoutes, ...loginRoutes]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
