import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RotateCcw, Volume2, VolumeX, X, CheckCircle2, Heart, Info, Flame, Award } from 'lucide-react';

const playSoftChime = (pitch: number = 587.33) => {
  try {
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(pitch, ctx.currentTime);
    gain.gain.setValueAtTime(0.12, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.2);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.2);
  } catch {}
};

const triggerVibration = () => {
  if (typeof window !== 'undefined' && 'navigator' in window && window.navigator.vibrate) {
    window.navigator.vibrate(25);
  }
};

interface DhikrItem {
  id: string;
  arabic: string;
  transliteration: string;
  meaning: string;
  target: number;
}

const dhikrRoutine: DhikrItem[] = [
  { id: 'subhanallah', arabic: 'سُبْحَانَ ٱللَّٰهِ', transliteration: 'SubhanAllah', meaning: 'Glory be to Allah', target: 33 },
  { id: 'alhamdulillah', arabic: 'ٱلْحَمْدُ لِلَّٰهِ', transliteration: 'Alhamdulillah', meaning: 'Praise be to Allah', target: 33 },
  { id: 'allahuakbar', arabic: 'ٱللَّٰهُ أَكْبَرُ', transliteration: 'Allahu Akbar', meaning: 'Allah is the greatest', target: 34 },
  { id: 'astaghfirullah', arabic: 'أَسْتَغْفِرُ ٱللَّٰهَ', transliteration: 'Astaghfirullah', meaning: 'I seek forgiveness from Allah', target: 10 },
  { id: 'lailahaillallah', arabic: 'لَا إِلَٰهَ إِلَّا ٱللَّٰهُ', transliteration: 'La ilaha ill-Allah', meaning: 'There is no god except Allah', target: 10 },
];

