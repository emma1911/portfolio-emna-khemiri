import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

export function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const education = [
    {
      degree: 'Licence in Informatic',
      institution: 'Technological Institute of Technological Studies in Sousse',
      period: '2022 – 2025',
    },
    {
      degree: 'Informatic Bacaloria',
      institution: 'Lycée 2 mars 1934 Ksar Hellal',
      period: '2021 – 2022',
    },
  ];

  return (
    <section
      id="education"
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
            Education
          </h2>
          <div className="w-20 h-1 bg-[var(--teal)] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
              className="group"
            >
              <div className="bg-white dark:bg-[#1e3a5f] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full group-hover:scale-105">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="p-3 bg-[var(--teal)]/10 rounded-xl">
                    <GraduationCap
                      className="w-8 h-8"
                      style={{ color: 'var(--teal)' }}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[var(--navy)] dark:text-white mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-[var(--gray-text)] dark:text-gray-300 mb-3">
                      {edu.institution}
                    </p>
                    <div className="flex items-center space-x-2 text-sm text-[var(--teal)]">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
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
