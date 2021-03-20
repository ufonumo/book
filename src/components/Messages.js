import {  Switch, Route,Link} from "react-router-dom";
import david from '../assets/unsplash.jpg'
import { MdKeyboardBackspace } from "react-icons/md"
import { AiOutlineSearch } from "react-icons/ai"


export default function Messages({profile , showProfile}) {
    return (
        <div>
              <div className={profile ? " col-lg-6 ml-auto booking profile active ": "col-lg-6 ml-auto profile booking d-none"}>
                <div className="profile_padding">
                    <Link ><MdKeyboardBackspace onClick={showProfile} className='profile_response_btn'/></Link>
                    
                    <div className="message pt-3">
                        <h5>Messages</h5>
                        <AiOutlineSearch/>
                    </div>

                    <div className="row mt-5">
                        <div className="col-lg-3 message_left profile_left">
                              <img src={david} alt=""/>
                        </div>

                        <div className="col-lg-8 message_right ">
                            <h6>Precious Jonah</h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto sint ...</p>
                        </div>

                        <div className="col-lg-1 message_time">
                            <p>10:43pm</p>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-lg-3 message_left profile_left">
                              <img src={david} alt=""/>
                        </div>

                        <div className="col-lg-8 message_right ">
                            <h6>Precious Jonah</h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto sint ...</p>
                        </div>

                        <div className="col-lg-1 message_time">
                            <p>10:43pm</p>
                        </div>
                    </div>
            

            
                    <div className="row mt-5">
                        <div className="col-lg-3 message_left profile_left">
                              <img src={david} alt=""/>
                        </div>

                        <div className="col-lg-8 message_right ">
                            <h6>Precious Jonah</h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto sint ...</p>
                        </div>

                        <div className="col-lg-1 message_time">
                            <p>10:43pm</p>
                        </div>
                    </div>

                    
                    <div className="row mt-5">
                        <div className="col-lg-3 message_left profile_left">
                              <img src={david} alt=""/>
                        </div>

                        <div className="col-lg-8 message_right ">
                            <h6>Precious Jonah</h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto sint ...</p>
                        </div>

                        <div className="col-lg-1 message_time">
                            <p>10:43pm</p>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-lg-3 message_left profile_left">
                              <img src={david} alt=""/>
                        </div>

                        <div className="col-lg-8 message_right ">
                            <h6>Precious Jonah</h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto sint ...</p>
                        </div>

                        <div className="col-lg-1 message_time">
                            <p>10:43pm</p>
                        </div>
                    </div>

                </div>      

            </div>
        
        </div>
    )
}
