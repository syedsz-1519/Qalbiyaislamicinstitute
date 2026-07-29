import React from 'react';
import { 
  ShieldCheck, 
  User, 
  MessageSquare, 
  Share2, 
  Heart, 
  Mail
} from 'lucide-react';
import { Instagram } from './InstagramIcon';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="space-y-12 pb-20 max-w-3xl mx-auto px-4 sm:px-6 pt-10">
      
      {/* Page Header */}
      <section className="text-center space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-accent-gold">Trust & Transparency</span>
        <h1 className="serif-heading text-4xl sm:text-5xl font-bold text-text-cream tracking-tight">
          Privacy Policy
        </h1>
        <p className="max-w-xl mx-auto text-sm sm:text-base leading-relaxed text-text-sage">
          At Qalbiya Islamic Institute, we respect your privacy and are committed to protecting the personal details you share with us.
        </p>
      </section>

      {/* Main Card Content */}
      <section className="bg-panel-dark border border-brand-border rounded-3xl p-8 sm:p-10 space-y-8 shadow-xl">
        
        {/* Intro */}
        <p className="text-sm text-text-sage leading-relaxed">
          This privacy policy explains what information Qalbiya Islamic Institute collects from students (or parents of student children) and how we use and protect that information.
        </p>

        <div className="border-t border-brand-border/40 my-4"></div>

        {/* Information We Collect */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-gold/10 text-accent-gold">
              <User className="w-5 h-5" />
            </div>
            <h2 className="serif-heading text-xl font-bold text-text-cream">Information We Collect</h2>
          </div>
          
          <ul className="space-y-4 pl-4 sm:pl-6 text-sm text-text-sage list-disc list-outside marker:text-accent-gold">
            <li>
              <strong className="text-text-cream">Name and Contact Details:</strong> Personal info such as your WhatsApp number, email address, or Instagram handle provided voluntarily during student enrollment.
            </li>
            <li>
              <strong className="text-text-cream">Payment Information:</strong> Processed securely through our integrated, authorized payment methods. <em className="not-italic text-accent-gold font-medium">Qalbiya Islamic Institute does not store your card or bank account details directly on our servers.</em>
            </li>
            <li>
              <strong className="text-text-cream">Messages & Communication:</strong> Direct messages and content shared with us via WhatsApp, Instagram, or support channels for assistance, enrollment help, or active class coordination.
            </li>
          </ul>
        </div>

        <div className="border-t border-brand-border/40 my-6"></div>

        {/* How We Use Your Information */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-gold/10 text-accent-gold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h2 className="serif-heading text-xl font-bold text-text-cream">How We Use Your Information</h2>
          </div>

          <ul className="space-y-4 pl-4 sm:pl-6 text-sm text-text-sage list-disc list-outside marker:text-accent-gold">
            <li>To confirm enrollment, process subscriptions, and provide secure virtual class access.</li>
            <li>To communicate schedules, links, sudden changes, and direct administrative support.</li>
            <li>To share study plans, assignments, teacher notes, and child progress reports (exclusively with parents/guardians for our kids' courses).</li>
          </ul>
        </div>

        <div className="border-t border-brand-border/40 my-6"></div>

        {/* Information Sharing */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-gold/10 text-accent-gold">
              <Share2 className="w-5 h-5" />
            </div>
            <h2 className="serif-heading text-xl font-bold text-text-cream">Information Sharing</h2>
          </div>
          <p className="text-sm text-text-sage leading-relaxed pl-2">
            We do not sell, rent, or share your personal information with third parties, except where strictly required to process payments securely, or where we are legally required to do so by governing regulations.
          </p>
        </div>

        <div className="border-t border-brand-border/40 my-6"></div>

        {/* Testimonials */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-gold/10 text-accent-gold">
              <Heart className="w-5 h-5" />
            </div>
            <h2 className="serif-heading text-xl font-bold text-text-cream">Testimonials</h2>
          </div>
          <p className="text-sm text-text-sage leading-relaxed pl-2">
            With your explicit permission, student feedback (such as chat snippets, quotes, or shared learning reviews) may be featured on our official website or social media handles to encourage and guide other prospective students. If you do not wish your feedback to be used publicly, please inform us, and we will respect your request immediately.
          </p>
        </div>

      </section>

      {/* Support CTA */}
      <section className="text-center p-8 rounded-2xl border border-dashed border-brand-border bg-panel-dark/40 space-y-5">
        <h3 className="serif-heading text-lg font-bold text-text-cream">Contact Us</h3>
        <p className="text-xs text-text-sage max-w-md mx-auto leading-relaxed">
          For any questions about this privacy policy, your personal data, or to request updates/removal of your contact information, please contact us via WhatsApp or Instagram.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-2">
          <a
            href="https://wa.me/918145363290?text=Assalamu%20Alaikum%20Ms.%20Mustara%2C%20I%20have%20a%20question%20regarding%20the%20Privacy%20Policy."
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
