import React from 'react';

type HeadingProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
};

const Heading: React.FC<HeadingProps> = ({ level = 1, children, className }) => {
  const Tag: React.ElementType = `h${level}`;
  return (
    <Tag className={`text-white font-bold ${level === 1 ? 'text-5xl md:text-6xl' : level === 2 ? 'text-3xl md:text-4xl' : 'text-xl'} ${className || ''}`}>
      {children}
    </Tag>
  );
};

export default Heading; 