import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import aboutImage from '../assets/about.jpg';


export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-black text-white" id="about">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300">
              Oh, hey there! I’m Ashu, just your average software developer who occasionally moonlights as a digital wizard. I spend my days (and let’s be honest, nights too) crafting code that somehow turns coffee and chaos into seamless digital experiences.
              </p>
              <p className="text-lg text-gray-300">
              I’m not saying I’m a perfectionist, but if pixels could talk, they’d probably tell you how much time I spend aligning them perfectly. When I’m not debugging the 573rd issue of the day, I’m busy brainstorming world-changing ideas or binge-watching masterpieces like Peaky Blinders and Breaking Bad for "research purposes" (obviously).
              </p>
            </div>
            
            <motion.div whileHover={{ scale: 1.05 }} className="relative">
  <div className="aspect-square rounded-2xl overflow-hidden">
    <img
      src={aboutImage}
      alt="About section image"
      className="object-cover w-full h-full"
    />
  </div>
</motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};