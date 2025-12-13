import React from 'react';
import DP1 from '../../assets/DP1.jpg' // keep or replace with your profile image

const About = ({ scrollToSection }) => {
  const experienceData = [
    {
      title: "Android Application Developer",
      company: "Remote",
      period: "Nov 2024 – Sep 2025",
      achievements: [
        "Designed and developed a full-scale CRM Android app using Jetpack Compose, Ktor client, and Room database with modern MVVM architecture.",
        "Led the implementation of five core app modules — Home, Workplace, Activity, Mart, and Settings — with efficient navigation and modular architecture.",
        "Integrated multichannel communication system supporting Call, SMS, WhatsApp, Email (via AWS SES), and Meet, enabling seamless lead and advisor interaction.",
        "Developed real-time features using WebSockets for interviews and activity tracking, enhancing responsiveness and interactivity.",
        "Created a Study Management System with topic scheduling, custom calendar visualization, and performance analytics.",
        "Engineered career assessments (aptitude, attitude) with face verification using Google ML Kit and dynamic question delivery.",
        "Implemented GPS-based QR code attendance, team member location tracking, and institute management for professional services and courses.",
        "Built a full-featured in-app Mart for educational and training course discovery and enrollment.",
        "Ensured background data sync of calls, contacts, and locations using Firebase Cloud Messaging, WorkManager, and foreground services.",
        "Contributed to app scalability, performance optimization, and lifecycle-aware user flows using Kotlin Coroutines, Flow, and LiveData.",
        "Assisted in backend development using Node.js, Express, and PostgreSQL, implementing CRUD operations and supporting API integration with the mobile app."
      ]
    },
    {
      title: "Android Application Developer (Intern)",
      company: "—",
      period: "Mar 2024 - Sep 2024",
      achievements: [
        "Assisted in developing and testing new Android app features under the guidance of senior developers.",
        "Helped refine user interface elements and verified functionality across different devices and Android versions.",
        "Contributed to quality assurance by reporting bugs, retesting fixes, and supporting regression testing.",
        "Provided support in maintaining project documentation and tracking development progress.",
        "Gained practical exposure to collaborative workflows, code reviews, and version control using Git."
      ]
    },
    {
      title: "Android Application Developer (Intern)",
      company: "—",
      period: "July 2023 - Jan 2024",
      achievements: [
        "Assisted in manual testing of Android applications to identify bugs, usability issues, and performance bottlenecks.",
        "Supported the development team with small tasks such as debugging, documenting issues, and verifying fixes.",
        "Gained hands-on exposure to Android development concepts including Ktor, RoomDatabase, MVVM, Coroutines, LiveData, and Navigation components.",
        "Helped with basic app maintenance tasks, ensuring smooth builds and testing app features across different devices.",
        "Collaborated with senior developers by learning workflows, contributing to team discussions, and adapting to evolving project requirements.",
        "Provided feedback on user interface behavior and overall app performance during testing cycles."
      ]
    }
  ];

  const educationData = [
    {
      degree: "Bachelor of Technology (B.Tech) in Computer Science",
      institution: "B.V.C Engineering College (Affiliated with JNTUK)",
      location: "Odalarevu",
      score: "CGPA: 6.3",
      period: ""
    },
    {
      degree: "Higher Secondary (Intermediate)",
      institution: "Vidyanidhi Junior College",
      location: "Tatipaka",
      score: "Percentage: 67%",
      period: ""
    },
    {
      degree: "High School",
      institution: "Z.P.H School",
      location: "Kesanapalli",
      score: "CGPA: 9.3",
      period: ""
    }
  ];

  const certifications = [
    {
      name: "Meta Android Developer Professional Certificate",
      issuer: "Coursera / Meta",
      year: "2024"
    },
    {
      name: "Meta React Native Developer Specialization",
      issuer: "Coursera / Meta",
      year: "2024"
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-200/20 rounded-full blur-xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm text-blue-600 uppercase tracking-wider font-semibold mb-2">Get To Know More</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent">
            About Me
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Left Sidebar - Profile, Education & Certifications */}
          <div className="lg:col-span-1 space-y-8">
            {/* Profile Image & Basic Info */}
            <div className="flex flex-col items-center">
              <div className="relative group">
                <div className="absolute -inset-4 overflow-hidden bg-gray-200 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <img 
                  src={DP1}
                  alt="Profile" 
                  className="relative w-64 h-64 rounded-full object-cover shadow-2xl border-4 border-white z-10 transform group-hover:scale-105 transition duration-300"
                />
              </div>
              
              <div className="mt-8 text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Vasanth Adabala</h2>
                <p className="text-blue-600 font-medium mb-4">Mobile / Android Application Developer</p>
                <p className="text-gray-600 leading-relaxed max-w-md">
                  Mobile Application Developer focused on building scalable Android and iOS applications using modern frameworks and tools. 
                  Skilled with Jetpack Compose, SwiftUI, MVVM and asynchronous programming.
                </p>
              </div>
            </div>

            {/* Education Section */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="w-2 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-3"></span>
                Education
              </h3>
              <div className="space-y-4">
                {educationData.map((edu, index) => (
                  <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 border border-blue-100 transition-all duration-300 hover:shadow-md">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-800 text-sm leading-tight">{edu.degree}</h4>
                      <div className="flex items-center text-xs text-gray-600">
                        <span className="font-medium">{edu.institution}</span>
                        <span className="mx-2">•</span>
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-white text-blue-600 rounded-full text-xs font-medium border border-blue-200">
                          {edu.score}
                        </span>
                        <span className="px-2 py-1 bg-white text-purple-600 rounded-full text-xs font-medium border border-purple-200">
                          {edu.period}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="w-2 h-6 bg-gradient-to-b from-green-500 to-teal-500 rounded-full mr-3"></span>
                Certifications
              </h3>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-4 border border-green-100">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-xs">✓</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 text-sm leading-tight">{cert.name}</h4>
                        <p className="text-gray-600 text-xs">{cert.issuer} • {cert.year}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content Area - Experience Only */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
                <span className="w-3 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-3"></span>
                Work Experience
              </h2>
              
              <div className="space-y-8">
                {experienceData.map((job, index) => (
                  <div key={index} className="group">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                          {job.title}
                        </h3>
                        <p className="text-gray-600 font-medium">{job.company}</p>
                      </div>
                      <span className="inline-block mt-2 md:mt-0 px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                        {job.period}
                      </span>
                    </div>
                    <ul className="space-y-3">
                      {job.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start text-gray-700 leading-relaxed">
                          <span className="text-blue-500 mr-3 mt-1.5 flex-shrink-0">•</span>
                          <span className="text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                    {index < experienceData.length - 1 && (
                      <div className="border-b border-gray-100 my-6"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Arrow */}
        <div className="text-center mt-16">
          <button
            onClick={() => scrollToSection('skills')}
            className="group inline-flex flex-col items-center text-blue-600 hover:text-blue-700 transition-all duration-300 transform hover:-translate-y-1"
          >
            <span className="text-sm font-medium mb-2">View Skills</span>
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
              <svg className="w-4 h-4 text-white transform group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;

