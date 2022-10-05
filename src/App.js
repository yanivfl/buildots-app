import React from 'react';
import { Layout } from 'antd';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import {
  NavBar, PagesMenu, ExplorerPage, PageNotImplemented, FullSizeBox,
} from './components';

import './App.css';

const PAGES = [{
  key: 'dashboard',
  route: '/dashboard',
  label: 'Dashboard',
  renderer: ({ page }) => <PageNotImplemented page={page} />,
},
{
  key: 'apartments',
  route: '/apartments',
  label: 'Apartments',
  renderer: ({ page }) => <PageNotImplemented page={page} />,
},
{
  key: 'trades',
  route: '/trades',
  label: 'Trades',
  renderer: ({ page }) => <PageNotImplemented page={page} />,
},
{
  key: 'explore',
  route: '/explore',
  label: 'Explore',
  renderer: ({ page }) => <ExplorerPage page={page} />,
},
{
  key: 'plans',
  route: '/plans',
  label: 'Plans',
  renderer: ({ page }) => <PageNotImplemented page={page} />,
},
{
  key: 'Reminders',
  route: '/reminders',
  label: 'reminders',
  renderer: ({ page }) => <PageNotImplemented page={page} />,
},
{
  key: 'reports',
  route: '/reports',
  label: 'Reports',
  renderer: ({ page }) => <PageNotImplemented page={page} />,
},
];

const App = () => (
  <Router>
    <FullSizeBox flexDirection="column" height="100vh">
      <NavBar />
      <Layout style={{ height: '100%' }}>
        <Layout.Sider
          className="sidebar"
        >
          <PagesMenu
            pages={PAGES}
          />
        </Layout.Sider>
        <Layout.Content className="content">
          <Routes>
            {PAGES.map((page) => (
              <Route key={page.key} path={page.route} element={page.renderer({ page })} />
            ))}
          </Routes>
        </Layout.Content>
      </Layout>
    </FullSizeBox>
  </Router>

);

export default App;
