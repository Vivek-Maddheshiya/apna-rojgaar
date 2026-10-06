import React from 'react';
import { Layers, GraduationCap, CheckCircle2, FileText, ArrowRight, ShieldCheck, Database, Server, Cpu, BookOpen, User, Sparkles } from 'lucide-react';
import { PROJECT_INFO } from '../data/mockData';

export default function ProjectWorkflow() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Title Card matching Slide 1 */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden text-center border border-slate-800">
        <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-bold mb-4 border border-white/10">
          <GraduationCap className="w-4 h-4 text-cyan-400" />
          <span>GL Bajaj Institute of Technology & Management</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Second Year Mini Project: Online Job Portal</h1>
        <p className="text-cyan-300 font-semibold mt-2 text-sm sm:text-base">APNA ROJGAAR.COM System Architecture & Agile Workflow</p>
        
        <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
          <div className="bg-white/5 px-4 py-2 rounded-xl border border-white/10">
            <span className="text-slate-400 block">Submitted By:</span>
            <strong className="text-white text-sm">Vivek Maddheshiya & Vivek Sharma</strong>
          </div>
          <div className="bg-white/5 px-4 py-2 rounded-xl border border-white/10">
            <span className="text-slate-400 block">Submitted To:</span>
            <strong className="text-white text-sm">Mrs. Nidhi</strong>
          </div>
        </div>
      </div>

      {/* Slide 2 & 3: Problem Statement & Objectives */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Problem Statement (Slide 2) */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center space-x-3 border-b border-slate-100 pb-3">
            <div className="p-2.5 bg-red-50 text-red-600 rounded-xl font-bold">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-slate-900 text-base">Problem Statement</h3>
              <p className="text-xs text-slate-500">Challenges in traditional recruitment</p>
            </div>
          </div>
          
          <ul className="space-y-3 text-xs text-slate-700 font-medium">
            {PROJECT_INFO.problemStatements.map((problem, i) => (
              <li key={i} className="flex items-start">
                <span className="w-5 h-5 rounded-full bg-red-100 text-red-700 font-bold flex items-center justify-center text-[10px] mr-2.5 shrink-0 mt-0.5">
                  ✓
                </span>
                <span>{problem}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Project Objectives (Slide 3) */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center space-x-3 border-b border-slate-100 pb-3">
            <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl font-bold">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-slate-900 text-base">Key Project Objectives</h3>
              <p className="text-xs text-slate-500">Core solution deliverables</p>
            </div>
          </div>
          
          <div className="space-y-3 text-xs">
            {PROJECT_INFO.objectives.map((obj, i) => (
              <div key={i} className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <p className="font-bold text-blue-900">{obj.title}</p>
                <p className="text-slate-600 text-[11px] mt-0.5">{obj.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Slide 5: Agile Methodology 4 Phases */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
        <div className="border-b border-slate-100 pb-3">
          <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md uppercase">Methodology (Slide 5)</span>
          <h3 className="font-extrabold text-slate-900 text-lg mt-1">Proposed Agile Iterative Approach</h3>
          <p className="text-xs text-slate-500">Systematic execution from requirements to live deployment</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PROJECT_INFO.methodologyPhases.map((phase, idx) => (
            <div key={phase.phase} className="p-5 rounded-2xl bg-gradient-to-b from-slate-50 to-blue-50/30 border border-slate-200 relative group">
              <span className="text-xs font-black text-blue-600 uppercase tracking-widest">{phase.phase}</span>
              <h4 className="font-bold text-slate-900 text-sm mt-1">{phase.title}</h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">{phase.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Slide 6: System Implementation & Architecture */}
      <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl space-y-6">
        <div>
          <span className="text-xs font-bold text-cyan-400 bg-cyan-950 px-2.5 py-1 rounded-md border border-cyan-800 uppercase">Architecture (Slide 6)</span>
          <h3 className="font-extrabold text-2xl mt-2">System Implementation Stack</h3>
          <p className="text-xs text-slate-400 mt-1">Client-Server Model with RESTful API communication & role-based middleware security</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
            <Server className="w-6 h-6 text-blue-400" />
            <h4 className="font-bold text-white text-sm">Client-Server Model</h4>
            <p className="text-slate-300">RESTful API communication between React SPA frontend and Node/Express backend.</p>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
            <Database className="w-6 h-6 text-emerald-400" />
            <h4 className="font-bold text-white text-sm">Relational Schema</h4>
            <p className="text-slate-300">Normalized database managing Users, Jobs, Applications, and Profiles.</p>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
            <ShieldCheck className="w-6 h-6 text-purple-400" />
            <h4 className="font-bold text-white text-sm">Security Protocols</h4>
            <p className="text-slate-300">Password hashing via bcrypt & JWT bearer authorization middleware.</p>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
            <Cpu className="w-6 h-6 text-cyan-400" />
            <h4 className="font-bold text-white text-sm">Live Dashboard</h4>
            <p className="text-slate-300">Real-time statistics on active applications, shortlisted profiles, and scheduling.</p>
          </div>

        </div>
      </div>

      {/* Slide 4 & 9: Literature Survey & References */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <div className="border-b border-slate-100 pb-3">
          <span className="text-xs font-bold text-purple-600 bg-purple-50 px-2.5 py-1 rounded-md uppercase">Academic Rigor (Slide 4 & 9)</span>
          <h3 className="font-extrabold text-slate-900 text-lg mt-1">Literature Survey & Google Scholar References</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border border-slate-200 rounded-xl overflow-hidden">
            <thead className="bg-slate-50 text-slate-700 font-bold uppercase border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Reference / Paper Title</th>
                <th className="py-3 px-4">Authors & Year</th>
                <th className="py-3 px-4">Key Findings & Methodology</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600">
              {PROJECT_INFO.literatureSurvey.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-bold text-slate-800">{item.title}</td>
                  <td className="py-3 px-4 font-semibold text-blue-700">{item.authors}</td>
                  <td className="py-3 px-4">{item.findings}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
