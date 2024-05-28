import React, { createContext, useContext } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './routes/Root';
import Catalog from './routes/Catalog';
import Layout from './routes/Layout';
import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';



const routers = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Root />,
      },
      {
        path: "/catalog",
        element: <Catalog />
      }
    ]
  }
])

type ContextType = {
  isAuth: boolean;
  name: string
}
const user = {
  isAuth: false,
  name: ""
}

const Context = createContext<ContextType>(user);
const queryClient = new QueryClient();

const root = ReactDOM
  .createRoot(
    document.getElementById('root') as HTMLElement
  );
root.render(
  <React.StrictMode>
    <Context.Provider value={user}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routers} />
        <ToastContainer />

      </QueryClientProvider>
    </Context.Provider>
  </React.StrictMode>
);

reportWebVitals();

export default Context;
