import { motion } from 'framer-motion';
import { Code2, Database, Globe, Terminal } from 'lucide-react';

const skills = [
  {
    category: 'Frontend',
    icon: Globe,
    items: ['React', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Flutter']
  },
  {
    category: 'Backend',
    icon: Database,
    items: ['Python', 'Node.js', 'SQL', 'REST APIs']
  },
  {
    category: 'Tools',
    icon: Terminal,
    items: ['Git', 'VS Code', 'GitHub', 'Docker']
  },
  {
    category: 'Languages',
    icon: Code2,
    items: ['Python', 'JavaScript', 'TypeScript', 'Dart']
  }
];

export const Skills = () => {
  return (
    <section className="py-20 bg-black text-white" id="skills">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Skills
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all hover:border-white/20 cursor-default"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-6 h-6 text-white" />
                  <h3 className="text-xl font-bold text-white">{skill.category}</h3>
                </div>
                
                <ul className="space-y-2">
                  {skill.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: (index * 0.1) + (itemIndex * 0.1) }}
                      viewport={{ once: true }}
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};