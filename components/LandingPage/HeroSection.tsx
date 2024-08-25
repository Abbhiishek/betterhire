"use client"

import React, { useState } from 'react'
import { Spotlight } from '../ui/Spotlight';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, Briefcase, Users, ChartBar, Code, Zap, Star, Trophy } from 'lucide-react';
import NumberTicker from '../magicui/number-ticker';

function HeroSection() {
    const [hoverCount, setHoverCount] = useState(0);

    return (
        <div className='container mx-auto pt-20'>
            <div className="h-[48rem] rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
                <Spotlight
                    className="-top-40 left-0 md:left-60 md:-top-20 opacity-90"
                    fill="blue"
                />

                {/* Animated background elements */}
                <motion.div
                    className="absolute inset-0 z-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div
                        className="absolute top-1/4 left-1/4 text-blue-300 opacity-20"
                        animate={{
                            y: [0, -20, 0],
                            rotate: [0, 10, 0],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    >
                        <Search size={48} />
                    </motion.div>
                    <motion.div
                        className="absolute top-1/2 right-1/4 text-green-300 opacity-20"
                        animate={{
                            y: [0, 20, 0],
                            rotate: [0, -10, 0],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    >
                        <Briefcase size={48} />
                    </motion.div>
                    <motion.div
                        className="absolute bottom-1/4 left-1/3 text-yellow-300 opacity-20"
                        animate={{
                            x: [0, 20, 0],
                            rotate: [0, 15, 0],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    >
                        <Users size={48} />
                    </motion.div>
                    <motion.div
                        className="absolute top-1/3 right-1/3 text-purple-300 opacity-20"
                        animate={{
                            x: [0, -20, 0],
                            rotate: [0, -15, 0],
                        }}
                        transition={{
                            duration: 5.5,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    >
                        <ChartBar size={48} />
                    </motion.div>

                    {/* New animated elements */}
                    <motion.div
                        className="absolute bottom-1/4 right-1/4 text-pink-300 opacity-20"
                        animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, -10, 0],
                        }}
                        transition={{
                            duration: 7,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    >
                        <Code size={40} />
                    </motion.div>
                    <motion.div
                        className="absolute top-1/5 left-1/3 text-orange-300 opacity-20"
                        animate={{
                            y: [0, 30, 0],
                            x: [0, 15, 0],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    >
                        <Zap size={36} />
                    </motion.div>
                </motion.div>

                {/* Hidden easter egg */}
                <motion.div
                    className="absolute top-5 right-5 text-yellow-300 opacity-0 cursor-pointer"
                    whileHover={{ opacity: 1, scale: 1.2 }}
                    onClick={() => setHoverCount(count => count + 1)}
                >
                    <Star size={24} />
                </motion.div>

                {hoverCount >= 5 && (
                    <motion.div
                        className="absolute bottom-5 right-5 text-gold-300"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    >
                        <Trophy size={48} />
                        <span className="text-xs text-white">Easter egg found!</span>
                    </motion.div>
                )}

                <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
                    <motion.h1
                        className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        BetterHire
                        <motion.p
                            className="text-4xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            Algorithmic Hiring for the Digital Age
                        </motion.p>
                    </motion.h1>
                    <motion.h5
                        className="mt-4 font-mono text-blue-300 text-center max-w-full mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        HireBetter empowers developers and employers with full visibility into our ranking system, <br />
                        offering clear, data-driven insights that build trust and ensure the best job matches are made with integrity.
                    </motion.h5>

                    <motion.div
                        className="flex justify-center mt-8 gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                    >
                        <Link href="/dashboard" className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300">
                            Get Started
                        </Link>
                        <Link href="/about" className="inline-flex items-center px-6 py-3 text-base font-medium text-blue-600 bg-transparent border border-blue-600 rounded-md shadow-sm hover:bg-blue-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300">
                            Learn More
                        </Link>
                    </motion.div>

                    {/* Animated stats */}
                    <motion.div
                        className="mt-12 flex justify-center gap-8 text-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.6, duration: 0.8 }}
                    >
                        <div className="flex justify-center gap-4 text-sm">
                            <AnimatedStat label="Job Matches" value={100} />
                            <AnimatedStat label="Happy Clients" value={50} />
                            <AnimatedStat label="Success Rate" value={95} />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

function AnimatedStat({ label, value }: { label: string, value: number }) {
    return (
        <motion.div
            className="text-center"
            whileHover={{ scale: 1.02 }}
        >
            <NumberTicker value={value} />
            <motion.div
                className="text-xs opacity-70"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
            >
                {label}
            </motion.div>
        </motion.div >
    )
}

export default HeroSection