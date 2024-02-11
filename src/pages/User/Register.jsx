import React, { useState } from 'react'
import { useDispatch } from 'react-redux'; //useSelector
import { Link } from 'react-router-dom';
import { login, stage } from '../../redux/userReducer';

const Register = () => {

  
  const [username , setUsername] = useState('');
  const [email , setEmail] = useState('');
  const [message, setMessage ] = useState('');
  const [password , setPassword] = useState('');
  
  const dispatch = useDispatch();
  
  const handleUsername = (e) => {
    setUsername(e.target.value);
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const submitForm = () => {
    fetch('http://127.0.0.1:8000/api/register', {
      method: "POST",
      body: JSON.stringify({
        name: username,
        email: email,
        password: password,
        password_confirmation: password
      }),
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json",
      }
    })
    .then((res) => {
      if (res.status === 200) {
        console.log('success');
        return res.json();
      }else {
        return res.json();
      } 
    })
    .then(data => {
      if (data['user']) {
        let userData = JSON.stringify(data['user'])
        localStorage.setItem('user',userData);
        localStorage.setItem('token',data['token']);
        dispatch(stage(2));
        dispatch(login(data['token']));
      }

      if (data['message']) {
        setMessage(data['message']);
      }
      console.log(message);
    })
  };

  return (
    <div className='w-100'>
      <div className="d-flex flex-column  justify-content-start align-items-center pt-5 shadow-md" style={{minHeight: '85vh',backgroundColor: 'rgb(229, 229, 229)', width: '100%', overflow: 'hidden'}}>
        <div className="d-flex flex-column justify-content-center align-items-center mt-1 px-5 py-2 bg-light rounded shadow-lg" style={{width: '40%'}}>
          <h3 className="bold mt-3">Sign in</h3>
          <p className="bold">Continue to ls-rp.ge</p>
          <div className="w-100">
              <div className="d-flex flex-column w-100">
                  <input type="text" className="form-control w-100 px-3 mb-1 py-1" placeholder="Username" name="username" id='username' onChange={handleUsername}/>
                  <input type="email" className="form-control w-100 px-3 mb-1 py-1 mt-3" placeholder="Email" name="email" id='email' onChange={handleEmail}/>
                  <input type="password" className="form-control w-100 px-3 py-1 mt-3" placeholder="Password" name="password" id='password' onChange={handlePassword}/>
                  <a href={"#"} style={{textDecoration: 'none',fontWeight: '500'}} className="p-0 m-0 ps-1" aria-disabled>Forgot password?</a>
              </div>
              <div className="d-flex justify-content-between align-items-center flex-row mt-4">
                  {/* <a href="/register" style={{textDecoration: 'none',fontWeight: '500'}}>Create Account</a> */}
                  <Link to={'/register'} style={{textDecoration: 'none', textAlign: 'left', fontWeight: '500'}}>Create Account</Link>
                  <input type="submit" value="Sign In" className="btn btn-outline-dark" onClick={submitForm}/>
              </div>
          </div>

        </div>
        <div className="d-flex justify-content-evenly mt-3 w-sm-100" style={{width: '40%'}}>
            <a href={"https://discord.gg/uDdbbgv74u"} className="d-flex align-items-center w-auto" style={{textDecoration: 'none'}}>
                <img src="/discord.png" alt="" width="20px" />
                <small className="ms-2">Discord</small>
            </a>
            <a href={"https://ls-rp.ge"} className="d-flex align-items-center w-auto" style={{textDecoration: 'none'}}>
                <span className="material-symbols-outlined" style={{fontSize: '20px'}}>share_windows</span>
                <small className="ms-2">Forum</small>
            </a>
            <a href={"#map"} className="d-flex align-items-center w-auto" style={{textDecoration: 'none'}}>
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

export default Register
