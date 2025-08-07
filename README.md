# Travel_Journal_React
src/
├── main.jsx (Root)
│   ├── LanguageProvider
│   │   ├── ThemeProvider
│   │   │   ├── AuthProvider
│   │   │   │   └── RouterProvider (App Router)
│   │   │   │       └── App.jsx (Layout)
│   │   │   │           ├── Outlet (Dynamic Pages)
│   │   │   │           └── BackToTopButton
│   │   │   │
│   │   │   └── Contexts/
│   │   │       ├── AuthContext.jsx
│   │   │       ├── ThemeContext.jsx
│   │   │       └── LanguageContext.jsx
│   │   │
│   │   └── Components/
│   │       ├── Navbar.jsx
│   │       │   ├── ThemeSwitcher
│   │       │   └── UserSetting.jsx (Dropdown)
│   │       ├── Footer.jsx
│   │       └── Jobs.jsx (Reusable)
│   │
│   └── Pages/
│       ├── Home.jsx
│       │   ├── HeroSection
│       │   ├── HowItWorks (Timeline)
│       │   └── CTA Section
│       │
│       ├── Auth/
│       │   ├── Login.jsx
│       │   └── Register.jsx
│       │
│       ├── Jobs/
│       │   ├── AllJobs.jsx
│       │   │   └── JobAPI.jsx (Container)
│       │   │       └── JobCard.jsx
│       │   ├── AddJob.jsx (Form)
│       │   └── JobDetails.jsx
│       │
│       ├── Profiles/
│       │   ├── Profiles.jsx (Listing)
│       │   │   ├── ProfileCard.jsx
│       │   │   └── AdminOverlay.jsx (Conditional)
│       │   │
│       │   ├── ClientProfile.jsx
│       │   ├── FreelancerProfile.jsx
│       │   ├── EditProfile.jsx (Dynamic Form)
│       │   └── UserManagement.jsx (Admin)
│       │
│       └── Legal/
│           ├── PrivacyPolicy.jsx
│           └── TermsOfService.jsx
│
└── Styles/
    ├── index.css (Global)
    ├── Pages.css
    └── Job.css
