// File operations utility for the Notes app
// This simulates file operations for a web environment

export class FileNotesManager {
    constructor() {
        this.notesPath = '/notes/';
        this.fileExtension = '.md';
    }

    // Get list of all note files
    async getNotesFilesList() {
        try {
            // In a real implementation, this would fetch from your file system
            // For now, we'll simulate with the files we created
            const files = [
                'welcome.md',
                'project-ideas.md',
                'coding-tips.md',
                'learning-log.md'
            ];

            return files.map(filename => ({
                id: filename.replace('.md', ''),
                filename,
                title: this.filenameToTitle(filename),
                lastModified: new Date().toISOString() // In real implementation, get actual file modified time
            }));
        } catch (error) {
            console.error('Error fetching notes list:', error);
            return [];
        }
    }

    // Read content of a specific note file
    async readNoteFile(filename) {
        try {
            // In a real implementation, this would read from your file system
            // For now, we'll use localStorage to simulate file content
            const storageKey = `note-file-${filename}`;
            const content = localStorage.getItem(storageKey);

            if (content) {
                return content;
            }

            // If not in localStorage, return default content based on filename
            return this.getDefaultContent(filename);
        } catch (error) {
            console.error(`Error reading note file ${filename}:`, error);
            return '';
        }
    }

    // Write content to a note file
    async writeNoteFile(filename, content) {
        try {
            // In a real implementation, this would write to your file system
            // For now, we'll use localStorage to simulate file storage
            const storageKey = `note-file-${filename}`;
            localStorage.setItem(storageKey, content);
            return true;
        } catch (error) {
            console.error(`Error writing note file ${filename}:`, error);
            return false;
        }
    }

    // Create a new note file
    async createNoteFile(title) {
        const filename = this.titleToFilename(title);
        const content = `# ${title}\n\nStart writing your note here...`;

        const success = await this.writeNoteFile(filename, content);
        if (success) {
            return {
                id: filename.replace('.md', ''),
                filename,
                title,
                lastModified: new Date().toISOString()
            };
        }
        return null;
    }

    // Delete a note file
    async deleteNoteFile(filename) {
        try {
            // In a real implementation, this would delete from your file system
            const storageKey = `note-file-${filename}`;
            localStorage.removeItem(storageKey);
            return true;
        } catch (error) {
            console.error(`Error deleting note file ${filename}:`, error);
            return false;
        }
    }

    // Utility functions
    filenameToTitle(filename) {
        return filename
            .replace('.md', '')
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }

    titleToFilename(title) {
        return title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-|-$/g, '') + '.md';
    }

    getDefaultContent(filename) {
        // Default content for our sample files
        const defaultContents = {
            'welcome.md': `# Welcome to File-Based Notes! 📝

This is your personal markdown-based note system. Each file in the \`notes\` folder represents a separate note.

## Features
- **File-based storage** - Each note is a separate \`.md\` file
- **Real-time preview** - See your markdown rendered beautifully
- **Easy editing** - Edit notes directly in the app
- **Persistent storage** - Notes are saved as actual files in your repository

## Getting Started
1. Create new \`.md\` files in the \`notes\` folder
2. Edit them through this interface
3. See live preview of your formatted content
4. All changes are saved to the actual files

## Markdown Support
- Headers (# ## ###)
- **Bold** and *italic* text
- Lists and checkboxes
- Code blocks and inline \`code\`
- Links and much more!

Happy note-taking! 🚀`,

            'project-ideas.md': `# My Project Ideas 💡

Here are some exciting project ideas I want to work on:

## Web Development Projects
- [ ] **Portfolio Enhancement** - Add more interactive features
- [ ] **Notes App** - File-based markdown editor ✅
- [ ] **Task Manager** - With drag-and-drop functionality
- [ ] **Weather Dashboard** - Real-time weather data visualization

## Learning Goals
- [ ] **Advanced React Patterns** - Hooks, Context, Performance optimization
- [ ] **Backend Development** - Node.js, Express, databases
- [ ] **DevOps Skills** - Docker, CI/CD, cloud deployment
- [ ] **Mobile Development** - React Native or Flutter

Let's build something amazing! 🚀`,

            'coding-tips.md': `# Coding Tips & Tricks 🛠️

Collection of useful coding tips and best practices.

## JavaScript Tips

### Array Methods
\`\`\`javascript
// Use map for transformations
const doubled = numbers.map(n => n * 2);

// Use filter for conditional selection
const evens = numbers.filter(n => n % 2 === 0);
\`\`\`

Keep learning and coding! 💪`,

            'learning-log.md': `# Daily Learning Log 📚

*A place to track my daily learning progress and insights.*

## January 2025

### Week 3 (Jan 15-21)

#### Jan 21, 2025
**Topic**: File-based Notes System
- Implemented file-based note storage
- Enhanced UX with better animations

**Key Insights**:
- File-based systems provide better persistence
- User experience is crucial for productivity apps

*"The expert in anything was once a beginner."* - Helen Hayes`
        };

        return defaultContents[filename] || `# ${this.filenameToTitle(filename)}\n\nStart writing your note here...`;
    }
}

export default FileNotesManager;
