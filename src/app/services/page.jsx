'use client';
import React from 'react';
import { FiArrowDownRight } from 'react-icons/fi';

const page = () => {
    const services = [
        {
            no: '01',
            title: 'Web Development',
            description:
                'I build fully responsive and modern websites tailored to your brand and business goals.',
        },
        {
            no: '02',
            title: 'Front End',
            description:
                'Building sleek, interactive UIs with React.js, Tailwind CSS, and Next.js.',
        },
        {
            no: '03',
            title: 'Back End',
            description:
                'Creating robust server-side logic with Node.js, Express, MongoDB and Next.js.',
        },
        {
            no: '04',
            title: 'MERN Stack',
            description:
                'Developing full-stack applications with the MERN stack and Next.js framework.',
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 text-white min-h-screen">
            {services.map((service, index) => (
                <div
                    key={index}
                    className="relative p-6 rounded-lg shadow-lg flex flex-col justify-between group transition-all duration-300"
                >
                    {/* Top section */}
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-4xl font-mono text-gray-400 group-hover:text-cyan-400 transition-all duration-300">
                                {service.no}
                            </p>
                            <h2 className="text-3xl font-bold mt-1 uppercase tracking-wider transition-all duration-300 group-hover:text-cyan-400">
                                {service.title}
                            </h2>
                        </div>

                        <div className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 bg-white group-hover:bg-cyan-400">
                            <FiArrowDownRight
                                className="text-2xl text-black transition-transform duration-300 transform group-hover:rotate-30 group-hover:translate-x-1 group-hover:translate-y-1"
                            />
                        </div>

                    </div>

                    {/* Bottom section */}
                    <p className="mt-5 text-gray-400 leading-relaxed text-sm pt-4">
                        {service.description}
                    </p>
                    <hr />
                </div>
            ))}
        </div>
    );
};

export default page;
