
import React from 'react';

interface SectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({ title, subtitle, children, id }) => {
  return (
    <section id={id} className="mb-16 scroll-mt-24">
      <div className="flex flex-col mb-6">
        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">
          {title}
        </h2>
        {subtitle && (
          <p className="text-sm text-slate-500">{subtitle}</p>
        )}
      </div>
      <div className="border-t border-slate-200 pt-8">
        {children}
      </div>
    </section>
  );
};
