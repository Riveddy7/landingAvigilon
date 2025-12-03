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
    }, []);

    return null;
}
