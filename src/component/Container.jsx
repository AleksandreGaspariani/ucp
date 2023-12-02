
import React from 'react'
import Sidebar from './Sidebar'
import Mainbar from './Mainbar'

const Container = () => {

  const [links, setLinks] = React.useState('test');

  // const fetchLinks = () =>{ 
  //   let links = fetch('http://localhost:8000/links').then((res) => res.json()).then((l)=>setLinks(l));
  //   return links;
  // }

  // React.useEffect(() => {
  //   fetchLinks();
  // }, [])

  let data = [
      {
        id: 0,
        link: 'test',
        name: 'Test',
        symbol: 'home'
      },{
        id: 1,
        link: 'test-two',
        name: 'Test Seconde',
        symbol: 'person'
      },{
        id: 2,
        link: 'test-three',
        name: 'Test third one',
        symbol: 'settings'
      }
    ];

  return (
    <div style={{backgroundColor: 'white', height: '85vh'}} className={'d-flex'}>
        <Sidebar mass={data}/>
        <Mainbar />
    </div>
  )
}

export default Container
