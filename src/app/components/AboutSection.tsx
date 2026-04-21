import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
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
            About Me
          </h2>
          <div className="w-20 h-1 bg-[var(--teal)] mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-gray-50 to-white dark:from-[#1e3a5f] dark:to-[#0A2540] rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100 dark:border-gray-800">
            <p className="text-lg lg:text-xl text-[var(--gray-text)] dark:text-gray-300 leading-relaxed">
              Recent Information Systems Development graduate from the{' '}
              <span className="text-[var(--teal)] font-medium">
                Institute of Technological Studies of Sousse
              </span>
              , specializing in web and mobile application development, as well
              as UI/UX design. Responsible and organized professional with a
              strong foundation in technology and a passion for creating
              innovative solutions that solve real-world problems.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
