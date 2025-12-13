import React from 'react';

const SkillsSection = ({ scrollToSection }) => {
  // Skills adapted from your Resume PDF (programming languages, Android/iOS, cross-platform, backend, tools)
  const skills = {
    programming: [
      { name: "Kotlin", level: "Experienced", icon: "🟪" },
      { name: "Swift", level: "Experienced", icon: "🟦" },
      { name: "JavaScript", level: "Experienced", icon: "🟨" }
    ],
    android: [
      { name: "Jetpack Compose", level: "Experienced", icon: "🎛️" },
      { name: "Coroutines / Flow", level: "Experienced", icon: "🔄" },
      { name: "Room / RoomDatabase", level: "Experienced", icon: "🗄️" },
      { name: "Ktor / Retrofit", level: "Experienced", icon: "🔗" },
      { name: "WorkManager / Foreground Services", level: "Experienced", icon: "🧭" },
      { name: "Google ML Kit", level: "Intermediate", icon: "🧠" },
      { name: "WebSockets / Push Notifications", level: "Experienced", icon: "📡" }
    ],
    ios: [
      { name: "SwiftUI", level: "Experienced", icon: "🍎" },
      { name: "NavigationStack", level: "Intermediate", icon: "🧭" },
      { name: "State Management (State/Binding)", level: "Experienced", icon: "🔁" },
      { name: "async/await & URLSession", level: "Experienced", icon: "⚙️" }
    ],
    crossplatform: [
      { name: "React Native", level: "Intermediate", icon: "🔁" },
      { name: "Fetch API / Hooks", level: "Experienced", icon: "🪝" },
      { name: "SQLite", level: "Intermediate", icon: "🗃️" }
    ],
    backend: [
      { name: "Node.js", level: "Intermediate", icon: "⬢" },
      { name: "Express", level: "Intermediate", icon: "🚂" },
      { name: "Firebase", level: "Intermediate", icon: "🔥" },
      { name: "PostgreSQL / MySQL", level: "Intermediate", icon: "🗄️" }
    ],
    tools: [
      { name: "Android Studio", level: "Experienced", icon: "🛠️" },
      { name: "Xcode", level: "Experienced", icon: "🧰" },
      { name: "Visual Studio", level: "Experienced", icon: "💻" },
      { name: "Figma", level: "Intermediate", icon: "🎨" },
      { name: "Git & GitHub", level: "Experienced", icon: "🐙" },
      { name: "Postman", level: "Experienced", icon: "📬" }
    ]
  };

  const getLevelColor = (level) => {
    switch(level) {
      case 'Experienced': return 'from-green-500 to-emerald-600';
      case 'Intermediate': return 'from-blue-500 to-purple-600';
      case 'Basic': return 'from-orange-400 to-red-500';
      default: return 'from-gray-400 to-gray-600';
    }
  };

  // Small helper to render a skill card grid from a list
  const SkillGrid = ({ items }) => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map(skill => (
        <div key={skill.name} className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 group">
          <div className="flex items-center space-x-3">
            <div className="text-2xl">{skill.icon}</div>
            <div className="flex-1">
              <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                {skill.name}
              </h4>
              <div className="flex items-center space-x-2 mt-1">
                <div className={`w-16 h-2 bg-gradient-to-r ${getLevelColor(skill.level)} rounded-full`}></div>
                <span className={`text-xs font-medium ${
                  skill.level === 'Experienced' ? 'text-green-600' :
                  skill.level === 'Intermediate' ? 'text-blue-600' : 'text-orange-600'
                }`}>
                  {skill.level}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-br from-gray-100 to-blue-100/30 relative overflow-hidden">
      <div className="absolute top-10 right-10 w-20 h-20 bg-green-200/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm text-blue-600 uppercase tracking-wider font-semibold mb-2">My Technical Skills</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-gray-800 to-green-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center justify-center">
              <span className="w-3 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-3"></span>
              Programming Languages
            </h3>
            <SkillGrid items={skills.programming} />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center justify-center">
              <span className="w-3 h-8 bg-gradient-to-b from-green-500 to-teal-500 rounded-full mr-3"></span>
              Android Development
            </h3>
            <SkillGrid items={skills.android} />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center justify-center">
              <span className="w-3 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full mr-3"></span>
              iOS Development
            </h3>
            <SkillGrid items={skills.ios} />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center justify-center">
              <span className="w-3 h-8 bg-gradient-to-b from-blue-400 to-green-400 rounded-full mr-3"></span>
              Cross-Platform & Backend
            </h3>
            <SkillGrid items={[...skills.crossplatform, ...skills.backend]} />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center justify-center">
              <span className="w-3 h-8 bg-gradient-to-b from-gray-500 to-gray-700 rounded-full mr-3"></span>
              Developer Tools
            </h3>
            <SkillGrid items={skills.tools} />
          </div>
        </div>

        <div className="text-center mt-16">
          <button
            onClick={() => scrollToSection('projects')}
            className="group inline-flex flex-col items-center text-blue-600 hover:text-blue-700 transition-all duration-300 transform hover:-translate-y-1"
          >
            <span className="text-sm font-medium mb-2">View Projects</span>
            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
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

export default SkillsSection;
