import React from 'react';
import { Link } from 'react-router-dom';
import { logout, openProfilePage } from '../redux/action/authActions';
import '../styles/profile.css'
import { useSelector, useDispatch } from 'react-redux';


function Profile(props) {
  const auth = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();

  const logoutFromDevice = () => {
    dispatch(logout());
    dispatch(openProfilePage(false));
  }

  const handleClosePage = () => {
    dispatch(openProfilePage(false));
  }

  return (
    <div className="Profile">
      <button className='closePageBtn' onClick={handleClosePage}>
        <img src={require('../assets/crossbtn.png')} alt='cut' />
      </button>

      <div className='profile_pic_and_name'>
        <div className='rounded-img-container'>
          <img src={require('../assets/myPhoto.jpg')} alt="user-pic" />
        </div>
        <span className='name'>{auth.user.name}</span>
      </div>

      <div className='profile_item_container'>
        <div className='profile_item'>
          <Link to="/setting">
            <button>Setting</button>
          </Link>
        </div>

        <div className='profile_item'>
          <button className='logout' onClick={logoutFromDevice}>Log out</button>
        </div>
      </div>

    </div>
  );
}

export default Profile;
