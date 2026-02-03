
import React from 'react';
import { SKILLS } from '../constants';

export const SkillMap: React.FC = () => {
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {categories.map(category => (
        <div key={category} className="space-y-4">
          <h3 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-2">
            {category}
          </h3>
          <ul className="space-y-2">
            {SKILLS.filter(s => s.category === category).map(skill => (
              <li key={skill.name} className="flex items-center gap-3 text-sm text-slate-600 group">
                <div className="w-1 h-1 bg-slate-300 rounded-full group-hover:bg-slate-900 transition-colors"></div>
                {skill.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
