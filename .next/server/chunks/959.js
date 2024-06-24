"use strict";
exports.id = 959;
exports.ids = [959];
exports.modules = {

/***/ 1702:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8906);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6201);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8768);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6959);
/* harmony import */ var _utils_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7270);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_4__, _index__WEBPACK_IMPORTED_MODULE_6__, _utils_context__WEBPACK_IMPORTED_MODULE_7__]);
([react_hot_toast__WEBPACK_IMPORTED_MODULE_4__, _index__WEBPACK_IMPORTED_MODULE_6__, _utils_context__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






//internal import


const Card = ()=>{
    const { address  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.useAccount)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "py-6 sm:py-12 bg-[#1A1A1A] text-gray-100",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container p-6 mx-auto space-y-8",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "space-y-2",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "text-3xl font-bold",
                            children: "All Listed Token For Sale"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "font-serif text-sm text-gray-400",
                            children: "Qualisque erroribus usu at, duo te agam solute mucius."
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_index__WEBPACK_IMPORTED_MODULE_6__/* .SingleCard */ .tR, {
                            index: 1,
                            name: "Tether USD",
                            walletAddress: address
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_index__WEBPACK_IMPORTED_MODULE_6__/* .SingleCard */ .tR, {
                            index: 2,
                            name: "BNB",
                            walletAddress: address
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_index__WEBPACK_IMPORTED_MODULE_6__/* .SingleCard */ .tR, {
                            index: 3,
                            name: "USD Coin",
                            walletAddress: address
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_index__WEBPACK_IMPORTED_MODULE_6__/* .SingleCard */ .tR, {
                            index: 4,
                            name: "stETH",
                            walletAddress: address
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_index__WEBPACK_IMPORTED_MODULE_6__/* .SingleCard */ .tR, {
                            index: 5,
                            name: "TRON",
                            walletAddress: address
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_index__WEBPACK_IMPORTED_MODULE_6__/* .SingleCard */ .tR, {
                            index: 6,
                            name: "Matic Token",
                            walletAddress: address
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_index__WEBPACK_IMPORTED_MODULE_6__/* .SingleCard */ .tR, {
                            index: 7,
                            name: "SHIBA INU",
                            walletAddress: address
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_index__WEBPACK_IMPORTED_MODULE_6__/* .SingleCard */ .tR, {
                            index: 8,
                            name: "Acomswap",
                            walletAddress: address
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3193:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6959);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_index__WEBPACK_IMPORTED_MODULE_2__]);
_index__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


//internal import

const Footer = ()=>{
    const footerMenu = [
        "Features",
        "Integrations",
        "Pricing",
        "FAQ"
    ];
    const footerMenu2 = [
        "Privacy",
        "Terms of Service"
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
        className: "px-4 divide-y bg-[#1A1A1A] text-gray-100",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "lg:w-1/3",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                            rel: "noopener noreferrer",
                            href: "#",
                            className: "flex justify-center space-x-3 lg:justify-start",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex items-center justify-center w-12 h-12 rounded-full bg-violet-400",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_index__WEBPACK_IMPORTED_MODULE_2__/* .Logo */ .TR, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "self-center text-2xl font-semibold text-gray-50",
                                    children: "Acom Swap"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: "tracki uppercase text-[#7765F3]",
                                        children: "Product"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                        className: "space-y-1 text-gray-50",
                                        children: footerMenu.map((menu, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    rel: "noopener noreferrer",
                                                    href: "#",
                                                    children: menu
                                                })
                                            }, i + 1))
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: "tracki uppercase text-[#7765F3]",
                                        children: "Company"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                        className: "space-y-1 text-gray-50",
                                        children: [
                                            "Privacy",
                                            "Terms of Service"
                                        ].map((menu, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    rel: "noopener noreferrer",
                                                    href: "#",
                                                    children: menu
                                                })
                                            }, i + 1))
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: "uppercase text-[#7765F3]",
                                        children: "Developers"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                        className: "space-y-1 text-gray-50",
                                        children: [
                                            "Public API",
                                            "Documentation",
                                            "Guides"
                                        ].map((menu, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    rel: "noopener noreferrer",
                                                    href: "#",
                                                    children: menu
                                                })
                                            }, i + 1))
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "uppercase text-[#7765F3]",
                                        children: "Social media"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex justify-start space-x-3 text-gray-50",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                rel: "noopener noreferrer",
                                                href: "#",
                                                title: "Facebook",
                                                className: "flex items-center p-1",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_index__WEBPACK_IMPORTED_MODULE_2__/* .Facebook */ .s1, {})
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                rel: "noopener noreferrer",
                                                href: "#",
                                                title: "Twitter",
                                                className: "flex items-center p-1",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_index__WEBPACK_IMPORTED_MODULE_2__/* .Twitter */ .tL, {})
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                rel: "noopener noreferrer",
                                                href: "#",
                                                title: "Instagram",
                                                className: "flex items-center p-1",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_index__WEBPACK_IMPORTED_MODULE_2__/* .Insta */ .U4, {})
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "py-6 text-sm text-center border-[#7765F3] border-t-[3px] text-gray-400",
                children: "@ 2024 @AcomUnity Co. All rights reserved."
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7673:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6921);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8906);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6201);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6959);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__, react_hot_toast__WEBPACK_IMPORTED_MODULE_4__, _index__WEBPACK_IMPORTED_MODULE_5__]);
([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__, react_hot_toast__WEBPACK_IMPORTED_MODULE_4__, _index__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const Header = ()=>{
    const { 0: tokenBalComp , 1: setTokenBalComp  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { address  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useAccount)();
    const notifyConnectWallet = ()=>react_hot_toast__WEBPACK_IMPORTED_MODULE_4__["default"].error("Connect wallet.", {
            duration: 2000
        });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setTokenBalComp(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_index__WEBPACK_IMPORTED_MODULE_5__/* .TokenBalance */ .F5, {
                    name: "USD Coin",
                    walletAddress: address
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_index__WEBPACK_IMPORTED_MODULE_5__/* .TokenBalance */ .F5, {
                    name: "BNB",
                    walletAddress: address
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_index__WEBPACK_IMPORTED_MODULE_5__/* .TokenBalance */ .F5, {
                    name: "SHIBA INU",
                    walletAddress: address
                })
            ]
        }));
        if (!address) notifyConnectWallet();
    }, [
        address
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
        className: "p-4 text-gray-100",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container flex justify-between h-16 mx-auto",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                rel: "noopener noreferrer",
                                href: "#",
                                "aria-label": "Back to homepage",
                                className: "flex items-center p-2",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_index__WEBPACK_IMPORTED_MODULE_5__/* .Logo */ .TR, {})
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                className: "items-stretch hidden space-x-3 lg:flex",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "flex",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            rel: "noopener noreferrer",
                                            href: "/",
                                            className: "flex items-center px-4 -mb-1 dark:border-transparent text- [#7765F3] border-[#7765F3]",
                                            children: "Swap"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "flex",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            rel: "noopener noreferrer",
                                            href: "/tokens",
                                            className: "flex items-center px-4 -mb-1 dark:border-transparent",
                                            children: "Token"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "flex",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            rel: "noopener noreferrer",
                                            href: "/tokens",
                                            className: "flex items-center px-4 -mb-1 dark:border-transparent",
                                            children: "NFTs"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "flex",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            rel: "noopener noreferrer",
                                            href: "/tokens",
                                            className: "flex items-center px-4 -mb-1 dark:border-transparent",
                                            children: "Pool"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "items-center flex-shrink-0 hidden lg:flex",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_index__WEBPACK_IMPORTED_MODULE_5__/* .TokenBalance */ .F5, {
                                name: "USD Coin",
                                walletAddress: address
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_index__WEBPACK_IMPORTED_MODULE_5__/* .TokenBalance */ .F5, {
                                name: "SHIBA INU",
                                walletAddress: address
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__.ConnectButton, {})
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "p-4 lg:hidden",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_index__WEBPACK_IMPORTED_MODULE_5__/* .Menu */ .v2, {})
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hot_toast__WEBPACK_IMPORTED_MODULE_4__.Toaster, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8688:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6959);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_index__WEBPACK_IMPORTED_MODULE_2__]);
_index__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


//internal import

const HeroSection = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "bg-[#1A1A1A] text-gray-100",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                            className: "text-5xl font-bold leading sm:text-6xl",
                            children: [
                                "Token",
                                "",
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-[#7765F3]",
                                    children: "Marketplace"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            className: "mt-6 mb-8 text-lg sm:mb-12",
                            children: [
                                "Swap, earn, and build on the leading decentralized crypto trading protocol.",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                    className: "hidden md:inline lg:hidden"
                                }),
                                "turpis pulvinar, est scelerisque ligula sem"
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    rel: "noopener noreferrer",
                                    href: "#",
                                    className: "px-8 py-3 text-lg font-semibold rounded bg-[#7765F3] text-gray-900",
                                    children: "Get started"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    rel: "noopener noreferrer",
                                    href: "#",
                                    className: "px-8 py-3 text-lg font-semibold border rounded border-gray-100",
                                    children: "Swap ERC20"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_index__WEBPACK_IMPORTED_MODULE_2__/* .SwapComponent */ .cU, {})
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeroSection);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5285:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Facebook = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        viewBox: "0 0 32 32",
        className: "w-5 h-5 fill-current",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Facebook);


