/* eslint-disable no-unused-vars */
import React from 'react'
import Chatuser from './Chatuser'
import Messages from './Messages'
import MessageBox from './MessageBox'

const Right = () => {
    return(
        <>
          <div className='font-semibold text-2xl flex-col flex h-screen bg-[#f2efe8] w-[70%] border border-black'>
            <div className='w-full'>
              <Chatuser/>
            </div>
            <Messages/>
            <div className='w-full shadow-top bg-zinc-100'>
              <MessageBox/>
            </div>
          </div>
        </>
    )
}
export default Right