"use client"
import React, { useRef, useEffect, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  visible:string
  hidden:string
  baseClass:string
}

const ScrollReveal = ({ children,baseClass,visible,hidden}:ScrollRevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          console.log("i see you")
        } else {
          setIsVisible(false);
          console.log("i dont")
        }
      },
      { threshold: 0.01 } // Adjust this value based on when you want the animation to trigger
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${baseClass} ${isVisible ? visible : hidden}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
