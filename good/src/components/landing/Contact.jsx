import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Send, Github, Linkedin, Twitter, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can integrate with email service or API here
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-blue-900/20 dark:to-purple-900/20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center items-center gap-2 mb-4">
            <MessageCircle className="w-6 h-6 text-blue-600" />
            <span className="text-sm font-medium text-blue-600 uppercase tracking-wider">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a friendly chat about technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 focus:border-blue-500 dark:focus:border-blue-400 outline-none transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 focus:border-blue-500 dark:focus:border-blue-400 outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 focus:border-blue-500 dark:focus:border-blue-400 outline-none transition-colors"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 focus:border-blue-500 dark:focus:border-blue-400 outline-none transition-colors resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Let's connect</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-800 dark:text-white">Email</p>
                    <p className="text-slate-600 dark:text-slate-300">anurag@example.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-800 dark:text-white">Phone</p>
                    <p className="text-slate-600 dark:text-slate-300">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-800 dark:text-white">Location</p>
                    <p className="text-slate-600 dark:text-slate-300">Available Worldwide</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6">Follow me</h3>
              <div className="flex gap-4">
                <motion.a
                  href="https://github.com/anurag2204-k"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-gradient-to-r from-gray-800 to-gray-600 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300"
                >
                  <Github className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300"
                >
                  <Linkedin className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300"
                >
                  <Twitter className="w-6 h-6" />
                </motion.a>
              </div>
            </div>

            {/* Quick Response */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Quick Response</h3>
              <p className="text-blue-100 mb-4">
                I typically respond to messages within 24 hours. For urgent matters, feel free to reach out on multiple channels.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm">Usually responds within a few hours</span>
              </div>
            </div>

            {/* Resume Download */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Download Resume</h3>
              <p className="text-green-100 mb-6">
                Get a comprehensive overview of my experience, skills, and achievements in a professional format.
              </p>
              <motion.a
                href="/resume.pdf"
                download="Anurag_Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/30 transition-all duration-300 border border-white/20"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download PDF
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
