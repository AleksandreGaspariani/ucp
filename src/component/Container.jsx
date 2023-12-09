
import React from 'react'
import Sidebar from './Sidebar'
import Mainbar from './Mainbar'
import { useDispatch, useSelector } from 'react-redux';
import Authentication from '../pages/User/Authentication'
import { redirect } from 'react-router-dom';

const Container = () => {
  
  const { loggedIn } = useSelector((state) => state.logged);
  const dispatch = useDispatch();

  const [links, setLinks] = React.useState(null);

  React.useEffect(() => {
    fetch('http://localhost:8000/links')
      .then(res => {
        return res.json()
      })
      .then(data => {
        // console.log(data);
        setLinks(data);
      })
  }, []);


  /* TODO: if user is not logged in hide header profile button and show login, register only. 
    also, change view for container if user isn't logged in , I mean show login view  or register view, which
    was requested by user , after that all collect data by logging in , as user name , age 
    it will be better if u build small backend api on laravel which will log u in and out, or will register u
  */
  return (
    <div style={{backgroundColor: 'white', height: '85vh'}} className={'d-flex'}>
        { loggedIn ? links && <Sidebar mass={links}/> : '' }
        <Mainbar />
    </div>
  )
}

export default Container
