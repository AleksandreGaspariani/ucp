

import {Link} from 'react-router-dom'
import { useDispatch as UseDispatch, useSelector as UseSelector } from 'react-redux';
import { login, logout, stage } from '../redux/userReducer';
import '../style/Header.css';

const header = (props) => {
  
  const { loggedIn, loggingStage } = UseSelector((state) => state.logged);
  const dispatch = UseDispatch();

  const linkStyle = {
    marginRight: '8px',
    textDecoration: 'none',
    color: 'white'
  }

  return (
    <div style={{display: 'flex',justifyContent: 'space-between',alignItems: 'center'}} id='test'>
      { loggingStage !== 2 ? <Link style={linkStyle} onClick={() => { dispatch(stage(0))}} to="/">{props.name}</Link> : <Link style={linkStyle} to="/">{props.name}</Link>}
      <div className='d-flex' style={{gap: '15px'}}>
        { !loggedIn && loggingStage !== 2 ? <Link to={'/login'} onClick={() => {dispatch(stage(1))}} style={linkStyle}>Login</Link> : <Link className='btn' style={linkStyle} to="/profile">Profile</Link> }
        { !loggedIn ? <Link to={'/register'} style={linkStyle}>Register</Link> : <button className='btn text-white' onClick={ () => dispatch(logout())}>Logout</button> }
      </div> 
    </div>
  )
}

export default header
