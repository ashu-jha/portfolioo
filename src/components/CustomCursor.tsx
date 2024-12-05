import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (clientX: number, clientY: number) => {
      setPosition({ x: clientX, y: clientY });
    };

    const handleMouseMove = (e: MouseEvent) => {
      updatePosition(e.clientX, e.clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      if (e.touches[0]) {
        updatePosition(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const handleInteractionStart = () => setIsHovering(true);
    const handleInteractionEnd = () => setIsHovering(false);

    // Mouse events
    window.addEventListener('mousemove', handleMouseMove);
    
    // Touch events
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchstart', handleTouchMove, { passive: false });

    // Hover events for both touch and mouse
    const elements = document.querySelectorAll('a, button');
    elements.forEach(element => {
      element.addEventListener('mouseenter', handleInteractionStart);
      element.addEventListener('mouseleave', handleInteractionEnd);
      element.addEventListener('touchstart', handleInteractionStart);
      element.addEventListener('touchend', handleInteractionEnd);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchstart', handleTouchMove);
      
      elements.forEach(element => {
        element.removeEventListener('mouseenter', handleInteractionStart);
        element.removeEventListener('mouseleave', handleInteractionEnd);
        element.removeEventListener('touchstart', handleInteractionStart);
        element.removeEventListener('touchend', handleInteractionEnd);
      });
    };
  }, []);

  const variants = {
    default: {
      x: position.x - 16,
      y: position.y - 16,
      scale: 1
    },
    hover: {
      x: position.x - 16,
      y: position.y - 16,
      scale: 1.5
    }
  };

  return (
    <>
      {/* Large outer glow */}
      <motion.div
        className="fixed top-0 left-0 w-96 h-96 rounded-full pointer-events-none z-50 block"
        animate={isHovering ? 'hover' : 'default'}
        variants={{
          default: {
            x: position.x - 192,
            y: position.y - 192,
            scale: 1,
            opacity: 0.15
          },
          hover: {
            x: position.x - 192,
            y: position.y - 192,
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
        className="fixed top-0 left-0 w-48 h-48 rounded-full pointer-events-none z-50 block"
        animate={isHovering ? 'hover' : 'default'}
        variants={{
          default: {
            x: position.x - 96,
            y: position.y - 96,
            scale: 1,
            opacity: 0.2
          },
          hover: {
            x: position.x - 96,
            y: position.y - 96,
            scale: 1.2,
            opacity: 0.25
          }
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 15 }}
        style={{
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 70%)'
        }}
      />

      {/* Core cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 bg-white rounded-full pointer-events-none z-50 mix-blend-difference block"
        animate={isHovering ? 'hover' : 'default'}
        variants={variants}
        transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      />
    </>
  );
};
