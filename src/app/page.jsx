'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa6';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

// Counter component inside same file
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
    <section className="min-h-screen text-white px-6 md:px-12 py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-5 text-center md:text-left">
          <p className="text-gray-400 text-lg tracking-wider">Full Stack Web-Developer</p>

          <div className="h-[140px] flex flex-col justify-center">
            <h1 className="text-5xl md:text-6xl font-bold">Hello I'm</h1>
            <h2 className="text-5xl md:text-6xl font-bold text-cyan-500">
              {text}
              <span className="animate-pulse text-white ms-3">|</span>
            </h2>
          </div>

          <p className="text-gray-400 max-w-md leading-relaxed mx-auto md:mx-0">
            I specialize in building responsive, high-performance web applications and have hands-on experience with modern technologies across the full development stack.
          </p>

          <div className="flex justify-center md:justify-start items-center gap-6 mt-6">
            <button className="flex justify-center items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2 rounded-full font-semibold shadow-md transition-all duration-200 cursor-pointer">
              Download CV <FaDownload />
            </button>
            <div className="border-2 border-cyan-500 rounded-full p-2 hover:bg-cyan-500 transition-colors duration-200 cursor-pointer">
              <FaGithub />
            </div>
            <div className="border-2 border-cyan-500 rounded-full p-2 hover:bg-cyan-500 transition-colors duration-200 cursor-pointer">
              <FaLinkedinIn />
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center relative">
          <div className="relative w-[360px] h-[360px] flex items-center justify-center">
            <motion.div
              className="absolute w-full h-full rounded-full border-6 border-dashed border-cyan-500"
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 20,
                ease: 'linear',
              }}
            />
            <Image
              src="/Images/muneer.png"
              alt="Profile"
              className="rounded-full object-cover w-80 h-80 relative z-10"
              width={324}
              height={324}
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-15">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div>
            <Counter target={1} />
            <p className="mt-2 text-gray-400">Year of Experience</p>
          </div>
          <div>
            <Counter target={12} />
            <p className="mt-2 text-gray-400">Projects Completed</p>
          </div>
          <div>
            <Counter target={20} />
            <p className="mt-2 text-gray-400">Technologies Mastered</p>
          </div>
          <div>
            <Counter target={1000} />
            <p className="mt-2 text-gray-400">Code Commits</p>
          </div>
        </div>
      </div>
    </section>
  );
}
