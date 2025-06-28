import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    const navItems = [
        {
            name: "Home",
            link:"/",
        },
        {
            name: "Services",
            link:"/services",
        },
        {
            name: "Resume",
            link:"/resume",
        },
        {
            name: "Work",
            link:"/work",
        },
        {
            name: "Contact",
            link:"/contact",
        },
      
    ];

    return (
        <header className="py-6 px-12 flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-end gap-1 ">
                <h1 className="text-4xl font-bold text-white tracking-tight">
                    Munir Rasool
                    <span className='text-cyan-500 ms-1'>.</span>
                </h1>

            </div>

            {/* Navigation */}
            <nav aria-label="Primary Navigation">
                <ul className="flex gap-8 text-base text-white font-medium items-center">
                    {navItems.map((item, idx) => (
                        <li
                            key={idx}
                            className="hover:text-cyan-500 transition-colors duration-200 cursor-pointer"
                        >
                            <Link href={item.link} className="block">
                                {item.name}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2 rounded-full font-semibold shadow-md transition-all duration-200 cursor-pointer">
                            Hire Me
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
