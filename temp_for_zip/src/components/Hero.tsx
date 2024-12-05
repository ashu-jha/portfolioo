import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black">
      <div className="relative flex flex-col items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-6xl md:text-7xl font-bold text-white mb-8"
          style={{
            textShadow: '0 0 5px #ffffff, 0 0 20px #000, 0 0 30px #000',
          }}
        >
          Hello, I am Ashu
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="text-xl text-white mb-12"
          style={{
            textShadow: '0 0 5px #ffffff, 0 0 20px #000, 0 0 30px #000',
          }}
        >
          A passionate software developer
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="flex gap-6"
        >
          <motion.a
            href="https://github.com/ashu-jha"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
          >
            <Github className="w-6 h-6 text-white" />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/ashutosh-kumar-jha-5152a7248/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
          >
            <Linkedin className="w-6 h-6 text-white" />
          </motion.a>

          <motion.a
            href="mailto:bytemebae@gmail.com"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
          >
            <Mail className="w-6 h-6 text-white" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};