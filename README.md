# 📚 Notes Hub - Community Study Platform

A modern, full-stack web application built with React, Firebase, and Vite that enables students to share and access study materials across various computer science subjects.

## ✨ Features

### 🔐 Authentication & User Management
- **User Registration**: Sign up with email and password
- **Secure Login**: Firebase Authentication integration
- **User Profiles**: Display name and profile management
- **Protected Routes**: Upload functionality for authenticated users only

### 📤 File Upload & Sharing
- **Community Uploads**: Students can upload their own study materials
- **File Support**: PDFs and images (JPG, PNG) up to 10MB
- **Subject Organization**: Categorize uploads by subject
- **Upload Progress**: Real-time upload progress tracking
- **File Validation**: Automatic file type and size validation

### 🎯 Core Functionality
- **Dual Content System**: Static notes + community-uploaded content
- **Subject-Based Organization**: Notes organized by subjects (Computer Networks, Software Engineering, Theory of Computation, Computer Graphics, PYQ Papers)
- **Instant Downloads**: Direct download links for all study materials
- **Upload Attribution**: Shows who uploaded each file
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Single Page Application**: Smooth navigation without page refreshes

### 🎨 User Experience
- **Modern UI**: Clean, professional design with Tailwind CSS
- **Modal Interfaces**: Clean login and upload modals
- **Loading States**: Progress indicators and loading spinners
- **Error Handling**: User-friendly error messages
- **Mobile-First**: Optimized for all screen sizes
- **Fast Loading**: Built with Vite for optimal performance

### 🔒 Security & Performance
- **Firebase Security Rules**: Production-ready database and storage rules
- **Data Validation**: Server-side validation for all uploads
- **Optimized Queries**: Composite indexes for fast data retrieval
- **File Security**: Content type and size restrictions
- **User Data Protection**: Users can only modify their own content

## 🚀 Quick Start

### Prerequisites
- Node.js (version 16 or higher)
- pnpm, npm, or yarn
- Firebase project (for backend services)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Code-Game-Ninja/Notes-Site.git
   cd Notes-Site
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or npm install
   ```

3. **Firebase Setup (Required)**
   
   **Quick Setup:**
   - Firebase project is already configured (`attendance-6f9a2`)
   - Follow the setup guide: `FIREBASE_RULES_SETUP.md`
   - Enable Authentication (Email/Password)
   - Enable Firestore Database
   - Enable Cloud Storage
   
   **Essential Steps:**
   ```bash
   # Deploy Firebase rules (already done)
   firebase deploy --only firestore
   firebase deploy --only storage
   ```

4. **Start the development server**
   ```bash
   pnpm dev
   ```

5. **Open your browser**
   ```
   http://localhost:5173
   ```

6. **Test the features**
   - Sign up for an account
   - Upload a test PDF
   - Browse notes by subject

### Build for Production

```bash
pnpm build
```

### Deploy to Vercel (Recommended)

```bash
# Vercel configuration is already included
vercel deploy
```

## 📁 Project Structure

```
Notes-Site/
├── public/
│   ├── notes/                    # Static study materials
│   │   ├── computer-networks/
│   │   ├── software-engineering/
│   │   ├── toc/
│   │   ├── computer-graphics/
│   │   └── pyq-papers/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Navigation with auth
│   │   ├── Home.jsx             # Landing page
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Login.jsx            # Auth modal
│   │   ├── UploadNote.jsx       # Upload modal
│   │   ├── NotesList.jsx        # Notes display
│   │   ├── SubjectList.jsx
│   │   └── Footer.jsx
│   ├── config/
│   │   └── firebase.js          # Firebase configuration
│   ├── context/
│   │   └── AuthContext.jsx      # Authentication state
│   ├── App.jsx                  # Main app with routing
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── firebase.json                # Firebase configuration
├── firestore.rules             # Database security rules
├── storage.rules               # File storage rules
├── firestore.indexes.json     # Database indexes
├── package.json
├── vite.config.js
└── vercel.json                 # Deployment config
```

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.2
- **Styling**: Tailwind CSS 4.1.13
- **Icons**: Heroicons (via SVG)
- **Routing**: React Router DOM 7.9.3

### Backend & Services
- **Authentication**: Firebase Auth
- **Database**: Firestore (NoSQL)
- **File Storage**: Firebase Cloud Storage
- **Security**: Firebase Security Rules
- **Real-time**: Firestore real-time listeners

### Development & Deployment
- **Package Manager**: pnpm
- **Linting**: ESLint
- **Deployment**: Vercel (configured)
- **Version Control**: Git with GitHub

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

### For Students (Viewers)
1. **Browse Subjects**: Visit the home page to see all available subjects
2. **View Notes**: Click on any subject card to view available materials
3. **Download Files**: Click the download button on any file (no login required)
4. **Navigate Easily**: Use the navigation bar or browser back/forward buttons

### For Contributors (Uploaders)
1. **Sign Up**: Create an account with email and password
2. **Sign In**: Log into your account
3. **Upload Notes**: Click the "Upload" button in the navigation
4. **Fill Details**: Add title, select subject, add description (optional)
5. **Select File**: Choose a PDF or image file (max 10MB)
6. **Share**: Your uploaded note will appear for all users to download

### Community Features
- **See Contributors**: View who uploaded each note
- **Organized Content**: Notes are organized by subject and upload date
- **Quality Control**: File type and size restrictions ensure quality

## 🔐 Security & Configuration

### Firebase Security
- **Production-Ready Rules**: Deployed security rules for Firestore and Storage
- **Authentication Required**: Only logged-in users can upload files
- **File Validation**: Automatic validation of file types and sizes
- **User Data Protection**: Users can only modify their own uploads
- **Public Access**: Anyone can view and download notes (no login required)

### Environment Variables

Firebase configuration is already set up. For custom environments:

1. **Copy the environment template:**
   ```bash
   cp .env.example .env.local
   ```

2. **Update with your Firebase config (if needed):**
   ```bash
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   # ... other Firebase config
   ```

### Security Features
- ✅ **Firestore Security Rules**: Control database access
- ✅ **Storage Security Rules**: Restrict file uploads
- ✅ **Input Validation**: Client and server-side validation
- ✅ **File Type Restrictions**: Only PDF and images allowed
- ✅ **Size Limits**: Maximum 10MB per file
- ✅ **User Authentication**: Firebase Auth integration

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with ❤️ for students
- Icons from Heroicons
- Styling with Tailwind CSS
- Powered by React and Vite

## � Documentation

- **`QUICK_START.md`** - 5-minute setup guide
- **`USER_GUIDE.md`** - Complete user and developer guide  
- **`FIREBASE_RULES_SETUP.md`** - Firebase configuration steps
- **`SETUP_CHECKLIST.md`** - Step-by-step setup checklist
- **`DEPLOYMENT_SUCCESS.md`** - Deployment verification guide

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Automatic deployment configured
vercel deploy
```

### Firebase Hosting
```bash
firebase deploy --only hosting
```

### Manual Deployment
```bash
pnpm build
# Upload dist/ folder to your hosting provider
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## �📞 Contact & Support

- **Email**: chiragmishra2511@gmail.com
- **GitHub**: [Code-Game-Ninja](https://github.com/Code-Game-Ninja)
- **Issues**: Use GitHub Issues for bug reports
- **Firebase Console**: https://console.firebase.google.com/project/attendance-6f9a2

---

**Made with ❤️ for the student community - Empowering collaborative learning through technology**
