'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation'; // ✅ Works with App Router


const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const router = useRouter();
    const navItems = [
        { name: "Services", link: "/services" },
        { name: "Resume", link: "/resume" },
        { name: "Work", link: "/work" },
        { name: "Contact", link: "/contact" },
    ];

    return (
        <header className="py-6 sm:px-8 px-8 md:px-8 flex justify-between items-center fixed top-0 w-full z-50">
            {/* Logo */}
            <div className="flex items-end gap-1">
                <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                    <Link href="/">Munir Rasool</Link>
                    <span className="text-cyan-500 ms-1">.</span>
                </h1>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-8 text-base text-white font-medium items-center">
                {navItems.map((item, idx) => (
                    <li key={idx} className="list-none group relative cursor-pointer">
                        <Link
                            href={item.link}
                            className="block group-hover:text-cyan-500 transition-colors duration-200"
                        >
                            {item.name}
                        </Link>
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-500 transition-all duration-300 group-hover:w-full"></span>
                    </li>
                ))}
                <li className="list-none">
                    <button
                        onClick={() => router.push('/contact')} // optional for desktop too
                        className="bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2 rounded-full font-semibold shadow-md transition-all duration-200 cursor-pointer"
                    >
                        Hire Me
                    </button>
                </li>
            </nav>

            {/* Burger Icon */}
            <div className="md:hidden text-white text-2xl">
                <button onClick={() => setDrawerOpen(true)}>
                    <FiMenu />
                </button>
            </div>

            {/* Drawer */}
            <AnimatePresence>
                {drawerOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-black bg-opacity-50 z-40"
                            onClick={() => setDrawerOpen(false)}
                        />

                        <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            className="fixed top-0 left-0 h-full w-64 bg-[#1c1c1c] z-50 shadow-lg p-6"
                        >
                            <div className="flex justify-between items-center border-b border-gray-700 pb-4">
                                <span className="text-white text-xl font-semibold">Menu</span>
                                <button onClick={() => setDrawerOpen(false)} className="text-white text-2xl">
                                    <FiX />
                                </button>
                            </div>

                            <ul className="flex flex-col gap-6 mt-6 text-white text-lg">
                                {navItems.map((item, idx) => (
                                    <li key={idx}>
                                        <Link
                                            href={item.link}
                                            onClick={() => setDrawerOpen(false)}
                                            className="hover:text-cyan-500 border-b border-transparent hover:border-cyan-500 transition"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                                <li>
                                    <button
                                        onClick={() => {
                                            setDrawerOpen(false);
                                            router.push('/contact');
                                        }}
                                        className="mt-4 w-full bg-cyan-500 hover:bg-cyan-600 text-white py-2 rounded-full"
                                    >
                                        Hire Me
                                    </button>
                                </li>
                            </ul>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
