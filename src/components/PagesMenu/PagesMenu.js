import React from 'react';
import { Menu } from 'antd';
import './PageMenu.css';

const PagesMenu = ({ pages, selectedKey, changeSelectedKey }) => (
  <Menu mode="inline" selectedKeys={[selectedKey]} className="menuItem">
    { pages.map((page) => (
      <Menu.Item key={page.key} onClick={changeSelectedKey} className="menu">
        {page.label}
      </Menu.Item>
    ))}
  </Menu>
);
export { PagesMenu };
