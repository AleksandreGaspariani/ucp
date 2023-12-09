import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from '../../redux/userReducer';

// import { Link, useNavigate } from 'react-router-dom'

const HouseRequest = () => {

    // const navigate = useNavigate();
    const { loggedIn } = useSelector((state) => state.logged);
    const dispatch = useDispatch();

  return (
    <div className='w-100 h-100 border rounded-3 d-flex justify-content-start px-3 py-5' id='property-content'>
      <h2>House Request</h2>
      { loggedIn ? 'Logged in' : 'Not Logged'}

      <button onClick={() => dispatch(login('test'))}>login</button>
      <button onClick={() => dispatch(logout())}>logout</button>
    </div>
  )
}

export default HouseRequest
