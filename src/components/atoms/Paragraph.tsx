import React from 'react';

type ParagraphProps = {
  children: React.ReactNode;
  className?: string;
};

const Paragraph: React.FC<ParagraphProps> = ({ children, className }) => (
  <p className={`text-secondary-main text-base md:text-lg ${className || ''}`}>
    {children}
  </p>
);

export default Paragraph; 