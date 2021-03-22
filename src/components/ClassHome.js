import React, { useEffect, useState } from 'react';
import { Switch, Route, Link } from "react-router-dom";
import Bookings from '../pages/Bookings';

export default function ClassHome({ profile }) {
    const API = 'http://elpis.sucursalsvirtual.com/apiv1/course/readall.php'
    const [classHome, setClassHome] = useState([]);

    useEffect(() => {

        const getClass = async () => {
            const response = await fetch(API);
            let data = await response.json();
            setClassHome(data.records);
        };

        getClass()
    }, []);

    // to open the booking page
    const [booking, setBooking] = useState(false)
    const showBooking = () => {
        setBooking(!booking)
        console.log(booking);
    };

    

    return (
        <div className='pt-5 class_home'>
            <div className='home_control'>
                <h3>CLASSES FOR YOU</h3>
            </div>


            <div className="row">
                {classHome.map(list => (

                    <div onClick={showBooking} value={list.id} className={booking || profile ? "col-lg-3 class_home filter_back" : 'col-lg-3 class_home'} key={list.id}>
                        <sub>{list.category}</sub>
                        <img src={list.filelocation} alt="class images" />
                        <h6>{list.title}</h6>
                        <p>₦{list.cost} NGN</p>
                    </div>
                ))}

            </div>

             <Bookings />
        </div>


    )


}
