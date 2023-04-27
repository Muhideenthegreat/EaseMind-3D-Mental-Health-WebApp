import React from 'react';
import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';

const ProgressBox = ({ user }) => {
  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300">
      <div className="p-4">
        <div className="flex items-center justify-center mb-4">
          <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center">
            <FaUser className="text-gray-500 text-3xl" />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold">{user.name}</h3>
            <span className="text-sm text-gray-500">{user.title}</span>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex-1 mr-4">
            <p className="text-sm text-gray-500 mb-2">3D Progress</p>
            <div className="relative w-full h-8 bg-gray-300 rounded-full">
              <div
                className="absolute top-0 left-0 h-full bg-green-500 rounded-full"
                style={{ width: `${user.progress3D}%` }}
              ></div>
            </div>
          </div>
          <div className="flex-1 ml-4">
            <p className="text-sm text-gray-500 mb-2">Relaxation</p>
            <div className="relative w-full h-8 bg-gray-300 rounded-full">
              <div
                className="absolute top-0 left-0 h-full bg-green-500 rounded-full"
                style={{ width: `${user.progress2D}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const data1 = {
  datasets: [
    {
      data: [60, 40],
      backgroundColor: ['#48bb78', '#E5E7EB'],
      borderWidth: 0,
      hoverBackgroundColor: ['#4B5563', '#E5E7EB'],
    },
  ],
};

const data2 = {
  datasets: [
    {
      data: [85, 15],
      backgroundColor: ['#48bb78', '#E5E7EB'],
      borderWidth: 0,
      hoverBackgroundColor: ['#4B5563', '#E5E7EB'],
    },
  ],
};

const ProgressTracker = () => {
  const users = [
    {
      id: 1,
      name: 'Muhideen Mustapha',
      title: 'Therapist',
      progress3D: 60,
      progress2D: 85,
    },
    {
      id: 2,
      name: 'Ademidun Adesola',
      title: 'Mum',
      progress3D: 80,
      progress2D: 50,
    },
    {
      id: 3,
      name: 'Jada Oduntan',
      title: 'Sister',
      progress3D: 30,
      progress2D: 70,
    },
  ];

  return (
  <div>

  <div className="flex justify-between space-x-3 ">
        {daysOfWeek.map((day) => (
          <div key={day} className="flex flex-col items-center">
            <div className="p-4 bg-gray-100 rounded-full">
              <FaCalendarAlt className="text-green-500" />
            </div>
            <span className="text-sm font-medium">{day}</span>
          </div>
        ))}
  </div>

  <h1 className="text-4xl font-bold mb-8 ml-4 mt-4">Progress Tracker</h1>
  <br></br>
    <div className="flex justify-center items-center ">
      <div className="flex">
        <div className="w-72 p-8 rounded-lg bg-gray-100 shadow-lg hover:shadow-xl">
          <Pie data={data1} />
          <div className="mt-4 text-center font-bold text-gray-700">3D Scenes</div>
        </div>
        <div className="w-72 p-8 ml-8 rounded-lg bg-gray-100 shadow-lg hover:shadow-xl">
          <Pie data={data2} />
          <div className="mt-4 text-center font-bold text-gray-700">Relaxation Techniques</div>
        </div>
      </div>
    </div>
    
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Share your Progress</h1>
      <div className="flex justify-center space-x-4">
        {users.map((user) => (
          <ProgressBox key={user.id} user={user} />
        ))}
      </div>
    </div>

    </div>
  );
};

export default ProgressTracker;

