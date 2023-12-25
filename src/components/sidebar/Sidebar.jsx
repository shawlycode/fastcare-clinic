import React, { useState } from 'react';
import './sidebar.css'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaLock, FaLockOpen } from "react-icons/fa6";
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';

const Nav = styled.div`
 
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 1.1rem;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const div = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#ffc300" }}>
        <div>
          <NavIcon to='#'>
            <FaLock onClick={showSidebar} />
          </NavIcon>
        </div>
        <SidebarNav sidebar={sidebar}>
          <div className='sidebar__wrapper'>
            <NavIcon to='#'>
              <FaLockOpen onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </div>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;