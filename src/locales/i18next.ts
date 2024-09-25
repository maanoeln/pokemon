import i18next from 'i18next';
import en from './i18n/en.json';
import pt from './i18n/pt.json';
import xx from './tags.json';

i18next.init({
  lng: `pt_BR`,
  fallbackLng: `xx`,
  debug: false,
  resources: {
    pt_BR: pt,
    en_US: en,
    xx,
  },
  interpolation: {
    escapeValue: false,
  },
  react: { nsMode: `default`, useSuspense: false, defaultTransParent: `div` },
});

export default i18next;
