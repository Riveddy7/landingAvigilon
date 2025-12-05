"use client";

import { useEffect } from "react";

declare global {
    interface Window {
        google: any;
        googleTranslateElementInit: () => void;
    }
}

export function GoogleTranslate() {
    useEffect(() => {
        const addScript = () => {
            if (document.getElementById("google-translate-script")) return;

            const script = document.createElement("script");
            script.id = "google-translate-script";
            script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
            script.async = true;
            document.body.appendChild(script);

            window.googleTranslateElementInit = () => {
                new window.google.translate.TranslateElement(
                    {
                        pageLanguage: "es",
                        includedLanguages: "en,es",
                        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
                        autoDisplay: false,
                    },
                    "google_translate_element"
                );
            };
        };

        addScript();
    }, []);

    return (
        <>
            <style jsx global>{`
                .google-translate-container {
                    display: inline-block;
                    vertical-align: middle;
                }
                
                /* Target the Simple layout container */
                .goog-te-gadget-simple {
                    background-color: #f1f5f9 !important; /* slate-100 */
                    border: 1px solid #e2e8f0 !important; /* slate-200 */
                    padding: 6px 12px !important;
                    border-radius: 9999px !important;
                    font-size: 0.875rem !important;
                    line-height: 1.25rem !important;
                    display: inline-flex !important;
                    align-items: center !important;
                    justify-content: center !important;
                    cursor: pointer !important;
                    transition: all 0.2s !important;
                }

                .goog-te-gadget-simple:hover {
                    background-color: #e2e8f0 !important; /* slate-200 */
                    color: #0078D4 !important;
                }

                /* Hide the Google Logo */
                .goog-te-gadget-simple img {
                    display: none !important;
                }

                /* Style the text */
                .goog-te-menu-value {
                    color: #475569 !important; /* slate-600 */
                    font-family: inherit !important;
                    margin: 0 !important;
                }
                
                .goog-te-menu-value span {
                    color: inherit !important;
                    border-left: none !important;
                }
                
                /* Hide the "Select Language" text if possible, or style it */
                /* We can't easily change the text content via CSS, but we can style it */

                /* Hide the vertical separator */
                .goog-te-menu-value span:nth-child(2) {
                    display: none !important;
                }

                /* Custom arrow if needed, but Google provides one */
                .goog-te-menu-value span:last-child {
                    font-size: 10px !important;
                    color: #64748b !important; /* slate-500 */
                    margin-left: 4px !important;
                }

                /* Hide the Google top bar */
                .goog-te-banner-frame {
                    display: none !important;
                }
                
                body {
                    top: 0 !important;
                }
                
                /* Hide the Google tooltip */
                .goog-tooltip {
                    display: none !important;
                }
                
                .goog-tooltip:hover {
                    display: none !important;
                }
                
                .goog-text-highlight {
                    background-color: transparent !important;
                    box-shadow: none !important;
                }
            `}</style>
            <div id="google_translate_element" className="google-translate-container" />
        </>
    );
}
