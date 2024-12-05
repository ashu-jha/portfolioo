import { motion } from 'framer-motion';

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
          className="text-xl text-white"
          style={{
            textShadow: '0 0 5px #ffffff, 0 0 20px #000, 0 0 30px #000',
          }}
        >
          A passionate software developer
        </motion.p>
      </div>
    </section>
  );
};