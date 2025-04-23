import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import { ArrowDown, ExternalLink, Github } from 'lucide-react';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Desenvolvedor';
  const typingSpeed = 150;
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.substring(0, typedText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }
  }, [typedText, fullText]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[10%] w-64 h-64 rounded-full bg-violet-400/10 dark:bg-violet-700/10 blur-3xl"></div>
        <div className="absolute bottom-20 right-[10%] w-72 h-72 rounded-full bg-indigo-400/10 dark:bg-indigo-700/10 blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-sky-400/10 dark:bg-sky-700/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <span className="inline-block py-1 px-3 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-800 dark:text-violet-300 text-sm font-medium mb-6 animate-fadeIn">
              Bem-vindo ao meu portfólio
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-slate-900 dark:text-white animate-fadeInUp">
              Daniel Vieira
              <span className="block mt-2 bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                {typedText}
                <span className={`ml-1 ${cursorVisible ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
              </span>
            </h1>
            <p className="text-xl text-slate-700 dark:text-slate-300 mb-8 max-w-lg animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              Desenvolvo experiências digitais excepcionais e acessíveis para a web, especializado em tecnologias web modernas e soluções inovadoras.
            </p>
            <div className="flex flex-wrap gap-4 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              <a 
                href="https://www.linkedin.com/in/daniel-vieirabh" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  variant="primary" 
                  size="lg"
                  icon={<ExternalLink size={20} />}
                  iconPosition="right"
                >
                  Perfil no LinkedIn
                </Button>
              </a>
              <a 
                href="https://github.com/Danzinxit" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  variant="outline" 
                  size="lg"
                  icon={<Github size={20} />}
                  iconPosition="left"
                >
                  Perfil no GitHub
                </Button>
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="relative w-[280px] sm:w-[380px] mx-auto">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-500 to-indigo-500 blur opacity-75 animate-tiltBorder"></div>
              <img 
                src="/src/fotos/IMG_20250209_202707-removebg-preview.png" 
                alt="Daniel Vieira" 
                className="relative rounded-2xl w-full h-auto z-10 animate-float"
              />
              
              <div className="absolute -right-12 top-1/4 bg-white dark:bg-slate-800 shadow-lg rounded-lg px-4 py-2 animate-float2">
                <span className="text-violet-600 dark:text-violet-400 font-bold">React</span>
              </div>
              <div className="absolute -left-8 bottom-1/4 bg-white dark:bg-slate-800 shadow-lg rounded-lg px-4 py-2 animate-float3">
                <span className="text-indigo-600 dark:text-indigo-400 font-bold">Next.js</span>
              </div>
              <div className="absolute left-1/2 -bottom-6 bg-white dark:bg-slate-800 shadow-lg rounded-lg px-4 py-2 animate-float4">
                <span className="text-sky-600 dark:text-sky-400 font-bold">Node.js</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a 
            href="#about" 
            aria-label="Rolar para a seção sobre"
            className="inline-flex justify-center items-center w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow-md text-violet-600 dark:text-violet-400"
          >
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;