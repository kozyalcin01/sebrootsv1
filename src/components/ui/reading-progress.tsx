'use client';

import { useEffect, useState } from 'react';

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      if (scrollHeight > 0) {
        const computedProgress = (currentScrollY / scrollHeight) * 100;
        setProgress(computedProgress);
      } else {
        setProgress(0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Yüklenince ilk hesabı yap
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 z-[60] h-[2px] bg-[#89A8B2] transition-[width] duration-100"
      style={{ width: `${progress}%` }}
    />
  );
}
