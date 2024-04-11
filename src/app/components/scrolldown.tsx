"use client";
import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface FadeInSectionProps {
  children: React.ReactNode;
}

const FadeInSection = ({ children }: FadeInSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);

  // Pasa el ref como argumento al hook useInView
  const { inView, ref: inViewRef } = useInView({
    threshold: 0.3,
  });

  // Asigna las clases según si el elemento está en la vista o no
  useEffect(() => {
    if (inView && ref.current) {
      ref.current.classList.add('fade-in');
    } else if (ref.current) {
      ref.current.classList.remove('fade-in');
    }
  }, [inView]);

  return (
    <div className={`fade-section ${inView ? 'fade-in-active' : ''}`} ref={inViewRef}>
      {children}
    </div>
  );
};

export default FadeInSection;
