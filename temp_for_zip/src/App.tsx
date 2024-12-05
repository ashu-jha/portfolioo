import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CustomCursor } from './components/CustomCursor';
import { BlogPage } from './components/Blog/BlogPage';
import { ThemeProvider } from './context/ThemeContext';
import { HomePage } from './pages/HomePage';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <Router>
      <ThemeProvider>
        <div className="min-h-screen bg-black text-white">
          <CustomCursor />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/portfolio" element={<HomePage />} />
            <Route path="/portfolio/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} />
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;