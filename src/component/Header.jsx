

import {Link} from 'react-router-dom'
import { useDispatch as UseDispatch, useSelector as UseSelector } from 'react-redux';
import { stage } from '../redux/userReducer';
import '../style/Header.css';
import { show , hide} from '../redux/globalReducer';

const header = (props) => {
  
  const { loggedIn, loggingStage, user } = UseSelector((state) => state.logged);
  const dispatch = UseDispatch();

  const linkStyle = {
    marginRight: '8px',
    textDecoration: 'none',
    color: 'white'
  }

  const logout = () => {
    dispatch(show())
    let token = localStorage.getItem('token');
    console.log(localStorage.getItem('token'));
    fetch('http://127.0.0.1:8000/api/logout', {
      method: "POST",
      body: JSON.stringify({
        Token: localStorage.getItem('token')
      }),
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json",
        Authorization: "Bearer "+token
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
      if (data['message']) {
        console.log('success');
      }
      localStorage.clear();
      dispatch(hide())
      window.location.replace('http://localhost:3000');
    })
    
  }

  return (
    <div style={{display: 'flex',justifyContent: 'space-between',alignItems: 'center'}} id='test'>
      { loggingStage !== 2 ? <Link style={linkStyle} onClick={() => { dispatch(stage(0))}} to="/">{props.name}</Link> : <Link style={linkStyle} to="/">{props.name}</Link>}
      <div className='d-flex' style={{gap: '15px'}}>
        { !loggedIn && loggingStage !== 2 ? <Link to={'/login'} onClick={() => {dispatch(stage(1))}} style={linkStyle}>Login</Link> : <Link className='btn' style={linkStyle} to="/profile">{user.name}</Link> }
        { !loggedIn ? <Link to={'/register'} onClick={() => {dispatch(stage(3))}} style={linkStyle}>Register</Link> : <button className='btn text-white' onClick={logout}>Logout</button> }
      </div> 
    </div>
  )
}

export default header
