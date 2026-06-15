(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 33525, (e, r, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    Object.defineProperty(t, "warnOnce", {
        enumerable: !0,
        get: function() {
            return n
        }
    });
    let n = e => {}
}
, 65952, e => {
    "use strict";
    var r = e.i(43476)
      , t = e.i(46932)
      , n = e.i(10542)
      , a = e.i(95420)
      , i = e.i(83411)
      , o = e.i(12381);
    function l(e, ...r) {
        let t = e.length;
        return (0,
        o.useCombineMotionValues)(r.filter(i.isMotionValue), function() {
            let n = "";
            for (let a = 0; a < t; a++) {
                n += e[a];
                let t = r[a];
                t && (n += (0,
                i.isMotionValue)(t) ? t.get() : t)
            }
            return n
        })
    }
    e.s(["default", 0, function() {
        let {scrollYProgress: e} = (0,
        n.useScroll)()
          , i = (0,
        a.useTransform)(e, [0, .5, 1], ["rgba(8, 145, 178, 0.15)", "rgba(0, 128, 128, 0.15)", "rgba(0, 128, 128, 0.15)"])
          , o = (0,
        a.useTransform)(e, [0, .5, 1], ["rgba(0, 128, 128, 0.15)", "rgba(8, 145, 178, 0.15)", "rgba(8, 145, 178, 0.15)"])
          , s = (0,
        a.useTransform)(e, [0, .5, 1], ["rgba(6, 182, 212, 0.08)", "rgba(0, 128, 128, 0.12)", "rgba(0, 128, 128, 0.12)"])
          , u = l`
    radial-gradient(circle at 15% 20%, ${i} 0%, transparent 50%),
    radial-gradient(circle at 85% 80%, ${o} 0%, transparent 50%),
    radial-gradient(circle at 50% 50%, ${s} 0%, transparent 60%)
  `;
        return (0,
        r.jsx)(t.motion.div, {
            style: {
                backgroundImage: u
            },
            className: "fixed inset-0 z-[-50] pointer-events-none blur-3xl transition-colors duration-500"
        })
    }
    ], 65952)
}
]);
