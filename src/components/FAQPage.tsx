import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  HelpCircle, 
  ChevronDown, 
  MessageSquare, 
  Search,
  X,
  Plus,
  Minus,
  Sparkles,
  BookOpen,
  DollarSign,
  GraduationCap
} from 'lucide-react';
import { Instagram } from './InstagramIcon';
import { Route } from '../types';
import { ShareButton } from './ShareButton';

interface FAQPageProps {
  onNavigate?: (route: Route) => void;
}

interface FAQItem {
  id: string;
  question: string;
  answer: React.ReactNode;
  rawAnswerText?: string;
  category: 'general' | 'classes' | 'payment';
}

export const FAQPage: React.FC<FAQPageProps> = ({ onNavigate }) => {
  // Store open item IDs as a Set to allow multiple or single open items
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());
  const [activeCategory, setActiveCategory] = useState<'all' | 'general' | 'classes' | 'payment'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFAQ = (id: string) => {
    setOpenIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const faqItems: FAQItem[] = [
    {
      id: 'attendance',
      category: 'classes',
      question: 'Is attendance tracked?',
      answer: 'Yes, attendance is tracked for all our courses to ensure consistent progress, commitment, and quality spiritual learning.',
      rawAnswerText: 'Yes attendance is tracked for all our courses to ensure consistent progress, commitment, and quality spiritual learning.'
    },
    {
      id: 'recordings',
      category: 'classes',
      question: 'Do I get a recording if I miss a live class?',
      answer: 'This varies by course, as some courses offer recordings and some don\'t. This will be clearly communicated to you at the time of enrollment.',
      rawAnswerText: 'This varies by course as some courses offer recordings and some don\'t. This will be clearly communicated to you at the time of enrollment.'
    },
    {
      id: 'trial',
      category: 'general',
      question: 'Is there a trial or demo class before I enroll?',
      answer: (
        <span>
          Yes, trial classes are available for select courses, including Tajweed 1:1 Classes and the Juniors Deeniyat Mastercourse.{' '}
          <a
            href="https://wa.me/918145363290?text=Assalamu%20Alaikum%2C%20I%20would%20like%20to%20request%20a%20trial%20class."
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-gold underline hover:text-text-cream transition-colors"
          >
            Message us on WhatsApp
          </a>{' '}
          to ask about a trial for the course you're interested in.
        </span>
      ),
      rawAnswerText: 'Yes trial classes are available for select courses including Tajweed 1:1 Classes and the Juniors Deeniyat Mastercourse. Message us on WhatsApp to ask about a trial for the course you are interested in.'
    },
    {
      id: 'authenticity',
      category: 'general',
      question: 'Is Qalbiya Islamic Institute authentic / who teaches the courses?',
      answer: (
        <span>
          All our courses are taught by qualified, dedicated teachers rooted in authentic Qur'an and Sunnah teaching. You can read more about our founder and approach on our{' '}
          {onNavigate ? (
            <button
              onClick={() => onNavigate('about')}
              className="text-accent-gold underline hover:text-text-cream transition-colors font-medium inline bg-transparent border-0 p-0 cursor-pointer align-baseline"
            >
              About
            </button>
          ) : (
            <strong className="text-accent-gold">About</strong>
          )}{' '}
          page.
        </span>
      ),
      rawAnswerText: 'All our courses are taught by qualified dedicated teachers rooted in authentic Quran and Sunnah teaching. You can read more about our founder and approach on our About page.'
    },
    {
      id: 'enroll',
      category: 'general',
      question: 'How do I enroll in a course?',
      answer: (
        <span>
          Browse our{' '}
          {onNavigate ? (
            <>
              <button
                onClick={() => onNavigate('women')}
                className="text-accent-gold underline hover:text-text-cream transition-colors font-medium inline bg-transparent border-0 p-0 cursor-pointer align-baseline"
              >
                Women's Courses
              </button>
              {' or '}
              <button
                onClick={() => onNavigate('kids')}
                className="text-accent-gold underline hover:text-text-cream transition-colors font-medium inline bg-transparent border-0 p-0 cursor-pointer align-baseline"
              >
                Kids' Courses
              </button>
            </>
          ) : (
            <strong className="text-accent-gold">Women's / Kids' Courses</strong>
          )}{' '}
          pages, choose the course that fits, and message us on WhatsApp or Instagram to complete enrollment.
        </span>
      ),
      rawAnswerText: 'Browse our Womens Courses or Kids Courses pages, choose the course that fits, and message us on WhatsApp or Instagram to complete enrollment.'
    },
    {
      id: 'payment',
      category: 'payment',
      question: 'How do I pay?',
      answer: 'Payment details are shared directly with you once you reach out to enroll. We currently accept standard, convenient methods including bank transfers, UPI (GPay, PhonePe, Paytm), and secure international wire methods.',
      rawAnswerText: 'Payment details are shared directly with you once you reach out to enroll. We currently accept standard convenient methods including bank transfers, UPI GPay PhonePe Paytm, and secure international wire methods.'
    },
    {
      id: 'refunds',
      category: 'payment',
      question: 'Can I get a refund if I change my mind?',
      answer: (
        <span>
          All course fees are non-refundable. Please see our{' '}
          {onNavigate ? (
            <button
              onClick={() => onNavigate('refundPolicy')}
              className="text-accent-gold underline hover:text-text-cream transition-colors font-medium inline bg-transparent border-0 p-0 cursor-pointer align-baseline"
            >
              Refund Policy
            </button>
          ) : (
            <strong className="text-accent-gold">Refund Policy</strong>
          )}{' '}
          for details, and feel free to ask us any questions before enrolling.
        </span>
      ),
      rawAnswerText: 'All course fees are non-refundable. Please see our Refund Policy for details, and feel free to ask us any questions before enrolling.'
    },
    {
      id: 'format',
      category: 'classes',
      question: 'Are classes live or pre-recorded?',
      answer: 'All classes are conducted live online via Google Meet, not pre-recorded. This ensures real-time interaction, active correction, and personal teacher-student engagement.',
      rawAnswerText: 'All classes are conducted live online via Google Meet not pre-recorded. This ensures real-time interaction, active correction, and personal teacher-student engagement.'
    },
    {
      id: 'beginners',
      category: 'general',
      question: 'Do you offer classes for beginners?',
      answer: 'Yes, several of our courses, including Noorani Qaida (Women\'s & Kids\') and Pre Diploma in Deeniyat, are designed specifically for beginners with no prior knowledge required.',
      rawAnswerText: 'Yes several of our courses including Noorani Qaida Womens & Kids and Pre-Diploma in Deeniyat are designed specifically for beginners with no prior knowledge required.'
    },
    {
      id: 'missed',
      category: 'classes',
      question: 'What if I have to miss a class?',
      answer: 'This depends on the course format. For 1-on-1 classes, missed content is simply covered in the next session. For group classes, please check the specific course page or contact us for guidance.',
      rawAnswerText: 'This depends on the course format. For 1-on-1 classes missed content is simply covered in the next session. For group classes please check the specific course page or contact us for guidance.'
    },
    {
      id: 'free',
      category: 'general',
      question: 'Do you offer free courses or sessions?',
      answer: (
        <span>
          Yes, check our{' '}
          {onNavigate ? (
            <button
              onClick={() => onNavigate('freeCourses')}
              className="text-accent-gold underline hover:text-text-cream transition-colors font-medium inline bg-transparent border-0 p-0 cursor-pointer align-baseline"
            >
              Free Courses
            </button>
          ) : (
            <strong className="text-accent-gold">Free Courses</strong>
          )}{' '}
          page for our current free offerings, including weekly Tarbiyah & Tazkiyah sessions.
        </span>
      ),
      rawAnswerText: 'Yes check our Free Courses page for our current free offerings including weekly Tarbiyah & Tazkiyah sessions.'
    },
    {
      id: 'scholarships',
      category: 'payment',
      question: 'Do you offer scholarships?',
      answer: (
        <span>
          Yes, we offer scholarships for students who genuinely cannot afford our courses. Visit our{' '}
          {onNavigate ? (
            <button
              onClick={() => onNavigate('scholarship')}
              className="text-accent-gold underline hover:text-text-cream transition-colors font-medium inline bg-transparent border-0 p-0 cursor-pointer align-baseline"
            >
              Scholarship
            </button>
          ) : (
            <strong className="text-accent-gold">Scholarship</strong>
          )}{' '}
          page to apply.
        </span>
      ),
      rawAnswerText: 'Yes we offer scholarships for students who genuinely cannot afford our courses. Visit our Scholarship page to apply.'
    },
    {
      id: 'ages',
      category: 'general',
      question: 'Do you offer courses for children younger than 6 or older than 12?',
      answer: (
        <span>
          Our current children's courses are designed for ages 6 to 12. Please{' '}
          {onNavigate ? (
            <button
              onClick={() => onNavigate('contact')}
              className="text-accent-gold underline hover:text-text-cream transition-colors font-medium inline bg-transparent border-0 p-0 cursor-pointer align-baseline"
            >
              contact us directly
            </button>
          ) : (
            <strong className="text-accent-gold">contact us</strong>
          )}{' '}
          if you have a child outside this range, we are happy to discuss custom options.
        </span>
      ),
      rawAnswerText: 'Our current childrens courses are designed for ages 6 to 12. Please contact us directly if you have a child outside this range we are happy to discuss custom options.'
    }
  ];

  const filteredFaqs = useMemo(() => {
    return faqItems.filter(item => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const query = searchQuery.trim().toLowerCase();
      if (!query) return matchesCategory;

      const matchesQ = item.question.toLowerCase().includes(query);
      const matchesA = item.rawAnswerText ? item.rawAnswerText.toLowerCase().includes(query) : false;
      
      return matchesCategory && (matchesQ || matchesA);
    });
  }, [activeCategory, searchQuery]);

  const handleExpandAll = () => {
    const allFilteredIds = new Set(filteredFaqs.map(f => f.id));
    setOpenIds(allFilteredIds);
  };

  const handleCollapseAll = () => {
    setOpenIds(new Set());
  };

  const allVisibleAreExpanded = filteredFaqs.length > 0 && filteredFaqs.every(f => openIds.has(f.id));

  return (
    <div className="space-y-10 pb-24 max-w-3xl mx-auto px-4 sm:px-6 pt-10" id="faq-page-container">
      
      {/* Page Header */}
      <section className="text-center space-y-4" id="faq-header">
        <div className="flex items-center justify-center gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-gold flex items-center justify-center gap-1.5">
            <HelpCircle className="w-4 h-4" /> Help Center
          </span>
          <ShareButton 
            title="Qalbiya Islamic Institute - Frequently Asked Questions"
            text="Get answers to common questions about Qalbiya programs, 1-on-1 Tajweed, fees, and trial classes."
            variant="compact"
          />
        </div>
        <h1 className="serif-heading text-4xl sm:text-5xl font-bold text-text-cream tracking-tight">
          Frequently Asked Questions
        </h1>
        <p className="max-w-xl mx-auto text-sm sm:text-base leading-relaxed text-text-sage">
          Find instant answers to common questions about admissions, schedules, format, and fees at Qalbiya Islamic Institute.
        </p>
      </section>

      {/* Live Search Bar */}
      <div className="relative max-w-xl mx-auto" id="faq-search-bar">
        <div className="relative flex items-center">
          <Search className="absolute left-4 w-4 h-4 text-text-sage/60 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions or topics..."
            className="w-full pl-11 pr-10 py-3 rounded-2xl bg-panel-dark border border-brand-border text-text-cream text-xs sm:text-sm placeholder:text-text-sage/50 focus:outline-none focus:border-accent-gold/60 focus:ring-1 focus:ring-accent-gold/30 transition-all shadow-xs"
            id="faq-search-input"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 p-1 rounded-full text-text-sage/60 hover:text-text-cream hover:bg-panel-light transition-colors cursor-pointer"
              title="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Category Tabs & Expand/Collapse Controls */}
      <div className="space-y-4" id="faq-controls">
        <div className="flex flex-wrap justify-center gap-2" id="faq-tabs">
          {(['all', 'general', 'classes', 'payment'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
              }}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 border cursor-pointer ${
                activeCategory === cat
                  ? 'bg-accent-gold text-panel-dark border-accent-gold shadow-md'
                  : 'bg-panel-dark border-brand-border text-text-sage hover:text-text-cream hover:border-text-sage/30'
              }`}
              id={`faq-tab-btn-${cat}`}
            >
              {cat === 'all' && 'All Questions'}
              {cat === 'general' && 'General Info'}
              {cat === 'classes' && 'Classes & Formats'}
              {cat === 'payment' && 'Fees & Payments'}
            </button>
          ))}
        </div>

        {/* Status Bar & Bulk Expand / Collapse Buttons */}
        <div className="flex items-center justify-between text-xs text-text-sage pt-2 px-1 border-b border-brand-border/40 pb-3">
          <span className="font-mono text-[11px] text-text-sage/80">
            Showing <strong className="text-text-cream font-bold">{filteredFaqs.length}</strong> {filteredFaqs.length === 1 ? 'question' : 'questions'}
          </span>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={allVisibleAreExpanded ? handleCollapseAll : handleExpandAll}
              className="text-[11px] font-mono font-bold uppercase tracking-wider text-accent-gold hover:text-text-cream flex items-center gap-1 transition-colors cursor-pointer"
            >
              {allVisibleAreExpanded ? (
                <>
                  <Minus className="w-3 h-3" />
                  <span>Collapse All</span>
                </>
              ) : (
                <>
                  <Plus className="w-3 h-3" />
                  <span>Expand All</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Accordion FAQ List */}
      <section className="space-y-3.5" id="faq-accordion-list">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-12 px-4 rounded-2xl bg-panel-dark/40 border border-dashed border-brand-border space-y-3">
            <HelpCircle className="w-8 h-8 text-text-sage/40 mx-auto" />
            <p className="text-sm font-semibold text-text-cream">No matching questions found</p>
            <p className="text-xs text-text-sage max-w-sm mx-auto">
              Try searching with different keywords or switch categories above.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="mt-2 text-xs font-bold text-accent-gold underline hover:text-text-cream cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        ) : (
          filteredFaqs.map((faq) => {
            const isOpen = openIds.has(faq.id);
            return (
              <div 
                key={faq.id} 
                className={`bg-panel-dark border rounded-2xl overflow-hidden transition-all duration-300 shadow-sm ${
                  isOpen ? 'border-accent-gold/40 shadow-md ring-1 ring-accent-gold/20' : 'border-brand-border hover:border-accent-gold/30'
                }`}
                id={`faq-item-container-${faq.id}`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-text-cream font-medium hover:text-accent-gold transition-colors focus:outline-none cursor-pointer group"
                  aria-expanded={isOpen}
                  id={`faq-btn-${faq.id}`}
                >
                  <div className="pr-4 space-y-1">
                    <span className="serif-heading text-base sm:text-lg font-bold leading-snug block group-hover:text-accent-gold transition-colors">
                      {faq.question}
                    </span>
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-text-sage/60 inline-block bg-brand-border/30 px-2 py-0.5 rounded">
                      {faq.category === 'general' && 'General'}
                      {faq.category === 'classes' && 'Classes'}
                      {faq.category === 'payment' && 'Fees'}
                    </span>
                  </div>

                  <span className={`shrink-0 flex items-center justify-center rounded-xl w-8 h-8 sm:w-9 sm:h-9 transition-all duration-300 ${
                    isOpen 
                      ? 'rotate-180 bg-accent-gold text-panel-dark shadow-sm' 
                      : 'bg-brand-border/40 text-text-sage group-hover:text-accent-gold group-hover:bg-brand-border'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.25, 1, 0.5, 1] }}
                    >
                      <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-text-sage leading-relaxed border-t border-brand-border/40 bg-panel-light/30">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })
        )}
      </section>

      {/* Still Have Questions Footer CTA */}
      <section className="text-center p-8 rounded-2xl border border-dashed border-brand-border bg-panel-dark/40 space-y-5" id="faq-further-support">
        <h3 className="serif-heading text-lg font-bold text-text-cream">Still have questions?</h3>
        <p className="text-xs text-text-sage max-w-md mx-auto leading-relaxed">
          If your question isn't answered here, feel free to reach out to our admissions team directly. We're happy to guide you on your journey. <span className="font-semibold text-accent-gold">We reply within 24 hours.</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-2">
          <a
            href="https://wa.me/918145363290?text=Assalamu%20Alaikum%2C%20I%20have%20a%20general%20question%20regarding%20Qalbiya%20Islamic%20Institute."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-5 py-2.5 rounded-full inline-flex items-center gap-2 transition-colors cursor-pointer w-full sm:w-auto justify-center shadow-sm"
          >
            <MessageSquare className="w-4 h-4 fill-current text-white" />
            <span>Connect on WhatsApp</span>
          </a>
          <a
            href="https://instagram.com/qalbiya_institute"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-panel-dark hover:bg-panel-light text-text-cream border border-brand-border text-xs font-semibold px-5 py-2.5 rounded-full inline-flex items-center gap-2 transition-colors cursor-pointer w-full sm:w-auto justify-center"
          >
            <Instagram className="w-4 h-4 text-pink-500" />
            <span>DM on Instagram</span>
          </a>
        </div>
      </section>

    </div>
  );
};

