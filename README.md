
# Travel_Journal_React





## 🔗 Core Component Interactions

### App.jsx
- Root layout component
- Applies theme class to body
- Renders active route using `<Outlet>`

### Navbar.jsx
- Consumes `AuthContext`, `ThemeContext`, and `LanguageContext`
- Displays responsive navigation with conditional auth links
- Includes theme toggle and language switcher

### Job Components
- **AddJob**: Form to create jobs, saves to localStorage
- **JobCard**: Clickable preview, routes to JobDetails
- **JobDetails**: Full job info and apply logic

### Profile Components
- **ProfileCard**: Routes to Client or Freelancer Profile dynamically
- **FreelancerProfile / ClientProfile**: Displays user info from localStorage
- **EditProfile**: Updates user data

### Context Providers
- Wrapped in `main.jsx`
- Global state: Theme, Auth, Language
- Consumed by components throughout the app

---

## 💡 Key Features Implemented

### Multi-theme Support
- `ThemeContext` handles light/dark switching
- Uses CSS variables
- State is persisted in localStorage

### Authentication System
- JWT-style logic using localStorage
- Differentiates between Client & Freelancer
- Conditional rendering + protected routes

### LocalStorage CRUD
- Jobs and users stored in localStorage
- `JobAPI.jsx` simulates remote fetching

### Responsive Design
- Mobile-first with media queries
- Bootstrap grid
- Navbar & forms adapt to screen size

---

## 🔄 Key Relationships

### Root Providers
```
LanguageContext → ThemeContext → AuthContext → App.jsx
```
- Router handles page navigation
- App layout wraps routed pages

### Job Flow
```
AddJob → saves to localStorage
   ↓
AllJobs → fetches from JobAPI → renders JobCards
   ↓
JobCard → click → JobDetails
```

### Profile Flow
```
Profiles → renders ProfileCard
   ↓
ProfileCard → click → ClientProfile or FreelancerProfile
   ↓
EditProfile → updates data in localStorage
```

### Admin Flow
```
Profiles → AdminOverlay → UserManagement
   ↓
UserManagement → updates users
```

---

## 🧩 Reusability

- Jobs.jsx: shared logic for job views
- ProfileCard.jsx: renders any user profile
- TranslateButton: handles translation controls

---

## 📌 Summary

This project follows a clean separation of concerns between:

- **Pages**: user-facing views
- **Components**: reusable blocks
- **Contexts**: app-wide state
- **APIs**: localStorage abstraction layer

All components are organized to ensure easy scalability and maintainability.
