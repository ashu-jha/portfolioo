import { useState } from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Projects } from '../components/Projects';
import { Contact } from '../components/Contact';
import { SplashPage } from '../components/SplashPage';

export const HomePage = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash ? (
        <SplashPage onExit={() => setShowSplash(false)} />
      ) : (
        <>
          <Header />
          <main>
            <Hero />
            <About />
            <Projects />
            <Contact />
          </main>
        </>
      )}
    </>
  );
};