export const DhikrDuroodWidget: React.FC<{ activeModal: 'dhikr' | 'durood' | null; setActiveModal: (modal: 'dhikr' | 'durood' | null) => void }> = ({ activeModal, setActiveModal }) => {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [hoveredDhikr, setHoveredDhikr] = useState(false);
  const [hoveredDurood, setHoveredDurood] = useState(false);
  const [hoveredWa, setHoveredWa] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [dhikrCounts, setDhikrCounts] = useState<{ [key: string]: number }>({
    subhanallah: 0, alhamdulillah: 0, allahuakbar: 0, astaghfirullah: 0, lailahaillallah: 0,
  });
  const [dhikrCompleted, setDhikrCompleted] = useState(false);
  const [duroodTarget, setDuroodTarget] = useState<number>(80);
  const [duroodCount, setDuroodCount] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('qalbiya_durood_count');
      return saved ? parseInt(saved, 10) || 0 : 0;
    }
    return 0;
  });
  const [showVirtuesTab, setShowVirtuesTab] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('qalbiya_durood_count', duroodCount.toString());
    }
  }, [duroodCount]);

  const totalDhikrCount = (Object.values(dhikrCounts) as number[]).reduce((a: number, b: number) => a + b, 0);
  const totalDhikrTarget = dhikrRoutine.reduce((a: number, b: DhikrItem) => a + b.target, 0);
  const stepCount = dhikrCounts[dhikrRoutine[currentStepIndex].id] || 0;
  const stepProgress = Math.min(100, Math.round(((stepCount as number) / dhikrRoutine[currentStepIndex].target) * 100));
  const totalDhikrProgress = Math.min(100, Math.round(((totalDhikrCount as number) / (totalDhikrTarget as number)) * 100));
  const duroodProgress = Math.min(100, Math.round((duroodCount / duroodTarget) * 100));

  const handleIncrementDhikr = () => {
    if (dhikrCompleted) return;
    triggerVibration();
    if (soundEnabled) playSoftChime(650);
    const step = dhikrRoutine[currentStepIndex];
    const count = dhikrCounts[step.id] || 0;
    if (count < step.target) {
      const newCount = count + 1;
      setDhikrCounts({ ...dhikrCounts, [step.id]: newCount });
      if (newCount === step.target && currentStepIndex < dhikrRoutine.length - 1) {
        if (soundEnabled) playSoftChime(880);
        setTimeout(() => setCurrentStepIndex(currentStepIndex + 1), 250);
      } else if (newCount === step.target) {
        if (soundEnabled) {
          playSoftChime(880);
          setTimeout(() => playSoftChime(1046.5), 150);
        }
        setDhikrCompleted(true);
      }
    }
  };

  const handleResetDhikr = () => {
    setDhikrCounts({ subhanallah: 0, alhamdulillah: 0, allahuakbar: 0, astaghfirullah: 0, lailahaillallah: 0 });
    setCurrentStepIndex(0);
    setDhikrCompleted(false);
  };

  const handleIncrementDurood = () => {
    triggerVibration();
    if (soundEnabled) playSoftChime(700);
    setDuroodCount((prev) => prev + 1);
  };

  const handleResetDurood = () => setDuroodCount(0);

  const currentDhikrStep = dhikrRoutine[currentStepIndex];

  return (
    <>
      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-center gap-2.5 p-1.5 rounded-full bg-[#1B1214]/90 border border-[#D4AF37]/40 shadow-[0_10px_30px_rgba(0,0,0,0.6)] backdrop-blur-md select-none">
        <div className="relative flex items-center justify-center">
          <AnimatePresence>
            {hoveredDhikr && <motion.div initial={{ opacity: 0, x: 10, scale: 0.9 }} animate={{ opacity: 1, x: 0, scale: 1 }} exit={{ opacity: 0, x: 10, scale: 0.9 }} className="hidden sm:block absolute right-full mr-3 bg-[#1B1214] text-[#F3D797] text-[11px] font-semibold px-2.5 py-1 rounded-lg shadow-xl backdrop-blur-md border border-[#D4AF37]/40 whitespace-nowrap pointer-events-none">1-Min Dhikr</motion.div>}
          </AnimatePresence>
          <motion.button onClick={() => setActiveModal('dhikr')} onMouseEnter={() => setHoveredDhikr(true)} onMouseLeave={() => setHoveredDhikr(false)} whileHover={{ scale: 1.12, translateX: -2 }} whileTap={{ scale: 0.88 }} className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-[#78122B] text-[#F3D797] border border-[#D4AF37]/70 shadow-md transition-all relative group cursor-pointer">
            <span className="absolute inset-0 rounded-full bg-[#78122B] opacity-30 animate-pulse group-hover:scale-110 transition-all" />
            <span className="text-base sm:text-lg relative z-10 leading-none">📿</span>
            <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2 z-20"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F3D797] opacity-75" /><span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]" /></span>
          </motion.button>
        </div>
        <div className="relative flex items-center justify-center">
          <AnimatePresence>
            {hoveredDurood && <motion.div initial={{ opacity: 0, x: 10, scale: 0.9 }} animate={{ opacity: 1, x: 0, scale: 1 }} exit={{ opacity: 0, x: 10, scale: 0.9 }} className="hidden sm:block absolute right-full mr-3 bg-[#082819] text-[#F3D797] text-[11px] font-semibold px-2.5 py-1 rounded-lg shadow-xl backdrop-blur-md border border-[#D4AF37]/40 whitespace-nowrap pointer-events-none">Durood Shareef</motion.div>}
          </AnimatePresence>
          <motion.button onClick={() => setActiveModal('durood')} onMouseEnter={() => setHoveredDurood(true)} onMouseLeave={() => setHoveredDurood(false)} whileHover={{ scale: 1.12, translateX: -2 }} whileTap={{ scale: 0.88 }} className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-[#0B3C26] text-[#F3D797] border border-[#D4AF37]/70 shadow-md transition-all relative group cursor-pointer">
            <span className="absolute inset-0 rounded-full bg-[#125A3A] opacity-30 animate-pulse group-hover:scale-110 transition-all" />
            <span className="text-base sm:text-lg relative z-10 leading-none">✨</span>
          </motion.button>
        </div>

        <div className="relative flex items-center justify-center">
          <AnimatePresence>
            {hoveredWa && <motion.div initial={{ opacity: 0, x: 10, scale: 0.9 }} animate={{ opacity: 1, x: 0, scale: 1 }} exit={{ opacity: 0, x: 10, scale: 0.9 }} className="hidden sm:block absolute right-full mr-3 bg-slate-900/95 text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg shadow-xl backdrop-blur-md border border-white/20 whitespace-nowrap pointer-events-none">WhatsApp</motion.div>}
          </AnimatePresence>
          <motion.a href="https://wa.me/918145363290?text=Assalamu%20Alaikum%2C%20I%20have%20an%20inquiry%20about%20Qalbiya%20Islamic%20Institute." target="_blank" rel="noopener noreferrer" onMouseEnter={() => setHoveredWa(true)} onMouseLeave={() => setHoveredWa(false)} whileHover={{ scale: 1.12, translateX: -2 }} whileTap={{ scale: 0.88 }} className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white border border-white/20 shadow-md transition-all relative group cursor-pointer">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current text-white relative z-10" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.454L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 1.977 14.053 1.048 12.006 1.048c-5.448 0-9.876 4.373-9.88 9.802-.002 1.81.481 3.578 1.393 5.113L2.533 21.67l5.114-1.316zm10.743-7.142c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /></svg>
          </motion.a>
        </div>
      </div>

      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md select-none">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0" onClick={() => setActiveModal(null)} />
            {activeModal === 'dhikr' && (
              <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} transition={{ type: 'spring', damping: 25, stiffness: 300 }} className="relative w-full max-w-lg bg-[#1B1214] border border-[#D4AF37]/40 rounded-3xl shadow-2xl overflow-hidden z-10 text-white flex flex-col max-h-[90vh]">
                <div className="p-5 border-b border-[#D4AF37]/20 flex items-center justify-between bg-[#23181A]">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-2xl bg-[#78122B]/50 border border-[#D4AF37]/30 text-[#F3D797]">📿</div>
                    <div>
                      <h3 className="serif-heading text-lg font-bold text-[#F3D797]">1-Minute Daily Dhikr Routine</h3>
                      <p className="text-[11px] text-white/70">Quick 60-Second Sunnah Tasbeeh</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => setSoundEnabled(!soundEnabled)} className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/80 transition-colors cursor-pointer">
                      {soundEnabled ? <Volume2 className="w-4 h-4 text-[#F3D797]" /> : <VolumeX className="w-4 h-4 text-white/40" />}
                    </button>
                    <button onClick={() => setActiveModal(null)} className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/80 transition-colors cursor-pointer">
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="p-3 bg-[#140D0F] border-b border-white/5 overflow-x-auto flex items-center gap-2">
                  {dhikrRoutine.map((item, idx) => {
                    const isCurrent = idx === currentStepIndex;
                    const isDone = (dhikrCounts[item.id] || 0) >= item.target;
                    return (
                      <button key={item.id} onClick={() => { setCurrentStepIndex(idx); setDhikrCompleted(false); }} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${isCurrent ? 'bg-[#D4AF37] text-[#1B1214] font-bold shadow-md scale-105' : isDone ? 'bg-[#125A3A]/60 text-emerald-200 border border-emerald-500/30' : 'bg-white/5 text-white/60 hover:bg-white/10'}`}>
                        {isDone ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" /> : <span className="text-[10px] opacity-80">{idx + 1}.</span>}
                        <span>{item.transliteration}</span>
                        <span className="text-[10px] opacity-75">({dhikrCounts[item.id] || 0}/{item.target})</span>
                      </button>
                    );
                  })}
                </div>

                <div className="p-6 overflow-y-auto flex-grow flex flex-col items-center justify-between text-center space-y-6">
                  {dhikrCompleted ? (
                    <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="py-6 space-y-4 text-center my-auto">
                      <div className="w-16 h-16 rounded-full bg-[#125A3A] text-emerald-200 flex items-center justify-center mx-auto text-2xl shadow-xl border border-emerald-400/40">✨</div>
                      <h4 className="serif-heading text-2xl font-bold text-[#F3D797]">MashaAllah! Routine Completed</h4>
                      <p className="text-xs text-white/80 max-w-xs mx-auto leading-relaxed">You completed all 120 recitations of the 1-Minute Daily Dhikr. May Allah accept your remembrance and illuminate your heart.</p>
                      <div className="p-4 rounded-2xl bg-white/5 border border-[#D4AF37]/20 text-xs space-y-1.5 text-left max-w-sm mx-auto">
                        <p className="text-[#F3D797] font-semibold flex items-center gap-1"><Flame className="w-3.5 h-3.5" /> 1-Minute Checklist Completed:</p>
                        <p className="text-white/70">✓ SubhanAllah (33x)</p>
                        <p className="text-white/70">✓ Alhamdulillah (33x)</p>
                        <p className="text-white/70">✓ Allahu Akbar (34x)</p>
                        <p className="text-white/70">✓ Astaghfirullah (10x)</p>
                        <p className="text-white/70">✓ La ilaha ill-Allah (10x)</p>
                      </div>
                      <button onClick={handleResetDhikr} className="px-6 py-3 rounded-2xl bg-[#D4AF37] text-[#1B1214] font-bold text-xs hover:bg-[#F3D797] transition-all shadow-lg flex items-center gap-2 mx-auto cursor-pointer">
                        <RotateCcw className="w-4 h-4" /> Start Again
                      </button>
                    </motion.div>
                  ) : (
                    <>
                      <div className="w-full space-y-3 pt-2">
                        <div className="text-3xl sm:text-4xl font-serif text-[#F3D797] font-bold tracking-wide leading-relaxed">{currentDhikrStep.arabic}</div>
                        <div className="text-lg font-bold text-white tracking-wide">{currentDhikrStep.transliteration}</div>
                        <div className="text-xs text-[#D4AF37]/80 italic">"{currentDhikrStep.meaning}"</div>
                      </div>

                      <div className="py-2 flex flex-col items-center justify-center relative">
                        <motion.button onClick={handleIncrementDhikr} whileTap={{ scale: 0.92 }} whileHover={{ scale: 1.03 }} className="relative w-40 h-40 sm:w-44 sm:h-44 rounded-full bg-gradient-to-b from-[#78122B] to-[#420A17] border-4 border-[#D4AF37]/60 shadow-[0_0_40px_rgba(212,175,55,0.25)] flex flex-col items-center justify-center cursor-pointer group select-none active:brightness-125 transition-all">
                          <svg className="absolute inset-0 w-full h-full -rotate-90 p-1" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="46" className="stroke-white/10" strokeWidth="4" fill="transparent" />
                            <circle cx="50" cy="50" r="46" className="stroke-[#F3D797] transition-all duration-300" strokeWidth="5" strokeDasharray={289} strokeDashoffset={289 - (289 * stepProgress) / 100} strokeLinecap="round" fill="transparent" />
                          </svg>
                          <span className="text-xs uppercase tracking-widest text-white/60 font-medium">TAP TO RECITE</span>
                          <span className="text-4xl sm:text-5xl font-black text-[#F3D797] my-1 font-mono">{stepCount}</span>
                          <span className="text-[11px] text-white/70 font-semibold">Target: {currentDhikrStep.target}</span>
                        </motion.button>
                        <p className="text-[10px] text-white/50 mt-3">Tap anywhere inside the circle to count</p>
                      </div>

                      <div className="w-full space-y-1.5 bg-white/5 p-3 rounded-2xl border border-white/10">
                        <div className="flex justify-between items-center text-xs font-semibold">
                          <span className="text-white/80">Overall 60s Progress</span>
                          <span className="text-[#F3D797] font-mono">{totalDhikrCount} / {totalDhikrTarget}</span>
                        </div>
                        <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                          <div className="bg-gradient-to-r from-[#D4AF37] to-[#F3D797] h-full transition-all duration-300" style={{ width: `${totalDhikrProgress}%` }} />
                        </div>
                      </div>
                    </>
                  )}
                </div>

                <div className="p-4 border-t border-white/10 bg-[#23181A] flex items-center justify-between text-xs text-white/60">
                  <button onClick={handleResetDhikr} className="flex items-center gap-1.5 text-white/60 hover:text-white transition-colors cursor-pointer">
                    <RotateCcw className="w-3.5 h-3.5" /> Reset All
                  </button>
                  <span className="text-[11px] text-[#F3D797]/70 italic">SubhanAllah &bull; Alhamdulillah &bull; Allahu Akbar</span>
                </div>
              </motion.div>
            )}
            {activeModal === 'durood' && (
              <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} transition={{ type: 'spring', damping: 25, stiffness: 300 }} className="relative w-full max-w-lg bg-[#082819] border border-[#D4AF37]/40 rounded-3xl shadow-2xl overflow-hidden z-10 text-white flex flex-col max-h-[90vh]">
                <div className="p-5 border-b border-[#D4AF37]/20 flex items-center justify-between bg-[#0B3C26]">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-2xl bg-[#125A3A] border border-[#D4AF37]/30 text-[#F3D797]">✨</div>
                    <div>
                      <h3 className="serif-heading text-lg font-bold text-[#F3D797]">Durood for Nabi-al-Ummi</h3>
                      <p className="text-[11px] text-emerald-200/80">The Unlettered Prophet ﷺ</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => setShowVirtuesTab(!showVirtuesTab)} className={`p-2 rounded-xl transition-colors cursor-pointer text-xs font-semibold flex items-center gap-1 ${showVirtuesTab ? 'bg-[#D4AF37] text-[#082819]' : 'bg-white/10 hover:bg-white/20 text-[#F3D797]'}`}>
                      <Info className="w-4 h-4" />
                      <span className="hidden sm:inline">Virtues</span>
                    </button>
                    <button onClick={() => setSoundEnabled(!soundEnabled)} className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/80 transition-colors cursor-pointer">
                      {soundEnabled ? <Volume2 className="w-4 h-4 text-[#F3D797]" /> : <VolumeX className="w-4 h-4 text-white/40" />}
                    </button>
                    <button onClick={() => setActiveModal(null)} className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/80 transition-colors cursor-pointer">
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="p-3 bg-[#051C12] border-b border-white/5 flex items-center justify-between text-xs">
                  <span className="text-emerald-200/70 font-medium">Target Preset:</span>
                  <div className="flex items-center gap-1.5">
                    {[10, 33, 80, 100].map((t) => (
                      <button key={t} onClick={() => setDuroodTarget(t)} className={`px-2.5 py-1 rounded-lg font-bold text-xs transition-all cursor-pointer ${duroodTarget === t ? 'bg-[#D4AF37] text-[#082819] shadow-sm' : 'bg-white/5 text-white/60 hover:bg-white/10'}`}>
                        {t === 80 ? '80 (Friday)' : t}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-6 overflow-y-auto flex-grow flex flex-col items-center justify-between text-center space-y-6">
                  {showVirtuesTab ? (
                    <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="py-6 space-y-4 text-center my-auto">
                      <div className="w-16 h-16 rounded-full bg-[#125A3A] text-emerald-200 flex items-center justify-center mx-auto text-2xl shadow-xl border border-emerald-400/40">📖</div>
                      <h4 className="serif-heading text-xl font-bold text-[#F3D797]">Benefits of Durood Shareef</h4>
                      <div className="p-4 rounded-2xl bg-white/5 border border-[#D4AF37]/30 space-y-2">
                        <h4 className="text-sm font-bold text-[#F3D797] flex items-center gap-2"><Award className="w-4 h-4 text-[#D4AF37]" /> Easy to Recite</h4>
                        <p className="text-xs text-emerald-100/90 leading-relaxed">It is short, easy to memorize, and perfect for abundant daily recitation throughout your day.</p>
                      </div>
                      <div className="p-4 rounded-2xl bg-white/5 border border-[#D4AF37]/30 space-y-2">
                        <h4 className="text-sm font-bold text-[#F3D797] flex items-center gap-2"><Heart className="w-4 h-4 text-[#D4AF37]" /> Deep Connection</h4>
                        <p className="text-xs text-emerald-100/90 leading-relaxed">It honors the Prophet's attribute as "Al-Ummi" (the unlettered), explicitly mentioned in the Holy Qur'an.</p>
                      </div>
                      <button onClick={() => setShowVirtuesTab(false)} className="w-full py-3 rounded-2xl bg-[#D4AF37] text-[#082819] font-bold text-xs hover:bg-[#F3D797] transition-all cursor-pointer text-center">Back to Counter</button>
                    </motion.div>
                  ) : (
                    <>
                      <div className="w-full space-y-3 pt-1">
                        <div className="text-2xl sm:text-3xl font-serif text-[#F3D797] font-bold tracking-wide leading-relaxed dir-rtl">اَللّٰهُمَّ صَلِّ عَلٰى مُحَمَّدٍ النَّبِيِّ الْأُمِّيِّ وَعَلٰى آلِهِ وَسَلِّمْ</div>
                        <div className="text-xs sm:text-sm font-semibold text-emerald-100/90 leading-snug">Allahumma salli 'ala Muhammadin-in-Nabiyyil-Ummiyyi wa 'ala aalihi wa sallim.</div>
                        <div className="text-[11px] text-[#D4AF37]/80 italic max-w-sm mx-auto">"O Allah, send blessings upon Muhammad, the Unlettered Prophet, and upon his family, and grant them peace."</div>
                      </div>

                      <div className="py-2 flex flex-col items-center justify-center relative">
                        <motion.button onClick={handleIncrementDurood} whileTap={{ scale: 0.92 }} whileHover={{ scale: 1.03 }} className="relative w-40 h-40 sm:w-44 sm:h-44 rounded-full bg-gradient-to-b from-[#125A3A] to-[#082819] border-4 border-[#D4AF37]/60 shadow-[0_0_40px_rgba(212,175,55,0.25)] flex flex-col items-center justify-center cursor-pointer group select-none active:brightness-125 transition-all">
                          <svg className="absolute inset-0 w-full h-full -rotate-90 p-1" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="46" className="stroke-white/10" strokeWidth="4" fill="transparent" />
                            <circle cx="50" cy="50" r="46" className="stroke-[#F3D797] transition-all duration-300" strokeWidth="5" strokeDasharray={289} strokeDashoffset={289 - (289 * duroodProgress) / 100} strokeLinecap="round" fill="transparent" />
                          </svg>
                          <span className="text-[10px] uppercase tracking-widest text-emerald-200/70 font-medium">RECITED DUROOD</span>
                          <span className="text-4xl sm:text-5xl font-black text-[#F3D797] my-1 font-mono">{duroodCount}</span>
                          <span className="text-[11px] text-emerald-100/70 font-semibold">Target: {duroodTarget}</span>
                        </motion.button>
                        <p className="text-[10px] text-emerald-200/50 mt-3">Tap to count each Durood Shareef</p>
                      </div>

                      <div className="w-full space-y-1.5 bg-white/5 p-3 rounded-2xl border border-white/10">
                        <div className="flex justify-between items-center text-xs font-semibold">
                          <span className="text-emerald-100/80">Target Goal ({duroodTarget})</span>
                          <span className="text-[#F3D797] font-mono">{duroodProgress}%</span>
                        </div>
                        <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                          <div className="bg-gradient-to-r from-[#D4AF37] to-[#F3D797] h-full transition-all duration-300" style={{ width: `${duroodProgress}%` }} />
                        </div>
                      </div>
                    </>
                  )}
                </div>

                <div className="p-4 border-t border-white/10 bg-[#0B3C26] flex items-center justify-between text-xs text-emerald-100/70">
                  <button onClick={handleResetDurood} className="flex items-center gap-1.5 text-emerald-200/70 hover:text-white transition-colors cursor-pointer">
                    <RotateCcw className="w-3.5 h-3.5" /> Reset Counter
                  </button>
                  <button onClick={() => setShowVirtuesTab(!showVirtuesTab)} className="text-[#F3D797] hover:underline cursor-pointer text-xs font-semibold">
                    {showVirtuesTab ? 'Back to Counter' : 'Read Virtues →'}
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
