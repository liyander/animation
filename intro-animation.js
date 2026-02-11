// Factory function to create the Rocket Icon component
const createRocketIcon = (jsxRuntime) => {
    const { jsx, jsxs } = jsxRuntime;
    return ({color: t}) => jsxs("svg", {
        width: "40",
        height: "80",
        viewBox: "0 0 40 80",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [jsx("ellipse", {
            cx: "20",
            cy: "35",
            rx: "12",
            ry: "30",
            fill: t
        }), jsx("ellipse", {
            cx: "20",
            cy: "35",
            rx: "8",
            ry: "25",
            fill: `${t}dd`
        }), jsx("path", {
            d: "M20 0 L28 20 L12 20 Z",
            fill: t
        }), jsx("path", {
            d: "M20 2 L26 18 L14 18 Z",
            fill: `${t}ee`
        }), jsx("circle", {
            cx: "20",
            cy: "28",
            r: "5",
            fill: "#1a1a2e"
        }), jsx("circle", {
            cx: "20",
            cy: "28",
            r: "4",
            fill: "#2d3748"
        }), jsx("circle", {
            cx: "18",
            cy: "26",
            r: "1.5",
            fill: "#fff",
            opacity: "0.6"
        }), jsx("path", {
            d: "M8 55 L2 70 L12 60 Z",
            fill: t
        }), jsx("path", {
            d: "M32 55 L38 70 L28 60 Z",
            fill: t
        }), jsx("path", {
            d: "M20 60 L20 72 L15 65 Z",
            fill: t
        }), jsx("path", {
            d: "M20 60 L20 72 L25 65 Z",
            fill: t
        })]
    });
};

