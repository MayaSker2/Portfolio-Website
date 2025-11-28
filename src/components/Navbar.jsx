import React, {useEffect, useState} from 'react'
import { Link } from 'react-scroll';
import { FaCode } from "react-icons/fa";
import { MENU_LINKS } from '../utils/data';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(true)
    const toggleMenu = () => {
        setIsOpen (!isOpen);
    };
    
    useEffect(() => {
        const handleResize = () => {
        if (window.innerWidth >= 768) {
            setIsOpen(true);  
        } else {
            setIsOpen(false);
        }
        };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
    }, []);

    return (
    <nav className='container mx-auto sticky top-5 z-10'>
        <div className='flex items-center justify-between bg-white/25 border
         border-[#fee6cc] rounded-full   backdrop-blur-[10px] m-5 p-3 md:p-0'
        >
            {/* Logo */}
            <FaCode className="text-3xl text-dark ml-5" />
            
            {/* Hamburger Icon */}
            <button className='block md:hidden text-[#333] mr-6 focus:outline-none'
            onClick={toggleMenu}>
                <svg className="w-6 h-6"
                fill="none" 
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                    {isOpen ? (
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    ) : (
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    )}
                </svg>
            </button>
            {/* Navigation Links */}
            <ul className={`
                ${isOpen ? "flex" : "hidden"}
                menu-wrapper`}>
                {MENU_LINKS.map((item) => (
                    <li key={item.id}>
                        <Link
                        activeClass='active'
                        to={item.to}
                        smooth
                        spy
                        offset={item.offset}
                        className='menu-item'
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
            {/* Hire Me Button */}
            <button className='hidden md:block h-12 text-[15px] font-medium text-white 
            bg-dark rounded-full px-9 transition-transform duration-300 
            ease-in-out hover:scale-100 hover:bg-purple-700'
            >
                Hire Me
            </button>
        </div>
    </nav>
  )
}

export default Navbar