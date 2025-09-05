import React, { useEffect } from 'react';

const NotesList = ({ subject, navigateTo }) => {
  const notesData = {
    'computer-networks': [
      { name: '1-Data Communications.pdf', path: '/notes/computer-networks/1-Data Communications.pdf', size: '2.1 MB', type: 'pdf' },
      { name: '2-Networks.pdf', path: '/notes/computer-networks/2-Networks.pdf', size: '1.8 MB', type: 'pdf' },
      { name: '3-Network Types, Switching and Internet.pdf', path: '/notes/computer-networks/3-Network Types, Switching and Internet.pdf', size: '3.2 MB', type: 'pdf' },
      { name: '4-Protocol Layering.pdf', path: '/notes/computer-networks/4-Protocol Layering.pdf', size: '2.5 MB', type: 'pdf' },
      { name: 'Data-Communications-and-Network.pdf', path: '/notes/computer-networks/Data-Communications-and-Network.pdf', size: '4.1 MB', type: 'pdf' }
    ],
    'software-engineering': [
      { name: 'Chapter 1 Introduction.pdf', path: '/notes/software-engineering/Chapter 1 Introduction.pdf', size: '1.9 MB', type: 'pdf' },
      { name: 'Chapter 2 Agile Model.pdf', path: '/notes/software-engineering/Chapter 2 Agile Model.pdf', size: '2.3 MB', type: 'pdf' },
      { name: 'Chapter 2 CMMI Model.pdf', path: '/notes/software-engineering/Chapter 2 CMMI Model.pdf', size: '1.7 MB', type: 'pdf' },
      { name: 'Chapter 2 Software Development Life Cycle Models.pdf', path: '/notes/software-engineering/Chapter 2 Software Development Life Cycle Models.pdf', size: '3.1 MB', type: 'pdf' },
      { name: 'Chapter 3 DFD.pptx', path: '/notes/software-engineering/Chapter 3 DFD.pptx', size: '2.8 MB', type: 'pptx' },
      { name: 'Chapter 3 Software Requirements.pdf', path: '/notes/software-engineering/Chapter 3 Software Requirements.pdf', size: '2.4 MB', type: 'pdf' },
      { name: 'Chapter 4 Software Design.pdf', path: '/notes/software-engineering/Chapter 4 Software Design.pdf', size: '3.3 MB', type: 'pdf' },
      { name: 'Chapter 5 Software Maintenance.pdf', path: '/notes/software-engineering/Chapter 5 Software Maintenance.pdf', size: '2.2 MB', type: 'pdf' },
      { name: 'Chapter 5 Software Testing.pdf', path: '/notes/software-engineering/Chapter 5 Software Testing.pdf', size: '2.9 MB', type: 'pdf' }
    ],
    'toc': [
      { name: 'Unit1,2 (part 1) - Finite state machine, string, languages accepting FA.docx', path: '/notes/toc/Unit1,2 (part 1) - Finite state machine, string, languages accepting FA.docx', size: '1.5 MB', type: 'docx' },
      { name: 'Unit 2 (part 2)-NDFA to FA, Mealy & Moore machine model - Copy.docx', path: '/notes/toc/Unit 2 (part 2)-NDFA to FA, Mealy & Moore machine model - Copy.docx', size: '2.1 MB', type: 'docx' },
      { name: 'Unit 2 (part 3) - RE to FA, Equivalence of FA\'s & RE\'s, FA to RG and vice-versa.docx', path: '/notes/toc/Unit 2 (part 3) - RE to FA, Equivalence of FA\'s & RE\'s, FA to RG and vice-versa.docx', size: '2.7 MB', type: 'docx' },
      { name: 'Unit 2 (part 4) - Minimization of FA.docx', path: '/notes/toc/Unit 2 (part 4) - Minimization of FA.docx', size: '1.8 MB', type: 'docx' }
    ],
    'pyq-papers': [
      { name: 'Question Paper 1', path: '/notes/pyq-papers/WhatsApp Image 2025-09-01 at 22.05.39_9b1eb4ec.jpg', size: '1.2 MB', type: 'image' },
      { name: 'Question Paper 2', path: '/notes/pyq-papers/WhatsApp Image 2025-09-01 at 22.05.40_0e618a7a.jpg', size: '1.1 MB', type: 'image' },
      { name: 'Question Paper 3', path: '/notes/pyq-papers/WhatsApp Image 2025-09-01 at 22.05.40_ce76c314.jpg', size: '1.3 MB', type: 'image' },
      { name: 'Question Paper 4', path: '/notes/pyq-papers/WhatsApp Image 2025-09-01 at 22.10.54_bf83357d.jpg', size: '1.0 MB', type: 'image' },
      { name: 'Question Paper 5', path: '/notes/pyq-papers/WhatsApp Image 2025-09-01 at 22.10.54_d98b9fb7.jpg', size: '1.4 MB', type: 'image' },
      { name: 'Question Paper 6', path: '/notes/pyq-papers/WhatsApp Image 2025-09-01 at 22.10.55_69c6bc83.jpg', size: '1.2 MB', type: 'image' },
      { name: 'Question Paper 7', path: '/notes/pyq-papers/WhatsApp Image 2025-09-01 at 22.10.55_7c07fd40.jpg', size: '1.1 MB', type: 'image' },
      { name: 'Question Paper 8', path: '/notes/pyq-papers/WhatsApp Image 2025-09-05 at 09.14.12_db9d70dd.jpg', size: '1.3 MB', type: 'image' },
      { name: 'Question Paper 9', path: '/notes/pyq-papers/WhatsApp Image 2025-09-05 at 09.14.12_e7907391.jpg', size: '1.0 MB', type: 'image' },
      { name: 'Question Paper 10', path: '/notes/pyq-papers/WhatsApp Image 2025-09-05 at 09.14.12_fed0dbc3.jpg', size: '1.2 MB', type: 'image' }
    ]
  };

  const notes = notesData[subject] || [];
  const subjectNames = {
    'computer-networks': 'Computer Networks',
    'software-engineering': 'Software Engineering',
    'toc': 'Theory of Computation',
    'pyq-papers': 'PYQ Papers'
  };

  // Scroll to top when component mounts
  useEffect(() => {
    // Small delay to ensure component is fully rendered
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 10);
    
    // Prevent scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    
    return () => {
      clearTimeout(timer);
      // Reset scroll restoration when component unmounts
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'auto';
      }
    };
  }, [subject]);

  return (
    <div className="min-h-screen bg-gray-50 py-8" style={{ scrollBehavior: 'auto' }}>
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <button
            onClick={() => navigateTo ? navigateTo('home') : window.history.back()}
            className="flex items-center text-blue-600 hover:text-blue-800 font-medium mb-4 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Subjects
          </button>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">
            {subjectNames[subject]} Notes
          </h1>
          <p className="text-gray-600 text-center mt-2">
            {notes.length} files available for download
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map((note, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-100">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 leading-tight">
                    {note.name.replace('.pdf', '').replace('.docx', '').replace('.pptx', '')}
                  </h3>
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    {note.size}
                  </div>
                </div>
                <div className="ml-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    {note.type === 'image' ? (
                      <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    )}
                  </div>
                </div>
              </div>

              {/* Image Preview for PYQ Papers */}
              {note.type === 'image' && (
                <div className="mb-4">
                  <img
                    src={note.path}
                    alt={note.name}
                    className="w-full h-48 object-cover rounded-lg border border-gray-200"
                    onError={(e) => {
                      e.target.src = '/vite.svg'; // Fallback image
                    }}
                  />
                </div>
              )}

              <a
                href={note.path}
                download
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download
              </a>
            </div>
          ))}
        </div>

        {notes.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No notes found</h3>
            <p className="text-gray-500">This subject doesn't have any notes available yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotesList;
