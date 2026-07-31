import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Clock, Sparkles, Send, CheckCircle2, AlertCircle, Mail, ExternalLink, HelpCircle, ChevronDown } from 'lucide-react';
import { Instagram } from './InstagramIcon';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [subject, setSubject] = useState('General Inquiry');
  const [message, setMessage] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [lastWhatsAppUrl, setLastWhatsAppUrl] = useState<string | null>(null);

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [isContactMenuOpen, setIsContactMenuOpen] = useState(false);

  const quickTopics = [
    { label: 'Tajweed 1 on 1', value: 'Tajweed 1 on 1 Inquiry' },
    { label: 'Seerah Course', value: 'Seerah Course Inquiry' },
    { label: 'Kids Deeniyat', value: 'Kids Deeniyat Inquiry' },
    { label: 'Noorani Qaida', value: 'Noorani Qaida Inquiry' },
    { label: 'Scholarship Aid', value: 'Scholarship / Aid Request' },
    { label: 'General Question', value: 'General Inquiry' },
  ];

  const generateWhatsAppMessage = () => {
    let text = `*Assalamu Alaikum Ms. Mustara,*\n\n`;
    text += `*Name:* ${name.trim() || 'Not provided'}\n`;
    text += `*Email:* ${email.trim() || 'Not provided'}\n`;
    if (whatsappNumber.trim()) {
      text += `*WhatsApp:* ${whatsappNumber.trim()}\n`;
    }
    text += `*Subject:* ${subject}\n\n`;
    text += `*Message:*\n${message.trim() || 'I would like to inquire about classes at Qalbiya Islamic Institute.'}`;
    return text;
  };

  const handleSendWhatsApp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setSubmitError('Please fill in your Name, Email, and Message before sending.');
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(null);

    const fullMessageText = generateWhatsAppMessage();
    const encodedText = encodeURIComponent(fullMessageText);
    const waUrl = `https://wa.me/918145363290?text=${encodedText}`;
    setLastWhatsAppUrl(waUrl);

    try {
      // Post inquiry to server API so it is persisted in inquiries.json
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          whatsapp: whatsappNumber.trim(),
          subject,
          message: message.trim()
        })
      });

      setSubmitSuccess('Your message details have been saved and WhatsApp is opening now!');
      
      // Open WhatsApp link in new tab
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    } catch (err) {
      console.error('Error logging contact inquiry:', err);
      // Fallback: still open WhatsApp even if server fetch had an issue
      window.open(waUrl, '_blank', 'noopener,noreferrer');
      setSubmitSuccess('Opening WhatsApp with your pre-filled inquiry details...');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmitWebOnly = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setSubmitError('Please fill in your Name, Email, and Message before submitting.');
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          whatsapp: whatsappNumber.trim(),
          subject,
          message: message.trim()
        })
      });

      const data = await response.json();
      if (data.success) {
        setSubmitSuccess('Alhamdulillah! Your inquiry has been submitted successfully. Ms. Mustara will review it shortly.');
        setName('');
        setEmail('');
        setWhatsappNumber('');
        setMessage('');
      } else {
        setSubmitError(data.error || 'Failed to send inquiry. Please try WhatsApp directly.');
      }
    } catch (err) {
      setSubmitError('Network error. Please try sending directly via WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactFaqs = [
    {
      q: 'How fast will Ms. Mustara respond on WhatsApp?',
      a: 'We strive to respond within a few hours (usually 1 to 2 hours during active working hours 9 AM to 9 PM IST). Inquiries sent during night hours will be answered the next morning.'
    },
    {
      q: 'Can I request a custom batch schedule for my daughter or son?',
      a: 'Yes! For 1-on-1 Tajweed, Noorani Qaida, and Private Kids Deeniyat classes, flexible timing slots can be aligned directly with Ms. Mustara.'
    },
    {
      q: 'Is financial aid or installment payment available?',
      a: 'Absolutely. We believe financial constraints should never come between a seeker and sacred knowledge. Select "Scholarship / Financial Aid" in the subject above or message us directly.'
    }
  ];



  return (
    <div className="space-y-12 pb-24 max-w-4xl mx-auto px-4 sm:px-6 pt-8 text-left" id="contact-page-container">
      
      {/* Page Header */}
      <motion.section 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-4"
        id="contact-header"
      >
        <span className="text-xs font-bold uppercase tracking-widest text-[#78122B] flex items-center justify-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" /> Support & Inquiry
        </span>
        <h1 className="serif-heading text-4xl sm:text-5xl font-bold text-[#23181A] tracking-tight">
          Get in Touch with Qalbiya
        </h1>
        <p className="max-w-xl mx-auto text-sm sm:text-base leading-relaxed text-[#5C4D50]">
          Have questions about course admissions, class schedules, or financial aid? Fill out your details below to auto-populate a direct message to Ms. Mustara on WhatsApp. <span className="font-semibold text-[#78122B]">We reply within 24 hours.</span>
        </p>
      </motion.section>

      {/* Main Interactive Form Card & Direct Channels Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Form: Auto-Populating WhatsApp Form */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-7 bg-white border border-[#E8DDD9] rounded-3xl p-6 sm:p-8 shadow-sm space-y-6"
          id="contact-form-card"
        >
          <div className="border-b border-[#E8DDD9] pb-4">
            <h2 className="serif-heading text-2xl font-bold text-[#23181A]">
              Send an Inquiry
            </h2>
            <p className="text-xs text-[#5C4D50] mt-1">
              Your details will be formatted into a WhatsApp message and saved securely. <span className="font-semibold text-[#78122B]">We reply within 24 hours.</span>
            </p>
          </div>

          {/* Quick Topic Chips */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-[#23181A] uppercase tracking-wider block">
              Quick Subject Select
            </label>
            <div className="flex flex-wrap gap-2">
              {quickTopics.map((topic) => (
                <button
                  key={topic.value}
                  type="button"
                  onClick={() => setSubject(topic.value)}
                  className={`text-xs px-3 py-1.5 rounded-full border transition-all cursor-pointer ${
                    subject === topic.value
                      ? 'bg-[#78122B] text-white border-[#78122B] font-semibold'
                      : 'bg-[#FAF8F5] text-[#5C4D50] border-[#E8DDD9] hover:border-[#78122B] hover:text-[#78122B]'
                  }`}
                >
                  {topic.label}
                </button>
              ))}
            </div>
          </div>

          <form className="space-y-4">
            
            {/* Name & Email Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#23181A] uppercase tracking-wider mb-1">
                  Full Name <span className="text-[#78122B]">*</span>
                </label>
                <input 
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Sister Fatima"
                  className="w-full bg-[#FAF8F5] border border-[#E8DDD9] rounded-xl px-3.5 py-2.5 text-sm text-[#23181A] placeholder-[#8C7A7E] focus:outline-none focus:ring-2 focus:ring-[#78122B]/30 focus:border-[#78122B] transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#23181A] uppercase tracking-wider mb-1">
                  Email Address <span className="text-[#78122B]">*</span>
                </label>
                <input 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. fatima@example.com"
                  className="w-full bg-[#FAF8F5] border border-[#E8DDD9] rounded-xl px-3.5 py-2.5 text-sm text-[#23181A] placeholder-[#8C7A7E] focus:outline-none focus:ring-2 focus:ring-[#78122B]/30 focus:border-[#78122B] transition-all"
                  required
                />
              </div>
            </div>

            {/* WhatsApp Number & Subject Dropdown */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#23181A] uppercase tracking-wider mb-1">
                  WhatsApp Number
                </label>
                <input 
                  type="tel"
                  value={whatsappNumber}
                  onChange={(e) => setWhatsappNumber(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full bg-[#FAF8F5] border border-[#E8DDD9] rounded-xl px-3.5 py-2.5 text-sm text-[#23181A] placeholder-[#8C7A7E] focus:outline-none focus:ring-2 focus:ring-[#78122B]/30 focus:border-[#78122B] transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#23181A] uppercase tracking-wider mb-1">
                  Inquiry Topic
                </label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full bg-[#FAF8F5] border border-[#E8DDD9] rounded-xl px-3.5 py-2.5 text-sm text-[#23181A] focus:outline-none focus:ring-2 focus:ring-[#78122B]/30 focus:border-[#78122B] transition-all"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Seerah Course Inquiry">Seerah of Prophet ﷺ Course</option>
                  <option value="Tajweed 1:1 Inquiry">Tajweed 1:1 Classes</option>
                  <option value="Noorani Qaida Inquiry">Noorani Qaida Course</option>
                  <option value="Pre-Diploma Deeniyat Inquiry">Pre-Diploma in Deeniyat</option>
                  <option value="Kids Deeniyat Inquiry">Juniors Deeniyat Mastercourse</option>
                  <option value="Scholarship / Aid Request">Scholarship & Financial Aid</option>
                </select>
              </div>
            </div>

            {/* Message Textarea */}
            <div>
              <label className="block text-xs font-semibold text-[#23181A] uppercase tracking-wider mb-1">
                Your Message or Question <span className="text-[#78122B]">*</span>
              </label>
              <textarea 
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your questions regarding class timings, batch schedules, or course details here..."
                className="w-full bg-[#FAF8F5] border border-[#E8DDD9] rounded-xl px-3.5 py-2.5 text-sm text-[#23181A] placeholder-[#8C7A7E] focus:outline-none focus:ring-2 focus:ring-[#78122B]/30 focus:border-[#78122B] transition-all resize-none"
                required
              />
            </div>

            {/* Formatted Message Live Preview */}
            <div className="bg-[#FAF8F5] border border-[#E8DDD9] rounded-xl p-3.5 space-y-1">
              <span className="text-[11px] font-bold text-[#78122B] uppercase tracking-wider block">
                ✨ Formatted WhatsApp Message Preview
              </span>
              <pre className="text-xs font-sans text-[#5C4D50] whitespace-pre-wrap leading-relaxed bg-white p-2.5 rounded-lg border border-[#E8DDD9]/80 max-h-32 overflow-y-auto">
                {generateWhatsAppMessage()}
              </pre>
            </div>

            {/* Error or Success Feedback Banners */}
            <AnimatePresence>
              {submitError && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="p-3 bg-red-50 border border-red-200 text-red-800 text-xs rounded-xl flex items-center gap-2"
                >
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                  <span>{submitError}</span>
                </motion.div>
              )}

              {submitSuccess && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="p-3.5 bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs rounded-xl space-y-1.5"
                >
                  <div className="flex items-center gap-2 font-semibold text-emerald-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{submitSuccess}</span>
                  </div>
                  {lastWhatsAppUrl && (
                    <div className="pt-1">
                      <a 
                        href={lastWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-emerald-800 hover:text-emerald-950 font-bold underline text-xs"
                      >
                        Click here if WhatsApp did not open automatically <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={handleSendWhatsApp}
                disabled={isSubmitting}
                className="flex-1 bg-[#25D366] hover:bg-[#20ba5a] text-white px-5 py-3 rounded-xl text-sm font-semibold transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                id="contact-form-whatsapp-btn"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>{isSubmitting ? 'Processing...' : 'Send via WhatsApp'}</span>
              </button>
            </div>

          </form>
        </motion.div>

        {/* Right Column: Contact Options Menu */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-5 space-y-5"
          id="contact-direct-cards"
        >
          
          {/* Main Contact Menu Button */}
          <button
            type="button"
            onClick={() => setIsContactMenuOpen(!isContactMenuOpen)}
            className="w-full bg-[#78122B] hover:bg-[#630E23] text-white px-6 py-4 rounded-2xl text-sm font-semibold transition-all shadow-sm flex items-center justify-between gap-3 cursor-pointer"
            id="contact-menu-toggle"
          >
            <div className="flex items-center gap-3">
              <MessageSquare className="w-5 h-5 fill-current" />
              <span>Quick Contact Options</span>
            </div>
            <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isContactMenuOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Expandable Contact Options */}
          <AnimatePresence>
            {isContactMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-3 overflow-hidden"
              >
                {/* Card 1: Student Support Desk */}
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: 0 }}
                  className="bg-white border border-[#E8DDD9] rounded-2xl p-5 space-y-3 shadow-xs"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <MessageSquare className="w-5 h-5 fill-current" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm text-[#23181A]">Student Support Desk</h3>
                      <p className="text-xs text-[#5C4D50]">Direct WhatsApp support for students</p>
                    </div>
                  </div>
                  <p className="text-xs text-[#5C4D50] leading-relaxed">
                    Message our dedicated student support line for immediate assistance with classes, technical issues, and student inquiries.
                  </p>
                  <div className="pt-2 border-t border-[#E8DDD9] flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#23181A]">+91 99051 01016</span>
                    <a 
                      href="https://wa.me/919905101016?text=Assalamualaikum%2C%20sister%2C%20I%27ve%20some%20queries%20can%20you%20please%20guide%20me%3F"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-[#25D366] hover:underline flex items-center gap-1"
                    >
                      Chat Now →
                    </a>
                  </div>
                </motion.div>

                {/* Card 2: WhatsApp Support Direct */}
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                  className="bg-white border border-[#E8DDD9] rounded-2xl p-5 space-y-3 shadow-xs"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <MessageSquare className="w-5 h-5 fill-current" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm text-[#23181A]">Direct WhatsApp Support</h3>
                      <p className="text-xs text-[#5C4D50]">Connect with Ms. Mustara directly</p>
                    </div>
                  </div>
                  <p className="text-xs text-[#5C4D50] leading-relaxed">
                    Fastest route for instant course enrollment, class link help, or custom schedule arrangements.
                  </p>
                  <div className="pt-2 border-t border-[#E8DDD9] flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#23181A]">+91 81453 63290</span>
                    <a 
                      href="https://wa.me/918145363290?text=Assalamualaikum%2C%20Ma%27am%2C%0A%0AI%20have%20some%20queries%20regarding%20Qalbiya%20Islamic%20Institute.%20Could%20you%20please%20guide%20me%3F%0A%0AJazakAllahu%20Khair"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-[#25D366] hover:underline flex items-center gap-1"
                    >
                      Chat Now →
                    </a>
                  </div>
                </motion.div>

                {/* Card 3: Instagram Handles */}
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                  className="bg-white border border-[#E8DDD9] rounded-2xl p-5 space-y-3 shadow-xs"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-pink-50 text-pink-700 border border-pink-200">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm text-[#23181A]">Instagram Community</h3>
                      <p className="text-xs text-[#5C4D50]">Daily reflections & announcements</p>
                    </div>
                  </div>
                  <p className="text-xs text-[#5C4D50] leading-relaxed">
                    Send us a direct message on Instagram to stay updated with upcoming batches, quotes, and video snippets.
                  </p>
                  <div className="pt-2 border-t border-[#E8DDD9] flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#23181A]">@qalbiya_institute</span>
                    <a 
                      href="https://instagram.com/qalbiya_institute"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-pink-700 hover:underline flex items-center gap-1"
                    >
                      Visit Handle →
                    </a>
                  </div>
                </motion.div>

                {/* Card 4: Email Support */}
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: 0.3 }}
                  className="bg-white border border-[#E8DDD9] rounded-2xl p-5 space-y-3 shadow-xs"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F9E8EC] text-[#78122B] border border-[#78122B]/20">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm text-[#23181A]">Official Email</h3>
                      <p className="text-xs text-[#5C4D50]">Formal correspondence</p>
                    </div>
                  </div>
                  <p className="text-xs text-[#5C4D50] leading-relaxed">
                    For administrative or academic inquiries, send us an email anytime.
                  </p>
                  <div className="pt-2 border-t border-[#E8DDD9] flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#23181A]">qalbiyaislamicinstitute@gmail.com</span>
                    <a 
                      href="mailto:qalbiyaislamicinstitute@gmail.com"
                      className="text-xs font-semibold text-[#78122B] hover:underline flex items-center gap-1"
                    >
                      Send Email →
                    </a>
                  </div>
                </motion.div>

                {/* Response Hours Info Box */}
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: 0.4 }}
                  className="bg-[#FAF8F5] border border-[#E8DDD9] rounded-2xl p-4 flex items-center gap-3 text-xs text-[#5C4D50]"
                >
                  <Clock className="w-5 h-5 text-[#78122B] shrink-0" />
                  <div>
                    <span className="font-semibold text-[#23181A]">Class & Support Hours:</span>
                    <p className="text-[11px] text-[#5C4D50]">Monday – Saturday: 8:00 AM – 9:30 PM IST</p>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>

      </div>


      <motion.section 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-white border border-[#E8DDD9] rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs"
        id="contact-faqs-section"
      >
        <div className="flex items-center gap-2 border-b border-[#E8DDD9] pb-4">
          <HelpCircle className="w-5 h-5 text-[#78122B]" />
          <h2 className="serif-heading text-xl font-bold text-[#23181A]">
            Quick Answers Before Reaching Out
          </h2>
        </div>

        <div className="space-y-3">
          {contactFaqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div 
                key={idx}
                className="border border-[#E8DDD9] rounded-2xl bg-[#FAF8F5] overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full text-left p-4 flex items-center justify-between gap-3 text-sm font-semibold text-[#23181A] hover:text-[#78122B] cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-[#78122B] transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-xs text-[#5C4D50] border-t border-[#E8DDD9]/60 leading-relaxed bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </motion.section>

      {/* Join Girls Community Section */}
      <motion.section 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-200 rounded-3xl p-8 sm:p-10 space-y-6 shadow-xs"
        id="girls-community-section"
      >
        <div className="flex items-center gap-3 border-b border-pink-200 pb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-200 text-pink-700">
            <Sparkles className="w-5 h-5" />
          </div>
          <h2 className="serif-heading text-2xl font-bold text-[#23181A]">
            Join Our Sisters' Community
          </h2>
        </div>

        <p className="text-sm text-[#5C4D50] leading-relaxed max-w-2xl">
          Connect with our dedicated girls-only community for exclusive conversations, shared reflections, mutual support, and spiritually nurturing discussions. Build lasting bonds while on your Islamic learning journey with sisters who are walking the same sacred path. <span className="font-semibold text-pink-700">We reply within 24 hours.</span>
        </p>

        <div>
          <a
            href="https://wa.me/918145363290?text=Assalamu%20Alaikum%20Ma%27am%2C%0A%0AI%20would%20like%20to%20join%20the%20sisters%27%20community%20group.%20Please%20add%20me%20to%20the%20free%20girls-only%20community%20for%20exclusive%20reflections%20and%20support."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all shadow-sm cursor-pointer"
            id="girls-community-cta-btn"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>Request Access via WhatsApp</span>
          </a>
        </div>

        <div className="bg-white border border-pink-200 rounded-2xl p-4 text-xs text-[#5C4D50]">
          <p className="font-semibold text-[#23181A] mb-2">📱 Direct Contact:</p>
          <p className="font-mono text-sm font-bold text-[#78122B]">+91 81453 63290</p>
          <p className="text-[11px] mt-2">Message Ms. Mustara directly to request access to the community.</p>
        </div>
      </motion.section>

    </div>
  );
};

