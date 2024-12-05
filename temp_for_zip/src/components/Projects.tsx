import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'QueueJam',
    description: 'A modern queue management system',
    preview: 'https://queue-24ac3g59q-ashu-jhas-projects.vercel.app/',
    github: 'https://github.com/ashu-jha',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000'
  },
  {
    title: 'Medical Site Project',
    description: 'Healthcare management platform',
    github: 'https://github.com/ashu-jha',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000'
  },
  {
    title: 'Car & Bike Rental',
    description: 'Vehicle rental management system',
    github: 'https://github.com/ashu-jha',
    image: 'https://images.unsplash.com/photo-1485291571150-772bcfc10da5?q=80&w=1000'
  }
];

export const Projects = () => {
  return (
    <section className="py-20 bg-black text-white" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all hover:border-white/20"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-300 grayscale hover:grayscale-0 transition-all"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-white/70 mb-4 hover:text-white transition-colors">{project.description}</p>
                
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>Code</span>
                  </a>
                  
                  {project.preview && (
                    <a
                      href={project.preview}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Preview</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};