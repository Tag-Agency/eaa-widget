
import { AxsSettings } from '../types';

export const AxsEngine = {
  apply: (settings: AxsSettings) => {
    const root = document.documentElement;
    const body = document.body;

    // Reset some values first
    root.style.filter = '';
    body.classList.remove('axs-big-cursor', 'axs-dyslexia', 'axs-stop-animations', 'axs-hide-images', 'axs-highlight-links');
    
    // Contrast & Saturation
    let filterStr = '';
    if (settings.contrastPlus) filterStr += 'invert(1) hue-rotate(180deg) ';
    if (settings.smartContrast) filterStr += 'contrast(1.5) brightness(1.1) ';
    if (settings.saturation === 0) filterStr += 'grayscale(1) ';
    if (settings.saturation === 2) filterStr += 'saturate(2) ';
    root.style.filter = filterStr.trim();

    // Text Size
    const sizeMap = ['100%', '120%', '140%', '160%'];
    root.style.fontSize = sizeMap[settings.textSize];

    // Text Spacing
    body.style.letterSpacing = settings.textSpacing ? '0.12em' : '';

    // Line Height
    const lhMap = ['normal', '1.5', '2'];
    body.style.lineHeight = lhMap[settings.lineHeight];

    // Text Align
    body.style.textAlign = settings.textAlign === 'default' ? '' : settings.textAlign;

    // Classes for complex CSS
    if (settings.bigCursor) body.classList.add('axs-big-cursor');
    if (settings.dyslexiaFriendly) body.classList.add('axs-dyslexia');
    if (settings.stopAnimations) body.classList.add('axs-stop-animations');
    if (settings.hideImages) body.classList.add('axs-hide-images');
    if (settings.highlightLinks) body.classList.add('axs-highlight-links');

    // Inject required styles if not present
    if (!document.getElementById('axs-global-styles')) {
      const style = document.createElement('style');
      style.id = 'axs-global-styles';
      style.innerHTML = `
        .axs-big-cursor, .axs-big-cursor * { cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24' fill='black' stroke='white' stroke-width='1'%3E%3Cpath d='M7 2l12 11.2-5.8.8 3.5 6-2.5 1.4-3.4-6.1L7 19V2z'/%3E%3C/svg%3E"), auto !important; }
        .axs-dyslexia { font-family: 'OpenDyslexic', 'Comic Sans MS', sans-serif !important; }
        .axs-stop-animations * { animation: none !important; transition: none !important; }
        .axs-hide-images img, .axs-hide-images picture, .axs-hide-images video { visibility: hidden !important; }
        .axs-highlight-links a { text-decoration: underline !important; outline: 3px solid #ff0 !important; background-color: #000 !important; color: #fff !important; }
      `;
      document.head.appendChild(style);
    }
  }
};
