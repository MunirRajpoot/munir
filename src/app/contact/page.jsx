'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        category: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast.success("✅ Message sent successfully!");
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    category: '',
                    message: ''
                });
            } else if (response.status === 409) {
                const result = await response.json();
                toast.error(result.error || "⚠️ This email already exists.");
            } else {
                toast.error("❌ Failed to submit form. Please try again later.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error("🚫 Something went wrong. Please try again.");
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="min-h-screen flex flex-col lg:flex-row items-start justify-start lg:items-center gap-12 mt-[80px] sm:px-6 md:px-10 lg:px-16"
        >
            <ToastContainer position="top-right" autoClose={3000} />

            {/* Contact Form */}
            <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="w-full lg:w-1/2 bg-gradient-to-br from-[#1c1c1c] to-[#2a2a2a] p-8 shadow-lg rounded-xl relative"
            >
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
                        name="category"
                        value={formData.category || ''}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    >
                        <option value="" disabled>Select a service</option>
                        <option value="full-stack" className="text-black">Full Stack Development</option>
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
            </motion.div>

            {/* Contact Info */}
            <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="w-full lg:w-1/3 space-y-6"
            >
                <ContactInfo icon={<FaPhoneAlt />} label="Phone" value="(+92 314 3415578)" />
                <ContactInfo icon={<IoMdMail />} label="Email" value="munirrajpoot1012@gmail.com" />
                <ContactInfo icon={<IoMdMail />} label="Address" value="Faisalabad, Punjab, Pakistan" />
            </motion.div>
        </motion.div>
    );
};

const ContactInfo = ({ icon, label, value }) => (
    <motion.div
        whileHover={{ scale: 1.02 }}
        className="flex items-center gap-4 p-4 transition-all"
    >
        <div className="bg-gradient-to-br from-[#1c1c1c] to-[#2a2a2a] p-5 rounded text-cyan-600 text-3xl">{icon}</div>
        <div>
            <p className="text-sm text-gray-400">{label}</p>
            <p className="text-lg font-semibold text-white">{value}</p>
        </div>
    </motion.div>
);

export default ContactPage;
