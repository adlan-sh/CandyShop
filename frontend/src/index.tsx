import React, { createContext, useCallback, useContext, useState } from 'react';
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
import Account from './routes/Account';
import Admin from './routes/Admin';
import Payment from './routes/Payment';
import useGetCart from './api/cart/getCartRequest';


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
        path: "/account",
        element: <Account />
      },
      {
        path: "/admin",
        element: <Admin />
      },
      {
        path: '/pay',
        element: <Payment />
      }
    ]
  }
])

const useUserContext = () => {
  const [auth, isAuth] = useState(false);
  const [changer, setChanger] = useState(0);
  // const first = useContext(Context);
  const toggleAuth = useCallback((boolean: boolean) => {
    isAuth(boolean);
  }, []);



  return {
    toggleAuth,
    auth,
    setChanger,
    changer
  }
}
const queryClient = new QueryClient();

const Context = React.createContext({
  auth: false,
  toggleAuth: (boolean: boolean) => { },
  setChanger: (number: number) => { },
  changer: 0
});
export const AppContextProvider = ({ children, ...props }: any) => {
  const context = useUserContext();
  return <Context.Provider value={context}>{children}</Context.Provider>;
};

export function useAppContext() {
  const context = React.useContext(Context);
  if (!context) throw new Error('Use app context within provider!');
  return context;
}

const root = ReactDOM
  .createRoot(
    document.getElementById('root') as HTMLElement
  );
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routers} />
        <ToastContainer />

      </QueryClientProvider>
    </AppContextProvider>
  </React.StrictMode>
);

reportWebVitals();

export default useUserContext;
