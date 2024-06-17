import React from 'react';
import { Link } from 'react-router-dom';
import { openProfilePage } from '../redux/action/authActions';
import '../styles/navbar.css'
import { useSelector, useDispatch } from 'react-redux';

function Navbar(props) {
  const auth = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();


  const handleOpenProfilePage = () => {
    dispatch(openProfilePage(true));
  }


  return (
    auth.user ?
      <nav className="navbar navbar-expand-md bg-primary navbar-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <button className='profile_btn navbar-brand position-absolute top-0 end-0 p-0' onClick={handleOpenProfilePage}>
          <img src={require('../assets/myPhoto.jpg')} alt="user-pic" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/"><button className="nav-link active">Home</button></Link>
            </li>

            <li className="nav-item">
              <Link to="/letters/joiningLetter"><button className="nav-link">Joining Letter</button> </Link>
            </li>
            <li className="nav-item">
              <Link to="/letters/offerLetter"><button className="nav-link">Offer Letter</button> </Link>
            </li>
            <li className="nav-item">
              <Link to="/carrier"><button className="nav-link">Carrier</button> </Link>
            </li>

          </ul>
        </div>
      </nav>
      :
      <div className="nav">
        <Link to="/users/signup">
          <button className='menuButton'>SignUp</button>
        </Link>

        <Link to="/users/login">
          <button className='menuButton'>Login</button>
        </Link>
      </div>
  );
}

export default Navbar;
