import { Link } from "react-router-dom"

const CLink = ({link,name,symbol}) => {
  return (
    <div className={'w-100 d-flex justify-content-center align-items-center my-1 px-3'}>
        <span className={'material-symbols-outlined text-white-50'}>
            {symbol}
        </span>
        <Link style={{textDecoration: 'none', textAlign: 'left'}} className={' w-100 btn text-white-50'} to={link}>{name}</Link>
    </div>
  )
}

export default CLink
