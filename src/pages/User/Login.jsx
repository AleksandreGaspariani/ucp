import React from 'react'

import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='w-100' style={{overflow: 'hidden'}}>
      <div className="d-flex flex-column  justify-content-start align-items-center pt-5 shadow-md" style={{minHeight: '100vh',backgroundColor: 'rgb(229, 229, 229)', width: '100%'}}>
        <div className="d-flex flex-column justify-content-center align-items-center mt-1 px-5 py-2 bg-light rounded shadow-lg" style={{width: '40%'}}>
          <h3 className="bold mt-3">Sign in</h3>
          <p className="bold">Continue to ls-rp.ge</p>
          <hr />
          <form action="" method="login" className="w-100">
              <div className="d-flex flex-column w-100">
                  <input type="text" className="form-control w-100 px-3 mb-3 py-2" placeholder="Email or username" name="username" />
                  <input type="password" className="form-control w-100 px-3 py-2 mt-3" placeholder="Password" name="password" />
                  <a href="user/forgot-password/{id}" style={{textDecoration: 'none',fontWeight: '500'}} className="p-0 m-0 ps-1">Forgot password?</a>
              </div>
              
              <div className="d-flex justify-content-between align-items-center flex-row mt-4">
                  {/* <a href="/register" style={{textDecoration: 'none',fontWeight: '500'}}>Create Account</a> */}
                  <Link to={'/register'} style={{textDecoration: 'none', textAlign: 'left', fontWeight: '500'}}>Create Account</Link>
                  <img src="/textPNG.png" alt="" height="40px" />
                  <input type="submit" value="Sign In" className="btn btn-outline-dark" />
              </div>
          </form>

        </div>
        <div className="d-flex justify-content-evenly mt-3 w-sm-100" style={{width: '40%'}}>
            <a href="https://discord.gg/uDdbbgv74u" className="d-flex align-items-center w-auto" style={{textDecoration: 'none'}}>
                <img src="/discord.png" alt="" width="20px" />
                <small className="ms-2">Discord</small>
            </a>
            <a href="https://ls-rp.ge" className="d-flex align-items-center w-auto" style={{textDecoration: 'none'}}>
                <span className="material-symbols-outlined" style={{fontSize: '20px'}}>share_windows</span>
                <small className="ms-2">Forum</small>
            </a>
            <a href="#map" className="d-flex align-items-center w-auto" style={{textDecoration: 'none'}}>
                <span className="material-symbols-outlined" style={{fontSize: '20px'}}>map</span>
                <small className="ms-2">Map</small>
            </a>
        </div>
        <div className="d-flex justify-content-center align-items-center mt-4" style={{width: '40%'}}>
            <p className="m-0" style={{color: 'rgba(132, 132, 132, 0.57)'}}>&copy; ls-rp.ge 2023 - ∞. all rights reserved. - <i>Terms & Condition</i></p>
        </div>
      </div>
    </div>
  )
}

export default Login
