import React from "react";

const Header = () => {
  return (
    <nav>
      <div className="mx-auto">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex space-x-4">
            {/* <a
              href="#"
              className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
              aria-current="page"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="text-gray-600 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
            >
              Team
            </a>
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
            >
              Projects
            </a>
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
            >
              Calendar
            </a> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
