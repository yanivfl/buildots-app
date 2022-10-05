import React from 'react';
import { Menu } from 'antd';
import './PageMenu.css';
import { Link } from 'react-router-dom';

const PagesMenu = ({ pages }) => (
  <Menu mode="inline" className="menu">
    {pages.map((page) => (
      <Menu.Item key={page.key} className="menuItem">
        <Link to={page.route} key={page.key} style={{ color: 'white' }}>
          {page.label}
        </Link>
      </Menu.Item>
    ))}
  </Menu>
);
export { PagesMenu };
