'use client';
import React, { useState } from 'react';
import { FaGraduationCap, FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { SiExpress, SiMongodb } from 'react-icons/si';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBootstrap } from "react-icons/fa6";
import { SiMui } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { RiSupabaseLine } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
const ResumePage = () => {
    const [activeSection, setActiveSection] = useState('Experience');

    const fadeInUp = {
        initial: { opacity: 0, y: 40 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
        exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
    };

    const educationData = [
        { year: "2023", name: "Web and Mobile Application Development (MERN Stack)", institution: "Saylani Mass IT Training Institute" },
        { year: "2021-2025", name: "BS in Computer Science", institution: "Govt. Graduate College Samanabad (GCUF)" },
        { year: "2022", name: "Web Design and Development", institution: "Saylani Mass IT Training Institute" },
        { year: "2019", name: "FSC Pre-Engineering", institution: "Govt. Science College Samanabad Faisalabad" }
    ];

    const skills = [
        { icon: <FaHtml5 />, name: 'HTML5' },
        { icon: <FaCss3 />, name: 'CSS3' },
        { icon: <FaJs />, name: 'JavaScript' },
        { icon: <FaReact />, name: 'React' },
        { icon: <RiNextjsFill />, name: 'Next.js' },
        { icon: <SiTypescript />, name: 'TypeScript' },
        { icon: <RiTailwindCssFill />, name: 'Tailwind CSS' },
        { icon: <FaBootstrap />, name: 'Bootstrap' },
        { icon: <SiMui />, name: 'MUI' },
        { icon: <FaNodeJs />, name: 'Node.js' },
        { icon: <SiExpress />, name: 'Express.js' },
        { icon: <SiMongodb />, name: 'MongoDB' },
        { icon: <SiFirebase />, name: 'Firebase' },
        { icon: <RiSupabaseLine />, name: 'Supabase' },
        { icon: <FaGitAlt />, name: 'Git' },
        { icon: <FaGithub />, name: 'Github' },

    ];

    const renderSection = () => {
        switch (activeSection) {
            case 'Experience':
                return (
                    <motion.div
                        key="experience"
                        variants={fadeInUp}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="px-4 sm:px-6 md:px-10 py-8 rounded-xl shadow-lg bg-gradient-to-br from-[#1c1c1c] to-[#2a2a2a]"
                    >
                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 border-b border-gray-700 pb-3">My Experience</h2>
                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed text-justify">
                            I completed an intensive <span className="text-white font-medium">Web and Mobile Application Development</span> course (MERN Stack) at <span className="text-white font-medium">Saylani Mass IT Training Institute</span> from <span className="text-cyan-300">January to December 2023</span>. This hands-on program focused on building scalable full-stack applications.
                        </p>
                        <ul className="mt-4 ml-6 list-disc text-gray-300 leading-loose text-sm sm:text-base">
                            <li>Built a <span className="text-cyan-500 font-semibold">Student Management System</span> using <span className="text-white">React.js, Node.js, MongoDB</span>.</li>
                            <li>Created a <span className="text-cyan-500 font-semibold">Doctor Appointment System</span> using <span className="text-white">React.js, Express.js, MongoDB</span>.</li>
                            <li>Developed a responsive <span className="text-cyan-500 font-semibold">Pizza Website</span> using <span className="text-white">Next.js, Node.js, MongoDB</span>.</li>
                        </ul>
                        <div className="mt-6">
                            <h4 className="text-base sm:text-lg font-semibold text-cyan-400 mb-2">Technologies Used:</h4>
                            <div className="flex flex-wrap gap-3">
                                {["MongoDB", "Express.js", "React.js", "Node.js", "Next.js", "Git", "Tailwind CSS"].map((tech, i) => (
                                    <span key={i} className="bg-cyan-700 text-white text-xs px-3 py-1 rounded-full">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                );
            case 'Education':
                return (
                    <motion.div
                        key="education"
                        variants={fadeInUp}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="px-4 sm:px-6 md:px-10 py-8 rounded-xl shadow-xl bg-gradient-to-br from-[#1c1c1c] to-[#2a2a2a]"
                    >
                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 flex items-center gap-3">
                            <FaGraduationCap className="text-cyan-400 text-3xl sm:text-4xl" />
                            My Education
                        </h2>
                        <p className="text-gray-300 text-sm sm:text-base mb-8 text-justify">
                            Recognized as a highly intelligent and exceptional student, consistently demonstrating brilliance and academic excellence.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {educationData.map((edu, index) => (
                                <div key={index} className="bg-[#2c2c2c]/80 p-6 rounded-xl shadow-lg border border-gray-700 hover:shadow-cyan-500/20 transition">
                                    <h3 className="text-sm font-medium text-cyan-400">{edu.year}</h3>
                                    <p className="text-white text-base font-semibold mt-2">{edu.name}</p>
                                    <p className="text-gray-400 text-sm mt-1">{edu.institution}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                );
            case 'Skills':
                return (
                    <motion.div
                        key="skills"
                        variants={fadeInUp}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="px-4 sm:px-6 md:px-10 py-8 rounded-xl shadow-xl bg-gradient-to-br from-[#1c1c1c] to-[#2a2a2a]"
                    >
                        <h2 className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-6 border-b border-gray-600 pb-2">Skills</h2>
                        <p className="text-gray-300 text-sm sm:text-base mb-8 text-center max-w-2xl mx-auto">
                            Proficient in modern web technologies with strong command over the MERN stack, Next.js, and responsive UI design.
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                            {skills.map((skill, index) => (
                                <div key={index} className="flex flex-col items-center p-4 rounded-xl bg-[#1f1f1f] hover:scale-105 hover:shadow-[0_0_25px_rgba(0,255,255,0.4)] transition">
                                    <div className="text-4xl sm:text-5xl text-cyan-400 mb-2">{skill.icon}</div>
                                    <span className="text-sm sm:text-base text-gray-200">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                );
            case 'About me':
                return (
                    <motion.div
                        key="about"
                        variants={fadeInUp}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="px-4 sm:px-6 md:px-10 py-8 rounded-xl shadow-xl bg-gradient-to-br from-[#1c1c1c] to-[#2a2a2a]"
                    >
                        <h2 className="text-2xl sm:text-3xl font-bold border-b border-gray-600 pb-4 mb-6">About Me</h2>
                        <p className="text-gray-300 text-sm sm:text-base leading-7 text-justify mb-6">
                            I'm not just a developer — I'm a problem solver and creative thinker. With MERN stack skills and real project experience, I bring solutions to life with clean, scalable code.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { label: 'Name', value: 'Muneer Rasool' },
                                { label: 'Phone', value: '(+92) 314 3415578' },
                                { label: 'Experience', value: 'Fresh' },
                                { label: 'Email', value: 'munirrajpoot1012@gmail.com' },
                                { label: 'Nationality', value: 'Pakistan' },
                                { label: 'Languages', value: 'English, Urdu' },
                            ].map((info, index) => (
                                <div key={index} className="bg-[#2c2c2c]/80 p-4 rounded-xl border border-gray-700 hover:shadow-cyan-500/20 transition">
                                    <h4 className="text-cyan-400 text-sm font-semibold">{info.label}</h4>
                                    <p className="text-gray-300 text-sm sm:text-base mt-1">{info.value}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-4 sm:px-6 md:px-8 py-6 text-white min-h-screen mt-[80px]">
            {/* Sidebar */}
            <div className="flex flex-col gap-4">
                {['Experience', 'Education', 'Skills', 'About me'].map((section) => (
                    <button
                        key={section}
                        onClick={() => setActiveSection(section)}
                        className={`w-full text-left px-4 py-2 rounded-md text-sm sm:text-base font-medium transition ${activeSection === section ? 'bg-cyan-400 text-black' : 'bg-[#222] hover:bg-cyan-600'}`}
                    >
                        {section}
                    </button>
                ))}
            </div>

            {/* Animated Content */}
            <div className="col-span-1 md:col-span-3">
                <AnimatePresence mode="wait">
                    {renderSection()}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default ResumePage;
