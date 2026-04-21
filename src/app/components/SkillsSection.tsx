import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Code, Database, Terminal, Layout } from 'lucide-react';

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      title: 'Frameworks',
      icon: Layout,
      skills: [
        'Symfony (Full Stack)',
        'Angular',
        'React',
        'Spring Boot',
        'Flutter',
      ],
    },
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['Java Native', 'JavaScript', 'PHP', 'SQL'],
    },
    {
      title: 'Operating Systems',
      icon: Terminal,
      skills: ['Windows', 'Linux'],
    },
    {
      title: 'Design Tools',
      icon: Database,
      skills: ['Figma', 'UI/UX Design', 'Wireframing', 'Prototyping'],
    },
  ];

  return (
    <section
      id="skills"
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
            Skills & Tools
          </h2>
          <div className="w-20 h-1 bg-[var(--teal)] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              >
                <div className="bg-gradient-to-br from-gray-50 to-white dark:from-[#1e3a5f] dark:to-[#0A2540] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 bg-[var(--teal)]/10 rounded-xl">
                      <Icon
                        className="w-8 h-8"
                        style={{ color: 'var(--teal)' }}
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-[var(--navy)] dark:text-white">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                        className="px-4 py-2 bg-white dark:bg-[#0A2540] border-2 border-[var(--teal)] text-[var(--navy)] dark:text-[var(--teal)] rounded-full font-medium hover:bg-[var(--teal)] hover:text-white dark:hover:bg-[var(--teal)] dark:hover:text-white transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
