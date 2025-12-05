'use client';

import React, { useState, useEffect } from 'react';
// switched to lucide-react to resolve build errors
import { Mail, Phone, Linkedin, Github, ExternalLink, Facebook } from 'lucide-react';

// Utility function to handle smooth scrolling
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// Sidebar Navigation Link Component with Hover Animation
const NavLink = ({ id, label }: { id: string, label: string }) => (
  <a
    href={`#${id}`}
    onClick={(e) => {
      e.preventDefault();
      scrollToSection(id);
    }}
    className="group flex items-center justify-between p-2.5 rounded-lg transition-all duration-300 
               text-slate-600 dark:text-slate-400 
               hover:bg-white dark:hover:bg-slate-800 
               hover:shadow-md hover:text-indigo-600 dark:hover:text-indigo-400
               hover:translate-x-2"
  >
    <span className="font-medium transition-colors text-sm">
      {label}
    </span>
    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-indigo-500 transform translate-x-[-10px] group-hover:translate-x-0 duration-300 text-sm">
      →
    </span>
  </a>
);

// Card Component for Projects/Certificates with "Lift" Animation
const ContentCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`p-6 rounded-2xl border transition-all duration-300 ease-out
                   bg-white dark:bg-slate-800 
                   border-slate-100 dark:border-slate-700
                   hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-indigo-500/10 
                   hover:border-indigo-100 dark:hover:border-indigo-500/30
                   ${className}`}>
    {children}
  </div>
);

