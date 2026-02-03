
import { Skill, ProjectEntry, TimelineEvent, Credential } from './types';

export const STUDENT_INFO = {
  name: "Alex Rivera",
  role: "Junior Software Engineer",
  focus: "Architecting scalable systems and mastering high-performance backend patterns.",
  currentFocus: "Learning Rust & WebAssembly for edge computing optimization.",
  skillsInProgress: ["Rust", "Kubernetes", "GraphQL Federation"],
  activeTools: ["VS Code", "Raycast", "Docker", "Postman"]
};

export const SKILLS: Skill[] = [
  { name: "TypeScript", category: "Languages" },
  { name: "Go", category: "Languages" },
  { name: "Python", category: "Languages" },
  { name: "SQL", category: "Languages" },
  { name: "React / Next.js", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Framer Motion", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "PostgreSQL", category: "Backend" },
  { name: "Redis", category: "Backend" },
  { name: "Prisma", category: "Backend" },
  { name: "Docker", category: "DevOps" },
  { name: "GitHub Actions", category: "DevOps" },
  { name: "AWS (S3, Lambda)", category: "DevOps" },
];

export const WORK_LOG: ProjectEntry[] = [
  {
    id: "1",
    title: "Project 'Lumen' - Distrubuted KV Store",
    date: "Dec 2023",
    goal: "Build a consistent key-value store to understand the Raft consensus algorithm.",
    tools: ["Go", "GRPC", "Protobuf"],
    outcome: "Successfully implemented a 3-node cluster that handles network partitions gracefully.",
    lessonLearned: "Distributed systems are less about the 'happy path' and entirely about handling failures."
  },
  {
    id: "2",
    title: "SyncScript - Collaborative Editor",
    date: "Oct 2023",
    goal: "Create a real-time code editor with operational transformation (OT).",
    tools: ["React", "Socket.io", "Express", "Monaco Editor"],
    outcome: "Deployed a functional editor supporting up to 10 concurrent users with <50ms latency.",
    lessonLearned: "Client-side state management becomes exponentially harder when you introduce external synchronization."
  },
  {
    id: "3",
    title: "Personal OS Dashboard",
    date: "Current",
    goal: "A centralized command center for my personal growth and project tracking.",
    tools: ["React", "TypeScript", "Tailwind"],
    outcome: "Ongoing development. Integrated multiple APIs for GitHub and Notion.",
    lessonLearned: "Design consistency is the bridge between a cluttered tool and a useful workspace."
  }
];

export const TIMELINE: TimelineEvent[] = [
  {
    id: "t1",
    date: "Sept 2021",
    title: "Started CS Degree",
    description: "Began journey at State University. First line of Python written.",
    type: "milestone"
  },
  {
    id: "t2",
    date: "Jan 2022",
    title: "Web Development Deep Dive",
    description: "Focused on frontend fundamentals: HTML, CSS, JS, and responsive design.",
    type: "learning"
  },
  {
    id: "t3",
    date: "June 2023",
    title: "Backend Engineering Internship",
    description: "3-month role at TechCorp. Managed microservices using Go and Docker.",
    type: "milestone"
  },
  {
    id: "t4",
    date: "Nov 2023",
    title: "Hackathon Winner",
    description: "First place for 'Best Use of AI' at Regional Hack-Day.",
    type: "achievement"
  }
];

export const CREDENTIALS: Credential[] = [
  {
    id: "c1",
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "Aug 2023",
    link: "#"
  },
  {
    id: "c2",
    name: "Professional Scrum Master I",
    issuer: "Scrum.org",
    date: "Oct 2022",
    link: "#"
  },
  {
    id: "c3",
    name: "Complete Web Development Bootcamp",
    issuer: "Udemy",
    date: "Mar 2022",
    link: "#"
  }
];
