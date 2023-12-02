import React from "react";

import Container from './component/Container';
import Header from './component/Header';

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" />
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>

      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" />

      <script src="https://code.jquery.com/jquery-3.7.1.js"></script>

      <BrowserRouter>
        <Header name='LS-RP UCP'/>
        <Routes>
          <Route path="/" element={<Container />}>
            {/* <Route path='/' element={<Dash/>} /> */}
            {/* <Route path="/about/*" element={<About />}> */}
                {/* <Route path='us' element={<Us/>} /> */}
            {/* </Route> */}
            {/* <Route path='/about-us' element={<Us/>} /> */}
            <Route path='/test' element={'test'} />
            <Route path='/test-two' element={'test-two'} />
            <Route path='/test-three' element={'test-three'} />
            <Route path='/profile' element={'profile'}>

            </Route>
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
