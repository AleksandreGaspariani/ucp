import React from 'react'

const NotAuthorized = () => {
  return (
    <div style={{height: '90%', width: '100%'}} className='d-flex justify-content-center flex-column align-items-center'>
      <span className="material-symbols-outlined text-danger" style={{fontSize: '10rem'}}>
            emergency_home
        </span>
        <h1 className='text-danger'>You are not Authorised to do that!</h1>
    </div>
  )
}

export default NotAuthorized
