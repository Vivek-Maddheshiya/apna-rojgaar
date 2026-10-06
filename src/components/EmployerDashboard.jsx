import React, { useState } from 'react';
import { Users, FileText, CheckCircle, Clock, PlusCircle, MessageSquare, Search, Filter, TrendingUp, Calendar, ChevronRight, Check, X, Sparkles } from 'lucide-react';

export default function EmployerDashboard({ applications, jobs, onUpdateStatus, onAddJob }) {
  const [showPostJobModal, setShowPostJobModal] = useState(false);
  const [activeTab, setActiveTab] = useState('all'); // all, shortlisted, interview, offered
  const [selectedCandidateForChat, setSelectedCandidateForChat] = useState(null);
  const [chatMessage, setChatMessage] = useState('');
  const [chatHistory, setChatHistory] = useState({
    'app-101': [
      { sender: 'recruiter', text: 'Hello Vivek! We reviewed your profile and resume match score is 94%. Are you available for a technical round?' },
      { sender: 'candidate', text: 'Hi! Yes, absolutely. I am available this week.' }
    ],
    'app-102': [
      { sender: 'recruiter', text: 'Hi Vivek, your interview is scheduled for Oct 08 at 2:30 PM.' },
      { sender: 'candidate', text: 'Thank you! I will join via the meeting link.' }
    ]
  });

  // New Job state
  const [newTitle, setNewTitle] = useState('');
  const [newCompany, setNewCompany] = useState('GL Infotech Pvt Ltd');
  const [newLocation, setNewLocation] = useState('Noida / Remote');
  const [newSalary, setNewSalary] = useState('₹10,000,00 - ₹15,000,00 / year');
  const [newExperience, setNewExperience] = useState('1-3 years');
  const [newCategory, setNewCategory] = useState('Software Development');
  const [newSkills, setNewSkills] = useState('React, Node.js, Express');
  const [newDesc, setNewDesc] = useState('');

  const handlePostJob = (e) => {
    e.preventDefault();
    onAddJob({
      id: `job-${Date.now()}`,
      title: newTitle,
      company: newCompany,
      location: newLocation,
      salary: newSalary,
      experience: newExperience,
      category: newCategory,
      skills: newSkills.split(',').map(s => s.trim()),
      postedAt: 'Just now',
      description: newDesc,
      urgent: true,
      applicantsCount: 0
    });
    setShowPostJobModal(false);
    setNewTitle('');
    setNewDesc('');
  };

  const handleSendMessage = (appId) => {
    if (!chatMessage.trim()) return;
    setChatHistory(prev => ({
      ...prev,
      [appId]: [...(prev[appId] || []), { sender: 'recruiter', text: chatMessage }]
    }));
    setChatMessage('');
  };

  const filteredApps = applications.filter(app => {
    if (activeTab === 'shortlisted') return app.status === 'Shortlisted';
    if (activeTab === 'interview') return app.status === 'Interview Scheduled';
    if (activeTab === 'offered') return app.status === 'Offered';
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Top Header & Quick Action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <div>
          <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md uppercase tracking-wider">Recruiter Hub</span>
          <h2 className="text-2xl font-black text-slate-900 mt-1">Job Board & Hiring Analytics</h2>
          <p className="text-xs text-slate-500">Manage real-time candidate applications, scheduled meetings, and job postings.</p>
        </div>

        <button
          onClick={() => setShowPostJobModal(true)}
          className="px-5 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold rounded-xl text-xs shadow-lg shadow-blue-600/20 flex items-center space-x-2 transition-all self-start sm:self-auto"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Post New Job</span>
        </button>
      </div>

      {/* Slide 6 Stats Overview Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Total Applications</p>
              <p className="text-3xl font-extrabold text-slate-900 mt-2">132.0K</p>
              <p className="text-xs text-emerald-600 font-semibold mt-1 flex items-center">
                <TrendingUp className="w-3.5 h-3.5 mr-1" /> +60% from last month
              </p>
            </div>
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
              <FileText className="w-6 h-6" />
            </div>
          </div>
          <div className="w-full bg-slate-100 h-1.5 rounded-full mt-4 overflow-hidden">
            <div className="bg-blue-600 h-1.5 rounded-full w-[60%]"></div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Shortlisted Profiles</p>
              <p className="text-3xl font-extrabold text-slate-900 mt-2">10.9K</p>
              <p className="text-xs text-blue-600 font-semibold mt-1 flex items-center">
                <CheckCircle className="w-3.5 h-3.5 mr-1" /> 50% match score average
              </p>
            </div>
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
              <CheckCircle className="w-6 h-6" />
            </div>
          </div>
          <div className="w-full bg-slate-100 h-1.5 rounded-full mt-4 overflow-hidden">
            <div className="bg-emerald-500 h-1.5 rounded-full w-[50%]"></div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Scheduled Meetings</p>
              <p className="text-3xl font-extrabold text-slate-900 mt-2">03.1K</p>
              <p className="text-xs text-purple-600 font-semibold mt-1 flex items-center">
                <Calendar className="w-3.5 h-3.5 mr-1" /> Next interview in 2 hours
              </p>
            </div>
            <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
              <Calendar className="w-6 h-6" />
            </div>
          </div>
          <div className="w-full bg-slate-100 h-1.5 rounded-full mt-4 overflow-hidden">
            <div className="bg-purple-600 h-1.5 rounded-full w-[34%]"></div>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Active Job Postings</p>
              <p className="text-3xl font-extrabold text-slate-900 mt-2">{jobs.length}</p>
              <p className="text-xs text-slate-500 font-semibold mt-1">Across 5 departments</p>
            </div>
            <div className="p-3 bg-cyan-50 text-cyan-600 rounded-xl">
              <Users className="w-6 h-6" />
            </div>
          </div>
          <div className="w-full bg-slate-100 h-1.5 rounded-full mt-4 overflow-hidden">
            <div className="bg-cyan-500 h-1.5 rounded-full w-[80%]"></div>
          </div>
        </div>

      </div>

      {/* Main Applicants Table Section */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        
        {/* Filter bar */}
        <div className="p-5 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h3 className="font-bold text-slate-900 text-base">Applicant Directory</h3>
            <p className="text-xs text-slate-500">Real-time candidate evaluation, AI match scoring, and status progression</p>
          </div>

          <div className="flex items-center space-x-1 bg-slate-100 p-1 rounded-xl text-xs font-semibold">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${activeTab === 'all' ? 'bg-white text-blue-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
            >
              All ({applications.length})
            </button>
            <button
              onClick={() => setActiveTab('shortlisted')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${activeTab === 'shortlisted' ? 'bg-white text-blue-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Shortlisted
            </button>
            <button
              onClick={() => setActiveTab('interview')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${activeTab === 'interview' ? 'bg-white text-blue-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Interviews
            </button>
            <button
              onClick={() => setActiveTab('offered')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${activeTab === 'offered' ? 'bg-white text-blue-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Offered
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 font-bold uppercase tracking-wider border-b border-slate-100">
              <tr>
                <th className="py-3.5 px-5">Candidate Name</th>
                <th className="py-3.5 px-5">Applied Role</th>
                <th className="py-3.5 px-5">AI Match Score</th>
                <th className="py-3.5 px-5">Current Status</th>
                <th className="py-3.5 px-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
              {filteredApps.map((app) => (
                <tr key={app.id} className="hover:bg-slate-50 transition-colors">
                  
                  {/* Candidate Name & Contact */}
                  <td className="py-4 px-5">
                    <div className="flex items-center space-x-3">
                      <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-xs shrink-0">
                        {app.candidateName.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">{app.candidateName}</p>
                        <p className="text-[11px] text-slate-400">{app.email}</p>
                      </div>
                    </div>
                  </td>

                  {/* Role */}
                  <td className="py-4 px-5">
                    <p className="font-semibold text-slate-800">{app.roleApplied}</p>
                    <p className="text-[10px] text-slate-400">{app.company} • {app.appliedDate}</p>
                  </td>

                  {/* AI Match Score Badge */}
                  <td className="py-4 px-5">
                    <div className="inline-flex items-center px-2.5 py-1 rounded-lg bg-purple-50 text-purple-700 font-bold border border-purple-200">
                      <Sparkles className="w-3 h-3 mr-1 text-purple-600" />
                      <span>{app.matchScore}% Match</span>
                    </div>
                  </td>

                  {/* Status */}
                  <td className="py-4 px-5">
                    <span className={`px-2.5 py-1 rounded-full font-bold text-[11px] inline-flex items-center ${
                      app.status === 'Shortlisted' ? 'bg-blue-100 text-blue-800' :
                      app.status === 'Interview Scheduled' ? 'bg-purple-100 text-purple-800' :
                      app.status === 'Offered' ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-700'
                    }`}>
                      {app.status}
                    </span>
                    {app.interviewDate && (
                      <p className="text-[10px] text-slate-400 mt-0.5">{app.interviewDate}</p>
                    )}
                  </td>

                  {/* Actions */}
                  <td className="py-4 px-5 text-right space-x-1">
                    
                    <button
                      onClick={() => setSelectedCandidateForChat(app)}
                      className="p-1.5 bg-slate-100 hover:bg-blue-50 text-slate-600 hover:text-blue-600 rounded-lg transition-colors inline-flex items-center"
                      title="Chat with Candidate"
                    >
                      <MessageSquare className="w-4 h-4" />
                    </button>

                    {app.status === 'Applied' && (
                      <button
                        onClick={() => onUpdateStatus(app.id, 'Shortlisted')}
                        className="px-2.5 py-1 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors text-[11px]"
                      >
                        Shortlist
                      </button>
                    )}

                    {app.status === 'Shortlisted' && (
                      <button
                        onClick={() => onUpdateStatus(app.id, 'Interview Scheduled')}
                        className="px-2.5 py-1 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg transition-colors text-[11px]"
                      >
                        Schedule Interview
                      </button>
                    )}

                    {app.status === 'Interview Scheduled' && (
                      <button
                        onClick={() => onUpdateStatus(app.id, 'Offered')}
                        className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg transition-colors text-[11px]"
                      >
                        Issue Offer
                      </button>
                    )}

                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Candidate Chat Drawer Modal */}
      {selectedCandidateForChat && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full shadow-2xl border border-slate-100 overflow-hidden flex flex-col h-[500px]">
            
            {/* Drawer Header */}
            <div className="p-4 bg-slate-900 text-white flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold text-xs">
                  {selectedCandidateForChat.candidateName.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-sm">{selectedCandidateForChat.candidateName}</h4>
                  <p className="text-[10px] text-slate-300">{selectedCandidateForChat.roleApplied}</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedCandidateForChat(null)}
                className="text-slate-400 hover:text-white p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-4 bg-slate-50 overflow-y-auto space-y-3 text-xs">
              {(chatHistory[selectedCandidateForChat.id] || [
                { sender: 'recruiter', text: `Hello ${selectedCandidateForChat.candidateName}, thank you for applying to ${selectedCandidateForChat.company}.` }
              ]).map((msg, index) => (
                <div 
                  key={index}
                  className={`flex ${msg.sender === 'recruiter' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] p-3 rounded-2xl ${
                    msg.sender === 'recruiter' 
                      ? 'bg-blue-600 text-white rounded-br-none' 
                      : 'bg-white border border-slate-200 text-slate-800 rounded-bl-none shadow-sm'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <div className="p-3 bg-white border-t border-slate-200 flex items-center space-x-2">
              <input
                type="text"
                placeholder="Type a message..."
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage(selectedCandidateForChat.id)}
                className="flex-1 px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600"
              />
              <button
                onClick={() => handleSendMessage(selectedCandidateForChat.id)}
                className="px-4 py-2 bg-blue-600 text-white font-bold rounded-xl text-xs hover:bg-blue-700 transition-colors"
              >
                Send
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Post New Job Modal */}
      {showPostJobModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-100 relative max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setShowPostJobModal(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 p-1"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4">
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Recruiter Portal</span>
              <h3 className="text-xl font-extrabold text-slate-900 mt-1">Post a New Job Opportunity</h3>
            </div>

            <form onSubmit={handlePostJob} className="space-y-3 text-xs font-semibold">
              <div>
                <label className="block text-slate-700 mb-1">Job Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Senior Frontend Engineer"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:border-blue-600 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 mb-1">Company Name</label>
                  <input
                    type="text"
                    required
                    value={newCompany}
                    onChange={(e) => setNewCompany(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:border-blue-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 mb-1">Location</label>
                  <input
                    type="text"
                    required
                    value={newLocation}
                    onChange={(e) => setNewLocation(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:border-blue-600 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 mb-1">Salary Range</label>
                  <input
                    type="text"
                    required
                    value={newSalary}
                    onChange={(e) => setNewSalary(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:border-blue-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 mb-1">Experience Required</label>
                  <input
                    type="text"
                    required
                    value={newExperience}
                    onChange={(e) => setNewExperience(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:border-blue-600 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-700 mb-1">Required Technical Skills (comma separated)</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. React, Node.js, Python, MongoDB"
                  value={newSkills}
                  onChange={(e) => setNewSkills(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:border-blue-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-700 mb-1">Job Description & Responsibilities</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Write job overview..."
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:border-blue-600 focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm shadow-md transition-all"
              >
                Publish Job Posting
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
