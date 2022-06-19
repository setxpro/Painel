import React, { useContext } from 'react';
import { SidebarContext } from '../../Contexts/SidebarContext';

import { BtnOff, BtnOn, Container } from './styles';

const Sidebar: React.FC = () => {
  const { open, openSidebar } = useContext(SidebarContext);

  return (
      <Container toggle={openSidebar}>
          {!openSidebar && <button onClick={open}><BtnOn/></button>}
          {openSidebar && <button onClick={open}><BtnOff/></button>}
      </Container>
  );
}

export default Sidebar;