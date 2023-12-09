
import {useSelector } from 'react-redux'
import {Outlet} from 'react-router-dom'
import Login from '../pages/User/Login'

const Mainbar = () => {

  const { loggingStage } = useSelector((state) => state.logged)

  return (
    <div className={'w-100 d-flex flex-column'}>
      { loggingStage === 0 ? <Login /> : '' }
      <Outlet />
    </div>
  )
}

export default Mainbar
