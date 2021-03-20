import React from 'react';
import {Nav , Navbar , FormControl , Form , InputGroup} from "react-bootstrap";
import {  Switch, Route,Link} from "react-router-dom";
import { BsBell } from "react-icons/bs"
import { CgProfile } from "react-icons/cg"
import { AiOutlineSearch } from "react-icons/ai"
import * as FaIcons from 'react-icons/fa';


const NavbarElpis = ( {showNavSidebar, showProfile} ) => {
    return (
        <div className='mt-4 nav_bar' >
            <Navbar expand="lg"  className='' fixed="top">
                <div className='navbar'  >
                    <Link className='menu-bars mr-auto'>
                        <FaIcons.FaBars onClick={showNavSidebar} />
                    </Link>
                </div>
                <Form inline>
                    <InputGroup className=" navbar_input">
                        <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1"><AiOutlineSearch /></InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl type="text"  placeholder=" Search classes..." className="mr-sm-2 search_bar" />
                    </InputGroup>
                </Form>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav ">
                        <Nav className="ml-auto text-center">
                        <Nav.Link > <Link to="/" className="nav-link link">Notfication</Link> </Nav.Link>
                        <Nav.Link > <Link to="/UpdateOnstocks" className="nav-link link"><BsBell/></Link> </Nav.Link>
                        <Nav.Link > <Link  className="nav-link link"><CgProfile onClick={showProfile} /></Link> </Nav.Link>

                    </Nav>

                    
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavbarElpis;
