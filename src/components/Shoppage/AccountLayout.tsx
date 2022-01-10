import React from 'react';
import {Link, Outlet} from 'react-router-dom';

const AccountLayout: React.FC = (): JSX.Element => {
  return (
    <div style={{backgroundColor: 'slateGrey'}}>
      <Outlet />
      <button style={{backgroundColor:'black',width:'115px',height:'35px',marginBottom:'10px'}}>
        <Link to='/'style={{textDecoration:'none', color:'white'}}>HOMEPAGE</Link>
      </button>
    </div>
  );
};

export default AccountLayout;