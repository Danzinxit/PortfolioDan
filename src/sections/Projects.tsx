import React, { useState } from 'react';
import Section from '../components/Section';
import Card, { CardImage, CardContent, CardTitle, CardDescription, CardFooter } from '../components/Card';
import Badge from '../components/Badge';
import Button from '../components/Button';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = [
    { id: 'all', label: 'Todos' },
    { id: 'web', label: 'Web App' }
  ];
  
  const projects = [
    {
      id: 1,
      title: 'Younik Hype',
      description: 'Plataforma de e-commerce especializada em produtos de streetwear e moda urbana.',
      image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1000&auto=format&fit=crop',
      tags: ['React', 'Node.js', 'PostgreSQL'],
      liveUrl: 'https://younik-hype.vercel.app/',
      githubUrl: 'https://github.com/Danzinxit/YounikHype',
      category: 'web'
    },
    {
      id: 2,
      title: 'IA Chat',
      description: 'Aplicativo de chat com inteligência artificial para conversas personalizadas.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop',
      tags: ['React', 'TypeScript', 'OpenAI'],
      liveUrl: 'https://iachatdan.vercel.app/',
      githubUrl: 'https://github.com/Danzinxit/chatia',
      category: 'web'
    },
    {
      id: 3,
      title: 'Estoque AI',
      description: 'Sistema de gestão de estoque com recursos de inteligência artificial para previsão de demanda.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
      tags: ['Next.js', 'TypeScript', 'MongoDB'],
      liveUrl: 'https://estoqueainf.vercel.app',
      githubUrl: 'https://github.com/Danzinxit/EstoqueEpamig',
      category: 'web'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <Section id="projects" className="bg-slate-50 dark:bg-slate-800/30">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white">
          Meus <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">Projetos</span>
        </h2>
        <p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
          Aqui estão alguns dos projetos em que trabalhei. Cada um deles representa
          um desafio único e uma oportunidade de aprendizado.
        </p>
      </div>
      
      <div className="flex justify-center mb-12">
        <div className="flex flex-wrap justify-center gap-2">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-violet-600 text-white'
                  : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <div 
            key={project.id}
            className="opacity-0 animate-fadeInUp"
            style={{ animationDelay: `${index * 0.15}s`, animationFillMode: 'forwards' }}
          >
            <Card>
              <CardImage 
                src={project.image} 
                alt={project.title} 
                className="h-52"
              />
              <CardContent>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="mb-4">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="primary" size="sm">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button 
                    variant="outline" 
                    size="sm"
                    icon={<Github size={16} />}
                  >
                    Código
                  </Button>
                </a>
                <a 
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button 
                    variant="primary" 
                    size="sm"
                    icon={<ExternalLink size={16} />}
                  >
                    Demo
                  </Button>
                </a>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;