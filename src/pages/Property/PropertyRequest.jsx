import React from 'react'
// import { Link } from 'react-router-dom'
import HouseRequest from './HouseRequest'
import VehicleRequest from './VehicleRequest'

import './style/style.css'

const PropertyRequest = () => {

    const [content, setContent] = React.useState(null)

  return (
    <div className='w-100 px-5 py-3 d-flex flex-column' style={{overflow: 'hidden'}}>
        <div className='d-flex justify-content-evenly align-items-center w-100 mb-5'>
            <button onClick={() => {setContent('HouseRequest')}} className='btn btn-outline-info'>House Request</button>
            <button onClick={() => {setContent('VehicleRequest')}} className='btn btn-outline-info'>Vehicle Request</button>
        </div>
      
      <div style={{overflow: 'auto',height: '90%'}} id='property-scrollbar'>

        { content === 'HouseRequest' ? <HouseRequest /> : ''}
        { content === 'VehicleRequest' ? <VehicleRequest />: '' }

      </div>
    </div>
  )
}

export default PropertyRequest
