import React, { useEffect, useState } from 'react';
import {BrowserRouter , Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import Content from './components/Content'
import Sucess from './components/Sucess';
import SearchClass from './pages/SearchClass';
import Bookings from './pages/Bookings';
import HomeCarousel from './components/HomeCarousel';
import ClassHome from './components/ClassHome';
import SidebarNav from './components/SidebarNav';
import NavbarElpis from './components/NavbarElpis';
import Profile from './pages/Profile';
import Messages from './components/Messages';
import Chat from './components/Chat';
import Payment from './components/Payment';
function App() {

  const API = 'http://elpis.sucursalsvirtual.com/apiv1/course/readall.php'

  //to open the side nav
  const [Navsidebar, setNavSidebar] = useState('false');
  const showNavSidebar = () => setNavSidebar(!Navsidebar);

  // to open the booking page
  const [booking , setBooking] = useState('false')
  const showBooking = () => setBooking(!booking);

  const [profile , setProfile] = useState('false')
  const showProfile = () => setProfile(!profile);

  const [success , setSuccess] = useState('false')
  const showSuccess= () => setSuccess(!success);



  return (
    <BrowserRouter>
      <div className="app">

        <div className={booking || profile ? 'container-fluid  dark_back' : 'container-fluid  '} >
          <div className='row'>
              <div className={booking || profile ? ' col-lg-3 sidebar-wrapper  filter_back' : '  col-lg-3 sidebar-wrapper'}>      
                  <SidebarNav
                      showNavSidebar={showNavSidebar}
                      Navsidebar={Navsidebar}
                      showProfile={showProfile}
                  />
              </div>

              <div className='col-lg-9'  id="page-content-wrapper">

                  <NavbarElpis  
                      showNavSidebar={showNavSidebar}
                      showProfile={showProfile}
                  />

                  <Route  exact path="/" booking={booking}
                      profile={profile} component={HomeCarousel} />

                  <Route  exact path="/SearchClass"  component={SearchClass} />
                  <Route  exact path="/Profile"  component={Profile} />

                  <Payment 
                    profile={profile}
                    showProfile={showProfile}
                  />

                  {/* <Messages
                      profile={profile}
                    showProfile={showProfile}
                  /> */}

                  {/* <Chat
                    profile={profile}
                    showProfile={showProfile}
                  /> */}

                  <Bookings
                      booking={booking}
                      showBooking={showBooking}
                      showProfile={showProfile}
                      showSuccess={showSuccess}
                    /> 

                    <Profile
                      profile={profile}
                      showProfile={showProfile}
                    />  


                  {/* <SearchClass
                      booking={booking}
                      profile={profile}
                      showNavSidebar={showNavSidebar}
                      Navsidebar={Navsidebar}
                      showProfile={showProfile}
                      showBooking={showBooking}
                  /> */}
                    

                    {/* <Sucess
                      profile={profile}

                    /> */}


              </div> 
          </div>

            </div>
        
        {/* <Route  exact path="/"  component={Content} /> */}
        <Route  exact path="/Sucess"  component={Sucess} />
        <Route  exact path="/Bookings/:id"  component={Bookings} />

      </div>
    </BrowserRouter>
    
  );
}

export default App;
