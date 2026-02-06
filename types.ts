
export interface AxsSettings {
  contrastPlus: boolean;
  smartContrast: boolean;
  highlightLinks: boolean;
  textSize: number; // 0, 1, 2, 3
  textSpacing: boolean;
  stopAnimations: boolean;
  hideImages: boolean;
  dyslexiaFriendly: boolean;
  bigCursor: boolean;
  lineHeight: number; // 0, 1, 2
  textAlign: 'left' | 'center' | 'right' | 'justify' | 'default';
  saturation: number; // 0 (gray), 1 (normal), 2 (high)
}

export const DEFAULT_SETTINGS: AxsSettings = {
  contrastPlus: false,
  smartContrast: false,
  highlightLinks: false,
  textSize: 0,
  textSpacing: false,
  stopAnimations: false,
  hideImages: false,
  dyslexiaFriendly: false,
  bigCursor: false,
  lineHeight: 0,
  textAlign: 'default',
  saturation: 1,
};
