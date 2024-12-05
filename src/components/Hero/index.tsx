import { motion } from 'framer-motion';
import { Title } from './Title';
import { Subtitle } from './Subtitle';
import { SocialLinks } from './SocialLinks';

export const Hero = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black text-white"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-blue-900/20 animate-gradient" />
        <div className="absolute inset-0 backdrop-blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <motion.div className="text-center">
          <Title />
          <Subtitle />
          <SocialLinks />
        </motion.div>
      </div>
    </motion.section>
  );
};