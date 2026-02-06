module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Documents/Siti Headless/eaa-widget/types.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_SETTINGS",
    ()=>DEFAULT_SETTINGS
]);
const DEFAULT_SETTINGS = {
    contrastPlus: false,
    smartContrast: false,
    highlightLinks: false,
    textSize: 0,
    textSpacing: false,
    stopAnimations: false,
    hideImages: false,
    dyslexiaFriendly: false,
    bigCursor: false,
    lineHeight: 0,
    textAlign: 'default',
    saturation: 1
};
}),
"[project]/Documents/Siti Headless/eaa-widget/services/CookieService.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CookieService",
    ()=>CookieService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Siti Headless/eaa-widget/types.ts [app-ssr] (ecmascript)");
;
const COOKIE_NAME = 'axs_settings';
const CookieService = {
    saveSettings: (settings)=>{
        const expires = new Date();
        expires.setFullYear(expires.getFullYear() + 1);
        document.cookie = `${COOKIE_NAME}=${encodeURIComponent(JSON.stringify(settings))};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
    },
    getSettings: ()=>{
        const name = COOKIE_NAME + "=";
        const decodedCookie = decodeURIComponent(document.cookie);
        const ca = decodedCookie.split(';');
        for(let i = 0; i < ca.length; i++){
            let c = ca[i].trim();
            if (c.indexOf(name) === 0) {
                try {
                    return JSON.parse(c.substring(name.length, c.length));
                } catch (e) {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_SETTINGS"];
                }
            }
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_SETTINGS"];
    }
};
}),
"[project]/Documents/Siti Headless/eaa-widget/services/AxsEngine.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AxsEngine",
    ()=>AxsEngine
]);
const AxsEngine = {
    apply: (settings)=>{
        const root = document.documentElement;
        const body = document.body;
        // Reset some values first
        root.style.filter = '';
        body.classList.remove('axs-big-cursor', 'axs-dyslexia', 'axs-stop-animations', 'axs-hide-images', 'axs-highlight-links');
        // Contrast & Saturation
        let filterStr = '';
        if (settings.contrastPlus) filterStr += 'invert(1) hue-rotate(180deg) ';
        if (settings.smartContrast) filterStr += 'contrast(1.5) brightness(1.1) ';
        if (settings.saturation === 0) filterStr += 'grayscale(1) ';
        if (settings.saturation === 2) filterStr += 'saturate(2) ';
        root.style.filter = filterStr.trim();
        // Text Size
        const sizeMap = [
            '100%',
            '120%',
            '140%',
            '160%'
        ];
        root.style.fontSize = sizeMap[settings.textSize];
        // Text Spacing
        body.style.letterSpacing = settings.textSpacing ? '0.12em' : '';
        // Line Height
        const lhMap = [
            'normal',
            '1.5',
            '2'
        ];
        body.style.lineHeight = lhMap[settings.lineHeight];
        // Text Align
        body.style.textAlign = settings.textAlign === 'default' ? '' : settings.textAlign;
        // Classes for complex CSS
        if (settings.bigCursor) body.classList.add('axs-big-cursor');
        if (settings.dyslexiaFriendly) body.classList.add('axs-dyslexia');
        if (settings.stopAnimations) body.classList.add('axs-stop-animations');
        if (settings.hideImages) body.classList.add('axs-hide-images');
        if (settings.highlightLinks) body.classList.add('axs-highlight-links');
        // Inject required styles if not present
        if (!document.getElementById('axs-global-styles')) {
            const style = document.createElement('style');
            style.id = 'axs-global-styles';
            style.innerHTML = `
        .axs-big-cursor, .axs-big-cursor * { cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24' fill='black' stroke='white' stroke-width='1'%3E%3Cpath d='M7 2l12 11.2-5.8.8 3.5 6-2.5 1.4-3.4-6.1L7 19V2z'/%3E%3C/svg%3E"), auto !important; }
        .axs-dyslexia { font-family: 'OpenDyslexic', 'Comic Sans MS', sans-serif !important; }
        .axs-stop-animations * { animation: none !important; transition: none !important; }
        .axs-hide-images img, .axs-hide-images picture, .axs-hide-images video { visibility: hidden !important; }
        .axs-highlight-links a { text-decoration: underline !important; outline: 3px solid #ff0 !important; background-color: #000 !important; color: #fff !important; }
      `;
            document.head.appendChild(style);
        }
    }
};
}),
"[project]/Documents/Siti Headless/eaa-widget/components/AxsCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Siti Headless/eaa-widget/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Siti Headless/eaa-widget/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const AxsCard = ({ label, icon, isActive, valueLabel, onClick })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        "aria-pressed": isActive,
        className: `
        flex flex-col items-center justify-between p-5 rounded-3xl border-2 transition-all duration-300
        ${isActive ? 'bg-blue-50 shadow-md scale-[1.02]' : 'border-gray-100 bg-white text-gray-700 hover:border-gray-300 hover:shadow-lg'}
        group min-h-[140px] w-full
      `,
        style: isActive ? {
            borderColor: 'var(--axs-primary)',
            color: 'var(--axs-primary)'
        } : {},
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col items-center justify-center w-full gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `transition-transform duration-300 ${isActive ? 'scale-110' : 'text-gray-400 group-hover:text-[var(--axs-primary)]'}`,
                        style: isActive ? {
                            color: 'var(--axs-primary)'
                        } : {},
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].isValidElement(icon) ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].cloneElement(icon, {
                            size: 28
                        }) : icon
                    }, void 0, false, {
                        fileName: "[project]/Documents/Siti Headless/eaa-widget/components/AxsCard.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[11px] font-black uppercase tracking-tight text-center leading-[1.2] px-1 w-full break-words",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/Documents/Siti Headless/eaa-widget/components/AxsCard.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Siti Headless/eaa-widget/components/AxsCard.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-6 flex items-center mt-2",
                children: valueLabel ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `text-[10px] font-extrabold px-2.5 py-1 rounded-full shadow-sm transition-colors ${isActive ? 'text-white' : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200'}`,
                    style: isActive ? {
                        backgroundColor: 'var(--axs-primary)'
                    } : {},
                    children: valueLabel
                }, void 0, false, {
                    fileName: "[project]/Documents/Siti Headless/eaa-widget/components/AxsCard.tsx",
                    lineNumber: 42,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `w-2 h-2 rounded-full transition-colors ${!isActive && 'bg-gray-200'}`,
                    style: isActive ? {
                        backgroundColor: 'var(--axs-primary)'
                    } : {}
                }, void 0, false, {
                    fileName: "[project]/Documents/Siti Headless/eaa-widget/components/AxsCard.tsx",
                    lineNumber: 49,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Documents/Siti Headless/eaa-widget/components/AxsCard.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Siti Headless/eaa-widget/components/AxsCard.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = AxsCard;
}),
"[project]/Documents/Siti Headless/eaa-widget/components/Icons.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconAlign",
    ()=>IconAlign,
    "IconAnimation",
    ()=>IconAnimation,
    "IconAxs",
    ()=>IconAxs,
    "IconClose",
    ()=>IconClose,
    "IconContrast",
    ()=>IconContrast,
    "IconCursor",
    ()=>IconCursor,
    "IconDyslexia",
    ()=>IconDyslexia,
    "IconImage",
    ()=>IconImage,
    "IconLineHeight",
    ()=>IconLineHeight,
    "IconLink",
    ()=>IconLink,
    "IconSaturation",
    ()=>IconSaturation,
    "IconSpacing",
    ()=>IconSpacing,
    "IconSpeaker",
    ()=>IconSpeaker,
    "IconText",
    ()=>IconText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Siti Headless/eaa-widget/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const IconAxs = ({ size = 24, className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 60 60",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M30,4.42857143 C44.12271,4.42857143 55.5714286,15.87729 55.5714286,30 C55.5714286,44.12271 44.12271,55.5714286,30,55.5714286 C15.87729,55.5714286 4.42857143,44.12271 4.42857143,30 C4.42857143,15.87729 15.87729,4.42857143,30,4.42857143 Z M30,6.42857143 C16.9818595,6.42857143 6.42857143,16.9818595 6.42857143,30 C6.42857143,43.0181405 16.9818595,53.5714286,30,53.5714286 C43.0181405,53.5714286 53.5714286,43.0181405 53.5714286,30 C53.5714286,16.9818595 43.0181405,6.42857143 30,6.42857143 Z M40.5936329,24.636146 C40.8208154,24.6942382 41.032297,24.8027599 41.212927,24.9537151 C41.3927444,25.1040671 41.5372605,25.2927156 41.6362456,25.506032 C41.7348561,25.7185411 41.7857143,25.9504498 41.7857143,26.1964545 C41.7780029,26.5779794 41.6395197,26.9452414 41.3935596,27.2352841 C41.1463511,27.5267988 40.8059352,27.7221149 40.4376358,27.7856619 C38.1921773,28.2017648 35.924387,28.4827808 33.6481064,28.6271294 C33.504948,28.636723 33.3651112,28.6758744 33.236922,28.7423749 C33.1082304,28.8090766 32.9940039,28.9018917 32.9011681,29.0153772 C32.8079332,29.1293505 32.7382931,29.2617886 32.6966918,29.404413 C32.6758615,29.4759144 32.6622539,29.5492793 32.6556797,29.6151616 L32.6510699,29.707205 L32.6598659,29.8496307 L32.8523035,31.5976067 C33.0926408,33.748446 33.5345387,35.8701755 34.1700609,37.9296172 L34.4174424,38.6989233 L34.6845982,39.467246 L35.9271291,42.8464114 C35.9992453,43.0440742 36.0318055,43.2541674 36.0229684,43.4645736 C36.0141278,43.6750654 35.9640303,43.8817121 35.8754594,44.0726551 C35.7867069,44.2638976 35.6611068,44.435479 35.5058759,44.5773262 C35.3501721,44.7195962 35.1677426,44.8289881 34.990022,44.8912207 C34.813373,44.9615763 34.6253467,44.9984764 34.4204191,45 C34.1147901,44.9943164 33.8175473,44.8987335 33.5650597,44.7252745 C33.4238771,44.6283171 33.2997507,44.5091367 33.1890431,44.3580526 L33.0826737,44.1959755 L33.0074053,44.0456077 L32.6901551,43.3562659 C31.8320879,41.4806152 31.0484874,39.6428286 30.3335907,37.8221303 L30.0024971,36.9627165 L29.5751047,38.0696169 C29.3403684,38.6636654 29.0998399,39.2560704 28.8536693,39.8464776 L28.4802005,40.730546 L27.9043756,42.0504488 L27.3109116,43.3600706 L27.0273167,43.9425803 C26.8810403,44.3389204 26.5849764,44.6608321 26.2034873,44.8369557 C25.8203243,45.0138521 25.3831542,45.0287926 24.9891662,44.8783588 C24.596572,44.7285499 24.2795594,44.4271943 24.1072539,44.0414047 C23.9885793,43.7756939 23.9446874,43.4836867 23.9834048,43.1768668 L24.016611,42.9910892 L24.0667666,42.8262042 L25.307875,39.4507095 C26.0439275,37.4198431 26.5851782,35.3222044 26.9239335,33.1916604 L27.0414597,32.3912301 L27.141282,31.5772235 L27.3403361,29.8381618 C27.3581635,29.6889408 27.3459492,29.5375642 27.3045081,29.3935084 C27.2630999,29.2497044 27.1934915,29.1162414 27.1000261,29.0011883 C27.0070148,28.8866944 26.8923305,28.7928596 26.7631114,28.7253145 C26.6343439,28.6580256 26.4937323,28.6181655 26.35351,28.6082966 C24.0561093,28.4626746 21.7692364,28.17737 19.5069975,27.7542651 C19.3015835,27.7165557 19.1057712,27.6379419 18.9308258,27.5230481 C18.7563857,27.408486 18.6063103,27.2602422 18.4889941,27.0867756 C18.3721069,26.9139017 18.2901967,26.7194847 18.2478998,26.5149205 C18.2055002,26.3103882 18.2034637,26.0993152 18.2403615,25.9020167 C18.2758029,25.695193 18.3515339,25.4974971 18.4633288,25.3201771 C18.5754166,25.1425366 18.7215515,24.9891682 18.8933065,24.8690391 C19.0655425,24.7486376 19.2599761,24.6643395 19.4651939,24.6211361 C19.6706526,24.577882 19.8826185,24.5767675 20.0822706,24.6166765 C26.6343689,25.8477827 33.3528511,25.8477827 39.8979716,24.6180222 C40.1283133,24.5717053 40.3659882,24.5779122 40.5936329,24.636146 Z M32.8056386,16.182956 C34.3520224,17.7551666 34.3520224,20.3006423 32.80563,21.8728616 C31.2542658,23.450066 28.7353061,23.450066 27.1840106,21.8728616 C25.6375563,20.3006489 25.6375563,17.7551599 27.1839933,16.1829647 C28.7352993,14.6056799 31.2542726,14.6056799 32.8056386,16.182956 Z",
            fill: "currentColor",
            fillRule: "nonzero"
        }, void 0, false, {
            fileName: "[project]/Documents/Siti Headless/eaa-widget/components/Icons.tsx",
            lineNumber: 12,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/Siti Headless/eaa-widget/components/Icons.tsx",
        lineNumber: 11,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const IconSpeaker = ({ size = 24 })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
            }, void 0, false, {
                fileName: "[project]/Documents/Siti Headless/eaa-widget/components/Icons.tsx",
                lineNumber: 21,
                columnNumber: 150
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"
            }, void 0, false, {
                fileName: "[project]/Documents/Siti Headless/eaa-widget/components/Icons.tsx",
                lineNumber: 21,
                columnNumber: 203
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Siti Headless/eaa-widget/components/Icons.tsx",
        lineNumber: 21,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const IconContrast = ({ size = 24 })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }, void 0, false, {
                fileName: "[project]/Documents/Siti Headless/eaa-widget/components/Icons.tsx",
                lineNumber: 25,
                columnNumber: 150
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 2v20"
            }, void 0, false, {
                fileName: "[project]/Documents/Siti Headless/eaa-widget/components/Icons.tsx",
                lineNumber: 25,
                columnNumber: 182
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 12H2a10 10 0 0 0 10 10V12z"
            }, void 0, false, {
                fileName: "[project]/Documents/Siti Headless/eaa-widget/components/Icons.tsx",
                lineNumber: 25,
                columnNumber: 202
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Siti Headless/eaa-widget/components/Icons.tsx",
        lineNumber: 25,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const IconLink = ({ size = 24 })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
            }, void 0, false, {
                fileName: "[project]/Documents/Siti Headless/eaa-widget/components/Icons.tsx",
                lineNumber: 29,
                columnNumber: 150
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
            }, void 0, false, {
                fileName: "[project]/Documents/Siti Headless/eaa-widget/components/Icons.tsx",
                lineNumber: 29,
                columnNumber: 221
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Siti Headless/eaa-widget/components/Icons.tsx",
        lineNumber: 29,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const IconText = ({ size = 24 })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "4 7 4 4 20 4 20 7"
            }, void 0, false, {
                fileName: "[project]/Documents/Siti Headless/eaa-widget/components/Icons.tsx",
                lineNumber: 33,
                columnNumber: 150
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "9",
                y1: "20",
                x2: "15",
                y2: "20"
            }, void 0, false, {
                fileName: "[project]/Documents/Siti Headless/eaa-widget/components/Icons.tsx",
                lineNumber: 33,
                columnNumber: 188
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "12",
                y1: "4",
                x2: "12",
                y2: "20"
            }, void 0, false, {
                fileName: "[project]/Documents/Siti Headless/eaa-widget/components/Icons.tsx",
                lineNumber: 33,
                columnNumber: 226
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Siti Headless/eaa-widget/components/Icons.tsx",
        lineNumber: 33,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const IconSpacing = ({ size = 24 })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2 7h20"
            }, void 0, false, {
                fileName: "[project]/Documents/Siti Headless/eaa-widget/components/Icons.tsx",
                lineNumber: 37,
                columnNumber: 150
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2 12h20"
            }, void 0, false, {
                fileName: "[project]/Documents/Siti Headless/eaa-widget/components/Icons.tsx",
                lineNumber: 37,
                columnNumber: 169
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2 17h20"
            }, void 0, false, {
                fileName: "[project]/Documents/Siti Headless/eaa-widget/components/Icons.tsx",
                lineNumber: 37,
                columnNumber: 189
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Siti Headless/eaa-widget/components/Icons.tsx",
        lineNumber: 37,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const IconAnimation = ({ size = 24 })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "2",
                y: "2",
                width: "20",
                height: "20",
                rx: "5",
                ry: "5"
            }, void 0, false, {
                fileName: "[project]/Documents/Siti Headless/eaa-widget/components/Icons.tsx",
                lineNumber: 41,
                columnNumber: 150
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 18v-6"
            }, void 0, false, {
                fileName: "[project]/Documents/Siti Headless/eaa-widget/components/Icons.tsx",
                lineNumber: 41,
                columnNumber: 206
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 15v-3"
            }, void 0, false, {
                fileName: "[project]/Documents/Siti Headless/eaa-widget/components/Icons.tsx",
                lineNumber: 41,
                columnNumber: 227
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16 15v-3"
            }, void 0, false, {
                fileName: "[project]/Documents/Siti Headless/eaa-widget/components/Icons.tsx",
                lineNumber: 41,
                columnNumber: 247
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Siti Headless/eaa-widget/components/Icons.tsx",
        lineNumber: 41,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const IconImage = ({ size = 24 })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3",
                y: "3",
                width: "18",
                height: "18",
                rx: "2",
                ry: "2"
            }, void 0, false, {
                fileName: "[project]/Documents/Siti Headless/eaa-widget/components/Icons.tsx",
                lineNumber: 45,
                columnNumber: 150
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "8.5",
                cy: "8.5",
                r: "1.5"
            }, void 0, false, {
                fileName: "[project]/Documents/Siti Headless/eaa-widget/components/Icons.tsx",
                lineNumber: 45,
                columnNumber: 206
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "21 15 16 10 5 21"
            }, void 0, false, {
                fileName: "[project]/Documents/Siti Headless/eaa-widget/components/Icons.tsx",
                lineNumber: 45,
                columnNumber: 241
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Siti Headless/eaa-widget/components/Icons.tsx",
        lineNumber: 45,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const IconDyslexia = ({ size = 24 })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
            }, void 0, false, {
                fileName: "[project]/Documents/Siti Headless/eaa-widget/components/Icons.tsx",
                lineNumber: 49,
                columnNumber: 150
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
            }, void 0, false, {
                fileName: "[project]/Documents/Siti Headless/eaa-widget/components/Icons.tsx",
                lineNumber: 49,
                columnNumber: 193
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Siti Headless/eaa-widget/components/Icons.tsx",
        lineNumber: 49,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const IconCursor = ({ size = 24 })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z"
            }, void 0, false, {
                fileName: "[project]/Documents/Siti Headless/eaa-widget/components/Icons.tsx",
                lineNumber: 53,
                columnNumber: 150
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m13 13 6 6"
            }, void 0, false, {
                fileName: "[project]/Documents/Siti Headless/eaa-widget/components/Icons.tsx",
                lineNumber: 53,
                columnNumber: 202
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Siti Headless/eaa-widget/components/Icons.tsx",
        lineNumber: 53,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const IconLineHeight = ({ size = 24 })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M21 7h-9"
            }, void 0, false, {
                fileName: "[project]/Documents/Siti Headless/eaa-widget/components/Icons.tsx",
                lineNumber: 57,
                columnNumber: 150
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M21 12h-9"
            }, void 0, false, {
                fileName: "[project]/Documents/Siti Headless/eaa-widget/components/Icons.tsx",
                lineNumber: 57,
                columnNumber: 170
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M21 17h-9"
            }, void 0, false, {
                fileName: "[project]/Documents/Siti Headless/eaa-widget/components/Icons.tsx",
                lineNumber: 57,
                columnNumber: 191
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6 18V6"
            }, void 0, false, {
                fileName: "[project]/Documents/Siti Headless/eaa-widget/components/Icons.tsx",
                lineNumber: 57,
                columnNumber: 212
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "9 9 6 6 3 9"
            }, void 0, false, {
                fileName: "[project]/Documents/Siti Headless/eaa-widget/components/Icons.tsx",
                lineNumber: 57,
                columnNumber: 231
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "9 15 6 18 3 15"
            }, void 0, false, {
                fileName: "[project]/Documents/Siti Headless/eaa-widget/components/Icons.tsx",
                lineNumber: 57,
                columnNumber: 263
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Siti Headless/eaa-widget/components/Icons.tsx",
        lineNumber: 57,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const IconAlign = ({ size = 24 })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "17",
                y1: "10",
                x2: "3",
                y2: "10"
            }, void 0, false, {
                fileName: "[project]/Documents/Siti Headless/eaa-widget/components/Icons.tsx",
                lineNumber: 61,
                columnNumber: 150
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "21",
                y1: "6",
                x2: "3",
                y2: "6"
            }, void 0, false, {
                fileName: "[project]/Documents/Siti Headless/eaa-widget/components/Icons.tsx",
                lineNumber: 61,
                columnNumber: 188
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "21",
                y1: "14",
                x2: "3",
                y2: "14"
            }, void 0, false, {
                fileName: "[project]/Documents/Siti Headless/eaa-widget/components/Icons.tsx",
                lineNumber: 61,
                columnNumber: 224
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "17",
                y1: "18",
                x2: "3",
                y2: "18"
            }, void 0, false, {
                fileName: "[project]/Documents/Siti Headless/eaa-widget/components/Icons.tsx",
                lineNumber: 61,
                columnNumber: 262
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Siti Headless/eaa-widget/components/Icons.tsx",
        lineNumber: 61,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const IconSaturation = ({ size = 24 })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"
        }, void 0, false, {
            fileName: "[project]/Documents/Siti Headless/eaa-widget/components/Icons.tsx",
            lineNumber: 65,
            columnNumber: 150
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/Siti Headless/eaa-widget/components/Icons.tsx",
        lineNumber: 65,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const IconClose = ({ size = 24 })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "18",
                y1: "6",
                x2: "6",
                y2: "18"
            }, void 0, false, {
                fileName: "[project]/Documents/Siti Headless/eaa-widget/components/Icons.tsx",
                lineNumber: 69,
                columnNumber: 150
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "6",
                y1: "6",
                x2: "18",
                y2: "18"
            }, void 0, false, {
                fileName: "[project]/Documents/Siti Headless/eaa-widget/components/Icons.tsx",
                lineNumber: 69,
                columnNumber: 187
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Siti Headless/eaa-widget/components/Icons.tsx",
        lineNumber: 69,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
}),
"[project]/Documents/Siti Headless/eaa-widget/components/AccessibilityWidget.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Siti Headless/eaa-widget/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Siti Headless/eaa-widget/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Siti Headless/eaa-widget/types.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$services$2f$CookieService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Siti Headless/eaa-widget/services/CookieService.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$services$2f$AxsEngine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Siti Headless/eaa-widget/services/AxsEngine.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$components$2f$AxsCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Siti Headless/eaa-widget/components/AxsCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Siti Headless/eaa-widget/components/Icons.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const AccessibilityWidget = ({ primaryColor = '#3f51b5', position = 'right' })=>{
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [settings, setSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_SETTINGS"]);
    const [isSpeaking, setIsSpeaking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Initialize
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
        const saved = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$services$2f$CookieService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CookieService"].getSettings();
        setSettings(saved);
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$services$2f$AxsEngine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AxsEngine"].apply(saved);
    }, []);
    // Update logic
    const updateSetting = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((key, value)=>{
        setSettings((prev)=>{
            const next = {
                ...prev,
                [key]: value
            };
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$services$2f$CookieService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CookieService"].saveSettings(next);
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$services$2f$AxsEngine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AxsEngine"].apply(next);
            return next;
        });
    }, []);
    const resetAll = ()=>{
        setSettings(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_SETTINGS"]);
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$services$2f$CookieService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CookieService"].saveSettings(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_SETTINGS"]);
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$services$2f$AxsEngine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AxsEngine"].apply(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_SETTINGS"]);
        if (isSpeaking) {
            window.speechSynthesis.cancel();
            setIsSpeaking(false);
        }
    };
    const handleTTS = ()=>{
        if (isSpeaking) {
            window.speechSynthesis.cancel();
            setIsSpeaking(false);
        } else {
            const text = document.body.innerText;
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.onend = ()=>setIsSpeaking(false);
            utterance.onerror = ()=>setIsSpeaking(false);
            window.speechSynthesis.speak(utterance);
            setIsSpeaking(true);
        }
    };
    // Keyboard support: Close on Escape
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleEsc = (e)=>{
            if (e.key === 'Escape') setIsOpen(false);
        };
        window.addEventListener('keydown', handleEsc);
        return ()=>window.removeEventListener('keydown', handleEsc);
    }, []);
    if (!mounted) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `fixed bottom-4 z-[9999] flex flex-col ${position === 'left' ? 'left-4 items-start' : 'right-4 items-end'}`,
        style: {
            '--axs-primary': primaryColor
        },
        children: [
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3 bg-white rounded-[2rem] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.4)] border border-gray-100 w-[480px] max-w-[92vw] max-h-[calc(100vh-140px)] overflow-hidden flex flex-col animate-in slide-in-from-bottom-6 fade-in duration-500",
                role: "dialog",
                "aria-label": "Menu Accessibilità",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-7 text-white flex items-center justify-between shrink-0 z-10",
                        style: {
                            backgroundColor: primaryColor
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-black tracking-tight uppercase leading-none mb-1",
                                        children: "Centro Accessibilità"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Siti Headless/eaa-widget/components/AccessibilityWidget.tsx",
                                        lineNumber: 91,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs opacity-70 font-medium italic",
                                        children: "Strumenti di assistenza digitale"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Siti Headless/eaa-widget/components/AccessibilityWidget.tsx",
                                        lineNumber: 92,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Siti Headless/eaa-widget/components/AccessibilityWidget.tsx",
                                lineNumber: 90,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsOpen(false),
                                className: "p-3 hover:bg-white/20 rounded-full transition-all hover:rotate-90 active:scale-90",
                                "aria-label": "Chiudi menu",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconClose"], {}, void 0, false, {
                                    fileName: "[project]/Documents/Siti Headless/eaa-widget/components/AccessibilityWidget.tsx",
                                    lineNumber: 99,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Documents/Siti Headless/eaa-widget/components/AccessibilityWidget.tsx",
                                lineNumber: 94,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Siti Headless/eaa-widget/components/AccessibilityWidget.tsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto p-6 grid grid-cols-2 gap-5 bg-gray-50/80 custom-scrollbar",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$components$2f$AxsCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                label: "Leggi Pagina",
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconSpeaker"], {}, void 0, false, {
                                    fileName: "[project]/Documents/Siti Headless/eaa-widget/components/AccessibilityWidget.tsx",
                                    lineNumber: 107,
                                    columnNumber: 21
                                }, void 0),
                                isActive: isSpeaking,
                                onClick: handleTTS,
                                valueLabel: isSpeaking ? "Attivo" : "Disattivo"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Siti Headless/eaa-widget/components/AccessibilityWidget.tsx",
                                lineNumber: 105,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$components$2f$AxsCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                label: "Contrasto +",
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconContrast"], {}, void 0, false, {
                                    fileName: "[project]/Documents/Siti Headless/eaa-widget/components/AccessibilityWidget.tsx",
                                    lineNumber: 114,
                                    columnNumber: 21
                                }, void 0),
                                isActive: settings.contrastPlus,
                                onClick: ()=>updateSetting('contrastPlus', !settings.contrastPlus),
                                valueLabel: settings.contrastPlus ? "Attivo" : "Disattivo"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Siti Headless/eaa-widget/components/AccessibilityWidget.tsx",
                                lineNumber: 112,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$components$2f$AxsCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                label: "Smart Contrast",
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconContrast"], {}, void 0, false, {
                                    fileName: "[project]/Documents/Siti Headless/eaa-widget/components/AccessibilityWidget.tsx",
                                    lineNumber: 121,
                                    columnNumber: 21
                                }, void 0),
                                isActive: settings.smartContrast,
                                onClick: ()=>updateSetting('smartContrast', !settings.smartContrast),
                                valueLabel: settings.smartContrast ? "Attivo" : "Disattivo"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Siti Headless/eaa-widget/components/AccessibilityWidget.tsx",
                                lineNumber: 119,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$components$2f$AxsCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                label: "Evidenzia Link",
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconLink"], {}, void 0, false, {
                                    fileName: "[project]/Documents/Siti Headless/eaa-widget/components/AccessibilityWidget.tsx",
                                    lineNumber: 128,
                                    columnNumber: 21
                                }, void 0),
                                isActive: settings.highlightLinks,
                                onClick: ()=>updateSetting('highlightLinks', !settings.highlightLinks),
                                valueLabel: settings.highlightLinks ? "Attivo" : "Disattivo"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Siti Headless/eaa-widget/components/AccessibilityWidget.tsx",
                                lineNumber: 126,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$components$2f$AxsCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                label: "Testo Grande",
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconText"], {}, void 0, false, {
                                    fileName: "[project]/Documents/Siti Headless/eaa-widget/components/AccessibilityWidget.tsx",
                                    lineNumber: 135,
                                    columnNumber: 21
                                }, void 0),
                                isActive: settings.textSize > 0,
                                valueLabel: `${(settings.textSize + 1) * 100}%`,
                                onClick: ()=>updateSetting('textSize', (settings.textSize + 1) % 4)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Siti Headless/eaa-widget/components/AccessibilityWidget.tsx",
                                lineNumber: 133,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$components$2f$AxsCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                label: "Spaziatura Testo",
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconSpacing"], {}, void 0, false, {
                                    fileName: "[project]/Documents/Siti Headless/eaa-widget/components/AccessibilityWidget.tsx",
                                    lineNumber: 142,
                                    columnNumber: 21
                                }, void 0),
                                isActive: settings.textSpacing,
                                onClick: ()=>updateSetting('textSpacing', !settings.textSpacing),
                                valueLabel: settings.textSpacing ? "Attivo" : "Disattivo"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Siti Headless/eaa-widget/components/AccessibilityWidget.tsx",
                                lineNumber: 140,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$components$2f$AxsCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                label: "Ferma Animazioni",
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconAnimation"], {}, void 0, false, {
                                    fileName: "[project]/Documents/Siti Headless/eaa-widget/components/AccessibilityWidget.tsx",
                                    lineNumber: 149,
                                    columnNumber: 21
                                }, void 0),
                                isActive: settings.stopAnimations,
                                onClick: ()=>updateSetting('stopAnimations', !settings.stopAnimations),
                                valueLabel: settings.stopAnimations ? "Fermate" : "Attive"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Siti Headless/eaa-widget/components/AccessibilityWidget.tsx",
                                lineNumber: 147,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$components$2f$AxsCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                label: "Nascondi Immagini",
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconImage"], {}, void 0, false, {
                                    fileName: "[project]/Documents/Siti Headless/eaa-widget/components/AccessibilityWidget.tsx",
                                    lineNumber: 156,
                                    columnNumber: 21
                                }, void 0),
                                isActive: settings.hideImages,
                                onClick: ()=>updateSetting('hideImages', !settings.hideImages),
                                valueLabel: settings.hideImages ? "Nascoste" : "Visibili"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Siti Headless/eaa-widget/components/AccessibilityWidget.tsx",
                                lineNumber: 154,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$components$2f$AxsCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                label: "Font Dislessia",
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconDyslexia"], {}, void 0, false, {
                                    fileName: "[project]/Documents/Siti Headless/eaa-widget/components/AccessibilityWidget.tsx",
                                    lineNumber: 163,
                                    columnNumber: 21
                                }, void 0),
                                isActive: settings.dyslexiaFriendly,
                                onClick: ()=>updateSetting('dyslexiaFriendly', !settings.dyslexiaFriendly),
                                valueLabel: settings.dyslexiaFriendly ? "Attivo" : "Disattivo"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Siti Headless/eaa-widget/components/AccessibilityWidget.tsx",
                                lineNumber: 161,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$components$2f$AxsCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                label: "Cursore Grande",
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconCursor"], {}, void 0, false, {
                                    fileName: "[project]/Documents/Siti Headless/eaa-widget/components/AccessibilityWidget.tsx",
                                    lineNumber: 170,
                                    columnNumber: 21
                                }, void 0),
                                isActive: settings.bigCursor,
                                onClick: ()=>updateSetting('bigCursor', !settings.bigCursor),
                                valueLabel: settings.bigCursor ? "Attivo" : "Disattivo"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Siti Headless/eaa-widget/components/AccessibilityWidget.tsx",
                                lineNumber: 168,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$components$2f$AxsCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                label: "Interlinea",
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconLineHeight"], {}, void 0, false, {
                                    fileName: "[project]/Documents/Siti Headless/eaa-widget/components/AccessibilityWidget.tsx",
                                    lineNumber: 177,
                                    columnNumber: 21
                                }, void 0),
                                isActive: settings.lineHeight > 0,
                                valueLabel: [
                                    'Normale',
                                    'Ampia',
                                    'Extra'
                                ][settings.lineHeight],
                                onClick: ()=>updateSetting('lineHeight', (settings.lineHeight + 1) % 3)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Siti Headless/eaa-widget/components/AccessibilityWidget.tsx",
                                lineNumber: 175,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$components$2f$AxsCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                label: "Allineamento",
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconAlign"], {}, void 0, false, {
                                    fileName: "[project]/Documents/Siti Headless/eaa-widget/components/AccessibilityWidget.tsx",
                                    lineNumber: 184,
                                    columnNumber: 21
                                }, void 0),
                                isActive: settings.textAlign !== 'default',
                                valueLabel: settings.textAlign === 'default' ? 'Default' : settings.textAlign.toUpperCase(),
                                onClick: ()=>{
                                    const alignMap = [
                                        'default',
                                        'left',
                                        'center',
                                        'right',
                                        'justify'
                                    ];
                                    const nextIdx = (alignMap.indexOf(settings.textAlign) + 1) % alignMap.length;
                                    updateSetting('textAlign', alignMap[nextIdx]);
                                }
                            }, void 0, false, {
                                fileName: "[project]/Documents/Siti Headless/eaa-widget/components/AccessibilityWidget.tsx",
                                lineNumber: 182,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$components$2f$AxsCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                label: "Saturazione",
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconSaturation"], {}, void 0, false, {
                                    fileName: "[project]/Documents/Siti Headless/eaa-widget/components/AccessibilityWidget.tsx",
                                    lineNumber: 195,
                                    columnNumber: 21
                                }, void 0),
                                isActive: settings.saturation !== 1,
                                valueLabel: [
                                    'B/N',
                                    'Normale',
                                    'Alta'
                                ][settings.saturation],
                                onClick: ()=>updateSetting('saturation', (settings.saturation + 1) % 3)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Siti Headless/eaa-widget/components/AccessibilityWidget.tsx",
                                lineNumber: 193,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Siti Headless/eaa-widget/components/AccessibilityWidget.tsx",
                        lineNumber: 104,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-7 bg-white border-t border-gray-100 flex gap-4 shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: resetAll,
                                className: "flex-1 py-4 text-[10px] font-black text-gray-400 hover:text-gray-900 bg-gray-50 border border-gray-200 rounded-2xl hover:bg-gray-100 transition-all shadow-sm uppercase tracking-[0.15em]",
                                children: "Reset"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Siti Headless/eaa-widget/components/AccessibilityWidget.tsx",
                                lineNumber: 204,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>window.print(),
                                className: "flex-1 py-4 text-[10px] font-black text-[#3f51b5] hover:text-[#303f9f] bg-blue-50 border border-blue-100 rounded-2xl hover:bg-blue-100 transition-all shadow-sm uppercase tracking-[0.15em]",
                                children: "Stampa"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Siti Headless/eaa-widget/components/AccessibilityWidget.tsx",
                                lineNumber: 210,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Siti Headless/eaa-widget/components/AccessibilityWidget.tsx",
                        lineNumber: 203,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "py-3 text-center bg-gray-50 text-[9px] text-gray-400 font-black tracking-[0.25em] uppercase border-t border-gray-100 shrink-0",
                        children: "Vento Adv | European Accessibility Act"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Siti Headless/eaa-widget/components/AccessibilityWidget.tsx",
                        lineNumber: 217,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Siti Headless/eaa-widget/components/AccessibilityWidget.tsx",
                lineNumber: 83,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsOpen(!isOpen),
                className: `
          flex items-center justify-center w-16 h-16 rounded-full shadow-2xl transition-all duration-500 
          ${isOpen ? 'bg-red-500 rotate-180' : 'hover:scale-110 active:scale-95'}
          text-white ring-4 ring-white ring-offset-2 ring-offset-transparent
        `,
                style: {
                    backgroundColor: !isOpen ? primaryColor : undefined
                },
                "aria-expanded": isOpen,
                "aria-label": "Apri menu accessibilità",
                title: "Accessibilità",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `transition-transform duration-500 flex items-center justify-center w-10 h-10 ${isOpen ? 'scale-75' : 'scale-110'}`,
                    children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconClose"], {}, void 0, false, {
                        fileName: "[project]/Documents/Siti Headless/eaa-widget/components/AccessibilityWidget.tsx",
                        lineNumber: 239,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconAxs"], {}, void 0, false, {
                        fileName: "[project]/Documents/Siti Headless/eaa-widget/components/AccessibilityWidget.tsx",
                        lineNumber: 241,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Documents/Siti Headless/eaa-widget/components/AccessibilityWidget.tsx",
                    lineNumber: 237,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Documents/Siti Headless/eaa-widget/components/AccessibilityWidget.tsx",
                lineNumber: 224,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        .custom-scrollbar::-webkit-scrollbar { width: 8px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #f9fafb; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e5e7eb; border-radius: 20px; border: 2px solid #f9fafb; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #d1d5db; }
      `
            }, void 0, false, {
                fileName: "[project]/Documents/Siti Headless/eaa-widget/components/AccessibilityWidget.tsx",
                lineNumber: 245,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Siti Headless/eaa-widget/components/AccessibilityWidget.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = AccessibilityWidget;
}),
"[project]/Documents/Siti Headless/eaa-widget/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Siti Headless/eaa-widget/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$components$2f$AccessibilityWidget$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Siti Headless/eaa-widget/components/AccessibilityWidget.tsx [app-ssr] (ecmascript)");
"use client";
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center sticky top-0 z-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-xl font-black tracking-tighter text-blue-600",
                        children: [
                            "COMPANY",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-900",
                                children: "NAME"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Siti Headless/eaa-widget/app/page.tsx",
                                lineNumber: 11,
                                columnNumber: 90
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Siti Headless/eaa-widget/app/page.tsx",
                        lineNumber: 11,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-6 text-sm font-semibold text-gray-600",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                className: "hover:text-blue-600 transition-colors",
                                children: "Servizi"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Siti Headless/eaa-widget/app/page.tsx",
                                lineNumber: 13,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                className: "hover:text-blue-600 transition-colors",
                                children: "Blog"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Siti Headless/eaa-widget/app/page.tsx",
                                lineNumber: 14,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                className: "hover:text-blue-600 transition-colors",
                                children: "Contatti"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Siti Headless/eaa-widget/app/page.tsx",
                                lineNumber: 15,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Siti Headless/eaa-widget/app/page.tsx",
                        lineNumber: 12,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Siti Headless/eaa-widget/app/page.tsx",
                lineNumber: 10,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "max-w-4xl mx-auto px-6 py-20 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-5xl font-extrabold mb-6 leading-tight",
                        children: "Design Inclusivo per un Web Senza Barriere"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Siti Headless/eaa-widget/app/page.tsx",
                        lineNumber: 20,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xl text-gray-600 mb-8 max-w-2xl mx-auto",
                        children: "Questo è un esempio di sito web che implementa il widget di accessibilità AXS Pro. Usa il bottone in basso a destra per testare tutte le funzionalità."
                    }, void 0, false, {
                        fileName: "[project]/Documents/Siti Headless/eaa-widget/app/page.tsx",
                        lineNumber: 21,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl",
                                children: "Inizia Ora"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Siti Headless/eaa-widget/app/page.tsx",
                                lineNumber: 26,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "bg-white text-gray-900 border border-gray-300 px-8 py-3 rounded-full font-bold hover:bg-gray-50 transition-all",
                                children: "Saperne di più"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Siti Headless/eaa-widget/app/page.tsx",
                                lineNumber: 27,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Siti Headless/eaa-widget/app/page.tsx",
                        lineNumber: 25,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Siti Headless/eaa-widget/app/page.tsx",
                lineNumber: 19,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8",
                children: [
                    1,
                    2,
                    3
                ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: "bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: `https://picsum.photos/seed/${i + 10}/600/400`,
                                alt: `Immagine demo ${i}`,
                                className: "w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Siti Headless/eaa-widget/app/page.tsx",
                                lineNumber: 34,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-bold text-blue-600 uppercase tracking-widest mb-2 block",
                                        children: "Novità"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Siti Headless/eaa-widget/app/page.tsx",
                                        lineNumber: 36,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-bold mb-3",
                                        children: [
                                            "Articolo di Esempio #",
                                            i
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Siti Headless/eaa-widget/app/page.tsx",
                                        lineNumber: 37,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-500 mb-4 text-sm leading-relaxed",
                                        children: "Le nuove normative EAA (European Accessibility Act) richiedono che tutti i siti web siano accessibili entro il 2025."
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Siti Headless/eaa-widget/app/page.tsx",
                                        lineNumber: 38,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        className: "text-blue-600 font-bold text-sm inline-flex items-center group",
                                        children: [
                                            "Leggi tutto",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "2",
                                                    d: "M13 7l5 5m0 0l-5 5m5-5H6"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Siti Headless/eaa-widget/app/page.tsx",
                                                    lineNumber: 43,
                                                    columnNumber: 164
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Siti Headless/eaa-widget/app/page.tsx",
                                                lineNumber: 43,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Siti Headless/eaa-widget/app/page.tsx",
                                        lineNumber: 41,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Siti Headless/eaa-widget/app/page.tsx",
                                lineNumber: 35,
                                columnNumber: 25
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/Documents/Siti Headless/eaa-widget/app/page.tsx",
                        lineNumber: 33,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Documents/Siti Headless/eaa-widget/app/page.tsx",
                lineNumber: 31,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-gray-900 text-white py-20 mt-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto px-6 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-bold mb-6",
                            children: "Pronto ad adeguare il tuo sito?"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Siti Headless/eaa-widget/app/page.tsx",
                            lineNumber: 52,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-400 mb-8",
                            children: "Non aspettare le scadenze legali, rendi il tuo business accessibile a tutti già oggi."
                        }, void 0, false, {
                            fileName: "[project]/Documents/Siti Headless/eaa-widget/app/page.tsx",
                            lineNumber: 53,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            className: "flex flex-col sm:flex-row gap-4 max-w-md mx-auto",
                            onSubmit: (e)=>e.preventDefault(),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "email",
                                    placeholder: "Il tuo indirizzo email",
                                    className: "bg-gray-800 border-none px-6 py-3 rounded-lg flex-1 focus:ring-2 focus:ring-blue-500"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Siti Headless/eaa-widget/app/page.tsx",
                                    lineNumber: 55,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "bg-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors",
                                    children: "Invia"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Siti Headless/eaa-widget/app/page.tsx",
                                    lineNumber: 56,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Siti Headless/eaa-widget/app/page.tsx",
                            lineNumber: 54,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Siti Headless/eaa-widget/app/page.tsx",
                    lineNumber: 51,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Siti Headless/eaa-widget/app/page.tsx",
                lineNumber: 50,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "py-12 border-t border-gray-200 text-center text-gray-400 text-sm",
                children: "© 2024 AXS Pro Accessibility Solutions. Tutti i diritti riservati."
            }, void 0, false, {
                fileName: "[project]/Documents/Siti Headless/eaa-widget/app/page.tsx",
                lineNumber: 61,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Siti__Headless$2f$eaa$2d$widget$2f$components$2f$AccessibilityWidget$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Documents/Siti Headless/eaa-widget/app/page.tsx",
                lineNumber: 66,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Siti Headless/eaa-widget/app/page.tsx",
        lineNumber: 8,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__56f9d0e8._.js.map