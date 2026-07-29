import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, Calendar, Layers, Clock, HelpCircle, ArrowRight, UserCheck, MessageSquare, ChevronDown, ChevronUp } from 'lucide-react';
import { Course } from '../types';
import { ShareButton } from './ShareButton';

interface CourseDetailViewProps {
  course: Course;
  onBack: () => void;
  onNavigateToScholarship: () => void;
}

export const CourseDetailView: React.FC<CourseDetailViewProps> = ({ 
  course, 
  onBack,
  onNavigateToScholarship
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const whatsappMessage = `Assalamu Alaikum Ms. Mustara, I am sincerely interested in enrolling in the "${course.title}" course. Please guide me regarding the enrollment schedule and free trial assessment.`;
  const whatsappUrl = `https://wa.me/918145363290?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="space-y-16 pb-20 max-w-6xl mx-auto px-4 sm:px-6">
      
      {/* Top Action Bar: Back Button & Share */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-text-sage hover:text-accent-gold transition-colors duration-300"
          id="course-detail-back"
        >
          <ChevronLeft className="w-4 h-4 text-accent-gold" />
          <span>Back to Hub</span>
        </button>

        <ShareButton 
          title={`${course.title} - Qalbiya Islamic Institute`}
          text={`Explore ${course.title} at Qalbiya Islamic Institute: "${course.hook}"`}
          variant="button"
        />
      </div>

      {/* Main Course Header Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" id="course-detail-hero">
        
        {/* Left text description */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center space-x-2 rounded-full border border-accent-gold/20 bg-panel-dark px-3.5 py-1.5 text-xs font-semibold text-accent-gold tracking-wide">
            {course.badge || 'Sacred Knowledge'}
          </div>

          <h1 className="serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-text-cream">
            {course.title}
          </h1>

          <p className="text-lg italic font-medium text-accent-gold leading-relaxed">
            "{course.hook}"
          </p>

          <p className="text-sm leading-relaxed text-text-sage">
            {course.sub}
          </p>

          {/* Core Outcome - Section 4 Highlighted Block */}
          <div className="p-6 sm:p-8 rounded-2xl border border-accent-gold/40 bg-gradient-to-r from-panel-dark/80 via-panel-dark/60 to-panel-dark/80 space-y-3 shadow-lg relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-accent-gold/10 blur-xl pointer-events-none" />
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-accent-gold block">
              The Outcome
            </span>
            <p className="serif-heading text-lg sm:text-xl font-semibold leading-relaxed text-text-cream italic">
              "{course.outcome}"
            </p>
          </div>
        </div>

        {/* Right image framing */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-sm aspect-[4/3] sm:aspect-square rounded-3xl overflow-hidden border border-brand-border bg-panel-dark shadow-2xl">
            {/* Online Presence Indicator Overlay */}
            <div className="absolute top-4 right-4 z-10 flex items-center gap-2 rounded-full bg-slate-950/80 px-3 py-1.5 text-white border border-white/10 backdrop-blur-sm shadow-md">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#D4AF37]">Live Online Class</span>
            </div>

            <img
              src={course.image}
              alt={course.title}
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover filter brightness-95 saturate-[0.85]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/80 via-transparent to-transparent" />
          </div>
        </div>

      </section>

      {/* SECTION 2 — Why 1:1? Advantages (conditionally rendered) */}
      {course.advantages && course.advantages.length > 0 && (
        <section className="space-y-8" id="course-advantages">
          <div className="border-b border-brand-border pb-3">
            <h2 className="serif-heading text-2xl font-bold text-text-cream">
              Why 1:1?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {course.advantages.map((advantage, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-brand-border bg-panel-dark/60 space-y-3 hover:border-accent-gold/40 transition-colors duration-300">
                <div className="w-12 h-12 rounded-xl bg-accent-gold/10 flex items-center justify-center">
                  <span className="text-2xl text-accent-gold font-bold">{idx + 1}</span>
                </div>
                <h3 className="serif-heading text-base font-bold text-text-cream leading-snug">
                  {advantage.title}
                </h3>
                <p className="text-xs text-text-sage leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Main Breakdown Area */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="course-detail-body">
        
        {/* Left Column: Syllabus, What is included, Who it is for */}
        <div className="lg:col-span-7 space-y-12">
          
          {/* SECTION 2 — What This Course Covers / Syllabus */}
          <div className="space-y-6">
            <div className="border-b border-brand-border pb-3">
              <h2 className="serif-heading text-2xl font-bold text-text-cream">
                What This Course Covers
              </h2>
              {course.slug === 'juniors-deeniyat-mastercourse' && (
                <p className="text-xs text-text-sage mt-2 leading-relaxed">
                  This is Qalbiya's most complete children's program, a full Islamic foundation built over time, not rushed. Your child will grow through each stage of learning with structure, consistency, and genuine understanding.
                </p>
              )}
            </div>
            <ul className="space-y-4">
              {course.syllabus.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-sm text-text-sage">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent-gold/10 text-accent-gold text-xs font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What You Get */}
          <div className="space-y-6">
            <h2 className="serif-heading text-2xl font-bold text-text-cream border-b border-brand-border pb-3">
              What Is Included
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {course.whatYouGet.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-brand-border bg-panel-dark/60 text-xs text-text-sage leading-relaxed">
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Who is this for */}
          <div className="space-y-6">
            <h2 className="serif-heading text-2xl font-bold text-text-cream border-b border-brand-border pb-3">
              Who Is This For?
            </h2>
            <div className="space-y-3">
              {course.whoThisIsFor.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3 text-xs text-text-sage">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-gold shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {course.howLearn && (
            <div className="p-6 rounded-2xl border border-accent-gold/20 bg-panel-dark/60 space-y-3">
              <h3 className="serif-heading text-lg font-bold text-text-cream">
                {course.category === 'kids' ? "How Your Child Will Learn" : "How You Will Learn"}
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-text-sage">
                {course.howLearn}
              </p>
            </div>
          )}

        </div>

        {/* Right Column: Dynamic Action details box, Teacher Note, FAQs */}
        <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-24">
          
          {/* Quick Stats Panel & Register CTA */}
          <div className="p-6 sm:p-8 rounded-2xl border border-accent-gold/30 bg-panel-dark space-y-6 shadow-xl">
            <h3 className="serif-heading text-lg font-bold text-text-cream text-center">
              Program Details
            </h3>

            <div className="space-y-4 text-sm text-text-sage">
              {Object.entries(course.courseDetails).map(([key, val]) => (
                <div key={key} className="flex justify-between items-center py-2.5 border-b border-brand-border/60">
                  <span className="font-semibold text-text-cream/85">{key}</span>
                  <span className="text-accent-gold text-right">{val}</span>
                </div>
              ))}
            </div>

            {/* Price Detail */}
            <div className="text-center bg-bg-deep/55 p-4 rounded-xl border border-brand-border">
              <p className="text-xs text-text-sage font-medium uppercase tracking-wider">Registration Contribution</p>
              <h4 className="serif-heading text-3xl font-bold text-accent-gold mt-1">
                {course.price}
              </h4>
              <p className="text-[10px] text-text-sage/75 mt-0.5">Sponsorship / partial matching always available</p>
            </div>

            {/* Big Register Buttons */}
            <div className="space-y-3">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group overflow-hidden flex w-full items-center justify-center space-x-2.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#EAB1BB] to-[#D4AF37] hover:from-[#D4AF37] hover:to-[#B8860B] py-3.5 text-xs font-bold uppercase tracking-widest text-bg-deep shadow-lg shadow-accent-gold/25 transition-all duration-500 hover:shadow-accent-gold/45 hover:scale-[1.03] active:scale-[0.98] border border-white/20"
                id={`register-wa-btn-${course.slug}`}
              >
                {/* Shining sweep effect */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <MessageSquare className="w-3.5 h-3.5 text-bg-deep" />
                  <span>WhatsApp to Enroll</span>
                </span>
              </a>

              <button
                onClick={onNavigateToScholarship}
                className="flex w-full items-center justify-center space-x-2 rounded-xl border border-brand-border hover:border-accent-gold/40 bg-panel-light py-3 text-xs font-semibold text-text-cream transition-all duration-300"
                id={`register-scholarship-btn-${course.slug}`}
              >
                <span>Request Financial Support</span>
              </button>

              <ShareButton 
                title={`${course.title} - Qalbiya Islamic Institute`}
                text={`Learn about ${course.title}: "${course.hook}"`}
                variant="banner"
              />
            </div>
          </div>

          {/* Founder Quote / Meet Your Child's Teacher */}
          <div className="p-6 rounded-2xl border border-brand-border bg-panel-dark/50 text-xs leading-relaxed text-text-sage space-y-3 shadow-md">
            <p className="text-[10px] font-extrabold text-accent-gold uppercase tracking-widest not-italic">
              {course.category === 'kids' ? "Meet Your Child's Teacher" : "Teacher's Note"}
            </p>
            <p className="italic text-text-cream/90 text-sm leading-relaxed whitespace-pre-line">
              "{course.teacherNote}"
            </p>
          </div>

          {/* FAQ Block */}
          <div className="space-y-4">
            <h3 className="serif-heading text-lg font-bold text-text-cream flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-accent-gold" />
              <span>Frequently Asked Questions</span>
            </h3>
            <div className="space-y-2.5">
              {course.faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div 
                    key={index} 
                    className={`rounded-xl border bg-panel-dark/60 overflow-hidden transition-colors ${
                      isOpen ? 'border-accent-gold/40' : 'border-brand-border'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className="flex w-full items-center justify-between px-4 py-3 text-left text-xs font-bold text-text-cream hover:bg-panel-light hover:text-accent-gold transition-all duration-300 cursor-pointer"
                      id={`course-faq-btn-${index}`}
                      aria-expanded={isOpen}
                    >
                      <span className="pr-2">{faq.q}</span>
                      <ChevronDown className={`w-4 h-4 text-accent-gold shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: 'easeInOut' }}
                        >
                          <div className="px-4 pb-3.5 pt-1 text-xs leading-relaxed text-text-sage border-t border-brand-border/40 bg-panel-light/20">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </section>

      {/* SECTION 10 — Closing CTA Banner */}
      <section className="pt-8" id="course-detail-closing-cta">
        <div className="rounded-3xl border border-accent-gold/30 bg-gradient-to-br from-panel-dark via-[#480117] to-panel-dark p-8 sm:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-48 h-48 rounded-full bg-accent-gold/10 blur-2xl pointer-events-none" />
          
          <h2 className="serif-heading text-2xl sm:text-3xl font-bold text-text-cream max-w-2xl mx-auto leading-snug">
            {course.category === 'kids' 
              ? "Give your child a foundation that grows with them, in knowledge, in akhlaq, and in love for their deen."
              : "Give yourself a foundation that grounds your heart in light, knowledge, and daily peace."
            }
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#EAB1BB] to-[#D4AF37] text-bg-deep font-bold text-xs uppercase tracking-widest hover:scale-[1.03] transition-all shadow-xl cursor-pointer"
              id="closing-cta-enroll-btn"
            >
              <span>Enroll Now → WhatsApp Us</span>
            </a>

            <a 
              href="https://www.instagram.com/qalbiya.institute/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-brand-border hover:border-accent-gold/50 bg-panel-dark/60 text-text-cream font-semibold text-xs tracking-wide transition-all cursor-pointer"
              id="closing-cta-dm-btn"
            >
              <span>DM on Instagram</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
