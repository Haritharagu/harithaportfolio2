
import React from 'react';
import { STUDENT_INFO } from '../constants';

export const DashboardHeader: React.FC = () => {
  return (
    <div className="mb-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <h1 className="text-4xl font-bold text-slate-900 tracking-tight mb-2">
            {STUDENT_INFO.name}
          </h1>
          <p className="text-lg text-slate-600 font-medium max-w-xl leading-relaxed">
            {STUDENT_INFO.role} &bull; {STUDENT_INFO.focus}
          </p>
        </div>
        <div className="flex gap-4">
          <div className="text-right hidden sm:block">
            <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">Status</span>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Available for Internships
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border border-slate-200 bg-white rounded-xl p-6 shadow-sm">
        <div className="space-y-2">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active Study</span>
          <p className="text-sm font-semibold text-slate-800">{STUDENT_INFO.currentFocus}</p>
        </div>
        <div className="space-y-2 border-l border-slate-100 md:pl-6">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Skills in Progress</span>
          <div className="flex flex-wrap gap-2">
            {STUDENT_INFO.skillsInProgress.map((skill) => (
              <span key={skill} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded border border-slate-200">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="space-y-2 border-l border-slate-100 md:pl-6">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Primary Tools</span>
          <div className="flex flex-wrap gap-2">
            {STUDENT_INFO.activeTools.map((tool) => (
              <span key={tool} className="text-xs text-slate-500 flex items-center gap-1">
                <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
