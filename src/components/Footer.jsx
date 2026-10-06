import React from 'react';
import { Briefcase, Heart, Globe, GraduationCap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 text-xs py-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-b border-slate-800 pb-6">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <span className="text-lg font-black tracking-tight text-white">APNA<span className="text-blue-500">ROJGAAR</span>.COM</span>
              <p className="text-[11px] text-slate-400">GL Bajaj Institute of Technology & Management • Second Year Project</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 text-xs font-semibold text-slate-300">
            <span>Submitted By: Vivek Maddheshiya & Vivek Sharma</span>
            <span>•</span>
            <span>Guided By: Mrs. Nidhi</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} APNA ROJGAAR.COM • All Rights Reserved. Mini Project Prototype.</p>
          <p className="flex items-center">
            Built with React, Tailwind CSS & deployed on <span className="text-white font-bold ml-1">Vercel</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
