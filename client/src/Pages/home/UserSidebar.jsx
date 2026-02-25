import React, { useState } from 'react'
import User from './User'

const UserSidebar = ({ onUserSelect }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeTab, setActiveTab] = useState('all') // all, unread, groups

  const users = [
    { id: 1, name: "Alice Freeman", lastMessage: "See you tomorrow! 👋", time: "12m", active: true, avatar: "AF" },
    { id: 2, name: "Design Team", lastMessage: "Project files updated.", time: "1h", unread: 3, avatar: "DT", isGroup: true },
    { id: 3, name: "John Smith", lastMessage: "Can we reschedule?", time: "3h", avatar: "JS" },
    { id: 4, name: "Sarah Connor", lastMessage: "Target acquired.", time: "1d", avatar: "SC" },
    { id: 5, name: "David Miller", lastMessage: "Thanks for the help.", time: "2d", avatar: "DM" },
    { id: 6, name: "Mom", lastMessage: "Call me when you can.", time: "3d", unread: 1, avatar: "M" },
  ]

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="flex flex-col h-full">
      
      {/* Header with Profile */}
      <div className="px-6 pt-6 pb-4 border-b border-white/5">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img 
                src="https://ui-avatars.com/api/?name=You&background=gradient&color=fff" 
                alt="Your profile" 
                className="w-12 h-12 rounded-full border-2 border-cyan-500/50 shadow-neon"
              />
              <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-slate-900"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Messages</h1>
              <p className="text-xs text-cyan-400">Online</p>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-2">
            <button className="p-2.5 rounded-xl bg-slate-800/50 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 transition-all border border-white/5 hover:border-cyan-500/30">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
            <button className="p-2.5 rounded-xl bg-slate-800/50 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 transition-all border border-white/5 hover:border-cyan-500/30">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Modern Search Bar with Icon */}
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <svg className="w-5 h-5 text-slate-500 group-focus-within:text-cyan-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input 
            type="text" 
            placeholder="Search conversations..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full py-3.5 pl-12 pr-4 bg-slate-800/40 border border-white/5 rounded-2xl outline-none focus:border-cyan-500/50 focus:bg-slate-800/60 text-slate-200 placeholder-slate-500 transition-all focus:shadow-neon"
          />
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 mt-4">
          {['all', 'unread', 'groups'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                px-4 py-2 rounded-xl text-sm font-medium transition-all capitalize
                ${activeTab === tab 
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-neon' 
                  : 'bg-slate-800/30 text-slate-400 hover:bg-slate-800/50 hover:text-slate-300 border border-white/5'
                }
              `}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* User List with Custom Scrollbar */}
      <div className="flex-1 px-3 py-2 space-y-1 overflow-y-auto custom-scrollbar">
        {filteredUsers.map((user, index) => (
          <div 
            key={user.id}
            className="animate-slide-in-left"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <User 
              {...user}
              onClick={() => onUserSelect(user)}
            />
          </div>
        ))}
        
        {filteredUsers.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-center py-12">
            <div className="w-20 h-20 mb-4 bg-slate-800/50 rounded-full flex items-center justify-center">
              <span className="text-4xl">🔍</span>
            </div>
            <p className="text-slate-400">No conversations found</p>
          </div>
        )}
      </div>

      {/* Bottom Quick Actions */}
      <div className="p-4 border-t border-white/5 bg-slate-900/50">
        <div className="flex gap-2">
          <button className="flex-1 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-medium transition-all shadow-neon hover:shadow-neon-lg transform hover:scale-[1.02] active:scale-95">
            <span className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              New Chat
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default UserSidebar
