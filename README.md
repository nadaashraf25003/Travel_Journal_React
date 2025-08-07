
# 📁 Project Structure

This project is organized using a modular folder structure for scalability and maintainability.

```plaintext
src/
│
├── API/                           # Handles all API interaction logic
│   ├── AdminOverlay.jsx
│   ├── JobAPI.jsx
│   └── UserAPI.jsx
│
├── Components/                   # Reusable UI components
│   ├── Footer.jsx
│   ├── Jobs.jsx
│   ├── Navbar.jsx
│   └── UserSetting.jsx
│
├── Contexts/                     # Global state management
│   ├── AuthContext.jsx           # Handles authentication logic
│   ├── LanguageContext.jsx       # Manages selected language
│   ├── ThemeContext.jsx          # Handles dark/light theme
│   └── TranslateButton.jsx       # UI control for translation
│
├── Pages/
│   ├── Jobs/                     # Pages related to job listings
│   │   ├── AddJob.jsx
│   │   ├── AllJobs.jsx
│   │   ├── JobCard.jsx
│   │   └── JobDetails.jsx
│   │
│   ├── Profiles/                # Pages for user/client profiles
│   │   ├── ClientProfile.jsx
│   │   ├── EditProfile.jsx
│   │   ├── FreelancerProfile.jsx
│   │   ├── ProfileCard.jsx
│   │   ├── Profiles.jsx
│   │   ├── UserManagement.jsx
│   │   └── UserProfile.jsx
│
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── NotFound.jsx
│   ├── PrivacyPolicy.jsx
│   ├── Register.jsx
│   └── TermsOdService.jsx
│
├── App.jsx                       # Root component
└── main.jsx                      # Entry point
```# Travel_Journal_React
