import React, { useState } from 'react'
import UserSidebar from './UserSidebar'
import MessageContainer from './MessageContainer'

const Home = () => {
  const [selectedUser, setSelectedUser] = useState(null)
  const [isMobileChatOpen, setIsMobileChatOpen] = useState(false)

  const handleUserSelect = (user) => {
    setSelectedUser(user)
    setIsMobileChatOpen(true)
  }

  const handleBackToList = () => {
    setIsMobileChatOpen(false)
    setSelectedUser(null)
  }

  return (
    <div className="relative flex h-screen overflow-hidden">
      {/* Animated Background with Gradient Orbs */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main Container */}
      <div className="relative z-10 flex w-full h-full">
        
        {/* Sidebar - Hidden on mobile when chat is open */}
        <div className={`
          ${isMobileChatOpen ? 'hidden' : 'flex'} 
          md:flex w-full md:w-[380px] lg:w-[420px] 
          flex-shrink-0 h-full
        `}>
          <div className="w-full h-full glass-effect border-r border-white/5">
            <UserSidebar onUserSelect={handleUserSelect} />
          </div>
        </div>

        {/* Message Area - Full screen on mobile when open */}
        <div className={`
          ${isMobileChatOpen ? 'flex' : 'hidden'} 
          md:flex flex-1 h-full relative
        `}>
          <div className="w-full h-full">
            <MessageContainer 
              selectedUser={selectedUser} 
              onBack={handleBackToList}
            />
          </div>
        </div>

        {/* Empty State for Desktop */}
        {!selectedUser && (
          <div className="hidden md:flex flex-1 items-center justify-center bg-slate-950/50">
            <div className="text-center space-y-4 px-8 animate-fade-in">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center backdrop-blur-xl border border-white/10">
                <span className="text-6xl">💬</span>
              </div>
              <h2 className="text-3xl font-bold gradient-text">Welcome to ChatFlow</h2>
              <p className="text-slate-400 text-lg">Select a conversation to start messaging</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home
