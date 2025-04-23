import React from 'react';
import Section from '../components/Section';
import { Code, Database, Cpu, Server } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    {
      icon: <Code size={24} />,
      title: 'Desenvolvimento Frontend',
      description: 'Experiência em React, Next.js, TypeScript e outras tecnologias modernas de frontend.'
    },
    {
      icon: <Database size={24} />,
      title: 'Banco de Dados',
      description: 'Conhecimento em PostgreSQL, MongoDB e outras soluções de banco de dados.'
    },
    {
      icon: <Cpu size={24} />,
      title: 'Arquitetura de Software',
      description: 'Capacidade de projetar e implementar arquiteturas escaláveis e eficientes.'
    },
    {
      icon: <Server size={24} />,
      title: 'DevOps',
      description: 'Experiência com Docker, CI/CD e outras ferramentas de DevOps.'
    }
  ];

  return (
    <Section id="about" className="bg-slate-50 dark:bg-slate-800/30">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white">
          Sobre <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">Mim</span>
        </h2>
        <p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
          Sou um desenvolvedor apaixonado por criar soluções inovadoras e eficientes.
          Com anos de experiência em desenvolvimento web, busco sempre aprender e me atualizar
          com as mais recentes tecnologias e melhores práticas do mercado.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 mb-4">
              {skill.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              {skill.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default About;