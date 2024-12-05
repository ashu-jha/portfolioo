import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com/ashu-jha',
    label: 'GitHub'
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/ashutosh-kumar-jha-5152a7248/',
    label: 'LinkedIn'
  },
  {
    icon: Mail,
    href: 'mailto:bytemebae@gmail.com',
    label: 'Email'
  }
];

export const SocialLinks = () => {
  return (
    <div className="flex justify-center gap-6">
      {socialLinks.map((link, index) => {
        const Icon = link.icon;
        return (
          <motion.a
            key={link.label}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors group"
          >
            <Icon className="w-6 h-6 group-hover:text-blue-400 transition-colors" />
          </motion.a>
        );
      })}
    </div>
  );
};