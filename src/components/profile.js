import { FaEdit, FaShareAlt, FaCog, FaMapMarkerAlt } from "react-icons/fa";
import Brenda from '../images/brenda.jpg'

function ProfilePage() {
  return (
    <div className="flex flex-col items-center justify-center py-16 bg-gray-100">
      <div className="w-full max-w-2xl flex flex-col items-center bg-white rounded-lg shadow-lg p-8 space-y-6">
        <img
          src={Brenda}
          alt="User profile picture"
          className="rounded-full w-24 h-24 object-cover"
        />
        <div className="flex items-center space-x-2">
          <h2 className="text-xl font-bold">Brenda Allen</h2>
          <FaEdit className="text-gray-400 hover:text-gray-600 cursor-pointer" />
        </div>
        <div className="flex space-x-4">
          <div className="bg-white rounded-lg shadow-lg p-4 cursor-pointer hover:bg-gray-100">
            <p className="text-gray-600 font-medium text-sm">Age</p>
            <p className="text-gray-900 font-bold text-2xl mt-2">34</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 cursor-pointer hover:bg-gray-100">
            <p className="text-gray-600 font-medium text-sm">Gender</p>
            <p className="text-gray-900 font-bold text-2xl mt-2">Female</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 cursor-pointer hover:bg-gray-100">
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-green-500" />
              <p className="text-gray-600 font-medium text-sm">Location</p>
            </div>
            <p className="text-gray-900 font-bold text-2xl mt-2">Lincoln University, PA</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <FaShareAlt className="text-gray-400 hover:text-gray-600 cursor-pointer" />
          <p className="text-gray-600 font-medium text-sm cursor-pointer hover:underline">Share your experience</p>
        </div>
        <div className="flex items-center space-x-2">
          <FaCog className="text-gray-400 hover:text-gray-600 cursor-pointer" />
          <p className="text-gray-600 font-medium text-sm cursor-pointer hover:underline">Settings</p>
        </div>
        <div className="w-full">
        <h2 className="text-xl font-bold">My Journal</h2>
          <textarea
            placeholder="Reflect on your thoughts and feelings here....."
            className="bg-white w-full rounded-lg shadow-lg p-4 resize-none h-40 mt-4"
          />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
