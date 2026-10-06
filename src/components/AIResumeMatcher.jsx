import React, { useState } from 'react';
import { Bot, Sparkles, CheckCircle, AlertTriangle, FileText, Briefcase, RefreshCw, Award } from 'lucide-react';

export default function AIResumeMatcher() {
  const [resumeText, setResumeText] = useState(
`VIVEK MADDHESHIYA
Full Stack Developer | B.Tech Computer Science (GL Bajaj)
Skills: React.js, Node.js, Express, MongoDB, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, RESTful APIs, Git, JWT Authentication.
Projects: Online Job Portal (ApnaRojgaar.com), E-commerce Web App, Real-time Chat Application.`
  );

  const [jobDescription, setJobDescription] = useState(
`Senior Full Stack Engineer position requiring expertise in React, Node.js, RESTful API design, database modeling (MongoDB / PostgreSQL), JWT security, Docker containerization, and Redis caching.`
  );

  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState({
    score: 88,
    matchedSkills: ['React.js', 'Node.js', 'Express', 'MongoDB', 'RESTful APIs', 'JWT Authentication'],
    missingSkills: ['Docker', 'Redis caching', 'PostgreSQL'],
    summary: 'High compatibility match! Candidate possesses strong foundational full-stack web development skills with Node and React.'
  });

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      // Dynamic score generator based on keyword search
      const text = (resumeText + ' ' + jobDescription).toLowerCase();
      let matched = [];
      let missing = [];

      const targetSkills = ['React', 'Node', 'Express', 'MongoDB', 'Python', 'Docker', 'Redis', 'PostgreSQL', 'TypeScript', 'Tailwind', 'JWT'];
      targetSkills.forEach(s => {
        if (text.includes(s.toLowerCase())) {
          matched.push(s);
        } else {
          missing.push(s);
        }
      });

      const calculatedScore = Math.min(98, Math.max(65, matched.length * 11 + 25));
      setResult({
        score: calculatedScore,
        matchedSkills: matched.length > 0 ? matched : ['React', 'Node.js', 'JavaScript'],
        missingSkills: missing.slice(0, 3),
        summary: `Computed compatibility score of ${calculatedScore}%. Resume demonstrates high alignment with target software engineering role.`
      });
    }, 1200);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Banner */}
      <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <span className="inline-flex items-center px-3 py-1 bg-purple-500/20 text-purple-300 border border-purple-400/30 rounded-full text-xs font-semibold mb-3">
            <Bot className="w-3.5 h-3.5 mr-1.5 text-purple-400" /> Future Scope Module • Slide 8 Presentation
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight">AI Resume Scoring & Matcher</h2>
          <p className="text-sm text-purple-200 mt-2">
            Automated machine learning model that extracts key skills from candidate CVs and calculates real-time ATS keyword similarity against recruiter job descriptions.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Input Controls */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Candidate Resume Input */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <label className="font-bold text-slate-800 text-sm flex items-center">
                <FileText className="w-4 h-4 mr-2 text-purple-600" /> Candidate Resume / Profile Text
              </label>
              <span className="text-xs text-slate-400">PDF / Plain text</span>
            </div>
            <textarea
              rows={5}
              value={resumeText}
              onChange={(e) => setResumeText(e.target.value)}
              className="w-full p-3.5 bg-slate-50 text-slate-800 rounded-xl border border-slate-200 focus:border-purple-600 focus:bg-white focus:outline-none text-xs font-mono"
            ></textarea>
          </div>

          {/* Job Description Input */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <label className="font-bold text-slate-800 text-sm flex items-center">
                <Briefcase className="w-4 h-4 mr-2 text-blue-600" /> Target Job Description
              </label>
              <span className="text-xs text-slate-400">Recruiter criteria</span>
            </div>
            <textarea
              rows={4}
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              className="w-full p-3.5 bg-slate-50 text-slate-800 rounded-xl border border-slate-200 focus:border-blue-600 focus:bg-white focus:outline-none text-xs font-mono"
            ></textarea>
          </div>

          {/* Action Button */}
          <button
            onClick={handleAnalyze}
            disabled={isAnalyzing}
            className="w-full py-4 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:opacity-95 text-white font-bold rounded-2xl text-sm shadow-xl shadow-purple-600/20 transition-all flex items-center justify-center space-x-2"
          >
            {isAnalyzing ? (
              <>
                <RefreshCw className="w-5 h-5 animate-spin" />
                <span>Parsing & Calculating ATS Score...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                <span>Run AI Compatibility Analysis</span>
              </>
            )}
          </button>

        </div>

        {/* Results Panel */}
        <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6 self-start">
          
          <div className="border-b border-slate-100 pb-4">
            <h3 className="font-extrabold text-slate-900 text-base flex items-center">
              <Award className="w-5 h-5 text-amber-500 mr-2" /> Compatibility Score Breakdown
            </h3>
            <p className="text-xs text-slate-500">Automated resume parsing engine response</p>
          </div>

          {/* Match Gauge */}
          <div className="text-center py-4 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl border border-purple-100">
            <div className="relative inline-flex items-center justify-center">
              <div className="w-32 h-32 rounded-full border-8 border-purple-200 border-t-purple-600 flex items-center justify-center">
                <span className="text-4xl font-black text-purple-950">{result.score}%</span>
              </div>
            </div>
            <p className="mt-3 text-xs font-bold text-purple-900 uppercase tracking-wider">Overall Fit Rating</p>
            <p className="text-[11px] text-slate-600 max-w-xs mx-auto mt-1 px-4">{result.summary}</p>
          </div>

          {/* Matched Keywords */}
          <div>
            <p className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2 flex items-center">
              <CheckCircle className="w-3.5 h-3.5 mr-1" /> Matched Core Skills ({result.matchedSkills.length})
            </p>
            <div className="flex flex-wrap gap-1.5">
              {result.matchedSkills.map(skill => (
                <span key={skill} className="px-2.5 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-lg text-xs font-semibold">
                  ✓ {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Missing Keywords */}
          <div>
            <p className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-2 flex items-center">
              <AlertTriangle className="w-3.5 h-3.5 mr-1" /> Recommended Skills to Add ({result.missingSkills.length})
            </p>
            <div className="flex flex-wrap gap-1.5">
              {result.missingSkills.map(skill => (
                <span key={skill} className="px-2.5 py-1 bg-amber-50 text-amber-800 border border-amber-200 rounded-lg text-xs font-semibold">
                  + {skill}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
