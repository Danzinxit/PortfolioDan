import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { 
      name: 'GitHub', 
      url: 'https://github.com/Danzinxit', 
      icon: <Github size={20} />
    },
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/in/daniel-vieirabh', 
      icon: <Linkedin size={20} />
    }
  ];

  return (
    <footer className="py-12 bg-slate-100 dark:bg-slate-800/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              Daniel<span className="text-slate-900 dark:text-white">Vieira</span>
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400">
              Building amazing digital experiences
            </p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center space-x-4">
            {socialLinks.map(link => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-violet-100 dark:hover:bg-violet-900/30 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700/50 text-center text-slate-500 dark:text-slate-400 text-sm">
          <p>© {currentYear} Daniel Vieira. All rights reserved.</p>
          <p className="mt-2"> ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;