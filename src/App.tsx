import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AppLayout from './layouts/AppLayout';
import Page404 from './pages/errorpage';
import routes from './routes';

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Page404 />,
      children: routes
    },
  ])
  return (
    <RouterProvider router={router} />
  );
}

export default App;
