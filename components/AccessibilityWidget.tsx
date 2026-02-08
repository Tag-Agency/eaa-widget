
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

const AccessibilityWidget: React.FC<WidgetProps> = ({ primaryColor = '#c4ac44', position = 'right' }) => {
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
      // Try to read main content first, fallback to body
      const contentEl = document.querySelector('main') || document.querySelector('article') || document.body;
      const text = (contentEl as HTMLElement).innerText;

      if (!text.trim()) return;

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'it-IT'; // Force Italian
      utterance.rate = 1.0;
      utterance.pitch = 1.0;

      // Try to select an Italian voice
      const setVoice = () => {
        const voices = window.speechSynthesis.getVoices();
        const itVoice = voices.find(v => v.lang.includes('it-IT') || v.lang.includes('it_IT')) || voices.find(v => v.lang.startsWith('it'));
        if (itVoice) {
          utterance.voice = itVoice;
        }
      };

      if (window.speechSynthesis.getVoices().length === 0) {
        window.speechSynthesis.onvoiceschanged = setVoice;
      } else {
        setVoice();
      }

      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = (e) => {
        // Ignore 'canceled' or 'interrupted' errors which are expected during toggling
        if (e.error === 'canceled' || e.error === 'interrupted') {
          setIsSpeaking(false);
          return;
        }
        console.error('TTS Error details:', { error: e.error, event: e });
        setIsSpeaking(false);
      };
      
      window.speechSynthesis.cancel(); // Safety cancel
      // Small timeout to ensure cancel is processed
      setTimeout(() => {
        window.speechSynthesis.speak(utterance);
        setIsSpeaking(true);
      }, 50);
    }
  };

  // Keyboard support: Close on Escape, Toggle on Ctrl+U
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'u') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`fixed bottom-4 z-[9999] flex flex-col font-sans ${position === 'left' ? 'left-4 items-start' : 'right-4 items-end'}`}
      style={{ '--axs-primary': primaryColor, fontFamily: 'system-ui, -apple-system, sans-serif' } as React.CSSProperties}
    >
      {/* Panel */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[9998] animate-in fade-in duration-300"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          
          {/* Bottom Sheet */}
          <div
            className={`fixed bottom-0 ${position === 'left' ? 'left-4' : 'right-4'} bg-white rounded-t-[2rem] shadow-[0_-10px_40px_rgba(0,0,0,0.15)] border-t border-gray-100 w-[480px] max-w-[92vw] max-h-[85vh] overflow-hidden flex flex-col animate-in slide-in-from-bottom-full duration-500 z-[9999]`}
            role="dialog"
            aria-label="Menu Accessibilità"
            aria-modal="true"
          >
            {/* Header */}
            <div className="p-4 text-white flex items-center justify-between shrink-0 relative" style={{ backgroundColor: primaryColor }}>
              <h2 className="text-sm font-bold tracking-wider uppercase pl-2">Centro Accessibilità</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/20 rounded-full transition-all hover:rotate-90 active:scale-90"
                aria-label="Chiudi menu"
              >
                <Icons.IconClose />
              </button>
            </div>

            {/* Grid - Scrollable area */}
            <div className="flex-1 overflow-y-auto p-6 bg-gray-50/80 custom-scrollbar">
              
              {/* Visivo */}
              <div className="mb-6">
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 ml-1">Visivo</h3>
                <div className="grid grid-cols-2 gap-4">
                  <AxsCard
                    label="Contrasto +"
                    icon={<Icons.IconContrast />}
                    isActive={settings.contrastPlus}
                    onClick={() => updateSetting('contrastPlus', !settings.contrastPlus)}
                    valueLabel={settings.contrastPlus ? "Attivo" : "Disattivo"}
                  />
                  <AxsCard
                    label="Saturazione"
                    icon={<Icons.IconSaturation />}
                    isActive={settings.saturation !== 1}
                    valueLabel={['B/N', 'Normale', 'Alta'][settings.saturation]}
                    onClick={() => updateSetting('saturation', ((settings.saturation + 1) % 3) as any)}
                  />
                  <AxsCard
                    label="Nascondi Immagini"
                    icon={<Icons.IconImage />}
                    isActive={settings.hideImages}
                    onClick={() => updateSetting('hideImages', !settings.hideImages)}
                    valueLabel={settings.hideImages ? "Nascoste" : "Visibili"}
                  />
                  <AxsCard
                    label="Ferma Animazioni"
                    icon={<Icons.IconAnimation />}
                    isActive={settings.stopAnimations}
                    onClick={() => updateSetting('stopAnimations', !settings.stopAnimations)}
                    valueLabel={settings.stopAnimations ? "Fermate" : "Attive"}
                  />
                </div>
              </div>

              {/* Testo */}
              <div className="mb-6">
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 ml-1">Testo</h3>
                <div className="grid grid-cols-2 gap-4">
                  <AxsCard
                    label="Testo Grande"
                    icon={<Icons.IconText />}
                    isActive={settings.textSize > 0}
                    valueLabel={`${(settings.textSize + 1) * 100}%`}
                    onClick={() => updateSetting('textSize', ((settings.textSize + 1) % 4) as any)}
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
                    label="Font Dislessia"
                    icon={<Icons.IconDyslexia />}
                    isActive={settings.dyslexiaFriendly}
                    onClick={() => updateSetting('dyslexiaFriendly', !settings.dyslexiaFriendly)}
                    valueLabel={settings.dyslexiaFriendly ? "Attivo" : "Disattivo"}
                  />
                  <AxsCard
                    label="Spaziatura Testo"
                    icon={<Icons.IconSpacing />}
                    isActive={settings.textSpacing}
                    onClick={() => updateSetting('textSpacing', !settings.textSpacing)}
                    valueLabel={settings.textSpacing ? "Attivo" : "Disattivo"}
                  />
                </div>
              </div>

              {/* Orientamento */}
              <div className="mb-6">
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 ml-1">Orientamento</h3>
                <div className="grid grid-cols-2 gap-4">
                  <AxsCard
                    label="Evidenzia Link"
                    icon={<Icons.IconLink />}
                    isActive={settings.highlightLinks}
                    onClick={() => updateSetting('highlightLinks', !settings.highlightLinks)}
                    valueLabel={settings.highlightLinks ? "Attivo" : "Disattivo"}
                  />
                  <AxsCard
                    label="Smart Contrast"
                    icon={<Icons.IconContrast />}
                    isActive={settings.smartContrast}
                    onClick={() => updateSetting('smartContrast', !settings.smartContrast)}
                    valueLabel={settings.smartContrast ? "Attivo" : "Disattivo"}
                  />
                  <AxsCard
                    label="Cursore Grande"
                    icon={<Icons.IconCursor />}
                    isActive={settings.bigCursor}
                    onClick={() => updateSetting('bigCursor', !settings.bigCursor)}
                    valueLabel={settings.bigCursor ? "Attivo" : "Disattivo"}
                  />
                  <AxsCard
                    label="Leggi Pagina"
                    icon={<Icons.IconSpeaker />}
                    isActive={isSpeaking}
                    onClick={handleTTS}
                    valueLabel={isSpeaking ? "Attivo" : "Disattivo"}
                  />
                </div>
              </div>

            </div>

            {/* Footer - Fixed */}
            <div className="p-7 bg-white border-t border-gray-100 flex gap-4 shrink-0">
              <button
                onClick={resetAll}
                className="flex-1 py-4 text-[10px] font-black text-gray-400 hover:text-gray-900 bg-gray-50 border border-gray-200 rounded-2xl hover:bg-gray-100 transition-all shadow-sm uppercase tracking-[0.15em]"
              >
                Reset
              </button>
            </div>
            <div className="py-3 text-center bg-gray-50 text-[9px] text-gray-400 font-black tracking-[0.25em] uppercase border-t border-gray-100 shrink-0">
              European Accessibility Act
            </div>
          </div>
        </>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        tabIndex={-1}
        role="button"
        className={`
          flex items-center justify-center w-14 h-14 rounded-full shadow-2xl transition-all duration-500 
          ${isOpen ? 'scale-0 opacity-0 pointer-events-none' : 'hover:scale-110 active:scale-95 scale-100 opacity-100'}
          text-white ring-4 ring-white ring-offset-2 ring-offset-transparent
        `}
        style={{ backgroundColor: !isOpen ? primaryColor : undefined }}
        aria-expanded={isOpen}

        aria-label="Apri menu accessibilità (Premi Ctrl+U)"
        title="Accessibilità (Ctrl+U)"
      >
        <div className={`transition-transform duration-500 flex items-center justify-center w-full h-full ${isOpen ? 'scale-75' : 'scale-110'}`}>
          {isOpen ? (
            <Icons.IconClose />
          ) : (
            <div className="scale-125">
              <Icons.IconAxs />
            </div>
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
