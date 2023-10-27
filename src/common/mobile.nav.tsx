import React, { useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { INavigation } from '../interface/i.nav';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const navigations:INavigation[] = useMemo(() => ([
    {
        to:"/",
        title:"Dashboard"
    },
    {
        to:"/categories",
        title:"Categories"
    },
    {
        to:"/my-todo",
        title:"Todos"
    }
  ]), [])


  return (
    <div className="relative lg:invisible">
      <button
        onClick={toggleDropdown}
        className="text-black px-4 py-2 rounded-md focus:outline-none"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
        </svg>

      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 bg-white border border-gray-300 rounded shadow-lg w-48">
          <ul className="py-1">
            {
                navigations.map((e:INavigation, idx:number) => <li key={idx} className="px-4 py-2 hover:bg-blue-400 cursor-pointer">
                    <NavLink to={e.to} className='text-sm'>{e.title}</NavLink>
                </li>)
            }    
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