// Factory function to create the Intro Animation component
export const createIntroAnimation = (React, jsxRuntime, confetti, animationStyles) => {
    const { useState, useEffect } = React;
    const { jsx, jsxs, Fragment } = jsxRuntime;
    
    // Create the Rocket Icon component locally within the factory
    const RocketIcon = createRocketIcon(jsxRuntime);

    return () => {
        const [t,e] = useState([])
          , [r,n] = useState(!1);
        return useEffect( () => {
            const s = ["#FF9933", "#138808", "#FF6B6B", "#4ECDC4", "#FFE66D"]
              , o = [];
            for (let p = 0; p < 6; p++)
                o.push({
                    id: p,
                    left: 8 + p * 15 + Math.random() * 5,
                    delay: p * .25,
                    color: s[p % s.length]
                });
            e(o),
            setTimeout( () => n(!0), 800);
            const l = Date.now() + 3e3
              , c = ["#FF9933", "#138808", "#FFFFFF", "#FFD700", "#FF6B6B"]
              , d = () => {
                confetti({
                    particleCount: 3,
                    angle: 60,
                    spread: 55,
                    origin: {
                        x: 0,
                        y: .7
                    },
                    colors: c
                }),
                confetti({
                    particleCount: 3,
                    angle: 120,
                    spread: 55,
                    origin: {
                        x: 1,
                        y: .7
                    },
                    colors: c
                }),
                Date.now() < l && requestAnimationFrame(d)
            }
            ;
            d();
            const h = [];
            for (let p = 0; p < 6; p++) {
                const f = setTimeout( () => {
                    const y = (8 + p * 15 + Math.random() * 5) / 100;
                    confetti({
                        particleCount: 100,
                        spread: 120,
                        origin: {
                            x: y,
                            y: .05
                        },
                        colors: c,
                        startVelocity: 35,
                        gravity: .8,
                        scalar: 1.3
                    }),
                    setTimeout( () => {
                        confetti({
                            particleCount: 50,
                            spread: 70,
                            origin: {
                                x: y - .05,
                                y: .1
                            },
                            colors: c,
                            startVelocity: 25
                        }),
                        confetti({
                            particleCount: 50,
                            spread: 70,
                            origin: {
                                x: y + .05,
                                y: .1
                            },
                            colors: c,
                            startVelocity: 25
                        })
                    }
                    , 150)
                }
                , 1200 + p * 250);
                h.push(f)
            }
            return () => {
                h.forEach(p => clearTimeout(p))
            }
        }
        , []),
        jsxs(Fragment, {
            children: [jsxs("div", {
                className: "fixed inset-0 pointer-events-none z-40 overflow-hidden",
                children: [r && jsx("div", {
                    className: "absolute inset-0 flex items-center justify-center",
                    children: jsxs("div", {
                        className: "relative text-center",
                        children: [jsx("div", {
                            className: "animate-graffiti-pop opacity-0",
                            style: {
                                animationDelay: "0s"
                            },
                            children: jsx("span", {
                                className: "block text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 drop-shadow-2xl select-none",
                                style: {
                                    WebkitTextStroke: "2px rgba(0,0,0,0.3)",
                                    filter: "drop-shadow(0 0 30px rgba(251,191,36,0.5))"
                                },
                                children: "🏆 WINNERS 🏆"
                            })
                        }), jsx("div", {
                            className: "animate-graffiti-pop opacity-0 mt-4",
                            style: {
                                animationDelay: "0.3s"
                            },
                            children: jsx("span", {
                                className: "block text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-saffron via-white to-indian-green select-none",
                                style: {
                                    filter: "drop-shadow(0 0 20px rgba(255,153,51,0.4))"
                                },
                                children: "HACKWITHINDIAA 2026"
                            })
                        }), jsx("div", {
                            className: "animate-graffiti-pop opacity-0 mt-6",
                            style: {
                                animationDelay: "0.6s"
                            },
                            children: jsx("span", {
                                className: "block text-2xl md:text-4xl font-bold text-cyan-400 select-none tracking-widest",
                                style: {
                                    textShadow: "0 0 20px rgba(34,211,238,0.6), 2px 2px 0 #000"
                                },
                                children: "⚡ ELITE HACKERS ⚡"
                            })
                        }), jsx("div", {
                            className: "absolute -top-10 -left-20 animate-graffiti-pop opacity-0",
                            style: {
                                animationDelay: "0.8s"
                            },
                            children: jsx("span", {
                                className: "text-4xl md:text-6xl",
                                children: "🔥"
                            })
                        }), jsx("div", {
                            className: "absolute -top-10 -right-20 animate-graffiti-pop opacity-0",
                            style: {
                                animationDelay: "0.9s"
                            },
                            children: jsx("span", {
                                className: "text-4xl md:text-6xl",
                                children: "🔥"
                            })
                        }), jsx("div", {
                            className: "absolute -bottom-8 left-1/2 -translate-x-1/2 animate-graffiti-pop opacity-0",
                            style: {
                                animationDelay: "1s"
                            },
                            children: jsx("span", {
                                className: "text-3xl md:text-5xl",
                                children: "🎉"
                            })
                        })]
                    })
                }), t.map(s => jsx("div", {
                    className: "absolute bottom-0 animate-rocket-launch",
                    style: {
                        left: `${s.left}%`,
                        animationDelay: `${s.delay}s`
                    },
                    children: jsxs("div", {
                        className: "relative rocket-container",
                        children: [jsx("div", {
                            className: "transform scale-75 md:scale-100",
                            children: jsx(RocketIcon, {
                                color: s.color
                            })
                        }), jsxs("div", {
                            className: "absolute -bottom-16 left-1/2 -translate-x-1/2 flame-container",
                            children: [jsx("div", {
                                className: "w-4 h-20 bg-gradient-to-t from-transparent via-yellow-300 to-white rounded-full blur-[2px] animate-flame"
                            }), jsx("div", {
                                className: "absolute top-0 left-1/2 -translate-x-1/2 w-6 h-24 bg-gradient-to-t from-transparent via-orange-500 to-yellow-400 rounded-full blur-sm animate-flame-outer opacity-80"
                            }), jsx("div", {
                                className: "absolute top-2 left-1/2 -translate-x-1/2 w-8 h-28 bg-gradient-to-t from-transparent via-red-500/50 to-orange-400/60 rounded-full blur-md"
                            })]
                        }), jsx("div", {
                            className: "absolute -bottom-20 left-1/2 -translate-x-1/2",
                            children: [...Array(5)].map( (i, o) => jsx("div", {
                                className: "absolute w-3 h-3 bg-gray-400/40 rounded-full animate-smoke",
                                style: {
                                    left: `${(o - 2) * 8}px`,
                                    animationDelay: `${o * .1}s`
                                }
                            }, o))
                        })]
                    })
                }, s.id)), [...Array(30)].map( (s, i) => jsx("div", {
                    className: "absolute w-1 h-1 bg-white rounded-full animate-sparkle opacity-0",
                    style: {
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 60}%`,
                        animationDelay: `${Math.random() * 2}s`,
                        animationDuration: `${1 + Math.random()}s`
                    }
                }, `sparkle-${i}`))]
            }), jsx("style", {
                children: animationStyles
            })]
        });
    };
};
