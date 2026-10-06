import React, { useState } from 'react';
import { Search, MapPin, DollarSign, Briefcase, Clock, Filter, CheckCircle2, Bookmark, Share2, AlertCircle, X, UploadCloud, Sparkles } from 'lucide-react';

export default function JobList({ jobs, onApplyJob, appliedJobIds }) {
  const [selectedJob, setSelectedJob] = useState(null);
  const [filterType, setFilterType] = useState('All');
  const [filterExp, setFilterExp] = useState('All');
  const [bookmarkedIds, setBookmarkedIds] = useState([]);
  
  // Application Form Modal state
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [applicantName, setApplicantName] = useState('Vivek Maddheshiya');
  const [applicantEmail, setApplicantEmail] = useState('vivek@glbitm.ac.in');
  const [applicantPhone, setApplicantPhone] = useState('+91 98765 43210');
  const [resumeName, setResumeName] = useState('Vivek_Resume_FullStack.pdf');
  const [isSimulatingATS, setIsSimulatingATS] = useState(false);
  const [atsScore, setAtsScore] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const toggleBookmark = (id) => {
    setBookmarkedIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const filteredJobs = jobs.filter(job => {
    if (filterType !== 'All' && job.type !== filterType) return false;
    if (filterExp !== 'All' && !job.experience.toLowerCase().includes(filterExp.toLowerCase())) return false;
    return true;
  });

  const handleSimulateResumeUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setResumeName(file.name);
      setIsSimulatingATS(true);
      setTimeout(() => {
        setIsSimulatingATS(false);
        setAtsScore(Math.floor(Math.random() * 15) + 85); // 85% to 99%
      }, 1200);
    }
  };

  const handleSubmitApplication = (e) => {
    e.preventDefault();
    if (!selectedJob) return;
    
    onApplyJob({
      jobId: selectedJob.id,
      candidateName: applicantName,
      email: applicantEmail,
      phone: applicantPhone,
      roleApplied: selectedJob.title,
      company: selectedJob.company,
      resumeFile: resumeName,
      matchScore: atsScore || 92
    });

    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setShowApplyModal(false);
      setSelectedJob(null);
    }, 1800);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Left Filter Sidebar */}
        <div className="w-full md:w-64 shrink-0 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm self-start sticky top-24">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
            <h3 className="font-bold text-slate-800 flex items-center text-sm">
              <Filter className="w-4 h-4 mr-2 text-blue-600" /> Filter Opportunities
            </h3>
            <button 
              onClick={() => { setFilterType('All'); setFilterExp('All'); }} 
              className="text-xs text-blue-600 hover:underline font-medium"
            >
              Reset
            </button>
          </div>

          {/* Job Type Filter */}
          <div className="mb-6">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Job Type</label>
            <div className="space-y-1.5 text-xs font-semibold">
              {['All', 'Full-Time', 'Internship'].map((type) => (
                <label key={type} className="flex items-center space-x-2 cursor-pointer p-1.5 rounded-lg hover:bg-slate-50">
                  <input
                    type="radio"
                    name="jobType"
                    checked={filterType === type}
                    onChange={() => setFilterType(type)}
                    className="text-blue-600 focus:ring-blue-500"
                  />
                  <span className={filterType === type ? 'text-blue-700 font-bold' : 'text-slate-600'}>{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Experience Filter */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Experience Level</label>
            <div className="space-y-1.5 text-xs font-semibold">
              {['All', 'Fresher', '1-3', '3-5'].map((exp) => (
                <label key={exp} className="flex items-center space-x-2 cursor-pointer p-1.5 rounded-lg hover:bg-slate-50">
                  <input
                    type="radio"
                    name="expLevel"
                    checked={filterExp === exp}
                    onChange={() => setFilterExp(exp)}
                    className="text-blue-600 focus:ring-blue-500"
                  />
                  <span className={filterExp === exp ? 'text-blue-700 font-bold' : 'text-slate-600'}>
                    {exp === 'All' ? 'All Experience Levels' : `${exp} Years`}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Banner Box */}
          <div className="mt-8 p-4 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 text-xs">
            <p className="font-bold text-blue-900 mb-1">💡 Automated Resume Screening</p>
            <p className="text-blue-700">Upload your resume during application to view instant ATS match score against job descriptions.</p>
          </div>
        </div>

        {/* Right Job Cards Feed */}
        <div className="flex-1 space-y-4">
          <div className="flex justify-between items-center pb-2">
            <p className="text-sm font-semibold text-slate-600">
              Showing <span className="text-blue-700 font-bold">{filteredJobs.length}</span> verified job postings
            </p>
            <span className="text-xs text-slate-500 font-medium">Sorted by: Most Relevant</span>
          </div>

          {filteredJobs.length === 0 ? (
            <div className="bg-white p-12 text-center rounded-2xl border border-slate-200">
              <AlertCircle className="w-12 h-12 text-slate-400 mx-auto mb-3" />
              <h4 className="font-bold text-slate-700">No jobs match your selected filter</h4>
              <p className="text-xs text-slate-500 mt-1">Try resetting the filters or searching for different keywords.</p>
            </div>
          ) : (
            filteredJobs.map((job) => {
              const isApplied = appliedJobIds.includes(job.id);
              const isBookmarked = bookmarkedIds.includes(job.id);

              return (
                <div 
                  key={job.id} 
                  className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-300 shadow-sm hover:shadow-md transition-all relative group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    
                    {/* Header info */}
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-slate-100 to-blue-50 border border-slate-200 flex items-center justify-center text-blue-700 font-black text-lg shrink-0">
                        {job.company.charAt(0)}
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                            {job.title}
                          </h3>
                          {job.urgent && (
                            <span className="bg-red-100 text-red-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                              Urgent Hiring
                            </span>
                          )}
                        </div>
                        <p className="text-sm font-semibold text-slate-600 mt-0.5">{job.company}</p>
                        
                        {/* Meta Tags */}
                        <div className="flex flex-wrap items-center gap-3 mt-3 text-xs text-slate-500 font-medium">
                          <span className="flex items-center text-slate-700">
                            <MapPin className="w-3.5 h-3.5 mr-1 text-slate-400" /> {job.location}
                          </span>
                          <span className="flex items-center text-emerald-700 font-semibold">
                            <DollarSign className="w-3.5 h-3.5 mr-0.5 text-emerald-600" /> {job.salary}
                          </span>
                          <span className="flex items-center">
                            <Briefcase className="w-3.5 h-3.5 mr-1 text-slate-400" /> {job.experience}
                          </span>
                          <span className="flex items-center text-slate-400">
                            <Clock className="w-3.5 h-3.5 mr-1" /> {job.postedAt}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Bookmark & Apply button */}
                    <div className="flex items-center space-x-2 self-end sm:self-auto">
                      <button 
                        onClick={() => toggleBookmark(job.id)}
                        className={`p-2.5 rounded-xl border transition-colors ${
                          isBookmarked ? 'bg-amber-50 text-amber-600 border-amber-200' : 'bg-slate-50 text-slate-400 border-slate-200 hover:bg-slate-100'
                        }`}
                        title="Bookmark Job"
                      >
                        <Bookmark className="w-4 h-4 fill-current" />
                      </button>

                      {isApplied ? (
                        <span className="px-5 py-2.5 bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold rounded-xl text-xs flex items-center space-x-1.5">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Applied</span>
                        </span>
                      ) : (
                        <button
                          onClick={() => { setSelectedJob(job); setShowApplyModal(true); setAtsScore(null); }}
                          className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs shadow-md shadow-blue-600/20 transition-all flex items-center space-x-1"
                        >
                          <span>Apply Now</span>
                        </button>
                      )}
                    </div>
                  </div>

                  <p className="mt-4 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {job.description}
                  </p>

                  {/* Skills badges */}
                  <div className="mt-4 flex flex-wrap items-center gap-1.5 pt-3 border-t border-slate-100">
                    <span className="text-[11px] text-slate-400 font-medium mr-1">Required Skills:</span>
                    {job.skills.map(skill => (
                      <span key={skill} className="px-2.5 py-0.5 bg-slate-100 text-slate-700 text-[11px] rounded-md font-semibold">
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Application Modal */}
      {showApplyModal && selectedJob && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-100 relative animate-in fade-in zoom-in duration-200">
            
            <button 
              onClick={() => setShowApplyModal(false)}
              className="absolute top-5 right-5 p-1 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            {isSuccess ? (
              <div className="py-8 text-center">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-black text-slate-900">Application Submitted!</h3>
                <p className="text-xs text-slate-600 mt-2 max-w-xs mx-auto">
                  Your application for <strong className="text-slate-800">{selectedJob.title}</strong> at {selectedJob.company} has been received.
                </p>
                <div className="mt-4 inline-flex items-center px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold border border-emerald-200">
                  ATS Match Score: {atsScore || 92}% Match
                </div>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Job Application Form</span>
                  <h3 className="text-lg font-extrabold text-slate-900 mt-1">{selectedJob.title}</h3>
                  <p className="text-xs text-slate-500">{selectedJob.company} • {selectedJob.location}</p>
                </div>

                <form onSubmit={handleSubmitApplication} className="space-y-4 text-xs font-semibold">
                  <div>
                    <label className="block text-slate-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      value={applicantName}
                      onChange={(e) => setApplicantName(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:border-blue-600 focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-slate-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        value={applicantEmail}
                        onChange={(e) => setApplicantEmail(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:border-blue-600 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-700 mb-1">Phone Number</label>
                      <input
                        type="text"
                        required
                        value={applicantPhone}
                        onChange={(e) => setApplicantPhone(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:border-blue-600 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Resume Upload & Simulation Box */}
                  <div className="border-2 border-dashed border-blue-200 rounded-2xl p-4 bg-blue-50/50 text-center">
                    <UploadCloud className="w-8 h-8 text-blue-600 mx-auto mb-1" />
                    <p className="font-bold text-slate-800">Upload PDF Resume / CV</p>
                    <p className="text-[10px] text-slate-500 mb-2">Automated parsing powered by AI algorithm</p>
                    
                    <label className="inline-flex items-center px-3 py-1.5 bg-white border border-blue-300 text-blue-700 font-bold rounded-lg text-xs cursor-pointer hover:bg-blue-50">
                      <span>Choose File</span>
                      <input type="file" accept=".pdf,.doc,.docx" onChange={handleSimulateResumeUpload} className="hidden" />
                    </label>

                    {resumeName && (
                      <div className="mt-3 p-2 bg-white rounded-lg border border-slate-200 flex items-center justify-between text-left text-[11px]">
                        <span className="font-semibold text-slate-700 truncate">{resumeName}</span>
                        {isSimulatingATS ? (
                          <span className="text-purple-600 font-bold animate-pulse flex items-center">
                            <Sparkles className="w-3 h-3 mr-1" /> Scanning...
                          </span>
                        ) : (
                          <span className="text-emerald-600 font-bold">
                            {atsScore ? `${atsScore}% Match` : 'Ready'}
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSimulatingATS}
                      className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center space-x-2"
                    >
                      <span>Submit Application</span>
                    </button>
                  </div>
                </form>
              </>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
