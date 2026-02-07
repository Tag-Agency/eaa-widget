import React from 'react';
import ReactDOM from 'react-dom/client';
import AccessibilityWidget from './components/AccessibilityWidget';
// @ts-ignore
import styles from './app/globals.css?inline';

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
    // Ensure body exists
    if (!document.body) {
        window.addEventListener('DOMContentLoaded', () => initAxsWidget(config));
        return;
    }

    // Check if already exists
    if (document.getElementById(WIDGET_ID)) {
        return;
    }

    // Create Host Element
    const host = document.createElement('div');
    host.id = WIDGET_ID;
    // Ensure host is on top of everything but doesn't block clicks when empty
    host.style.position = 'absolute';
    host.style.zIndex = '2147483647'; // Max z-index
    host.style.top = '0';
    host.style.left = '0';
    host.style.width = '0';
    host.style.height = '0';
    
    document.body.appendChild(host);

    // Create Shadow DOM
    const shadow = host.attachShadow({ mode: 'open' });

    // Inject Styles
    const styleTag = document.createElement('style');
    styleTag.textContent = styles;
    shadow.appendChild(styleTag);

    // Create Mount Point
    const mountPoint = document.createElement('div');
    mountPoint.id = 'axs-mount-point';
    // Reset font size to avoid rem scaling issues if possible, though rem comes from html
    // We can at least ensure local inheritance is clean
    mountPoint.style.fontFamily = 'system-ui, -apple-system, sans-serif';
    mountPoint.style.all = 'initial'; // Reset inherited styles
    mountPoint.style.display = 'block'; // Ensure it's a block element
    
    shadow.appendChild(mountPoint);

    // Mount React
    const root = ReactDOM.createRoot(mountPoint);
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
