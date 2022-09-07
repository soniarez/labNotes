import React from 'react';
import { Link } from 'react-router-dom';


const Sidebar = () => {

  return (
    <div>
      <div >
        <div className="flex flex-col sm:flex-row sm:justify-around">
          <div >
            <nav className="mt-10 px-6 ">
              <Link to="/"
                className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg"
                
              >
                <span className="mx-4 text-lg">Element</span>
                <span className="flex-grow text-right"></span>
              </Link>
              <Link to="#"
                className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-800 dark:text-gray-100 rounded-lg bg-gray-100 dark:bg-gray-600"
                
              >
                <span className="mx-4 text-lg">Form</span>
                <span className="flex-grow text-right"></span>
              </Link>
              <Link to="#"
                className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg "
               
              >
                <span className="mx-4 text-lg">Commerce</span>
                <span className="flex-grow text-right"></span>
              </Link>
              <Link to="#"
                className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg "
                
              >
                <span className="mx-4 text-lg">Navigation</span>
                <span className="flex-grow text-right"></span>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
