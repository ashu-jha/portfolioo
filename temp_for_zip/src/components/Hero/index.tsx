import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Title } from './Title';
import { Subtitle } from './Subtitle';

export const Hero = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black text-white"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-black animate-gradient" />
        <div className="absolute inset-0 backdrop-blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <motion.div className="text-center">
          <Title />
          <Subtitle />
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="flex justify-center gap-6 mt-8"
          >
            <motion.a
              href="https://github.com/ashu-jha"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-white/20 rounded-full hover:bg-white/40 transition-colors border border-white/50"
            >
              <Github className="w-6 h-6 text-white" strokeWidth={2} />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/ashutosh-kumar-jha-5152a7248/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-white/20 rounded-full hover:bg-white/40 transition-colors border border-white/50"
            >
              <Linkedin className="w-6 h-6 text-white" strokeWidth={2} />
            </motion.a>

            <motion.a
              href="mailto:bytemebae@gmail.com"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-white/20 rounded-full hover:bg-white/40 transition-colors border border-white/50"
            >
              <Mail className="w-6 h-6 text-white" strokeWidth={2} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};