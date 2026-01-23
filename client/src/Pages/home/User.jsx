// Location: src/Pages/home/User.jsx
import React from 'react'

const User = ({ name, lastMessage, time, active, unread }) => {
  return (
    <div 
      className={`
        relative group flex items-center p-3 rounded-xl cursor-pointer transition-all duration-300
        ${active 
          ? 'bg-slate-800/80 shadow-lg border-l-4 border-cyan-500' // Active State
          : 'hover:bg-slate-800/40 border-l-4 border-transparent' // Hover State
        }
      `}
    >
      {/* Avatar */}
      <div className="relative">
        <img 
          src={`https://ui-avatars.com/api/?name=${name}&background=0D8ABC&color=fff`} 
          alt="avatar" 
          className="object-cover w-12 h-12 transition-transform border rounded-full shadow-md border-slate-600 group-hover:scale-105"
        />
        {active && (
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-cyan-400 rounded-full border-2 border-slate-900 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
        )}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0 ml-4">
        <div className="flex items-baseline justify-between mb-1">
          <h3 className={`text-sm font-semibold truncate ${active ? 'text-white' : 'text-slate-200'}`}>
            {name}
          </h3>
          <span className="text-xs font-medium text-slate-500">{time}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <p className={`text-sm truncate w-32 md:w-40 ${unread ? 'text-slate-100 font-medium' : 'text-slate-400'}`}>
            {lastMessage}
          </p>
          
          {/* Neon Unread Badge */}
          {unread && (
            <div className="min-w-[20px] h-5 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full flex items-center justify-center px-1.5 shadow-lg shadow-cyan-900/20">
              <span className="text-[10px] text-white font-bold">{unread}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default User