import React from 'react'
import Sidebar from '../Components/ChatPageComp/Sidebar'
import ChatBox from '../Components/ChatPageComp/ChatBox'

export default function page() {
  return (
    <div className="flex w-full h-screen">
      <div className="w-[30%] h-full">
        <Sidebar/>
      </div>
      <div className="w-[70%] h-full">
        <ChatBox/>
      </div>
    </div>
  );
}

