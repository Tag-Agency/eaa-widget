
import { AxsSettings, DEFAULT_SETTINGS } from '../types';

const COOKIE_NAME = 'axs_settings';

export const CookieService = {
  saveSettings: (settings: AxsSettings) => {
    const expires = new Date();
    expires.setFullYear(expires.getFullYear() + 1);
    document.cookie = `${COOKIE_NAME}=${encodeURIComponent(JSON.stringify(settings))};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
  },

  getSettings: (): AxsSettings => {
    const name = COOKIE_NAME + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i].trim();
      if (c.indexOf(name) === 0) {
        try {
          return JSON.parse(c.substring(name.length, c.length));
        } catch (e) {
          return DEFAULT_SETTINGS;
        }
      }
    }
    return DEFAULT_SETTINGS;
  }
};
