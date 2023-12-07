

import {Link} from 'react-router-dom'
import { useDispatch as UseDispatch, useSelector as UseSelector } from 'react-redux';
import { login, logout } from '../redux/userReducer';
import '../style/Header.css';

const header = (props) => {
  
  const { loggedIn } = UseSelector((state) => state.logged);
  const dispatch = UseDispatch();

  return (
    <div style={{display: 'flex',justifyContent: 'space-between',alignItems: 'center'}} id='test'>
      <Link style={{marginRight: '8px', textDecoration: 'none', color: 'white'}} to="/">{props.name}</Link>
      <div className='d-flex'>
        <Link className='btn text-white' style={{marginRight: '8px', color: 'white', textDecoration: 'none'}} to="/profile">Profile</Link>
        { loggedIn ? <button className='btn text-white' onClick={ () => dispatch(logout())}>Logout</button> : ''}   
      </div> 
    </div>
  )
}

export default header
