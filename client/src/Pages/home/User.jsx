import React from 'react'

const User = ({ name, lastMessage, time, active, unread, avatar, isGroup, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`
        relative group flex items-center p-3.5 rounded-2xl cursor-pointer transition-all duration-300
        ${active 
          ? 'bg-gradient-to-r from-cyan-600/20 to-blue-600/20 shadow-lg border border-cyan-500/30' 
          : 'hover:bg-slate-800/40 border border-transparent hover:border-white/5'
        }
      `}
    >
      {/* Avatar with Status */}
      <div className="relative flex-shrink-0">
        <div className={`
          w-14 h-14 rounded-2xl overflow-hidden border-2 transition-all
          ${active ? 'border-cyan-500 shadow-neon' : 'border-slate-700 group-hover:border-slate-600'}
        `}>
          <img 
            src={`https://ui-avatars.com/api/?name=${avatar}&background=${isGroup ? 'random' : 'gradient'}&color=fff&bold=true`}
            alt={name}
            className="object-cover w-full h-full"
          />
        </div>
        
        {/* Online Status Indicator */}
        {active && !isGroup && (
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-slate-900 shadow-lg"></div>
        )}
        
        {/* Group Badge */}
        {isGroup && (
          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full border-2 border-slate-900 flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
          </div>
        )}
      </div>

      {/* User Info */}
      <div className="flex-1 min-w-0 ml-4">
        <div className="flex items-center justify-between mb-1">
          <h3 className={`
            text-base font-semibold truncate transition-colors
            ${active ? 'text-white' : 'text-slate-200 group-hover:text-white'}
          `}>
            {name}
          </h3>
          <span className={`
            text-xs font-medium ml-2 flex-shrink-0
            ${active ? 'text-cyan-400' : 'text-slate-500'}
          `}>
            {time}
          </span>
        </div>
        
        <div className="flex items-center justify-between gap-2">
          <p className={`
            text-sm truncate flex-1
            ${unread 
              ? 'text-slate-100 font-medium' 
              : active 
                ? 'text-slate-300' 
                : 'text-slate-400'
            }
          `}>
            {lastMessage}
          </p>
          
          {/* Unread Badge with Gradient */}
          {unread && (
            <div className="flex-shrink-0 min-w-[24px] h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center px-2 shadow-neon">
              <span className="text-xs text-white font-bold">{unread}</span>
            </div>
          )}
        </div>
      </div>

      {/* Hover Effect Indicator */}
      <div className={`
        absolute right-3 opacity-0 group-hover:opacity-100 transition-opacity
        ${active ? 'opacity-100' : ''}
      `}>
        <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  )
}

export default User
