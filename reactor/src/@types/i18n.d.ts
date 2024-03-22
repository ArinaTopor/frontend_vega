import 'react-i18next';
import translationRu from '../../public/locales/ru/translation.json';
import translationEn from '../../public/locales/en/translation.json';
import 'i18next';
// import all namespaces (for the default language, only)

// declare module 'i18next' {
//     // Extend CustomTypeOptions
//     interface CustomTypeOptions {
//         // custom namespace type, if you changed it
//         defaultNS: 'ns1';
//         // custom resources type
//         resources: {
//             ns1: typeof translation;
//             ns2: typeof translationEn;
//         };
//         // other
//     }
// }

// declare module 'react-i18next' {
//     interface Resources {
//         nsEn: typeof translation;
//         nsRu: typeof translationEn;
//     }
// }

declare module 'react-i18next' {
    interface CustomTypeOptions {
        defaultNS: 'nsEn';
        resources: {
            nsEn: typeof translationEn;
            nsRu: typeof translationRu;
        };
    }
}
