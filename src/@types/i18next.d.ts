import "i18next";
import ns1 from "../../public/locales/pt-BR/translation.json";

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof ns1;
  }
}

declare module 'i18next' {
  interface CustomTypeOptions {
    returnNull: false;
  }
}