/***/ }),

/***/ 8960:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Insta = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32",
        fill: "currentColor",
        className: "w-5 h-5 fill-current",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Insta);


/***/ }),

/***/ 5601:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Logo = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        version: "1.0",
        xmlns: "http://www.w3.org/2000/svg",
        width: "",
        height: "",
        viewBox: "0 0 489.000000 489.000000",
        preserveAspectRatio: "xMidYMid meet",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("metadata", {
                children: "Created by potrace 1.16, written by Peter Selinger 2001-2019"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                transform: "translate(0.000000,489.000000) scale(0.100000,-0.100000)",
                fill: "Blue",
                stroke: "none",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M2225 4774 c-326 -47 -455 -79 -664 -164 -170 -68 -420 -209 -528 -297 -24 -19 -48 -31 -54 -27 -7 4 -9 3 -6 -3 7 -11 -142 -139 -158 -135 -5 2 -7 0 -3 -4 4 -4 -31 -47 -77 -96 -263 -276 -447 -604 -561 -1001 -96 -334 -110 -714 -39 -1072 71 -356 218 -684 433 -970 41 -55 75 -105 75 -112 0 -7 3 -11 7 -10 3 1 44 -36 91 -82 268 -267 527 -443 828 -563 110 -43 272 -93 336 -103 22 -4 54 -11 70 -16 145 -44 593 -54 815 -19 196 31 259 45 412 96 333 111 652 310 910 567 382 381 618 871 677 1409 22 198 10 498 -28 705 -30 161 -109 399 -190 568 -140 294 -366 585 -613 791 -105 88 -310 224 -433 288 -204 107 -466 192 -715 231 -101 16 -513 29 -585 19z m585 -93 c717 -116 1340 -566 1666 -1203 239 -468 314 -1042 201 -1529 -22 -90 -56 -179 -70 -179 -39 -1 -149 -10 -192 -16 -27 -4 -60 -7 -73 -6 -19 0 -28 -10 -43 -47 -11 -25 -28 -64 -38 -86 -11 -22 -18 -41 -17 -41 0 -1 25 2 55 7 29 4 94 11 145 15 50 3 96 7 101 8 34 4 -38 -178 -136 -344 -359 -606 -1003 -1023 -1701 -1099 -137 -15 -413 -14 -548 3 -439 55 -839 228 -1180 512 -99 82 -261 250 -331 344 -59 80 -119 175 -119 189 0 9 187 31 263 31 26 0 47 3 47 7 0 11 -73 117 -95 136 -15 14 -28 17 -55 12 -19 -4 -82 -11 -140 -15 -126 -9 -121 -12 -187 129 -90 191 -150 397 -178 611 -20 151 -20 471 0 620 108 817 653 1507 1433 1814 174 68 362 115 569 142 151 19 459 11 623 -15z"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M2260 4349 c-645 -71 -1177 -423 -1504 -995 -81 -142 -177 -399 -211 -564 -4 -19 -18 -53 -31 -75 -12 -22 -26 -64 -30 -92 -6 -45 -4 -53 10 -53 21 0 24 -19 30 -195 5 -167 31 -333 76 -488 65 -223 123 -338 324 -637 44 -67 193 -225 278 -298 89 -75 116 -109 78 -99 -35 9 -12 -11 103 -88 239 -159 514 -258 817 -295 89 -11 247 -9 280 3 8 3 69 8 135 12 66 4 134 8 150 10 17 2 55 6 85 10 276 33 646 212 900 438 104 91 180 177 158 177 -8 0 -19 -5 -26 -12 -33 -33 -5 13 52 86 122 157 224 327 284 476 59 148 72 187 102 305 62 241 67 587 14 863 -17 88 -17 93 0 105 17 12 16 16 -3 67 -12 30 -30 62 -40 70 -11 8 -47 70 -81 138 -148 299 -309 508 -540 699 -260 215 -601 369 -928 418 -125 19 -373 26 -482 14z m-214 -118 c-14 -15 -16 -58 -16 -319 0 -166 2 -302 5 -302 3 0 24 9 45 20 l40 20 0 127 0 127 52 53 c28 29 57 67 62 85 18 54 86 48 86 -7 0 -30 -24 -49 -52 -41 -18 4 -33 -5 -70 -41 l-48 -47 0 -118 0 -118 55 27 55 27 0 57 c0 38 -5 61 -15 69 -22 19 -18 47 9 65 48 32 92 -28 51 -69 -9 -9 -15 -33 -15 -61 l0 -46 70 37 70 38 0 173 c0 141 -3 178 -16 198 -29 44 27 90 64 53 17 -17 15 -57 -3 -64 -13 -5 -15 -36 -15 -189 l0 -184 65 -34 65 -35 0 163 c0 135 -3 165 -16 175 -21 19 -14 61 13 71 16 6 29 3 45 -11 23 -19 23 -20 6 -50 -15 -27 -18 -58 -18 -198 l0 -167 59 -31 60 -31 60 61 61 62 0 206 c0 170 -3 208 -15 218 -19 16 -19 54 0 70 19 16 45 9 61 -16 13 -18 12 -24 -6 -47 -19 -23 -20 -40 -20 -233 l0 -208 -61 -62 -62 -62 82 -47 c53 -31 89 -60 104 -83 12 -20 25 -40 29 -46 4 -7 23 4 48 29 l40 39 0 219 c0 204 -1 221 -20 244 -18 23 -19 29 -6 47 16 25 42 32 61 16 19 -16 19 -54 0 -70 -13 -10 -15 -50 -15 -238 l0 -226 -41 -42 c-50 -51 -47 -67 22 -112 l52 -34 58 58 59 58 0 189 c0 173 -2 190 -20 215 -23 31 -19 57 11 73 45 23 83 -48 44 -81 -12 -10 -15 -46 -15 -209 l0 -197 -55 -54 c-30 -30 -55 -59 -55 -65 1 -11 112 -90 124 -88 4 1 38 30 77 64 l69 63 0 69 c0 47 -5 73 -15 83 -19 20 -19 39 1 58 30 31 74 13 74 -30 0 -12 -7 -27 -15 -34 -10 -9 -15 -31 -15 -74 l0 -61 -77 -77 -76 -77 26 -30 c14 -17 31 -46 37 -66 6 -19 16 -35 22 -35 6 0 104 93 219 207 178 176 209 211 207 234 -3 34 18 59 48 59 21 0 44 -25 44 -49 0 -17 -31 -41 -54 -41 -17 0 -83 -61 -239 -220 l-217 -221 14 -32 c30 -70 40 -87 50 -87 6 0 76 65 156 145 l145 145 121 0 c96 0 124 3 134 15 20 24 59 19 72 -10 8 -19 8 -28 -2 -40 -16 -19 -54 -19 -70 0 -10 12 -38 15 -133 15 l-120 0 -149 -147 c-81 -81 -148 -153 -148 -159 0 -35 30 -19 109 60 l86 86 218 0 c181 0 222 3 242 16 30 20 65 4 65 -29 0 -43 -44 -63 -70 -32 -10 13 -49 15 -234 15 l-221 0 -82 -82 c-70 -70 -83 -88 -83 -115 l0 -33 88 0 c48 0 178 -3 289 -7 l202 -6 91 88 c62 61 90 96 90 112 0 27 15 31 23 6 2 -10 8 -27 13 -37 6 -16 4 -18 -9 -13 -13 5 -43 -18 -110 -83 l-92 -89 -293 -1 -293 0 3 -22 3 -23 309 -3 309 -2 58 55 c54 52 62 56 99 53 53 -4 52 -22 -2 -26 -36 -3 -51 -11 -93 -52 l-50 -50 -315 -2 c-291 -3 -315 -4 -318 -20 -3 -17 20 -18 376 -18 325 0 381 2 392 15 26 31 70 11 70 -32 0 -15 -9 -27 -25 -35 -21 -9 -28 -8 -45 7 -19 17 -43 18 -388 16 -202 -1 -369 -5 -372 -8 -3 -3 9 -16 25 -29 29 -23 34 -24 220 -24 l191 0 39 -40 39 -40 170 -2 c229 -4 229 -22 1 -26 l-170 -2 -45 45 -44 45 -163 0 c-90 0 -163 -4 -163 -8 0 -4 6 -14 13 -21 6 -8 7 -11 2 -8 -6 3 -18 -1 -28 -8 -16 -12 -8 -21 87 -96 58 -46 116 -86 128 -90 19 -4 -6 -24 -147 -118 -93 -63 -183 -125 -199 -140 -16 -14 -26 -20 -22 -13 13 23 -11 12 -79 -34 -36 -25 -68 -44 -70 -42 -2 2 37 32 88 66 111 75 378 260 384 266 2 2 -50 44 -115 94 -65 50 -142 111 -172 136 -29 25 -71 58 -93 73 l-39 27 -41 -45 c-23 -24 -77 -88 -120 -142 l-79 -97 21 -55 c12 -31 21 -58 21 -60 0 -2 -12 3 -27 11 -16 7 -44 16 -63 20 -19 3 -57 10 -83 16 -26 6 -50 8 -53 5 -7 -6 50 -132 107 -237 25 -47 72 -136 103 -197 32 -62 64 -113 71 -113 8 0 18 22 25 53 7 28 18 62 26 74 8 12 14 30 14 39 0 33 15 3 45 -89 l30 -92 45 3 c25 2 47 8 48 13 5 13 30 11 34 -2 2 -6 16 -9 32 -7 l27 3 -32 33 c-47 48 -26 53 24 5 l42 -42 140 -3 c126 -3 143 -5 171 -25 17 -12 34 -20 37 -17 3 3 15 1 26 -6 22 -11 30 -63 11 -75 -5 -3 -10 -28 -10 -56 0 -42 -5 -54 -36 -89 -41 -46 -82 -60 -171 -60 -35 0 -63 -4 -63 -9 0 -15 101 -101 119 -101 45 0 57 -63 16 -82 -34 -15 -69 14 -61 53 4 21 -5 35 -52 82 -52 52 -62 57 -101 57 -24 0 -49 -6 -57 -15 -10 -10 -35 -15 -72 -15 l-56 0 59 -60 c32 -32 62 -57 67 -54 4 3 17 0 28 -6 30 -16 27 -67 -5 -82 -34 -15 -69 14 -61 53 4 21 -5 36 -57 87 l-63 62 -67 0 -67 0 0 -99 c0 -77 3 -101 16 -111 9 -8 14 -25 12 -44 -3 -27 -7 -31 -35 -34 -24 -2 -34 2 -43 19 -10 18 -8 26 9 50 18 24 21 42 21 119 0 64 -4 92 -12 94 -7 3 -73 7 -145 10 l-133 6 -27 -31 c-16 -17 -37 -36 -48 -41 -11 -6 -6 3 13 20 17 17 32 36 32 42 0 18 -136 10 -204 -11 -58 -19 -59 -19 -91 1 -18 11 -47 20 -64 20 -26 0 -36 -7 -53 -35 l-21 -36 -23 34 c-22 32 -25 34 -66 27 -24 -4 -51 -11 -60 -15 -9 -4 -41 -1 -70 6 -55 13 -237 21 -275 12 l-22 -5 25 -56 c14 -32 26 -67 26 -80 0 -15 -24 -48 -71 -97 l-72 -74 3 -210 c2 -164 0 -211 -9 -211 -10 0 -13 49 -13 213 l0 212 65 67 c93 96 92 99 -57 177 l-121 64 -34 -36 -33 -37 0 -175 c0 -163 2 -178 21 -204 17 -23 19 -32 10 -50 -14 -25 -53 -28 -71 -6 -13 16 -6 65 10 65 6 0 10 73 10 192 l0 192 27 28 27 28 -135 0 -134 0 -113 -113 c-98 -98 -112 -117 -107 -138 4 -18 0 -30 -14 -43 -19 -18 -22 -18 -46 -2 -40 26 -28 76 20 76 13 0 61 41 130 110 105 106 108 110 80 111 -17 1 -36 1 -43 0 -7 -1 -15 5 -18 14 -5 11 -22 15 -73 15 -55 0 -68 -3 -79 -20 -22 -35 -82 -20 -82 21 0 9 -11 24 -25 33 -66 43 -87 151 -42 216 47 71 60 75 245 78 130 3 171 7 183 18 15 13 17 13 23 -1 4 -13 18 -15 63 -13 l58 3 24 100 c13 55 33 120 44 145 11 25 48 118 84 208 48 123 61 167 53 177 -8 10 -7 13 5 11 11 -1 76 136 239 500 192 430 388 840 415 867 13 13 144 -259 453 -938 110 -242 201 -441 203 -443 1 -1 46 54 99 123 54 68 101 127 106 130 4 3 7 13 5 23 -1 9 0 11 2 5 12 -35 18 -3 15 84 -3 139 -21 388 -28 407 -9 24 -92 80 -211 142 l-108 56 -112 -6 c-65 -4 -113 -3 -113 2 0 12 170 25 205 16 26 -6 26 -6 -14 56 -23 35 -41 71 -41 80 0 9 -31 34 -77 62 -140 82 -240 138 -246 138 -4 0 31 -77 78 -170 47 -94 87 -179 88 -190 2 -11 24 -42 49 -68 41 -43 224 -253 272 -312 l20 -25 -21 20 c-12 11 -89 95 -171 188 -113 126 -159 185 -186 240 -49 101 -99 191 -110 199 -5 3 -11 13 -12 21 -1 8 -20 41 -41 74 -22 32 -52 80 -68 106 l-28 49 -48 -84 c-26 -45 -63 -104 -83 -130 -37 -50 -146 -248 -146 -267 0 -6 -80 -106 -177 -222 -98 -116 -192 -230 -209 -253 -37 -48 -154 -259 -154 -278 0 -6 10 -23 23 -37 30 -33 100 -131 94 -131 -2 0 -30 34 -61 75 -31 41 -58 75 -60 75 -2 0 -23 -41 -47 -90 -23 -50 -44 -88 -46 -86 -2 2 14 44 36 94 23 49 41 94 41 99 0 5 -11 20 -25 33 l-25 24 -30 -22 c-42 -31 -38 -13 4 20 19 15 37 38 39 50 3 13 4 6 4 -15 -1 -26 5 -44 20 -59 l21 -21 48 94 c60 120 106 187 213 313 119 138 261 313 261 320 0 3 -46 6 -102 7 -57 0 -112 4 -123 9 -13 5 27 9 107 9 l128 1 15 35 c14 35 142 265 173 314 18 26 31 33 -218 -109 -112 -63 -116 -67 -170 -148 -43 -65 -69 -91 -120 -125 -168 -111 -240 -173 -240 -205 0 -12 -4 -24 -10 -27 -5 -3 -10 -16 -9 -28 1 -20 2 -20 9 3 10 32 10 -224 0 -265 l-8 -30 -1 37 c0 20 -7 38 -13 40 -10 4 -10 21 1 83 7 43 15 84 18 92 3 7 1 13 -3 13 -5 0 -31 -42 -57 -93 l-48 -92 1 -125 0 -125 -58 -50 c-32 -27 -106 -86 -165 -130 -58 -44 -106 -82 -106 -85 0 -3 57 -45 127 -95 117 -83 243 -181 296 -230 29 -26 13 -16 -47 29 -27 20 -53 36 -58 36 -6 0 -31 14 -56 31 l-45 32 4 -43 4 -42 -252 -247 c-223 -218 -252 -249 -247 -272 5 -27 -21 -64 -38 -53 -15 9 -40 64 -34 74 3 6 16 10 28 10 15 0 97 75 269 247 137 137 248 253 248 258 0 6 -14 19 -31 29 l-30 18 -133 -131 -132 -131 -182 0 c-100 0 -182 2 -182 4 0 2 -3 13 -6 23 -6 15 -4 16 7 6 9 -10 62 -13 188 -13 l174 0 124 122 c67 67 123 126 123 130 0 5 -7 11 -16 15 -11 4 -37 -16 -83 -61 l-67 -66 -244 2 c-184 2 -244 6 -248 16 -3 9 50 12 244 12 l248 0 58 57 c32 32 58 61 58 65 0 4 -20 21 -44 38 l-44 32 -229 -1 c-128 -1 -232 -6 -238 -12 -5 -5 -22 -9 -37 -9 -21 0 -29 6 -34 25 -11 46 36 73 70 40 12 -12 51 -15 223 -15 l208 1 -34 28 -33 27 105 84 c58 46 103 88 101 92 -3 4 -80 8 -171 8 -157 0 -168 -1 -190 -22 -20 -18 -26 -20 -49 -10 -31 15 -30 57 2 79 18 12 24 11 47 -7 23 -18 40 -20 213 -20 l189 0 54 38 55 37 -289 3 -289 2 -48 -47 c-38 -37 -46 -52 -42 -70 8 -29 -11 -53 -41 -53 -53 0 -59 74 -7 86 15 4 53 31 84 60 l57 54 300 0 301 0 0 25 0 25 -123 0 -123 0 -59 60 -59 60 -196 0 c-156 -1 -199 -4 -214 -15 -30 -22 -36 -19 -34 21 1 38 21 55 41 35 7 -7 74 -11 207 -11 l196 0 64 -65 64 -65 118 0 118 0 0 77 0 77 -67 68 -67 68 -313 0 c-202 0 -313 4 -313 10 0 6 1 10 3 10 1 0 140 3 309 7 l307 6 75 -72 74 -73 17 32 17 33 -158 158 -159 159 -182 0 c-110 0 -184 -4 -188 -10 -13 -21 -24 -9 -13 15 l11 25 186 0 186 0 161 -161 162 -162 16 31 c9 17 16 37 16 44 0 7 -83 96 -185 198 l-185 185 0 106 c0 83 -3 109 -15 119 -33 27 -7 75 37 68 18 -2 24 -10 26 -36 2 -22 -2 -34 -12 -38 -13 -5 -16 -25 -16 -108 l0 -101 183 -182 182 -183 36 70 36 69 -95 95 c-52 53 -103 96 -112 96 -9 0 -25 9 -34 19 -23 25 -13 59 20 67 34 9 57 -13 50 -46 -4 -23 8 -39 87 -118 51 -51 96 -92 100 -92 4 0 30 16 58 37 l51 36 -175 176 c-96 97 -194 197 -218 224 -27 29 -51 47 -65 47 -24 0 -54 24 -54 42 0 18 31 48 50 48 25 0 40 -21 40 -55 0 -26 29 -59 219 -249 l218 -218 27 17 c14 10 26 20 26 24 0 3 -63 69 -140 146 l-140 140 0 106 c0 83 -3 109 -15 119 -33 27 -7 75 37 68 18 -2 24 -10 26 -36 2 -22 -2 -34 -12 -38 -13 -5 -16 -25 -16 -108 l0 -101 143 -142 142 -142 25 19 25 19 -67 68 -68 69 0 216 c0 188 -2 220 -17 247 -18 30 -17 31 5 53 17 18 26 20 39 12 34 -21 39 -42 15 -67 -21 -23 -22 -30 -22 -238 l0 -215 69 -68 c69 -68 69 -68 82 -45 9 18 14 105 17 321 l4 297 -66 72 c-37 40 -64 74 -61 77 3 4 36 -24 73 -61 l67 -67 5 -288 5 -287 22 35 c22 34 23 42 23 305 l0 271 -55 54 c-46 46 -68 80 -51 80 2 0 11 3 19 6 11 4 13 -1 10 -18 -3 -17 8 -35 46 -73 l51 -49 0 -263 c0 -145 4 -263 8 -263 29 0 32 29 32 332 0 272 -2 312 -17 334 -14 22 -14 27 -2 35 19 12 32 11 24 -1 -10 -16 5 -12 23 7 16 16 17 15 20 -6 2 -12 -4 -31 -12 -40z m2272 -2118 c3 -10 -71 -13 -350 -13 -314 1 -351 2 -333 15 16 13 70 15 349 13 253 -2 330 -6 334 -15z m-178 -163 c24 -24 25 -34 4 -54 -20 -20 -48 -20 -64 -1 -11 13 -54 15 -311 13 -237 -2 -300 0 -304 10 -2 7 3 16 11 19 9 3 142 3 297 0 268 -6 281 -5 305 13 31 25 37 25 62 0z m-1285 -715 c-22 -19 -59 -47 -82 -62 -32 -21 -43 -35 -43 -53 0 -17 -15 -41 -45 -70 l-45 -44 0 -182 c0 -149 3 -184 15 -194 19 -16 19 -54 0 -70 -19 -16 -45 -9 -61 16 -13 18 -12 24 6 47 18 23 20 40 20 205 l0 181 44 48 c24 26 42 51 40 55 -4 6 -42 -4 -107 -30 -31 -13 -40 -13 -50 -2 -10 10 -9 11 2 5 11 -6 13 -4 8 9 -4 10 -3 15 3 11 5 -3 51 24 102 61 106 76 160 104 203 104 l30 0 -40 -35z m105 -88 l0 -102 88 -87 c49 -48 99 -88 114 -92 49 -11 47 -86 -3 -86 -26 0 -51 30 -45 54 4 16 -15 42 -89 117 l-95 96 0 95 c0 52 3 98 7 101 18 19 23 -2 23 -96z m-819 -198 c-3 -170 -1 -196 13 -208 9 -7 16 -26 16 -42 0 -22 -6 -30 -25 -35 -15 -4 -32 -1 -40 6 -19 16 -19 54 0 70 12 10 15 47 15 212 0 155 3 199 13 195 9 -3 11 -49 8 -198z m329 -126 c0 -160 2 -189 17 -205 13 -15 14 -23 5 -43 -13 -29 -52 -34 -72 -10 -13 16 -6 65 10 65 6 0 10 72 10 190 0 162 2 190 15 190 13 0 15 -27 15 -187z"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M2377 3193 c-74 -172 -148 -348 -217 -523 -82 -206 -181 -422 -320 -701 -67 -132 -119 -243 -117 -246 6 -6 489 -5 495 1 2 3 -22 58 -54 123 -33 64 -59 120 -60 123 -1 10 -29 66 -51 101 -12 20 -19 40 -16 43 4 3 -2 13 -13 22 -10 8 -13 13 -6 9 15 -8 15 -11 -2 53 -14 51 -13 82 3 82 9 0 12 -6 158 -315 l113 -240 157 0 156 0 128 274 c71 150 131 276 134 279 16 16 17 -17 2 -72 -9 -36 -17 -77 -17 -93 -1 -15 -43 -110 -94 -210 -64 -126 -89 -184 -80 -187 7 -3 45 -2 83 1 l71 6 77 151 c43 83 79 156 81 163 2 7 -5 30 -16 50 -24 48 -57 120 -120 258 -28 61 -75 163 -106 229 -31 65 -53 123 -49 129 3 5 2 7 -4 4 -5 -3 -28 26 -51 66 -60 105 -185 289 -197 290 -5 0 -31 -37 -56 -82 -26 -45 -50 -85 -54 -89 -14 -13 79 158 96 177 9 10 20 37 24 60 4 24 11 39 16 34 4 -4 44 -87 87 -183 91 -202 122 -264 128 -258 2 3 -50 134 -116 292 -66 158 -120 292 -120 297 0 32 -25 -8 -73 -118z m161 -305 c120 -219 177 -327 157 -303 -17 20 -17 19 -10 -5 4 -14 20 -54 36 -89 16 -35 29 -74 29 -86 0 -12 9 -44 21 -70 15 -34 18 -50 10 -58 -8 -8 -11 -7 -11 3 0 7 -42 86 -94 174 -51 89 -127 223 -168 298 l-75 137 -22 -47 c-35 -71 -182 -336 -194 -347 -7 -7 -7 -4 -2 10 4 11 30 85 57 165 27 80 77 198 111 263 33 64 62 117 63 117 1 0 42 -73 92 -162z m-39 -529 c28 -33 51 -65 51 -70 0 -5 -22 -9 -50 -9 l-50 0 0 -76 c0 -44 -4 -74 -10 -72 -20 7 -119 151 -112 164 14 25 103 124 112 124 4 0 31 -27 59 -61z"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M3332 2805 c0 -133 2 -147 21 -172 25 -33 48 -52 62 -53 6 0 8 44 5 122 -5 122 -5 124 -44 186 -21 34 -40 62 -41 62 -1 0 -2 -65 -3 -145z"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M2927 1874 c-42 -81 -75 -150 -72 -152 4 -5 288 -3 293 2 1 2 -30 70 -71 151 l-74 148 -76 -149z"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M1090 1564 c-19 -48 -36 -91 -38 -95 -2 -5 8 -9 21 -9 17 0 28 7 32 20 5 15 15 20 40 20 25 0 35 -5 40 -20 4 -13 15 -20 31 -20 l24 0 -21 53 c-12 28 -28 71 -37 95 -12 30 -22 42 -37 42 -16 0 -27 -18 -55 -86z"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M1447 1639 c-52 -30 -58 -121 -10 -159 61 -48 153 -3 153 75 0 70 -83 119 -143 84z"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M1605 1593 c-3 -32 -8 -75 -10 -95 -5 -35 -3 -38 19 -38 23 0 25 4 28 53 l3 52 19 -52 c11 -29 25 -53 32 -53 7 0 21 24 31 53 16 48 18 49 21 22 5 -60 12 -75 33 -75 19 0 20 4 14 63 -12 120 -14 129 -38 125 -15 -2 -26 -16 -37 -45 -8 -23 -18 -44 -21 -48 -4 -3 -15 17 -25 45 -14 40 -23 50 -40 50 -20 0 -23 -6 -29 -57z"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M2467 1643 c-3 -5 -8 -47 -12 -95 -6 -83 -6 -88 13 -88 21 0 31 23 33 75 0 27 3 24 18 -20 10 -27 24 -50 32 -50 7 0 21 19 29 43 18 49 30 45 30 -10 0 -31 3 -38 20 -38 23 0 25 21 14 129 -6 54 -9 61 -29 61 -18 0 -27 -11 -43 -52 l-20 -53 -11 28 c-6 15 -15 38 -21 52 -9 24 -43 35 -53 18z"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M3320 1554 l0 -97 52 5 c40 4 57 11 75 32 58 67 5 156 -92 156 l-35 0 0 -96z"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M3531 1628 c-5 -13 -20 -52 -35 -87 -31 -78 -32 -81 -5 -81 12 0 23 8 26 20 4 15 14 20 39 20 23 0 37 -6 44 -20 9 -17 50 -29 50 -15 0 3 -16 45 -36 95 -28 70 -40 90 -55 90 -11 0 -23 -10 -28 -22z"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M3679 1621 c-61 -61 -23 -160 61 -161 69 0 112 59 90 124 -22 69 -100 88 -151 37z"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M2180 1601 c0 -11 -6 -21 -12 -24 -10 -3 -10 -9 -1 -28 7 -13 14 -37 15 -54 2 -24 8 -31 31 -33 19 -2 27 1 27 12 0 9 -4 16 -10 16 -16 0 -12 57 4 63 10 4 23 -7 37 -31 22 -38 22 -38 -6 -104 -5 -14 -2 -18 13 -18 15 0 32 21 66 84 25 46 46 87 46 91 0 16 -46 -2 -55 -22 -13 -30 -23 -29 -37 2 -9 19 -19 25 -45 25 -26 0 -33 4 -33 20 0 13 -7 20 -20 20 -13 0 -20 -7 -20 -19z"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logo);


/***/ }),

