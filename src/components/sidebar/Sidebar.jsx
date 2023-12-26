import React, { useState } from 'react';
import './sidebar.css'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaLock, FaLockOpen } from "react-icons/fa6";
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import { FaUserMd } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Logout from '../../pages/logout/Logout';




// const Nav = styled.div`

// `;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 1.1rem;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #023e8a;
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

// const div = styled.div`
//   width: 100%;
// `;

const Sidebar = () => {
  // const LogoutPanel = () => {
  //   return (
  //     <div className='logoutPanel'>
  //       <p>Logout</p>
  //     </div>
  //   )
  // }

  const navigate = useNavigate();
  const handleLogOut = (e) => {
    e.preventDefault()
    navigate({})


  }
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className='icon__container'>
          <NavIcon to='#' >
            <FaLock onClick={showSidebar} className='icon-nav' />
          </NavIcon>
          <div className="profile__container">
            <p className='text'>Good morning , Orlando </p>
            <div className="logout">
              <FaUserMd className='icon__profile' onClick={handleLogOut} />
              <Logout />
            </div>
          </div>
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