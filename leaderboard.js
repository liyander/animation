// Factory function to create the Leaderboard Page component
export const createLeaderboardPage = (
    React,
    jsxRuntime,
    {
        Button,
        Helmet,
        IntroAnimation,
        useNavigate,
        ArrowLeft,
        Trophy,
        Users,
        Crown,
        Medal,
        Award,
        Zap,
        Star,
        Sparkles,
        Gift
    }
) => {
    const { useState, useEffect } = React;
    const { jsx, jsxs, Fragment } = jsxRuntime;


    const cl = ["Bug vs Me", "Anuj__007", "Sc3iptK1ddy", "iykyk_daaku", "prashant_gaur", "Owatron", "Alfaz_Hossain", "cybershubham01", "Prachand_LCH", "prasanthrpro", "dipus_ingh", "dkcyberz", "saivelde", "Shirshak", "krishnanoutiyal", "pphreak_1001", "Team-DisclosureX", "Charon19d", "cyberghost05", "R0MIL", "parthnarula26", "silenthunter_41", "kaks3c", "Hackerdice", "0mhh", "ShivamKumar", "suyash_TECHNORAT", "manan_sanghvi", "aryaman", "sijojohnson", "Sumanth9", "GauravDupare", "nexxp0xh", "AbhishekJi", "AakashSharma", "prashant1525", "Godfather_Cyb3r_King", "abhishekanjana", "shashankkumar", "Shadow2816", "doordie", "tarunn01", "RaqinAlAsraar", "Sushil33", "Vinit_Prajapati", "Xenofer", "Solo_Bird", "anishkashukla", "Manohar_Kommalapati", "Krishgupta", "catfuuu", "faizi3", "iankitkapoor01", "krishav15", "mxfizzz07", "Sh3llS33k3r", "MrLoser", "Sh2d0w", "Mrutunjayaa", "RaoAditya", "Hacker_kish", "Pra1199", "Tejas_Shingade", "DivyanshuVats", "mr_sam____", "CyberQ_0x1", "sharo-11", "itz_Adityasingh", "karthik_1362", "5rx", "Yash_Rajeshirke", "loxcalhost", "thegeekaman", "sameeryafai14", "ObsidianEyes", "kartik2005221", "lakshrey", "karthik_mahadevan", "SanW", "JhingaFry", "ashikmd7", "djpatel101", "zorianix", "Blackpearl_18", "Alo", "Atecher", "AnusreeBabue", "Mrde6u9", "RivuDon", "Akshaya07", "Guman-Rajpurohit", "Gouthamkumarchitti", "rohan_lew", "markXP", "mallutester", "DevilSibasis", "Nithisvaran", "Thsid", "HPrince", "YashKeral"];

    const OR = t => t === 1 ? {
        bg: "bg-gradient-to-r from-amber-500/25 via-yellow-400/15 to-amber-500/25",
        border: "border-amber-400/60",
        text: "text-amber-400",
        glow: "shadow-lg shadow-amber-500/30",
        prize: "OSCP"
    } : t === 2 ? {
        bg: "bg-gradient-to-r from-slate-300/25 via-gray-200/15 to-slate-300/25",
        border: "border-slate-300/60",
        text: "text-slate-200",
        glow: "shadow-lg shadow-slate-400/30",
        prize: "CEH"
    } : t === 3 ? {
        bg: "bg-gradient-to-r from-orange-500/25 via-amber-600/15 to-orange-500/25",
        border: "border-orange-500/60",
        text: "text-orange-400",
        glow: "shadow-lg shadow-orange-500/30",
        prize: "CEH"
    } : t <= 6 ? {
        bg: "bg-gradient-to-r from-purple-500/20 via-violet-500/15 to-purple-500/20",
        border: "border-purple-500/50",
        text: "text-purple-400",
        glow: "shadow-lg shadow-purple-500/25",
        prize: "ASCP"
    } : t <= 8 ? {
        bg: "bg-gradient-to-r from-indigo-500/20 via-blue-500/15 to-indigo-500/20",
        border: "border-indigo-500/50",
        text: "text-indigo-400",
        glow: "shadow-lg shadow-indigo-500/25",
        prize: "CRTP"
    } : t <= 17 ? {
        bg: "bg-gradient-to-r from-emerald-500/20 via-green-500/15 to-emerald-500/20",
        border: "border-emerald-500/50",
        text: "text-emerald-400",
        glow: "shadow-lg shadow-emerald-500/25",
        prize: "CASA"
    } : t <= 57 ? {
        bg: "bg-gradient-to-r from-cyan-500/15 via-teal-500/10 to-cyan-500/15",
        border: "border-cyan-500/40",
        text: "text-cyan-400",
        glow: "shadow-md shadow-cyan-500/20",
        prize: "ACP"
    } : t <= 62 ? {
        bg: "bg-gradient-to-r from-teal-500/15 via-cyan-600/10 to-teal-500/15",
        border: "border-teal-500/40",
        text: "text-teal-400",
        glow: "shadow-md shadow-teal-500/20",
        prize: "PentesterLab"
    } : t <= 65 ? {
        bg: "bg-gradient-to-r from-green-500/15 via-lime-500/10 to-green-500/15",
        border: "border-green-500/40",
        text: "text-green-400",
        glow: "shadow-md shadow-green-500/20",
        prize: "HTB VIP+"
    } : t <= 90 ? {
        bg: "bg-gradient-to-r from-orange-500/15 via-amber-500/10 to-orange-500/15",
        border: "border-orange-500/40",
        text: "text-orange-400",
        glow: "shadow-md shadow-orange-500/20",
        prize: "Caido"
    } : t <= 95 ? {
        bg: "bg-gradient-to-r from-blue-500/15 via-sky-500/10 to-blue-500/15",
        border: "border-blue-500/40",
        text: "text-blue-400",
        glow: "shadow-md shadow-blue-500/20",
        prize: "OffSec PG"
    } : {
        bg: "bg-gradient-to-r from-pink-500/15 via-rose-500/10 to-pink-500/15",
        border: "border-pink-500/40",
        text: "text-pink-400",
        glow: "shadow-md shadow-pink-500/20",
        prize: "Lovable Credits"
    };

    const AR = t => t === 1 ? jsx(Crown, { // oh -> Crown
        className: "w-5 h-5 text-amber-400"
    }) : t === 2 ? jsx(Medal, { // Ko -> Medal
        className: "w-5 h-5 text-slate-200"
    }) : t === 3 ? jsx(Medal, { // Ko -> Medal
        className: "w-5 h-5 text-orange-400"
    }) : t <= 6 ? jsx(Award, { // Qf -> Award
        className: "w-4 h-4 text-purple-400"
    }) : t <= 8 ? jsx(Zap, { // lh -> Zap
        className: "w-4 h-4 text-indigo-400"
    }) : t <= 17 ? jsx(Star, { // Zf -> Star
        className: "w-4 h-4 text-emerald-400"
    }) : t <= 57 ? jsx(Sparkles, { // Kc -> Sparkles
        className: "w-4 h-4 text-cyan-400"
    }) : t <= 90 ? jsx(Gift, { // nc -> Gift
        className: "w-4 h-4 text-orange-400"
    }) : jsx(Gift, { // nc -> Gift
        className: "w-4 h-4 text-pink-400"
    });

    const RR = t => t === 1 ? "Gold" : t === 2 ? "Silver" : t === 3 ? "Bronze" : null;

    return () => {
        const t = useNavigate();
        const [e,r] = useState(!0);
        return useEffect( () => {
            const n = setTimeout( () => r(!1), 5e3);
            return () => clearTimeout(n)
        }, []),
        jsxs(Fragment, {
            children: [e && jsx(IntroAnimation, {}), jsxs(Helmet, { // ta -> Helmet
                children: [jsx("html", {
                    lang: "en"
                }), jsx("title", {
                    children: "HackwithIndia Leaderboard 2026 - Top 100 Winners | OSCP, CEH, Bug Bounty Competition Results"
                }), jsx("meta", {
                    name: "description",
                    content: "Official HackwithIndia 2026 leaderboard - See the top 100 winners of India's biggest free live web hacking competition. View OSCP, CEH, APISec certification winners and prize distribution."
                }), jsx("link", {
                    rel: "canonical",
                    href: "https://hackwithindiaa.in/leaderboard"
                }), jsx("meta", {
                    name: "keywords",
                    content: "hackwithindia leaderboard, hackwithindiaa winners, bug bounty competition results, OSCP winners India, CEH certification winners, cybersecurity competition leaderboard, ethical hacking winners 2026"
                }), jsx("meta", {
                    property: "og:title",
                    content: "HackwithIndia Leaderboard 2026 - Top 100 Winners"
                }), jsx("meta", {
                    property: "og:description",
                    content: "Official leaderboard showing top 100 winners of HackwithIndia 2026 - India's biggest free web hacking competition with prizes worth ₹20L+"
                }), jsx("meta", {
                    property: "og:url",
                    content: "https://hackwithindiaa.in/leaderboard"
                }), jsx("meta", {
                    property: "og:type",
                    content: "website"
                }), jsx("meta", {
                    name: "twitter:title",
                    content: "HackwithIndia Leaderboard 2026 - Top 100 Winners"
                }), jsx("meta", {
                    name: "twitter:description",
                    content: "Official leaderboard showing top 100 winners of HackwithIndia 2026 - India's biggest free web hacking competition"
                })]
            }), jsxs("div", {
                className: "min-h-screen bg-background",
                children: [jsx("div", {
                    className: "border-b border-border bg-background/80 backdrop-blur-lg sticky top-0 z-50",
                    children: jsxs("div", {
                        className: "container mx-auto px-4 py-3 flex items-center justify-between",
                        children: [jsxs(Button, { // qt -> Button
                            variant: "ghost",
                            size: "sm",
                            onClick: () => t("/"),
                            className: "gap-2 text-muted-foreground hover:text-foreground",
                            children: [jsx(ArrowLeft, { // Yf -> ArrowLeft
                                className: "w-4 h-4"
                            }), "Back"]
                        }), jsxs("h1", {
                            className: "text-lg font-bold font-display",
                            children: [jsx("span", {
                                className: "text-saffron",
                                children: "Hack"
                            }), jsx("span", {
                                className: "text-foreground",
                                children: "with"
                            }), jsx("span", {
                                className: "text-indian-green",
                                children: "Indiaa"
                            })]
                        }), jsx("div", {
                            className: "w-20"
                        })]
                    })
                }), jsxs("div", {
                    className: "container mx-auto px-4 py-8 max-w-4xl",
                    children: [jsxs("div", {
                        className: "text-center mb-10",
                        children: [jsxs("div", {
                            className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4",
                            children: [jsx(Trophy, { // bs -> Trophy
                                className: "w-4 h-4 text-primary"
                            }), jsx("span", {
                                className: "text-sm font-medium text-primary",
                                children: "Official Results • Top 100 Winners"
                            })]
                        }), jsxs("h1", {
                            className: "text-3xl md:text-4xl font-bold font-display mb-2",
                            children: ["Competition ", jsx("span", {
                                className: "text-saffron",
                                children: "Leaderboard"
                            })]
                        }), jsx("p", {
                            className: "text-muted-foreground",
                            children: "Congratulations to all participants of HackWithIndiaa 2026"
                        })]
                    }), jsxs("div", {
                        className: "mb-8",
                        children: [jsxs("div", {
                            className: "flex items-center gap-2 mb-4",
                            children: [jsx(Users, { // Gc -> Users
                                className: "w-5 h-5 text-pink-400"
                            }), jsx("h2", {
                                className: "text-lg font-semibold",
                                children: "Women's Category"
                            })]
                        }), jsxs("div", {
                            className: "relative overflow-hidden rounded-xl border border-pink-500/40 bg-gradient-to-r from-pink-500/15 via-rose-500/10 to-pink-500/15 p-5 shadow-lg shadow-pink-500/10",
                            children: [jsx("div", {
                                className: "absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-3xl"
                            }), jsxs("div", {
                                className: "relative flex items-center gap-4",
                                children: [jsx("div", {
                                    className: "flex items-center justify-center w-12 h-12 rounded-full bg-pink-500/20 border border-pink-500/30",
                                    children: jsx(Crown, { // oh -> Crown
                                        className: "w-6 h-6 text-pink-400"
                                    })
                                }), jsxs("div", {
                                    children: [jsx("p", {
                                        className: "text-xs text-pink-400 font-medium uppercase tracking-wider mb-0.5",
                                        children: "Top 1 • Women's Category"
                                    }), jsx("p", {
                                        className: "text-xl font-bold text-foreground",
                                        children: "AngelWisdom"
                                    })]
                                })]
                            })]
                        })]
                    }), jsxs("div", {
                        className: "mb-8",
                        children: [jsxs("h2", {
                            className: "text-lg font-semibold mb-4 flex items-center gap-2",
                            children: [jsx(Trophy, { // bs -> Trophy
                                className: "w-5 h-5 text-amber-400"
                            }), "Top 3 Winners"]
                        }), jsxs("div", {
                            className: "grid grid-cols-3 gap-3 md:gap-4",
                            children: [jsx("div", {
                                className: "order-1 md:order-1",
                                children: jsxs("div", {
                                    className: "relative rounded-xl border border-slate-300/50 bg-gradient-to-b from-slate-300/20 to-slate-400/5 p-4 text-center h-full",
                                    children: [jsx("div", {
                                        className: "absolute inset-0 bg-gradient-to-t from-slate-300/10 to-transparent rounded-xl"
                                    }), jsxs("div", {
                                        className: "relative",
                                        children: [jsx("div", {
                                            className: "w-10 h-10 md:w-12 md:h-12 mx-auto mb-2 rounded-full bg-slate-300/20 border border-slate-300/40 flex items-center justify-center",
                                            children: jsx(Medal, { // Ko -> Medal
                                                className: "w-5 h-5 md:w-6 md:h-6 text-slate-200"
                                            })
                                        }), jsx("span", {
                                            className: "inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-slate-300/20 text-slate-200 border border-slate-300/30 mb-1",
                                            children: "SILVER"
                                        }), jsx("p", {
                                            className: "text-sm md:text-base font-bold text-foreground truncate",
                                            children: cl[1]
                                        }), jsx("p", {
                                            className: "text-xs text-slate-400 mt-1",
                                            children: "CEH"
                                        })]
                                    })]
                                })
                            }), jsx("div", {
                                className: "order-0 md:order-0 -mt-4",
                                children: jsxs("div", {
                                    className: "relative rounded-xl border-2 border-amber-400/60 bg-gradient-to-b from-amber-400/25 to-yellow-500/10 p-4 md:p-5 text-center shadow-lg shadow-amber-500/25",
                                    children: [jsx("div", {
                                        className: "absolute inset-0 bg-gradient-to-t from-amber-400/15 to-transparent rounded-xl"
                                    }), jsxs("div", {
                                        className: "relative",
                                        children: [jsx("div", {
                                            className: "w-12 h-12 md:w-14 md:h-14 mx-auto mb-2 rounded-full bg-amber-400/25 border-2 border-amber-400/50 flex items-center justify-center",
                                            children: jsx(Crown, { // oh -> Crown
                                                className: "w-6 h-6 md:w-7 md:h-7 text-amber-400"
                                            })
                                        }), jsx("span", {
                                            className: "inline-block px-3 py-0.5 rounded text-[10px] font-bold bg-amber-400/20 text-amber-400 border border-amber-400/30 mb-1",
                                            children: "GOLD"
                                        }), jsx("p", {
                                            className: "text-sm md:text-lg font-bold text-foreground truncate",
                                            children: cl[0]
                                        }), jsx("p", {
                                            className: "text-xs text-amber-400 mt-1",
                                            children: "OSCP"
                                        })]
                                    })]
                                })
                            }), jsx("div", {
                                className: "order-2 md:order-2",
                                children: jsxs("div", {
                                    className: "relative rounded-xl border border-orange-500/50 bg-gradient-to-b from-orange-500/20 to-amber-600/5 p-4 text-center h-full",
                                    children: [jsx("div", {
                                        className: "absolute inset-0 bg-gradient-to-t from-orange-500/10 to-transparent rounded-xl"
                                    }), jsxs("div", {
                                        className: "relative",
                                        children: [jsx("div", {
                                            className: "w-10 h-10 md:w-12 md:h-12 mx-auto mb-2 rounded-full bg-orange-500/20 border border-orange-500/40 flex items-center justify-center",
                                            children: jsx(Medal, { // Ko -> Medal
                                                className: "w-5 h-5 md:w-6 md:h-6 text-orange-400"
                                            })
                                        }), jsx("span", {
                                            className: "inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-orange-500/20 text-orange-400 border border-orange-500/30 mb-1",
                                            children: "BRONZE"
                                        }), jsx("p", {
                                            className: "text-sm md:text-base font-bold text-foreground truncate",
                                            children: cl[2]
                                        }), jsx("p", {
                                            className: "text-xs text-orange-400 mt-1",
                                            children: "CEH"
                                        })]
                                    })]
                                })
                            })]
                        })]
                    }), jsxs("div", {
                        className: "mb-6 p-4 rounded-lg bg-muted/30 border border-border/50",
                        children: [jsx("p", {
                            className: "text-sm font-medium mb-3 text-foreground",
                            children: "Prize Tiers (100 Winners)"
                        }), jsxs("div", {
                            className: "flex flex-wrap gap-2 text-xs",
                            children: [jsx("span", {
                                className: "px-2 py-1 rounded bg-amber-400/20 text-amber-400 border border-amber-400/30",
                                children: "1st - OSCP"
                            }), jsx("span", {
                                className: "px-2 py-1 rounded bg-slate-300/20 text-slate-200 border border-slate-300/30",
                                children: "2nd - CEH"
                            }), jsx("span", {
                                className: "px-2 py-1 rounded bg-orange-500/20 text-orange-400 border border-orange-500/30",
                                children: "3rd - CEH"
                            }), jsx("span", {
                                className: "px-2 py-1 rounded bg-purple-500/20 text-purple-400 border border-purple-500/30",
                                children: "4-6 - ASCP"
                            }), jsx("span", {
                                className: "px-2 py-1 rounded bg-indigo-500/20 text-indigo-400 border border-indigo-500/30",
                                children: "7-8 - CRTP"
                            }), jsx("span", {
                                className: "px-2 py-1 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
                                children: "9-17 - CASA"
                            }), jsx("span", {
                                className: "px-2 py-1 rounded bg-cyan-500/20 text-cyan-400 border border-cyan-500/30",
                                children: "18-57 - ACP"
                            }), jsx("span", {
                                className: "px-2 py-1 rounded bg-teal-500/20 text-teal-400 border border-teal-500/30",
                                children: "58-62 - PentesterLab"
                            }), jsx("span", {
                                className: "px-2 py-1 rounded bg-green-500/20 text-green-400 border border-green-500/30",
                                children: "63-65 - HTB VIP+"
                            }), jsx("span", {
                                className: "px-2 py-1 rounded bg-orange-500/20 text-orange-400 border border-orange-500/30",
                                children: "66-90 - Caido"
                            }), jsx("span", {
                                className: "px-2 py-1 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30",
                                children: "91-95 - OffSec PG"
                            }), jsx("span", {
                                className: "px-2 py-1 rounded bg-pink-500/20 text-pink-400 border border-pink-500/30",
                                children: "96-100 - Lovable"
                            })]
                        })]
                    }), jsxs("div", {
                        className: "space-y-2",
                        children: [jsx("h2", {
                            className: "text-lg font-semibold mb-4",
                            children: "All 100 Rankings"
                        }), cl.map( (n, s) => {
                            const i = s + 1
                              , o = OR(i)
                              , a = AR(i)
                              , l = RR(i);
                            return jsxs("div", {
                                className: `flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg border ${o.border} ${o.bg} ${o.glow} transition-all hover:scale-[1.01]`,
                                children: [jsx("div", {
                                    className: `flex items-center justify-center w-10 md:w-12 h-10 md:h-12 rounded-lg bg-background/50 border ${o.border} font-bold ${o.text} text-sm md:text-base`,
                                    children: i
                                }), jsx("div", {
                                    className: "w-5 flex justify-center",
                                    children: a
                                }), jsxs("div", {
                                    className: "flex-1 min-w-0",
                                    children: [jsx("p", {
                                        className: "font-semibold truncate text-foreground text-sm md:text-base",
                                        children: n
                                    }), jsx("p", {
                                        className: `text-xs ${o.text} opacity-80`,
                                        children: o.prize
                                    })]
                                }), l && jsx("span", {
                                    className: `hidden md:inline-flex px-2 py-0.5 rounded text-xs font-bold ${o.bg} ${o.text} border ${o.border}`,
                                    children: l
                                })]
                            }, i)
                        }
                        )]
                    }), jsxs("div", {
                        className: "mt-10 text-center",
                        children: [jsx("p", {
                            className: "text-sm text-muted-foreground",
                            children: "Winners will be contacted via registered email for prize distribution."
                        }), jsx(Button, { // qt -> Button
                            variant: "outline",
                            className: "mt-4",
                            onClick: () => t("/"),
                            children: "Back to Home"
                        })]
                    })]
                })]
            })]
        });
    };
};
