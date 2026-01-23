// Location: src/Pages/home/UserSidebar.jsx
import React from 'react'
import User from './User'

const UserSidebar = () => {
  return (
    <div className="flex flex-col h-full">
      
      {/* Header & Search */}
      <div className="px-6 pt-6 pb-4">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold tracking-wide text-white">Chats</h1>
          {/* Settings Icon Placeholder */}
          <button className="p-2 transition rounded-full hover:bg-slate-800 text-slate-400">
            ⚙️
          </button>
        </div>
        
        {/* Modern Dark Search Input */}
        <div className="relative group">
          <input 
            type="text" 
            placeholder="Search messages..." 
            className="w-full py-3 pl-10 pr-4 transition-all border outline-none rounded-xl bg-slate-800/50 border-slate-700 focus:border-cyan-500 focus:bg-slate-800 text-slate-200 placeholder-slate-500"
          />
          <span className="absolute left-3 top-3.5 text-slate-500 group-focus-within:text-cyan-500 transition-colors">
             🔍
          </span>
        </div>
      </div>

      {/* User List */}
      <div className="flex-1 px-3 space-y-1 overflow-y-auto custom-scrollbar">
        {/* Added an 'active' prop example to show the selected state */}
        <User name="Alice Freeman" lastMessage="See you tomorrow! 👋" time="12m" active={true} /> 
        <User name="Design Team" lastMessage="Project files updated." time="1h" unread={3} /> 
        <User name="John Smith" lastMessage="Can we reschedule?" time="3h" /> 
        <User name="Sarah Connor" lastMessage="Target acquired." time="1d" /> 
        <User name="David Miller" lastMessage="Thanks for the help." time="2d" /> 
        <User name="Mom" lastMessage="Call me when you can." time="3d" /> 
      </div>
    </div>
  )
}

export default UserSidebar