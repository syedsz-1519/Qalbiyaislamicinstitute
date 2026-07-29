import React, { useRef, useState, useMemo, useEffect } from 'react';
import { motion } from 'motion/react';
import { Heart, BookOpen, MessageCircle, Instagram, ArrowRight, Quote, SlidersHorizontal, Check, X, Search, Users, User, Clock, RotateCcw, HelpCircle, ChevronRight, GraduationCap } from 'lucide-react';
import { Course, Route } from '../types';
import { ShareButton } from './ShareButton';

interface ProgramsHubProps {
  category: 'women' | 'kids';
  courses: Course[];
  onSelectCourse: (slug: string) => void;
  onNavigate: (route: Route) => void;
}

const getCourseFormats = (course: Course): ('1-on-1' | 'Group')[] => {
  const formatStr = course.courseDetails['Format'] || '';
  const formats: ('1-on-1' | 'Group')[] = [];
  if (formatStr.toLowerCase().includes('1-on-1') || formatStr.toLowerCase().includes('personal') || formatStr.toLowerCase().includes('private')) {
    formats.push('1-on-1');
  }
  if (formatStr.toLowerCase().includes('group')) {
    formats.push('Group');
  }
  return formats;
};

interface CourseFilterBarProps {
  category: 'women' | 'kids';
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  selectedFormats: ('1-on-1' | 'Group')[];
  onToggleFormat: (format: '1-on-1' | 'Group') => void;
  availableDurations: string[];
  selectedDurations: string[];
  onToggleDuration: (duration: string) => void;
  onReset: () => void;
  totalCount: number;
  filteredCount: number;
}

