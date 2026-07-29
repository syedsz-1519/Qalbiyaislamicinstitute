import React from 'react';
import { Calendar, Video, Heart, Sparkles, Send, BookOpen, Gift } from 'lucide-react';
import { Instagram } from './InstagramIcon';
import { Route } from '../types';
import { ShareButton } from './ShareButton';

interface FreeCoursesPageProps {
  onNavigate?: (route: Route) => void;
}

export const FreeCoursesPage: React.FC<FreeCoursesPageProps> = () => {
  return (
    <div className="space-y-16 sm:space-y-20 pb-20 max-w-5xl mx-auto px-4 sm:px-6">
      
      {/* Hero Section */}
      <section className="text-center space-y-5 pt-8 sm:pt-12">
        <div className="flex items-center justify-center gap-3">
          <div className="inline-flex items-center space-x-2 rounded-full border border-accent-gold/30 bg-accent-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-gold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Knowledge & Spiritual Nurturing for All</span>
          </div>
          <ShareButton 
            title="Free Courses & Weekly Tarbiyah Circles - Qalbiya Institute"
            text="Join Qalbiya's free weekly Tarbiyah circles and open learning sessions. Knowledge and tazkiyah for everyone."
            variant="compact"
          />
        </div>
        <h1 className="serif-heading text-3xl sm:text-5xl font-bold text-text-cream tracking-tight max-w-3xl mx-auto leading-tight">
          Some things are too important to have a price on them.
        </h1>
        <p className="max-w-2xl mx-auto text-sm sm:text-base leading-relaxed text-text-sage">
          Qalbiya Islamic Institute offers free sessions and courses to make sure knowledge, tarbiyah, and tazkiyah are never out of reach.
        </p>
      </section>

      {/* Main Free Offerings Section */}
      <section className="space-y-10" id="free-offerings-container">
        
        {/* Offering 1 — Weekly Tarbiyah & Tazkiyah Sessions */}
        <div className="rounded-3xl border border-brand-border bg-panel-dark/80 p-6 sm:p-10 shadow-xl space-y-6 hover:border-accent-gold/30 transition-all duration-300">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-brand-border/60 pb-5">
            <div className="flex items-center space-x-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-gold/10 text-accent-gold border border-accent-gold/20">
                <Heart className="w-5 h-5 text-rose-400" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-md border border-emerald-500/20">
                  Free Weekly Circle
                </span>
                <h2 className="serif-heading text-xl sm:text-2xl font-bold text-text-cream mt-1">
                  Tarbiyah & Tazkiyah Sessions
                </h2>
              </div>
            </div>
            <span className="text-xs font-semibold text-accent-gold bg-panel-light px-3 py-1.5 rounded-full border border-brand-border">
              Fee: 100% Free
            </span>
          </div>

          <p className="text-xs sm:text-sm leading-relaxed text-text-sage">
            A weekly free session focused on purifying the heart and nurturing real character, because knowledge without tarbiyah is incomplete.
          </p>

          {/* Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-2xl bg-bg-deep/70 border border-brand-border/60 text-xs">
            <div className="flex items-center space-x-3">
              <Calendar className="w-4 h-4 text-accent-gold shrink-0" />
              <div>
                <span className="text-text-sage/60 text-[10px] uppercase font-bold tracking-wider block">Frequency</span>
                <span className="font-semibold text-text-cream">Weekly</span>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Video className="w-4 h-4 text-accent-gold shrink-0" />
              <div>
                <span className="text-text-sage/60 text-[10px] uppercase font-bold tracking-wider block">Platform</span>
                <span className="font-semibold text-text-cream">Google Meet</span>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
              <div>
                <span className="text-text-sage/60 text-[10px] uppercase font-bold tracking-wider block">Fee</span>
                <span className="font-bold text-emerald-400">Free</span>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/918145363290?text=Assalamu%20Alaikum%20Ms.%20Mustara%2C%20I%20would%20like%20to%20join%20the%20free%20weekly%20Tarbiyah%20and%20Tazkiyah%20sessions."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center space-x-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-bg-deep px-5 py-3 text-xs font-bold uppercase tracking-wider transition-all duration-300"
              id="cta-tarbiyah-wa"
            >
              <Send className="w-4 h-4" />
              <span>Join Next Session → WhatsApp Us</span>
            </a>

            <a
              href="https://www.instagram.com/qalbiya.institute/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 rounded-xl border border-brand-border hover:border-accent-gold/40 bg-panel-light px-5 py-3 text-xs font-bold uppercase tracking-wider text-text-cream transition-all duration-300"
              id="cta-tarbiyah-ig"
            >
              <Instagram className="w-4 h-4 text-rose-400" />
              <span>DM on Instagram</span>
            </a>
          </div>
        </div>

        {/* Offering 2 — Arabic Calligraphy Course (Free, Limited-Time) */}
        <div className="rounded-3xl border border-accent-gold/40 bg-panel-dark p-6 sm:p-10 shadow-2xl space-y-6 relative overflow-hidden">
          
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-brand-border/60 pb-5">
            <div className="flex items-center space-x-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-gold/20 text-accent-gold border border-accent-gold/30">
                <BookOpen className="w-5 h-5 text-accent-gold" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-accent-gold bg-accent-gold/15 px-2.5 py-0.5 rounded-md border border-accent-gold/20 animate-pulse">
                    Starting August 1st · Limited Time
                  </span>
                </div>
                <h2 className="serif-heading text-xl sm:text-2xl font-bold text-text-cream mt-1">
                  Arabic Calligraphy Course
                </h2>
              </div>
            </div>
            <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
              Fee: Free
            </span>
          </div>

          <p className="text-xs sm:text-sm leading-relaxed text-text-sage">
            A free, one month course to learn the art of Arabic calligraphy, starting soon and open to all.
          </p>

          {/* Details Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-bg-deep/70 border border-brand-border/60 text-xs">
            <div className="space-y-1">
              <span className="text-text-sage/60 text-[10px] uppercase font-bold tracking-wider block">Start Date</span>
              <span className="font-bold text-accent-gold">August 1st</span>
            </div>

            <div className="space-y-1">
              <span className="text-text-sage/60 text-[10px] uppercase font-bold tracking-wider block">Duration</span>
              <span className="font-semibold text-text-cream">1 month</span>
            </div>

            <div className="space-y-1">
              <span className="text-text-sage/60 text-[10px] uppercase font-bold tracking-wider block">Class Timing</span>
              <span className="font-semibold text-text-cream">4:00 PM IST, daily except Friday</span>
            </div>

            <div className="space-y-1">
              <span className="text-text-sage/60 text-[10px] uppercase font-bold tracking-wider block">Platform</span>
              <span className="font-semibold text-text-cream">Zoom</span>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/918145363290?text=Assalamu%20Alaikum%20Ms.%20Mustara%2C%20I%20would%20like%20to%20reserve%20a%20spot%20for%20the%20free%20Arabic%20Calligraphy%20Course%20starting%20August%201st."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center space-x-2 rounded-xl bg-accent-gold hover:bg-accent-gold-light text-bg-deep px-5 py-3.5 text-xs font-bold uppercase tracking-wider transition-all duration-300"
              id="cta-calligraphy-wa"
            >
              <Send className="w-4 h-4" />
              <span>Reserve Your Spot → WhatsApp Us</span>
            </a>

            <a
              href="https://www.instagram.com/qalbiya.institute/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 rounded-xl border border-brand-border hover:border-accent-gold/40 bg-panel-light px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-text-cream transition-all duration-300"
              id="cta-calligraphy-ig"
            >
              <Instagram className="w-4 h-4 text-rose-400" />
              <span>DM on Instagram</span>
            </a>
          </div>
        </div>

        {/* Gift Offering — Daily Adhkar PDF Guide */}
        <div className="rounded-3xl border border-brand-border bg-panel-dark/80 p-6 sm:p-8 shadow-xl space-y-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-accent-sage/20 text-accent-sage border border-accent-sage/30">
                <Gift className="w-5 h-5 text-accent-gold" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-accent-gold">
                  Free Sacred Gift
                </span>
                <h3 className="serif-heading text-lg font-bold text-text-cream">
                  Daily Morning & Evening Adhkar Guide
                </h3>
              </div>
            </div>
            <span className="text-xs font-bold text-emerald-400">Free PDF</span>
          </div>

          <p className="text-xs sm:text-sm text-text-sage leading-relaxed">
            An elegant, custom translated compilation of authentic protective prayers and daily remembrances from the Sunnah. Clean typography with word by word Urdu and English translations.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href="https://wa.me/918145363290?text=Assalamu%20Alaikum%20Ms.%20Mustara%2C%20I%20would%20love%20to%20receive%20the%20free%20Daily%20Adhkar%20Guide%20PDF."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 rounded-xl bg-accent-sage/20 border border-accent-sage/40 hover:bg-emerald-500 hover:text-bg-deep hover:border-emerald-500 px-5 py-3 text-xs font-bold uppercase tracking-wider text-text-cream transition-all duration-300"
              id="cta-adhkar-wa"
            >
              <Send className="w-4 h-4" />
              <span>Request PDF on WhatsApp</span>
            </a>

            <a
              href="https://www.instagram.com/qalbiya.institute/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 rounded-xl border border-brand-border hover:border-accent-gold/40 bg-panel-light px-5 py-3 text-xs font-bold uppercase tracking-wider text-text-cream transition-all duration-300"
              id="cta-adhkar-ig"
            >
              <Instagram className="w-4 h-4 text-rose-400" />
              <span>DM on Instagram</span>
            </a>
          </div>
        </div>

      </section>

      {/* Closing Section */}
      <section className="p-8 sm:p-12 rounded-3xl border border-brand-border bg-panel-dark text-center space-y-6" id="free-closing-section">
        <div className="max-w-2xl mx-auto space-y-3">
          <h2 className="serif-heading text-2xl sm:text-3xl font-bold text-text-cream leading-snug">
            Knowledge, tarbiyah, and tazkiyah are rights, not privileges. Join us free of cost.
          </h2>
          <p className="text-xs sm:text-sm text-text-sage leading-relaxed">
            Message us on WhatsApp or Instagram to reserve your spot or request any free resource.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
          <a
            href="https://wa.me/918145363290?text=Assalamu%20Alaikum%20Ms.%20Mustara%2C%20I%20want%20to%20join%20Qalbiya's%20free%20learning%20sessions."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center space-x-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-bg-deep px-8 py-3.5 text-xs font-bold uppercase tracking-wider transition-all duration-300"
            id="cta-closing-wa"
          >
            <Send className="w-4 h-4" />
            <span>Message Us to Join → WhatsApp Us</span>
          </a>

          <a
            href="https://www.instagram.com/qalbiya.institute/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center space-x-2.5 rounded-xl border border-brand-border hover:border-accent-gold/50 bg-panel-light px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-text-cream transition-all duration-300"
            id="cta-closing-ig"
          >
            <Instagram className="w-4 h-4 text-rose-400" />
            <span>DM on Instagram</span>
          </a>
        </div>
      </section>

    </div>
  );
};

