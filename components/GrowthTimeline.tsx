
import React from 'react';
import { TIMELINE } from '../constants';

export const GrowthTimeline: React.FC = () => {
  return (
    <div className="relative pl-8 space-y-12 before:content-[''] before:absolute before:left-[11px] before:top-2 before:bottom-0 before:w-[1px] before:bg-slate-200">
      {TIMELINE.map((event) => (
        <div key={event.id} className="relative group">
          {/* Dot */}
          <div className={`absolute -left-8 top-1.5 w-[23px] h-[23px] rounded-full border-4 border-white shadow-sm ring-1 ring-slate-200 transition-all group-hover:scale-110 
            ${event.type === 'milestone' ? 'bg-indigo-500' : event.type === 'achievement' ? 'bg-amber-500' : 'bg-emerald-500'}`} 
          />
          
          <div className="space-y-1">
            <span className="text-[10px] font-bold font-mono text-slate-400 uppercase tracking-widest">
              {event.date} &bull; {event.type}
            </span>
            <h3 className="text-base font-bold text-slate-900">{event.title}</h3>
            <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
              {event.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
