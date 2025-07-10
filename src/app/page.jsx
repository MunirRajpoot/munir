'use client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa6';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';

// Counter component
const Counter = ({ target, duration = 2 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration * 60);
    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.ceil(start));
      }
    }, 1000 / 60);
    return () => clearInterval(interval);
  }, [target, duration]);

  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-3xl md:text-4xl font-bold text-cyan-500"
    >
      {count}+
    </motion.span>
  );
};

export default function Home() {
  const phrases = ['MUNIR RASOOL'];
  const [text, setText] = useState(phrases[0]);
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(phrases[0].length);
  const [deleting, setDeleting] = useState(false);
  const [startedTyping, setStartedTyping] = useState(false);

  useEffect(() => {
    if (!startedTyping) {
      const initialDelay = setTimeout(() => setStartedTyping(true), 2000);
      return () => clearTimeout(initialDelay);
    }

    if (!deleting && subIndex === phrases[index].length) {
      const hold = setTimeout(() => setDeleting(true), 2000);
      return () => clearTimeout(hold);
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % phrases.length);
      return;
    }

    const timeout = setTimeout(() => {
      const newSubIndex = deleting ? subIndex - 1 : subIndex + 1;
      setSubIndex(newSubIndex);
      setText(phrases[index].substring(0, newSubIndex));
    }, deleting ? 70 : 120);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, startedTyping]);

  return (
    <section className="min-h-screen mt-20 text-white px-4 sm:px-6 md:px-12 py-16 overflow-x-hidden">
      <ToastContainer position="top-center" autoClose={3000} />
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-14">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
          <p className="text-gray-400 text-lg tracking-wider">
            Full Stack Web-Developer
          </p>

          <div className="h-[120px] sm:h-[140px] flex flex-col justify-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">Hello I'm</h1>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-cyan-500 break-words">
              {text}
              <span className="animate-pulse text-white ms-2">|</span>
            </h2>
          </div>

          <p className="text-gray-400 max-w-xl mx-auto lg:mx-0 text-balance leading-relaxed">
            I specialize in building responsive, high-performance web applications and have hands-on experience with modern technologies across the full development stack.
          </p>

          <div className="flex justify-center lg:justify-start items-center gap-6 flex-wrap mt-6">
            <Link href="/cv.pdf" download>
              <button className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2 rounded-full font-semibold shadow-md transition duration-200">
                Download CV <FaDownload />
              </button>
            </Link>

            <Link
              href="https://github.com/MunirRajpoot"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-cyan-500 rounded-full p-2 hover:bg-cyan-500 transition-colors duration-200 text-white"
            >
              <FaGithub />
            </Link>

            <Link
              href="https://linkedin.com/in/muneer-rasool-a78008361"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-cyan-500 rounded-full p-2 hover:bg-cyan-500 transition-colors duration-200 text-white"
            >
              <FaLinkedinIn />
            </Link>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative aspect-square w-64 sm:w-72 md:w-80 lg:w-96 flex items-center justify-center">
            {/* Rotating border behind the image */}
            <motion.div
              className="absolute w-full h-full rounded-full border-[6px] border-dashed border-cyan-500"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
            />

            {/* Image inside */}
            <div className="relative w-[90%] h-[90%] rounded-full overflow-hidden z-10">
              <Image
                src="/Images/muneer.png"
                alt="Profile"
                className="w-full h-full object-cover"
                width={360}
                height={360}
                priority
              />
            </div>
          </div>
        </div>

      </div>

      {/* Stats Section */}
      <div className="mt-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div>
            <Counter target={3} />
            <p className="mt-2 text-gray-400">Year of Experience</p>
          </div>
          <div>
            <Counter target={6} />
            <p className="mt-2 text-gray-400">Projects Completed</p>
          </div>
          <div>
            <Counter target={15} />
            <p className="mt-2 text-gray-400">Technologies Mastered</p>
          </div>
          <div>
            <Counter target={600} />
            <p className="mt-2 text-gray-400">Code Commits</p>
          </div>
        </div>
      </div>
    </section>
  );
}
