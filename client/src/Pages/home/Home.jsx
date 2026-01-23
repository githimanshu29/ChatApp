// Location: src/Pages/home/Home.jsx
import React from 'react'
import UserSidebar from './UserSidebar'
import MessageContainer from './MessageContainer'

const Home = () => {
  return (
    <div className="flex h-screen overflow-hidden antialiased text-gray-200 bg-slate-900">
      
      {/* Sidebar: 
          - Dark background (slate-900)
          - Subtle border (slate-700/50) for separation
      */}
      <div className="w-full md:w-[350px] lg:w-[400px] flex-shrink-0 border-r border-slate-700/50 bg-slate-900 h-full">
        <UserSidebar />
      </div>

      {/* Message Area: 
          - Hidden on mobile
          - Slightly darker background (slate-950) to create depth focus on the chat
      */}
      <div className="relative flex-col flex-1 hidden h-full md:flex bg-slate-950">
        <MessageContainer />
      </div>

    </div>
  )
}

export default Home
