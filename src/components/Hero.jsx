import React from 'react';
import { Search, MapPin, Briefcase, Zap, CheckCircle2, TrendingUp, Building2 } from 'lucide-react';

export default function Hero({ searchTerm, setSearchTerm, locationFilter, setLocationFilter, onSearch }) {
  const popularSkills = ["React", "Node.js", "Python", "MongoDB", "Data Analytics", "Java", "Tailwind CSS"];

  return (
    <div className="relative bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white pt-12 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative background grids */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-400/30">
            <Zap className="w-3.5 h-3.5 mr-1.5 text-cyan-400" /> Automated Resume Screening & Matching
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
            <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-emerald-400" /> Real-time Application Tracking
          </span>
        </div>

        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Find Your Dream Job or Hire Skilled Talent on <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent">
              APNA ROJGAAR.COM
            </span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal">
            Bridging the gap between ambitious job seekers and recruiters with role-based access, intelligent skill filtering, and instant status updates.
          </p>
        </div>

        {/* Search Bar Container */}
        <div className="mt-8 max-w-4xl mx-auto bg-white p-3 rounded-2xl shadow-2xl border border-slate-200 text-slate-800">
          <form onSubmit={(e) => { e.preventDefault(); onSearch(); }} className="grid grid-cols-1 md:grid-cols-12 gap-3">
            
            {/* Search Input */}
            <div className="md:col-span-5 flex items-center px-3 bg-slate-50 rounded-xl border border-slate-200 focus-within:border-blue-600 focus-within:bg-white transition-all">
              <Search className="w-5 h-5 text-slate-400 mr-2 shrink-0" />
              <input
                type="text"
                placeholder="Job title, keywords, or skills (e.g. React, Node.js)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-3 bg-transparent text-sm text-slate-800 placeholder-slate-400 focus:outline-none"
              />
            </div>

            {/* Location Input */}
            <div className="md:col-span-4 flex items-center px-3 bg-slate-50 rounded-xl border border-slate-200 focus-within:border-blue-600 focus-within:bg-white transition-all">
              <MapPin className="w-5 h-5 text-slate-400 mr-2 shrink-0" />
              <input
                type="text"
                placeholder="Location (e.g. Noida, Delhi NCR, Remote)"
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="w-full py-3 bg-transparent text-sm text-slate-800 placeholder-slate-400 focus:outline-none"
              />
            </div>

            {/* Submit Button */}
            <div className="md:col-span-3">
              <button
                type="submit"
                className="w-full h-full py-3 px-6 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold rounded-xl shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center space-x-2 text-sm"
              >
                <Search className="w-4 h-4" />
                <span>Search Jobs</span>
              </button>
            </div>
          </form>

          {/* Quick Skill Tags */}
          <div className="mt-3 pt-3 border-t border-slate-100 flex flex-wrap items-center gap-2 px-1 text-xs">
            <span className="text-slate-500 font-semibold flex items-center">
              <TrendingUp className="w-3.5 h-3.5 mr-1 text-blue-600" /> Popular Skills:
            </span>
            {popularSkills.map((skill) => (
              <button
                key={skill}
                onClick={() => setSearchTerm(skill)}
                className="px-2.5 py-1 bg-slate-100 hover:bg-blue-100 hover:text-blue-700 text-slate-600 rounded-md font-medium transition-colors"
              >
                {skill}
              </button>
            ))}
          </div>
        </div>

        {/* Live Counters */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto text-center">
          <div className="p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/10">
            <p className="text-2xl sm:text-3xl font-extrabold text-cyan-400">132.0K+</p>
            <p className="text-xs text-slate-300 mt-1">Applications Processed</p>
          </div>
          <div className="p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/10">
            <p className="text-2xl sm:text-3xl font-extrabold text-emerald-400">10.9K+</p>
            <p className="text-xs text-slate-300 mt-1">Candidates Shortlisted</p>
          </div>
          <div className="p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/10">
            <p className="text-2xl sm:text-3xl font-extrabold text-blue-400">95%</p>
            <p className="text-xs text-slate-300 mt-1">AI Resume Accuracy</p>
          </div>
          <div className="p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/10">
            <p className="text-2xl sm:text-3xl font-extrabold text-purple-400">500+</p>
            <p className="text-xs text-slate-300 mt-1">Hiring Partners</p>
          </div>
        </div>

      </div>
    </div>
  );
}
