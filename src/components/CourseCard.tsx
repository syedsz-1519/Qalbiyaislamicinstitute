import React, { useRef, useState } from 'react';
import { Calendar, Layers, Clock, ArrowRight } from 'lucide-react';
import { Course } from '../types';
import { motion } from 'motion/react';

interface CourseCardProps {
  course: Course;
  onSelect: (slug: string) => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, onSelect }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect if device is mobile/tablet for optimized interactions
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Disable 3D effects on mobile for better performance and battery life
    if (isMobile || !cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate mouse position relative to the center of the card
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    // Reduced tilt for smoother performance (4deg instead of 6deg)
    const rY = (mouseX / (width / 2)) * 4;
    const rX = -(mouseY / (height / 2)) * 4;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseEnter = () => {
    if (!isMobile) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsHovered(false);
      setRotateX(0);
      setRotateY(0);
    }
  };

  // Touch handlers for mobile smooth interactions
  const handleTouchStart = () => {
    if (isMobile) setIsHovered(true);
  };

  const handleTouchEnd = () => {
    if (isMobile) {
      setTimeout(() => setIsHovered(false), 200);
    }
  };

  return (
    <motion.div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      animate={{
        rotateX: isHovered && !isMobile ? rotateX : 0,
        rotateY: isHovered && !isMobile ? rotateY : 0,
        scale: isHovered ? (isMobile ? 1.02 : 1.025) : 1,
      }}
      transition={{
        type: "spring",
        stiffness: isMobile ? 300 : 400,
        damping: isMobile ? 30 : 25,
        mass: 0.4,
      }}
      style={{
        transformStyle: isMobile ? "flat" : "preserve-3d",
        perspective: isMobile ? "none" : 1200,
      }}
      className="group flex flex-col h-full rounded-2xl border border-[#E8DDD9] bg-white overflow-hidden shadow-sm transition-all duration-300 hover:border-[#78122B] hover:shadow-xl touch-manipulation"
      id={`course-card-${course.slug}`}
    >
      {/* Course Thumbnail Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-[#FAF8F5] to-[#F3D797]/20 border-b border-[#E8DDD9]">
        {course.badge && (
          <div 
            className="absolute top-3 left-3 z-10 rounded-full bg-[#78122B] px-3 py-1 text-[11px] font-extrabold tracking-wider text-white uppercase shadow-lg border border-[#78122B] backdrop-blur-sm"
            id={`course-badge-${course.slug}`}
          >
            {course.badge}
          </div>
        )}

        {/* Online Presence Indicator Overlay */}
        <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 rounded-full bg-slate-900/85 px-2.5 py-1 text-white border border-white/20 backdrop-blur-sm shadow-lg">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-sm" />
          <span className="text-[9px] font-extrabold uppercase tracking-widest text-[#F9E8EC]">Live Online</span>
        </div>
        
        <img
          src={course.image}
          alt={course.title}
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-105 group-hover:saturate-110 filter brightness-100 contrast-105"
          style={{ 
            filter: 'contrast(1.05) saturate(1.1) brightness(1.02)',
            imageRendering: 'high-quality'
          }}
          id={`course-img-${course.slug}`}
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent group-hover:from-black/40 transition-all duration-300" />
        
        {/* Enhanced hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#78122B]/0 via-transparent to-[#78122B]/0 group-hover:from-[#78122B]/10 group-hover:to-[#630E23]/5 transition-all duration-500" />
      </div>

      {/* Content Area */}
      <div className="flex flex-col flex-1 p-6 space-y-4 bg-white">
        <div className="space-y-1.5">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#78122B]">
            {course.category === 'women' ? "Women's Courses" : "Kids' Courses"}
          </span>
          <h3 
            className="serif-heading text-xl font-bold leading-snug text-[#23181A] group-hover:text-[#78122B] transition-colors duration-300"
            id={`course-title-${course.slug}`}
          >
            {course.title}
          </h3>
          <p className="text-sm italic font-medium text-[#5C4D50] line-clamp-2">
            "{course.hook}"
          </p>
        </div>

        {/* Quick Facts Grid */}
        <div className="grid grid-cols-2 gap-3.5 py-3 border-y border-[#E8DDD9] text-xs text-[#5C4D50]">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-[#78122B] shrink-0" />
            <span className="truncate">{course.duration}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Layers className="w-4 h-4 text-[#78122B] shrink-0" />
            <span className="truncate">{course.courseDetails['Format'] || 'Google Meet'}</span>
          </div>
          <div className="col-span-2 flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-[#78122B] shrink-0" />
            <span className="truncate font-semibold text-[#78122B]">
              {course.price} <span className="text-[10px] font-normal text-[#5C4D50]">/{course.priceDetail}</span>
            </span>
          </div>
        </div>

        {/* Enhanced CTA Actions for Mobile & Desktop */}
        <div className="mt-auto pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-0">
          <motion.button
            onClick={() => onSelect(course.slug)}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center space-x-1.5 text-xs font-semibold uppercase tracking-wider text-[#78122B] hover:text-[#630E23] group/btn transition-colors duration-300 min-h-[44px] sm:min-h-0 py-3 sm:py-1 px-4 sm:px-0 rounded-xl sm:rounded-none bg-[#78122B]/5 sm:bg-transparent hover:bg-[#78122B]/10 sm:hover:bg-transparent cursor-pointer"
            id={`course-card-details-btn-${course.slug}`}
          >
            <span>Read Sacred Overview</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </motion.button>

          <motion.a
            href={`https://wa.me/918145363290?text=Assalamu%20Alaikum%20Ms.%20Mustara%2C%20I%20am%20sincerely%20interested%20in%20registering%20for%20the%20${encodeURIComponent(course.title)}.`}
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.95 }}
            className="inline-flex h-12 sm:h-9 items-center justify-center rounded-xl bg-[#78122B] hover:bg-[#630E23] active:bg-[#540B1D] border border-[#78122B] px-4 sm:px-3.5 text-xs font-semibold text-white transition-all duration-300 hover:shadow-lg active:shadow-sm cursor-pointer touch-manipulation"
            id={`course-card-wa-btn-${course.slug}`}
          >
            <span>Enroll Now</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};
