import React from 'react'

import {
    Route, Routes,
} from 'react-router-dom';

import Container from '../Container';
import Login from '../../pages/User/Login';
import Register from '../../pages/User/Register';
import NotAuthorized from '../NotAuthorized';

const NotAuthorisedRoutes = () => {
  return (
    <div>
    <Routes>
        <Route path="/" element={ <Container />} />
          <Route path="/login" element={ <Login /> } />
          <Route path="/register" element={ <Register /> } />
          <Route path="*" element={<NotAuthorized />} />
        {/* </Route> */}
    </Routes>
    </div>
  )
}

export default NotAuthorisedRoutes
