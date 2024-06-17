import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import { useSelector, useDispatch } from 'react-redux';
import '../styles/app.css'
import { Home, Login, Signup, } from '../pages/index';
import { Profile } from '../components/index';

function App(props) {
  const auth = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();

  const PrivateRoute = ({ children }) => {
    if (auth.user) {
      return children;
    }
    return <Navigate to="/users/login" />
  }

  const Page404 = () => {
    return <h1>404</h1>
  };

  return (
    <div className="App">
      <Navbar />
      {
        auth.isOpenProfilePage && <Profile auth={auth} dispatch={dispatch} />
      }

      <Routes>
        <Route path="/" element={<PrivateRoute> <Home /> </PrivateRoute>} />
        <Route exact path="/users/login" element={<Login />} />
        <Route exact path="/users/signup" element={<Signup />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );

}
export default App;