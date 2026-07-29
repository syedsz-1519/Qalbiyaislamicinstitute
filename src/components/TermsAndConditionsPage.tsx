import React from 'react';
import { 
  CheckCircle2, 
  DollarSign, 
  Calendar, 
  UserCheck, 
  FileText, 
  Award, 
  RefreshCw, 
  AlertTriangle, 
  Scale, 
  MessageSquare
} from 'lucide-react';
import { Instagram } from './InstagramIcon';
import { Route } from '../types';

interface TermsAndConditionsPageProps {
  onNavigate?: (route: Route) => void;
}

export const TermsAndConditionsPage: React.FC<TermsAndConditionsPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-12 pb-20 max-w-3xl mx-auto px-4 sm:px-6 pt-10">
      
      {/* Page Header */}
      <section className="text-center space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-accent-gold">Trust & Transparency</span>
        <h1 className="serif-heading text-4xl sm:text-5xl font-bold text-text-cream tracking-tight">
          Terms & Conditions
        </h1>
        <p className="max-w-xl mx-auto text-sm sm:text-base leading-relaxed text-text-sage">
          By enrolling in any course at Qalbiya Islamic Institute, you agree to the following terms of service.
        </p>
      </section>

      {/* Main Card Content */}
      <section className="bg-panel-dark border border-brand-border rounded-3xl p-8 sm:p-10 space-y-8 shadow-xl">
        
        {/* 1. Enrollment */}
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-gold/10 text-accent-gold">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div className="space-y-2">
            <h2 className="serif-heading text-xl font-bold text-text-cream">1. Enrollment</h2>
            <p className="text-sm text-text-sage leading-relaxed">
              Enrollment is confirmed only after payment is received. Course access, class links, and scheduling details will be shared after confirmation.
            </p>
          </div>
        </div>

        <div className="border-t border-brand-border/40 my-4"></div>

        {/* 2. Fees & Payment */}
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-gold/10 text-accent-gold">
            <DollarSign className="w-5 h-5" />
          </div>
          <div className="space-y-2">
            <h2 className="serif-heading text-xl font-bold text-text-cream">2. Fees & Payment</h2>
            <p className="text-sm text-text-sage leading-relaxed">
              Course fees must be paid according to the schedule listed on each course page (monthly or full course). Late or missed payments may result in a pause in class access until payment is completed.
            </p>
          </div>
        </div>

        <div className="border-t border-brand-border/40 my-4"></div>

        {/* 3. Attendance & Scheduling */}
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-gold/10 text-accent-gold">
            <Calendar className="w-5 h-5" />
          </div>
          <div className="space-y-2">
            <h2 className="serif-heading text-xl font-bold text-text-cream">3. Attendance & Scheduling</h2>
            <p className="text-sm text-text-sage leading-relaxed">
              For 1-on-1 classes, timing is arranged directly with the student based on mutual availability. For group classes, students are expected to follow the scheduled class timing. Missed content in individual (1-on-1) classes will be covered in the next session; group class policies may vary by course.
            </p>
          </div>
        </div>

        <div className="border-t border-brand-border/40 my-4"></div>

        {/* 4. Conduct */}
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-gold/10 text-accent-gold">
            <UserCheck className="w-5 h-5" />
          </div>
          <div className="space-y-2">
            <h2 className="serif-heading text-xl font-bold text-text-cream">4. Conduct</h2>
            <p className="text-sm text-text-sage leading-relaxed">
              Students are expected to attend classes with respect, sincerity, and a willingness to learn. Qalbiya Islamic Institute reserves the right to discontinue access for any student whose conduct is disrespectful or disruptive to teachers or fellow students.
            </p>
          </div>
        </div>

        <div className="border-t border-brand-border/40 my-4"></div>

        {/* 5. Course Content & Materials */}
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-gold/10 text-accent-gold">
            <FileText className="w-5 h-5" />
          </div>
          <div className="space-y-2">
            <h2 className="serif-heading text-xl font-bold text-text-cream">5. Course Content & Materials</h2>
            <p className="text-sm text-text-sage leading-relaxed">
              All course materials, notes, and recordings (where applicable) are for the personal use of the enrolled student only. Sharing, reselling, or redistributing course content without permission is not allowed.
            </p>
          </div>
        </div>

        <div className="border-t border-brand-border/40 my-4"></div>

        {/* 6. Certificates */}
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-gold/10 text-accent-gold">
            <Award className="w-5 h-5" />
          </div>
          <div className="space-y-2">
            <h2 className="serif-heading text-xl font-bold text-text-cream">6. Certificates</h2>
            <p className="text-sm text-text-sage leading-relaxed">
              Certificates are issued only upon successful completion of course requirements, including any required exams or tests as outlined on the course page.
            </p>
          </div>
        </div>

        <div className="border-t border-brand-border/40 my-4"></div>

        {/* 7. Changes to Courses */}
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-gold/10 text-accent-gold">
            <RefreshCw className="w-5 h-5" />
          </div>
          <div className="space-y-2">
            <h2 className="serif-heading text-xl font-bold text-text-cream">7. Changes to Courses</h2>
            <p className="text-sm text-text-sage leading-relaxed">
              Qalbiya Islamic Institute reserves the right to make reasonable changes to class schedules, teachers, or course structure when necessary, with advance notice to enrolled students wherever possible.
            </p>
          </div>
        </div>

        <div className="border-t border-brand-border/40 my-4"></div>

        {/* 8. Refunds */}
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-gold/10 text-accent-gold">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div className="space-y-2">
            <h2 className="serif-heading text-xl font-bold text-text-cream">8. Refunds</h2>
            <p className="text-sm text-text-sage leading-relaxed">
              Please refer to our{' '}
              {onNavigate ? (
                <button
                  onClick={() => onNavigate('refundPolicy')}
                  className="text-accent-gold underline hover:text-text-cream transition-colors font-medium inline-block p-0 bg-transparent border-0 cursor-pointer align-baseline"
                >
                  Refund Policy
                </button>
              ) : (
                <strong className="text-accent-gold">Refund Policy</strong>
              )}{' '}
              , all payments are non-refundable.
            </p>
          </div>
        </div>

        <div className="border-t border-brand-border/40 my-4"></div>

        {/* 9. Governing Law */}
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-gold/10 text-accent-gold">
            <Scale className="w-5 h-5" />
          </div>
          <div className="space-y-2">
            <h2 className="serif-heading text-xl font-bold text-text-cream">9. Governing Law</h2>
            <p className="text-sm text-text-sage leading-relaxed">
              These terms are governed by the laws of India.
            </p>
          </div>
        </div>

      </section>

      {/* Support CTA */}
      <section className="text-center p-8 rounded-2xl border border-dashed border-brand-border bg-panel-dark/40 space-y-5">
        <h3 className="serif-heading text-lg font-bold text-text-cream">Have any questions about these Terms?</h3>
        <p className="text-xs text-text-sage max-w-md mx-auto leading-relaxed">
          For any questions about these terms, please contact us via WhatsApp or Instagram. We are here to support your learning journey. <span className="font-semibold text-accent-gold">We reply within 24 hours.</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-2">
          <a
            href="https://wa.me/918145363290?text=Assalamu%20Alaikum%20Ms.%20Mustara%2C%20I%20have%20a%20question%20regarding%20the%20Terms%20%26%20Conditions."
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
