import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Briefcase, Calendar } from 'lucide-react';

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      title: 'Internship – Safran',
      period: '2024 – 2025',
      description:
        'Developed a full-stack web application focused on a Digital Workflow for M3 item management (SWD).',
      tech: 'Angular (frontend) + Spring Boot (backend) + JWT authentication',
    },
    {
      title: 'UI/UX Freelance',
      period: '2025 – 2026',
      description:
        'Designed complete UI/UX for MobiFix mobile app using Figma.',
      tech: 'Improved user navigation and purchase flow',
    },
  ];

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 lg:py-32 bg-white dark:bg-[#0A2540]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[var(--navy)] dark:text-white mb-6">
            Experience
          </h2>
          <div className="w-20 h-1 bg-[var(--teal)] mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-[var(--teal)] to-transparent hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
                className="relative"
              >
                <div className="flex items-start space-x-6">
                  {/* Timeline Dot */}
                  <div className="hidden md:flex flex-shrink-0 w-16 h-16 bg-[var(--teal)] rounded-full items-center justify-center shadow-lg z-10">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 bg-gradient-to-br from-gray-50 to-white dark:from-[#1e3a5f] dark:to-[#0A2540] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <h3 className="text-2xl font-bold text-[var(--navy)] dark:text-white mb-2 md:mb-0">
                        {exp.title}
                      </h3>
                      <div className="flex items-center space-x-2 text-[var(--teal)]">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-medium">{exp.period}</span>
                      </div>
                    </div>
                    <p className="text-[var(--gray-text)] dark:text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="inline-block px-4 py-2 bg-[var(--teal)]/10 rounded-lg">
                      <p className="text-sm text-[var(--navy)] dark:text-[var(--teal)] font-medium">
                        {exp.tech}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
