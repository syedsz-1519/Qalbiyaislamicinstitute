import React, { useState, useEffect, Suspense } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Route } from './types';
import { coursesData } from './data';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Homepage } from './components/Homepage';
import { AboutPage } from './components/AboutPage';
import { DhikrDuroodWidget } from './components/DhikrDuroodWidget';

// Lazy load heavy route components for code-splitting
const ProgramsHub = React.lazy(() => import('./components/ProgramsHub').then(m => ({ default: m.ProgramsHub })));
const FreeCoursesPage = React.lazy(() => import('./components/FreeCoursesPage').then(m => ({ default: m.FreeCoursesPage })));
const ScholarshipPage = React.lazy(() => import('./components/ScholarshipPage').then(m => ({ default: m.ScholarshipPage })));
const CourseDetailView = React.lazy(() => import('./components/CourseDetailView').then(m => ({ default: m.CourseDetailView })));
const ContactPage = React.lazy(() => import('./components/ContactPage').then(m => ({ default: m.ContactPage })));
const RefundPolicyPage = React.lazy(() => import('./components/RefundPolicyPage').then(m => ({ default: m.RefundPolicyPage })));
const TermsAndConditionsPage = React.lazy(() => import('./components/TermsAndConditionsPage').then(m => ({ default: m.TermsAndConditionsPage })));
const PrivacyPolicyPage = React.lazy(() => import('./components/PrivacyPolicyPage').then(m => ({ default: m.PrivacyPolicyPage })));
const FAQPage = React.lazy(() => import('./components/FAQPage').then(m => ({ default: m.FAQPage })));
const AsmaUlHusnaPage = React.lazy(() => import('./components/AsmaUlHusnaPage').then(m => ({ default: m.AsmaUlHusnaPage })));
const FivePillarsPage = React.lazy(() => import('./components/FivePillarsPage').then(m => ({ default: m.FivePillarsPage })));

