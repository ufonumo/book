import React, { useEffect, useState } from 'react';
import {Nav , Button} from "react-bootstrap";
import {  Switch, Route,Link} from "react-router-dom";
import compass from '../assets/compass-outlined.svg'
import chat from '../assets/chat.svg'
import searchImg from '../assets/search-fill.svg'
import profile from '../assets/user-profile.svg'
import eye from '../assets/eye.svg'
import { ImCancelCircle } from "react-icons/im"

export default function SidebarNav({Navsidebar , showNavSidebar , showProfile}) {

    return (
        <div>

            <Nav className={Navsidebar ? 'nav-menu active col-md-12 text-center d-md-block sidebar' : 'nav-menu col-md-12 text-center  d-md-block bg-light sidebar'} 
                activeKey="/home"
                >
                <div className='navbar'>
                    <Link className='menu-bars ml-auto'>
                        <ImCancelCircle onClick={showNavSidebar} id='close' />
                    </Link>
                </div>

                <div  className="sidebar_sticky" onClick={showNavSidebar}>
                    <Nav.Item>
                        <Nav.Link href="/" className='elpis'> <img src={eye} className='sidenav_icons' alt="eye"/> Elpis</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link > <Link to='/'> <img src={compass} className='pr-3' alt="compass"/> Discover</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1"> <Link> <img src={searchImg} className='sidenav_icons' alt="search"/> Search</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">  <Link onClick={showProfile}> <img src={profile} className='sidenav_icons' alt="profile"/> Profile</Link> </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>  <Link to='#'> <img src={chat} className='sidenav_icons' alt="chat"/> Chat</Link>   </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Button className='btn'>BECOME A TUTOR</Button>
                    </Nav.Item>
                </div>
                
            </Nav>
        </div>
    )
}
