import React, { useEffect, useState } from 'react';
import HomeCarousel from './HomeCarousel';
import ClassHome from './ClassHome';
import Bookings from '../pages/Bookings';
import SidebarNav from './SidebarNav';
import NavbarElpis from './NavbarElpis';
import Profile from '../pages/Profile';
import Sucess from './Sucess';
import SearchClass from '../pages/SearchClass';

export default function Content() {
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

    const [classHome, setClassHome] = useState([]);

    const [classId, setClassId] = useState('')

    const handleClassId = (e) =>{
        setClassId(e.target.value)

    }

    console.log(classId);

    useEffect(()=>{
    
        const getClass = async ()=>{
          const response = await fetch( API);
          let data = await response.json();
          setClassHome(data.records);
        };
    
        getClass()
    }, []);

    return (
        <div>
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

                        <HomeCarousel
                            booking={booking}
                            profile={profile}
                        />
                        <ClassHome
                            showBooking={showBooking}
                            booking={booking}
                            profile={profile}
                            classHome={classHome}
                            // setClassId={setClassId}
                            handleClassId={handleClassId}
                         />

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
        
        </div>
    )
}
