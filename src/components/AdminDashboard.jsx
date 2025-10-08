import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { 
  collection, 
  query, 
  where, 
  getDocs, 
  doc, 
  updateDoc, 
  deleteDoc,
  orderBy 
} from 'firebase/firestore';
import { ref, deleteObject } from 'firebase/storage';
import { db, storage } from '../config/firebase';

const AdminDashboard = ({ onClose }) => {
  const { currentUser, isAdmin } = useAuth();
  const [pendingNotes, setPendingNotes] = useState([]);
  const [approvedNotes, setApprovedNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('pending');
  const [selectedNote, setSelectedNote] = useState(null);
  const [rejectionReason, setRejectionReason] = useState('');
  const [processingId, setProcessingId] = useState(null);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    if (isAdmin) {
      fetchNotes();
    }
  }, [isAdmin]);

  const fetchNotes = async () => {
    try {
      setLoading(true);
      
      // Fetch pending notes
      const pendingQuery = query(
        collection(db, 'notes'),
        where('status', '==', 'pending'),
        orderBy('timestamp', 'desc')
      );
      const pendingSnapshot = await getDocs(pendingQuery);
      const pending = pendingSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      // Fetch approved notes
      const approvedQuery = query(
        collection(db, 'notes'),
        where('status', '==', 'approved'),
        orderBy('timestamp', 'desc')
      );
      const approvedSnapshot = await getDocs(approvedQuery);
      const approved = approvedSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      setPendingNotes(pending);
      setApprovedNotes(approved);
    } catch (error) {
      console.error('Error fetching notes:', error);
    } finally {
      setLoading(false);
    }
  };

  const approveNote = async (noteId) => {
    try {
      setProcessingId(noteId);
      const noteRef = doc(db, 'notes', noteId);
      await updateDoc(noteRef, {
        status: 'approved',
        approved: true,
        approvedBy: currentUser.uid,
        approvedAt: new Date()
      });
      await fetchNotes();
      setSelectedNote(null);
      setNotification({ type: 'success', message: 'Note approved successfully!' });
      setTimeout(() => setNotification(null), 3000);
    } catch (error) {
      console.error('Error approving note:', error);
      setNotification({ type: 'error', message: 'Failed to approve note. Please try again.' });
      setTimeout(() => setNotification(null), 3000);
    } finally {
      setProcessingId(null);
    }
  };

  const rejectNote = async (noteId, reason) => {
    try {
      setProcessingId(noteId);
      
      // Find the note to get file info for deletion
      const note = pendingNotes.find(n => n.id === noteId);
      
      // Delete file from storage
      if (note?.downloadURL) {
        try {
          const fileRef = ref(storage, note.downloadURL);
          await deleteObject(fileRef);
        } catch (error) {
          console.error('Error deleting file from storage:', error);
        }
      }

      // Delete note document
      await deleteDoc(doc(db, 'notes', noteId));
      
      await fetchNotes();
      setSelectedNote(null);
      setRejectionReason('');
      setNotification({ type: 'success', message: 'Note rejected and removed successfully!' });
      setTimeout(() => setNotification(null), 3000);
    } catch (error) {
      console.error('Error rejecting note:', error);
      setNotification({ type: 'error', message: 'Failed to reject note. Please try again.' });
      setTimeout(() => setNotification(null), 3000);
    } finally {
      setProcessingId(null);
    }
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return 'Unknown';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  };

  const NoteCard = ({ note, showActions = true }) => (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-800 mb-2">{note.title}</h3>
          <div className="flex items-center text-sm text-gray-600 mb-2">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span>{note.uploaderName}</span>
            <span className="mx-2">•</span>
            <span>{note.subject.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500 mb-3">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{formatDate(note.timestamp)}</span>
            <span className="mx-2">•</span>
            <span>{note.fileSize}</span>
          </div>
          {note.description && (
            <p className="text-gray-600 text-sm mb-3">{note.description}</p>
          )}
          {note.tags && note.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-3">
              {note.tags.map((tag, index) => (
                <span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="ml-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            note.status === 'pending' 
              ? 'bg-yellow-100 text-yellow-800' 
              : 'bg-green-100 text-green-800'
          }`}>
            {note.status.toUpperCase()}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <button
          onClick={() => setSelectedNote(note)}
          className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
        >
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          Preview
        </button>

        {showActions && note.status === 'pending' && (
          <div className="flex gap-2">
            <button
              onClick={() => approveNote(note.id)}
              disabled={processingId === note.id}
              className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              {processingId === note.id ? 'Processing...' : 'Approve'}
            </button>
            <button
              onClick={() => setSelectedNote(note)}
              className="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition-colors"
            >
              Reject
            </button>
          </div>
        )}
      </div>
    </div>
  );

  if (!isAdmin) {
    return (
      <div className="fixed inset-0 bg-gray-100 bg-opacity-90 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 text-center border border-gray-200">
          <div className="w-20 h-20 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center">
            <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.96-.833-2.732 0L3.232 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-3">Access Denied</h3>
          <p className="text-gray-600 mb-6">You don't have admin privileges to access this dashboard.</p>
          <button
            onClick={onClose}
            className="px-6 py-2 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-gray-100 bg-opacity-90 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl shadow-2xl max-w-7xl w-full max-h-[95vh] overflow-hidden border border-gray-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold">Admin Dashboard</h2>
                <p className="text-blue-100">Manage note submissions and approvals</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white hover:bg-opacity-20 rounded-xl transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white border-b border-gray-200">
          <div className="flex">
            <button
              onClick={() => setActiveTab('pending')}
              className={`px-6 py-4 font-semibold transition-colors ${
                activeTab === 'pending'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Pending Review ({pendingNotes.length})
            </button>
            <button
              onClick={() => setActiveTab('approved')}
              className={`px-6 py-4 font-semibold transition-colors ${
                activeTab === 'approved'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Approved ({approvedNotes.length})
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto" style={{ maxHeight: 'calc(95vh - 200px)' }}>
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <svg className="animate-spin w-8 h-8 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span className="text-gray-600">Loading notes...</span>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {activeTab === 'pending' && pendingNotes.map(note => (
                <NoteCard key={note.id} note={note} showActions={true} />
              ))}
              {activeTab === 'approved' && approvedNotes.map(note => (
                <NoteCard key={note.id} note={note} showActions={false} />
              ))}
            </div>
          )}

          {!loading && ((activeTab === 'pending' && pendingNotes.length === 0) || (activeTab === 'approved' && approvedNotes.length === 0)) && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No {activeTab} notes found
              </h3>
              <p className="text-gray-500">
                {activeTab === 'pending' 
                  ? 'All submissions have been reviewed!' 
                  : 'No notes have been approved yet.'}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Preview Modal */}
      {selectedNote && (
        <div className="fixed inset-0 bg-gray-100 bg-opacity-95 backdrop-blur-sm flex items-center justify-center z-60 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedNote.title}</h3>
                  <div className="flex items-center text-sm text-gray-600">
                    <span>{selectedNote.uploaderName}</span>
                    <span className="mx-2">•</span>
                    <span>{selectedNote.subject}</span>
                    <span className="mx-2">•</span>
                    <span>{selectedNote.fileSize}</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedNote(null)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="p-6 overflow-y-auto" style={{ maxHeight: 'calc(90vh - 200px)' }}>
              {selectedNote.description && (
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 mb-2">Description:</h4>
                  <p className="text-gray-600">{selectedNote.description}</p>
                </div>
              )}

              {selectedNote.tags && selectedNote.tags.length > 0 && (
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 mb-2">Tags:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedNote.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-2">File Preview:</h4>
                <div className="bg-gray-100 rounded-lg p-4 text-center">
                  <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <p className="text-gray-600 mb-4">{selectedNote.fileName}</p>
                  <a
                    href={selectedNote.downloadURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Open File
                  </a>
                </div>
              </div>

              {selectedNote.status === 'pending' && (
                <div className="flex gap-4">
                  <button
                    onClick={() => approveNote(selectedNote.id)}
                    disabled={processingId === selectedNote.id}
                    className="flex-1 px-6 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-colors disabled:opacity-50"
                  >
                    {processingId === selectedNote.id ? 'Processing...' : 'Approve Note'}
                  </button>
                  <div className="flex-1">
                    <input
                      type="text"
                      value={rejectionReason}
                      onChange={(e) => setRejectionReason(e.target.value)}
                      placeholder="Reason for rejection (optional)"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl mb-2 focus:outline-none focus:border-red-500"
                    />
                    <button
                      onClick={() => rejectNote(selectedNote.id, rejectionReason)}
                      disabled={processingId === selectedNote.id}
                      className="w-full px-6 py-3 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-colors disabled:opacity-50"
                    >
                      {processingId === selectedNote.id ? 'Processing...' : 'Reject Note'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Notification */}
      {notification && (
        <div className={`fixed top-4 right-4 z-70 px-6 py-4 rounded-lg shadow-lg text-white font-semibold ${
          notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'
        }`}>
          <div className="flex items-center">
            {notification.type === 'success' ? (
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
            {notification.message}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;