/***/ 3562:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Menu = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        className: "w-6 h-6 dark:text-gray-100",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M4 6h16M4 12h16M4 18h16"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);


/***/ }),

/***/ 5061:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Twitter = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        className: "w-5 h-5 fill-current",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Twitter);


/***/ }),

/***/ 8559:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_saleToken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1843);




const Selector = ({ defaultValue , ignoreValue , setToken , id  })=>{
    const menu = [
        {
            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_3__/* .ETH */ .hB,
            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_3__/* .ETH */ .hB
        },
        {
            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_3__/* .COIN_1 */ .Bk,
            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_3__/* .COIN_1 */ .Bk
        },
        {
            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_3__/* .COIN_2 */ .rH,
            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_3__/* .COIN_2 */ .rH
        },
        {
            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_3__/* .COIN_3 */ .BX,
            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_3__/* .COIN_3 */ .BX
        },
        {
            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_3__/* .COIN_4 */ .Yk,
            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_3__/* .COIN_4 */ .Yk
        },
        {
            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_3__/* .COIN_5 */ .Y6,
            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_3__/* .COIN_5 */ .Y6
        },
        {
            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_3__/* .COIN_6 */ .XL,
            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_3__/* .COIN_6 */ .XL
        },
        {
            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_3__/* .COIN_7 */ .$$,
            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_3__/* .COIN_7 */ .$$
        },
        {
            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_3__/* .COIN_8 */ .jf,
            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_3__/* .COIN_8 */ .jf
        }, 
    ];
    const { 0: SelectedItem , 1: setSelectedItem  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: menuItems , 1: setMenuItems  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(getFilteredItems(ignoreValue));
    function getFilteredItems(ignoreValue) {
        return menu.filter((item)=>item["key"] !== ignoreValue);
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setSelectedItem(defaultValue);
    }, [
        defaultValue
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setMenuItems(getFilteredItems(ignoreValue));
    }, [
        ignoreValue
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Dropdown.Button, {
                css: {
                    backgroundColor: SelectedItem === _utils_saleToken__WEBPACK_IMPORTED_MODULE_3__/* .DEFAULT_VALUE */ .PW ? "#7765F3" : "#2c2f36"
                },
                children: SelectedItem
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Dropdown.Menu, {
                "aria-label": "Dynamic Actions",
                items: menuItems,
                onAction: (key)=>{
                    setSelectedItem(key);
                    setToken(key);
                },
                children: (item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Dropdown.Item, {
                        "aria-label": id,
                        color: item.key === "delete" ? "error" : "default",
                        children: item.name
                    }, item.key)
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Selector);


/***/ }),

/***/ 6349:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7270);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _TransactionStatus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7703);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6201);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8768);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_context__WEBPACK_IMPORTED_MODULE_2__, _TransactionStatus__WEBPACK_IMPORTED_MODULE_4__, react_hot_toast__WEBPACK_IMPORTED_MODULE_5__]);
([_utils_context__WEBPACK_IMPORTED_MODULE_2__, _TransactionStatus__WEBPACK_IMPORTED_MODULE_4__, react_hot_toast__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const SingleCard = ({ index , name , walletAddress  })=>{
    const { 0: balance , 1: setBalance  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("-");
    const { 0: tokenAddress , 1: setTokenAddress  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: copyIcon , 1: setCopyIcon  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__.ClipboardIcon
    });
    const { 0: txPending , 1: setTxPending  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const notifyError = (msg)=>react_hot_toast__WEBPACK_IMPORTED_MODULE_5__["default"].error(msg, {
            duration: 6000
        });
    const notifySuccess = ()=>react_hot_toast__WEBPACK_IMPORTED_MODULE_5__["default"].success("Transaction completed");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (name && walletAddress) {
            fetchTokenBalance();
            fetchTokenAddress();
        } else setBalance("-");
    }, [
        name,
        walletAddress
    ]);
    async function fetchTokenBalance() {
        const bal = await (0,_utils_context__WEBPACK_IMPORTED_MODULE_2__/* .getTokenBalance */ .yX)(name, walletAddress);
        const fBal = ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.utils.formatUnits(bal.toString(), 18);
        setBalance(fBal.toString());
    }
    async function fetchTokenAddress() {
        const address = await (0,_utils_context__WEBPACK_IMPORTED_MODULE_2__/* .getTokenAddress */ .DT)(name);
        setTokenAddress(address);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
        className: "flex flex-col bg-[#212429]",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                rel: "noopener noreferrer",
                href: "#",
                "aria-label": "Te nulla oportere reprimique his dolorum",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    alt: "",
                    className: "object-cover w-full h-62 bg-gray-500",
                    src: `img/${index + 1}.png`
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col flex-1 p-6",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        rel: "noopener noreferrer",
                        href: "#",
                        "aria-label": "Te nulla oportere reprimique his dolorum"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        rel: "noopener noreferrer",
                        href: "#",
                        className: "text-xs tracki uppercase hover:underline text-[#7765F3]",
                        children: [
                            name,
                            " 10 M Supply"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                        className: "flex-1 py-2 text-lg font-semibold leadi",
                        children: [
                            "Get ",
                            name,
                            " token, Limited supply avalible"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex mx-2 pt-[10px]",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center bg-zinc-900 text-zinc-300 w-fit p-2 px-3 rounded-l-lg",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-sm",
                                        children: name
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "bg-zinc-800 p-0.5 px-3 ml-3 rounded-lg text-zinc-100",
                                        children: balance
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex items-center p-2 px-2 bg-[#7765F3] rounded-r-lg",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(copyIcon.icon, {
                                    className: "h-6 cursor-pointer",
                                    onClick: ()=>{
                                        navigator.clipboard.writeText(tokenAddress);
                                        setCopyIcon({
                                            icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__.ClipboardCheckIcon
                                        });
                                    }
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1076:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7270);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8768);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SwapField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8712);
/* harmony import */ var _TransactionStatus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7703);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6201);
/* harmony import */ var _utils_saleToken__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1843);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4364);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8906);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5142);
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_context__WEBPACK_IMPORTED_MODULE_2__, _TransactionStatus__WEBPACK_IMPORTED_MODULE_5__, react_hot_toast__WEBPACK_IMPORTED_MODULE_6__]);
([_utils_context__WEBPACK_IMPORTED_MODULE_2__, _TransactionStatus__WEBPACK_IMPORTED_MODULE_5__, react_hot_toast__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const SwapComponent = ()=>{
    const { 0: srcToken , 1: setSrcToken  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_utils_saleToken__WEBPACK_IMPORTED_MODULE_10__/* .ETH */ .hB);
    const { 0: destToken , 1: setDestToken  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_utils_saleToken__WEBPACK_IMPORTED_MODULE_10__/* .DEFAULT_VALUE */ .PW);
    const { 0: inputValue , 1: setInputValue  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: outputValue , 1: setOutputValue  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const inputValueRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const outputValueRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const isReversed = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
    const INCREASE_ALLOWANCE = "Increase allowance";
    const ENTER_AMOUNT = "Enter an amount";
    const CONNECT_WALLET = "Connect wallet";
    const SWAP = "Swap";
    const srcTokenObj = {
        id: "srcToken",
        value: inputValue,
        setValue: setInputValue,
        defaultValue: srcToken,
        ignoreValue: destToken,
        setToken: setSrcToken
    };
    const destTokenObj = {
        id: "destToken",
        value: outputValue,
        setValue: setOutputValue,
        defaultValue: destToken,
        ignoreValue: srcToken,
        setToken: setDestToken
    };
    const { 0: srcTokenComp , 1: setSrcTokenComp  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: destTokenComp , 1: setDestTokenComp  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: swapBtnText , 1: setSwapBtnText  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(ENTER_AMOUNT);
    const { 0: txPending , 1: setTxPending  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const notifyError = (msg)=>react_hot_toast__WEBPACK_IMPORTED_MODULE_6__["default"].error(msg, {
            duration: 600
        });
    const notifySuccess = ()=>react_hot_toast__WEBPACK_IMPORTED_MODULE_6__["default"].success("Transaction completed.");
    const { address  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_8__.useAccount)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        //text for submit button
        if (!address) setSwapBtnText(CONNECT_WALLET);
        else if (!inputValue || !outputValue) setSwapBtnText(ENTER_AMOUNT);
        else setSwapBtnText(SWAP);
    }, [
        inputValue,
        outputValue,
        address
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (document.activeElement != outputValueRef.current && document.activeElement.ariaLabel !== "srcToken" && !isReversed.current) populateOutputValue(inputValue);
        setSrcTokenComp(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SwapField__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            obj: srcTokenObj,
            ref: inputValueRef
        }));
        if (inputValue?.length === 0) setOutputValue("");
    }, [
        inputValue,
        destToken
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (document.activeElement != inputValueRef.current && document.activeElement.ariaLabel !== "destToken" && !isReversed.current) populateInputValue(outputValue);
        setDestTokenComp(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SwapField__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            obj: destTokenObj,
            ref: outputValueRef
        }));
        if (outputValue?.length === 0) setInputValue("");
        //resetting the isrev value if its set
        if (isReversed.current) isReversed.current = false;
    }, [
        outputValue,
        srcToken
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "border-[1px] rounded-l border-[#7765F3] bg-[#7765F3] w-[100%] p-4 px-6 rounded-xl",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center justify-between py-4 px-1",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "Swap"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.CogIcon, {
                        className: "h-6"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative bg-[#212429] p-4 py-6 rounded-xl mb-2 border-[2px] border-transparent hover:border-zinc-600",
                children: [
                    srcTokenComp,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.ArrowSmDownIcon, {
                        className: "absolute left-1/2 -translate-x-1/2 -buttom-6 h-10 p-1 bg-[#212429] border-4 border-zinc-900 text-zinc-300 rounded-xl cursor-pointer hover:scale-110",
                        onClick: handleReverseExchange
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "bg-[#212429] p-4 py-6 rounded-xl mt-2 border-[2px] border-transparent hover:border-zinc-600",
                children: destTokenComp
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: getSwapBtnClassName(),
                onClick: ()=>{
                    if (swapBtnText === INCREASE_ALLOWANCE) handleIncreaseAllowance();
                    else if (swapBtnText === SWAP) handleSwap();
                },
                children: swapBtnText
            }),
            txPending && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TransactionStatus__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hot_toast__WEBPACK_IMPORTED_MODULE_6__.Toaster, {})
        ]
    });
    async function handleSwap() {
        if (srcToken === _utils_saleToken__WEBPACK_IMPORTED_MODULE_10__/* .ETH */ .hB && destToken !== _utils_saleToken__WEBPACK_IMPORTED_MODULE_10__/* .ETH */ .hB) {
            performSwap();
        } else {
            setTxPending(true);
            const result = await (0,_utils_context__WEBPACK_IMPORTED_MODULE_2__/* .hasValidAllowance */ .aP)(address, srcToken, inputValue);
            setTxPending(false);
            if (result) performSwap();
            else handleInsufficientAllowance();
        }
    }
    async function handleIncreaseAllowance() {
        setTxPending(true);
        await (0,_utils_context__WEBPACK_IMPORTED_MODULE_2__/* .increaseAllowance */ .de)(srcToken, inputValue);
        setTxPending(false);
        setSwapBtnText(SWAP);
    }
    function handleReverseExchange(e) {
        isReversed.current = true;
        setInputValue(outputValue);
        setOutputValue(inputValue);
        setSrcToken(destToken);
        setDestToken(srcToken);
    }
    function getSwapBtnClassName() {
        let className = "p-4 w-full my-2 rounded-xl";
        className += swapBtnText === ENTER_AMOUNT || swapBtnText === CONNECT_WALLET ? "text-zinc-400 bg-zinc-800 pointer-events-none" : "bg-blue-700";
        className += swapBtnText === INCREASE_ALLOWANCE ? "bg-yellow-600" : "";
        return className;
    }
    function populateOutputValue() {
        if (destToken === _utils_saleToken__WEBPACK_IMPORTED_MODULE_10__/* .DEFAULT_VALUE */ .PW || srcToken === _utils_saleToken__WEBPACK_IMPORTED_MODULE_10__/* .DEFAULT_VALUE */ .PW || !inputValue) return;
        try {
            if (srcToken !== _utils_saleToken__WEBPACK_IMPORTED_MODULE_10__/* .ETH */ .hB && destToken !== _utils_saleToken__WEBPACK_IMPORTED_MODULE_10__/* .ETH */ .hB) setOutputValue(inputValue);
            else if (srcToken === _utils_saleToken__WEBPACK_IMPORTED_MODULE_10__/* .ETH */ .hB && destToken !== _utils_saleToken__WEBPACK_IMPORTED_MODULE_10__/* .ETH */ .hB) {
                const outValue = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_7__/* .toEth */ .m)((0,_utils_utils__WEBPACK_IMPORTED_MODULE_7__/* .toWei */ .r)(inputValue), 14);
                setOutputValue(outValue);
            } else if (srcToken !== _utils_saleToken__WEBPACK_IMPORTED_MODULE_10__/* .ETH */ .hB && destToken === _utils_saleToken__WEBPACK_IMPORTED_MODULE_10__/* .ETH */ .hB) {
                const outValue1 = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_7__/* .toEth */ .m)((0,_utils_utils__WEBPACK_IMPORTED_MODULE_7__/* .toWei */ .r)(inputValue, 14));
                setOutputValue(outValue1);
            }
        } catch (error) {
            setOutputValue("0");
        }
    }
    function populateInputValue() {
        if (destToken === _utils_saleToken__WEBPACK_IMPORTED_MODULE_10__/* .DEFAULT_VALUE */ .PW || srcToken === _utils_saleToken__WEBPACK_IMPORTED_MODULE_10__/* .DEFAULT_VALUE */ .PW || !outputValue) return;
        try {
            if (srcToken !== _utils_saleToken__WEBPACK_IMPORTED_MODULE_10__/* .ETH */ .hB && destToken !== _utils_saleToken__WEBPACK_IMPORTED_MODULE_10__/* .ETH */ .hB) setInputValue(outputValue);
            else if (srcToken === _utils_saleToken__WEBPACK_IMPORTED_MODULE_10__/* .ETH */ .hB && destToken !== _utils_saleToken__WEBPACK_IMPORTED_MODULE_10__/* .ETH */ .hB) {
                const outValue = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_7__/* .toEth */ .m)((0,_utils_utils__WEBPACK_IMPORTED_MODULE_7__/* .toWei */ .r)(outputValue, 14));
                setInputValue(outValue);
            } else if (srcToken !== _utils_saleToken__WEBPACK_IMPORTED_MODULE_10__/* .ETH */ .hB && destToken === _utils_saleToken__WEBPACK_IMPORTED_MODULE_10__/* .ETH */ .hB) {
                const outValue1 = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_7__/* .toEth */ .m)((0,_utils_utils__WEBPACK_IMPORTED_MODULE_7__/* .toWei */ .r)(outputValue), 14);
                setInputValue(outValue1);
            }
        } catch (error) {
            setInputValue("0");
        }
    }
    async function performSwap() {
        setTxPending(true);
        let receipt;
        if (srcToken === _utils_saleToken__WEBPACK_IMPORTED_MODULE_10__/* .ETH */ .hB && destToken !== _utils_saleToken__WEBPACK_IMPORTED_MODULE_10__/* .ETH */ .hB) receipt = await (0,_utils_context__WEBPACK_IMPORTED_MODULE_2__/* .swapEthToToken */ .hO)(destToken, inputValue);
        else if (srcToken !== _utils_saleToken__WEBPACK_IMPORTED_MODULE_10__/* .ETH */ .hB && destToken === _utils_saleToken__WEBPACK_IMPORTED_MODULE_10__/* .ETH */ .hB) receipt = await (0,_utils_context__WEBPACK_IMPORTED_MODULE_2__/* .swapTokenToEth */ .Jg)(srcToken, inputValue);
        else receipt = await (0,_utils_context__WEBPACK_IMPORTED_MODULE_2__/* .swapTokenToToken */ .Ti)(srcToken, destToken, inputValue);
        setTxPending(false);
        if (receipt && !receipt.hasOwnProperty("transactionHash")) notifyError(receipt);
        else notifySuccess();
    }
    function handleInsufficientAllowance() {
        notifyError("Insufficient allowance. Click 'Increase allowance' to increase it.");
        setSwapBtnText(INCREASE_ALLOWANCE);
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SwapComponent);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8712:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8559);



