
"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { AxsSettings, DEFAULT_SETTINGS } from '../types';
import { CookieService } from '../services/CookieService';
import { AxsEngine } from '../services/AxsEngine';
import AxsCard from './AxsCard';
import * as Icons from './Icons';

interface WidgetProps {
  primaryColor?: string;
  position?: 'left' | 'right';
}

const AccessibilityWidget: React.FC<WidgetProps> = ({ primaryColor = '#3f51b5', position = 'right' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AxsSettings>(DEFAULT_SETTINGS);
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Initialize
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = CookieService.getSettings();
    setSettings(saved);
    AxsEngine.apply(saved);
  }, []);

  // Update logic
  const updateSetting = useCallback(<K extends keyof AxsSettings>(key: K, value: AxsSettings[K]) => {
    setSettings(prev => {
      const next = { ...prev, [key]: value };
      CookieService.saveSettings(next);
      AxsEngine.apply(next);
      return next;
    });
  }, []);

  const resetAll = () => {
    setSettings(DEFAULT_SETTINGS);
    CookieService.saveSettings(DEFAULT_SETTINGS);
    AxsEngine.apply(DEFAULT_SETTINGS);
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  const handleTTS = () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      const text = document.body.innerText;
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    }
  };

  // Keyboard support: Close on Escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`fixed bottom-4 z-[9999] flex flex-col ${position === 'left' ? 'left-4 items-start' : 'right-4 items-end'}`}
      style={{ '--axs-primary': primaryColor } as React.CSSProperties}
    >
      {/* Panel */}
      {isOpen && (
        <div
          className="mb-3 bg-white rounded-[2rem] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.4)] border border-gray-100 w-[480px] max-w-[92vw] max-h-[calc(100vh-140px)] overflow-hidden flex flex-col animate-in slide-in-from-bottom-6 fade-in duration-500"
          role="dialog"
          aria-label="Menu Accessibilità"
        >
          {/* Header - Fixed */}
          <div className="p-7 text-white flex items-center justify-between shrink-0 z-10" style={{ backgroundColor: primaryColor }}>
            <div>
              <h2 className="text-xl font-black tracking-tight uppercase leading-none mb-1">Centro Accessibilità</h2>
              <p className="text-xs opacity-70 font-medium italic">Strumenti di assistenza digitale</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-3 hover:bg-white/20 rounded-full transition-all hover:rotate-90 active:scale-90"
              aria-label="Chiudi menu"
            >
              <Icons.IconClose />
            </button>
          </div>

          {/* Grid - Scrollable area */}
          <div className="flex-1 overflow-y-auto p-6 grid grid-cols-2 gap-5 bg-gray-50/80 custom-scrollbar">
            <AxsCard
              label="Leggi Pagina"
              icon={<Icons.IconSpeaker />}
              isActive={isSpeaking}
              onClick={handleTTS}
              valueLabel={isSpeaking ? "Attivo" : "Disattivo"}
            />
            <AxsCard
              label="Contrasto +"
              icon={<Icons.IconContrast />}
              isActive={settings.contrastPlus}
              onClick={() => updateSetting('contrastPlus', !settings.contrastPlus)}
              valueLabel={settings.contrastPlus ? "Attivo" : "Disattivo"}
            />
            <AxsCard
              label="Smart Contrast"
              icon={<Icons.IconContrast />}
              isActive={settings.smartContrast}
              onClick={() => updateSetting('smartContrast', !settings.smartContrast)}
              valueLabel={settings.smartContrast ? "Attivo" : "Disattivo"}
            />
            <AxsCard
              label="Evidenzia Link"
              icon={<Icons.IconLink />}
              isActive={settings.highlightLinks}
              onClick={() => updateSetting('highlightLinks', !settings.highlightLinks)}
              valueLabel={settings.highlightLinks ? "Attivo" : "Disattivo"}
            />
            <AxsCard
              label="Testo Grande"
              icon={<Icons.IconText />}
              isActive={settings.textSize > 0}
              valueLabel={`${(settings.textSize + 1) * 100}%`}
              onClick={() => updateSetting('textSize', ((settings.textSize + 1) % 4) as any)}
            />
            <AxsCard
              label="Spaziatura Testo"
              icon={<Icons.IconSpacing />}
              isActive={settings.textSpacing}
              onClick={() => updateSetting('textSpacing', !settings.textSpacing)}
              valueLabel={settings.textSpacing ? "Attivo" : "Disattivo"}
            />
            <AxsCard
              label="Ferma Animazioni"
              icon={<Icons.IconAnimation />}
              isActive={settings.stopAnimations}
              onClick={() => updateSetting('stopAnimations', !settings.stopAnimations)}
              valueLabel={settings.stopAnimations ? "Fermate" : "Attive"}
            />
            <AxsCard
              label="Nascondi Immagini"
              icon={<Icons.IconImage />}
              isActive={settings.hideImages}
              onClick={() => updateSetting('hideImages', !settings.hideImages)}
              valueLabel={settings.hideImages ? "Nascoste" : "Visibili"}
            />
            <AxsCard
              label="Font Dislessia"
              icon={<Icons.IconDyslexia />}
              isActive={settings.dyslexiaFriendly}
              onClick={() => updateSetting('dyslexiaFriendly', !settings.dyslexiaFriendly)}
              valueLabel={settings.dyslexiaFriendly ? "Attivo" : "Disattivo"}
            />
            <AxsCard
              label="Cursore Grande"
              icon={<Icons.IconCursor />}
              isActive={settings.bigCursor}
              onClick={() => updateSetting('bigCursor', !settings.bigCursor)}
              valueLabel={settings.bigCursor ? "Attivo" : "Disattivo"}
            />
            <AxsCard
              label="Interlinea"
              icon={<Icons.IconLineHeight />}
              isActive={settings.lineHeight > 0}
              valueLabel={['Normale', 'Ampia', 'Extra'][settings.lineHeight]}
              onClick={() => updateSetting('lineHeight', ((settings.lineHeight + 1) % 3) as any)}
            />
            <AxsCard
              label="Allineamento"
              icon={<Icons.IconAlign />}
              isActive={settings.textAlign !== 'default'}
              valueLabel={settings.textAlign === 'default' ? 'Default' : settings.textAlign.toUpperCase()}
              onClick={() => {
                const alignMap: AxsSettings['textAlign'][] = ['default', 'left', 'center', 'right', 'justify'];
                const nextIdx = (alignMap.indexOf(settings.textAlign) + 1) % alignMap.length;
                updateSetting('textAlign', alignMap[nextIdx]);
              }}
            />
            <AxsCard
              label="Saturazione"
              icon={<Icons.IconSaturation />}
              isActive={settings.saturation !== 1}
              valueLabel={['B/N', 'Normale', 'Alta'][settings.saturation]}
              onClick={() => updateSetting('saturation', ((settings.saturation + 1) % 3) as any)}
            />
          </div>

          {/* Footer - Fixed */}
          <div className="p-7 bg-white border-t border-gray-100 flex gap-4 shrink-0">
            <button
              onClick={resetAll}
              className="flex-1 py-4 text-[10px] font-black text-gray-400 hover:text-gray-900 bg-gray-50 border border-gray-200 rounded-2xl hover:bg-gray-100 transition-all shadow-sm uppercase tracking-[0.15em]"
            >
              Reset
            </button>
            <button
              onClick={() => window.print()}
              className="flex-1 py-4 text-[10px] font-black text-[#3f51b5] hover:text-[#303f9f] bg-blue-50 border border-blue-100 rounded-2xl hover:bg-blue-100 transition-all shadow-sm uppercase tracking-[0.15em]"
            >
              Stampa
            </button>
          </div>
          <div className="py-3 text-center bg-gray-50 text-[9px] text-gray-400 font-black tracking-[0.25em] uppercase border-t border-gray-100 shrink-0">
            Vento Adv | European Accessibility Act
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          flex items-center justify-center w-16 h-16 rounded-full shadow-2xl transition-all duration-500 
          ${isOpen ? 'bg-red-500 rotate-180' : 'hover:scale-110 active:scale-95'}
          text-white ring-4 ring-white ring-offset-2 ring-offset-transparent
        `}
        style={{ backgroundColor: !isOpen ? primaryColor : undefined }}
        aria-expanded={isOpen}

        aria-label="Apri menu accessibilità"
        title="Accessibilità"
      >
        <div className={`transition-transform duration-500 flex items-center justify-center w-10 h-10 ${isOpen ? 'scale-75' : 'scale-110'}`}>
          {isOpen ? (
            <Icons.IconClose />
          ) : (
            <Icons.IconAxs />
          )}
        </div>
      </button>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 8px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #f9fafb; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e5e7eb; border-radius: 20px; border: 2px solid #f9fafb; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #d1d5db; }
      `}</style>
    </div>
  );
};

export default AccessibilityWidget;
