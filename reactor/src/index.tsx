import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import './index.css';
import App from './App';
import { I18nextProvider } from 'react-i18next';
import './i18n';
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            {/* <I18nextProvider i18n={i18n} defaultNS={'translation'}> */}
            <App />
            {/* </I18nextProvider> */}
        </Provider>
    </React.StrictMode>
);
