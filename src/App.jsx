import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import JobList from './components/JobList';
import EmployerDashboard from './components/EmployerDashboard';
import ApplicationTracker from './components/ApplicationTracker';
import AIResumeMatcher from './components/AIResumeMatcher';
import ProjectWorkflow from './components/ProjectWorkflow';
import Footer from './components/Footer';
import { INITIAL_JOBS, INITIAL_APPLICATIONS } from './data/mockData';

export default function App() {
  const [currentTab, setCurrentTab] = useState('jobs'); // jobs, tracker, employer, ai-match, project
  const [userRole, setUserRole] = useState('jobseeker'); // jobseeker, employer
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');

  const [jobs, setJobs] = useState(INITIAL_JOBS);
  const [applications, setApplications] = useState(INITIAL_APPLICATIONS);
  const [unreadNotifications, setUnreadNotifications] = useState(2);

  // Apply to job action
  const handleApplyJob = (newApp) => {
    const createdApp = {
      id: `app-${Date.now()}`,
      candidateName: newApp.candidateName,
      email: newApp.email,
      phone: newApp.phone,
      roleApplied: newApp.roleApplied,
      company: newApp.company,
      appliedDate: new Date().toISOString().split('T')[0],
      status: 'Applied',
      matchScore: newApp.matchScore || 92,
      skills: ['React', 'Node.js', 'Web Development'],
      resumeFile: newApp.resumeFile
    };

    setApplications(prev => [createdApp, ...prev]);

    // Update job applicant count
    setJobs(prev => prev.map(j => j.id === newApp.jobId ? { ...j, applicantsCount: j.applicantsCount + 1 } : j));
    setUnreadNotifications(n => n + 1);
  };

  // Recruiter update status action
  const handleUpdateStatus = (appId, newStatus) => {
    setApplications(prev => prev.map(app => {
      if (app.id === appId) {
        return {
          ...app,
          status: newStatus,
          interviewDate: newStatus === 'Interview Scheduled' ? 'Oct 09, 2026 at 11:00 AM' : app.interviewDate
        };
      }
      return app;
    }));
    setUnreadNotifications(n => n + 1);
  };

  // Recruiter add job action
  const handleAddJob = (newJob) => {
    setJobs(prev => [newJob, ...prev]);
    setCurrentTab('jobs');
  };

  // Filtered jobs by search term & location
  const displayJobs = jobs.filter(job => {
    const matchesSearch = !searchTerm || 
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.skills.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesLoc = !locationFilter || job.location.toLowerCase().includes(locationFilter.toLowerCase());
    return matchesSearch && matchesLoc;
  });

  const appliedJobIds = applications.map(a => a.jobId);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 selection:bg-blue-600 selection:text-white">
      
      {/* Navbar Header */}
      <Header
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        userRole={userRole}
        setUserRole={(role) => {
          setUserRole(role);
          if (role === 'employer') setCurrentTab('employer');
          else if (role === 'jobseeker') setCurrentTab('jobs');
        }}
        unreadNotifications={unreadNotifications}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentTab === 'jobs' && (
          <>
            <Hero
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              locationFilter={locationFilter}
              setLocationFilter={setLocationFilter}
              onSearch={() => {}}
            />
            <JobList
              jobs={displayJobs}
              onApplyJob={handleApplyJob}
              appliedJobIds={appliedJobIds}
            />
          </>
        )}

        {currentTab === 'tracker' && (
          <ApplicationTracker applications={applications} />
        )}

        {currentTab === 'employer' && (
          <EmployerDashboard
            applications={applications}
            jobs={jobs}
            onUpdateStatus={handleUpdateStatus}
            onAddJob={handleAddJob}
          />
        )}

        {currentTab === 'ai-match' && (
          <AIResumeMatcher />
        )}

        {currentTab === 'project' && (
          <ProjectWorkflow />
        )}
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