const SwapField = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(({ obj  }, inputRef)=>{
    const { id , value ="" , setValue , defaultValue , setToken , ignoreValue  } = obj;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex items-center rounded-xl",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                ref: inputRef,
                className: getInputClassname(),
                type: "number",
                value: value,
                placeholder: "0.0",
                onChange: (e)=>{
                    setValue(e.target.value);
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Selector__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                id: id,
                setToken: setToken,
                defaultValue: defaultValue,
                ignoreValue: ignoreValue
            })
        ]
    });
    function getInputClassname() {
        let className = "w-full outline-none h-8 px-2 appearance-none text-3xl bg-transparent";
        return className;
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SwapField);


/***/ }),

/***/ 6295:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Table = ({ history  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "container p-2 mx-auto sm:p-4 text-gray-100 bg-[#7765F3",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "mb-4 text-2xl font-semibold leadi",
                children: "Recent Transactions"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "overflow-x-auto",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                    className: "min-w-full text-xs",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("colgroup", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("col", {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("col", {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("col", {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("col", {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("col", {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("col", {
                                    className: "w-24"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                            className: "bg-[#18181B]",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                className: "text-left",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        className: "p-3",
                                        children: "ID #"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        className: "p-3",
                                        children: "User"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        className: "p-3",
                                        children: "From"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        className: "p-3",
                                        children: "To"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        className: "p-3 text-right",
                                        children: "Input"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        className: "p-3 text-right",
                                        children: "Output"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        className: "p-3 text-center",
                                        children: "Status"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                            children: history.map((history, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                    className: "border-b border-opacity-20 border-gray-700 bg[#27272A]",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            className: "p-3",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: history.history
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            className: "p-3",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: history.userAddress
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            className: "p-3",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: history.tokenB
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            className: "p-3",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: history.tokenA
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            className: "p-3 text-right",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: history.inputValue
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            className: "p-3 text-right",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: history.outputValue
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            className: "p-3 text-right",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "px-3 py-1 font-semibold rounded-md bg-[#7765F3] text-gray-900",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: "Completed"
                                                })
                                            })
                                        })
                                    ]
                                }, i + 1))
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Table);


/***/ }),

/***/ 7347:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6201);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8768);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6959);
/* harmony import */ var _utils_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7270);
/* harmony import */ var wagmi_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1821);
/* harmony import */ var wagmi_actions__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(wagmi_actions__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_3__, _index__WEBPACK_IMPORTED_MODULE_5__, _utils_context__WEBPACK_IMPORTED_MODULE_6__]);
([react_hot_toast__WEBPACK_IMPORTED_MODULE_3__, _index__WEBPACK_IMPORTED_MODULE_5__, _utils_context__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





//Internal import



const TokenBalance = ({ name , walletAddress  })=>{
    const { 0: balance , 1: setBalance  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("-");
    const { 0: tokenAddress , 1: setTokenAddress  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: copyIcon , 1: setCopyIcon  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__.ClipboardIcon
    });
    const { 0: txPending , 1: setTxPending  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const notifyError = (msg)=>react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].error(msg, {
            duration: 6000
        });
    const notifySuccess = ()=>react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].success("Transaction completed.");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (name && walletAddress) {
            fetchTokenBalance();
            fetchTokenAddress();
        } else setBalance("-");
    }, [
        name,
        walletAddress
    ]);
    async function fetchTokenBalance() {
        const bal = await (0,_utils_context__WEBPACK_IMPORTED_MODULE_6__/* .getTokenBalance */ .yX)(name, walletAddress);
        console.log(bal);
        const fBal = ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.untils.formatUnits(bal.toString(), 18);
        setBalance(fBal.toString());
    }
    async function fetchTokenAddress() {
        const address = await (0,_utils_context__WEBPACK_IMPORTED_MODULE_6__/* .getTokenBalance */ .yX)(name);
        setTokenAddress(address);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex mx-2 border-[1px] rounded-l rounded-r-lg border-[#7765F3]",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center bg-zinc-900 text-zinc-300 w-fit p2 px-3 rounded-l-lg",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-sm",
                        children: name
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "bg-zinc-800 p-0.5 px-3 ml-3 rounded-lg text-zinc-100",
                        children: balance
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex items-center p-2 px-2 bg-[#7765F3] rounded-r-lg",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(copyIcon.icon, {
                    className: "h-6 cursor-pointer",
                    onClick: ()=>{
                        navigator.clipboard.writeText(tokenAddress);
                        setCopyIcon({
                            icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__.ClipboardCheckIcon
                        });
                    }
                })
            }),
            txPending && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_index__WEBPACK_IMPORTED_MODULE_5__/* .TransactionStatus */ .LN, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.Toaster, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TokenBalance);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7703:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TransactionStatus)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1185);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_3__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function TransactionStatus({}) {
    const { 0: open , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    //to prevent closing of the dialog
    function handleClose() {
        setOpen(true);
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Transition.Root, {
        show: open,
        as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Dialog, {
            as: "div",
            className: "fixed z-[99999] inset-0 overflow-y-auto",
            onClose: handleClose,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Transition.Child, {
                        as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                        enter: "ease-out duration-300",
                        enterFrom: "opacity-0",
                        enterTo: "opacity-100",
                        leave: "ease-in duration-200",
                        leaveFrom: "opacity",
                        leaveTo: "opacity-0",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Dialog.Overlay, {
                            className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "hidden sm:inline-block sm:align-middle sm:h-screen",
                        "aria-hidden": "true",
                        children: "​"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Transition.Child, {
                        as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                        enter: "ease-out duration-300",
                        enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                        enterTo: "opacity-100 translate-y-0 sm:scale-100",
                        leave: "ease-in duration-200",
                        leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
                        leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "status inline-block align-bottom py-6 bg-white border rounded-lg text-center overflow-hidden shadow-xl transform transition-all md:w-[35%] sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "px-4 py-4 items-center justify-center sm:px-6 sm:flex sm:flex-row-reverse",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Loading, {
                                        children: "completing the transaction"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "px-4 text-block items-center text-sm justify-center sm:px-6 sm:flex sm:flex-row-reverse",
                                    children: "(Transaction would usually take < 12 secs...)"
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6959:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$_": () => (/* reexport safe */ _Footer__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   "DH": () => (/* reexport safe */ _HeroSection__WEBPACK_IMPORTED_MODULE_3__.Z),
/* harmony export */   "F5": () => (/* reexport safe */ _TokenBalance__WEBPACK_IMPORTED_MODULE_8__.Z),
/* harmony export */   "LN": () => (/* reexport safe */ _TransactionStatus__WEBPACK_IMPORTED_MODULE_9__.Z),
/* harmony export */   "TR": () => (/* reexport safe */ _SVG_Logo__WEBPACK_IMPORTED_MODULE_11__.Z),
/* harmony export */   "U4": () => (/* reexport safe */ _SVG_Insta__WEBPACK_IMPORTED_MODULE_13__.Z),
/* harmony export */   "Zb": () => (/* reexport safe */ _Card__WEBPACK_IMPORTED_MODULE_2__.Z),
/* harmony export */   "cU": () => (/* reexport safe */ _SwapComponent__WEBPACK_IMPORTED_MODULE_6__.Z),
/* harmony export */   "h4": () => (/* reexport safe */ _Header__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "iA": () => (/* reexport safe */ _Table__WEBPACK_IMPORTED_MODULE_7__.Z),
/* harmony export */   "s1": () => (/* reexport safe */ _SVG_Facebook__WEBPACK_IMPORTED_MODULE_12__.Z),
/* harmony export */   "tL": () => (/* reexport safe */ _SVG_Twitter__WEBPACK_IMPORTED_MODULE_14__.Z),
/* harmony export */   "tR": () => (/* reexport safe */ _SingleCard__WEBPACK_IMPORTED_MODULE_5__.Z),
/* harmony export */   "v2": () => (/* reexport safe */ _SVG_Menu__WEBPACK_IMPORTED_MODULE_10__.Z)
/* harmony export */ });
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7673);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3193);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1702);
/* harmony import */ var _HeroSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8688);
/* harmony import */ var _Selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8559);
/* harmony import */ var _SingleCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6349);
/* harmony import */ var _SwapComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1076);
/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6295);
/* harmony import */ var _TokenBalance__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7347);
/* harmony import */ var _TransactionStatus__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7703);
/* harmony import */ var _SVG_Menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3562);
/* harmony import */ var _SVG_Logo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5601);
/* harmony import */ var _SVG_Facebook__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5285);
/* harmony import */ var _SVG_Insta__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8960);
/* harmony import */ var _SVG_Twitter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5061);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Header__WEBPACK_IMPORTED_MODULE_0__, _Footer__WEBPACK_IMPORTED_MODULE_1__, _Card__WEBPACK_IMPORTED_MODULE_2__, _HeroSection__WEBPACK_IMPORTED_MODULE_3__, _SingleCard__WEBPACK_IMPORTED_MODULE_5__, _SwapComponent__WEBPACK_IMPORTED_MODULE_6__, _TokenBalance__WEBPACK_IMPORTED_MODULE_8__, _TransactionStatus__WEBPACK_IMPORTED_MODULE_9__]);
([_Header__WEBPACK_IMPORTED_MODULE_0__, _Footer__WEBPACK_IMPORTED_MODULE_1__, _Card__WEBPACK_IMPORTED_MODULE_2__, _HeroSection__WEBPACK_IMPORTED_MODULE_3__, _SingleCard__WEBPACK_IMPORTED_MODULE_5__, _SwapComponent__WEBPACK_IMPORTED_MODULE_6__, _TokenBalance__WEBPACK_IMPORTED_MODULE_8__, _TransactionStatus__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










//SVG ICON







__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7270:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DT": () => (/* binding */ getTokenAddress),
/* harmony export */   "Jg": () => (/* binding */ swapTokenToEth),
/* harmony export */   "Jl": () => (/* binding */ getAllHistory),
/* harmony export */   "Ti": () => (/* binding */ swapTokenToToken),
/* harmony export */   "aP": () => (/* binding */ hasValidAllowance),
/* harmony export */   "de": () => (/* binding */ increaseAllowance),
/* harmony export */   "hO": () => (/* binding */ swapEthToToken),
/* harmony export */   "yX": () => (/* binding */ getTokenBalance)
/* harmony export */ });
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8685);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4364);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6201);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_3__]);
react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




