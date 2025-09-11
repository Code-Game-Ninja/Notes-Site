# 📚 Notes Hub - Student Study Resources

A modern, responsive web application built with React and Vite that provides students with easy access to downloadable study notes across various computer science subjects.

## ✨ Features

### 🎯 Core Functionality
- **Subject-Based Organization**: Notes organized by subjects (Computer Networks, Software Engineering, Theory of Computation, PYQ Papers)
- **Instant Downloads**: Direct download links for all study materials
- **Image Previews**: Visual previews for PYQ papers and question papers
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Single Page Application**: Smooth navigation without page refreshes

### 🎨 User Experience
- **Modern UI**: Clean, professional design with Tailwind CSS
- **Smooth Animations**: Hover effects and transitions for better interactivity
- **Mobile-First**: Optimized for all screen sizes
- **Fast Loading**: Built with Vite for optimal performance
- **Accessible**: Proper semantic HTML and keyboard navigation

### 📱 Pages & Navigation
- **Home**: Welcome page with subject overview and quick access
- **About**: Information about the platform and its mission
- **Contact**: Contact form and information
- **Notes Pages**: Individual pages for each subject with downloadable materials

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Code-Game-Ninja/Notes-Site.git
   cd Notes-Site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
Notes-Site/
├── public/
│   ├── notes/
│   │   ├── computer-networks/
│   │   ├── software-engineering/
│   │   ├── toc/
│   │   └── pyq-papers/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── NotesList.jsx
│   │   ├── SubjectList.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.2
- **Styling**: Tailwind CSS 4.1.13
- **Icons**: Heroicons (via SVG)
- **Linting**: ESLint
- **Deployment**: Static hosting (Vercel, Netlify, etc.)

## 📚 Available Subjects

### 1. Computer Networks
- Data Communications
- Networks
- Network Types, Switching and Internet
- Protocol Layering

### 2. Software Engineering
- Introduction
- Agile Model
- CMMI Model
- Software Development Life Cycle Models
- DFD (Data Flow Diagrams)
- Software Requirements
- Software Design
- Software Maintenance
- Software Testing

### 3. Theory of Computation
- Finite State Machines
- Regular Expressions
- Automata Theory
- Minimization of Automata

### 4. Computer Graphics
- 2D/3D Graphics Algorithms
- Line Drawing (DDA, Bresenham)
- Circle Drawing Algorithms
- Polygon Clipping
- Transformations (Translation, Rotation, Scaling, Shearing)
- Graphics Programming Code
- Assignment Questions and Solutions

### 5. PYQ Papers
- Previous Year Question Papers
- Sample Papers
- Practice Materials

## 🎯 Usage

1. **Browse Subjects**: Visit the home page to see all available subjects
2. **Select a Subject**: Click on any subject card to view its notes
3. **Download Materials**: Click the download button on any file
4. **Navigate Easily**: Use the navigation bar or browser back/forward buttons
5. **Contact Us**: Use the contact form for questions or feedback

## 🔐 Security & Environment Setup

### Environment Variables

1. **Copy the environment template:**
   ```bash
   cp .env.example .env.local
   ```

2. **Update `.env.local` with your actual values:**
   ```bash
   VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
   ```

### Security Notes

- ✅ **Google Verification File**: Safe to keep in public repo (needed for verification)
- ✅ **Formspree Endpoint**: Can be public (Formspree endpoints are designed to be public)
- ✅ **Environment Variables**: Use `.env.local` for sensitive data (automatically ignored by git)
- ❌ **Never commit**: API keys, passwords, or sensitive credentials to the repository

### Google Search Console

The `googlee384d10e841f11b2.html` file in the `public/` directory is intentionally public and required for Google verification. This is **not a security risk** as:
- It's just a verification token
- Google needs to access it to verify domain ownership
- It doesn't contain sensitive information

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with ❤️ for students
- Icons from Heroicons
- Styling with Tailwind CSS
- Powered by React and Vite

## 📞 Contact

- **Email**: chiragmishra2511@gmail.com
- **GitHub**: [Code-Game-Ninja](https://github.com/Code-Game-Ninja)

---

**Made with ❤️ for students by students**
