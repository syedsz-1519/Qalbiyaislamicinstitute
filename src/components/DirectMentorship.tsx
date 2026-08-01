import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Sparkles, Heart } from 'lucide-react';
import founderWorkspace from '../assets/images/founder_workspace_1784048720294.jpg';

export const DirectMentorship: React.FC = () => {
  const whatsappUrl = "https://wa.me/918145363290?text=Assalamu%20Alaikum%2C%20I%20would%20like%20to%20request%20personal%20guidance%20from%20Ms.%20Mustara.";

  return (
    <section 
      className="w-full bg-[#FAF8F5] py-16 sm:py-24 border-t border-[#E8DDD9] relative overflow-hidden" 
      id="direct-mentorship-section"
    >
      {/* Decorative Background Blobs */}
      <div className="absolute top-0 left-0 -z-10 h-64 w-64 rounded-full bg-[#78122B]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 -z-10 h-64 w-64 rounded-full bg-[#D4AF37]/10 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FDFBF7] border border-[#E8DDD9] rounded-3xl shadow-xl p-8 sm:p-12 relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center" id="direct-mentorship-card">
          
          {/* Subtle decoration on top card corner */}
          <div className="absolute -top-10 -left-10 w-24 h-24 rounded-full border border-[#78122B]/10 pointer-events-none" />
          <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full border border-[#78122B]/5 pointer-events-none" />
          
          {/* Left Column: Portrait */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <div className="relative">
              {/* Outer soft breathing glow border */}
              <motion.div 
                className="absolute inset-0 rounded-2xl bg-[#78122B]/10"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Enhanced Portrait Frame */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 aspect-square rounded-2xl overflow-hidden border-2 border-[#E8DDD9] shadow-lg bg-gradient-to-br from-[#FAF8F5] to-[#F3D797]/20 z-10">
                <img
                  src={founderWorkspace}
                  alt="Ms. Mustara, Founder & Head Mentor of Qalbiya Islamic Institute"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter brightness-100 contrast-105 saturate-105 transition-all duration-700 hover:scale-105 hover:brightness-105"
                  style={{ 
                    filter: 'contrast(1.05) saturate(1.05) brightness(1)',
                    imageRendering: 'high-quality'
                  }}
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#23181A]/85 via-[#23181A]/20 to-transparent opacity-90" />
                
                {/* Enhanced warm overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#78122B]/5 to-[#F3D797]/5 mix-blend-overlay" />
                
                <div className="absolute bottom-3 left-3 right-3 text-center">
                  <span className="text-xs font-bold text-white uppercase tracking-widest block drop-shadow-md">Ms. Mustara</span>
                  <span className="text-[10px] text-[#F3D797] font-semibold block mt-0.5 drop-shadow-sm">Founder & Head Mentor</span>
                </div>
              </div>

              {/* Live Availability Badge */}
              <div className="absolute -bottom-2 -right-2 bg-[#075E54] text-white text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-md z-20 border border-white/30">
                <span className="w-1.5 h-1.5 bg-emerald-300 rounded-full animate-ping" />
                <span>Online Mentorship</span>
              </div>
            </div>
          </div>

          {/* Right Column: Mentorship content */}
          <div className="lg:col-span-8 space-y-6 text-center lg:text-left">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#78122B] inline-flex items-center gap-1.5 mx-auto lg:mx-0">
                <Heart className="w-3.5 h-3.5 text-[#78122B] fill-[#78122B]/20" /> Direct Mentorship & Support
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#23181A] leading-tight">
                Personal Spiritual Guidance
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#4A3B3E] leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
              Seek personal, compassionate guidance directly from Ms. Mustara. Whether you need support with your Quranic goals, understanding core prayers, navigating spiritual plateaus, or seeking customized learning paths for your family, she is here to listen and help you back to your center.
            </p>

            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E8DDD9] text-xs text-[#5C4D50] font-medium inline-block text-left relative overflow-hidden shadow-xs">
              <div className="flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-[#78122B] shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  Our mentorship sessions are conducted in a completely safe, respectful, and confidential sister-to-sister space designed with love and sacred manners.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 rounded-xl bg-[#075E54] text-white px-8 py-4 text-xs font-bold tracking-wider uppercase shadow-md transition-all cursor-pointer border border-emerald-600/30"
                id="direct-mentorship-whatsapp-btn"
                whileHover={{ scale: 1.03, backgroundColor: "#128C7E" }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Continuous Shimmer glow effect */}
                <motion.div 
                  className="absolute inset-y-0 w-[50%] bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 pointer-events-none"
                  animate={{
                    left: ["-100%", "200%"]
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatDelay: 1
                  }}
                />
                
                <MessageSquare className="w-4 h-4 shrink-0 animate-pulse text-emerald-200" />
                <span>Request Personal Guidance</span>
              </motion.a>
              
              <div className="text-[11px] text-[#5C4D50] font-medium">
                Direct WhatsApp contact &bull; Responds within 24 hours
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