// Loading fallback component
const RouteLoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center space-y-4">
      <div className="w-12 h-12 border-4 border-[#F3D797] border-t-[#78122B] rounded-full animate-spin mx-auto"></div>
      <p className="text-[#78122B] font-semibold">Loading...</p>
    </div>
  </div>
);

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<Route>('home');
  const [selectedCourseSlug, setSelectedCourseSlug] = useState<string | undefined>(undefined);
  const [scholarshipPreselectSlug, setScholarshipPreselectSlug] = useState<string | undefined>(undefined);
  const [activeModal, setActiveModal] = useState<'dhikr' | 'durood' | null>(null);

  // Helper to normalize any incoming route string (camelCase, kebab-case, or alias)
  const normalizeRouteName = (input: string): Route => {
    const clean = (input || '').toLowerCase().trim().replace(/^\/+|\/+$/g, '').replace(/^#\/?/, '');
    if (['asma-ul-husna', 'asmaulhusna', 'asma_ul_husna', '99names', '99-names', 'asma'].includes(clean)) return 'asmaUlHusna';
    if (['five-pillars', 'fivepillars', 'five_pillars', '5-pillars', '5pillars', 'pillars'].includes(clean)) return 'fivePillars';
    if (['free-courses', 'freecourses', 'free_courses', 'free'].includes(clean)) return 'freeCourses';
    if (['course-detail', 'coursedetail', 'course_detail', 'course'].includes(clean)) return 'courseDetail';
    if (['refund-policy', 'refundpolicy', 'refund_policy'].includes(clean)) return 'refundPolicy';
    if (['terms-and-conditions', 'termsandconditions', 'terms_and_conditions', 'terms'].includes(clean)) return 'termsAndConditions';
    if (['privacy-policy', 'privacypolicy', 'privacy_policy', 'privacy'].includes(clean)) return 'privacyPolicy';
    if (['sacred-knowledge', 'sacredknowledge', 'sacred'].includes(clean)) return 'sacredKnowledge';
    if (clean === 'about') return 'about';
    if (clean === 'women') return 'women';
    if (clean === 'kids') return 'kids';
    if (clean === 'scholarship') return 'scholarship';
    if (clean === 'contact') return 'contact';
    if (clean === 'faq') return 'faq';
    return 'home';
  };

  // Helper to construct clean URL path for SEO & shareable links (without '#')
  const getPathForRoute = (route: Route, courseSlug?: string): string => {
    switch (route) {
      case 'asmaUlHusna':
        return '/asma-ul-husna';
      case 'fivePillars':
        return '/five-pillars';
      case 'sacredKnowledge':
        return '/sacred-knowledge';
      case 'freeCourses':
        return '/free-courses';
      case 'courseDetail':
        return courseSlug ? `/course/${courseSlug}` : '/women';
      case 'refundPolicy':
        return '/refund-policy';
      case 'termsAndConditions':
        return '/terms-and-conditions';
      case 'privacyPolicy':
        return '/privacy-policy';
      case 'about':
        return '/about';
      case 'women':
        return '/women';
      case 'kids':
        return '/kids';
      case 'scholarship':
        return '/scholarship';
      case 'contact':
        return '/contact';
      case 'faq':
        return '/faq';
      case 'home':
      default:
        return '/';
    }
  };

  // Helper to parse current URL location (supporting clean paths and auto-migrating legacy '#' URLs)
  const parseUrlLocation = (): { route: Route; courseSlug?: string } => {
    const hash = window.location.hash || '';
    const path = window.location.pathname || '';
    let raw = '';

    // If legacy '#' hash exists in URL, strip it and prepare for clean path migration
    if (hash && hash !== '#/' && hash !== '#') {
      raw = hash.replace(/^#\/?/, '');
    } else {
      raw = path.replace(/^\//, '');
    }

    if (!raw || raw === '/') {
      return { route: 'home' };
    }

    if (raw.startsWith('course/')) {
      const slug = raw.split('course/')[1];
      return { route: 'courseDetail', courseSlug: slug };
    }

    const norm = normalizeRouteName(raw);
    return { route: norm };
  };

  // Initialize and sync route from browser URL location (History popstate & auto-clean legacy hashes)
  useEffect(() => {
    const syncFromUrl = () => {
      const { route, courseSlug } = parseUrlLocation();
      setCurrentRoute(route);
      if (courseSlug) {
        setSelectedCourseSlug(courseSlug);
      }

      // Auto-remove '#' from address bar if legacy hash URL was accessed
      const cleanPath = getPathForRoute(route, courseSlug);
      if (window.location.hash || window.location.pathname !== cleanPath) {
        window.history.replaceState(null, '', cleanPath);
      }
    };

    // Sync on initial load
    syncFromUrl();

    // Listen for back/forward browser navigation
    window.addEventListener('popstate', syncFromUrl);
    window.addEventListener('hashchange', syncFromUrl);
    return () => {
      window.removeEventListener('popstate', syncFromUrl);
      window.removeEventListener('hashchange', syncFromUrl);
    };
  }, []);

  // Resolve current active course
  const activeCourse = coursesData.find((c) => c.slug === selectedCourseSlug);

  // Dynamic Document Title and Meta Description for SEO & indexing
  useEffect(() => {
    let title = "Qalbiya Islamic Institute - Sacred Online Learning";
    let description = "Interactive, live online Islamic learning programs for women and kids, focusing on Quran, Tarbiyah, and classical sacred sciences under dedicated female mentorship.";

    if (currentRoute === 'courseDetail' && activeCourse) {
      title = `${activeCourse.title} - Qalbiya Islamic Institute`;
      description = `${activeCourse.sub || activeCourse.hook || ''} Join this live interactive online class at Qalbiya. Programs designed with high academic standards.`.substring(0, 155) + '...';
    } else {
      switch (currentRoute) {
        case 'about':
          title = "About Our Institute - Qalbiya Islamic Institute";
          description = "Discover the mission, core values, and dedicated female leadership behind Qalbiya Islamic Institute's online sacred learning space.";
          break;
        case 'women':
          title = "Women's Academic Hub - Qalbiya Islamic Institute";
          description = "Structured classical and interactive Islamic study programs designed specifically for sisters, covering Quran, Arabic, Fiqh, and spiritual development.";
          break;
        case 'kids':
          title = "Kids' Tarbiyah Classes - Qalbiya Islamic Institute";
          description = "Safe, engaging, and highly interactive live online Tarbiyah & Islamic lessons designed for kids to build strong character and basic sacred knowledge.";
          break;
        case 'freeCourses':
          title = "Free Sacred Lessons - Qalbiya Islamic Institute";
          description = "Access free weekly public lectures, short audio reflections, and essential Islamic study materials compiled by our scholars.";
          break;
        case 'scholarship':
          title = "Sponsor a Student & Financial Aid - Qalbiya Islamic Institute";
          description = "Support deserving female and young seekers of sacred knowledge or apply for our interactive program scholarships to study without financial barriers.";
          break;
        case 'contact':
          title = "Contact Us & WhatsApp Support - Qalbiya Islamic Institute";
          description = "Get in touch with Ms. Mustara and our admissions team. Connect directly via WhatsApp or Instagram DM for fast support.";
          break;
        case 'refundPolicy':
          title = "Refund Policy - Qalbiya Islamic Institute";
          description = "Read our official, transparent student satisfaction and refund guidelines for all paid courses at Qalbiya Islamic Institute.";
          break;
        case 'termsAndConditions':
          title = "Terms & Conditions - Qalbiya Islamic Institute";
          description = "View the official user terms, student code of conduct, and academy guidelines governing our interactive online learning platform.";
          break;
        case 'privacyPolicy':
          title = "Privacy Policy - Qalbiya Islamic Institute";
          description = "Understand how we collect, store, and carefully protect student data and details under our robust private hosting guidelines.";
          break;
        case 'faq':
          title = "Frequently Asked Questions (FAQ) - Qalbiya Islamic Institute";
          description = "Get answers to student questions regarding Google Meet schedules, course recordings, class materials, payments, and batch timings.";
          break;
        case 'asmaUlHusna':
        case 'sacredKnowledge':
          title = "Asma Ul Husna (99 Names of Allah) - Qalbiya Islamic Institute";
          description = "Explore the 99 Beautiful Names of Allah (Asma Ul Husna). Reflect on divine attributes, translations, and daily invocations.";
          break;
        case 'fivePillars':
          title = "The 5 Pillars of Islam - Qalbiya Islamic Institute";
          description = "Explore the 5 Foundational Pillars of Islam: Shahadah, Salah, Zakat, Sawm, and Hajj. Discover practical daily guidance and spiritual wisdom.";
          break;
        default:
          break;
      }
    }

    // Apply document title
    document.title = title;

    // Apply meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);
  }, [currentRoute, activeCourse]);

  const handleNavigate = (route: string | Route, courseSlug?: string, sacredTab?: 'asma-ul-husna' | 'pillars' | 'all') => {
    let targetRoute = normalizeRouteName(route as string);

    if (route === 'sacred-knowledge' || route === 'sacredKnowledge') {
      if (sacredTab === 'pillars') {
        targetRoute = 'fivePillars';
      } else {
        targetRoute = 'asmaUlHusna';
      }
    }

    setCurrentRoute(targetRoute);

    if (courseSlug) {
      setSelectedCourseSlug(courseSlug);
    } else if (targetRoute !== 'courseDetail') {
      setSelectedCourseSlug(undefined);
    }

    // Update clean URL path without '#'
    const newPath = getPathForRoute(targetRoute, courseSlug);
    if (window.location.pathname !== newPath || window.location.hash) {
      window.history.pushState(null, '', newPath);
    }

    // Scroll to top for seamless transitions
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCourse = (slug: string) => {
    setSelectedCourseSlug(slug);
    setCurrentRoute('courseDetail');
    window.history.pushState(null, '', `/course/${slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToScholarshipFromCourse = () => {
    if (selectedCourseSlug) {
      setScholarshipPreselectSlug(selectedCourseSlug);
    }
    handleNavigate('scholarship');
  };

  const renderActiveScreen = () => {
    switch (currentRoute) {
      case 'home':
        return (
          <Homepage 
            courses={coursesData} 
            onNavigate={handleNavigate} 
            onSelectCourse={handleSelectCourse} 
          />
        );
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'women':
        return (
          <Suspense fallback={<RouteLoadingFallback />}>
            <ProgramsHub 
              category="women" 
              courses={coursesData} 
              onSelectCourse={handleSelectCourse} 
              onNavigate={handleNavigate} 
            />
          </Suspense>
        );
      case 'kids':
        return (
          <Suspense fallback={<RouteLoadingFallback />}>
            <ProgramsHub 
              category="kids" 
              courses={coursesData} 
              onSelectCourse={handleSelectCourse} 
              onNavigate={handleNavigate} 
            />
          </Suspense>
        );
      case 'freeCourses':
        return (
          <Suspense fallback={<RouteLoadingFallback />}>
            <FreeCoursesPage />
          </Suspense>
        );
      case 'scholarship':
        return (
          <Suspense fallback={<RouteLoadingFallback />}>
            <ScholarshipPage 
              courses={coursesData} 
              initialCourseSlug={scholarshipPreselectSlug} 
            />
          </Suspense>
        );
      case 'contact':
        return (
          <Suspense fallback={<RouteLoadingFallback />}>
            <ContactPage />
          </Suspense>
        );
      case 'refundPolicy':
        return (
          <Suspense fallback={<RouteLoadingFallback />}>
            <RefundPolicyPage />
          </Suspense>
        );
      case 'termsAndConditions':
        return (
          <Suspense fallback={<RouteLoadingFallback />}>
            <TermsAndConditionsPage onNavigate={handleNavigate} />
          </Suspense>
        );
      case 'privacyPolicy':
        return (
          <Suspense fallback={<RouteLoadingFallback />}>
            <PrivacyPolicyPage />
          </Suspense>
        );
      case 'faq':
        return (
          <Suspense fallback={<RouteLoadingFallback />}>
            <FAQPage onNavigate={handleNavigate} />
          </Suspense>
        );
      case 'asmaUlHusna':
      case 'sacredKnowledge':
        return (
          <Suspense fallback={<RouteLoadingFallback />}>
            <AsmaUlHusnaPage onNavigate={handleNavigate} />
          </Suspense>
        );
      case 'fivePillars':
        return (
          <Suspense fallback={<RouteLoadingFallback />}>
            <FivePillarsPage onNavigate={handleNavigate} />
          </Suspense>
        );
      case 'courseDetail':
        if (activeCourse) {
          return (
            <Suspense fallback={<RouteLoadingFallback />}>
              <CourseDetailView 
                course={activeCourse} 
                onBack={() => handleNavigate(activeCourse.category)} 
                onNavigateToScholarship={handleNavigateToScholarshipFromCourse}
              />
            </Suspense>
          );
        }
        return (
          <Homepage 
            courses={coursesData} 
            onNavigate={handleNavigate} 
            onSelectCourse={handleSelectCourse} 
          />
        );
      default:
        return (
          <Homepage 
            courses={coursesData} 
            onNavigate={handleNavigate} 
            onSelectCourse={handleSelectCourse} 
          />
        );
    }
  };

  const isKids = currentRoute === 'kids';

  return (
    <div className="flex min-h-screen flex-col bg-bg-deep text-text-cream selection:bg-accent-gold/20 selection:text-accent-gold transition-colors duration-500">
      
      {/* Universal Header with responsive links */}
      <Header currentRoute={currentRoute} onNavigate={handleNavigate} selectedCourseSlug={selectedCourseSlug} />

      {/* Main Content Stage with transition animations */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentRoute + (selectedCourseSlug || '')}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="w-full"
            id={`stage-${currentRoute}`}
          >
            {renderActiveScreen()}
          </motion.div>
        </AnimatePresence>
      </main>
      
      {/* Universal Footer */}
      <Footer onNavigate={handleNavigate} currentRoute={currentRoute} />

      {/* Dhikr & Durood Modals with Dropup Menu */}
      <DhikrDuroodWidget activeModal={activeModal} setActiveModal={setActiveModal} />

    </div>
  );
}
