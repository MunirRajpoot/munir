'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

const ContactPage = () => {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);

        // Optional: reset form
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            message: ''
        });

        // Hide animation after 3 seconds
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <div className="min-h-screen px-4 flex flex-col md:flex-row items-start md:items-center justify-center gap-12">
            {/* Contact Form */}
            <div className="w-full md:w-1/2 bg-gradient-to-br from-[#1c1c1c] to-[#2a2a2a] p-8 shadow-lg rounded-xl relative">
                <h1 className="text-3xl font-bold text-cyan-500 mb-2">Let's work together</h1>
                <p className="text-gray-400 mb-6">Fill out the form and I’ll get back to you soon.</p>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    {/* First & Last Name */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <input
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="First Name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                        <input
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Last Name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                    </div>

                    {/* Email & Phone */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone || ''}
                            onChange={handleChange}
                            placeholder="Phone"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                    </div>

                    {/* Select Dropdown */}
                    <select
                        name="inquiryType"
                        value={formData.service || ''}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    >
                        <option value="" disabled>Select a service</option>
                        <option value="web-development" className="text-black">Web Development</option>
                        <option value="frontend" className="text-black">Frontend Development</option>
                        <option value="backend" className="text-black">Backend Development</option>
                        
                    </select>


                    {/* Message Textarea */}
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Type your message here..."
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    ></textarea>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-2 px-6 rounded-md transition-all"
                    >
                        Send Message
                    </button>
                </form>


                {/* Success Animation */}
                <AnimatePresence>
                    {submitted && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4 }}
                            className="absolute inset-0 bg-white bg-opacity-95 flex flex-col justify-center items-center rounded-xl"
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1.2 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                                className="text-green-500 text-4xl mb-2"
                            >
                                ✅
                            </motion.div>
                            <p className="text-lg text-gray-700 font-semibold">Message Sent Successfully!</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Contact Info */}
            <div className="w-full md:w-1/3 space-y-6">
                <ContactInfo icon={<FaPhoneAlt />} label="Phone" value="(+92 314 3415578)" />
                <ContactInfo icon={<IoMdMail />} label="Email" value="munirrajpoot1012@gmail.com" />
                <ContactInfo icon={<IoMdMail />} label="Address" value="Faisalabad, Punjab, Pakistan" />
            </div>
        </div>
    );
};

const ContactInfo = ({ icon, label, value }) => (
    <div className="flex items-center gap-4 p-4 transition-all">
        <div className="bg-gradient-to-br from-[#1c1c1c] to-[#2a2a2a] p-5 rounded text-cyan-600 text-3xl">{icon}</div>
        <div>
            <p className="text-sm text-gray-400">{label}</p>
            <p className="text-lg font-semibold text-white">{value}</p>
        </div>
    </div>
);

export default ContactPage;
