import React, { useState} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { Link} from 'react-router-dom';

const TopNavbar = ({isLogined, changeLogoutState}) => {


  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const logout = () =>{
    changeLogoutState();
    window.location.reload(false);
  }

  return (
    <div>
      <Navbar color="light" light expand="md" className="ml-auto" >
        <NavbarBrand href="/">Record</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink to="/"></NavLink>
            </NavItem>
            

              {
                isLogined ? <div></div>  : <NavItem><NavLink tag={Link} to="/signup">Signup</NavLink></NavItem>
              }
              {
                isLogined ? <NavItem><NavLink onClick={logout}>Logout</NavLink></NavItem> : <NavItem><NavLink tag={Link} to="/login">Login</NavLink></NavItem>
              }
           
  
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Setting
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                    <NavLink tag={Link} to="/setting/record">Record Setting</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default TopNavbar;