const App = () => {
  // Theme State Management
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check system preference or saved theme
    if (localStorage.getItem('theme') === 'dark' ||
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Prevent hydration mismatch
  if (!mounted) return null;

  const sections = [
    { id: 'about-me', label: 'About Me' },
    { id: 'projects', label: 'Key Projects' },
    { id: 'certificates', label: 'Certifications' },
  ];

  return (
    <div className="min-h-screen transition-colors duration-500 ease-in-out bg-slate-100 dark:bg-slate-950 font-sans selection:bg-indigo-500 selection:text-white">

      {/* Main Container */}
      <div className="max-w-7xl mx-auto md:flex min-h-screen">

        {/* --- Sidebar (Sticky) --- */}
        <aside className="md:w-72 p-6 md:h-screen md:sticky md:top-0
                          bg-slate-50 dark:bg-slate-900/50 backdrop-blur-xl border-r border-slate-200 dark:border-slate-800/50 
                          flex flex-col justify-between z-20 shadow-2xl md:shadow-none">

          <div>
            {/* Profile Label */}
            <div className="mb-4">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Profile</span>
            </div>

            {/* Profile Header */}
            <div className="text-center">
              <div className="relative inline-block group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full blur opacity-10 group-hover:opacity-20 transition duration-500"></div>
                <img
                  src="gelo.jpg"
                  alt="Profile"
                  className="w-42 h-42 rounded-full mx-auto object-cover border-4 border-white dark:border-slate-800 shadow-md"
                  onError={(e) => {
                    e.currentTarget.src = 'https://placehold.co/400x400/1e293b/ffffff?text=AF';
                  }}
                />
              </div>
              <h1 className=" text-2xl font-black text-slate-800 dark:text-white tracking-tight leading-tight">
                Angelo Flores
              </h1>
              <p className="text-xs font-semibold text-indigo-500 mt-1 uppercase tracking-wide">
                Frontend Developer
              </p>
            </div>

            {/* Contact Info */}
            <div className="mb-6 p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700/50 shadow-sm">
              <div className="space-y-2 text-xs">

                {/* Email Link */}
                <a href="mailto:angelomflores20@gmail.com" className="flex items-center space-x-3 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group">
                  <div className="p-1.5 bg-slate-100 dark:bg-slate-700 rounded-md group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/30 transition-colors">
                    <Mail size={12} />
                  </div>
                  <span className="truncate">angelomflores20@gmail.com</span>
                </a>

                {/* Phone */}
                <div className="flex items-center space-x-3 text-slate-600 dark:text-slate-400 group">
                  <div className="p-1.5 bg-slate-100 dark:bg-slate-700 rounded-md">
                    <Phone size={12} />
                  </div>
                  <span>09957901356</span>
                </div>

                {/* Facebook Link */}
                <a href="https://www.facebook.com/ellloyyyyy" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group">
                  <div className="p-1.5 bg-slate-100 dark:bg-slate-700 rounded-md group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/30 transition-colors">
                    <Facebook size={12} />
                  </div>
                  <span>Facebook Profile</span>
                </a>
              </div>
            </div>
          </div>

          <div>
            {/* Navigation */}
            <nav>
              <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 px-2">Navigate</h3>
              <div className="space-y-1">
                {sections.map(section => (
                  <NavLink key={section.id} id={section.id} label={section.label} />
                ))}
              </div>
            </nav>

            <div className="mt-6 text-[10px] text-slate-400 text-center">
              © {new Date().getFullYear()} All rights reserved.
            </div>
          </div>
        </aside>

        {/* --- Main Content --- */}
        <main className="flex-1 p-6 sm:p-12 lg:p-16">
          <div className="max-w-3xl mx-auto space-y-20">

            {/* About Me */}
            <section id="about-me" className="scroll-mt-24">
              <div className="flex items-center space-x-4 mb-8">
                <h2 className="text-3xl font-black text-slate-800 dark:text-white">About Me</h2>
                <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800"></div>
              </div>
              <p className="text-lg leading-loose text-slate-600 dark:text-slate-300">
                A highly motivated <span className="text-indigo-600 dark:text-indigo-400 font-bold decoration-indigo-200 underline decoration-2 underline-offset-4">Frontend Developer</span> with experience building scalable web applications. Passionate about clean code, robust architecture, and leveraging modern technologies like Next.js and Tailwind CSS to deliver exceptional user experiences.
              </p>
            </section>

            {/* Projects */}
            <section id="projects" className="scroll-mt-24">
              <div className="flex items-center space-x-4 mb-8">
                <h2 className="text-3xl font-black text-slate-800 dark:text-white">Key Projects</h2>
                <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800"></div>
              </div>

              <div className="grid gap-8">
                {/* Project 1 */}
                <ContentCard>
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-4 gap-2">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white group-hover:text-indigo-600 transition-colors">
                      FCFS Scheduling Simulator
                    </h3>
                    <span className="px-3 py-1 text-xs font-bold tracking-wide text-indigo-600 bg-indigo-50 dark:bg-indigo-900/30 dark:text-indigo-300 rounded-full border border-indigo-100 dark:border-indigo-800">
                      REACT & NEXT.JS
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    Developed a fully responsive web application to simulate the First-Come, First-Served CPU scheduling algorithm with dynamic metrics and Gantt charts.
                  </p>

                  {/* --- NEW LINK ADDED HERE --- */}
                  <div className="mb-6">
                    <a
                      href="https://fcsgelo.vercel.app/" /* REPLACE '#' WITH YOUR ACTUAL PROJECT LINK */
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg transition-colors shadow-sm"
                    >
                      <ExternalLink size={14} />
                      View Live Project
                    </a>
                  </div>
                  {/* --------------------------- */}

                  <div className="flex flex-wrap gap-2">
                    {['TypeScript', 'Tailwind', 'Algorithm'].map(tag => (
                      <span key={tag} className="text-xs font-semibold text-slate-500 bg-slate-100 dark:bg-slate-700/50 dark:text-slate-400 px-2.5 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </ContentCard>

                {/* Project 2 */}
                <ContentCard>
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-4 gap-2">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                      E-commerce REST API
                    </h3>
                    <span className="px-3 py-1 text-xs font-bold tracking-wide text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30 dark:text-emerald-300 rounded-full border border-emerald-100 dark:border-emerald-800">
                      NODE.JS
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    Designed and built a secure, high-performance API supporting product management, user authentication (JWT), and order processing.
                  </p>


                  {/* --- NEW LINK ADDED HERE --- */}
                  <div className="">
                    <a
                      href="https://lazappyv3.vercel.app/" /* REPLACE '#' WITH YOUR ACTUAL PROJECT LINK */
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg transition-colors shadow-sm"
                    >

                      <ExternalLink size={14} />
                      View Live Project
                    </a>
                    <div className="flex flex-wrap gap-2">
                      {['Express', 'MongoDB', 'Security'].map(tag => (
                        <span key={tag} className="text-xs font-semibold text-slate-500 bg-slate-100 dark:bg-slate-700/50 dark:text-slate-400 px-2.5 py-1 rounded-md">
                          {tag}
                        </span>
                      ))}

                    </div>
                  </div>
                </ContentCard>
              </div>
            </section>

            {/* Certificates */}
            <section id="certificates" className="scroll-mt-24">
              <div className="flex items-center space-x-4 mb-8">
                <h2 className="text-3xl font-black text-slate-800 dark:text-white">Certifications</h2>
                <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800"></div>
              </div>

              <div className="grid grid-cols-1 gap-8">
                {[
                  { title: "Creative Web Design", issuer: "TESDA", img: "cwd.jpg", color: "text-rose-500" },
                  { title: "Computer System Servicing NCII", issuer: "TESDA", img: "css.jps.jpg", color: "text-blue-500" },
                  { title: "Shielded Metal Arc Welding NCI", issuer: "TESDA", img: "smaw.jpg", color: "text-amber-500" }
                ].map((cert, idx) => (
                  <ContentCard key={idx} className="group overflow-hidden !p-0">
                    <div className="flex flex-col md:flex-row h-full">
                      <div className="md:w-2/5 bg-slate-100 dark:bg-slate-700 relative overflow-hidden h-48 md:h-auto">
                        <img
                          src={cert.img}
                          alt={cert.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          onError={(e) => {
                            e.currentTarget.src = `https://placehold.co/400x400/1e293b/ffffff?text=${cert.title.substring(0, 3)}`;
                          }}
                        />
                        <div className="absolute inset-0 bg-indigo-900/10 group-hover:bg-transparent transition-colors duration-300"></div>
                      </div>
                      <div className="p-6 md:p-8 flex flex-col justify-center flex-1">
                        <h3 className={`text-xl font-bold mb-2 ${cert.color} dark:text-white`}>{cert.title}</h3>
                        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">
                          Issued By: {cert.issuer}
                        </p>
                        <button className="self-start text-xs font-bold text-slate-500 hover:text-slate-800 dark:hover:text-white flex items-center gap-1 transition-colors">
                          VIEW CREDENTIAL <ExternalLink size={10} />
                        </button>
                      </div>
                    </div>
                  </ContentCard>
                ))}
              </div>
            </section>

          </div>
        </main>
      </div>
    </div>
  );
};

export default App;