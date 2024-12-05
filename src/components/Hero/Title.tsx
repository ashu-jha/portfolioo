import { motion } from 'framer-motion';

export const Title = () => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-6xl md:text-7xl font-['Shadows_Into_Light'] mb-6 text-black"
      style={{
        textShadow: '2px 2px 4px rgba(255, 255, 255, 0.5)',
        WebkitTextStroke: '1px white'
      }}
    >
      Hi, I'm Ashu
    </motion.h1>
  );
};