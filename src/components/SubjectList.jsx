import React from 'react';

const SubjectList = ({ navigateTo }) => {
  const subjects = [
    {
      name: 'Computer Networks',
      path: 'computer-networks',
      description: 'Data communications, network types, protocols, and internet fundamentals',
      color: 'blue',
      icon: '🌐'
    },
    {
      name: 'Software Engineering',
      path: 'software-engineering',
      description: 'SDLC models, requirements, design, testing, and maintenance',
      color: 'green',
      icon: '💻'
    },
    {
      name: 'Theory of Computation',
      path: 'toc',
      description: 'Finite automata, regular expressions, and computational theory',
      color: 'purple',
      icon: '🧮'
    },
    {
      name: 'Computer Graphics',
      path: 'computer-graphics',
      description: '2D/3D graphics, algorithms, rendering, and computer graphics programming',
      color: 'orange',
      icon: '🎨'
    },
    {
      name: 'PYQ Papers',
      path: 'pyq-papers',
      description: 'Previous year question papers and exam resources',
      color: 'red',
      icon: '📄'
    }
  ];

  const handleSubjectClick = (subjectPath) => {
    if (navigateTo) {
      navigateTo('notes', subjectPath);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjects.map((subject) => (
          <div
            key={subject.path}
            onClick={() => handleSubjectClick(subject.path)}
            className={`bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 border-l-4 border-${subject.color}-500`}
          >
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">{subject.icon}</span>
              <h2 className={`text-xl font-bold text-${subject.color}-600`}>{subject.name}</h2>
            </div>
            <p className="text-gray-600 mb-4 leading-relaxed">{subject.description}</p>
            <div className={`inline-flex items-center text-${subject.color}-600 font-semibold hover:text-${subject.color}-700 transition-colors`}>
              View Notes
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubjectList;
