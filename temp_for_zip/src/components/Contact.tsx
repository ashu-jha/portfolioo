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
            <p className="text-white/70">Let's create something amazing together</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-all hover:border-white/20">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-white/70">Name</label>
              <input
                type="text"
                id="name"
                value={formState.name}
                onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-4 py-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 focus:border-white/20 outline-none text-white placeholder-white/50 transition-all"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-white/70">Email</label>
              <input
                type="email"
                id="email"
                value={formState.email}
                onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                className="w-full px-4 py-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 focus:border-white/20 outline-none text-white placeholder-white/50 transition-all"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-white/70">Message</label>
              <textarea
                id="message"
                value={formState.message}
                onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                rows={4}
                className="w-full px-4 py-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 focus:border-white/20 outline-none text-white placeholder-white/50 transition-all resize-none"
                required
              />
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-white/20 border border-white/10 hover:border-white/20 transition-all"
            >
              <Send className="w-5 h-5" />
              Send Message
            </motion.button>
          </form>
          
          <div className="mt-12 flex justify-center gap-6">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="mailto:bytemebae@gmail.com"
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors bg-white/5 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
            >
              <Mail className="w-5 h-5" />
              <span>bytemebae@gmail.com</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};