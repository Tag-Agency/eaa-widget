import React from 'react';
import ReactDOM from 'react-dom/client';
import AccessibilityWidget from './components/AccessibilityWidget';
import './app/globals.css'; // Import styles to be bundled

const WIDGET_ID = 'axs-pro-widget-container';

// Helper to get params from script tag
const getScriptParams = () => {
    const currentScript = document.currentScript as HTMLScriptElement;
    if (!currentScript) return {};

    const src = currentScript.src;
    if (!src.includes('?')) return {};

    const queryString = src.split('?')[1];
    const params = new URLSearchParams(queryString);

    // Fix color if it doesn't have # (URLSearchParams might strip it or user might omit it)
    let color = params.get('color');
    if (color && !color.startsWith('#')) {
        color = '#' + color;
    }

    return {
        primaryColor: color,
        position: params.get('position') as 'left' | 'right',
        autoInit: currentScript.getAttribute('data-auto-init') === 'true'
    };
};

export function initAxsWidget(config: any = {}) {
    // Check if already exists
    if (document.getElementById(WIDGET_ID)) {
        return;
    }

    // Create container
    const container = document.createElement('div');
    container.id = WIDGET_ID;
    document.body.appendChild(container);

    // Mount React
    const root = ReactDOM.createRoot(container);
    root.render(
        <React.StrictMode>
            <AccessibilityWidget {...config} />
        </React.StrictMode>
    );
}

// Auto-init logic
if (typeof window !== 'undefined') {
    // @ts-ignore
    window.AXS_Widget = { init: initAxsWidget };

    const params = getScriptParams();
    if (params.autoInit) {
        initAxsWidget({
            primaryColor: params.primaryColor,
            position: params.position
        });
    }
}
