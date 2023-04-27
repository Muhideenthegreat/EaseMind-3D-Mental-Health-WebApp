import React from 'react';
import { FaSadTear, FaSmile, FaTired, FaQuestion, FaDizzy, FaMeh } from 'react-icons/fa';
import logo from '../images/meditate.jpeg'

function App() {
  return (
    <div>
    <div className="flex items-start justify-center h-screen bg-gray-100 py-10">
      <div className="w-4/5 p-10 bg-gray-200 rounded-lg shadow-lg">
        <div className="text-3xl font-bold text-gray-800">Hi Deen, </div>
        <div className="mt-8 text-lg font-medium text-gray-700">How are you feeling today?</div>
        <div className="flex justify-between mt-4">
          <div className="flex flex-col items-center text-green-600 hover:text-gray-500 cursor-pointer">
            <FaSadTear size={40} />
            <span className="mt-2">Sad</span>
          </div>
          <div className="flex flex-col items-center text-green-600 hover:text-gray-500 cursor-pointer">
            <FaSmile size={40} />
            <span className="mt-2">Happy</span>
          </div>
          <div className="flex flex-col items-center text-green-600 hover:text-gray-500 cursor-pointer">
            <FaTired size={40} />
            <span className="mt-2">Tired</span>
          </div>
          <div className="flex flex-col items-center text-green-600 hover:text-gray-500 cursor-pointer">
            <FaQuestion size={40} />
            <span className="mt-2">Unsure</span>
          </div>
          <div className="flex flex-col items-center text-green-600 hover:text-gray-500 cursor-pointer">
            <FaDizzy size={40} />
            <span className="mt-2">Anxious</span>
          </div>
          <div className="flex flex-col items-center text-green-600 hover:text-gray-500 cursor-pointer">
            <FaMeh size={40} />
            <span className="mt-2">Calm</span>
          </div>
        </div>
      </div>


    </div>

    <div className="bg-gray-300 h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-md p-8 w-2/3">
        <div className="text-3xl font-bold text-gray-800">Daily Affirmations</div>
        <div className="flex flex-wrap justify-center">
          {/* Fancy boxes */}
          <div className="w-64 h-64 bg-green-600 rounded-lg m-4 hover:bg-green-500 transition duration-300 flex items-center justify-center text-center"> 
            <div className="text-2xl font-bold text-white">
              "I am worthy of love and happiness ❤️✨"
            </div>
          </div>

          <div className="w-64 h-64 bg-green-600 rounded-lg m-4 hover:bg-green-500 transition duration-300 flex items-center justify-center text-center">
            <div className="text-2xl font-bold text-white">
              "I choose to let go of all negativity and embrace positivity 🙏☀️"
            </div>
          </div>

          <div className="w-64 h-64 bg-green-600 rounded-lg m-4 hover:bg-green-500 transition duration-300 flex items-center justify-center text-center">
            <div className="text-2xl font-bold text-white">
              "I am capable of achieving my goals and dreams 🌟💪"
            </div>
          </div>

          <div className="w-64 h-64 bg-green-600 rounded-lg m-4 hover:bg-green-500 transition duration-300 flex items-center justify-center text-center">
            <div className="text-2xl font-bold text-white">
              "I am grateful for all the blessings in my life and look forward to more 🙏🌈"
            </div>
          </div>
        </div>
        <div className="text-3xl font-bold text-gray-800">Start With One Of These</div>
        <br></br>
        <div className="flex items-center">
          {/* Box with image and text */}
          <div className="w-1/2">
            <a href = "https://youtu.be/U9YKY7fdwyg">
              <img src={logo} className="w-48 h-48 rounded-lg cursor-pointer"/>
            </a>
            
          </div>
          <div className="w-2/2 pl-8">
            <div className="text-lg font-medium mb-4">Mindfulness for Beginners</div>
            <p className="text-gray-600">10min</p>
          </div>
        </div>
      </div>
    </div>

</div>
    
  );
}

export default App;
