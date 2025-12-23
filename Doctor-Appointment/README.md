# Doctor Appointment System

A modern, responsive web application for managing doctor appointments built with React and Vite. This application allows patients to browse doctors, book appointments, and manage their medical profiles.

## Features

- Browse and search doctors by speciality
- Book and manage appointments
- User authentication and profile management
- Responsive design for all devices
- Fast and optimized performance with Vite
- Beautiful UI with Tailwind CSS and DaisyUI
- Toast notifications for user feedback
- Smooth animations with Framer Motion

## Tech Stack

- **Frontend Framework:** React 19.2.0
- **Build Tool:** Vite 7.2.4
- **Routing:** React Router DOM 7.9.6
- **Styling:** 
  - Tailwind CSS 4.1.17
  - DaisyUI 5.5.5
- **Icons:** Lucide React 0.554.0
- **Animations:** Framer Motion 12.23.24
- **HTTP Client:** Axios 1.13.2
- **Notifications:** React Toastify 11.0.5
- **Code Quality:** ESLint 9.39.1

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 16.x or higher)
- npm or yarn package manager

## Getting Started

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Doctor-Appointment
```

2. Install dependencies:
```bash
npm install
```

### Running the Application

1. Start the development server:
```bash
npm run dev
```

2. Open your browser and navigate to:
```
http://localhost:5173
```

### Build for Production

Create a production-ready build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
Doctor-Appointment/
├── public/              # Public assets
├── src/
│   ├── assets/          # Images, icons, and other assets
│   │   └── assets.js    # Asset exports
│   ├── ComPonent/       # Reusable components
│   │   ├── Banner.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Navbar.jsx
│   │   ├── RelatedDoctors.jsx
│   │   ├── SPecialityMenu.jsx
│   │   └── ToPDoctors.jsx
│   ├── Context/         # React Context
│   │   └── APPContext.jsx
│   ├── Pages/           # Page components
│   │   ├── About.jsx
│   │   ├── Appointment.jsx
│   │   ├── Contact.jsx
│   │   ├── Doctor.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── MyAPPointment.jsx
│   │   └── MyProfile.jsx
│   ├── App.jsx          # Main App component
│   ├── App.css          # App styles
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── eslint.config.js     # ESLint configuration
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
└── README.md            # Project documentation
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Starts the development server |
| `npm run build` | Creates a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check code quality |

## Key Pages

- **Home:** Landing page with featured doctors and services
- **Doctors:** Browse all available doctors with filtering options
- **Appointment:** Book an appointment with a selected doctor
- **My Appointments:** View and manage your appointments
- **My Profile:** Manage your personal information
- **About:** Learn more about the service
- **Contact:** Get in touch with support
- **Login:** User authentication

## Styling

This project uses:
- **Tailwind CSS** for utility-first styling
- **DaisyUI** for pre-built component themes
- **Custom CSS** for specific component styling

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Author

Your Name

## Acknowledgments

- React team for the amazing framework
- Vite team for the lightning-fast build tool
- All contributors and open-source libraries used in this project

---

**Note:** This is a practice/learning project for building a doctor appointment system with modern web technologies.