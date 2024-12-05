import { motion } from 'framer-motion';

export const Subtitle = () => {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="text-xl md:text-2xl font-['Shadows_Into_Light'] mb-8 text-black"
      style={{
        textShadow: '2px 2px 4px rgba(255, 255, 255, 0.5)',
        WebkitTextStroke: '0.5px white'
      }}
    >
      A passionate software developer crafting digital experiences
    </motion.p>
  );
};