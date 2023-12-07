
import React from 'react'
import Sidebar from './Sidebar'
import Mainbar from './Mainbar'

const Container = () => {

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
  }, [])

  // let data = [
  //     {
  //       id: 0,
  //       link: 'test',
  //       name: 'Test',
  //       symbol: 'home'
  //     },{
  //       id: 1,
  //       link: 'test-two',
  //       name: 'Test Seconde',
  //       symbol: 'person'
  //     },{
  //       id: 2,
  //       link: 'test-three',
  //       name: 'Test third one',
  //       symbol: 'settings'
  //     }
  //   ];

  /* TODO: if user is not logged in hide header profile button and show login, register only. 
    also, change view for container if user isn't logged in , I mean show login view  or register view, which
    was requested by user , after that all collect data by logging in , as user name , age 
    it will be better if u build small backend api on laravel which will log u in and out, or will register u
  */
  return (
    <div style={{backgroundColor: 'white', height: '85vh'}} className={'d-flex'}>
        {links && <Sidebar mass={links}/>}
        <Mainbar />
    </div>
  )
}

export default Container
