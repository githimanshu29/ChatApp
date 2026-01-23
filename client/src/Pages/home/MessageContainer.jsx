// Location: src/Pages/home/MessageContainer.jsx
import React from 'react'

const MessageContainer = () => {
  return (
    <div className="relative flex flex-col w-full h-full">
      
      {/* 1. Chat Header - Glassmorphism */}
      <div className="absolute top-0 z-20 flex items-center justify-between w-full h-20 px-6 border-b bg-slate-900/70 backdrop-blur-md border-slate-800">
        <div className="flex items-center gap-4 transition cursor-pointer hover:opacity-80">
          <img 
            src="https://ui-avatars.com/api/?name=Alice+Freeman&background=0D8ABC&color=fff" 
            alt="profile" 
            className="w-10 h-10 border rounded-full border-slate-600"
          />
          <div>
            <h2 className="text-lg font-bold text-white">Alice Freeman</h2>
            <p className="flex items-center gap-1 text-xs font-medium tracking-wide text-cyan-400">
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></span> Online
            </p>
          </div>
        </div>
        
        {/* Header Icons */}
        <div className="flex gap-6 text-slate-400">
           <button className="transition transform hover:text-cyan-400 hover:scale-110">📞</button>
           <button className="transition transform hover:text-cyan-400 hover:scale-110">📹</button>
           <button className="transition transform hover:text-cyan-400 hover:scale-110">⋮</button>
        </div>
      </div>

      {/* 2. Messages Area */}
      <div className="flex-1 p-6 pt-24 space-y-8 overflow-y-auto bg-slate-950 scroll-smooth">
        
        {/* Date Divider */}
        <div className="flex justify-center">
            <span className="px-3 py-1 text-xs font-medium border rounded-full text-slate-500 bg-slate-900 border-slate-800">
                Today, 10:23 AM
            </span>
        </div>

        {/* Message Received (Them) */}
        <div className="flex gap-4 max-w-[80%] group">
          <img 
             src="https://ui-avatars.com/api/?name=Alice+Freeman&background=0D8ABC&color=fff" 
             className="mt-auto border rounded-full w-9 h-9 border-slate-700" 
             alt=""
          />
          <div className="flex flex-col gap-1">
             <div className="p-4 leading-relaxed border rounded-bl-none shadow-sm bg-slate-800 rounded-2xl text-slate-200 border-slate-700/50">
               Hey! Are we still on for the meeting tomorrow? I have the designs ready. 🖥️
             </div>
             <span className="text-[10px] text-slate-500 ml-1 opacity-0 group-hover:opacity-100 transition">10:30 AM</span>
          </div>
        </div>

        {/* Message Sent (You) - Gradient Style */}
        <div className="flex gap-4 max-w-[80%] ml-auto flex-row-reverse group">
          <div className="flex flex-col items-end gap-1">
             {/* Gradient Background */}
             <div className="p-4 leading-relaxed text-white rounded-br-none shadow-lg bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl">
               Yes, absolutely! Send them over, I'd love to take a look before we meet.
             </div>
             <span className="text-[10px] text-slate-500 mr-1 opacity-0 group-hover:opacity-100 transition">10:32 AM</span>
          </div>
        </div>

        {/* Message Received (Them) */}
        <div className="flex gap-4 max-w-[80%] group">
          <img 
             src="https://ui-avatars.com/api/?name=Alice+Freeman&background=0D8ABC&color=fff" 
             className="mt-auto border rounded-full w-9 h-9 border-slate-700" 
             alt=""
          />
          <div className="flex flex-col gap-1">
             <div className="p-4 leading-relaxed border rounded-bl-none shadow-sm bg-slate-800 rounded-2xl text-slate-200 border-slate-700/50">
               Great. Sending the Figma link now. By the way, the dark mode looks sick! 🔥
             </div>
             <span className="text-[10px] text-slate-500 ml-1 opacity-0 group-hover:opacity-100 transition">10:33 AM</span>
          </div>
        </div>

      </div>

      {/* 3. Input Area */}
      <div className="p-4 border-t bg-slate-900 border-slate-800">
        <div className="flex items-center gap-3 px-4 py-2 transition-all border bg-slate-800/60 rounded-3xl border-slate-700 focus-within:border-cyan-500/50 focus-within:ring-2 focus-within:ring-cyan-500/20">
          
          <button className="p-1 transition text-slate-400 hover:text-cyan-400">
          🖼️
          </button>
          
          <input 
            type="text" 
            placeholder="Type a message..." 
            className="flex-1 h-10 bg-transparent border-none focus:outline-none text-slate-200 placeholder-slate-500"
          />
          
          <button className="p-1 transition text-slate-400 hover:text-cyan-400">
            😊
          </button>
          
          <button className="bg-cyan-600 hover:bg-cyan-500 text-white p-2.5 rounded-full transition shadow-lg shadow-cyan-600/30 transform active:scale-95">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 -ml-0.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
          </button>
        </div>
      </div>

    </div>
  )
}

export default MessageContainer
