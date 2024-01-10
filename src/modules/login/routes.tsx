import type { Router as RemixRouter } from '@remix-run/router';
import { RouteObject } from 'react-router-dom';

import LoginScreen from './screens/LoginScreen';

export const loginRoutes: RouteObject[] = [
  {
    path: '/login',
    element: <LoginScreen />,
  },
];
