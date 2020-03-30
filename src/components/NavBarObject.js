import React, { useState } from 'react';
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


const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="positioning">
      <Navbar className="coloring" light expand="md">
        <NavbarBrand href="/menu">
          <img src="assets/logo.png" height="30" width="40" alt="GQ Bar"/>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="#"><span className="fa fa-home fa-lg"></span> Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#"><span className="fa fa-info fa-lg"></span> About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/staff">Staff</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="active" href="./Apps.js">Menu</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Others
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Contacts
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem href="/form">
                  HOT DISHES
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;