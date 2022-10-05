import React, { useCallback, useState } from 'react';
import { Layout } from 'antd';
import {
  NavBar, PagesMenu, ExplorerPage, PageNotImplemented, FullSizeBox,
} from './components';

import './App.css';

// TODO use react router
// TODO dynamic import
const PAGES = [{
  key: 'dashboard',
  label: 'Dashboard',
  renderer: ({ page }) => <PageNotImplemented page={page} />,
},
{
  key: 'apartments',
  label: 'Apartments',
  renderer: ({ page }) => <PageNotImplemented page={page} />,
},
{
  key: 'trades',
  label: 'Trades',
  renderer: ({ page }) => <PageNotImplemented page={page} />,
},
{
  key: 'explore',
  label: 'Explore',
  renderer: ({ page }) => <ExplorerPage page={page} />,
},
{
  key: 'plans',
  label: 'Plans',
  renderer: ({ page }) => <PageNotImplemented page={page} />,
},
{
  key: 'Reminders',
  label: 'reminders',
  renderer: ({ page }) => <PageNotImplemented page={page} />,
},
{
  key: 'reports',
  label: 'Reports',
  renderer: ({ page }) => <PageNotImplemented page={page} />,
},
];

const App = () => {
  const [currentPage, setCurrentPage] = useState(PAGES[0]);
  const keyPage = currentPage.key;
  const changeSelectedKey = useCallback(
    (event) => {
      const { key: pageKey } = event;
      setCurrentPage(PAGES.find((page) => page.key === pageKey));
    },
    [],
  );

  const Menu = (
    <PagesMenu
      pages={PAGES}
      selectedKey={keyPage}
      changeSelectedKey={changeSelectedKey}
    />
  );
  return (
    <FullSizeBox flexDirection="column" height="100vh">
      <NavBar />
      <Layout style={{ height: '100%' }}>
        <Layout.Sider
          className="sidebar"
        >
          {Menu}
        </Layout.Sider>
        <Layout.Content className="content">
          {currentPage.renderer({ page: currentPage })}
        </Layout.Content>
      </Layout>
    </FullSizeBox>
  );
};

export default App;
