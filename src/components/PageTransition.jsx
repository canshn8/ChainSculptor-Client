import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const PageTransition = ({ children }) => {
  useEffect(() => {
    gsap.fromTo(
      '.page-transition',
      { opacity: 0, y: -100 },
      { opacity: 1, y: 0, duration: 1 }
    );
  }, []);

  return <div className="page-transition">{children}</div>;
};

export default PageTransition;
