(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 88653, e => {
    "use strict";
    e.i(47167);
    var t = e.i(43476)
      , r = e.i(71645)
      , a = e.i(31178)
      , i = e.i(47414)
      , o = e.i(74008)
      , s = e.i(21476)
      , l = e.i(72846)
      , n = r
      , d = e.i(37806);
    function c(e, t) {
        if ("function" == typeof e)
            return e(t);
        null != e && (e.current = t)
    }
    class m extends n.Component {
        getSnapshotBeforeUpdate(e) {
            let t = this.props.childRef.current;
            if ((0,
            l.isHTMLElement)(t) && e.isPresent && !this.props.isPresent && !1 !== this.props.pop) {
                let e = t.offsetParent
                  , r = (0,
                l.isHTMLElement)(e) && e.offsetWidth || 0
                  , a = (0,
                l.isHTMLElement)(e) && e.offsetHeight || 0
                  , i = getComputedStyle(t)
                  , o = this.props.sizeRef.current;
                o.height = parseFloat(i.height),
                o.width = parseFloat(i.width),
                o.top = t.offsetTop,
                o.left = t.offsetLeft,
                o.right = r - o.width - o.left,
                o.bottom = a - o.height - o.top
            }
            return null
        }
        componentDidUpdate() {}
        render() {
            return this.props.children
        }
    }
    function u({children: e, isPresent: a, anchorX: i, anchorY: o, root: s, pop: l}) {
        let p = (0,
        n.useId)()
          , h = (0,
        n.useRef)(null)
          , x = (0,
        n.useRef)({
            width: 0,
            height: 0,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
        })
          , {nonce: b} = (0,
        n.useContext)(d.MotionConfigContext)
          , g = function(...e) {
            return r.useCallback(function(...e) {
                return t => {
                    let r = !1
                      , a = e.map(e => {
                        let a = c(e, t);
                        return r || "function" != typeof a || (r = !0),
                        a
                    }
                    );
                    if (r)
                        return () => {
                            for (let t = 0; t < a.length; t++) {
                                let r = a[t];
                                "function" == typeof r ? r() : c(e[t], null)
                            }
                        }
                }
            }(...e), e)
        }(h, e.props?.ref ?? e?.ref);
        return (0,
        n.useInsertionEffect)( () => {
            let {width: e, height: t, top: r, left: n, right: d, bottom: c} = x.current;
            if (a || !1 === l || !h.current || !e || !t)
                return;
            let m = "left" === i ? `left: ${n}` : `right: ${d}`
              , u = "bottom" === o ? `bottom: ${c}` : `top: ${r}`;
            h.current.dataset.motionPopId = p;
            let g = document.createElement("style");
            b && (g.nonce = b);
            let f = s ?? document.head;
            return f.appendChild(g),
            g.sheet && g.sheet.insertRule(`
          [data-motion-pop-id="${p}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${t}px !important;
            ${m}px !important;
            ${u}px !important;
          }
        `),
            () => {
                h.current?.removeAttribute("data-motion-pop-id"),
                f.contains(g) && f.removeChild(g)
            }
        }
        , [a]),
        (0,
        t.jsx)(m, {
            isPresent: a,
            childRef: h,
            sizeRef: x,
            pop: l,
            children: !1 === l ? e : n.cloneElement(e, {
                ref: g
            })
        })
    }
    let p = ({children: e, initial: a, isPresent: o, onExitComplete: l, custom: n, presenceAffectsLayout: d, mode: c, anchorX: m, anchorY: p, root: x}) => {
        let b = (0,
        i.useConstant)(h)
          , g = (0,
        r.useId)()
          , f = !0
          , v = (0,
        r.useMemo)( () => (f = !1,
        {
            id: g,
            initial: a,
            isPresent: o,
            custom: n,
            onExitComplete: e => {
                for (let t of (b.set(e, !0),
                b.values()))
                    if (!t)
                        return;
                l && l()
            }
            ,
            register: e => (b.set(e, !1),
            () => b.delete(e))
        }), [o, b, l]);
        return d && f && (v = {
            ...v
        }),
        (0,
        r.useMemo)( () => {
            b.forEach( (e, t) => b.set(t, !1))
        }
        , [o]),
        r.useEffect( () => {
            o || b.size || !l || l()
        }
        , [o]),
        e = (0,
        t.jsx)(u, {
            pop: "popLayout" === c,
            isPresent: o,
            anchorX: m,
            anchorY: p,
            root: x,
            children: e
        }),
        (0,
        t.jsx)(s.PresenceContext.Provider, {
            value: v,
            children: e
        })
    }
    ;
    function h() {
        return new Map
    }
    var x = e.i(64978);
    let b = e => e.key || "";
    function g(e) {
        let t = [];
        return r.Children.forEach(e, e => {
            (0,
            r.isValidElement)(e) && t.push(e)
        }
        ),
        t
    }
    e.s(["AnimatePresence", 0, ({children: e, custom: s, initial: l=!0, onExitComplete: n, presenceAffectsLayout: d=!0, mode: c="sync", propagate: m=!1, anchorX: u="left", anchorY: h="top", root: f}) => {
        let[v,y] = (0,
        x.usePresence)(m)
          , w = (0,
        r.useMemo)( () => g(e), [e])
          , j = m && !v ? [] : w.map(b)
          , k = (0,
        r.useRef)(!0)
          , N = (0,
        r.useRef)(w)
          , z = (0,
        i.useConstant)( () => new Map)
          , C = (0,
        r.useRef)(new Set)
          , [S,_] = (0,
        r.useState)(w)
          , [M,P] = (0,
        r.useState)(w);
        (0,
        o.useIsomorphicLayoutEffect)( () => {
            k.current = !1,
            N.current = w;
            for (let e = 0; e < M.length; e++) {
                let t = b(M[e]);
                j.includes(t) ? (z.delete(t),
                C.current.delete(t)) : !0 !== z.get(t) && z.set(t, !1)
            }
        }
        , [M, j.length, j.join("-")]);
        let E = [];
        if (w !== S) {
            let e = [...w];
            for (let t = 0; t < M.length; t++) {
                let r = M[t]
                  , a = b(r);
                j.includes(a) || (e.splice(t, 0, r),
                E.push(r))
            }
            return "wait" === c && E.length && (e = E),
            P(g(e)),
            _(w),
            null
        }
        let {forceRender: R} = (0,
        r.useContext)(a.LayoutGroupContext);
        return (0,
        t.jsx)(t.Fragment, {
            children: M.map(e => {
                let r = b(e)
                  , a = (!m || !!v) && (w === M || j.includes(r));
                return (0,
                t.jsx)(p, {
                    isPresent: a,
                    initial: (!k.current || !!l) && void 0,
                    custom: s,
                    presenceAffectsLayout: d,
                    mode: c,
                    root: f,
                    onExitComplete: a ? void 0 : () => {
                        if (C.current.has(r) || !z.has(r))
                            return;
                        C.current.add(r),
                        z.set(r, !0);
                        let e = !0;
                        z.forEach(t => {
                            t || (e = !1)
                        }
                        ),
                        e && (R?.(),
                        P(N.current),
                        m && y?.(),
                        n && n())
                    }
                    ,
                    anchorX: u,
                    anchorY: h,
                    children: e
                }, r)
            }
            )
        })
    }
    ], 88653)
}
, 56420, e => {
    "use strict";
    var t = e.i(71645);
    let r = (...e) => e.filter( (e, t, r) => !!e && "" !== e.trim() && r.indexOf(e) === t).join(" ").trim()
      , a = e => {
        let t = e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, r) => r ? r.toUpperCase() : t.toLowerCase());
        return t.charAt(0).toUpperCase() + t.slice(1)
    }
    ;
    var i = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round"
    };
    let o = (0,
    t.createContext)({})
      , s = (0,
    t.forwardRef)( ({color: e, size: a, strokeWidth: s, absoluteStrokeWidth: l, className: n="", children: d, iconNode: c, ...m}, u) => {
        let {size: p=24, strokeWidth: h=2, absoluteStrokeWidth: x=!1, color: b="currentColor", className: g=""} = (0,
        t.useContext)(o) ?? {}
          , f = l ?? x ? 24 * Number(s ?? h) / Number(a ?? p) : s ?? h;
        return (0,
        t.createElement)("svg", {
            ref: u,
            ...i,
            width: a ?? p ?? i.width,
            height: a ?? p ?? i.height,
            stroke: e ?? b,
            strokeWidth: f,
            className: r("lucide", g, n),
            ...!d && !(e => {
                for (let t in e)
                    if (t.startsWith("aria-") || "role" === t || "title" === t)
                        return !0;
                return !1
            }
            )(m) && {
                "aria-hidden": "true"
            },
            ...m
        }, [...c.map( ([e,r]) => (0,
        t.createElement)(e, r)), ...Array.isArray(d) ? d : [d]])
    }
    );
    e.s(["default", 0, (e, i) => {
        let o = (0,
        t.forwardRef)( ({className: o, ...l}, n) => (0,
        t.createElement)(s, {
            ref: n,
            iconNode: i,
            className: r(`lucide-${a(e).replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()}`, `lucide-${e}`, o),
            ...l
        }));
        return o.displayName = a(e),
        o
    }
    ], 56420)
}
, 88143, (e, t, r) => {
    "use strict";
    function a({widthInt: e, heightInt: t, blurWidth: r, blurHeight: i, blurDataURL: o, objectFit: s}) {
        let l = r ? 40 * r : e
          , n = i ? 40 * i : t
          , d = l && n ? `viewBox='0 0 ${l} ${n}'` : "";
        return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${d}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${d ? "none" : "contain" === s ? "xMidYMid" : "cover" === s ? "xMidYMid slice" : "none"}' style='filter: url(%23b);' href='${o}'/%3E%3C/svg%3E`
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    Object.defineProperty(r, "getImageBlurSvg", {
        enumerable: !0,
        get: function() {
            return a
        }
    })
}
, 87690, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var a = {
        VALID_LOADERS: function() {
            return o
        },
        imageConfigDefault: function() {
            return s
        }
    };
    for (var i in a)
        Object.defineProperty(r, i, {
            enumerable: !0,
            get: a[i]
        });
    let o = ["default", "imgix", "cloudinary", "akamai", "custom"]
      , s = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [32, 48, 64, 96, 128, 256, 384],
        path: "/_next/image",
        loader: "default",
        loaderFile: "",
        domains: [],
        disableStaticImages: !1,
        minimumCacheTTL: 14400,
        formats: ["image/webp"],
        maximumDiskCacheSize: void 0,
        maximumRedirects: 3,
        maximumResponseBody: 5e7,
        dangerouslyAllowLocalIP: !1,
        dangerouslyAllowSVG: !1,
        contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
        contentDispositionType: "attachment",
        localPatterns: void 0,
        remotePatterns: [],
        qualities: [75],
        unoptimized: !1,
        customCacheHandler: !1
    }
}
, 8927, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    Object.defineProperty(r, "getImgProps", {
        enumerable: !0,
        get: function() {
            return d
        }
    }),
    e.r(33525);
    let a = e.r(43369)
      , i = e.r(88143)
      , o = e.r(87690)
      , s = ["-moz-initial", "fill", "none", "scale-down", void 0];
    function l(e) {
        return void 0 !== e.default
    }
    function n(e) {
        return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
    }
    function d({src: e, sizes: t, unoptimized: r=!1, priority: c=!1, preload: m=!1, loading: u, className: p, quality: h, width: x, height: b, fill: g=!1, style: f, overrideSrc: v, onLoad: y, onLoadingComplete: w, placeholder: j="empty", blurDataURL: k, fetchPriority: N, decoding: z="async", layout: C, objectFit: S, objectPosition: _, lazyBoundary: M, lazyRoot: P, ...E}, R) {
        var I;
        let O, A, T, {imgConf: D, showAltText: W, blurComplete: L, defaultLoader: $} = R, B = D || o.imageConfigDefault;
        if ("allSizes"in B)
            O = B;
        else {
            let e = [...B.deviceSizes, ...B.imageSizes].sort( (e, t) => e - t)
              , t = B.deviceSizes.sort( (e, t) => e - t)
              , r = B.qualities?.sort( (e, t) => e - t);
            O = {
                ...B,
                allSizes: e,
                deviceSizes: t,
                qualities: r
            }
        }
        if (void 0 === $)
            throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"), "__NEXT_ERROR_CODE", {
                value: "E163",
                enumerable: !1,
                configurable: !0
            });
        let q = E.loader || $;
        delete E.loader,
        delete E.srcSet;
        let F = "__next_img_default"in q;
        if (F) {
            if ("custom" === O.loader)
                throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`), "__NEXT_ERROR_CODE", {
                    value: "E252",
                    enumerable: !1,
                    configurable: !0
                })
        } else {
            let e = q;
            q = t => {
                let {config: r, ...a} = t;
                return e(a)
            }
        }
        if (C) {
            "fill" === C && (g = !0);
            let e = {
                intrinsic: {
                    maxWidth: "100%",
                    height: "auto"
                },
                responsive: {
                    width: "100%",
                    height: "auto"
                }
            }[C];
            e && (f = {
                ...f,
                ...e
            });
            let r = {
                responsive: "100vw",
                fill: "100vw"
            }[C];
            r && !t && (t = r)
        }
        let V = ""
          , G = n(x)
          , U = n(b);
        if ((I = e) && "object" == typeof I && (l(I) || void 0 !== I.src)) {
            let t = l(e) ? e.default : e;
            if (!t.src)
                throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`), "__NEXT_ERROR_CODE", {
                    value: "E460",
                    enumerable: !1,
                    configurable: !0
                });
            if (!t.height || !t.width)
                throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`), "__NEXT_ERROR_CODE", {
                    value: "E48",
                    enumerable: !1,
                    configurable: !0
                });
            if (A = t.blurWidth,
            T = t.blurHeight,
            k = k || t.blurDataURL,
            V = t.src,
            !g)
                if (G || U) {
                    if (G && !U) {
                        let e = G / t.width;
                        U = Math.round(t.height * e)
                    } else if (!G && U) {
                        let e = U / t.height;
                        G = Math.round(t.width * e)
                    }
                } else
                    G = t.width,
                    U = t.height
        }
        let H = !c && !m && ("lazy" === u || void 0 === u);
        (!(e = "string" == typeof e ? e : V) || e.startsWith("data:") || e.startsWith("blob:")) && (r = !0,
        H = !1),
        O.unoptimized && (r = !0),
        F && !O.dangerouslyAllowSVG && e.split("?", 1)[0].endsWith(".svg") && (r = !0);
        let X = n(h)
          , Y = Object.assign(g ? {
            position: "absolute",
            height: "100%",
            width: "100%",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            objectFit: S,
            objectPosition: _
        } : {}, W ? {} : {
            color: "transparent"
        }, f)
          , J = L || "empty" === j ? null : "blur" === j ? `url("data:image/svg+xml;charset=utf-8,${(0,
        i.getImageBlurSvg)({
            widthInt: G,
            heightInt: U,
            blurWidth: A,
            blurHeight: T,
            blurDataURL: k || "",
            objectFit: Y.objectFit
        })}")` : `url("${j}")`
          , Q = s.includes(Y.objectFit) ? "fill" === Y.objectFit ? "100% 100%" : "cover" : Y.objectFit
          , K = J ? {
            backgroundSize: Q,
            backgroundPosition: Y.objectPosition || "50% 50%",
            backgroundRepeat: "no-repeat",
            backgroundImage: J
        } : {}
          , Z = function({config: e, src: t, unoptimized: r, width: i, quality: o, sizes: s, loader: l}) {
            if (r) {
                if (t.startsWith("/") && !t.startsWith("//")) {
                    let e = (0,
                    a.getDeploymentId)();
                    if (e) {
                        let r = t.indexOf("?");
                        if (-1 !== r) {
                            let a = new URLSearchParams(t.slice(r + 1));
                            a.get("dpl") || (a.append("dpl", e),
                            t = t.slice(0, r) + "?" + a.toString())
                        } else
                            t += `?dpl=${e}`
                    }
                }
                return {
                    src: t,
                    srcSet: void 0,
                    sizes: void 0
                }
            }
            let {widths: n, kind: d} = function({deviceSizes: e, allSizes: t}, r, a) {
                if (a) {
                    let r = /(^|\s)(1?\d?\d)vw/g
                      , i = [];
                    for (let e; e = r.exec(a); )
                        i.push(parseInt(e[2]));
                    if (i.length) {
                        let r = .01 * Math.min(...i);
                        return {
                            widths: t.filter(t => t >= e[0] * r),
                            kind: "w"
                        }
                    }
                    return {
                        widths: t,
                        kind: "w"
                    }
                }
                return "number" != typeof r ? {
                    widths: e,
                    kind: "w"
                } : {
                    widths: [...new Set([r, 2 * r].map(e => t.find(t => t >= e) || t[t.length - 1]))],
                    kind: "x"
                }
            }(e, i, s)
              , c = n.length - 1;
            return {
                sizes: s || "w" !== d ? s : "100vw",
                srcSet: n.map( (r, a) => `${l({
                    config: e,
                    src: t,
                    quality: o,
                    width: r
                })} ${"w" === d ? r : a + 1}${d}`).join(", "),
                src: l({
                    config: e,
                    src: t,
                    quality: o,
                    width: n[c]
                })
            }
        }({
            config: O,
            src: e,
            unoptimized: r,
            width: G,
            quality: X,
            sizes: t,
            loader: q
        })
          , ee = H ? "lazy" : u;
        return {
            props: {
                ...E,
                loading: ee,
                fetchPriority: N,
                width: G,
                height: U,
                decoding: z,
                className: p,
                style: {
                    ...Y,
                    ...K
                },
                sizes: Z.sizes,
                srcSet: Z.srcSet,
                src: v || Z.src
            },
            meta: {
                unoptimized: r,
                preload: m || c,
                placeholder: j,
                fill: g
            }
        }
    }
}
, 98879, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function() {
            return l
        }
    });
    let a = e.r(71645)
      , i = "u" < typeof window
      , o = i ? () => {}
    : a.useLayoutEffect
      , s = i ? () => {}
    : a.useEffect;
    function l(e) {
        let {headManager: t, reduceComponentsToState: r} = e;
        function l() {
            if (t && t.mountedInstances) {
                let e = a.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
                t.updateHead(r(e))
            }
        }
        return i && (t?.mountedInstances?.add(e.children),
        l()),
        o( () => (t?.mountedInstances?.add(e.children),
        () => {
            t?.mountedInstances?.delete(e.children)
        }
        )),
        o( () => (t && (t._pendingUpdate = l),
        () => {
            t && (t._pendingUpdate = l)
        }
        )),
        s( () => (t && t._pendingUpdate && (t._pendingUpdate(),
        t._pendingUpdate = null),
        () => {
            t && t._pendingUpdate && (t._pendingUpdate(),
            t._pendingUpdate = null)
        }
        )),
        null
    }
}
, 25633, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var a = {
        default: function() {
            return x
        },
        defaultHead: function() {
            return m
        }
    };
    for (var i in a)
        Object.defineProperty(r, i, {
            enumerable: !0,
            get: a[i]
        });
    let o = e.r(55682)
      , s = e.r(90809)
      , l = e.r(43476)
      , n = s._(e.r(71645))
      , d = o._(e.r(98879))
      , c = e.r(42732);
    function m() {
        return [(0,
        l.jsx)("meta", {
            charSet: "utf-8"
        }, "charset"), (0,
        l.jsx)("meta", {
            name: "viewport",
            content: "width=device-width"
        }, "viewport")]
    }
    function u(e, t) {
        return "string" == typeof t || "number" == typeof t ? e : t.type === n.default.Fragment ? e.concat(n.default.Children.toArray(t.props.children).reduce( (e, t) => "string" == typeof t || "number" == typeof t ? e : e.concat(t), [])) : e.concat(t)
    }
    e.r(33525);
    let p = ["name", "httpEquiv", "charSet", "itemProp"];
    function h(e) {
        let t, r, a, i;
        return e.reduce(u, []).reverse().concat(m().reverse()).filter((t = new Set,
        r = new Set,
        a = new Set,
        i = {},
        e => {
            let o = !0
              , s = !1;
            if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
                s = !0;
                let r = e.key.slice(e.key.indexOf("$") + 1);
                t.has(r) ? o = !1 : t.add(r)
            }
            switch (e.type) {
            case "title":
            case "base":
                r.has(e.type) ? o = !1 : r.add(e.type);
                break;
            case "meta":
                for (let t = 0, r = p.length; t < r; t++) {
                    let r = p[t];
                    if (e.props.hasOwnProperty(r))
                        if ("charSet" === r)
                            a.has(r) ? o = !1 : a.add(r);
                        else {
                            let t = e.props[r]
                              , a = i[r] || new Set;
                            ("name" !== r || !s) && a.has(t) ? o = !1 : (a.add(t),
                            i[r] = a)
                        }
                }
            }
            return o
        }
        )).reverse().map( (e, t) => {
            let r = e.key || t;
            return n.default.cloneElement(e, {
                key: r
            })
        }
        )
    }
    let x = function({children: e}) {
        let t = (0,
        n.useContext)(c.HeadManagerContext);
        return (0,
        l.jsx)(d.default, {
            reduceComponentsToState: h,
            headManager: t,
            children: e
        })
    };
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }),
    Object.assign(r.default, r),
    t.exports = r.default)
}
, 18556, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    Object.defineProperty(r, "ImageConfigContext", {
        enumerable: !0,
        get: function() {
            return o
        }
    });
    let a = e.r(55682)._(e.r(71645))
      , i = e.r(87690)
      , o = a.default.createContext(i.imageConfigDefault)
}
, 65856, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    Object.defineProperty(r, "RouterContext", {
        enumerable: !0,
        get: function() {
            return a
        }
    });
    let a = e.r(55682)._(e.r(71645)).default.createContext(null)
}
, 70965, (e, t, r) => {
    "use strict";
    function a(e, t) {
        let r = e || 75;
        return t?.qualities?.length ? t.qualities.reduce( (e, t) => Math.abs(t - r) < Math.abs(e - r) ? t : e, t.qualities[0]) : r
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    Object.defineProperty(r, "findClosestQuality", {
        enumerable: !0,
        get: function() {
            return a
        }
    })
}
, 1948, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function() {
            return s
        }
    });
    let a = e.r(70965)
      , i = e.r(43369);
    function o({config: e, src: t, width: r, quality: s}) {
        let l = (0,
        i.getDeploymentId)();
        if (t.startsWith("/") && !t.startsWith("//")) {
            let e = t.indexOf("?");
            if (-1 !== e) {
                let r = new URLSearchParams(t.slice(e + 1))
                  , a = r.get("dpl");
                if (a) {
                    l = a,
                    r.delete("dpl");
                    let i = r.toString();
                    t = t.slice(0, e) + (i ? "?" + i : "")
                }
            }
        }
        if (t.startsWith("/") && t.includes("?") && e.localPatterns?.length === 1 && "**" === e.localPatterns[0].pathname && "" === e.localPatterns[0].search)
            throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`), "__NEXT_ERROR_CODE", {
                value: "E871",
                enumerable: !1,
                configurable: !0
            });
        let n = (0,
        a.findClosestQuality)(s, e);
        return `${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${n}${t.startsWith("/") && l ? `&dpl=${l}` : ""}`
    }
    o.__next_img_default = !0;
    let s = o
}
, 18581, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    Object.defineProperty(r, "useMergedRef", {
        enumerable: !0,
        get: function() {
            return i
        }
    });
    let a = e.r(71645);
    function i(e, t) {
        let r = (0,
        a.useRef)(null)
          , i = (0,
        a.useRef)(null);
        return (0,
        a.useCallback)(a => {
            if (null === a) {
                let e = r.current;
                e && (r.current = null,
                e());
                let t = i.current;
                t && (i.current = null,
                t())
            } else
                e && (r.current = o(e, a)),
                t && (i.current = o(t, a))
        }
        , [e, t])
    }
    function o(e, t) {
        if ("function" != typeof e)
            return e.current = t,
            () => {
                e.current = null
            }
            ;
        {
            let r = e(t);
            return "function" == typeof r ? r : () => e(null)
        }
    }
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }),
    Object.assign(r.default, r),
    t.exports = r.default)
}
, 85437, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }),
    Object.defineProperty(r, "Image", {
        enumerable: !0,
        get: function() {
            return y
        }
    });
    let a = e.r(55682)
      , i = e.r(90809)
      , o = e.r(43476)
      , s = i._(e.r(71645))
      , l = a._(e.r(74080))
      , n = a._(e.r(25633))
      , d = e.r(8927)
      , c = e.r(87690)
      , m = e.r(18556);
    e.r(33525);
    let u = e.r(65856)
      , p = a._(e.r(1948))
      , h = e.r(18581)
      , x = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [32, 48, 64, 96, 128, 256, 384],
        qualities: [75],
        path: "/_next/image",
        loader: "default",
        dangerouslyAllowSVG: !1,
        unoptimized: !1
    };
    function b(e, t, r, a, i, o, s) {
        let l = e?.src;
        e && e["data-loaded-src"] !== l && (e["data-loaded-src"] = l,
        ("decode"in e ? e.decode() : Promise.resolve()).catch( () => {}
        ).then( () => {
            if (e.parentElement && e.isConnected) {
                if ("empty" !== t && i(!0),
                r?.current) {
                    let t = new Event("load");
                    Object.defineProperty(t, "target", {
                        writable: !1,
                        value: e
                    });
                    let a = !1
                      , i = !1;
                    r.current({
                        ...t,
                        nativeEvent: t,
                        currentTarget: e,
                        target: e,
                        isDefaultPrevented: () => a,
                        isPropagationStopped: () => i,
                        persist: () => {}
                        ,
                        preventDefault: () => {
                            a = !0,
                            t.preventDefault()
                        }
                        ,
                        stopPropagation: () => {
                            i = !0,
                            t.stopPropagation()
                        }
                    })
                }
                a?.current && a.current(e)
            }
        }
        ))
    }
    function g(e) {
        return s.use ? {
            fetchPriority: e
        } : {
            fetchpriority: e
        }
    }
    "u" < typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
    let f = (0,
    s.forwardRef)( ({src: e, srcSet: t, sizes: r, height: a, width: i, decoding: l, className: n, style: d, fetchPriority: c, placeholder: m, loading: u, unoptimized: p, fill: x, onLoadRef: f, onLoadingCompleteRef: v, setBlurComplete: y, setShowAltText: w, sizesInput: j, onLoad: k, onError: N, ...z}, C) => {
        let S = (0,
        s.useCallback)(e => {
            e && (N && (e.src = e.src),
            e.complete && b(e, m, f, v, y, p, j))
        }
        , [e, m, f, v, y, N, p, j])
          , _ = (0,
        h.useMergedRef)(C, S);
        return (0,
        o.jsx)("img", {
            ...z,
            ...g(c),
            loading: u,
            width: i,
            height: a,
            decoding: l,
            "data-nimg": x ? "fill" : "1",
            className: n,
            style: d,
            sizes: r,
            srcSet: t,
            src: e,
            ref: _,
            onLoad: e => {
                b(e.currentTarget, m, f, v, y, p, j)
            }
            ,
            onError: e => {
                w(!0),
                "empty" !== m && y(!0),
                N && N(e)
            }
        })
    }
    );
    function v({isAppRouter: e, imgAttributes: t}) {
        let r = {
            as: "image",
            imageSrcSet: t.srcSet,
            imageSizes: t.sizes,
            crossOrigin: t.crossOrigin,
            referrerPolicy: t.referrerPolicy,
            ...g(t.fetchPriority)
        };
        return e && l.default.preload ? (l.default.preload(t.src, r),
        null) : (0,
        o.jsx)(n.default, {
            children: (0,
            o.jsx)("link", {
                rel: "preload",
                href: t.srcSet ? void 0 : t.src,
                ...r
            }, "__nimg-" + t.src + t.srcSet + t.sizes)
        })
    }
    let y = (0,
    s.forwardRef)( (e, t) => {
        let r = (0,
        s.useContext)(u.RouterContext)
          , a = (0,
        s.useContext)(m.ImageConfigContext)
          , i = (0,
        s.useMemo)( () => {
            let e = x || a || c.imageConfigDefault
              , t = [...e.deviceSizes, ...e.imageSizes].sort( (e, t) => e - t)
              , r = e.deviceSizes.sort( (e, t) => e - t)
              , i = e.qualities?.sort( (e, t) => e - t);
            return {
                ...e,
                allSizes: t,
                deviceSizes: r,
                qualities: i,
                localPatterns: "u" < typeof window ? a?.localPatterns : e.localPatterns
            }
        }
        , [a])
          , {onLoad: l, onLoadingComplete: n} = e
          , h = (0,
        s.useRef)(l);
        (0,
        s.useEffect)( () => {
            h.current = l
        }
        , [l]);
        let b = (0,
        s.useRef)(n);
        (0,
        s.useEffect)( () => {
            b.current = n
        }
        , [n]);
        let[g,y] = (0,
        s.useState)(!1)
          , [w,j] = (0,
        s.useState)(!1)
          , {props: k, meta: N} = (0,
        d.getImgProps)(e, {
            defaultLoader: p.default,
            imgConf: i,
            blurComplete: g,
            showAltText: w
        });
        return (0,
        o.jsxs)(o.Fragment, {
            children: [(0,
            o.jsx)(f, {
                ...k,
                unoptimized: N.unoptimized,
                placeholder: N.placeholder,
                fill: N.fill,
                onLoadRef: h,
                onLoadingCompleteRef: b,
                setBlurComplete: y,
                setShowAltText: j,
                sizesInput: e.sizes,
                ref: t
            }), N.preload ? (0,
            o.jsx)(v, {
                isAppRouter: !r,
                imgAttributes: k
            }) : null]
        })
    }
    );
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }),
    Object.assign(r.default, r),
    t.exports = r.default)
}
, 94909, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var a = {
        default: function() {
            return c
        },
        getImageProps: function() {
            return d
        }
    };
    for (var i in a)
        Object.defineProperty(r, i, {
            enumerable: !0,
            get: a[i]
        });
    let o = e.r(55682)
      , s = e.r(8927)
      , l = e.r(85437)
      , n = o._(e.r(1948));
    function d(e) {
        let {props: t} = (0,
        s.getImgProps)(e, {
            defaultLoader: n.default,
            imgConf: {
                deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                imageSizes: [32, 48, 64, 96, 128, 256, 384],
                qualities: [75],
                path: "/_next/image",
                loader: "default",
                dangerouslyAllowSVG: !1,
                unoptimized: !1
            }
        });
        for (let[e,r] of Object.entries(t))
            void 0 === r && delete t[e];
        return {
            props: t
        }
    }
    let c = l.Image
}
, 57688, (e, t, r) => {
    t.exports = e.r(94909)
}
, 11955, e => {
    "use strict";
    var t = e.i(43476)
      , r = e.i(71645)
      , a = e.i(46932)
      , i = e.i(88653);
    let o = (e=new Map, t=null, r) => ({
        nextPart: e,
        validators: t,
        classGroupId: r
    })
      , s = []
      , l = (e, t, r) => {
        if (0 == e.length - t)
            return r.classGroupId;
        let a = e[t]
          , i = r.nextPart.get(a);
        if (i) {
            let r = l(e, t + 1, i);
            if (r)
                return r
        }
        let o = r.validators;
        if (null === o)
            return;
        let s = 0 === t ? e.join("-") : e.slice(t).join("-")
          , n = o.length;
        for (let e = 0; e < n; e++) {
            let t = o[e];
            if (t.validator(s))
                return t.classGroupId
        }
    }
      , n = (e, t) => {
        let r = o();
        for (let a in e)
            d(e[a], r, a, t);
        return r
    }
      , d = (e, t, r, a) => {
        let i = e.length;
        for (let o = 0; o < i; o++)
            c(e[o], t, r, a)
    }
      , c = (e, t, r, a) => {
        "string" == typeof e ? m(e, t, r) : "function" == typeof e ? u(e, t, r, a) : p(e, t, r, a)
    }
      , m = (e, t, r) => {
        ("" === e ? t : h(t, e)).classGroupId = r
    }
      , u = (e, t, r, a) => {
        x(e) ? d(e(a), t, r, a) : (null === t.validators && (t.validators = []),
        t.validators.push({
            classGroupId: r,
            validator: e
        }))
    }
      , p = (e, t, r, a) => {
        let i = Object.entries(e)
          , o = i.length;
        for (let e = 0; e < o; e++) {
            let[o,s] = i[e];
            d(s, h(t, o), r, a)
        }
    }
      , h = (e, t) => {
        let r = e
          , a = t.split("-")
          , i = a.length;
        for (let e = 0; e < i; e++) {
            let t = a[e]
              , i = r.nextPart.get(t);
            i || (i = o(),
            r.nextPart.set(t, i)),
            r = i
        }
        return r
    }
      , x = e => "isThemeGetter"in e && !0 === e.isThemeGetter
      , b = []
      , g = (e, t, r, a, i) => ({
        modifiers: e,
        hasImportantModifier: t,
        baseClassName: r,
        maybePostfixModifierPosition: a,
        isExternal: i
    })
      , f = /\s+/
      , v = e => {
        let t;
        if ("string" == typeof e)
            return e;
        let r = "";
        for (let a = 0; a < e.length; a++)
            e[a] && (t = v(e[a])) && (r && (r += " "),
            r += t);
        return r
    }
      , y = []
      , w = e => {
        let t = t => t[e] || y;
        return t.isThemeGetter = !0,
        t
    }
      , j = /^\[(?:(\w[\w-]*):)?(.+)\]$/i
      , k = /^\((?:(\w[\w-]*):)?(.+)\)$/i
      , N = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/
      , z = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
      , C = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
      , S = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/
      , _ = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
      , M = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
      , P = e => N.test(e)
      , E = e => !!e && !Number.isNaN(Number(e))
      , R = e => !!e && Number.isInteger(Number(e))
      , I = e => e.endsWith("%") && E(e.slice(0, -1))
      , O = e => z.test(e)
      , A = () => !0
      , T = e => C.test(e) && !S.test(e)
      , D = () => !1
      , W = e => _.test(e)
      , L = e => M.test(e)
      , $ = e => !q(e) && !J(e)
      , B = e => ei(e, en, D)
      , q = e => j.test(e)
      , F = e => ei(e, ed, T)
      , V = e => ei(e, ec, E)
      , G = e => ei(e, eu, A)
      , U = e => ei(e, em, D)
      , H = e => ei(e, es, D)
      , X = e => ei(e, el, L)
      , Y = e => ei(e, ep, W)
      , J = e => k.test(e)
      , Q = e => eo(e, ed)
      , K = e => eo(e, em)
      , Z = e => eo(e, es)
      , ee = e => eo(e, en)
      , et = e => eo(e, el)
      , er = e => eo(e, ep, !0)
      , ea = e => eo(e, eu, !0)
      , ei = (e, t, r) => {
        let a = j.exec(e);
        return !!a && (a[1] ? t(a[1]) : r(a[2]))
    }
      , eo = (e, t, r=!1) => {
        let a = k.exec(e);
        return !!a && (a[1] ? t(a[1]) : r)
    }
      , es = e => "position" === e || "percentage" === e
      , el = e => "image" === e || "url" === e
      , en = e => "length" === e || "size" === e || "bg-size" === e
      , ed = e => "length" === e
      , ec = e => "number" === e
      , em = e => "family-name" === e
      , eu = e => "number" === e || "weight" === e
      , ep = e => "shadow" === e
      , eh = ( (e, ...t) => {
        let r, a, i, o, d = e => {
            let t = a(e);
            if (t)
                return t;
            let o = ( (e, t) => {
                let {parseClassName: r, getClassGroupId: a, getConflictingClassGroupIds: i, sortModifiers: o} = t
                  , s = []
                  , l = e.trim().split(f)
                  , n = "";
                for (let e = l.length - 1; e >= 0; e -= 1) {
                    let t = l[e]
                      , {isExternal: d, modifiers: c, hasImportantModifier: m, baseClassName: u, maybePostfixModifierPosition: p} = r(t);
                    if (d) {
                        n = t + (n.length > 0 ? " " + n : n);
                        continue
                    }
                    let h = !!p
                      , x = a(h ? u.substring(0, p) : u);
                    if (!x) {
                        if (!h || !(x = a(u))) {
                            n = t + (n.length > 0 ? " " + n : n);
                            continue
                        }
                        h = !1
                    }
                    let b = 0 === c.length ? "" : 1 === c.length ? c[0] : o(c).join(":")
                      , g = m ? b + "!" : b
                      , f = g + x;
                    if (s.indexOf(f) > -1)
                        continue;
                    s.push(f);
                    let v = i(x, h);
                    for (let e = 0; e < v.length; ++e) {
                        let t = v[e];
                        s.push(g + t)
                    }
                    n = t + (n.length > 0 ? " " + n : n)
                }
                return n
            }
            )(e, r);
            return i(e, o),
            o
        }
        ;
        return o = c => {
            var m;
            let u;
            return a = (r = {
                cache: (e => {
                    if (e < 1)
                        return {
                            get: () => void 0,
                            set: () => {}
                        };
                    let t = 0
                      , r = Object.create(null)
                      , a = Object.create(null)
                      , i = (i, o) => {
                        r[i] = o,
                        ++t > e && (t = 0,
                        a = r,
                        r = Object.create(null))
                    }
                    ;
                    return {
                        get(e) {
                            let t = r[e];
                            return void 0 !== t ? t : void 0 !== (t = a[e]) ? (i(e, t),
                            t) : void 0
                        },
                        set(e, t) {
                            e in r ? r[e] = t : i(e, t)
                        }
                    }
                }
                )((m = t.reduce( (e, t) => t(e), e())).cacheSize),
                parseClassName: (e => {
                    let {prefix: t, experimentalParseClassName: r} = e
                      , a = e => {
                        let t, r = [], a = 0, i = 0, o = 0, s = e.length;
                        for (let l = 0; l < s; l++) {
                            let s = e[l];
                            if (0 === a && 0 === i) {
                                if (":" === s) {
                                    r.push(e.slice(o, l)),
                                    o = l + 1;
                                    continue
                                }
                                if ("/" === s) {
                                    t = l;
                                    continue
                                }
                            }
                            "[" === s ? a++ : "]" === s ? a-- : "(" === s ? i++ : ")" === s && i--
                        }
                        let l = 0 === r.length ? e : e.slice(o)
                          , n = l
                          , d = !1;
                        return l.endsWith("!") ? (n = l.slice(0, -1),
                        d = !0) : l.startsWith("!") && (n = l.slice(1),
                        d = !0),
                        g(r, d, n, t && t > o ? t - o : void 0)
                    }
                    ;
                    if (t) {
                        let e = t + ":"
                          , r = a;
                        a = t => t.startsWith(e) ? r(t.slice(e.length)) : g(b, !1, t, void 0, !0)
                    }
                    if (r) {
                        let e = a;
                        a = t => r({
                            className: t,
                            parseClassName: e
                        })
                    }
                    return a
                }
                )(m),
                sortModifiers: (u = new Map,
                m.orderSensitiveModifiers.forEach( (e, t) => {
                    u.set(e, 1e6 + t)
                }
                ),
                e => {
                    let t = []
                      , r = [];
                    for (let a = 0; a < e.length; a++) {
                        let i = e[a]
                          , o = "[" === i[0]
                          , s = u.has(i);
                        o || s ? (r.length > 0 && (r.sort(),
                        t.push(...r),
                        r = []),
                        t.push(i)) : r.push(i)
                    }
                    return r.length > 0 && (r.sort(),
                    t.push(...r)),
                    t
                }
                ),
                ...(e => {
                    let t = (e => {
                        let {theme: t, classGroups: r} = e;
                        return n(r, t)
                    }
                    )(e)
                      , {conflictingClassGroups: r, conflictingClassGroupModifiers: a} = e;
                    return {
                        getClassGroupId: e => {
                            if (e.startsWith("[") && e.endsWith("]")) {
                                var r;
                                let t, a, i;
                                return -1 === (r = e).slice(1, -1).indexOf(":") ? void 0 : (a = (t = r.slice(1, -1)).indexOf(":"),
                                (i = t.slice(0, a)) ? "arbitrary.." + i : void 0)
                            }
                            let a = e.split("-")
                              , i = +("" === a[0] && a.length > 1);
                            return l(a, i, t)
                        }
                        ,
                        getConflictingClassGroupIds: (e, t) => {
                            if (t) {
                                let t = a[e]
                                  , i = r[e];
                                if (t) {
                                    if (i) {
                                        let e = Array(i.length + t.length);
                                        for (let t = 0; t < i.length; t++)
                                            e[t] = i[t];
                                        for (let r = 0; r < t.length; r++)
                                            e[i.length + r] = t[r];
                                        return e
                                    }
                                    return t
                                }
                                return i || s
                            }
                            return r[e] || s
                        }
                    }
                }
                )(m)
            }).cache.get,
            i = r.cache.set,
            o = d,
            d(c)
        }
        ,
        (...e) => o(( (...e) => {
            let t, r, a = 0, i = "";
            for (; a < e.length; )
                (t = e[a++]) && (r = v(t)) && (i && (i += " "),
                i += r);
            return i
        }
        )(...e))
    }
    )( () => {
        let e = w("color")
          , t = w("font")
          , r = w("text")
          , a = w("font-weight")
          , i = w("tracking")
          , o = w("leading")
          , s = w("breakpoint")
          , l = w("container")
          , n = w("spacing")
          , d = w("radius")
          , c = w("shadow")
          , m = w("inset-shadow")
          , u = w("text-shadow")
          , p = w("drop-shadow")
          , h = w("blur")
          , x = w("perspective")
          , b = w("aspect")
          , g = w("ease")
          , f = w("animate")
          , v = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
          , y = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"]
          , j = () => [...y(), J, q]
          , k = () => ["auto", "hidden", "clip", "visible", "scroll"]
          , N = () => ["auto", "contain", "none"]
          , z = () => [J, q, n]
          , C = () => [P, "full", "auto", ...z()]
          , S = () => [R, "none", "subgrid", J, q]
          , _ = () => ["auto", {
            span: ["full", R, J, q]
        }, R, J, q]
          , M = () => [R, "auto", J, q]
          , T = () => ["auto", "min", "max", "fr", J, q]
          , D = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"]
          , W = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"]
          , L = () => ["auto", ...z()]
          , ei = () => [P, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...z()]
          , eo = () => [P, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...z()]
          , es = () => [P, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...z()]
          , el = () => [e, J, q]
          , en = () => [...y(), Z, H, {
            position: [J, q]
        }]
          , ed = () => ["no-repeat", {
            repeat: ["", "x", "y", "space", "round"]
        }]
          , ec = () => ["auto", "cover", "contain", ee, B, {
            size: [J, q]
        }]
          , em = () => [I, Q, F]
          , eu = () => ["", "none", "full", d, J, q]
          , ep = () => ["", E, Q, F]
          , eh = () => ["solid", "dashed", "dotted", "double"]
          , ex = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
          , eb = () => [E, I, Z, H]
          , eg = () => ["", "none", h, J, q]
          , ef = () => ["none", E, J, q]
          , ev = () => ["none", E, J, q]
          , ey = () => [E, J, q]
          , ew = () => [P, "full", ...z()];
        return {
            cacheSize: 500,
            theme: {
                animate: ["spin", "ping", "pulse", "bounce"],
                aspect: ["video"],
                blur: [O],
                breakpoint: [O],
                color: [A],
                container: [O],
                "drop-shadow": [O],
                ease: ["in", "out", "in-out"],
                font: [$],
                "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
                "inset-shadow": [O],
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
                perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
                radius: [O],
                shadow: [O],
                spacing: ["px", E],
                text: [O],
                "text-shadow": [O],
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
            },
            classGroups: {
                aspect: [{
                    aspect: ["auto", "square", P, q, J, b]
                }],
                container: ["container"],
                columns: [{
                    columns: [E, q, J, l]
                }],
                "break-after": [{
                    "break-after": v()
                }],
                "break-before": [{
                    "break-before": v()
                }],
                "break-inside": [{
                    "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                }],
                "box-decoration": [{
                    "box-decoration": ["slice", "clone"]
                }],
                box: [{
                    box: ["border", "content"]
                }],
                display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                sr: ["sr-only", "not-sr-only"],
                float: [{
                    float: ["right", "left", "none", "start", "end"]
                }],
                clear: [{
                    clear: ["left", "right", "both", "none", "start", "end"]
                }],
                isolation: ["isolate", "isolation-auto"],
                "object-fit": [{
                    object: ["contain", "cover", "fill", "none", "scale-down"]
                }],
                "object-position": [{
                    object: j()
                }],
                overflow: [{
                    overflow: k()
                }],
                "overflow-x": [{
                    "overflow-x": k()
                }],
                "overflow-y": [{
                    "overflow-y": k()
                }],
                overscroll: [{
                    overscroll: N()
                }],
                "overscroll-x": [{
                    "overscroll-x": N()
                }],
                "overscroll-y": [{
                    "overscroll-y": N()
                }],
                position: ["static", "fixed", "absolute", "relative", "sticky"],
                inset: [{
                    inset: C()
                }],
                "inset-x": [{
                    "inset-x": C()
                }],
                "inset-y": [{
                    "inset-y": C()
                }],
                start: [{
                    "inset-s": C(),
                    start: C()
                }],
                end: [{
                    "inset-e": C(),
                    end: C()
                }],
                "inset-bs": [{
                    "inset-bs": C()
                }],
                "inset-be": [{
                    "inset-be": C()
                }],
                top: [{
                    top: C()
                }],
                right: [{
                    right: C()
                }],
                bottom: [{
                    bottom: C()
                }],
                left: [{
                    left: C()
                }],
                visibility: ["visible", "invisible", "collapse"],
                z: [{
                    z: [R, "auto", J, q]
                }],
                basis: [{
                    basis: [P, "full", "auto", l, ...z()]
                }],
                "flex-direction": [{
                    flex: ["row", "row-reverse", "col", "col-reverse"]
                }],
                "flex-wrap": [{
                    flex: ["nowrap", "wrap", "wrap-reverse"]
                }],
                flex: [{
                    flex: [E, P, "auto", "initial", "none", q]
                }],
                grow: [{
                    grow: ["", E, J, q]
                }],
                shrink: [{
                    shrink: ["", E, J, q]
                }],
                order: [{
                    order: [R, "first", "last", "none", J, q]
                }],
                "grid-cols": [{
                    "grid-cols": S()
                }],
                "col-start-end": [{
                    col: _()
                }],
                "col-start": [{
                    "col-start": M()
                }],
                "col-end": [{
                    "col-end": M()
                }],
                "grid-rows": [{
                    "grid-rows": S()
                }],
                "row-start-end": [{
                    row: _()
                }],
                "row-start": [{
                    "row-start": M()
                }],
                "row-end": [{
                    "row-end": M()
                }],
                "grid-flow": [{
                    "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                }],
                "auto-cols": [{
                    "auto-cols": T()
                }],
                "auto-rows": [{
                    "auto-rows": T()
                }],
                gap: [{
                    gap: z()
                }],
                "gap-x": [{
                    "gap-x": z()
                }],
                "gap-y": [{
                    "gap-y": z()
                }],
                "justify-content": [{
                    justify: [...D(), "normal"]
                }],
                "justify-items": [{
                    "justify-items": [...W(), "normal"]
                }],
                "justify-self": [{
                    "justify-self": ["auto", ...W()]
                }],
                "align-content": [{
                    content: ["normal", ...D()]
                }],
                "align-items": [{
                    items: [...W(), {
                        baseline: ["", "last"]
                    }]
                }],
                "align-self": [{
                    self: ["auto", ...W(), {
                        baseline: ["", "last"]
                    }]
                }],
                "place-content": [{
                    "place-content": D()
                }],
                "place-items": [{
                    "place-items": [...W(), "baseline"]
                }],
                "place-self": [{
                    "place-self": ["auto", ...W()]
                }],
                p: [{
                    p: z()
                }],
                px: [{
                    px: z()
                }],
                py: [{
                    py: z()
                }],
                ps: [{
                    ps: z()
                }],
                pe: [{
                    pe: z()
                }],
                pbs: [{
                    pbs: z()
                }],
                pbe: [{
                    pbe: z()
                }],
                pt: [{
                    pt: z()
                }],
                pr: [{
                    pr: z()
                }],
                pb: [{
                    pb: z()
                }],
                pl: [{
                    pl: z()
                }],
                m: [{
                    m: L()
                }],
                mx: [{
                    mx: L()
                }],
                my: [{
                    my: L()
                }],
                ms: [{
                    ms: L()
                }],
                me: [{
                    me: L()
                }],
                mbs: [{
                    mbs: L()
                }],
                mbe: [{
                    mbe: L()
                }],
                mt: [{
                    mt: L()
                }],
                mr: [{
                    mr: L()
                }],
                mb: [{
                    mb: L()
                }],
                ml: [{
                    ml: L()
                }],
                "space-x": [{
                    "space-x": z()
                }],
                "space-x-reverse": ["space-x-reverse"],
                "space-y": [{
                    "space-y": z()
                }],
                "space-y-reverse": ["space-y-reverse"],
                size: [{
                    size: ei()
                }],
                "inline-size": [{
                    inline: ["auto", ...eo()]
                }],
                "min-inline-size": [{
                    "min-inline": ["auto", ...eo()]
                }],
                "max-inline-size": [{
                    "max-inline": ["none", ...eo()]
                }],
                "block-size": [{
                    block: ["auto", ...es()]
                }],
                "min-block-size": [{
                    "min-block": ["auto", ...es()]
                }],
                "max-block-size": [{
                    "max-block": ["none", ...es()]
                }],
                w: [{
                    w: [l, "screen", ...ei()]
                }],
                "min-w": [{
                    "min-w": [l, "screen", "none", ...ei()]
                }],
                "max-w": [{
                    "max-w": [l, "screen", "none", "prose", {
                        screen: [s]
                    }, ...ei()]
                }],
                h: [{
                    h: ["screen", "lh", ...ei()]
                }],
                "min-h": [{
                    "min-h": ["screen", "lh", "none", ...ei()]
                }],
                "max-h": [{
                    "max-h": ["screen", "lh", ...ei()]
                }],
                "font-size": [{
                    text: ["base", r, Q, F]
                }],
                "font-smoothing": ["antialiased", "subpixel-antialiased"],
                "font-style": ["italic", "not-italic"],
                "font-weight": [{
                    font: [a, ea, G]
                }],
                "font-stretch": [{
                    "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", I, q]
                }],
                "font-family": [{
                    font: [K, U, t]
                }],
                "font-features": [{
                    "font-features": [q]
                }],
                "fvn-normal": ["normal-nums"],
                "fvn-ordinal": ["ordinal"],
                "fvn-slashed-zero": ["slashed-zero"],
                "fvn-figure": ["lining-nums", "oldstyle-nums"],
                "fvn-spacing": ["proportional-nums", "tabular-nums"],
                "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                tracking: [{
                    tracking: [i, J, q]
                }],
                "line-clamp": [{
                    "line-clamp": [E, "none", J, V]
                }],
                leading: [{
                    leading: [o, ...z()]
                }],
                "list-image": [{
                    "list-image": ["none", J, q]
                }],
                "list-style-position": [{
                    list: ["inside", "outside"]
                }],
                "list-style-type": [{
                    list: ["disc", "decimal", "none", J, q]
                }],
                "text-alignment": [{
                    text: ["left", "center", "right", "justify", "start", "end"]
                }],
                "placeholder-color": [{
                    placeholder: el()
                }],
                "text-color": [{
                    text: el()
                }],
                "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                "text-decoration-style": [{
                    decoration: [...eh(), "wavy"]
                }],
                "text-decoration-thickness": [{
                    decoration: [E, "from-font", "auto", J, F]
                }],
                "text-decoration-color": [{
                    decoration: el()
                }],
                "underline-offset": [{
                    "underline-offset": [E, "auto", J, q]
                }],
                "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                "text-wrap": [{
                    text: ["wrap", "nowrap", "balance", "pretty"]
                }],
                indent: [{
                    indent: z()
                }],
                "vertical-align": [{
                    align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", J, q]
                }],
                whitespace: [{
                    whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                }],
                break: [{
                    break: ["normal", "words", "all", "keep"]
                }],
                wrap: [{
                    wrap: ["break-word", "anywhere", "normal"]
                }],
                hyphens: [{
                    hyphens: ["none", "manual", "auto"]
                }],
                content: [{
                    content: ["none", J, q]
                }],
                "bg-attachment": [{
                    bg: ["fixed", "local", "scroll"]
                }],
                "bg-clip": [{
                    "bg-clip": ["border", "padding", "content", "text"]
                }],
                "bg-origin": [{
                    "bg-origin": ["border", "padding", "content"]
                }],
                "bg-position": [{
                    bg: en()
                }],
                "bg-repeat": [{
                    bg: ed()
                }],
                "bg-size": [{
                    bg: ec()
                }],
                "bg-image": [{
                    bg: ["none", {
                        linear: [{
                            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                        }, R, J, q],
                        radial: ["", J, q],
                        conic: [R, J, q]
                    }, et, X]
                }],
                "bg-color": [{
                    bg: el()
                }],
                "gradient-from-pos": [{
                    from: em()
                }],
                "gradient-via-pos": [{
                    via: em()
                }],
                "gradient-to-pos": [{
                    to: em()
                }],
                "gradient-from": [{
                    from: el()
                }],
                "gradient-via": [{
                    via: el()
                }],
                "gradient-to": [{
                    to: el()
                }],
                rounded: [{
                    rounded: eu()
                }],
                "rounded-s": [{
                    "rounded-s": eu()
                }],
                "rounded-e": [{
                    "rounded-e": eu()
                }],
                "rounded-t": [{
                    "rounded-t": eu()
                }],
                "rounded-r": [{
                    "rounded-r": eu()
                }],
                "rounded-b": [{
                    "rounded-b": eu()
                }],
                "rounded-l": [{
                    "rounded-l": eu()
                }],
                "rounded-ss": [{
                    "rounded-ss": eu()
                }],
                "rounded-se": [{
                    "rounded-se": eu()
                }],
                "rounded-ee": [{
                    "rounded-ee": eu()
                }],
                "rounded-es": [{
                    "rounded-es": eu()
                }],
                "rounded-tl": [{
                    "rounded-tl": eu()
                }],
                "rounded-tr": [{
                    "rounded-tr": eu()
                }],
                "rounded-br": [{
                    "rounded-br": eu()
                }],
                "rounded-bl": [{
                    "rounded-bl": eu()
                }],
                "border-w": [{
                    border: ep()
                }],
                "border-w-x": [{
                    "border-x": ep()
                }],
                "border-w-y": [{
                    "border-y": ep()
                }],
                "border-w-s": [{
                    "border-s": ep()
                }],
                "border-w-e": [{
                    "border-e": ep()
                }],
                "border-w-bs": [{
                    "border-bs": ep()
                }],
                "border-w-be": [{
                    "border-be": ep()
                }],
                "border-w-t": [{
                    "border-t": ep()
                }],
                "border-w-r": [{
                    "border-r": ep()
                }],
                "border-w-b": [{
                    "border-b": ep()
                }],
                "border-w-l": [{
                    "border-l": ep()
                }],
                "divide-x": [{
                    "divide-x": ep()
                }],
                "divide-x-reverse": ["divide-x-reverse"],
                "divide-y": [{
                    "divide-y": ep()
                }],
                "divide-y-reverse": ["divide-y-reverse"],
                "border-style": [{
                    border: [...eh(), "hidden", "none"]
                }],
                "divide-style": [{
                    divide: [...eh(), "hidden", "none"]
                }],
                "border-color": [{
                    border: el()
                }],
                "border-color-x": [{
                    "border-x": el()
                }],
                "border-color-y": [{
                    "border-y": el()
                }],
                "border-color-s": [{
                    "border-s": el()
                }],
                "border-color-e": [{
                    "border-e": el()
                }],
                "border-color-bs": [{
                    "border-bs": el()
                }],
                "border-color-be": [{
                    "border-be": el()
                }],
                "border-color-t": [{
                    "border-t": el()
                }],
                "border-color-r": [{
                    "border-r": el()
                }],
                "border-color-b": [{
                    "border-b": el()
                }],
                "border-color-l": [{
                    "border-l": el()
                }],
                "divide-color": [{
                    divide: el()
                }],
                "outline-style": [{
                    outline: [...eh(), "none", "hidden"]
                }],
                "outline-offset": [{
                    "outline-offset": [E, J, q]
                }],
                "outline-w": [{
                    outline: ["", E, Q, F]
                }],
                "outline-color": [{
                    outline: el()
                }],
                shadow: [{
                    shadow: ["", "none", c, er, Y]
                }],
                "shadow-color": [{
                    shadow: el()
                }],
                "inset-shadow": [{
                    "inset-shadow": ["none", m, er, Y]
                }],
                "inset-shadow-color": [{
                    "inset-shadow": el()
                }],
                "ring-w": [{
                    ring: ep()
                }],
                "ring-w-inset": ["ring-inset"],
                "ring-color": [{
                    ring: el()
                }],
                "ring-offset-w": [{
                    "ring-offset": [E, F]
                }],
                "ring-offset-color": [{
                    "ring-offset": el()
                }],
                "inset-ring-w": [{
                    "inset-ring": ep()
                }],
                "inset-ring-color": [{
                    "inset-ring": el()
                }],
                "text-shadow": [{
                    "text-shadow": ["none", u, er, Y]
                }],
                "text-shadow-color": [{
                    "text-shadow": el()
                }],
                opacity: [{
                    opacity: [E, J, q]
                }],
                "mix-blend": [{
                    "mix-blend": [...ex(), "plus-darker", "plus-lighter"]
                }],
                "bg-blend": [{
                    "bg-blend": ex()
                }],
                "mask-clip": [{
                    "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
                }, "mask-no-clip"],
                "mask-composite": [{
                    mask: ["add", "subtract", "intersect", "exclude"]
                }],
                "mask-image-linear-pos": [{
                    "mask-linear": [E]
                }],
                "mask-image-linear-from-pos": [{
                    "mask-linear-from": eb()
                }],
                "mask-image-linear-to-pos": [{
                    "mask-linear-to": eb()
                }],
                "mask-image-linear-from-color": [{
                    "mask-linear-from": el()
                }],
                "mask-image-linear-to-color": [{
                    "mask-linear-to": el()
                }],
                "mask-image-t-from-pos": [{
                    "mask-t-from": eb()
                }],
                "mask-image-t-to-pos": [{
                    "mask-t-to": eb()
                }],
                "mask-image-t-from-color": [{
                    "mask-t-from": el()
                }],
                "mask-image-t-to-color": [{
                    "mask-t-to": el()
                }],
                "mask-image-r-from-pos": [{
                    "mask-r-from": eb()
                }],
                "mask-image-r-to-pos": [{
                    "mask-r-to": eb()
                }],
                "mask-image-r-from-color": [{
                    "mask-r-from": el()
                }],
                "mask-image-r-to-color": [{
                    "mask-r-to": el()
                }],
                "mask-image-b-from-pos": [{
                    "mask-b-from": eb()
                }],
                "mask-image-b-to-pos": [{
                    "mask-b-to": eb()
                }],
                "mask-image-b-from-color": [{
                    "mask-b-from": el()
                }],
                "mask-image-b-to-color": [{
                    "mask-b-to": el()
                }],
                "mask-image-l-from-pos": [{
                    "mask-l-from": eb()
                }],
                "mask-image-l-to-pos": [{
                    "mask-l-to": eb()
                }],
                "mask-image-l-from-color": [{
                    "mask-l-from": el()
                }],
                "mask-image-l-to-color": [{
                    "mask-l-to": el()
                }],
                "mask-image-x-from-pos": [{
                    "mask-x-from": eb()
                }],
                "mask-image-x-to-pos": [{
                    "mask-x-to": eb()
                }],
                "mask-image-x-from-color": [{
                    "mask-x-from": el()
                }],
                "mask-image-x-to-color": [{
                    "mask-x-to": el()
                }],
                "mask-image-y-from-pos": [{
                    "mask-y-from": eb()
                }],
                "mask-image-y-to-pos": [{
                    "mask-y-to": eb()
                }],
                "mask-image-y-from-color": [{
                    "mask-y-from": el()
                }],
                "mask-image-y-to-color": [{
                    "mask-y-to": el()
                }],
                "mask-image-radial": [{
                    "mask-radial": [J, q]
                }],
                "mask-image-radial-from-pos": [{
                    "mask-radial-from": eb()
                }],
                "mask-image-radial-to-pos": [{
                    "mask-radial-to": eb()
                }],
                "mask-image-radial-from-color": [{
                    "mask-radial-from": el()
                }],
                "mask-image-radial-to-color": [{
                    "mask-radial-to": el()
                }],
                "mask-image-radial-shape": [{
                    "mask-radial": ["circle", "ellipse"]
                }],
                "mask-image-radial-size": [{
                    "mask-radial": [{
                        closest: ["side", "corner"],
                        farthest: ["side", "corner"]
                    }]
                }],
                "mask-image-radial-pos": [{
                    "mask-radial-at": y()
                }],
                "mask-image-conic-pos": [{
                    "mask-conic": [E]
                }],
                "mask-image-conic-from-pos": [{
                    "mask-conic-from": eb()
                }],
                "mask-image-conic-to-pos": [{
                    "mask-conic-to": eb()
                }],
                "mask-image-conic-from-color": [{
                    "mask-conic-from": el()
                }],
                "mask-image-conic-to-color": [{
                    "mask-conic-to": el()
                }],
                "mask-mode": [{
                    mask: ["alpha", "luminance", "match"]
                }],
                "mask-origin": [{
                    "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
                }],
                "mask-position": [{
                    mask: en()
                }],
                "mask-repeat": [{
                    mask: ed()
                }],
                "mask-size": [{
                    mask: ec()
                }],
                "mask-type": [{
                    "mask-type": ["alpha", "luminance"]
                }],
                "mask-image": [{
                    mask: ["none", J, q]
                }],
                filter: [{
                    filter: ["", "none", J, q]
                }],
                blur: [{
                    blur: eg()
                }],
                brightness: [{
                    brightness: [E, J, q]
                }],
                contrast: [{
                    contrast: [E, J, q]
                }],
                "drop-shadow": [{
                    "drop-shadow": ["", "none", p, er, Y]
                }],
                "drop-shadow-color": [{
                    "drop-shadow": el()
                }],
                grayscale: [{
                    grayscale: ["", E, J, q]
                }],
                "hue-rotate": [{
                    "hue-rotate": [E, J, q]
                }],
                invert: [{
                    invert: ["", E, J, q]
                }],
                saturate: [{
                    saturate: [E, J, q]
                }],
                sepia: [{
                    sepia: ["", E, J, q]
                }],
                "backdrop-filter": [{
                    "backdrop-filter": ["", "none", J, q]
                }],
                "backdrop-blur": [{
                    "backdrop-blur": eg()
                }],
                "backdrop-brightness": [{
                    "backdrop-brightness": [E, J, q]
                }],
                "backdrop-contrast": [{
                    "backdrop-contrast": [E, J, q]
                }],
                "backdrop-grayscale": [{
                    "backdrop-grayscale": ["", E, J, q]
                }],
                "backdrop-hue-rotate": [{
                    "backdrop-hue-rotate": [E, J, q]
                }],
                "backdrop-invert": [{
                    "backdrop-invert": ["", E, J, q]
                }],
                "backdrop-opacity": [{
                    "backdrop-opacity": [E, J, q]
                }],
                "backdrop-saturate": [{
                    "backdrop-saturate": [E, J, q]
                }],
                "backdrop-sepia": [{
                    "backdrop-sepia": ["", E, J, q]
                }],
                "border-collapse": [{
                    border: ["collapse", "separate"]
                }],
                "border-spacing": [{
                    "border-spacing": z()
                }],
                "border-spacing-x": [{
                    "border-spacing-x": z()
                }],
                "border-spacing-y": [{
                    "border-spacing-y": z()
                }],
                "table-layout": [{
                    table: ["auto", "fixed"]
                }],
                caption: [{
                    caption: ["top", "bottom"]
                }],
                transition: [{
                    transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", J, q]
                }],
                "transition-behavior": [{
                    transition: ["normal", "discrete"]
                }],
                duration: [{
                    duration: [E, "initial", J, q]
                }],
                ease: [{
                    ease: ["linear", "initial", g, J, q]
                }],
                delay: [{
                    delay: [E, J, q]
                }],
                animate: [{
                    animate: ["none", f, J, q]
                }],
                backface: [{
                    backface: ["hidden", "visible"]
                }],
                perspective: [{
                    perspective: [x, J, q]
                }],
                "perspective-origin": [{
                    "perspective-origin": j()
                }],
                rotate: [{
                    rotate: ef()
                }],
                "rotate-x": [{
                    "rotate-x": ef()
                }],
                "rotate-y": [{
                    "rotate-y": ef()
                }],
                "rotate-z": [{
                    "rotate-z": ef()
                }],
                scale: [{
                    scale: ev()
                }],
                "scale-x": [{
                    "scale-x": ev()
                }],
                "scale-y": [{
                    "scale-y": ev()
                }],
                "scale-z": [{
                    "scale-z": ev()
                }],
                "scale-3d": ["scale-3d"],
                skew: [{
                    skew: ey()
                }],
                "skew-x": [{
                    "skew-x": ey()
                }],
                "skew-y": [{
                    "skew-y": ey()
                }],
                transform: [{
                    transform: [J, q, "", "none", "gpu", "cpu"]
                }],
                "transform-origin": [{
                    origin: j()
                }],
                "transform-style": [{
                    transform: ["3d", "flat"]
                }],
                translate: [{
                    translate: ew()
                }],
                "translate-x": [{
                    "translate-x": ew()
                }],
                "translate-y": [{
                    "translate-y": ew()
                }],
                "translate-z": [{
                    "translate-z": ew()
                }],
                "translate-none": ["translate-none"],
                accent: [{
                    accent: el()
                }],
                appearance: [{
                    appearance: ["none", "auto"]
                }],
                "caret-color": [{
                    caret: el()
                }],
                "color-scheme": [{
                    scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
                }],
                cursor: [{
                    cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", J, q]
                }],
                "field-sizing": [{
                    "field-sizing": ["fixed", "content"]
                }],
                "pointer-events": [{
                    "pointer-events": ["auto", "none"]
                }],
                resize: [{
                    resize: ["none", "", "y", "x"]
                }],
                "scroll-behavior": [{
                    scroll: ["auto", "smooth"]
                }],
                "scroll-m": [{
                    "scroll-m": z()
                }],
                "scroll-mx": [{
                    "scroll-mx": z()
                }],
                "scroll-my": [{
                    "scroll-my": z()
                }],
                "scroll-ms": [{
                    "scroll-ms": z()
                }],
                "scroll-me": [{
                    "scroll-me": z()
                }],
                "scroll-mbs": [{
                    "scroll-mbs": z()
                }],
                "scroll-mbe": [{
                    "scroll-mbe": z()
                }],
                "scroll-mt": [{
                    "scroll-mt": z()
                }],
                "scroll-mr": [{
                    "scroll-mr": z()
                }],
                "scroll-mb": [{
                    "scroll-mb": z()
                }],
                "scroll-ml": [{
                    "scroll-ml": z()
                }],
                "scroll-p": [{
                    "scroll-p": z()
                }],
                "scroll-px": [{
                    "scroll-px": z()
                }],
                "scroll-py": [{
                    "scroll-py": z()
                }],
                "scroll-ps": [{
                    "scroll-ps": z()
                }],
                "scroll-pe": [{
                    "scroll-pe": z()
                }],
                "scroll-pbs": [{
                    "scroll-pbs": z()
                }],
                "scroll-pbe": [{
                    "scroll-pbe": z()
                }],
                "scroll-pt": [{
                    "scroll-pt": z()
                }],
                "scroll-pr": [{
                    "scroll-pr": z()
                }],
                "scroll-pb": [{
                    "scroll-pb": z()
                }],
                "scroll-pl": [{
                    "scroll-pl": z()
                }],
                "snap-align": [{
                    snap: ["start", "end", "center", "align-none"]
                }],
                "snap-stop": [{
                    snap: ["normal", "always"]
                }],
                "snap-type": [{
                    snap: ["none", "x", "y", "both"]
                }],
                "snap-strictness": [{
                    snap: ["mandatory", "proximity"]
                }],
                touch: [{
                    touch: ["auto", "none", "manipulation"]
                }],
                "touch-x": [{
                    "touch-pan": ["x", "left", "right"]
                }],
                "touch-y": [{
                    "touch-pan": ["y", "up", "down"]
                }],
                "touch-pz": ["touch-pinch-zoom"],
                select: [{
                    select: ["none", "text", "all", "auto"]
                }],
                "will-change": [{
                    "will-change": ["auto", "scroll", "contents", "transform", J, q]
                }],
                fill: [{
                    fill: ["none", ...el()]
                }],
                "stroke-w": [{
                    stroke: [E, Q, F, V]
                }],
                stroke: [{
                    stroke: ["none", ...el()]
                }],
                "forced-color-adjust": [{
                    "forced-color-adjust": ["auto", "none"]
                }]
            },
            conflictingClassGroups: {
                overflow: ["overflow-x", "overflow-y"],
                overscroll: ["overscroll-x", "overscroll-y"],
                inset: ["inset-x", "inset-y", "inset-bs", "inset-be", "start", "end", "top", "right", "bottom", "left"],
                "inset-x": ["right", "left"],
                "inset-y": ["top", "bottom"],
                flex: ["basis", "grow", "shrink"],
                gap: ["gap-x", "gap-y"],
                p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
                px: ["pr", "pl"],
                py: ["pt", "pb"],
                m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
                mx: ["mr", "ml"],
                my: ["mt", "mb"],
                size: ["w", "h"],
                "font-size": ["leading"],
                "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                "fvn-ordinal": ["fvn-normal"],
                "fvn-slashed-zero": ["fvn-normal"],
                "fvn-figure": ["fvn-normal"],
                "fvn-spacing": ["fvn-normal"],
                "fvn-fraction": ["fvn-normal"],
                "line-clamp": ["display", "overflow"],
                rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                "rounded-s": ["rounded-ss", "rounded-es"],
                "rounded-e": ["rounded-se", "rounded-ee"],
                "rounded-t": ["rounded-tl", "rounded-tr"],
                "rounded-r": ["rounded-tr", "rounded-br"],
                "rounded-b": ["rounded-br", "rounded-bl"],
                "rounded-l": ["rounded-tl", "rounded-bl"],
                "border-spacing": ["border-spacing-x", "border-spacing-y"],
                "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-bs", "border-w-be", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                "border-w-x": ["border-w-r", "border-w-l"],
                "border-w-y": ["border-w-t", "border-w-b"],
                "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-bs", "border-color-be", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                "border-color-x": ["border-color-r", "border-color-l"],
                "border-color-y": ["border-color-t", "border-color-b"],
                translate: ["translate-x", "translate-y", "translate-none"],
                "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
                "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mbs", "scroll-mbe", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                "scroll-mx": ["scroll-mr", "scroll-ml"],
                "scroll-my": ["scroll-mt", "scroll-mb"],
                "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pbs", "scroll-pbe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                "scroll-px": ["scroll-pr", "scroll-pl"],
                "scroll-py": ["scroll-pt", "scroll-pb"],
                touch: ["touch-x", "touch-y", "touch-pz"],
                "touch-x": ["touch"],
                "touch-y": ["touch"],
                "touch-pz": ["touch"]
            },
            conflictingClassGroupModifiers: {
                "font-size": ["leading"]
            },
            orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
        }
    }
    );
    var ex = e.i(56420);
    let eb = (0,
    ex.default)("menu", [["path", {
        d: "M4 5h16",
        key: "1tepv9"
    }], ["path", {
        d: "M4 12h16",
        key: "1lakjw"
    }], ["path", {
        d: "M4 19h16",
        key: "1djgab"
    }]])
      , eg = (0,
    ex.default)("x", [["path", {
        d: "M18 6 6 18",
        key: "1bl5f8"
    }], ["path", {
        d: "m6 6 12 12",
        key: "d8bk6v"
    }]]);
    var ef = e.i(57688);
    let ev = [{
        label: "About",
        href: "#about"
    }, {
        label: "Work",
        href: "#projects"
    }, {
        label: "Services",
        href: "#services"
    }, {
        label: "Process",
        href: "#process"
    }, {
        label: "Industries",
        href: "#industries"
    }, {
        label: "Contact",
        href: "#contact"
    }];
    e.s(["default", 0, function() {
        let[e,o] = (0,
        r.useState)(!1)
          , [s,l] = (0,
        r.useState)(!1);
        (0,
        r.useEffect)( () => {
            let e = () => o(window.scrollY > 40);
            return window.addEventListener("scroll", e, {
                passive: !0
            }),
            () => window.removeEventListener("scroll", e)
        }
        , []);
        let n = e => {
            l(!1),
            document.querySelector(e)?.scrollIntoView({
                behavior: "smooth"
            })
        }
        ;
        return (0,
        t.jsxs)(t.Fragment, {
            children: [(0,
            t.jsx)(a.motion.header, {
                initial: {
                    y: -80,
                    opacity: 0
                },
                animate: {
                    y: 0,
                    opacity: 1
                },
                transition: {
                    duration: .6,
                    ease: "easeOut"
                },
                className: function(...e) {
                    return eh(function() {
                        for (var e, t, r = 0, a = "", i = arguments.length; r < i; r++)
                            (e = arguments[r]) && (t = function e(t) {
                                var r, a, i = "";
                                if ("string" == typeof t || "number" == typeof t)
                                    i += t;
                                else if ("object" == typeof t)
                                    if (Array.isArray(t)) {
                                        var o = t.length;
                                        for (r = 0; r < o; r++)
                                            t[r] && (a = e(t[r])) && (i && (i += " "),
                                            i += a)
                                    } else
                                        for (a in t)
                                            t[a] && (i && (i += " "),
                                            i += a);
                                return i
                            }(e)) && (a && (a += " "),
                            a += t);
                        return a
                    }(e))
                }("fixed top-0 left-0 right-0 z-50 transition-all duration-300", e ? "bg-[#05050f]/90 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.5)]" : "bg-transparent"),
                children: (0,
                t.jsxs)("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between",
                    children: [(0,
                    t.jsx)("button", {
                        onClick: () => window.scrollTo({
                            top: 0,
                            behavior: "smooth"
                        }),
                        className: "flex items-center mt-3",
                        children: (0,
                        t.jsx)(ef.default, {
                            src: "/logo.png",
                            alt: "Nexora Studio",
                            width: 140,
                            height: 140,
                            className: "w-24 md:w-28 h-auto object-contain",
                            priority: !0
                        })
                    }), (0,
                    t.jsxs)("nav", {
                        className: "hidden md:flex items-center gap-7",
                        children: [ev.map(e => (0,
                        t.jsxs)("button", {
                            onClick: () => n(e.href),
                            className: "text-sm text-slate-400 hover:text-white transition-colors duration-200 relative group",
                            children: [e.label, (0,
                            t.jsx)("span", {
                                className: "absolute -bottom-0.5 left-0 h-px w-0 bg-blue-400 group-hover:w-full transition-all duration-300"
                            })]
                        }, e.href)), (0,
                        t.jsx)("button", {
                            onClick: () => n("#contact"),
                            className: "ml-2 px-5 py-2 rounded-lg text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-all duration-200 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]",
                            children: "Get Started"
                        })]
                    }), (0,
                    t.jsx)("button", {
                        onClick: () => l(e => !e),
                        className: "md:hidden text-slate-300 hover:text-white transition-colors p-1",
                        "aria-label": "Toggle menu",
                        children: s ? (0,
                        t.jsx)(eg, {
                            size: 22
                        }) : (0,
                        t.jsx)(eb, {
                            size: 22
                        })
                    })]
                })
            }), (0,
            t.jsx)(i.AnimatePresence, {
                children: s && (0,
                t.jsx)(a.motion.div, {
                    initial: {
                        opacity: 0,
                        y: -10
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        y: -10
                    },
                    transition: {
                        duration: .2
                    },
                    className: "fixed top-16 left-0 right-0 z-40 bg-[#05050f]/95 backdrop-blur-xl border-b border-white/[0.06] md:hidden",
                    children: (0,
                    t.jsxs)("div", {
                        className: "flex flex-col px-6 py-6 gap-4",
                        children: [ev.map(e => (0,
                        t.jsx)("button", {
                            onClick: () => n(e.href),
                            className: "text-left text-base text-slate-300 hover:text-white transition-colors",
                            children: e.label
                        }, e.href)), (0,
                        t.jsx)("button", {
                            onClick: () => n("#contact"),
                            className: "mt-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-all text-center",
                            children: "Get Started"
                        })]
                    })
                })
            })]
        })
    }
    ], 11955)
}
, 68877, e => {
    "use strict";
    let t = (0,
    e.i(56420).default)("arrow-right", [["path", {
        d: "M5 12h14",
        key: "1ays0h"
    }], ["path", {
        d: "m12 5 7 7-7 7",
        key: "xquz4c"
    }]]);
    e.s(["ArrowRight", 0, t], 68877)
}
, 77258, e => {
    "use strict";
    var t = e.i(43476)
      , r = e.i(71645)
      , a = e.i(46932)
      , i = e.i(68877);
    let o = (0,
    e.i(56420).default)("chevron-down", [["path", {
        d: "m6 9 6 6 6-6",
        key: "qrunsl"
    }]])
      , s = [{
        value: "20+",
        label: "Projects Delivered"
    }, {
        value: "100%",
        label: "Client Satisfaction"
    }, {
        value: "2+",
        label: "Years Active"
    }];
    e.s(["default", 0, function() {
        let e = (0,
        r.useRef)(null);
        return (0,
        r.useEffect)( () => {
            let t, r = e.current;
            if (!r)
                return;
            let a = r.getContext("2d");
            if (!a)
                return;
            let i = {
                x: -999,
                y: -999
            }
              , o = () => {
                r.width = window.innerWidth,
                r.height = window.innerHeight
            }
            ;
            o(),
            window.addEventListener("resize", o);
            let s = e => {
                i = {
                    x: e.clientX,
                    y: e.clientY
                }
            }
            ;
            window.addEventListener("mousemove", s);
            let l = () => {
                a.clearRect(0, 0, r.width, r.height);
                let e = Math.ceil(r.width / 35) + 1
                  , o = Math.ceil(r.height / 35) + 1;
                for (let t = 0; t < e; t++)
                    for (let e = 0; e < o; e++) {
                        let r = 35 * t
                          , o = 35 * e
                          , s = Math.hypot(i.x - r, i.y - o)
                          , l = s < 160 ? .25 * (1 - s / 160) : .045;
                        a.beginPath(),
                        a.arc(r, o, 1, 0, 2 * Math.PI),
                        a.fillStyle = `rgba(59, 130, 246, ${l})`,
                        a.fill()
                    }
                t = requestAnimationFrame(l)
            }
            ;
            return l(),
            () => {
                cancelAnimationFrame(t),
                window.removeEventListener("resize", o),
                window.removeEventListener("mousemove", s)
            }
        }
        , []),
        (0,
        t.jsxs)("section", {
            id: "hero",
            className: "relative isolate min-h-[calc(100svh-4rem)] flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6",
            children: [(0,
            t.jsx)("canvas", {
                ref: e,
                className: "absolute inset-0 w-full h-full pointer-events-none",
                "aria-hidden": !0
            }), (0,
            t.jsxs)("div", {
                className: "absolute inset-0 -z-10",
                children: [(0,
                t.jsx)("div", {
                    className: "absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(600px,90vw)] h-[min(600px,90vw)] rounded-full bg-blue-600/[0.08] blur-[120px]"
                }), (0,
                t.jsx)("div", {
                    className: "absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-cyan-500/[0.06] blur-[80px]"
                })]
            }), (0,
            t.jsxs)("div", {
                className: "relative z-10 w-full max-w-5xl mx-auto text-center",
                children: [(0,
                t.jsxs)(a.motion.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .5
                    },
                    className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs sm:text-sm font-medium mb-6 sm:mb-8",
                    children: [(0,
                    t.jsx)("span", {
                        className: "w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse flex-shrink-0"
                    }), (0,
                    t.jsx)("span", {
                        children: "Premium Web Development & Design Agency"
                    })]
                }), (0,
                t.jsxs)(a.motion.h1, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .7,
                        delay: .1
                    },
                    className: "text-4xl sm:text-6xl lg:text-8xl font-extrabold leading-[1.08] tracking-tight text-white mb-5 sm:mb-6",
                    children: ["We Build", " ", (0,
                    t.jsx)("span", {
                        className: "relative inline-block",
                        children: (0,
                        t.jsx)("span", {
                            className: "bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent",
                            children: "Digital"
                        })
                    }), (0,
                    t.jsx)("br", {}), "Experiences"]
                }), (0,
                t.jsx)(a.motion.p, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .6,
                        delay: .25
                    },
                    className: "text-sm sm:text-lg lg:text-xl text-slate-400 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2",
                    children: "From concept to deployment — we design and engineer scalable, high-performance web products that drive real business results."
                }), (0,
                t.jsxs)(a.motion.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .6,
                        delay: .38
                    },
                    className: "flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-10 sm:mb-12",
                    children: [(0,
                    t.jsxs)("button", {
                        onClick: () => document.getElementById("projects")?.scrollIntoView({
                            behavior: "smooth"
                        }),
                        className: "group inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm sm:text-base transition-all duration-200 shadow-[0_0_30px_rgba(59,130,246,0.35)] hover:shadow-[0_0_50px_rgba(59,130,246,0.55)] hover:-translate-y-0.5 w-full sm:w-auto justify-center",
                        children: ["View Our Work", (0,
                        t.jsx)(i.ArrowRight, {
                            size: 16,
                            className: "group-hover:translate-x-1 transition-transform"
                        })]
                    }), (0,
                    t.jsx)("button", {
                        onClick: () => document.getElementById("contact")?.scrollIntoView({
                            behavior: "smooth"
                        }),
                        className: "inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl border border-white/20 text-slate-300 hover:text-white hover:border-white/30 hover:bg-white/5 font-semibold text-sm sm:text-base transition-all duration-200 w-full sm:w-auto justify-center",
                        children: "Get In Touch"
                    })]
                }), (0,
                t.jsx)(a.motion.div, {
                    initial: {
                        opacity: 0,
                        y: 16
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        delay: 1,
                        duration: .6
                    },
                    className: "grid grid-cols-3 rounded-2xl border border-white/[0.07] bg-white/[0.03] backdrop-blur-sm divide-x divide-white/[0.07] overflow-hidden w-full max-w-xs sm:max-w-sm mx-auto",
                    children: s.map(e => (0,
                    t.jsxs)("div", {
                        className: "px-2 sm:px-6 py-3 sm:py-4 text-center",
                        children: [(0,
                        t.jsx)("p", {
                            className: "text-lg sm:text-2xl font-extrabold bg-gradient-to-b from-blue-300 to-cyan-400 bg-clip-text text-transparent leading-tight",
                            children: e.value
                        }), (0,
                        t.jsx)("p", {
                            className: "text-slate-500 text-[9px] sm:text-xs mt-0.5 leading-tight",
                            children: e.label
                        })]
                    }, e.label))
                })]
            }), (0,
            t.jsxs)(a.motion.div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    delay: 1.5,
                    duration: .6
                },
                className: "absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600",
                children: [(0,
                t.jsx)("span", {
                    className: "text-xs tracking-widest uppercase",
                    children: "Scroll"
                }), (0,
                t.jsx)(o, {
                    size: 16,
                    className: "animate-bounce"
                })]
            })]
        })
    }
    ], 77258)
}
, 87652, e => {
    "use strict";
    var t = e.i(71645)
      , r = e.i(49652);
    let a = {
        some: 0,
        all: 1
    };
    e.s(["useInView", 0, function(e, {root: i, margin: o, amount: s, once: l=!1, initial: n=!1}={}) {
        let[d,c] = (0,
        t.useState)(n);
        return (0,
        t.useEffect)( () => {
            if (!e.current || l && d)
                return;
            let t = {
                root: i && i.current || void 0,
                margin: o,
                amount: s
            };
            return function(e, t, {root: i, margin: o, amount: s="some"}={}) {
                let l = (0,
                r.resolveElements)(e)
                  , n = new WeakMap
                  , d = new IntersectionObserver(e => {
                    e.forEach(e => {
                        let r = n.get(e.target);
                        if (!!r !== e.isIntersecting)
                            if (e.isIntersecting) {
                                let r = t(e.target, e);
                                "function" == typeof r ? n.set(e.target, r) : d.unobserve(e.target)
                            } else
                                "function" == typeof r && (r(e),
                                n.delete(e.target))
                    }
                    )
                }
                ,{
                    root: i,
                    rootMargin: o,
                    threshold: "number" == typeof s ? s : a[s]
                });
                return l.forEach(e => d.observe(e)),
                () => d.disconnect()
            }(e.current, () => (c(!0),
            l ? void 0 : () => c(!1)), t)
        }
        , [i, e, o, l, s]),
        d
    }
    ], 87652)
}
, 95116, e => {
    "use strict";
    var t = e.i(43476)
      , r = e.i(71645)
      , a = e.i(46932)
      , i = e.i(87652)
      , o = e.i(56420);
    let s = (0,
    o.default)("code-xml", [["path", {
        d: "m18 16 4-4-4-4",
        key: "1inbqp"
    }], ["path", {
        d: "m6 8-4 4 4 4",
        key: "15zrgr"
    }], ["path", {
        d: "m14.5 4-5 16",
        key: "e7oirm"
    }]])
      , l = (0,
    o.default)("layers", [["path", {
        d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
        key: "zw3jo"
    }], ["path", {
        d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
        key: "1wduqc"
    }], ["path", {
        d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
        key: "kqbvx6"
    }]])
      , n = (0,
    o.default)("zap", [["path", {
        d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
        key: "1xq2db"
    }]])
      , d = (0,
    o.default)("users", [["path", {
        d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
        key: "1yyitq"
    }], ["path", {
        d: "M16 3.128a4 4 0 0 1 0 7.744",
        key: "16gr8j"
    }], ["path", {
        d: "M22 21v-2a4 4 0 0 0-3-3.87",
        key: "kshegd"
    }], ["circle", {
        cx: "9",
        cy: "7",
        r: "4",
        key: "nufk8"
    }]])
      , c = [{
        value: "20+",
        label: "Projects Delivered"
    }, {
        value: "100%",
        label: "Client Satisfaction"
    }, {
        value: "2+",
        label: "Years of Excellence"
    }, {
        value: "15+",
        label: "Technologies Used"
    }]
      , m = [{
        icon: s,
        title: "Web Development",
        desc: "Full-stack engineering with React, Next.js, Node.js and modern toolchains."
    }, {
        icon: l,
        title: "UI / UX Design",
        desc: "Research-driven design that converts — beautiful, intuitive interfaces."
    }, {
        icon: n,
        title: "Performance First",
        desc: "Every product we ship is optimised for Core Web Vitals and SEO."
    }, {
        icon: d,
        title: "Scalable Solutions",
        desc: "Architecture that grows with your business from MVP to enterprise."
    }]
      , u = ["HTML", "CSS", "Vanilla JS", "Next.js", "React", "TypeScript", "Node.js", "TailwindCSS", "Prisma", "PostgreSQL", "Figma", "Framer Motion", "Stripe", "AWS", "Vercel"]
      , p = {
        hidden: {
            opacity: 0,
            y: 40
        },
        visible: e => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: .6,
                delay: .1 * e,
                ease: [.25, .1, .25, 1]
            }
        })
    };
    e.s(["default", 0, function() {
        let e = (0,
        r.useRef)(null)
          , o = (0,
        i.useInView)(e, {
            once: !0,
            margin: "-100px"
        });
        return (0,
        t.jsxs)("section", {
            id: "about",
            className: "relative isolate py-16 sm:py-24 lg:py-32 px-4 sm:px-6",
            children: [(0,
            t.jsx)("div", {
                className: "absolute inset-0 -z-10",
                children: (0,
                t.jsx)("div", {
                    className: "absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
                })
            }), (0,
            t.jsxs)("div", {
                ref: e,
                className: "max-w-7xl mx-auto",
                children: [(0,
                t.jsxs)(a.motion.div, {
                    initial: "hidden",
                    animate: o ? "visible" : "hidden",
                    variants: p,
                    className: "mb-16 flex flex-col items-center",
                    children: [(0,
                    t.jsx)("p", {
                        className: "text-sm font-semibold tracking-widest uppercase text-blue-400 mb-3 text-center",
                        children: "About Us"
                    }), (0,
                    t.jsxs)("div", {
                        className: "flex flex-col items-center text-center gap-8 mb-4",
                        children: [(0,
                        t.jsxs)("h2", {
                            className: "text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight max-w-4xl",
                            children: ["We Turn Ideas Into", " ", (0,
                            t.jsx)("span", {
                                className: "bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent",
                                children: "Impactful Products"
                            })]
                        }), (0,
                        t.jsx)("p", {
                            className: "text-slate-400 max-w-3xl text-base leading-relaxed font-medium",
                            children: "At Nexora, our mission transcends standard development; we architect digital experiences that command attention. We are driven by a profound passion for high-end, sophisticated design and anchored by an uncompromising commitment to technical excellence. Every interface we craft and every system we build is meticulously engineered to elevate your brand, merging visionary aesthetics with scalable, enterprise-grade performance."
                        })]
                    })]
                }), (0,
                t.jsx)("div", {
                    className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20",
                    children: c.map( (e, r) => (0,
                    t.jsxs)(a.motion.div, {
                        initial: "hidden",
                        animate: o ? "visible" : "hidden",
                        custom: r + 1,
                        variants: p,
                        className: "rounded-2xl border border-white/[0.07] bg-white/[0.03] p-6 text-center backdrop-blur-sm hover:border-blue-500/30 hover:bg-blue-500/[0.05] transition-all duration-300",
                        children: [(0,
                        t.jsx)("p", {
                            className: "text-4xl font-extrabold bg-gradient-to-b from-blue-300 to-cyan-400 bg-clip-text text-transparent",
                            children: e.value
                        }), (0,
                        t.jsx)("p", {
                            className: "text-slate-500 text-sm mt-1",
                            children: e.label
                        })]
                    }, e.label))
                }), (0,
                t.jsx)("div", {
                    className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20",
                    children: m.map( (e, r) => (0,
                    t.jsxs)(a.motion.div, {
                        initial: "hidden",
                        animate: o ? "visible" : "hidden",
                        custom: r + 2,
                        variants: p,
                        className: "group rounded-2xl border border-white/[0.07] bg-white/[0.03] p-6 hover:border-blue-500/40 hover:bg-blue-500/[0.06] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(59,130,246,0.1)]",
                        children: [(0,
                        t.jsx)("div", {
                            className: "w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors",
                            children: (0,
                            t.jsx)(e.icon, {
                                size: 20,
                                className: "text-blue-400"
                            })
                        }), (0,
                        t.jsx)("h3", {
                            className: "text-white font-semibold mb-2",
                            children: e.title
                        }), (0,
                        t.jsx)("p", {
                            className: "text-slate-500 text-sm leading-relaxed",
                            children: e.desc
                        })]
                    }, e.title))
                }), (0,
                t.jsxs)(a.motion.div, {
                    initial: {
                        opacity: 0
                    },
                    animate: o ? {
                        opacity: 1
                    } : {},
                    transition: {
                        duration: .8,
                        delay: .6
                    },
                    children: [(0,
                    t.jsx)("p", {
                        className: "text-xs font-semibold tracking-widest uppercase text-slate-600 text-center mb-6",
                        children: "Our Tech Stack"
                    }), (0,
                    t.jsx)("div", {
                        className: "relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
                        children: (0,
                        t.jsx)("div", {
                            className: "flex gap-3 animate-marquee w-max",
                            children: [...u, ...u].map( (e, r) => (0,
                            t.jsx)("span", {
                                className: "flex-shrink-0 px-4 py-2 rounded-lg border border-white/[0.07] bg-white/[0.03] text-slate-500 text-sm whitespace-nowrap",
                                children: e
                            }, r))
                        })
                    })]
                })]
            })]
        })
    }
    ], 95116)
}
, 68264, e => {
    "use strict";
    var t = e.i(43476)
      , r = e.i(71645)
      , a = e.i(46932)
      , i = e.i(10542)
      , o = e.i(95420)
      , s = e.i(88653);
    let l = (0,
    e.i(56420).default)("arrow-up-right", [["path", {
        d: "M7 7h10v10",
        key: "1tivn9"
    }], ["path", {
        d: "M7 17 17 7",
        key: "1vkiza"
    }]]);
    var n = e.i(57688);
    let d = ["All", "Development", "Designing"]
      , c = [{
        id: 1,
        title: "Gsc Gradient",
        category: "Development",
        description: "A comprehensive educational platform connecting scholars globally with real-time features, interactive modules, and deep analytics built for massive scale.",
        tags: ["Next.js", "TypeScript", "Prisma", "TailwindCSS"],
        image: "/GSC-gradient.png",
        color: "from-blue-500/20 to-indigo-500/20",
        border: "border-blue-500/20",
        link: "https://gradient-cont.com/"
    }, {
        id: 2,
        title: "Idiom Similies App",
        category: "Development",
        description: "An intuitive and beautifully designed web application helping students learn English idioms and similes through gamified, interactive lessons.",
        tags: ["React", "Node.js", "MongoDB", "Express"],
        image: "/idiom_similies.png.png",
        color: "from-cyan-500/20 to-teal-500/20",
        border: "border-cyan-500/20",
        link: "https://idiomsimile.com/"
    }, {
        id: 3,
        title: "Burqora E-Commerce",
        category: "Development",
        description: "An elegant and highly performant e-commerce storefront tailored for high-end fashion, featuring headless architecture and a seamless checkout flow.",
        tags: ["Next.js", "Shopify", "Framer Motion", "Stripe"],
        image: "/Burqora.png",
        color: "from-violet-500/20 to-purple-500/20",
        border: "border-violet-500/20",
        link: "https://burqora.io/"
    }, {
        id: 4,
        title: "Tes Pire Dashboard",
        category: "Development",
        description: "A modern SaaS analytics dashboard for monitoring enterprise testing environments efficiently, featuring real-time data visualization.",
        tags: ["Vue.js", "Firebase", "Chart.js", "TailwindCSS"],
        image: "/Tes Pire.png",
        color: "from-rose-500/20 to-pink-500/20",
        border: "border-rose-500/20",
        link: "https://tes-pire.com/"
    }, {
        id: 5,
        title: "Venture Web Design",
        category: "Designing",
        description: "Get a professional website for $125 and a FREE LOGO. We deliver high-end, responsive designs that convert visitors into loyal customers.",
        tags: ["Web Design", "UI/UX", "Branding", "Logo Design"],
        image: "/venture-design.png",
        color: "from-purple-600/20 to-pink-600/20",
        border: "border-purple-500/20",
        link: "#"
    }, {
        id: 6,
        title: "YNC Recruitment Flyer",
        category: "Designing",
        description: "A high-impact recruitment flyer designed for YNC to attract top-tier WordPress Developers. Bold, modern, and optimized for social media engagement.",
        tags: ["Graphic Design", "Branding", "Social Media", "Typography"],
        image: "/hiring-design.png",
        color: "from-blue-600/20 to-yellow-600/20",
        border: "border-blue-500/20",
        link: "#"
    }];
    function m({project: e, i: r, progress: i, range: s, targetScale: d, onViewDesign: c}) {
        let u = (0,
        o.useTransform)(i, s, [1, d]);
        (0,
        o.useTransform)(i, s, [1, .7]);
        let p = "Designing" === e.category;
        return (0,
        t.jsx)("div", {
            className: "w-full relative z-10 flex items-center justify-center pt-8 sm:pt-32",
            children: (0,
            t.jsx)(a.motion.div, {
                style: {
                    scale: u,
                    top: `calc(5vh + ${20 * r}px)`,
                    backgroundColor: "#03030a",
                    opacity: 1
                },
                className: "relative w-full max-w-5xl rounded-[2.5rem] overflow-hidden border border-white/10 p-6 sm:p-10 shadow-[0_40px_80px_rgba(0,0,0,0.9)]",
                children: (0,
                t.jsxs)("div", {
                    className: "grid md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10",
                    children: [(0,
                    t.jsxs)("div", {
                        className: "flex flex-col gap-3 sm:gap-6 order-2 md:order-1",
                        children: [(0,
                        t.jsxs)("div", {
                            className: "inline-flex w-fit items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-[10px] font-bold tracking-[0.2em] uppercase text-blue-400",
                            children: [(0,
                            t.jsx)("span", {
                                className: "w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"
                            }), e.category]
                        }), (0,
                        t.jsx)("h3", {
                            className: "text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1]",
                            children: e.title
                        }), (0,
                        t.jsx)("p", {
                            className: "text-slate-400 text-base leading-relaxed max-w-md font-medium",
                            children: e.description
                        }), (0,
                        t.jsx)("div", {
                            className: "hidden sm:flex flex-wrap gap-2 mt-2",
                            children: e.tags.map(e => (0,
                            t.jsx)("span", {
                                className: "px-3 py-1.5 rounded-xl text-xs font-semibold border border-white/5 bg-white/[0.03] text-slate-400",
                                children: e
                            }, e))
                        }), p ? (0,
                        t.jsxs)("button", {
                            onClick: () => c(e.image),
                            className: "mt-2 sm:mt-6 relative z-50 w-fit inline-flex items-center gap-3 px-6 py-3 sm:px-8 sm:py-4 rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-xl text-white font-bold text-sm transition-all duration-500 hover:-translate-y-1.5 hover:bg-white/[0.08] hover:border-white/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] group overflow-hidden",
                            children: [(0,
                            t.jsx)("div", {
                                className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-out"
                            }), (0,
                            t.jsxs)("span", {
                                className: "relative z-10 flex items-center gap-2",
                                children: ["View Full Design", (0,
                                t.jsx)(l, {
                                    size: 20,
                                    className: "group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                                })]
                            })]
                        }) : (0,
                        t.jsxs)("a", {
                            href: e.link,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "mt-2 sm:mt-6 relative z-50 w-fit inline-flex items-center gap-3 px-6 py-3 sm:px-8 sm:py-4 rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-xl text-white font-bold text-sm transition-all duration-500 hover:-translate-y-1.5 hover:bg-white/[0.08] hover:border-white/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] group overflow-hidden",
                            children: [(0,
                            t.jsx)("div", {
                                className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-out"
                            }), (0,
                            t.jsxs)("span", {
                                className: "relative z-10 flex items-center gap-2",
                                children: ["Launch Project", (0,
                                t.jsx)(l, {
                                    size: 20,
                                    className: "group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                                })]
                            })]
                        })]
                    }), (0,
                    t.jsxs)("div", {
                        onClick: () => p && c(e.image),
                        className: `order-1 md:order-2 h-[240px] sm:h-[380px] md:h-[480px] w-full rounded-[2rem] overflow-hidden relative border border-white/10 bg-black/40 group shadow-2xl ${p ? "cursor-zoom-in" : ""}`,
                        children: [(0,
                        t.jsx)("div", {
                            className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                        }), (0,
                        t.jsx)(n.default, {
                            src: e.image,
                            alt: e.title,
                            fill: !0,
                            className: "object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-110",
                            priority: 0 === r
                        })]
                    })]
                })
            })
        })
    }
    e.s(["default", 0, function() {
        let[e,o] = (0,
        r.useState)("All")
          , [l,u] = (0,
        r.useState)(null)
          , p = (0,
        r.useRef)(null)
          , h = (0,
        r.useRef)(null)
          , x = c.filter(t => "All" === e || t.category === e)
          , {scrollYProgress: b} = (0,
        i.useScroll)({
            target: h,
            offset: ["start start", "end end"]
        });
        return (0,
        t.jsxs)("section", {
            id: "projects",
            ref: p,
            className: "relative py-12 sm:py-32 px-4 sm:px-6 bg-[#03030a] min-h-screen z-10",
            children: [(0,
            t.jsxs)("div", {
                className: "max-w-7xl mx-auto relative",
                children: [(0,
                t.jsxs)("div", {
                    className: "max-w-3xl mb-16 sm:mb-24 text-center mx-auto",
                    children: [(0,
                    t.jsx)("p", {
                        className: "text-xs font-bold tracking-[0.3em] uppercase text-blue-500 mb-4",
                        children: "Featured Projects"
                    }), (0,
                    t.jsxs)("h2", {
                        className: "text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight",
                        children: ["Selected ", (0,
                        t.jsx)("span", {
                            className: "text-slate-500 italic font-light",
                            children: "Works"
                        })]
                    }), (0,
                    t.jsx)("p", {
                        className: "text-slate-400 text-base max-w-3xl mx-auto font-medium leading-relaxed",
                        children: "Explore a curated showcase of our most defining digital products. Every project in this collection represents our unwavering commitment to pixel-perfect design and sophisticated engineering."
                    })]
                }), (0,
                t.jsx)("div", {
                    className: "sticky top-20 z-[110] flex justify-center w-full mb-6 sm:mb-20 px-4",
                    children: (0,
                    t.jsx)("div", {
                        className: "p-1.5 rounded-2xl bg-[#0a0a1a]/90 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.4)] flex items-center gap-1",
                        children: d.map(r => (0,
                        t.jsxs)("button", {
                            onClick: () => o(r),
                            className: `relative px-6 sm:px-8 py-3 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all duration-500 ${e === r ? "text-white" : "text-slate-500 hover:text-slate-300"}`,
                            children: [e === r && (0,
                            t.jsx)(a.motion.div, {
                                layoutId: "activeTab",
                                className: "absolute inset-0 bg-blue-600/10 border border-blue-500/20 rounded-xl",
                                transition: {
                                    type: "spring",
                                    bounce: .15,
                                    duration: .6
                                }
                            }), (0,
                            t.jsx)("span", {
                                className: "relative z-10",
                                children: r
                            })]
                        }, r))
                    })
                }), (0,
                t.jsx)("div", {
                    ref: h,
                    className: "relative flex flex-col items-center",
                    children: (0,
                    t.jsx)(s.AnimatePresence, {
                        mode: "popLayout",
                        children: x.length > 0 ? x.map( (r, i) => {
                            let o = 1 - (x.length - i) * .05;
                            return (0,
                            t.jsx)(a.motion.div, {
                                initial: {
                                    opacity: 1,
                                    y: 50
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                exit: {
                                    opacity: 0,
                                    transition: {
                                        duration: .2
                                    }
                                },
                                className: "sticky top-0 min-h-screen flex items-start justify-center w-full",
                                style: {
                                    zIndex: i + 10
                                },
                                children: (0,
                                t.jsx)(m, {
                                    i: i,
                                    project: r,
                                    progress: b,
                                    range: [i * (1 / x.length), 1],
                                    targetScale: o,
                                    onViewDesign: u
                                })
                            }, `${e}-${r.id}`)
                        }
                        ) : (0,
                        t.jsx)(a.motion.div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            className: "w-full py-32 flex flex-col items-center justify-center border border-white/10 rounded-[2.5rem] bg-[#05050f]",
                            children: (0,
                            t.jsx)("p", {
                                className: "text-slate-500 text-lg font-medium",
                                children: "No projects available in this category yet."
                            })
                        })
                    })
                })]
            }), (0,
            t.jsx)(s.AnimatePresence, {
                children: l && (0,
                t.jsx)(a.motion.div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    onClick: () => u(null),
                    className: "fixed inset-0 z-[200] flex items-center justify-center bg-black p-4 sm:p-10 cursor-zoom-out",
                    children: (0,
                    t.jsxs)(a.motion.div, {
                        initial: {
                            scale: .9,
                            opacity: 0
                        },
                        animate: {
                            scale: 1,
                            opacity: 1
                        },
                        exit: {
                            scale: .9,
                            opacity: 0
                        },
                        className: "relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-black",
                        onClick: e => e.stopPropagation(),
                        children: [(0,
                        t.jsx)(n.default, {
                            src: l,
                            alt: "Full Design Preview",
                            fill: !0,
                            className: "object-contain"
                        }), (0,
                        t.jsx)("button", {
                            onClick: () => u(null),
                            className: "absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors",
                            children: "✕"
                        })]
                    })
                })
            })]
        })
    }
    ], 68264)
}
, 99738, 49803, e => {
    "use strict";
    var t = e.i(56420);
    let r = (0,
    t.default)("shopping-cart", [["circle", {
        cx: "8",
        cy: "21",
        r: "1",
        key: "jimo8o"
    }], ["circle", {
        cx: "19",
        cy: "21",
        r: "1",
        key: "13723u"
    }], ["path", {
        d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
        key: "9zh506"
    }]]);
    e.s(["ShoppingCart", 0, r], 99738);
    let a = (0,
    t.default)("chart-column", [["path", {
        d: "M3 3v16a2 2 0 0 0 2 2h16",
        key: "c24i48"
    }], ["path", {
        d: "M18 17V9",
        key: "2bz60n"
    }], ["path", {
        d: "M13 17V5",
        key: "1frdt8"
    }], ["path", {
        d: "M8 17v-3",
        key: "17ska0"
    }]]);
    e.s(["BarChart3", 0, a], 49803)
}
, 83650, e => {
    "use strict";
    var t = e.i(43476)
      , r = e.i(71645)
      , a = e.i(46932)
      , i = e.i(87652)
      , o = e.i(56420);
    let s = (0,
    o.default)("globe", [["circle", {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
    }], ["path", {
        d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
        key: "13o1zl"
    }], ["path", {
        d: "M2 12h20",
        key: "9i4pu4"
    }]])
      , l = (0,
    o.default)("palette", [["path", {
        d: "M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",
        key: "e79jfc"
    }], ["circle", {
        cx: "13.5",
        cy: "6.5",
        r: ".5",
        fill: "currentColor",
        key: "1okk4w"
    }], ["circle", {
        cx: "17.5",
        cy: "10.5",
        r: ".5",
        fill: "currentColor",
        key: "f64h9f"
    }], ["circle", {
        cx: "6.5",
        cy: "12.5",
        r: ".5",
        fill: "currentColor",
        key: "qy21gx"
    }], ["circle", {
        cx: "8.5",
        cy: "7.5",
        r: ".5",
        fill: "currentColor",
        key: "fotxhn"
    }]]);
    var n = e.i(99738)
      , d = e.i(49803);
    let c = (0,
    o.default)("smartphone", [["rect", {
        width: "14",
        height: "20",
        x: "5",
        y: "2",
        rx: "2",
        ry: "2",
        key: "1yt0o3"
    }], ["path", {
        d: "M12 18h.01",
        key: "mhygvu"
    }]])
      , m = (0,
    o.default)("shield", [["path", {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y"
    }]])
      , u = [{
        icon: s,
        title: "Web Development",
        desc: "Custom, performant web applications built with Next.js, React, and modern backend technologies.",
        glow: "rgba(59,130,246,0.15)",
        border: "rgba(59,130,246,0.3)"
    }, {
        icon: l,
        title: "UI / UX Design",
        desc: "Pixel-perfect interfaces designed in Figma — from wireframes to fully interactive prototypes.",
        glow: "rgba(6,182,212,0.12)",
        border: "rgba(6,182,212,0.3)"
    }, {
        icon: n.ShoppingCart,
        title: "E-commerce",
        desc: "High-converting online stores with headless CMS, Stripe integration, and seamless checkout.",
        glow: "rgba(139,92,246,0.12)",
        border: "rgba(139,92,246,0.3)"
    }, {
        icon: d.BarChart3,
        title: "SaaS Products",
        desc: "Multi-tenant SaaS platforms with auth, billing, dashboards, and scalable cloud infrastructure.",
        glow: "rgba(59,130,246,0.12)",
        border: "rgba(59,130,246,0.3)"
    }, {
        icon: c,
        title: "Responsive Design",
        desc: "Mobile-first, fully responsive layouts that look and perform beautifully on every device.",
        glow: "rgba(6,182,212,0.12)",
        border: "rgba(6,182,212,0.3)"
    }, {
        icon: m,
        title: "Maintenance & Support",
        desc: "Ongoing support, performance monitoring, security audits, and rapid deployment pipelines.",
        glow: "rgba(34,197,94,0.1)",
        border: "rgba(34,197,94,0.25)"
    }];
    e.s(["default", 0, function() {
        let e = (0,
        r.useRef)(null)
          , o = (0,
        i.useInView)(e, {
            once: !0,
            margin: "-100px"
        });
        return (0,
        t.jsxs)("section", {
            id: "services",
            className: "relative isolate py-16 sm:py-24 lg:py-32 px-4 sm:px-6",
            children: [(0,
            t.jsxs)("div", {
                className: "absolute inset-0 -z-10",
                children: [(0,
                t.jsx)("div", {
                    className: "absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
                }), (0,
                t.jsx)("div", {
                    className: "absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/[0.06] to-transparent"
                })]
            }), (0,
            t.jsxs)("div", {
                ref: e,
                className: "max-w-7xl mx-auto",
                children: [(0,
                t.jsxs)(a.motion.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    animate: o ? {
                        opacity: 1,
                        y: 0
                    } : {},
                    transition: {
                        duration: .6
                    },
                    className: "text-center mb-16",
                    children: [(0,
                    t.jsx)("p", {
                        className: "text-sm font-semibold tracking-widest uppercase text-blue-400 mb-3",
                        children: "What We Do"
                    }), (0,
                    t.jsx)("h2", {
                        className: "text-4xl sm:text-5xl font-bold text-white mb-4",
                        children: "Our Services"
                    }), (0,
                    t.jsx)("p", {
                        className: "text-slate-400 max-w-3xl mx-auto text-base leading-relaxed font-medium",
                        children: "We deliver end-to-end digital solutions tailored for ambitious startups, forward-thinking scale-ups, and industry-leading enterprises. By seamlessly bridging the gap between innovative, user-centric design and robust, scalable development, we transform complex business challenges into elegant, high-performing digital realities."
                    })]
                }), (0,
                t.jsx)("div", {
                    className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5",
                    children: u.map( (e, r) => (0,
                    t.jsxs)(a.motion.div, {
                        initial: {
                            opacity: 0,
                            y: 40
                        },
                        animate: o ? {
                            opacity: 1,
                            y: 0
                        } : {},
                        transition: {
                            duration: .5,
                            delay: .08 * r
                        },
                        className: "group relative rounded-2xl border bg-white/[0.03] p-5 sm:p-7 overflow-hidden cursor-default transition-all duration-300 hover:-translate-y-1.5",
                        style: {
                            borderColor: "rgba(255,255,255,0.07)"
                        },
                        onMouseEnter: t => {
                            t.currentTarget.style.borderColor = e.border,
                            t.currentTarget.style.boxShadow = `0 0 40px ${e.glow}`
                        }
                        ,
                        onMouseLeave: e => {
                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)",
                            e.currentTarget.style.boxShadow = "none"
                        }
                        ,
                        children: [(0,
                        t.jsx)("div", {
                            className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                            style: {
                                background: `radial-gradient(circle at 50% 0%, ${e.glow} 0%, transparent 60%)`
                            }
                        }), (0,
                        t.jsxs)("div", {
                            className: "relative z-10",
                            children: [(0,
                            t.jsx)("div", {
                                className: "w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300",
                                style: {
                                    background: e.glow,
                                    border: `1px solid ${e.border}`
                                },
                                children: (0,
                                t.jsx)(e.icon, {
                                    size: 22,
                                    className: "text-white/80"
                                })
                            }), (0,
                            t.jsx)("h3", {
                                className: "text-white font-semibold text-lg mb-2",
                                children: e.title
                            }), (0,
                            t.jsx)("p", {
                                className: "text-slate-400 text-sm leading-relaxed",
                                children: e.desc
                            })]
                        })]
                    }, e.title))
                })]
            })]
        })
    }
    ], 83650)
}
, 94371, e => {
    "use strict";
    let t = (0,
    e.i(56420).default)("rocket", [["path", {
        d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",
        key: "qeys4"
    }], ["path", {
        d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09",
        key: "u4xsad"
    }], ["path", {
        d: "M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z",
        key: "676m9"
    }], ["path", {
        d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05",
        key: "92ym6u"
    }]]);
    e.s(["Rocket", 0, t], 94371)
}
, 648, e => {
    "use strict";
    var t = e.i(43476)
      , r = e.i(71645)
      , a = e.i(46932)
      , i = e.i(87652)
      , o = e.i(56420);
    let s = (0,
    o.default)("search", [["path", {
        d: "m21 21-4.34-4.34",
        key: "14j7rj"
    }], ["circle", {
        cx: "11",
        cy: "11",
        r: "8",
        key: "4ej97u"
    }]])
      , l = (0,
    o.default)("map", [["path", {
        d: "M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",
        key: "169xi5"
    }], ["path", {
        d: "M15 5.764v15",
        key: "1pn4in"
    }], ["path", {
        d: "M9 3.236v15",
        key: "1uimfh"
    }]])
      , n = (0,
    o.default)("pencil", [["path", {
        d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
        key: "1a8usu"
    }], ["path", {
        d: "m15 5 4 4",
        key: "1mk7zo"
    }]])
      , d = (0,
    o.default)("code", [["path", {
        d: "m16 18 6-6-6-6",
        key: "eg8j8"
    }], ["path", {
        d: "m8 6-6 6 6 6",
        key: "ppft3o"
    }]]);
    var c = e.i(94371);
    let m = (0,
    o.default)("headphones", [["path", {
        d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",
        key: "1xhozi"
    }]])
      , u = [{
        number: "01",
        icon: s,
        title: "Discovery & Research",
        desc: "We deep-dive into your business goals, audience, and competitive landscape to form a solid strategic foundation."
    }, {
        number: "02",
        icon: l,
        title: "Planning & Architecture",
        desc: "We define the tech stack, sitemap, and project roadmap — ensuring alignment before a single line of code is written."
    }, {
        number: "03",
        icon: n,
        title: "Design & Prototype",
        desc: "High-fidelity Figma designs and interactive prototypes, refined through feedback cycles until perfect."
    }, {
        number: "04",
        icon: d,
        title: "Development",
        desc: "Agile sprints deliver clean, tested, production-grade code with continuous client transparency."
    }, {
        number: "05",
        icon: c.Rocket,
        title: "Launch",
        desc: "Rigorous QA, staging previews, and zero-downtime deployment to get your product live with confidence."
    }, {
        number: "06",
        icon: m,
        title: "Support & Grow",
        desc: "Post-launch monitoring, performance optimisation, and iterative improvements as your business scales."
    }];
    e.s(["default", 0, function() {
        let e = (0,
        r.useRef)(null)
          , o = (0,
        i.useInView)(e, {
            once: !0,
            margin: "-100px"
        });
        return (0,
        t.jsxs)("section", {
            id: "process",
            className: "relative isolate py-16 sm:py-24 lg:py-32 px-4 sm:px-6",
            children: [(0,
            t.jsx)("div", {
                className: "absolute inset-0 -z-10",
                children: (0,
                t.jsx)("div", {
                    className: "absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
                })
            }), (0,
            t.jsxs)("div", {
                ref: e,
                className: "max-w-7xl mx-auto",
                children: [(0,
                t.jsxs)(a.motion.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    animate: o ? {
                        opacity: 1,
                        y: 0
                    } : {},
                    transition: {
                        duration: .6
                    },
                    className: "text-center mb-16",
                    children: [(0,
                    t.jsx)("p", {
                        className: "text-sm font-semibold tracking-widest uppercase text-blue-400 mb-3",
                        children: "How We Work"
                    }), (0,
                    t.jsx)("h2", {
                        className: "text-4xl sm:text-5xl font-bold text-white mb-4",
                        children: "Our Process"
                    }), (0,
                    t.jsx)("p", {
                        className: "text-slate-400 max-w-xl mx-auto text-base",
                        children: "A transparent, battle-tested workflow that delivers great outcomes — every time."
                    })]
                }), (0,
                t.jsx)("div", {
                    className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5",
                    children: u.map( (e, r) => (0,
                    t.jsxs)(a.motion.div, {
                        initial: {
                            opacity: 0,
                            y: 40
                        },
                        animate: o ? {
                            opacity: 1,
                            y: 0
                        } : {},
                        transition: {
                            duration: .5,
                            delay: .1 * r
                        },
                        className: "group relative rounded-2xl border border-white/[0.07] bg-white/[0.03] p-5 sm:p-7 hover:border-blue-500/30 hover:bg-blue-500/[0.05] transition-all duration-300 hover:-translate-y-1 overflow-hidden",
                        children: [(0,
                        t.jsx)("div", {
                            className: "absolute top-5 right-5 text-6xl font-black text-white/[0.03] select-none group-hover:text-blue-500/[0.06] transition-colors",
                            children: e.number
                        }), (0,
                        t.jsxs)("div", {
                            className: "relative z-10",
                            children: [(0,
                            t.jsxs)("div", {
                                className: "flex items-center gap-3 mb-4",
                                children: [(0,
                                t.jsx)("div", {
                                    className: "w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors",
                                    children: (0,
                                    t.jsx)(e.icon, {
                                        size: 18,
                                        className: "text-blue-400"
                                    })
                                }), (0,
                                t.jsxs)("span", {
                                    className: "text-xs font-bold tracking-widest text-slate-600 uppercase",
                                    children: ["Step ", e.number]
                                })]
                            }), (0,
                            t.jsx)("h3", {
                                className: "text-white font-semibold text-lg mb-2",
                                children: e.title
                            }), (0,
                            t.jsx)("p", {
                                className: "text-slate-400 text-sm leading-relaxed",
                                children: e.desc
                            })]
                        })]
                    }, e.number))
                })]
            })]
        })
    }
    ], 648)
}
, 66547, e => {
    "use strict";
    var t = e.i(43476)
      , r = e.i(71645)
      , a = e.i(46932)
      , i = e.i(87652)
      , o = e.i(99738)
      , s = e.i(56420);
    let l = (0,
    s.default)("heart", [["path", {
        d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
        key: "mvr1a0"
    }]]);
    var n = e.i(94371)
      , d = e.i(49803);
    let c = (0,
    s.default)("graduation-cap", [["path", {
        d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
        key: "j76jl0"
    }], ["path", {
        d: "M22 10v6",
        key: "1lu8f3"
    }], ["path", {
        d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5",
        key: "1r8lef"
    }]])
      , m = (0,
    s.default)("landmark", [["path", {
        d: "M10 18v-7",
        key: "wt116b"
    }], ["path", {
        d: "M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z",
        key: "1m329m"
    }], ["path", {
        d: "M14 18v-7",
        key: "vav6t3"
    }], ["path", {
        d: "M18 18v-7",
        key: "aexdmj"
    }], ["path", {
        d: "M3 22h18",
        key: "8prr45"
    }], ["path", {
        d: "M6 18v-7",
        key: "1ivflk"
    }]])
      , u = (0,
    s.default)("building-2", [["path", {
        d: "M10 12h4",
        key: "a56b0p"
    }], ["path", {
        d: "M10 8h4",
        key: "1sr2af"
    }], ["path", {
        d: "M14 21v-3a2 2 0 0 0-4 0v3",
        key: "1rgiei"
    }], ["path", {
        d: "M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",
        key: "secmi2"
    }], ["path", {
        d: "M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",
        key: "16ra0t"
    }]])
      , p = (0,
    s.default)("brush", [["path", {
        d: "m11 10 3 3",
        key: "fzmg1i"
    }], ["path", {
        d: "M6.5 21A3.5 3.5 0 1 0 3 17.5a2.62 2.62 0 0 1-.708 1.792A1 1 0 0 0 3 21z",
        key: "p4q2r7"
    }], ["path", {
        d: "M9.969 17.031 21.378 5.624a1 1 0 0 0-3.002-3.002L6.967 14.031",
        key: "wy6l02"
    }]])
      , h = [{
        icon: o.ShoppingCart,
        label: "E-commerce",
        desc: "Retail & DTC brands",
        glow: "rgba(59,130,246,0.12)",
        iconColor: "text-blue-400",
        iconBg: "bg-blue-500/10 border-blue-500/20"
    }, {
        icon: l,
        label: "Healthcare",
        desc: "MedTech & patient portals",
        glow: "rgba(236,72,153,0.1)",
        iconColor: "text-pink-400",
        iconBg: "bg-pink-500/10 border-pink-500/20"
    }, {
        icon: n.Rocket,
        label: "Startups",
        desc: "MVPs & growth products",
        glow: "rgba(251,146,60,0.1)",
        iconColor: "text-orange-400",
        iconBg: "bg-orange-500/10 border-orange-500/20"
    }, {
        icon: d.BarChart3,
        label: "SaaS",
        desc: "B2B & B2C platforms",
        glow: "rgba(139,92,246,0.12)",
        iconColor: "text-violet-400",
        iconBg: "bg-violet-500/10 border-violet-500/20"
    }, {
        icon: c,
        label: "Education",
        desc: "EdTech & LMS platforms",
        glow: "rgba(34,197,94,0.1)",
        iconColor: "text-emerald-400",
        iconBg: "bg-emerald-500/10 border-emerald-500/20"
    }, {
        icon: m,
        label: "Fintech",
        desc: "Finance & payment tools",
        glow: "rgba(6,182,212,0.12)",
        iconColor: "text-cyan-400",
        iconBg: "bg-cyan-500/10 border-cyan-500/20"
    }, {
        icon: u,
        label: "Real Estate",
        desc: "Property platforms",
        glow: "rgba(251,191,36,0.1)",
        iconColor: "text-amber-400",
        iconBg: "bg-amber-500/10 border-amber-500/20"
    }, {
        icon: p,
        label: "Creative",
        desc: "Agencies & studios",
        glow: "rgba(244,114,182,0.1)",
        iconColor: "text-fuchsia-400",
        iconBg: "bg-fuchsia-500/10 border-fuchsia-500/20"
    }];
    e.s(["default", 0, function() {
        let e = (0,
        r.useRef)(null)
          , o = (0,
        i.useInView)(e, {
            once: !0,
            margin: "-100px"
        });
        return (0,
        t.jsxs)("section", {
            id: "industries",
            className: "relative isolate py-16 sm:py-24 lg:py-32 px-4 sm:px-6",
            children: [(0,
            t.jsxs)("div", {
                className: "absolute inset-0 -z-10",
                children: [(0,
                t.jsx)("div", {
                    className: "absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
                }), (0,
                t.jsx)("div", {
                    className: "absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/[0.05] to-transparent"
                })]
            }), (0,
            t.jsxs)("div", {
                ref: e,
                className: "max-w-7xl mx-auto",
                children: [(0,
                t.jsxs)(a.motion.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    animate: o ? {
                        opacity: 1,
                        y: 0
                    } : {},
                    transition: {
                        duration: .6
                    },
                    className: "text-center mb-16",
                    children: [(0,
                    t.jsx)("p", {
                        className: "text-sm font-semibold tracking-widest uppercase text-blue-400 mb-3",
                        children: "Industries"
                    }), (0,
                    t.jsx)("h2", {
                        className: "text-4xl sm:text-5xl font-bold text-white mb-4",
                        children: "Industries We Serve"
                    }), (0,
                    t.jsx)("p", {
                        className: "text-slate-400 max-w-xl mx-auto text-base",
                        children: "We've built products across a wide range of industries — each with its own unique challenges and standards."
                    })]
                }), (0,
                t.jsx)("div", {
                    className: "grid grid-cols-2 sm:grid-cols-4 gap-4",
                    children: h.map( (e, r) => (0,
                    t.jsxs)(a.motion.div, {
                        initial: {
                            opacity: 0,
                            y: 24
                        },
                        animate: o ? {
                            opacity: 1,
                            y: 0
                        } : {},
                        transition: {
                            duration: .45,
                            delay: .06 * r
                        },
                        className: "group rounded-2xl border border-white/[0.07] bg-white/[0.03] p-4 sm:p-6 text-center hover:border-white/[0.15] transition-all duration-300 hover:-translate-y-1.5 cursor-default",
                        onMouseEnter: t => {
                            t.currentTarget.style.boxShadow = `0 8px 40px ${e.glow}`
                        }
                        ,
                        onMouseLeave: e => {
                            e.currentTarget.style.boxShadow = "none"
                        }
                        ,
                        children: [(0,
                        t.jsx)("div", {
                            className: `w-12 h-12 rounded-xl border flex items-center justify-center mb-4 mx-auto transition-transform duration-300 group-hover:scale-110 ${e.iconBg}`,
                            children: (0,
                            t.jsx)(e.icon, {
                                size: 22,
                                className: e.iconColor
                            })
                        }), (0,
                        t.jsx)("p", {
                            className: "text-white font-semibold text-sm mb-0.5",
                            children: e.label
                        }), (0,
                        t.jsx)("p", {
                            className: "text-slate-500 text-xs",
                            children: e.desc
                        })]
                    }, e.label))
                })]
            })]
        })
    }
    ], 66547)
}
, 37528, e => {
    "use strict";
    var t = e.i(43476)
      , r = e.i(71645)
      , a = e.i(46932)
      , i = e.i(87652);
    let o = (0,
    e.i(56420).default)("quote", [["path", {
        d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
        key: "rib7q0"
    }], ["path", {
        d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
        key: "1ymkrd"
    }]])
      , s = [{
        quote: "Nexora Studio transformed our entire digital presence. The attention to detail and speed of delivery was unlike anything we've experienced with an agency before.",
        name: "Sarah Mitchell",
        role: "CEO, Luminary SaaS",
        avatar: "SM",
        accent: "#3b82f6"
    }, {
        quote: "From the first call to launch day, the process was completely transparent and collaborative. Our conversion rate jumped 40% in the first month post-launch.",
        name: "James Thornton",
        role: "Founder, Shopfront",
        avatar: "JT",
        accent: "#06b6d4"
    }, {
        quote: "The team built our HIPAA-compliant portal faster than we thought possible, and the code quality is exceptional. Highly recommend for any complex project.",
        name: "Dr. Priya Nair",
        role: "CTO, MedTrack",
        avatar: "PN",
        accent: "#8b5cf6"
    }]
      , l = () => (0,
    t.jsx)("div", {
        className: "flex gap-1 mb-4",
        children: Array.from({
            length: 5
        }).map( (e, r) => (0,
        t.jsx)("svg", {
            width: "14",
            height: "14",
            viewBox: "0 0 24 24",
            fill: "#f59e0b",
            children: (0,
            t.jsx)("path", {
                d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            })
        }, r))
    });
    e.s(["default", 0, function() {
        let e = (0,
        r.useRef)(null)
          , n = (0,
        i.useInView)(e, {
            once: !0,
            margin: "-100px"
        });
        return (0,
        t.jsxs)("section", {
            id: "testimonials",
            className: "relative isolate py-16 sm:py-24 lg:py-32 px-4 sm:px-6",
            children: [(0,
            t.jsxs)("div", {
                className: "absolute inset-0 -z-10",
                children: [(0,
                t.jsx)("div", {
                    className: "absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
                }), (0,
                t.jsx)("div", {
                    className: "absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/[0.06] to-transparent"
                })]
            }), (0,
            t.jsxs)("div", {
                ref: e,
                className: "max-w-7xl mx-auto",
                children: [(0,
                t.jsxs)(a.motion.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    animate: n ? {
                        opacity: 1,
                        y: 0
                    } : {},
                    transition: {
                        duration: .6
                    },
                    className: "text-center mb-16",
                    children: [(0,
                    t.jsx)("p", {
                        className: "text-sm font-semibold tracking-widest uppercase text-blue-400 mb-3",
                        children: "Client Stories"
                    }), (0,
                    t.jsx)("h2", {
                        className: "text-4xl sm:text-5xl font-bold text-white mb-4",
                        children: "What Our Clients Say"
                    }), (0,
                    t.jsx)("p", {
                        className: "text-slate-400 max-w-xl mx-auto text-base",
                        children: "We measure our success by the results we create for the businesses we work with."
                    })]
                }), (0,
                t.jsx)("div", {
                    className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5",
                    children: s.map( (e, r) => (0,
                    t.jsxs)(a.motion.div, {
                        initial: {
                            opacity: 0,
                            y: 40
                        },
                        animate: n ? {
                            opacity: 1,
                            y: 0
                        } : {},
                        transition: {
                            duration: .55,
                            delay: .1 * r
                        },
                        className: "group relative rounded-2xl border border-white/[0.07] bg-white/[0.03] p-5 sm:p-7 hover:border-white/[0.14] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col",
                        onMouseEnter: t => {
                            t.currentTarget.style.boxShadow = `0 8px 40px ${e.accent}20`
                        }
                        ,
                        onMouseLeave: e => {
                            e.currentTarget.style.boxShadow = "none"
                        }
                        ,
                        children: [(0,
                        t.jsx)("div", {
                            className: "absolute top-5 right-5 opacity-[0.04] group-hover:opacity-[0.07] transition-opacity",
                            children: (0,
                            t.jsx)(o, {
                                size: 64
                            })
                        }), (0,
                        t.jsxs)("div", {
                            className: "relative z-10 flex flex-col flex-1",
                            children: [(0,
                            t.jsx)(l, {}), (0,
                            t.jsxs)("p", {
                                className: "text-slate-300 text-sm leading-relaxed flex-1 mb-6",
                                children: ["“", e.quote, "”"]
                            }), (0,
                            t.jsxs)("div", {
                                className: "flex items-center gap-3 pt-5 border-t border-white/[0.06]",
                                children: [(0,
                                t.jsx)("div", {
                                    className: "w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0",
                                    style: {
                                        background: `${e.accent}30`,
                                        border: `1.5px solid ${e.accent}50`
                                    },
                                    children: e.avatar
                                }), (0,
                                t.jsxs)("div", {
                                    children: [(0,
                                    t.jsx)("p", {
                                        className: "text-white font-semibold text-sm",
                                        children: e.name
                                    }), (0,
                                    t.jsx)("p", {
                                        className: "text-slate-500 text-xs",
                                        children: e.role
                                    })]
                                })]
                            })]
                        })]
                    }, e.name))
                })]
            })]
        })
    }
    ], 37528)
}
, 30604, e => {
    "use strict";
    var t = e.i(43476)
      , r = e.i(71645)
      , a = e.i(46932)
      , i = e.i(87652)
      , o = e.i(68877);
    let s = (0,
    e.i(56420).default)("sparkles", [["path", {
        d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
        key: "1s2grr"
    }], ["path", {
        d: "M20 2v4",
        key: "1rf3ol"
    }], ["path", {
        d: "M22 4h-4",
        key: "gwowj6"
    }], ["circle", {
        cx: "4",
        cy: "20",
        r: "2",
        key: "6kqj1y"
    }]]);
    e.s(["default", 0, function() {
        let e = (0,
        r.useRef)(null)
          , l = (0,
        i.useInView)(e, {
            once: !0,
            margin: "-100px"
        });
        return (0,
        t.jsxs)("section", {
            className: "relative isolate py-12 sm:py-16 md:py-20 px-4 sm:px-6 overflow-hidden",
            children: [(0,
            t.jsx)("div", {
                className: "absolute inset-0 -z-10",
                children: (0,
                t.jsx)("div", {
                    className: "absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
                })
            }), (0,
            t.jsx)("div", {
                ref: e,
                className: "max-w-5xl mx-auto",
                children: (0,
                t.jsxs)(a.motion.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    animate: l ? {
                        opacity: 1,
                        y: 0
                    } : {},
                    transition: {
                        duration: .7
                    },
                    className: "relative rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-950/40 via-[#05050f] to-indigo-950/30 p-6 sm:p-10 lg:p-16 text-center overflow-hidden",
                    children: [(0,
                    t.jsx)("div", {
                        className: "absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-blue-600/10 rounded-full blur-[80px] pointer-events-none"
                    }), (0,
                    t.jsx)("div", {
                        className: "absolute -bottom-16 right-1/4 w-64 h-64 bg-cyan-500/[0.07] rounded-full blur-[60px] pointer-events-none"
                    }), (0,
                    t.jsx)("div", {
                        className: "absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] rounded-3xl"
                    }), (0,
                    t.jsxs)("div", {
                        className: "relative z-10",
                        children: [(0,
                        t.jsxs)(a.motion.div, {
                            initial: {
                                opacity: 0,
                                scale: .9
                            },
                            animate: l ? {
                                opacity: 1,
                                scale: 1
                            } : {},
                            transition: {
                                delay: .15,
                                duration: .5
                            },
                            className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-medium mb-6",
                            children: [(0,
                            t.jsx)(s, {
                                size: 13
                            }), "Ready to Start?"]
                        }), (0,
                        t.jsxs)(a.motion.h2, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: l ? {
                                opacity: 1,
                                y: 0
                            } : {},
                            transition: {
                                delay: .25,
                                duration: .6
                            },
                            className: "text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-5",
                            children: ["Let's Build Something", " ", (0,
                            t.jsx)("span", {
                                className: "bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent",
                                children: "Extraordinary"
                            })]
                        }), (0,
                        t.jsx)(a.motion.p, {
                            initial: {
                                opacity: 0,
                                y: 16
                            },
                            animate: l ? {
                                opacity: 1,
                                y: 0
                            } : {},
                            transition: {
                                delay: .35,
                                duration: .6
                            },
                            className: "text-slate-400 text-lg max-w-2xl mx-auto mb-10",
                            children: "Have a vision? We have the team and tools to make it real. Let's talk about your project and create something remarkable together."
                        }), (0,
                        t.jsxs)(a.motion.div, {
                            initial: {
                                opacity: 0,
                                y: 12
                            },
                            animate: l ? {
                                opacity: 1,
                                y: 0
                            } : {},
                            transition: {
                                delay: .45,
                                duration: .5
                            },
                            className: "flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center items-center",
                            children: [(0,
                            t.jsxs)("button", {
                                onClick: () => document.getElementById("contact")?.scrollIntoView({
                                    behavior: "smooth"
                                }),
                                className: "group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm sm:text-base transition-all duration-200 shadow-[0_0_40px_rgba(59,130,246,0.4)] hover:shadow-[0_0_60px_rgba(59,130,246,0.6)] hover:-translate-y-0.5 w-full sm:w-auto",
                                children: ["Start a Project", (0,
                                t.jsx)(o.ArrowRight, {
                                    size: 16,
                                    className: "group-hover:translate-x-1 transition-transform"
                                })]
                            }), (0,
                            t.jsx)("button", {
                                onClick: () => document.getElementById("projects")?.scrollIntoView({
                                    behavior: "smooth"
                                }),
                                className: "inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl border border-white/15 text-slate-300 hover:text-white hover:border-white/30 hover:bg-white/5 font-semibold text-sm sm:text-base transition-all duration-200 w-full sm:w-auto",
                                children: "View Our Work"
                            })]
                        })]
                    })]
                })
            })]
        })
    }
    ], 30604)
}
, 47710, e => {
    "use strict";
    var t = e.i(43476)
      , r = e.i(71645)
      , a = e.i(46932)
      , i = e.i(87652)
      , o = e.i(56420);
    let s = (0,
    o.default)("send", [["path", {
        d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
        key: "1ffxy3"
    }], ["path", {
        d: "m21.854 2.147-10.94 10.939",
        key: "12cjpa"
    }]])
      , l = [{
        icon: (0,
        o.default)("mail", [["path", {
            d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",
            key: "132q7q"
        }], ["rect", {
            x: "2",
            y: "4",
            width: "20",
            height: "16",
            rx: "2",
            key: "izxlao"
        }]]),
        label: "Email",
        value: "nexorastudio205@gmail.com"
    }, {
        icon: (0,
        o.default)("map-pin", [["path", {
            d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
            key: "1r0f0z"
        }], ["circle", {
            cx: "12",
            cy: "10",
            r: "3",
            key: "ilqhr7"
        }]]),
        label: "Location",
        value: "Available Worldwide"
    }, {
        icon: (0,
        o.default)("clock", [["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }], ["path", {
            d: "M12 6v6l4 2",
            key: "mmk7yg"
        }]]),
        label: "Response Time",
        value: "Within 24 hours"
    }];
    e.s(["default", 0, function() {
        let e = (0,
        r.useRef)(null)
          , o = (0,
        i.useInView)(e, {
            once: !0,
            margin: "-100px"
        })
          , [n,d] = (0,
        r.useState)({
            name: "",
            email: "",
            service: "",
            message: ""
        })
          , [c,m] = (0,
        r.useState)("idle")
          , u = e => d(t => ({
            ...t,
            [e.target.name]: e.target.value
        }))
          , p = async e => {
            e.preventDefault(),
            m("sending");
            try {
                let e = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json"
                    },
                    body: JSON.stringify({
                        access_key: "9e91f04d-d911-4e42-856a-f52e373e80ac",
                        name: n.name,
                        email: n.email,
                        service: n.service,
                        message: n.message
                    })
                })
                  , t = await e.json();
                t.success ? (m("sent"),
                d({
                    name: "",
                    email: "",
                    service: "",
                    message: ""
                })) : (console.error("Web3Forms Error:", t),
                m("error"))
            } catch (e) {
                console.error("Fetch Error:", e),
                m("error")
            }
        }
        ;
        return (0,
        t.jsxs)("section", {
            id: "contact",
            className: "relative isolate py-16 sm:py-24 lg:py-32 px-4 sm:px-6",
            children: [(0,
            t.jsxs)("div", {
                className: "absolute inset-0 -z-10",
                children: [(0,
                t.jsx)("div", {
                    className: "absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
                }), (0,
                t.jsx)("div", {
                    className: "absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/[0.06] rounded-full blur-[100px]"
                })]
            }), (0,
            t.jsxs)("div", {
                ref: e,
                className: "max-w-5xl mx-auto",
                children: [(0,
                t.jsxs)(a.motion.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    animate: o ? {
                        opacity: 1,
                        y: 0
                    } : {},
                    transition: {
                        duration: .6
                    },
                    className: "text-center mb-16",
                    children: [(0,
                    t.jsx)("p", {
                        className: "text-sm font-semibold tracking-widest uppercase text-blue-400 mb-3",
                        children: "Get In Touch"
                    }), (0,
                    t.jsx)("h2", {
                        className: "text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4",
                        children: "Let's Build Something"
                    }), (0,
                    t.jsx)("p", {
                        className: "text-slate-400 max-w-xl mx-auto text-base",
                        children: "Have a project in mind? Tell us about it and we'll get back to you within 24 hours."
                    })]
                }), (0,
                t.jsxs)("div", {
                    className: "grid md:grid-cols-5 gap-6 sm:gap-8",
                    children: [(0,
                    t.jsxs)(a.motion.div, {
                        initial: {
                            opacity: 0,
                            x: -30
                        },
                        animate: o ? {
                            opacity: 1,
                            x: 0
                        } : {},
                        transition: {
                            duration: .6,
                            delay: .1
                        },
                        className: "md:col-span-2 flex flex-col gap-4",
                        children: [l.map(e => (0,
                        t.jsxs)("div", {
                            className: "flex items-start gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-5 hover:border-blue-500/30 transition-colors duration-300",
                            children: [(0,
                            t.jsx)("div", {
                                className: "w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0",
                                children: (0,
                                t.jsx)(e.icon, {
                                    size: 18,
                                    className: "text-blue-400"
                                })
                            }), (0,
                            t.jsxs)("div", {
                                children: [(0,
                                t.jsx)("p", {
                                    className: "text-slate-500 text-xs uppercase tracking-wider mb-0.5",
                                    children: e.label
                                }), (0,
                                t.jsx)("p", {
                                    className: "text-slate-200 text-sm font-medium",
                                    children: e.value
                                })]
                            })]
                        }, e.label)), (0,
                        t.jsx)("div", {
                            className: "rounded-2xl border border-white/[0.07] bg-white/[0.03] p-6 mt-2",
                            children: (0,
                            t.jsx)("p", {
                                className: "text-slate-400 text-sm leading-relaxed",
                                children: "We work with clients globally. Whether you're a startup or an established business, we'd love to hear from you."
                            })
                        })]
                    }), (0,
                    t.jsxs)(a.motion.form, {
                        initial: {
                            opacity: 0,
                            x: 30
                        },
                        animate: o ? {
                            opacity: 1,
                            x: 0
                        } : {},
                        transition: {
                            duration: .6,
                            delay: .2
                        },
                        onSubmit: p,
                        className: "md:col-span-3 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-5 sm:p-7 flex flex-col gap-5",
                        children: [(0,
                        t.jsxs)("div", {
                            className: "grid sm:grid-cols-2 gap-5",
                            children: [(0,
                            t.jsxs)("div", {
                                children: [(0,
                                t.jsx)("label", {
                                    htmlFor: "name",
                                    className: "block text-sm font-medium text-slate-400 mb-2",
                                    children: "Name"
                                }), (0,
                                t.jsx)("input", {
                                    id: "name",
                                    name: "name",
                                    type: "text",
                                    required: !0,
                                    value: n.name,
                                    onChange: u,
                                    placeholder: "Your name",
                                    className: "w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-slate-200 placeholder-slate-600 outline-none text-sm transition-all duration-200 focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/20 focus:bg-blue-500/[0.04]"
                                })]
                            }), (0,
                            t.jsxs)("div", {
                                children: [(0,
                                t.jsx)("label", {
                                    htmlFor: "email",
                                    className: "block text-sm font-medium text-slate-400 mb-2",
                                    children: "Email"
                                }), (0,
                                t.jsx)("input", {
                                    id: "email",
                                    name: "email",
                                    type: "email",
                                    required: !0,
                                    value: n.email,
                                    onChange: u,
                                    placeholder: "you@example.com",
                                    className: "w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-slate-200 placeholder-slate-600 outline-none text-sm transition-all duration-200 focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/20 focus:bg-blue-500/[0.04]"
                                })]
                            })]
                        }), (0,
                        t.jsxs)("div", {
                            children: [(0,
                            t.jsx)("label", {
                                htmlFor: "service",
                                className: "block text-sm font-medium text-slate-400 mb-2",
                                children: "Service"
                            }), (0,
                            t.jsxs)("select", {
                                id: "service",
                                name: "service",
                                required: !0,
                                value: n.service,
                                onChange: u,
                                className: "w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-slate-200 outline-none text-sm transition-all duration-200 focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/20 focus:bg-blue-500/[0.04] appearance-none",
                                children: [(0,
                                t.jsx)("option", {
                                    value: "",
                                    disabled: !0,
                                    className: "bg-[#03030a]",
                                    children: "Select a service"
                                }), (0,
                                t.jsx)("option", {
                                    value: "Web Development",
                                    className: "bg-[#03030a]",
                                    children: "Web Development"
                                }), (0,
                                t.jsx)("option", {
                                    value: "UI / UX Design",
                                    className: "bg-[#03030a]",
                                    children: "UI / UX Design"
                                }), (0,
                                t.jsx)("option", {
                                    value: "E-commerce",
                                    className: "bg-[#03030a]",
                                    children: "E-commerce"
                                }), (0,
                                t.jsx)("option", {
                                    value: "SaaS Products",
                                    className: "bg-[#03030a]",
                                    children: "SaaS Products"
                                }), (0,
                                t.jsx)("option", {
                                    value: "Responsive Design",
                                    className: "bg-[#03030a]",
                                    children: "Responsive Design"
                                }), (0,
                                t.jsx)("option", {
                                    value: "Maintenance & Support",
                                    className: "bg-[#03030a]",
                                    children: "Maintenance & Support"
                                })]
                            })]
                        }), (0,
                        t.jsxs)("div", {
                            children: [(0,
                            t.jsx)("label", {
                                htmlFor: "message",
                                className: "block text-sm font-medium text-slate-400 mb-2",
                                children: "Message"
                            }), (0,
                            t.jsx)("textarea", {
                                id: "message",
                                name: "message",
                                rows: 5,
                                required: !0,
                                value: n.message,
                                onChange: u,
                                placeholder: "Tell us about your project...",
                                className: "w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-slate-200 placeholder-slate-600 outline-none text-sm transition-all duration-200 focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/20 focus:bg-blue-500/[0.04] resize-none"
                            })]
                        }), (0,
                        t.jsx)("button", {
                            type: "submit",
                            disabled: "sending" === c,
                            className: "group w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm transition-all duration-200 shadow-[0_0_25px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(59,130,246,0.5)]",
                            children: "sending" === c ? (0,
                            t.jsxs)(t.Fragment, {
                                children: [(0,
                                t.jsxs)("svg", {
                                    className: "animate-spin h-4 w-4",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    children: [(0,
                                    t.jsx)("circle", {
                                        className: "opacity-25",
                                        cx: "12",
                                        cy: "12",
                                        r: "10",
                                        stroke: "currentColor",
                                        strokeWidth: "4"
                                    }), (0,
                                    t.jsx)("path", {
                                        className: "opacity-75",
                                        fill: "currentColor",
                                        d: "M4 12a8 8 0 018-8v8H4z"
                                    })]
                                }), "Sending..."]
                            }) : (0,
                            t.jsxs)(t.Fragment, {
                                children: ["Send Message", (0,
                                t.jsx)(s, {
                                    size: 15,
                                    className: "group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                                })]
                            })
                        }), "sent" === c && (0,
                        t.jsx)(a.motion.p, {
                            initial: {
                                opacity: 0,
                                y: 6
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            className: "text-center text-emerald-400 text-sm font-medium",
                            children: "✅ Message sent! We'll be in touch soon."
                        }), "error" === c && (0,
                        t.jsx)(a.motion.p, {
                            initial: {
                                opacity: 0,
                                y: 6
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            className: "text-center text-red-400 text-sm font-medium",
                            children: "❌ Something went wrong. Please try again."
                        })]
                    })]
                })]
            })]
        })
    }
    ], 47710)
}
, 81469, e => {
    "use strict";
    var t = e.i(43476)
      , r = e.i(57688);
    let a = [{
        name: "Instagram",
        href: "https://www.instagram.com/nex_orastudio.official",
        icon: () => (0,
        t.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [(0,
            t.jsx)("rect", {
                width: "20",
                height: "20",
                x: "2",
                y: "2",
                rx: "5",
                ry: "5"
            }), (0,
            t.jsx)("path", {
                d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
            }), (0,
            t.jsx)("line", {
                x1: "17.5",
                x2: "17.51",
                y1: "6.5",
                y2: "6.5"
            })]
        }),
        hoverColor: "hover:text-pink-500"
    }, {
        name: "TikTok",
        href: "https://www.tiktok.com/@nexorastudio02",
        icon: () => (0,
        t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: (0,
            t.jsx)("path", {
                d: "M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"
            })
        }),
        hoverColor: "hover:text-white"
    }, {
        name: "Facebook",
        href: "#",
        icon: () => (0,
        t.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: (0,
            t.jsx)("path", {
                d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
            })
        }),
        hoverColor: "hover:text-blue-600"
    }, {
        name: "LinkedIn",
        href: "#",
        icon: () => (0,
        t.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [(0,
            t.jsx)("path", {
                d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
            }), (0,
            t.jsx)("rect", {
                width: "4",
                height: "12",
                x: "2",
                y: "9"
            }), (0,
            t.jsx)("circle", {
                cx: "4",
                cy: "4",
                r: "2"
            })]
        }),
        hoverColor: "hover:text-blue-400"
    }];
    function i() {
        return (0,
        t.jsx)("div", {
            className: "flex items-center gap-4",
            children: a.map(e => {
                let r = e.icon;
                return (0,
                t.jsxs)("a", {
                    href: e.href,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: `
              group relative p-3 rounded-xl border border-white/10 
              bg-white/[0.03] backdrop-blur-sm transition-all duration-300 
              hover:scale-110 hover:border-white/20 hover:bg-white/[0.08]
              ${e.hoverColor} text-slate-400
            `,
                    children: [(0,
                    t.jsx)(r, {}), (0,
                    t.jsx)("div", {
                        className: "absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300 bg-current -z-10"
                    })]
                }, e.name)
            }
            )
        })
    }
    let o = [{
        label: "About",
        href: "#about"
    }, {
        label: "Work",
        href: "#projects"
    }, {
        label: "Services",
        href: "#services"
    }, {
        label: "Process",
        href: "#process"
    }, {
        label: "Industries",
        href: "#industries"
    }, {
        label: "Contact",
        href: "#contact"
    }]
      , s = ["Web Development", "UI / UX Design", "E-commerce", "SaaS Products", "Responsive Design", "Maintenance & Support"];
    e.s(["default", 0, function() {
        let e = e => {
            document.querySelector(e)?.scrollIntoView({
                behavior: "smooth"
            })
        }
        ;
        return (0,
        t.jsx)("footer", {
            className: "relative border-t border-white/[0.06]",
            children: (0,
            t.jsxs)("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 pt-10 sm:pt-16 pb-6 sm:pb-10",
                children: [(0,
                t.jsxs)("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12",
                    children: [(0,
                    t.jsxs)("div", {
                        className: "lg:col-span-1",
                        children: [(0,
                        t.jsx)("button", {
                            onClick: () => window.scrollTo({
                                top: 0,
                                behavior: "smooth"
                            }),
                            className: "mb-4 block",
                            children: (0,
                            t.jsx)(r.default, {
                                src: "/logo.png",
                                alt: "Nexora Studio",
                                width: 140,
                                height: 140,
                                className: "w-28 h-auto object-contain"
                            })
                        }), (0,
                        t.jsx)("p", {
                            className: "text-slate-500 text-sm leading-relaxed max-w-xs",
                            children: "A premium web development & design agency crafting fast, beautiful, and scalable digital experiences."
                        }), (0,
                        t.jsx)("div", {
                            className: "mt-5",
                            children: (0,
                            t.jsx)(i, {})
                        })]
                    }), (0,
                    t.jsxs)("div", {
                        children: [(0,
                        t.jsx)("p", {
                            className: "text-white text-xs font-semibold uppercase tracking-widest mb-5",
                            children: "Navigation"
                        }), (0,
                        t.jsx)("ul", {
                            className: "flex flex-col gap-3",
                            children: o.map(r => (0,
                            t.jsx)("li", {
                                children: (0,
                                t.jsx)("button", {
                                    onClick: () => e(r.href),
                                    className: "text-sm text-slate-500 hover:text-slate-200 transition-colors duration-200",
                                    children: r.label
                                })
                            }, r.href))
                        })]
                    }), (0,
                    t.jsxs)("div", {
                        children: [(0,
                        t.jsx)("p", {
                            className: "text-white text-xs font-semibold uppercase tracking-widest mb-5",
                            children: "Services"
                        }), (0,
                        t.jsx)("ul", {
                            className: "flex flex-col gap-3",
                            children: s.map(e => (0,
                            t.jsx)("li", {
                                children: (0,
                                t.jsx)("span", {
                                    className: "text-sm text-slate-500",
                                    children: e
                                })
                            }, e))
                        })]
                    }), (0,
                    t.jsxs)("div", {
                        children: [(0,
                        t.jsx)("p", {
                            className: "text-white text-xs font-semibold uppercase tracking-widest mb-5",
                            children: "Get In Touch"
                        }), (0,
                        t.jsxs)("ul", {
                            className: "flex flex-col gap-3",
                            children: [(0,
                            t.jsx)("li", {
                                children: (0,
                                t.jsx)("a", {
                                    href: "mailto:nexorastudio205@gmail.com",
                                    className: "text-sm text-slate-500 hover:text-slate-200 transition-colors duration-200",
                                    children: "nexorastudio205@gmail.com"
                                })
                            }), (0,
                            t.jsx)("li", {
                                children: (0,
                                t.jsx)("span", {
                                    className: "text-sm text-slate-500",
                                    children: "Available Worldwide"
                                })
                            }), (0,
                            t.jsx)("li", {
                                children: (0,
                                t.jsx)("span", {
                                    className: "text-sm text-slate-500",
                                    children: "Response within 24h"
                                })
                            })]
                        }), (0,
                        t.jsx)("button", {
                            onClick: () => e("#contact"),
                            className: "mt-6 inline-flex px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-all duration-200 shadow-[0_0_20px_rgba(59,130,246,0.25)] hover:shadow-[0_0_30px_rgba(59,130,246,0.45)]",
                            children: "Start a Project →"
                        })]
                    })]
                }), (0,
                t.jsx)("div", {
                    className: "h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent mb-8"
                }), (0,
                t.jsxs)("div", {
                    className: "flex flex-col sm:flex-row items-center justify-between gap-4",
                    children: [(0,
                    t.jsxs)("p", {
                        className: "text-slate-600 text-xs",
                        children: ["© ", new Date().getFullYear(), " Nexora Studio. All rights reserved."]
                    }), (0,
                    t.jsxs)("div", {
                        className: "flex items-center gap-1",
                        children: [(0,
                        t.jsx)("span", {
                            className: "w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"
                        }), (0,
                        t.jsx)("span", {
                            className: "text-slate-600 text-xs",
                            children: "Available for new projects"
                        })]
                    })]
                })]
            })
        })
    }
    ], 81469)
}
]);
