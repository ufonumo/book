import { Switch, Route, Link } from 'react-router-dom';
import david from '../assets/unsplash.jpg';
import { MdKeyboardBackspace } from 'react-icons/md';

export default function Chat({ profile, showProfile }) {
  return (
    <div>
      <div
        className={profile ? ' col-lg-6 ml-auto booking profile active ' : 'col-lg-6 ml-auto profile booking d-none'}
      >
        <div className="profile_padding">
          <Link>
            <MdKeyboardBackspace onClick={showProfile} className="profile_response_btn" />
          </Link>

          <div className="row mt-5">
            <div className=" chat message_left">
              <img src={david} alt="" />
              <p className="chat_box">Hello, my name </p>
              <p className="chat_box">
                Hello, my name is Eniola, i'm a backend developer. i'm a backend developeri'm a backend developer
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
