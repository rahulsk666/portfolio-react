
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn more about my journey as a Full-Stack Developer and Team Lead.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                I'm a passionate Full-Stack Developer with 3+ years of experience at QBurst, 
                where I've been leading frontend initiatives and mentoring junior developers since July 2022. 
                My expertise spans across Laravel for robust backend solutions and React.js/Next.js for dynamic frontend experiences.
              </p>
              <p>
                At QBurst, I've implemented engaging animations with Framer Motion, improved application 
                performance using caching strategies and web workers, and maintained security through 
                comprehensive auth guards. I take pride in creating scalable, performant, and user-friendly web applications.
              </p>
              <p>
                My collaborative work style and attention to detail have enabled me to successfully 
                lead projects while fostering a supportive environment for team growth and learning.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Education</h4>
                <p className="text-gray-600">B.Tech in Computer Science Engineering</p>
                <p className="text-gray-500 text-sm">Sahrdaya College of Engineering and Technology</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Certifications</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Laravel 9 – Inventory System (Udemy)</li>
                  <li>• Node.js – Complete Guide (Udemy)</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Languages</h4>
                <p className="text-gray-600">English, Malayalam, Tamil, Hindi</p>
              </div>
            </div>

            <div className="mt-8">
              <motion.button 
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
              </motion.button>
            </div>
          </motion.div>

          <motion.div 
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <motion.img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop"
                alt="Rahul S Kumar"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute inset-0 bg-blue-600 opacity-20 rounded-2xl"></div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
          viewport={{ once: true }}
        >
          {[
            { number: "3+", title: "Years at QBurst", description: "Leading frontend initiatives and mentoring teams" },
            { number: "15+", title: "Projects Delivered", description: "From PWAs to enterprise applications" },
            { number: "10+", title: "Technologies", description: "Full-stack expertise across modern frameworks" },
            { number: "5+", title: "Team Members", description: "Successfully mentored and led junior developers" }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">{stat.number}</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{stat.title}</h4>
              <p className="text-gray-600 text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
