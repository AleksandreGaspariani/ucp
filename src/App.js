import React, { useEffect } from "react";

import Container from './component/Container';
import Header from './component/Header';

import PropertyRequest from "./pages/Property/PropertyRequest";
import HouseRequest from "./pages/Property/HouseRequest";

import Login from "./pages/User/Authentication";

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Page404 from "./component/Page404";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, stage, user } from "./redux/userReducer";
import { loading } from "./redux/globalReducer"
import Register from "./pages/User/Register";
import AuthorisedRoutes from "./component/routes/AuthorisedRoutes";
import NotAuthorisedRoutes from "./component/routes/NotAuthorisedRoutes";
import Loading from "./component/Loading";


function App() {

  const { loggedIn } = useSelector((state) => state.logged);
  const { loading } = useSelector((state) => state.global);

  const dispatch = useDispatch();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);

      dispatch(stage(2));
      dispatch(login(foundUser['token']));
      dispatch(user(foundUser));
    }
  })


  // TODO: change sidebar link principes by manually adding, cuz some of them have to be under his parrent btns
  return (

    <div className="App">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" />
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>

      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" />

      <script src="https://code.jquery.com/jquery-3.7.1.js"></script>

      <BrowserRouter>
        { loading ? <Loading /> : '' }
        <Header name='LS:RP UCP'/>
        {/* Routes */}
        { loggedIn ? <AuthorisedRoutes /> : <NotAuthorisedRoutes /> }

      </BrowserRouter>
    </div>
  );
}

export default App;
