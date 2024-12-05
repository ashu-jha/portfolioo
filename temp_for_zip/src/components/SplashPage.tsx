import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

declare global {
  interface Window {
    noisyLinesBackground: any;
  }
}

interface SplashPageProps {
  onExit: () => void;
}

export const SplashPage = ({ onExit }: SplashPageProps) => {
  const appRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadNoisyLines = async () => {
      try {
        const { noisyLinesBackground } = await import('https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js');
        
        if (appRef.current) {
          const bg = noisyLinesBackground({
            el: appRef.current,
            colors: [0xFFFFFF, 0x000000],
            minStroke: 0.5,
            maxStroke: 2,
            timeCoef: 0.0002,
            coordScale: 2,
            displacementScale: 0.02
          });

          document.body.addEventListener('click', () => {
            bg.config.colors = [0xFFFFFF, 0x000000];
            bg.config.minStroke = Math.random() * 2;
            bg.config.maxStroke = bg.config.minStroke + Math.random() * 5;
            bg.drawTexture();
            bg.config.timeCoef = 0.000025 + Math.random() * 0.001;
            bg.uniforms.uCoordScale.value = 0.5 + Math.random() * 4.5;
            bg.uniforms.uDisplacementScale.value = 0.00025 + Math.random() * 0.01;
          });
        }
      } catch (error) {
        console.error('Failed to load noisy lines:', error);
      }
    };

    loadNoisyLines();
  }, []);

  return (
    <>
      <motion.div
        ref={appRef}
        className="fixed inset-0 w-full h-full bg-black z-40 overflow-hidden"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative h-full flex flex-col items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-6xl md:text-7xl font-bold text-white mb-8"
            style={{
              textShadow: '0 0 5px #ffffff, 0 0 20px #000, 0 0 30px #000',
            }}
          >
            Hello there<span className="animate-[blink_1s_step-end_infinite]">|</span>
          </motion.h1>
          
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            onClick={onExit}
            className="px-8 py-3 text-lg text-white border-2 border-white rounded-full 
                     hover:bg-white hover:text-black transition-colors duration-300
                     backdrop-blur-sm"
            style={{
              textShadow: '0 0 5px #ffffff, 0 0 20px #000, 0 0 30px #000',
            }}
          >
            Continue to the site
          </motion.button>
        </div>
      </motion.div>
    </>
  );
};
