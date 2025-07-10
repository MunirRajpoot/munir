'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BsArrowUpRight } from 'react-icons/bs';
import { FaGithub, FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import Image from 'next/image';


const Page = () => {
    const projects = [
        {
            no: '01',
            title: 'Pizza Valley',
            description: 'A full-stack pizza ordering website with user authentications, add-to-cart functionality, and a built-in customer chat system.',
            image: '/Images/pizza01.png',
            technologies: ['Next.js', 'Node.js', 'MongoDB'],
            github: 'https://github.com/MunirRajpoot/Pizza-Valley',
            link: 'https://pizza-valley.vercel.app/',
        },
        {
            no: '02',
            title: 'Student Management System',
            description: 'A responsive web app to manage student profiles, course enrollments, and academic performance for schools.',
            image: '/Images/std02.png',
            technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
            github: 'https://github.com/MunirRajpoot/Hackthon_Project',
            link: 'https://hackthon-project-blond.vercel.app/',
        },
        {
            no: '03',
            title: 'BackupDoc',
            description: 'A dental platform that uses AI to analyze teeth X-rays and includes a doctor appointment booking system.',
            image: '/Images/backupdoc03.jpeg',
            technologies: ['Next.js', 'Django', 'MySQL'],
            github: 'https://github.com/MunirRajpoot/BackUp_Doc',
            link: '#',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const project = projects[currentIndex];

    const nextProject = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const prevProject = () => {
        setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    };

    return (
        <div className="min-h-screen text-white px-4 py-10 flex flex-col items-center justify-center bg-[#0e0e0e] mt-[100px]">
            <div className="w-full max-w-6xl bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-xl transition-all duration-500">
                {/* Left Panel - Text */}
                <div className="flex-1 p-6 md:p-10 flex flex-col justify-between animate-fadeIn">
                    <div>
                        <p className="text-cyan-400 text-5xl font-extrabold mb-3">{project.no}</p>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h2>
                        <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                        <div className="flex flex-wrap gap-3 mb-4 pb-4 border-b border-gray-300">
                            {project.technologies.map((tech, i) => (
                                <span
                                    key={i}
                                    className="bg-cyan-600/20 text-cyan-300 px-3 py-1 rounded-full text-sm font-medium"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <Link href={project.link} className="bg-[#1c1c1c] hover:bg-[#2a2a2a] p-3 rounded-full transition-all hover:scale-105">
                            <BsArrowUpRight className="text-3xl" />
                        </Link>
                        <Link href={project.github} className="bg-[#1c1c1c] hover:bg-[#2a2a2a] p-3 rounded-full transition-all hover:scale-105">
                            <FaGithub className="text-3xl" />
                        </Link>
                    </div>
                </div>

                {/* Right Panel - Image */}
                <div className="flex-1 relative min-h-[300px] md:min-h-[500px] group overflow-hidden">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-fit transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                    />
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-6 mt-8">
                <button
                    onClick={prevProject}
                    className="bg-cyan-500 hover:text-cyan-500 text-white p-3 rounded-lg shadow-lg transition-all hover:-translate-x-1 hover:scale-110"
                >
                    <FaArrowLeft />
                </button>
                <button
                    onClick={nextProject}
                    className="bg-cyan-500 hover:bg-cyan-400 text-white p-3 rounded-lg shadow-lg transition-all hover:translate-x-1 hover:scale-110"
                >
                    <FaArrowRight />
                </button>
            </div>
        </div>
    );
};

export default Page;
