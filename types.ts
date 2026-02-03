
export interface Skill {
  name: string;
  category: string;
}

export interface ProjectEntry {
  id: string;
  title: string;
  date: string;
  goal: string;
  tools: string[];
  outcome: string;
  lessonLearned: string;
}

export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  type: 'milestone' | 'learning' | 'achievement';
}

export interface Credential {
  id: string;
  name: string;
  issuer: string;
  date: string;
  link?: string;
}
