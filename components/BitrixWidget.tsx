"use client";

import { useEffect } from "react";

export function BitrixWidget() {
    useEffect(() => {
        (function (w, d, u) {
            var s = d.createElement('script'); s.async = true; s.src = u + '?' + (Date.now() / 60000 | 0);
            var h = d.getElementsByTagName('script')[0];
            if (h && h.parentNode) {
                h.parentNode.insertBefore(s, h);
            }
        })(window, document, 'https://cdn.bitrix24.es/b24200673/crm/site_button/loader_2_hqu5lg.js');

        const handleBitrixLoad = (event: any) => {
            const widget = event.detail.widget;

            // Track when user sends a message
            widget.subscribe({
                type: 'userMessage', // Using string type directly as BX might not be fully typed globally
                callback: function () {
                    if (typeof (window as any).gtag === 'function') {
                        (window as any).gtag('event', 'conversion', { 'send_to': 'AW-17435666964/m6psCIKg4MwbEJTU_PlA' });
                    }
                }
            });
        };

        window.addEventListener('onBitrixLiveChat', handleBitrixLoad);

        return () => {
            window.removeEventListener('onBitrixLiveChat', handleBitrixLoad);
        };
    }, []);

    return null;
}
