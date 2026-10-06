import React from 'react';
import { CheckCircle2, Clock, Calendar, Briefcase, FileText, ChevronRight, AlertCircle, Building2, User } from 'lucide-react';

export default function ApplicationTracker({ applications }) {
  const statusSteps = ['Applied', 'Shortlisted', 'Interview Scheduled', 'Offered'];

  const getStepIndex = (status) => {
    switch (status) {
      case 'Applied': return 0;
      case 'Shortlisted': return 1;
      case 'Interview Scheduled': return 2;
      case 'Offered': return 3;
      default: return 0;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Title */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md uppercase tracking-wider">
          Real-time Tracker
        </span>
        <h2 className="text-2xl font-black text-slate-900 mt-1">My Application Lifecycle</h2>
        <p className="text-xs text-slate-500">Track your application progress from initial submission to final job offer.</p>
      </div>

      {/* Applications List with Step Tracker */}
      <div className="space-y-6">
        {applications.length === 0 ? (
          <div className="bg-white p-12 text-center rounded-2xl border border-slate-200">
            <AlertCircle className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h4 className="font-bold text-slate-700">No applications submitted yet</h4>
            <p className="text-xs text-slate-500 mt-1">Browse jobs and apply to start tracking your recruitment status!</p>
          </div>
        ) : (
          applications.map((app) => {
            const currentStepIdx = getStepIndex(app.status);

            return (
              <div key={app.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
                
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-700 font-bold flex items-center justify-center text-base border border-blue-100">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900">{app.roleApplied}</h3>
                      <p className="text-xs font-semibold text-slate-600 flex items-center">
                        <Building2 className="w-3.5 h-3.5 mr-1 text-slate-400" /> {app.company}
                        <span className="mx-2 text-slate-300">•</span>
                        <User className="w-3.5 h-3.5 mr-1 text-slate-400" /> Applicant: {app.candidateName}
                      </p>
                    </div>
                  </div>

                  <div className="text-right self-start sm:self-auto">
                    <span className="text-xs font-bold text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
                      AI Match Score: {app.matchScore}%
                    </span>
                    <p className="text-[10px] text-slate-400 mt-1">Applied on: {app.appliedDate}</p>
                  </div>
                </div>

                {/* Stepper Visualization */}
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">Application Progress</p>
                  
                  <div className="relative">
                    
                    {/* Connecting Bar */}
                    <div className="absolute top-4 left-4 right-4 h-1 bg-slate-200 -z-0 hidden sm:block"></div>
                    <div 
                      className="absolute top-4 left-4 h-1 bg-blue-600 transition-all duration-500 -z-0 hidden sm:block"
                      style={{ width: `${(currentStepIdx / 3) * 100}%` }}
                    ></div>

                    {/* Step Nodes */}
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 relative z-10">
                      {statusSteps.map((step, idx) => {
                        const isCompleted = idx <= currentStepIdx;
                        const isCurrent = idx === currentStepIdx;

                        return (
                          <div key={step} className="flex sm:flex-col items-center sm:text-center space-x-3 sm:space-x-0">
                            
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-all ${
                              isCurrent ? 'bg-blue-600 text-white ring-4 ring-blue-100' :
                              isCompleted ? 'bg-emerald-500 text-white' : 'bg-slate-200 text-slate-500'
                            }`}>
                              {isCompleted ? <CheckCircle2 className="w-4 h-4" /> : idx + 1}
                            </div>

                            <div className="sm:mt-2">
                              <p className={`text-xs font-bold ${isCompleted ? 'text-slate-900' : 'text-slate-400'}`}>
                                {step}
                              </p>
                              {isCurrent && (
                                <p className="text-[10px] text-blue-600 font-semibold mt-0.5">Active Phase</p>
                              )}
                            </div>

                          </div>
                        );
                      })}
                    </div>

                  </div>
                </div>

                {/* Additional Note / Interview Details */}
                {app.interviewDate && (
                  <div className="p-4 bg-purple-50 rounded-xl border border-purple-100 flex items-center space-x-3 text-xs">
                    <Calendar className="w-5 h-5 text-purple-600 shrink-0" />
                    <div>
                      <p className="font-bold text-purple-900">Upcoming Technical Interview Scheduled</p>
                      <p className="text-purple-700">{app.interviewDate} • Video Link sent to {app.email}</p>
                    </div>
                  </div>
                )}

              </div>
            );
          })
        )}
      </div>

    </div>
  );
}
