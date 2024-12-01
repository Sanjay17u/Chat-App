/* eslint-disable no-unused-vars */
import React from 'react'
import Search from './Search'
import User from './User'
import Logout from './Logout'

const Left = () => {
    return(
        <>
          <h1 className='flex flex-col h-screen bg-[#faf8f6] w-[30%] border border-black'>
            <Search/>
            <User/>
            <Logout/>
          </h1>
        </>
    )
}
export default Left