async function swapEthToToken(tokenName, amount) {
    try {
        let tx = {
            value: toWei(amount)
        };
        const contractObj = await (0,_contract__WEBPACK_IMPORTED_MODULE_1__/* .contract */ .L)();
        const data = await contractObj.swapEthToToken(tokenName, tx);
        const receipt = await data.wait();
        return receipt;
    } catch (e) {
        return parseErrorMsg(e);
    }
}
;
async function hasValidAllowance(owner, tokenName, amount) {
    try {
        const contractObj = await (0,_contract__WEBPACK_IMPORTED_MODULE_1__/* .contract */ .L)();
        const address = await contractObj.getTokenAddress(tokenName);
        const tokenContractObj = await (0,_contract__WEBPACK_IMPORTED_MODULE_1__/* .tokenContract */ .Y)(address);
        const data = await tokenContractObj.allowance(owner, "YOUR_PRIVATE_KEY");
        const result = ethers__WEBPACK_IMPORTED_MODULE_0__.BigNumber.from(data.toString()).gte(ethers__WEBPACK_IMPORTED_MODULE_0__.BigNumber.from(toWei(amount)));
        return result;
    } catch (e) {
        return parseErrorMsg(e);
    }
}
;
async function swapTokenToEth(tokenName, amount) {
    try {
        const contractObj = await (0,_contract__WEBPACK_IMPORTED_MODULE_1__/* .contract */ .L)();
        const data = await contractObj.swapTokenToEth(tokenName, toWei(amount));
        const receipt = await data.wait();
        return receipt;
    } catch (e) {
        return parseErrorMsg(e);
    }
}
;
async function swapTokenToToken(srcToken, destToken, amount) {
    try {
        const contractObj = await (0,_contract__WEBPACK_IMPORTED_MODULE_1__/* .contract */ .L)();
        const data = await contractObj.swapTokenToToken(srcToken, destToken, toWei(amount));
        const receipt = await data.wait();
        return receipt;
    } catch (e) {
        return parseErrorMsg(e);
    }
}
async function getTokenBalance(tokenName, address) {
    const contractObj = await (0,_contract__WEBPACK_IMPORTED_MODULE_1__/* .contract */ .L)();
    const balance = contractObj.getBalance(tokenName, address);
    return balance;
}
async function getTokenAddress(tokenName) {
    try {
        const contractObj = await (0,_contract__WEBPACK_IMPORTED_MODULE_1__/* .contract */ .L)();
        const address = await contractObj.getTokenAddress(tokenName);
    } catch (e) {
        return parseErrorMsg(e);
    }
}
async function increaseAllowance(tokenName, amount) {
    try {
        const contractObj = await (0,_contract__WEBPACK_IMPORTED_MODULE_1__/* .contract */ .L)();
        const address = await contractObj.getTokenAddress(tokenName);
        const tokenContractObj = await (0,_contract__WEBPACK_IMPORTED_MODULE_1__/* .tokenContract */ .Y)(address);
        const data = await tokenContractObj.approve("YOUR_PRIVATE_KEY", toWei(amount));
        const receipt = await data.wait();
        return receipt;
    } catch (e) {
        return parseErrorMsg(e);
    }
}
async function getAllHistory() {
    try {
        const contractObj = await (0,_contract__WEBPACK_IMPORTED_MODULE_1__/* .contract */ .L)();
        const getAllHistory = await contractObj.getAllHistory();
        const historyTransaction = getAllHistory.map((history, i)=>({
                historyId: history.historyId.toNumber(),
                tokenA: history.tokenA,
                tokenB: history.tokenB,
                inputValue: (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .toEth */ .m)(history?.inputValue),
                outputValue: (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .toEth */ .m)(history?.outputValue),
                userAddress: history.userAddress
            }));
        return historyTransaction;
    } catch (e) {
        return parseErrorMsg(e);
    }
}
function toWei(amount) {
    const toWei = ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.utils.parseUnits(amount.toString());
    return toWei.toString();
}
function parseErrorMsg(e) {
    const json = JSON.parse(JSON.stringify(e));
    return json?.reason || json?.error?.message;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8685:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "L": () => (/* binding */ contract),
  "Y": () => (/* binding */ tokenContract)
});

