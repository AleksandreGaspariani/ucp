import { useEffect, useState } from 'react'
import {Outlet} from 'react-router-dom'

const Mainbar = () => {

  return (
    <div className={'w-75 d-flex flex-column'}>
      <Outlet />
    </div>
  )
}

export default Mainbar
