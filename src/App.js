import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sucess from './components/Sucess';
import SidebarNav from './components/SidebarNav';
import NavbarElpis from './components/NavbarElpis';
import Home from './pages/Home';

function App() {
  //to open the side nav
  const [Navsidebar, setNavSidebar] = useState('false');
  const showNavSidebar = () => setNavSidebar(!Navsidebar);

  // to open the booking page
  const [booking, setBooking] = useState('true');
  const showBooking = () => setBooking(!booking);

  const [profile, setProfile] = useState('true');
  const showProfile = () => setProfile(!profile);

  const [success, setSuccess] = useState('false');
  const showSuccess = () => setSuccess(!success);

  return (
    <BrowserRouter>
      <div className="app">
        {/* <Route  exact path="/"  component={LandingPage} /> */}

        <div className={booking || profile ? 'container-fluid  dark_back' : 'container-fluid  '}>
          <div className="row">
            <div
              className={booking || profile ? ' col-lg-3 sidebar-wrapper  filter_back' : '  col-lg-3 sidebar-wrapper'}
            >
              <SidebarNav showNavSidebar={showNavSidebar} Navsidebar={Navsidebar} showProfile={showProfile} />
            </div>

            <div className="col-lg-9" id="page-content-wrapper">
              <NavbarElpis showNavSidebar={showNavSidebar} showProfile={showProfile} />

              <Route exact path="/" booking={booking} profile={profile} component={Home} />

              {/* <Route  exact path="/SearchClass"  component={SearchClass} />
                  <Route  exact path="/Profile"  component={Profile} /> */}

              {/* <Payment 
                    profile={profile}
                    showProfile={showProfile}
                  />

                  <Messages
                      profile={profile}
                    showProfile={showProfile}
                  /> 

                  <Chat
                    profile={profile}
                    showProfile={showProfile}
                  />  */}
              {/* {showBooking && (<Bookings
                      booking={booking}
                      showBooking={showBooking}
                      showProfile={showProfile}
                      showSuccess={showSuccess}
                    /> )} */}

              {/* <Profile
                      profile={profile}
                      showProfile={showProfile}
                    />   */}

              {/* <SearchClass
                      booking={booking}
                      profile={profile}
                      showNavSidebar={showNavSidebar}
                      Navsidebar={Navsidebar}
                      showProfile={showProfile}
                      showBooking={showBooking}
                  />  */}
              {/* 
                     <Sucess
                      profile={profile}

                    />  */}
            </div>
          </div>
        </div>

        {/* <Route  exact path="/"  component={Content} /> */}
        <Route exact path="/Sucess" component={Sucess} />

      </div>
    </BrowserRouter>
  );
}

export default App;