// EXTERNAL MODULE: external "ethers"
var external_ethers_ = __webpack_require__(1982);
;// CONCATENATED MODULE: ./utils/CustomDex.json
const CustomDex_namespaceObject = JSON.parse('{"Mt":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"_historyIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllHistory","outputs":[{"components":[{"internalType":"uint256","name":"historyId","type":"uint256"},{"internalType":"string","name":"tokenA","type":"string"},{"internalType":"string","name":"tokenB","type":"string"},{"internalType":"uint256","name":"inputValue","type":"uint256"},{"internalType":"uint256","name":"outputValue","type":"uint256"},{"internalType":"address","name":"userAddress","type":"address"}],"internalType":"struct CustomDex.History[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"tokenName","type":"string"},{"internalType":"address","name":"_address","type":"address"}],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getEthBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"tokenName","type":"string"}],"name":"getName","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"tokenName","type":"string"}],"name":"getTokenAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"tokenName","type":"string"}],"name":"getTotalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"tokenName","type":"string"}],"name":"swapEthToToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"tokenName","type":"string"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"swapTokenToEth","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"srcTokenName","type":"string"},{"internalType":"string","name":"destTokenName","type":"string"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"swapTokenToToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"tokenInstanceMap","outputs":[{"internalType":"contract ERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"tokens","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}]}');
;// CONCATENATED MODULE: ./utils/CustomToken.json
const CustomToken_namespaceObject = JSON.parse('{"Mt":[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]}');
;// CONCATENATED MODULE: ./utils/contract.js



