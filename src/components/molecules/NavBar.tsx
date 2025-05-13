import React from 'react';
import Logo from '../atoms/Logo';
import NavItem from '../atoms/NavItem';
import Button from '../atoms/Button';

const NavBar: React.FC = () => (
  <nav className="bg-secondary-main rounded-2xl mt-4 mx-4 px-6 py-3 flex items-center justify-between shadow-lg z-50">
    <div className="flex items-center gap-8">
      <Logo />
      <div className="hidden md:flex gap-2">
        <NavItem href="#" className="bg-primary-main/10">Home</NavItem>
        <NavItem href="#">Services</NavItem>
        <NavItem href="#">Pricing</NavItem>
        <NavItem href="#">Blogs</NavItem>
        <NavItem href="#">Contact Us</NavItem>
      </div>
    </div>
    <Button variant="primary">Login/ Sign Up</Button>
  </nav>
);

export default NavBar; 