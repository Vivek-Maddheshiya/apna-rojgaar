export const INITIAL_JOBS = [
  {
    id: "job-1",
    title: "Senior Full Stack Engineer (React + Node)",
    company: "TechCorp Global",
    location: "Noida / Remote",
    salary: "₹14,000,00 - ₹22,000,00 / year",
    experience: "3-5 years",
    type: "Full-Time",
    category: "Software Development",
    skills: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    postedAt: "2 hours ago",
    description: "Looking for an experienced full stack developer to design scalable RESTful APIs, modern frontend dashboards, and build microservices for our core recruitment and applicant matching engine.",
    urgent: true,
    applicantsCount: 42
  },
  {
    id: "job-2",
    title: "AI & Machine Learning Intern",
    company: "NeuralLabs AI",
    location: "Greater Noida, UP",
    salary: "₹25,000 - ₹40,000 / month",
    experience: "Fresher / 0-1 year",
    type: "Internship",
    category: "AI & Data Science",
    skills: ["Python", "TensorFlow", "Scikit-Learn", "NLP", "Pandas"],
    postedAt: "1 day ago",
    description: "Join our core AI team to implement smart candidate-job matching algorithms, automated resume scoring, and natural language text extraction models.",
    urgent: false,
    applicantsCount: 128
  },
  {
    id: "job-3",
    title: "Frontend UI/UX Developer",
    company: "Creative Cloud Solutions",
    location: "Delhi NCR / Hybrid",
    salary: "₹8,000,00 - ₹12,000,00 / year",
    experience: "1-3 years",
    type: "Full-Time",
    category: "Frontend Development",
    skills: ["React", "TypeScript", "Tailwind CSS", "Figma", "Redux"],
    postedAt: "3 days ago",
    description: "Architect clean, highly responsive client-side recruitment dashboards with intuitive navigation, dark mode support, and seamless application tracking.",
    urgent: false,
    applicantsCount: 89
  },
  {
    id: "job-4",
    title: "Database Administrator & Backend Engineer",
    company: "DataVault Systems",
    location: "Noida Sector 62",
    salary: "₹10,000,00 - ₹16,000,00 / year",
    experience: "2-4 years",
    type: "Full-Time",
    category: "Backend & Database",
    skills: ["Node.js", "PostgreSQL", "MongoDB", "Redis", "JWT Auth"],
    postedAt: "Just now",
    description: "Design relational schemas managing Users, Jobs, Applications, and Profiles with password hashing via bcrypt and role-based middleware protection.",
    urgent: true,
    applicantsCount: 19
  },
  {
    id: "job-5",
    title: "Graduate Engineer Trainee (GET)",
    company: "GL Infotech Pvt Ltd",
    location: "Greater Noida",
    salary: "₹6,000,00 - ₹8,50,000 / year",
    experience: "Fresher (2025/2026 Batch)",
    type: "Full-Time",
    category: "Entry Level",
    skills: ["Java", "C++", "SQL", "HTML5/CSS3", "Problem Solving"],
    postedAt: "4 days ago",
    description: "Entry-level position for fresh graduates of Computer Science and Information Technology. Fast-track rotation program across full-stack development and cloud ops.",
    urgent: false,
    applicantsCount: 240
  }
];

