import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-blue-500 rounded-full opacity-30 blur-sm scale-150" />
          <div className="absolute inset-0 border-2 border-blue-500 rounded-full" />
        </div>
      </motion.div>
      
      <motion.div
        className="glow-effect"
        animate={{
          x: mousePosition.x - 100,
          y: mousePosition.y - 100,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30
        }}
      />
    </>
  );
};