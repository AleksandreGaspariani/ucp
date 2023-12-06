import React from "react";

import Container from './component/Container';
import Header from './component/Header';

import PropertyRequest from "./pages/Property/PropertyRequest";
import HouseRequest from "./pages/Property/HouseRequest";

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Page404 from "./component/Page404";


function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" />
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>

      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" />

      <script src="https://code.jquery.com/jquery-3.7.1.js"></script>

      <BrowserRouter>
        <Header name='LS:RP UCP'/>
        <Routes>
        // TODO: do something with this bunch of the routes
        // FIXME: fix it
        // BUG: there is a bug
          <Route path="/" element={<Container />}> 
            {/* <Route path='/' element={<Dash/>} /> */}
            {/* <Route path="/about/*" element={<About />}> */}
                {/* <Route path='us' element={<Us/>} /> */}
            {/* </Route> */}
            {/* <Route path='/about-us' element={<Us/>} /> */}
            <Route path='/home' element={'home'} />
            <Route path='/characters' element={'characters'} />
            <Route path='/illegal-request-panel' element={'ilegal things'} />
            <Route path='/xmr-list' element={'xmr lists'}/>
            <Route path='/chatlogs' element={'chatlogs'}/>
            <Route path='/property-requests' element={<PropertyRequest />} />
            {/* <Route path='/refund-requests/*' element={'refund'}>
              <Route path='/refund-list' element={'refund list'} />
            </Route>
            <Route path='/affiliate-program' element={'affiliate program'} />
            <Route path='/apply-for-staff/*' element={'apply for staff'}>
              <Route path="/admin" element={'admin'}/>
              <Route path="/supporter" element={'admin'}/>
            </Route> */}
            <Route path="*" element={<Page404 />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
