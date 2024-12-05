import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'QueueJam',
    description: 'A modern queue management system',
    preview: 'https://queue-24ac3g59q-ashu-jhas-projects.vercel.app/',
    github: 'https://github.com/ashu-jha',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000',
    technologies: ['React', 'Next.js', 'Tailwind CSS']
  },
  {
    title: 'Medical Site Project',
    description: 'Healthcare management platform',
    github: 'https://github.com/ashu-jha',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000',
    technologies: ['React', 'Next.js', 'Tailwind CSS']
  },
  {
    title: 'Car & Bike Rental',
    description: 'Vehicle rental management system',
    github: 'https://github.com/ashu-jha',
    image: 'https://images.unsplash.com/photo-1485291571150-772bcfc10da5?q=80&w=1000',
    technologies: ['React', 'Next.js', 'Tailwind CSS']
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
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden group hover:bg-white/10 transition-all hover:border-white/20"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 filter grayscale"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-white/70 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-white/10 text-white/70 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      Code
                    </motion.a>
                  )}
                  {project.preview && (
                    <motion.a
                      href={project.preview}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Demo
                    </motion.a>
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