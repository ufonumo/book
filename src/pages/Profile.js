import { Switch, Route, Link } from 'react-router-dom';
import david from '../assets/unsplash.jpg';
import { MdKeyboardBackspace } from 'react-icons/md';
import ProfileComponent from '../components/ProfileComponent';
import NoClass from '../components/NoClass';

export default function Profile({ profile, showProfile }) {
  return (
    <div>
      <div
        className={profile ? ' col-lg-6 ml-auto booking profile active ' : 'col-lg-6 ml-auto profile booking d-none'}
      >
        <div className="profile_padding">
          <Link>
            <MdKeyboardBackspace onClick={showProfile} className="profile_response_btn" />
          </Link>

          <div className=" row  profle_img">
            <div className="profile_left col-sm-4">
              <img src={david} alt="" />
            </div>
            <div className="profile_right col-sm-8">
              <h5>Precious Jonah</h5>
              <sub>INTERESTED IN</sub>
              <ul>
                <li className="ml-1">Tech</li>
                <li>Tech</li>
                <li>Tech</li>
              </ul>
            </div>
          </div>

          <div className="booking_describe pt-2">
            <h6>ABOUT ME</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ratione facere, enim vero quod recusandae
              harum praesentium amet, voluptatum nulla voluptates. Ducimus eligendi voluptatibus in doloremque sit amet
              consectetur adipisicing elit. Eos ratione facere, enim vero quod recusandae harum similique quaerat porro
              delectus.
            </p>
          </div>

          <ProfileComponent />
          {/* <NoClass/> */}
        </div>
      </div>
    </div>
  );
}
