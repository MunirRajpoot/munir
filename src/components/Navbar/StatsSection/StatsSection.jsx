'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Counter component
const Counter = ({ target, duration = 2 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const increment = target / (duration * 60); // 60 frames per second
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

const StatsSection = () => {
    return (
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
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
    );
};

export default StatsSection;
