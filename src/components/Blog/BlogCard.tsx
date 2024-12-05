import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { ArrowRight } from 'lucide-react';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  imageUrl: string;
}

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard = ({ post }: BlogCardProps) => {
  const { isDarkMode } = useTheme();

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`border-b ${
        isDarkMode ? 'border-gray-800' : 'border-gray-200'
      } py-12 first:pt-0 last:border-none`}
    >
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
            className="relative aspect-[16/9] overflow-hidden"
          >
            <img
              src={post.imageUrl}
              alt={post.title}
              className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>
        </div>
        
        <div className="md:w-2/3 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-4 text-sm mb-4">
              <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                {post.date}
              </span>
              <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                •
              </span>
              <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                {post.readTime} read
              </span>
            </div>
            
            <h3 className={`text-2xl font-semibold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {post.title}
            </h3>
            
            <p className={`${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            } mb-6 line-clamp-2`}>
              {post.excerpt}
            </p>
          </div>
          
          <motion.button
            whileHover={{ x: 10 }}
            className={`flex items-center gap-2 ${
              isDarkMode 
                ? 'text-white hover:text-gray-300' 
                : 'text-gray-900 hover:text-gray-600'
            } transition-colors font-medium group w-fit`}
          >
            Read More
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
};
