import React, { useState, useEffect } from 'react';
import { Edit, Eye, Save, Plus, Trash2, FileText, ChevronLeft, ChevronRight, Menu, File } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import FileNotesManager from '../utils/FileNotesManager';

const Notes = ({ theme = 'dark' }) => {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [markdownContent, setMarkdownContent] = useState('');
  const [noteTitle, setNoteTitle] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [fileManager] = useState(new FileNotesManager());

  // Load notes from files on component mount
  useEffect(() => {
    const loadNotes = async () => {
      setIsLoading(true);
      try {
        const notesList = await fileManager.getNotesFilesList();
        setNotes(notesList);
        
        if (notesList.length > 0) {
          const firstNote = notesList[0];
          const content = await fileManager.readNoteFile(firstNote.filename);
          setActiveNote(firstNote);
          setMarkdownContent(content);
          setNoteTitle(firstNote.title);
        }
      } catch (error) {
        console.error('Error loading notes:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadNotes();
  }, [fileManager]);

  // Handle responsive behavior
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setIsSidebarOpen(false);
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const createNewNote = async () => {
    const title = prompt('Enter note title:');
    if (!title) return;

    try {
      const newNote = await fileManager.createNoteFile(title);
      if (newNote) {
        setNotes(prev => [newNote, ...prev]);
        const content = await fileManager.readNoteFile(newNote.filename);
        setActiveNote(newNote);
        setMarkdownContent(content);
        setNoteTitle(newNote.title);
        setIsEditing(true);
      }
    } catch (error) {
      console.error('Error creating new note:', error);
    }
  };

  const saveNote = async () => {
    if (activeNote) {
      try {
        const success = await fileManager.writeNoteFile(activeNote.filename, markdownContent);
        if (success) {
          const updatedNote = {
            ...activeNote,
            title: noteTitle,
            lastModified: new Date().toISOString()
          };
          setNotes(prev => prev.map(note => 
            note.id === activeNote.id ? updatedNote : note
          ));
          setActiveNote(updatedNote);
          setIsEditing(false);
        }
      } catch (error) {
        console.error('Error saving note:', error);
      }
    }
  };

  const deleteNote = async (noteId) => {
    const noteToDelete = notes.find(note => note.id === noteId);
    if (!noteToDelete) return;

    const confirmDelete = window.confirm(`Are you sure you want to delete "${noteToDelete.title}"?`);
    if (!confirmDelete) return;

    try {
      const success = await fileManager.deleteNoteFile(noteToDelete.filename);
      if (success) {
        const filteredNotes = notes.filter(note => note.id !== noteId);
        setNotes(filteredNotes);
        
        if (activeNote?.id === noteId) {
          if (filteredNotes.length > 0) {
            const firstNote = filteredNotes[0];
            const content = await fileManager.readNoteFile(firstNote.filename);
            setActiveNote(firstNote);
            setMarkdownContent(content);
            setNoteTitle(firstNote.title);
          } else {
            setActiveNote(null);
            setMarkdownContent('');
            setNoteTitle('');
          }
        }
      }
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  const selectNote = async (note) => {
    if (activeNote && isEditing) {
      // Auto-save current note if editing
      await saveNote();
    }
    
    try {
      const content = await fileManager.readNoteFile(note.filename);
      setActiveNote(note);
      setMarkdownContent(content);
      setNoteTitle(note.title);
      setIsEditing(false);
      
      // Auto-close sidebar on mobile after selection
      if (isMobile) {
        setIsSidebarOpen(false);
      }
    } catch (error) {
      console.error('Error loading note:', error);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Simple markdown to HTML converter (basic implementation)
  const renderMarkdown = (markdown) => {
    let html = markdown
      // Headers
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      // Bold and Italic
      .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
      .replace(/\*(.*)\*/gim, '<em>$1</em>')
      // Code blocks (simple)
      .replace(/```([\s\S]*?)```/gim, '<pre><code>$1</code></pre>')
      .replace(/`([^`]+)`/gim, '<code>$1</code>')
      // Lists
      .replace(/^\- (.*$)/gim, '<li>$1</li>')
      .replace(/^\d+\. (.*$)/gim, '<li>$1</li>')
      // Line breaks
      .replace(/\n/gim, '<br>');

    // Wrap consecutive <li> tags in <ul>
    html = html.replace(/(<li>.*<\/li>)/gims, '<ul>$1</ul>');
    
    return html;
  };

  return (
    <div className={`flex h-screen relative ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white' 
        : 'bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 text-gray-900'
    }`}>
      
      {/* Sidebar Toggle Button */}
      <motion.button
        onClick={toggleSidebar}
        className={`fixed top-4 left-4 z-50 p-2 rounded-lg transition-all duration-300 ${
          theme === 'dark' 
            ? 'bg-gray-800/90 hover:bg-gray-700 text-white border border-gray-700' 
            : 'bg-white/90 hover:bg-gray-50 text-gray-900 border border-gray-300'
        } backdrop-blur-sm shadow-lg`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{ left: isSidebarOpen && !isMobile ? '320px' : '16px' }}
        transition={{ duration: 0.3 }}
      >
        {isSidebarOpen ? <ChevronLeft className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </motion.button>

      {/* Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            {/* Mobile Overlay */}
            {isMobile && (
              <motion.div
                className="fixed inset-0 bg-black/50 z-40 md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsSidebarOpen(false)}
              />
            )}
            
            {/* Sidebar Content */}
            <motion.div
              className={`${
                isMobile ? 'fixed left-0 top-0 z-40 h-full' : 'relative'
              } w-80 border-r overflow-y-auto ${
                theme === 'dark' ? 'border-gray-700 bg-gray-800/95' : 'border-gray-300 bg-white/95'
              } backdrop-blur-sm`}
              initial={{ x: isMobile ? -320 : 0, opacity: isMobile ? 0 : 1 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: isMobile ? -320 : 0, opacity: isMobile ? 0 : 1 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className="p-4 pt-16">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold flex items-center gap-2">
                    <File className="w-5 h-5" />
                    Notes Files
                  </h2>
                  <motion.button
                    onClick={createNewNote}
                    className={`p-2 rounded-lg transition-colors ${
                      theme === 'dark' 
                        ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                        : 'bg-blue-500 hover:bg-blue-600 text-white'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Plus className="w-4 h-4" />
                  </motion.button>
                </div>
                
                <div className="space-y-2">
                  {isLoading ? (
                    <div className="flex items-center justify-center py-8">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className={`w-6 h-6 border-2 rounded-full ${
                          theme === 'dark' ? 'border-blue-400 border-t-transparent' : 'border-blue-500 border-t-transparent'
                        }`}
                      />
                      <span className="ml-2 text-sm">Loading notes...</span>
                    </div>
                  ) : notes.length === 0 ? (
                    <div className="text-center py-8">
                      <FileText className={`w-12 h-12 mx-auto mb-2 ${
                        theme === 'dark' ? 'text-gray-600' : 'text-gray-400'
                      }`} />
                      <p className={`text-sm ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        No note files found
                      </p>
                    </div>
                  ) : (
                    notes.map((note, index) => (
                      <motion.div
                        key={note.id}
                        onClick={() => selectNote(note)}
                        className={`p-3 rounded-lg cursor-pointer transition-all duration-200 group ${
                          activeNote?.id === note.id
                            ? theme === 'dark' 
                              ? 'bg-blue-600/20 border border-blue-500/30 shadow-lg' 
                              : 'bg-blue-100 border border-blue-300 shadow-lg'
                            : theme === 'dark'
                              ? 'hover:bg-gray-700/50 hover:shadow-md'
                              : 'hover:bg-gray-100 hover:shadow-md'
                        }`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1 min-w-0">
                            <h3 className="font-medium truncate">{note.title}</h3>
                            <p className={`text-xs mt-1 truncate ${
                              theme === 'dark' ? 'text-gray-500' : 'text-gray-600'
                            }`}>
                              {note.filename}
                            </p>
                          </div>
                          <motion.button
                            onClick={(e) => {
                              e.stopPropagation();
                              deleteNote(note.id);
                            }}
                            className={`opacity-0 group-hover:opacity-100 p-1 rounded transition-all duration-200 ${
                              theme === 'dark' ? 'hover:bg-red-600/20 text-red-400' : 'hover:bg-red-100 text-red-600'
                            }`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Trash2 className="w-3 h-3" />
                          </motion.button>
                        </div>
                        <p className={`text-xs mt-1 ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          {new Date(note.lastModified).toLocaleDateString()}
                        </p>
                      </motion.div>
                    ))
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className={`flex-1 flex flex-col transition-all duration-300 ${
        isSidebarOpen && !isMobile ? 'ml-0' : 'ml-0'
      }`}>
        {activeNote ? (
          <motion.div
            className="h-full flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className={`p-4 pl-16 border-b flex items-center justify-between ${
              theme === 'dark' ? 'border-gray-700' : 'border-gray-300'
            }`}>
              <div className="flex-1">
                {isEditing ? (
                  <motion.input
                    value={noteTitle}
                    onChange={(e) => setNoteTitle(e.target.value)}
                    className={`text-xl font-bold bg-transparent border-none outline-none w-full mr-4 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}
                    placeholder="Note title..."
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                ) : (
                  <div>
                    <motion.h1 
                      className="text-xl font-bold"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {activeNote.title}
                    </motion.h1>
                    <p className={`text-xs mt-1 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      /notes/{activeNote.filename}
                    </p>
                  </div>
                )}
              </div>
              
              <div className="flex gap-2">
                {isEditing ? (
                  <motion.button
                    onClick={saveNote}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                      theme === 'dark' 
                        ? 'bg-green-600 hover:bg-green-700 text-white' 
                        : 'bg-green-500 hover:bg-green-600 text-white'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <Save className="w-4 h-4" />
                    Save
                  </motion.button>
                ) : (
                  <motion.button
                    onClick={() => setIsEditing(true)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                      theme === 'dark' 
                        ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                        : 'bg-blue-500 hover:bg-blue-600 text-white'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <Edit className="w-4 h-4" />
                    Edit
                  </motion.button>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-hidden">
              <AnimatePresence mode="wait">
                {isEditing ? (
                  <motion.textarea
                    key="editor"
                    value={markdownContent}
                    onChange={(e) => setMarkdownContent(e.target.value)}
                    className={`w-full h-full p-4 resize-none outline-none font-mono text-sm ${
                      theme === 'dark' 
                        ? 'bg-gray-800/50 text-white placeholder-gray-400' 
                        : 'bg-white/50 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="Write your markdown here..."
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  />
                ) : (
                  <motion.div 
                    className="h-full overflow-y-auto p-4 prose max-w-none ${
                      theme === 'dark' ? 'prose-invert' : ''
                    }"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div 
                      dangerouslySetInnerHTML={{ 
                        __html: renderMarkdown(markdownContent) 
                      }}
                      className={theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            className="flex-1 flex items-center justify-center pl-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center">
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  scale: [1, 1.1, 1] 
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <FileText className={`w-16 h-16 mx-auto mb-4 ${
                  theme === 'dark' ? 'text-gray-600' : 'text-gray-400'
                }`} />
              </motion.div>
              <motion.h2 
                className={`text-xl font-medium mb-2 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                No note files yet
              </motion.h2>
              <motion.p 
                className={`mb-4 ${
                  theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Create your first note file to get started with file-based note taking
              </motion.p>
              <motion.button
                onClick={createNewNote}
                className={`mt-4 px-4 py-2 rounded-lg transition-colors ${
                  theme === 'dark' 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'bg-blue-500 hover:bg-blue-600 text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                Create New Note File
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Notes;
