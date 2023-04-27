import React from 'react';
import { FaHome, FaGlobe, FaYinYang, FaChartPie, FaUser } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/logo.png'


function Navigation() {
  const location = useLocation();

  // Define an array of tab objects, each with a name, icon, and link
  const tabs = [
    { name: 'Home', icon: <FaHome />, link: '/home' },
    { name: '3D Scenes', icon: <FaGlobe />, link: '/scene' },
    { name: 'Relaxation', icon: <FaYinYang />, link: '/relax' },
    { name: 'Progress', icon: <FaChartPie />, link: '/progress' },
    { name: 'Profile', icon: <FaUser />, link: '/profile' },
  ];

  return (
    
    <nav className="bg-green-600 text-white py-4">
    <div className="flex items-center justify-center">
      <img src={logo} alt="Logo" className="h-18 w-24 " />
    </div>
  
    <ul className="flex justify-center">
      {tabs.map((tab) => (
        <li key={tab.name} className="mx-2">
          <Link
            to={tab.link}
            className={`flex items-center ${
              location.pathname === tab.link
                ? 'border-b-2 border-white'
                : 'opacity-50 hover:opacity-100'
            }`}
          >
            <span className="text-sm">{tab.name}</span>
            <span className="ml-2">{tab.icon}</span>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
  );
}

export default Navigation;

