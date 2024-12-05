import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', updateMousePosition);
    document.querySelectorAll('a, button').forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.querySelectorAll('a, button').forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1
    },
    hover: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1.5
    }
  };

  return (
    <>
      {/* Large outer glow */}
      <motion.div
        className="fixed top-0 left-0 w-96 h-96 rounded-full pointer-events-none z-50 hidden md:block"
        animate={isHovering ? 'hover' : 'default'}
        variants={{
          default: {
            x: mousePosition.x - 192,
            y: mousePosition.y - 192,
            scale: 1,
            opacity: 0.15
          },
          hover: {
            x: mousePosition.x - 192,
            y: mousePosition.y - 192,
            scale: 1.1,
            opacity: 0.2
          }
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 15 }}
        style={{
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 70%)'
        }}
      />

      {/* Medium glow */}
      <motion.div
        className="fixed top-0 left-0 w-48 h-48 rounded-full pointer-events-none z-50 hidden md:block"
        animate={isHovering ? 'hover' : 'default'}
        variants={{
          default: {
            x: mousePosition.x - 96,
            y: mousePosition.y - 96,
            scale: 1,
            opacity: 0.2
          },
          hover: {
            x: mousePosition.x - 96,
            y: mousePosition.y - 96,
            scale: 1.2,
            opacity: 0.25
          }
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        style={{
          background: 'radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 70%)'
        }}
      />
      
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 bg-white rounded-full pointer-events-none z-50 hidden md:block"
        animate={isHovering ? 'hover' : 'default'}
        variants={variants}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
        style={{ opacity: 1 }}
      />
    </>
  );
};
