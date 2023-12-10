import React from 'react'

const Loading = () => {
  return (
    <>
      <div className="position-absolute w-100 vh-100 d-flex justify-content-center align-items-center" style={{background: 'rgba(0,0,0,0.6'}}>
        <img src="/loading2.gif" className='rounded-5' alt="" width={'300px'} style={{marginLeft: '0px'}}/>
      </div>
    </>
  )
}

export default Loading
