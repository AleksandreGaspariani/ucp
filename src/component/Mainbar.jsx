
import {useSelector } from 'react-redux'
import {Outlet} from 'react-router-dom'
import Login from '../pages/User/Login'

const Mainbar = () => {

  const { loggingStage, loggedIn } = useSelector((state) => state.logged)

  // BUG: login page was duplicating after I restart browser at route /login
  
  return (
    <div className={'w-100 d-flex flex-column'}>
      { loggingStage === 0 ? <Login /> : '' }
      <Outlet />
    </div>
  )
}

export default Mainbar
