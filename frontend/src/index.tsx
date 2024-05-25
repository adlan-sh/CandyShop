import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './routes/Root';
import Catalog from './routes/Catalog';
import Layout from './routes/Layout';
import App from './App';
import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import axios from 'axios';

axios.create({
  baseURL: "http://localhost:7292"
})


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
      },
      {
        path: "/pay",
        element: <App />
      }
    ]
  }
])

const queryClient = new QueryClient();

const root = ReactDOM
  .createRoot(
    document.getElementById('root') as HTMLElement
  );
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routers} />
    </QueryClientProvider>
  </React.StrictMode>
);

reportWebVitals();
