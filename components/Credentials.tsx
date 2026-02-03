
import React from 'react';
import { CREDENTIALS } from '../constants';

export const Credentials: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {CREDENTIALS.map((cred) => (
        <a 
          key={cred.id} 
          href={cred.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col p-5 bg-white border border-slate-200 rounded-lg hover:border-slate-300 transition-all hover:shadow-md"
        >
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{cred.issuer}</span>
          <h3 className="text-sm font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
            {cred.name}
          </h3>
          <span className="text-xs text-slate-500 mt-2">{cred.date}</span>
        </a>
      ))}
    </div>
  );
};
