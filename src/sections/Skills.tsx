import React from 'react';
import Section from '../components/Section';
import { Code, Database, Cpu, Server, Smartphone, Palette } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: <Code size={24} />,
      title: 'Desenvolvimento Frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'JavaScript', level: 95 },
        { name: 'HTML/CSS', level: 90 }
      ]
    },
    {
      icon: <Server size={24} />,
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 75 },
        { name: 'Java', level: 70 },
        { name: 'REST APIs', level: 90 },
        { name: 'GraphQL', level: 80 }
      ]
    },
    {
      icon: <Database size={24} />,
      title: 'Banco de Dados',
      skills: [
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'MySQL', level: 75 },
        { name: 'Redis', level: 70 }
      ]
    },
    {
      icon: <Cpu size={24} />,
      title: 'DevOps & Cloud',
      skills: [
        { name: 'Docker', level: 80 },
        { name: 'AWS', level: 75 },
        { name: 'CI/CD', level: 85 },
        { name: 'Linux', level: 80 }
      ]
    },
    {
      icon: <Smartphone size={24} />,
      title: 'Mobile',
      skills: [
        { name: 'React Native', level: 80 },
        { name: 'Flutter', level: 70 },
        { name: 'iOS/Android', level: 75 }
      ]
    },
    {
      icon: <Palette size={24} />,
      title: 'Design & UX',
      skills: [
        { name: 'UI/UX', level: 75 },
        { name: 'Figma', level: 80 },
        { name: 'Adobe XD', level: 70 }
      ]
    }
  ];

  return (
    <Section id="skills" className="bg-slate-50 dark:bg-slate-800/30">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white">
          Minhas <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">Habilidades</span>
        </h2>
        <p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
          Uma visão geral das minhas habilidades técnicas e ferramentas que utilizo
          para criar soluções inovadoras.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0 p-3 rounded-lg bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 mr-4">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {category.title}
              </h3>
            </div>
            
            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      {skill.name}
                    </span>
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-violet-600 to-indigo-600 h-2 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;