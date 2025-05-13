import React from 'react';

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, children, className }) => (
  <a
    href={href}
    className={`text-white hover:text-primary-main transition-colors px-4 py-2 rounded ${className || ''}`}
  >
    {children}
  </a>
);

export default NavItem; 