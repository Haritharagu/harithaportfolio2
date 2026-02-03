
import React from 'react';
import { DashboardHeader } from './components/DashboardHeader';
import { Section } from './components/Layout';
import { SkillMap } from './components/SkillMap';
import { WorkLog } from './components/WorkLog';
import { GrowthTimeline } from './components/GrowthTimeline';
import { Credentials } from './components/Credentials';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-900 py-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        
        {/* Navigation - Minimalist floating anchor menu */}
        <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-slate-900/90 backdrop-blur-sm text-white px-6 py-3 rounded-full flex items-center gap-6 text-xs font-semibold shadow-2xl border border-white/10 hidden md:flex">
          <a href="#focus" className="hover:text-indigo-400 transition-colors">Focus</a>
          <a href="#skills" className="hover:text-indigo-400 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-indigo-400 transition-colors">Work Log</a>
          <a href="#timeline" className="hover:text-indigo-400 transition-colors">Growth</a>
          <a href="#credentials" className="hover:text-indigo-400 transition-colors">Credentials</a>
          <div className="w-[1px] h-3 bg-white/20"></div>
          <a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a>
        </nav>

        {/* Header */}
        <DashboardHeader />

        {/* Main Content Area */}
        <main className="mt-12">
          
          <Section id="focus" title="01. Current Focus" subtitle="The specific domains I am currently specializing in.">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-white border border-slate-200 rounded-xl">
                <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                  Active Learning
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Currently investigating <strong>Systems Programming</strong> with Rust. I am particularly interested in memory safety and how it translates to more reliable distributed infrastructure.
                </p>
              </div>
              <div className="p-6 bg-white border border-slate-200 rounded-xl">
                <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  Current Project
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Building a <strong>distributed rate-limiter</strong> service designed to handle millions of requests with sub-millisecond overhead using Redis and Go.
                </p>
              </div>
            </div>
          </Section>

          <Section id="skills" title="02. Skill Map" subtitle="A structured overview of my technical toolkit.">
            <SkillMap />
          </Section>

          <Section id="projects" title="03. Work Log" subtitle="A detailed record of significant technical challenges and their outcomes.">
            <WorkLog />
          </Section>

          <Section id="timeline" title="04. Growth Timeline" subtitle="My professional and educational progression milestones.">
            <GrowthTimeline />
          </Section>

          <Section id="credentials" title="05. Credentials & Signals" subtitle="Official certifications and verified learning paths.">
            <Credentials />
          </Section>

          <Section id="contact" title="06. Contact & Links" subtitle="Professional channels for communication and code review.">
            <div className="flex flex-col md:flex-row gap-8 justify-between items-start">
              <div className="space-y-4">
                <p className="text-sm text-slate-600 max-w-md">
                  I'm currently looking for internship opportunities starting Summer 2024. If you're looking for an organized, growth-oriented developer, let's connect.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="mailto:alex.rivera@example.com" className="text-sm font-bold text-slate-900 border-b-2 border-slate-900 hover:text-indigo-600 hover:border-indigo-600 transition-all">
                    alex.rivera@example.com
                  </a>
                  <a href="#" className="text-sm font-bold text-slate-900 border-b-2 border-slate-900 hover:text-indigo-600 hover:border-indigo-600 transition-all">
                    GitHub
                  </a>
                  <a href="#" className="text-sm font-bold text-slate-900 border-b-2 border-slate-900 hover:text-indigo-600 hover:border-indigo-600 transition-all">
                    LinkedIn
                  </a>
                </div>
              </div>
              <div className="text-[10px] font-mono text-slate-400 text-right w-full md:w-auto">
                VERSION 2.4.0 <br />
                LAST SYNC: FEB 2024 <br />
                LOC: SAN FRANCISCO, CA
              </div>
            </div>
          </Section>

        </main>

        <footer className="mt-20 pt-10 border-t border-slate-200 text-center pb-20">
          <p className="text-xs text-slate-400 font-medium">
            &copy; 2024 Alex Rivera. Built with React & Tailwind. Design inspired by professional dev-workspaces.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;
