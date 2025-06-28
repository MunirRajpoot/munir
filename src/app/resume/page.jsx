'use client';
import React, { useState } from 'react';
import { FaGraduationCap } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
const ResumePage = () => {
    const [activeSection, setActiveSection] = useState('Experience');
    const educationData = [
        {
            year: "2023",
            name: "Web and Mobile Application Development (MERN Stack)",
            institution: "Saylani Mass IT Training Institute",
        },
        {
            year: "2021-2025",
            name: "BS in Computer Science",
            institution: "Govt. Graduate College Samanabad (GCUF)",
        },
        {
            year: "2022",
            name: "Web Design and Development",
            institution: "Saylani Mass IT Training Institute",
        },
        {
            year: "2019",
            name: "FSC Pre-Engineering",
            institution: "Govt. Science College Samanabad Faisalabad",

        }

    ]

    const skills = [
        { icon: <FaHtml5 />, name: 'HTML5' },
        { icon: <FaCss3 />, name: 'CSS3' },
        { icon: <FaJs />, name: 'JavaScript' },
        { icon: <FaReact />, name: 'React' },
        { icon: <RiNextjsFill />, name: 'Next.js' },
        { icon: <RiTailwindCssFill />, name: 'Tailwind CSS' },
        { icon: <FaNodeJs />, name: 'Node.js' },
        { icon: <SiExpress />, name: 'Express.js' },
        { icon: <SiMongodb />, name: 'MongoDB' }
    ];


    const renderSection = () => {
        switch (activeSection) {
            case 'Experience':
                return (
                    <div className="md:px-20 px-4 py-10 rounded-xl shadow-lg  bg-gradient-to-br from-[#1c1c1c] to-[#2a2a2a]">
                        <h2 className="text-3xl font-bold text-white mb-6 border-b border-gray-700 pb-3">
                            My Experience
                        </h2>

                        <p className="text-gray-300 text-base leading-8 text-justify tracking-wide">
                            I completed an intensive
                            <span className="text-white font-medium"> Web and Mobile Application Development </span>
                            course (MERN Stack) at
                            <span className="text-white font-medium"> Saylani Mass IT Training Institute </span> from
                            <span className="text-cyan-300"> January to December 2023</span>. This hands-on program focused on building
                            scalable full-stack applications using:
                        </p>

                        <ul className="mt-4 ml-6 list-disc text-gray-300 leading-loose text-sm">
                            <li>
                                Built a <span className="text-cyan-500 font-semibold">Student Management System</span> with secure authentication and full CRUD using
                                <span className="text-white"> React.js, Node.js, MongoDB</span>.
                            </li>
                            <li>
                                Created a <span className="text-cyan-500 font-semibold">Doctor Appointment System</span> for scheduling and managing patient data using
                                <span className="text-white"> React.js, Express.js, MongoDB</span>.
                            </li>
                            <li>
                                Developed a responsive <span className="text-cyan-500 font-semibold">Pizza Website</span> with product customization, cart, authentication, and simulated payment using
                                <span className="text-white"> Next.js, Node.js, MongoDB</span>.
                            </li>
                        </ul>

                        <div className="mt-6">
                            <h4 className="text-lg font-semibold text-cyan-400 mb-2">Technologies Used:</h4>
                            <div className="flex flex-wrap gap-3">
                                {["MongoDB", "Express.js", "React.js", "Node.js", "Next.js", "Git", "Tailwind CSS"].map((tech, i) => (
                                    <span key={i} className="bg-cyan-700 text-white text-xs px-3 py-1 rounded-full shadow-sm">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>



                );
            case 'Education':
                return (
                    <div className="md:px-20 px-4 py-10 rounded-xl shadow-xl bg-gradient-to-br from-[#1c1c1c] to-[#2a2a2a]">
                        <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                            <FaGraduationCap className="text-cyan-400 text-4xl" />
                            My Education
                        </h2>

                        <p className="text-gray-300 leading-relaxed tracking-wide md:px-2 mb-8 text-justify">
                            Recognized as a highly intelligent and exceptional student, consistently demonstrating brilliance, critical thinking, and academic excellence throughout the educational journey.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {educationData.map((edu, index) => (
                                <div
                                    key={index}
                                    className="bg-[#2c2c2c]/80 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-700 hover:shadow-cyan-500/20 transition duration-300"
                                >
                                    <h3 className="text-sm font-medium text-cyan-400">{edu.year}</h3>
                                    <p className="text-white text-lg font-semibold mt-2">{edu.name}</p>
                                    <p className="text-gray-400 mt-1">{edu.institution}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'Skills':
                return (
                    <div className="md:px-20 px-4 py-12 rounded-xl shadow-xl bg-gradient-to-br from-[#1c1c1c] to-[#2a2a2a]">
                        <h2 className="text-3xl font-bold mb-8 text-cyan-400 border-b border-gray-600 pb-2">
                            Skills
                        </h2>

                        <p className="text-gray-300 text-base mb-10 max-w-3xl mx-auto">
                            Proficient in modern web development technologies with a strong command over the MERN stack, Next.js, and responsive UI design.
                        </p>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8">
                            {skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center justify-center px-6 py-6 rounded-2xl bg-[#1f1f1f] text-white transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_25px_rgba(0,255,255,0.4)] hover:backdrop-blur-lg"
                                >
                                    <div className="text-5xl text-cyan-400 mb-3 transition duration-300">
                                        {skill.icon}
                                    </div>
                                    <span className="text-base text-gray-200">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>


                );
            case 'About me':
                return (
                    <div className="md:px-20 px-4 py-12 rounded-xl shadow-xl bg-gradient-to-br from-[#1c1c1c] to-[#2a2a2a]">
                        <h2 className="text-4xl font-bold border-b border-gray-600 pb-4 mb-6">About Me</h2>

                        <p className="text-gray-300 text-base leading-8 text-justify tracking-wide mb-8">
                            I'm not just a developer — I'm a problem solver, a creative thinker, and a continuous learner. With a solid foundation in the MERN stack and real-world experience, I bring ideas to life through clean, scalable code. I don't just build websites; I build impactful solutions. Whether it's debugging or crafting seamless UIs, I bring energy and purpose to every line of code.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-[#2c2c2c]/80 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-700 hover:shadow-cyan-500/20 transition duration-300">
                                <h4 className="text-cyan-400 font-semibold">Name</h4>
                                <p className="text-gray-300 mt-1">Muneer Rasool</p>
                            </div>
                            <div className="bg-[#2c2c2c]/80 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-700 hover:shadow-cyan-500/20 transition duration-300">
                                <h4 className="text-cyan-400 font-semibold">Phone</h4>
                                <p className="text-gray-300 mt-1">(+92) 314 3415578</p>
                            </div>
                            <div className="bg-[#2c2c2c]/80 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-700 hover:shadow-cyan-500/20 transition duration-300">
                                <h4 className="text-cyan-400 font-semibold">Experience</h4>
                                <p className="text-gray-300 mt-1">Fresh</p>
                            </div>
                            <div className="bg-[#2c2c2c]/80 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-700 hover:shadow-cyan-500/20 transition duration-300">
                                <h4 className="text-cyan-400 font-semibold">Email</h4>
                                <p className="text-gray-300 mt-1">munirrajpoot1012@gmail.com</p>
                            </div>
                            <div className="bg-[#2c2c2c]/80 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-700 hover:shadow-cyan-500/20 transition duration-300">
                                <h4 className="text-cyan-400 font-semibold">Nationality</h4>
                                <p className="text-gray-300 mt-1">Pakistan</p>
                            </div>
                            <div className="bg-[#2c2c2c]/80 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-700 hover:shadow-cyan-500/20 transition duration-300">
                                <h4 className="text-cyan-400 font-semibold">Languages</h4>
                                <p className="text-gray-300 mt-1">English, Urdu</p>
                            </div>
                        </div>
                    </div>

                );
            default:
                return null;
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-12 py-6 text-white min-h-screen">
            {/* Left Sidebar */}
            <div className="flex flex-col col-span-1 gap-4 items-stretch justify-start h-full">
                {['Experience', 'Education', 'Skills', 'About me'].map((section) => (
                    <button
                        key={section}
                        onClick={() => setActiveSection(section)}
                        className={`w-full text-left px-6 py-3 rounded-md font-medium transition-all duration-300 ${activeSection === section
                            ? 'bg-cyan-400 text-black'
                            : 'bg-[#222] hover:bg-cyan-600'
                            }`}
                    >
                        {section}
                    </button>
                ))}
            </div>

            {/* Right Content */}
            <div className="col-span-1 md:col-span-3 flex flex-col justify-start">
                {renderSection()}
            </div>
        </div>
    );
};

export default ResumePage;
