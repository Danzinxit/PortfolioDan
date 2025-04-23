import React, { useRef, useEffect, useState } from 'react';

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  animate?: boolean;
}

const Section: React.FC<SectionProps> = ({ 
  id, 
  className = '', 
  children,
  animate = true
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!animate) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [animate]);

  return (
    <section 
      id={id} 
      ref={sectionRef}
      className={`py-20 ${className} ${
        animate ? (
          isInView 
            ? 'opacity-100 translate-y-0 transition-all duration-1000 ease-out'
            : 'opacity-0 translate-y-10'
        ) : ''
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        {children}
      </div>
    </section>
  );
};

export default Section;