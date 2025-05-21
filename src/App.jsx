// src/App.jsx
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import ThankYouPage from './pages/ThankYouPage';
import { useEffect } from 'react';

// スクロール復元コンポーネント
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/thankyou" element={<ThankYouPage />} />
        {/* 他のルートが必要な場合はここに追加 */}
      </Routes>
    </>
  );
}

export default App;