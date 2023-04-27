import React from 'react';
import ocean from '../images/ocean.gif'
import Forest from '../images/forest.gif'
import Desert from '../images/desert.gif'
import City from '../images/city.gif'
import { Link } from 'react-router-dom';

function Scene() {
  
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="w-2/3">
        <div className="text-3xl font-bold text-left mb-8">Scenes</div>
        <div className="flex justify-center">
          {/* First box */}
          <div className="relative w-1/4 h-80 mx-2 mb-8">
            <img src={ocean} alt="Scene 1" className="object-cover w-full h-full rounded-lg" />
            <Link to ="/ocean" className="absolute bottom-0 right-0 p-4 bg-gray-900 rounded-full text-white hover:bg-gray-700 transition duration-300 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                <path d="M8 5v10l7-5z" />
              </svg>
            </Link>
            <div className="text-left mt-2">Ocean</div>
            <p className="text-gray-500">Waves crashing, whales, dolphins, sea gulls</p>
          </div>
          {/* Second box */}
          <div className="relative w-1/4 h-80 mx-2 mb-8">
            <img src={Forest} alt="Scene 2" className="object-cover w-full h-full rounded-lg" />
            <button className="absolute bottom-0 right-0 p-4 bg-gray-900 rounded-full text-white hover:bg-gray-700 transition duration-300 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                <path d="M8 5v10l7-5z" />
              </svg>
            </button>
            <div className="text-left mt-2">Forest</div>
            <p className="text-gray-500">Birdsong, insect, rustling leaves, animal</p>
          </div>
          {/* Third box */}
          <div className="relative w-1/4 h-80 mx-2 mb-8">
            <img src={Desert} alt="Scene 3" className="object-cover w-full h-full rounded-lg" />
            <button className="absolute bottom-0 right-0 p-4 bg-gray-900 rounded-full text-white hover:bg-gray-700 transition duration-300 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                <path d="M8 5v10l7-5z" />
              </svg>
            </button>
            <div className="text-left mt-2">Desert</div>
            <p className="text-gray-500">Wind, Sand, Silence, Echoes</p>
            
          </div>
          {/* Fourth box */}
          <div className="relative w-1/4 h-80 mx-2 mb-8">
            <img src={City} alt="Scene 3" className="object-cover w-full h-full rounded-lg" />
            <button className="absolute bottom-0 right-0 p-4 bg-gray-900 rounded-full text-white hover:bg-gray-700 transition duration-300 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                <path d="M8 5v10l7-5z" />
              </svg>
            </button>
            <div className="text-left mt-2">City</div>
            <p className="text-gray-500">Horns, People, Construction, Music</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Scene;