export const INITIAL_APPLICATIONS = [
  {
    id: "app-101",
    candidateName: "Vivek Maddheshiya",
    email: "vivek.maddheshiya@glbitm.ac.in",
    phone: "+91 98765 43210",
    roleApplied: "Senior Full Stack Engineer (React + Node)",
    company: "TechCorp Global",
    appliedDate: "2026-10-04",
    status: "Shortlisted",
    matchScore: 94,
    skills: ["React", "Node.js", "Express", "JWT", "MongoDB"],
    resumeFile: "Vivek_Maddheshiya_Resume.pdf",
    notes: "Top candidate with strong full-stack skills and project leadership."
  },
  {
    id: "app-102",
    candidateName: "Vivek Sharma",
    email: "vivek.sharma@glbitm.ac.in",
    phone: "+91 91234 56789",
    roleApplied: "AI & Machine Learning Intern",
    company: "NeuralLabs AI",
    appliedDate: "2026-10-05",
    status: "Interview Scheduled",
    interviewDate: "Oct 08, 2026 at 2:30 PM",
    matchScore: 91,
    skills: ["Python", "Machine Learning", "NLP", "Data Analysis"],
    resumeFile: "Vivek_Sharma_CV.pdf",
    notes: "Demonstrated strong knowledge in ML resume matching algorithms."
  },
  {
    id: "app-103",
    candidateName: "Ananya Roy",
    email: "ananya.roy@example.com",
    phone: "+91 99887 76655",
    roleApplied: "Frontend UI/UX Developer",
    company: "Creative Cloud Solutions",
    appliedDate: "2026-10-02",
    status: "Applied",
    matchScore: 78,
    skills: ["React", "Tailwind CSS", "Figma"],
    resumeFile: "Ananya_UIUX_Resume.pdf",
    notes: "Awaiting technical screening."
  },
  {
    id: "app-104",
    candidateName: "Rahul Kumar",
    email: "rahul.k@example.com",
    phone: "+91 97654 32109",
    roleApplied: "Database Administrator & Backend Engineer",
    company: "DataVault Systems",
    appliedDate: "2026-10-01",
    status: "Offered",
    matchScore: 96,
    skills: ["Node.js", "PostgreSQL", "Redis", "JWT"],
    resumeFile: "Rahul_DBA_Resume.pdf",
    notes: "Offer letter issued on Oct 05."
  }
];

export const PROJECT_INFO = {
  title: "ApnaRojgaar.com - Online Job Portal",
  subtitle: "GL Bajaj Institute of Technology & Management (Second Year Project)",
  submittedBy: ["Vivek Maddheshiya", "Vivek Sharma"],
  submittedTo: "Mrs. Nidhi",
  institution: "GL Bajaj Institute of Technology & Management",
  problemStatements: [
    "Traditional recruitment methods suffer from high paperwork and delayed responses.",
    "Lack of centralized verification and inefficient resume filtering for HR teams.",
    "Difficulty for fresh graduates in tracking applications across multiple companies."
  ],
  objectives: [
    {
      title: "Role-Based Access",
      desc: "Implement secure authentication supporting Job Seekers, Employers, and System Administrators."
    },
    {
      title: "Advanced Search",
      desc: "Provide robust filtering mechanisms based on job titles, location, salary expectations, experience level, and required technical skills."
    },
    {
      title: "Application Tracking",
      desc: "Enable smooth resume upload, status tracking from applied to interview/offered, and instant notifications."
    }
  ],
  methodologyPhases: [
    { phase: "Phase 1", title: "Requirement & ER Design", desc: "Requirement gathering, feasibility study, and ER diagram design for database relationships." },
    { phase: "Phase 2", title: "Backend API Development", desc: "Backend API development using Node.js/Express with secure JWT authentication protocols." },
    { phase: "Phase 3", title: "Frontend UI Creation", desc: "Frontend interface creation using HTML5, CSS3, and JavaScript ensuring responsive design." },
    { phase: "Phase 4", title: "Testing & Deployment", desc: "System testing, debugging, live Vercel deployment, and performance optimization." }
  ],
  literatureSurvey: [
    { title: "Web-Based Recruitment Systems: Trends and Challenges", authors: "Smith et al. (2021)", findings: "Analyzed shift from physical job fairs to digital platforms, emphasizing automated parsing." },
    { title: "Machine Learning in Job Recommendation Systems", authors: "Patel & Sharma (2023)", findings: "Explored collaborative filtering and content-based algorithms to improve candidate-job matching accuracy." },
    { title: "Security and Privacy Protocols in Web Portals", authors: "Kumar et al. (2022)", findings: "Highlighted secure session handling and data encryption standards for sensitive applicant documents." }
  ]
};
