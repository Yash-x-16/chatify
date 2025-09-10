
import { Bell, Search } from "lucide-react";
export function HomeNavbar(){
    return <header className="bg-white/10 backdrop-blur-xl border-b border-white/20 p-6"> 
     <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
                <p className="text-white/70">Welcome back! Here's what's happening with NexusChat today.</p>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-emerald-400/60 focus:bg-white/15 transition-all duration-300"
                  />
                </div>
                
                <button className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 relative">
                  <Bell className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full"></span>
                </button>
                
                <div className="w-10 h-10 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">A</span>
                </div>
              </div>
            </div>
    </header>
}