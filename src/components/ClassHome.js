import React, { useEffect, useState } from 'react';

export default function ClassHome({showBooking , setClassId, classHome, booking , profile}) {

    return (
        <div className='pt-5 class_home'>
            <div className='home_control'>
                <h3>CLASSES FOR YOU</h3>
            </div>

            <div className="row">
                {classHome.map( list  =>(
                    <div onClick={showBooking} setClassId={list.id} className={booking || profile ? "col-lg-3 class_home filter_back" : 'col-lg-3 class_home'} key={list.id}>
                        <sub>{list.category}</sub>
                        <img src={list.filelocation} alt="class images"/>
                        <h6>{list.aim}</h6>
                        <p>₦{list.cost} NGN</p>
                    </div>
                ))}
               
            </div>
        </div>
    )
}
