import React from 'react'

import {
    Route, Routes,
} from 'react-router-dom';

import Container from '../Container';
import PropertyRequest from '../../pages/Property/PropertyRequest';
import Page404 from '../Page404';

const AuthorisedRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={ <Container />} >
            {/* <Route path="/" element={<Container />}>  */}
            {/* <Route path='/' element={<Dash/>} /> */}
            {/* <Route path="/about/*" element={<About />}> */}
                {/* <Route path='us' element={<Us/>} /> */}
            {/* </Route> */}
            {/* <Route path='/about-us' element={<Us/>} /> */}
            <Route path='/login' element={<h1 className={"text-success w-100 vh-100 d-flex justify-content-center align-items-center"}>You logged in successfully</h1>} />
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
    </>
  )
}

export default AuthorisedRoutes
