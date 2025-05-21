// src/components/SectionWrapper.jsx
import React from 'react';
import { useInView } from 'react-intersection-observer';

const SectionWrapper = ({ children, className = "", style = {} }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <div
      ref={ref}
      className={`section ${className} ${inView ? 'fade-in-up-active' : ''}`}
      style={style} // インラインスタイルも受け付ける
    >
      {children}
    </div>
  );
};

export default SectionWrapper;