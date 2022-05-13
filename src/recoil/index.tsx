import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';

import App from './App';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container as HTMLElement);

root.render(
    <React.StrictMode>
        <RecoilRoot>
            <App />
        </RecoilRoot>
    </React.StrictMode>
);
