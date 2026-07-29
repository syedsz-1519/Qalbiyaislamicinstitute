import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, X, BookOpen, Sparkles, MessageCircle } from 'lucide-react';
import { Instagram } from './InstagramIcon';

interface FloatingActionMenuProps {
  onDhikrClick: () => void;
  onDuroodClick: () => void;
}

export const FloatingActionMenu: React.FC<FloatingActionMenuProps> = ({ onDhikrClick, onDuroodClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      icon: MessageCircle,
      color: 'bg-[#25D366] hover:bg-[#20ba5a]',
      action: () => window.open('https://wa.me/918145363290?text=Assalamu%20Alaikum%2C%20I%20have%20an%20inquiry%20about%20Qalbiya%20Islamic%20Institute.', '_blank'),
    },
    {
      id: 'instagram',
      label: 'Instagram',
      icon: Instagram,
      color: 'bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]',
      action: () => window.open('https://instagram.com/qalbiya_institute', '_blank'),
    },
    {
      id: 'durood',
      label: 'Durood Shareef',
      icon: Sparkles,
      color: 'bg-[#0B3C26] hover:bg-[#125A3A]',
      action: onDuroodClick,
    },
    {
      id: 'dhikr',
      label: '1-Min Dhikr',
      icon: BookOpen,
      color: 'bg-[#78122B] hover:bg-[#A01840]',
      action: onDhikrClick,
    },
  ];

  return (
    <>
      {/* Main FAB with Animated Icon */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#78122B] hover:bg-[#A01840] text-white border-2 border-[#D4AF37]/70 shadow-[0_10px_30px_rgba(0,0,0,0.6)] transition-all"
        id="floating-action-menu-fab"
        aria-label="Open quick actions menu"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: 0, scale: 0.8 }}
              animate={{ rotate: 90, scale: 1 }}
              exit={{ rotate: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, scale: 0.8 }}
              animate={{ rotate: 0, scale: 1 }}
              exit={{ rotate: 90, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <Plus className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulse indicator when closed */}
        {!isOpen && (
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-full border-2 border-[#D4AF37]/30"
          />
        )}
      </motion.button>

      {/* Floating Menu Items - Radial Layout */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40"
            />

            {/* Menu Items - Arranged in a circle around the FAB */}
            {menuItems.map((item, index) => {
              const angle = (index * 360) / menuItems.length;
              const radius = 100;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;
              const Icon = item.icon;

              return (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    x: x,
                    y: y,
                  }}
                  exit={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                    delay: index * 0.05,
                  }}
                  onClick={() => {
                    item.action();
                    setIsOpen(false);
                  }}
                  className={`fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full ${item.color} text-white shadow-lg border border-white/20 hover:shadow-xl transition-all`}
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  title={item.label}
                  id={`floating-menu-${item.id}`}
                >
                  <Icon className="w-5 h-5" />
                </motion.button>
              );
            })}

            {/* Labels */}
            {menuItems.map((item, index) => {
              const angle = (index * 360) / menuItems.length;
              const radius = 140;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;

              return (
                <motion.div
                  key={`label-${item.id}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    delay: index * 0.05 + 0.1,
                    duration: 0.2,
                  }}
                  className="fixed bottom-5 right-5 z-40 text-xs font-semibold text-white bg-[#1B1214]/90 px-2 py-1 rounded-lg pointer-events-none whitespace-nowrap border border-white/20 backdrop-blur-sm"
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                >
                  {item.label}
                </motion.div>
              );
            })}
          </>
        )}
      </AnimatePresence>
    </>
  );
};
