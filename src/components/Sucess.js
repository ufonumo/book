import React from 'react'
import {  Switch, Route,Link} from "react-router-dom";
import success from '../assets/success.svg'

export default function Sucess({profile}) {
    return (
        <div className={profile ? " col-lg-6 ml-auto booking profile active ": "col-lg-6 ml-auto profile booking d-none"}>
        <div className="pl-5 pt-4 pr-5 ">
            <div className=" row  pb-5 success mx-auto">
                <img src={success} alt="success image"/>
                <div className='text-center'>
                    <b>Payment Successfull !!!</b>

                    <p>Class link has been sent to your email</p>

                    <Link > <button type='button'> Set your learning schedule </button></Link>
                </div>
                

            
            </div>


            
           

        </div>      

    </div>

    )
}
