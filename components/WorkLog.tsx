
import React from 'react';
import { WORK_LOG } from '../constants';

export const WorkLog: React.FC = () => {
  return (
    <div className="space-y-12">
      {WORK_LOG.map((entry) => (
        <div key={entry.id} className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-6 md:gap-12">
          <div className="text-xs font-mono text-slate-400 pt-1">
            {entry.date}
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{entry.title}</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {entry.tools.map(tool => (
                  <span key={tool} className="text-[11px] font-mono bg-slate-900 text-slate-50 px-2 py-0.5 rounded">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 bg-slate-50 border border-slate-200 rounded-lg p-6">
              <div>
                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Goal</h4>
                <p className="text-sm text-slate-700 leading-relaxed">{entry.goal}</p>
              </div>
              <div>
                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Outcome</h4>
                <p className="text-sm text-slate-700 leading-relaxed">{entry.outcome}</p>
              </div>
              <div className="sm:col-span-2 border-t border-slate-200 pt-4 mt-2">
                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Lesson Learned</h4>
                <p className="text-sm italic text-slate-600 leading-relaxed">
                  " {entry.lessonLearned} "
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
