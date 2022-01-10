import React from 'react';
import './mainlayouts.css';
import Home from "../Homepage/Home";
import {Link, Outlet} from 'react-router-dom';
import { Section } from './Section';
import {Footer} from './Footer';


const MainLayout: React.FC = (): JSX.Element => {
  return (
    <>
      <nav>
        <div className='layout'>
          <div className='layouts'>
          <li><Link to='/'>Main Page</Link></li>
          <li><Link to='/account/add'>Route Page </Link></li>
          <li><Link to='/account/list'>List Accounts</Link></li>
          <li><Link to='/account/1'>View Account</Link></li>
        </div>
        </div>
      </nav>
      <Home/>
      <Section/>
      <Footer/>
      <Outlet />
    </>
  );
};

export default MainLayout;