import React, { useState, useRef, useEffect } from 'react'

const MessageContainer = ({ selectedUser, onBack }) => {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([
    { id: 1, text: "Hey! Are we still on for the meeting tomorrow? I have the designs ready. 🖥️", sender: 'them', time: '10:30 AM' },
    { id: 2, text: "Yes, absolutely! Send them over, I'd love to take a look before we meet.", sender: 'me', time: '10:32 AM' },
    { id: 3, text: "Great. Sending the Figma link now. By the way, the dark mode looks sick! 🔥", sender: 'them', time: '10:33 AM' },
    { id: 4, text: "Thanks! I spent a lot of time on the color palette and animations.", sender: 'me', time: '10:35 AM' },
  ])
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = () => {
    if (message.trim()) {
      setMessages([...messages, {
        id: messages.length + 1,
        text: message,
        sender: 'me',
        time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
      }])
      setMessage('')
    }
  }

  if (!selectedUser) {
    return (
      <div className="flex items-center justify-center h-full bg-slate-950/50">
        <div className="text-center space-y-4 animate-fade-in">
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center backdrop-blur-xl border border-white/10">
            <span className="text-6xl">💬</span>
          </div>
          <h2 className="text-3xl font-bold gradient-text">Welcome to ChatFlow</h2>
          <p className="text-slate-400 text-lg">Select a conversation to start messaging</p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative flex flex-col w-full h-full bg-slate-950/30">
      
      {/* Header - Glassmorphism with Gradient Border */}
      <div className="absolute top-0 z-20 w-full glass-effect border-b border-white/10">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            {/* Back Button for Mobile */}
            <button 
              onClick={onBack}
              className="md:hidden p-2 rounded-xl bg-slate-800/50 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 transition-all border border-white/5"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-cyan-500/50 shadow-neon">
                  <img 
                    src={`https://ui-avatars.com/api/?name=${selectedUser.avatar}&background=gradient&color=fff&bold=true`}
                    alt={selectedUser.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-slate-900 animate-pulse"></div>
              </div>
              
              <div>
                <h2 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">{selectedUser.name}</h2>
                <p className="flex items-center gap-1.5 text-xs font-medium text-green-400">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Active now
                </p>
              </div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-2">
            <button className="p-2.5 rounded-xl bg-slate-800/50 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 transition-all border border-white/5 hover:border-cyan-500/30 hover:shadow-neon">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </button>
            <button className="p-2.5 rounded-xl bg-slate-800/50 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 transition-all border border-white/5 hover:border-cyan-500/30 hover:shadow-neon">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </button>
            <button className="p-2.5 rounded-xl bg-slate-800/50 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 transition-all border border-white/5 hover:border-cyan-500/30 hover:shadow-neon">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Messages Area with Custom Scrollbar */}
      <div className="flex-1 px-6 pt-24 pb-6 space-y-6 overflow-y-auto custom-scrollbar">
        
        {/* Date Divider */}
        <div className="flex justify-center animate-fade-in">
          <div className="px-4 py-2 text-xs font-medium rounded-full glass-effect text-slate-400 border border-white/5">
            Today, {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
          </div>
        </div>

        {/* Messages */}
        {messages.map((msg, index) => (
          <div 
            key={msg.id}
            className={`
              flex gap-3 max-w-[85%] md:max-w-[70%] group
              ${msg.sender === 'me' ? 'ml-auto flex-row-reverse animate-slide-in-right' : 'animate-slide-in-left'}
            `}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {msg.sender === 'them' && (
              <div className="flex-shrink-0 mt-auto">
                <div className="w-10 h-10 rounded-xl overflow-hidden border-2 border-slate-700">
                  <img 
                    src={`https://ui-avatars.com/api/?name=${selectedUser.avatar}&background=gradient&color=fff&bold=true`}
                    alt=""
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            )}
            
            <div className={`flex flex-col gap-1 ${msg.sender === 'me' ? 'items-end' : 'items-start'}`}>
              <div className={`
                p-4 leading-relaxed rounded-2xl transition-all
                ${msg.sender === 'me' 
                  ? 'bg-gradient-to-br from-cyan-600 to-blue-600 text-white rounded-br-none shadow-neon' 
                  : 'glass-effect text-slate-200 rounded-bl-none border border-white/10'
                }
              `}>
                {msg.text}
              </div>
              <span className="text-[10px] text-slate-500 px-1 opacity-0 group-hover:opacity-100 transition-opacity">
                {msg.time}
              </span>
            </div>
          </div>
        ))}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area - Floating Design */}
      <div className="p-4 border-t border-white/5 glass-effect">
        <div className="flex items-center gap-3">
          
          {/* Attachment Button */}
          <button className="p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 transition-all border border-white/5 hover:border-cyan-500/30 hover:shadow-neon flex-shrink-0">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
            </svg>
          </button>

          {/* Input Field with Glassmorphism */}
          <div className="flex-1 flex items-center gap-3 px-5 py-3 glass-effect rounded-2xl border border-white/10 focus-within:border-cyan-500/50 focus-within:shadow-neon transition-all">
            <input 
              type="text" 
              placeholder="Type your message..." 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 bg-transparent border-none outline-none text-slate-200 placeholder-slate-500"
            />
            
            <button className="p-1 text-slate-400 hover:text-cyan-400 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </div>
          
          {/* Send Button with Gradient */}
          <button 
            onClick={handleSend}
            disabled={!message.trim()}
            className="p-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white transition-all shadow-neon hover:shadow-neon-lg transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex-shrink-0"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>

        {/* Quick Actions */}
        <div className="flex gap-2 mt-3">
          <button className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800/30 hover:bg-slate-800/50 text-slate-400 hover:text-cyan-400 transition-all border border-white/5">
            📷 Photo
          </button>
          <button className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800/30 hover:bg-slate-800/50 text-slate-400 hover:text-cyan-400 transition-all border border-white/5">
            📁 File
          </button>
          <button className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800/30 hover:bg-slate-800/50 text-slate-400 hover:text-cyan-400 transition-all border border-white/5">
            🎤 Voice
          </button>
        </div>
      </div>

    </div>
  )
}

export default MessageContainer
