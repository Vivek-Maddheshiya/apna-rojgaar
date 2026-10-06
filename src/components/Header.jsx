import React, { useState } from 'react';
import { Briefcase, UserCheck, ShieldCheck, Search, FileText, Bot, Layers, Bell, CheckCircle2, ChevronDown } from 'lucide-react';

export default function Header({ currentTab, setCurrentTab, userRole, setUserRole, unreadNotifications }) {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
      {/* Top Academic Banner */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 sm:px-6 flex justify-between items-center border-b border-slate-800">
        <div className="flex items-center space-x-2">
          <span className="bg-blue-600 text-white px-2 py-0.5 rounded font-semibold text-[10px] uppercase tracking-wider">GL Bajaj Academic Project</span>
          <span className="hidden md:inline text-slate-400">Online Job Portal Prototype • APNA ROJGAAR.COM</span>
        </div>
        <div className="flex items-center space-x-4">
          <span>Submitted by: <strong className="text-white">Vivek Maddheshiya & Vivek Sharma</strong></span>
          <span className="hidden sm:inline text-slate-500">|</span>
          <span className="hidden sm:inline">Guide: <strong className="text-white">Mrs. Nidhi</strong></span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo & Brand Name */}
          <div 
            onClick={() => setCurrentTab('jobs')}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <Briefcase className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center space-x-1">
                <span className="text-xl font-black tracking-tight text-slate-900">APNA<span className="text-blue-600">ROJGAAR</span></span>
                <span className="text-xs font-bold text-cyan-600 bg-cyan-50 px-1.5 py-0.5 rounded border border-cyan-200">.COM</span>
              </div>
              <p className="text-[10px] text-slate-500 font-medium tracking-wide">Empowering Careers & Direct Hiring</p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            <button
              onClick={() => setCurrentTab('jobs')}
              className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                currentTab === 'jobs' ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Search className="w-4 h-4" />
              <span>Browse Jobs</span>
            </button>

            <button
              onClick={() => setCurrentTab('tracker')}
              className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                currentTab === 'tracker' ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>My Applications</span>
            </button>

            <button
              onClick={() => setCurrentTab('employer')}
              className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                currentTab === 'employer' ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <UserCheck className="w-4 h-4" />
              <span>Employer Dashboard</span>
            </button>

            <button
              onClick={() => setCurrentTab('ai-match')}
              className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                currentTab === 'ai-match' ? 'bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-purple-700 border border-purple-200' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Bot className="w-4 h-4 text-purple-600" />
              <span>AI Resume Matcher</span>
              <span className="bg-purple-600 text-white text-[9px] px-1.5 py-0.5 rounded-full uppercase font-bold">AI</span>
            </button>

            <button
              onClick={() => setCurrentTab('project')}
              className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                currentTab === 'project' ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Project Workflow</span>
            </button>
          </nav>

          {/* Right Action Tools: Role Selector & Notifications */}
          <div className="flex items-center space-x-3">
            {/* Notification Bell */}
            <div className="relative">
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2 text-slate-600 hover:text-blue-600 hover:bg-slate-100 rounded-lg transition-colors relative"
                title="Real-time Alerts"
              >
                <Bell className="w-5 h-5" />
                {unreadNotifications > 0 && (
                  <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full animate-ping"></span>
                )}
                {unreadNotifications > 0 && (
                  <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
                )}
              </button>

              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-slate-200 py-2 z-50">
                  <div className="px-4 py-2 border-b border-slate-100 flex justify-between items-center">
                    <span className="font-bold text-slate-800 text-sm">System Alerts</span>
                    <span className="text-xs text-blue-600 font-semibold cursor-pointer">Mark read</span>
                  </div>
                  <div className="divide-y divide-slate-100 text-xs">
                    <div className="p-3 hover:bg-slate-50 transition-colors">
                      <div className="flex items-center justify-between font-semibold text-slate-800 mb-0.5">
                        <span className="text-green-600 flex items-center"><CheckCircle2 className="w-3.5 h-3.5 mr-1" /> Application Status Updated</span>
                        <span className="text-slate-400 text-[10px]">Just now</span>
                      </div>
                      <p className="text-slate-600">Vivek Maddheshiya shortlisted for Senior Full Stack Engineer at TechCorp Global.</p>
                    </div>
                    <div className="p-3 hover:bg-slate-50 transition-colors">
                      <div className="flex items-center justify-between font-semibold text-slate-800 mb-0.5">
                        <span>Interview Scheduled</span>
                        <span className="text-slate-400 text-[10px]">10m ago</span>
                      </div>
                      <p className="text-slate-600">Vivek Sharma - NeuralLabs AI scheduled for Oct 08 at 2:30 PM.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Role Switcher Pill */}
            <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200">
              <button
                onClick={() => setUserRole('jobseeker')}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  userRole === 'jobseeker'
                    ? 'bg-white text-blue-700 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Job Seeker
              </button>
              <button
                onClick={() => setUserRole('employer')}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  userRole === 'employer'
                    ? 'bg-white text-blue-700 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Recruiter
              </button>
            </div>
          </div>

        </div>
      </div>
      
      {/* Mobile Nav Links */}
      <div className="lg:hidden flex overflow-x-auto border-t border-slate-100 px-4 py-2 space-x-2 text-xs font-semibold bg-slate-50">
        <button onClick={() => setCurrentTab('jobs')} className={`px-3 py-1.5 rounded-lg whitespace-nowrap ${currentTab === 'jobs' ? 'bg-blue-600 text-white' : 'bg-white text-slate-700'}`}>Jobs</button>
        <button onClick={() => setCurrentTab('tracker')} className={`px-3 py-1.5 rounded-lg whitespace-nowrap ${currentTab === 'tracker' ? 'bg-blue-600 text-white' : 'bg-white text-slate-700'}`}>Tracker</button>
        <button onClick={() => setCurrentTab('employer')} className={`px-3 py-1.5 rounded-lg whitespace-nowrap ${currentTab === 'employer' ? 'bg-blue-600 text-white' : 'bg-white text-slate-700'}`}>Employer Dashboard</button>
        <button onClick={() => setCurrentTab('ai-match')} className={`px-3 py-1.5 rounded-lg whitespace-nowrap ${currentTab === 'ai-match' ? 'bg-purple-600 text-white' : 'bg-white text-slate-700'}`}>AI Matcher</button>
        <button onClick={() => setCurrentTab('project')} className={`px-3 py-1.5 rounded-lg whitespace-nowrap ${currentTab === 'project' ? 'bg-blue-600 text-white' : 'bg-white text-slate-700'}`}>Project Workflow</button>
      </div>
    </header>
  );
}
