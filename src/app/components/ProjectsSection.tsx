import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { FileText } from 'lucide-react';

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'YUMMY',
      description:
        'A seamless web application that allows users to order food online with an intuitive and modern interface.',
      tech: ['Symfony (Full Stack)'],
      image:
        'https://images.unsplash.com/photo-1760888549280-4aef010720bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwb3JkZXJpbmclMjBhcHAlMjBtb2JpbGV8ZW58MXx8fHwxNzc2Njk2NDA0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      links: {
        demo: '#',
        case: '#',
      },
    },
    {
      title: 'SWD (Safran Workflow Digital)',
      description:
        'Digital workflow solution for M3 item management at Safran. Developed both frontend and backend with secure JWT authentication.',
      tech: ['Angular', 'Spring Boot', 'JWT'],
      image:
        'https://images.unsplash.com/photo-1771923082503-0a3381c46cef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBhcHBsaWNhdGlvbiUyMGRhc2hib2FyZCUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzY2OTY0MDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      links: {
        demo: '#',
        case: '#',
      },
    },
    {
      title: 'MobiFix UI/UX',
      description:
        'Complete UI/UX design for a mobile repair service app. Focused on improving user navigation and purchase flow.',
      tech: ['Figma'],
      image:
        'https://images.unsplash.com/photo-1767449441925-737379bc2c4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjB1aSUyMHV4fGVufDF8fHx8MTc3NjY5NjQwNXww&ixlib=rb-4.1.0&q=80&w=1080',
      links: {
        design: '#',
      },
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white dark:from-[#0A2540] dark:to-[#1e3a5f]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[var(--navy)] dark:text-white mb-6">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-[var(--teal)] mx-auto rounded-full"></div>
          <p className="mt-4 text-[var(--gray-text)] dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work in web development, mobile apps, and
            UI/UX design
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
              className="group"
            >
              <div className="bg-white dark:bg-[#1e3a5f] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full flex flex-col">
                {/* Project Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-[var(--navy)] dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-[var(--gray-text)] dark:text-gray-300 mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm rounded-full bg-[var(--teal)]/10 text-[var(--teal)] font-medium"
                      >
                        {tech}
                      
                      </span>))}
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-3">
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}







