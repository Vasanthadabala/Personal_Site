import React, { useState } from 'react';

const Projects = ({ scrollToSection }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  // Projects based on the uploaded Resume PDF (Margda, PiggyFlow, Spacee Gemini)
  const projects = [
    {
      title: 'Margda (CRM-based Business Communication App)',
      tech: 'Kotlin, Jetpack Compose, Ktor, Room, WebSockets, Firebase, Node.js',
      link: 'https://play.google.com/store/apps/details?id=com.margdarshakendra.margdarshak&pcampaignid=web_share', 
      category: 'professional',
      description: 'Comprehensive CRM Android application with modules for Home, Workplace, Activity, Mart, and Settings.',
      features: [
        'Authentication flows (Login/Signup) and bottom navigation',
        'Workplace: multichannel communication, team tracking, study management',
        'Real-time interview management via WebSockets'
      ],
      icon: '🚀'
    },
    {
      title: 'PiggyFlow (Budget Tracker)',
      tech: 'Kotlin (Android), Jetpack Compose',
      link: 'https://play.google.com/store/apps/details?id=com.piggylabs.piggyflow&pcampaignid=web_share', 
      category: 'personal',
      description: 'Cross-platform personal budget tracking app with dashboard, stats and export features.',
      features: [
        'Interactive line charts for expense trends',
        'Export category data and summaries as PDF',
        'Onboarding, bottom navigation, add/edit transactions'
      ],
      icon: '💰'
    },
    {
      title: 'PiggyFlow (Budget Tracker)',
      tech: ' Swift (iOS), Jetpack Compose, SwiftUI',
      link: 'https://apps.apple.com/in/app/piggyflow/id6754467851', 
      category: 'personal',
      description: 'Cross-platform personal budget tracking app with dashboard, stats and export features.',
      features: [
        'Interactive line charts for expense trends',
        'Export category data and summaries as PDF',
        'Onboarding, bottom navigation, add/edit transactions'
      ],
      icon: '💰'
    },
    {
      title: 'Spacee Gemini (AI-powered assistant)',
      tech: 'Kotlin, Jetpack Compose, Gemini API, MVVM, Ktor',
      link: 'https://spacee-gemini.vercel.app/', 
      category: 'personal',
      description: 'AI chatbot assistant supporting single/multi-chat and image based prompts using Gemini API.',
      features: [
        'Chat UI with image prompts',
        'MVVM architecture with Ktor-based API integration',
        'Scalable chat flows and state management'
      ],
      icon: '🤖'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'professional', name: 'Professional' },
    { id: 'personal', name: 'Personal Projects' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50/20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-100/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-100/30 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-sm text-blue-600 uppercase tracking-wider font-semibold mb-3 px-4 py-2 bg-blue-50 rounded-full">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            My Work
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">Projects</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A collection of projects that showcase my skills and experience in app & web development
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-300 border ${
                activeFilter === category.id
                  ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-500/25'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-blue-300 hover:shadow-md'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 overflow-hidden flex flex-col h-full"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-xl mb-3">
                    {project.icon}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.category === 'professional'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {project.category === 'professional' ? 'Pro' : 'Personal'}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              <div className="px-6 mb-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.split(', ').slice(0, 3).map(tech => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.split(', ').length > 3 && (
                    <span className="px-2.5 py-1 bg-gray-100 text-gray-500 rounded-lg text-xs font-medium">
                      +{project.tech.split(', ').length - 3}
                    </span>
                  )}
                </div>
              </div>

              <div className="px-6 mb-4 flex-grow">
                <ul className="space-y-2">
                  {project.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="px-6 pb-6 mt-auto">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-20 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <span>View Project</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              <div
                className={`absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 rounded-2xl transition-opacity duration-500 pointer-events-none ${
                  hoveredProject === index ? 'opacity-100' : 'opacity-0'
                }`}
              ></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-3">Like what you see?</h3>
            <p className="text-blue-100 mb-6 max-w-md mx-auto">
              Let's work together to bring your next project to life
            </p>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
