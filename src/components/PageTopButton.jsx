// src/components/PageTopButton.jsx
import React from 'react';
import { usePageTop } from '../hooks/usePageTop';

const PageTopButton = () => {
  const { isVisible, scrollToTop } = usePageTop();

  if (!isVisible) {
    return null;
  }

  return (
    <p id="page-top">
      <a href="#" onClick={scrollToTop}>TOP</a>
    </p>
  );
};

export default PageTopButton;