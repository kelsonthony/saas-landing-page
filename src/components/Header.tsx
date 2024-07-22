import React from 'react';

import logoThonyTech from '../assets/logo-techfinal-1-removebg-preview.png';

import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0">
              <img className="h-14 w-18" src={logoThonyTech} alt="Logo" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="#" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Features</a>
                <a href="#" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Pricing</a>
                <a href="#" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <ThemeToggle />
            <a href="#" className="text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Log in</a>
            <a href="#" className="bg-indigo-500 text-white px-3 py-2 rounded-md text-sm font-medium">Sign up</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
