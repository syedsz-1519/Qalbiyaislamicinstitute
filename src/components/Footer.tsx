import React from 'react';
import { Compass, Heart, Sparkles, MessageCircle } from 'lucide-react';
import { Instagram } from './InstagramIcon';
import { Route } from '../types';
import qalbiyaLogoImg from '../assets/images/logo.jpeg';

interface FooterProps {
  onNavigate: (route: Route, courseSlug?: string, sacredTab?: 'asma-ul-husna' | 'pillars') => void;
  currentRoute?: Route;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, currentRoute }) => {

  return (
    <footer className="w-full bg-[#78122B] text-white border-t border-[#630E23] py-16 transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Logo & Vision Block */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#F3D797]/40 bg-[#FAF8F5] shadow-xs shrink-0">
                <img 
                  src={qalbiyaLogoImg} 
                  alt="Qalbiya Islamic Institute Emblem" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold tracking-wide text-white">
                  QALBIYA
                </h3>
                <p className="text-[10px] font-mono font-bold tracking-widest text-[#F3D797] uppercase">
                  Islamic Institute
                </p>
              </div>
            </div>
            
            <p className="text-sm leading-relaxed text-white/95">
              "Allah does not look at your appearances or your wealth, but He looks at your hearts and your deeds."
              <span className="block mt-2 text-xs italic font-semibold text-[#F3D797]">Prophet Muhammad ﷺ</span>
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#F3D797]">Follow & Contact</h4>
              <div className="flex flex-col space-y-2.5 text-sm text-white/90">
                <a 
                  href="https://instagram.com/qalbiya_institute" 
                  className="flex items-center space-x-2.5 text-white/90 hover:text-[#F3D797] transition-colors duration-300 font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="footer-link-instagram"
                >
                  <Instagram className="w-4 h-4 text-[#F3D797] shrink-0" />
                  <span className="underline decoration-white/30 hover:decoration-current">@qalbiya_institute</span>
                </a>
                <a 
                  href="mailto:qalbiyaislamicinstitute@gmail.com" 
                  className="flex items-center space-x-2.5 text-white/90 hover:text-[#F3D797] transition-colors duration-300 font-semibold"
                  id="footer-link-email"
                >
                  <span className="w-4 h-4 text-[#F3D797] shrink-0 flex items-center justify-center">✉</span>
                  <span className="underline decoration-white/30 hover:decoration-current">qalbiyaislamicinstitute@gmail.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-2 space-y-5">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#F3D797]">Programs</h4>
            <ul className="space-y-1.5 md:space-y-2.5 text-sm">
              <li>
                <button 
                  onClick={() => onNavigate('women')} 
                  className="text-white/90 hover:text-[#F3D797] hover:underline text-left transition-colors duration-300 font-medium py-1.5 md:py-0.5 block w-full cursor-pointer"
                  id="footer-btn-women"
                >
                  Women's Courses
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('kids')} 
                  className="text-white/90 hover:text-[#F3D797] hover:underline text-left transition-colors duration-300 font-medium py-1.5 md:py-0.5 block w-full cursor-pointer"
                  id="footer-btn-kids"
                >
                  Kids' Courses
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('freeCourses')} 
                  className="text-white/90 hover:text-[#F3D797] hover:underline text-left transition-colors duration-300 font-medium py-1.5 md:py-0.5 block w-full cursor-pointer"
                  id="footer-btn-free"
                >
                  Free Sacred Lessons
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('asmaUlHusna')} 
                  className="text-white/90 hover:text-[#F3D797] hover:underline text-left transition-colors duration-300 font-medium py-1.5 md:py-0.5 block w-full cursor-pointer"
                  id="footer-btn-asma-ul-husna"
                >
                  Asma Ul Husna (99 Names)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('fivePillars')} 
                  className="text-white/90 hover:text-[#F3D797] hover:underline text-left transition-colors duration-300 font-medium py-1.5 md:py-0.5 block w-full cursor-pointer"
                  id="footer-btn-5-pillars"
                >
                  5 Pillars of Islam
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('scholarship')} 
                  className="text-white/90 hover:text-[#F3D797] hover:underline text-left transition-colors duration-300 font-medium py-1.5 md:py-0.5 block w-full cursor-pointer"
                  id="footer-btn-scholarship"
                >
                  Sponsor a Student
                </button>
              </li>
            </ul>
          </div>

          {/* Trust & Legal Column */}
          <div className="md:col-span-2 space-y-5">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#F3D797]">Trust & Legal</h4>
            <ul className="space-y-1.5 md:space-y-2.5 text-sm">
              <li>
                <button 
                  onClick={() => onNavigate('refundPolicy')} 
                  className="text-white/90 hover:text-[#F3D797] hover:underline text-left transition-colors duration-300 font-medium py-1.5 md:py-0.5 block w-full cursor-pointer"
                  id="footer-btn-refund-policy"
                >
                  Refund Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('termsAndConditions')} 
                  className="text-white/90 hover:text-[#F3D797] hover:underline text-left transition-colors duration-300 font-medium py-1.5 md:py-0.5 block w-full cursor-pointer"
                  id="footer-btn-terms-and-conditions"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('privacyPolicy')} 
                  className="text-white/90 hover:text-[#F3D797] hover:underline text-left transition-colors duration-300 font-medium py-1.5 md:py-0.5 block w-full cursor-pointer"
                  id="footer-btn-privacy-policy"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('faq')} 
                  className="text-white/90 hover:text-[#F3D797] hover:underline text-left transition-colors duration-300 font-medium py-1.5 md:py-0.5 block w-full cursor-pointer"
                  id="footer-btn-faq"
                >
                  General FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Interactive Block: WhatsApp Contact Buttons */}
          <div className="md:col-span-4 space-y-4">
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#F3D797]">Get Support</h4>
              <p className="text-xs text-white/90">Reach out directly via WhatsApp for questions or guidance.</p>
              
              <div className="flex flex-col gap-3">
                {/* Ms. Mustara WhatsApp Button */}
                <a
                  href="https://wa.me/918145363290?text=Assalamu%20Alaikum%20Ms.%20Mustara%2C%20I%20have%20questions%20regarding%20Qalbiya%20Islamic%20Institute."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 rounded-xl bg-[#25D366] hover:bg-[#1fb759] text-white px-4 py-3 text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer shadow-xs w-full"
                  id="footer-whatsapp-mustara"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat with Ms. Mustara</span>
                </a>

                {/* Student Help Desk WhatsApp Button */}
                <a
                  href="https://wa.me/919905101016?text=Assalamu%20Alaikum%2C%20I%20need%20help%20from%20the%20Student%20Help%20Desk%20regarding%20Qalbiya%20courses."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 rounded-xl bg-[#128C7E] hover:bg-[#0d6f6a] text-white px-4 py-3 text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer shadow-xs w-full"
                  id="footer-whatsapp-helpdesk"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Student Help Desk</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Closing Row */}
        <div className="mt-16 pt-8 border-t border-white/20 space-y-4">
          {/* Copyright Notice */}
          <div className="text-center">
            <p className="text-sm font-semibold text-white mb-2">
              © 2025 Qalbiya Islamic Institute. All Rights Reserved.
            </p>
            <p className="text-xs text-white/70 italic">
              "And whoever relies upon Allah - then He is sufficient for him. Indeed, Allah will accomplish His purpose." - Quran 65:3
            </p>
          </div>
          
          {/* Footer Links Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/80">
            <div className="flex items-center space-x-1.5">
              <Compass className="w-4 h-4 text-[#F3D797]" />
              <span>Serving Seekers Globally &bull; Conducted over Google Meet</span>
            </div>
            <div className="flex items-center space-x-4 flex-wrap justify-center sm:justify-end gap-y-2">
              <div className="flex items-center space-x-1">
                <span>Made with deep respect &bull; Focus on the heart</span>
                <Heart className="w-3.5 h-3.5 text-[#F3D797] inline fill-[#F3D797] animate-pulse" />
              </div>
              <span className="hidden sm:inline text-white/30">&bull;</span>
              <a 
                href="https://www.instagram.com/byte._bros?igsh=MWs1a3hxNWl2Znl4aQ==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#F3D797] hover:text-white font-bold transition-colors duration-300 underline decoration-[#F3D797]/50 hover:decoration-current cursor-pointer"
                id="developer-link-regular"
              >
                Developed by ByteBrothers
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
