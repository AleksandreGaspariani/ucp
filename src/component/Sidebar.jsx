import React from "react";
import CLink from "./CLink";

const Sidebar = ({mass}) => {

  return (
    <>
      <div className={'w-25 bg-dark'} style={{height: '100%'}}>
        <div className={'w-100 d-flex justify-content-between px-3 align-items-center text-white py-4'}>
            <p className={'m-0'}>Navigation</p>
            <small>💠</small>
        </div>
            {mass.map((e)=> <CLink key={e.id} name={e.name} symbol={e.symbol} link={e.link}/>)}
      </div>
    </>
  )
}

export default Sidebar
