import React from 'react';
import { useRoutes} from 'react-router-dom';

import MainLayout from '../components/Homepage/MainLayouts';
import AccountDetailView from '../components/Header/MainLayout';
import AccountLayout from '../components/Shoppage/AccountLayout';
const App: React.FC = (): JSX.Element => {
  const mainRoutes = {
    path: '/',
    element: <MainLayout />,
  };

  const accountRoutes = {
    path: 'account',
    element: <AccountLayout />,
    children: [
      {path: ':id', element: <AccountDetailView />},
    ],
  };

  const routing = useRoutes([mainRoutes, accountRoutes]);

  return <>{routing}</>;
};

export default App;
