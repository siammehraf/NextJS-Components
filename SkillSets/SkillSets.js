'use client';
import React from 'react';
import { Button } from '@/components/ui/button';

const SkillSets = () => {
  return (
    <>
      <div className="bg-background-light dark:bg-background-dark">
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-10">
              Professional Skills
            </h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Card 1 */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md transform hover:scale-105 transition-transform duration-300 will-change-transform animate-fade-in">
                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">React.js</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Building dynamic user interfaces with reusable components and hooks.
                </p>
                <div className="flex flex-wrap items-center gap-2 md:flex-row mt-2">
                  <Button>Button</Button>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md transform hover:scale-105 transition-transform duration-300 will-change-transform animate-fade-in delay-100">
                <h3 className="text-xl font-semibold text-green-600 dark:text-green-400 mb-2">Node.js & Express</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Creating fast and scalable backend APIs with RESTful architecture.
                </p>
                <div className="flex flex-wrap items-center gap-2 md:flex-row mt-2">
                  <Button>Button</Button>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md transform hover:scale-105 transition-transform duration-300 will-change-transform animate-fade-in delay-200">
                <h3 className="text-xl font-semibold text-yellow-600 dark:text-yellow-400 mb-2">MySQL</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Designing and managing relational databases for web applications.
                </p>
                <div className="flex flex-wrap items-center gap-2 md:flex-row mt-2">
                  <Button>Button</Button>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md transform hover:scale-105 transition-transform duration-500 will-change-transform animate-fade-in-smooth delay-300">
                <h3 className="text-xl font-semibold text-pink-600 dark:text-pink-400 mb-2">Tailwind CSS</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Crafting beautiful, responsive designs using utility-first classes.
                </p>
                <div className="flex flex-wrap items-center gap-2 md:flex-row mt-2">
                  <Button>Button</Button>
                </div>
              </div>

              {/* Card 5 */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md transform hover:scale-105 transition-transform duration-500 will-change-transform animate-fade-in-smooth delay-400">
                <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-2">Git & GitHub</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Version control and team collaboration with Git best practices.
                </p>
                <div className="flex flex-wrap items-center gap-2 md:flex-row mt-2">
                  <Button>Button</Button>
                </div>
              </div>

              {/* Card 6 */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md transform hover:scale-105 transition-transform duration-500 will-change-transform animate-fade-in-smooth delay-500">
                <h3 className="text-xl font-semibold text-red-500 dark:text-red-400 mb-2">Problem Solving</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Strong ability to debug, optimize code, and solve real-world problems.
                </p>
                <div className="flex flex-wrap items-center gap-2 md:flex-row mt-2">
                  <Button>Button</Button>
                </div>
              </div>
            </div>
          </div>
          <style jsx>{`
            @keyframes fade-in {
              0% {
                opacity: 0;
                transform: translateY(20px);
              }
              100% {
                opacity: 1;
                transform: translateY(0);
              }
            }
            @keyframes fade-in-smooth {
              0% {
                opacity: 0;
                transform: translateY(40px) scale(0.98);
              }
              60% {
                opacity: 0.7;
                transform: translateY(-8px) scale(1.02);
              }
              100% {
                opacity: 1;
                transform: translateY(0) scale(1);
              }
            }
            .animate-fade-in {
              animation: fade-in 0.6s cubic-bezier(0.4, 0, 0.2, 1) both;
            }
            .animate-fade-in-smooth {
              animation: fade-in-smooth 0.9s cubic-bezier(0.4, 0, 0.2, 1) both;
            }
            .delay-100 {
              animation-delay: 0.1s;
            }
            .delay-200 {
              animation-delay: 0.2s;
            }
            .delay-300 {
              animation-delay: 0.3s;
            }
            .delay-400 {
              animation-delay: 0.4s;
            }
            .delay-500 {
              animation-delay: 0.5s;
            }
            .bg-background-light {
              background-color: var(--color-bg-light, #f3f4f6);
            }
            .dark .bg-background-dark {
              background-color: var(--color-bg-dark, #111827);
            }
          `}</style>
        </section>
      </div>
    </>
  );
};

export default SkillSets;