const CourseFilterBar: React.FC<CourseFilterBarProps> = ({
  category,
  searchQuery,
  setSearchQuery,
  selectedFormats,
  onToggleFormat,
  availableDurations,
  selectedDurations,
  onToggleDuration,
  onReset,
  totalCount,
  filteredCount,
}) => {
  const isKids = category === 'kids';
  const hasActiveFilters = selectedFormats.length > 0 || selectedDurations.length > 0 || searchQuery.trim() !== '';

  return (
    <div className={`rounded-2xl border p-5 sm:p-6 transition-all duration-300 ${
      isKids 
        ? 'bg-[#FDF8F5] border-[#E8DDD9] text-[#23181A] shadow-xs' 
        : 'bg-white border-[#E8DDD9] text-[#23181A] shadow-xs'
    }`}>
      {/* Top Header & Search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#E8DDD9]">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className={`w-4 h-4 ${isKids ? 'text-[#8E4B59]' : 'text-[#78122B]'}`} />
            <h3 className="font-serif text-base sm:text-lg font-bold text-[#23181A]">
              Filter Programs
            </h3>
          </div>
          <p className="text-xs text-[#5C4D50]">
            Narrow down programs by format, duration, or keyword.
          </p>
        </div>

        {/* Search Box */}
        <div className="relative w-full md:w-64 shrink-0">
          <Search className={`absolute left-3.5 top-2.5 w-4 h-4 ${isKids ? 'text-[#8E4B59]' : 'text-[#78122B]'}`} />
          <input
            type="text"
            placeholder="Search programs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-8 py-2 text-xs sm:text-sm rounded-xl border border-[#E8DDD9] bg-white text-[#23181A] placeholder-[#5C4D50]/60 focus:outline-none focus:border-[#78122B] transition-all"
            id="hub-filter-search-input"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-2.5 text-[#5C4D50] hover:text-[#23181A] cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Filter Sections Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-4">
        {/* Format Filter Group */}
        <div className="space-y-2">
          <span className={`text-[11px] font-extrabold uppercase tracking-wider flex items-center gap-1.5 ${isKids ? 'text-[#8E4B59]' : 'text-[#78122B]'}`}>
            <Users className="w-3.5 h-3.5" />
            <span>Format</span>
          </span>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => onToggleFormat('1-on-1')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedFormats.includes('1-on-1')
                  ? 'bg-[#78122B] text-white'
                  : 'bg-[#FAF8F5] hover:bg-[#F9E8EC] text-[#5C4D50] border border-[#E8DDD9]'
              }`}
              id="filter-btn-format-1-on-1"
            >
              <User className="w-3.5 h-3.5 shrink-0" />
              <span>1 on 1 Private</span>
              {selectedFormats.includes('1-on-1') && <Check className="w-3.5 h-3.5 shrink-0" />}
            </button>

            <button
              onClick={() => onToggleFormat('Group')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedFormats.includes('Group')
                  ? 'bg-[#78122B] text-white'
                  : 'bg-[#FAF8F5] hover:bg-[#F9E8EC] text-[#5C4D50] border border-[#E8DDD9]'
              }`}
              id="filter-btn-format-group"
            >
              <Users className="w-3.5 h-3.5 shrink-0" />
              <span>Group Class</span>
              {selectedFormats.includes('Group') && <Check className="w-3.5 h-3.5 shrink-0" />}
            </button>
          </div>
        </div>

        {/* Duration Filter Group */}
        <div className="space-y-2">
          <span className={`text-[11px] font-extrabold uppercase tracking-wider flex items-center gap-1.5 ${isKids ? 'text-[#8E4B59]' : 'text-[#78122B]'}`}>
            <Clock className="w-3.5 h-3.5" />
            <span>Duration</span>
          </span>
          <div className="flex flex-wrap gap-2">
            {availableDurations.map((dur) => {
              const isSelected = selectedDurations.includes(dur);
              return (
                <button
                  key={dur}
                  onClick={() => onToggleDuration(dur)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#78122B] text-white'
                      : 'bg-[#FAF8F5] hover:bg-[#F9E8EC] text-[#5C4D50] border border-[#E8DDD9]'
                  }`}
                  id={`filter-btn-duration-${dur.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                >
                  <Clock className="w-3.5 h-3.5 shrink-0" />
                  <span>{dur}</span>
                  {isSelected && <Check className="w-3.5 h-3.5 shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Active Filters & Results Count */}
      <div className="mt-4 pt-3 border-t border-[#E8DDD9] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-[#23181A]">
            Showing <span className="text-[#78122B] font-bold">{filteredCount}</span> of {totalCount} programs
          </span>
        </div>

        {hasActiveFilters && (
          <button
            onClick={onReset}
            className="inline-flex items-center gap-1 font-bold text-[#78122B] hover:underline cursor-pointer"
            id="btn-reset-all-filters"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Filters</span>
          </button>
        )}
      </div>
    </div>
  );
};

export const ProgramsHub: React.FC<ProgramsHubProps> = ({ 
  category, 
  courses, 
  onSelectCourse,
  onNavigate 
}) => {
  const filteredCourses = useMemo(() => {
    return courses.filter(c => c.category === category);
  }, [courses, category]);

  const coursesRef = useRef<HTMLDivElement>(null);

  const [selectedFormats, setSelectedFormats] = useState<('1-on-1' | 'Group')[]>([]);
  const [selectedDurations, setSelectedDurations] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setSelectedFormats([]);
    setSelectedDurations([]);
    setSearchQuery('');
  }, [category]);

  const availableDurations = useMemo(() => {
    return Array.from(new Set(filteredCourses.map(c => c.duration)));
  }, [filteredCourses]);

  const handleToggleFormat = (format: '1-on-1' | 'Group') => {
    setSelectedFormats(prev => 
      prev.includes(format) ? prev.filter(f => f !== format) : [...prev, format]
    );
  };

  const handleToggleDuration = (duration: string) => {
    setSelectedDurations(prev => 
      prev.includes(duration) ? prev.filter(d => d !== duration) : [...prev, duration]
    );
  };

  const handleResetFilters = () => {
    setSelectedFormats([]);
    setSelectedDurations([]);
    setSearchQuery('');
  };

  const displayedCourses = useMemo(() => {
    return filteredCourses.filter(course => {
      if (selectedFormats.length > 0) {
        const courseFormats = getCourseFormats(course);
        const matchesFormat = selectedFormats.some(f => courseFormats.includes(f));
        if (!matchesFormat) return false;
      }
      if (selectedDurations.length > 0) {
        if (!selectedDurations.includes(course.duration)) return false;
      }
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase().trim();
        const matchesQuery = 
          course.title.toLowerCase().includes(query) ||
          course.hook.toLowerCase().includes(query) ||
          course.sub.toLowerCase().includes(query) ||
          course.badge.toLowerCase().includes(query);
        if (!matchesQuery) return false;
      }
      return true;
    });
  }, [filteredCourses, selectedFormats, selectedDurations, searchQuery]);

  const isKids = category === 'kids';

  return (
    <div className="bg-[#FAF8F5] text-[#23181A] min-h-screen pb-20">
      
      {/* Breadcrumb Navigation Header */}
      <div className="bg-white border-b border-[#E8DDD9] py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <div className="flex items-center space-x-2 text-xs font-medium text-[#5C4D50]">
            <button 
              onClick={() => onNavigate('home')} 
              className="hover:text-[#78122B] transition-colors cursor-pointer"
              id="breadcrumb-home"
            >
              Homepage
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-[#5C4D50]/60 shrink-0" />
            <span className="font-bold text-[#78122B]">
              {isKids ? "Kids' Programs" : "Women's Programs"}
            </span>
          </div>

          <ShareButton 
            title={isKids ? "Kids' Tarbiyah & Qur'an Programs - Qalbiya Institute" : "Women's Islamic Programs - Qalbiya Institute"}
            text={isKids ? "Raise a child who doesn't just know their deen, who loves it. Explore kids' programs at Qalbiya." : "Every woman's journey back to Allah looks different. Explore 1 on 1 and group courses at Qalbiya."}
            variant="compact"
            lightTheme
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="text-center pt-12 md:pt-16 pb-10 px-4 space-y-5" id="hub-hero">
        <span className={`inline-block font-sans text-xs font-extrabold tracking-widest uppercase px-3.5 py-1 rounded-full border ${
          isKids 
            ? 'bg-[#F9E8EC] text-[#8E4B59] border-[#8E4B59]/20' 
            : 'bg-[#F9E8EC] text-[#78122B] border-[#78122B]/20'
        }`}>
          {isKids ? "KIDS' TARBIYAH HUB" : "WOMEN'S SACRED HUB"}
        </span>

        <h1 className="serif-heading text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#23181A] max-w-4xl mx-auto tracking-tight">
          {isKids 
            ? "Raise a child who doesn't just know their deen, who loves it."
            : "Every woman's journey back to Allah looks different. Here's yours."}
        </h1>
        
        <p className="max-w-2xl mx-auto text-sm sm:text-base leading-relaxed text-[#5C4D50] font-medium">
          {isKids
            ? "Age appropriate, structured, and rooted in authentic teaching, built for children ages 6 to 12."
            : "Whether you're correcting your recitation, healing your character, or building your foundation from the ground up, there's a program made for exactly where you are."}
        </p>
      </section>

      {/* Course Cards Grid Section */}
      <section ref={coursesRef} className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-8" id="hub-courses-grid">
        
        {/* Filter Bar */}
        <CourseFilterBar
          category={category}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedFormats={selectedFormats}
          onToggleFormat={handleToggleFormat}
          availableDurations={availableDurations}
          selectedDurations={selectedDurations}
          onToggleDuration={handleToggleDuration}
          onReset={handleResetFilters}
          totalCount={filteredCourses.length}
          filteredCount={displayedCourses.length}
        />

        {/* Empty State */}
        {displayedCourses.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-[#E8DDD9] space-y-4 max-w-2xl mx-auto p-6">
            <HelpCircle className="w-10 h-10 text-[#78122B] mx-auto" />
            <h4 className="font-serif text-lg font-bold text-[#23181A]">No programs match your selected filters</h4>
            <p className="text-xs text-[#5C4D50]">
              Try clearing search terms or selecting different filters to explore available programs.
            </p>
            <button
              onClick={handleResetFilters}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#78122B] text-white font-semibold text-xs transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          </div>
        ) : (
          /* Cards Grid: Responsive 2-column layout for all */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full min-h-[400px]">
            {displayedCourses.map((course) => {
              return (
                <div 
                  key={course.slug}
                  className="bg-white rounded-2xl border border-[#E8DDD9] overflow-hidden shadow-xs hover:shadow-xl hover:border-[#78122B] transition-all duration-300 flex flex-col justify-between group"
                  id={`hub-course-card-${course.slug}`}
                >
                  {/* Thumbnail Image */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#FAF8F5] border-b border-[#E8DDD9]">
                    {course.badge && (
                      <span className="absolute top-3 left-3 z-10 rounded-full bg-[#78122B] px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-xs">
                        {course.badge}
                      </span>
                    )}

                    <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 rounded-full bg-slate-900/80 px-2.5 py-1 text-white text-[9px] font-extrabold uppercase tracking-widest backdrop-blur-xs border border-white/20 shadow-xs">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Live Online</span>
                    </div>

                    <img
                      src={course.image}
                      alt={course.title}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  </div>

                  {/* Card Main Body */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs font-semibold text-[#5C4D50]">
                        <span className="inline-flex items-center gap-1 text-[#78122B] font-bold">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{course.duration}</span>
                        </span>
                        <span className="font-bold text-[#23181A]">
                          From {course.price}{course.priceDetail && !course.priceDetail.includes('course') ? `/${course.priceDetail.replace('per ', '')}` : ''}
                        </span>
                      </div>

                      <h2 className="serif-heading text-xl sm:text-2xl font-bold text-[#23181A] group-hover:text-[#78122B] transition-colors">
                        {course.title}
                      </h2>

                      <p className="text-sm font-semibold italic text-[#78122B]">
                        "{course.hook}"
                      </p>

                      <p className="text-xs sm:text-sm text-[#5C4D50] leading-relaxed line-clamp-3">
                        {course.sub}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="pt-4 border-t border-[#E8DDD9] flex items-center justify-between gap-3">
                      <button
                        onClick={() => onSelectCourse(course.slug)}
                        className="inline-flex h-11 items-center justify-center rounded-xl bg-[#78122B] hover:bg-[#630E23] px-5 text-xs font-bold uppercase tracking-wider text-white transition-all shadow-xs cursor-pointer group/btn"
                        id={`btn-view-program-${course.slug}`}
                      >
                        <span>View Program</span>
                        <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover/btn:translate-x-1" />
                      </button>

                      <a
                        href={`https://wa.me/918145363290?text=Assalamu%20Alaikum%2C%20I%20am%20interested%20in%20learning%20more%20about%20the%20${encodeURIComponent(course.title)}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-11 items-center justify-center rounded-xl border border-[#78122B] hover:bg-[#F9E8EC] px-4 text-xs font-bold text-[#78122B] transition-colors"
                        id={`btn-wa-query-${course.slug}`}
                      >
                        Ask Question
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Closing Guidance / Contact Banner */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-16" id="hub-closing-section">
        <div className="rounded-3xl border border-[#E8DDD9] bg-white p-8 sm:p-10 text-center space-y-6 shadow-sm">
          <div className="space-y-2">
            <h3 className="serif-heading text-2xl sm:text-3xl font-bold text-[#23181A]">
              {isKids 
                ? "Give your child a foundation that grows with them, in knowledge, in akhlaq, and in love for their deen."
                : "Not sure which one is right for you? Message us, we'll help you find your starting point."}
            </h3>
            <p className="text-xs sm:text-sm text-[#5C4D50] max-w-xl mx-auto">
              Our team is available to answer any questions, evaluate your current reading level, and recommend the best starting path.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            {/* WhatsApp Us Button */}
            <a
              href={isKids 
                ? "https://wa.me/918145363290?text=Assalamu%20Alaikum%2C%20I%20am%20looking%20for%20guidance%20on%20choosing%20a%20Kids%27%20program."
                : "https://wa.me/918145363290?text=Assalamu%20Alaikum%2C%20I%20am%20looking%20for%20guidance%20on%20choosing%20a%20Women%27s%20program."}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 text-sm font-bold shadow-xs transition-all gap-2"
              id="hub-closing-whatsapp-btn"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp Us</span>
            </a>

            {/* DM on Instagram Button */}
            <a
              href="https://instagram.com/qalbiya_institute"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-xl bg-[#E1306C] hover:bg-[#c9245a] text-white px-6 text-sm font-bold shadow-xs transition-all gap-2"
              id="hub-closing-instagram-btn"
            >
              <Instagram className="w-4 h-4" />
              <span>DM on Instagram</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
