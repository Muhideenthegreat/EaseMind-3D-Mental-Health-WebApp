import React, { useState } from 'react';
import sleepImage from '../images/sleep.jpg';
import stressImage from '../images/stress.jpg';
import painImage from '../images/pain.jpg';
import anxietyImage from '../images/anxious.webp';
import laborImage from '../images/labor.jpg';
import breathe from '../images/breath.gif'
import bath from '../images/bath.gif'
import music from '../images/music.gif'


const techniques = [
  {
    title: 'Sleep',
    image: sleepImage,
    description: 'Sleep techniques help you to fall asleep faster and get a good night’s rest.'
  },
  {
    title: 'Stress',
    image: stressImage,
    description: 'Stress-reducing techniques can help you manage anxiety and improve your mental health.'
  },
  {
    title: 'Pain',
    image: painImage,
    description: 'Pain-management techniques can help alleviate pain and discomfort in various parts of your body.'
  },
  {
    title: 'Anxiety',
    image: anxietyImage,
    description: 'Anxiety-reducing techniques can help you calm your mind and reduce feelings of anxiousness.'
  },
  {
    title: 'Labor',
    image: laborImage,
    description: 'Labor techniques can help you manage pain and discomfort during labor and delivery.'
  },
];

function TechniqueBox({ title, image, description, onClick }) {
  return (
    <div
      className="w-1/2 md:w-1/5 p-4 cursor-pointer hover:shadow-lg  transition-shadow duration-300 rounded-lg"
      onClick={onClick}
    >
      <div className="relative h-48">
        <img src={image} alt={title} className="rounded-lg object-cover w-full h-full" />
        <div className="absolute bottom-0 right-0 bg-green-600 text-white p-2 rounded-bl-lg">{title}</div>
      </div>
      <div className="text-center mt-4 text-green-600">{title}</div>
    </div>
  );
}

function Dropdown({ title, description, onClose }) {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-4">
        <div className="flex justify-between items-center">
          <div className="font-bold text-lg">Things To Practice: </div>
          <button className="text-green-500 hover:text-gray-700 transition-colors duration-300" onClick={onClose}>X</button>
        </div>
        
        <div className="mt-4 flex flex-wrap justify-center">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-2 mb-4">
          <div className="relative">
          <img className="w-full" src={breathe} alt="image1" />
          <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-900 bg-opacity-75">
            <h3 className="text-white font-bold text-xl mb-2">Take Deep Breathes and Meditate</h3>
            
          </div>
        </div>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-2 mb-4">
        <div className="relative">
          <img className="w-full" src={bath} alt="image2" />
          <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-900 bg-opacity-75">
            <h3 className="text-white font-bold text-xl mb-2">Have a Warm Bath</h3>
            
          </div>
        </div>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-2 mb-4">
        <div className="relative">
          <img className="w-full" src={music} alt="image3" />
          <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-900 bg-opacity-75">
            <h3 className="text-white font-bold text-xl mb-2">Listen to Soothing Music</h3>
            
          </div>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [dropdownTitle, setDropdownTitle] = useState(null);

  return (
    <div className="container mx-auto my-8 ">
        <h1 className="text-4xl font-bold mb-8">Relaxation Techniques</h1>
      <div className="flex flex-wrap justify-center ">
        {techniques.map((technique) => (
          <TechniqueBox
            key={technique.title}
            title={technique.title}
            image={technique.image}
            onClick={() => setDropdownTitle(technique.title)}
          />
        ))}
      </div>
      {dropdownTitle && (
        <Dropdown
          title={dropdownTitle}
          description={techniques.find((technique) => technique.title === dropdownTitle).description}
          onClose={() => setDropdownTitle(null)}
        />
      )}
    </div>
  );
}

export default App;
