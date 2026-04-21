import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Mail, Phone, Linkedin, Download, Heart } from 'lucide-react';

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 lg:py-32 bg-gradient-to-br from-[var(--navy)] to-[#1e3a5f] dark:from-[#0A2540] dark:to-black relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--teal)] rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Let's Build Something Great Together!
          </h2>
          <div className="w-20 h-1 bg-[var(--teal)] mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Available for freelance opportunities and full-time positions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/20">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Email */}
              <motion.a
                href="mailto:emna.khemiri.19@gmail.com"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex items-center space-x-4 p-6 bg-white/10 rounded-xl hover:bg-white/20 transition-all group"
              >
                <div className="p-3 bg-[var(--teal)] rounded-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-300 mb-1">Email</p>
                  <p className="text-white font-medium group-hover:text-[var(--teal)] transition-colors">
                    emna.khemiri.19@gmail.com
                  </p>
                </div>
              </motion.a>

              {/* Phone */}
              <motion.a
                href="tel:+21624448588"
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex items-center space-x-4 p-6 bg-white/10 rounded-xl hover:bg-white/20 transition-all group"
              >
                <div className="p-3 bg-[var(--teal)] rounded-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-300 mb-1">Phone</p>
                  <p className="text-white font-medium group-hover:text-[var(--teal)] transition-colors">
                    +216 24 448 588
                  </p>
                </div>
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                href="https://www.linkedin.com/in/emna-khemiri-8431b3343?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex items-center space-x-4 p-6 bg-white/10 rounded-xl hover:bg-white/20 transition-all group"
              >
                <div className="p-3 bg-[var(--teal)] rounded-lg">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-300 mb-1">LinkedIn</p>
                  <p className="text-white font-medium group-hover:text-[var(--teal)] transition-colors">
                    emma1911
                  </p>
                </div>
              </motion.a>

              {/* Download CV */}
              <motion.a
                href="/emna cv full.pdf"
                download="Emna_Khemiri_CV.pdf"
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex items-center space-x-4 p-6 bg-[var(--teal)] rounded-xl hover:scale-105 transition-all shadow-lg"
              >
                <div className="p-3 bg-white/20 rounded-lg">
                  <Download className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-white/80 mb-1">Download</p>
                  <p className="text-white font-medium">My Resume</p>
                </div>
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="flex items-center justify-center space-x-2 text-gray-300 mb-4">
            <span>Made with</span>
            <Heart className="w-5 h-5 text-[var(--teal)] fill-current" />
            <span>by Emna Khemiri</span>
          </div>
          <p className="text-gray-400 text-sm">
            Copyright © 2026 Emna Khemiri. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}


