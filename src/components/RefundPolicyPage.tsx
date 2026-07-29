import React from 'react';
import { ShieldCheck, Calendar, ArrowRight, MessageSquare } from 'lucide-react';
import { Instagram } from './InstagramIcon';

export const RefundPolicyPage: React.FC = () => {
  return (
    <div className="space-y-12 pb-20 max-w-3xl mx-auto px-4 sm:px-6 pt-10">
      
      {/* Page Header */}
      <section className="text-center space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-accent-gold">Trust & Transparency</span>
        <h1 className="serif-heading text-4xl sm:text-5xl font-bold text-text-cream tracking-tight">
          Refund Policy
        </h1>
        <p className="max-w-xl mx-auto text-sm sm:text-base leading-relaxed text-text-sage">
          To maintain the highest standards of preparation, small cohort sizes, and teacher commitments, we ask that you review our terms.
        </p>
      </section>

      {/* Main Card Content */}
      <section className="bg-panel-dark border border-brand-border rounded-3xl p-8 sm:p-10 space-y-8 shadow-xl">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-gold/10 text-accent-gold">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div className="space-y-2">
            <h2 className="serif-heading text-xl font-bold text-text-cream">Sincere Review Before Enrollment</h2>
            <p className="text-sm text-text-sage leading-relaxed">
              At Qalbiya Islamic Institute, we ask every student to review course details, including syllabus, duration, format, and fees, carefully before enrolling.
            </p>
          </div>
        </div>

        <div className="border-t border-brand-border/60 my-6"></div>

        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
            <Calendar className="w-5 h-5" />
          </div>
          <div className="space-y-2">
            <h2 className="serif-heading text-xl font-bold text-text-cream">Non-Refundable Policy</h2>
            <p className="text-sm text-text-sage leading-relaxed">
              All course fees, once paid, are <strong className="text-text-cream">non-refundable</strong>. This applies to monthly payments as well as full course payments, regardless of the reason for discontinuation.
            </p>
          </div>
        </div>

        <div className="border-t border-brand-border/60 my-6"></div>

        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-sage/20 text-accent-gold">
            <ArrowRight className="w-5 h-5" />
          </div>
          <div className="space-y-2">
            <h2 className="serif-heading text-xl font-bold text-text-cream">Informed Decisions</h2>
            <p className="text-sm text-text-sage leading-relaxed">
              We encourage students (or parents, for children's courses) to reach out to us with any questions before enrolling, so you can make an informed decision. Our team is always happy to help you choose the right course.
            </p>
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="text-center p-8 rounded-2xl border border-dashed border-brand-border bg-panel-dark/40 space-y-5">
        <h3 className="serif-heading text-lg font-bold text-text-cream">Have Questions Before Enrolling?</h3>
        <p className="text-xs text-text-sage max-w-md mx-auto leading-relaxed">
          For any questions regarding this policy, please contact us. We are dedicated to ensuring you find the program that aligns with your learning aspirations. <span className="font-semibold text-accent-gold">We reply within 24 hours.</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-2">
          <a
            href="https://wa.me/918145363290?text=Assalamu%20Alaikum%20Ms.%20Mustara%2C%20I%20have%20a%20question%20regarding%20the%20Refund%20Policy."
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
