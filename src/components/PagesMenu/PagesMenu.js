import React from 'react';
import { Menu } from 'antd';
import './PageMenu.css';
import { Link } from 'react-router-dom';

const PagesMenu = ({ pages }) => (
  <Menu mode="inline" className="menuItem">
    {pages.map((page) => (
      <Menu.Item key={page.key} className="menu">
        <Link to={page.route} key={page.key}>
          {page.label}
        </Link>
      </Menu.Item>
    ))}
  </Menu>
);
export { PagesMenu };
