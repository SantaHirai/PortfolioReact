// src/hooks/usePageTop.js
import { useState, useEffect, useCallback } from 'react';

export const usePageTop = (threshold = 300) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = useCallback(() => {
    if (window.scrollY > threshold) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [threshold]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return { isVisible, scrollToTop };
};