const tokenContract = async (address)=>{
    const provider = new external_ethers_.ethers.providers.Web3Provider(window.ethereum);
    const { ethereum  } = window;
    if (ethereum) {
        const signer = provider.getSigner();
        const contractReader = new external_ethers_.ethers.Contract(address, CustomToken_namespaceObject.Mt, signer);
        return contractReader;
    }
};
const contract = async ()=>{
    const provider = new external_ethers_.ethers.providers.Web3Provider(window.ethereum);
    const { ethereum  } = window;
    if (ethereum) {
        const signer = provider.getSigner();
        const contractReader = new external_ethers_.ethers.Contract("YOUR_PRIVATE_KEY", CustomDex_namespaceObject.Mt, signer);
        return contractReader;
    }
};


/***/ }),

/***/ 1843:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$$": () => (/* binding */ COIN_7),
/* harmony export */   "BX": () => (/* binding */ COIN_3),
/* harmony export */   "Bk": () => (/* binding */ COIN_1),
/* harmony export */   "PW": () => (/* binding */ DEFAULT_VALUE),
/* harmony export */   "XL": () => (/* binding */ COIN_6),
/* harmony export */   "Y6": () => (/* binding */ COIN_5),
/* harmony export */   "Yk": () => (/* binding */ COIN_4),
/* harmony export */   "hB": () => (/* binding */ ETH),
/* harmony export */   "jf": () => (/* binding */ COIN_8),
/* harmony export */   "rH": () => (/* binding */ COIN_2)
/* harmony export */ });
const ETH = "ETH";
const COIN_1 = "Tether USD";
const COIN_2 = "BNB";
const COIN_3 = "USD Coin";
const COIN_4 = "stETH";
const COIN_5 = "TRON";
const COIN_6 = "Matic Token";
const COIN_7 = "SHIBA INU";
const COIN_8 = "Acomswap";
const DEFAULT_VALUE = "Select a token";


/***/ }),

/***/ 4364:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ toEth),
/* harmony export */   "r": () => (/* binding */ toWei)
/* harmony export */ });
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_0__);

function toWei(amount, decimals = 18) {
    const toWei = ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.utils.parseUnits(amount, decimals);
    return toWei.toString();
}
function toEth(amount, decimals = 18) {
    const toEth = ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.utils.formatUnits(amount, decimals);
    return toEth.toString();
}


/***/ })

};
;