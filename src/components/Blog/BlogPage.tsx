import { motion } from 'framer-motion';
import { BlogCard, BlogPost } from './BlogCard';
import { useTheme } from '../../context/ThemeContext';

// Sample blog posts data (you can replace this with real data later)
const samplePosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Art of Minimalist Design',
    excerpt: 'Explore the principles of minimalist design and how it can enhance user experience while maintaining functionality and aesthetic appeal.',
    date: 'March 15, 2024',
    readTime: '5 min',
    imageUrl: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&auto=format&fit=crop',
  },
  {
    id: '2',
    title: 'Building Modern Web Applications',
    excerpt: 'A deep dive into modern web development practices, from responsive design to progressive enhancement and performance optimization.',
    date: 'March 10, 2024',
    readTime: '7 min',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop',
  },
  {
    id: '3',
    title: 'The Future of Web Animation',
    excerpt: 'Discover how modern animation libraries and techniques are shaping the future of web interactions and user engagement.',
    date: 'March 5, 2024',
    readTime: '6 min',
    imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop',
  },
];

export const BlogPage = () => {
  const { isDarkMode } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`min-h-screen pt-20 ${isDarkMode ? 'bg-black' : 'bg-white'}`}
    >
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-center mb-16"
        >
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Blog
          </h1>
          <p className={`text-lg ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Thoughts on design, development, and everything in between
          </p>
        </motion.div>

        <div className="space-y-4">
          {samplePosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};
