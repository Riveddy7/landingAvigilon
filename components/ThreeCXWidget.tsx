"use client";

import { useEffect } from "react";

export function ThreeCXWidget() {
    useEffect(() => {
        const script = document.createElement("script");
        script.defer = true;
        script.src = "https://downloads-global.3cx.com/downloads/livechatandtalk/v1/callus.js";
        script.id = "tcx-callus-js";
        script.charset = "utf-8";
        document.body.appendChild(script);

        return () => {
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    return (
        // @ts-ignore - Custom element
        <call-us-selector
            phonesystem-url="https://1681.3cx.cloud"
            party="LiveChat368131"
        />
    );
}
