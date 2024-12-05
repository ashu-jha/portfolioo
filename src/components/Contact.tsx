import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send } from 'lucide-react';
import { useState } from 'react';

export const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:bytemebae@gmail.com?subject=Contact from ${formState.name}&body=${formState.message}`;
  };

  return (
    <section className="py-20 bg-black text-white" id="contact">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-400">Let's create something amazing together</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                value={formState.name}
                onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-4 py-2 bg-gray-900 rounded-lg focus:ring-2 focus:ring-white outline-none"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                value={formState.email}
                onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                className="w-full px-4 py-2 bg-gray-900 rounded-lg focus:ring-2 focus:ring-white outline-none"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                value={formState.message}
                onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                rows={4}
                className="w-full px-4 py-2 bg-gray-900 rounded-lg focus:ring-2 focus:ring-white outline-none resize-none"
                required
              />
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-3 bg-white text-black rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors"
            >
              <Send className="w-5 h-5" />
              Send Message
            </motion.button>
          </form>
          
          <div className="mt-12 flex justify-center gap-6">
            <a
              href="mailto:bytemebae@gmail.com"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>bytemebae@gmail.com</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};