(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  [
    function (e, t, n) {
      "use strict";
      function i(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function r(e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = t);
      }
      /*!
       * GSAP 3.4.0
       * https://greensock.com
       *
       * @license Copyright 2008-2020, GreenSock. All rights reserved.
       * Subject to the terms at https://greensock.com/standard-license or for
       * Club GreenSock members, the agreement issued with that membership.
       * @author: Jack Doyle, jack@greensock.com
       */ n.d(t, "a", function () {
        return It;
      }),
        n.d(t, "d", function () {
          return ln;
        }),
        n.d(t, "z", function () {
          return hn;
        }),
        n.d(t, "b", function () {
          return pn;
        }),
        n.d(t, "c", function () {
          return fn;
        }),
        n.d(t, "e", function () {
          return Nt;
        }),
        n.d(t, "y", function () {
          return Ze;
        }),
        n.d(t, "k", function () {
          return ye;
        }),
        n.d(t, "p", function () {
          return U;
        }),
        n.d(t, "q", function () {
          return K;
        }),
        n.d(t, "m", function () {
          return R;
        }),
        n.d(t, "n", function () {
          return q;
        }),
        n.d(t, "t", function () {
          return tn;
        }),
        n.d(t, "s", function () {
          return J;
        }),
        n.d(t, "i", function () {
          return be;
        }),
        n.d(t, "w", function () {
          return an;
        }),
        n.d(t, "g", function () {
          return Tt;
        }),
        n.d(t, "u", function () {
          return ct;
        }),
        n.d(t, "f", function () {
          return qt;
        }),
        n.d(t, "r", function () {
          return de;
        }),
        n.d(t, "x", function () {
          return Et;
        }),
        n.d(t, "h", function () {
          return P;
        }),
        n.d(t, "v", function () {
          return we;
        }),
        n.d(t, "o", function () {
          return re;
        }),
        n.d(t, "l", function () {
          return Zt;
        }),
        n.d(t, "j", function () {
          return ve;
        });
      var s,
        o,
        a,
        l,
        c,
        u,
        d,
        h,
        p,
        f,
        m,
        g,
        v,
        y,
        b,
        w,
        x,
        T,
        E,
        S,
        C,
        _,
        k,
        M,
        L,
        P = {
          autoSleep: 120,
          force3D: "auto",
          nullTargetWarn: 1,
          units: { lineHeight: "" },
        },
        O = { duration: 0.5, overwrite: !1, delay: 0 },
        A = 1e8,
        D = 2 * Math.PI,
        z = D / 4,
        $ = 0,
        I = Math.sqrt,
        j = Math.cos,
        N = Math.sin,
        R = function (e) {
          return "string" == typeof e;
        },
        H = function (e) {
          return "function" == typeof e;
        },
        B = function (e) {
          return "number" == typeof e;
        },
        q = function (e) {
          return void 0 === e;
        },
        F = function (e) {
          return "object" == typeof e;
        },
        W = function (e) {
          return !1 !== e;
        },
        Y = function () {
          return "undefined" != typeof window;
        },
        X = function (e) {
          return H(e) || R(e);
        },
        V = Array.isArray,
        G = /(?:-?\.?\d|\.)+/gi,
        U = /[-+=.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g,
        K = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        Q = /[-+=.]*\d+(?:\.|e-|e)*\d*/gi,
        Z = /\(([^()]+)\)/i,
        J = /[+-]=-?[\.\d]+/,
        ee = /[#\-+.]*\b[a-z\d-=+%.]+/gi,
        te = {},
        ne = {},
        ie = function (e) {
          return (ne = Le(e, te)) && hn;
        },
        re = function (e, t) {
          return console.warn(
            "Invalid property",
            e,
            "set to",
            t,
            "Missing plugin? gsap.registerPlugin()"
          );
        },
        se = function (e, t) {
          return !t && console.warn(e);
        },
        oe = function (e, t) {
          return (e && (te[e] = t) && ne && (ne[e] = t)) || te;
        },
        ae = function () {
          return 0;
        },
        le = {},
        ce = [],
        ue = {},
        de = {},
        he = {},
        pe = 30,
        fe = [],
        me = "",
        ge = function (e) {
          var t,
            n,
            i = e[0];
          if ((F(i) || H(i) || (e = [e]), !(t = (i._gsap || {}).harness))) {
            for (n = fe.length; n-- && !fe[n].targetTest(i); );
            t = fe[n];
          }
          for (n = e.length; n--; )
            (e[n] && (e[n]._gsap || (e[n]._gsap = new It(e[n], t)))) ||
              e.splice(n, 1);
          return e;
        },
        ve = function (e) {
          return e._gsap || ge(nt(e))[0]._gsap;
        },
        ye = function (e, t) {
          var n = e[t];
          return H(n) ? e[t]() : (q(n) && e.getAttribute(t)) || n;
        },
        be = function (e, t) {
          return (e = e.split(",")).forEach(t) || e;
        },
        we = function (e) {
          return Math.round(1e5 * e) / 1e5 || 0;
        },
        xe = function (e, t) {
          for (var n = t.length, i = 0; e.indexOf(t[i]) < 0 && ++i < n; );
          return i < n;
        },
        Te = function (e, t, n) {
          var i,
            r = B(e[1]),
            s = (r ? 2 : 1) + (t < 2 ? 0 : 1),
            o = e[s];
          if ((r && (o.duration = e[1]), (o.parent = n), t)) {
            for (i = o; n && !("immediateRender" in i); )
              (i = n.vars.defaults || {}), (n = W(n.vars.inherit) && n.parent);
            (o.immediateRender = W(i.immediateRender)),
              t < 2 ? (o.runBackwards = 1) : (o.startAt = e[s - 1]);
          }
          return o;
        },
        Ee = function () {
          var e,
            t,
            n = ce.length,
            i = ce.slice(0);
          for (ue = {}, ce.length = 0, e = 0; e < n; e++)
            (t = i[e]) &&
              t._lazy &&
              (t.render(t._lazy[0], t._lazy[1], !0)._lazy = 0);
        },
        Se = function (e, t, n, i) {
          ce.length && Ee(), e.render(t, n, i), ce.length && Ee();
        },
        Ce = function (e) {
          var t = parseFloat(e);
          return (t || 0 === t) && (e + "").match(ee).length < 2 ? t : e;
        },
        _e = function (e) {
          return e;
        },
        ke = function (e, t) {
          for (var n in t) n in e || (e[n] = t[n]);
          return e;
        },
        Me = function (e, t) {
          for (var n in t)
            n in e || "duration" === n || "ease" === n || (e[n] = t[n]);
        },
        Le = function (e, t) {
          for (var n in t) e[n] = t[n];
          return e;
        },
        Pe = function e(t, n) {
          for (var i in n) t[i] = F(n[i]) ? e(t[i] || (t[i] = {}), n[i]) : n[i];
          return t;
        },
        Oe = function (e, t) {
          var n,
            i = {};
          for (n in e) n in t || (i[n] = e[n]);
          return i;
        },
        Ae = function (e) {
          var t = e.parent || s,
            n = e.keyframes ? Me : ke;
          if (W(e.inherit))
            for (; t; ) n(e, t.vars.defaults), (t = t.parent || t._dp);
          return e;
        },
        De = function (e, t, n, i) {
          void 0 === n && (n = "_first"), void 0 === i && (i = "_last");
          var r = t._prev,
            s = t._next;
          r ? (r._next = s) : e[n] === t && (e[n] = s),
            s ? (s._prev = r) : e[i] === t && (e[i] = r),
            (t._next = t._prev = t.parent = null);
        },
        ze = function (e, t) {
          !e.parent ||
            (t && !e.parent.autoRemoveChildren) ||
            e.parent.remove(e),
            (e._act = 0);
        },
        $e = function (e) {
          for (var t = e; t; ) (t._dirty = 1), (t = t.parent);
          return e;
        },
        Ie = function (e) {
          for (var t = e.parent; t && t.parent; )
            (t._dirty = 1), t.totalDuration(), (t = t.parent);
          return e;
        },
        je = function (e) {
          return e._repeat
            ? Ne(e._tTime, (e = e.duration() + e._rDelay)) * e
            : 0;
        },
        Ne = function (e, t) {
          return (e /= t) && ~~e === e ? ~~e - 1 : ~~e;
        },
        Re = function (e, t) {
          return (
            (e - t._start) * t._ts +
            (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
          );
        },
        He = function (e) {
          return (e._end = we(
            e._start + (e._tDur / Math.abs(e._ts || e._rts || 1e-8) || 0)
          ));
        },
        Be = function (e, t) {
          var n = e._dp;
          return (
            n &&
              n.smoothChildTiming &&
              e._ts &&
              ((e._start = we(
                e._dp._time -
                  (e._ts > 0
                    ? t / e._ts
                    : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)
              )),
              He(e),
              n._dirty || $e(n)),
            e
          );
        },
        qe = function (e, t) {
          var n;
          if (
            ((t._time || (t._initted && !t._dur)) &&
              ((n = Re(e.rawTime(), t)),
              (!t._dur || Qe(0, t.totalDuration(), n) - t._tTime > 1e-8) &&
                t.render(n, !0)),
            $e(e)._dp && e._initted && e._time >= e._dur && e._ts)
          ) {
            if (e._dur < e.duration())
              for (n = e; n._dp; )
                n.rawTime() >= 0 && n.totalTime(n._tTime), (n = n._dp);
            e._zTime = -1e-8;
          }
        },
        Fe = function (e, t, n, i) {
          return (
            t.parent && ze(t),
            (t._start = we(n + t._delay)),
            (t._end = we(
              t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)
            )),
            (function (e, t, n, i, r) {
              void 0 === n && (n = "_first"), void 0 === i && (i = "_last");
              var s,
                o = e[i];
              if (r) for (s = t[r]; o && o[r] > s; ) o = o._prev;
              o
                ? ((t._next = o._next), (o._next = t))
                : ((t._next = e[n]), (e[n] = t)),
                t._next ? (t._next._prev = t) : (e[i] = t),
                (t._prev = o),
                (t.parent = t._dp = e);
            })(e, t, "_first", "_last", e._sort ? "_start" : 0),
            (e._recent = t),
            i || qe(e, t),
            e
          );
        },
        We = function (e, t) {
          return (
            (te.ScrollTrigger || re("scrollTrigger", t)) &&
            te.ScrollTrigger.create(t, e)
          );
        },
        Ye = function (e, t, n, i) {
          return (
            Ft(e, t),
            e._initted
              ? !n &&
                e._pt &&
                ((e._dur && !1 !== e.vars.lazy) || (!e._dur && e.vars.lazy)) &&
                u !== Et.frame
                ? (ce.push(e), (e._lazy = [t, i]), 1)
                : void 0
              : 1
          );
        },
        Xe = function (e, t, n) {
          var i = e._repeat,
            r = we(t) || 0;
          return (
            (e._dur = r),
            (e._tDur = i
              ? i < 0
                ? 1e10
                : we(r * (i + 1) + e._rDelay * i)
              : r),
            e._time > r &&
              ((e._time = r), (e._tTime = Math.min(e._tTime, e._tDur))),
            !n && $e(e.parent),
            e.parent && He(e),
            e
          );
        },
        Ve = function (e) {
          return e instanceof Nt ? $e(e) : Xe(e, e._dur);
        },
        Ge = { _start: 0, endTime: ae },
        Ue = function e(t, n) {
          var i,
            r,
            s = t.labels,
            o = t._recent || Ge,
            a = t.duration() >= A ? o.endTime(!1) : t._dur;
          return R(n) && (isNaN(n) || n in s)
            ? "<" === (i = n.charAt(0)) || ">" === i
              ? ("<" === i ? o._start : o.endTime(o._repeat >= 0)) +
                (parseFloat(n.substr(1)) || 0)
              : (i = n.indexOf("=")) < 0
              ? (n in s || (s[n] = a), s[n])
              : ((r = +(n.charAt(i - 1) + n.substr(i + 1))),
                i > 1 ? e(t, n.substr(0, i - 1)) + r : a + r)
            : null == n
            ? a
            : +n;
        },
        Ke = function (e, t) {
          return e || 0 === e ? t(e) : t;
        },
        Qe = function (e, t, n) {
          return n < e ? e : n > t ? t : n;
        },
        Ze = function (e) {
          return (e + "").substr((parseFloat(e) + "").length);
        },
        Je = [].slice,
        et = function (e, t) {
          return (
            e &&
            F(e) &&
            "length" in e &&
            ((!t && !e.length) || (e.length - 1 in e && F(e[0]))) &&
            !e.nodeType &&
            e !== o
          );
        },
        tt = function (e, t, n) {
          return (
            void 0 === n && (n = []),
            e.forEach(function (e) {
              var i;
              return (R(e) && !t) || et(e, 1)
                ? (i = n).push.apply(i, nt(e))
                : n.push(e);
            }) || n
          );
        },
        nt = function (e, t) {
          return !R(e) || t || (!a && St())
            ? V(e)
              ? tt(e, t)
              : et(e)
              ? Je.call(e, 0)
              : e
              ? [e]
              : []
            : Je.call(l.querySelectorAll(e), 0);
        },
        it = function (e) {
          return e.sort(function () {
            return 0.5 - Math.random();
          });
        },
        rt = function (e) {
          if (H(e)) return e;
          var t = F(e) ? e : { each: e },
            n = Ot(t.ease),
            i = t.from || 0,
            r = parseFloat(t.base) || 0,
            s = {},
            o = i > 0 && i < 1,
            a = isNaN(i) || o,
            l = t.axis,
            c = i,
            u = i;
          return (
            R(i)
              ? (c = u = { center: 0.5, edges: 0.5, end: 1 }[i] || 0)
              : !o && a && ((c = i[0]), (u = i[1])),
            function (e, o, d) {
              var h,
                p,
                f,
                m,
                g,
                v,
                y,
                b,
                w,
                x = (d || t).length,
                T = s[x];
              if (!T) {
                if (!(w = "auto" === t.grid ? 0 : (t.grid || [1, A])[1])) {
                  for (
                    y = -A;
                    y < (y = d[w++].getBoundingClientRect().left) && w < x;

                  );
                  w--;
                }
                for (
                  T = s[x] = [],
                    h = a ? Math.min(w, x) * c - 0.5 : i % w,
                    p = a ? (x * u) / w - 0.5 : (i / w) | 0,
                    y = 0,
                    b = A,
                    v = 0;
                  v < x;
                  v++
                )
                  (f = (v % w) - h),
                    (m = p - ((v / w) | 0)),
                    (T[v] = g =
                      l ? Math.abs("y" === l ? m : f) : I(f * f + m * m)),
                    g > y && (y = g),
                    g < b && (b = g);
                "random" === i && it(T),
                  (T.max = y - b),
                  (T.min = b),
                  (T.v = x =
                    (parseFloat(t.amount) ||
                      parseFloat(t.each) *
                        (w > x
                          ? x - 1
                          : l
                          ? "y" === l
                            ? x / w
                            : w
                          : Math.max(w, x / w)) ||
                      0) * ("edges" === i ? -1 : 1)),
                  (T.b = x < 0 ? r - x : r),
                  (T.u = Ze(t.amount || t.each) || 0),
                  (n = n && x < 0 ? Lt(n) : n);
              }
              return (
                (x = (T[e] - T.min) / T.max || 0),
                we(T.b + (n ? n(x) : x) * T.v) + T.u
              );
            }
          );
        },
        st = function (e) {
          var t = e < 1 ? Math.pow(10, (e + "").length - 2) : 1;
          return function (n) {
            return (
              Math.floor(Math.round(parseFloat(n) / e) * e * t) / t +
              (B(n) ? 0 : Ze(n))
            );
          };
        },
        ot = function (e, t) {
          var n,
            i,
            r = V(e);
          return (
            !r &&
              F(e) &&
              ((n = r = e.radius || A),
              e.values
                ? ((e = nt(e.values)), (i = !B(e[0])) && (n *= n))
                : (e = st(e.increment))),
            Ke(
              t,
              r
                ? H(e)
                  ? function (t) {
                      return (i = e(t)), Math.abs(i - t) <= n ? i : t;
                    }
                  : function (t) {
                      for (
                        var r,
                          s,
                          o = parseFloat(i ? t.x : t),
                          a = parseFloat(i ? t.y : 0),
                          l = A,
                          c = 0,
                          u = e.length;
                        u--;

                      )
                        (r = i
                          ? (r = e[u].x - o) * r + (s = e[u].y - a) * s
                          : Math.abs(e[u] - o)) < l && ((l = r), (c = u));
                      return (
                        (c = !n || l <= n ? e[c] : t),
                        i || c === t || B(t) ? c : c + Ze(t)
                      );
                    }
                : st(e)
            )
          );
        },
        at = function (e, t, n, i) {
          return Ke(V(e) ? !t : !0 === n ? !!(n = 0) : !i, function () {
            return V(e)
              ? e[~~(Math.random() * e.length)]
              : (n = n || 1e-5) &&
                  (i = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) &&
                  Math.floor(
                    Math.round((e + Math.random() * (t - e)) / n) * n * i
                  ) / i;
          });
        },
        lt = function (e, t, n) {
          return Ke(n, function (n) {
            return e[~~t(n)];
          });
        },
        ct = function (e) {
          for (var t, n, i, r, s = 0, o = ""; ~(t = e.indexOf("random(", s)); )
            (i = e.indexOf(")", t)),
              (r = "[" === e.charAt(t + 7)),
              (n = e.substr(t + 7, i - t - 7).match(r ? ee : G)),
              (o +=
                e.substr(s, t - s) + at(r ? n : +n[0], +n[1], +n[2] || 1e-5)),
              (s = i + 1);
          return o + e.substr(s, e.length - s);
        },
        ut = function (e, t, n, i, r) {
          var s = t - e,
            o = i - n;
          return Ke(r, function (t) {
            return n + (((t - e) / s) * o || 0);
          });
        },
        dt = function (e, t, n) {
          var i,
            r,
            s,
            o = e.labels,
            a = A;
          for (i in o)
            (r = o[i] - t) < 0 == !!n &&
              r &&
              a > (r = Math.abs(r)) &&
              ((s = i), (a = r));
          return s;
        },
        ht = function (e, t, n) {
          var i,
            r,
            s = e.vars,
            o = s[t];
          if (o)
            return (
              (i = s[t + "Params"]),
              (r = s.callbackScope || e),
              n && ce.length && Ee(),
              i ? o.apply(r, i) : o.call(r)
            );
        },
        pt = function (e) {
          return ze(e), e.progress() < 1 && ht(e, "onInterrupt"), e;
        },
        ft = function (e) {
          var t = (e = (!e.name && e.default) || e).name,
            n = H(e),
            i =
              t && !n && e.init
                ? function () {
                    this._props = [];
                  }
                : e,
            r = {
              init: ae,
              render: nn,
              add: Bt,
              kill: sn,
              modifier: rn,
              rawVars: 0,
            },
            s = {
              targetTest: 0,
              get: 0,
              getSetter: Zt,
              aliases: {},
              register: 0,
            };
          if ((St(), e !== i)) {
            if (de[t]) return;
            ke(i, ke(Oe(e, r), s)),
              Le(i.prototype, Le(r, Oe(e, s))),
              (de[(i.prop = t)] = i),
              e.targetTest && (fe.push(i), (le[t] = 1)),
              (t =
                ("css" === t
                  ? "CSS"
                  : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin");
          }
          oe(t, i), e.register && e.register(hn, i, ln);
        },
        mt = {
          aqua: [0, 255, 255],
          lime: [0, 255, 0],
          silver: [192, 192, 192],
          black: [0, 0, 0],
          maroon: [128, 0, 0],
          teal: [0, 128, 128],
          blue: [0, 0, 255],
          navy: [0, 0, 128],
          white: [255, 255, 255],
          olive: [128, 128, 0],
          yellow: [255, 255, 0],
          orange: [255, 165, 0],
          gray: [128, 128, 128],
          purple: [128, 0, 128],
          green: [0, 128, 0],
          red: [255, 0, 0],
          pink: [255, 192, 203],
          cyan: [0, 255, 255],
          transparent: [255, 255, 255, 0],
        },
        gt = function (e, t, n) {
          return (
            (255 *
              (6 * (e = e < 0 ? e + 1 : e > 1 ? e - 1 : e) < 1
                ? t + (n - t) * e * 6
                : e < 0.5
                ? n
                : 3 * e < 2
                ? t + (n - t) * (2 / 3 - e) * 6
                : t) +
              0.5) |
            0
          );
        },
        vt = function (e, t, n) {
          var i,
            r,
            s,
            o,
            a,
            l,
            c,
            u,
            d,
            h,
            p = e ? (B(e) ? [e >> 16, (e >> 8) & 255, 255 & e] : 0) : mt.black;
          if (!p) {
            if (
              ("," === e.substr(-1) && (e = e.substr(0, e.length - 1)), mt[e])
            )
              p = mt[e];
            else if ("#" === e.charAt(0))
              4 === e.length &&
                ((i = e.charAt(1)),
                (r = e.charAt(2)),
                (s = e.charAt(3)),
                (e = "#" + i + i + r + r + s + s)),
                (p = [
                  (e = parseInt(e.substr(1), 16)) >> 16,
                  (e >> 8) & 255,
                  255 & e,
                ]);
            else if ("hsl" === e.substr(0, 3))
              if (((p = h = e.match(G)), t)) {
                if (~e.indexOf("="))
                  return (p = e.match(U)), n && p.length < 4 && (p[3] = 1), p;
              } else
                (o = (+p[0] % 360) / 360),
                  (a = +p[1] / 100),
                  (i =
                    2 * (l = +p[2] / 100) -
                    (r = l <= 0.5 ? l * (a + 1) : l + a - l * a)),
                  p.length > 3 && (p[3] *= 1),
                  (p[0] = gt(o + 1 / 3, i, r)),
                  (p[1] = gt(o, i, r)),
                  (p[2] = gt(o - 1 / 3, i, r));
            else p = e.match(G) || mt.transparent;
            p = p.map(Number);
          }
          return (
            t &&
              !h &&
              ((i = p[0] / 255),
              (r = p[1] / 255),
              (s = p[2] / 255),
              (l = ((c = Math.max(i, r, s)) + (u = Math.min(i, r, s))) / 2),
              c === u
                ? (o = a = 0)
                : ((d = c - u),
                  (a = l > 0.5 ? d / (2 - c - u) : d / (c + u)),
                  (o =
                    c === i
                      ? (r - s) / d + (r < s ? 6 : 0)
                      : c === r
                      ? (s - i) / d + 2
                      : (i - r) / d + 4),
                  (o *= 60)),
              (p[0] = ~~(o + 0.5)),
              (p[1] = ~~(100 * a + 0.5)),
              (p[2] = ~~(100 * l + 0.5))),
            n && p.length < 4 && (p[3] = 1),
            p
          );
        },
        yt = function (e) {
          var t = [],
            n = [],
            i = -1;
          return (
            e.split(wt).forEach(function (e) {
              var r = e.match(K) || [];
              t.push.apply(t, r), n.push((i += r.length + 1));
            }),
            (t.c = n),
            t
          );
        },
        bt = function (e, t, n) {
          var i,
            r,
            s,
            o,
            a = "",
            l = (e + a).match(wt),
            c = t ? "hsla(" : "rgba(",
            u = 0;
          if (!l) return e;
          if (
            ((l = l.map(function (e) {
              return (
                (e = vt(e, t, 1)) &&
                c +
                  (t
                    ? e[0] + "," + e[1] + "%," + e[2] + "%," + e[3]
                    : e.join(",")) +
                  ")"
              );
            })),
            n && ((s = yt(e)), (i = n.c).join(a) !== s.c.join(a)))
          )
            for (o = (r = e.replace(wt, "1").split(K)).length - 1; u < o; u++)
              a +=
                r[u] +
                (~i.indexOf(u)
                  ? l.shift() || c + "0,0,0,0)"
                  : (s.length ? s : l.length ? l : n).shift());
          if (!r)
            for (o = (r = e.split(wt)).length - 1; u < o; u++) a += r[u] + l[u];
          return a + r[o];
        },
        wt = (function () {
          var e,
            t =
              "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
          for (e in mt) t += "|" + e + "\\b";
          return new RegExp(t + ")", "gi");
        })(),
        xt = /hsl[a]?\(/,
        Tt = function (e) {
          var t,
            n = e.join(" ");
          if (((wt.lastIndex = 0), wt.test(n)))
            return (
              (t = xt.test(n)),
              (e[1] = bt(e[1], t)),
              (e[0] = bt(e[0], t, yt(e[1]))),
              !0
            );
        },
        Et =
          ((v = Date.now),
          (y = 500),
          (b = 33),
          (w = v()),
          (x = w),
          (E = T = 1 / 240),
          (C = function e(t) {
            var n,
              i,
              r = v() - x,
              s = !0 === t;
            r > y && (w += r - b),
              (x += r),
              (g.time = (x - w) / 1e3),
              ((n = g.time - E) > 0 || s) &&
                (g.frame++, (E += n + (n >= T ? 0.004 : T - n)), (i = 1)),
              s || (p = f(e)),
              i &&
                S.forEach(function (e) {
                  return e(g.time, r, g.frame, t);
                });
          }),
          (g = {
            time: 0,
            frame: 0,
            tick: function () {
              C(!0);
            },
            wake: function () {
              c &&
                (!a &&
                  Y() &&
                  ((o = a = window),
                  (l = o.document || {}),
                  (te.gsap = hn),
                  (o.gsapVersions || (o.gsapVersions = [])).push(hn.version),
                  ie(ne || o.GreenSockGlobals || (!o.gsap && o) || {}),
                  (m = o.requestAnimationFrame)),
                p && g.sleep(),
                (f =
                  m ||
                  function (e) {
                    return setTimeout(e, (1e3 * (E - g.time) + 1) | 0);
                  }),
                (h = 1),
                C(2));
            },
            sleep: function () {
              (m ? o.cancelAnimationFrame : clearTimeout)(p), (h = 0), (f = ae);
            },
            lagSmoothing: function (e, t) {
              (y = e || 1 / 1e-8), (b = Math.min(t, y, 0));
            },
            fps: function (e) {
              (T = 1 / (e || 240)), (E = g.time + T);
            },
            add: function (e) {
              S.indexOf(e) < 0 && S.push(e), St();
            },
            remove: function (e) {
              var t;
              ~(t = S.indexOf(e)) && S.splice(t, 1);
            },
            _listeners: (S = []),
          })),
        St = function () {
          return !h && Et.wake();
        },
        Ct = {},
        _t = /^[\d.\-M][\d.\-,\s]/,
        kt = /["']/g,
        Mt = function (e) {
          for (
            var t,
              n,
              i,
              r = {},
              s = e.substr(1, e.length - 3).split(":"),
              o = s[0],
              a = 1,
              l = s.length;
            a < l;
            a++
          )
            (n = s[a]),
              (t = a !== l - 1 ? n.lastIndexOf(",") : n.length),
              (i = n.substr(0, t)),
              (r[o] = isNaN(i) ? i.replace(kt, "").trim() : +i),
              (o = n.substr(t + 1).trim());
          return r;
        },
        Lt = function (e) {
          return function (t) {
            return 1 - e(1 - t);
          };
        },
        Pt = function e(t, n) {
          for (var i, r = t._first; r; )
            r instanceof Nt
              ? e(r, n)
              : !r.vars.yoyoEase ||
                (r._yoyo && r._repeat) ||
                r._yoyo === n ||
                (r.timeline
                  ? e(r.timeline, n)
                  : ((i = r._ease),
                    (r._ease = r._yEase),
                    (r._yEase = i),
                    (r._yoyo = n))),
              (r = r._next);
        },
        Ot = function (e, t) {
          return (
            (e &&
              (H(e)
                ? e
                : Ct[e] ||
                  (function (e) {
                    var t = (e + "").split("("),
                      n = Ct[t[0]];
                    return n && t.length > 1 && n.config
                      ? n.config.apply(
                          null,
                          ~e.indexOf("{")
                            ? [Mt(t[1])]
                            : Z.exec(e)[1].split(",").map(Ce)
                        )
                      : Ct._CE && _t.test(e)
                      ? Ct._CE("", e)
                      : n;
                  })(e))) ||
            t
          );
        },
        At = function (e, t, n, i) {
          void 0 === n &&
            (n = function (e) {
              return 1 - t(1 - e);
            }),
            void 0 === i &&
              (i = function (e) {
                return e < 0.5 ? t(2 * e) / 2 : 1 - t(2 * (1 - e)) / 2;
              });
          var r,
            s = { easeIn: t, easeOut: n, easeInOut: i };
          return (
            be(e, function (e) {
              for (var t in ((Ct[e] = te[e] = s),
              (Ct[(r = e.toLowerCase())] = n),
              s))
                Ct[
                  r +
                    ("easeIn" === t
                      ? ".in"
                      : "easeOut" === t
                      ? ".out"
                      : ".inOut")
                ] = Ct[e + "." + t] = s[t];
            }),
            s
          );
        },
        Dt = function (e) {
          return function (t) {
            return t < 0.5
              ? (1 - e(1 - 2 * t)) / 2
              : 0.5 + e(2 * (t - 0.5)) / 2;
          };
        },
        zt = function e(t, n, i) {
          var r = n >= 1 ? n : 1,
            s = (i || (t ? 0.3 : 0.45)) / (n < 1 ? n : 1),
            o = (s / D) * (Math.asin(1 / r) || 0),
            a = function (e) {
              return 1 === e
                ? 1
                : r * Math.pow(2, -10 * e) * N((e - o) * s) + 1;
            },
            l =
              "out" === t
                ? a
                : "in" === t
                ? function (e) {
                    return 1 - a(1 - e);
                  }
                : Dt(a);
          return (
            (s = D / s),
            (l.config = function (n, i) {
              return e(t, n, i);
            }),
            l
          );
        },
        $t = function e(t, n) {
          void 0 === n && (n = 1.70158);
          var i = function (e) {
              return e ? --e * e * ((n + 1) * e + n) + 1 : 0;
            },
            r =
              "out" === t
                ? i
                : "in" === t
                ? function (e) {
                    return 1 - i(1 - e);
                  }
                : Dt(i);
          return (
            (r.config = function (n) {
              return e(t, n);
            }),
            r
          );
        };
      be("Linear,Quad,Cubic,Quart,Quint,Strong", function (e, t) {
        var n = t < 5 ? t + 1 : t;
        At(
          e + ",Power" + (n - 1),
          t
            ? function (e) {
                return Math.pow(e, n);
              }
            : function (e) {
                return e;
              },
          function (e) {
            return 1 - Math.pow(1 - e, n);
          },
          function (e) {
            return e < 0.5
              ? Math.pow(2 * e, n) / 2
              : 1 - Math.pow(2 * (1 - e), n) / 2;
          }
        );
      }),
        (Ct.Linear.easeNone = Ct.none = Ct.Linear.easeIn),
        At("Elastic", zt("in"), zt("out"), zt()),
        (_ = 7.5625),
        (M = 1 / (k = 2.75)),
        At(
          "Bounce",
          function (e) {
            return 1 - L(1 - e);
          },
          (L = function (e) {
            return e < M
              ? _ * e * e
              : e < 0.7272727272727273
              ? _ * Math.pow(e - 1.5 / k, 2) + 0.75
              : e < 0.9090909090909092
              ? _ * (e -= 2.25 / k) * e + 0.9375
              : _ * Math.pow(e - 2.625 / k, 2) + 0.984375;
          })
        ),
        At("Expo", function (e) {
          return e ? Math.pow(2, 10 * (e - 1)) : 0;
        }),
        At("Circ", function (e) {
          return -(I(1 - e * e) - 1);
        }),
        At("Sine", function (e) {
          return 1 === e ? 1 : 1 - j(e * z);
        }),
        At("Back", $t("in"), $t("out"), $t()),
        (Ct.SteppedEase =
          Ct.steps =
          te.SteppedEase =
            {
              config: function (e, t) {
                void 0 === e && (e = 1);
                var n = 1 / e,
                  i = e + (t ? 0 : 1),
                  r = t ? 1 : 0;
                return function (e) {
                  return (((i * Qe(0, 1 - 1e-8, e)) | 0) + r) * n;
                };
              },
            }),
        (O.ease = Ct["quad.out"]),
        be(
          "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
          function (e) {
            return (me += e + "," + e + "Params,");
          }
        );
      var It = function (e, t) {
          (this.id = $++),
            (e._gsap = this),
            (this.target = e),
            (this.harness = t),
            (this.get = t ? t.get : ye),
            (this.set = t ? t.getSetter : Zt);
        },
        jt = (function () {
          function e(e, t) {
            var n = e.parent || s;
            (this.vars = e),
              (this._delay = +e.delay || 0),
              (this._repeat = e.repeat || 0) &&
                ((this._rDelay = e.repeatDelay || 0),
                (this._yoyo = !!e.yoyo || !!e.yoyoEase)),
              (this._ts = 1),
              Xe(this, +e.duration, 1),
              (this.data = e.data),
              h || Et.wake(),
              n && Fe(n, this, t || 0 === t ? t : n._time, 1),
              e.reversed && this.reverse(),
              e.paused && this.paused(!0);
          }
          var t = e.prototype;
          return (
            (t.delay = function (e) {
              return e || 0 === e
                ? (this.parent &&
                    this.parent.smoothChildTiming &&
                    this.startTime(this._start + e - this._delay),
                  (this._delay = e),
                  this)
                : this._delay;
            }),
            (t.duration = function (e) {
              return arguments.length
                ? this.totalDuration(
                    this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e
                  )
                : this.totalDuration() && this._dur;
            }),
            (t.totalDuration = function (e) {
              if (!arguments.length) return this._tDur;
              this._dirty = 0;
              var t = this._time / this._dur || 0;
              return (
                Xe(
                  this,
                  this._repeat < 0
                    ? e
                    : (e - this._repeat * this._rDelay) / (this._repeat + 1)
                ),
                this._tTime ? Be(this, t * e + je(this)) : this
              );
            }),
            (t.totalTime = function (e, t) {
              if ((St(), !arguments.length)) return this._tTime;
              var n = this._dp;
              if (n && n.smoothChildTiming && this._ts) {
                for (Be(this, e); n.parent; )
                  n.parent._time !==
                    n._start +
                      (n._ts >= 0
                        ? n._tTime / n._ts
                        : (n.totalDuration() - n._tTime) / -n._ts) &&
                    n.totalTime(n._tTime, !0),
                    (n = n.parent);
                !this.parent &&
                  this._dp.autoRemoveChildren &&
                  ((this._ts > 0 && e < this._tDur) ||
                    (this._ts < 0 && e > 0) ||
                    (!this._tDur && !e)) &&
                  Fe(this._dp, this, this._start - this._delay);
              }
              return (
                (this._tTime !== e ||
                  (!this._dur && !t) ||
                  (this._initted && 1e-8 === Math.abs(this._zTime)) ||
                  (!e && !this._initted)) &&
                  (this._ts || (this._pTime = e), Se(this, e, t)),
                this
              );
            }),
            (t.time = function (e, t) {
              return arguments.length
                ? this.totalTime(
                    Math.min(this.totalDuration(), e + je(this)) % this._dur ||
                      (e ? this._dur : 0),
                    t
                  )
                : this._time;
            }),
            (t.totalProgress = function (e, t) {
              return arguments.length
                ? this.totalTime(this.totalDuration() * e, t)
                : this.totalDuration()
                ? Math.min(1, this._tTime / this._tDur)
                : this.ratio;
            }),
            (t.progress = function (e, t) {
              return arguments.length
                ? this.totalTime(
                    this.duration() *
                      (!this._yoyo || 1 & this.iteration() ? e : 1 - e) +
                      je(this),
                    t
                  )
                : this.duration()
                ? Math.min(1, this._time / this._dur)
                : this.ratio;
            }),
            (t.iteration = function (e, t) {
              var n = this.duration() + this._rDelay;
              return arguments.length
                ? this.totalTime(this._time + (e - 1) * n, t)
                : this._repeat
                ? Ne(this._tTime, n) + 1
                : 1;
            }),
            (t.timeScale = function (e) {
              if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
              if (this._rts === e) return this;
              var t =
                this.parent && this._ts
                  ? Re(this.parent._time, this)
                  : this._tTime;
              return (
                (this._rts = +e || 0),
                (this._ts = this._ps || -1e-8 === e ? 0 : this._rts),
                Ie(this.totalTime(Qe(-this._delay, this._tDur, t), !0))
              );
            }),
            (t.paused = function (e) {
              return arguments.length
                ? (this._ps !== e &&
                    ((this._ps = e),
                    e
                      ? ((this._pTime =
                          this._tTime ||
                          Math.max(-this._delay, this.rawTime())),
                        (this._ts = this._act = 0))
                      : (St(),
                        (this._ts = this._rts),
                        this.totalTime(
                          this.parent && !this.parent.smoothChildTiming
                            ? this.rawTime()
                            : this._tTime || this._pTime,
                          1 === this.progress() &&
                            (this._tTime -= 1e-8) &&
                            1e-8 !== Math.abs(this._zTime)
                        ))),
                  this)
                : this._ps;
            }),
            (t.startTime = function (e) {
              if (arguments.length) {
                this._start = e;
                var t = this.parent || this._dp;
                return (
                  t &&
                    (t._sort || !this.parent) &&
                    Fe(t, this, e - this._delay),
                  this
                );
              }
              return this._start;
            }),
            (t.endTime = function (e) {
              return (
                this._start +
                (W(e) ? this.totalDuration() : this.duration()) /
                  Math.abs(this._ts)
              );
            }),
            (t.rawTime = function (e) {
              var t = this.parent || this._dp;
              return t
                ? e &&
                  (!this._ts ||
                    (this._repeat && this._time && this.totalProgress() < 1))
                  ? this._tTime % (this._dur + this._rDelay)
                  : this._ts
                  ? Re(t.rawTime(e), this)
                  : this._tTime
                : this._tTime;
            }),
            (t.globalTime = function (e) {
              for (var t = this, n = arguments.length ? e : t.rawTime(); t; )
                (n = t._start + n / (t._ts || 1)), (t = t._dp);
              return n;
            }),
            (t.repeat = function (e) {
              return arguments.length
                ? ((this._repeat = e), Ve(this))
                : this._repeat;
            }),
            (t.repeatDelay = function (e) {
              return arguments.length
                ? ((this._rDelay = e), Ve(this))
                : this._rDelay;
            }),
            (t.yoyo = function (e) {
              return arguments.length ? ((this._yoyo = e), this) : this._yoyo;
            }),
            (t.seek = function (e, t) {
              return this.totalTime(Ue(this, e), W(t));
            }),
            (t.restart = function (e, t) {
              return this.play().totalTime(e ? -this._delay : 0, W(t));
            }),
            (t.play = function (e, t) {
              return null != e && this.seek(e, t), this.reversed(!1).paused(!1);
            }),
            (t.reverse = function (e, t) {
              return (
                null != e && this.seek(e || this.totalDuration(), t),
                this.reversed(!0).paused(!1)
              );
            }),
            (t.pause = function (e, t) {
              return null != e && this.seek(e, t), this.paused(!0);
            }),
            (t.resume = function () {
              return this.paused(!1);
            }),
            (t.reversed = function (e) {
              return arguments.length
                ? (!!e !== this.reversed() &&
                    this.timeScale(-this._rts || (e ? -1e-8 : 0)),
                  this)
                : this._rts < 0;
            }),
            (t.invalidate = function () {
              return (this._initted = 0), (this._zTime = -1e-8), this;
            }),
            (t.isActive = function () {
              var e,
                t = this.parent || this._dp,
                n = this._start;
              return !(
                t &&
                !(
                  this._ts &&
                  this._initted &&
                  t.isActive() &&
                  (e = t.rawTime(!0)) >= n &&
                  e < this.endTime(!0) - 1e-8
                )
              );
            }),
            (t.eventCallback = function (e, t, n) {
              var i = this.vars;
              return arguments.length > 1
                ? (t
                    ? ((i[e] = t),
                      n && (i[e + "Params"] = n),
                      "onUpdate" === e && (this._onUpdate = t))
                    : delete i[e],
                  this)
                : i[e];
            }),
            (t.then = function (e) {
              var t = this;
              return new Promise(function (n) {
                var i = H(e) ? e : _e,
                  r = function () {
                    var e = t.then;
                    (t.then = null),
                      H(i) && (i = i(t)) && (i.then || i === t) && (t.then = e),
                      n(i),
                      (t.then = e);
                  };
                (t._initted && 1 === t.totalProgress() && t._ts >= 0) ||
                (!t._tTime && t._ts < 0)
                  ? r()
                  : (t._prom = r);
              });
            }),
            (t.kill = function () {
              pt(this);
            }),
            e
          );
        })();
      ke(jt.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -1e-8,
        _prom: 0,
        _ps: !1,
        _rts: 1,
      });
      var Nt = (function (e) {
        function t(t, n) {
          var r;
          return (
            void 0 === t && (t = {}),
            ((r = e.call(this, t, n) || this).labels = {}),
            (r.smoothChildTiming = !!t.smoothChildTiming),
            (r.autoRemoveChildren = !!t.autoRemoveChildren),
            (r._sort = W(t.sortChildren)),
            r.parent && qe(r.parent, i(r)),
            t.scrollTrigger && We(i(r), t.scrollTrigger),
            r
          );
        }
        r(t, e);
        var n = t.prototype;
        return (
          (n.to = function (e, t, n) {
            return (
              new Vt(
                e,
                Te(arguments, 0, this),
                Ue(this, B(t) ? arguments[3] : n)
              ),
              this
            );
          }),
          (n.from = function (e, t, n) {
            return (
              new Vt(
                e,
                Te(arguments, 1, this),
                Ue(this, B(t) ? arguments[3] : n)
              ),
              this
            );
          }),
          (n.fromTo = function (e, t, n, i) {
            return (
              new Vt(
                e,
                Te(arguments, 2, this),
                Ue(this, B(t) ? arguments[4] : i)
              ),
              this
            );
          }),
          (n.set = function (e, t, n) {
            return (
              (t.duration = 0),
              (t.parent = this),
              Ae(t).repeatDelay || (t.repeat = 0),
              (t.immediateRender = !!t.immediateRender),
              new Vt(e, t, Ue(this, n), 1),
              this
            );
          }),
          (n.call = function (e, t, n) {
            return Fe(this, Vt.delayedCall(0, e, t), Ue(this, n));
          }),
          (n.staggerTo = function (e, t, n, i, r, s, o) {
            return (
              (n.duration = t),
              (n.stagger = n.stagger || i),
              (n.onComplete = s),
              (n.onCompleteParams = o),
              (n.parent = this),
              new Vt(e, n, Ue(this, r)),
              this
            );
          }),
          (n.staggerFrom = function (e, t, n, i, r, s, o) {
            return (
              (n.runBackwards = 1),
              (Ae(n).immediateRender = W(n.immediateRender)),
              this.staggerTo(e, t, n, i, r, s, o)
            );
          }),
          (n.staggerFromTo = function (e, t, n, i, r, s, o, a) {
            return (
              (i.startAt = n),
              (Ae(i).immediateRender = W(i.immediateRender)),
              this.staggerTo(e, t, i, r, s, o, a)
            );
          }),
          (n.render = function (e, t, n) {
            var i,
              r,
              o,
              a,
              l,
              c,
              u,
              d,
              h,
              p,
              f,
              m,
              g = this._time,
              v = this._dirty ? this.totalDuration() : this._tDur,
              y = this._dur,
              b = this !== s && e > v - 1e-8 && e >= 0 ? v : e < 1e-8 ? 0 : e,
              w = this._zTime < 0 != e < 0 && (this._initted || !y);
            if (b !== this._tTime || n || w) {
              if (
                (g !== this._time &&
                  y &&
                  ((b += this._time - g), (e += this._time - g)),
                (i = b),
                (h = this._start),
                (c = !(d = this._ts)),
                w && (y || (g = this._zTime), (e || !t) && (this._zTime = e)),
                this._repeat &&
                  ((f = this._yoyo),
                  (l = y + this._rDelay),
                  ((i = we(b % l)) > y || v === b) && (i = y),
                  (a = ~~(b / l)) && a === b / l && ((i = y), a--),
                  (p = Ne(this._tTime, l)),
                  !g && this._tTime && p !== a && (p = a),
                  f && 1 & a && ((i = y - i), (m = 1)),
                  a !== p && !this._lock))
              ) {
                var x = f && 1 & p,
                  T = x === (f && 1 & a);
                if (
                  (a < p && (x = !x),
                  (g = x ? 0 : y),
                  (this._lock = 1),
                  (this.render(g || (m ? 0 : we(a * l)), t, !y)._lock = 0),
                  !t && this.parent && ht(this, "onRepeat"),
                  this.vars.repeatRefresh &&
                    !m &&
                    (this.invalidate()._lock = 1),
                  g !== this._time || c !== !this._ts)
                )
                  return this;
                if (
                  (T &&
                    ((this._lock = 2),
                    (g = x ? y + 1e-4 : -1e-4),
                    this.render(g, !0),
                    this.vars.repeatRefresh && !m && this.invalidate()),
                  (this._lock = 0),
                  !this._ts && !c)
                )
                  return this;
                Pt(this, m);
              }
              if (
                (this._hasPause &&
                  !this._forcing &&
                  this._lock < 2 &&
                  (u = (function (e, t, n) {
                    var i;
                    if (n > t)
                      for (i = e._first; i && i._start <= n; ) {
                        if (!i._dur && "isPause" === i.data && i._start > t)
                          return i;
                        i = i._next;
                      }
                    else
                      for (i = e._last; i && i._start >= n; ) {
                        if (!i._dur && "isPause" === i.data && i._start < t)
                          return i;
                        i = i._prev;
                      }
                  })(this, we(g), we(i))) &&
                  (b -= i - (i = u._start)),
                (this._tTime = b),
                (this._time = i),
                (this._act = !d),
                this._initted ||
                  ((this._onUpdate = this.vars.onUpdate),
                  (this._initted = 1),
                  (this._zTime = e)),
                g || !i || t || ht(this, "onStart"),
                i >= g && e >= 0)
              )
                for (r = this._first; r; ) {
                  if (
                    ((o = r._next),
                    (r._act || i >= r._start) && r._ts && u !== r)
                  ) {
                    if (r.parent !== this) return this.render(e, t, n);
                    if (
                      (r.render(
                        r._ts > 0
                          ? (i - r._start) * r._ts
                          : (r._dirty ? r.totalDuration() : r._tDur) +
                              (i - r._start) * r._ts,
                        t,
                        n
                      ),
                      i !== this._time || (!this._ts && !c))
                    ) {
                      (u = 0), o && (b += this._zTime = -1e-8);
                      break;
                    }
                  }
                  r = o;
                }
              else {
                r = this._last;
                for (var E = e < 0 ? e : i; r; ) {
                  if (
                    ((o = r._prev), (r._act || E <= r._end) && r._ts && u !== r)
                  ) {
                    if (r.parent !== this) return this.render(e, t, n);
                    if (
                      (r.render(
                        r._ts > 0
                          ? (E - r._start) * r._ts
                          : (r._dirty ? r.totalDuration() : r._tDur) +
                              (E - r._start) * r._ts,
                        t,
                        n
                      ),
                      i !== this._time || (!this._ts && !c))
                    ) {
                      (u = 0), o && (b += this._zTime = E ? -1e-8 : 1e-8);
                      break;
                    }
                  }
                  r = o;
                }
              }
              if (
                u &&
                !t &&
                (this.pause(),
                (u.render(i >= g ? 0 : -1e-8)._zTime = i >= g ? 1 : -1),
                this._ts)
              )
                return (this._start = h), He(this), this.render(e, t, n);
              this._onUpdate && !t && ht(this, "onUpdate", !0),
                ((b === v && v >= this.totalDuration()) || (!b && g)) &&
                  ((h !== this._start && Math.abs(d) === Math.abs(this._ts)) ||
                    this._lock ||
                    ((e || !y) &&
                      ((b === v && this._ts > 0) || (!b && this._ts < 0)) &&
                      ze(this, 1),
                    t ||
                      (e < 0 && !g) ||
                      (!b && !g) ||
                      (ht(
                        this,
                        b === v ? "onComplete" : "onReverseComplete",
                        !0
                      ),
                      this._prom &&
                        !(b < v && this.timeScale() > 0) &&
                        this._prom())));
            }
            return this;
          }),
          (n.add = function (e, t) {
            var n = this;
            if ((B(t) || (t = Ue(this, t)), !(e instanceof jt))) {
              if (V(e))
                return (
                  e.forEach(function (e) {
                    return n.add(e, t);
                  }),
                  $e(this)
                );
              if (R(e)) return this.addLabel(e, t);
              if (!H(e)) return this;
              e = Vt.delayedCall(0, e);
            }
            return this !== e ? Fe(this, e, t) : this;
          }),
          (n.getChildren = function (e, t, n, i) {
            void 0 === e && (e = !0),
              void 0 === t && (t = !0),
              void 0 === n && (n = !0),
              void 0 === i && (i = -A);
            for (var r = [], s = this._first; s; )
              s._start >= i &&
                (s instanceof Vt
                  ? t && r.push(s)
                  : (n && r.push(s),
                    e && r.push.apply(r, s.getChildren(!0, t, n)))),
                (s = s._next);
            return r;
          }),
          (n.getById = function (e) {
            for (var t = this.getChildren(1, 1, 1), n = t.length; n--; )
              if (t[n].vars.id === e) return t[n];
          }),
          (n.remove = function (e) {
            return R(e)
              ? this.removeLabel(e)
              : H(e)
              ? this.killTweensOf(e)
              : (De(this, e),
                e === this._recent && (this._recent = this._last),
                $e(this));
          }),
          (n.totalTime = function (t, n) {
            return arguments.length
              ? ((this._forcing = 1),
                !this._dp &&
                  this._ts &&
                  (this._start = we(
                    Et.time -
                      (this._ts > 0
                        ? t / this._ts
                        : (this.totalDuration() - t) / -this._ts)
                  )),
                e.prototype.totalTime.call(this, t, n),
                (this._forcing = 0),
                this)
              : this._tTime;
          }),
          (n.addLabel = function (e, t) {
            return (this.labels[e] = Ue(this, t)), this;
          }),
          (n.removeLabel = function (e) {
            return delete this.labels[e], this;
          }),
          (n.addPause = function (e, t, n) {
            var i = Vt.delayedCall(0, t || ae, n);
            return (
              (i.data = "isPause"),
              (this._hasPause = 1),
              Fe(this, i, Ue(this, e))
            );
          }),
          (n.removePause = function (e) {
            var t = this._first;
            for (e = Ue(this, e); t; )
              t._start === e && "isPause" === t.data && ze(t), (t = t._next);
          }),
          (n.killTweensOf = function (e, t, n) {
            for (var i = this.getTweensOf(e, n), r = i.length; r--; )
              Rt !== i[r] && i[r].kill(e, t);
            return this;
          }),
          (n.getTweensOf = function (e, t) {
            for (var n, i = [], r = nt(e), s = this._first, o = B(t); s; )
              s instanceof Vt
                ? xe(s._targets, r) &&
                  (o
                    ? (!Rt || (s._initted && s._ts)) &&
                      s.globalTime(0) <= t &&
                      s.globalTime(s.totalDuration()) > t
                    : !t || s.isActive()) &&
                  i.push(s)
                : (n = s.getTweensOf(r, t)).length && i.push.apply(i, n),
                (s = s._next);
            return i;
          }),
          (n.tweenTo = function (e, t) {
            t = t || {};
            var n = this,
              i = Ue(n, e),
              r = t,
              s = r.startAt,
              o = r.onStart,
              a = r.onStartParams,
              l = Vt.to(
                n,
                ke(t, {
                  ease: "none",
                  lazy: !1,
                  time: i,
                  duration:
                    t.duration ||
                    Math.abs(
                      (i - (s && "time" in s ? s.time : n._time)) /
                        n.timeScale()
                    ) ||
                    1e-8,
                  onStart: function () {
                    n.pause();
                    var e =
                      t.duration || Math.abs((i - n._time) / n.timeScale());
                    l._dur !== e && Xe(l, e).render(l._time, !0, !0),
                      o && o.apply(l, a || []);
                  },
                })
              );
            return l;
          }),
          (n.tweenFromTo = function (e, t, n) {
            return this.tweenTo(t, ke({ startAt: { time: Ue(this, e) } }, n));
          }),
          (n.recent = function () {
            return this._recent;
          }),
          (n.nextLabel = function (e) {
            return void 0 === e && (e = this._time), dt(this, Ue(this, e));
          }),
          (n.previousLabel = function (e) {
            return void 0 === e && (e = this._time), dt(this, Ue(this, e), 1);
          }),
          (n.currentLabel = function (e) {
            return arguments.length
              ? this.seek(e, !0)
              : this.previousLabel(this._time + 1e-8);
          }),
          (n.shiftChildren = function (e, t, n) {
            void 0 === n && (n = 0);
            for (var i, r = this._first, s = this.labels; r; )
              r._start >= n && (r._start += e), (r = r._next);
            if (t) for (i in s) s[i] >= n && (s[i] += e);
            return $e(this);
          }),
          (n.invalidate = function () {
            var t = this._first;
            for (this._lock = 0; t; ) t.invalidate(), (t = t._next);
            return e.prototype.invalidate.call(this);
          }),
          (n.clear = function (e) {
            void 0 === e && (e = !0);
            for (var t, n = this._first; n; )
              (t = n._next), this.remove(n), (n = t);
            return (
              (this._time = this._tTime = this._pTime = 0),
              e && (this.labels = {}),
              $e(this)
            );
          }),
          (n.totalDuration = function (e) {
            var t,
              n,
              i,
              r,
              o = 0,
              a = this,
              l = a._last,
              c = A;
            if (arguments.length)
              return a.timeScale(
                (a._repeat < 0 ? a.duration() : a.totalDuration()) /
                  (a.reversed() ? -e : e)
              );
            if (a._dirty) {
              for (r = a.parent; l; )
                (t = l._prev),
                  l._dirty && l.totalDuration(),
                  (i = l._start) > c && a._sort && l._ts && !a._lock
                    ? ((a._lock = 1), (Fe(a, l, i - l._delay, 1)._lock = 0))
                    : (c = i),
                  i < 0 &&
                    l._ts &&
                    ((o -= i),
                    ((!r && !a._dp) || (r && r.smoothChildTiming)) &&
                      ((a._start += i / a._ts),
                      (a._time -= i),
                      (a._tTime -= i)),
                    a.shiftChildren(-i, !1, -Infinity),
                    (c = 0)),
                  (n = He(l)) > o && l._ts && (o = n),
                  (l = t);
              Xe(a, a === s && a._time > o ? a._time : o, 1), (a._dirty = 0);
            }
            return a._tDur;
          }),
          (t.updateRoot = function (e) {
            if ((s._ts && (Se(s, Re(e, s)), (u = Et.frame)), Et.frame >= pe)) {
              pe += P.autoSleep || 120;
              var t = s._first;
              if ((!t || !t._ts) && P.autoSleep && Et._listeners.length < 2) {
                for (; t && !t._ts; ) t = t._next;
                t || Et.sleep();
              }
            }
          }),
          t
        );
      })(jt);
      ke(Nt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
      var Rt,
        Ht = function (e, t, n, i, r, s, o) {
          var a,
            l,
            c,
            u,
            d,
            h,
            p,
            f,
            m = new ln(this._pt, e, t, 0, 1, tn, null, r),
            g = 0,
            v = 0;
          for (
            m.b = n,
              m.e = i,
              n += "",
              (p = ~(i += "").indexOf("random(")) && (i = ct(i)),
              s && (s((f = [n, i]), e, t), (n = f[0]), (i = f[1])),
              l = n.match(Q) || [];
            (a = Q.exec(i));

          )
            (u = a[0]),
              (d = i.substring(g, a.index)),
              c ? (c = (c + 1) % 5) : "rgba(" === d.substr(-5) && (c = 1),
              u !== l[v++] &&
                ((h = parseFloat(l[v - 1]) || 0),
                (m._pt = {
                  _next: m._pt,
                  p: d || 1 === v ? d : ",",
                  s: h,
                  c:
                    "=" === u.charAt(1)
                      ? parseFloat(u.substr(2)) * ("-" === u.charAt(0) ? -1 : 1)
                      : parseFloat(u) - h,
                  m: c && c < 4 ? Math.round : 0,
                }),
                (g = Q.lastIndex));
          return (
            (m.c = g < i.length ? i.substring(g, i.length) : ""),
            (m.fp = o),
            (J.test(i) || p) && (m.e = 0),
            (this._pt = m),
            m
          );
        },
        Bt = function (e, t, n, i, r, s, o, a, l) {
          H(i) && (i = i(r || 0, e, s));
          var c,
            u = e[t],
            d =
              "get" !== n
                ? n
                : H(u)
                ? l
                  ? e[
                      t.indexOf("set") || !H(e["get" + t.substr(3)])
                        ? t
                        : "get" + t.substr(3)
                    ](l)
                  : e[t]()
                : u,
            h = H(u) ? (l ? Kt : Ut) : Gt;
          if (
            (R(i) &&
              (~i.indexOf("random(") && (i = ct(i)),
              "=" === i.charAt(1) &&
                (i =
                  parseFloat(d) +
                  parseFloat(i.substr(2)) * ("-" === i.charAt(0) ? -1 : 1) +
                  (Ze(d) || 0))),
            d !== i)
          )
            return isNaN(d * i)
              ? (!u && !(t in e) && re(t, i),
                Ht.call(this, e, t, d, i, h, a || P.stringFilter, l))
              : ((c = new ln(
                  this._pt,
                  e,
                  t,
                  +d || 0,
                  i - (d || 0),
                  "boolean" == typeof u ? en : Jt,
                  0,
                  h
                )),
                l && (c.fp = l),
                o && c.modifier(o, this, e),
                (this._pt = c));
        },
        qt = function (e, t, n, i, r, s) {
          var o, a, l, c;
          if (
            de[e] &&
            !1 !==
              (o = new de[e]()).init(
                r,
                o.rawVars
                  ? t[e]
                  : (function (e, t, n, i, r) {
                      if (
                        (H(e) && (e = Wt(e, r, t, n, i)),
                        !F(e) || (e.style && e.nodeType) || V(e))
                      )
                        return R(e) ? Wt(e, r, t, n, i) : e;
                      var s,
                        o = {};
                      for (s in e) o[s] = Wt(e[s], r, t, n, i);
                      return o;
                    })(t[e], i, r, s, n),
                n,
                i,
                s
              ) &&
            ((n._pt = a =
              new ln(n._pt, r, e, 0, 1, o.render, o, 0, o.priority)),
            n !== d)
          )
            for (
              l = n._ptLookup[n._targets.indexOf(r)], c = o._props.length;
              c--;

            )
              l[o._props[c]] = a;
          return o;
        },
        Ft = function e(t, n) {
          var i,
            r,
            o,
            a,
            l,
            c,
            u,
            d,
            h,
            p,
            f,
            m,
            g = t.vars,
            v = g.ease,
            y = g.startAt,
            b = g.immediateRender,
            w = g.lazy,
            x = g.onUpdate,
            T = g.onUpdateParams,
            E = g.callbackScope,
            S = g.runBackwards,
            C = g.yoyoEase,
            _ = g.keyframes,
            k = g.autoRevert,
            M = t._dur,
            L = t._startAt,
            P = t._targets,
            A = t.parent,
            D = A && "nested" === A.data ? A.parent._targets : P,
            z = "auto" === t._overwrite,
            $ = t.timeline;
          if (
            ($ && (!_ || !v) && (v = "none"),
            (t._ease = Ot(v, O.ease)),
            (t._yEase = C ? Lt(Ot(!0 === C ? v : C, O.ease)) : 0),
            C &&
              t._yoyo &&
              !t._repeat &&
              ((C = t._yEase), (t._yEase = t._ease), (t._ease = C)),
            !$)
          ) {
            if (
              ((m = (d = P[0] ? ve(P[0]).harness : 0) && g[d.prop]),
              (i = Oe(g, le)),
              L && L.render(-1, !0).kill(),
              y)
            ) {
              if (
                (ze(
                  (t._startAt = Vt.set(
                    P,
                    ke(
                      {
                        data: "isStart",
                        overwrite: !1,
                        parent: A,
                        immediateRender: !0,
                        lazy: W(w),
                        startAt: null,
                        delay: 0,
                        onUpdate: x,
                        onUpdateParams: T,
                        callbackScope: E,
                        stagger: 0,
                      },
                      y
                    )
                  ))
                ),
                b)
              )
                if (n > 0) !k && (t._startAt = 0);
                else if (M && !(n < 0 && L)) return void (t._zTime = n);
            } else if (S && M)
              if (L) !k && (t._startAt = 0);
              else if (
                (n && (b = !1),
                (o = ke(
                  {
                    overwrite: !1,
                    data: "isFromStart",
                    lazy: b && W(w),
                    immediateRender: b,
                    stagger: 0,
                    parent: A,
                  },
                  i
                )),
                m && (o[d.prop] = m),
                ze((t._startAt = Vt.set(P, o))),
                b)
              ) {
                if (!n) return;
              } else e(t._startAt, 1e-8);
            for (
              t._pt = 0, w = (M && W(w)) || (w && !M), r = 0;
              r < P.length;
              r++
            ) {
              if (
                ((u = (l = P[r])._gsap || ge(P)[r]._gsap),
                (t._ptLookup[r] = p = {}),
                ue[u.id] && Ee(),
                (f = D === P ? r : D.indexOf(l)),
                d &&
                  !1 !== (h = new d()).init(l, m || i, t, f, D) &&
                  ((t._pt = a =
                    new ln(t._pt, l, h.name, 0, 1, h.render, h, 0, h.priority)),
                  h._props.forEach(function (e) {
                    p[e] = a;
                  }),
                  h.priority && (c = 1)),
                !d || m)
              )
                for (o in i)
                  de[o] && (h = qt(o, i, t, f, l, D))
                    ? h.priority && (c = 1)
                    : (p[o] = a =
                        Bt.call(t, l, o, "get", i[o], f, D, 0, g.stringFilter));
              t._op && t._op[r] && t.kill(l, t._op[r]),
                z &&
                  t._pt &&
                  ((Rt = t), s.killTweensOf(l, p, t.globalTime(0)), (Rt = 0)),
                t._pt && w && (ue[u.id] = 1);
            }
            c && an(t), t._onInit && t._onInit(t);
          }
          (t._from = !$ && !!g.runBackwards),
            (t._onUpdate = x),
            (t._initted = !!t.parent);
        },
        Wt = function (e, t, n, i, r) {
          return H(e)
            ? e.call(t, n, i, r)
            : R(e) && ~e.indexOf("random(")
            ? ct(e)
            : e;
        },
        Yt = me + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
        Xt = (Yt + ",id,stagger,delay,duration,paused,scrollTrigger").split(
          ","
        ),
        Vt = (function (e) {
          function t(t, n, r, o) {
            var a;
            "number" == typeof n && ((r.duration = n), (n = r), (r = null));
            var l,
              c,
              u,
              d,
              h,
              p,
              f,
              m,
              g = (a = e.call(this, o ? n : Ae(n), r) || this).vars,
              v = g.duration,
              y = g.delay,
              b = g.immediateRender,
              w = g.stagger,
              x = g.overwrite,
              T = g.keyframes,
              E = g.defaults,
              S = g.scrollTrigger,
              C = g.yoyoEase,
              _ = a.parent,
              k = (V(t) ? B(t[0]) : "length" in n) ? [t] : nt(t);
            if (
              ((a._targets = k.length
                ? ge(k)
                : se(
                    "GSAP target " + t + " not found. https://greensock.com",
                    !P.nullTargetWarn
                  ) || []),
              (a._ptLookup = []),
              (a._overwrite = x),
              T || w || X(v) || X(y))
            ) {
              if (
                ((n = a.vars),
                (l = a.timeline =
                  new Nt({ data: "nested", defaults: E || {} })).kill(),
                (l.parent = i(a)),
                T)
              )
                ke(l.vars.defaults, { ease: "none" }),
                  T.forEach(function (e) {
                    return l.to(k, e, ">");
                  });
              else {
                if (((d = k.length), (f = w ? rt(w) : ae), F(w)))
                  for (h in w) ~Yt.indexOf(h) && (m || (m = {}), (m[h] = w[h]));
                for (c = 0; c < d; c++) {
                  for (h in ((u = {}), n)) Xt.indexOf(h) < 0 && (u[h] = n[h]);
                  (u.stagger = 0),
                    C && (u.yoyoEase = C),
                    m && Le(u, m),
                    (p = k[c]),
                    (u.duration = +Wt(v, i(a), c, p, k)),
                    (u.delay = (+Wt(y, i(a), c, p, k) || 0) - a._delay),
                    !w &&
                      1 === d &&
                      u.delay &&
                      ((a._delay = y = u.delay),
                      (a._start += y),
                      (u.delay = 0)),
                    l.to(p, u, f(c, p, k));
                }
                l.duration() ? (v = y = 0) : (a.timeline = 0);
              }
              v || a.duration((v = l.duration()));
            } else a.timeline = 0;
            return (
              !0 === x && ((Rt = i(a)), s.killTweensOf(k), (Rt = 0)),
              _ && qe(_, i(a)),
              (b ||
                (!v &&
                  !T &&
                  a._start === we(_._time) &&
                  W(b) &&
                  (function e(t) {
                    return !t || (t._ts && e(t.parent));
                  })(i(a)) &&
                  "nested" !== _.data)) &&
                ((a._tTime = -1e-8), a.render(Math.max(0, -y))),
              S && We(i(a), S),
              a
            );
          }
          r(t, e);
          var n = t.prototype;
          return (
            (n.render = function (e, t, n) {
              var i,
                r,
                s,
                o,
                a,
                l,
                c,
                u,
                d,
                h = this._time,
                p = this._tDur,
                f = this._dur,
                m = e > p - 1e-8 && e >= 0 ? p : e < 1e-8 ? 0 : e;
              if (f) {
                if (
                  m !== this._tTime ||
                  !e ||
                  n ||
                  (this._startAt && this._zTime < 0 != e < 0)
                ) {
                  if (((i = m), (u = this.timeline), this._repeat)) {
                    if (
                      ((o = f + this._rDelay),
                      ((i = we(m % o)) > f || p === m) && (i = f),
                      (s = ~~(m / o)) && s === m / o && ((i = f), s--),
                      (l = this._yoyo && 1 & s) &&
                        ((d = this._yEase), (i = f - i)),
                      (a = Ne(this._tTime, o)),
                      i === h && !n && this._initted)
                    )
                      return this;
                    s !== a &&
                      (u && this._yEase && Pt(u, l),
                      !this.vars.repeatRefresh ||
                        l ||
                        this._lock ||
                        ((this._lock = n = 1),
                        (this.render(we(o * s), !0).invalidate()._lock = 0)));
                  }
                  if (!this._initted) {
                    if (Ye(this, e < 0 ? e : i, n, t))
                      return (this._tTime = 0), this;
                    if (f !== this._dur) return this.render(e, t, n);
                  }
                  for (
                    this._tTime = m,
                      this._time = i,
                      !this._act &&
                        this._ts &&
                        ((this._act = 1), (this._lazy = 0)),
                      this.ratio = c = (d || this._ease)(i / f),
                      this._from && (this.ratio = c = 1 - c),
                      i && !h && !t && ht(this, "onStart"),
                      r = this._pt;
                    r;

                  )
                    r.r(c, r.d), (r = r._next);
                  (u &&
                    u.render(e < 0 ? e : !i && l ? -1e-8 : u._dur * c, t, n)) ||
                    (this._startAt && (this._zTime = e)),
                    this._onUpdate &&
                      !t &&
                      (e < 0 && this._startAt && this._startAt.render(e, !0, n),
                      ht(this, "onUpdate")),
                    this._repeat &&
                      s !== a &&
                      this.vars.onRepeat &&
                      !t &&
                      this.parent &&
                      ht(this, "onRepeat"),
                    (m !== this._tDur && m) ||
                      this._tTime !== m ||
                      (e < 0 &&
                        this._startAt &&
                        !this._onUpdate &&
                        this._startAt.render(e, !0, !0),
                      (e || !f) &&
                        ((m === this._tDur && this._ts > 0) ||
                          (!m && this._ts < 0)) &&
                        ze(this, 1),
                      t ||
                        (e < 0 && !h) ||
                        (!m && !h) ||
                        (ht(
                          this,
                          m === p ? "onComplete" : "onReverseComplete",
                          !0
                        ),
                        this._prom &&
                          !(m < p && this.timeScale() > 0) &&
                          this._prom()));
                }
              } else
                !(function (e, t, n, i) {
                  var r,
                    s,
                    o = e.ratio,
                    a =
                      t < 0 ||
                      (!t &&
                        o &&
                        !e._start &&
                        e._zTime > 1e-8 &&
                        !e._dp._lock) ||
                      e._ts < 0 ||
                      e._dp._ts < 0
                        ? 0
                        : 1,
                    l = e._rDelay,
                    c = 0;
                  if (
                    (l &&
                      e._repeat &&
                      ((c = Qe(0, e._tDur, t)),
                      Ne(c, l) !== (s = Ne(e._tTime, l)) &&
                        ((o = 1 - a),
                        e.vars.repeatRefresh && e._initted && e.invalidate())),
                    e._initted || !Ye(e, t, i, n))
                  )
                    if (a !== o || i || 1e-8 === e._zTime || (!t && e._zTime)) {
                      for (
                        s = e._zTime,
                          e._zTime = t || (n ? 1e-8 : 0),
                          n || (n = t && !s),
                          e.ratio = a,
                          e._from && (a = 1 - a),
                          e._time = 0,
                          e._tTime = c,
                          n || ht(e, "onStart"),
                          r = e._pt;
                        r;

                      )
                        r.r(a, r.d), (r = r._next);
                      e._startAt && t < 0 && e._startAt.render(t, !0, !0),
                        e._onUpdate && !n && ht(e, "onUpdate"),
                        c && e._repeat && !n && e.parent && ht(e, "onRepeat"),
                        (t >= e._tDur || t < 0) &&
                          e.ratio === a &&
                          (a && ze(e, 1),
                          n ||
                            (ht(e, a ? "onComplete" : "onReverseComplete", !0),
                            e._prom && e._prom()));
                    } else e._zTime || (e._zTime = t);
                })(this, e, t, n);
              return this;
            }),
            (n.targets = function () {
              return this._targets;
            }),
            (n.invalidate = function () {
              return (
                (this._pt =
                  this._op =
                  this._startAt =
                  this._onUpdate =
                  this._act =
                  this._lazy =
                    0),
                (this._ptLookup = []),
                this.timeline && this.timeline.invalidate(),
                e.prototype.invalidate.call(this)
              );
            }),
            (n.kill = function (e, t) {
              if (
                (void 0 === t && (t = "all"),
                !(e || (t && "all" !== t)) && ((this._lazy = 0), this.parent))
              )
                return pt(this);
              if (this.timeline) {
                var n = this.timeline.totalDuration();
                return (
                  this.timeline.killTweensOf(
                    e,
                    t,
                    Rt && !0 !== Rt.vars.overwrite
                  )._first || pt(this),
                  this.parent &&
                    n !== this.timeline.totalDuration() &&
                    Xe(this, (this._dur * this.timeline._tDur) / n),
                  this
                );
              }
              var i,
                r,
                s,
                o,
                a,
                l,
                c,
                u = this._targets,
                d = e ? nt(e) : u,
                h = this._ptLookup,
                p = this._pt;
              if (
                (!t || "all" === t) &&
                (function (e, t) {
                  for (
                    var n = e.length, i = n === t.length;
                    i && n-- && e[n] === t[n];

                  );
                  return n < 0;
                })(u, d)
              )
                return pt(this);
              for (
                i = this._op = this._op || [],
                  "all" !== t &&
                    (R(t) &&
                      ((a = {}),
                      be(t, function (e) {
                        return (a[e] = 1);
                      }),
                      (t = a)),
                    (t = (function (e, t) {
                      var n,
                        i,
                        r,
                        s,
                        o = e[0] ? ve(e[0]).harness : 0,
                        a = o && o.aliases;
                      if (!a) return t;
                      for (i in ((n = Le({}, t)), a))
                        if ((i in n))
                          for (r = (s = a[i].split(",")).length; r--; )
                            n[s[r]] = n[i];
                      return n;
                    })(u, t))),
                  c = u.length;
                c--;

              )
                if (~d.indexOf(u[c]))
                  for (a in ((r = h[c]),
                  "all" === t
                    ? ((i[c] = t), (o = r), (s = {}))
                    : ((s = i[c] = i[c] || {}), (o = t)),
                  o))
                    (l = r && r[a]) &&
                      (("kill" in l.d && !0 !== l.d.kill(a)) ||
                        De(this, l, "_pt"),
                      delete r[a]),
                      "all" !== s && (s[a] = 1);
              return this._initted && !this._pt && p && pt(this), this;
            }),
            (t.to = function (e, n) {
              return new t(e, n, arguments[2]);
            }),
            (t.from = function (e, n) {
              return new t(e, Te(arguments, 1));
            }),
            (t.delayedCall = function (e, n, i, r) {
              return new t(n, 0, {
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: e,
                onComplete: n,
                onReverseComplete: n,
                onCompleteParams: i,
                onReverseCompleteParams: i,
                callbackScope: r,
              });
            }),
            (t.fromTo = function (e, n, i) {
              return new t(e, Te(arguments, 2));
            }),
            (t.set = function (e, n) {
              return (
                (n.duration = 0), n.repeatDelay || (n.repeat = 0), new t(e, n)
              );
            }),
            (t.killTweensOf = function (e, t, n) {
              return s.killTweensOf(e, t, n);
            }),
            t
          );
        })(jt);
      ke(Vt.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0,
      }),
        be("staggerTo,staggerFrom,staggerFromTo", function (e) {
          Vt[e] = function () {
            var t = new Nt(),
              n = Je.call(arguments, 0);
            return (
              n.splice("staggerFromTo" === e ? 5 : 4, 0, 0), t[e].apply(t, n)
            );
          };
        });
      var Gt = function (e, t, n) {
          return (e[t] = n);
        },
        Ut = function (e, t, n) {
          return e[t](n);
        },
        Kt = function (e, t, n, i) {
          return e[t](i.fp, n);
        },
        Qt = function (e, t, n) {
          return e.setAttribute(t, n);
        },
        Zt = function (e, t) {
          return H(e[t]) ? Ut : q(e[t]) && e.setAttribute ? Qt : Gt;
        },
        Jt = function (e, t) {
          return t.set(t.t, t.p, Math.round(1e4 * (t.s + t.c * e)) / 1e4, t);
        },
        en = function (e, t) {
          return t.set(t.t, t.p, !!(t.s + t.c * e), t);
        },
        tn = function (e, t) {
          var n = t._pt,
            i = "";
          if (!e && t.b) i = t.b;
          else if (1 === e && t.e) i = t.e;
          else {
            for (; n; )
              (i =
                n.p +
                (n.m
                  ? n.m(n.s + n.c * e)
                  : Math.round(1e4 * (n.s + n.c * e)) / 1e4) +
                i),
                (n = n._next);
            i += t.c;
          }
          t.set(t.t, t.p, i, t);
        },
        nn = function (e, t) {
          for (var n = t._pt; n; ) n.r(e, n.d), (n = n._next);
        },
        rn = function (e, t, n, i) {
          for (var r, s = this._pt; s; )
            (r = s._next), s.p === i && s.modifier(e, t, n), (s = r);
        },
        sn = function (e) {
          for (var t, n, i = this._pt; i; )
            (n = i._next),
              (i.p === e && !i.op) || i.op === e
                ? De(this, i, "_pt")
                : i.dep || (t = 1),
              (i = n);
          return !t;
        },
        on = function (e, t, n, i) {
          i.mSet(e, t, i.m.call(i.tween, n, i.mt), i);
        },
        an = function (e) {
          for (var t, n, i, r, s = e._pt; s; ) {
            for (t = s._next, n = i; n && n.pr > s.pr; ) n = n._next;
            (s._prev = n ? n._prev : r) ? (s._prev._next = s) : (i = s),
              (s._next = n) ? (n._prev = s) : (r = s),
              (s = t);
          }
          e._pt = i;
        },
        ln = (function () {
          function e(e, t, n, i, r, s, o, a, l) {
            (this.t = t),
              (this.s = i),
              (this.c = r),
              (this.p = n),
              (this.r = s || Jt),
              (this.d = o || this),
              (this.set = a || Gt),
              (this.pr = l || 0),
              (this._next = e),
              e && (e._prev = this);
          }
          return (
            (e.prototype.modifier = function (e, t, n) {
              (this.mSet = this.mSet || this.set),
                (this.set = on),
                (this.m = e),
                (this.mt = n),
                (this.tween = t);
            }),
            e
          );
        })();
      be(
        me +
          "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
        function (e) {
          return (le[e] = 1);
        }
      ),
        (te.TweenMax = te.TweenLite = Vt),
        (te.TimelineLite = te.TimelineMax = Nt),
        (s = new Nt({
          sortChildren: !1,
          defaults: O,
          autoRemoveChildren: !0,
          id: "root",
          smoothChildTiming: !0,
        })),
        (P.stringFilter = Tt);
      var cn = {
        registerPlugin: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          t.forEach(function (e) {
            return ft(e);
          });
        },
        timeline: function (e) {
          return new Nt(e);
        },
        getTweensOf: function (e, t) {
          return s.getTweensOf(e, t);
        },
        getProperty: function (e, t, n, i) {
          R(e) && (e = nt(e)[0]);
          var r = ve(e || {}).get,
            s = n ? _e : Ce;
          return (
            "native" === n && (n = ""),
            e
              ? t
                ? s(((de[t] && de[t].get) || r)(e, t, n, i))
                : function (t, n, i) {
                    return s(((de[t] && de[t].get) || r)(e, t, n, i));
                  }
              : e
          );
        },
        quickSetter: function (e, t, n) {
          if ((e = nt(e)).length > 1) {
            var i = e.map(function (e) {
                return hn.quickSetter(e, t, n);
              }),
              r = i.length;
            return function (e) {
              for (var t = r; t--; ) i[t](e);
            };
          }
          e = e[0] || {};
          var s = de[t],
            o = ve(e),
            a = (o.harness && (o.harness.aliases || {})[t]) || t,
            l = s
              ? function (t) {
                  var i = new s();
                  (d._pt = 0),
                    i.init(e, n ? t + n : t, d, 0, [e]),
                    i.render(1, i),
                    d._pt && nn(1, d);
                }
              : o.set(e, a);
          return s
            ? l
            : function (t) {
                return l(e, a, n ? t + n : t, o, 1);
              };
        },
        isTweening: function (e) {
          return s.getTweensOf(e, !0).length > 0;
        },
        defaults: function (e) {
          return e && e.ease && (e.ease = Ot(e.ease, O.ease)), Pe(O, e || {});
        },
        config: function (e) {
          return Pe(P, e || {});
        },
        registerEffect: function (e) {
          var t = e.name,
            n = e.effect,
            i = e.plugins,
            r = e.defaults,
            s = e.extendTimeline;
          (i || "").split(",").forEach(function (e) {
            return (
              e &&
              !de[e] &&
              !te[e] &&
              se(t + " effect requires " + e + " plugin.")
            );
          }),
            (he[t] = function (e, t, i) {
              return n(nt(e), ke(t || {}, r), i);
            }),
            s &&
              (Nt.prototype[t] = function (e, n, i) {
                return this.add(he[t](e, F(n) ? n : (i = n) && {}, this), i);
              });
        },
        registerEase: function (e, t) {
          Ct[e] = Ot(t);
        },
        parseEase: function (e, t) {
          return arguments.length ? Ot(e, t) : Ct;
        },
        getById: function (e) {
          return s.getById(e);
        },
        exportRoot: function (e, t) {
          void 0 === e && (e = {});
          var n,
            i,
            r = new Nt(e);
          for (
            r.smoothChildTiming = W(e.smoothChildTiming),
              s.remove(r),
              r._dp = 0,
              r._time = r._tTime = s._time,
              n = s._first;
            n;

          )
            (i = n._next),
              (!t &&
                !n._dur &&
                n instanceof Vt &&
                n.vars.onComplete === n._targets[0]) ||
                Fe(r, n, n._start - n._delay),
              (n = i);
          return Fe(s, r, 0), r;
        },
        utils: {
          wrap: function e(t, n, i) {
            var r = n - t;
            return V(t)
              ? lt(t, e(0, t.length), n)
              : Ke(i, function (e) {
                  return ((r + ((e - t) % r)) % r) + t;
                });
          },
          wrapYoyo: function e(t, n, i) {
            var r = n - t,
              s = 2 * r;
            return V(t)
              ? lt(t, e(0, t.length - 1), n)
              : Ke(i, function (e) {
                  return (
                    t + ((e = (s + ((e - t) % s)) % s || 0) > r ? s - e : e)
                  );
                });
          },
          distribute: rt,
          random: at,
          snap: ot,
          normalize: function (e, t, n) {
            return ut(e, t, 0, 1, n);
          },
          getUnit: Ze,
          clamp: function (e, t, n) {
            return Ke(n, function (n) {
              return Qe(e, t, n);
            });
          },
          splitColor: vt,
          toArray: nt,
          mapRange: ut,
          pipe: function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return function (e) {
              return t.reduce(function (e, t) {
                return t(e);
              }, e);
            };
          },
          unitize: function (e, t) {
            return function (n) {
              return e(parseFloat(n)) + (t || Ze(n));
            };
          },
          interpolate: function e(t, n, i, r) {
            var s = isNaN(t + n)
              ? 0
              : function (e) {
                  return (1 - e) * t + e * n;
                };
            if (!s) {
              var o,
                a,
                l,
                c,
                u,
                d = R(t),
                h = {};
              if ((!0 === i && (r = 1) && (i = null), d))
                (t = { p: t }), (n = { p: n });
              else if (V(t) && !V(n)) {
                for (l = [], c = t.length, u = c - 2, a = 1; a < c; a++)
                  l.push(e(t[a - 1], t[a]));
                c--,
                  (s = function (e) {
                    e *= c;
                    var t = Math.min(u, ~~e);
                    return l[t](e - t);
                  }),
                  (i = n);
              } else r || (t = Le(V(t) ? [] : {}, t));
              if (!l) {
                for (o in n) Bt.call(h, t, o, "get", n[o]);
                s = function (e) {
                  return nn(e, h) || (d ? t.p : t);
                };
              }
            }
            return Ke(i, s);
          },
          shuffle: it,
        },
        install: ie,
        effects: he,
        ticker: Et,
        updateRoot: Nt.updateRoot,
        plugins: de,
        globalTimeline: s,
        core: {
          PropTween: ln,
          globals: oe,
          Tween: Vt,
          Timeline: Nt,
          Animation: jt,
          getCache: ve,
          _removeLinkedListItem: De,
        },
      };
      be("to,from,fromTo,delayedCall,set,killTweensOf", function (e) {
        return (cn[e] = Vt[e]);
      }),
        Et.add(Nt.updateRoot),
        (d = cn.to({}, { duration: 0 }));
      var un = function (e, t) {
          for (var n = e._pt; n && n.p !== t && n.op !== t && n.fp !== t; )
            n = n._next;
          return n;
        },
        dn = function (e, t) {
          return {
            name: e,
            rawVars: 1,
            init: function (e, n, i) {
              i._onInit = function (e) {
                var i, r;
                if (
                  (R(n) &&
                    ((i = {}),
                    be(n, function (e) {
                      return (i[e] = 1);
                    }),
                    (n = i)),
                  t)
                ) {
                  for (r in ((i = {}), n)) i[r] = t(n[r]);
                  n = i;
                }
                !(function (e, t) {
                  var n,
                    i,
                    r,
                    s = e._targets;
                  for (n in t)
                    for (i = s.length; i--; )
                      (r = e._ptLookup[i][n]) &&
                        (r = r.d) &&
                        (r._pt && (r = un(r, n)),
                        r && r.modifier && r.modifier(t[n], e, s[i], n));
                })(e, n);
              };
            },
          };
        },
        hn =
          cn.registerPlugin(
            {
              name: "attr",
              init: function (e, t, n, i, r) {
                var s, o;
                for (s in t)
                  (o = this.add(
                    e,
                    "setAttribute",
                    (e.getAttribute(s) || 0) + "",
                    t[s],
                    i,
                    r,
                    0,
                    0,
                    s
                  )) && (o.op = s),
                    this._props.push(s);
              },
            },
            {
              name: "endArray",
              init: function (e, t) {
                for (var n = t.length; n--; ) this.add(e, n, e[n] || 0, t[n]);
              },
            },
            dn("roundProps", st),
            dn("modifiers"),
            dn("snap", ot)
          ) || cn;
      (Vt.version = Nt.version = hn.version = "3.4.0"), (c = 1), Y() && St();
      Ct.Power0;
      var pn = Ct.Power1,
        fn = (Ct.Power2, Ct.Power3);
      Ct.Power4,
        Ct.Linear,
        Ct.Quad,
        Ct.Cubic,
        Ct.Quart,
        Ct.Quint,
        Ct.Strong,
        Ct.Elastic,
        Ct.Back,
        Ct.SteppedEase,
        Ct.Bounce,
        Ct.Sine,
        Ct.Expo,
        Ct.Circ;
    },
    function (e, t, n) {
      var i;
      /*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */ !(function (
        t,
        n
      ) {
        "use strict";
        "object" == typeof e.exports
          ? (e.exports = t.document
              ? n(t, !0)
              : function (e) {
                  if (!e.document)
                    throw new Error("jQuery requires a window with a document");
                  return n(e);
                })
          : n(t);
      })("undefined" != typeof window ? window : this, function (n, r) {
        "use strict";
        var s = [],
          o = Object.getPrototypeOf,
          a = s.slice,
          l = s.flat
            ? function (e) {
                return s.flat.call(e);
              }
            : function (e) {
                return s.concat.apply([], e);
              },
          c = s.push,
          u = s.indexOf,
          d = {},
          h = d.toString,
          p = d.hasOwnProperty,
          f = p.toString,
          m = f.call(Object),
          g = {},
          v = function (e) {
            return "function" == typeof e && "number" != typeof e.nodeType;
          },
          y = function (e) {
            return null != e && e === e.window;
          },
          b = n.document,
          w = { type: !0, src: !0, nonce: !0, noModule: !0 };
        function x(e, t, n) {
          var i,
            r,
            s = (n = n || b).createElement("script");
          if (((s.text = e), t))
            for (i in w)
              (r = t[i] || (t.getAttribute && t.getAttribute(i))) &&
                s.setAttribute(i, r);
          n.head.appendChild(s).parentNode.removeChild(s);
        }
        function T(e) {
          return null == e
            ? e + ""
            : "object" == typeof e || "function" == typeof e
            ? d[h.call(e)] || "object"
            : typeof e;
        }
        var E = "3.5.1",
          S = function (e, t) {
            return new S.fn.init(e, t);
          };
        function C(e) {
          var t = !!e && "length" in e && e.length,
            n = T(e);
          return (
            !v(e) &&
            !y(e) &&
            ("array" === n ||
              0 === t ||
              ("number" == typeof t && 0 < t && t - 1 in e))
          );
        }
        (S.fn = S.prototype =
          {
            jquery: E,
            constructor: S,
            length: 0,
            toArray: function () {
              return a.call(this);
            },
            get: function (e) {
              return null == e
                ? a.call(this)
                : e < 0
                ? this[e + this.length]
                : this[e];
            },
            pushStack: function (e) {
              var t = S.merge(this.constructor(), e);
              return (t.prevObject = this), t;
            },
            each: function (e) {
              return S.each(this, e);
            },
            map: function (e) {
              return this.pushStack(
                S.map(this, function (t, n) {
                  return e.call(t, n, t);
                })
              );
            },
            slice: function () {
              return this.pushStack(a.apply(this, arguments));
            },
            first: function () {
              return this.eq(0);
            },
            last: function () {
              return this.eq(-1);
            },
            even: function () {
              return this.pushStack(
                S.grep(this, function (e, t) {
                  return (t + 1) % 2;
                })
              );
            },
            odd: function () {
              return this.pushStack(
                S.grep(this, function (e, t) {
                  return t % 2;
                })
              );
            },
            eq: function (e) {
              var t = this.length,
                n = +e + (e < 0 ? t : 0);
              return this.pushStack(0 <= n && n < t ? [this[n]] : []);
            },
            end: function () {
              return this.prevObject || this.constructor();
            },
            push: c,
            sort: s.sort,
            splice: s.splice,
          }),
          (S.extend = S.fn.extend =
            function () {
              var e,
                t,
                n,
                i,
                r,
                s,
                o = arguments[0] || {},
                a = 1,
                l = arguments.length,
                c = !1;
              for (
                "boolean" == typeof o &&
                  ((c = o), (o = arguments[a] || {}), a++),
                  "object" == typeof o || v(o) || (o = {}),
                  a === l && ((o = this), a--);
                a < l;
                a++
              )
                if (null != (e = arguments[a]))
                  for (t in e)
                    (i = e[t]),
                      "__proto__" !== t &&
                        o !== i &&
                        (c &&
                        i &&
                        (S.isPlainObject(i) || (r = Array.isArray(i)))
                          ? ((n = o[t]),
                            (s =
                              r && !Array.isArray(n)
                                ? []
                                : r || S.isPlainObject(n)
                                ? n
                                : {}),
                            (r = !1),
                            (o[t] = S.extend(c, s, i)))
                          : void 0 !== i && (o[t] = i));
              return o;
            }),
          S.extend({
            expando: "jQuery" + (E + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
              throw new Error(e);
            },
            noop: function () {},
            isPlainObject: function (e) {
              var t, n;
              return !(
                !e ||
                "[object Object]" !== h.call(e) ||
                ((t = o(e)) &&
                  ("function" !=
                    typeof (n = p.call(t, "constructor") && t.constructor) ||
                    f.call(n) !== m))
              );
            },
            isEmptyObject: function (e) {
              var t;
              for (t in e) return !1;
              return !0;
            },
            globalEval: function (e, t, n) {
              x(e, { nonce: t && t.nonce }, n);
            },
            each: function (e, t) {
              var n,
                i = 0;
              if (C(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
              else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
              return e;
            },
            makeArray: function (e, t) {
              var n = t || [];
              return (
                null != e &&
                  (C(Object(e))
                    ? S.merge(n, "string" == typeof e ? [e] : e)
                    : c.call(n, e)),
                n
              );
            },
            inArray: function (e, t, n) {
              return null == t ? -1 : u.call(t, e, n);
            },
            merge: function (e, t) {
              for (var n = +t.length, i = 0, r = e.length; i < n; i++)
                e[r++] = t[i];
              return (e.length = r), e;
            },
            grep: function (e, t, n) {
              for (var i = [], r = 0, s = e.length, o = !n; r < s; r++)
                !t(e[r], r) !== o && i.push(e[r]);
              return i;
            },
            map: function (e, t, n) {
              var i,
                r,
                s = 0,
                o = [];
              if (C(e))
                for (i = e.length; s < i; s++)
                  null != (r = t(e[s], s, n)) && o.push(r);
              else for (s in e) null != (r = t(e[s], s, n)) && o.push(r);
              return l(o);
            },
            guid: 1,
            support: g,
          }),
          "function" == typeof Symbol &&
            (S.fn[Symbol.iterator] = s[Symbol.iterator]),
          S.each(
            "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
              " "
            ),
            function (e, t) {
              d["[object " + t + "]"] = t.toLowerCase();
            }
          );
        var _ = (function (e) {
          var t,
            n,
            i,
            r,
            s,
            o,
            a,
            l,
            c,
            u,
            d,
            h,
            p,
            f,
            m,
            g,
            v,
            y,
            b,
            w = "sizzle" + 1 * new Date(),
            x = e.document,
            T = 0,
            E = 0,
            S = le(),
            C = le(),
            _ = le(),
            k = le(),
            M = function (e, t) {
              return e === t && (d = !0), 0;
            },
            L = {}.hasOwnProperty,
            P = [],
            O = P.pop,
            A = P.push,
            D = P.push,
            z = P.slice,
            $ = function (e, t) {
              for (var n = 0, i = e.length; n < i; n++)
                if (e[n] === t) return n;
              return -1;
            },
            I =
              "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            j = "[\\x20\\t\\r\\n\\f]",
            N =
              "(?:\\\\[\\da-fA-F]{1,6}" +
              j +
              "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            R =
              "\\[" +
              j +
              "*(" +
              N +
              ")(?:" +
              j +
              "*([*^$|!~]?=)" +
              j +
              "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
              N +
              "))|)" +
              j +
              "*\\]",
            H =
              ":(" +
              N +
              ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
              R +
              ")*)|.*)\\)|)",
            B = new RegExp(j + "+", "g"),
            q = new RegExp(
              "^" + j + "+|((?:^|[^\\\\])(?:\\\\.)*)" + j + "+$",
              "g"
            ),
            F = new RegExp("^" + j + "*," + j + "*"),
            W = new RegExp("^" + j + "*([>+~]|" + j + ")" + j + "*"),
            Y = new RegExp(j + "|>"),
            X = new RegExp(H),
            V = new RegExp("^" + N + "$"),
            G = {
              ID: new RegExp("^#(" + N + ")"),
              CLASS: new RegExp("^\\.(" + N + ")"),
              TAG: new RegExp("^(" + N + "|[*])"),
              ATTR: new RegExp("^" + R),
              PSEUDO: new RegExp("^" + H),
              CHILD: new RegExp(
                "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                  j +
                  "*(even|odd|(([+-]|)(\\d*)n|)" +
                  j +
                  "*(?:([+-]|)" +
                  j +
                  "*(\\d+)|))" +
                  j +
                  "*\\)|)",
                "i"
              ),
              bool: new RegExp("^(?:" + I + ")$", "i"),
              needsContext: new RegExp(
                "^" +
                  j +
                  "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                  j +
                  "*((?:-\\d)?\\d*)" +
                  j +
                  "*\\)|)(?=[^-]|$)",
                "i"
              ),
            },
            U = /HTML$/i,
            K = /^(?:input|select|textarea|button)$/i,
            Q = /^h\d$/i,
            Z = /^[^{]+\{\s*\[native \w/,
            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp(
              "\\\\[\\da-fA-F]{1,6}" + j + "?|\\\\([^\\r\\n\\f])",
              "g"
            ),
            ne = function (e, t) {
              var n = "0x" + e.slice(1) - 65536;
              return (
                t ||
                (n < 0
                  ? String.fromCharCode(n + 65536)
                  : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
              );
            },
            ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            re = function (e, t) {
              return t
                ? "\0" === e
                  ? "�"
                  : e.slice(0, -1) +
                    "\\" +
                    e.charCodeAt(e.length - 1).toString(16) +
                    " "
                : "\\" + e;
            },
            se = function () {
              h();
            },
            oe = we(
              function (e) {
                return (
                  !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                );
              },
              { dir: "parentNode", next: "legend" }
            );
          try {
            D.apply((P = z.call(x.childNodes)), x.childNodes),
              P[x.childNodes.length].nodeType;
          } catch (t) {
            D = {
              apply: P.length
                ? function (e, t) {
                    A.apply(e, z.call(t));
                  }
                : function (e, t) {
                    for (var n = e.length, i = 0; (e[n++] = t[i++]); );
                    e.length = n - 1;
                  },
            };
          }
          function ae(e, t, i, r) {
            var s,
              a,
              c,
              u,
              d,
              f,
              v,
              y = t && t.ownerDocument,
              x = t ? t.nodeType : 9;
            if (
              ((i = i || []),
              "string" != typeof e || !e || (1 !== x && 9 !== x && 11 !== x))
            )
              return i;
            if (!r && (h(t), (t = t || p), m)) {
              if (11 !== x && (d = J.exec(e)))
                if ((s = d[1])) {
                  if (9 === x) {
                    if (!(c = t.getElementById(s))) return i;
                    if (c.id === s) return i.push(c), i;
                  } else if (
                    y &&
                    (c = y.getElementById(s)) &&
                    b(t, c) &&
                    c.id === s
                  )
                    return i.push(c), i;
                } else {
                  if (d[2]) return D.apply(i, t.getElementsByTagName(e)), i;
                  if (
                    (s = d[3]) &&
                    n.getElementsByClassName &&
                    t.getElementsByClassName
                  )
                    return D.apply(i, t.getElementsByClassName(s)), i;
                }
              if (
                n.qsa &&
                !k[e + " "] &&
                (!g || !g.test(e)) &&
                (1 !== x || "object" !== t.nodeName.toLowerCase())
              ) {
                if (((v = e), (y = t), 1 === x && (Y.test(e) || W.test(e)))) {
                  for (
                    ((y = (ee.test(e) && ve(t.parentNode)) || t) === t &&
                      n.scope) ||
                      ((u = t.getAttribute("id"))
                        ? (u = u.replace(ie, re))
                        : t.setAttribute("id", (u = w))),
                      a = (f = o(e)).length;
                    a--;

                  )
                    f[a] = (u ? "#" + u : ":scope") + " " + be(f[a]);
                  v = f.join(",");
                }
                try {
                  return D.apply(i, y.querySelectorAll(v)), i;
                } catch (t) {
                  k(e, !0);
                } finally {
                  u === w && t.removeAttribute("id");
                }
              }
            }
            return l(e.replace(q, "$1"), t, i, r);
          }
          function le() {
            var e = [];
            return function t(n, r) {
              return (
                e.push(n + " ") > i.cacheLength && delete t[e.shift()],
                (t[n + " "] = r)
              );
            };
          }
          function ce(e) {
            return (e[w] = !0), e;
          }
          function ue(e) {
            var t = p.createElement("fieldset");
            try {
              return !!e(t);
            } catch (e) {
              return !1;
            } finally {
              t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
          }
          function de(e, t) {
            for (var n = e.split("|"), r = n.length; r--; )
              i.attrHandle[n[r]] = t;
          }
          function he(e, t) {
            var n = t && e,
              i =
                n &&
                1 === e.nodeType &&
                1 === t.nodeType &&
                e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
            return e ? 1 : -1;
          }
          function pe(e) {
            return function (t) {
              return "input" === t.nodeName.toLowerCase() && t.type === e;
            };
          }
          function fe(e) {
            return function (t) {
              var n = t.nodeName.toLowerCase();
              return ("input" === n || "button" === n) && t.type === e;
            };
          }
          function me(e) {
            return function (t) {
              return "form" in t
                ? t.parentNode && !1 === t.disabled
                  ? "label" in t
                    ? "label" in t.parentNode
                      ? t.parentNode.disabled === e
                      : t.disabled === e
                    : t.isDisabled === e || (t.isDisabled !== !e && oe(t) === e)
                  : t.disabled === e
                : "label" in t && t.disabled === e;
            };
          }
          function ge(e) {
            return ce(function (t) {
              return (
                (t = +t),
                ce(function (n, i) {
                  for (var r, s = e([], n.length, t), o = s.length; o--; )
                    n[(r = s[o])] && (n[r] = !(i[r] = n[r]));
                })
              );
            });
          }
          function ve(e) {
            return e && void 0 !== e.getElementsByTagName && e;
          }
          for (t in ((n = ae.support = {}),
          (s = ae.isXML =
            function (e) {
              var t = e.namespaceURI,
                n = (e.ownerDocument || e).documentElement;
              return !U.test(t || (n && n.nodeName) || "HTML");
            }),
          (h = ae.setDocument =
            function (e) {
              var t,
                r,
                o = e ? e.ownerDocument || e : x;
              return (
                o != p &&
                  9 === o.nodeType &&
                  o.documentElement &&
                  ((f = (p = o).documentElement),
                  (m = !s(p)),
                  x != p &&
                    (r = p.defaultView) &&
                    r.top !== r &&
                    (r.addEventListener
                      ? r.addEventListener("unload", se, !1)
                      : r.attachEvent && r.attachEvent("onunload", se)),
                  (n.scope = ue(function (e) {
                    return (
                      f.appendChild(e).appendChild(p.createElement("div")),
                      void 0 !== e.querySelectorAll &&
                        !e.querySelectorAll(":scope fieldset div").length
                    );
                  })),
                  (n.attributes = ue(function (e) {
                    return (e.className = "i"), !e.getAttribute("className");
                  })),
                  (n.getElementsByTagName = ue(function (e) {
                    return (
                      e.appendChild(p.createComment("")),
                      !e.getElementsByTagName("*").length
                    );
                  })),
                  (n.getElementsByClassName = Z.test(p.getElementsByClassName)),
                  (n.getById = ue(function (e) {
                    return (
                      (f.appendChild(e).id = w),
                      !p.getElementsByName || !p.getElementsByName(w).length
                    );
                  })),
                  n.getById
                    ? ((i.filter.ID = function (e) {
                        var t = e.replace(te, ne);
                        return function (e) {
                          return e.getAttribute("id") === t;
                        };
                      }),
                      (i.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && m) {
                          var n = t.getElementById(e);
                          return n ? [n] : [];
                        }
                      }))
                    : ((i.filter.ID = function (e) {
                        var t = e.replace(te, ne);
                        return function (e) {
                          var n =
                            void 0 !== e.getAttributeNode &&
                            e.getAttributeNode("id");
                          return n && n.value === t;
                        };
                      }),
                      (i.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && m) {
                          var n,
                            i,
                            r,
                            s = t.getElementById(e);
                          if (s) {
                            if ((n = s.getAttributeNode("id")) && n.value === e)
                              return [s];
                            for (
                              r = t.getElementsByName(e), i = 0;
                              (s = r[i++]);

                            )
                              if (
                                (n = s.getAttributeNode("id")) &&
                                n.value === e
                              )
                                return [s];
                          }
                          return [];
                        }
                      })),
                  (i.find.TAG = n.getElementsByTagName
                    ? function (e, t) {
                        return void 0 !== t.getElementsByTagName
                          ? t.getElementsByTagName(e)
                          : n.qsa
                          ? t.querySelectorAll(e)
                          : void 0;
                      }
                    : function (e, t) {
                        var n,
                          i = [],
                          r = 0,
                          s = t.getElementsByTagName(e);
                        if ("*" === e) {
                          for (; (n = s[r++]); ) 1 === n.nodeType && i.push(n);
                          return i;
                        }
                        return s;
                      }),
                  (i.find.CLASS =
                    n.getElementsByClassName &&
                    function (e, t) {
                      if (void 0 !== t.getElementsByClassName && m)
                        return t.getElementsByClassName(e);
                    }),
                  (v = []),
                  (g = []),
                  (n.qsa = Z.test(p.querySelectorAll)) &&
                    (ue(function (e) {
                      var t;
                      (f.appendChild(e).innerHTML =
                        "<a id='" +
                        w +
                        "'></a><select id='" +
                        w +
                        "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                        e.querySelectorAll("[msallowcapture^='']").length &&
                          g.push("[*^$]=" + j + "*(?:''|\"\")"),
                        e.querySelectorAll("[selected]").length ||
                          g.push("\\[" + j + "*(?:value|" + I + ")"),
                        e.querySelectorAll("[id~=" + w + "-]").length ||
                          g.push("~="),
                        (t = p.createElement("input")).setAttribute("name", ""),
                        e.appendChild(t),
                        e.querySelectorAll("[name='']").length ||
                          g.push(
                            "\\[" + j + "*name" + j + "*=" + j + "*(?:''|\"\")"
                          ),
                        e.querySelectorAll(":checked").length ||
                          g.push(":checked"),
                        e.querySelectorAll("a#" + w + "+*").length ||
                          g.push(".#.+[+~]"),
                        e.querySelectorAll("\\\f"),
                        g.push("[\\r\\n\\f]");
                    }),
                    ue(function (e) {
                      e.innerHTML =
                        "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                      var t = p.createElement("input");
                      t.setAttribute("type", "hidden"),
                        e.appendChild(t).setAttribute("name", "D"),
                        e.querySelectorAll("[name=d]").length &&
                          g.push("name" + j + "*[*^$|!~]?="),
                        2 !== e.querySelectorAll(":enabled").length &&
                          g.push(":enabled", ":disabled"),
                        (f.appendChild(e).disabled = !0),
                        2 !== e.querySelectorAll(":disabled").length &&
                          g.push(":enabled", ":disabled"),
                        e.querySelectorAll("*,:x"),
                        g.push(",.*:");
                    })),
                  (n.matchesSelector = Z.test(
                    (y =
                      f.matches ||
                      f.webkitMatchesSelector ||
                      f.mozMatchesSelector ||
                      f.oMatchesSelector ||
                      f.msMatchesSelector)
                  )) &&
                    ue(function (e) {
                      (n.disconnectedMatch = y.call(e, "*")),
                        y.call(e, "[s!='']:x"),
                        v.push("!=", H);
                    }),
                  (g = g.length && new RegExp(g.join("|"))),
                  (v = v.length && new RegExp(v.join("|"))),
                  (t = Z.test(f.compareDocumentPosition)),
                  (b =
                    t || Z.test(f.contains)
                      ? function (e, t) {
                          var n = 9 === e.nodeType ? e.documentElement : e,
                            i = t && t.parentNode;
                          return (
                            e === i ||
                            !(
                              !i ||
                              1 !== i.nodeType ||
                              !(n.contains
                                ? n.contains(i)
                                : e.compareDocumentPosition &&
                                  16 & e.compareDocumentPosition(i))
                            )
                          );
                        }
                      : function (e, t) {
                          if (t)
                            for (; (t = t.parentNode); ) if (t === e) return !0;
                          return !1;
                        }),
                  (M = t
                    ? function (e, t) {
                        if (e === t) return (d = !0), 0;
                        var i =
                          !e.compareDocumentPosition -
                          !t.compareDocumentPosition;
                        return (
                          i ||
                          (1 &
                            (i =
                              (e.ownerDocument || e) == (t.ownerDocument || t)
                                ? e.compareDocumentPosition(t)
                                : 1) ||
                          (!n.sortDetached &&
                            t.compareDocumentPosition(e) === i)
                            ? e == p || (e.ownerDocument == x && b(x, e))
                              ? -1
                              : t == p || (t.ownerDocument == x && b(x, t))
                              ? 1
                              : u
                              ? $(u, e) - $(u, t)
                              : 0
                            : 4 & i
                            ? -1
                            : 1)
                        );
                      }
                    : function (e, t) {
                        if (e === t) return (d = !0), 0;
                        var n,
                          i = 0,
                          r = e.parentNode,
                          s = t.parentNode,
                          o = [e],
                          a = [t];
                        if (!r || !s)
                          return e == p
                            ? -1
                            : t == p
                            ? 1
                            : r
                            ? -1
                            : s
                            ? 1
                            : u
                            ? $(u, e) - $(u, t)
                            : 0;
                        if (r === s) return he(e, t);
                        for (n = e; (n = n.parentNode); ) o.unshift(n);
                        for (n = t; (n = n.parentNode); ) a.unshift(n);
                        for (; o[i] === a[i]; ) i++;
                        return i
                          ? he(o[i], a[i])
                          : o[i] == x
                          ? -1
                          : a[i] == x
                          ? 1
                          : 0;
                      })),
                p
              );
            }),
          (ae.matches = function (e, t) {
            return ae(e, null, null, t);
          }),
          (ae.matchesSelector = function (e, t) {
            if (
              (h(e),
              n.matchesSelector &&
                m &&
                !k[t + " "] &&
                (!v || !v.test(t)) &&
                (!g || !g.test(t)))
            )
              try {
                var i = y.call(e, t);
                if (
                  i ||
                  n.disconnectedMatch ||
                  (e.document && 11 !== e.document.nodeType)
                )
                  return i;
              } catch (e) {
                k(t, !0);
              }
            return 0 < ae(t, p, null, [e]).length;
          }),
          (ae.contains = function (e, t) {
            return (e.ownerDocument || e) != p && h(e), b(e, t);
          }),
          (ae.attr = function (e, t) {
            (e.ownerDocument || e) != p && h(e);
            var r = i.attrHandle[t.toLowerCase()],
              s =
                r && L.call(i.attrHandle, t.toLowerCase())
                  ? r(e, t, !m)
                  : void 0;
            return void 0 !== s
              ? s
              : n.attributes || !m
              ? e.getAttribute(t)
              : (s = e.getAttributeNode(t)) && s.specified
              ? s.value
              : null;
          }),
          (ae.escape = function (e) {
            return (e + "").replace(ie, re);
          }),
          (ae.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
          }),
          (ae.uniqueSort = function (e) {
            var t,
              i = [],
              r = 0,
              s = 0;
            if (
              ((d = !n.detectDuplicates),
              (u = !n.sortStable && e.slice(0)),
              e.sort(M),
              d)
            ) {
              for (; (t = e[s++]); ) t === e[s] && (r = i.push(s));
              for (; r--; ) e.splice(i[r], 1);
            }
            return (u = null), e;
          }),
          (r = ae.getText =
            function (e) {
              var t,
                n = "",
                i = 0,
                s = e.nodeType;
              if (s) {
                if (1 === s || 9 === s || 11 === s) {
                  if ("string" == typeof e.textContent) return e.textContent;
                  for (e = e.firstChild; e; e = e.nextSibling) n += r(e);
                } else if (3 === s || 4 === s) return e.nodeValue;
              } else for (; (t = e[i++]); ) n += r(t);
              return n;
            }),
          ((i = ae.selectors =
            {
              cacheLength: 50,
              createPseudo: ce,
              match: G,
              attrHandle: {},
              find: {},
              relative: {
                ">": { dir: "parentNode", first: !0 },
                " ": { dir: "parentNode" },
                "+": { dir: "previousSibling", first: !0 },
                "~": { dir: "previousSibling" },
              },
              preFilter: {
                ATTR: function (e) {
                  return (
                    (e[1] = e[1].replace(te, ne)),
                    (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                  );
                },
                CHILD: function (e) {
                  return (
                    (e[1] = e[1].toLowerCase()),
                    "nth" === e[1].slice(0, 3)
                      ? (e[3] || ae.error(e[0]),
                        (e[4] = +(e[4]
                          ? e[5] + (e[6] || 1)
                          : 2 * ("even" === e[3] || "odd" === e[3]))),
                        (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                      : e[3] && ae.error(e[0]),
                    e
                  );
                },
                PSEUDO: function (e) {
                  var t,
                    n = !e[6] && e[2];
                  return G.CHILD.test(e[0])
                    ? null
                    : (e[3]
                        ? (e[2] = e[4] || e[5] || "")
                        : n &&
                          X.test(n) &&
                          (t = o(n, !0)) &&
                          (t = n.indexOf(")", n.length - t) - n.length) &&
                          ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                      e.slice(0, 3));
                },
              },
              filter: {
                TAG: function (e) {
                  var t = e.replace(te, ne).toLowerCase();
                  return "*" === e
                    ? function () {
                        return !0;
                      }
                    : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t;
                      };
                },
                CLASS: function (e) {
                  var t = S[e + " "];
                  return (
                    t ||
                    ((t = new RegExp("(^|" + j + ")" + e + "(" + j + "|$)")) &&
                      S(e, function (e) {
                        return t.test(
                          ("string" == typeof e.className && e.className) ||
                            (void 0 !== e.getAttribute &&
                              e.getAttribute("class")) ||
                            ""
                        );
                      }))
                  );
                },
                ATTR: function (e, t, n) {
                  return function (i) {
                    var r = ae.attr(i, e);
                    return null == r
                      ? "!=" === t
                      : !t ||
                          ((r += ""),
                          "=" === t
                            ? r === n
                            : "!=" === t
                            ? r !== n
                            : "^=" === t
                            ? n && 0 === r.indexOf(n)
                            : "*=" === t
                            ? n && -1 < r.indexOf(n)
                            : "$=" === t
                            ? n && r.slice(-n.length) === n
                            : "~=" === t
                            ? -1 < (" " + r.replace(B, " ") + " ").indexOf(n)
                            : "|=" === t &&
                              (r === n ||
                                r.slice(0, n.length + 1) === n + "-"));
                  };
                },
                CHILD: function (e, t, n, i, r) {
                  var s = "nth" !== e.slice(0, 3),
                    o = "last" !== e.slice(-4),
                    a = "of-type" === t;
                  return 1 === i && 0 === r
                    ? function (e) {
                        return !!e.parentNode;
                      }
                    : function (t, n, l) {
                        var c,
                          u,
                          d,
                          h,
                          p,
                          f,
                          m = s !== o ? "nextSibling" : "previousSibling",
                          g = t.parentNode,
                          v = a && t.nodeName.toLowerCase(),
                          y = !l && !a,
                          b = !1;
                        if (g) {
                          if (s) {
                            for (; m; ) {
                              for (h = t; (h = h[m]); )
                                if (
                                  a
                                    ? h.nodeName.toLowerCase() === v
                                    : 1 === h.nodeType
                                )
                                  return !1;
                              f = m = "only" === e && !f && "nextSibling";
                            }
                            return !0;
                          }
                          if (
                            ((f = [o ? g.firstChild : g.lastChild]), o && y)
                          ) {
                            for (
                              b =
                                (p =
                                  (c =
                                    (u =
                                      (d = (h = g)[w] || (h[w] = {}))[
                                        h.uniqueID
                                      ] || (d[h.uniqueID] = {}))[e] ||
                                    [])[0] === T && c[1]) && c[2],
                                h = p && g.childNodes[p];
                              (h =
                                (++p && h && h[m]) || (b = p = 0) || f.pop());

                            )
                              if (1 === h.nodeType && ++b && h === t) {
                                u[e] = [T, p, b];
                                break;
                              }
                          } else if (
                            (y &&
                              (b = p =
                                (c =
                                  (u =
                                    (d = (h = t)[w] || (h[w] = {}))[
                                      h.uniqueID
                                    ] || (d[h.uniqueID] = {}))[e] || [])[0] ===
                                  T && c[1]),
                            !1 === b)
                          )
                            for (
                              ;
                              (h =
                                (++p && h && h[m]) || (b = p = 0) || f.pop()) &&
                              ((a
                                ? h.nodeName.toLowerCase() !== v
                                : 1 !== h.nodeType) ||
                                !++b ||
                                (y &&
                                  ((u =
                                    (d = h[w] || (h[w] = {}))[h.uniqueID] ||
                                    (d[h.uniqueID] = {}))[e] = [T, b]),
                                h !== t));

                            );
                          return (b -= r) === i || (b % i == 0 && 0 <= b / i);
                        }
                      };
                },
                PSEUDO: function (e, t) {
                  var n,
                    r =
                      i.pseudos[e] ||
                      i.setFilters[e.toLowerCase()] ||
                      ae.error("unsupported pseudo: " + e);
                  return r[w]
                    ? r(t)
                    : 1 < r.length
                    ? ((n = [e, e, "", t]),
                      i.setFilters.hasOwnProperty(e.toLowerCase())
                        ? ce(function (e, n) {
                            for (var i, s = r(e, t), o = s.length; o--; )
                              e[(i = $(e, s[o]))] = !(n[i] = s[o]);
                          })
                        : function (e) {
                            return r(e, 0, n);
                          })
                    : r;
                },
              },
              pseudos: {
                not: ce(function (e) {
                  var t = [],
                    n = [],
                    i = a(e.replace(q, "$1"));
                  return i[w]
                    ? ce(function (e, t, n, r) {
                        for (var s, o = i(e, null, r, []), a = e.length; a--; )
                          (s = o[a]) && (e[a] = !(t[a] = s));
                      })
                    : function (e, r, s) {
                        return (
                          (t[0] = e), i(t, null, s, n), (t[0] = null), !n.pop()
                        );
                      };
                }),
                has: ce(function (e) {
                  return function (t) {
                    return 0 < ae(e, t).length;
                  };
                }),
                contains: ce(function (e) {
                  return (
                    (e = e.replace(te, ne)),
                    function (t) {
                      return -1 < (t.textContent || r(t)).indexOf(e);
                    }
                  );
                }),
                lang: ce(function (e) {
                  return (
                    V.test(e || "") || ae.error("unsupported lang: " + e),
                    (e = e.replace(te, ne).toLowerCase()),
                    function (t) {
                      var n;
                      do {
                        if (
                          (n = m
                            ? t.lang
                            : t.getAttribute("xml:lang") ||
                              t.getAttribute("lang"))
                        )
                          return (
                            (n = n.toLowerCase()) === e ||
                            0 === n.indexOf(e + "-")
                          );
                      } while ((t = t.parentNode) && 1 === t.nodeType);
                      return !1;
                    }
                  );
                }),
                target: function (t) {
                  var n = e.location && e.location.hash;
                  return n && n.slice(1) === t.id;
                },
                root: function (e) {
                  return e === f;
                },
                focus: function (e) {
                  return (
                    e === p.activeElement &&
                    (!p.hasFocus || p.hasFocus()) &&
                    !!(e.type || e.href || ~e.tabIndex)
                  );
                },
                enabled: me(!1),
                disabled: me(!0),
                checked: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return (
                    ("input" === t && !!e.checked) ||
                    ("option" === t && !!e.selected)
                  );
                },
                selected: function (e) {
                  return (
                    e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                  );
                },
                empty: function (e) {
                  for (e = e.firstChild; e; e = e.nextSibling)
                    if (e.nodeType < 6) return !1;
                  return !0;
                },
                parent: function (e) {
                  return !i.pseudos.empty(e);
                },
                header: function (e) {
                  return Q.test(e.nodeName);
                },
                input: function (e) {
                  return K.test(e.nodeName);
                },
                button: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return (
                    ("input" === t && "button" === e.type) || "button" === t
                  );
                },
                text: function (e) {
                  var t;
                  return (
                    "input" === e.nodeName.toLowerCase() &&
                    "text" === e.type &&
                    (null == (t = e.getAttribute("type")) ||
                      "text" === t.toLowerCase())
                  );
                },
                first: ge(function () {
                  return [0];
                }),
                last: ge(function (e, t) {
                  return [t - 1];
                }),
                eq: ge(function (e, t, n) {
                  return [n < 0 ? n + t : n];
                }),
                even: ge(function (e, t) {
                  for (var n = 0; n < t; n += 2) e.push(n);
                  return e;
                }),
                odd: ge(function (e, t) {
                  for (var n = 1; n < t; n += 2) e.push(n);
                  return e;
                }),
                lt: ge(function (e, t, n) {
                  for (var i = n < 0 ? n + t : t < n ? t : n; 0 <= --i; )
                    e.push(i);
                  return e;
                }),
                gt: ge(function (e, t, n) {
                  for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
                  return e;
                }),
              },
            }).pseudos.nth = i.pseudos.eq),
          { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            i.pseudos[t] = pe(t);
          for (t in { submit: !0, reset: !0 }) i.pseudos[t] = fe(t);
          function ye() {}
          function be(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i;
          }
          function we(e, t, n) {
            var i = t.dir,
              r = t.next,
              s = r || i,
              o = n && "parentNode" === s,
              a = E++;
            return t.first
              ? function (t, n, r) {
                  for (; (t = t[i]); )
                    if (1 === t.nodeType || o) return e(t, n, r);
                  return !1;
                }
              : function (t, n, l) {
                  var c,
                    u,
                    d,
                    h = [T, a];
                  if (l) {
                    for (; (t = t[i]); )
                      if ((1 === t.nodeType || o) && e(t, n, l)) return !0;
                  } else
                    for (; (t = t[i]); )
                      if (1 === t.nodeType || o)
                        if (
                          ((u =
                            (d = t[w] || (t[w] = {}))[t.uniqueID] ||
                            (d[t.uniqueID] = {})),
                          r && r === t.nodeName.toLowerCase())
                        )
                          t = t[i] || t;
                        else {
                          if ((c = u[s]) && c[0] === T && c[1] === a)
                            return (h[2] = c[2]);
                          if (((u[s] = h)[2] = e(t, n, l))) return !0;
                        }
                  return !1;
                };
          }
          function xe(e) {
            return 1 < e.length
              ? function (t, n, i) {
                  for (var r = e.length; r--; ) if (!e[r](t, n, i)) return !1;
                  return !0;
                }
              : e[0];
          }
          function Te(e, t, n, i, r) {
            for (var s, o = [], a = 0, l = e.length, c = null != t; a < l; a++)
              (s = e[a]) && ((n && !n(s, i, r)) || (o.push(s), c && t.push(a)));
            return o;
          }
          function Ee(e, t, n, i, r, s) {
            return (
              i && !i[w] && (i = Ee(i)),
              r && !r[w] && (r = Ee(r, s)),
              ce(function (s, o, a, l) {
                var c,
                  u,
                  d,
                  h = [],
                  p = [],
                  f = o.length,
                  m =
                    s ||
                    (function (e, t, n) {
                      for (var i = 0, r = t.length; i < r; i++) ae(e, t[i], n);
                      return n;
                    })(t || "*", a.nodeType ? [a] : a, []),
                  g = !e || (!s && t) ? m : Te(m, h, e, a, l),
                  v = n ? (r || (s ? e : f || i) ? [] : o) : g;
                if ((n && n(g, v, a, l), i))
                  for (c = Te(v, p), i(c, [], a, l), u = c.length; u--; )
                    (d = c[u]) && (v[p[u]] = !(g[p[u]] = d));
                if (s) {
                  if (r || e) {
                    if (r) {
                      for (c = [], u = v.length; u--; )
                        (d = v[u]) && c.push((g[u] = d));
                      r(null, (v = []), c, l);
                    }
                    for (u = v.length; u--; )
                      (d = v[u]) &&
                        -1 < (c = r ? $(s, d) : h[u]) &&
                        (s[c] = !(o[c] = d));
                  }
                } else (v = Te(v === o ? v.splice(f, v.length) : v)), r ? r(null, o, v, l) : D.apply(o, v);
              })
            );
          }
          function Se(e) {
            for (
              var t,
                n,
                r,
                s = e.length,
                o = i.relative[e[0].type],
                a = o || i.relative[" "],
                l = o ? 1 : 0,
                u = we(
                  function (e) {
                    return e === t;
                  },
                  a,
                  !0
                ),
                d = we(
                  function (e) {
                    return -1 < $(t, e);
                  },
                  a,
                  !0
                ),
                h = [
                  function (e, n, i) {
                    var r =
                      (!o && (i || n !== c)) ||
                      ((t = n).nodeType ? u(e, n, i) : d(e, n, i));
                    return (t = null), r;
                  },
                ];
              l < s;
              l++
            )
              if ((n = i.relative[e[l].type])) h = [we(xe(h), n)];
              else {
                if ((n = i.filter[e[l].type].apply(null, e[l].matches))[w]) {
                  for (r = ++l; r < s && !i.relative[e[r].type]; r++);
                  return Ee(
                    1 < l && xe(h),
                    1 < l &&
                      be(
                        e
                          .slice(0, l - 1)
                          .concat({ value: " " === e[l - 2].type ? "*" : "" })
                      ).replace(q, "$1"),
                    n,
                    l < r && Se(e.slice(l, r)),
                    r < s && Se((e = e.slice(r))),
                    r < s && be(e)
                  );
                }
                h.push(n);
              }
            return xe(h);
          }
          return (
            (ye.prototype = i.filters = i.pseudos),
            (i.setFilters = new ye()),
            (o = ae.tokenize =
              function (e, t) {
                var n,
                  r,
                  s,
                  o,
                  a,
                  l,
                  c,
                  u = C[e + " "];
                if (u) return t ? 0 : u.slice(0);
                for (a = e, l = [], c = i.preFilter; a; ) {
                  for (o in ((n && !(r = F.exec(a))) ||
                    (r && (a = a.slice(r[0].length) || a), l.push((s = []))),
                  (n = !1),
                  (r = W.exec(a)) &&
                    ((n = r.shift()),
                    s.push({ value: n, type: r[0].replace(q, " ") }),
                    (a = a.slice(n.length))),
                  i.filter))
                    !(r = G[o].exec(a)) ||
                      (c[o] && !(r = c[o](r))) ||
                      ((n = r.shift()),
                      s.push({ value: n, type: o, matches: r }),
                      (a = a.slice(n.length)));
                  if (!n) break;
                }
                return t ? a.length : a ? ae.error(e) : C(e, l).slice(0);
              }),
            (a = ae.compile =
              function (e, t) {
                var n,
                  r,
                  s,
                  a,
                  l,
                  u,
                  d = [],
                  f = [],
                  g = _[e + " "];
                if (!g) {
                  for (t || (t = o(e)), n = t.length; n--; )
                    (g = Se(t[n]))[w] ? d.push(g) : f.push(g);
                  (g = _(
                    e,
                    ((r = f),
                    (a = 0 < (s = d).length),
                    (l = 0 < r.length),
                    (u = function (e, t, n, o, u) {
                      var d,
                        f,
                        g,
                        v = 0,
                        y = "0",
                        b = e && [],
                        w = [],
                        x = c,
                        E = e || (l && i.find.TAG("*", u)),
                        S = (T += null == x ? 1 : Math.random() || 0.1),
                        C = E.length;
                      for (
                        u && (c = t == p || t || u);
                        y !== C && null != (d = E[y]);
                        y++
                      ) {
                        if (l && d) {
                          for (
                            f = 0,
                              t || d.ownerDocument == p || (h(d), (n = !m));
                            (g = r[f++]);

                          )
                            if (g(d, t || p, n)) {
                              o.push(d);
                              break;
                            }
                          u && (T = S);
                        }
                        a && ((d = !g && d) && v--, e && b.push(d));
                      }
                      if (((v += y), a && y !== v)) {
                        for (f = 0; (g = s[f++]); ) g(b, w, t, n);
                        if (e) {
                          if (0 < v)
                            for (; y--; ) b[y] || w[y] || (w[y] = O.call(o));
                          w = Te(w);
                        }
                        D.apply(o, w),
                          u &&
                            !e &&
                            0 < w.length &&
                            1 < v + s.length &&
                            ae.uniqueSort(o);
                      }
                      return u && ((T = S), (c = x)), b;
                    }),
                    a ? ce(u) : u)
                  )).selector = e;
                }
                return g;
              }),
            (l = ae.select =
              function (e, t, n, r) {
                var s,
                  l,
                  c,
                  u,
                  d,
                  h = "function" == typeof e && e,
                  p = !r && o((e = h.selector || e));
                if (((n = n || []), 1 === p.length)) {
                  if (
                    2 < (l = p[0] = p[0].slice(0)).length &&
                    "ID" === (c = l[0]).type &&
                    9 === t.nodeType &&
                    m &&
                    i.relative[l[1].type]
                  ) {
                    if (
                      !(t = (i.find.ID(c.matches[0].replace(te, ne), t) ||
                        [])[0])
                    )
                      return n;
                    h && (t = t.parentNode),
                      (e = e.slice(l.shift().value.length));
                  }
                  for (
                    s = G.needsContext.test(e) ? 0 : l.length;
                    s-- && ((c = l[s]), !i.relative[(u = c.type)]);

                  )
                    if (
                      (d = i.find[u]) &&
                      (r = d(
                        c.matches[0].replace(te, ne),
                        (ee.test(l[0].type) && ve(t.parentNode)) || t
                      ))
                    ) {
                      if ((l.splice(s, 1), !(e = r.length && be(l))))
                        return D.apply(n, r), n;
                      break;
                    }
                }
                return (
                  (h || a(e, p))(
                    r,
                    t,
                    !m,
                    n,
                    !t || (ee.test(e) && ve(t.parentNode)) || t
                  ),
                  n
                );
              }),
            (n.sortStable = w.split("").sort(M).join("") === w),
            (n.detectDuplicates = !!d),
            h(),
            (n.sortDetached = ue(function (e) {
              return 1 & e.compareDocumentPosition(p.createElement("fieldset"));
            })),
            ue(function (e) {
              return (
                (e.innerHTML = "<a href='#'></a>"),
                "#" === e.firstChild.getAttribute("href")
              );
            }) ||
              de("type|href|height|width", function (e, t, n) {
                if (!n)
                  return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
              }),
            (n.attributes &&
              ue(function (e) {
                return (
                  (e.innerHTML = "<input/>"),
                  e.firstChild.setAttribute("value", ""),
                  "" === e.firstChild.getAttribute("value")
                );
              })) ||
              de("value", function (e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase())
                  return e.defaultValue;
              }),
            ue(function (e) {
              return null == e.getAttribute("disabled");
            }) ||
              de(I, function (e, t, n) {
                var i;
                if (!n)
                  return !0 === e[t]
                    ? t.toLowerCase()
                    : (i = e.getAttributeNode(t)) && i.specified
                    ? i.value
                    : null;
              }),
            ae
          );
        })(n);
        (S.find = _),
          (S.expr = _.selectors),
          (S.expr[":"] = S.expr.pseudos),
          (S.uniqueSort = S.unique = _.uniqueSort),
          (S.text = _.getText),
          (S.isXMLDoc = _.isXML),
          (S.contains = _.contains),
          (S.escapeSelector = _.escape);
        var k = function (e, t, n) {
            for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
              if (1 === e.nodeType) {
                if (r && S(e).is(n)) break;
                i.push(e);
              }
            return i;
          },
          M = function (e, t) {
            for (var n = []; e; e = e.nextSibling)
              1 === e.nodeType && e !== t && n.push(e);
            return n;
          },
          L = S.expr.match.needsContext;
        function P(e, t) {
          return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
        }
        var O =
          /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function A(e, t, n) {
          return v(t)
            ? S.grep(e, function (e, i) {
                return !!t.call(e, i, e) !== n;
              })
            : t.nodeType
            ? S.grep(e, function (e) {
                return (e === t) !== n;
              })
            : "string" != typeof t
            ? S.grep(e, function (e) {
                return -1 < u.call(t, e) !== n;
              })
            : S.filter(t, e, n);
        }
        (S.filter = function (e, t, n) {
          var i = t[0];
          return (
            n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === i.nodeType
              ? S.find.matchesSelector(i, e)
                ? [i]
                : []
              : S.find.matches(
                  e,
                  S.grep(t, function (e) {
                    return 1 === e.nodeType;
                  })
                )
          );
        }),
          S.fn.extend({
            find: function (e) {
              var t,
                n,
                i = this.length,
                r = this;
              if ("string" != typeof e)
                return this.pushStack(
                  S(e).filter(function () {
                    for (t = 0; t < i; t++)
                      if (S.contains(r[t], this)) return !0;
                  })
                );
              for (n = this.pushStack([]), t = 0; t < i; t++)
                S.find(e, r[t], n);
              return 1 < i ? S.uniqueSort(n) : n;
            },
            filter: function (e) {
              return this.pushStack(A(this, e || [], !1));
            },
            not: function (e) {
              return this.pushStack(A(this, e || [], !0));
            },
            is: function (e) {
              return !!A(
                this,
                "string" == typeof e && L.test(e) ? S(e) : e || [],
                !1
              ).length;
            },
          });
        var D,
          z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        ((S.fn.init = function (e, t, n) {
          var i, r;
          if (!e) return this;
          if (((n = n || D), "string" == typeof e)) {
            if (
              !(i =
                "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
                  ? [null, e, null]
                  : z.exec(e)) ||
              (!i[1] && t)
            )
              return !t || t.jquery
                ? (t || n).find(e)
                : this.constructor(t).find(e);
            if (i[1]) {
              if (
                ((t = t instanceof S ? t[0] : t),
                S.merge(
                  this,
                  S.parseHTML(
                    i[1],
                    t && t.nodeType ? t.ownerDocument || t : b,
                    !0
                  )
                ),
                O.test(i[1]) && S.isPlainObject(t))
              )
                for (i in t) v(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
              return this;
            }
            return (
              (r = b.getElementById(i[2])) &&
                ((this[0] = r), (this.length = 1)),
              this
            );
          }
          return e.nodeType
            ? ((this[0] = e), (this.length = 1), this)
            : v(e)
            ? void 0 !== n.ready
              ? n.ready(e)
              : e(S)
            : S.makeArray(e, this);
        }).prototype = S.fn),
          (D = S(b));
        var $ = /^(?:parents|prev(?:Until|All))/,
          I = { children: !0, contents: !0, next: !0, prev: !0 };
        function j(e, t) {
          for (; (e = e[t]) && 1 !== e.nodeType; );
          return e;
        }
        S.fn.extend({
          has: function (e) {
            var t = S(e, this),
              n = t.length;
            return this.filter(function () {
              for (var e = 0; e < n; e++) if (S.contains(this, t[e])) return !0;
            });
          },
          closest: function (e, t) {
            var n,
              i = 0,
              r = this.length,
              s = [],
              o = "string" != typeof e && S(e);
            if (!L.test(e))
              for (; i < r; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                  if (
                    n.nodeType < 11 &&
                    (o
                      ? -1 < o.index(n)
                      : 1 === n.nodeType && S.find.matchesSelector(n, e))
                  ) {
                    s.push(n);
                    break;
                  }
            return this.pushStack(1 < s.length ? S.uniqueSort(s) : s);
          },
          index: function (e) {
            return e
              ? "string" == typeof e
                ? u.call(S(e), this[0])
                : u.call(this, e.jquery ? e[0] : e)
              : this[0] && this[0].parentNode
              ? this.first().prevAll().length
              : -1;
          },
          add: function (e, t) {
            return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
          },
          addBack: function (e) {
            return this.add(
              null == e ? this.prevObject : this.prevObject.filter(e)
            );
          },
        }),
          S.each(
            {
              parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null;
              },
              parents: function (e) {
                return k(e, "parentNode");
              },
              parentsUntil: function (e, t, n) {
                return k(e, "parentNode", n);
              },
              next: function (e) {
                return j(e, "nextSibling");
              },
              prev: function (e) {
                return j(e, "previousSibling");
              },
              nextAll: function (e) {
                return k(e, "nextSibling");
              },
              prevAll: function (e) {
                return k(e, "previousSibling");
              },
              nextUntil: function (e, t, n) {
                return k(e, "nextSibling", n);
              },
              prevUntil: function (e, t, n) {
                return k(e, "previousSibling", n);
              },
              siblings: function (e) {
                return M((e.parentNode || {}).firstChild, e);
              },
              children: function (e) {
                return M(e.firstChild);
              },
              contents: function (e) {
                return null != e.contentDocument && o(e.contentDocument)
                  ? e.contentDocument
                  : (P(e, "template") && (e = e.content || e),
                    S.merge([], e.childNodes));
              },
            },
            function (e, t) {
              S.fn[e] = function (n, i) {
                var r = S.map(this, t, n);
                return (
                  "Until" !== e.slice(-5) && (i = n),
                  i && "string" == typeof i && (r = S.filter(i, r)),
                  1 < this.length &&
                    (I[e] || S.uniqueSort(r), $.test(e) && r.reverse()),
                  this.pushStack(r)
                );
              };
            }
          );
        var N = /[^\x20\t\r\n\f]+/g;
        function R(e) {
          return e;
        }
        function H(e) {
          throw e;
        }
        function B(e, t, n, i) {
          var r;
          try {
            e && v((r = e.promise))
              ? r.call(e).done(t).fail(n)
              : e && v((r = e.then))
              ? r.call(e, t, n)
              : t.apply(void 0, [e].slice(i));
          } catch (e) {
            n.apply(void 0, [e]);
          }
        }
        (S.Callbacks = function (e) {
          var t, n;
          e =
            "string" == typeof e
              ? ((t = e),
                (n = {}),
                S.each(t.match(N) || [], function (e, t) {
                  n[t] = !0;
                }),
                n)
              : S.extend({}, e);
          var i,
            r,
            s,
            o,
            a = [],
            l = [],
            c = -1,
            u = function () {
              for (o = o || e.once, s = i = !0; l.length; c = -1)
                for (r = l.shift(); ++c < a.length; )
                  !1 === a[c].apply(r[0], r[1]) &&
                    e.stopOnFalse &&
                    ((c = a.length), (r = !1));
              e.memory || (r = !1), (i = !1), o && (a = r ? [] : "");
            },
            d = {
              add: function () {
                return (
                  a &&
                    (r && !i && ((c = a.length - 1), l.push(r)),
                    (function t(n) {
                      S.each(n, function (n, i) {
                        v(i)
                          ? (e.unique && d.has(i)) || a.push(i)
                          : i && i.length && "string" !== T(i) && t(i);
                      });
                    })(arguments),
                    r && !i && u()),
                  this
                );
              },
              remove: function () {
                return (
                  S.each(arguments, function (e, t) {
                    for (var n; -1 < (n = S.inArray(t, a, n)); )
                      a.splice(n, 1), n <= c && c--;
                  }),
                  this
                );
              },
              has: function (e) {
                return e ? -1 < S.inArray(e, a) : 0 < a.length;
              },
              empty: function () {
                return a && (a = []), this;
              },
              disable: function () {
                return (o = l = []), (a = r = ""), this;
              },
              disabled: function () {
                return !a;
              },
              lock: function () {
                return (o = l = []), r || i || (a = r = ""), this;
              },
              locked: function () {
                return !!o;
              },
              fireWith: function (e, t) {
                return (
                  o ||
                    ((t = [e, (t = t || []).slice ? t.slice() : t]),
                    l.push(t),
                    i || u()),
                  this
                );
              },
              fire: function () {
                return d.fireWith(this, arguments), this;
              },
              fired: function () {
                return !!s;
              },
            };
          return d;
        }),
          S.extend({
            Deferred: function (e) {
              var t = [
                  [
                    "notify",
                    "progress",
                    S.Callbacks("memory"),
                    S.Callbacks("memory"),
                    2,
                  ],
                  [
                    "resolve",
                    "done",
                    S.Callbacks("once memory"),
                    S.Callbacks("once memory"),
                    0,
                    "resolved",
                  ],
                  [
                    "reject",
                    "fail",
                    S.Callbacks("once memory"),
                    S.Callbacks("once memory"),
                    1,
                    "rejected",
                  ],
                ],
                i = "pending",
                r = {
                  state: function () {
                    return i;
                  },
                  always: function () {
                    return s.done(arguments).fail(arguments), this;
                  },
                  catch: function (e) {
                    return r.then(null, e);
                  },
                  pipe: function () {
                    var e = arguments;
                    return S.Deferred(function (n) {
                      S.each(t, function (t, i) {
                        var r = v(e[i[4]]) && e[i[4]];
                        s[i[1]](function () {
                          var e = r && r.apply(this, arguments);
                          e && v(e.promise)
                            ? e
                                .promise()
                                .progress(n.notify)
                                .done(n.resolve)
                                .fail(n.reject)
                            : n[i[0] + "With"](this, r ? [e] : arguments);
                        });
                      }),
                        (e = null);
                    }).promise();
                  },
                  then: function (e, i, r) {
                    var s = 0;
                    function o(e, t, i, r) {
                      return function () {
                        var a = this,
                          l = arguments,
                          c = function () {
                            var n, c;
                            if (!(e < s)) {
                              if ((n = i.apply(a, l)) === t.promise())
                                throw new TypeError("Thenable self-resolution");
                              (c =
                                n &&
                                ("object" == typeof n ||
                                  "function" == typeof n) &&
                                n.then),
                                v(c)
                                  ? r
                                    ? c.call(n, o(s, t, R, r), o(s, t, H, r))
                                    : (s++,
                                      c.call(
                                        n,
                                        o(s, t, R, r),
                                        o(s, t, H, r),
                                        o(s, t, R, t.notifyWith)
                                      ))
                                  : (i !== R && ((a = void 0), (l = [n])),
                                    (r || t.resolveWith)(a, l));
                            }
                          },
                          u = r
                            ? c
                            : function () {
                                try {
                                  c();
                                } catch (n) {
                                  S.Deferred.exceptionHook &&
                                    S.Deferred.exceptionHook(n, u.stackTrace),
                                    s <= e + 1 &&
                                      (i !== H && ((a = void 0), (l = [n])),
                                      t.rejectWith(a, l));
                                }
                              };
                        e
                          ? u()
                          : (S.Deferred.getStackHook &&
                              (u.stackTrace = S.Deferred.getStackHook()),
                            n.setTimeout(u));
                      };
                    }
                    return S.Deferred(function (n) {
                      t[0][3].add(o(0, n, v(r) ? r : R, n.notifyWith)),
                        t[1][3].add(o(0, n, v(e) ? e : R)),
                        t[2][3].add(o(0, n, v(i) ? i : H));
                    }).promise();
                  },
                  promise: function (e) {
                    return null != e ? S.extend(e, r) : r;
                  },
                },
                s = {};
              return (
                S.each(t, function (e, n) {
                  var o = n[2],
                    a = n[5];
                  (r[n[1]] = o.add),
                    a &&
                      o.add(
                        function () {
                          i = a;
                        },
                        t[3 - e][2].disable,
                        t[3 - e][3].disable,
                        t[0][2].lock,
                        t[0][3].lock
                      ),
                    o.add(n[3].fire),
                    (s[n[0]] = function () {
                      return (
                        s[n[0] + "With"](this === s ? void 0 : this, arguments),
                        this
                      );
                    }),
                    (s[n[0] + "With"] = o.fireWith);
                }),
                r.promise(s),
                e && e.call(s, s),
                s
              );
            },
            when: function (e) {
              var t = arguments.length,
                n = t,
                i = Array(n),
                r = a.call(arguments),
                s = S.Deferred(),
                o = function (e) {
                  return function (n) {
                    (i[e] = this),
                      (r[e] = 1 < arguments.length ? a.call(arguments) : n),
                      --t || s.resolveWith(i, r);
                  };
                };
              if (
                t <= 1 &&
                (B(e, s.done(o(n)).resolve, s.reject, !t),
                "pending" === s.state() || v(r[n] && r[n].then))
              )
                return s.then();
              for (; n--; ) B(r[n], o(n), s.reject);
              return s.promise();
            },
          });
        var q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        (S.Deferred.exceptionHook = function (e, t) {
          n.console &&
            n.console.warn &&
            e &&
            q.test(e.name) &&
            n.console.warn(
              "jQuery.Deferred exception: " + e.message,
              e.stack,
              t
            );
        }),
          (S.readyException = function (e) {
            n.setTimeout(function () {
              throw e;
            });
          });
        var F = S.Deferred();
        function W() {
          b.removeEventListener("DOMContentLoaded", W),
            n.removeEventListener("load", W),
            S.ready();
        }
        (S.fn.ready = function (e) {
          return (
            F.then(e).catch(function (e) {
              S.readyException(e);
            }),
            this
          );
        }),
          S.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (e) {
              (!0 === e ? --S.readyWait : S.isReady) ||
                ((S.isReady = !0) !== e && 0 < --S.readyWait) ||
                F.resolveWith(b, [S]);
            },
          }),
          (S.ready.then = F.then),
          "complete" === b.readyState ||
          ("loading" !== b.readyState && !b.documentElement.doScroll)
            ? n.setTimeout(S.ready)
            : (b.addEventListener("DOMContentLoaded", W),
              n.addEventListener("load", W));
        var Y = function (e, t, n, i, r, s, o) {
            var a = 0,
              l = e.length,
              c = null == n;
            if ("object" === T(n))
              for (a in ((r = !0), n)) Y(e, t, a, n[a], !0, s, o);
            else if (
              void 0 !== i &&
              ((r = !0),
              v(i) || (o = !0),
              c &&
                (o
                  ? (t.call(e, i), (t = null))
                  : ((c = t),
                    (t = function (e, t, n) {
                      return c.call(S(e), n);
                    }))),
              t)
            )
              for (; a < l; a++)
                t(e[a], n, o ? i : i.call(e[a], a, t(e[a], n)));
            return r ? e : c ? t.call(e) : l ? t(e[0], n) : s;
          },
          X = /^-ms-/,
          V = /-([a-z])/g;
        function G(e, t) {
          return t.toUpperCase();
        }
        function U(e) {
          return e.replace(X, "ms-").replace(V, G);
        }
        var K = function (e) {
          return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
        };
        function Q() {
          this.expando = S.expando + Q.uid++;
        }
        (Q.uid = 1),
          (Q.prototype = {
            cache: function (e) {
              var t = e[this.expando];
              return (
                t ||
                  ((t = {}),
                  K(e) &&
                    (e.nodeType
                      ? (e[this.expando] = t)
                      : Object.defineProperty(e, this.expando, {
                          value: t,
                          configurable: !0,
                        }))),
                t
              );
            },
            set: function (e, t, n) {
              var i,
                r = this.cache(e);
              if ("string" == typeof t) r[U(t)] = n;
              else for (i in t) r[U(i)] = t[i];
              return r;
            },
            get: function (e, t) {
              return void 0 === t
                ? this.cache(e)
                : e[this.expando] && e[this.expando][U(t)];
            },
            access: function (e, t, n) {
              return void 0 === t || (t && "string" == typeof t && void 0 === n)
                ? this.get(e, t)
                : (this.set(e, t, n), void 0 !== n ? n : t);
            },
            remove: function (e, t) {
              var n,
                i = e[this.expando];
              if (void 0 !== i) {
                if (void 0 !== t) {
                  n = (t = Array.isArray(t)
                    ? t.map(U)
                    : (t = U(t)) in i
                    ? [t]
                    : t.match(N) || []).length;
                  for (; n--; ) delete i[t[n]];
                }
                (void 0 === t || S.isEmptyObject(i)) &&
                  (e.nodeType
                    ? (e[this.expando] = void 0)
                    : delete e[this.expando]);
              }
            },
            hasData: function (e) {
              var t = e[this.expando];
              return void 0 !== t && !S.isEmptyObject(t);
            },
          });
        var Z = new Q(),
          J = new Q(),
          ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
          te = /[A-Z]/g;
        function ne(e, t, n) {
          var i, r;
          if (void 0 === n && 1 === e.nodeType)
            if (
              ((i = "data-" + t.replace(te, "-$&").toLowerCase()),
              "string" == typeof (n = e.getAttribute(i)))
            ) {
              try {
                n =
                  "true" === (r = n) ||
                  ("false" !== r &&
                    ("null" === r
                      ? null
                      : r === +r + ""
                      ? +r
                      : ee.test(r)
                      ? JSON.parse(r)
                      : r));
              } catch (e) {}
              J.set(e, t, n);
            } else n = void 0;
          return n;
        }
        S.extend({
          hasData: function (e) {
            return J.hasData(e) || Z.hasData(e);
          },
          data: function (e, t, n) {
            return J.access(e, t, n);
          },
          removeData: function (e, t) {
            J.remove(e, t);
          },
          _data: function (e, t, n) {
            return Z.access(e, t, n);
          },
          _removeData: function (e, t) {
            Z.remove(e, t);
          },
        }),
          S.fn.extend({
            data: function (e, t) {
              var n,
                i,
                r,
                s = this[0],
                o = s && s.attributes;
              if (void 0 === e) {
                if (
                  this.length &&
                  ((r = J.get(s)),
                  1 === s.nodeType && !Z.get(s, "hasDataAttrs"))
                ) {
                  for (n = o.length; n--; )
                    o[n] &&
                      0 === (i = o[n].name).indexOf("data-") &&
                      ((i = U(i.slice(5))), ne(s, i, r[i]));
                  Z.set(s, "hasDataAttrs", !0);
                }
                return r;
              }
              return "object" == typeof e
                ? this.each(function () {
                    J.set(this, e);
                  })
                : Y(
                    this,
                    function (t) {
                      var n;
                      if (s && void 0 === t)
                        return void 0 !== (n = J.get(s, e)) ||
                          void 0 !== (n = ne(s, e))
                          ? n
                          : void 0;
                      this.each(function () {
                        J.set(this, e, t);
                      });
                    },
                    null,
                    t,
                    1 < arguments.length,
                    null,
                    !0
                  );
            },
            removeData: function (e) {
              return this.each(function () {
                J.remove(this, e);
              });
            },
          }),
          S.extend({
            queue: function (e, t, n) {
              var i;
              if (e)
                return (
                  (t = (t || "fx") + "queue"),
                  (i = Z.get(e, t)),
                  n &&
                    (!i || Array.isArray(n)
                      ? (i = Z.access(e, t, S.makeArray(n)))
                      : i.push(n)),
                  i || []
                );
            },
            dequeue: function (e, t) {
              t = t || "fx";
              var n = S.queue(e, t),
                i = n.length,
                r = n.shift(),
                s = S._queueHooks(e, t);
              "inprogress" === r && ((r = n.shift()), i--),
                r &&
                  ("fx" === t && n.unshift("inprogress"),
                  delete s.stop,
                  r.call(
                    e,
                    function () {
                      S.dequeue(e, t);
                    },
                    s
                  )),
                !i && s && s.empty.fire();
            },
            _queueHooks: function (e, t) {
              var n = t + "queueHooks";
              return (
                Z.get(e, n) ||
                Z.access(e, n, {
                  empty: S.Callbacks("once memory").add(function () {
                    Z.remove(e, [t + "queue", n]);
                  }),
                })
              );
            },
          }),
          S.fn.extend({
            queue: function (e, t) {
              var n = 2;
              return (
                "string" != typeof e && ((t = e), (e = "fx"), n--),
                arguments.length < n
                  ? S.queue(this[0], e)
                  : void 0 === t
                  ? this
                  : this.each(function () {
                      var n = S.queue(this, e, t);
                      S._queueHooks(this, e),
                        "fx" === e &&
                          "inprogress" !== n[0] &&
                          S.dequeue(this, e);
                    })
              );
            },
            dequeue: function (e) {
              return this.each(function () {
                S.dequeue(this, e);
              });
            },
            clearQueue: function (e) {
              return this.queue(e || "fx", []);
            },
            promise: function (e, t) {
              var n,
                i = 1,
                r = S.Deferred(),
                s = this,
                o = this.length,
                a = function () {
                  --i || r.resolveWith(s, [s]);
                };
              for (
                "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
                o--;

              )
                (n = Z.get(s[o], e + "queueHooks")) &&
                  n.empty &&
                  (i++, n.empty.add(a));
              return a(), r.promise(t);
            },
          });
        var ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
          re = new RegExp("^(?:([+-])=|)(" + ie + ")([a-z%]*)$", "i"),
          se = ["Top", "Right", "Bottom", "Left"],
          oe = b.documentElement,
          ae = function (e) {
            return S.contains(e.ownerDocument, e);
          },
          le = { composed: !0 };
        oe.getRootNode &&
          (ae = function (e) {
            return (
              S.contains(e.ownerDocument, e) ||
              e.getRootNode(le) === e.ownerDocument
            );
          });
        var ce = function (e, t) {
          return (
            "none" === (e = t || e).style.display ||
            ("" === e.style.display && ae(e) && "none" === S.css(e, "display"))
          );
        };
        function ue(e, t, n, i) {
          var r,
            s,
            o = 20,
            a = i
              ? function () {
                  return i.cur();
                }
              : function () {
                  return S.css(e, t, "");
                },
            l = a(),
            c = (n && n[3]) || (S.cssNumber[t] ? "" : "px"),
            u =
              e.nodeType &&
              (S.cssNumber[t] || ("px" !== c && +l)) &&
              re.exec(S.css(e, t));
          if (u && u[3] !== c) {
            for (l /= 2, c = c || u[3], u = +l || 1; o--; )
              S.style(e, t, u + c),
                (1 - s) * (1 - (s = a() / l || 0.5)) <= 0 && (o = 0),
                (u /= s);
            (u *= 2), S.style(e, t, u + c), (n = n || []);
          }
          return (
            n &&
              ((u = +u || +l || 0),
              (r = n[1] ? u + (n[1] + 1) * n[2] : +n[2]),
              i && ((i.unit = c), (i.start = u), (i.end = r))),
            r
          );
        }
        var de = {};
        function he(e, t) {
          for (var n, i, r, s, o, a, l, c = [], u = 0, d = e.length; u < d; u++)
            (i = e[u]).style &&
              ((n = i.style.display),
              t
                ? ("none" === n &&
                    ((c[u] = Z.get(i, "display") || null),
                    c[u] || (i.style.display = "")),
                  "" === i.style.display &&
                    ce(i) &&
                    (c[u] =
                      ((l = o = s = void 0),
                      (o = (r = i).ownerDocument),
                      (a = r.nodeName),
                      (l = de[a]) ||
                        ((s = o.body.appendChild(o.createElement(a))),
                        (l = S.css(s, "display")),
                        s.parentNode.removeChild(s),
                        "none" === l && (l = "block"),
                        (de[a] = l)))))
                : "none" !== n && ((c[u] = "none"), Z.set(i, "display", n)));
          for (u = 0; u < d; u++) null != c[u] && (e[u].style.display = c[u]);
          return e;
        }
        S.fn.extend({
          show: function () {
            return he(this, !0);
          },
          hide: function () {
            return he(this);
          },
          toggle: function (e) {
            return "boolean" == typeof e
              ? e
                ? this.show()
                : this.hide()
              : this.each(function () {
                  ce(this) ? S(this).show() : S(this).hide();
                });
          },
        });
        var pe,
          fe,
          me = /^(?:checkbox|radio)$/i,
          ge = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
          ve = /^$|^module$|\/(?:java|ecma)script/i;
        (pe = b.createDocumentFragment().appendChild(b.createElement("div"))),
          (fe = b.createElement("input")).setAttribute("type", "radio"),
          fe.setAttribute("checked", "checked"),
          fe.setAttribute("name", "t"),
          pe.appendChild(fe),
          (g.checkClone = pe.cloneNode(!0).cloneNode(!0).lastChild.checked),
          (pe.innerHTML = "<textarea>x</textarea>"),
          (g.noCloneChecked = !!pe.cloneNode(!0).lastChild.defaultValue),
          (pe.innerHTML = "<option></option>"),
          (g.option = !!pe.lastChild);
        var ye = {
          thead: [1, "<table>", "</table>"],
          col: [2, "<table><colgroup>", "</colgroup></table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: [0, "", ""],
        };
        function be(e, t) {
          var n;
          return (
            (n =
              void 0 !== e.getElementsByTagName
                ? e.getElementsByTagName(t || "*")
                : void 0 !== e.querySelectorAll
                ? e.querySelectorAll(t || "*")
                : []),
            void 0 === t || (t && P(e, t)) ? S.merge([e], n) : n
          );
        }
        function we(e, t) {
          for (var n = 0, i = e.length; n < i; n++)
            Z.set(e[n], "globalEval", !t || Z.get(t[n], "globalEval"));
        }
        (ye.tbody = ye.tfoot = ye.colgroup = ye.caption = ye.thead),
          (ye.th = ye.td),
          g.option ||
            (ye.optgroup = ye.option =
              [1, "<select multiple='multiple'>", "</select>"]);
        var xe = /<|&#?\w+;/;
        function Te(e, t, n, i, r) {
          for (
            var s,
              o,
              a,
              l,
              c,
              u,
              d = t.createDocumentFragment(),
              h = [],
              p = 0,
              f = e.length;
            p < f;
            p++
          )
            if ((s = e[p]) || 0 === s)
              if ("object" === T(s)) S.merge(h, s.nodeType ? [s] : s);
              else if (xe.test(s)) {
                for (
                  o = o || d.appendChild(t.createElement("div")),
                    a = (ge.exec(s) || ["", ""])[1].toLowerCase(),
                    l = ye[a] || ye._default,
                    o.innerHTML = l[1] + S.htmlPrefilter(s) + l[2],
                    u = l[0];
                  u--;

                )
                  o = o.lastChild;
                S.merge(h, o.childNodes), ((o = d.firstChild).textContent = "");
              } else h.push(t.createTextNode(s));
          for (d.textContent = "", p = 0; (s = h[p++]); )
            if (i && -1 < S.inArray(s, i)) r && r.push(s);
            else if (
              ((c = ae(s)), (o = be(d.appendChild(s), "script")), c && we(o), n)
            )
              for (u = 0; (s = o[u++]); ) ve.test(s.type || "") && n.push(s);
          return d;
        }
        var Ee = /^key/,
          Se = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
          Ce = /^([^.]*)(?:\.(.+)|)/;
        function _e() {
          return !0;
        }
        function ke() {
          return !1;
        }
        function Me(e, t) {
          return (
            (e ===
              (function () {
                try {
                  return b.activeElement;
                } catch (e) {}
              })()) ==
            ("focus" === t)
          );
        }
        function Le(e, t, n, i, r, s) {
          var o, a;
          if ("object" == typeof t) {
            for (a in ("string" != typeof n && ((i = i || n), (n = void 0)), t))
              Le(e, a, n, i, t[a], s);
            return e;
          }
          if (
            (null == i && null == r
              ? ((r = n), (i = n = void 0))
              : null == r &&
                ("string" == typeof n
                  ? ((r = i), (i = void 0))
                  : ((r = i), (i = n), (n = void 0))),
            !1 === r)
          )
            r = ke;
          else if (!r) return e;
          return (
            1 === s &&
              ((o = r),
              ((r = function (e) {
                return S().off(e), o.apply(this, arguments);
              }).guid = o.guid || (o.guid = S.guid++))),
            e.each(function () {
              S.event.add(this, t, r, i, n);
            })
          );
        }
        function Pe(e, t, n) {
          n
            ? (Z.set(e, t, !1),
              S.event.add(e, t, {
                namespace: !1,
                handler: function (e) {
                  var i,
                    r,
                    s = Z.get(this, t);
                  if (1 & e.isTrigger && this[t]) {
                    if (s.length)
                      (S.event.special[t] || {}).delegateType &&
                        e.stopPropagation();
                    else if (
                      ((s = a.call(arguments)),
                      Z.set(this, t, s),
                      (i = n(this, t)),
                      this[t](),
                      s !== (r = Z.get(this, t)) || i
                        ? Z.set(this, t, !1)
                        : (r = {}),
                      s !== r)
                    )
                      return (
                        e.stopImmediatePropagation(),
                        e.preventDefault(),
                        r.value
                      );
                  } else
                    s.length &&
                      (Z.set(this, t, {
                        value: S.event.trigger(
                          S.extend(s[0], S.Event.prototype),
                          s.slice(1),
                          this
                        ),
                      }),
                      e.stopImmediatePropagation());
                },
              }))
            : void 0 === Z.get(e, t) && S.event.add(e, t, _e);
        }
        (S.event = {
          global: {},
          add: function (e, t, n, i, r) {
            var s,
              o,
              a,
              l,
              c,
              u,
              d,
              h,
              p,
              f,
              m,
              g = Z.get(e);
            if (K(e))
              for (
                n.handler && ((n = (s = n).handler), (r = s.selector)),
                  r && S.find.matchesSelector(oe, r),
                  n.guid || (n.guid = S.guid++),
                  (l = g.events) || (l = g.events = Object.create(null)),
                  (o = g.handle) ||
                    (o = g.handle =
                      function (t) {
                        return void 0 !== S && S.event.triggered !== t.type
                          ? S.event.dispatch.apply(e, arguments)
                          : void 0;
                      }),
                  c = (t = (t || "").match(N) || [""]).length;
                c--;

              )
                (p = m = (a = Ce.exec(t[c]) || [])[1]),
                  (f = (a[2] || "").split(".").sort()),
                  p &&
                    ((d = S.event.special[p] || {}),
                    (p = (r ? d.delegateType : d.bindType) || p),
                    (d = S.event.special[p] || {}),
                    (u = S.extend(
                      {
                        type: p,
                        origType: m,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && S.expr.match.needsContext.test(r),
                        namespace: f.join("."),
                      },
                      s
                    )),
                    (h = l[p]) ||
                      (((h = l[p] = []).delegateCount = 0),
                      (d.setup && !1 !== d.setup.call(e, i, f, o)) ||
                        (e.addEventListener && e.addEventListener(p, o))),
                    d.add &&
                      (d.add.call(e, u),
                      u.handler.guid || (u.handler.guid = n.guid)),
                    r ? h.splice(h.delegateCount++, 0, u) : h.push(u),
                    (S.event.global[p] = !0));
          },
          remove: function (e, t, n, i, r) {
            var s,
              o,
              a,
              l,
              c,
              u,
              d,
              h,
              p,
              f,
              m,
              g = Z.hasData(e) && Z.get(e);
            if (g && (l = g.events)) {
              for (c = (t = (t || "").match(N) || [""]).length; c--; )
                if (
                  ((p = m = (a = Ce.exec(t[c]) || [])[1]),
                  (f = (a[2] || "").split(".").sort()),
                  p)
                ) {
                  for (
                    d = S.event.special[p] || {},
                      h = l[(p = (i ? d.delegateType : d.bindType) || p)] || [],
                      a =
                        a[2] &&
                        new RegExp(
                          "(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"
                        ),
                      o = s = h.length;
                    s--;

                  )
                    (u = h[s]),
                      (!r && m !== u.origType) ||
                        (n && n.guid !== u.guid) ||
                        (a && !a.test(u.namespace)) ||
                        (i &&
                          i !== u.selector &&
                          ("**" !== i || !u.selector)) ||
                        (h.splice(s, 1),
                        u.selector && h.delegateCount--,
                        d.remove && d.remove.call(e, u));
                  o &&
                    !h.length &&
                    ((d.teardown && !1 !== d.teardown.call(e, f, g.handle)) ||
                      S.removeEvent(e, p, g.handle),
                    delete l[p]);
                } else for (p in l) S.event.remove(e, p + t[c], n, i, !0);
              S.isEmptyObject(l) && Z.remove(e, "handle events");
            }
          },
          dispatch: function (e) {
            var t,
              n,
              i,
              r,
              s,
              o,
              a = new Array(arguments.length),
              l = S.event.fix(e),
              c = (Z.get(this, "events") || Object.create(null))[l.type] || [],
              u = S.event.special[l.type] || {};
            for (a[0] = l, t = 1; t < arguments.length; t++)
              a[t] = arguments[t];
            if (
              ((l.delegateTarget = this),
              !u.preDispatch || !1 !== u.preDispatch.call(this, l))
            ) {
              for (
                o = S.event.handlers.call(this, l, c), t = 0;
                (r = o[t++]) && !l.isPropagationStopped();

              )
                for (
                  l.currentTarget = r.elem, n = 0;
                  (s = r.handlers[n++]) && !l.isImmediatePropagationStopped();

                )
                  (l.rnamespace &&
                    !1 !== s.namespace &&
                    !l.rnamespace.test(s.namespace)) ||
                    ((l.handleObj = s),
                    (l.data = s.data),
                    void 0 !==
                      (i = (
                        (S.event.special[s.origType] || {}).handle || s.handler
                      ).apply(r.elem, a)) &&
                      !1 === (l.result = i) &&
                      (l.preventDefault(), l.stopPropagation()));
              return u.postDispatch && u.postDispatch.call(this, l), l.result;
            }
          },
          handlers: function (e, t) {
            var n,
              i,
              r,
              s,
              o,
              a = [],
              l = t.delegateCount,
              c = e.target;
            if (l && c.nodeType && !("click" === e.type && 1 <= e.button))
              for (; c !== this; c = c.parentNode || this)
                if (
                  1 === c.nodeType &&
                  ("click" !== e.type || !0 !== c.disabled)
                ) {
                  for (s = [], o = {}, n = 0; n < l; n++)
                    void 0 === o[(r = (i = t[n]).selector + " ")] &&
                      (o[r] = i.needsContext
                        ? -1 < S(r, this).index(c)
                        : S.find(r, this, null, [c]).length),
                      o[r] && s.push(i);
                  s.length && a.push({ elem: c, handlers: s });
                }
            return (
              (c = this),
              l < t.length && a.push({ elem: c, handlers: t.slice(l) }),
              a
            );
          },
          addProp: function (e, t) {
            Object.defineProperty(S.Event.prototype, e, {
              enumerable: !0,
              configurable: !0,
              get: v(t)
                ? function () {
                    if (this.originalEvent) return t(this.originalEvent);
                  }
                : function () {
                    if (this.originalEvent) return this.originalEvent[e];
                  },
              set: function (t) {
                Object.defineProperty(this, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: t,
                });
              },
            });
          },
          fix: function (e) {
            return e[S.expando] ? e : new S.Event(e);
          },
          special: {
            load: { noBubble: !0 },
            click: {
              setup: function (e) {
                var t = this || e;
                return (
                  me.test(t.type) &&
                    t.click &&
                    P(t, "input") &&
                    Pe(t, "click", _e),
                  !1
                );
              },
              trigger: function (e) {
                var t = this || e;
                return (
                  me.test(t.type) && t.click && P(t, "input") && Pe(t, "click"),
                  !0
                );
              },
              _default: function (e) {
                var t = e.target;
                return (
                  (me.test(t.type) &&
                    t.click &&
                    P(t, "input") &&
                    Z.get(t, "click")) ||
                  P(t, "a")
                );
              },
            },
            beforeunload: {
              postDispatch: function (e) {
                void 0 !== e.result &&
                  e.originalEvent &&
                  (e.originalEvent.returnValue = e.result);
              },
            },
          },
        }),
          (S.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n);
          }),
          (S.Event = function (e, t) {
            if (!(this instanceof S.Event)) return new S.Event(e, t);
            e && e.type
              ? ((this.originalEvent = e),
                (this.type = e.type),
                (this.isDefaultPrevented =
                  e.defaultPrevented ||
                  (void 0 === e.defaultPrevented && !1 === e.returnValue)
                    ? _e
                    : ke),
                (this.target =
                  e.target && 3 === e.target.nodeType
                    ? e.target.parentNode
                    : e.target),
                (this.currentTarget = e.currentTarget),
                (this.relatedTarget = e.relatedTarget))
              : (this.type = e),
              t && S.extend(this, t),
              (this.timeStamp = (e && e.timeStamp) || Date.now()),
              (this[S.expando] = !0);
          }),
          (S.Event.prototype = {
            constructor: S.Event,
            isDefaultPrevented: ke,
            isPropagationStopped: ke,
            isImmediatePropagationStopped: ke,
            isSimulated: !1,
            preventDefault: function () {
              var e = this.originalEvent;
              (this.isDefaultPrevented = _e),
                e && !this.isSimulated && e.preventDefault();
            },
            stopPropagation: function () {
              var e = this.originalEvent;
              (this.isPropagationStopped = _e),
                e && !this.isSimulated && e.stopPropagation();
            },
            stopImmediatePropagation: function () {
              var e = this.originalEvent;
              (this.isImmediatePropagationStopped = _e),
                e && !this.isSimulated && e.stopImmediatePropagation(),
                this.stopPropagation();
            },
          }),
          S.each(
            {
              altKey: !0,
              bubbles: !0,
              cancelable: !0,
              changedTouches: !0,
              ctrlKey: !0,
              detail: !0,
              eventPhase: !0,
              metaKey: !0,
              pageX: !0,
              pageY: !0,
              shiftKey: !0,
              view: !0,
              char: !0,
              code: !0,
              charCode: !0,
              key: !0,
              keyCode: !0,
              button: !0,
              buttons: !0,
              clientX: !0,
              clientY: !0,
              offsetX: !0,
              offsetY: !0,
              pointerId: !0,
              pointerType: !0,
              screenX: !0,
              screenY: !0,
              targetTouches: !0,
              toElement: !0,
              touches: !0,
              which: function (e) {
                var t = e.button;
                return null == e.which && Ee.test(e.type)
                  ? null != e.charCode
                    ? e.charCode
                    : e.keyCode
                  : !e.which && void 0 !== t && Se.test(e.type)
                  ? 1 & t
                    ? 1
                    : 2 & t
                    ? 3
                    : 4 & t
                    ? 2
                    : 0
                  : e.which;
              },
            },
            S.event.addProp
          ),
          S.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
            S.event.special[e] = {
              setup: function () {
                return Pe(this, e, Me), !1;
              },
              trigger: function () {
                return Pe(this, e), !0;
              },
              delegateType: t,
            };
          }),
          S.each(
            {
              mouseenter: "mouseover",
              mouseleave: "mouseout",
              pointerenter: "pointerover",
              pointerleave: "pointerout",
            },
            function (e, t) {
              S.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function (e) {
                  var n,
                    i = e.relatedTarget,
                    r = e.handleObj;
                  return (
                    (i && (i === this || S.contains(this, i))) ||
                      ((e.type = r.origType),
                      (n = r.handler.apply(this, arguments)),
                      (e.type = t)),
                    n
                  );
                },
              };
            }
          ),
          S.fn.extend({
            on: function (e, t, n, i) {
              return Le(this, e, t, n, i);
            },
            one: function (e, t, n, i) {
              return Le(this, e, t, n, i, 1);
            },
            off: function (e, t, n) {
              var i, r;
              if (e && e.preventDefault && e.handleObj)
                return (
                  (i = e.handleObj),
                  S(e.delegateTarget).off(
                    i.namespace ? i.origType + "." + i.namespace : i.origType,
                    i.selector,
                    i.handler
                  ),
                  this
                );
              if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this;
              }
              return (
                (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
                !1 === n && (n = ke),
                this.each(function () {
                  S.event.remove(this, e, n, t);
                })
              );
            },
          });
        var Oe = /<script|<style|<link/i,
          Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
          De = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        function ze(e, t) {
          return (
            (P(e, "table") &&
              P(11 !== t.nodeType ? t : t.firstChild, "tr") &&
              S(e).children("tbody")[0]) ||
            e
          );
        }
        function $e(e) {
          return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
        }
        function Ie(e) {
          return (
            "true/" === (e.type || "").slice(0, 5)
              ? (e.type = e.type.slice(5))
              : e.removeAttribute("type"),
            e
          );
        }
        function je(e, t) {
          var n, i, r, s, o, a;
          if (1 === t.nodeType) {
            if (Z.hasData(e) && (a = Z.get(e).events))
              for (r in (Z.remove(t, "handle events"), a))
                for (n = 0, i = a[r].length; n < i; n++)
                  S.event.add(t, r, a[r][n]);
            J.hasData(e) &&
              ((s = J.access(e)), (o = S.extend({}, s)), J.set(t, o));
          }
        }
        function Ne(e, t, n, i) {
          t = l(t);
          var r,
            s,
            o,
            a,
            c,
            u,
            d = 0,
            h = e.length,
            p = h - 1,
            f = t[0],
            m = v(f);
          if (
            m ||
            (1 < h && "string" == typeof f && !g.checkClone && Ae.test(f))
          )
            return e.each(function (r) {
              var s = e.eq(r);
              m && (t[0] = f.call(this, r, s.html())), Ne(s, t, n, i);
            });
          if (
            h &&
            ((s = (r = Te(t, e[0].ownerDocument, !1, e, i)).firstChild),
            1 === r.childNodes.length && (r = s),
            s || i)
          ) {
            for (a = (o = S.map(be(r, "script"), $e)).length; d < h; d++)
              (c = r),
                d !== p &&
                  ((c = S.clone(c, !0, !0)), a && S.merge(o, be(c, "script"))),
                n.call(e[d], c, d);
            if (a)
              for (
                u = o[o.length - 1].ownerDocument, S.map(o, Ie), d = 0;
                d < a;
                d++
              )
                (c = o[d]),
                  ve.test(c.type || "") &&
                    !Z.access(c, "globalEval") &&
                    S.contains(u, c) &&
                    (c.src && "module" !== (c.type || "").toLowerCase()
                      ? S._evalUrl &&
                        !c.noModule &&
                        S._evalUrl(
                          c.src,
                          { nonce: c.nonce || c.getAttribute("nonce") },
                          u
                        )
                      : x(c.textContent.replace(De, ""), c, u));
          }
          return e;
        }
        function Re(e, t, n) {
          for (
            var i, r = t ? S.filter(t, e) : e, s = 0;
            null != (i = r[s]);
            s++
          )
            n || 1 !== i.nodeType || S.cleanData(be(i)),
              i.parentNode &&
                (n && ae(i) && we(be(i, "script")),
                i.parentNode.removeChild(i));
          return e;
        }
        S.extend({
          htmlPrefilter: function (e) {
            return e;
          },
          clone: function (e, t, n) {
            var i,
              r,
              s,
              o,
              a,
              l,
              c,
              u = e.cloneNode(!0),
              d = ae(e);
            if (
              !(
                g.noCloneChecked ||
                (1 !== e.nodeType && 11 !== e.nodeType) ||
                S.isXMLDoc(e)
              )
            )
              for (o = be(u), i = 0, r = (s = be(e)).length; i < r; i++)
                (a = s[i]),
                  "input" === (c = (l = o[i]).nodeName.toLowerCase()) &&
                  me.test(a.type)
                    ? (l.checked = a.checked)
                    : ("input" !== c && "textarea" !== c) ||
                      (l.defaultValue = a.defaultValue);
            if (t)
              if (n)
                for (
                  s = s || be(e), o = o || be(u), i = 0, r = s.length;
                  i < r;
                  i++
                )
                  je(s[i], o[i]);
              else je(e, u);
            return (
              0 < (o = be(u, "script")).length && we(o, !d && be(e, "script")),
              u
            );
          },
          cleanData: function (e) {
            for (
              var t, n, i, r = S.event.special, s = 0;
              void 0 !== (n = e[s]);
              s++
            )
              if (K(n)) {
                if ((t = n[Z.expando])) {
                  if (t.events)
                    for (i in t.events)
                      r[i]
                        ? S.event.remove(n, i)
                        : S.removeEvent(n, i, t.handle);
                  n[Z.expando] = void 0;
                }
                n[J.expando] && (n[J.expando] = void 0);
              }
          },
        }),
          S.fn.extend({
            detach: function (e) {
              return Re(this, e, !0);
            },
            remove: function (e) {
              return Re(this, e);
            },
            text: function (e) {
              return Y(
                this,
                function (e) {
                  return void 0 === e
                    ? S.text(this)
                    : this.empty().each(function () {
                        (1 !== this.nodeType &&
                          11 !== this.nodeType &&
                          9 !== this.nodeType) ||
                          (this.textContent = e);
                      });
                },
                null,
                e,
                arguments.length
              );
            },
            append: function () {
              return Ne(this, arguments, function (e) {
                (1 !== this.nodeType &&
                  11 !== this.nodeType &&
                  9 !== this.nodeType) ||
                  ze(this, e).appendChild(e);
              });
            },
            prepend: function () {
              return Ne(this, arguments, function (e) {
                if (
                  1 === this.nodeType ||
                  11 === this.nodeType ||
                  9 === this.nodeType
                ) {
                  var t = ze(this, e);
                  t.insertBefore(e, t.firstChild);
                }
              });
            },
            before: function () {
              return Ne(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this);
              });
            },
            after: function () {
              return Ne(this, arguments, function (e) {
                this.parentNode &&
                  this.parentNode.insertBefore(e, this.nextSibling);
              });
            },
            empty: function () {
              for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType &&
                  (S.cleanData(be(e, !1)), (e.textContent = ""));
              return this;
            },
            clone: function (e, t) {
              return (
                (e = null != e && e),
                (t = null == t ? e : t),
                this.map(function () {
                  return S.clone(this, e, t);
                })
              );
            },
            html: function (e) {
              return Y(
                this,
                function (e) {
                  var t = this[0] || {},
                    n = 0,
                    i = this.length;
                  if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                  if (
                    "string" == typeof e &&
                    !Oe.test(e) &&
                    !ye[(ge.exec(e) || ["", ""])[1].toLowerCase()]
                  ) {
                    e = S.htmlPrefilter(e);
                    try {
                      for (; n < i; n++)
                        1 === (t = this[n] || {}).nodeType &&
                          (S.cleanData(be(t, !1)), (t.innerHTML = e));
                      t = 0;
                    } catch (e) {}
                  }
                  t && this.empty().append(e);
                },
                null,
                e,
                arguments.length
              );
            },
            replaceWith: function () {
              var e = [];
              return Ne(
                this,
                arguments,
                function (t) {
                  var n = this.parentNode;
                  S.inArray(this, e) < 0 &&
                    (S.cleanData(be(this)), n && n.replaceChild(t, this));
                },
                e
              );
            },
          }),
          S.each(
            {
              appendTo: "append",
              prependTo: "prepend",
              insertBefore: "before",
              insertAfter: "after",
              replaceAll: "replaceWith",
            },
            function (e, t) {
              S.fn[e] = function (e) {
                for (
                  var n, i = [], r = S(e), s = r.length - 1, o = 0;
                  o <= s;
                  o++
                )
                  (n = o === s ? this : this.clone(!0)),
                    S(r[o])[t](n),
                    c.apply(i, n.get());
                return this.pushStack(i);
              };
            }
          );
        var He = new RegExp("^(" + ie + ")(?!px)[a-z%]+$", "i"),
          Be = function (e) {
            var t = e.ownerDocument.defaultView;
            return (t && t.opener) || (t = n), t.getComputedStyle(e);
          },
          qe = function (e, t, n) {
            var i,
              r,
              s = {};
            for (r in t) (s[r] = e.style[r]), (e.style[r] = t[r]);
            for (r in ((i = n.call(e)), t)) e.style[r] = s[r];
            return i;
          },
          Fe = new RegExp(se.join("|"), "i");
        function We(e, t, n) {
          var i,
            r,
            s,
            o,
            a = e.style;
          return (
            (n = n || Be(e)) &&
              ("" !== (o = n.getPropertyValue(t) || n[t]) ||
                ae(e) ||
                (o = S.style(e, t)),
              !g.pixelBoxStyles() &&
                He.test(o) &&
                Fe.test(t) &&
                ((i = a.width),
                (r = a.minWidth),
                (s = a.maxWidth),
                (a.minWidth = a.maxWidth = a.width = o),
                (o = n.width),
                (a.width = i),
                (a.minWidth = r),
                (a.maxWidth = s))),
            void 0 !== o ? o + "" : o
          );
        }
        function Ye(e, t) {
          return {
            get: function () {
              if (!e()) return (this.get = t).apply(this, arguments);
              delete this.get;
            },
          };
        }
        !(function () {
          function e() {
            if (u) {
              (c.style.cssText =
                "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                (u.style.cssText =
                  "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                oe.appendChild(c).appendChild(u);
              var e = n.getComputedStyle(u);
              (i = "1%" !== e.top),
                (l = 12 === t(e.marginLeft)),
                (u.style.right = "60%"),
                (o = 36 === t(e.right)),
                (r = 36 === t(e.width)),
                (u.style.position = "absolute"),
                (s = 12 === t(u.offsetWidth / 3)),
                oe.removeChild(c),
                (u = null);
            }
          }
          function t(e) {
            return Math.round(parseFloat(e));
          }
          var i,
            r,
            s,
            o,
            a,
            l,
            c = b.createElement("div"),
            u = b.createElement("div");
          u.style &&
            ((u.style.backgroundClip = "content-box"),
            (u.cloneNode(!0).style.backgroundClip = ""),
            (g.clearCloneStyle = "content-box" === u.style.backgroundClip),
            S.extend(g, {
              boxSizingReliable: function () {
                return e(), r;
              },
              pixelBoxStyles: function () {
                return e(), o;
              },
              pixelPosition: function () {
                return e(), i;
              },
              reliableMarginLeft: function () {
                return e(), l;
              },
              scrollboxSize: function () {
                return e(), s;
              },
              reliableTrDimensions: function () {
                var e, t, i, r;
                return (
                  null == a &&
                    ((e = b.createElement("table")),
                    (t = b.createElement("tr")),
                    (i = b.createElement("div")),
                    (e.style.cssText = "position:absolute;left:-11111px"),
                    (t.style.height = "1px"),
                    (i.style.height = "9px"),
                    oe.appendChild(e).appendChild(t).appendChild(i),
                    (r = n.getComputedStyle(t)),
                    (a = 3 < parseInt(r.height)),
                    oe.removeChild(e)),
                  a
                );
              },
            }));
        })();
        var Xe = ["Webkit", "Moz", "ms"],
          Ve = b.createElement("div").style,
          Ge = {};
        function Ue(e) {
          return (
            S.cssProps[e] ||
            Ge[e] ||
            (e in Ve
              ? e
              : (Ge[e] =
                  (function (e) {
                    for (
                      var t = e[0].toUpperCase() + e.slice(1), n = Xe.length;
                      n--;

                    )
                      if ((e = Xe[n] + t) in Ve) return e;
                  })(e) || e))
          );
        }
        var Ke = /^(none|table(?!-c[ea]).+)/,
          Qe = /^--/,
          Ze = { position: "absolute", visibility: "hidden", display: "block" },
          Je = { letterSpacing: "0", fontWeight: "400" };
        function et(e, t, n) {
          var i = re.exec(t);
          return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
        }
        function tt(e, t, n, i, r, s) {
          var o = "width" === t ? 1 : 0,
            a = 0,
            l = 0;
          if (n === (i ? "border" : "content")) return 0;
          for (; o < 4; o += 2)
            "margin" === n && (l += S.css(e, n + se[o], !0, r)),
              i
                ? ("content" === n && (l -= S.css(e, "padding" + se[o], !0, r)),
                  "margin" !== n &&
                    (l -= S.css(e, "border" + se[o] + "Width", !0, r)))
                : ((l += S.css(e, "padding" + se[o], !0, r)),
                  "padding" !== n
                    ? (l += S.css(e, "border" + se[o] + "Width", !0, r))
                    : (a += S.css(e, "border" + se[o] + "Width", !0, r)));
          return (
            !i &&
              0 <= s &&
              (l +=
                Math.max(
                  0,
                  Math.ceil(
                    e["offset" + t[0].toUpperCase() + t.slice(1)] -
                      s -
                      l -
                      a -
                      0.5
                  )
                ) || 0),
            l
          );
        }
        function nt(e, t, n) {
          var i = Be(e),
            r =
              (!g.boxSizingReliable() || n) &&
              "border-box" === S.css(e, "boxSizing", !1, i),
            s = r,
            o = We(e, t, i),
            a = "offset" + t[0].toUpperCase() + t.slice(1);
          if (He.test(o)) {
            if (!n) return o;
            o = "auto";
          }
          return (
            ((!g.boxSizingReliable() && r) ||
              (!g.reliableTrDimensions() && P(e, "tr")) ||
              "auto" === o ||
              (!parseFloat(o) && "inline" === S.css(e, "display", !1, i))) &&
              e.getClientRects().length &&
              ((r = "border-box" === S.css(e, "boxSizing", !1, i)),
              (s = a in e) && (o = e[a])),
            (o = parseFloat(o) || 0) +
              tt(e, t, n || (r ? "border" : "content"), s, i, o) +
              "px"
          );
        }
        function it(e, t, n, i, r) {
          return new it.prototype.init(e, t, n, i, r);
        }
        S.extend({
          cssHooks: {
            opacity: {
              get: function (e, t) {
                if (t) {
                  var n = We(e, "opacity");
                  return "" === n ? "1" : n;
                }
              },
            },
          },
          cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
          },
          cssProps: {},
          style: function (e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
              var r,
                s,
                o,
                a = U(t),
                l = Qe.test(t),
                c = e.style;
              if (
                (l || (t = Ue(a)),
                (o = S.cssHooks[t] || S.cssHooks[a]),
                void 0 === n)
              )
                return o && "get" in o && void 0 !== (r = o.get(e, !1, i))
                  ? r
                  : c[t];
              "string" == (s = typeof n) &&
                (r = re.exec(n)) &&
                r[1] &&
                ((n = ue(e, t, r)), (s = "number")),
                null != n &&
                  n == n &&
                  ("number" !== s ||
                    l ||
                    (n += (r && r[3]) || (S.cssNumber[a] ? "" : "px")),
                  g.clearCloneStyle ||
                    "" !== n ||
                    0 !== t.indexOf("background") ||
                    (c[t] = "inherit"),
                  (o && "set" in o && void 0 === (n = o.set(e, n, i))) ||
                    (l ? c.setProperty(t, n) : (c[t] = n)));
            }
          },
          css: function (e, t, n, i) {
            var r,
              s,
              o,
              a = U(t);
            return (
              Qe.test(t) || (t = Ue(a)),
              (o = S.cssHooks[t] || S.cssHooks[a]) &&
                "get" in o &&
                (r = o.get(e, !0, n)),
              void 0 === r && (r = We(e, t, i)),
              "normal" === r && t in Je && (r = Je[t]),
              "" === n || n
                ? ((s = parseFloat(r)), !0 === n || isFinite(s) ? s || 0 : r)
                : r
            );
          },
        }),
          S.each(["height", "width"], function (e, t) {
            S.cssHooks[t] = {
              get: function (e, n, i) {
                if (n)
                  return !Ke.test(S.css(e, "display")) ||
                    (e.getClientRects().length &&
                      e.getBoundingClientRect().width)
                    ? nt(e, t, i)
                    : qe(e, Ze, function () {
                        return nt(e, t, i);
                      });
              },
              set: function (e, n, i) {
                var r,
                  s = Be(e),
                  o = !g.scrollboxSize() && "absolute" === s.position,
                  a = (o || i) && "border-box" === S.css(e, "boxSizing", !1, s),
                  l = i ? tt(e, t, i, a, s) : 0;
                return (
                  a &&
                    o &&
                    (l -= Math.ceil(
                      e["offset" + t[0].toUpperCase() + t.slice(1)] -
                        parseFloat(s[t]) -
                        tt(e, t, "border", !1, s) -
                        0.5
                    )),
                  l &&
                    (r = re.exec(n)) &&
                    "px" !== (r[3] || "px") &&
                    ((e.style[t] = n), (n = S.css(e, t))),
                  et(0, n, l)
                );
              },
            };
          }),
          (S.cssHooks.marginLeft = Ye(g.reliableMarginLeft, function (e, t) {
            if (t)
              return (
                (parseFloat(We(e, "marginLeft")) ||
                  e.getBoundingClientRect().left -
                    qe(e, { marginLeft: 0 }, function () {
                      return e.getBoundingClientRect().left;
                    })) + "px"
              );
          })),
          S.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
            (S.cssHooks[e + t] = {
              expand: function (n) {
                for (
                  var i = 0,
                    r = {},
                    s = "string" == typeof n ? n.split(" ") : [n];
                  i < 4;
                  i++
                )
                  r[e + se[i] + t] = s[i] || s[i - 2] || s[0];
                return r;
              },
            }),
              "margin" !== e && (S.cssHooks[e + t].set = et);
          }),
          S.fn.extend({
            css: function (e, t) {
              return Y(
                this,
                function (e, t, n) {
                  var i,
                    r,
                    s = {},
                    o = 0;
                  if (Array.isArray(t)) {
                    for (i = Be(e), r = t.length; o < r; o++)
                      s[t[o]] = S.css(e, t[o], !1, i);
                    return s;
                  }
                  return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
                },
                e,
                t,
                1 < arguments.length
              );
            },
          }),
          (((S.Tween = it).prototype = {
            constructor: it,
            init: function (e, t, n, i, r, s) {
              (this.elem = e),
                (this.prop = n),
                (this.easing = r || S.easing._default),
                (this.options = t),
                (this.start = this.now = this.cur()),
                (this.end = i),
                (this.unit = s || (S.cssNumber[n] ? "" : "px"));
            },
            cur: function () {
              var e = it.propHooks[this.prop];
              return e && e.get ? e.get(this) : it.propHooks._default.get(this);
            },
            run: function (e) {
              var t,
                n = it.propHooks[this.prop];
              return (
                this.options.duration
                  ? (this.pos = t =
                      S.easing[this.easing](
                        e,
                        this.options.duration * e,
                        0,
                        1,
                        this.options.duration
                      ))
                  : (this.pos = t = e),
                (this.now = (this.end - this.start) * t + this.start),
                this.options.step &&
                  this.options.step.call(this.elem, this.now, this),
                n && n.set ? n.set(this) : it.propHooks._default.set(this),
                this
              );
            },
          }).init.prototype = it.prototype),
          ((it.propHooks = {
            _default: {
              get: function (e) {
                var t;
                return 1 !== e.elem.nodeType ||
                  (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                  ? e.elem[e.prop]
                  : (t = S.css(e.elem, e.prop, "")) && "auto" !== t
                  ? t
                  : 0;
              },
              set: function (e) {
                S.fx.step[e.prop]
                  ? S.fx.step[e.prop](e)
                  : 1 !== e.elem.nodeType ||
                    (!S.cssHooks[e.prop] && null == e.elem.style[Ue(e.prop)])
                  ? (e.elem[e.prop] = e.now)
                  : S.style(e.elem, e.prop, e.now + e.unit);
              },
            },
          }).scrollTop = it.propHooks.scrollLeft =
            {
              set: function (e) {
                e.elem.nodeType &&
                  e.elem.parentNode &&
                  (e.elem[e.prop] = e.now);
              },
            }),
          (S.easing = {
            linear: function (e) {
              return e;
            },
            swing: function (e) {
              return 0.5 - Math.cos(e * Math.PI) / 2;
            },
            _default: "swing",
          }),
          (S.fx = it.prototype.init),
          (S.fx.step = {});
        var rt,
          st,
          ot,
          at,
          lt = /^(?:toggle|show|hide)$/,
          ct = /queueHooks$/;
        function ut() {
          st &&
            (!1 === b.hidden && n.requestAnimationFrame
              ? n.requestAnimationFrame(ut)
              : n.setTimeout(ut, S.fx.interval),
            S.fx.tick());
        }
        function dt() {
          return (
            n.setTimeout(function () {
              rt = void 0;
            }),
            (rt = Date.now())
          );
        }
        function ht(e, t) {
          var n,
            i = 0,
            r = { height: e };
          for (t = t ? 1 : 0; i < 4; i += 2 - t)
            r["margin" + (n = se[i])] = r["padding" + n] = e;
          return t && (r.opacity = r.width = e), r;
        }
        function pt(e, t, n) {
          for (
            var i,
              r = (ft.tweeners[t] || []).concat(ft.tweeners["*"]),
              s = 0,
              o = r.length;
            s < o;
            s++
          )
            if ((i = r[s].call(n, t, e))) return i;
        }
        function ft(e, t, n) {
          var i,
            r,
            s = 0,
            o = ft.prefilters.length,
            a = S.Deferred().always(function () {
              delete l.elem;
            }),
            l = function () {
              if (r) return !1;
              for (
                var t = rt || dt(),
                  n = Math.max(0, c.startTime + c.duration - t),
                  i = 1 - (n / c.duration || 0),
                  s = 0,
                  o = c.tweens.length;
                s < o;
                s++
              )
                c.tweens[s].run(i);
              return (
                a.notifyWith(e, [c, i, n]),
                i < 1 && o
                  ? n
                  : (o || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1)
              );
            },
            c = a.promise({
              elem: e,
              props: S.extend({}, t),
              opts: S.extend(
                !0,
                { specialEasing: {}, easing: S.easing._default },
                n
              ),
              originalProperties: t,
              originalOptions: n,
              startTime: rt || dt(),
              duration: n.duration,
              tweens: [],
              createTween: function (t, n) {
                var i = S.Tween(
                  e,
                  c.opts,
                  t,
                  n,
                  c.opts.specialEasing[t] || c.opts.easing
                );
                return c.tweens.push(i), i;
              },
              stop: function (t) {
                var n = 0,
                  i = t ? c.tweens.length : 0;
                if (r) return this;
                for (r = !0; n < i; n++) c.tweens[n].run(1);
                return (
                  t
                    ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t]))
                    : a.rejectWith(e, [c, t]),
                  this
                );
              },
            }),
            u = c.props;
          for (
            (function (e, t) {
              var n, i, r, s, o;
              for (n in e)
                if (
                  ((r = t[(i = U(n))]),
                  (s = e[n]),
                  Array.isArray(s) && ((r = s[1]), (s = e[n] = s[0])),
                  n !== i && ((e[i] = s), delete e[n]),
                  (o = S.cssHooks[i]) && ("expand" in o))
                )
                  for (n in ((s = o.expand(s)), delete e[i], s))
                    (n in e) || ((e[n] = s[n]), (t[n] = r));
                else t[i] = r;
            })(u, c.opts.specialEasing);
            s < o;
            s++
          )
            if ((i = ft.prefilters[s].call(c, e, u, c.opts)))
              return (
                v(i.stop) &&
                  (S._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)),
                i
              );
          return (
            S.map(u, pt, c),
            v(c.opts.start) && c.opts.start.call(e, c),
            c
              .progress(c.opts.progress)
              .done(c.opts.done, c.opts.complete)
              .fail(c.opts.fail)
              .always(c.opts.always),
            S.fx.timer(S.extend(l, { elem: e, anim: c, queue: c.opts.queue })),
            c
          );
        }
        (S.Animation = S.extend(ft, {
          tweeners: {
            "*": [
              function (e, t) {
                var n = this.createTween(e, t);
                return ue(n.elem, e, re.exec(t), n), n;
              },
            ],
          },
          tweener: function (e, t) {
            v(e) ? ((t = e), (e = ["*"])) : (e = e.match(N));
            for (var n, i = 0, r = e.length; i < r; i++)
              (n = e[i]),
                (ft.tweeners[n] = ft.tweeners[n] || []),
                ft.tweeners[n].unshift(t);
          },
          prefilters: [
            function (e, t, n) {
              var i,
                r,
                s,
                o,
                a,
                l,
                c,
                u,
                d = "width" in t || "height" in t,
                h = this,
                p = {},
                f = e.style,
                m = e.nodeType && ce(e),
                g = Z.get(e, "fxshow");
              for (i in (n.queue ||
                (null == (o = S._queueHooks(e, "fx")).unqueued &&
                  ((o.unqueued = 0),
                  (a = o.empty.fire),
                  (o.empty.fire = function () {
                    o.unqueued || a();
                  })),
                o.unqueued++,
                h.always(function () {
                  h.always(function () {
                    o.unqueued--, S.queue(e, "fx").length || o.empty.fire();
                  });
                })),
              t))
                if (((r = t[i]), lt.test(r))) {
                  if (
                    (delete t[i],
                    (s = s || "toggle" === r),
                    r === (m ? "hide" : "show"))
                  ) {
                    if ("show" !== r || !g || void 0 === g[i]) continue;
                    m = !0;
                  }
                  p[i] = (g && g[i]) || S.style(e, i);
                }
              if ((l = !S.isEmptyObject(t)) || !S.isEmptyObject(p))
                for (i in (d &&
                  1 === e.nodeType &&
                  ((n.overflow = [f.overflow, f.overflowX, f.overflowY]),
                  null == (c = g && g.display) && (c = Z.get(e, "display")),
                  "none" === (u = S.css(e, "display")) &&
                    (c
                      ? (u = c)
                      : (he([e], !0),
                        (c = e.style.display || c),
                        (u = S.css(e, "display")),
                        he([e]))),
                  ("inline" === u || ("inline-block" === u && null != c)) &&
                    "none" === S.css(e, "float") &&
                    (l ||
                      (h.done(function () {
                        f.display = c;
                      }),
                      null == c &&
                        ((u = f.display), (c = "none" === u ? "" : u))),
                    (f.display = "inline-block"))),
                n.overflow &&
                  ((f.overflow = "hidden"),
                  h.always(function () {
                    (f.overflow = n.overflow[0]),
                      (f.overflowX = n.overflow[1]),
                      (f.overflowY = n.overflow[2]);
                  })),
                (l = !1),
                p))
                  l ||
                    (g
                      ? "hidden" in g && (m = g.hidden)
                      : (g = Z.access(e, "fxshow", { display: c })),
                    s && (g.hidden = !m),
                    m && he([e], !0),
                    h.done(function () {
                      for (i in (m || he([e]), Z.remove(e, "fxshow"), p))
                        S.style(e, i, p[i]);
                    })),
                    (l = pt(m ? g[i] : 0, i, h)),
                    i in g ||
                      ((g[i] = l.start),
                      m && ((l.end = l.start), (l.start = 0)));
            },
          ],
          prefilter: function (e, t) {
            t ? ft.prefilters.unshift(e) : ft.prefilters.push(e);
          },
        })),
          (S.speed = function (e, t, n) {
            var i =
              e && "object" == typeof e
                ? S.extend({}, e)
                : {
                    complete: n || (!n && t) || (v(e) && e),
                    duration: e,
                    easing: (n && t) || (t && !v(t) && t),
                  };
            return (
              S.fx.off
                ? (i.duration = 0)
                : "number" != typeof i.duration &&
                  (i.duration in S.fx.speeds
                    ? (i.duration = S.fx.speeds[i.duration])
                    : (i.duration = S.fx.speeds._default)),
              (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
              (i.old = i.complete),
              (i.complete = function () {
                v(i.old) && i.old.call(this),
                  i.queue && S.dequeue(this, i.queue);
              }),
              i
            );
          }),
          S.fn.extend({
            fadeTo: function (e, t, n, i) {
              return this.filter(ce)
                .css("opacity", 0)
                .show()
                .end()
                .animate({ opacity: t }, e, n, i);
            },
            animate: function (e, t, n, i) {
              var r = S.isEmptyObject(e),
                s = S.speed(t, n, i),
                o = function () {
                  var t = ft(this, S.extend({}, e), s);
                  (r || Z.get(this, "finish")) && t.stop(!0);
                };
              return (
                (o.finish = o),
                r || !1 === s.queue ? this.each(o) : this.queue(s.queue, o)
              );
            },
            stop: function (e, t, n) {
              var i = function (e) {
                var t = e.stop;
                delete e.stop, t(n);
              };
              return (
                "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                t && this.queue(e || "fx", []),
                this.each(function () {
                  var t = !0,
                    r = null != e && e + "queueHooks",
                    s = S.timers,
                    o = Z.get(this);
                  if (r) o[r] && o[r].stop && i(o[r]);
                  else for (r in o) o[r] && o[r].stop && ct.test(r) && i(o[r]);
                  for (r = s.length; r--; )
                    s[r].elem !== this ||
                      (null != e && s[r].queue !== e) ||
                      (s[r].anim.stop(n), (t = !1), s.splice(r, 1));
                  (!t && n) || S.dequeue(this, e);
                })
              );
            },
            finish: function (e) {
              return (
                !1 !== e && (e = e || "fx"),
                this.each(function () {
                  var t,
                    n = Z.get(this),
                    i = n[e + "queue"],
                    r = n[e + "queueHooks"],
                    s = S.timers,
                    o = i ? i.length : 0;
                  for (
                    n.finish = !0,
                      S.queue(this, e, []),
                      r && r.stop && r.stop.call(this, !0),
                      t = s.length;
                    t--;

                  )
                    s[t].elem === this &&
                      s[t].queue === e &&
                      (s[t].anim.stop(!0), s.splice(t, 1));
                  for (t = 0; t < o; t++)
                    i[t] && i[t].finish && i[t].finish.call(this);
                  delete n.finish;
                })
              );
            },
          }),
          S.each(["toggle", "show", "hide"], function (e, t) {
            var n = S.fn[t];
            S.fn[t] = function (e, i, r) {
              return null == e || "boolean" == typeof e
                ? n.apply(this, arguments)
                : this.animate(ht(t, !0), e, i, r);
            };
          }),
          S.each(
            {
              slideDown: ht("show"),
              slideUp: ht("hide"),
              slideToggle: ht("toggle"),
              fadeIn: { opacity: "show" },
              fadeOut: { opacity: "hide" },
              fadeToggle: { opacity: "toggle" },
            },
            function (e, t) {
              S.fn[e] = function (e, n, i) {
                return this.animate(t, e, n, i);
              };
            }
          ),
          (S.timers = []),
          (S.fx.tick = function () {
            var e,
              t = 0,
              n = S.timers;
            for (rt = Date.now(); t < n.length; t++)
              (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || S.fx.stop(), (rt = void 0);
          }),
          (S.fx.timer = function (e) {
            S.timers.push(e), S.fx.start();
          }),
          (S.fx.interval = 13),
          (S.fx.start = function () {
            st || ((st = !0), ut());
          }),
          (S.fx.stop = function () {
            st = null;
          }),
          (S.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
          (S.fn.delay = function (e, t) {
            return (
              (e = (S.fx && S.fx.speeds[e]) || e),
              (t = t || "fx"),
              this.queue(t, function (t, i) {
                var r = n.setTimeout(t, e);
                i.stop = function () {
                  n.clearTimeout(r);
                };
              })
            );
          }),
          (ot = b.createElement("input")),
          (at = b
            .createElement("select")
            .appendChild(b.createElement("option"))),
          (ot.type = "checkbox"),
          (g.checkOn = "" !== ot.value),
          (g.optSelected = at.selected),
          ((ot = b.createElement("input")).value = "t"),
          (ot.type = "radio"),
          (g.radioValue = "t" === ot.value);
        var mt,
          gt = S.expr.attrHandle;
        S.fn.extend({
          attr: function (e, t) {
            return Y(this, S.attr, e, t, 1 < arguments.length);
          },
          removeAttr: function (e) {
            return this.each(function () {
              S.removeAttr(this, e);
            });
          },
        }),
          S.extend({
            attr: function (e, t, n) {
              var i,
                r,
                s = e.nodeType;
              if (3 !== s && 8 !== s && 2 !== s)
                return void 0 === e.getAttribute
                  ? S.prop(e, t, n)
                  : ((1 === s && S.isXMLDoc(e)) ||
                      (r =
                        S.attrHooks[t.toLowerCase()] ||
                        (S.expr.match.bool.test(t) ? mt : void 0)),
                    void 0 !== n
                      ? null === n
                        ? void S.removeAttr(e, t)
                        : r && "set" in r && void 0 !== (i = r.set(e, n, t))
                        ? i
                        : (e.setAttribute(t, n + ""), n)
                      : r && "get" in r && null !== (i = r.get(e, t))
                      ? i
                      : null == (i = S.find.attr(e, t))
                      ? void 0
                      : i);
            },
            attrHooks: {
              type: {
                set: function (e, t) {
                  if (!g.radioValue && "radio" === t && P(e, "input")) {
                    var n = e.value;
                    return e.setAttribute("type", t), n && (e.value = n), t;
                  }
                },
              },
            },
            removeAttr: function (e, t) {
              var n,
                i = 0,
                r = t && t.match(N);
              if (r && 1 === e.nodeType)
                for (; (n = r[i++]); ) e.removeAttribute(n);
            },
          }),
          (mt = {
            set: function (e, t, n) {
              return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
            },
          }),
          S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var n = gt[t] || S.find.attr;
            gt[t] = function (e, t, i) {
              var r,
                s,
                o = t.toLowerCase();
              return (
                i ||
                  ((s = gt[o]),
                  (gt[o] = r),
                  (r = null != n(e, t, i) ? o : null),
                  (gt[o] = s)),
                r
              );
            };
          });
        var vt = /^(?:input|select|textarea|button)$/i,
          yt = /^(?:a|area)$/i;
        function bt(e) {
          return (e.match(N) || []).join(" ");
        }
        function wt(e) {
          return (e.getAttribute && e.getAttribute("class")) || "";
        }
        function xt(e) {
          return Array.isArray(e)
            ? e
            : ("string" == typeof e && e.match(N)) || [];
        }
        S.fn.extend({
          prop: function (e, t) {
            return Y(this, S.prop, e, t, 1 < arguments.length);
          },
          removeProp: function (e) {
            return this.each(function () {
              delete this[S.propFix[e] || e];
            });
          },
        }),
          S.extend({
            prop: function (e, t, n) {
              var i,
                r,
                s = e.nodeType;
              if (3 !== s && 8 !== s && 2 !== s)
                return (
                  (1 === s && S.isXMLDoc(e)) ||
                    ((t = S.propFix[t] || t), (r = S.propHooks[t])),
                  void 0 !== n
                    ? r && "set" in r && void 0 !== (i = r.set(e, n, t))
                      ? i
                      : (e[t] = n)
                    : r && "get" in r && null !== (i = r.get(e, t))
                    ? i
                    : e[t]
                );
            },
            propHooks: {
              tabIndex: {
                get: function (e) {
                  var t = S.find.attr(e, "tabindex");
                  return t
                    ? parseInt(t, 10)
                    : vt.test(e.nodeName) || (yt.test(e.nodeName) && e.href)
                    ? 0
                    : -1;
                },
              },
            },
            propFix: { for: "htmlFor", class: "className" },
          }),
          g.optSelected ||
            (S.propHooks.selected = {
              get: function (e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null;
              },
              set: function (e) {
                var t = e.parentNode;
                t &&
                  (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
              },
            }),
          S.each(
            [
              "tabIndex",
              "readOnly",
              "maxLength",
              "cellSpacing",
              "cellPadding",
              "rowSpan",
              "colSpan",
              "useMap",
              "frameBorder",
              "contentEditable",
            ],
            function () {
              S.propFix[this.toLowerCase()] = this;
            }
          ),
          S.fn.extend({
            addClass: function (e) {
              var t,
                n,
                i,
                r,
                s,
                o,
                a,
                l = 0;
              if (v(e))
                return this.each(function (t) {
                  S(this).addClass(e.call(this, t, wt(this)));
                });
              if ((t = xt(e)).length)
                for (; (n = this[l++]); )
                  if (
                    ((r = wt(n)), (i = 1 === n.nodeType && " " + bt(r) + " "))
                  ) {
                    for (o = 0; (s = t[o++]); )
                      i.indexOf(" " + s + " ") < 0 && (i += s + " ");
                    r !== (a = bt(i)) && n.setAttribute("class", a);
                  }
              return this;
            },
            removeClass: function (e) {
              var t,
                n,
                i,
                r,
                s,
                o,
                a,
                l = 0;
              if (v(e))
                return this.each(function (t) {
                  S(this).removeClass(e.call(this, t, wt(this)));
                });
              if (!arguments.length) return this.attr("class", "");
              if ((t = xt(e)).length)
                for (; (n = this[l++]); )
                  if (
                    ((r = wt(n)), (i = 1 === n.nodeType && " " + bt(r) + " "))
                  ) {
                    for (o = 0; (s = t[o++]); )
                      for (; -1 < i.indexOf(" " + s + " "); )
                        i = i.replace(" " + s + " ", " ");
                    r !== (a = bt(i)) && n.setAttribute("class", a);
                  }
              return this;
            },
            toggleClass: function (e, t) {
              var n = typeof e,
                i = "string" === n || Array.isArray(e);
              return "boolean" == typeof t && i
                ? t
                  ? this.addClass(e)
                  : this.removeClass(e)
                : v(e)
                ? this.each(function (n) {
                    S(this).toggleClass(e.call(this, n, wt(this), t), t);
                  })
                : this.each(function () {
                    var t, r, s, o;
                    if (i)
                      for (r = 0, s = S(this), o = xt(e); (t = o[r++]); )
                        s.hasClass(t) ? s.removeClass(t) : s.addClass(t);
                    else
                      (void 0 !== e && "boolean" !== n) ||
                        ((t = wt(this)) && Z.set(this, "__className__", t),
                        this.setAttribute &&
                          this.setAttribute(
                            "class",
                            t || !1 === e
                              ? ""
                              : Z.get(this, "__className__") || ""
                          ));
                  });
            },
            hasClass: function (e) {
              var t,
                n,
                i = 0;
              for (t = " " + e + " "; (n = this[i++]); )
                if (1 === n.nodeType && -1 < (" " + bt(wt(n)) + " ").indexOf(t))
                  return !0;
              return !1;
            },
          });
        var Tt = /\r/g;
        S.fn.extend({
          val: function (e) {
            var t,
              n,
              i,
              r = this[0];
            return arguments.length
              ? ((i = v(e)),
                this.each(function (n) {
                  var r;
                  1 === this.nodeType &&
                    (null == (r = i ? e.call(this, n, S(this).val()) : e)
                      ? (r = "")
                      : "number" == typeof r
                      ? (r += "")
                      : Array.isArray(r) &&
                        (r = S.map(r, function (e) {
                          return null == e ? "" : e + "";
                        })),
                    ((t =
                      S.valHooks[this.type] ||
                      S.valHooks[this.nodeName.toLowerCase()]) &&
                      "set" in t &&
                      void 0 !== t.set(this, r, "value")) ||
                      (this.value = r));
                }))
              : r
              ? (t =
                  S.valHooks[r.type] || S.valHooks[r.nodeName.toLowerCase()]) &&
                "get" in t &&
                void 0 !== (n = t.get(r, "value"))
                ? n
                : "string" == typeof (n = r.value)
                ? n.replace(Tt, "")
                : null == n
                ? ""
                : n
              : void 0;
          },
        }),
          S.extend({
            valHooks: {
              option: {
                get: function (e) {
                  var t = S.find.attr(e, "value");
                  return null != t ? t : bt(S.text(e));
                },
              },
              select: {
                get: function (e) {
                  var t,
                    n,
                    i,
                    r = e.options,
                    s = e.selectedIndex,
                    o = "select-one" === e.type,
                    a = o ? null : [],
                    l = o ? s + 1 : r.length;
                  for (i = s < 0 ? l : o ? s : 0; i < l; i++)
                    if (
                      ((n = r[i]).selected || i === s) &&
                      !n.disabled &&
                      (!n.parentNode.disabled || !P(n.parentNode, "optgroup"))
                    ) {
                      if (((t = S(n).val()), o)) return t;
                      a.push(t);
                    }
                  return a;
                },
                set: function (e, t) {
                  for (
                    var n, i, r = e.options, s = S.makeArray(t), o = r.length;
                    o--;

                  )
                    ((i = r[o]).selected =
                      -1 < S.inArray(S.valHooks.option.get(i), s)) && (n = !0);
                  return n || (e.selectedIndex = -1), s;
                },
              },
            },
          }),
          S.each(["radio", "checkbox"], function () {
            (S.valHooks[this] = {
              set: function (e, t) {
                if (Array.isArray(t))
                  return (e.checked = -1 < S.inArray(S(e).val(), t));
              },
            }),
              g.checkOn ||
                (S.valHooks[this].get = function (e) {
                  return null === e.getAttribute("value") ? "on" : e.value;
                });
          }),
          (g.focusin = "onfocusin" in n);
        var Et = /^(?:focusinfocus|focusoutblur)$/,
          St = function (e) {
            e.stopPropagation();
          };
        S.extend(S.event, {
          trigger: function (e, t, i, r) {
            var s,
              o,
              a,
              l,
              c,
              u,
              d,
              h,
              f = [i || b],
              m = p.call(e, "type") ? e.type : e,
              g = p.call(e, "namespace") ? e.namespace.split(".") : [];
            if (
              ((o = h = a = i = i || b),
              3 !== i.nodeType &&
                8 !== i.nodeType &&
                !Et.test(m + S.event.triggered) &&
                (-1 < m.indexOf(".") &&
                  ((m = (g = m.split(".")).shift()), g.sort()),
                (c = m.indexOf(":") < 0 && "on" + m),
                ((e = e[S.expando]
                  ? e
                  : new S.Event(m, "object" == typeof e && e)).isTrigger = r
                  ? 2
                  : 3),
                (e.namespace = g.join(".")),
                (e.rnamespace = e.namespace
                  ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)")
                  : null),
                (e.result = void 0),
                e.target || (e.target = i),
                (t = null == t ? [e] : S.makeArray(t, [e])),
                (d = S.event.special[m] || {}),
                r || !d.trigger || !1 !== d.trigger.apply(i, t)))
            ) {
              if (!r && !d.noBubble && !y(i)) {
                for (
                  l = d.delegateType || m, Et.test(l + m) || (o = o.parentNode);
                  o;
                  o = o.parentNode
                )
                  f.push(o), (a = o);
                a === (i.ownerDocument || b) &&
                  f.push(a.defaultView || a.parentWindow || n);
              }
              for (s = 0; (o = f[s++]) && !e.isPropagationStopped(); )
                (h = o),
                  (e.type = 1 < s ? l : d.bindType || m),
                  (u =
                    (Z.get(o, "events") || Object.create(null))[e.type] &&
                    Z.get(o, "handle")) && u.apply(o, t),
                  (u = c && o[c]) &&
                    u.apply &&
                    K(o) &&
                    ((e.result = u.apply(o, t)),
                    !1 === e.result && e.preventDefault());
              return (
                (e.type = m),
                r ||
                  e.isDefaultPrevented() ||
                  (d._default && !1 !== d._default.apply(f.pop(), t)) ||
                  !K(i) ||
                  (c &&
                    v(i[m]) &&
                    !y(i) &&
                    ((a = i[c]) && (i[c] = null),
                    (S.event.triggered = m),
                    e.isPropagationStopped() && h.addEventListener(m, St),
                    i[m](),
                    e.isPropagationStopped() && h.removeEventListener(m, St),
                    (S.event.triggered = void 0),
                    a && (i[c] = a))),
                e.result
              );
            }
          },
          simulate: function (e, t, n) {
            var i = S.extend(new S.Event(), n, { type: e, isSimulated: !0 });
            S.event.trigger(i, null, t);
          },
        }),
          S.fn.extend({
            trigger: function (e, t) {
              return this.each(function () {
                S.event.trigger(e, t, this);
              });
            },
            triggerHandler: function (e, t) {
              var n = this[0];
              if (n) return S.event.trigger(e, t, n, !0);
            },
          }),
          g.focusin ||
            S.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
              var n = function (e) {
                S.event.simulate(t, e.target, S.event.fix(e));
              };
              S.event.special[t] = {
                setup: function () {
                  var i = this.ownerDocument || this.document || this,
                    r = Z.access(i, t);
                  r || i.addEventListener(e, n, !0),
                    Z.access(i, t, (r || 0) + 1);
                },
                teardown: function () {
                  var i = this.ownerDocument || this.document || this,
                    r = Z.access(i, t) - 1;
                  r
                    ? Z.access(i, t, r)
                    : (i.removeEventListener(e, n, !0), Z.remove(i, t));
                },
              };
            });
        var Ct = n.location,
          _t = { guid: Date.now() },
          kt = /\?/;
        S.parseXML = function (e) {
          var t;
          if (!e || "string" != typeof e) return null;
          try {
            t = new n.DOMParser().parseFromString(e, "text/xml");
          } catch (e) {
            t = void 0;
          }
          return (
            (t && !t.getElementsByTagName("parsererror").length) ||
              S.error("Invalid XML: " + e),
            t
          );
        };
        var Mt = /\[\]$/,
          Lt = /\r?\n/g,
          Pt = /^(?:submit|button|image|reset|file)$/i,
          Ot = /^(?:input|select|textarea|keygen)/i;
        function At(e, t, n, i) {
          var r;
          if (Array.isArray(t))
            S.each(t, function (t, r) {
              n || Mt.test(e)
                ? i(e, r)
                : At(
                    e +
                      "[" +
                      ("object" == typeof r && null != r ? t : "") +
                      "]",
                    r,
                    n,
                    i
                  );
            });
          else if (n || "object" !== T(t)) i(e, t);
          else for (r in t) At(e + "[" + r + "]", t[r], n, i);
        }
        (S.param = function (e, t) {
          var n,
            i = [],
            r = function (e, t) {
              var n = v(t) ? t() : t;
              i[i.length] =
                encodeURIComponent(e) +
                "=" +
                encodeURIComponent(null == n ? "" : n);
            };
          if (null == e) return "";
          if (Array.isArray(e) || (e.jquery && !S.isPlainObject(e)))
            S.each(e, function () {
              r(this.name, this.value);
            });
          else for (n in e) At(n, e[n], t, r);
          return i.join("&");
        }),
          S.fn.extend({
            serialize: function () {
              return S.param(this.serializeArray());
            },
            serializeArray: function () {
              return this.map(function () {
                var e = S.prop(this, "elements");
                return e ? S.makeArray(e) : this;
              })
                .filter(function () {
                  var e = this.type;
                  return (
                    this.name &&
                    !S(this).is(":disabled") &&
                    Ot.test(this.nodeName) &&
                    !Pt.test(e) &&
                    (this.checked || !me.test(e))
                  );
                })
                .map(function (e, t) {
                  var n = S(this).val();
                  return null == n
                    ? null
                    : Array.isArray(n)
                    ? S.map(n, function (e) {
                        return { name: t.name, value: e.replace(Lt, "\r\n") };
                      })
                    : { name: t.name, value: n.replace(Lt, "\r\n") };
                })
                .get();
            },
          });
        var Dt = /%20/g,
          zt = /#.*$/,
          $t = /([?&])_=[^&]*/,
          It = /^(.*?):[ \t]*([^\r\n]*)$/gm,
          jt = /^(?:GET|HEAD)$/,
          Nt = /^\/\//,
          Rt = {},
          Ht = {},
          Bt = "*/".concat("*"),
          qt = b.createElement("a");
        function Ft(e) {
          return function (t, n) {
            "string" != typeof t && ((n = t), (t = "*"));
            var i,
              r = 0,
              s = t.toLowerCase().match(N) || [];
            if (v(n))
              for (; (i = s[r++]); )
                "+" === i[0]
                  ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n))
                  : (e[i] = e[i] || []).push(n);
          };
        }
        function Wt(e, t, n, i) {
          var r = {},
            s = e === Ht;
          function o(a) {
            var l;
            return (
              (r[a] = !0),
              S.each(e[a] || [], function (e, a) {
                var c = a(t, n, i);
                return "string" != typeof c || s || r[c]
                  ? s
                    ? !(l = c)
                    : void 0
                  : (t.dataTypes.unshift(c), o(c), !1);
              }),
              l
            );
          }
          return o(t.dataTypes[0]) || (!r["*"] && o("*"));
        }
        function Yt(e, t) {
          var n,
            i,
            r = S.ajaxSettings.flatOptions || {};
          for (n in t)
            void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
          return i && S.extend(!0, e, i), e;
        }
        (qt.href = Ct.href),
          S.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
              url: Ct.href,
              type: "GET",
              isLocal:
                /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                  Ct.protocol
                ),
              global: !0,
              processData: !0,
              async: !0,
              contentType: "application/x-www-form-urlencoded; charset=UTF-8",
              accepts: {
                "*": Bt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript",
              },
              contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
              responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON",
              },
              converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": S.parseXML,
              },
              flatOptions: { url: !0, context: !0 },
            },
            ajaxSetup: function (e, t) {
              return t ? Yt(Yt(e, S.ajaxSettings), t) : Yt(S.ajaxSettings, e);
            },
            ajaxPrefilter: Ft(Rt),
            ajaxTransport: Ft(Ht),
            ajax: function (e, t) {
              "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
              var i,
                r,
                s,
                o,
                a,
                l,
                c,
                u,
                d,
                h,
                p = S.ajaxSetup({}, t),
                f = p.context || p,
                m = p.context && (f.nodeType || f.jquery) ? S(f) : S.event,
                g = S.Deferred(),
                v = S.Callbacks("once memory"),
                y = p.statusCode || {},
                w = {},
                x = {},
                T = "canceled",
                E = {
                  readyState: 0,
                  getResponseHeader: function (e) {
                    var t;
                    if (c) {
                      if (!o)
                        for (o = {}; (t = It.exec(s)); )
                          o[t[1].toLowerCase() + " "] = (
                            o[t[1].toLowerCase() + " "] || []
                          ).concat(t[2]);
                      t = o[e.toLowerCase() + " "];
                    }
                    return null == t ? null : t.join(", ");
                  },
                  getAllResponseHeaders: function () {
                    return c ? s : null;
                  },
                  setRequestHeader: function (e, t) {
                    return (
                      null == c &&
                        ((e = x[e.toLowerCase()] = x[e.toLowerCase()] || e),
                        (w[e] = t)),
                      this
                    );
                  },
                  overrideMimeType: function (e) {
                    return null == c && (p.mimeType = e), this;
                  },
                  statusCode: function (e) {
                    var t;
                    if (e)
                      if (c) E.always(e[E.status]);
                      else for (t in e) y[t] = [y[t], e[t]];
                    return this;
                  },
                  abort: function (e) {
                    var t = e || T;
                    return i && i.abort(t), C(0, t), this;
                  },
                };
              if (
                (g.promise(E),
                (p.url = ((e || p.url || Ct.href) + "").replace(
                  Nt,
                  Ct.protocol + "//"
                )),
                (p.type = t.method || t.type || p.method || p.type),
                (p.dataTypes = (p.dataType || "*").toLowerCase().match(N) || [
                  "",
                ]),
                null == p.crossDomain)
              ) {
                l = b.createElement("a");
                try {
                  (l.href = p.url),
                    (l.href = l.href),
                    (p.crossDomain =
                      qt.protocol + "//" + qt.host !=
                      l.protocol + "//" + l.host);
                } catch (e) {
                  p.crossDomain = !0;
                }
              }
              if (
                (p.data &&
                  p.processData &&
                  "string" != typeof p.data &&
                  (p.data = S.param(p.data, p.traditional)),
                Wt(Rt, p, t, E),
                c)
              )
                return E;
              for (d in ((u = S.event && p.global) &&
                0 == S.active++ &&
                S.event.trigger("ajaxStart"),
              (p.type = p.type.toUpperCase()),
              (p.hasContent = !jt.test(p.type)),
              (r = p.url.replace(zt, "")),
              p.hasContent
                ? p.data &&
                  p.processData &&
                  0 ===
                    (p.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) &&
                  (p.data = p.data.replace(Dt, "+"))
                : ((h = p.url.slice(r.length)),
                  p.data &&
                    (p.processData || "string" == typeof p.data) &&
                    ((r += (kt.test(r) ? "&" : "?") + p.data), delete p.data),
                  !1 === p.cache &&
                    ((r = r.replace($t, "$1")),
                    (h = (kt.test(r) ? "&" : "?") + "_=" + _t.guid++ + h)),
                  (p.url = r + h)),
              p.ifModified &&
                (S.lastModified[r] &&
                  E.setRequestHeader("If-Modified-Since", S.lastModified[r]),
                S.etag[r] && E.setRequestHeader("If-None-Match", S.etag[r])),
              ((p.data && p.hasContent && !1 !== p.contentType) ||
                t.contentType) &&
                E.setRequestHeader("Content-Type", p.contentType),
              E.setRequestHeader(
                "Accept",
                p.dataTypes[0] && p.accepts[p.dataTypes[0]]
                  ? p.accepts[p.dataTypes[0]] +
                      ("*" !== p.dataTypes[0] ? ", " + Bt + "; q=0.01" : "")
                  : p.accepts["*"]
              ),
              p.headers))
                E.setRequestHeader(d, p.headers[d]);
              if (p.beforeSend && (!1 === p.beforeSend.call(f, E, p) || c))
                return E.abort();
              if (
                ((T = "abort"),
                v.add(p.complete),
                E.done(p.success),
                E.fail(p.error),
                (i = Wt(Ht, p, t, E)))
              ) {
                if (((E.readyState = 1), u && m.trigger("ajaxSend", [E, p]), c))
                  return E;
                p.async &&
                  0 < p.timeout &&
                  (a = n.setTimeout(function () {
                    E.abort("timeout");
                  }, p.timeout));
                try {
                  (c = !1), i.send(w, C);
                } catch (e) {
                  if (c) throw e;
                  C(-1, e);
                }
              } else C(-1, "No Transport");
              function C(e, t, o, l) {
                var d,
                  h,
                  b,
                  w,
                  x,
                  T = t;
                c ||
                  ((c = !0),
                  a && n.clearTimeout(a),
                  (i = void 0),
                  (s = l || ""),
                  (E.readyState = 0 < e ? 4 : 0),
                  (d = (200 <= e && e < 300) || 304 === e),
                  o &&
                    (w = (function (e, t, n) {
                      for (
                        var i, r, s, o, a = e.contents, l = e.dataTypes;
                        "*" === l[0];

                      )
                        l.shift(),
                          void 0 === i &&
                            (i =
                              e.mimeType ||
                              t.getResponseHeader("Content-Type"));
                      if (i)
                        for (r in a)
                          if (a[r] && a[r].test(i)) {
                            l.unshift(r);
                            break;
                          }
                      if (l[0] in n) s = l[0];
                      else {
                        for (r in n) {
                          if (!l[0] || e.converters[r + " " + l[0]]) {
                            s = r;
                            break;
                          }
                          o || (o = r);
                        }
                        s = s || o;
                      }
                      if (s) return s !== l[0] && l.unshift(s), n[s];
                    })(p, E, o)),
                  !d &&
                    -1 < S.inArray("script", p.dataTypes) &&
                    (p.converters["text script"] = function () {}),
                  (w = (function (e, t, n, i) {
                    var r,
                      s,
                      o,
                      a,
                      l,
                      c = {},
                      u = e.dataTypes.slice();
                    if (u[1])
                      for (o in e.converters)
                        c[o.toLowerCase()] = e.converters[o];
                    for (s = u.shift(); s; )
                      if (
                        (e.responseFields[s] && (n[e.responseFields[s]] = t),
                        !l &&
                          i &&
                          e.dataFilter &&
                          (t = e.dataFilter(t, e.dataType)),
                        (l = s),
                        (s = u.shift()))
                      )
                        if ("*" === s) s = l;
                        else if ("*" !== l && l !== s) {
                          if (!(o = c[l + " " + s] || c["* " + s]))
                            for (r in c)
                              if (
                                (a = r.split(" "))[1] === s &&
                                (o = c[l + " " + a[0]] || c["* " + a[0]])
                              ) {
                                !0 === o
                                  ? (o = c[r])
                                  : !0 !== c[r] &&
                                    ((s = a[0]), u.unshift(a[1]));
                                break;
                              }
                          if (!0 !== o)
                            if (o && e.throws) t = o(t);
                            else
                              try {
                                t = o(t);
                              } catch (e) {
                                return {
                                  state: "parsererror",
                                  error: o
                                    ? e
                                    : "No conversion from " + l + " to " + s,
                                };
                              }
                        }
                    return { state: "success", data: t };
                  })(p, w, E, d)),
                  d
                    ? (p.ifModified &&
                        ((x = E.getResponseHeader("Last-Modified")) &&
                          (S.lastModified[r] = x),
                        (x = E.getResponseHeader("etag")) && (S.etag[r] = x)),
                      204 === e || "HEAD" === p.type
                        ? (T = "nocontent")
                        : 304 === e
                        ? (T = "notmodified")
                        : ((T = w.state), (h = w.data), (d = !(b = w.error))))
                    : ((b = T), (!e && T) || ((T = "error"), e < 0 && (e = 0))),
                  (E.status = e),
                  (E.statusText = (t || T) + ""),
                  d ? g.resolveWith(f, [h, T, E]) : g.rejectWith(f, [E, T, b]),
                  E.statusCode(y),
                  (y = void 0),
                  u &&
                    m.trigger(d ? "ajaxSuccess" : "ajaxError", [
                      E,
                      p,
                      d ? h : b,
                    ]),
                  v.fireWith(f, [E, T]),
                  u &&
                    (m.trigger("ajaxComplete", [E, p]),
                    --S.active || S.event.trigger("ajaxStop")));
              }
              return E;
            },
            getJSON: function (e, t, n) {
              return S.get(e, t, n, "json");
            },
            getScript: function (e, t) {
              return S.get(e, void 0, t, "script");
            },
          }),
          S.each(["get", "post"], function (e, t) {
            S[t] = function (e, n, i, r) {
              return (
                v(n) && ((r = r || i), (i = n), (n = void 0)),
                S.ajax(
                  S.extend(
                    { url: e, type: t, dataType: r, data: n, success: i },
                    S.isPlainObject(e) && e
                  )
                )
              );
            };
          }),
          S.ajaxPrefilter(function (e) {
            var t;
            for (t in e.headers)
              "content-type" === t.toLowerCase() &&
                (e.contentType = e.headers[t] || "");
          }),
          (S._evalUrl = function (e, t, n) {
            return S.ajax({
              url: e,
              type: "GET",
              dataType: "script",
              cache: !0,
              async: !1,
              global: !1,
              converters: { "text script": function () {} },
              dataFilter: function (e) {
                S.globalEval(e, t, n);
              },
            });
          }),
          S.fn.extend({
            wrapAll: function (e) {
              var t;
              return (
                this[0] &&
                  (v(e) && (e = e.call(this[0])),
                  (t = S(e, this[0].ownerDocument).eq(0).clone(!0)),
                  this[0].parentNode && t.insertBefore(this[0]),
                  t
                    .map(function () {
                      for (var e = this; e.firstElementChild; )
                        e = e.firstElementChild;
                      return e;
                    })
                    .append(this)),
                this
              );
            },
            wrapInner: function (e) {
              return v(e)
                ? this.each(function (t) {
                    S(this).wrapInner(e.call(this, t));
                  })
                : this.each(function () {
                    var t = S(this),
                      n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e);
                  });
            },
            wrap: function (e) {
              var t = v(e);
              return this.each(function (n) {
                S(this).wrapAll(t ? e.call(this, n) : e);
              });
            },
            unwrap: function (e) {
              return (
                this.parent(e)
                  .not("body")
                  .each(function () {
                    S(this).replaceWith(this.childNodes);
                  }),
                this
              );
            },
          }),
          (S.expr.pseudos.hidden = function (e) {
            return !S.expr.pseudos.visible(e);
          }),
          (S.expr.pseudos.visible = function (e) {
            return !!(
              e.offsetWidth ||
              e.offsetHeight ||
              e.getClientRects().length
            );
          }),
          (S.ajaxSettings.xhr = function () {
            try {
              return new n.XMLHttpRequest();
            } catch (e) {}
          });
        var Xt = { 0: 200, 1223: 204 },
          Vt = S.ajaxSettings.xhr();
        (g.cors = !!Vt && "withCredentials" in Vt),
          (g.ajax = Vt = !!Vt),
          S.ajaxTransport(function (e) {
            var t, i;
            if (g.cors || (Vt && !e.crossDomain))
              return {
                send: function (r, s) {
                  var o,
                    a = e.xhr();
                  if (
                    (a.open(e.type, e.url, e.async, e.username, e.password),
                    e.xhrFields)
                  )
                    for (o in e.xhrFields) a[o] = e.xhrFields[o];
                  for (o in (e.mimeType &&
                    a.overrideMimeType &&
                    a.overrideMimeType(e.mimeType),
                  e.crossDomain ||
                    r["X-Requested-With"] ||
                    (r["X-Requested-With"] = "XMLHttpRequest"),
                  r))
                    a.setRequestHeader(o, r[o]);
                  (t = function (e) {
                    return function () {
                      t &&
                        ((t =
                          i =
                          a.onload =
                          a.onerror =
                          a.onabort =
                          a.ontimeout =
                          a.onreadystatechange =
                            null),
                        "abort" === e
                          ? a.abort()
                          : "error" === e
                          ? "number" != typeof a.status
                            ? s(0, "error")
                            : s(a.status, a.statusText)
                          : s(
                              Xt[a.status] || a.status,
                              a.statusText,
                              "text" !== (a.responseType || "text") ||
                                "string" != typeof a.responseText
                                ? { binary: a.response }
                                : { text: a.responseText },
                              a.getAllResponseHeaders()
                            ));
                    };
                  }),
                    (a.onload = t()),
                    (i = a.onerror = a.ontimeout = t("error")),
                    void 0 !== a.onabort
                      ? (a.onabort = i)
                      : (a.onreadystatechange = function () {
                          4 === a.readyState &&
                            n.setTimeout(function () {
                              t && i();
                            });
                        }),
                    (t = t("abort"));
                  try {
                    a.send((e.hasContent && e.data) || null);
                  } catch (r) {
                    if (t) throw r;
                  }
                },
                abort: function () {
                  t && t();
                },
              };
          }),
          S.ajaxPrefilter(function (e) {
            e.crossDomain && (e.contents.script = !1);
          }),
          S.ajaxSetup({
            accepts: {
              script:
                "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
            },
            contents: { script: /\b(?:java|ecma)script\b/ },
            converters: {
              "text script": function (e) {
                return S.globalEval(e), e;
              },
            },
          }),
          S.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1),
              e.crossDomain && (e.type = "GET");
          }),
          S.ajaxTransport("script", function (e) {
            var t, n;
            if (e.crossDomain || e.scriptAttrs)
              return {
                send: function (i, r) {
                  (t = S("<script>")
                    .attr(e.scriptAttrs || {})
                    .prop({ charset: e.scriptCharset, src: e.url })
                    .on(
                      "load error",
                      (n = function (e) {
                        t.remove(),
                          (n = null),
                          e && r("error" === e.type ? 404 : 200, e.type);
                      })
                    )),
                    b.head.appendChild(t[0]);
                },
                abort: function () {
                  n && n();
                },
              };
          });
        var Gt,
          Ut = [],
          Kt = /(=)\?(?=&|$)|\?\?/;
        S.ajaxSetup({
          jsonp: "callback",
          jsonpCallback: function () {
            var e = Ut.pop() || S.expando + "_" + _t.guid++;
            return (this[e] = !0), e;
          },
        }),
          S.ajaxPrefilter("json jsonp", function (e, t, i) {
            var r,
              s,
              o,
              a =
                !1 !== e.jsonp &&
                (Kt.test(e.url)
                  ? "url"
                  : "string" == typeof e.data &&
                    0 ===
                      (e.contentType || "").indexOf(
                        "application/x-www-form-urlencoded"
                      ) &&
                    Kt.test(e.data) &&
                    "data");
            if (a || "jsonp" === e.dataTypes[0])
              return (
                (r = e.jsonpCallback =
                  v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                a
                  ? (e[a] = e[a].replace(Kt, "$1" + r))
                  : !1 !== e.jsonp &&
                    (e.url += (kt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
                (e.converters["script json"] = function () {
                  return o || S.error(r + " was not called"), o[0];
                }),
                (e.dataTypes[0] = "json"),
                (s = n[r]),
                (n[r] = function () {
                  o = arguments;
                }),
                i.always(function () {
                  void 0 === s ? S(n).removeProp(r) : (n[r] = s),
                    e[r] && ((e.jsonpCallback = t.jsonpCallback), Ut.push(r)),
                    o && v(s) && s(o[0]),
                    (o = s = void 0);
                }),
                "script"
              );
          }),
          (g.createHTMLDocument =
            (((Gt = b.implementation.createHTMLDocument("").body).innerHTML =
              "<form></form><form></form>"),
            2 === Gt.childNodes.length)),
          (S.parseHTML = function (e, t, n) {
            return "string" != typeof e
              ? []
              : ("boolean" == typeof t && ((n = t), (t = !1)),
                t ||
                  (g.createHTMLDocument
                    ? (((i = (t =
                        b.implementation.createHTMLDocument("")).createElement(
                        "base"
                      )).href = b.location.href),
                      t.head.appendChild(i))
                    : (t = b)),
                (s = !n && []),
                (r = O.exec(e))
                  ? [t.createElement(r[1])]
                  : ((r = Te([e], t, s)),
                    s && s.length && S(s).remove(),
                    S.merge([], r.childNodes)));
            var i, r, s;
          }),
          (S.fn.load = function (e, t, n) {
            var i,
              r,
              s,
              o = this,
              a = e.indexOf(" ");
            return (
              -1 < a && ((i = bt(e.slice(a))), (e = e.slice(0, a))),
              v(t)
                ? ((n = t), (t = void 0))
                : t && "object" == typeof t && (r = "POST"),
              0 < o.length &&
                S.ajax({ url: e, type: r || "GET", dataType: "html", data: t })
                  .done(function (e) {
                    (s = arguments),
                      o.html(i ? S("<div>").append(S.parseHTML(e)).find(i) : e);
                  })
                  .always(
                    n &&
                      function (e, t) {
                        o.each(function () {
                          n.apply(this, s || [e.responseText, t, e]);
                        });
                      }
                  ),
              this
            );
          }),
          (S.expr.pseudos.animated = function (e) {
            return S.grep(S.timers, function (t) {
              return e === t.elem;
            }).length;
          }),
          (S.offset = {
            setOffset: function (e, t, n) {
              var i,
                r,
                s,
                o,
                a,
                l,
                c = S.css(e, "position"),
                u = S(e),
                d = {};
              "static" === c && (e.style.position = "relative"),
                (a = u.offset()),
                (s = S.css(e, "top")),
                (l = S.css(e, "left")),
                ("absolute" === c || "fixed" === c) &&
                -1 < (s + l).indexOf("auto")
                  ? ((o = (i = u.position()).top), (r = i.left))
                  : ((o = parseFloat(s) || 0), (r = parseFloat(l) || 0)),
                v(t) && (t = t.call(e, n, S.extend({}, a))),
                null != t.top && (d.top = t.top - a.top + o),
                null != t.left && (d.left = t.left - a.left + r),
                "using" in t
                  ? t.using.call(e, d)
                  : ("number" == typeof d.top && (d.top += "px"),
                    "number" == typeof d.left && (d.left += "px"),
                    u.css(d));
            },
          }),
          S.fn.extend({
            offset: function (e) {
              if (arguments.length)
                return void 0 === e
                  ? this
                  : this.each(function (t) {
                      S.offset.setOffset(this, e, t);
                    });
              var t,
                n,
                i = this[0];
              return i
                ? i.getClientRects().length
                  ? ((t = i.getBoundingClientRect()),
                    (n = i.ownerDocument.defaultView),
                    {
                      top: t.top + n.pageYOffset,
                      left: t.left + n.pageXOffset,
                    })
                  : { top: 0, left: 0 }
                : void 0;
            },
            position: function () {
              if (this[0]) {
                var e,
                  t,
                  n,
                  i = this[0],
                  r = { top: 0, left: 0 };
                if ("fixed" === S.css(i, "position"))
                  t = i.getBoundingClientRect();
                else {
                  for (
                    t = this.offset(),
                      n = i.ownerDocument,
                      e = i.offsetParent || n.documentElement;
                    e &&
                    (e === n.body || e === n.documentElement) &&
                    "static" === S.css(e, "position");

                  )
                    e = e.parentNode;
                  e &&
                    e !== i &&
                    1 === e.nodeType &&
                    (((r = S(e).offset()).top += S.css(
                      e,
                      "borderTopWidth",
                      !0
                    )),
                    (r.left += S.css(e, "borderLeftWidth", !0)));
                }
                return {
                  top: t.top - r.top - S.css(i, "marginTop", !0),
                  left: t.left - r.left - S.css(i, "marginLeft", !0),
                };
              }
            },
            offsetParent: function () {
              return this.map(function () {
                for (
                  var e = this.offsetParent;
                  e && "static" === S.css(e, "position");

                )
                  e = e.offsetParent;
                return e || oe;
              });
            },
          }),
          S.each(
            { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
            function (e, t) {
              var n = "pageYOffset" === t;
              S.fn[e] = function (i) {
                return Y(
                  this,
                  function (e, i, r) {
                    var s;
                    if (
                      (y(e) ? (s = e) : 9 === e.nodeType && (s = e.defaultView),
                      void 0 === r)
                    )
                      return s ? s[t] : e[i];
                    s
                      ? s.scrollTo(n ? s.pageXOffset : r, n ? r : s.pageYOffset)
                      : (e[i] = r);
                  },
                  e,
                  i,
                  arguments.length
                );
              };
            }
          ),
          S.each(["top", "left"], function (e, t) {
            S.cssHooks[t] = Ye(g.pixelPosition, function (e, n) {
              if (n)
                return (
                  (n = We(e, t)), He.test(n) ? S(e).position()[t] + "px" : n
                );
            });
          }),
          S.each({ Height: "height", Width: "width" }, function (e, t) {
            S.each(
              { padding: "inner" + e, content: t, "": "outer" + e },
              function (n, i) {
                S.fn[i] = function (r, s) {
                  var o = arguments.length && (n || "boolean" != typeof r),
                    a = n || (!0 === r || !0 === s ? "margin" : "border");
                  return Y(
                    this,
                    function (t, n, r) {
                      var s;
                      return y(t)
                        ? 0 === i.indexOf("outer")
                          ? t["inner" + e]
                          : t.document.documentElement["client" + e]
                        : 9 === t.nodeType
                        ? ((s = t.documentElement),
                          Math.max(
                            t.body["scroll" + e],
                            s["scroll" + e],
                            t.body["offset" + e],
                            s["offset" + e],
                            s["client" + e]
                          ))
                        : void 0 === r
                        ? S.css(t, n, a)
                        : S.style(t, n, r, a);
                    },
                    t,
                    o ? r : void 0,
                    o
                  );
                };
              }
            );
          }),
          S.each(
            [
              "ajaxStart",
              "ajaxStop",
              "ajaxComplete",
              "ajaxError",
              "ajaxSuccess",
              "ajaxSend",
            ],
            function (e, t) {
              S.fn[t] = function (e) {
                return this.on(t, e);
              };
            }
          ),
          S.fn.extend({
            bind: function (e, t, n) {
              return this.on(e, null, t, n);
            },
            unbind: function (e, t) {
              return this.off(e, null, t);
            },
            delegate: function (e, t, n, i) {
              return this.on(t, e, n, i);
            },
            undelegate: function (e, t, n) {
              return 1 === arguments.length
                ? this.off(e, "**")
                : this.off(t, e || "**", n);
            },
            hover: function (e, t) {
              return this.mouseenter(e).mouseleave(t || e);
            },
          }),
          S.each(
            "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
              " "
            ),
            function (e, t) {
              S.fn[t] = function (e, n) {
                return 0 < arguments.length
                  ? this.on(t, null, e, n)
                  : this.trigger(t);
              };
            }
          );
        var Qt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        (S.proxy = function (e, t) {
          var n, i, r;
          if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), v(e)))
            return (
              (i = a.call(arguments, 2)),
              ((r = function () {
                return e.apply(t || this, i.concat(a.call(arguments)));
              }).guid = e.guid =
                e.guid || S.guid++),
              r
            );
        }),
          (S.holdReady = function (e) {
            e ? S.readyWait++ : S.ready(!0);
          }),
          (S.isArray = Array.isArray),
          (S.parseJSON = JSON.parse),
          (S.nodeName = P),
          (S.isFunction = v),
          (S.isWindow = y),
          (S.camelCase = U),
          (S.type = T),
          (S.now = Date.now),
          (S.isNumeric = function (e) {
            var t = S.type(e);
            return (
              ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
            );
          }),
          (S.trim = function (e) {
            return null == e ? "" : (e + "").replace(Qt, "");
          }),
          void 0 ===
            (i = function () {
              return S;
            }.apply(t, [])) || (e.exports = i);
        var Zt = n.jQuery,
          Jt = n.$;
        return (
          (S.noConflict = function (e) {
            return (
              n.$ === S && (n.$ = Jt), e && n.jQuery === S && (n.jQuery = Zt), S
            );
          }),
          void 0 === r && (n.jQuery = n.$ = S),
          S
        );
      });
    },
    ,
    function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return me;
      });
      var i,
        r,
        s,
        o,
        a,
        l,
        c,
        u,
        d = n(0),
        h = {},
        p = 180 / Math.PI,
        f = Math.PI / 180,
        m = Math.atan2,
        g = /([A-Z])/g,
        v = /(?:left|right|width|margin|padding|x)/i,
        y = /[\s,\(]\S/,
        b = {
          autoAlpha: "opacity,visibility",
          scale: "scaleX,scaleY",
          alpha: "opacity",
        },
        w = function (e, t) {
          return t.set(
            t.t,
            t.p,
            Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u,
            t
          );
        },
        x = function (e, t) {
          return t.set(
            t.t,
            t.p,
            1 === e ? t.e : Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u,
            t
          );
        },
        T = function (e, t) {
          return t.set(
            t.t,
            t.p,
            e ? Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u : t.b,
            t
          );
        },
        E = function (e, t) {
          var n = t.s + t.c * e;
          t.set(t.t, t.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + t.u, t);
        },
        S = function (e, t) {
          return t.set(t.t, t.p, e ? t.e : t.b, t);
        },
        C = function (e, t) {
          return t.set(t.t, t.p, 1 !== e ? t.b : t.e, t);
        },
        _ = function (e, t, n) {
          return (e.style[t] = n);
        },
        k = function (e, t, n) {
          return e.style.setProperty(t, n);
        },
        M = function (e, t, n) {
          return (e._gsap[t] = n);
        },
        L = function (e, t, n) {
          return (e._gsap.scaleX = e._gsap.scaleY = n);
        },
        P = function (e, t, n, i, r) {
          var s = e._gsap;
          (s.scaleX = s.scaleY = n), s.renderTransform(r, s);
        },
        O = function (e, t, n, i, r) {
          var s = e._gsap;
          (s[t] = n), s.renderTransform(r, s);
        },
        A = "transform",
        D = A + "Origin",
        z = function (e, t) {
          var n = r.createElementNS
            ? r.createElementNS(
                (t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
                e
              )
            : r.createElement(e);
          return n.style ? n : r.createElement(e);
        },
        $ = function e(t, n, i) {
          var r = getComputedStyle(t);
          return (
            r[n] ||
            r.getPropertyValue(n.replace(g, "-$1").toLowerCase()) ||
            r.getPropertyValue(n) ||
            (!i && e(t, j(n) || n, 1)) ||
            ""
          );
        },
        I = "O,Moz,ms,Ms,Webkit".split(","),
        j = function (e, t, n) {
          var i = (t || a).style,
            r = 5;
          if (e in i && !n) return e;
          for (
            e = e.charAt(0).toUpperCase() + e.substr(1);
            r-- && !(I[r] + e in i);

          );
          return r < 0 ? null : (3 === r ? "ms" : r >= 0 ? I[r] : "") + e;
        },
        N = function () {
          "undefined" != typeof window &&
            window.document &&
            ((i = window),
            (r = i.document),
            (s = r.documentElement),
            (a = z("div") || { style: {} }),
            (l = z("div")),
            (A = j(A)),
            (D = A + "Origin"),
            (a.style.cssText =
              "border-width:0;line-height:0;position:absolute;padding:0"),
            (u = !!j("perspective")),
            (o = 1));
        },
        R = function e(t) {
          var n,
            i = z(
              "svg",
              (this.ownerSVGElement &&
                this.ownerSVGElement.getAttribute("xmlns")) ||
                "http://www.w3.org/2000/svg"
            ),
            r = this.parentNode,
            o = this.nextSibling,
            a = this.style.cssText;
          if (
            (s.appendChild(i),
            i.appendChild(this),
            (this.style.display = "block"),
            t)
          )
            try {
              (n = this.getBBox()),
                (this._gsapBBox = this.getBBox),
                (this.getBBox = e);
            } catch (e) {}
          else this._gsapBBox && (n = this._gsapBBox());
          return (
            r && (o ? r.insertBefore(this, o) : r.appendChild(this)),
            s.removeChild(i),
            (this.style.cssText = a),
            n
          );
        },
        H = function (e, t) {
          for (var n = t.length; n--; )
            if (e.hasAttribute(t[n])) return e.getAttribute(t[n]);
        },
        B = function (e) {
          var t;
          try {
            t = e.getBBox();
          } catch (n) {
            t = R.call(e, !0);
          }
          return (
            (t && (t.width || t.height)) ||
              e.getBBox === R ||
              (t = R.call(e, !0)),
            !t || t.width || t.x || t.y
              ? t
              : {
                  x: +H(e, ["x", "cx", "x1"]) || 0,
                  y: +H(e, ["y", "cy", "y1"]) || 0,
                  width: 0,
                  height: 0,
                }
          );
        },
        q = function (e) {
          return !(!e.getCTM || (e.parentNode && !e.ownerSVGElement) || !B(e));
        },
        F = function (e, t) {
          if (t) {
            var n = e.style;
            t in h && t !== D && (t = A),
              n.removeProperty
                ? (("ms" !== t.substr(0, 2) && "webkit" !== t.substr(0, 6)) ||
                    (t = "-" + t),
                  n.removeProperty(t.replace(g, "-$1").toLowerCase()))
                : n.removeAttribute(t);
          }
        },
        W = function (e, t, n, i, r, s) {
          var o = new d.d(e._pt, t, n, 0, 1, s ? C : S);
          return (e._pt = o), (o.b = i), (o.e = r), e._props.push(n), o;
        },
        Y = { deg: 1, rad: 1, turn: 1 },
        X = function e(t, n, i, s) {
          var o,
            l,
            c,
            u,
            p = parseFloat(i) || 0,
            f = (i + "").trim().substr((p + "").length) || "px",
            m = a.style,
            g = v.test(n),
            y = "svg" === t.tagName.toLowerCase(),
            b = (y ? "client" : "offset") + (g ? "Width" : "Height"),
            w = "px" === s,
            x = "%" === s;
          return s === f || !p || Y[s] || Y[f]
            ? p
            : ("px" !== f && !w && (p = e(t, n, i, "px")),
              (u = t.getCTM && q(t)),
              x && (h[n] || ~n.indexOf("adius"))
                ? Object(d.v)(
                    (p / (u ? t.getBBox()[g ? "width" : "height"] : t[b])) * 100
                  )
                : ((m[g ? "width" : "height"] = 100 + (w ? f : s)),
                  (l =
                    ~n.indexOf("adius") || ("em" === s && t.appendChild && !y)
                      ? t
                      : t.parentNode),
                  u && (l = (t.ownerSVGElement || {}).parentNode),
                  (l && l !== r && l.appendChild) || (l = r.body),
                  (c = l._gsap) && x && c.width && g && c.time === d.x.time
                    ? Object(d.v)((p / c.width) * 100)
                    : ((x || "%" === f) && (m.position = $(t, "position")),
                      l === t && (m.position = "static"),
                      l.appendChild(a),
                      (o = a[b]),
                      l.removeChild(a),
                      (m.position = "absolute"),
                      g &&
                        x &&
                        (((c = Object(d.j)(l)).time = d.x.time),
                        (c.width = l[b])),
                      Object(d.v)(
                        w ? (o * p) / 100 : o && p ? (100 / o) * p : 0
                      ))));
        },
        V = function (e, t, n, i) {
          var r;
          return (
            o || N(),
            t in b &&
              "transform" !== t &&
              ~(t = b[t]).indexOf(",") &&
              (t = t.split(",")[0]),
            h[t] && "transform" !== t
              ? ((r = re(e, i)),
                (r =
                  "transformOrigin" !== t
                    ? r[t]
                    : se($(e, D)) + " " + r.zOrigin + "px"))
              : (!(r = e.style[t]) ||
                  "auto" === r ||
                  i ||
                  ~(r + "").indexOf("calc(")) &&
                (r =
                  (Q[t] && Q[t](e, t, n)) ||
                  $(e, t) ||
                  Object(d.k)(e, t) ||
                  ("opacity" === t ? 1 : 0)),
            n && !~(r + "").indexOf(" ") ? X(e, t, r, n) + n : r
          );
        },
        G = function (e, t, n, i) {
          if (!n || "none" === n) {
            var r = j(t, e, 1),
              s = r && $(e, r, 1);
            s && s !== n
              ? ((t = r), (n = s))
              : "borderColor" === t && (n = $(e, "borderTopColor"));
          }
          var o,
            a,
            l,
            c,
            u,
            h,
            p,
            f,
            m,
            g,
            v,
            y,
            b = new d.d(this._pt, e.style, t, 0, 1, d.t),
            w = 0,
            x = 0;
          if (
            ((b.b = n),
            (b.e = i),
            (n += ""),
            "auto" === (i += "") &&
              ((e.style[t] = i), (i = $(e, t) || i), (e.style[t] = n)),
            (o = [n, i]),
            Object(d.g)(o),
            (i = o[1]),
            (l = (n = o[0]).match(d.q) || []),
            (i.match(d.q) || []).length)
          ) {
            for (; (a = d.q.exec(i)); )
              (p = a[0]),
                (m = i.substring(w, a.index)),
                u
                  ? (u = (u + 1) % 5)
                  : ("rgba(" !== m.substr(-5) && "hsla(" !== m.substr(-5)) ||
                    (u = 1),
                p !== (h = l[x++] || "") &&
                  ((c = parseFloat(h) || 0),
                  (v = h.substr((c + "").length)),
                  (y = "=" === p.charAt(1) ? +(p.charAt(0) + "1") : 0) &&
                    (p = p.substr(2)),
                  (f = parseFloat(p)),
                  (g = p.substr((f + "").length)),
                  (w = d.q.lastIndex - g.length),
                  g ||
                    ((g = g || d.h.units[t] || v),
                    w === i.length && ((i += g), (b.e += g))),
                  v !== g && (c = X(e, t, h, g) || 0),
                  (b._pt = {
                    _next: b._pt,
                    p: m || 1 === x ? m : ",",
                    s: c,
                    c: y ? y * f : f - c,
                    m: u && u < 4 ? Math.round : 0,
                  }));
            b.c = w < i.length ? i.substring(w, i.length) : "";
          } else b.r = "display" === t && "none" === i ? C : S;
          return d.s.test(i) && (b.e = 0), (this._pt = b), b;
        },
        U = {
          top: "0%",
          bottom: "100%",
          left: "0%",
          right: "100%",
          center: "50%",
        },
        K = function (e, t) {
          if (t.tween && t.tween._time === t.tween._dur) {
            var n,
              i,
              r,
              s = t.t,
              o = s.style,
              a = t.u,
              l = s._gsap;
            if ("all" === a || !0 === a) (o.cssText = ""), (i = 1);
            else
              for (r = (a = a.split(",")).length; --r > -1; )
                (n = a[r]),
                  h[n] && ((i = 1), (n = "transformOrigin" === n ? D : A)),
                  F(s, n);
            i &&
              (F(s, A),
              l &&
                (l.svg && s.removeAttribute("transform"),
                re(s, 1),
                (l.uncache = 1)));
          }
        },
        Q = {
          clearProps: function (e, t, n, i, r) {
            if ("isFromStart" !== r.data) {
              var s = (e._pt = new d.d(e._pt, t, n, 0, 0, K));
              return (
                (s.u = i), (s.pr = -10), (s.tween = r), e._props.push(n), 1
              );
            }
          },
        },
        Z = [1, 0, 0, 1, 0, 0],
        J = {},
        ee = function (e) {
          return "matrix(1, 0, 0, 1, 0, 0)" === e || "none" === e || !e;
        },
        te = function (e) {
          var t = $(e, A);
          return ee(t) ? Z : t.substr(7).match(d.p).map(d.v);
        },
        ne = function (e, t) {
          var n,
            i,
            r,
            o,
            a = e._gsap || Object(d.j)(e),
            l = e.style,
            c = te(e);
          return a.svg && e.getAttribute("transform")
            ? "1,0,0,1,0,0" ===
              (c = [
                (r = e.transform.baseVal.consolidate().matrix).a,
                r.b,
                r.c,
                r.d,
                r.e,
                r.f,
              ]).join(",")
              ? Z
              : c
            : (c !== Z ||
                e.offsetParent ||
                e === s ||
                a.svg ||
                ((r = l.display),
                (l.display = "block"),
                ((n = e.parentNode) && e.offsetParent) ||
                  ((o = 1), (i = e.nextSibling), s.appendChild(e)),
                (c = te(e)),
                r ? (l.display = r) : F(e, "display"),
                o &&
                  (i
                    ? n.insertBefore(e, i)
                    : n
                    ? n.appendChild(e)
                    : s.removeChild(e))),
              t && c.length > 6 ? [c[0], c[1], c[4], c[5], c[12], c[13]] : c);
        },
        ie = function (e, t, n, i, r, s) {
          var o,
            a,
            l,
            c = e._gsap,
            u = r || ne(e, !0),
            d = c.xOrigin || 0,
            h = c.yOrigin || 0,
            p = c.xOffset || 0,
            f = c.yOffset || 0,
            m = u[0],
            g = u[1],
            v = u[2],
            y = u[3],
            b = u[4],
            w = u[5],
            x = t.split(" "),
            T = parseFloat(x[0]) || 0,
            E = parseFloat(x[1]) || 0;
          n
            ? u !== Z &&
              (a = m * y - g * v) &&
              ((l = T * (-g / a) + E * (m / a) - (m * w - g * b) / a),
              (T = T * (y / a) + E * (-v / a) + (v * w - y * b) / a),
              (E = l))
            : ((T =
                (o = B(e)).x + (~x[0].indexOf("%") ? (T / 100) * o.width : T)),
              (E =
                o.y +
                (~(x[1] || x[0]).indexOf("%") ? (E / 100) * o.height : E))),
            i || (!1 !== i && c.smooth)
              ? ((b = T - d),
                (w = E - h),
                (c.xOffset = p + (b * m + w * v) - b),
                (c.yOffset = f + (b * g + w * y) - w))
              : (c.xOffset = c.yOffset = 0),
            (c.xOrigin = T),
            (c.yOrigin = E),
            (c.smooth = !!i),
            (c.origin = t),
            (c.originIsAbsolute = !!n),
            (e.style[D] = "0px 0px"),
            s &&
              (W(s, c, "xOrigin", d, T),
              W(s, c, "yOrigin", h, E),
              W(s, c, "xOffset", p, c.xOffset),
              W(s, c, "yOffset", f, c.yOffset)),
            e.setAttribute("data-svg-origin", T + " " + E);
        },
        re = function (e, t) {
          var n = e._gsap || new d.a(e);
          if ("x" in n && !t && !n.uncache) return n;
          var i,
            r,
            s,
            o,
            a,
            l,
            c,
            h,
            g,
            v,
            y,
            b,
            w,
            x,
            T,
            E,
            S,
            C,
            _,
            k,
            M,
            L,
            P,
            O,
            z,
            I,
            j,
            N,
            R,
            H,
            B,
            F,
            W = e.style,
            Y = n.scaleX < 0,
            X = $(e, D) || "0";
          return (
            (i = r = s = l = c = h = g = v = y = 0),
            (o = a = 1),
            (n.svg = !(!e.getCTM || !q(e))),
            (x = ne(e, n.svg)),
            n.svg &&
              ((O = !n.uncache && e.getAttribute("data-svg-origin")),
              ie(e, O || X, !!O || n.originIsAbsolute, !1 !== n.smooth, x)),
            (b = n.xOrigin || 0),
            (w = n.yOrigin || 0),
            x !== Z &&
              ((C = x[0]),
              (_ = x[1]),
              (k = x[2]),
              (M = x[3]),
              (i = L = x[4]),
              (r = P = x[5]),
              6 === x.length
                ? ((o = Math.sqrt(C * C + _ * _)),
                  (a = Math.sqrt(M * M + k * k)),
                  (l = C || _ ? m(_, C) * p : 0),
                  (g = k || M ? m(k, M) * p + l : 0) && (a *= Math.cos(g * f)),
                  n.svg &&
                    ((i -= b - (b * C + w * k)), (r -= w - (b * _ + w * M))))
                : ((F = x[6]),
                  (H = x[7]),
                  (j = x[8]),
                  (N = x[9]),
                  (R = x[10]),
                  (B = x[11]),
                  (i = x[12]),
                  (r = x[13]),
                  (s = x[14]),
                  (c = (T = m(F, R)) * p),
                  T &&
                    ((O = L * (E = Math.cos(-T)) + j * (S = Math.sin(-T))),
                    (z = P * E + N * S),
                    (I = F * E + R * S),
                    (j = L * -S + j * E),
                    (N = P * -S + N * E),
                    (R = F * -S + R * E),
                    (B = H * -S + B * E),
                    (L = O),
                    (P = z),
                    (F = I)),
                  (h = (T = m(-k, R)) * p),
                  T &&
                    ((E = Math.cos(-T)),
                    (B = M * (S = Math.sin(-T)) + B * E),
                    (C = O = C * E - j * S),
                    (_ = z = _ * E - N * S),
                    (k = I = k * E - R * S)),
                  (l = (T = m(_, C)) * p),
                  T &&
                    ((O = C * (E = Math.cos(T)) + _ * (S = Math.sin(T))),
                    (z = L * E + P * S),
                    (_ = _ * E - C * S),
                    (P = P * E - L * S),
                    (C = O),
                    (L = z)),
                  c &&
                    Math.abs(c) + Math.abs(l) > 359.9 &&
                    ((c = l = 0), (h = 180 - h)),
                  (o = Object(d.v)(Math.sqrt(C * C + _ * _ + k * k))),
                  (a = Object(d.v)(Math.sqrt(P * P + F * F))),
                  (T = m(L, P)),
                  (g = Math.abs(T) > 2e-4 ? T * p : 0),
                  (y = B ? 1 / (B < 0 ? -B : B) : 0)),
              n.svg &&
                ((O = e.getAttribute("transform")),
                (n.forceCSS = e.setAttribute("transform", "") || !ee($(e, A))),
                O && e.setAttribute("transform", O))),
            Math.abs(g) > 90 &&
              Math.abs(g) < 270 &&
              (Y
                ? ((o *= -1),
                  (g += l <= 0 ? 180 : -180),
                  (l += l <= 0 ? 180 : -180))
                : ((a *= -1), (g += g <= 0 ? 180 : -180))),
            (n.x =
              ((n.xPercent =
                i && Math.round(e.offsetWidth / 2) === Math.round(-i) ? -50 : 0)
                ? 0
                : i) + "px"),
            (n.y =
              ((n.yPercent =
                r && Math.round(e.offsetHeight / 2) === Math.round(-r)
                  ? -50
                  : 0)
                ? 0
                : r) + "px"),
            (n.z = s + "px"),
            (n.scaleX = Object(d.v)(o)),
            (n.scaleY = Object(d.v)(a)),
            (n.rotation = Object(d.v)(l) + "deg"),
            (n.rotationX = Object(d.v)(c) + "deg"),
            (n.rotationY = Object(d.v)(h) + "deg"),
            (n.skewX = g + "deg"),
            (n.skewY = v + "deg"),
            (n.transformPerspective = y + "px"),
            (n.zOrigin = parseFloat(X.split(" ")[2]) || 0) && (W[D] = se(X)),
            (n.xOffset = n.yOffset = 0),
            (n.force3D = d.h.force3D),
            (n.renderTransform = n.svg ? ce : u ? le : ae),
            (n.uncache = 0),
            n
          );
        },
        se = function (e) {
          return (e = e.split(" "))[0] + " " + e[1];
        },
        oe = function (e, t, n) {
          var i = Object(d.y)(t);
          return (
            Object(d.v)(parseFloat(t) + parseFloat(X(e, "x", n + "px", i))) + i
          );
        },
        ae = function (e, t) {
          (t.z = "0px"),
            (t.rotationY = t.rotationX = "0deg"),
            (t.force3D = 0),
            le(e, t);
        },
        le = function (e, t) {
          var n = t || this,
            i = n.xPercent,
            r = n.yPercent,
            s = n.x,
            o = n.y,
            a = n.z,
            l = n.rotation,
            c = n.rotationY,
            u = n.rotationX,
            d = n.skewX,
            h = n.skewY,
            p = n.scaleX,
            m = n.scaleY,
            g = n.transformPerspective,
            v = n.force3D,
            y = n.target,
            b = n.zOrigin,
            w = "",
            x = ("auto" === v && e && 1 !== e) || !0 === v;
          if (b && ("0deg" !== u || "0deg" !== c)) {
            var T,
              E = parseFloat(c) * f,
              S = Math.sin(E),
              C = Math.cos(E);
            (E = parseFloat(u) * f),
              (T = Math.cos(E)),
              (s = oe(y, s, S * T * -b)),
              (o = oe(y, o, -Math.sin(E) * -b)),
              (a = oe(y, a, C * T * -b + b));
          }
          "0px" !== g && (w += "perspective(" + g + ") "),
            (i || r) && (w += "translate(" + i + "%, " + r + "%) "),
            (x || "0px" !== s || "0px" !== o || "0px" !== a) &&
              (w +=
                "0px" !== a || x
                  ? "translate3d(" + s + ", " + o + ", " + a + ") "
                  : "translate(" + s + ", " + o + ") "),
            "0deg" !== l && (w += "rotate(" + l + ") "),
            "0deg" !== c && (w += "rotateY(" + c + ") "),
            "0deg" !== u && (w += "rotateX(" + u + ") "),
            ("0deg" === d && "0deg" === h) ||
              (w += "skew(" + d + ", " + h + ") "),
            (1 === p && 1 === m) || (w += "scale(" + p + ", " + m + ") "),
            (y.style[A] = w || "translate(0, 0)");
        },
        ce = function (e, t) {
          var n,
            i,
            r,
            s,
            o,
            a = t || this,
            l = a.xPercent,
            c = a.yPercent,
            u = a.x,
            h = a.y,
            p = a.rotation,
            m = a.skewX,
            g = a.skewY,
            v = a.scaleX,
            y = a.scaleY,
            b = a.target,
            w = a.xOrigin,
            x = a.yOrigin,
            T = a.xOffset,
            E = a.yOffset,
            S = a.forceCSS,
            C = parseFloat(u),
            _ = parseFloat(h);
          (p = parseFloat(p)),
            (m = parseFloat(m)),
            (g = parseFloat(g)) && ((m += g = parseFloat(g)), (p += g)),
            p || m
              ? ((p *= f),
                (m *= f),
                (n = Math.cos(p) * v),
                (i = Math.sin(p) * v),
                (r = Math.sin(p - m) * -y),
                (s = Math.cos(p - m) * y),
                m &&
                  ((g *= f),
                  (o = Math.tan(m - g)),
                  (r *= o = Math.sqrt(1 + o * o)),
                  (s *= o),
                  g &&
                    ((o = Math.tan(g)),
                    (n *= o = Math.sqrt(1 + o * o)),
                    (i *= o))),
                (n = Object(d.v)(n)),
                (i = Object(d.v)(i)),
                (r = Object(d.v)(r)),
                (s = Object(d.v)(s)))
              : ((n = v), (s = y), (i = r = 0)),
            ((C && !~(u + "").indexOf("px")) ||
              (_ && !~(h + "").indexOf("px"))) &&
              ((C = X(b, "x", u, "px")), (_ = X(b, "y", h, "px"))),
            (w || x || T || E) &&
              ((C = Object(d.v)(C + w - (w * n + x * r) + T)),
              (_ = Object(d.v)(_ + x - (w * i + x * s) + E))),
            (l || c) &&
              ((o = b.getBBox()),
              (C = Object(d.v)(C + (l / 100) * o.width)),
              (_ = Object(d.v)(_ + (c / 100) * o.height))),
            (o =
              "matrix(" +
              n +
              "," +
              i +
              "," +
              r +
              "," +
              s +
              "," +
              C +
              "," +
              _ +
              ")"),
            b.setAttribute("transform", o),
            S && (b.style[A] = o);
        },
        ue = function (e, t, n, i, r, s) {
          var o,
            a,
            l = Object(d.m)(r),
            c = parseFloat(r) * (l && ~r.indexOf("rad") ? p : 1),
            u = s ? c * s : c - i,
            h = i + u + "deg";
          return (
            l &&
              ("short" === (o = r.split("_")[1]) &&
                (u %= 360) !== u % 180 &&
                (u += u < 0 ? 360 : -360),
              "cw" === o && u < 0
                ? (u = ((u + 36e9) % 360) - 360 * ~~(u / 360))
                : "ccw" === o &&
                  u > 0 &&
                  (u = ((u - 36e9) % 360) - 360 * ~~(u / 360))),
            (e._pt = a = new d.d(e._pt, t, n, i, u, x)),
            (a.e = h),
            (a.u = "deg"),
            e._props.push(n),
            a
          );
        },
        de = function (e, t, n) {
          var i,
            s,
            o,
            a,
            c,
            u,
            p,
            f = l.style,
            m = n._gsap;
          for (s in ((f.cssText =
            getComputedStyle(n).cssText + ";position:absolute;display:block;"),
          (f[A] = t),
          r.body.appendChild(l),
          (i = re(l, 1)),
          h))
            (o = m[s]) !== (a = i[s]) &&
              "perspective,force3D,transformOrigin,svgOrigin".indexOf(s) < 0 &&
              ((c =
                Object(d.y)(o) !== (p = Object(d.y)(a))
                  ? X(n, s, o, p)
                  : parseFloat(o)),
              (u = parseFloat(a)),
              (e._pt = new d.d(e._pt, m, s, c, u - c, w)),
              (e._pt.u = p || 0),
              e._props.push(s));
          r.body.removeChild(l);
        };
      /*!
       * CSSPlugin 3.4.0
       * https://greensock.com
       *
       * Copyright 2008-2020, GreenSock. All rights reserved.
       * Subject to the terms at https://greensock.com/standard-license or for
       * Club GreenSock members, the agreement issued with that membership.
       * @author: Jack Doyle, jack@greensock.com
       */ Object(d.i)("padding,margin,Width,Radius", function (e, t) {
        var n = "Top",
          i = "Right",
          r = "Bottom",
          s = "Left",
          o = (t < 3 ? [n, i, r, s] : [n + s, n + i, r + i, r + s]).map(
            function (n) {
              return t < 2 ? e + n : "border" + n + e;
            }
          );
        Q[t > 1 ? "border" + e : e] = function (e, t, n, i, r) {
          var s, a;
          if (arguments.length < 4)
            return (
              (s = o.map(function (t) {
                return V(e, t, n);
              })),
              5 === (a = s.join(" ")).split(s[0]).length ? s[0] : a
            );
          (s = (i + "").split(" ")),
            (a = {}),
            o.forEach(function (e, t) {
              return (a[e] = s[t] = s[t] || s[((t - 1) / 2) | 0]);
            }),
            e.init(t, a, r);
        };
      });
      var he,
        pe,
        fe = {
          name: "css",
          register: N,
          targetTest: function (e) {
            return e.style && e.nodeType;
          },
          init: function (e, t, n, i, r) {
            var s,
              a,
              l,
              c,
              u,
              p,
              f,
              m,
              g,
              v,
              x,
              S,
              C,
              _,
              k,
              M,
              L,
              P,
              O,
              D = this._props,
              z = e.style;
            for (f in (o || N(), t))
              if (
                "autoRound" !== f &&
                ((a = t[f]), !d.r[f] || !Object(d.f)(f, t, n, i, e, r))
              )
                if (
                  ((u = typeof a),
                  (p = Q[f]),
                  "function" === u && (u = typeof (a = a.call(n, i, e, r))),
                  "string" === u &&
                    ~a.indexOf("random(") &&
                    (a = Object(d.u)(a)),
                  p)
                )
                  p(this, e, f, a, n) && (k = 1);
                else if ("--" === f.substr(0, 2))
                  this.add(
                    z,
                    "setProperty",
                    getComputedStyle(e).getPropertyValue(f) + "",
                    a + "",
                    i,
                    r,
                    0,
                    0,
                    f
                  );
                else {
                  if (
                    ((s = V(e, f)),
                    (c = parseFloat(s)),
                    (v =
                      "string" === u && "=" === a.charAt(1)
                        ? +(a.charAt(0) + "1")
                        : 0) && (a = a.substr(2)),
                    (l = parseFloat(a)),
                    f in b &&
                      ("autoAlpha" === f &&
                        (1 === c &&
                          "hidden" === V(e, "visibility") &&
                          l &&
                          (c = 0),
                        W(
                          this,
                          z,
                          "visibility",
                          c ? "inherit" : "hidden",
                          l ? "inherit" : "hidden",
                          !l
                        )),
                      "scale" !== f &&
                        "transform" !== f &&
                        ~(f = b[f]).indexOf(",") &&
                        (f = f.split(",")[0])),
                    (x = f in h))
                  )
                    if (
                      (S ||
                        ((C = e._gsap).renderTransform || re(e),
                        (_ = !1 !== t.smoothOrigin && C.smooth),
                        ((S = this._pt =
                          new d.d(
                            this._pt,
                            z,
                            A,
                            0,
                            1,
                            C.renderTransform,
                            C,
                            0,
                            -1
                          )).dep = 1)),
                      "scale" === f)
                    )
                      (this._pt = new d.d(
                        this._pt,
                        C,
                        "scaleY",
                        C.scaleY,
                        v ? v * l : l - C.scaleY
                      )),
                        D.push("scaleY", f),
                        (f += "X");
                    else {
                      if ("transformOrigin" === f) {
                        (L = void 0),
                          (P = void 0),
                          (O = void 0),
                          (L = (M = a).split(" ")),
                          (P = L[0]),
                          (O = L[1] || "50%"),
                          ("top" !== P &&
                            "bottom" !== P &&
                            "left" !== O &&
                            "right" !== O) ||
                            ((M = P), (P = O), (O = M)),
                          (L[0] = U[P] || P),
                          (L[1] = U[O] || O),
                          (a = L.join(" ")),
                          C.svg
                            ? ie(e, a, 0, _, 0, this)
                            : ((g = parseFloat(a.split(" ")[2]) || 0) !==
                                C.zOrigin &&
                                W(this, C, "zOrigin", C.zOrigin, g),
                              W(this, z, f, se(s), se(a)));
                        continue;
                      }
                      if ("svgOrigin" === f) {
                        ie(e, a, 1, _, 0, this);
                        continue;
                      }
                      if (f in J) {
                        ue(this, C, f, c, a, v);
                        continue;
                      }
                      if ("smoothOrigin" === f) {
                        W(this, C, "smooth", C.smooth, a);
                        continue;
                      }
                      if ("force3D" === f) {
                        C[f] = a;
                        continue;
                      }
                      if ("transform" === f) {
                        de(this, a, e);
                        continue;
                      }
                    }
                  else f in z || (f = j(f) || f);
                  if (
                    x ||
                    ((l || 0 === l) && (c || 0 === c) && !y.test(a) && f in z)
                  )
                    l || (l = 0),
                      (m = (s + "").substr((c + "").length)) !==
                        (g =
                          (a + "").substr((l + "").length) ||
                          (f in d.h.units ? d.h.units[f] : m)) &&
                        (c = X(e, f, s, g)),
                      (this._pt = new d.d(
                        this._pt,
                        x ? C : z,
                        f,
                        c,
                        v ? v * l : l - c,
                        "px" !== g || !1 === t.autoRound || x ? w : E
                      )),
                      (this._pt.u = g || 0),
                      m !== g && ((this._pt.b = s), (this._pt.r = T));
                  else if (f in z) G.call(this, e, f, s, a);
                  else {
                    if (!(f in e)) {
                      Object(d.o)(f, a);
                      continue;
                    }
                    this.add(e, f, e[f], a, i, r);
                  }
                  D.push(f);
                }
            k && Object(d.w)(this);
          },
          get: V,
          aliases: b,
          getSetter: function (e, t, n) {
            var i = b[t];
            return (
              i && i.indexOf(",") < 0 && (t = i),
              t in h && t !== D && (e._gsap.x || V(e, "x"))
                ? n && c === n
                  ? "scale" === t
                    ? L
                    : M
                  : (c = n || {}) && ("scale" === t ? P : O)
                : e.style && !Object(d.n)(e.style[t])
                ? _
                : ~t.indexOf("-")
                ? k
                : Object(d.l)(e, t)
            );
          },
          core: { _removeProperty: F, _getMatrix: ne },
        };
      (d.z.utils.checkPrefix = j),
        (he = "rotation,rotationX,rotationY,skewX,skewY"),
        (pe = Object(d.i)(
          "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," +
            he +
            ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
          function (e) {
            h[e] = 1;
          }
        )),
        Object(d.i)(he, function (e) {
          (d.h.units[e] = "deg"), (J[e] = 1);
        }),
        (b[pe[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + he),
        Object(d.i)(
          "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
          function (e) {
            var t = e.split(":");
            b[t[1]] = pe[t[0]];
          }
        ),
        Object(d.i)(
          "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
          function (e) {
            d.h.units[e] = "px";
          }
        ),
        d.z.registerPlugin(fe);
      var me = d.z.registerPlugin(fe) || d.z;
      me.core.Tween;
    },
    function (e, t, n) {
      "use strict";
      function i(e, t, n, i) {
        var r,
          s = !1,
          o = 0;
        function a() {
          r && clearTimeout(r);
        }
        function l() {
          var l = this,
            c = Date.now() - o,
            u = arguments;
          function d() {
            (o = Date.now()), n.apply(l, u);
          }
          function h() {
            r = void 0;
          }
          s ||
            (i && !r && d(),
            a(),
            void 0 === i && c > e
              ? d()
              : !0 !== t &&
                (r = setTimeout(i ? h : d, void 0 === i ? e - c : e)));
        }
        return (
          "boolean" != typeof t && ((i = n), (n = t), (t = void 0)),
          (l.cancel = function () {
            a(), (s = !0);
          }),
          l
        );
      }
      function r(e, t, n) {
        return void 0 === n ? i(e, t, !1) : i(e, n, !1 !== t);
      }
      n.d(t, "b", function () {
        return i;
      }),
        n.d(t, "a", function () {
          return r;
        });
    },
    function (e, t, n) {
      "use strict";
      var i =
          "undefined" == typeof document
            ? {
                body: {},
                addEventListener: function () {},
                removeEventListener: function () {},
                activeElement: { blur: function () {}, nodeName: "" },
                querySelector: function () {
                  return null;
                },
                querySelectorAll: function () {
                  return [];
                },
                getElementById: function () {
                  return null;
                },
                createEvent: function () {
                  return { initEvent: function () {} };
                },
                createElement: function () {
                  return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute: function () {},
                    getElementsByTagName: function () {
                      return [];
                    },
                  };
                },
                location: { hash: "" },
              }
            : document,
        r =
          "undefined" == typeof window
            ? {
                document: i,
                navigator: { userAgent: "" },
                location: {},
                history: {},
                CustomEvent: function () {
                  return this;
                },
                addEventListener: function () {},
                removeEventListener: function () {},
                getComputedStyle: function () {
                  return {
                    getPropertyValue: function () {
                      return "";
                    },
                  };
                },
                Image: function () {},
                Date: function () {},
                screen: {},
                setTimeout: function () {},
                clearTimeout: function () {},
              }
            : window;
      class s {
        constructor(e) {
          const t = this;
          for (let n = 0; n < e.length; n += 1) t[n] = e[n];
          return (t.length = e.length), this;
        }
      }
      function o(e, t) {
        const n = [];
        let o = 0;
        if (e && !t && e instanceof s) return e;
        if (e)
          if ("string" == typeof e) {
            let r, s;
            const a = e.trim();
            if (a.indexOf("<") >= 0 && a.indexOf(">") >= 0) {
              let e = "div";
              for (
                0 === a.indexOf("<li") && (e = "ul"),
                  0 === a.indexOf("<tr") && (e = "tbody"),
                  (0 !== a.indexOf("<td") && 0 !== a.indexOf("<th")) ||
                    (e = "tr"),
                  0 === a.indexOf("<tbody") && (e = "table"),
                  0 === a.indexOf("<option") && (e = "select"),
                  s = i.createElement(e),
                  s.innerHTML = a,
                  o = 0;
                o < s.childNodes.length;
                o += 1
              )
                n.push(s.childNodes[o]);
            } else
              for (
                r =
                  t || "#" !== e[0] || e.match(/[ .<>:~]/)
                    ? (t || i).querySelectorAll(e.trim())
                    : [i.getElementById(e.trim().split("#")[1])],
                  o = 0;
                o < r.length;
                o += 1
              )
                r[o] && n.push(r[o]);
          } else if (e.nodeType || e === r || e === i) n.push(e);
          else if (e.length > 0 && e[0].nodeType)
            for (o = 0; o < e.length; o += 1) n.push(e[o]);
        return new s(n);
      }
      function a(e) {
        const t = [];
        for (let n = 0; n < e.length; n += 1)
          -1 === t.indexOf(e[n]) && t.push(e[n]);
        return t;
      }
      (o.fn = s.prototype), (o.Class = s), (o.Dom7 = s);
      "resize scroll".split(" ");
      const l = {
        addClass: function (e) {
          if (void 0 === e) return this;
          const t = e.split(" ");
          for (let e = 0; e < t.length; e += 1)
            for (let n = 0; n < this.length; n += 1)
              void 0 !== this[n] &&
                void 0 !== this[n].classList &&
                this[n].classList.add(t[e]);
          return this;
        },
        removeClass: function (e) {
          const t = e.split(" ");
          for (let e = 0; e < t.length; e += 1)
            for (let n = 0; n < this.length; n += 1)
              void 0 !== this[n] &&
                void 0 !== this[n].classList &&
                this[n].classList.remove(t[e]);
          return this;
        },
        hasClass: function (e) {
          return !!this[0] && this[0].classList.contains(e);
        },
        toggleClass: function (e) {
          const t = e.split(" ");
          for (let e = 0; e < t.length; e += 1)
            for (let n = 0; n < this.length; n += 1)
              void 0 !== this[n] &&
                void 0 !== this[n].classList &&
                this[n].classList.toggle(t[e]);
          return this;
        },
        attr: function (e, t) {
          if (1 === arguments.length && "string" == typeof e)
            return this[0] ? this[0].getAttribute(e) : void 0;
          for (let n = 0; n < this.length; n += 1)
            if (2 === arguments.length) this[n].setAttribute(e, t);
            else
              for (const t in e)
                (this[n][t] = e[t]), this[n].setAttribute(t, e[t]);
          return this;
        },
        removeAttr: function (e) {
          for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
          return this;
        },
        data: function (e, t) {
          let n;
          if (void 0 !== t) {
            for (let i = 0; i < this.length; i += 1)
              (n = this[i]),
                n.dom7ElementDataStorage || (n.dom7ElementDataStorage = {}),
                (n.dom7ElementDataStorage[e] = t);
            return this;
          }
          if (((n = this[0]), n)) {
            if (n.dom7ElementDataStorage && e in n.dom7ElementDataStorage)
              return n.dom7ElementDataStorage[e];
            const t = n.getAttribute("data-" + e);
            return t || void 0;
          }
        },
        transform: function (e) {
          for (let t = 0; t < this.length; t += 1) {
            const n = this[t].style;
            (n.webkitTransform = e), (n.transform = e);
          }
          return this;
        },
        transition: function (e) {
          "string" != typeof e && (e += "ms");
          for (let t = 0; t < this.length; t += 1) {
            const n = this[t].style;
            (n.webkitTransitionDuration = e), (n.transitionDuration = e);
          }
          return this;
        },
        on: function (...e) {
          let [t, n, i, r] = e;
          function s(e) {
            const t = e.target;
            if (!t) return;
            const r = e.target.dom7EventData || [];
            if ((r.indexOf(e) < 0 && r.unshift(e), o(t).is(n))) i.apply(t, r);
            else {
              const e = o(t).parents();
              for (let t = 0; t < e.length; t += 1)
                o(e[t]).is(n) && i.apply(e[t], r);
            }
          }
          function a(e) {
            const t = (e && e.target && e.target.dom7EventData) || [];
            t.indexOf(e) < 0 && t.unshift(e), i.apply(this, t);
          }
          "function" == typeof e[1] && (([t, i, r] = e), (n = void 0)),
            r || (r = !1);
          const l = t.split(" ");
          let c;
          for (let e = 0; e < this.length; e += 1) {
            const t = this[e];
            if (n)
              for (c = 0; c < l.length; c += 1) {
                const e = l[c];
                t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                  t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                  t.dom7LiveListeners[e].push({
                    listener: i,
                    proxyListener: s,
                  }),
                  t.addEventListener(e, s, r);
              }
            else
              for (c = 0; c < l.length; c += 1) {
                const e = l[c];
                t.dom7Listeners || (t.dom7Listeners = {}),
                  t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                  t.dom7Listeners[e].push({ listener: i, proxyListener: a }),
                  t.addEventListener(e, a, r);
              }
          }
          return this;
        },
        off: function (...e) {
          let [t, n, i, r] = e;
          "function" == typeof e[1] && (([t, i, r] = e), (n = void 0)),
            r || (r = !1);
          const s = t.split(" ");
          for (let e = 0; e < s.length; e += 1) {
            const t = s[e];
            for (let e = 0; e < this.length; e += 1) {
              const s = this[e];
              let o;
              if (
                (!n && s.dom7Listeners
                  ? (o = s.dom7Listeners[t])
                  : n && s.dom7LiveListeners && (o = s.dom7LiveListeners[t]),
                o && o.length)
              )
                for (let e = o.length - 1; e >= 0; e -= 1) {
                  const n = o[e];
                  (i && n.listener === i) ||
                  (i &&
                    n.listener &&
                    n.listener.dom7proxy &&
                    n.listener.dom7proxy === i)
                    ? (s.removeEventListener(t, n.proxyListener, r),
                      o.splice(e, 1))
                    : i ||
                      (s.removeEventListener(t, n.proxyListener, r),
                      o.splice(e, 1));
                }
            }
          }
          return this;
        },
        trigger: function (...e) {
          const t = e[0].split(" "),
            n = e[1];
          for (let s = 0; s < t.length; s += 1) {
            const o = t[s];
            for (let t = 0; t < this.length; t += 1) {
              const s = this[t];
              let a;
              try {
                a = new r.CustomEvent(o, {
                  detail: n,
                  bubbles: !0,
                  cancelable: !0,
                });
              } catch (e) {
                (a = i.createEvent("Event")),
                  a.initEvent(o, !0, !0),
                  (a.detail = n);
              }
              (s.dom7EventData = e.filter((e, t) => t > 0)),
                s.dispatchEvent(a),
                (s.dom7EventData = []),
                delete s.dom7EventData;
            }
          }
          return this;
        },
        transitionEnd: function (e) {
          const t = ["webkitTransitionEnd", "transitionend"],
            n = this;
          let i;
          function r(s) {
            if (s.target === this)
              for (e.call(this, s), i = 0; i < t.length; i += 1) n.off(t[i], r);
          }
          if (e) for (i = 0; i < t.length; i += 1) n.on(t[i], r);
          return this;
        },
        outerWidth: function (e) {
          if (this.length > 0) {
            if (e) {
              const e = this.styles();
              return (
                this[0].offsetWidth +
                parseFloat(e.getPropertyValue("margin-right")) +
                parseFloat(e.getPropertyValue("margin-left"))
              );
            }
            return this[0].offsetWidth;
          }
          return null;
        },
        outerHeight: function (e) {
          if (this.length > 0) {
            if (e) {
              const e = this.styles();
              return (
                this[0].offsetHeight +
                parseFloat(e.getPropertyValue("margin-top")) +
                parseFloat(e.getPropertyValue("margin-bottom"))
              );
            }
            return this[0].offsetHeight;
          }
          return null;
        },
        offset: function () {
          if (this.length > 0) {
            const e = this[0],
              t = e.getBoundingClientRect(),
              n = i.body,
              s = e.clientTop || n.clientTop || 0,
              o = e.clientLeft || n.clientLeft || 0,
              a = e === r ? r.scrollY : e.scrollTop,
              l = e === r ? r.scrollX : e.scrollLeft;
            return { top: t.top + a - s, left: t.left + l - o };
          }
          return null;
        },
        css: function (e, t) {
          let n;
          if (1 === arguments.length) {
            if ("string" != typeof e) {
              for (n = 0; n < this.length; n += 1)
                for (let t in e) this[n].style[t] = e[t];
              return this;
            }
            if (this[0])
              return r.getComputedStyle(this[0], null).getPropertyValue(e);
          }
          if (2 === arguments.length && "string" == typeof e) {
            for (n = 0; n < this.length; n += 1) this[n].style[e] = t;
            return this;
          }
          return this;
        },
        each: function (e) {
          if (!e) return this;
          for (let t = 0; t < this.length; t += 1)
            if (!1 === e.call(this[t], t, this[t])) return this;
          return this;
        },
        html: function (e) {
          if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
          for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
          return this;
        },
        text: function (e) {
          if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
          for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
          return this;
        },
        is: function (e) {
          const t = this[0];
          let n, a;
          if (!t || void 0 === e) return !1;
          if ("string" == typeof e) {
            if (t.matches) return t.matches(e);
            if (t.webkitMatchesSelector) return t.webkitMatchesSelector(e);
            if (t.msMatchesSelector) return t.msMatchesSelector(e);
            for (n = o(e), a = 0; a < n.length; a += 1)
              if (n[a] === t) return !0;
            return !1;
          }
          if (e === i) return t === i;
          if (e === r) return t === r;
          if (e.nodeType || e instanceof s) {
            for (n = e.nodeType ? [e] : e, a = 0; a < n.length; a += 1)
              if (n[a] === t) return !0;
            return !1;
          }
          return !1;
        },
        index: function () {
          let e,
            t = this[0];
          if (t) {
            for (e = 0; null !== (t = t.previousSibling); )
              1 === t.nodeType && (e += 1);
            return e;
          }
        },
        eq: function (e) {
          if (void 0 === e) return this;
          const t = this.length;
          let n;
          return e > t - 1
            ? new s([])
            : e < 0
            ? ((n = t + e), new s(n < 0 ? [] : [this[n]]))
            : new s([this[e]]);
        },
        append: function (...e) {
          let t;
          for (let n = 0; n < e.length; n += 1) {
            t = e[n];
            for (let e = 0; e < this.length; e += 1)
              if ("string" == typeof t) {
                const n = i.createElement("div");
                for (n.innerHTML = t; n.firstChild; )
                  this[e].appendChild(n.firstChild);
              } else if (t instanceof s)
                for (let n = 0; n < t.length; n += 1) this[e].appendChild(t[n]);
              else this[e].appendChild(t);
          }
          return this;
        },
        prepend: function (e) {
          let t, n;
          for (t = 0; t < this.length; t += 1)
            if ("string" == typeof e) {
              const r = i.createElement("div");
              for (r.innerHTML = e, n = r.childNodes.length - 1; n >= 0; n -= 1)
                this[t].insertBefore(r.childNodes[n], this[t].childNodes[0]);
            } else if (e instanceof s)
              for (n = 0; n < e.length; n += 1)
                this[t].insertBefore(e[n], this[t].childNodes[0]);
            else this[t].insertBefore(e, this[t].childNodes[0]);
          return this;
        },
        next: function (e) {
          return this.length > 0
            ? e
              ? this[0].nextElementSibling &&
                o(this[0].nextElementSibling).is(e)
                ? new s([this[0].nextElementSibling])
                : new s([])
              : this[0].nextElementSibling
              ? new s([this[0].nextElementSibling])
              : new s([])
            : new s([]);
        },
        nextAll: function (e) {
          const t = [];
          let n = this[0];
          if (!n) return new s([]);
          for (; n.nextElementSibling; ) {
            const i = n.nextElementSibling;
            e ? o(i).is(e) && t.push(i) : t.push(i), (n = i);
          }
          return new s(t);
        },
        prev: function (e) {
          if (this.length > 0) {
            const t = this[0];
            return e
              ? t.previousElementSibling && o(t.previousElementSibling).is(e)
                ? new s([t.previousElementSibling])
                : new s([])
              : t.previousElementSibling
              ? new s([t.previousElementSibling])
              : new s([]);
          }
          return new s([]);
        },
        prevAll: function (e) {
          const t = [];
          let n = this[0];
          if (!n) return new s([]);
          for (; n.previousElementSibling; ) {
            const i = n.previousElementSibling;
            e ? o(i).is(e) && t.push(i) : t.push(i), (n = i);
          }
          return new s(t);
        },
        parent: function (e) {
          const t = [];
          for (let n = 0; n < this.length; n += 1)
            null !== this[n].parentNode &&
              (e
                ? o(this[n].parentNode).is(e) && t.push(this[n].parentNode)
                : t.push(this[n].parentNode));
          return o(a(t));
        },
        parents: function (e) {
          const t = [];
          for (let n = 0; n < this.length; n += 1) {
            let i = this[n].parentNode;
            for (; i; )
              e ? o(i).is(e) && t.push(i) : t.push(i), (i = i.parentNode);
          }
          return o(a(t));
        },
        closest: function (e) {
          let t = this;
          return void 0 === e
            ? new s([])
            : (t.is(e) || (t = t.parents(e).eq(0)), t);
        },
        find: function (e) {
          const t = [];
          for (let n = 0; n < this.length; n += 1) {
            const i = this[n].querySelectorAll(e);
            for (let e = 0; e < i.length; e += 1) t.push(i[e]);
          }
          return new s(t);
        },
        children: function (e) {
          const t = [];
          for (let n = 0; n < this.length; n += 1) {
            const i = this[n].childNodes;
            for (let n = 0; n < i.length; n += 1)
              e
                ? 1 === i[n].nodeType && o(i[n]).is(e) && t.push(i[n])
                : 1 === i[n].nodeType && t.push(i[n]);
          }
          return new s(a(t));
        },
        filter: function (e) {
          const t = [],
            n = this;
          for (let i = 0; i < n.length; i += 1)
            e.call(n[i], i, n[i]) && t.push(n[i]);
          return new s(t);
        },
        remove: function () {
          for (let e = 0; e < this.length; e += 1)
            this[e].parentNode && this[e].parentNode.removeChild(this[e]);
          return this;
        },
        add: function (...e) {
          const t = this;
          let n, i;
          for (n = 0; n < e.length; n += 1) {
            const r = o(e[n]);
            for (i = 0; i < r.length; i += 1)
              (t[t.length] = r[i]), (t.length += 1);
          }
          return t;
        },
        styles: function () {
          return this[0] ? r.getComputedStyle(this[0], null) : {};
        },
      };
      Object.keys(l).forEach((e) => {
        o.fn[e] = o.fn[e] || l[e];
      });
      const c = {
          deleteProps(e) {
            const t = e;
            Object.keys(t).forEach((e) => {
              try {
                t[e] = null;
              } catch (e) {}
              try {
                delete t[e];
              } catch (e) {}
            });
          },
          nextTick: (e, t = 0) => setTimeout(e, t),
          now: () => Date.now(),
          getTranslate(e, t = "x") {
            let n, i, s;
            const o = r.getComputedStyle(e, null);
            return (
              r.WebKitCSSMatrix
                ? ((i = o.transform || o.webkitTransform),
                  i.split(",").length > 6 &&
                    (i = i
                      .split(", ")
                      .map((e) => e.replace(",", "."))
                      .join(", ")),
                  (s = new r.WebKitCSSMatrix("none" === i ? "" : i)))
                : ((s =
                    o.MozTransform ||
                    o.OTransform ||
                    o.MsTransform ||
                    o.msTransform ||
                    o.transform ||
                    o
                      .getPropertyValue("transform")
                      .replace("translate(", "matrix(1, 0, 0, 1,")),
                  (n = s.toString().split(","))),
              "x" === t &&
                (i = r.WebKitCSSMatrix
                  ? s.m41
                  : 16 === n.length
                  ? parseFloat(n[12])
                  : parseFloat(n[4])),
              "y" === t &&
                (i = r.WebKitCSSMatrix
                  ? s.m42
                  : 16 === n.length
                  ? parseFloat(n[13])
                  : parseFloat(n[5])),
              i || 0
            );
          },
          parseUrlQuery(e) {
            const t = {};
            let n,
              i,
              s,
              o,
              a = e || r.location.href;
            if ("string" == typeof a && a.length)
              for (
                a = a.indexOf("?") > -1 ? a.replace(/\S*\?/, "") : "",
                  i = a.split("&").filter((e) => "" !== e),
                  o = i.length,
                  n = 0;
                n < o;
                n += 1
              )
                (s = i[n].replace(/#\S+/g, "").split("=")),
                  (t[decodeURIComponent(s[0])] =
                    void 0 === s[1] ? void 0 : decodeURIComponent(s[1]) || "");
            return t;
          },
          isObject: (e) =>
            "object" == typeof e &&
            null !== e &&
            e.constructor &&
            e.constructor === Object,
          extend(...e) {
            const t = Object(e[0]);
            for (let n = 1; n < e.length; n += 1) {
              const i = e[n];
              if (null != i) {
                const e = Object.keys(Object(i));
                for (let n = 0, r = e.length; n < r; n += 1) {
                  const r = e[n],
                    s = Object.getOwnPropertyDescriptor(i, r);
                  void 0 !== s &&
                    s.enumerable &&
                    (c.isObject(t[r]) && c.isObject(i[r])
                      ? c.extend(t[r], i[r])
                      : !c.isObject(t[r]) && c.isObject(i[r])
                      ? ((t[r] = {}), c.extend(t[r], i[r]))
                      : (t[r] = i[r]));
                }
              }
            }
            return t;
          },
        },
        u = {
          touch:
            (r.Modernizr && !0 === r.Modernizr.touch) ||
            !!(
              r.navigator.maxTouchPoints > 0 ||
              "ontouchstart" in r ||
              (r.DocumentTouch && i instanceof r.DocumentTouch)
            ),
          pointerEvents:
            !!r.PointerEvent &&
            "maxTouchPoints" in r.navigator &&
            r.navigator.maxTouchPoints > 0,
          observer: "MutationObserver" in r || "WebkitMutationObserver" in r,
          passiveListener: (function () {
            let e = !1;
            try {
              const t = Object.defineProperty({}, "passive", {
                get() {
                  e = !0;
                },
              });
              r.addEventListener("testPassiveListener", null, t);
            } catch (e) {}
            return e;
          })(),
          gestures: "ongesturestart" in r,
        };
      class d {
        constructor(e = {}) {
          const t = this;
          (t.params = e),
            (t.eventsListeners = {}),
            t.params &&
              t.params.on &&
              Object.keys(t.params.on).forEach((e) => {
                t.on(e, t.params.on[e]);
              });
        }
        on(e, t, n) {
          const i = this;
          if ("function" != typeof t) return i;
          const r = n ? "unshift" : "push";
          return (
            e.split(" ").forEach((e) => {
              i.eventsListeners[e] || (i.eventsListeners[e] = []),
                i.eventsListeners[e][r](t);
            }),
            i
          );
        }
        once(e, t, n) {
          const i = this;
          if ("function" != typeof t) return i;
          function r(...n) {
            i.off(e, r), r.f7proxy && delete r.f7proxy, t.apply(i, n);
          }
          return (r.f7proxy = t), i.on(e, r, n);
        }
        off(e, t) {
          const n = this;
          return n.eventsListeners
            ? (e.split(" ").forEach((e) => {
                void 0 === t
                  ? (n.eventsListeners[e] = [])
                  : n.eventsListeners[e] &&
                    n.eventsListeners[e].length &&
                    n.eventsListeners[e].forEach((i, r) => {
                      (i === t || (i.f7proxy && i.f7proxy === t)) &&
                        n.eventsListeners[e].splice(r, 1);
                    });
              }),
              n)
            : n;
        }
        emit(...e) {
          const t = this;
          if (!t.eventsListeners) return t;
          let n, i, r;
          return (
            "string" == typeof e[0] || Array.isArray(e[0])
              ? ((n = e[0]), (i = e.slice(1, e.length)), (r = t))
              : ((n = e[0].events), (i = e[0].data), (r = e[0].context || t)),
            (Array.isArray(n) ? n : n.split(" ")).forEach((e) => {
              if (t.eventsListeners && t.eventsListeners[e]) {
                const n = [];
                t.eventsListeners[e].forEach((e) => {
                  n.push(e);
                }),
                  n.forEach((e) => {
                    e.apply(r, i);
                  });
              }
            }),
            t
          );
        }
        useModulesParams(e) {
          const t = this;
          t.modules &&
            Object.keys(t.modules).forEach((n) => {
              const i = t.modules[n];
              i.params && c.extend(e, i.params);
            });
        }
        useModules(e = {}) {
          const t = this;
          t.modules &&
            Object.keys(t.modules).forEach((n) => {
              const i = t.modules[n],
                r = e[n] || {};
              i.instance &&
                Object.keys(i.instance).forEach((e) => {
                  const n = i.instance[e];
                  t[e] = "function" == typeof n ? n.bind(t) : n;
                }),
                i.on &&
                  t.on &&
                  Object.keys(i.on).forEach((e) => {
                    t.on(e, i.on[e]);
                  }),
                i.create && i.create.bind(t)(r);
            });
        }
        static set components(e) {
          this.use && this.use(e);
        }
        static installModule(e, ...t) {
          const n = this;
          n.prototype.modules || (n.prototype.modules = {});
          const i =
            e.name || `${Object.keys(n.prototype.modules).length}_${c.now()}`;
          return (
            (n.prototype.modules[i] = e),
            e.proto &&
              Object.keys(e.proto).forEach((t) => {
                n.prototype[t] = e.proto[t];
              }),
            e.static &&
              Object.keys(e.static).forEach((t) => {
                n[t] = e.static[t];
              }),
            e.install && e.install.apply(n, t),
            n
          );
        }
        static use(e, ...t) {
          const n = this;
          return Array.isArray(e)
            ? (e.forEach((e) => n.installModule(e)), n)
            : n.installModule(e, ...t);
        }
      }
      var h = {
        updateSize: function () {
          const e = this;
          let t, n;
          const i = e.$el;
          (t = void 0 !== e.params.width ? e.params.width : i[0].clientWidth),
            (n =
              void 0 !== e.params.height ? e.params.height : i[0].clientHeight),
            (0 === t && e.isHorizontal()) ||
              (0 === n && e.isVertical()) ||
              ((t =
                t -
                parseInt(i.css("padding-left"), 10) -
                parseInt(i.css("padding-right"), 10)),
              (n =
                n -
                parseInt(i.css("padding-top"), 10) -
                parseInt(i.css("padding-bottom"), 10)),
              c.extend(e, {
                width: t,
                height: n,
                size: e.isHorizontal() ? t : n,
              }));
        },
        updateSlides: function () {
          const e = this,
            t = e.params,
            { $wrapperEl: n, size: i, rtlTranslate: s, wrongRTL: o } = e,
            a = e.virtual && t.virtual.enabled,
            l = a ? e.virtual.slides.length : e.slides.length,
            u = n.children("." + e.params.slideClass),
            d = a ? e.virtual.slides.length : u.length;
          let h = [];
          const p = [],
            f = [];
          function m(e) {
            return !t.cssMode || e !== u.length - 1;
          }
          let g = t.slidesOffsetBefore;
          "function" == typeof g && (g = t.slidesOffsetBefore.call(e));
          let v = t.slidesOffsetAfter;
          "function" == typeof v && (v = t.slidesOffsetAfter.call(e));
          const y = e.snapGrid.length,
            b = e.snapGrid.length;
          let w,
            x,
            T = t.spaceBetween,
            E = -g,
            S = 0,
            C = 0;
          if (void 0 === i) return;
          "string" == typeof T &&
            T.indexOf("%") >= 0 &&
            (T = (parseFloat(T.replace("%", "")) / 100) * i),
            (e.virtualSize = -T),
            s
              ? u.css({ marginLeft: "", marginTop: "" })
              : u.css({ marginRight: "", marginBottom: "" }),
            t.slidesPerColumn > 1 &&
              ((w =
                Math.floor(d / t.slidesPerColumn) ===
                d / e.params.slidesPerColumn
                  ? d
                  : Math.ceil(d / t.slidesPerColumn) * t.slidesPerColumn),
              "auto" !== t.slidesPerView &&
                "row" === t.slidesPerColumnFill &&
                (w = Math.max(w, t.slidesPerView * t.slidesPerColumn)));
          const _ = t.slidesPerColumn,
            k = w / _,
            M = Math.floor(d / t.slidesPerColumn);
          for (let n = 0; n < d; n += 1) {
            x = 0;
            const s = u.eq(n);
            if (t.slidesPerColumn > 1) {
              let i, r, o;
              if ("row" === t.slidesPerColumnFill && t.slidesPerGroup > 1) {
                const e = Math.floor(
                    n / (t.slidesPerGroup * t.slidesPerColumn)
                  ),
                  a = n - t.slidesPerColumn * t.slidesPerGroup * e,
                  l =
                    0 === e
                      ? t.slidesPerGroup
                      : Math.min(
                          Math.ceil((d - e * _ * t.slidesPerGroup) / _),
                          t.slidesPerGroup
                        );
                (o = Math.floor(a / l)),
                  (r = a - o * l + e * t.slidesPerGroup),
                  (i = r + (o * w) / _),
                  s.css({
                    "-webkit-box-ordinal-group": i,
                    "-moz-box-ordinal-group": i,
                    "-ms-flex-order": i,
                    "-webkit-order": i,
                    order: i,
                  });
              } else
                "column" === t.slidesPerColumnFill
                  ? ((r = Math.floor(n / _)),
                    (o = n - r * _),
                    (r > M || (r === M && o === _ - 1)) &&
                      ((o += 1), o >= _ && ((o = 0), (r += 1))))
                  : ((o = Math.floor(n / k)), (r = n - o * k));
              s.css(
                "margin-" + (e.isHorizontal() ? "top" : "left"),
                0 !== o && t.spaceBetween && t.spaceBetween + "px"
              );
            }
            if ("none" !== s.css("display")) {
              if ("auto" === t.slidesPerView) {
                const n = r.getComputedStyle(s[0], null),
                  i = s[0].style.transform,
                  o = s[0].style.webkitTransform;
                if (
                  (i && (s[0].style.transform = "none"),
                  o && (s[0].style.webkitTransform = "none"),
                  t.roundLengths)
                )
                  x = e.isHorizontal() ? s.outerWidth(!0) : s.outerHeight(!0);
                else if (e.isHorizontal()) {
                  const e = parseFloat(n.getPropertyValue("width")),
                    t = parseFloat(n.getPropertyValue("padding-left")),
                    i = parseFloat(n.getPropertyValue("padding-right")),
                    r = parseFloat(n.getPropertyValue("margin-left")),
                    s = parseFloat(n.getPropertyValue("margin-right")),
                    o = n.getPropertyValue("box-sizing");
                  x = o && "border-box" === o ? e + r + s : e + t + i + r + s;
                } else {
                  const e = parseFloat(n.getPropertyValue("height")),
                    t = parseFloat(n.getPropertyValue("padding-top")),
                    i = parseFloat(n.getPropertyValue("padding-bottom")),
                    r = parseFloat(n.getPropertyValue("margin-top")),
                    s = parseFloat(n.getPropertyValue("margin-bottom")),
                    o = n.getPropertyValue("box-sizing");
                  x = o && "border-box" === o ? e + r + s : e + t + i + r + s;
                }
                i && (s[0].style.transform = i),
                  o && (s[0].style.webkitTransform = o),
                  t.roundLengths && (x = Math.floor(x));
              } else
                (x = (i - (t.slidesPerView - 1) * T) / t.slidesPerView),
                  t.roundLengths && (x = Math.floor(x)),
                  u[n] &&
                    (e.isHorizontal()
                      ? (u[n].style.width = x + "px")
                      : (u[n].style.height = x + "px"));
              u[n] && (u[n].swiperSlideSize = x),
                f.push(x),
                t.centeredSlides
                  ? ((E = E + x / 2 + S / 2 + T),
                    0 === S && 0 !== n && (E = E - i / 2 - T),
                    0 === n && (E = E - i / 2 - T),
                    Math.abs(E) < 0.001 && (E = 0),
                    t.roundLengths && (E = Math.floor(E)),
                    C % t.slidesPerGroup == 0 && h.push(E),
                    p.push(E))
                  : (t.roundLengths && (E = Math.floor(E)),
                    (C - Math.min(e.params.slidesPerGroupSkip, C)) %
                      e.params.slidesPerGroup ==
                      0 && h.push(E),
                    p.push(E),
                    (E = E + x + T)),
                (e.virtualSize += x + T),
                (S = x),
                (C += 1);
            }
          }
          let L;
          if (
            ((e.virtualSize = Math.max(e.virtualSize, i) + v),
            s &&
              o &&
              ("slide" === t.effect || "coverflow" === t.effect) &&
              n.css({ width: e.virtualSize + t.spaceBetween + "px" }),
            t.setWrapperSize &&
              (e.isHorizontal()
                ? n.css({ width: e.virtualSize + t.spaceBetween + "px" })
                : n.css({ height: e.virtualSize + t.spaceBetween + "px" })),
            t.slidesPerColumn > 1 &&
              ((e.virtualSize = (x + t.spaceBetween) * w),
              (e.virtualSize =
                Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween),
              e.isHorizontal()
                ? n.css({ width: e.virtualSize + t.spaceBetween + "px" })
                : n.css({ height: e.virtualSize + t.spaceBetween + "px" }),
              t.centeredSlides))
          ) {
            L = [];
            for (let n = 0; n < h.length; n += 1) {
              let i = h[n];
              t.roundLengths && (i = Math.floor(i)),
                h[n] < e.virtualSize + h[0] && L.push(i);
            }
            h = L;
          }
          if (!t.centeredSlides) {
            L = [];
            for (let n = 0; n < h.length; n += 1) {
              let r = h[n];
              t.roundLengths && (r = Math.floor(r)),
                h[n] <= e.virtualSize - i && L.push(r);
            }
            (h = L),
              Math.floor(e.virtualSize - i) - Math.floor(h[h.length - 1]) > 1 &&
                h.push(e.virtualSize - i);
          }
          if (
            (0 === h.length && (h = [0]),
            0 !== t.spaceBetween &&
              (e.isHorizontal()
                ? s
                  ? u.filter(m).css({ marginLeft: T + "px" })
                  : u.filter(m).css({ marginRight: T + "px" })
                : u.filter(m).css({ marginBottom: T + "px" })),
            t.centeredSlides && t.centeredSlidesBounds)
          ) {
            let e = 0;
            f.forEach((n) => {
              e += n + (t.spaceBetween ? t.spaceBetween : 0);
            }),
              (e -= t.spaceBetween);
            const n = e - i;
            h = h.map((e) => (e < 0 ? -g : e > n ? n + v : e));
          }
          if (t.centerInsufficientSlides) {
            let e = 0;
            if (
              (f.forEach((n) => {
                e += n + (t.spaceBetween ? t.spaceBetween : 0);
              }),
              (e -= t.spaceBetween),
              e < i)
            ) {
              const t = (i - e) / 2;
              h.forEach((e, n) => {
                h[n] = e - t;
              }),
                p.forEach((e, n) => {
                  p[n] = e + t;
                });
            }
          }
          c.extend(e, {
            slides: u,
            snapGrid: h,
            slidesGrid: p,
            slidesSizesGrid: f,
          }),
            d !== l && e.emit("slidesLengthChange"),
            h.length !== y &&
              (e.params.watchOverflow && e.checkOverflow(),
              e.emit("snapGridLengthChange")),
            p.length !== b && e.emit("slidesGridLengthChange"),
            (t.watchSlidesProgress || t.watchSlidesVisibility) &&
              e.updateSlidesOffset();
        },
        updateAutoHeight: function (e) {
          const t = this,
            n = [];
          let i,
            r = 0;
          if (
            ("number" == typeof e
              ? t.setTransition(e)
              : !0 === e && t.setTransition(t.params.speed),
            "auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
          )
            if (t.params.centeredSlides)
              t.visibleSlides.each((e, t) => {
                n.push(t);
              });
            else
              for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                const e = t.activeIndex + i;
                if (e > t.slides.length) break;
                n.push(t.slides.eq(e)[0]);
              }
          else n.push(t.slides.eq(t.activeIndex)[0]);
          for (i = 0; i < n.length; i += 1)
            if (void 0 !== n[i]) {
              const e = n[i].offsetHeight;
              r = e > r ? e : r;
            }
          r && t.$wrapperEl.css("height", r + "px");
        },
        updateSlidesOffset: function () {
          const e = this,
            t = e.slides;
          for (let n = 0; n < t.length; n += 1)
            t[n].swiperSlideOffset = e.isHorizontal()
              ? t[n].offsetLeft
              : t[n].offsetTop;
        },
        updateSlidesProgress: function (e = (this && this.translate) || 0) {
          const t = this,
            n = t.params,
            { slides: i, rtlTranslate: r } = t;
          if (0 === i.length) return;
          void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
          let s = -e;
          r && (s = e),
            i.removeClass(n.slideVisibleClass),
            (t.visibleSlidesIndexes = []),
            (t.visibleSlides = []);
          for (let e = 0; e < i.length; e += 1) {
            const o = i[e],
              a =
                (s +
                  (n.centeredSlides ? t.minTranslate() : 0) -
                  o.swiperSlideOffset) /
                (o.swiperSlideSize + n.spaceBetween);
            if (n.watchSlidesVisibility || (n.centeredSlides && n.autoHeight)) {
              const r = -(s - o.swiperSlideOffset),
                a = r + t.slidesSizesGrid[e];
              ((r >= 0 && r < t.size - 1) ||
                (a > 1 && a <= t.size) ||
                (r <= 0 && a >= t.size)) &&
                (t.visibleSlides.push(o),
                t.visibleSlidesIndexes.push(e),
                i.eq(e).addClass(n.slideVisibleClass));
            }
            o.progress = r ? -a : a;
          }
          t.visibleSlides = o(t.visibleSlides);
        },
        updateProgress: function (e) {
          const t = this;
          if (void 0 === e) {
            const n = t.rtlTranslate ? -1 : 1;
            e = (t && t.translate && t.translate * n) || 0;
          }
          const n = t.params,
            i = t.maxTranslate() - t.minTranslate();
          let { progress: r, isBeginning: s, isEnd: o } = t;
          const a = s,
            l = o;
          0 === i
            ? ((r = 0), (s = !0), (o = !0))
            : ((r = (e - t.minTranslate()) / i), (s = r <= 0), (o = r >= 1)),
            c.extend(t, { progress: r, isBeginning: s, isEnd: o }),
            (n.watchSlidesProgress ||
              n.watchSlidesVisibility ||
              (n.centeredSlides && n.autoHeight)) &&
              t.updateSlidesProgress(e),
            s && !a && t.emit("reachBeginning toEdge"),
            o && !l && t.emit("reachEnd toEdge"),
            ((a && !s) || (l && !o)) && t.emit("fromEdge"),
            t.emit("progress", r);
        },
        updateSlidesClasses: function () {
          const e = this,
            {
              slides: t,
              params: n,
              $wrapperEl: i,
              activeIndex: r,
              realIndex: s,
            } = e,
            o = e.virtual && n.virtual.enabled;
          let a;
          t.removeClass(
            `${n.slideActiveClass} ${n.slideNextClass} ${n.slidePrevClass} ${n.slideDuplicateActiveClass} ${n.slideDuplicateNextClass} ${n.slideDuplicatePrevClass}`
          ),
            (a = o
              ? e.$wrapperEl.find(
                  `.${n.slideClass}[data-swiper-slide-index="${r}"]`
                )
              : t.eq(r)),
            a.addClass(n.slideActiveClass),
            n.loop &&
              (a.hasClass(n.slideDuplicateClass)
                ? i
                    .children(
                      `.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${s}"]`
                    )
                    .addClass(n.slideDuplicateActiveClass)
                : i
                    .children(
                      `.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${s}"]`
                    )
                    .addClass(n.slideDuplicateActiveClass));
          let l = a
            .nextAll("." + n.slideClass)
            .eq(0)
            .addClass(n.slideNextClass);
          n.loop &&
            0 === l.length &&
            ((l = t.eq(0)), l.addClass(n.slideNextClass));
          let c = a
            .prevAll("." + n.slideClass)
            .eq(0)
            .addClass(n.slidePrevClass);
          n.loop &&
            0 === c.length &&
            ((c = t.eq(-1)), c.addClass(n.slidePrevClass)),
            n.loop &&
              (l.hasClass(n.slideDuplicateClass)
                ? i
                    .children(
                      `.${n.slideClass}:not(.${
                        n.slideDuplicateClass
                      })[data-swiper-slide-index="${l.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(n.slideDuplicateNextClass)
                : i
                    .children(
                      `.${n.slideClass}.${
                        n.slideDuplicateClass
                      }[data-swiper-slide-index="${l.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(n.slideDuplicateNextClass),
              c.hasClass(n.slideDuplicateClass)
                ? i
                    .children(
                      `.${n.slideClass}:not(.${
                        n.slideDuplicateClass
                      })[data-swiper-slide-index="${c.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(n.slideDuplicatePrevClass)
                : i
                    .children(
                      `.${n.slideClass}.${
                        n.slideDuplicateClass
                      }[data-swiper-slide-index="${c.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(n.slideDuplicatePrevClass));
        },
        updateActiveIndex: function (e) {
          const t = this,
            n = t.rtlTranslate ? t.translate : -t.translate,
            {
              slidesGrid: i,
              snapGrid: r,
              params: s,
              activeIndex: o,
              realIndex: a,
              snapIndex: l,
            } = t;
          let u,
            d = e;
          if (void 0 === d) {
            for (let e = 0; e < i.length; e += 1)
              void 0 !== i[e + 1]
                ? n >= i[e] && n < i[e + 1] - (i[e + 1] - i[e]) / 2
                  ? (d = e)
                  : n >= i[e] && n < i[e + 1] && (d = e + 1)
                : n >= i[e] && (d = e);
            s.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0);
          }
          if (r.indexOf(n) >= 0) u = r.indexOf(n);
          else {
            const e = Math.min(s.slidesPerGroupSkip, d);
            u = e + Math.floor((d - e) / s.slidesPerGroup);
          }
          if ((u >= r.length && (u = r.length - 1), d === o))
            return void (
              u !== l && ((t.snapIndex = u), t.emit("snapIndexChange"))
            );
          const h = parseInt(
            t.slides.eq(d).attr("data-swiper-slide-index") || d,
            10
          );
          c.extend(t, {
            snapIndex: u,
            realIndex: h,
            previousIndex: o,
            activeIndex: d,
          }),
            t.emit("activeIndexChange"),
            t.emit("snapIndexChange"),
            a !== h && t.emit("realIndexChange"),
            (t.initialized || t.params.runCallbacksOnInit) &&
              t.emit("slideChange");
        },
        updateClickedSlide: function (e) {
          const t = this,
            n = t.params,
            i = o(e.target).closest("." + n.slideClass)[0];
          let r = !1;
          if (i)
            for (let e = 0; e < t.slides.length; e += 1)
              t.slides[e] === i && (r = !0);
          if (!i || !r)
            return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
          (t.clickedSlide = i),
            t.virtual && t.params.virtual.enabled
              ? (t.clickedIndex = parseInt(
                  o(i).attr("data-swiper-slide-index"),
                  10
                ))
              : (t.clickedIndex = o(i).index()),
            n.slideToClickedSlide &&
              void 0 !== t.clickedIndex &&
              t.clickedIndex !== t.activeIndex &&
              t.slideToClickedSlide();
        },
      };
      var p = {
        getTranslate: function (e = this.isHorizontal() ? "x" : "y") {
          const {
            params: t,
            rtlTranslate: n,
            translate: i,
            $wrapperEl: r,
          } = this;
          if (t.virtualTranslate) return n ? -i : i;
          if (t.cssMode) return i;
          let s = c.getTranslate(r[0], e);
          return n && (s = -s), s || 0;
        },
        setTranslate: function (e, t) {
          const n = this,
            {
              rtlTranslate: i,
              params: r,
              $wrapperEl: s,
              wrapperEl: o,
              progress: a,
            } = n;
          let l,
            c = 0,
            u = 0;
          n.isHorizontal() ? (c = i ? -e : e) : (u = e),
            r.roundLengths && ((c = Math.floor(c)), (u = Math.floor(u))),
            r.cssMode
              ? (o[n.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                  n.isHorizontal() ? -c : -u)
              : r.virtualTranslate ||
                s.transform(`translate3d(${c}px, ${u}px, 0px)`),
            (n.previousTranslate = n.translate),
            (n.translate = n.isHorizontal() ? c : u);
          const d = n.maxTranslate() - n.minTranslate();
          (l = 0 === d ? 0 : (e - n.minTranslate()) / d),
            l !== a && n.updateProgress(e),
            n.emit("setTranslate", n.translate, t);
        },
        minTranslate: function () {
          return -this.snapGrid[0];
        },
        maxTranslate: function () {
          return -this.snapGrid[this.snapGrid.length - 1];
        },
        translateTo: function (
          e = 0,
          t = this.params.speed,
          n = !0,
          i = !0,
          r
        ) {
          const s = this,
            { params: o, wrapperEl: a } = s;
          if (s.animating && o.preventInteractionOnTransition) return !1;
          const l = s.minTranslate(),
            c = s.maxTranslate();
          let u;
          if (
            ((u = i && e > l ? l : i && e < c ? c : e),
            s.updateProgress(u),
            o.cssMode)
          ) {
            const e = s.isHorizontal();
            return (
              0 === t
                ? (a[e ? "scrollLeft" : "scrollTop"] = -u)
                : a.scrollTo
                ? a.scrollTo({ [e ? "left" : "top"]: -u, behavior: "smooth" })
                : (a[e ? "scrollLeft" : "scrollTop"] = -u),
              !0
            );
          }
          return (
            0 === t
              ? (s.setTransition(0),
                s.setTranslate(u),
                n &&
                  (s.emit("beforeTransitionStart", t, r),
                  s.emit("transitionEnd")))
              : (s.setTransition(t),
                s.setTranslate(u),
                n &&
                  (s.emit("beforeTransitionStart", t, r),
                  s.emit("transitionStart")),
                s.animating ||
                  ((s.animating = !0),
                  s.onTranslateToWrapperTransitionEnd ||
                    (s.onTranslateToWrapperTransitionEnd = function (e) {
                      s &&
                        !s.destroyed &&
                        e.target === this &&
                        (s.$wrapperEl[0].removeEventListener(
                          "transitionend",
                          s.onTranslateToWrapperTransitionEnd
                        ),
                        s.$wrapperEl[0].removeEventListener(
                          "webkitTransitionEnd",
                          s.onTranslateToWrapperTransitionEnd
                        ),
                        (s.onTranslateToWrapperTransitionEnd = null),
                        delete s.onTranslateToWrapperTransitionEnd,
                        n && s.emit("transitionEnd"));
                    }),
                  s.$wrapperEl[0].addEventListener(
                    "transitionend",
                    s.onTranslateToWrapperTransitionEnd
                  ),
                  s.$wrapperEl[0].addEventListener(
                    "webkitTransitionEnd",
                    s.onTranslateToWrapperTransitionEnd
                  ))),
            !0
          );
        },
      };
      var f = {
        setTransition: function (e, t) {
          const n = this;
          n.params.cssMode || n.$wrapperEl.transition(e),
            n.emit("setTransition", e, t);
        },
        transitionStart: function (e = !0, t) {
          const n = this,
            { activeIndex: i, params: r, previousIndex: s } = n;
          if (r.cssMode) return;
          r.autoHeight && n.updateAutoHeight();
          let o = t;
          if (
            (o || (o = i > s ? "next" : i < s ? "prev" : "reset"),
            n.emit("transitionStart"),
            e && i !== s)
          ) {
            if ("reset" === o) return void n.emit("slideResetTransitionStart");
            n.emit("slideChangeTransitionStart"),
              "next" === o
                ? n.emit("slideNextTransitionStart")
                : n.emit("slidePrevTransitionStart");
          }
        },
        transitionEnd: function (e = !0, t) {
          const n = this,
            { activeIndex: i, previousIndex: r, params: s } = n;
          if (((n.animating = !1), s.cssMode)) return;
          n.setTransition(0);
          let o = t;
          if (
            (o || (o = i > r ? "next" : i < r ? "prev" : "reset"),
            n.emit("transitionEnd"),
            e && i !== r)
          ) {
            if ("reset" === o) return void n.emit("slideResetTransitionEnd");
            n.emit("slideChangeTransitionEnd"),
              "next" === o
                ? n.emit("slideNextTransitionEnd")
                : n.emit("slidePrevTransitionEnd");
          }
        },
      };
      var m = {
        slideTo: function (e = 0, t = this.params.speed, n = !0, i) {
          const r = this;
          let s = e;
          s < 0 && (s = 0);
          const {
            params: o,
            snapGrid: a,
            slidesGrid: l,
            previousIndex: c,
            activeIndex: u,
            rtlTranslate: d,
            wrapperEl: h,
          } = r;
          if (r.animating && o.preventInteractionOnTransition) return !1;
          const p = Math.min(r.params.slidesPerGroupSkip, s);
          let f = p + Math.floor((s - p) / r.params.slidesPerGroup);
          f >= a.length && (f = a.length - 1),
            (u || o.initialSlide || 0) === (c || 0) &&
              n &&
              r.emit("beforeSlideChangeStart");
          const m = -a[f];
          if ((r.updateProgress(m), o.normalizeSlideIndex))
            for (let e = 0; e < l.length; e += 1)
              -Math.floor(100 * m) >= Math.floor(100 * l[e]) && (s = e);
          if (r.initialized && s !== u) {
            if (!r.allowSlideNext && m < r.translate && m < r.minTranslate())
              return !1;
            if (
              !r.allowSlidePrev &&
              m > r.translate &&
              m > r.maxTranslate() &&
              (u || 0) !== s
            )
              return !1;
          }
          let g;
          if (
            ((g = s > u ? "next" : s < u ? "prev" : "reset"),
            (d && -m === r.translate) || (!d && m === r.translate))
          )
            return (
              r.updateActiveIndex(s),
              o.autoHeight && r.updateAutoHeight(),
              r.updateSlidesClasses(),
              "slide" !== o.effect && r.setTranslate(m),
              "reset" !== g && (r.transitionStart(n, g), r.transitionEnd(n, g)),
              !1
            );
          if (o.cssMode) {
            const e = r.isHorizontal();
            let n = -m;
            return (
              d && (n = h.scrollWidth - h.offsetWidth - n),
              0 === t
                ? (h[e ? "scrollLeft" : "scrollTop"] = n)
                : h.scrollTo
                ? h.scrollTo({ [e ? "left" : "top"]: n, behavior: "smooth" })
                : (h[e ? "scrollLeft" : "scrollTop"] = n),
              !0
            );
          }
          return (
            0 === t
              ? (r.setTransition(0),
                r.setTranslate(m),
                r.updateActiveIndex(s),
                r.updateSlidesClasses(),
                r.emit("beforeTransitionStart", t, i),
                r.transitionStart(n, g),
                r.transitionEnd(n, g))
              : (r.setTransition(t),
                r.setTranslate(m),
                r.updateActiveIndex(s),
                r.updateSlidesClasses(),
                r.emit("beforeTransitionStart", t, i),
                r.transitionStart(n, g),
                r.animating ||
                  ((r.animating = !0),
                  r.onSlideToWrapperTransitionEnd ||
                    (r.onSlideToWrapperTransitionEnd = function (e) {
                      r &&
                        !r.destroyed &&
                        e.target === this &&
                        (r.$wrapperEl[0].removeEventListener(
                          "transitionend",
                          r.onSlideToWrapperTransitionEnd
                        ),
                        r.$wrapperEl[0].removeEventListener(
                          "webkitTransitionEnd",
                          r.onSlideToWrapperTransitionEnd
                        ),
                        (r.onSlideToWrapperTransitionEnd = null),
                        delete r.onSlideToWrapperTransitionEnd,
                        r.transitionEnd(n, g));
                    }),
                  r.$wrapperEl[0].addEventListener(
                    "transitionend",
                    r.onSlideToWrapperTransitionEnd
                  ),
                  r.$wrapperEl[0].addEventListener(
                    "webkitTransitionEnd",
                    r.onSlideToWrapperTransitionEnd
                  ))),
            !0
          );
        },
        slideToLoop: function (e = 0, t = this.params.speed, n = !0, i) {
          const r = this;
          let s = e;
          return r.params.loop && (s += r.loopedSlides), r.slideTo(s, t, n, i);
        },
        slideNext: function (e = this.params.speed, t = !0, n) {
          const i = this,
            { params: r, animating: s } = i,
            o = i.activeIndex < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup;
          if (r.loop) {
            if (s) return !1;
            i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
          }
          return i.slideTo(i.activeIndex + o, e, t, n);
        },
        slidePrev: function (e = this.params.speed, t = !0, n) {
          const i = this,
            {
              params: r,
              animating: s,
              snapGrid: o,
              slidesGrid: a,
              rtlTranslate: l,
            } = i;
          if (r.loop) {
            if (s) return !1;
            i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
          }
          function c(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
          }
          const u = c(l ? i.translate : -i.translate),
            d = o.map((e) => c(e));
          a.map((e) => c(e)), o[d.indexOf(u)];
          let h,
            p = o[d.indexOf(u) - 1];
          return (
            void 0 === p &&
              r.cssMode &&
              o.forEach((e) => {
                !p && u >= e && (p = e);
              }),
            void 0 !== p &&
              ((h = a.indexOf(p)), h < 0 && (h = i.activeIndex - 1)),
            i.slideTo(h, e, t, n)
          );
        },
        slideReset: function (e = this.params.speed, t = !0, n) {
          return this.slideTo(this.activeIndex, e, t, n);
        },
        slideToClosest: function (e = this.params.speed, t = !0, n, i = 0.5) {
          const r = this;
          let s = r.activeIndex;
          const o = Math.min(r.params.slidesPerGroupSkip, s),
            a = o + Math.floor((s - o) / r.params.slidesPerGroup),
            l = r.rtlTranslate ? r.translate : -r.translate;
          if (l >= r.snapGrid[a]) {
            const e = r.snapGrid[a];
            l - e > (r.snapGrid[a + 1] - e) * i &&
              (s += r.params.slidesPerGroup);
          } else {
            const e = r.snapGrid[a - 1];
            l - e <= (r.snapGrid[a] - e) * i && (s -= r.params.slidesPerGroup);
          }
          return (
            (s = Math.max(s, 0)),
            (s = Math.min(s, r.slidesGrid.length - 1)),
            r.slideTo(s, e, t, n)
          );
        },
        slideToClickedSlide: function () {
          const e = this,
            { params: t, $wrapperEl: n } = e,
            i =
              "auto" === t.slidesPerView
                ? e.slidesPerViewDynamic()
                : t.slidesPerView;
          let r,
            s = e.clickedIndex;
          if (t.loop) {
            if (e.animating) return;
            (r = parseInt(
              o(e.clickedSlide).attr("data-swiper-slide-index"),
              10
            )),
              t.centeredSlides
                ? s < e.loopedSlides - i / 2 ||
                  s > e.slides.length - e.loopedSlides + i / 2
                  ? (e.loopFix(),
                    (s = n
                      .children(
                        `.${t.slideClass}[data-swiper-slide-index="${r}"]:not(.${t.slideDuplicateClass})`
                      )
                      .eq(0)
                      .index()),
                    c.nextTick(() => {
                      e.slideTo(s);
                    }))
                  : e.slideTo(s)
                : s > e.slides.length - i
                ? (e.loopFix(),
                  (s = n
                    .children(
                      `.${t.slideClass}[data-swiper-slide-index="${r}"]:not(.${t.slideDuplicateClass})`
                    )
                    .eq(0)
                    .index()),
                  c.nextTick(() => {
                    e.slideTo(s);
                  }))
                : e.slideTo(s);
          } else e.slideTo(s);
        },
      };
      var g = {
        loopCreate: function () {
          const e = this,
            { params: t, $wrapperEl: n } = e;
          n.children(`.${t.slideClass}.${t.slideDuplicateClass}`).remove();
          let r = n.children("." + t.slideClass);
          if (t.loopFillGroupWithBlank) {
            const e = t.slidesPerGroup - (r.length % t.slidesPerGroup);
            if (e !== t.slidesPerGroup) {
              for (let r = 0; r < e; r += 1) {
                const e = o(i.createElement("div")).addClass(
                  `${t.slideClass} ${t.slideBlankClass}`
                );
                n.append(e);
              }
              r = n.children("." + t.slideClass);
            }
          }
          "auto" !== t.slidesPerView ||
            t.loopedSlides ||
            (t.loopedSlides = r.length),
            (e.loopedSlides = Math.ceil(
              parseFloat(t.loopedSlides || t.slidesPerView, 10)
            )),
            (e.loopedSlides += t.loopAdditionalSlides),
            e.loopedSlides > r.length && (e.loopedSlides = r.length);
          const s = [],
            a = [];
          r.each((t, n) => {
            const i = o(n);
            t < e.loopedSlides && a.push(n),
              t < r.length && t >= r.length - e.loopedSlides && s.push(n),
              i.attr("data-swiper-slide-index", t);
          });
          for (let e = 0; e < a.length; e += 1)
            n.append(o(a[e].cloneNode(!0)).addClass(t.slideDuplicateClass));
          for (let e = s.length - 1; e >= 0; e -= 1)
            n.prepend(o(s[e].cloneNode(!0)).addClass(t.slideDuplicateClass));
        },
        loopFix: function () {
          const e = this;
          e.emit("beforeLoopFix");
          const {
            activeIndex: t,
            slides: n,
            loopedSlides: i,
            allowSlidePrev: r,
            allowSlideNext: s,
            snapGrid: o,
            rtlTranslate: a,
          } = e;
          let l;
          (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
          const c = -o[t] - e.getTranslate();
          if (t < i) {
            (l = n.length - 3 * i + t),
              (l += i),
              e.slideTo(l, 0, !1, !0) &&
                0 !== c &&
                e.setTranslate((a ? -e.translate : e.translate) - c);
          } else if (t >= n.length - i) {
            (l = -n.length + t + i),
              (l += i),
              e.slideTo(l, 0, !1, !0) &&
                0 !== c &&
                e.setTranslate((a ? -e.translate : e.translate) - c);
          }
          (e.allowSlidePrev = r), (e.allowSlideNext = s), e.emit("loopFix");
        },
        loopDestroy: function () {
          const { $wrapperEl: e, params: t, slides: n } = this;
          e
            .children(
              `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
            )
            .remove(),
            n.removeAttr("data-swiper-slide-index");
        },
      };
      var v = {
        setGrabCursor: function (e) {
          if (
            u.touch ||
            !this.params.simulateTouch ||
            (this.params.watchOverflow && this.isLocked) ||
            this.params.cssMode
          )
            return;
          const t = this.el;
          (t.style.cursor = "move"),
            (t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
            (t.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
            (t.style.cursor = e ? "grabbing" : "grab");
        },
        unsetGrabCursor: function () {
          u.touch ||
            (this.params.watchOverflow && this.isLocked) ||
            this.params.cssMode ||
            (this.el.style.cursor = "");
        },
      };
      var y = {
        appendSlide: function (e) {
          const t = this,
            { $wrapperEl: n, params: i } = t;
          if (
            (i.loop && t.loopDestroy(), "object" == typeof e && "length" in e)
          )
            for (let t = 0; t < e.length; t += 1) e[t] && n.append(e[t]);
          else n.append(e);
          i.loop && t.loopCreate(), (i.observer && u.observer) || t.update();
        },
        prependSlide: function (e) {
          const t = this,
            { params: n, $wrapperEl: i, activeIndex: r } = t;
          n.loop && t.loopDestroy();
          let s = r + 1;
          if ("object" == typeof e && "length" in e) {
            for (let t = 0; t < e.length; t += 1) e[t] && i.prepend(e[t]);
            s = r + e.length;
          } else i.prepend(e);
          n.loop && t.loopCreate(),
            (n.observer && u.observer) || t.update(),
            t.slideTo(s, 0, !1);
        },
        addSlide: function (e, t) {
          const n = this,
            { $wrapperEl: i, params: r, activeIndex: s } = n;
          let o = s;
          r.loop &&
            ((o -= n.loopedSlides),
            n.loopDestroy(),
            (n.slides = i.children("." + r.slideClass)));
          const a = n.slides.length;
          if (e <= 0) return void n.prependSlide(t);
          if (e >= a) return void n.appendSlide(t);
          let l = o > e ? o + 1 : o;
          const c = [];
          for (let t = a - 1; t >= e; t -= 1) {
            const e = n.slides.eq(t);
            e.remove(), c.unshift(e);
          }
          if ("object" == typeof t && "length" in t) {
            for (let e = 0; e < t.length; e += 1) t[e] && i.append(t[e]);
            l = o > e ? o + t.length : o;
          } else i.append(t);
          for (let e = 0; e < c.length; e += 1) i.append(c[e]);
          r.loop && n.loopCreate(),
            (r.observer && u.observer) || n.update(),
            r.loop ? n.slideTo(l + n.loopedSlides, 0, !1) : n.slideTo(l, 0, !1);
        },
        removeSlide: function (e) {
          const t = this,
            { params: n, $wrapperEl: i, activeIndex: r } = t;
          let s = r;
          n.loop &&
            ((s -= t.loopedSlides),
            t.loopDestroy(),
            (t.slides = i.children("." + n.slideClass)));
          let o,
            a = s;
          if ("object" == typeof e && "length" in e) {
            for (let n = 0; n < e.length; n += 1)
              (o = e[n]),
                t.slides[o] && t.slides.eq(o).remove(),
                o < a && (a -= 1);
            a = Math.max(a, 0);
          } else
            (o = e),
              t.slides[o] && t.slides.eq(o).remove(),
              o < a && (a -= 1),
              (a = Math.max(a, 0));
          n.loop && t.loopCreate(),
            (n.observer && u.observer) || t.update(),
            n.loop ? t.slideTo(a + t.loopedSlides, 0, !1) : t.slideTo(a, 0, !1);
        },
        removeAllSlides: function () {
          const e = this,
            t = [];
          for (let n = 0; n < e.slides.length; n += 1) t.push(n);
          e.removeSlide(t);
        },
      };
      const b = (function () {
        const e = r.navigator.platform,
          t = r.navigator.userAgent,
          n = {
            ios: !1,
            android: !1,
            androidChrome: !1,
            desktop: !1,
            iphone: !1,
            ipod: !1,
            ipad: !1,
            edge: !1,
            ie: !1,
            firefox: !1,
            macos: !1,
            windows: !1,
            cordova: !(!r.cordova && !r.phonegap),
            phonegap: !(!r.cordova && !r.phonegap),
            electron: !1,
          },
          i = r.screen.width,
          s = r.screen.height,
          o = t.match(/(Android);?[\s\/]+([\d.]+)?/);
        let a = t.match(/(iPad).*OS\s([\d_]+)/);
        const l = t.match(/(iPod)(.*OS\s([\d_]+))?/),
          c = !a && t.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
          d = t.indexOf("MSIE ") >= 0 || t.indexOf("Trident/") >= 0,
          h = t.indexOf("Edge/") >= 0,
          p = t.indexOf("Gecko/") >= 0 && t.indexOf("Firefox/") >= 0,
          f = "Win32" === e,
          m = t.toLowerCase().indexOf("electron") >= 0;
        let g = "MacIntel" === e;
        return (
          !a &&
            g &&
            u.touch &&
            ((1024 === i && 1366 === s) ||
              (834 === i && 1194 === s) ||
              (834 === i && 1112 === s) ||
              (768 === i && 1024 === s)) &&
            ((a = t.match(/(Version)\/([\d.]+)/)), (g = !1)),
          (n.ie = d),
          (n.edge = h),
          (n.firefox = p),
          o &&
            !f &&
            ((n.os = "android"),
            (n.osVersion = o[2]),
            (n.android = !0),
            (n.androidChrome = t.toLowerCase().indexOf("chrome") >= 0)),
          (a || c || l) && ((n.os = "ios"), (n.ios = !0)),
          c && !l && ((n.osVersion = c[2].replace(/_/g, ".")), (n.iphone = !0)),
          a && ((n.osVersion = a[2].replace(/_/g, ".")), (n.ipad = !0)),
          l &&
            ((n.osVersion = l[3] ? l[3].replace(/_/g, ".") : null),
            (n.ipod = !0)),
          n.ios &&
            n.osVersion &&
            t.indexOf("Version/") >= 0 &&
            "10" === n.osVersion.split(".")[0] &&
            (n.osVersion = t.toLowerCase().split("version/")[1].split(" ")[0]),
          (n.webView =
            !(
              !(c || a || l) ||
              (!t.match(/.*AppleWebKit(?!.*Safari)/i) &&
                !r.navigator.standalone)
            ) ||
            (r.matchMedia &&
              r.matchMedia("(display-mode: standalone)").matches)),
          (n.webview = n.webView),
          (n.standalone = n.webView),
          (n.desktop = !(n.ios || n.android) || m),
          n.desktop &&
            ((n.electron = m),
            (n.macos = g),
            (n.windows = f),
            n.macos && (n.os = "macos"),
            n.windows && (n.os = "windows")),
          (n.pixelRatio = r.devicePixelRatio || 1),
          n
        );
      })();
      function w(e) {
        const t = this,
          n = t.touchEventsData,
          { params: s, touches: a } = t;
        if (t.animating && s.preventInteractionOnTransition) return;
        let l = e;
        l.originalEvent && (l = l.originalEvent);
        const u = o(l.target);
        if ("wrapper" === s.touchEventsTarget && !u.closest(t.wrapperEl).length)
          return;
        if (
          ((n.isTouchEvent = "touchstart" === l.type),
          !n.isTouchEvent && "which" in l && 3 === l.which)
        )
          return;
        if (!n.isTouchEvent && "button" in l && l.button > 0) return;
        if (n.isTouched && n.isMoved) return;
        if (
          s.noSwiping &&
          u.closest(
            s.noSwipingSelector ? s.noSwipingSelector : "." + s.noSwipingClass
          )[0]
        )
          return void (t.allowClick = !0);
        if (s.swipeHandler && !u.closest(s.swipeHandler)[0]) return;
        (a.currentX =
          "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX),
          (a.currentY =
            "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY);
        const d = a.currentX,
          h = a.currentY,
          p = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection,
          f = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;
        if (!p || !(d <= f || d >= r.screen.width - f)) {
          if (
            (c.extend(n, {
              isTouched: !0,
              isMoved: !1,
              allowTouchCallbacks: !0,
              isScrolling: void 0,
              startMoving: void 0,
            }),
            (a.startX = d),
            (a.startY = h),
            (n.touchStartTime = c.now()),
            (t.allowClick = !0),
            t.updateSize(),
            (t.swipeDirection = void 0),
            s.threshold > 0 && (n.allowThresholdMove = !1),
            "touchstart" !== l.type)
          ) {
            let e = !0;
            u.is(n.formElements) && (e = !1),
              i.activeElement &&
                o(i.activeElement).is(n.formElements) &&
                i.activeElement !== u[0] &&
                i.activeElement.blur();
            const r = e && t.allowTouchMove && s.touchStartPreventDefault;
            (s.touchStartForcePreventDefault || r) && l.preventDefault();
          }
          t.emit("touchStart", l);
        }
      }
      function x(e) {
        const t = this,
          n = t.touchEventsData,
          { params: r, touches: s, rtlTranslate: a } = t;
        let l = e;
        if ((l.originalEvent && (l = l.originalEvent), !n.isTouched))
          return void (
            n.startMoving &&
            n.isScrolling &&
            t.emit("touchMoveOpposite", l)
          );
        if (n.isTouchEvent && "mousemove" === l.type) return;
        const u =
            "touchmove" === l.type &&
            l.targetTouches &&
            (l.targetTouches[0] || l.changedTouches[0]),
          d = "touchmove" === l.type ? u.pageX : l.pageX,
          h = "touchmove" === l.type ? u.pageY : l.pageY;
        if (l.preventedByNestedSwiper)
          return (s.startX = d), void (s.startY = h);
        if (!t.allowTouchMove)
          return (
            (t.allowClick = !1),
            void (
              n.isTouched &&
              (c.extend(s, { startX: d, startY: h, currentX: d, currentY: h }),
              (n.touchStartTime = c.now()))
            )
          );
        if (n.isTouchEvent && r.touchReleaseOnEdges && !r.loop)
          if (t.isVertical()) {
            if (
              (h < s.startY && t.translate <= t.maxTranslate()) ||
              (h > s.startY && t.translate >= t.minTranslate())
            )
              return (n.isTouched = !1), void (n.isMoved = !1);
          } else if (
            (d < s.startX && t.translate <= t.maxTranslate()) ||
            (d > s.startX && t.translate >= t.minTranslate())
          )
            return;
        if (
          n.isTouchEvent &&
          i.activeElement &&
          l.target === i.activeElement &&
          o(l.target).is(n.formElements)
        )
          return (n.isMoved = !0), void (t.allowClick = !1);
        if (
          (n.allowTouchCallbacks && t.emit("touchMove", l),
          l.targetTouches && l.targetTouches.length > 1)
        )
          return;
        (s.currentX = d), (s.currentY = h);
        const p = s.currentX - s.startX,
          f = s.currentY - s.startY;
        if (
          t.params.threshold &&
          Math.sqrt(p ** 2 + f ** 2) < t.params.threshold
        )
          return;
        if (void 0 === n.isScrolling) {
          let e;
          (t.isHorizontal() && s.currentY === s.startY) ||
          (t.isVertical() && s.currentX === s.startX)
            ? (n.isScrolling = !1)
            : p * p + f * f >= 25 &&
              ((e = (180 * Math.atan2(Math.abs(f), Math.abs(p))) / Math.PI),
              (n.isScrolling = t.isHorizontal()
                ? e > r.touchAngle
                : 90 - e > r.touchAngle));
        }
        if (
          (n.isScrolling && t.emit("touchMoveOpposite", l),
          void 0 === n.startMoving &&
            ((s.currentX === s.startX && s.currentY === s.startY) ||
              (n.startMoving = !0)),
          n.isScrolling)
        )
          return void (n.isTouched = !1);
        if (!n.startMoving) return;
        (t.allowClick = !1),
          r.cssMode || l.preventDefault(),
          r.touchMoveStopPropagation && !r.nested && l.stopPropagation(),
          n.isMoved ||
            (r.loop && t.loopFix(),
            (n.startTranslate = t.getTranslate()),
            t.setTransition(0),
            t.animating &&
              t.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
            (n.allowMomentumBounce = !1),
            !r.grabCursor ||
              (!0 !== t.allowSlideNext && !0 !== t.allowSlidePrev) ||
              t.setGrabCursor(!0),
            t.emit("sliderFirstMove", l)),
          t.emit("sliderMove", l),
          (n.isMoved = !0);
        let m = t.isHorizontal() ? p : f;
        (s.diff = m),
          (m *= r.touchRatio),
          a && (m = -m),
          (t.swipeDirection = m > 0 ? "prev" : "next"),
          (n.currentTranslate = m + n.startTranslate);
        let g = !0,
          v = r.resistanceRatio;
        if (
          (r.touchReleaseOnEdges && (v = 0),
          m > 0 && n.currentTranslate > t.minTranslate()
            ? ((g = !1),
              r.resistance &&
                (n.currentTranslate =
                  t.minTranslate() -
                  1 +
                  (-t.minTranslate() + n.startTranslate + m) ** v))
            : m < 0 &&
              n.currentTranslate < t.maxTranslate() &&
              ((g = !1),
              r.resistance &&
                (n.currentTranslate =
                  t.maxTranslate() +
                  1 -
                  (t.maxTranslate() - n.startTranslate - m) ** v)),
          g && (l.preventedByNestedSwiper = !0),
          !t.allowSlideNext &&
            "next" === t.swipeDirection &&
            n.currentTranslate < n.startTranslate &&
            (n.currentTranslate = n.startTranslate),
          !t.allowSlidePrev &&
            "prev" === t.swipeDirection &&
            n.currentTranslate > n.startTranslate &&
            (n.currentTranslate = n.startTranslate),
          r.threshold > 0)
        ) {
          if (!(Math.abs(m) > r.threshold || n.allowThresholdMove))
            return void (n.currentTranslate = n.startTranslate);
          if (!n.allowThresholdMove)
            return (
              (n.allowThresholdMove = !0),
              (s.startX = s.currentX),
              (s.startY = s.currentY),
              (n.currentTranslate = n.startTranslate),
              void (s.diff = t.isHorizontal()
                ? s.currentX - s.startX
                : s.currentY - s.startY)
            );
        }
        r.followFinger &&
          !r.cssMode &&
          ((r.freeMode || r.watchSlidesProgress || r.watchSlidesVisibility) &&
            (t.updateActiveIndex(), t.updateSlidesClasses()),
          r.freeMode &&
            (0 === n.velocities.length &&
              n.velocities.push({
                position: s[t.isHorizontal() ? "startX" : "startY"],
                time: n.touchStartTime,
              }),
            n.velocities.push({
              position: s[t.isHorizontal() ? "currentX" : "currentY"],
              time: c.now(),
            })),
          t.updateProgress(n.currentTranslate),
          t.setTranslate(n.currentTranslate));
      }
      function T(e) {
        const t = this,
          n = t.touchEventsData,
          {
            params: i,
            touches: r,
            rtlTranslate: s,
            $wrapperEl: o,
            slidesGrid: a,
            snapGrid: l,
          } = t;
        let u = e;
        if (
          (u.originalEvent && (u = u.originalEvent),
          n.allowTouchCallbacks && t.emit("touchEnd", u),
          (n.allowTouchCallbacks = !1),
          !n.isTouched)
        )
          return (
            n.isMoved && i.grabCursor && t.setGrabCursor(!1),
            (n.isMoved = !1),
            void (n.startMoving = !1)
          );
        i.grabCursor &&
          n.isMoved &&
          n.isTouched &&
          (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
          t.setGrabCursor(!1);
        const d = c.now(),
          h = d - n.touchStartTime;
        if (
          (t.allowClick &&
            (t.updateClickedSlide(u),
            t.emit("tap click", u),
            h < 300 &&
              d - n.lastClickTime < 300 &&
              t.emit("doubleTap doubleClick", u)),
          (n.lastClickTime = c.now()),
          c.nextTick(() => {
            t.destroyed || (t.allowClick = !0);
          }),
          !n.isTouched ||
            !n.isMoved ||
            !t.swipeDirection ||
            0 === r.diff ||
            n.currentTranslate === n.startTranslate)
        )
          return (
            (n.isTouched = !1), (n.isMoved = !1), void (n.startMoving = !1)
          );
        let p;
        if (
          ((n.isTouched = !1),
          (n.isMoved = !1),
          (n.startMoving = !1),
          (p = i.followFinger
            ? s
              ? t.translate
              : -t.translate
            : -n.currentTranslate),
          i.cssMode)
        )
          return;
        if (i.freeMode) {
          if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);
          if (p > -t.maxTranslate())
            return void (t.slides.length < l.length
              ? t.slideTo(l.length - 1)
              : t.slideTo(t.slides.length - 1));
          if (i.freeModeMomentum) {
            if (n.velocities.length > 1) {
              const e = n.velocities.pop(),
                r = n.velocities.pop(),
                s = e.position - r.position,
                o = e.time - r.time;
              (t.velocity = s / o),
                (t.velocity /= 2),
                Math.abs(t.velocity) < i.freeModeMinimumVelocity &&
                  (t.velocity = 0),
                (o > 150 || c.now() - e.time > 300) && (t.velocity = 0);
            } else t.velocity = 0;
            (t.velocity *= i.freeModeMomentumVelocityRatio),
              (n.velocities.length = 0);
            let e = 1e3 * i.freeModeMomentumRatio;
            const r = t.velocity * e;
            let a = t.translate + r;
            s && (a = -a);
            let u,
              d = !1;
            const h = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
            let p;
            if (a < t.maxTranslate())
              i.freeModeMomentumBounce
                ? (a + t.maxTranslate() < -h && (a = t.maxTranslate() - h),
                  (u = t.maxTranslate()),
                  (d = !0),
                  (n.allowMomentumBounce = !0))
                : (a = t.maxTranslate()),
                i.loop && i.centeredSlides && (p = !0);
            else if (a > t.minTranslate())
              i.freeModeMomentumBounce
                ? (a - t.minTranslate() > h && (a = t.minTranslate() + h),
                  (u = t.minTranslate()),
                  (d = !0),
                  (n.allowMomentumBounce = !0))
                : (a = t.minTranslate()),
                i.loop && i.centeredSlides && (p = !0);
            else if (i.freeModeSticky) {
              let e;
              for (let t = 0; t < l.length; t += 1)
                if (l[t] > -a) {
                  e = t;
                  break;
                }
              (a =
                Math.abs(l[e] - a) < Math.abs(l[e - 1] - a) ||
                "next" === t.swipeDirection
                  ? l[e]
                  : l[e - 1]),
                (a = -a);
            }
            if (
              (p &&
                t.once("transitionEnd", () => {
                  t.loopFix();
                }),
              0 !== t.velocity)
            ) {
              if (
                ((e = s
                  ? Math.abs((-a - t.translate) / t.velocity)
                  : Math.abs((a - t.translate) / t.velocity)),
                i.freeModeSticky)
              ) {
                const n = Math.abs((s ? -a : a) - t.translate),
                  r = t.slidesSizesGrid[t.activeIndex];
                e = n < r ? i.speed : n < 2 * r ? 1.5 * i.speed : 2.5 * i.speed;
              }
            } else if (i.freeModeSticky) return void t.slideToClosest();
            i.freeModeMomentumBounce && d
              ? (t.updateProgress(u),
                t.setTransition(e),
                t.setTranslate(a),
                t.transitionStart(!0, t.swipeDirection),
                (t.animating = !0),
                o.transitionEnd(() => {
                  t &&
                    !t.destroyed &&
                    n.allowMomentumBounce &&
                    (t.emit("momentumBounce"),
                    t.setTransition(i.speed),
                    setTimeout(() => {
                      t.setTranslate(u),
                        o.transitionEnd(() => {
                          t && !t.destroyed && t.transitionEnd();
                        });
                    }, 0));
                }))
              : t.velocity
              ? (t.updateProgress(a),
                t.setTransition(e),
                t.setTranslate(a),
                t.transitionStart(!0, t.swipeDirection),
                t.animating ||
                  ((t.animating = !0),
                  o.transitionEnd(() => {
                    t && !t.destroyed && t.transitionEnd();
                  })))
              : t.updateProgress(a),
              t.updateActiveIndex(),
              t.updateSlidesClasses();
          } else if (i.freeModeSticky) return void t.slideToClosest();
          return void (
            (!i.freeModeMomentum || h >= i.longSwipesMs) &&
            (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
          );
        }
        let f = 0,
          m = t.slidesSizesGrid[0];
        for (
          let e = 0;
          e < a.length;
          e += e < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
        ) {
          const t = e < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
          void 0 !== a[e + t]
            ? p >= a[e] && p < a[e + t] && ((f = e), (m = a[e + t] - a[e]))
            : p >= a[e] && ((f = e), (m = a[a.length - 1] - a[a.length - 2]));
        }
        const g = (p - a[f]) / m,
          v = f < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
        if (h > i.longSwipesMs) {
          if (!i.longSwipes) return void t.slideTo(t.activeIndex);
          "next" === t.swipeDirection &&
            (g >= i.longSwipesRatio ? t.slideTo(f + v) : t.slideTo(f)),
            "prev" === t.swipeDirection &&
              (g > 1 - i.longSwipesRatio ? t.slideTo(f + v) : t.slideTo(f));
        } else {
          if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
          t.navigation &&
          (u.target === t.navigation.nextEl || u.target === t.navigation.prevEl)
            ? u.target === t.navigation.nextEl
              ? t.slideTo(f + v)
              : t.slideTo(f)
            : ("next" === t.swipeDirection && t.slideTo(f + v),
              "prev" === t.swipeDirection && t.slideTo(f));
        }
      }
      function E() {
        const e = this,
          { params: t, el: n } = e;
        if (n && 0 === n.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const { allowSlideNext: i, allowSlidePrev: r, snapGrid: s } = e;
        (e.allowSlideNext = !0),
          (e.allowSlidePrev = !0),
          e.updateSize(),
          e.updateSlides(),
          e.updateSlidesClasses(),
          ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
          e.isEnd &&
          !e.params.centeredSlides
            ? e.slideTo(e.slides.length - 1, 0, !1, !0)
            : e.slideTo(e.activeIndex, 0, !1, !0),
          e.autoplay &&
            e.autoplay.running &&
            e.autoplay.paused &&
            e.autoplay.run(),
          (e.allowSlidePrev = r),
          (e.allowSlideNext = i),
          e.params.watchOverflow && s !== e.snapGrid && e.checkOverflow();
      }
      function S(e) {
        const t = this;
        t.allowClick ||
          (t.params.preventClicks && e.preventDefault(),
          t.params.preventClicksPropagation &&
            t.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation()));
      }
      function C() {
        const e = this,
          { wrapperEl: t, rtlTranslate: n } = e;
        let i;
        (e.previousTranslate = e.translate),
          e.isHorizontal()
            ? (e.translate = n
                ? t.scrollWidth - t.offsetWidth - t.scrollLeft
                : -t.scrollLeft)
            : (e.translate = -t.scrollTop),
          -0 === e.translate && (e.translate = 0),
          e.updateActiveIndex(),
          e.updateSlidesClasses();
        const r = e.maxTranslate() - e.minTranslate();
        (i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r),
          i !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
          e.emit("setTranslate", e.translate, !1);
      }
      let _ = !1;
      function k() {}
      var M = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "container",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        preventInteractionOnTransition: !1,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        freeMode: !1,
        freeModeMomentum: !0,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: !0,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: !1,
        freeModeMinimumVelocity: 0.02,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: "column",
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !1,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        watchSlidesVisibility: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: "swiper-container-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
      };
      const L = {
          update: h,
          translate: p,
          transition: f,
          slide: m,
          loop: g,
          grabCursor: v,
          manipulation: y,
          events: {
            attachEvents: function () {
              const e = this,
                { params: t, touchEvents: n, el: r, wrapperEl: s } = e;
              (e.onTouchStart = w.bind(e)),
                (e.onTouchMove = x.bind(e)),
                (e.onTouchEnd = T.bind(e)),
                t.cssMode && (e.onScroll = C.bind(e)),
                (e.onClick = S.bind(e));
              const o = !!t.nested;
              if (!u.touch && u.pointerEvents)
                r.addEventListener(n.start, e.onTouchStart, !1),
                  i.addEventListener(n.move, e.onTouchMove, o),
                  i.addEventListener(n.end, e.onTouchEnd, !1);
              else {
                if (u.touch) {
                  const s = !(
                    "touchstart" !== n.start ||
                    !u.passiveListener ||
                    !t.passiveListeners
                  ) && { passive: !0, capture: !1 };
                  r.addEventListener(n.start, e.onTouchStart, s),
                    r.addEventListener(
                      n.move,
                      e.onTouchMove,
                      u.passiveListener ? { passive: !1, capture: o } : o
                    ),
                    r.addEventListener(n.end, e.onTouchEnd, s),
                    n.cancel && r.addEventListener(n.cancel, e.onTouchEnd, s),
                    _ || (i.addEventListener("touchstart", k), (_ = !0));
                }
                ((t.simulateTouch && !b.ios && !b.android) ||
                  (t.simulateTouch && !u.touch && b.ios)) &&
                  (r.addEventListener("mousedown", e.onTouchStart, !1),
                  i.addEventListener("mousemove", e.onTouchMove, o),
                  i.addEventListener("mouseup", e.onTouchEnd, !1));
              }
              (t.preventClicks || t.preventClicksPropagation) &&
                r.addEventListener("click", e.onClick, !0),
                t.cssMode && s.addEventListener("scroll", e.onScroll),
                t.updateOnWindowResize
                  ? e.on(
                      b.ios || b.android
                        ? "resize orientationchange observerUpdate"
                        : "resize observerUpdate",
                      E,
                      !0
                    )
                  : e.on("observerUpdate", E, !0);
            },
            detachEvents: function () {
              const e = this,
                { params: t, touchEvents: n, el: r, wrapperEl: s } = e,
                o = !!t.nested;
              if (!u.touch && u.pointerEvents)
                r.removeEventListener(n.start, e.onTouchStart, !1),
                  i.removeEventListener(n.move, e.onTouchMove, o),
                  i.removeEventListener(n.end, e.onTouchEnd, !1);
              else {
                if (u.touch) {
                  const i = !(
                    "onTouchStart" !== n.start ||
                    !u.passiveListener ||
                    !t.passiveListeners
                  ) && { passive: !0, capture: !1 };
                  r.removeEventListener(n.start, e.onTouchStart, i),
                    r.removeEventListener(n.move, e.onTouchMove, o),
                    r.removeEventListener(n.end, e.onTouchEnd, i),
                    n.cancel &&
                      r.removeEventListener(n.cancel, e.onTouchEnd, i);
                }
                ((t.simulateTouch && !b.ios && !b.android) ||
                  (t.simulateTouch && !u.touch && b.ios)) &&
                  (r.removeEventListener("mousedown", e.onTouchStart, !1),
                  i.removeEventListener("mousemove", e.onTouchMove, o),
                  i.removeEventListener("mouseup", e.onTouchEnd, !1));
              }
              (t.preventClicks || t.preventClicksPropagation) &&
                r.removeEventListener("click", e.onClick, !0),
                t.cssMode && s.removeEventListener("scroll", e.onScroll),
                e.off(
                  b.ios || b.android
                    ? "resize orientationchange observerUpdate"
                    : "resize observerUpdate",
                  E
                );
            },
          },
          breakpoints: {
            setBreakpoint: function () {
              const e = this,
                {
                  activeIndex: t,
                  initialized: n,
                  loopedSlides: i = 0,
                  params: r,
                  $el: s,
                } = e,
                o = r.breakpoints;
              if (!o || (o && 0 === Object.keys(o).length)) return;
              const a = e.getBreakpoint(o);
              if (a && e.currentBreakpoint !== a) {
                const l = a in o ? o[a] : void 0;
                l &&
                  [
                    "slidesPerView",
                    "spaceBetween",
                    "slidesPerGroup",
                    "slidesPerGroupSkip",
                    "slidesPerColumn",
                  ].forEach((e) => {
                    const t = l[e];
                    void 0 !== t &&
                      (l[e] =
                        "slidesPerView" !== e || ("AUTO" !== t && "auto" !== t)
                          ? "slidesPerView" === e
                            ? parseFloat(t)
                            : parseInt(t, 10)
                          : "auto");
                  });
                const u = l || e.originalParams,
                  d = r.slidesPerColumn > 1,
                  h = u.slidesPerColumn > 1;
                d && !h
                  ? s.removeClass(
                      `${r.containerModifierClass}multirow ${r.containerModifierClass}multirow-column`
                    )
                  : !d &&
                    h &&
                    (s.addClass(r.containerModifierClass + "multirow"),
                    "column" === u.slidesPerColumnFill &&
                      s.addClass(r.containerModifierClass + "multirow-column"));
                const p = u.direction && u.direction !== r.direction,
                  f = r.loop && (u.slidesPerView !== r.slidesPerView || p);
                p && n && e.changeDirection(),
                  c.extend(e.params, u),
                  c.extend(e, {
                    allowTouchMove: e.params.allowTouchMove,
                    allowSlideNext: e.params.allowSlideNext,
                    allowSlidePrev: e.params.allowSlidePrev,
                  }),
                  (e.currentBreakpoint = a),
                  f &&
                    n &&
                    (e.loopDestroy(),
                    e.loopCreate(),
                    e.updateSlides(),
                    e.slideTo(t - i + e.loopedSlides, 0, !1)),
                  e.emit("breakpoint", u);
              }
            },
            getBreakpoint: function (e) {
              if (!e) return;
              let t = !1;
              const n = Object.keys(e).map((e) => {
                if ("string" == typeof e && 0 === e.indexOf("@")) {
                  const t = parseFloat(e.substr(1));
                  return { value: r.innerHeight * t, point: e };
                }
                return { value: e, point: e };
              });
              n.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
              for (let e = 0; e < n.length; e += 1) {
                const { point: i, value: s } = n[e];
                s <= r.innerWidth && (t = i);
              }
              return t || "max";
            },
          },
          checkOverflow: {
            checkOverflow: function () {
              const e = this,
                t = e.params,
                n = e.isLocked,
                i =
                  e.slides.length > 0 &&
                  t.slidesOffsetBefore +
                    t.spaceBetween * (e.slides.length - 1) +
                    e.slides[0].offsetWidth * e.slides.length;
              t.slidesOffsetBefore && t.slidesOffsetAfter && i
                ? (e.isLocked = i <= e.size)
                : (e.isLocked = 1 === e.snapGrid.length),
                (e.allowSlideNext = !e.isLocked),
                (e.allowSlidePrev = !e.isLocked),
                n !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"),
                n &&
                  n !== e.isLocked &&
                  ((e.isEnd = !1), e.navigation.update());
            },
          },
          classes: {
            addClasses: function () {
              const { classNames: e, params: t, rtl: n, $el: i } = this,
                r = [];
              r.push("initialized"),
                r.push(t.direction),
                t.freeMode && r.push("free-mode"),
                t.autoHeight && r.push("autoheight"),
                n && r.push("rtl"),
                t.slidesPerColumn > 1 &&
                  (r.push("multirow"),
                  "column" === t.slidesPerColumnFill &&
                    r.push("multirow-column")),
                b.android && r.push("android"),
                b.ios && r.push("ios"),
                t.cssMode && r.push("css-mode"),
                r.forEach((n) => {
                  e.push(t.containerModifierClass + n);
                }),
                i.addClass(e.join(" "));
            },
            removeClasses: function () {
              const { $el: e, classNames: t } = this;
              e.removeClass(t.join(" "));
            },
          },
          images: {
            loadImage: function (e, t, n, i, s, o) {
              let a;
              function l() {
                o && o();
              }
              e.complete && s
                ? l()
                : t
                ? ((a = new r.Image()),
                  (a.onload = l),
                  (a.onerror = l),
                  i && (a.sizes = i),
                  n && (a.srcset = n),
                  t && (a.src = t))
                : l();
            },
            preloadImages: function () {
              const e = this;
              function t() {
                null != e &&
                  e &&
                  !e.destroyed &&
                  (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                  e.imagesLoaded === e.imagesToLoad.length &&
                    (e.params.updateOnImagesReady && e.update(),
                    e.emit("imagesReady")));
              }
              e.imagesToLoad = e.$el.find("img");
              for (let n = 0; n < e.imagesToLoad.length; n += 1) {
                const i = e.imagesToLoad[n];
                e.loadImage(
                  i,
                  i.currentSrc || i.getAttribute("src"),
                  i.srcset || i.getAttribute("srcset"),
                  i.sizes || i.getAttribute("sizes"),
                  !0,
                  t
                );
              }
            },
          },
        },
        P = {};
      class O extends d {
        constructor(...e) {
          let t, n;
          1 === e.length && e[0].constructor && e[0].constructor === Object
            ? (n = e[0])
            : ([t, n] = e),
            n || (n = {}),
            (n = c.extend({}, n)),
            t && !n.el && (n.el = t),
            super(n),
            Object.keys(L).forEach((e) => {
              Object.keys(L[e]).forEach((t) => {
                O.prototype[t] || (O.prototype[t] = L[e][t]);
              });
            });
          const i = this;
          void 0 === i.modules && (i.modules = {}),
            Object.keys(i.modules).forEach((e) => {
              const t = i.modules[e];
              if (t.params) {
                const e = Object.keys(t.params)[0],
                  i = t.params[e];
                if ("object" != typeof i || null === i) return;
                if (!(e in n) || !("enabled" in i)) return;
                !0 === n[e] && (n[e] = { enabled: !0 }),
                  "object" != typeof n[e] ||
                    "enabled" in n[e] ||
                    (n[e].enabled = !0),
                  n[e] || (n[e] = { enabled: !1 });
              }
            });
          const r = c.extend({}, M);
          i.useModulesParams(r),
            (i.params = c.extend({}, r, P, n)),
            (i.originalParams = c.extend({}, i.params)),
            (i.passedParams = c.extend({}, n)),
            (i.$ = o);
          const s = o(i.params.el);
          if (((t = s[0]), !t)) return;
          if (s.length > 1) {
            const e = [];
            return (
              s.each((t, i) => {
                const r = c.extend({}, n, { el: i });
                e.push(new O(r));
              }),
              e
            );
          }
          let a;
          return (
            (t.swiper = i),
            s.data("swiper", i),
            t && t.shadowRoot && t.shadowRoot.querySelector
              ? ((a = o(
                  t.shadowRoot.querySelector("." + i.params.wrapperClass)
                )),
                (a.children = (e) => s.children(e)))
              : (a = s.children("." + i.params.wrapperClass)),
            c.extend(i, {
              $el: s,
              el: t,
              $wrapperEl: a,
              wrapperEl: a[0],
              classNames: [],
              slides: o(),
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: () => "horizontal" === i.params.direction,
              isVertical: () => "vertical" === i.params.direction,
              rtl:
                "rtl" === t.dir.toLowerCase() || "rtl" === s.css("direction"),
              rtlTranslate:
                "horizontal" === i.params.direction &&
                ("rtl" === t.dir.toLowerCase() || "rtl" === s.css("direction")),
              wrongRTL: "-webkit-box" === a.css("display"),
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              allowSlideNext: i.params.allowSlideNext,
              allowSlidePrev: i.params.allowSlidePrev,
              touchEvents: (function () {
                const e = [
                  "touchstart",
                  "touchmove",
                  "touchend",
                  "touchcancel",
                ];
                let t = ["mousedown", "mousemove", "mouseup"];
                return (
                  u.pointerEvents &&
                    (t = ["pointerdown", "pointermove", "pointerup"]),
                  (i.touchEventsTouch = {
                    start: e[0],
                    move: e[1],
                    end: e[2],
                    cancel: e[3],
                  }),
                  (i.touchEventsDesktop = {
                    start: t[0],
                    move: t[1],
                    end: t[2],
                  }),
                  u.touch || !i.params.simulateTouch
                    ? i.touchEventsTouch
                    : i.touchEventsDesktop
                );
              })(),
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                formElements:
                  "input, select, option, textarea, button, video, label",
                lastClickTime: c.now(),
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                isTouchEvent: void 0,
                startMoving: void 0,
              },
              allowClick: !0,
              allowTouchMove: i.params.allowTouchMove,
              touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0,
              },
              imagesToLoad: [],
              imagesLoaded: 0,
            }),
            i.useModules(),
            i.params.init && i.init(),
            i
          );
        }
        slidesPerViewDynamic() {
          const {
            params: e,
            slides: t,
            slidesGrid: n,
            size: i,
            activeIndex: r,
          } = this;
          let s = 1;
          if (e.centeredSlides) {
            let e,
              n = t[r].swiperSlideSize;
            for (let o = r + 1; o < t.length; o += 1)
              t[o] &&
                !e &&
                ((n += t[o].swiperSlideSize), (s += 1), n > i && (e = !0));
            for (let o = r - 1; o >= 0; o -= 1)
              t[o] &&
                !e &&
                ((n += t[o].swiperSlideSize), (s += 1), n > i && (e = !0));
          } else
            for (let e = r + 1; e < t.length; e += 1)
              n[e] - n[r] < i && (s += 1);
          return s;
        }
        update() {
          const e = this;
          if (!e || e.destroyed) return;
          const { snapGrid: t, params: n } = e;
          function i() {
            const t = e.rtlTranslate ? -1 * e.translate : e.translate,
              n = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses();
          }
          let r;
          n.breakpoints && e.setBreakpoint(),
            e.updateSize(),
            e.updateSlides(),
            e.updateProgress(),
            e.updateSlidesClasses(),
            e.params.freeMode
              ? (i(), e.params.autoHeight && e.updateAutoHeight())
              : ((r =
                  ("auto" === e.params.slidesPerView ||
                    e.params.slidesPerView > 1) &&
                  e.isEnd &&
                  !e.params.centeredSlides
                    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                    : e.slideTo(e.activeIndex, 0, !1, !0)),
                r || i()),
            n.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
            e.emit("update");
        }
        changeDirection(e, t = !0) {
          const n = this,
            i = n.params.direction;
          return (
            e || (e = "horizontal" === i ? "vertical" : "horizontal"),
            e === i ||
              ("horizontal" !== e && "vertical" !== e) ||
              (n.$el
                .removeClass(`${n.params.containerModifierClass}${i}`)
                .addClass(`${n.params.containerModifierClass}${e}`),
              (n.params.direction = e),
              n.slides.each((t, n) => {
                "vertical" === e ? (n.style.width = "") : (n.style.height = "");
              }),
              n.emit("changeDirection"),
              t && n.update()),
            n
          );
        }
        init() {
          const e = this;
          e.initialized ||
            (e.emit("beforeInit"),
            e.params.breakpoints && e.setBreakpoint(),
            e.addClasses(),
            e.params.loop && e.loopCreate(),
            e.updateSize(),
            e.updateSlides(),
            e.params.watchOverflow && e.checkOverflow(),
            e.params.grabCursor && e.setGrabCursor(),
            e.params.preloadImages && e.preloadImages(),
            e.params.loop
              ? e.slideTo(
                  e.params.initialSlide + e.loopedSlides,
                  0,
                  e.params.runCallbacksOnInit
                )
              : e.slideTo(
                  e.params.initialSlide,
                  0,
                  e.params.runCallbacksOnInit
                ),
            e.attachEvents(),
            (e.initialized = !0),
            e.emit("init"));
        }
        destroy(e = !0, t = !0) {
          const n = this,
            { params: i, $el: r, $wrapperEl: s, slides: o } = n;
          return (
            void 0 === n.params ||
              n.destroyed ||
              (n.emit("beforeDestroy"),
              (n.initialized = !1),
              n.detachEvents(),
              i.loop && n.loopDestroy(),
              t &&
                (n.removeClasses(),
                r.removeAttr("style"),
                s.removeAttr("style"),
                o &&
                  o.length &&
                  o
                    .removeClass(
                      [
                        i.slideVisibleClass,
                        i.slideActiveClass,
                        i.slideNextClass,
                        i.slidePrevClass,
                      ].join(" ")
                    )
                    .removeAttr("style")
                    .removeAttr("data-swiper-slide-index")),
              n.emit("destroy"),
              Object.keys(n.eventsListeners).forEach((e) => {
                n.off(e);
              }),
              !1 !== e &&
                ((n.$el[0].swiper = null),
                n.$el.data("swiper", null),
                c.deleteProps(n)),
              (n.destroyed = !0)),
            null
          );
        }
        static extendDefaults(e) {
          c.extend(P, e);
        }
        static get extendedDefaults() {
          return P;
        }
        static get defaults() {
          return M;
        }
        static get Class() {
          return d;
        }
        static get $() {
          return o;
        }
      }
      var A = { name: "device", proto: { device: b }, static: { device: b } },
        D = { name: "support", proto: { support: u }, static: { support: u } };
      const z = {
        isEdge: !!r.navigator.userAgent.match(/Edge/g),
        isSafari: (function () {
          const e = r.navigator.userAgent.toLowerCase();
          return (
            e.indexOf("safari") >= 0 &&
            e.indexOf("chrome") < 0 &&
            e.indexOf("android") < 0
          );
        })(),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
          r.navigator.userAgent
        ),
      };
      var $ = {
          name: "browser",
          proto: { browser: z },
          static: { browser: z },
        },
        I = {
          name: "resize",
          create() {
            const e = this;
            c.extend(e, {
              resize: {
                resizeHandler() {
                  e &&
                    !e.destroyed &&
                    e.initialized &&
                    (e.emit("beforeResize"), e.emit("resize"));
                },
                orientationChangeHandler() {
                  e &&
                    !e.destroyed &&
                    e.initialized &&
                    e.emit("orientationchange");
                },
              },
            });
          },
          on: {
            init() {
              r.addEventListener("resize", this.resize.resizeHandler),
                r.addEventListener(
                  "orientationchange",
                  this.resize.orientationChangeHandler
                );
            },
            destroy() {
              r.removeEventListener("resize", this.resize.resizeHandler),
                r.removeEventListener(
                  "orientationchange",
                  this.resize.orientationChangeHandler
                );
            },
          },
        };
      const j = {
        func: r.MutationObserver || r.WebkitMutationObserver,
        attach(e, t = {}) {
          const n = this,
            i = new (0, j.func)((e) => {
              if (1 === e.length) return void n.emit("observerUpdate", e[0]);
              const t = function () {
                n.emit("observerUpdate", e[0]);
              };
              r.requestAnimationFrame
                ? r.requestAnimationFrame(t)
                : r.setTimeout(t, 0);
            });
          i.observe(e, {
            attributes: void 0 === t.attributes || t.attributes,
            childList: void 0 === t.childList || t.childList,
            characterData: void 0 === t.characterData || t.characterData,
          }),
            n.observer.observers.push(i);
        },
        init() {
          const e = this;
          if (u.observer && e.params.observer) {
            if (e.params.observeParents) {
              const t = e.$el.parents();
              for (let n = 0; n < t.length; n += 1) e.observer.attach(t[n]);
            }
            e.observer.attach(e.$el[0], {
              childList: e.params.observeSlideChildren,
            }),
              e.observer.attach(e.$wrapperEl[0], { attributes: !1 });
          }
        },
        destroy() {
          this.observer.observers.forEach((e) => {
            e.disconnect();
          }),
            (this.observer.observers = []);
        },
      };
      var N = {
        name: "observer",
        params: { observer: !1, observeParents: !1, observeSlideChildren: !1 },
        create() {
          c.extend(this, {
            observer: {
              init: j.init.bind(this),
              attach: j.attach.bind(this),
              destroy: j.destroy.bind(this),
              observers: [],
            },
          });
        },
        on: {
          init() {
            this.observer.init();
          },
          destroy() {
            this.observer.destroy();
          },
        },
      };
      const R = {
        update(e) {
          const t = this,
            {
              slidesPerView: n,
              slidesPerGroup: i,
              centeredSlides: r,
            } = t.params,
            { addSlidesBefore: s, addSlidesAfter: o } = t.params.virtual,
            {
              from: a,
              to: l,
              slides: u,
              slidesGrid: d,
              renderSlide: h,
              offset: p,
            } = t.virtual;
          t.updateActiveIndex();
          const f = t.activeIndex || 0;
          let m, g, v;
          (m = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top"),
            r
              ? ((g = Math.floor(n / 2) + i + s),
                (v = Math.floor(n / 2) + i + o))
              : ((g = n + (i - 1) + s), (v = i + o));
          const y = Math.max((f || 0) - v, 0),
            b = Math.min((f || 0) + g, u.length - 1),
            w = (t.slidesGrid[y] || 0) - (t.slidesGrid[0] || 0);
          function x() {
            t.updateSlides(),
              t.updateProgress(),
              t.updateSlidesClasses(),
              t.lazy && t.params.lazy.enabled && t.lazy.load();
          }
          if (
            (c.extend(t.virtual, {
              from: y,
              to: b,
              offset: w,
              slidesGrid: t.slidesGrid,
            }),
            a === y && l === b && !e)
          )
            return (
              t.slidesGrid !== d && w !== p && t.slides.css(m, w + "px"),
              void t.updateProgress()
            );
          if (t.params.virtual.renderExternal)
            return (
              t.params.virtual.renderExternal.call(t, {
                offset: w,
                from: y,
                to: b,
                slides: (function () {
                  const e = [];
                  for (let t = y; t <= b; t += 1) e.push(u[t]);
                  return e;
                })(),
              }),
              void x()
            );
          const T = [],
            E = [];
          if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
          else
            for (let e = a; e <= l; e += 1)
              (e < y || e > b) &&
                t.$wrapperEl
                  .find(
                    `.${t.params.slideClass}[data-swiper-slide-index="${e}"]`
                  )
                  .remove();
          for (let t = 0; t < u.length; t += 1)
            t >= y &&
              t <= b &&
              (void 0 === l || e
                ? E.push(t)
                : (t > l && E.push(t), t < a && T.push(t)));
          E.forEach((e) => {
            t.$wrapperEl.append(h(u[e], e));
          }),
            T.sort((e, t) => t - e).forEach((e) => {
              t.$wrapperEl.prepend(h(u[e], e));
            }),
            t.$wrapperEl.children(".swiper-slide").css(m, w + "px"),
            x();
        },
        renderSlide(e, t) {
          const n = this,
            i = n.params.virtual;
          if (i.cache && n.virtual.cache[t]) return n.virtual.cache[t];
          const r = i.renderSlide
            ? o(i.renderSlide.call(n, e, t))
            : o(
                `<div class="${n.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`
              );
          return (
            r.attr("data-swiper-slide-index") ||
              r.attr("data-swiper-slide-index", t),
            i.cache && (n.virtual.cache[t] = r),
            r
          );
        },
        appendSlide(e) {
          const t = this;
          if ("object" == typeof e && "length" in e)
            for (let n = 0; n < e.length; n += 1)
              e[n] && t.virtual.slides.push(e[n]);
          else t.virtual.slides.push(e);
          t.virtual.update(!0);
        },
        prependSlide(e) {
          const t = this,
            n = t.activeIndex;
          let i = n + 1,
            r = 1;
          if (Array.isArray(e)) {
            for (let n = 0; n < e.length; n += 1)
              e[n] && t.virtual.slides.unshift(e[n]);
            (i = n + e.length), (r = e.length);
          } else t.virtual.slides.unshift(e);
          if (t.params.virtual.cache) {
            const e = t.virtual.cache,
              n = {};
            Object.keys(e).forEach((t) => {
              const i = e[t],
                s = i.attr("data-swiper-slide-index");
              s && i.attr("data-swiper-slide-index", parseInt(s, 10) + 1),
                (n[parseInt(t, 10) + r] = i);
            }),
              (t.virtual.cache = n);
          }
          t.virtual.update(!0), t.slideTo(i, 0);
        },
        removeSlide(e) {
          const t = this;
          if (null == e) return;
          let n = t.activeIndex;
          if (Array.isArray(e))
            for (let i = e.length - 1; i >= 0; i -= 1)
              t.virtual.slides.splice(e[i], 1),
                t.params.virtual.cache && delete t.virtual.cache[e[i]],
                e[i] < n && (n -= 1),
                (n = Math.max(n, 0));
          else
            t.virtual.slides.splice(e, 1),
              t.params.virtual.cache && delete t.virtual.cache[e],
              e < n && (n -= 1),
              (n = Math.max(n, 0));
          t.virtual.update(!0), t.slideTo(n, 0);
        },
        removeAllSlides() {
          const e = this;
          (e.virtual.slides = []),
            e.params.virtual.cache && (e.virtual.cache = {}),
            e.virtual.update(!0),
            e.slideTo(0, 0);
        },
      };
      var H = {
        name: "virtual",
        params: {
          virtual: {
            enabled: !1,
            slides: [],
            cache: !0,
            renderSlide: null,
            renderExternal: null,
            addSlidesBefore: 0,
            addSlidesAfter: 0,
          },
        },
        create() {
          c.extend(this, {
            virtual: {
              update: R.update.bind(this),
              appendSlide: R.appendSlide.bind(this),
              prependSlide: R.prependSlide.bind(this),
              removeSlide: R.removeSlide.bind(this),
              removeAllSlides: R.removeAllSlides.bind(this),
              renderSlide: R.renderSlide.bind(this),
              slides: this.params.virtual.slides,
              cache: {},
            },
          });
        },
        on: {
          beforeInit() {
            const e = this;
            if (!e.params.virtual.enabled) return;
            e.classNames.push(e.params.containerModifierClass + "virtual");
            const t = { watchSlidesProgress: !0 };
            c.extend(e.params, t),
              c.extend(e.originalParams, t),
              e.params.initialSlide || e.virtual.update();
          },
          setTranslate() {
            this.params.virtual.enabled && this.virtual.update();
          },
        },
      };
      const B = {
        handle(e) {
          const t = this,
            { rtlTranslate: n } = t;
          let s = e;
          s.originalEvent && (s = s.originalEvent);
          const o = s.keyCode || s.charCode;
          if (
            !t.allowSlideNext &&
            ((t.isHorizontal() && 39 === o) ||
              (t.isVertical() && 40 === o) ||
              34 === o)
          )
            return !1;
          if (
            !t.allowSlidePrev &&
            ((t.isHorizontal() && 37 === o) ||
              (t.isVertical() && 38 === o) ||
              33 === o)
          )
            return !1;
          if (
            !(
              s.shiftKey ||
              s.altKey ||
              s.ctrlKey ||
              s.metaKey ||
              (i.activeElement &&
                i.activeElement.nodeName &&
                ("input" === i.activeElement.nodeName.toLowerCase() ||
                  "textarea" === i.activeElement.nodeName.toLowerCase()))
            )
          ) {
            if (
              t.params.keyboard.onlyInViewport &&
              (33 === o ||
                34 === o ||
                37 === o ||
                39 === o ||
                38 === o ||
                40 === o)
            ) {
              let e = !1;
              if (
                t.$el.parents("." + t.params.slideClass).length > 0 &&
                0 === t.$el.parents("." + t.params.slideActiveClass).length
              )
                return;
              const i = r.innerWidth,
                s = r.innerHeight,
                o = t.$el.offset();
              n && (o.left -= t.$el[0].scrollLeft);
              const a = [
                [o.left, o.top],
                [o.left + t.width, o.top],
                [o.left, o.top + t.height],
                [o.left + t.width, o.top + t.height],
              ];
              for (let t = 0; t < a.length; t += 1) {
                const n = a[t];
                n[0] >= 0 && n[0] <= i && n[1] >= 0 && n[1] <= s && (e = !0);
              }
              if (!e) return;
            }
            t.isHorizontal()
              ? ((33 !== o && 34 !== o && 37 !== o && 39 !== o) ||
                  (s.preventDefault
                    ? s.preventDefault()
                    : (s.returnValue = !1)),
                (((34 !== o && 39 !== o) || n) &&
                  ((33 !== o && 37 !== o) || !n)) ||
                  t.slideNext(),
                (((33 !== o && 37 !== o) || n) &&
                  ((34 !== o && 39 !== o) || !n)) ||
                  t.slidePrev())
              : ((33 !== o && 34 !== o && 38 !== o && 40 !== o) ||
                  (s.preventDefault
                    ? s.preventDefault()
                    : (s.returnValue = !1)),
                (34 !== o && 40 !== o) || t.slideNext(),
                (33 !== o && 38 !== o) || t.slidePrev()),
              t.emit("keyPress", o);
          }
        },
        enable() {
          this.keyboard.enabled ||
            (o(i).on("keydown", this.keyboard.handle),
            (this.keyboard.enabled = !0));
        },
        disable() {
          this.keyboard.enabled &&
            (o(i).off("keydown", this.keyboard.handle),
            (this.keyboard.enabled = !1));
        },
      };
      var q = {
        name: "keyboard",
        params: { keyboard: { enabled: !1, onlyInViewport: !0 } },
        create() {
          c.extend(this, {
            keyboard: {
              enabled: !1,
              enable: B.enable.bind(this),
              disable: B.disable.bind(this),
              handle: B.handle.bind(this),
            },
          });
        },
        on: {
          init() {
            const e = this;
            e.params.keyboard.enabled && e.keyboard.enable();
          },
          destroy() {
            const e = this;
            e.keyboard.enabled && e.keyboard.disable();
          },
        },
      };
      const F = {
        lastScrollTime: c.now(),
        lastEventBeforeSnap: void 0,
        recentWheelEvents: [],
        event: () =>
          r.navigator.userAgent.indexOf("firefox") > -1
            ? "DOMMouseScroll"
            : (function () {
                let e = "onwheel" in i;
                if (!e) {
                  const t = i.createElement("div");
                  t.setAttribute("onwheel", "return;"),
                    (e = "function" == typeof t.onwheel);
                }
                return (
                  !e &&
                    i.implementation &&
                    i.implementation.hasFeature &&
                    !0 !== i.implementation.hasFeature("", "") &&
                    (e = i.implementation.hasFeature("Events.wheel", "3.0")),
                  e
                );
              })()
            ? "wheel"
            : "mousewheel",
        normalize(e) {
          let t = 0,
            n = 0,
            i = 0,
            r = 0;
          return (
            "detail" in e && (n = e.detail),
            "wheelDelta" in e && (n = -e.wheelDelta / 120),
            "wheelDeltaY" in e && (n = -e.wheelDeltaY / 120),
            "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
            "axis" in e && e.axis === e.HORIZONTAL_AXIS && ((t = n), (n = 0)),
            (i = 10 * t),
            (r = 10 * n),
            "deltaY" in e && (r = e.deltaY),
            "deltaX" in e && (i = e.deltaX),
            e.shiftKey && !i && ((i = r), (r = 0)),
            (i || r) &&
              e.deltaMode &&
              (1 === e.deltaMode
                ? ((i *= 40), (r *= 40))
                : ((i *= 800), (r *= 800))),
            i && !t && (t = i < 1 ? -1 : 1),
            r && !n && (n = r < 1 ? -1 : 1),
            { spinX: t, spinY: n, pixelX: i, pixelY: r }
          );
        },
        handleMouseEnter() {
          this.mouseEntered = !0;
        },
        handleMouseLeave() {
          this.mouseEntered = !1;
        },
        handle(e) {
          let t = e;
          const n = this,
            i = n.params.mousewheel;
          n.params.cssMode && t.preventDefault();
          let r = n.$el;
          if (
            ("container" !== n.params.mousewheel.eventsTarged &&
              (r = o(n.params.mousewheel.eventsTarged)),
            !n.mouseEntered && !r[0].contains(t.target) && !i.releaseOnEdges)
          )
            return !0;
          t.originalEvent && (t = t.originalEvent);
          let s = 0;
          const a = n.rtlTranslate ? -1 : 1,
            l = F.normalize(t);
          if (i.forceToAxis)
            if (n.isHorizontal()) {
              if (!(Math.abs(l.pixelX) > Math.abs(l.pixelY))) return !0;
              s = l.pixelX * a;
            } else {
              if (!(Math.abs(l.pixelY) > Math.abs(l.pixelX))) return !0;
              s = l.pixelY;
            }
          else
            s =
              Math.abs(l.pixelX) > Math.abs(l.pixelY)
                ? -l.pixelX * a
                : -l.pixelY;
          if (0 === s) return !0;
          if ((i.invert && (s = -s), n.params.freeMode)) {
            const e = {
                time: c.now(),
                delta: Math.abs(s),
                direction: Math.sign(s),
              },
              { lastEventBeforeSnap: r } = n.mousewheel,
              o =
                r &&
                e.time < r.time + 500 &&
                e.delta <= r.delta &&
                e.direction === r.direction;
            if (!o) {
              (n.mousewheel.lastEventBeforeSnap = void 0),
                n.params.loop && n.loopFix();
              let r = n.getTranslate() + s * i.sensitivity;
              const a = n.isBeginning,
                l = n.isEnd;
              if (
                (r >= n.minTranslate() && (r = n.minTranslate()),
                r <= n.maxTranslate() && (r = n.maxTranslate()),
                n.setTransition(0),
                n.setTranslate(r),
                n.updateProgress(),
                n.updateActiveIndex(),
                n.updateSlidesClasses(),
                ((!a && n.isBeginning) || (!l && n.isEnd)) &&
                  n.updateSlidesClasses(),
                n.params.freeModeSticky)
              ) {
                clearTimeout(n.mousewheel.timeout),
                  (n.mousewheel.timeout = void 0);
                const t = n.mousewheel.recentWheelEvents;
                t.length >= 15 && t.shift();
                const i = t.length ? t[t.length - 1] : void 0,
                  r = t[0];
                if (
                  (t.push(e),
                  i && (e.delta > i.delta || e.direction !== i.direction))
                )
                  t.splice(0);
                else if (
                  t.length >= 15 &&
                  e.time - r.time < 500 &&
                  r.delta - e.delta >= 1 &&
                  e.delta <= 6
                ) {
                  const i = s > 0 ? 0.8 : 0.2;
                  (n.mousewheel.lastEventBeforeSnap = e),
                    t.splice(0),
                    (n.mousewheel.timeout = c.nextTick(() => {
                      n.slideToClosest(n.params.speed, !0, void 0, i);
                    }, 0));
                }
                n.mousewheel.timeout ||
                  (n.mousewheel.timeout = c.nextTick(() => {
                    (n.mousewheel.lastEventBeforeSnap = e),
                      t.splice(0),
                      n.slideToClosest(n.params.speed, !0, void 0, 0.5);
                  }, 500));
              }
              if (
                (o || n.emit("scroll", t),
                n.params.autoplay &&
                  n.params.autoplayDisableOnInteraction &&
                  n.autoplay.stop(),
                r === n.minTranslate() || r === n.maxTranslate())
              )
                return !0;
            }
          } else {
            const t = {
                time: c.now(),
                delta: Math.abs(s),
                direction: Math.sign(s),
                raw: e,
              },
              i = n.mousewheel.recentWheelEvents;
            i.length >= 2 && i.shift();
            const r = i.length ? i[i.length - 1] : void 0;
            if (
              (i.push(t),
              r
                ? (t.direction !== r.direction || t.delta > r.delta) &&
                  n.mousewheel.animateSlider(t)
                : n.mousewheel.animateSlider(t),
              n.mousewheel.releaseScroll(t))
            )
              return !0;
          }
          return (
            t.preventDefault ? t.preventDefault() : (t.returnValue = !1), !1
          );
        },
        animateSlider(e) {
          const t = this;
          return (
            (e.delta >= 6 && c.now() - t.mousewheel.lastScrollTime < 60) ||
            (e.direction < 0
              ? (t.isEnd && !t.params.loop) ||
                t.animating ||
                (t.slideNext(), t.emit("scroll", e.raw))
              : (t.isBeginning && !t.params.loop) ||
                t.animating ||
                (t.slidePrev(), t.emit("scroll", e.raw)),
            (t.mousewheel.lastScrollTime = new r.Date().getTime()),
            !1)
          );
        },
        releaseScroll(e) {
          const t = this,
            n = t.params.mousewheel;
          if (e.direction < 0) {
            if (t.isEnd && !t.params.loop && n.releaseOnEdges) return !0;
          } else if (t.isBeginning && !t.params.loop && n.releaseOnEdges)
            return !0;
          return !1;
        },
        enable() {
          const e = this,
            t = F.event();
          if (e.params.cssMode)
            return e.wrapperEl.removeEventListener(t, e.mousewheel.handle), !0;
          if (!t) return !1;
          if (e.mousewheel.enabled) return !1;
          let n = e.$el;
          return (
            "container" !== e.params.mousewheel.eventsTarged &&
              (n = o(e.params.mousewheel.eventsTarged)),
            n.on("mouseenter", e.mousewheel.handleMouseEnter),
            n.on("mouseleave", e.mousewheel.handleMouseLeave),
            n.on(t, e.mousewheel.handle),
            (e.mousewheel.enabled = !0),
            !0
          );
        },
        disable() {
          const e = this,
            t = F.event();
          if (e.params.cssMode)
            return e.wrapperEl.addEventListener(t, e.mousewheel.handle), !0;
          if (!t) return !1;
          if (!e.mousewheel.enabled) return !1;
          let n = e.$el;
          return (
            "container" !== e.params.mousewheel.eventsTarged &&
              (n = o(e.params.mousewheel.eventsTarged)),
            n.off(t, e.mousewheel.handle),
            (e.mousewheel.enabled = !1),
            !0
          );
        },
      };
      const W = {
        update() {
          const e = this,
            t = e.params.navigation;
          if (e.params.loop) return;
          const { $nextEl: n, $prevEl: i } = e.navigation;
          i &&
            i.length > 0 &&
            (e.isBeginning
              ? i.addClass(t.disabledClass)
              : i.removeClass(t.disabledClass),
            i[
              e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"
            ](t.lockClass)),
            n &&
              n.length > 0 &&
              (e.isEnd
                ? n.addClass(t.disabledClass)
                : n.removeClass(t.disabledClass),
              n[
                e.params.watchOverflow && e.isLocked
                  ? "addClass"
                  : "removeClass"
              ](t.lockClass));
        },
        onPrevClick(e) {
          e.preventDefault(),
            (this.isBeginning && !this.params.loop) || this.slidePrev();
        },
        onNextClick(e) {
          e.preventDefault(),
            (this.isEnd && !this.params.loop) || this.slideNext();
        },
        init() {
          const e = this,
            t = e.params.navigation;
          if (!t.nextEl && !t.prevEl) return;
          let n, i;
          t.nextEl &&
            ((n = o(t.nextEl)),
            e.params.uniqueNavElements &&
              "string" == typeof t.nextEl &&
              n.length > 1 &&
              1 === e.$el.find(t.nextEl).length &&
              (n = e.$el.find(t.nextEl))),
            t.prevEl &&
              ((i = o(t.prevEl)),
              e.params.uniqueNavElements &&
                "string" == typeof t.prevEl &&
                i.length > 1 &&
                1 === e.$el.find(t.prevEl).length &&
                (i = e.$el.find(t.prevEl))),
            n && n.length > 0 && n.on("click", e.navigation.onNextClick),
            i && i.length > 0 && i.on("click", e.navigation.onPrevClick),
            c.extend(e.navigation, {
              $nextEl: n,
              nextEl: n && n[0],
              $prevEl: i,
              prevEl: i && i[0],
            });
        },
        destroy() {
          const e = this,
            { $nextEl: t, $prevEl: n } = e.navigation;
          t &&
            t.length &&
            (t.off("click", e.navigation.onNextClick),
            t.removeClass(e.params.navigation.disabledClass)),
            n &&
              n.length &&
              (n.off("click", e.navigation.onPrevClick),
              n.removeClass(e.params.navigation.disabledClass));
        },
      };
      const Y = {
        update() {
          const e = this,
            t = e.rtl,
            n = e.params.pagination;
          if (
            !n.el ||
            !e.pagination.el ||
            !e.pagination.$el ||
            0 === e.pagination.$el.length
          )
            return;
          const i =
              e.virtual && e.params.virtual.enabled
                ? e.virtual.slides.length
                : e.slides.length,
            r = e.pagination.$el;
          let s;
          const a = e.params.loop
            ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup)
            : e.snapGrid.length;
          if (
            (e.params.loop
              ? ((s = Math.ceil(
                  (e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup
                )),
                s > i - 1 - 2 * e.loopedSlides && (s -= i - 2 * e.loopedSlides),
                s > a - 1 && (s -= a),
                s < 0 && "bullets" !== e.params.paginationType && (s = a + s))
              : (s = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0),
            "bullets" === n.type &&
              e.pagination.bullets &&
              e.pagination.bullets.length > 0)
          ) {
            const i = e.pagination.bullets;
            let a, l, c;
            if (
              (n.dynamicBullets &&
                ((e.pagination.bulletSize = i
                  .eq(0)
                  [e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                r.css(
                  e.isHorizontal() ? "width" : "height",
                  e.pagination.bulletSize * (n.dynamicMainBullets + 4) + "px"
                ),
                n.dynamicMainBullets > 1 &&
                  void 0 !== e.previousIndex &&
                  ((e.pagination.dynamicBulletIndex += s - e.previousIndex),
                  e.pagination.dynamicBulletIndex > n.dynamicMainBullets - 1
                    ? (e.pagination.dynamicBulletIndex =
                        n.dynamicMainBullets - 1)
                    : e.pagination.dynamicBulletIndex < 0 &&
                      (e.pagination.dynamicBulletIndex = 0)),
                (a = s - e.pagination.dynamicBulletIndex),
                (l = a + (Math.min(i.length, n.dynamicMainBullets) - 1)),
                (c = (l + a) / 2)),
              i.removeClass(
                `${n.bulletActiveClass} ${n.bulletActiveClass}-next ${n.bulletActiveClass}-next-next ${n.bulletActiveClass}-prev ${n.bulletActiveClass}-prev-prev ${n.bulletActiveClass}-main`
              ),
              r.length > 1)
            )
              i.each((e, t) => {
                const i = o(t),
                  r = i.index();
                r === s && i.addClass(n.bulletActiveClass),
                  n.dynamicBullets &&
                    (r >= a &&
                      r <= l &&
                      i.addClass(n.bulletActiveClass + "-main"),
                    r === a &&
                      i
                        .prev()
                        .addClass(n.bulletActiveClass + "-prev")
                        .prev()
                        .addClass(n.bulletActiveClass + "-prev-prev"),
                    r === l &&
                      i
                        .next()
                        .addClass(n.bulletActiveClass + "-next")
                        .next()
                        .addClass(n.bulletActiveClass + "-next-next"));
              });
            else {
              const t = i.eq(s),
                r = t.index();
              if ((t.addClass(n.bulletActiveClass), n.dynamicBullets)) {
                const t = i.eq(a),
                  s = i.eq(l);
                for (let e = a; e <= l; e += 1)
                  i.eq(e).addClass(n.bulletActiveClass + "-main");
                if (e.params.loop)
                  if (r >= i.length - n.dynamicMainBullets) {
                    for (let e = n.dynamicMainBullets; e >= 0; e -= 1)
                      i.eq(i.length - e).addClass(
                        n.bulletActiveClass + "-main"
                      );
                    i.eq(i.length - n.dynamicMainBullets - 1).addClass(
                      n.bulletActiveClass + "-prev"
                    );
                  } else
                    t
                      .prev()
                      .addClass(n.bulletActiveClass + "-prev")
                      .prev()
                      .addClass(n.bulletActiveClass + "-prev-prev"),
                      s
                        .next()
                        .addClass(n.bulletActiveClass + "-next")
                        .next()
                        .addClass(n.bulletActiveClass + "-next-next");
                else
                  t
                    .prev()
                    .addClass(n.bulletActiveClass + "-prev")
                    .prev()
                    .addClass(n.bulletActiveClass + "-prev-prev"),
                    s
                      .next()
                      .addClass(n.bulletActiveClass + "-next")
                      .next()
                      .addClass(n.bulletActiveClass + "-next-next");
              }
            }
            if (n.dynamicBullets) {
              const r = Math.min(i.length, n.dynamicMainBullets + 4),
                s =
                  (e.pagination.bulletSize * r - e.pagination.bulletSize) / 2 -
                  c * e.pagination.bulletSize,
                o = t ? "right" : "left";
              i.css(e.isHorizontal() ? o : "top", s + "px");
            }
          }
          if (
            ("fraction" === n.type &&
              (r
                .find("." + n.currentClass)
                .text(n.formatFractionCurrent(s + 1)),
              r.find("." + n.totalClass).text(n.formatFractionTotal(a))),
            "progressbar" === n.type)
          ) {
            let t;
            t = n.progressbarOpposite
              ? e.isHorizontal()
                ? "vertical"
                : "horizontal"
              : e.isHorizontal()
              ? "horizontal"
              : "vertical";
            const i = (s + 1) / a;
            let o = 1,
              l = 1;
            "horizontal" === t ? (o = i) : (l = i),
              r
                .find("." + n.progressbarFillClass)
                .transform(`translate3d(0,0,0) scaleX(${o}) scaleY(${l})`)
                .transition(e.params.speed);
          }
          "custom" === n.type && n.renderCustom
            ? (r.html(n.renderCustom(e, s + 1, a)),
              e.emit("paginationRender", e, r[0]))
            : e.emit("paginationUpdate", e, r[0]),
            r[
              e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"
            ](n.lockClass);
        },
        render() {
          const e = this,
            t = e.params.pagination;
          if (
            !t.el ||
            !e.pagination.el ||
            !e.pagination.$el ||
            0 === e.pagination.$el.length
          )
            return;
          const n =
              e.virtual && e.params.virtual.enabled
                ? e.virtual.slides.length
                : e.slides.length,
            i = e.pagination.$el;
          let r = "";
          if ("bullets" === t.type) {
            const s = e.params.loop
              ? Math.ceil((n - 2 * e.loopedSlides) / e.params.slidesPerGroup)
              : e.snapGrid.length;
            for (let n = 0; n < s; n += 1)
              t.renderBullet
                ? (r += t.renderBullet.call(e, n, t.bulletClass))
                : (r += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`);
            i.html(r), (e.pagination.bullets = i.find("." + t.bulletClass));
          }
          "fraction" === t.type &&
            ((r = t.renderFraction
              ? t.renderFraction.call(e, t.currentClass, t.totalClass)
              : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),
            i.html(r)),
            "progressbar" === t.type &&
              ((r = t.renderProgressbar
                ? t.renderProgressbar.call(e, t.progressbarFillClass)
                : `<span class="${t.progressbarFillClass}"></span>`),
              i.html(r)),
            "custom" !== t.type &&
              e.emit("paginationRender", e.pagination.$el[0]);
        },
        init() {
          const e = this,
            t = e.params.pagination;
          if (!t.el) return;
          let n = o(t.el);
          0 !== n.length &&
            (e.params.uniqueNavElements &&
              "string" == typeof t.el &&
              n.length > 1 &&
              1 === e.$el.find(t.el).length &&
              (n = e.$el.find(t.el)),
            "bullets" === t.type && t.clickable && n.addClass(t.clickableClass),
            n.addClass(t.modifierClass + t.type),
            "bullets" === t.type &&
              t.dynamicBullets &&
              (n.addClass(`${t.modifierClass}${t.type}-dynamic`),
              (e.pagination.dynamicBulletIndex = 0),
              t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
            "progressbar" === t.type &&
              t.progressbarOpposite &&
              n.addClass(t.progressbarOppositeClass),
            t.clickable &&
              n.on("click", "." + t.bulletClass, function (t) {
                t.preventDefault();
                let n = o(this).index() * e.params.slidesPerGroup;
                e.params.loop && (n += e.loopedSlides), e.slideTo(n);
              }),
            c.extend(e.pagination, { $el: n, el: n[0] }));
        },
        destroy() {
          const e = this.params.pagination;
          if (
            !e.el ||
            !this.pagination.el ||
            !this.pagination.$el ||
            0 === this.pagination.$el.length
          )
            return;
          const t = this.pagination.$el;
          t.removeClass(e.hiddenClass),
            t.removeClass(e.modifierClass + e.type),
            this.pagination.bullets &&
              this.pagination.bullets.removeClass(e.bulletActiveClass),
            e.clickable && t.off("click", "." + e.bulletClass);
        },
      };
      const X = {
        setTranslate() {
          const e = this;
          if (!e.params.scrollbar.el || !e.scrollbar.el) return;
          const { scrollbar: t, rtlTranslate: n, progress: i } = e,
            { dragSize: r, trackSize: s, $dragEl: o, $el: a } = t,
            l = e.params.scrollbar;
          let c = r,
            u = (s - r) * i;
          n
            ? ((u = -u),
              u > 0 ? ((c = r - u), (u = 0)) : -u + r > s && (c = s + u))
            : u < 0
            ? ((c = r + u), (u = 0))
            : u + r > s && (c = s - u),
            e.isHorizontal()
              ? (o.transform(`translate3d(${u}px, 0, 0)`),
                (o[0].style.width = c + "px"))
              : (o.transform(`translate3d(0px, ${u}px, 0)`),
                (o[0].style.height = c + "px")),
            l.hide &&
              (clearTimeout(e.scrollbar.timeout),
              (a[0].style.opacity = 1),
              (e.scrollbar.timeout = setTimeout(() => {
                (a[0].style.opacity = 0), a.transition(400);
              }, 1e3)));
        },
        setTransition(e) {
          this.params.scrollbar.el &&
            this.scrollbar.el &&
            this.scrollbar.$dragEl.transition(e);
        },
        updateSize() {
          const e = this;
          if (!e.params.scrollbar.el || !e.scrollbar.el) return;
          const { scrollbar: t } = e,
            { $dragEl: n, $el: i } = t;
          (n[0].style.width = ""), (n[0].style.height = "");
          const r = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
            s = e.size / e.virtualSize,
            o = s * (r / e.size);
          let a;
          (a =
            "auto" === e.params.scrollbar.dragSize
              ? r * s
              : parseInt(e.params.scrollbar.dragSize, 10)),
            e.isHorizontal()
              ? (n[0].style.width = a + "px")
              : (n[0].style.height = a + "px"),
            (i[0].style.display = s >= 1 ? "none" : ""),
            e.params.scrollbar.hide && (i[0].style.opacity = 0),
            c.extend(t, {
              trackSize: r,
              divider: s,
              moveDivider: o,
              dragSize: a,
            }),
            t.$el[
              e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"
            ](e.params.scrollbar.lockClass);
        },
        getPointerPosition(e) {
          return this.isHorizontal()
            ? "touchstart" === e.type || "touchmove" === e.type
              ? e.targetTouches[0].clientX
              : e.clientX
            : "touchstart" === e.type || "touchmove" === e.type
            ? e.targetTouches[0].clientY
            : e.clientY;
        },
        setDragPosition(e) {
          const { scrollbar: t, rtlTranslate: n } = this,
            { $el: i, dragSize: r, trackSize: s, dragStartPos: o } = t;
          let a;
          (a =
            (t.getPointerPosition(e) -
              i.offset()[this.isHorizontal() ? "left" : "top"] -
              (null !== o ? o : r / 2)) /
            (s - r)),
            (a = Math.max(Math.min(a, 1), 0)),
            n && (a = 1 - a);
          const l =
            this.minTranslate() +
            (this.maxTranslate() - this.minTranslate()) * a;
          this.updateProgress(l),
            this.setTranslate(l),
            this.updateActiveIndex(),
            this.updateSlidesClasses();
        },
        onDragStart(e) {
          const t = this,
            n = t.params.scrollbar,
            { scrollbar: i, $wrapperEl: r } = t,
            { $el: s, $dragEl: o } = i;
          (t.scrollbar.isTouched = !0),
            (t.scrollbar.dragStartPos =
              e.target === o[0] || e.target === o
                ? i.getPointerPosition(e) -
                  e.target.getBoundingClientRect()[
                    t.isHorizontal() ? "left" : "top"
                  ]
                : null),
            e.preventDefault(),
            e.stopPropagation(),
            r.transition(100),
            o.transition(100),
            i.setDragPosition(e),
            clearTimeout(t.scrollbar.dragTimeout),
            s.transition(0),
            n.hide && s.css("opacity", 1),
            t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"),
            t.emit("scrollbarDragStart", e);
        },
        onDragMove(e) {
          const { scrollbar: t, $wrapperEl: n } = this,
            { $el: i, $dragEl: r } = t;
          this.scrollbar.isTouched &&
            (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
            t.setDragPosition(e),
            n.transition(0),
            i.transition(0),
            r.transition(0),
            this.emit("scrollbarDragMove", e));
        },
        onDragEnd(e) {
          const t = this,
            n = t.params.scrollbar,
            { scrollbar: i, $wrapperEl: r } = t,
            { $el: s } = i;
          t.scrollbar.isTouched &&
            ((t.scrollbar.isTouched = !1),
            t.params.cssMode &&
              (t.$wrapperEl.css("scroll-snap-type", ""), r.transition("")),
            n.hide &&
              (clearTimeout(t.scrollbar.dragTimeout),
              (t.scrollbar.dragTimeout = c.nextTick(() => {
                s.css("opacity", 0), s.transition(400);
              }, 1e3))),
            t.emit("scrollbarDragEnd", e),
            n.snapOnRelease && t.slideToClosest());
        },
        enableDraggable() {
          const e = this;
          if (!e.params.scrollbar.el) return;
          const {
              scrollbar: t,
              touchEventsTouch: n,
              touchEventsDesktop: r,
              params: s,
            } = e,
            o = t.$el[0],
            a = !(!u.passiveListener || !s.passiveListeners) && {
              passive: !1,
              capture: !1,
            },
            l = !(!u.passiveListener || !s.passiveListeners) && {
              passive: !0,
              capture: !1,
            };
          u.touch
            ? (o.addEventListener(n.start, e.scrollbar.onDragStart, a),
              o.addEventListener(n.move, e.scrollbar.onDragMove, a),
              o.addEventListener(n.end, e.scrollbar.onDragEnd, l))
            : (o.addEventListener(r.start, e.scrollbar.onDragStart, a),
              i.addEventListener(r.move, e.scrollbar.onDragMove, a),
              i.addEventListener(r.end, e.scrollbar.onDragEnd, l));
        },
        disableDraggable() {
          const e = this;
          if (!e.params.scrollbar.el) return;
          const {
              scrollbar: t,
              touchEventsTouch: n,
              touchEventsDesktop: r,
              params: s,
            } = e,
            o = t.$el[0],
            a = !(!u.passiveListener || !s.passiveListeners) && {
              passive: !1,
              capture: !1,
            },
            l = !(!u.passiveListener || !s.passiveListeners) && {
              passive: !0,
              capture: !1,
            };
          u.touch
            ? (o.removeEventListener(n.start, e.scrollbar.onDragStart, a),
              o.removeEventListener(n.move, e.scrollbar.onDragMove, a),
              o.removeEventListener(n.end, e.scrollbar.onDragEnd, l))
            : (o.removeEventListener(r.start, e.scrollbar.onDragStart, a),
              i.removeEventListener(r.move, e.scrollbar.onDragMove, a),
              i.removeEventListener(r.end, e.scrollbar.onDragEnd, l));
        },
        init() {
          const e = this;
          if (!e.params.scrollbar.el) return;
          const { scrollbar: t, $el: n } = e,
            i = e.params.scrollbar;
          let r = o(i.el);
          e.params.uniqueNavElements &&
            "string" == typeof i.el &&
            r.length > 1 &&
            1 === n.find(i.el).length &&
            (r = n.find(i.el));
          let s = r.find("." + e.params.scrollbar.dragClass);
          0 === s.length &&
            ((s = o(`<div class="${e.params.scrollbar.dragClass}"></div>`)),
            r.append(s)),
            c.extend(t, { $el: r, el: r[0], $dragEl: s, dragEl: s[0] }),
            i.draggable && t.enableDraggable();
        },
        destroy() {
          this.scrollbar.disableDraggable();
        },
      };
      const V = {
        setTransform(e, t) {
          const { rtl: n } = this,
            i = o(e),
            r = n ? -1 : 1,
            s = i.attr("data-swiper-parallax") || "0";
          let a = i.attr("data-swiper-parallax-x"),
            l = i.attr("data-swiper-parallax-y");
          const c = i.attr("data-swiper-parallax-scale"),
            u = i.attr("data-swiper-parallax-opacity");
          if (
            (a || l
              ? ((a = a || "0"), (l = l || "0"))
              : this.isHorizontal()
              ? ((a = s), (l = "0"))
              : ((l = s), (a = "0")),
            (a =
              a.indexOf("%") >= 0
                ? parseInt(a, 10) * t * r + "%"
                : a * t * r + "px"),
            (l =
              l.indexOf("%") >= 0 ? parseInt(l, 10) * t + "%" : l * t + "px"),
            null != u)
          ) {
            const e = u - (u - 1) * (1 - Math.abs(t));
            i[0].style.opacity = e;
          }
          if (null == c) i.transform(`translate3d(${a}, ${l}, 0px)`);
          else {
            const e = c - (c - 1) * (1 - Math.abs(t));
            i.transform(`translate3d(${a}, ${l}, 0px) scale(${e})`);
          }
        },
        setTranslate() {
          const e = this,
            { $el: t, slides: n, progress: i, snapGrid: r } = e;
          t
            .children(
              "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
            )
            .each((t, n) => {
              e.parallax.setTransform(n, i);
            }),
            n.each((t, n) => {
              let s = n.progress;
              e.params.slidesPerGroup > 1 &&
                "auto" !== e.params.slidesPerView &&
                (s += Math.ceil(t / 2) - i * (r.length - 1)),
                (s = Math.min(Math.max(s, -1), 1)),
                o(n)
                  .find(
                    "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                  )
                  .each((t, n) => {
                    e.parallax.setTransform(n, s);
                  });
            });
        },
        setTransition(e = this.params.speed) {
          const { $el: t } = this;
          t.find(
            "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
          ).each((t, n) => {
            const i = o(n);
            let r = parseInt(i.attr("data-swiper-parallax-duration"), 10) || e;
            0 === e && (r = 0), i.transition(r);
          });
        },
      };
      const G = {
        getDistanceBetweenTouches(e) {
          if (e.targetTouches.length < 2) return 1;
          const t = e.targetTouches[0].pageX,
            n = e.targetTouches[0].pageY,
            i = e.targetTouches[1].pageX,
            r = e.targetTouches[1].pageY;
          return Math.sqrt((i - t) ** 2 + (r - n) ** 2);
        },
        onGestureStart(e) {
          const t = this,
            n = t.params.zoom,
            i = t.zoom,
            { gesture: r } = i;
          if (
            ((i.fakeGestureTouched = !1),
            (i.fakeGestureMoved = !1),
            !u.gestures)
          ) {
            if (
              "touchstart" !== e.type ||
              ("touchstart" === e.type && e.targetTouches.length < 2)
            )
              return;
            (i.fakeGestureTouched = !0),
              (r.scaleStart = G.getDistanceBetweenTouches(e));
          }
          (r.$slideEl && r.$slideEl.length) ||
          ((r.$slideEl = o(e.target).closest("." + t.params.slideClass)),
          0 === r.$slideEl.length && (r.$slideEl = t.slides.eq(t.activeIndex)),
          (r.$imageEl = r.$slideEl.find(
            "img, svg, canvas, picture, .swiper-zoom-target"
          )),
          (r.$imageWrapEl = r.$imageEl.parent("." + n.containerClass)),
          (r.maxRatio = r.$imageWrapEl.attr("data-swiper-zoom") || n.maxRatio),
          0 !== r.$imageWrapEl.length)
            ? (r.$imageEl && r.$imageEl.transition(0), (t.zoom.isScaling = !0))
            : (r.$imageEl = void 0);
        },
        onGestureChange(e) {
          const t = this.params.zoom,
            n = this.zoom,
            { gesture: i } = n;
          if (!u.gestures) {
            if (
              "touchmove" !== e.type ||
              ("touchmove" === e.type && e.targetTouches.length < 2)
            )
              return;
            (n.fakeGestureMoved = !0),
              (i.scaleMove = G.getDistanceBetweenTouches(e));
          }
          i.$imageEl &&
            0 !== i.$imageEl.length &&
            ((n.scale = u.gestures
              ? e.scale * n.currentScale
              : (i.scaleMove / i.scaleStart) * n.currentScale),
            n.scale > i.maxRatio &&
              (n.scale = i.maxRatio - 1 + (n.scale - i.maxRatio + 1) ** 0.5),
            n.scale < t.minRatio &&
              (n.scale = t.minRatio + 1 - (t.minRatio - n.scale + 1) ** 0.5),
            i.$imageEl.transform(`translate3d(0,0,0) scale(${n.scale})`));
        },
        onGestureEnd(e) {
          const t = this.params.zoom,
            n = this.zoom,
            { gesture: i } = n;
          if (!u.gestures) {
            if (!n.fakeGestureTouched || !n.fakeGestureMoved) return;
            if (
              "touchend" !== e.type ||
              ("touchend" === e.type &&
                e.changedTouches.length < 2 &&
                !b.android)
            )
              return;
            (n.fakeGestureTouched = !1), (n.fakeGestureMoved = !1);
          }
          i.$imageEl &&
            0 !== i.$imageEl.length &&
            ((n.scale = Math.max(Math.min(n.scale, i.maxRatio), t.minRatio)),
            i.$imageEl
              .transition(this.params.speed)
              .transform(`translate3d(0,0,0) scale(${n.scale})`),
            (n.currentScale = n.scale),
            (n.isScaling = !1),
            1 === n.scale && (i.$slideEl = void 0));
        },
        onTouchStart(e) {
          const t = this.zoom,
            { gesture: n, image: i } = t;
          n.$imageEl &&
            0 !== n.$imageEl.length &&
            (i.isTouched ||
              (b.android && e.preventDefault(),
              (i.isTouched = !0),
              (i.touchesStart.x =
                "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX),
              (i.touchesStart.y =
                "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY)));
        },
        onTouchMove(e) {
          const t = this,
            n = t.zoom,
            { gesture: i, image: r, velocity: s } = n;
          if (!i.$imageEl || 0 === i.$imageEl.length) return;
          if (((t.allowClick = !1), !r.isTouched || !i.$slideEl)) return;
          r.isMoved ||
            ((r.width = i.$imageEl[0].offsetWidth),
            (r.height = i.$imageEl[0].offsetHeight),
            (r.startX = c.getTranslate(i.$imageWrapEl[0], "x") || 0),
            (r.startY = c.getTranslate(i.$imageWrapEl[0], "y") || 0),
            (i.slideWidth = i.$slideEl[0].offsetWidth),
            (i.slideHeight = i.$slideEl[0].offsetHeight),
            i.$imageWrapEl.transition(0),
            t.rtl && ((r.startX = -r.startX), (r.startY = -r.startY)));
          const o = r.width * n.scale,
            a = r.height * n.scale;
          if (!(o < i.slideWidth && a < i.slideHeight)) {
            if (
              ((r.minX = Math.min(i.slideWidth / 2 - o / 2, 0)),
              (r.maxX = -r.minX),
              (r.minY = Math.min(i.slideHeight / 2 - a / 2, 0)),
              (r.maxY = -r.minY),
              (r.touchesCurrent.x =
                "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX),
              (r.touchesCurrent.y =
                "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY),
              !r.isMoved && !n.isScaling)
            ) {
              if (
                t.isHorizontal() &&
                ((Math.floor(r.minX) === Math.floor(r.startX) &&
                  r.touchesCurrent.x < r.touchesStart.x) ||
                  (Math.floor(r.maxX) === Math.floor(r.startX) &&
                    r.touchesCurrent.x > r.touchesStart.x))
              )
                return void (r.isTouched = !1);
              if (
                !t.isHorizontal() &&
                ((Math.floor(r.minY) === Math.floor(r.startY) &&
                  r.touchesCurrent.y < r.touchesStart.y) ||
                  (Math.floor(r.maxY) === Math.floor(r.startY) &&
                    r.touchesCurrent.y > r.touchesStart.y))
              )
                return void (r.isTouched = !1);
            }
            e.preventDefault(),
              e.stopPropagation(),
              (r.isMoved = !0),
              (r.currentX = r.touchesCurrent.x - r.touchesStart.x + r.startX),
              (r.currentY = r.touchesCurrent.y - r.touchesStart.y + r.startY),
              r.currentX < r.minX &&
                (r.currentX = r.minX + 1 - (r.minX - r.currentX + 1) ** 0.8),
              r.currentX > r.maxX &&
                (r.currentX = r.maxX - 1 + (r.currentX - r.maxX + 1) ** 0.8),
              r.currentY < r.minY &&
                (r.currentY = r.minY + 1 - (r.minY - r.currentY + 1) ** 0.8),
              r.currentY > r.maxY &&
                (r.currentY = r.maxY - 1 + (r.currentY - r.maxY + 1) ** 0.8),
              s.prevPositionX || (s.prevPositionX = r.touchesCurrent.x),
              s.prevPositionY || (s.prevPositionY = r.touchesCurrent.y),
              s.prevTime || (s.prevTime = Date.now()),
              (s.x =
                (r.touchesCurrent.x - s.prevPositionX) /
                (Date.now() - s.prevTime) /
                2),
              (s.y =
                (r.touchesCurrent.y - s.prevPositionY) /
                (Date.now() - s.prevTime) /
                2),
              Math.abs(r.touchesCurrent.x - s.prevPositionX) < 2 && (s.x = 0),
              Math.abs(r.touchesCurrent.y - s.prevPositionY) < 2 && (s.y = 0),
              (s.prevPositionX = r.touchesCurrent.x),
              (s.prevPositionY = r.touchesCurrent.y),
              (s.prevTime = Date.now()),
              i.$imageWrapEl.transform(
                `translate3d(${r.currentX}px, ${r.currentY}px,0)`
              );
          }
        },
        onTouchEnd() {
          const e = this.zoom,
            { gesture: t, image: n, velocity: i } = e;
          if (!t.$imageEl || 0 === t.$imageEl.length) return;
          if (!n.isTouched || !n.isMoved)
            return (n.isTouched = !1), void (n.isMoved = !1);
          (n.isTouched = !1), (n.isMoved = !1);
          let r = 300,
            s = 300;
          const o = i.x * r,
            a = n.currentX + o,
            l = i.y * s,
            c = n.currentY + l;
          0 !== i.x && (r = Math.abs((a - n.currentX) / i.x)),
            0 !== i.y && (s = Math.abs((c - n.currentY) / i.y));
          const u = Math.max(r, s);
          (n.currentX = a), (n.currentY = c);
          const d = n.width * e.scale,
            h = n.height * e.scale;
          (n.minX = Math.min(t.slideWidth / 2 - d / 2, 0)),
            (n.maxX = -n.minX),
            (n.minY = Math.min(t.slideHeight / 2 - h / 2, 0)),
            (n.maxY = -n.minY),
            (n.currentX = Math.max(Math.min(n.currentX, n.maxX), n.minX)),
            (n.currentY = Math.max(Math.min(n.currentY, n.maxY), n.minY)),
            t.$imageWrapEl
              .transition(u)
              .transform(`translate3d(${n.currentX}px, ${n.currentY}px,0)`);
        },
        onTransitionEnd() {
          const e = this.zoom,
            { gesture: t } = e;
          t.$slideEl &&
            this.previousIndex !== this.activeIndex &&
            (t.$imageEl && t.$imageEl.transform("translate3d(0,0,0) scale(1)"),
            t.$imageWrapEl && t.$imageWrapEl.transform("translate3d(0,0,0)"),
            (e.scale = 1),
            (e.currentScale = 1),
            (t.$slideEl = void 0),
            (t.$imageEl = void 0),
            (t.$imageWrapEl = void 0));
        },
        toggle(e) {
          const t = this.zoom;
          t.scale && 1 !== t.scale ? t.out() : t.in(e);
        },
        in(e) {
          const t = this,
            n = t.zoom,
            i = t.params.zoom,
            { gesture: r, image: s } = n;
          if (
            (r.$slideEl ||
              (t.params.virtual && t.params.virtual.enabled && t.virtual
                ? (r.$slideEl = t.$wrapperEl.children(
                    "." + t.params.slideActiveClass
                  ))
                : (r.$slideEl = t.slides.eq(t.activeIndex)),
              (r.$imageEl = r.$slideEl.find(
                "img, svg, canvas, picture, .swiper-zoom-target"
              )),
              (r.$imageWrapEl = r.$imageEl.parent("." + i.containerClass))),
            !r.$imageEl || 0 === r.$imageEl.length)
          )
            return;
          let o, a, l, c, u, d, h, p, f, m, g, v, y, b, w, x, T, E;
          r.$slideEl.addClass("" + i.zoomedSlideClass),
            void 0 === s.touchesStart.x && e
              ? ((o =
                  "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX),
                (a =
                  "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY))
              : ((o = s.touchesStart.x), (a = s.touchesStart.y)),
            (n.scale = r.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio),
            (n.currentScale =
              r.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio),
            e
              ? ((T = r.$slideEl[0].offsetWidth),
                (E = r.$slideEl[0].offsetHeight),
                (l = r.$slideEl.offset().left),
                (c = r.$slideEl.offset().top),
                (u = l + T / 2 - o),
                (d = c + E / 2 - a),
                (f = r.$imageEl[0].offsetWidth),
                (m = r.$imageEl[0].offsetHeight),
                (g = f * n.scale),
                (v = m * n.scale),
                (y = Math.min(T / 2 - g / 2, 0)),
                (b = Math.min(E / 2 - v / 2, 0)),
                (w = -y),
                (x = -b),
                (h = u * n.scale),
                (p = d * n.scale),
                h < y && (h = y),
                h > w && (h = w),
                p < b && (p = b),
                p > x && (p = x))
              : ((h = 0), (p = 0)),
            r.$imageWrapEl
              .transition(300)
              .transform(`translate3d(${h}px, ${p}px,0)`),
            r.$imageEl
              .transition(300)
              .transform(`translate3d(0,0,0) scale(${n.scale})`);
        },
        out() {
          const e = this,
            t = e.zoom,
            n = e.params.zoom,
            { gesture: i } = t;
          i.$slideEl ||
            (e.params.virtual && e.params.virtual.enabled && e.virtual
              ? (i.$slideEl = e.$wrapperEl.children(
                  "." + e.params.slideActiveClass
                ))
              : (i.$slideEl = e.slides.eq(e.activeIndex)),
            (i.$imageEl = i.$slideEl.find(
              "img, svg, canvas, picture, .swiper-zoom-target"
            )),
            (i.$imageWrapEl = i.$imageEl.parent("." + n.containerClass))),
            i.$imageEl &&
              0 !== i.$imageEl.length &&
              ((t.scale = 1),
              (t.currentScale = 1),
              i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
              i.$imageEl
                .transition(300)
                .transform("translate3d(0,0,0) scale(1)"),
              i.$slideEl.removeClass("" + n.zoomedSlideClass),
              (i.$slideEl = void 0));
        },
        enable() {
          const e = this,
            t = e.zoom;
          if (t.enabled) return;
          t.enabled = !0;
          const n = !(
              "touchstart" !== e.touchEvents.start ||
              !u.passiveListener ||
              !e.params.passiveListeners
            ) && { passive: !0, capture: !1 },
            i = !u.passiveListener || { passive: !1, capture: !0 },
            r = "." + e.params.slideClass;
          u.gestures
            ? (e.$wrapperEl.on("gesturestart", r, t.onGestureStart, n),
              e.$wrapperEl.on("gesturechange", r, t.onGestureChange, n),
              e.$wrapperEl.on("gestureend", r, t.onGestureEnd, n))
            : "touchstart" === e.touchEvents.start &&
              (e.$wrapperEl.on(e.touchEvents.start, r, t.onGestureStart, n),
              e.$wrapperEl.on(e.touchEvents.move, r, t.onGestureChange, i),
              e.$wrapperEl.on(e.touchEvents.end, r, t.onGestureEnd, n),
              e.touchEvents.cancel &&
                e.$wrapperEl.on(e.touchEvents.cancel, r, t.onGestureEnd, n)),
            e.$wrapperEl.on(
              e.touchEvents.move,
              "." + e.params.zoom.containerClass,
              t.onTouchMove,
              i
            );
        },
        disable() {
          const e = this,
            t = e.zoom;
          if (!t.enabled) return;
          e.zoom.enabled = !1;
          const n = !(
              "touchstart" !== e.touchEvents.start ||
              !u.passiveListener ||
              !e.params.passiveListeners
            ) && { passive: !0, capture: !1 },
            i = !u.passiveListener || { passive: !1, capture: !0 },
            r = "." + e.params.slideClass;
          u.gestures
            ? (e.$wrapperEl.off("gesturestart", r, t.onGestureStart, n),
              e.$wrapperEl.off("gesturechange", r, t.onGestureChange, n),
              e.$wrapperEl.off("gestureend", r, t.onGestureEnd, n))
            : "touchstart" === e.touchEvents.start &&
              (e.$wrapperEl.off(e.touchEvents.start, r, t.onGestureStart, n),
              e.$wrapperEl.off(e.touchEvents.move, r, t.onGestureChange, i),
              e.$wrapperEl.off(e.touchEvents.end, r, t.onGestureEnd, n),
              e.touchEvents.cancel &&
                e.$wrapperEl.off(e.touchEvents.cancel, r, t.onGestureEnd, n)),
            e.$wrapperEl.off(
              e.touchEvents.move,
              "." + e.params.zoom.containerClass,
              t.onTouchMove,
              i
            );
        },
      };
      const U = {
        loadInSlide(e, t = !0) {
          const n = this,
            i = n.params.lazy;
          if (void 0 === e) return;
          if (0 === n.slides.length) return;
          const r =
            n.virtual && n.params.virtual.enabled
              ? n.$wrapperEl.children(
                  `.${n.params.slideClass}[data-swiper-slide-index="${e}"]`
                )
              : n.slides.eq(e);
          let s = r.find(
            `.${i.elementClass}:not(.${i.loadedClass}):not(.${i.loadingClass})`
          );
          !r.hasClass(i.elementClass) ||
            r.hasClass(i.loadedClass) ||
            r.hasClass(i.loadingClass) ||
            (s = s.add(r[0])),
            0 !== s.length &&
              s.each((e, s) => {
                const a = o(s);
                a.addClass(i.loadingClass);
                const l = a.attr("data-background"),
                  c = a.attr("data-src"),
                  u = a.attr("data-srcset"),
                  d = a.attr("data-sizes");
                n.loadImage(a[0], c || l, u, d, !1, () => {
                  if (null != n && n && (!n || n.params) && !n.destroyed) {
                    if (
                      (l
                        ? (a.css("background-image", `url("${l}")`),
                          a.removeAttr("data-background"))
                        : (u &&
                            (a.attr("srcset", u), a.removeAttr("data-srcset")),
                          d && (a.attr("sizes", d), a.removeAttr("data-sizes")),
                          c && (a.attr("src", c), a.removeAttr("data-src"))),
                      a.addClass(i.loadedClass).removeClass(i.loadingClass),
                      r.find("." + i.preloaderClass).remove(),
                      n.params.loop && t)
                    ) {
                      const e = r.attr("data-swiper-slide-index");
                      if (r.hasClass(n.params.slideDuplicateClass)) {
                        const t = n.$wrapperEl.children(
                          `[data-swiper-slide-index="${e}"]:not(.${n.params.slideDuplicateClass})`
                        );
                        n.lazy.loadInSlide(t.index(), !1);
                      } else {
                        const t = n.$wrapperEl.children(
                          `.${n.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`
                        );
                        n.lazy.loadInSlide(t.index(), !1);
                      }
                    }
                    n.emit("lazyImageReady", r[0], a[0]),
                      n.params.autoHeight && n.updateAutoHeight();
                  }
                }),
                  n.emit("lazyImageLoad", r[0], a[0]);
              });
        },
        load() {
          const e = this,
            { $wrapperEl: t, params: n, slides: i, activeIndex: r } = e,
            s = e.virtual && n.virtual.enabled,
            a = n.lazy;
          let l = n.slidesPerView;
          function c(e) {
            if (s) {
              if (
                t.children(`.${n.slideClass}[data-swiper-slide-index="${e}"]`)
                  .length
              )
                return !0;
            } else if (i[e]) return !0;
            return !1;
          }
          function u(e) {
            return s ? o(e).attr("data-swiper-slide-index") : o(e).index();
          }
          if (
            ("auto" === l && (l = 0),
            e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0),
            e.params.watchSlidesVisibility)
          )
            t.children("." + n.slideVisibleClass).each((t, n) => {
              const i = s ? o(n).attr("data-swiper-slide-index") : o(n).index();
              e.lazy.loadInSlide(i);
            });
          else if (l > 1)
            for (let t = r; t < r + l; t += 1) c(t) && e.lazy.loadInSlide(t);
          else e.lazy.loadInSlide(r);
          if (a.loadPrevNext)
            if (l > 1 || (a.loadPrevNextAmount && a.loadPrevNextAmount > 1)) {
              const t = a.loadPrevNextAmount,
                n = l,
                s = Math.min(r + n + Math.max(t, n), i.length),
                o = Math.max(r - Math.max(n, t), 0);
              for (let t = r + l; t < s; t += 1) c(t) && e.lazy.loadInSlide(t);
              for (let t = o; t < r; t += 1) c(t) && e.lazy.loadInSlide(t);
            } else {
              const i = t.children("." + n.slideNextClass);
              i.length > 0 && e.lazy.loadInSlide(u(i));
              const r = t.children("." + n.slidePrevClass);
              r.length > 0 && e.lazy.loadInSlide(u(r));
            }
        },
      };
      const K = {
        LinearSpline: function (e, t) {
          const n = (function () {
            let e, t, n;
            return (i, r) => {
              for (t = -1, e = i.length; e - t > 1; )
                (n = (e + t) >> 1), i[n] <= r ? (t = n) : (e = n);
              return e;
            };
          })();
          let i, r;
          return (
            (this.x = e),
            (this.y = t),
            (this.lastIndex = e.length - 1),
            (this.interpolate = function (e) {
              return e
                ? ((r = n(this.x, e)),
                  (i = r - 1),
                  ((e - this.x[i]) * (this.y[r] - this.y[i])) /
                    (this.x[r] - this.x[i]) +
                    this.y[i])
                : 0;
            }),
            this
          );
        },
        getInterpolateFunction(e) {
          const t = this;
          t.controller.spline ||
            (t.controller.spline = t.params.loop
              ? new K.LinearSpline(t.slidesGrid, e.slidesGrid)
              : new K.LinearSpline(t.snapGrid, e.snapGrid));
        },
        setTranslate(e, t) {
          const n = this,
            i = n.controller.control;
          let r, s;
          function o(e) {
            const t = n.rtlTranslate ? -n.translate : n.translate;
            "slide" === n.params.controller.by &&
              (n.controller.getInterpolateFunction(e),
              (s = -n.controller.spline.interpolate(-t))),
              (s && "container" !== n.params.controller.by) ||
                ((r =
                  (e.maxTranslate() - e.minTranslate()) /
                  (n.maxTranslate() - n.minTranslate())),
                (s = (t - n.minTranslate()) * r + e.minTranslate())),
              n.params.controller.inverse && (s = e.maxTranslate() - s),
              e.updateProgress(s),
              e.setTranslate(s, n),
              e.updateActiveIndex(),
              e.updateSlidesClasses();
          }
          if (Array.isArray(i))
            for (let e = 0; e < i.length; e += 1)
              i[e] !== t && i[e] instanceof O && o(i[e]);
          else i instanceof O && t !== i && o(i);
        },
        setTransition(e, t) {
          const n = this,
            i = n.controller.control;
          let r;
          function s(t) {
            t.setTransition(e, n),
              0 !== e &&
                (t.transitionStart(),
                t.params.autoHeight &&
                  c.nextTick(() => {
                    t.updateAutoHeight();
                  }),
                t.$wrapperEl.transitionEnd(() => {
                  i &&
                    (t.params.loop &&
                      "slide" === n.params.controller.by &&
                      t.loopFix(),
                    t.transitionEnd());
                }));
          }
          if (Array.isArray(i))
            for (r = 0; r < i.length; r += 1)
              i[r] !== t && i[r] instanceof O && s(i[r]);
          else i instanceof O && t !== i && s(i);
        },
      };
      const Q = {
        makeElFocusable: (e) => (e.attr("tabIndex", "0"), e),
        addElRole: (e, t) => (e.attr("role", t), e),
        addElLabel: (e, t) => (e.attr("aria-label", t), e),
        disableEl: (e) => (e.attr("aria-disabled", !0), e),
        enableEl: (e) => (e.attr("aria-disabled", !1), e),
        onEnterKey(e) {
          const t = this,
            n = t.params.a11y;
          if (13 !== e.keyCode) return;
          const i = o(e.target);
          t.navigation &&
            t.navigation.$nextEl &&
            i.is(t.navigation.$nextEl) &&
            ((t.isEnd && !t.params.loop) || t.slideNext(),
            t.isEnd
              ? t.a11y.notify(n.lastSlideMessage)
              : t.a11y.notify(n.nextSlideMessage)),
            t.navigation &&
              t.navigation.$prevEl &&
              i.is(t.navigation.$prevEl) &&
              ((t.isBeginning && !t.params.loop) || t.slidePrev(),
              t.isBeginning
                ? t.a11y.notify(n.firstSlideMessage)
                : t.a11y.notify(n.prevSlideMessage)),
            t.pagination &&
              i.is("." + t.params.pagination.bulletClass) &&
              i[0].click();
        },
        notify(e) {
          const t = this.a11y.liveRegion;
          0 !== t.length && (t.html(""), t.html(e));
        },
        updateNavigation() {
          const e = this;
          if (e.params.loop || !e.navigation) return;
          const { $nextEl: t, $prevEl: n } = e.navigation;
          n &&
            n.length > 0 &&
            (e.isBeginning ? e.a11y.disableEl(n) : e.a11y.enableEl(n)),
            t &&
              t.length > 0 &&
              (e.isEnd ? e.a11y.disableEl(t) : e.a11y.enableEl(t));
        },
        updatePagination() {
          const e = this,
            t = e.params.a11y;
          e.pagination &&
            e.params.pagination.clickable &&
            e.pagination.bullets &&
            e.pagination.bullets.length &&
            e.pagination.bullets.each((n, i) => {
              const r = o(i);
              e.a11y.makeElFocusable(r),
                e.a11y.addElRole(r, "button"),
                e.a11y.addElLabel(
                  r,
                  t.paginationBulletMessage.replace(
                    /\{\{index\}\}/,
                    r.index() + 1
                  )
                );
            });
        },
        init() {
          const e = this;
          e.$el.append(e.a11y.liveRegion);
          const t = e.params.a11y;
          let n, i;
          e.navigation && e.navigation.$nextEl && (n = e.navigation.$nextEl),
            e.navigation && e.navigation.$prevEl && (i = e.navigation.$prevEl),
            n &&
              (e.a11y.makeElFocusable(n),
              e.a11y.addElRole(n, "button"),
              e.a11y.addElLabel(n, t.nextSlideMessage),
              n.on("keydown", e.a11y.onEnterKey)),
            i &&
              (e.a11y.makeElFocusable(i),
              e.a11y.addElRole(i, "button"),
              e.a11y.addElLabel(i, t.prevSlideMessage),
              i.on("keydown", e.a11y.onEnterKey)),
            e.pagination &&
              e.params.pagination.clickable &&
              e.pagination.bullets &&
              e.pagination.bullets.length &&
              e.pagination.$el.on(
                "keydown",
                "." + e.params.pagination.bulletClass,
                e.a11y.onEnterKey
              );
        },
        destroy() {
          const e = this;
          let t, n;
          e.a11y.liveRegion &&
            e.a11y.liveRegion.length > 0 &&
            e.a11y.liveRegion.remove(),
            e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl),
            e.navigation && e.navigation.$prevEl && (n = e.navigation.$prevEl),
            t && t.off("keydown", e.a11y.onEnterKey),
            n && n.off("keydown", e.a11y.onEnterKey),
            e.pagination &&
              e.params.pagination.clickable &&
              e.pagination.bullets &&
              e.pagination.bullets.length &&
              e.pagination.$el.off(
                "keydown",
                "." + e.params.pagination.bulletClass,
                e.a11y.onEnterKey
              );
        },
      };
      const Z = {
        init() {
          const e = this;
          if (!e.params.history) return;
          if (!r.history || !r.history.pushState)
            return (
              (e.params.history.enabled = !1),
              void (e.params.hashNavigation.enabled = !0)
            );
          const t = e.history;
          (t.initialized = !0),
            (t.paths = Z.getPathValues()),
            (t.paths.key || t.paths.value) &&
              (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit),
              e.params.history.replaceState ||
                r.addEventListener("popstate", e.history.setHistoryPopState));
        },
        destroy() {
          const e = this;
          e.params.history.replaceState ||
            r.removeEventListener("popstate", e.history.setHistoryPopState);
        },
        setHistoryPopState() {
          (this.history.paths = Z.getPathValues()),
            this.history.scrollToSlide(
              this.params.speed,
              this.history.paths.value,
              !1
            );
        },
        getPathValues() {
          const e = r.location.pathname
              .slice(1)
              .split("/")
              .filter((e) => "" !== e),
            t = e.length;
          return { key: e[t - 2], value: e[t - 1] };
        },
        setHistory(e, t) {
          if (!this.history.initialized || !this.params.history.enabled) return;
          const n = this.slides.eq(t);
          let i = Z.slugify(n.attr("data-history"));
          r.location.pathname.includes(e) || (i = `${e}/${i}`);
          const s = r.history.state;
          (s && s.value === i) ||
            (this.params.history.replaceState
              ? r.history.replaceState({ value: i }, null, i)
              : r.history.pushState({ value: i }, null, i));
        },
        slugify: (e) =>
          e
            .toString()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]+/g, "")
            .replace(/--+/g, "-")
            .replace(/^-+/, "")
            .replace(/-+$/, ""),
        scrollToSlide(e, t, n) {
          const i = this;
          if (t)
            for (let r = 0, s = i.slides.length; r < s; r += 1) {
              const s = i.slides.eq(r);
              if (
                Z.slugify(s.attr("data-history")) === t &&
                !s.hasClass(i.params.slideDuplicateClass)
              ) {
                const t = s.index();
                i.slideTo(t, e, n);
              }
            }
          else i.slideTo(0, e, n);
        },
      };
      const J = {
        onHashCange() {
          const e = this,
            t = i.location.hash.replace("#", "");
          if (t !== e.slides.eq(e.activeIndex).attr("data-hash")) {
            const n = e.$wrapperEl
              .children(`.${e.params.slideClass}[data-hash="${t}"]`)
              .index();
            if (void 0 === n) return;
            e.slideTo(n);
          }
        },
        setHash() {
          const e = this;
          if (e.hashNavigation.initialized && e.params.hashNavigation.enabled)
            if (
              e.params.hashNavigation.replaceState &&
              r.history &&
              r.history.replaceState
            )
              r.history.replaceState(
                null,
                null,
                "#" + e.slides.eq(e.activeIndex).attr("data-hash") || ""
              );
            else {
              const t = e.slides.eq(e.activeIndex),
                n = t.attr("data-hash") || t.attr("data-history");
              i.location.hash = n || "";
            }
        },
        init() {
          const e = this;
          if (
            !e.params.hashNavigation.enabled ||
            (e.params.history && e.params.history.enabled)
          )
            return;
          e.hashNavigation.initialized = !0;
          const t = i.location.hash.replace("#", "");
          if (t) {
            const n = 0;
            for (let i = 0, r = e.slides.length; i < r; i += 1) {
              const r = e.slides.eq(i);
              if (
                (r.attr("data-hash") || r.attr("data-history")) === t &&
                !r.hasClass(e.params.slideDuplicateClass)
              ) {
                const t = r.index();
                e.slideTo(t, n, e.params.runCallbacksOnInit, !0);
              }
            }
          }
          e.params.hashNavigation.watchState &&
            o(r).on("hashchange", e.hashNavigation.onHashCange);
        },
        destroy() {
          const e = this;
          e.params.hashNavigation.watchState &&
            o(r).off("hashchange", e.hashNavigation.onHashCange);
        },
      };
      const ee = {
        run() {
          const e = this,
            t = e.slides.eq(e.activeIndex);
          let n = e.params.autoplay.delay;
          t.attr("data-swiper-autoplay") &&
            (n = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
            clearTimeout(e.autoplay.timeout),
            (e.autoplay.timeout = c.nextTick(() => {
              e.params.autoplay.reverseDirection
                ? e.params.loop
                  ? (e.loopFix(),
                    e.slidePrev(e.params.speed, !0, !0),
                    e.emit("autoplay"))
                  : e.isBeginning
                  ? e.params.autoplay.stopOnLastSlide
                    ? e.autoplay.stop()
                    : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0),
                      e.emit("autoplay"))
                  : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay"))
                : e.params.loop
                ? (e.loopFix(),
                  e.slideNext(e.params.speed, !0, !0),
                  e.emit("autoplay"))
                : e.isEnd
                ? e.params.autoplay.stopOnLastSlide
                  ? e.autoplay.stop()
                  : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay"))
                : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")),
                e.params.cssMode && e.autoplay.running && e.autoplay.run();
            }, n));
        },
        start() {
          return (
            void 0 === this.autoplay.timeout &&
            !this.autoplay.running &&
            ((this.autoplay.running = !0),
            this.emit("autoplayStart"),
            this.autoplay.run(),
            !0)
          );
        },
        stop() {
          const e = this;
          return (
            !!e.autoplay.running &&
            void 0 !== e.autoplay.timeout &&
            (e.autoplay.timeout &&
              (clearTimeout(e.autoplay.timeout), (e.autoplay.timeout = void 0)),
            (e.autoplay.running = !1),
            e.emit("autoplayStop"),
            !0)
          );
        },
        pause(e) {
          const t = this;
          t.autoplay.running &&
            (t.autoplay.paused ||
              (t.autoplay.timeout && clearTimeout(t.autoplay.timeout),
              (t.autoplay.paused = !0),
              0 !== e && t.params.autoplay.waitForTransition
                ? (t.$wrapperEl[0].addEventListener(
                    "transitionend",
                    t.autoplay.onTransitionEnd
                  ),
                  t.$wrapperEl[0].addEventListener(
                    "webkitTransitionEnd",
                    t.autoplay.onTransitionEnd
                  ))
                : ((t.autoplay.paused = !1), t.autoplay.run())));
        },
      };
      const te = {
        setTranslate() {
          const e = this,
            { slides: t } = e;
          for (let n = 0; n < t.length; n += 1) {
            const t = e.slides.eq(n);
            let i = -t[0].swiperSlideOffset;
            e.params.virtualTranslate || (i -= e.translate);
            let r = 0;
            e.isHorizontal() || ((r = i), (i = 0));
            const s = e.params.fadeEffect.crossFade
              ? Math.max(1 - Math.abs(t[0].progress), 0)
              : 1 + Math.min(Math.max(t[0].progress, -1), 0);
            t.css({ opacity: s }).transform(`translate3d(${i}px, ${r}px, 0px)`);
          }
        },
        setTransition(e) {
          const t = this,
            { slides: n, $wrapperEl: i } = t;
          if ((n.transition(e), t.params.virtualTranslate && 0 !== e)) {
            let e = !1;
            n.transitionEnd(() => {
              if (e) return;
              if (!t || t.destroyed) return;
              (e = !0), (t.animating = !1);
              const n = ["webkitTransitionEnd", "transitionend"];
              for (let e = 0; e < n.length; e += 1) i.trigger(n[e]);
            });
          }
        },
      };
      const ne = {
        setTranslate() {
          const {
              $el: e,
              $wrapperEl: t,
              slides: n,
              width: i,
              height: r,
              rtlTranslate: s,
              size: a,
            } = this,
            l = this.params.cubeEffect,
            c = this.isHorizontal(),
            u = this.virtual && this.params.virtual.enabled;
          let d,
            h = 0;
          l.shadow &&
            (c
              ? ((d = t.find(".swiper-cube-shadow")),
                0 === d.length &&
                  ((d = o('<div class="swiper-cube-shadow"></div>')),
                  t.append(d)),
                d.css({ height: i + "px" }))
              : ((d = e.find(".swiper-cube-shadow")),
                0 === d.length &&
                  ((d = o('<div class="swiper-cube-shadow"></div>')),
                  e.append(d))));
          for (let e = 0; e < n.length; e += 1) {
            const t = n.eq(e);
            let i = e;
            u && (i = parseInt(t.attr("data-swiper-slide-index"), 10));
            let r = 90 * i,
              d = Math.floor(r / 360);
            s && ((r = -r), (d = Math.floor(-r / 360)));
            const p = Math.max(Math.min(t[0].progress, 1), -1);
            let f = 0,
              m = 0,
              g = 0;
            i % 4 == 0
              ? ((f = 4 * -d * a), (g = 0))
              : (i - 1) % 4 == 0
              ? ((f = 0), (g = 4 * -d * a))
              : (i - 2) % 4 == 0
              ? ((f = a + 4 * d * a), (g = a))
              : (i - 3) % 4 == 0 && ((f = -a), (g = 3 * a + 4 * a * d)),
              s && (f = -f),
              c || ((m = f), (f = 0));
            const v = `rotateX(${c ? 0 : -r}deg) rotateY(${
              c ? r : 0
            }deg) translate3d(${f}px, ${m}px, ${g}px)`;
            if (
              (p <= 1 &&
                p > -1 &&
                ((h = 90 * i + 90 * p), s && (h = 90 * -i - 90 * p)),
              t.transform(v),
              l.slideShadows)
            ) {
              let e = c
                  ? t.find(".swiper-slide-shadow-left")
                  : t.find(".swiper-slide-shadow-top"),
                n = c
                  ? t.find(".swiper-slide-shadow-right")
                  : t.find(".swiper-slide-shadow-bottom");
              0 === e.length &&
                ((e = o(
                  `<div class="swiper-slide-shadow-${
                    c ? "left" : "top"
                  }"></div>`
                )),
                t.append(e)),
                0 === n.length &&
                  ((n = o(
                    `<div class="swiper-slide-shadow-${
                      c ? "right" : "bottom"
                    }"></div>`
                  )),
                  t.append(n)),
                e.length && (e[0].style.opacity = Math.max(-p, 0)),
                n.length && (n[0].style.opacity = Math.max(p, 0));
            }
          }
          if (
            (t.css({
              "-webkit-transform-origin": `50% 50% -${a / 2}px`,
              "-moz-transform-origin": `50% 50% -${a / 2}px`,
              "-ms-transform-origin": `50% 50% -${a / 2}px`,
              "transform-origin": `50% 50% -${a / 2}px`,
            }),
            l.shadow)
          )
            if (c)
              d.transform(
                `translate3d(0px, ${i / 2 + l.shadowOffset}px, ${
                  -i / 2
                }px) rotateX(90deg) rotateZ(0deg) scale(${l.shadowScale})`
              );
            else {
              const e = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90),
                t =
                  1.5 -
                  (Math.sin((2 * e * Math.PI) / 360) / 2 +
                    Math.cos((2 * e * Math.PI) / 360) / 2),
                n = l.shadowScale,
                i = l.shadowScale / t,
                s = l.shadowOffset;
              d.transform(
                `scale3d(${n}, 1, ${i}) translate3d(0px, ${r / 2 + s}px, ${
                  -r / 2 / i
                }px) rotateX(-90deg)`
              );
            }
          const p = z.isSafari || z.isUiWebView ? -a / 2 : 0;
          t.transform(
            `translate3d(0px,0,${p}px) rotateX(${
              this.isHorizontal() ? 0 : h
            }deg) rotateY(${this.isHorizontal() ? -h : 0}deg)`
          );
        },
        setTransition(e) {
          const { $el: t, slides: n } = this;
          n
            .transition(e)
            .find(
              ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
            )
            .transition(e),
            this.params.cubeEffect.shadow &&
              !this.isHorizontal() &&
              t.find(".swiper-cube-shadow").transition(e);
        },
      };
      const ie = {
        setTranslate() {
          const e = this,
            { slides: t, rtlTranslate: n } = e;
          for (let i = 0; i < t.length; i += 1) {
            const r = t.eq(i);
            let s = r[0].progress;
            e.params.flipEffect.limitRotation &&
              (s = Math.max(Math.min(r[0].progress, 1), -1));
            let a = -180 * s,
              l = 0,
              c = -r[0].swiperSlideOffset,
              u = 0;
            if (
              (e.isHorizontal()
                ? n && (a = -a)
                : ((u = c), (c = 0), (l = -a), (a = 0)),
              (r[0].style.zIndex = -Math.abs(Math.round(s)) + t.length),
              e.params.flipEffect.slideShadows)
            ) {
              let t = e.isHorizontal()
                  ? r.find(".swiper-slide-shadow-left")
                  : r.find(".swiper-slide-shadow-top"),
                n = e.isHorizontal()
                  ? r.find(".swiper-slide-shadow-right")
                  : r.find(".swiper-slide-shadow-bottom");
              0 === t.length &&
                ((t = o(
                  `<div class="swiper-slide-shadow-${
                    e.isHorizontal() ? "left" : "top"
                  }"></div>`
                )),
                r.append(t)),
                0 === n.length &&
                  ((n = o(
                    `<div class="swiper-slide-shadow-${
                      e.isHorizontal() ? "right" : "bottom"
                    }"></div>`
                  )),
                  r.append(n)),
                t.length && (t[0].style.opacity = Math.max(-s, 0)),
                n.length && (n[0].style.opacity = Math.max(s, 0));
            }
            r.transform(
              `translate3d(${c}px, ${u}px, 0px) rotateX(${l}deg) rotateY(${a}deg)`
            );
          }
        },
        setTransition(e) {
          const t = this,
            { slides: n, activeIndex: i, $wrapperEl: r } = t;
          if (
            (n
              .transition(e)
              .find(
                ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
              )
              .transition(e),
            t.params.virtualTranslate && 0 !== e)
          ) {
            let e = !1;
            n.eq(i).transitionEnd(function () {
              if (e) return;
              if (!t || t.destroyed) return;
              (e = !0), (t.animating = !1);
              const n = ["webkitTransitionEnd", "transitionend"];
              for (let e = 0; e < n.length; e += 1) r.trigger(n[e]);
            });
          }
        },
      };
      const re = {
        setTranslate() {
          const {
              width: e,
              height: t,
              slides: n,
              $wrapperEl: i,
              slidesSizesGrid: r,
            } = this,
            s = this.params.coverflowEffect,
            a = this.isHorizontal(),
            l = this.translate,
            c = a ? e / 2 - l : t / 2 - l,
            d = a ? s.rotate : -s.rotate,
            h = s.depth;
          for (let e = 0, t = n.length; e < t; e += 1) {
            const t = n.eq(e),
              i = r[e],
              l = ((c - t[0].swiperSlideOffset - i / 2) / i) * s.modifier;
            let u = a ? d * l : 0,
              p = a ? 0 : d * l,
              f = -h * Math.abs(l),
              m = s.stretch;
            "string" == typeof m &&
              -1 !== m.indexOf("%") &&
              (m = (parseFloat(s.stretch) / 100) * i);
            let g = a ? 0 : m * l,
              v = a ? m * l : 0;
            Math.abs(v) < 0.001 && (v = 0),
              Math.abs(g) < 0.001 && (g = 0),
              Math.abs(f) < 0.001 && (f = 0),
              Math.abs(u) < 0.001 && (u = 0),
              Math.abs(p) < 0.001 && (p = 0);
            const y = `translate3d(${v}px,${g}px,${f}px)  rotateX(${p}deg) rotateY(${u}deg)`;
            if (
              (t.transform(y),
              (t[0].style.zIndex = 1 - Math.abs(Math.round(l))),
              s.slideShadows)
            ) {
              let e = a
                  ? t.find(".swiper-slide-shadow-left")
                  : t.find(".swiper-slide-shadow-top"),
                n = a
                  ? t.find(".swiper-slide-shadow-right")
                  : t.find(".swiper-slide-shadow-bottom");
              0 === e.length &&
                ((e = o(
                  `<div class="swiper-slide-shadow-${
                    a ? "left" : "top"
                  }"></div>`
                )),
                t.append(e)),
                0 === n.length &&
                  ((n = o(
                    `<div class="swiper-slide-shadow-${
                      a ? "right" : "bottom"
                    }"></div>`
                  )),
                  t.append(n)),
                e.length && (e[0].style.opacity = l > 0 ? l : 0),
                n.length && (n[0].style.opacity = -l > 0 ? -l : 0);
            }
          }
          if (u.pointerEvents || u.prefixedPointerEvents) {
            i[0].style.perspectiveOrigin = c + "px 50%";
          }
        },
        setTransition(e) {
          this.slides
            .transition(e)
            .find(
              ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
            )
            .transition(e);
        },
      };
      const se = {
        init() {
          const e = this,
            { thumbs: t } = e.params,
            n = e.constructor;
          t.swiper instanceof n
            ? ((e.thumbs.swiper = t.swiper),
              c.extend(e.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1,
              }),
              c.extend(e.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1,
              }))
            : c.isObject(t.swiper) &&
              ((e.thumbs.swiper = new n(
                c.extend({}, t.swiper, {
                  watchSlidesVisibility: !0,
                  watchSlidesProgress: !0,
                  slideToClickedSlide: !1,
                })
              )),
              (e.thumbs.swiperCreated = !0)),
            e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),
            e.thumbs.swiper.on("tap", e.thumbs.onThumbClick);
        },
        onThumbClick() {
          const e = this,
            t = e.thumbs.swiper;
          if (!t) return;
          const n = t.clickedIndex,
            i = t.clickedSlide;
          if (i && o(i).hasClass(e.params.thumbs.slideThumbActiveClass)) return;
          if (null == n) return;
          let r;
          if (
            ((r = t.params.loop
              ? parseInt(o(t.clickedSlide).attr("data-swiper-slide-index"), 10)
              : n),
            e.params.loop)
          ) {
            let t = e.activeIndex;
            e.slides.eq(t).hasClass(e.params.slideDuplicateClass) &&
              (e.loopFix(),
              (e._clientLeft = e.$wrapperEl[0].clientLeft),
              (t = e.activeIndex));
            const n = e.slides
                .eq(t)
                .prevAll(`[data-swiper-slide-index="${r}"]`)
                .eq(0)
                .index(),
              i = e.slides
                .eq(t)
                .nextAll(`[data-swiper-slide-index="${r}"]`)
                .eq(0)
                .index();
            r = void 0 === n ? i : void 0 === i ? n : i - t < t - n ? i : n;
          }
          e.slideTo(r);
        },
        update(e) {
          const t = this,
            n = t.thumbs.swiper;
          if (!n) return;
          const i =
              "auto" === n.params.slidesPerView
                ? n.slidesPerViewDynamic()
                : n.params.slidesPerView,
            r = t.params.thumbs.autoScrollOffset,
            s = r && !n.params.loop;
          if (t.realIndex !== n.realIndex || s) {
            let o,
              a,
              l = n.activeIndex;
            if (n.params.loop) {
              n.slides.eq(l).hasClass(n.params.slideDuplicateClass) &&
                (n.loopFix(),
                (n._clientLeft = n.$wrapperEl[0].clientLeft),
                (l = n.activeIndex));
              const e = n.slides
                  .eq(l)
                  .prevAll(`[data-swiper-slide-index="${t.realIndex}"]`)
                  .eq(0)
                  .index(),
                i = n.slides
                  .eq(l)
                  .nextAll(`[data-swiper-slide-index="${t.realIndex}"]`)
                  .eq(0)
                  .index();
              (o =
                void 0 === e
                  ? i
                  : void 0 === i
                  ? e
                  : i - l == l - e
                  ? l
                  : i - l < l - e
                  ? i
                  : e),
                (a = t.activeIndex > t.previousIndex ? "next" : "prev");
            } else
              (o = t.realIndex), (a = o > t.previousIndex ? "next" : "prev");
            s && (o += "next" === a ? r : -1 * r),
              n.visibleSlidesIndexes &&
                n.visibleSlidesIndexes.indexOf(o) < 0 &&
                (n.params.centeredSlides
                  ? (o =
                      o > l
                        ? o - Math.floor(i / 2) + 1
                        : o + Math.floor(i / 2) - 1)
                  : o > l && (o = o - i + 1),
                n.slideTo(o, e ? 0 : void 0));
          }
          let o = 1;
          const a = t.params.thumbs.slideThumbActiveClass;
          if (
            (t.params.slidesPerView > 1 &&
              !t.params.centeredSlides &&
              (o = t.params.slidesPerView),
            t.params.thumbs.multipleActiveThumbs || (o = 1),
            (o = Math.floor(o)),
            n.slides.removeClass(a),
            n.params.loop || (n.params.virtual && n.params.virtual.enabled))
          )
            for (let e = 0; e < o; e += 1)
              n.$wrapperEl
                .children(`[data-swiper-slide-index="${t.realIndex + e}"]`)
                .addClass(a);
          else
            for (let e = 0; e < o; e += 1)
              n.slides.eq(t.realIndex + e).addClass(a);
        },
      };
      const oe = [
        A,
        D,
        $,
        I,
        N,
        H,
        q,
        {
          name: "mousewheel",
          params: {
            mousewheel: {
              enabled: !1,
              releaseOnEdges: !1,
              invert: !1,
              forceToAxis: !1,
              sensitivity: 1,
              eventsTarged: "container",
            },
          },
          create() {
            c.extend(this, {
              mousewheel: {
                enabled: !1,
                enable: F.enable.bind(this),
                disable: F.disable.bind(this),
                handle: F.handle.bind(this),
                handleMouseEnter: F.handleMouseEnter.bind(this),
                handleMouseLeave: F.handleMouseLeave.bind(this),
                animateSlider: F.animateSlider.bind(this),
                releaseScroll: F.releaseScroll.bind(this),
                lastScrollTime: c.now(),
                lastEventBeforeSnap: void 0,
                recentWheelEvents: [],
              },
            });
          },
          on: {
            init() {
              const e = this;
              !e.params.mousewheel.enabled &&
                e.params.cssMode &&
                e.mousewheel.disable(),
                e.params.mousewheel.enabled && e.mousewheel.enable();
            },
            destroy() {
              const e = this;
              e.params.cssMode && e.mousewheel.enable(),
                e.mousewheel.enabled && e.mousewheel.disable();
            },
          },
        },
        {
          name: "navigation",
          params: {
            navigation: {
              nextEl: null,
              prevEl: null,
              hideOnClick: !1,
              disabledClass: "swiper-button-disabled",
              hiddenClass: "swiper-button-hidden",
              lockClass: "swiper-button-lock",
            },
          },
          create() {
            c.extend(this, {
              navigation: {
                init: W.init.bind(this),
                update: W.update.bind(this),
                destroy: W.destroy.bind(this),
                onNextClick: W.onNextClick.bind(this),
                onPrevClick: W.onPrevClick.bind(this),
              },
            });
          },
          on: {
            init() {
              this.navigation.init(), this.navigation.update();
            },
            toEdge() {
              this.navigation.update();
            },
            fromEdge() {
              this.navigation.update();
            },
            destroy() {
              this.navigation.destroy();
            },
            click(e) {
              const t = this,
                { $nextEl: n, $prevEl: i } = t.navigation;
              if (
                t.params.navigation.hideOnClick &&
                !o(e.target).is(i) &&
                !o(e.target).is(n)
              ) {
                let e;
                n
                  ? (e = n.hasClass(t.params.navigation.hiddenClass))
                  : i && (e = i.hasClass(t.params.navigation.hiddenClass)),
                  !0 === e
                    ? t.emit("navigationShow", t)
                    : t.emit("navigationHide", t),
                  n && n.toggleClass(t.params.navigation.hiddenClass),
                  i && i.toggleClass(t.params.navigation.hiddenClass);
              }
            },
          },
        },
        {
          name: "pagination",
          params: {
            pagination: {
              el: null,
              bulletElement: "span",
              clickable: !1,
              hideOnClick: !1,
              renderBullet: null,
              renderProgressbar: null,
              renderFraction: null,
              renderCustom: null,
              progressbarOpposite: !1,
              type: "bullets",
              dynamicBullets: !1,
              dynamicMainBullets: 1,
              formatFractionCurrent: (e) => e,
              formatFractionTotal: (e) => e,
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
              modifierClass: "swiper-pagination-",
              currentClass: "swiper-pagination-current",
              totalClass: "swiper-pagination-total",
              hiddenClass: "swiper-pagination-hidden",
              progressbarFillClass: "swiper-pagination-progressbar-fill",
              progressbarOppositeClass:
                "swiper-pagination-progressbar-opposite",
              clickableClass: "swiper-pagination-clickable",
              lockClass: "swiper-pagination-lock",
            },
          },
          create() {
            c.extend(this, {
              pagination: {
                init: Y.init.bind(this),
                render: Y.render.bind(this),
                update: Y.update.bind(this),
                destroy: Y.destroy.bind(this),
                dynamicBulletIndex: 0,
              },
            });
          },
          on: {
            init() {
              this.pagination.init(),
                this.pagination.render(),
                this.pagination.update();
            },
            activeIndexChange() {
              const e = this;
              (e.params.loop || void 0 === e.snapIndex) &&
                e.pagination.update();
            },
            snapIndexChange() {
              const e = this;
              e.params.loop || e.pagination.update();
            },
            slidesLengthChange() {
              const e = this;
              e.params.loop && (e.pagination.render(), e.pagination.update());
            },
            snapGridLengthChange() {
              const e = this;
              e.params.loop || (e.pagination.render(), e.pagination.update());
            },
            destroy() {
              this.pagination.destroy();
            },
            click(e) {
              const t = this;
              if (
                t.params.pagination.el &&
                t.params.pagination.hideOnClick &&
                t.pagination.$el.length > 0 &&
                !o(e.target).hasClass(t.params.pagination.bulletClass)
              ) {
                !0 ===
                t.pagination.$el.hasClass(t.params.pagination.hiddenClass)
                  ? t.emit("paginationShow", t)
                  : t.emit("paginationHide", t),
                  t.pagination.$el.toggleClass(t.params.pagination.hiddenClass);
              }
            },
          },
        },
        {
          name: "scrollbar",
          params: {
            scrollbar: {
              el: null,
              dragSize: "auto",
              hide: !1,
              draggable: !1,
              snapOnRelease: !0,
              lockClass: "swiper-scrollbar-lock",
              dragClass: "swiper-scrollbar-drag",
            },
          },
          create() {
            c.extend(this, {
              scrollbar: {
                init: X.init.bind(this),
                destroy: X.destroy.bind(this),
                updateSize: X.updateSize.bind(this),
                setTranslate: X.setTranslate.bind(this),
                setTransition: X.setTransition.bind(this),
                enableDraggable: X.enableDraggable.bind(this),
                disableDraggable: X.disableDraggable.bind(this),
                setDragPosition: X.setDragPosition.bind(this),
                getPointerPosition: X.getPointerPosition.bind(this),
                onDragStart: X.onDragStart.bind(this),
                onDragMove: X.onDragMove.bind(this),
                onDragEnd: X.onDragEnd.bind(this),
                isTouched: !1,
                timeout: null,
                dragTimeout: null,
              },
            });
          },
          on: {
            init() {
              this.scrollbar.init(),
                this.scrollbar.updateSize(),
                this.scrollbar.setTranslate();
            },
            update() {
              this.scrollbar.updateSize();
            },
            resize() {
              this.scrollbar.updateSize();
            },
            observerUpdate() {
              this.scrollbar.updateSize();
            },
            setTranslate() {
              this.scrollbar.setTranslate();
            },
            setTransition(e) {
              this.scrollbar.setTransition(e);
            },
            destroy() {
              this.scrollbar.destroy();
            },
          },
        },
        {
          name: "parallax",
          params: { parallax: { enabled: !1 } },
          create() {
            c.extend(this, {
              parallax: {
                setTransform: V.setTransform.bind(this),
                setTranslate: V.setTranslate.bind(this),
                setTransition: V.setTransition.bind(this),
              },
            });
          },
          on: {
            beforeInit() {
              this.params.parallax.enabled &&
                ((this.params.watchSlidesProgress = !0),
                (this.originalParams.watchSlidesProgress = !0));
            },
            init() {
              this.params.parallax.enabled && this.parallax.setTranslate();
            },
            setTranslate() {
              this.params.parallax.enabled && this.parallax.setTranslate();
            },
            setTransition(e) {
              this.params.parallax.enabled && this.parallax.setTransition(e);
            },
          },
        },
        {
          name: "zoom",
          params: {
            zoom: {
              enabled: !1,
              maxRatio: 3,
              minRatio: 1,
              toggle: !0,
              containerClass: "swiper-zoom-container",
              zoomedSlideClass: "swiper-slide-zoomed",
            },
          },
          create() {
            const e = this,
              t = {
                enabled: !1,
                scale: 1,
                currentScale: 1,
                isScaling: !1,
                gesture: {
                  $slideEl: void 0,
                  slideWidth: void 0,
                  slideHeight: void 0,
                  $imageEl: void 0,
                  $imageWrapEl: void 0,
                  maxRatio: 3,
                },
                image: {
                  isTouched: void 0,
                  isMoved: void 0,
                  currentX: void 0,
                  currentY: void 0,
                  minX: void 0,
                  minY: void 0,
                  maxX: void 0,
                  maxY: void 0,
                  width: void 0,
                  height: void 0,
                  startX: void 0,
                  startY: void 0,
                  touchesStart: {},
                  touchesCurrent: {},
                },
                velocity: {
                  x: void 0,
                  y: void 0,
                  prevPositionX: void 0,
                  prevPositionY: void 0,
                  prevTime: void 0,
                },
              };
            "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out"
              .split(" ")
              .forEach((n) => {
                t[n] = G[n].bind(e);
              }),
              c.extend(e, { zoom: t });
            let n = 1;
            Object.defineProperty(e.zoom, "scale", {
              get: () => n,
              set(t) {
                if (n !== t) {
                  const n = e.zoom.gesture.$imageEl
                      ? e.zoom.gesture.$imageEl[0]
                      : void 0,
                    i = e.zoom.gesture.$slideEl
                      ? e.zoom.gesture.$slideEl[0]
                      : void 0;
                  e.emit("zoomChange", t, n, i);
                }
                n = t;
              },
            });
          },
          on: {
            init() {
              const e = this;
              e.params.zoom.enabled && e.zoom.enable();
            },
            destroy() {
              this.zoom.disable();
            },
            touchStart(e) {
              this.zoom.enabled && this.zoom.onTouchStart(e);
            },
            touchEnd(e) {
              this.zoom.enabled && this.zoom.onTouchEnd(e);
            },
            doubleTap(e) {
              const t = this;
              t.params.zoom.enabled &&
                t.zoom.enabled &&
                t.params.zoom.toggle &&
                t.zoom.toggle(e);
            },
            transitionEnd() {
              const e = this;
              e.zoom.enabled &&
                e.params.zoom.enabled &&
                e.zoom.onTransitionEnd();
            },
            slideChange() {
              const e = this;
              e.zoom.enabled &&
                e.params.zoom.enabled &&
                e.params.cssMode &&
                e.zoom.onTransitionEnd();
            },
          },
        },
        {
          name: "lazy",
          params: {
            lazy: {
              enabled: !1,
              loadPrevNext: !1,
              loadPrevNextAmount: 1,
              loadOnTransitionStart: !1,
              elementClass: "swiper-lazy",
              loadingClass: "swiper-lazy-loading",
              loadedClass: "swiper-lazy-loaded",
              preloaderClass: "swiper-lazy-preloader",
            },
          },
          create() {
            c.extend(this, {
              lazy: {
                initialImageLoaded: !1,
                load: U.load.bind(this),
                loadInSlide: U.loadInSlide.bind(this),
              },
            });
          },
          on: {
            beforeInit() {
              const e = this;
              e.params.lazy.enabled &&
                e.params.preloadImages &&
                (e.params.preloadImages = !1);
            },
            init() {
              const e = this;
              e.params.lazy.enabled &&
                !e.params.loop &&
                0 === e.params.initialSlide &&
                e.lazy.load();
            },
            scroll() {
              const e = this;
              e.params.freeMode && !e.params.freeModeSticky && e.lazy.load();
            },
            resize() {
              const e = this;
              e.params.lazy.enabled && e.lazy.load();
            },
            scrollbarDragMove() {
              const e = this;
              e.params.lazy.enabled && e.lazy.load();
            },
            transitionStart() {
              const e = this;
              e.params.lazy.enabled &&
                (e.params.lazy.loadOnTransitionStart ||
                  (!e.params.lazy.loadOnTransitionStart &&
                    !e.lazy.initialImageLoaded)) &&
                e.lazy.load();
            },
            transitionEnd() {
              const e = this;
              e.params.lazy.enabled &&
                !e.params.lazy.loadOnTransitionStart &&
                e.lazy.load();
            },
            slideChange() {
              const e = this;
              e.params.lazy.enabled && e.params.cssMode && e.lazy.load();
            },
          },
        },
        {
          name: "controller",
          params: { controller: { control: void 0, inverse: !1, by: "slide" } },
          create() {
            c.extend(this, {
              controller: {
                control: this.params.controller.control,
                getInterpolateFunction: K.getInterpolateFunction.bind(this),
                setTranslate: K.setTranslate.bind(this),
                setTransition: K.setTransition.bind(this),
              },
            });
          },
          on: {
            update() {
              const e = this;
              e.controller.control &&
                e.controller.spline &&
                ((e.controller.spline = void 0), delete e.controller.spline);
            },
            resize() {
              const e = this;
              e.controller.control &&
                e.controller.spline &&
                ((e.controller.spline = void 0), delete e.controller.spline);
            },
            observerUpdate() {
              const e = this;
              e.controller.control &&
                e.controller.spline &&
                ((e.controller.spline = void 0), delete e.controller.spline);
            },
            setTranslate(e, t) {
              this.controller.control && this.controller.setTranslate(e, t);
            },
            setTransition(e, t) {
              this.controller.control && this.controller.setTransition(e, t);
            },
          },
        },
        {
          name: "a11y",
          params: {
            a11y: {
              enabled: !0,
              notificationClass: "swiper-notification",
              prevSlideMessage: "Previous slide",
              nextSlideMessage: "Next slide",
              firstSlideMessage: "This is the first slide",
              lastSlideMessage: "This is the last slide",
              paginationBulletMessage: "Go to slide {{index}}",
            },
          },
          create() {
            const e = this;
            c.extend(e, {
              a11y: {
                liveRegion: o(
                  `<span class="${e.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`
                ),
              },
            }),
              Object.keys(Q).forEach((t) => {
                e.a11y[t] = Q[t].bind(e);
              });
          },
          on: {
            init() {
              this.params.a11y.enabled &&
                (this.a11y.init(), this.a11y.updateNavigation());
            },
            toEdge() {
              this.params.a11y.enabled && this.a11y.updateNavigation();
            },
            fromEdge() {
              this.params.a11y.enabled && this.a11y.updateNavigation();
            },
            paginationUpdate() {
              this.params.a11y.enabled && this.a11y.updatePagination();
            },
            destroy() {
              this.params.a11y.enabled && this.a11y.destroy();
            },
          },
        },
        {
          name: "history",
          params: { history: { enabled: !1, replaceState: !1, key: "slides" } },
          create() {
            c.extend(this, {
              history: {
                init: Z.init.bind(this),
                setHistory: Z.setHistory.bind(this),
                setHistoryPopState: Z.setHistoryPopState.bind(this),
                scrollToSlide: Z.scrollToSlide.bind(this),
                destroy: Z.destroy.bind(this),
              },
            });
          },
          on: {
            init() {
              const e = this;
              e.params.history.enabled && e.history.init();
            },
            destroy() {
              const e = this;
              e.params.history.enabled && e.history.destroy();
            },
            transitionEnd() {
              const e = this;
              e.history.initialized &&
                e.history.setHistory(e.params.history.key, e.activeIndex);
            },
            slideChange() {
              const e = this;
              e.history.initialized &&
                e.params.cssMode &&
                e.history.setHistory(e.params.history.key, e.activeIndex);
            },
          },
        },
        {
          name: "hash-navigation",
          params: {
            hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 },
          },
          create() {
            c.extend(this, {
              hashNavigation: {
                initialized: !1,
                init: J.init.bind(this),
                destroy: J.destroy.bind(this),
                setHash: J.setHash.bind(this),
                onHashCange: J.onHashCange.bind(this),
              },
            });
          },
          on: {
            init() {
              const e = this;
              e.params.hashNavigation.enabled && e.hashNavigation.init();
            },
            destroy() {
              const e = this;
              e.params.hashNavigation.enabled && e.hashNavigation.destroy();
            },
            transitionEnd() {
              const e = this;
              e.hashNavigation.initialized && e.hashNavigation.setHash();
            },
            slideChange() {
              const e = this;
              e.hashNavigation.initialized &&
                e.params.cssMode &&
                e.hashNavigation.setHash();
            },
          },
        },
        {
          name: "autoplay",
          params: {
            autoplay: {
              enabled: !1,
              delay: 3e3,
              waitForTransition: !0,
              disableOnInteraction: !0,
              stopOnLastSlide: !1,
              reverseDirection: !1,
            },
          },
          create() {
            const e = this;
            c.extend(e, {
              autoplay: {
                running: !1,
                paused: !1,
                run: ee.run.bind(e),
                start: ee.start.bind(e),
                stop: ee.stop.bind(e),
                pause: ee.pause.bind(e),
                onVisibilityChange() {
                  "hidden" === document.visibilityState &&
                    e.autoplay.running &&
                    e.autoplay.pause(),
                    "visible" === document.visibilityState &&
                      e.autoplay.paused &&
                      (e.autoplay.run(), (e.autoplay.paused = !1));
                },
                onTransitionEnd(t) {
                  e &&
                    !e.destroyed &&
                    e.$wrapperEl &&
                    t.target === this &&
                    (e.$wrapperEl[0].removeEventListener(
                      "transitionend",
                      e.autoplay.onTransitionEnd
                    ),
                    e.$wrapperEl[0].removeEventListener(
                      "webkitTransitionEnd",
                      e.autoplay.onTransitionEnd
                    ),
                    (e.autoplay.paused = !1),
                    e.autoplay.running ? e.autoplay.run() : e.autoplay.stop());
                },
              },
            });
          },
          on: {
            init() {
              const e = this;
              e.params.autoplay.enabled &&
                (e.autoplay.start(),
                document.addEventListener(
                  "visibilitychange",
                  e.autoplay.onVisibilityChange
                ));
            },
            beforeTransitionStart(e, t) {
              const n = this;
              n.autoplay.running &&
                (t || !n.params.autoplay.disableOnInteraction
                  ? n.autoplay.pause(e)
                  : n.autoplay.stop());
            },
            sliderFirstMove() {
              const e = this;
              e.autoplay.running &&
                (e.params.autoplay.disableOnInteraction
                  ? e.autoplay.stop()
                  : e.autoplay.pause());
            },
            touchEnd() {
              const e = this;
              e.params.cssMode &&
                e.autoplay.paused &&
                !e.params.autoplay.disableOnInteraction &&
                e.autoplay.run();
            },
            destroy() {
              const e = this;
              e.autoplay.running && e.autoplay.stop(),
                document.removeEventListener(
                  "visibilitychange",
                  e.autoplay.onVisibilityChange
                );
            },
          },
        },
        {
          name: "effect-fade",
          params: { fadeEffect: { crossFade: !1 } },
          create() {
            c.extend(this, {
              fadeEffect: {
                setTranslate: te.setTranslate.bind(this),
                setTransition: te.setTransition.bind(this),
              },
            });
          },
          on: {
            beforeInit() {
              if ("fade" !== this.params.effect) return;
              this.classNames.push(this.params.containerModifierClass + "fade");
              const e = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !0,
              };
              c.extend(this.params, e), c.extend(this.originalParams, e);
            },
            setTranslate() {
              "fade" === this.params.effect && this.fadeEffect.setTranslate();
            },
            setTransition(e) {
              "fade" === this.params.effect && this.fadeEffect.setTransition(e);
            },
          },
        },
        {
          name: "effect-cube",
          params: {
            cubeEffect: {
              slideShadows: !0,
              shadow: !0,
              shadowOffset: 20,
              shadowScale: 0.94,
            },
          },
          create() {
            c.extend(this, {
              cubeEffect: {
                setTranslate: ne.setTranslate.bind(this),
                setTransition: ne.setTransition.bind(this),
              },
            });
          },
          on: {
            beforeInit() {
              if ("cube" !== this.params.effect) return;
              this.classNames.push(this.params.containerModifierClass + "cube"),
                this.classNames.push(this.params.containerModifierClass + "3d");
              const e = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: !1,
                virtualTranslate: !0,
              };
              c.extend(this.params, e), c.extend(this.originalParams, e);
            },
            setTranslate() {
              "cube" === this.params.effect && this.cubeEffect.setTranslate();
            },
            setTransition(e) {
              "cube" === this.params.effect && this.cubeEffect.setTransition(e);
            },
          },
        },
        {
          name: "effect-flip",
          params: { flipEffect: { slideShadows: !0, limitRotation: !0 } },
          create() {
            c.extend(this, {
              flipEffect: {
                setTranslate: ie.setTranslate.bind(this),
                setTransition: ie.setTransition.bind(this),
              },
            });
          },
          on: {
            beforeInit() {
              if ("flip" !== this.params.effect) return;
              this.classNames.push(this.params.containerModifierClass + "flip"),
                this.classNames.push(this.params.containerModifierClass + "3d");
              const e = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !0,
              };
              c.extend(this.params, e), c.extend(this.originalParams, e);
            },
            setTranslate() {
              "flip" === this.params.effect && this.flipEffect.setTranslate();
            },
            setTransition(e) {
              "flip" === this.params.effect && this.flipEffect.setTransition(e);
            },
          },
        },
        {
          name: "effect-coverflow",
          params: {
            coverflowEffect: {
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: !0,
            },
          },
          create() {
            c.extend(this, {
              coverflowEffect: {
                setTranslate: re.setTranslate.bind(this),
                setTransition: re.setTransition.bind(this),
              },
            });
          },
          on: {
            beforeInit() {
              "coverflow" === this.params.effect &&
                (this.classNames.push(
                  this.params.containerModifierClass + "coverflow"
                ),
                this.classNames.push(this.params.containerModifierClass + "3d"),
                (this.params.watchSlidesProgress = !0),
                (this.originalParams.watchSlidesProgress = !0));
            },
            setTranslate() {
              "coverflow" === this.params.effect &&
                this.coverflowEffect.setTranslate();
            },
            setTransition(e) {
              "coverflow" === this.params.effect &&
                this.coverflowEffect.setTransition(e);
            },
          },
        },
        {
          name: "thumbs",
          params: {
            thumbs: {
              swiper: null,
              multipleActiveThumbs: !0,
              autoScrollOffset: 0,
              slideThumbActiveClass: "swiper-slide-thumb-active",
              thumbsContainerClass: "swiper-container-thumbs",
            },
          },
          create() {
            c.extend(this, {
              thumbs: {
                swiper: null,
                init: se.init.bind(this),
                update: se.update.bind(this),
                onThumbClick: se.onThumbClick.bind(this),
              },
            });
          },
          on: {
            beforeInit() {
              const { thumbs: e } = this.params;
              e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0));
            },
            slideChange() {
              this.thumbs.swiper && this.thumbs.update();
            },
            update() {
              this.thumbs.swiper && this.thumbs.update();
            },
            resize() {
              this.thumbs.swiper && this.thumbs.update();
            },
            observerUpdate() {
              this.thumbs.swiper && this.thumbs.update();
            },
            setTransition(e) {
              const t = this.thumbs.swiper;
              t && t.setTransition(e);
            },
            beforeDestroy() {
              const e = this.thumbs.swiper;
              e && this.thumbs.swiperCreated && e && e.destroy();
            },
          },
        },
      ];
      void 0 === O.use &&
        ((O.use = O.Class.use), (O.installModule = O.Class.installModule)),
        O.use(oe);
      t.a = O;
    },
    ,
    ,
    ,
    function (e, t, n) {
      var i, r;
      /*!
       * imagesLoaded v4.1.4
       * JavaScript is all like "You images are done yet or what?"
       * MIT License
       */ !(function (s, o) {
        "use strict";
        (i = [n(52)]),
          void 0 ===
            (r = function (e) {
              return (function (e, t) {
                var n = e.jQuery,
                  i = e.console;
                function r(e, t) {
                  for (var n in t) e[n] = t[n];
                  return e;
                }
                var s = Array.prototype.slice;
                function o(e, t, a) {
                  if (!(this instanceof o)) return new o(e, t, a);
                  var l,
                    c = e;
                  ("string" == typeof e && (c = document.querySelectorAll(e)),
                  c)
                    ? ((this.elements =
                        ((l = c),
                        Array.isArray(l)
                          ? l
                          : "object" == typeof l && "number" == typeof l.length
                          ? s.call(l)
                          : [l])),
                      (this.options = r({}, this.options)),
                      "function" == typeof t ? (a = t) : r(this.options, t),
                      a && this.on("always", a),
                      this.getImages(),
                      n && (this.jqDeferred = new n.Deferred()),
                      setTimeout(this.check.bind(this)))
                    : i.error("Bad element for imagesLoaded " + (c || e));
                }
                (o.prototype = Object.create(t.prototype)),
                  (o.prototype.options = {}),
                  (o.prototype.getImages = function () {
                    (this.images = []),
                      this.elements.forEach(this.addElementImages, this);
                  }),
                  (o.prototype.addElementImages = function (e) {
                    "IMG" == e.nodeName && this.addImage(e),
                      !0 === this.options.background &&
                        this.addElementBackgroundImages(e);
                    var t = e.nodeType;
                    if (t && a[t]) {
                      for (
                        var n = e.querySelectorAll("img"), i = 0;
                        i < n.length;
                        i++
                      ) {
                        var r = n[i];
                        this.addImage(r);
                      }
                      if ("string" == typeof this.options.background) {
                        var s = e.querySelectorAll(this.options.background);
                        for (i = 0; i < s.length; i++) {
                          var o = s[i];
                          this.addElementBackgroundImages(o);
                        }
                      }
                    }
                  });
                var a = { 1: !0, 9: !0, 11: !0 };
                function l(e) {
                  this.img = e;
                }
                function c(e, t) {
                  (this.url = e), (this.element = t), (this.img = new Image());
                }
                return (
                  (o.prototype.addElementBackgroundImages = function (e) {
                    var t = getComputedStyle(e);
                    if (t)
                      for (
                        var n = /url\((['"])?(.*?)\1\)/gi,
                          i = n.exec(t.backgroundImage);
                        null !== i;

                      ) {
                        var r = i && i[2];
                        r && this.addBackground(r, e),
                          (i = n.exec(t.backgroundImage));
                      }
                  }),
                  (o.prototype.addImage = function (e) {
                    var t = new l(e);
                    this.images.push(t);
                  }),
                  (o.prototype.addBackground = function (e, t) {
                    var n = new c(e, t);
                    this.images.push(n);
                  }),
                  (o.prototype.check = function () {
                    var e = this;
                    function t(t, n, i) {
                      setTimeout(function () {
                        e.progress(t, n, i);
                      });
                    }
                    (this.progressedCount = 0),
                      (this.hasAnyBroken = !1),
                      this.images.length
                        ? this.images.forEach(function (e) {
                            e.once("progress", t), e.check();
                          })
                        : this.complete();
                  }),
                  (o.prototype.progress = function (e, t, n) {
                    this.progressedCount++,
                      (this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded),
                      this.emitEvent("progress", [this, e, t]),
                      this.jqDeferred &&
                        this.jqDeferred.notify &&
                        this.jqDeferred.notify(this, e),
                      this.progressedCount == this.images.length &&
                        this.complete(),
                      this.options.debug && i && i.log("progress: " + n, e, t);
                  }),
                  (o.prototype.complete = function () {
                    var e = this.hasAnyBroken ? "fail" : "done";
                    if (
                      ((this.isComplete = !0),
                      this.emitEvent(e, [this]),
                      this.emitEvent("always", [this]),
                      this.jqDeferred)
                    ) {
                      var t = this.hasAnyBroken ? "reject" : "resolve";
                      this.jqDeferred[t](this);
                    }
                  }),
                  (l.prototype = Object.create(t.prototype)),
                  (l.prototype.check = function () {
                    this.getIsImageComplete()
                      ? this.confirm(
                          0 !== this.img.naturalWidth,
                          "naturalWidth"
                        )
                      : ((this.proxyImage = new Image()),
                        this.proxyImage.addEventListener("load", this),
                        this.proxyImage.addEventListener("error", this),
                        this.img.addEventListener("load", this),
                        this.img.addEventListener("error", this),
                        (this.proxyImage.src = this.img.src));
                  }),
                  (l.prototype.getIsImageComplete = function () {
                    return this.img.complete && this.img.naturalWidth;
                  }),
                  (l.prototype.confirm = function (e, t) {
                    (this.isLoaded = e),
                      this.emitEvent("progress", [this, this.img, t]);
                  }),
                  (l.prototype.handleEvent = function (e) {
                    var t = "on" + e.type;
                    this[t] && this[t](e);
                  }),
                  (l.prototype.onload = function () {
                    this.confirm(!0, "onload"), this.unbindEvents();
                  }),
                  (l.prototype.onerror = function () {
                    this.confirm(!1, "onerror"), this.unbindEvents();
                  }),
                  (l.prototype.unbindEvents = function () {
                    this.proxyImage.removeEventListener("load", this),
                      this.proxyImage.removeEventListener("error", this),
                      this.img.removeEventListener("load", this),
                      this.img.removeEventListener("error", this);
                  }),
                  (c.prototype = Object.create(l.prototype)),
                  (c.prototype.check = function () {
                    this.img.addEventListener("load", this),
                      this.img.addEventListener("error", this),
                      (this.img.src = this.url),
                      this.getIsImageComplete() &&
                        (this.confirm(
                          0 !== this.img.naturalWidth,
                          "naturalWidth"
                        ),
                        this.unbindEvents());
                  }),
                  (c.prototype.unbindEvents = function () {
                    this.img.removeEventListener("load", this),
                      this.img.removeEventListener("error", this);
                  }),
                  (c.prototype.confirm = function (e, t) {
                    (this.isLoaded = e),
                      this.emitEvent("progress", [this, this.element, t]);
                  }),
                  (o.makeJQueryPlugin = function (t) {
                    (t = t || e.jQuery) &&
                      ((n = t).fn.imagesLoaded = function (e, t) {
                        return new o(this, e, t).jqDeferred.promise(n(this));
                      });
                  }),
                  o.makeJQueryPlugin(),
                  o
                );
              })(s, e);
            }.apply(t, i)) || (e.exports = r);
      })("undefined" != typeof window ? window : this);
    },
    function (e, t, n) {
      e.exports = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i);
          }
        }
        function t(t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        }
        function n() {
          return (n =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                  Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
              }
              return e;
            }).apply(this, arguments);
        }
        function i(e, t) {
          (e.prototype = Object.create(t.prototype)),
            (e.prototype.constructor = e),
            (e.__proto__ = t);
        }
        function r(e) {
          return (r = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        function s(e, t) {
          return (s =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        function o(e, t, n) {
          return (o = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (e) {
              return !1;
            }
          })()
            ? Reflect.construct
            : function (e, t, n) {
                var i = [null];
                i.push.apply(i, t);
                var r = new (Function.bind.apply(e, i))();
                return n && s(r, n.prototype), r;
              }).apply(null, arguments);
        }
        function a(e) {
          var t = "function" == typeof Map ? new Map() : void 0;
          return (a = function (e) {
            if (
              null === e ||
              -1 === Function.toString.call(e).indexOf("[native code]")
            )
              return e;
            if ("function" != typeof e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            if (void 0 !== t) {
              if (t.has(e)) return t.get(e);
              t.set(e, n);
            }
            function n() {
              return o(e, arguments, r(this).constructor);
            }
            return (
              (n.prototype = Object.create(e.prototype, {
                constructor: {
                  value: n,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              s(n, e)
            );
          })(e);
        }
        function l(e, t) {
          try {
            var n = e();
          } catch (e) {
            return t(e);
          }
          return n && n.then ? n.then(void 0, t) : n;
        }
        var c;
        "undefined" != typeof Symbol &&
          (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))),
          "undefined" != typeof Symbol &&
            (Symbol.asyncIterator ||
              (Symbol.asyncIterator = Symbol("Symbol.asyncIterator"))),
          (function (e) {
            (e[(e.off = 0)] = "off"),
              (e[(e.error = 1)] = "error"),
              (e[(e.warning = 2)] = "warning"),
              (e[(e.info = 3)] = "info"),
              (e[(e.debug = 4)] = "debug");
          })(c || (c = {}));
        var u = c.off,
          d = (function () {
            function e(e) {
              this.t = e;
            }
            (e.getLevel = function () {
              return u;
            }),
              (e.setLevel = function (e) {
                return (u = c[e]);
              });
            var t = e.prototype;
            return (
              (t.error = function () {
                for (
                  var e = arguments.length, t = new Array(e), n = 0;
                  n < e;
                  n++
                )
                  t[n] = arguments[n];
                this.i(console.error, c.error, t);
              }),
              (t.warn = function () {
                for (
                  var e = arguments.length, t = new Array(e), n = 0;
                  n < e;
                  n++
                )
                  t[n] = arguments[n];
                this.i(console.warn, c.warning, t);
              }),
              (t.info = function () {
                for (
                  var e = arguments.length, t = new Array(e), n = 0;
                  n < e;
                  n++
                )
                  t[n] = arguments[n];
                this.i(console.info, c.info, t);
              }),
              (t.debug = function () {
                for (
                  var e = arguments.length, t = new Array(e), n = 0;
                  n < e;
                  n++
                )
                  t[n] = arguments[n];
                this.i(console.log, c.debug, t);
              }),
              (t.i = function (t, n, i) {
                n <= e.getLevel() &&
                  t.apply(console, ["[" + this.t + "] "].concat(i));
              }),
              e
            );
          })(),
          h = C,
          p = b,
          f = y,
          m = w,
          g = S,
          v = new RegExp(
            [
              "(\\\\.)",
              "(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?",
            ].join("|"),
            "g"
          );
        function y(e, t) {
          for (
            var n,
              i = [],
              r = 0,
              s = 0,
              o = "",
              a = (t && t.delimiter) || "/",
              l = (t && t.whitelist) || void 0,
              c = !1;
            null !== (n = v.exec(e));

          ) {
            var u = n[0],
              d = n[1],
              h = n.index;
            if (((o += e.slice(s, h)), (s = h + u.length), d))
              (o += d[1]), (c = !0);
            else {
              var p = "",
                f = n[2],
                m = n[3],
                g = n[4],
                y = n[5];
              if (!c && o.length) {
                var b = o.length - 1,
                  w = o[b];
                (!l || l.indexOf(w) > -1) && ((p = w), (o = o.slice(0, b)));
              }
              o && (i.push(o), (o = ""), (c = !1));
              var E = m || g,
                S = p || a;
              i.push({
                name: f || r++,
                prefix: p,
                delimiter: S,
                optional: "?" === y || "*" === y,
                repeat: "+" === y || "*" === y,
                pattern: E ? T(E) : "[^" + x(S === a ? S : S + a) + "]+?",
              });
            }
          }
          return (o || s < e.length) && i.push(o + e.substr(s)), i;
        }
        function b(e, t) {
          return function (n, i) {
            var r = e.exec(n);
            if (!r) return !1;
            for (
              var s = r[0],
                o = r.index,
                a = {},
                l = (i && i.decode) || decodeURIComponent,
                c = 1;
              c < r.length;
              c++
            )
              if (void 0 !== r[c]) {
                var u = t[c - 1];
                a[u.name] = u.repeat
                  ? r[c].split(u.delimiter).map(function (e) {
                      return l(e, u);
                    })
                  : l(r[c], u);
              }
            return { path: s, index: o, params: a };
          };
        }
        function w(e, t) {
          for (var n = new Array(e.length), i = 0; i < e.length; i++)
            "object" == typeof e[i] &&
              (n[i] = new RegExp("^(?:" + e[i].pattern + ")$", E(t)));
          return function (t, i) {
            for (
              var r = "",
                s = (i && i.encode) || encodeURIComponent,
                o = !i || !1 !== i.validate,
                a = 0;
              a < e.length;
              a++
            ) {
              var l = e[a];
              if ("string" != typeof l) {
                var c,
                  u = t ? t[l.name] : void 0;
                if (Array.isArray(u)) {
                  if (!l.repeat)
                    throw new TypeError(
                      'Expected "' + l.name + '" to not repeat, but got array'
                    );
                  if (0 === u.length) {
                    if (l.optional) continue;
                    throw new TypeError(
                      'Expected "' + l.name + '" to not be empty'
                    );
                  }
                  for (var d = 0; d < u.length; d++) {
                    if (((c = s(u[d], l)), o && !n[a].test(c)))
                      throw new TypeError(
                        'Expected all "' +
                          l.name +
                          '" to match "' +
                          l.pattern +
                          '"'
                      );
                    r += (0 === d ? l.prefix : l.delimiter) + c;
                  }
                } else if (
                  "string" != typeof u &&
                  "number" != typeof u &&
                  "boolean" != typeof u
                ) {
                  if (!l.optional)
                    throw new TypeError(
                      'Expected "' +
                        l.name +
                        '" to be ' +
                        (l.repeat ? "an array" : "a string")
                    );
                } else {
                  if (((c = s(String(u), l)), o && !n[a].test(c)))
                    throw new TypeError(
                      'Expected "' +
                        l.name +
                        '" to match "' +
                        l.pattern +
                        '", but got "' +
                        c +
                        '"'
                    );
                  r += l.prefix + c;
                }
              } else r += l;
            }
            return r;
          };
        }
        function x(e) {
          return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
        }
        function T(e) {
          return e.replace(/([=!:$/()])/g, "\\$1");
        }
        function E(e) {
          return e && e.sensitive ? "" : "i";
        }
        function S(e, t, n) {
          for (
            var i = (n = n || {}).strict,
              r = !1 !== n.start,
              s = !1 !== n.end,
              o = n.delimiter || "/",
              a = []
                .concat(n.endsWith || [])
                .map(x)
                .concat("$")
                .join("|"),
              l = r ? "^" : "",
              c = 0;
            c < e.length;
            c++
          ) {
            var u = e[c];
            if ("string" == typeof u) l += x(u);
            else {
              var d = u.repeat
                ? "(?:" +
                  u.pattern +
                  ")(?:" +
                  x(u.delimiter) +
                  "(?:" +
                  u.pattern +
                  "))*"
                : u.pattern;
              t && t.push(u),
                (l += u.optional
                  ? u.prefix
                    ? "(?:" + x(u.prefix) + "(" + d + "))?"
                    : "(" + d + ")?"
                  : x(u.prefix) + "(" + d + ")");
            }
          }
          if (s)
            i || (l += "(?:" + x(o) + ")?"),
              (l += "$" === a ? "$" : "(?=" + a + ")");
          else {
            var h = e[e.length - 1],
              p = "string" == typeof h ? h[h.length - 1] === o : void 0 === h;
            i || (l += "(?:" + x(o) + "(?=" + a + "))?"),
              p || (l += "(?=" + x(o) + "|" + a + ")");
          }
          return new RegExp(l, E(n));
        }
        function C(e, t, n) {
          return e instanceof RegExp
            ? (function (e, t) {
                if (!t) return e;
                var n = e.source.match(/\((?!\?)/g);
                if (n)
                  for (var i = 0; i < n.length; i++)
                    t.push({
                      name: i,
                      prefix: null,
                      delimiter: null,
                      optional: !1,
                      repeat: !1,
                      pattern: null,
                    });
                return e;
              })(e, t)
            : Array.isArray(e)
            ? (function (e, t, n) {
                for (var i = [], r = 0; r < e.length; r++)
                  i.push(C(e[r], t, n).source);
                return new RegExp("(?:" + i.join("|") + ")", E(n));
              })(e, t, n)
            : (function (e, t, n) {
                return S(y(e, n), t, n);
              })(e, t, n);
        }
        (h.match = function (e, t) {
          var n = [];
          return b(C(e, n, t), n);
        }),
          (h.regexpToFunction = p),
          (h.parse = f),
          (h.compile = function (e, t) {
            return w(y(e, t), t);
          }),
          (h.tokensToFunction = m),
          (h.tokensToRegExp = g);
        var _ = {
            container: "container",
            history: "history",
            namespace: "namespace",
            prefix: "data-barba",
            prevent: "prevent",
            wrapper: "wrapper",
          },
          k = new ((function () {
            function e() {
              (this.o = _), (this.u = new DOMParser());
            }
            var t = e.prototype;
            return (
              (t.toString = function (e) {
                return e.outerHTML;
              }),
              (t.toDocument = function (e) {
                return this.u.parseFromString(e, "text/html");
              }),
              (t.toElement = function (e) {
                var t = document.createElement("div");
                return (t.innerHTML = e), t;
              }),
              (t.getHtml = function (e) {
                return (
                  void 0 === e && (e = document),
                  this.toString(e.documentElement)
                );
              }),
              (t.getWrapper = function (e) {
                return (
                  void 0 === e && (e = document),
                  e.querySelector(
                    "[" + this.o.prefix + '="' + this.o.wrapper + '"]'
                  )
                );
              }),
              (t.getContainer = function (e) {
                return (
                  void 0 === e && (e = document),
                  e.querySelector(
                    "[" + this.o.prefix + '="' + this.o.container + '"]'
                  )
                );
              }),
              (t.removeContainer = function (e) {
                document.body.contains(e) && e.parentNode.removeChild(e);
              }),
              (t.addContainer = function (e, t) {
                var n = this.getContainer();
                n ? this.s(e, n) : t.appendChild(e);
              }),
              (t.getNamespace = function (e) {
                void 0 === e && (e = document);
                var t = e.querySelector(
                  "[" + this.o.prefix + "-" + this.o.namespace + "]"
                );
                return t
                  ? t.getAttribute(this.o.prefix + "-" + this.o.namespace)
                  : null;
              }),
              (t.getHref = function (e) {
                if (e.tagName && "a" === e.tagName.toLowerCase()) {
                  if ("string" == typeof e.href) return e.href;
                  var t =
                    e.getAttribute("href") || e.getAttribute("xlink:href");
                  if (t) return this.resolveUrl(t.baseVal || t);
                }
                return null;
              }),
              (t.resolveUrl = function () {
                for (
                  var e = arguments.length, t = new Array(e), n = 0;
                  n < e;
                  n++
                )
                  t[n] = arguments[n];
                var i = t.length;
                if (0 === i)
                  throw new Error(
                    "resolveUrl requires at least one argument; got none."
                  );
                var r = document.createElement("base");
                if (((r.href = arguments[0]), 1 === i)) return r.href;
                var s = document.getElementsByTagName("head")[0];
                s.insertBefore(r, s.firstChild);
                for (var o, a = document.createElement("a"), l = 1; l < i; l++)
                  (a.href = arguments[l]), (r.href = o = a.href);
                return s.removeChild(r), o;
              }),
              (t.s = function (e, t) {
                t.parentNode.insertBefore(e, t.nextSibling);
              }),
              e
            );
          })())(),
          M = new ((function () {
            function e() {
              (this.h = []), (this.v = -1);
            }
            var i = e.prototype;
            return (
              (i.init = function (e, t) {
                this.l = "barba";
                var n = {
                  ns: t,
                  scroll: { x: window.scrollX, y: window.scrollY },
                  url: e,
                };
                this.h.push(n), (this.v = 0);
                var i = { from: this.l, index: 0, states: [].concat(this.h) };
                window.history && window.history.replaceState(i, "", e);
              }),
              (i.change = function (e, t, n) {
                if (n && n.state) {
                  var i = n.state,
                    r = i.index;
                  (t = this.m(this.v - r)),
                    this.replace(i.states),
                    (this.v = r);
                } else this.add(e, t);
                return t;
              }),
              (i.add = function (e, t) {
                var n = this.size,
                  i = this.p(t),
                  r = {
                    ns: "tmp",
                    scroll: { x: window.scrollX, y: window.scrollY },
                    url: e,
                  };
                this.h.push(r), (this.v = n);
                var s = { from: this.l, index: n, states: [].concat(this.h) };
                switch (i) {
                  case "push":
                    window.history && window.history.pushState(s, "", e);
                    break;
                  case "replace":
                    window.history && window.history.replaceState(s, "", e);
                }
              }),
              (i.update = function (e, t) {
                var i = t || this.v,
                  r = n({}, this.get(i), {}, e);
                this.set(i, r);
              }),
              (i.remove = function (e) {
                e ? this.h.splice(e, 1) : this.h.pop(), this.v--;
              }),
              (i.clear = function () {
                (this.h = []), (this.v = -1);
              }),
              (i.replace = function (e) {
                this.h = e;
              }),
              (i.get = function (e) {
                return this.h[e];
              }),
              (i.set = function (e, t) {
                return (this.h[e] = t);
              }),
              (i.p = function (e) {
                var t = "push",
                  n = e,
                  i = _.prefix + "-" + _.history;
                return (
                  n.hasAttribute &&
                    n.hasAttribute(i) &&
                    (t = n.getAttribute(i)),
                  t
                );
              }),
              (i.m = function (e) {
                return Math.abs(e) > 1
                  ? e > 0
                    ? "forward"
                    : "back"
                  : 0 === e
                  ? "popstate"
                  : e > 0
                  ? "back"
                  : "forward";
              }),
              t(e, [
                {
                  key: "current",
                  get: function () {
                    return this.h[this.v];
                  },
                },
                {
                  key: "state",
                  get: function () {
                    return this.h[this.h.length - 1];
                  },
                },
                {
                  key: "previous",
                  get: function () {
                    return this.v < 1 ? null : this.h[this.v - 1];
                  },
                },
                {
                  key: "size",
                  get: function () {
                    return this.h.length;
                  },
                },
              ]),
              e
            );
          })())(),
          L = function (e, t) {
            try {
              var n = (function () {
                if (!t.next.html)
                  return Promise.resolve(e).then(function (e) {
                    var n = t.next;
                    if (e) {
                      var i = k.toElement(e);
                      (n.namespace = k.getNamespace(i)),
                        (n.container = k.getContainer(i)),
                        (n.html = e),
                        M.update({ ns: n.namespace });
                      var r = k.toDocument(e);
                      document.title = r.title;
                    }
                  });
              })();
              return Promise.resolve(
                n && n.then ? n.then(function () {}) : void 0
              );
            } catch (e) {
              return Promise.reject(e);
            }
          },
          P = h,
          O = {
            __proto__: null,
            update: L,
            nextTick: function () {
              return new Promise(function (e) {
                window.requestAnimationFrame(e);
              });
            },
            pathToRegexp: P,
          },
          A = function () {
            return window.location.origin;
          },
          D = function (e) {
            return void 0 === e && (e = window.location.href), z(e).port;
          },
          z = function (e) {
            var t,
              n = e.match(/:\d+/);
            if (null === n)
              /^http/.test(e) && (t = 80), /^https/.test(e) && (t = 443);
            else {
              var i = n[0].substring(1);
              t = parseInt(i, 10);
            }
            var r,
              s = e.replace(A(), ""),
              o = {},
              a = s.indexOf("#");
            a >= 0 && ((r = s.slice(a + 1)), (s = s.slice(0, a)));
            var l = s.indexOf("?");
            return (
              l >= 0 && ((o = $(s.slice(l + 1))), (s = s.slice(0, l))),
              { hash: r, path: s, port: t, query: o }
            );
          },
          $ = function (e) {
            return e.split("&").reduce(function (e, t) {
              var n = t.split("=");
              return (e[n[0]] = n[1]), e;
            }, {});
          },
          I = function (e) {
            return (
              void 0 === e && (e = window.location.href),
              e.replace(/(\/#.*|\/|#.*)$/, "")
            );
          },
          j = {
            __proto__: null,
            getHref: function () {
              return window.location.href;
            },
            getOrigin: A,
            getPort: D,
            getPath: function (e) {
              return void 0 === e && (e = window.location.href), z(e).path;
            },
            parse: z,
            parseQuery: $,
            clean: I,
          };
        function N(e, t, n) {
          return (
            void 0 === t && (t = 2e3),
            new Promise(function (i, r) {
              var s = new XMLHttpRequest();
              (s.onreadystatechange = function () {
                if (s.readyState === XMLHttpRequest.DONE)
                  if (200 === s.status) i(s.responseText);
                  else if (s.status) {
                    var t = { status: s.status, statusText: s.statusText };
                    n(e, t), r(t);
                  }
              }),
                (s.ontimeout = function () {
                  var i = new Error("Timeout error [" + t + "]");
                  n(e, i), r(i);
                }),
                (s.onerror = function () {
                  var t = new Error("Fetch error");
                  n(e, t), r(t);
                }),
                s.open("GET", e),
                (s.timeout = t),
                s.setRequestHeader(
                  "Accept",
                  "text/html,application/xhtml+xml,application/xml"
                ),
                s.setRequestHeader("x-barba", "yes"),
                s.send();
            })
          );
        }
        var R = function (e) {
          return (
            !!e &&
            ("object" == typeof e || "function" == typeof e) &&
            "function" == typeof e.then
          );
        };
        function H(e, t) {
          return (
            void 0 === t && (t = {}),
            function () {
              for (
                var n = arguments.length, i = new Array(n), r = 0;
                r < n;
                r++
              )
                i[r] = arguments[r];
              var s = !1,
                o = new Promise(function (n, r) {
                  t.async = function () {
                    return (
                      (s = !0),
                      function (e, t) {
                        e ? r(e) : n(t);
                      }
                    );
                  };
                  var o = e.apply(t, i);
                  s || (R(o) ? o.then(n, r) : n(o));
                });
              return o;
            }
          );
        }
        var B = new ((function (e) {
            function t() {
              var t;
              return (
                ((t = e.call(this) || this).logger = new d("@barba/core")),
                (t.all = [
                  "ready",
                  "page",
                  "reset",
                  "currentAdded",
                  "currentRemoved",
                  "nextAdded",
                  "nextRemoved",
                  "beforeOnce",
                  "once",
                  "afterOnce",
                  "before",
                  "beforeLeave",
                  "leave",
                  "afterLeave",
                  "beforeEnter",
                  "enter",
                  "afterEnter",
                  "after",
                ]),
                (t.registered = new Map()),
                t.init(),
                t
              );
            }
            i(t, e);
            var n = t.prototype;
            return (
              (n.init = function () {
                var e = this;
                this.registered.clear(),
                  this.all.forEach(function (t) {
                    e[t] ||
                      (e[t] = function (n, i) {
                        e.registered.has(t) || e.registered.set(t, new Set()),
                          e.registered.get(t).add({ ctx: i || {}, fn: n });
                      });
                  });
              }),
              (n.do = function (e) {
                for (
                  var t = this,
                    n = arguments.length,
                    i = new Array(n > 1 ? n - 1 : 0),
                    r = 1;
                  r < n;
                  r++
                )
                  i[r - 1] = arguments[r];
                if (this.registered.has(e)) {
                  var s = Promise.resolve();
                  return (
                    this.registered.get(e).forEach(function (e) {
                      s = s.then(function () {
                        return H(e.fn, e.ctx).apply(void 0, i);
                      });
                    }),
                    s.catch(function (n) {
                      t.logger.debug("Hook error [" + e + "]"),
                        t.logger.error(n);
                    })
                  );
                }
                return Promise.resolve();
              }),
              (n.clear = function () {
                var e = this;
                this.all.forEach(function (t) {
                  delete e[t];
                }),
                  this.init();
              }),
              (n.help = function () {
                this.logger.info("Available hooks: " + this.all.join(","));
                var e = [];
                this.registered.forEach(function (t, n) {
                  return e.push(n);
                }),
                  this.logger.info("Registered hooks: " + e.join(","));
              }),
              t
            );
          })(function () {}))(),
          q = (function () {
            function e(e) {
              if (((this.P = []), "boolean" == typeof e)) this.g = e;
              else {
                var t = Array.isArray(e) ? e : [e];
                this.P = t.map(function (e) {
                  return P(e);
                });
              }
            }
            return (
              (e.prototype.checkHref = function (e) {
                if ("boolean" == typeof this.g) return this.g;
                var t = z(e).path;
                return this.P.some(function (e) {
                  return null !== e.exec(t);
                });
              }),
              e
            );
          })(),
          F = (function (e) {
            function t(t) {
              var n;
              return ((n = e.call(this, t) || this).k = new Map()), n;
            }
            i(t, e);
            var r = t.prototype;
            return (
              (r.set = function (e, t, n) {
                return (
                  this.k.set(e, { action: n, request: t }),
                  { action: n, request: t }
                );
              }),
              (r.get = function (e) {
                return this.k.get(e);
              }),
              (r.getRequest = function (e) {
                return this.k.get(e).request;
              }),
              (r.getAction = function (e) {
                return this.k.get(e).action;
              }),
              (r.has = function (e) {
                return !this.checkHref(e) && this.k.has(e);
              }),
              (r.delete = function (e) {
                return this.k.delete(e);
              }),
              (r.update = function (e, t) {
                var i = n({}, this.k.get(e), {}, t);
                return this.k.set(e, i), i;
              }),
              t
            );
          })(q),
          W = function () {
            return !window.history.pushState;
          },
          Y = function (e) {
            return !e.el || !e.href;
          },
          X = function (e) {
            var t = e.event;
            return (
              t.which > 1 || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey
            );
          },
          V = function (e) {
            var t = e.el;
            return t.hasAttribute("target") && "_blank" === t.target;
          },
          G = function (e) {
            var t = e.el;
            return (
              (void 0 !== t.protocol &&
                window.location.protocol !== t.protocol) ||
              (void 0 !== t.hostname && window.location.hostname !== t.hostname)
            );
          },
          U = function (e) {
            var t = e.el;
            return void 0 !== t.port && D() !== D(t.href);
          },
          K = function (e) {
            var t = e.el;
            return (
              t.getAttribute && "string" == typeof t.getAttribute("download")
            );
          },
          Q = function (e) {
            return e.el.hasAttribute(_.prefix + "-" + _.prevent);
          },
          Z = function (e) {
            return Boolean(
              e.el.closest("[" + _.prefix + "-" + _.prevent + '="all"]')
            );
          },
          J = function (e) {
            var t = e.href;
            return I(t) === I() && D(t) === D();
          },
          ee = (function (e) {
            function t(t) {
              var n;
              return (
                ((n = e.call(this, t) || this).suite = []),
                (n.tests = new Map()),
                n.init(),
                n
              );
            }
            i(t, e);
            var n = t.prototype;
            return (
              (n.init = function () {
                this.add("pushState", W),
                  this.add("exists", Y),
                  this.add("newTab", X),
                  this.add("blank", V),
                  this.add("corsDomain", G),
                  this.add("corsPort", U),
                  this.add("download", K),
                  this.add("preventSelf", Q),
                  this.add("preventAll", Z),
                  this.add("sameUrl", J, !1);
              }),
              (n.add = function (e, t, n) {
                void 0 === n && (n = !0),
                  this.tests.set(e, t),
                  n && this.suite.push(e);
              }),
              (n.run = function (e, t, n, i) {
                return this.tests.get(e)({ el: t, event: n, href: i });
              }),
              (n.checkLink = function (e, t, n) {
                var i = this;
                return this.suite.some(function (r) {
                  return i.run(r, e, t, n);
                });
              }),
              t
            );
          })(q),
          te = (function (e) {
            function t(n, i) {
              var r;
              void 0 === i && (i = "Barba error");
              for (
                var s = arguments.length,
                  o = new Array(s > 2 ? s - 2 : 0),
                  a = 2;
                a < s;
                a++
              )
                o[a - 2] = arguments[a];
              return (
                ((r = e.call.apply(e, [this].concat(o)) || this).error = n),
                (r.label = i),
                Error.captureStackTrace &&
                  Error.captureStackTrace(
                    (function (e) {
                      if (void 0 === e)
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called"
                        );
                      return e;
                    })(r),
                    t
                  ),
                (r.name = "BarbaError"),
                r
              );
            }
            return i(t, e), t;
          })(a(Error)),
          ne = (function () {
            function e(e) {
              void 0 === e && (e = []),
                (this.logger = new d("@barba/core")),
                (this.all = []),
                (this.page = []),
                (this.once = []),
                (this.A = [
                  { name: "namespace", type: "strings" },
                  { name: "custom", type: "function" },
                ]),
                e && (this.all = this.all.concat(e)),
                this.update();
            }
            var t = e.prototype;
            return (
              (t.add = function (e, t) {
                switch (e) {
                  case "rule":
                    this.A.splice(t.position || 0, 0, t.value);
                    break;
                  case "transition":
                  default:
                    this.all.push(t);
                }
                this.update();
              }),
              (t.resolve = function (e, t) {
                var n = this;
                void 0 === t && (t = {});
                var i = t.once ? this.once : this.page;
                i = i.filter(
                  t.self
                    ? function (e) {
                        return e.name && "self" === e.name;
                      }
                    : function (e) {
                        return !e.name || "self" !== e.name;
                      }
                );
                var r = new Map(),
                  s = i.find(function (i) {
                    var s = !0,
                      o = {};
                    return (
                      !(!t.self || "self" !== i.name) ||
                      (n.A.reverse().forEach(function (t) {
                        s &&
                          ((s = n.R(i, t, e, o)),
                          i.from &&
                            i.to &&
                            (s =
                              n.R(i, t, e, o, "from") && n.R(i, t, e, o, "to")),
                          i.from && !i.to && (s = n.R(i, t, e, o, "from")),
                          !i.from && i.to && (s = n.R(i, t, e, o, "to")));
                      }),
                      r.set(i, o),
                      s)
                    );
                  }),
                  o = r.get(s),
                  a = [];
                if (
                  (a.push(t.once ? "once" : "page"),
                  t.self && a.push("self"),
                  o)
                ) {
                  var l,
                    c = [s];
                  Object.keys(o).length > 0 && c.push(o),
                    (l = this.logger).info.apply(
                      l,
                      ["Transition found [" + a.join(",") + "]"].concat(c)
                    );
                } else
                  this.logger.info("No transition found [" + a.join(",") + "]");
                return s;
              }),
              (t.update = function () {
                var e = this;
                (this.all = this.all
                  .map(function (t) {
                    return e.T(t);
                  })
                  .sort(function (e, t) {
                    return e.priority - t.priority;
                  })
                  .reverse()
                  .map(function (e) {
                    return delete e.priority, e;
                  })),
                  (this.page = this.all.filter(function (e) {
                    return void 0 !== e.leave || void 0 !== e.enter;
                  })),
                  (this.once = this.all.filter(function (e) {
                    return void 0 !== e.once;
                  }));
              }),
              (t.R = function (e, t, n, i, r) {
                var s = !0,
                  o = !1,
                  a = e,
                  l = t.name,
                  c = l,
                  u = l,
                  d = l,
                  h = r ? a[r] : a,
                  p = "to" === r ? n.next : n.current;
                if (r ? h && h[l] : h[l]) {
                  switch (t.type) {
                    case "strings":
                    default:
                      var f = Array.isArray(h[c]) ? h[c] : [h[c]];
                      p[c] && -1 !== f.indexOf(p[c]) && (o = !0),
                        -1 === f.indexOf(p[c]) && (s = !1);
                      break;
                    case "object":
                      var m = Array.isArray(h[u]) ? h[u] : [h[u]];
                      p[u]
                        ? (p[u].name && -1 !== m.indexOf(p[u].name) && (o = !0),
                          -1 === m.indexOf(p[u].name) && (s = !1))
                        : (s = !1);
                      break;
                    case "function":
                      h[d](n) ? (o = !0) : (s = !1);
                  }
                  o &&
                    (r
                      ? ((i[r] = i[r] || {}), (i[r][l] = a[r][l]))
                      : (i[l] = a[l]));
                }
                return s;
              }),
              (t.O = function (e, t, n) {
                var i = 0;
                return (
                  (e[t] || (e.from && e.from[t]) || (e.to && e.to[t])) &&
                    ((i += Math.pow(10, n)),
                    e.from && e.from[t] && (i += 1),
                    e.to && e.to[t] && (i += 2)),
                  i
                );
              }),
              (t.T = function (e) {
                var t = this;
                e.priority = 0;
                var n = 0;
                return (
                  this.A.forEach(function (i, r) {
                    n += t.O(e, i.name, r + 1);
                  }),
                  (e.priority = n),
                  e
                );
              }),
              e
            );
          })(),
          ie = (function () {
            function e(e) {
              void 0 === e && (e = []),
                (this.logger = new d("@barba/core")),
                (this.S = !1),
                (this.store = new ne(e));
            }
            var n = e.prototype;
            return (
              (n.get = function (e, t) {
                return this.store.resolve(e, t);
              }),
              (n.doOnce = function (e) {
                var t = e.data,
                  n = e.transition;
                try {
                  var i = function () {
                      r.S = !1;
                    },
                    r = this,
                    s = n || {};
                  r.S = !0;
                  var o = l(
                    function () {
                      return Promise.resolve(r.j("beforeOnce", t, s)).then(
                        function () {
                          return Promise.resolve(r.once(t, s)).then(
                            function () {
                              return Promise.resolve(
                                r.j("afterOnce", t, s)
                              ).then(function () {});
                            }
                          );
                        }
                      );
                    },
                    function (e) {
                      (r.S = !1),
                        r.logger.debug("Transition error [before/after/once]"),
                        r.logger.error(e);
                    }
                  );
                  return Promise.resolve(o && o.then ? o.then(i) : i());
                } catch (e) {
                  return Promise.reject(e);
                }
              }),
              (n.doPage = function (e) {
                var t = e.data,
                  n = e.transition,
                  i = e.page,
                  r = e.wrapper;
                try {
                  var s = function (e) {
                      if (o) return e;
                      a.S = !1;
                    },
                    o = !1,
                    a = this,
                    c = n || {},
                    u = !0 === c.sync || !1;
                  a.S = !0;
                  var d = l(
                    function () {
                      function e() {
                        return Promise.resolve(a.j("before", t, c)).then(
                          function () {
                            function e(e) {
                              return Promise.resolve(a.remove(t)).then(
                                function () {
                                  return Promise.resolve(
                                    a.j("after", t, c)
                                  ).then(function () {});
                                }
                              );
                            }
                            var n = (function () {
                              if (u)
                                return l(
                                  function () {
                                    return Promise.resolve(a.add(t, r)).then(
                                      function () {
                                        return Promise.resolve(
                                          a.j("beforeLeave", t, c)
                                        ).then(function () {
                                          return Promise.resolve(
                                            a.j("beforeEnter", t, c)
                                          ).then(function () {
                                            return Promise.resolve(
                                              Promise.all([
                                                a.leave(t, c),
                                                a.enter(t, c),
                                              ])
                                            ).then(function () {
                                              return Promise.resolve(
                                                a.j("afterLeave", t, c)
                                              ).then(function () {
                                                return Promise.resolve(
                                                  a.j("afterEnter", t, c)
                                                ).then(function () {});
                                              });
                                            });
                                          });
                                        });
                                      }
                                    );
                                  },
                                  function (e) {
                                    if (a.M(e))
                                      throw new te(
                                        e,
                                        "Transition error [sync]"
                                      );
                                  }
                                );
                              var e = function (e) {
                                  return l(
                                    function () {
                                      var e = (function () {
                                        if (!1 !== n)
                                          return Promise.resolve(
                                            a.add(t, r)
                                          ).then(function () {
                                            return Promise.resolve(
                                              a.j("beforeEnter", t, c)
                                            ).then(function () {
                                              return Promise.resolve(
                                                a.enter(t, c, n)
                                              ).then(function () {
                                                return Promise.resolve(
                                                  a.j("afterEnter", t, c)
                                                ).then(function () {});
                                              });
                                            });
                                          });
                                      })();
                                      if (e && e.then)
                                        return e.then(function () {});
                                    },
                                    function (e) {
                                      if (a.M(e))
                                        throw new te(
                                          e,
                                          "Transition error [before/after/enter]"
                                        );
                                    }
                                  );
                                },
                                n = !1,
                                s = l(
                                  function () {
                                    return Promise.resolve(
                                      a.j("beforeLeave", t, c)
                                    ).then(function () {
                                      return Promise.resolve(
                                        Promise.all([
                                          a.leave(t, c),
                                          L(i, t),
                                        ]).then(function (e) {
                                          return e[0];
                                        })
                                      ).then(function (e) {
                                        return (
                                          (n = e),
                                          Promise.resolve(
                                            a.j("afterLeave", t, c)
                                          ).then(function () {})
                                        );
                                      });
                                    });
                                  },
                                  function (e) {
                                    if (a.M(e))
                                      throw new te(
                                        e,
                                        "Transition error [before/after/leave]"
                                      );
                                  }
                                );
                              return s && s.then ? s.then(e) : e();
                            })();
                            return n && n.then ? n.then(e) : e();
                          }
                        );
                      }
                      var n = (function () {
                        if (u)
                          return Promise.resolve(L(i, t)).then(function () {});
                      })();
                      return n && n.then ? n.then(e) : e();
                    },
                    function (e) {
                      if (((a.S = !1), e.name && "BarbaError" === e.name))
                        throw (
                          (a.logger.debug(e.label), a.logger.error(e.error), e)
                        );
                      throw (
                        (a.logger.debug("Transition error [page]"),
                        a.logger.error(e),
                        e)
                      );
                    }
                  );
                  return Promise.resolve(d && d.then ? d.then(s) : s(d));
                } catch (e) {
                  return Promise.reject(e);
                }
              }),
              (n.once = function (e, t) {
                try {
                  return Promise.resolve(B.do("once", e, t)).then(function () {
                    return t.once ? H(t.once, t)(e) : Promise.resolve();
                  });
                } catch (e) {
                  return Promise.reject(e);
                }
              }),
              (n.leave = function (e, t) {
                try {
                  return Promise.resolve(B.do("leave", e, t)).then(function () {
                    return t.leave ? H(t.leave, t)(e) : Promise.resolve();
                  });
                } catch (e) {
                  return Promise.reject(e);
                }
              }),
              (n.enter = function (e, t, n) {
                try {
                  return Promise.resolve(B.do("enter", e, t)).then(function () {
                    return t.enter ? H(t.enter, t)(e, n) : Promise.resolve();
                  });
                } catch (e) {
                  return Promise.reject(e);
                }
              }),
              (n.add = function (e, t) {
                try {
                  return (
                    k.addContainer(e.next.container, t),
                    B.do("nextAdded", e),
                    Promise.resolve()
                  );
                } catch (e) {
                  return Promise.reject(e);
                }
              }),
              (n.remove = function (e) {
                try {
                  return (
                    k.removeContainer(e.current.container),
                    B.do("currentRemoved", e),
                    Promise.resolve()
                  );
                } catch (e) {
                  return Promise.reject(e);
                }
              }),
              (n.M = function (e) {
                return e.message
                  ? !/Timeout error|Fetch error/.test(e.message)
                  : !e.status;
              }),
              (n.j = function (e, t, n) {
                try {
                  return Promise.resolve(B.do(e, t, n)).then(function () {
                    return n[e] ? H(n[e], n)(t) : Promise.resolve();
                  });
                } catch (e) {
                  return Promise.reject(e);
                }
              }),
              t(e, [
                {
                  key: "isRunning",
                  get: function () {
                    return this.S;
                  },
                  set: function (e) {
                    this.S = e;
                  },
                },
                {
                  key: "hasOnce",
                  get: function () {
                    return this.store.once.length > 0;
                  },
                },
                {
                  key: "hasSelf",
                  get: function () {
                    return this.store.all.some(function (e) {
                      return "self" === e.name;
                    });
                  },
                },
                {
                  key: "shouldWait",
                  get: function () {
                    return this.store.all.some(function (e) {
                      return (e.to && !e.to.route) || e.sync;
                    });
                  },
                },
              ]),
              e
            );
          })(),
          re = (function () {
            function e(e) {
              var t = this;
              (this.names = [
                "beforeLeave",
                "afterLeave",
                "beforeEnter",
                "afterEnter",
              ]),
                (this.byNamespace = new Map()),
                0 !== e.length &&
                  (e.forEach(function (e) {
                    t.byNamespace.set(e.namespace, e);
                  }),
                  this.names.forEach(function (e) {
                    B[e](t.L(e));
                  }));
            }
            return (
              (e.prototype.L = function (e) {
                var t = this;
                return function (n) {
                  var i = e.match(/enter/i) ? n.next : n.current,
                    r = t.byNamespace.get(i.namespace);
                  return r && r[e] ? H(r[e], r)(n) : Promise.resolve();
                };
              }),
              e
            );
          })();
        Element.prototype.matches ||
          (Element.prototype.matches =
            Element.prototype.msMatchesSelector ||
            Element.prototype.webkitMatchesSelector),
          Element.prototype.closest ||
            (Element.prototype.closest = function (e) {
              var t = this;
              do {
                if (t.matches(e)) return t;
                t = t.parentElement || t.parentNode;
              } while (null !== t && 1 === t.nodeType);
              return null;
            });
        var se = {
          container: null,
          html: "",
          namespace: "",
          url: { hash: "", href: "", path: "", port: null, query: {} },
        };
        return new ((function () {
          function e() {
            (this.version = "2.9.7"),
              (this.schemaPage = se),
              (this.Logger = d),
              (this.logger = new d("@barba/core")),
              (this.plugins = []),
              (this.hooks = B),
              (this.dom = k),
              (this.helpers = O),
              (this.history = M),
              (this.request = N),
              (this.url = j);
          }
          var i = e.prototype;
          return (
            (i.use = function (e, t) {
              var n = this.plugins;
              n.indexOf(e) > -1
                ? this.logger.warn("Plugin [" + e.name + "] already installed.")
                : "function" == typeof e.install
                ? (e.install(this, t), n.push(e))
                : this.logger.warn(
                    "Plugin [" + e.name + '] has no "install" method.'
                  );
            }),
            (i.init = function (e) {
              var t = void 0 === e ? {} : e,
                i = t.transitions,
                r = void 0 === i ? [] : i,
                s = t.views,
                o = void 0 === s ? [] : s,
                a = t.schema,
                l = void 0 === a ? _ : a,
                c = t.requestError,
                u = t.timeout,
                h = void 0 === u ? 2e3 : u,
                p = t.cacheIgnore,
                f = void 0 !== p && p,
                m = t.prefetchIgnore,
                g = void 0 !== m && m,
                v = t.preventRunning,
                y = void 0 !== v && v,
                b = t.prevent,
                w = void 0 === b ? null : b,
                x = t.debug,
                T = t.logLevel;
              if (
                (d.setLevel(
                  !0 === (void 0 !== x && x)
                    ? "debug"
                    : void 0 === T
                    ? "off"
                    : T
                ),
                this.logger.info(this.version),
                Object.keys(l).forEach(function (e) {
                  _[e] && (_[e] = l[e]);
                }),
                (this.$ = c),
                (this.timeout = h),
                (this.cacheIgnore = f),
                (this.prefetchIgnore = g),
                (this.preventRunning = y),
                (this._ = this.dom.getWrapper()),
                !this._)
              )
                throw new Error("[@barba/core] No Barba wrapper found");
              this._.setAttribute("aria-live", "polite"), this.q();
              var E = this.data.current;
              if (!E.container)
                throw new Error("[@barba/core] No Barba container found");
              if (
                ((this.cache = new F(f)),
                (this.prevent = new ee(g)),
                (this.transitions = new ie(r)),
                (this.views = new re(o)),
                null !== w)
              ) {
                if ("function" != typeof w)
                  throw new Error("[@barba/core] Prevent should be a function");
                this.prevent.add("preventCustom", w);
              }
              this.history.init(E.url.href, E.namespace),
                (this.B = this.B.bind(this)),
                (this.U = this.U.bind(this)),
                (this.D = this.D.bind(this)),
                this.F(),
                this.plugins.forEach(function (e) {
                  return e.init();
                });
              var S = this.data;
              (S.trigger = "barba"),
                (S.next = S.current),
                (S.current = n({}, this.schemaPage)),
                this.hooks.do("ready", S),
                this.once(S),
                this.q();
            }),
            (i.destroy = function () {
              this.q(),
                this.H(),
                this.history.clear(),
                this.hooks.clear(),
                (this.plugins = []);
            }),
            (i.force = function (e) {
              window.location.assign(e);
            }),
            (i.go = function (e, t, n) {
              var i;
              if ((void 0 === t && (t = "barba"), this.transitions.isRunning))
                this.force(e);
              else if (
                !(i =
                  "popstate" === t
                    ? this.history.current &&
                      this.url.getPath(this.history.current.url) ===
                        this.url.getPath(e)
                    : this.prevent.run("sameUrl", null, null, e)) ||
                this.transitions.hasSelf
              )
                return (
                  (t = this.history.change(e, t, n)),
                  n && (n.stopPropagation(), n.preventDefault()),
                  this.page(e, t, i)
                );
            }),
            (i.once = function (e) {
              try {
                var t = this;
                return Promise.resolve(t.hooks.do("beforeEnter", e)).then(
                  function () {
                    function n() {
                      return Promise.resolve(t.hooks.do("afterEnter", e)).then(
                        function () {}
                      );
                    }
                    var i = (function () {
                      if (t.transitions.hasOnce) {
                        var n = t.transitions.get(e, { once: !0 });
                        return Promise.resolve(
                          t.transitions.doOnce({ transition: n, data: e })
                        ).then(function () {});
                      }
                    })();
                    return i && i.then ? i.then(n) : n();
                  }
                );
              } catch (e) {
                return Promise.reject(e);
              }
            }),
            (i.page = function (e, t, i) {
              try {
                var r = function () {
                    var e = s.data;
                    return Promise.resolve(s.hooks.do("page", e)).then(
                      function () {
                        var t = l(
                          function () {
                            var t = s.transitions.get(e, { once: !1, self: i });
                            return Promise.resolve(
                              s.transitions.doPage({
                                data: e,
                                page: o,
                                transition: t,
                                wrapper: s._,
                              })
                            ).then(function () {
                              s.q();
                            });
                          },
                          function () {
                            0 === d.getLevel() && s.force(e.current.url.href);
                          }
                        );
                        if (t && t.then) return t.then(function () {});
                      }
                    );
                  },
                  s = this;
                (s.data.next.url = n({ href: e }, s.url.parse(e))),
                  (s.data.trigger = t);
                var o = s.cache.has(e)
                    ? s.cache.update(e, { action: "click" }).request
                    : s.cache.set(
                        e,
                        s.request(e, s.timeout, s.onRequestError.bind(s, t)),
                        "click"
                      ).request,
                  a = (function () {
                    if (s.transitions.shouldWait)
                      return Promise.resolve(L(o, s.data)).then(function () {});
                  })();
                return Promise.resolve(a && a.then ? a.then(r) : r());
              } catch (e) {
                return Promise.reject(e);
              }
            }),
            (i.onRequestError = function (e) {
              this.transitions.isRunning = !1;
              for (
                var t = arguments.length,
                  n = new Array(t > 1 ? t - 1 : 0),
                  i = 1;
                i < t;
                i++
              )
                n[i - 1] = arguments[i];
              var r = n[0],
                s = n[1],
                o = this.cache.getAction(r);
              return (
                this.cache.delete(r),
                !(
                  (this.$ && !1 === this.$(e, o, r, s)) ||
                  ("click" === o && this.force(r), 1)
                )
              );
            }),
            (i.prefetch = function (e) {
              var t = this;
              this.cache.has(e) ||
                this.cache.set(
                  e,
                  this.request(
                    e,
                    this.timeout,
                    this.onRequestError.bind(this, "barba")
                  ).catch(function (e) {
                    t.logger.error(e);
                  }),
                  "prefetch"
                );
            }),
            (i.F = function () {
              !0 !== this.prefetchIgnore &&
                (document.addEventListener("mouseover", this.B),
                document.addEventListener("touchstart", this.B)),
                document.addEventListener("click", this.U),
                window.addEventListener("popstate", this.D);
            }),
            (i.H = function () {
              !0 !== this.prefetchIgnore &&
                (document.removeEventListener("mouseover", this.B),
                document.removeEventListener("touchstart", this.B)),
                document.removeEventListener("click", this.U),
                window.removeEventListener("popstate", this.D);
            }),
            (i.B = function (e) {
              var t = this,
                n = this.I(e);
              if (n) {
                var i = this.dom.getHref(n);
                this.prevent.checkHref(i) ||
                  this.cache.has(i) ||
                  this.cache.set(
                    i,
                    this.request(
                      i,
                      this.timeout,
                      this.onRequestError.bind(this, n)
                    ).catch(function (e) {
                      t.logger.error(e);
                    }),
                    "enter"
                  );
              }
            }),
            (i.U = function (e) {
              var t = this.I(e);
              if (t)
                return this.transitions.isRunning && this.preventRunning
                  ? (e.preventDefault(), void e.stopPropagation())
                  : void this.go(this.dom.getHref(t), t, e);
            }),
            (i.D = function (e) {
              this.go(this.url.getHref(), "popstate", e);
            }),
            (i.I = function (e) {
              for (var t = e.target; t && !this.dom.getHref(t); )
                t = t.parentNode;
              if (t && !this.prevent.checkLink(t, e, this.dom.getHref(t)))
                return t;
            }),
            (i.q = function () {
              var e = this.url.getHref(),
                t = {
                  container: this.dom.getContainer(),
                  html: this.dom.getHtml(),
                  namespace: this.dom.getNamespace(),
                  url: n({ href: e }, this.url.parse(e)),
                };
              (this.C = {
                current: t,
                next: n({}, this.schemaPage),
                trigger: void 0,
              }),
                this.hooks.do("reset", this.data);
            }),
            t(e, [
              {
                key: "data",
                get: function () {
                  return this.C;
                },
              },
              {
                key: "wrapper",
                get: function () {
                  return this._;
                },
              },
            ]),
            e
          );
        })())();
      })();
    },
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {
      "use strict";
      var i,
        r = "object" == typeof Reflect ? Reflect : null,
        s =
          r && "function" == typeof r.apply
            ? r.apply
            : function (e, t, n) {
                return Function.prototype.apply.call(e, t, n);
              };
      i =
        r && "function" == typeof r.ownKeys
          ? r.ownKeys
          : Object.getOwnPropertySymbols
          ? function (e) {
              return Object.getOwnPropertyNames(e).concat(
                Object.getOwnPropertySymbols(e)
              );
            }
          : function (e) {
              return Object.getOwnPropertyNames(e);
            };
      var o =
        Number.isNaN ||
        function (e) {
          return e != e;
        };
      function a() {
        a.init.call(this);
      }
      (e.exports = a),
        (a.EventEmitter = a),
        (a.prototype._events = void 0),
        (a.prototype._eventsCount = 0),
        (a.prototype._maxListeners = void 0);
      var l = 10;
      function c(e) {
        if ("function" != typeof e)
          throw new TypeError(
            'The "listener" argument must be of type Function. Received type ' +
              typeof e
          );
      }
      function u(e) {
        return void 0 === e._maxListeners
          ? a.defaultMaxListeners
          : e._maxListeners;
      }
      function d(e, t, n, i) {
        var r, s, o, a;
        if (
          (c(n),
          void 0 === (s = e._events)
            ? ((s = e._events = Object.create(null)), (e._eventsCount = 0))
            : (void 0 !== s.newListener &&
                (e.emit("newListener", t, n.listener ? n.listener : n),
                (s = e._events)),
              (o = s[t])),
          void 0 === o)
        )
          (o = s[t] = n), ++e._eventsCount;
        else if (
          ("function" == typeof o
            ? (o = s[t] = i ? [n, o] : [o, n])
            : i
            ? o.unshift(n)
            : o.push(n),
          (r = u(e)) > 0 && o.length > r && !o.warned)
        ) {
          o.warned = !0;
          var l = new Error(
            "Possible EventEmitter memory leak detected. " +
              o.length +
              " " +
              String(t) +
              " listeners added. Use emitter.setMaxListeners() to increase limit"
          );
          (l.name = "MaxListenersExceededWarning"),
            (l.emitter = e),
            (l.type = t),
            (l.count = o.length),
            (a = l),
            console && console.warn && console.warn(a);
        }
        return e;
      }
      function h() {
        if (!this.fired)
          return (
            this.target.removeListener(this.type, this.wrapFn),
            (this.fired = !0),
            0 === arguments.length
              ? this.listener.call(this.target)
              : this.listener.apply(this.target, arguments)
          );
      }
      function p(e, t, n) {
        var i = { fired: !1, wrapFn: void 0, target: e, type: t, listener: n },
          r = h.bind(i);
        return (r.listener = n), (i.wrapFn = r), r;
      }
      function f(e, t, n) {
        var i = e._events;
        if (void 0 === i) return [];
        var r = i[t];
        return void 0 === r
          ? []
          : "function" == typeof r
          ? n
            ? [r.listener || r]
            : [r]
          : n
          ? (function (e) {
              for (var t = new Array(e.length), n = 0; n < t.length; ++n)
                t[n] = e[n].listener || e[n];
              return t;
            })(r)
          : g(r, r.length);
      }
      function m(e) {
        var t = this._events;
        if (void 0 !== t) {
          var n = t[e];
          if ("function" == typeof n) return 1;
          if (void 0 !== n) return n.length;
        }
        return 0;
      }
      function g(e, t) {
        for (var n = new Array(t), i = 0; i < t; ++i) n[i] = e[i];
        return n;
      }
      Object.defineProperty(a, "defaultMaxListeners", {
        enumerable: !0,
        get: function () {
          return l;
        },
        set: function (e) {
          if ("number" != typeof e || e < 0 || o(e))
            throw new RangeError(
              'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                e +
                "."
            );
          l = e;
        },
      }),
        (a.init = function () {
          (void 0 !== this._events &&
            this._events !== Object.getPrototypeOf(this)._events) ||
            ((this._events = Object.create(null)), (this._eventsCount = 0)),
            (this._maxListeners = this._maxListeners || void 0);
        }),
        (a.prototype.setMaxListeners = function (e) {
          if ("number" != typeof e || e < 0 || o(e))
            throw new RangeError(
              'The value of "n" is out of range. It must be a non-negative number. Received ' +
                e +
                "."
            );
          return (this._maxListeners = e), this;
        }),
        (a.prototype.getMaxListeners = function () {
          return u(this);
        }),
        (a.prototype.emit = function (e) {
          for (var t = [], n = 1; n < arguments.length; n++)
            t.push(arguments[n]);
          var i = "error" === e,
            r = this._events;
          if (void 0 !== r) i = i && void 0 === r.error;
          else if (!i) return !1;
          if (i) {
            var o;
            if ((t.length > 0 && (o = t[0]), o instanceof Error)) throw o;
            var a = new Error(
              "Unhandled error." + (o ? " (" + o.message + ")" : "")
            );
            throw ((a.context = o), a);
          }
          var l = r[e];
          if (void 0 === l) return !1;
          if ("function" == typeof l) s(l, this, t);
          else {
            var c = l.length,
              u = g(l, c);
            for (n = 0; n < c; ++n) s(u[n], this, t);
          }
          return !0;
        }),
        (a.prototype.addListener = function (e, t) {
          return d(this, e, t, !1);
        }),
        (a.prototype.on = a.prototype.addListener),
        (a.prototype.prependListener = function (e, t) {
          return d(this, e, t, !0);
        }),
        (a.prototype.once = function (e, t) {
          return c(t), this.on(e, p(this, e, t)), this;
        }),
        (a.prototype.prependOnceListener = function (e, t) {
          return c(t), this.prependListener(e, p(this, e, t)), this;
        }),
        (a.prototype.removeListener = function (e, t) {
          var n, i, r, s, o;
          if ((c(t), void 0 === (i = this._events))) return this;
          if (void 0 === (n = i[e])) return this;
          if (n === t || n.listener === t)
            0 == --this._eventsCount
              ? (this._events = Object.create(null))
              : (delete i[e],
                i.removeListener &&
                  this.emit("removeListener", e, n.listener || t));
          else if ("function" != typeof n) {
            for (r = -1, s = n.length - 1; s >= 0; s--)
              if (n[s] === t || n[s].listener === t) {
                (o = n[s].listener), (r = s);
                break;
              }
            if (r < 0) return this;
            0 === r
              ? n.shift()
              : (function (e, t) {
                  for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                  e.pop();
                })(n, r),
              1 === n.length && (i[e] = n[0]),
              void 0 !== i.removeListener &&
                this.emit("removeListener", e, o || t);
          }
          return this;
        }),
        (a.prototype.off = a.prototype.removeListener),
        (a.prototype.removeAllListeners = function (e) {
          var t, n, i;
          if (void 0 === (n = this._events)) return this;
          if (void 0 === n.removeListener)
            return (
              0 === arguments.length
                ? ((this._events = Object.create(null)),
                  (this._eventsCount = 0))
                : void 0 !== n[e] &&
                  (0 == --this._eventsCount
                    ? (this._events = Object.create(null))
                    : delete n[e]),
              this
            );
          if (0 === arguments.length) {
            var r,
              s = Object.keys(n);
            for (i = 0; i < s.length; ++i)
              "removeListener" !== (r = s[i]) && this.removeAllListeners(r);
            return (
              this.removeAllListeners("removeListener"),
              (this._events = Object.create(null)),
              (this._eventsCount = 0),
              this
            );
          }
          if ("function" == typeof (t = n[e])) this.removeListener(e, t);
          else if (void 0 !== t)
            for (i = t.length - 1; i >= 0; i--) this.removeListener(e, t[i]);
          return this;
        }),
        (a.prototype.listeners = function (e) {
          return f(this, e, !0);
        }),
        (a.prototype.rawListeners = function (e) {
          return f(this, e, !1);
        }),
        (a.listenerCount = function (e, t) {
          return "function" == typeof e.listenerCount
            ? e.listenerCount(t)
            : m.call(e, t);
        }),
        (a.prototype.listenerCount = m),
        (a.prototype.eventNames = function () {
          return this._eventsCount > 0 ? i(this._events) : [];
        });
    },
    function (e, t, n) {
      "use strict";
      t.a = () => {
        const e = document.createElement("div");
        (e.style.width = "100px"),
          (e.style.height = "100px"),
          (e.style.overflow = "scroll"),
          (e.style.position = "absolute"),
          (e.style.top = "-9999px"),
          document.body.appendChild(e);
        const t = e.offsetWidth - e.clientWidth;
        return document.body.removeChild(e), t;
      };
    },
    function (e, t, n) {
      e.exports = (function () {
        "use strict";
        function e() {
          return (e =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                  Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
              }
              return e;
            }).apply(this, arguments);
        }
        var t = "undefined" != typeof window,
          n =
            (t && !("onscroll" in window)) ||
            ("undefined" != typeof navigator &&
              /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
          i = t && "IntersectionObserver" in window,
          r = t && "classList" in document.createElement("p"),
          s = t && window.devicePixelRatio > 1,
          o = {
            elements_selector: "img",
            container: n || t ? document : null,
            threshold: 300,
            thresholds: null,
            data_src: "src",
            data_srcset: "srcset",
            data_sizes: "sizes",
            data_bg: "bg",
            data_bg_hidpi: "bg-hidpi",
            data_bg_multi: "bg-multi",
            data_bg_multi_hidpi: "bg-multi-hidpi",
            data_poster: "poster",
            class_applied: "applied",
            class_loading: "loading",
            class_loaded: "loaded",
            class_error: "error",
            load_delay: 0,
            auto_unobserve: !0,
            cancel_on_exit: !1,
            callback_enter: null,
            callback_exit: null,
            callback_applied: null,
            callback_loading: null,
            callback_loaded: null,
            callback_error: null,
            callback_finish: null,
            callback_cancel: null,
            use_native: !1,
          },
          a = function (t) {
            return e({}, o, t);
          },
          l = function (e, t) {
            var n,
              i = new e(t);
            try {
              n = new CustomEvent("LazyLoad::Initialized", {
                detail: { instance: i },
              });
            } catch (e) {
              (n = document.createEvent("CustomEvent")).initCustomEvent(
                "LazyLoad::Initialized",
                !1,
                !1,
                { instance: i }
              );
            }
            window.dispatchEvent(n);
          },
          c = function (e, t) {
            return e.getAttribute("data-" + t);
          },
          u = function (e, t, n) {
            var i = "data-" + t;
            null !== n ? e.setAttribute(i, n) : e.removeAttribute(i);
          },
          d = function (e) {
            return c(e, "ll-status");
          },
          h = function (e, t) {
            return u(e, "ll-status", t);
          },
          p = function (e) {
            return h(e, null);
          },
          f = function (e) {
            return null === d(e);
          },
          m = function (e) {
            return "delayed" === d(e);
          },
          g = ["loading", "applied", "loaded", "error"],
          v = function (e) {
            return g.indexOf(d(e)) > -1;
          },
          y = function (e, t) {
            return u(e, "ll-timeout", t);
          },
          b = function (e) {
            return c(e, "ll-timeout");
          },
          w = function (e, t, n, i) {
            e && (void 0 === i ? (void 0 === n ? e(t) : e(t, n)) : e(t, n, i));
          },
          x = function (e, t) {
            r
              ? e.classList.add(t)
              : (e.className += (e.className ? " " : "") + t);
          },
          T = function (e, t) {
            r
              ? e.classList.remove(t)
              : (e.className = e.className
                  .replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ")
                  .replace(/^\s+/, "")
                  .replace(/\s+$/, ""));
          },
          E = function (e) {
            return e.llTempImage;
          },
          S = function (e, t, n) {
            if (n) {
              var i = n._observer;
              i && t.auto_unobserve && i.unobserve(e);
            }
          },
          C = function (e) {
            e && (e.loadingCount += 1);
          },
          _ = function (e) {
            for (var t, n = [], i = 0; (t = e.children[i]); i += 1)
              "SOURCE" === t.tagName && n.push(t);
            return n;
          },
          k = function (e, t, n) {
            n && e.setAttribute(t, n);
          },
          M = function (e, t) {
            e.removeAttribute(t);
          },
          L = function (e) {
            return !!e.llOriginalAttrs;
          },
          P = function (e) {
            if (!L(e)) {
              var t = {};
              (t.src = e.getAttribute("src")),
                (t.srcset = e.getAttribute("srcset")),
                (t.sizes = e.getAttribute("sizes")),
                (e.llOriginalAttrs = t);
            }
          },
          O = function (e) {
            if (L(e)) {
              var t = e.llOriginalAttrs;
              k(e, "src", t.src),
                k(e, "srcset", t.srcset),
                k(e, "sizes", t.sizes);
            }
          },
          A = function (e, t) {
            k(e, "sizes", c(e, t.data_sizes)),
              k(e, "srcset", c(e, t.data_srcset)),
              k(e, "src", c(e, t.data_src));
          },
          D = function (e) {
            M(e, "src"), M(e, "srcset"), M(e, "sizes");
          },
          z = function (e, t) {
            var n = e.parentNode;
            n && "PICTURE" === n.tagName && _(n).forEach(t);
          },
          $ = {
            IMG: function (e, t) {
              z(e, function (e) {
                P(e), A(e, t);
              }),
                P(e),
                A(e, t);
            },
            IFRAME: function (e, t) {
              k(e, "src", c(e, t.data_src));
            },
            VIDEO: function (e, t) {
              _(e).forEach(function (e) {
                k(e, "src", c(e, t.data_src));
              }),
                k(e, "poster", c(e, t.data_poster)),
                k(e, "src", c(e, t.data_src)),
                e.load();
            },
          },
          I = function (e, t, n) {
            var i = $[e.tagName];
            i &&
              (i(e, t),
              C(n),
              x(e, t.class_loading),
              h(e, "loading"),
              w(t.callback_loading, e, n),
              w(t.callback_reveal, e, n));
          },
          j = ["IMG", "IFRAME", "VIDEO"],
          N = function (e) {
            e && (e.loadingCount -= 1);
          },
          R = function (e, t) {
            !t || t.toLoadCount || t.loadingCount || w(e.callback_finish, t);
          },
          H = function (e, t, n) {
            e.addEventListener(t, n), (e.llEvLisnrs[t] = n);
          },
          B = function (e, t, n) {
            e.removeEventListener(t, n);
          },
          q = function (e) {
            return !!e.llEvLisnrs;
          },
          F = function (e) {
            if (q(e)) {
              var t = e.llEvLisnrs;
              for (var n in t) {
                var i = t[n];
                B(e, n, i);
              }
              delete e.llEvLisnrs;
            }
          },
          W = function (e, t, n) {
            !(function (e) {
              delete e.llTempImage;
            })(e),
              N(n),
              T(e, t.class_loading),
              S(e, t, n);
          },
          Y = function (e, t, n) {
            var i = E(e) || e;
            q(i) ||
              (function (e, t, n) {
                q(e) || (e.llEvLisnrs = {}),
                  H(e, "load", t),
                  H(e, "error", n),
                  "VIDEO" === e.tagName && H(e, "loadeddata", t);
              })(
                i,
                function (r) {
                  !(function (e, t, n, i) {
                    W(t, n, i),
                      x(t, n.class_loaded),
                      h(t, "loaded"),
                      w(n.callback_loaded, t, i),
                      R(n, i);
                  })(0, e, t, n),
                    F(i);
                },
                function (r) {
                  !(function (e, t, n, i) {
                    W(t, n, i),
                      x(t, n.class_error),
                      h(t, "error"),
                      w(n.callback_error, t, i),
                      R(n, i);
                  })(0, e, t, n),
                    F(i);
                }
              );
          },
          X = function (e) {
            e && (e.toLoadCount -= 1);
          },
          V = function (e, t, n) {
            !(function (e) {
              return j.indexOf(e.tagName) > -1;
            })(e)
              ? (function (e, t, n) {
                  !(function (e) {
                    e.llTempImage = document.createElement("img");
                  })(e),
                    Y(e, t, n),
                    (function (e, t, n) {
                      var i = c(e, t.data_bg),
                        r = c(e, t.data_bg_hidpi),
                        o = s && r ? r : i;
                      o &&
                        ((e.style.backgroundImage = 'url("'.concat(o, '")')),
                        E(e).setAttribute("src", o),
                        C(n),
                        x(e, t.class_loading),
                        h(e, "loading"),
                        w(t.callback_loading, e, n),
                        w(t.callback_reveal, e, n));
                    })(e, t, n),
                    (function (e, t, n) {
                      var i = c(e, t.data_bg_multi),
                        r = c(e, t.data_bg_multi_hidpi),
                        o = s && r ? r : i;
                      o &&
                        ((e.style.backgroundImage = o),
                        x(e, t.class_applied),
                        h(e, "applied"),
                        S(e, t, n),
                        w(t.callback_applied, e, n));
                    })(e, t, n);
                })(e, t, n)
              : (function (e, t, n) {
                  Y(e, t, n), I(e, t, n);
                })(e, t, n),
              X(n),
              R(t, n);
          },
          G = function (e) {
            var t = b(e);
            t && (m(e) && p(e), clearTimeout(t), y(e, null));
          },
          U = function (e, t, n, i) {
            f(e) ||
              (n.cancel_on_exit &&
                (function (e) {
                  return "loading" === d(e);
                })(e) &&
                (function (e, t, n, i) {
                  "IMG" === e.tagName &&
                    (F(e),
                    (function (e) {
                      z(e, function (e) {
                        D(e);
                      }),
                        D(e);
                    })(e),
                    (function (e) {
                      z(e, function (e) {
                        O(e);
                      }),
                        O(e);
                    })(e),
                    T(e, n.class_loading),
                    N(i),
                    w(n.callback_cancel, e, t, i),
                    setTimeout(function () {
                      i.resetElementStatus(e, i);
                    }, 0));
                })(e, t, n, i),
              w(n.callback_exit, e, t, i),
              n.load_delay && m(e) && G(e));
          },
          K = ["IMG", "IFRAME"],
          Q = function (e) {
            return e.use_native && "loading" in HTMLImageElement.prototype;
          },
          Z = function (e) {
            var t = e._settings;
            i &&
              !Q(e._settings) &&
              (e._observer = new IntersectionObserver(
                function (n) {
                  !(function (e, t, n) {
                    e.forEach(function (e) {
                      return (function (e) {
                        return e.isIntersecting || e.intersectionRatio > 0;
                      })(e)
                        ? (function (e, t, n, i) {
                            w(n.callback_enter, e, t, i),
                              v(e) ||
                                (n.load_delay
                                  ? (function (e, t, n) {
                                      var i = t.load_delay,
                                        r = b(e);
                                      r ||
                                        ((r = setTimeout(function () {
                                          V(e, t, n), G(e);
                                        }, i)),
                                        h(e, "delayed"),
                                        y(e, r));
                                    })(e, n, i)
                                  : V(e, n, i));
                          })(e.target, e, t, n)
                        : U(e.target, e, t, n);
                    });
                  })(n, t, e);
                },
                (function (e) {
                  return {
                    root: e.container === document ? null : e.container,
                    rootMargin: e.thresholds || e.threshold + "px",
                  };
                })(t)
              ));
          },
          J = function (e) {
            return Array.prototype.slice.call(e);
          },
          ee = function (e) {
            return e.container.querySelectorAll(e.elements_selector);
          },
          te = function (e) {
            return (function (e) {
              return "error" === d(e);
            })(e);
          },
          ne = function (e, t) {
            return (function (e) {
              return J(e).filter(f);
            })(e || ee(t));
          },
          ie = function (e, n) {
            var i;
            (this._settings = a(e)),
              (this.loadingCount = 0),
              Z(this),
              (i = this),
              t &&
                window.addEventListener("online", function (e) {
                  !(function (e) {
                    var t,
                      n = e._settings;
                    ((t = ee(n)), J(t).filter(te)).forEach(function (e) {
                      T(e, n.class_error), p(e);
                    }),
                      e.update();
                  })(i);
                }),
              this.update(n);
          };
        return (
          (ie.prototype = {
            update: function (e) {
              var t,
                r,
                s = this._settings,
                o = ne(e, s);
              (this.toLoadCount = o.length),
                !n && i
                  ? Q(s)
                    ? (function (e, t, n) {
                        e.forEach(function (e) {
                          -1 !== K.indexOf(e.tagName) &&
                            (e.setAttribute("loading", "lazy"),
                            (function (e, t, n) {
                              Y(e, t, n),
                                I(e, t, n),
                                X(n),
                                h(e, "native"),
                                R(t, n);
                            })(e, t, n));
                        }),
                          (n.toLoadCount = 0);
                      })(o, s, this)
                    : ((r = o),
                      (function (e) {
                        e.disconnect();
                      })((t = this._observer)),
                      (function (e, t) {
                        t.forEach(function (t) {
                          e.observe(t);
                        });
                      })(t, r))
                  : this.loadAll(o);
            },
            destroy: function () {
              this._observer && this._observer.disconnect(),
                delete this._observer,
                delete this._settings,
                delete this.loadingCount,
                delete this.toLoadCount;
            },
            loadAll: function (e) {
              var t = this,
                n = this._settings;
              ne(e, n).forEach(function (e) {
                V(e, n, t);
              });
            },
            resetElementStatus: function (e) {
              !(function (e, t) {
                v(e) &&
                  (function (e) {
                    e && (e.toLoadCount += 1);
                  })(t),
                  h(e, null);
              })(e, this);
            },
            load: function (e) {
              V(e, this._settings, this);
            },
          }),
          (ie.load = function (e, t) {
            var n = a(t);
            V(e, n);
          }),
          t &&
            (function (e, t) {
              if (t)
                if (t.length) for (var n, i = 0; (n = t[i]); i += 1) l(e, n);
                else l(e, t);
            })(ie, window.lazyLoadOptions),
          ie
        );
      })();
    },
    function (e, t, n) {
      "use strict";
      (function (e) {
        function n(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function i(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i);
          }
        }
        function r(e, t, n) {
          return t && i(e.prototype, t), n && i(e, n), e;
        }
        function s(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        function o(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            t &&
              (i = i.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, i);
          }
          return n;
        }
        function a(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? o(Object(n), !0).forEach(function (t) {
                  s(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : o(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        function l(e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && u(e, t);
        }
        function c(e) {
          return (c = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        function u(e, t) {
          return (u =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        function d(e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        }
        function h(e, t) {
          return !t || ("object" != typeof t && "function" != typeof t)
            ? d(e)
            : t;
        }
        function p(e, t, n) {
          return (p =
            "undefined" != typeof Reflect && Reflect.get
              ? Reflect.get
              : function (e, t, n) {
                  var i = (function (e, t) {
                    for (
                      ;
                      !Object.prototype.hasOwnProperty.call(e, t) &&
                      null !== (e = c(e));

                    );
                    return e;
                  })(e, t);
                  if (i) {
                    var r = Object.getOwnPropertyDescriptor(i, t);
                    return r.get ? r.get.call(n) : r.value;
                  }
                })(e, t, n || e);
        }
        function f(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) {
                for (var t = 0, n = new Array(e.length); t < e.length; t++)
                  n[t] = e[t];
                return n;
              }
            })(e) ||
            (function (e) {
              if (
                Symbol.iterator in Object(e) ||
                "[object Arguments]" === Object.prototype.toString.call(e)
              )
                return Array.from(e);
            })(e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance"
              );
            })()
          );
        }
        var m = {
            el: document,
            elMobile: document,
            name: "scroll",
            offset: [0, 0],
            repeat: !1,
            smooth: !1,
            smoothMobile: !1,
            direction: "vertical",
            lerp: 0.1,
            class: "is-inview",
            scrollbarClass: "c-scrollbar",
            scrollingClass: "has-scroll-scrolling",
            draggingClass: "has-scroll-dragging",
            smoothClass: "has-scroll-smooth",
            initClass: "has-scroll-init",
            getSpeed: !1,
            getDirection: !1,
            multiplier: 1,
            firefoxMultiplier: 50,
            touchMultiplier: 2,
            scrollFromAnywhere: !1,
          },
          g = (function () {
            function e() {
              var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              n(this, e),
                Object.assign(this, m, t),
                (this.namespace = "locomotive"),
                (this.html = document.documentElement),
                (this.windowHeight = window.innerHeight),
                (this.windowMiddle = this.windowHeight / 2),
                (this.els = []),
                (this.listeners = {}),
                (this.hasScrollTicking = !1),
                (this.hasCallEventSet = !1),
                (this.checkScroll = this.checkScroll.bind(this)),
                (this.checkResize = this.checkResize.bind(this)),
                (this.checkEvent = this.checkEvent.bind(this)),
                (this.instance = {
                  scroll: { x: 0, y: 0 },
                  limit: this.html.offsetHeight,
                }),
                this.getDirection && (this.instance.direction = null),
                this.getDirection && (this.instance.speed = 0),
                this.html.classList.add(this.initClass),
                window.addEventListener("resize", this.checkResize, !1);
            }
            return (
              r(e, [
                {
                  key: "init",
                  value: function () {
                    this.initEvents();
                  },
                },
                {
                  key: "checkScroll",
                  value: function () {
                    this.dispatchScroll();
                  },
                },
                {
                  key: "checkResize",
                  value: function () {
                    var e = this;
                    this.resizeTick ||
                      ((this.resizeTick = !0),
                      requestAnimationFrame(function () {
                        e.resize(), (e.resizeTick = !1);
                      }));
                  },
                },
                { key: "resize", value: function () {} },
                {
                  key: "initEvents",
                  value: function () {
                    var e = this;
                    (this.scrollToEls = this.el.querySelectorAll(
                      "[data-".concat(this.name, "-to]")
                    )),
                      (this.setScrollTo = this.setScrollTo.bind(this)),
                      this.scrollToEls.forEach(function (t) {
                        t.addEventListener("click", e.setScrollTo, !1);
                      });
                  },
                },
                {
                  key: "setScrollTo",
                  value: function (e) {
                    e.preventDefault(),
                      this.scrollTo(
                        e.currentTarget.getAttribute(
                          "data-".concat(this.name, "-href")
                        ) || e.currentTarget.getAttribute("href"),
                        e.currentTarget.getAttribute(
                          "data-".concat(this.name, "-offset")
                        )
                      );
                  },
                },
                { key: "addElements", value: function () {} },
                {
                  key: "detectElements",
                  value: function (e) {
                    var t = this,
                      n = this.instance.scroll.y,
                      i = n + this.windowHeight;
                    this.els.forEach(function (r, s) {
                      !r ||
                        (r.inView && !e) ||
                        (i >= r.top && n < r.bottom && t.setInView(r, s)),
                        r &&
                          r.inView &&
                          (i < r.top || n > r.bottom) &&
                          t.setOutOfView(r, s);
                    }),
                      (this.els = this.els.filter(function (e, t) {
                        return null !== e;
                      })),
                      (this.hasScrollTicking = !1);
                  },
                },
                {
                  key: "setInView",
                  value: function (e, t) {
                    (this.els[t].inView = !0),
                      e.el.classList.add(e.class),
                      e.call &&
                        this.hasCallEventSet &&
                        (this.dispatchCall(e, "enter"),
                        e.repeat || (this.els[t].call = !1)),
                      e.repeat ||
                        e.speed ||
                        e.sticky ||
                        ((!e.call || (e.call && this.hasCallEventSet)) &&
                          (this.els[t] = null));
                  },
                },
                {
                  key: "setOutOfView",
                  value: function (e, t) {
                    (e.repeat || void 0 !== e.speed) &&
                      (this.els[t].inView = !1),
                      e.call &&
                        this.hasCallEventSet &&
                        this.dispatchCall(e, "exit"),
                      e.repeat && e.el.classList.remove(e.class);
                  },
                },
                {
                  key: "dispatchCall",
                  value: function (e, t) {
                    (this.callWay = t),
                      (this.callValue = e.call.split(",").map(function (e) {
                        return e.trim();
                      })),
                      (this.callObj = e),
                      1 == this.callValue.length &&
                        (this.callValue = this.callValue[0]);
                    var n = new Event(this.namespace + "call");
                    this.el.dispatchEvent(n);
                  },
                },
                {
                  key: "dispatchScroll",
                  value: function () {
                    var e = new Event(this.namespace + "scroll");
                    this.el.dispatchEvent(e);
                  },
                },
                {
                  key: "setEvents",
                  value: function (e, t) {
                    this.listeners[e] || (this.listeners[e] = []);
                    var n = this.listeners[e];
                    n.push(t),
                      1 === n.length &&
                        this.el.addEventListener(
                          this.namespace + e,
                          this.checkEvent,
                          !1
                        ),
                      "call" === e &&
                        ((this.hasCallEventSet = !0), this.detectElements(!0));
                  },
                },
                {
                  key: "unsetEvents",
                  value: function (e, t) {
                    if (this.listeners[e]) {
                      var n = this.listeners[e],
                        i = n.indexOf(t);
                      i < 0 ||
                        (n.splice(i, 1),
                        0 === n.index &&
                          this.el.removeEventListener(
                            this.namespace + e,
                            this.checkEvent,
                            !1
                          ));
                    }
                  },
                },
                {
                  key: "checkEvent",
                  value: function (e) {
                    var t = this,
                      n = e.type.replace(this.namespace, ""),
                      i = this.listeners[n];
                    i &&
                      0 !== i.length &&
                      i.forEach(function (e) {
                        switch (n) {
                          case "scroll":
                            return e(t.instance);
                          case "call":
                            return e(t.callValue, t.callWay, t.callObj);
                          default:
                            return e();
                        }
                      });
                  },
                },
                { key: "startScroll", value: function () {} },
                { key: "stopScroll", value: function () {} },
                {
                  key: "setScroll",
                  value: function (e, t) {
                    this.instance.scroll = { x: 0, y: 0 };
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    var e = this;
                    window.removeEventListener("resize", this.checkResize, !1),
                      Object.keys(this.listeners).forEach(function (t) {
                        e.el.removeEventListener(
                          e.namespace + t,
                          e.checkEvent,
                          !1
                        );
                      }),
                      (this.listeners = {}),
                      this.scrollToEls.forEach(function (t) {
                        t.removeEventListener("click", e.setScrollTo, !1);
                      });
                  },
                },
              ]),
              e
            );
          })(),
          v =
            "undefined" != typeof globalThis
              ? globalThis
              : "undefined" != typeof window
              ? window
              : void 0 !== e
              ? e
              : "undefined" != typeof self
              ? self
              : {};
        function y(e, t) {
          return e((t = { exports: {} }), t.exports), t.exports;
        }
        var b = y(function (e, t) {
            e.exports = {
              polyfill: function () {
                var e = window,
                  t = document;
                if (
                  !("scrollBehavior" in t.documentElement.style) ||
                  !0 === e.__forceSmoothScrollPolyfill__
                ) {
                  var n,
                    i = e.HTMLElement || e.Element,
                    r = {
                      scroll: e.scroll || e.scrollTo,
                      scrollBy: e.scrollBy,
                      elementScroll: i.prototype.scroll || a,
                      scrollIntoView: i.prototype.scrollIntoView,
                    },
                    s =
                      e.performance && e.performance.now
                        ? e.performance.now.bind(e.performance)
                        : Date.now,
                    o =
                      ((n = e.navigator.userAgent),
                      new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(
                        n
                      )
                        ? 1
                        : 0);
                  (e.scroll = e.scrollTo =
                    function () {
                      void 0 !== arguments[0] &&
                        (!0 !== l(arguments[0])
                          ? f.call(
                              e,
                              t.body,
                              void 0 !== arguments[0].left
                                ? ~~arguments[0].left
                                : e.scrollX || e.pageXOffset,
                              void 0 !== arguments[0].top
                                ? ~~arguments[0].top
                                : e.scrollY || e.pageYOffset
                            )
                          : r.scroll.call(
                              e,
                              void 0 !== arguments[0].left
                                ? arguments[0].left
                                : "object" != typeof arguments[0]
                                ? arguments[0]
                                : e.scrollX || e.pageXOffset,
                              void 0 !== arguments[0].top
                                ? arguments[0].top
                                : void 0 !== arguments[1]
                                ? arguments[1]
                                : e.scrollY || e.pageYOffset
                            ));
                    }),
                    (e.scrollBy = function () {
                      void 0 !== arguments[0] &&
                        (l(arguments[0])
                          ? r.scrollBy.call(
                              e,
                              void 0 !== arguments[0].left
                                ? arguments[0].left
                                : "object" != typeof arguments[0]
                                ? arguments[0]
                                : 0,
                              void 0 !== arguments[0].top
                                ? arguments[0].top
                                : void 0 !== arguments[1]
                                ? arguments[1]
                                : 0
                            )
                          : f.call(
                              e,
                              t.body,
                              ~~arguments[0].left +
                                (e.scrollX || e.pageXOffset),
                              ~~arguments[0].top + (e.scrollY || e.pageYOffset)
                            ));
                    }),
                    (i.prototype.scroll = i.prototype.scrollTo =
                      function () {
                        if (void 0 !== arguments[0])
                          if (!0 !== l(arguments[0])) {
                            var e = arguments[0].left,
                              t = arguments[0].top;
                            f.call(
                              this,
                              this,
                              void 0 === e ? this.scrollLeft : ~~e,
                              void 0 === t ? this.scrollTop : ~~t
                            );
                          } else {
                            if (
                              "number" == typeof arguments[0] &&
                              void 0 === arguments[1]
                            )
                              throw new SyntaxError(
                                "Value could not be converted"
                              );
                            r.elementScroll.call(
                              this,
                              void 0 !== arguments[0].left
                                ? ~~arguments[0].left
                                : "object" != typeof arguments[0]
                                ? ~~arguments[0]
                                : this.scrollLeft,
                              void 0 !== arguments[0].top
                                ? ~~arguments[0].top
                                : void 0 !== arguments[1]
                                ? ~~arguments[1]
                                : this.scrollTop
                            );
                          }
                      }),
                    (i.prototype.scrollBy = function () {
                      void 0 !== arguments[0] &&
                        (!0 !== l(arguments[0])
                          ? this.scroll({
                              left: ~~arguments[0].left + this.scrollLeft,
                              top: ~~arguments[0].top + this.scrollTop,
                              behavior: arguments[0].behavior,
                            })
                          : r.elementScroll.call(
                              this,
                              void 0 !== arguments[0].left
                                ? ~~arguments[0].left + this.scrollLeft
                                : ~~arguments[0] + this.scrollLeft,
                              void 0 !== arguments[0].top
                                ? ~~arguments[0].top + this.scrollTop
                                : ~~arguments[1] + this.scrollTop
                            ));
                    }),
                    (i.prototype.scrollIntoView = function () {
                      if (!0 !== l(arguments[0])) {
                        var n = h(this),
                          i = n.getBoundingClientRect(),
                          s = this.getBoundingClientRect();
                        n !== t.body
                          ? (f.call(
                              this,
                              n,
                              n.scrollLeft + s.left - i.left,
                              n.scrollTop + s.top - i.top
                            ),
                            "fixed" !== e.getComputedStyle(n).position &&
                              e.scrollBy({
                                left: i.left,
                                top: i.top,
                                behavior: "smooth",
                              }))
                          : e.scrollBy({
                              left: s.left,
                              top: s.top,
                              behavior: "smooth",
                            });
                      } else
                        r.scrollIntoView.call(
                          this,
                          void 0 === arguments[0] || arguments[0]
                        );
                    });
                }
                function a(e, t) {
                  (this.scrollLeft = e), (this.scrollTop = t);
                }
                function l(e) {
                  if (
                    null === e ||
                    "object" != typeof e ||
                    void 0 === e.behavior ||
                    "auto" === e.behavior ||
                    "instant" === e.behavior
                  )
                    return !0;
                  if ("object" == typeof e && "smooth" === e.behavior)
                    return !1;
                  throw new TypeError(
                    "behavior member of ScrollOptions " +
                      e.behavior +
                      " is not a valid value for enumeration ScrollBehavior."
                  );
                }
                function c(e, t) {
                  return "Y" === t
                    ? e.clientHeight + o < e.scrollHeight
                    : "X" === t
                    ? e.clientWidth + o < e.scrollWidth
                    : void 0;
                }
                function u(t, n) {
                  var i = e.getComputedStyle(t, null)["overflow" + n];
                  return "auto" === i || "scroll" === i;
                }
                function d(e) {
                  var t = c(e, "Y") && u(e, "Y"),
                    n = c(e, "X") && u(e, "X");
                  return t || n;
                }
                function h(e) {
                  for (; e !== t.body && !1 === d(e); )
                    e = e.parentNode || e.host;
                  return e;
                }
                function p(t) {
                  var n,
                    i,
                    r,
                    o,
                    a = (s() - t.startTime) / 468;
                  (o = a = a > 1 ? 1 : a),
                    (n = 0.5 * (1 - Math.cos(Math.PI * o))),
                    (i = t.startX + (t.x - t.startX) * n),
                    (r = t.startY + (t.y - t.startY) * n),
                    t.method.call(t.scrollable, i, r),
                    (i === t.x && r === t.y) ||
                      e.requestAnimationFrame(p.bind(e, t));
                }
                function f(n, i, o) {
                  var l,
                    c,
                    u,
                    d,
                    h = s();
                  n === t.body
                    ? ((l = e),
                      (c = e.scrollX || e.pageXOffset),
                      (u = e.scrollY || e.pageYOffset),
                      (d = r.scroll))
                    : ((l = n), (c = n.scrollLeft), (u = n.scrollTop), (d = a)),
                    p({
                      scrollable: l,
                      method: d,
                      startTime: h,
                      startX: c,
                      startY: u,
                      x: i,
                      y: o,
                    });
                }
              },
            };
          }),
          w =
            (b.polyfill,
            (function (e) {
              function t() {
                var e,
                  i =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                return (
                  n(this, t),
                  (e = h(this, c(t).call(this, i))),
                  window.addEventListener("scroll", e.checkScroll, !1),
                  b.polyfill(),
                  e
                );
              }
              return (
                l(t, e),
                r(t, [
                  {
                    key: "init",
                    value: function () {
                      (this.instance.scroll.y = window.pageYOffset),
                        this.addElements(),
                        this.detectElements(),
                        p(c(t.prototype), "init", this).call(this);
                    },
                  },
                  {
                    key: "checkScroll",
                    value: function () {
                      var e = this;
                      p(c(t.prototype), "checkScroll", this).call(this),
                        this.getDirection && this.addDirection(),
                        this.getSpeed &&
                          (this.addSpeed(), (this.timestamp = Date.now())),
                        (this.instance.scroll.y = window.pageYOffset),
                        this.els.length &&
                          (this.hasScrollTicking ||
                            (requestAnimationFrame(function () {
                              e.detectElements();
                            }),
                            (this.hasScrollTicking = !0)));
                    },
                  },
                  {
                    key: "addDirection",
                    value: function () {
                      window.pageYOffset > this.instance.scroll.y
                        ? "down" !== this.instance.direction &&
                          (this.instance.direction = "down")
                        : window.pageYOffset < this.instance.scroll.y &&
                          "up" !== this.instance.direction &&
                          (this.instance.direction = "up");
                    },
                  },
                  {
                    key: "addSpeed",
                    value: function () {
                      window.pageYOffset != this.instance.scroll.y
                        ? (this.instance.speed =
                            (window.pageYOffset - this.instance.scroll.y) /
                            (Date.now() - this.timestamp))
                        : (this.instance.speed = 0);
                    },
                  },
                  {
                    key: "resize",
                    value: function () {
                      this.els.length &&
                        ((this.windowHeight = window.innerHeight),
                        this.updateElements());
                    },
                  },
                  {
                    key: "addElements",
                    value: function () {
                      var e = this;
                      (this.els = []),
                        this.el
                          .querySelectorAll("[data-" + this.name + "]")
                          .forEach(function (t, n) {
                            var i = t.dataset[e.name + "Class"] || e.class,
                              r =
                                t.getBoundingClientRect().top +
                                e.instance.scroll.y,
                              s = r + t.offsetHeight,
                              o =
                                "string" == typeof t.dataset[e.name + "Offset"]
                                  ? t.dataset[e.name + "Offset"].split(",")
                                  : e.offset,
                              a = t.dataset[e.name + "Repeat"],
                              l = t.dataset[e.name + "Call"];
                            a = "false" != a && (null != a || e.repeat);
                            var c = e.getRelativeOffset(o),
                              u = {
                                el: t,
                                id: n,
                                class: i,
                                top: r + c[0],
                                bottom: s - c[1],
                                offset: o,
                                repeat: a,
                                inView: !!t.classList.contains(i),
                                call: l,
                              };
                            e.els.push(u);
                          });
                    },
                  },
                  {
                    key: "updateElements",
                    value: function () {
                      var e = this;
                      this.els.forEach(function (t, n) {
                        var i =
                            t.el.getBoundingClientRect().top +
                            e.instance.scroll.y,
                          r = i + t.el.offsetHeight,
                          s = e.getRelativeOffset(t.offset);
                        (e.els[n].top = i + s[0]), (e.els[n].bottom = r - s[1]);
                      }),
                        (this.hasScrollTicking = !1);
                    },
                  },
                  {
                    key: "getRelativeOffset",
                    value: function (e) {
                      var t = [0, 0];
                      if (e)
                        for (var n = 0; n < e.length; n++)
                          "string" == typeof e[n]
                            ? e[n].includes("%")
                              ? (t[n] = parseInt(
                                  (e[n].replace("%", "") * this.windowHeight) /
                                    100
                                ))
                              : (t[n] = parseInt(e[n]))
                            : (t[n] = e[n]);
                      return t;
                    },
                  },
                  {
                    key: "scrollTo",
                    value: function (e, t, n, i, r, s) {
                      var o,
                        a = t ? parseInt(t) : 0;
                      if ("string" == typeof e) {
                        if ("top" === e) o = this.html;
                        else if ("bottom" === e)
                          o = this.html.offsetHeight - window.innerHeight;
                        else if (!(o = document.querySelector(e))) return;
                      } else if ("number" == typeof e) o = parseInt(e);
                      else {
                        if (!e || !e.tagName)
                          return void console.warn(
                            "`targetOption` parameter is not valid"
                          );
                        o = e;
                      }
                      if (
                        ((a =
                          "number" != typeof o
                            ? o.getBoundingClientRect().top +
                              a +
                              this.instance.scroll.y
                            : o + a),
                        s)
                      ) {
                        a = a.toFixed();
                        window.addEventListener("scroll", function e() {
                          window.pageYOffset.toFixed() === a &&
                            (window.removeEventListener("scroll", e), s());
                        });
                      }
                      window.scrollTo({ top: a, behavior: "smooth" });
                    },
                  },
                  {
                    key: "update",
                    value: function () {
                      this.addElements(), this.detectElements();
                    },
                  },
                  {
                    key: "destroy",
                    value: function () {
                      p(c(t.prototype), "destroy", this).call(this),
                        window.removeEventListener(
                          "scroll",
                          this.checkScroll,
                          !1
                        );
                    },
                  },
                ]),
                t
              );
            })(g)),
          x = Object.getOwnPropertySymbols,
          T = Object.prototype.hasOwnProperty,
          E = Object.prototype.propertyIsEnumerable;
        function S(e) {
          if (null == e)
            throw new TypeError(
              "Object.assign cannot be called with null or undefined"
            );
          return Object(e);
        }
        var C = (function () {
          try {
            if (!Object.assign) return !1;
            var e = new String("abc");
            if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0]))
              return !1;
            for (var t = {}, n = 0; n < 10; n++)
              t["_" + String.fromCharCode(n)] = n;
            if (
              "0123456789" !==
              Object.getOwnPropertyNames(t)
                .map(function (e) {
                  return t[e];
                })
                .join("")
            )
              return !1;
            var i = {};
            return (
              "abcdefghijklmnopqrst".split("").forEach(function (e) {
                i[e] = e;
              }),
              "abcdefghijklmnopqrst" ===
                Object.keys(Object.assign({}, i)).join("")
            );
          } catch (e) {
            return !1;
          }
        })()
          ? Object.assign
          : function (e, t) {
              for (var n, i, r = S(e), s = 1; s < arguments.length; s++) {
                for (var o in (n = Object(arguments[s])))
                  T.call(n, o) && (r[o] = n[o]);
                if (x) {
                  i = x(n);
                  for (var a = 0; a < i.length; a++)
                    E.call(n, i[a]) && (r[i[a]] = n[i[a]]);
                }
              }
              return r;
            };
        function _() {}
        _.prototype = {
          on: function (e, t, n) {
            var i = this.e || (this.e = {});
            return (i[e] || (i[e] = [])).push({ fn: t, ctx: n }), this;
          },
          once: function (e, t, n) {
            var i = this;
            function r() {
              i.off(e, r), t.apply(n, arguments);
            }
            return (r._ = t), this.on(e, r, n);
          },
          emit: function (e) {
            for (
              var t = [].slice.call(arguments, 1),
                n = ((this.e || (this.e = {}))[e] || []).slice(),
                i = 0,
                r = n.length;
              i < r;
              i++
            )
              n[i].fn.apply(n[i].ctx, t);
            return this;
          },
          off: function (e, t) {
            var n = this.e || (this.e = {}),
              i = n[e],
              r = [];
            if (i && t)
              for (var s = 0, o = i.length; s < o; s++)
                i[s].fn !== t && i[s].fn._ !== t && r.push(i[s]);
            return r.length ? (n[e] = r) : delete n[e], this;
          },
        };
        var k = _,
          M = y(function (e, t) {
            (function () {
              (null !== t ? t : this).Lethargy = (function () {
                function e(e, t, n, i) {
                  (this.stability = null != e ? Math.abs(e) : 8),
                    (this.sensitivity = null != t ? 1 + Math.abs(t) : 100),
                    (this.tolerance = null != n ? 1 + Math.abs(n) : 1.1),
                    (this.delay = null != i ? i : 150),
                    (this.lastUpDeltas = function () {
                      var e, t, n;
                      for (
                        n = [], e = 1, t = 2 * this.stability;
                        1 <= t ? e <= t : e >= t;
                        1 <= t ? e++ : e--
                      )
                        n.push(null);
                      return n;
                    }.call(this)),
                    (this.lastDownDeltas = function () {
                      var e, t, n;
                      for (
                        n = [], e = 1, t = 2 * this.stability;
                        1 <= t ? e <= t : e >= t;
                        1 <= t ? e++ : e--
                      )
                        n.push(null);
                      return n;
                    }.call(this)),
                    (this.deltasTimestamp = function () {
                      var e, t, n;
                      for (
                        n = [], e = 1, t = 2 * this.stability;
                        1 <= t ? e <= t : e >= t;
                        1 <= t ? e++ : e--
                      )
                        n.push(null);
                      return n;
                    }.call(this));
                }
                return (
                  (e.prototype.check = function (e) {
                    var t;
                    return (
                      null != (e = e.originalEvent || e).wheelDelta
                        ? (t = e.wheelDelta)
                        : null != e.deltaY
                        ? (t = -40 * e.deltaY)
                        : (null == e.detail && 0 !== e.detail) ||
                          (t = -40 * e.detail),
                      this.deltasTimestamp.push(Date.now()),
                      this.deltasTimestamp.shift(),
                      t > 0
                        ? (this.lastUpDeltas.push(t),
                          this.lastUpDeltas.shift(),
                          this.isInertia(1))
                        : (this.lastDownDeltas.push(t),
                          this.lastDownDeltas.shift(),
                          this.isInertia(-1))
                    );
                  }),
                  (e.prototype.isInertia = function (e) {
                    var t, n, i, r, s, o, a;
                    return null ===
                      (t =
                        -1 === e ? this.lastDownDeltas : this.lastUpDeltas)[0]
                      ? e
                      : !(
                          this.deltasTimestamp[2 * this.stability - 2] +
                            this.delay >
                            Date.now() && t[0] === t[2 * this.stability - 1]
                        ) &&
                          ((i = t.slice(0, this.stability)),
                          (n = t.slice(this.stability, 2 * this.stability)),
                          (a = i.reduce(function (e, t) {
                            return e + t;
                          })),
                          (s = n.reduce(function (e, t) {
                            return e + t;
                          })),
                          (o = a / i.length),
                          (r = s / n.length),
                          Math.abs(o) < Math.abs(r * this.tolerance) &&
                            this.sensitivity < Math.abs(r) &&
                            e);
                  }),
                  (e.prototype.showLastUpDeltas = function () {
                    return this.lastUpDeltas;
                  }),
                  (e.prototype.showLastDownDeltas = function () {
                    return this.lastDownDeltas;
                  }),
                  e
                );
              })();
            }.call(v));
          }),
          L = {
            hasWheelEvent: "onwheel" in document,
            hasMouseWheelEvent: "onmousewheel" in document,
            hasTouch:
              "ontouchstart" in window ||
              window.TouchEvent ||
              (window.DocumentTouch && document instanceof DocumentTouch),
            hasTouchWin:
              navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
            hasPointer: !!window.navigator.msPointerEnabled,
            hasKeyDown: "onkeydown" in document,
            isFirefox: navigator.userAgent.indexOf("Firefox") > -1,
          },
          P = Object.prototype.toString,
          O = Object.prototype.hasOwnProperty;
        function A(e, t) {
          return function () {
            return e.apply(t, arguments);
          };
        }
        var D = M.Lethargy,
          z = "virtualscroll",
          $ = B,
          I = 37,
          j = 38,
          N = 39,
          R = 40,
          H = 32;
        function B(e) {
          !(function (e) {
            if (!e)
              return console.warn("bindAll requires at least one argument.");
            var t = Array.prototype.slice.call(arguments, 1);
            if (0 === t.length)
              for (var n in e)
                O.call(e, n) &&
                  "function" == typeof e[n] &&
                  "[object Function]" == P.call(e[n]) &&
                  t.push(n);
            for (var i = 0; i < t.length; i++) {
              var r = t[i];
              e[r] = A(e[r], e);
            }
          })(
            this,
            "_onWheel",
            "_onMouseWheel",
            "_onTouchStart",
            "_onTouchMove",
            "_onKeyDown"
          ),
            (this.el = window),
            e && e.el && ((this.el = e.el), delete e.el),
            (this.options = C(
              {
                mouseMultiplier: 1,
                touchMultiplier: 2,
                firefoxMultiplier: 15,
                keyStep: 120,
                preventTouch: !1,
                unpreventTouchClass: "vs-touchmove-allowed",
                limitInertia: !1,
                useKeyboard: !0,
                useTouch: !0,
              },
              e
            )),
            this.options.limitInertia && (this._lethargy = new D()),
            (this._emitter = new k()),
            (this._event = { y: 0, x: 0, deltaX: 0, deltaY: 0 }),
            (this.touchStartX = null),
            (this.touchStartY = null),
            (this.bodyTouchAction = null),
            void 0 !== this.options.passive &&
              (this.listenerOptions = { passive: this.options.passive });
        }
        function q(e, t, n) {
          return (1 - n) * e + n * t;
        }
        function F(e) {
          var t = {};
          if (window.getComputedStyle) {
            var n = getComputedStyle(e),
              i = n.transform || n.webkitTransform || n.mozTransform,
              r = i.match(/^matrix3d\((.+)\)$/);
            return (
              r
                ? ((t.x = r ? parseFloat(r[1].split(", ")[12]) : 0),
                  (t.y = r ? parseFloat(r[1].split(", ")[13]) : 0))
                : ((r = i.match(/^matrix\((.+)\)$/)),
                  (t.x = r ? parseFloat(r[1].split(", ")[4]) : 0),
                  (t.y = r ? parseFloat(r[1].split(", ")[5]) : 0)),
              t
            );
          }
        }
        function W(e) {
          for (var t = []; e && e !== document; e = e.parentNode) t.push(e);
          return t;
        }
        (B.prototype._notify = function (e) {
          var t = this._event;
          (t.x += t.deltaX),
            (t.y += t.deltaY),
            this._emitter.emit(z, {
              x: t.x,
              y: t.y,
              deltaX: t.deltaX,
              deltaY: t.deltaY,
              originalEvent: e,
            });
        }),
          (B.prototype._onWheel = function (e) {
            var t = this.options;
            if (!this._lethargy || !1 !== this._lethargy.check(e)) {
              var n = this._event;
              (n.deltaX = e.wheelDeltaX || -1 * e.deltaX),
                (n.deltaY = e.wheelDeltaY || -1 * e.deltaY),
                L.isFirefox &&
                  1 == e.deltaMode &&
                  ((n.deltaX *= t.firefoxMultiplier),
                  (n.deltaY *= t.firefoxMultiplier)),
                (n.deltaX *= t.mouseMultiplier),
                (n.deltaY *= t.mouseMultiplier),
                this._notify(e);
            }
          }),
          (B.prototype._onMouseWheel = function (e) {
            if (!this.options.limitInertia || !1 !== this._lethargy.check(e)) {
              var t = this._event;
              (t.deltaX = e.wheelDeltaX ? e.wheelDeltaX : 0),
                (t.deltaY = e.wheelDeltaY ? e.wheelDeltaY : e.wheelDelta),
                this._notify(e);
            }
          }),
          (B.prototype._onTouchStart = function (e) {
            var t = e.targetTouches ? e.targetTouches[0] : e;
            (this.touchStartX = t.pageX), (this.touchStartY = t.pageY);
          }),
          (B.prototype._onTouchMove = function (e) {
            var t = this.options;
            t.preventTouch &&
              !e.target.classList.contains(t.unpreventTouchClass) &&
              e.preventDefault();
            var n = this._event,
              i = e.targetTouches ? e.targetTouches[0] : e;
            (n.deltaX = (i.pageX - this.touchStartX) * t.touchMultiplier),
              (n.deltaY = (i.pageY - this.touchStartY) * t.touchMultiplier),
              (this.touchStartX = i.pageX),
              (this.touchStartY = i.pageY),
              this._notify(e);
          }),
          (B.prototype._onKeyDown = function (e) {
            var t = this._event;
            t.deltaX = t.deltaY = 0;
            var n = window.innerHeight - 40;
            switch (e.keyCode) {
              case I:
              case j:
                t.deltaY = this.options.keyStep;
                break;
              case N:
              case R:
                t.deltaY = -this.options.keyStep;
                break;
              case e.shiftKey:
                t.deltaY = n;
                break;
              case H:
                t.deltaY = -n;
                break;
              default:
                return;
            }
            this._notify(e);
          }),
          (B.prototype._bind = function () {
            L.hasWheelEvent &&
              this.el.addEventListener(
                "wheel",
                this._onWheel,
                this.listenerOptions
              ),
              L.hasMouseWheelEvent &&
                this.el.addEventListener(
                  "mousewheel",
                  this._onMouseWheel,
                  this.listenerOptions
                ),
              L.hasTouch &&
                this.options.useTouch &&
                (this.el.addEventListener(
                  "touchstart",
                  this._onTouchStart,
                  this.listenerOptions
                ),
                this.el.addEventListener(
                  "touchmove",
                  this._onTouchMove,
                  this.listenerOptions
                )),
              L.hasPointer &&
                L.hasTouchWin &&
                ((this.bodyTouchAction = document.body.style.msTouchAction),
                (document.body.style.msTouchAction = "none"),
                this.el.addEventListener(
                  "MSPointerDown",
                  this._onTouchStart,
                  !0
                ),
                this.el.addEventListener(
                  "MSPointerMove",
                  this._onTouchMove,
                  !0
                )),
              L.hasKeyDown &&
                this.options.useKeyboard &&
                document.addEventListener("keydown", this._onKeyDown);
          }),
          (B.prototype._unbind = function () {
            L.hasWheelEvent &&
              this.el.removeEventListener("wheel", this._onWheel),
              L.hasMouseWheelEvent &&
                this.el.removeEventListener("mousewheel", this._onMouseWheel),
              L.hasTouch &&
                (this.el.removeEventListener("touchstart", this._onTouchStart),
                this.el.removeEventListener("touchmove", this._onTouchMove)),
              L.hasPointer &&
                L.hasTouchWin &&
                ((document.body.style.msTouchAction = this.bodyTouchAction),
                this.el.removeEventListener(
                  "MSPointerDown",
                  this._onTouchStart,
                  !0
                ),
                this.el.removeEventListener(
                  "MSPointerMove",
                  this._onTouchMove,
                  !0
                )),
              L.hasKeyDown &&
                this.options.useKeyboard &&
                document.removeEventListener("keydown", this._onKeyDown);
          }),
          (B.prototype.on = function (e, t) {
            this._emitter.on(z, e, t);
            var n = this._emitter.e;
            n && n[z] && 1 === n[z].length && this._bind();
          }),
          (B.prototype.off = function (e, t) {
            this._emitter.off(z, e, t);
            var n = this._emitter.e;
            (!n[z] || n[z].length <= 0) && this._unbind();
          }),
          (B.prototype.reset = function () {
            var e = this._event;
            (e.x = 0), (e.y = 0);
          }),
          (B.prototype.destroy = function () {
            this._emitter.off(), this._unbind();
          });
        var Y = "function" == typeof Float32Array;
        function X(e, t) {
          return 1 - 3 * t + 3 * e;
        }
        function V(e, t) {
          return 3 * t - 6 * e;
        }
        function G(e) {
          return 3 * e;
        }
        function U(e, t, n) {
          return ((X(t, n) * e + V(t, n)) * e + G(t)) * e;
        }
        function K(e, t, n) {
          return 3 * X(t, n) * e * e + 2 * V(t, n) * e + G(t);
        }
        function Q(e) {
          return e;
        }
        var Z = function (e, t, n, i) {
            if (!(0 <= e && e <= 1 && 0 <= n && n <= 1))
              throw new Error("bezier x values must be in [0, 1] range");
            if (e === t && n === i) return Q;
            for (
              var r = Y ? new Float32Array(11) : new Array(11), s = 0;
              s < 11;
              ++s
            )
              r[s] = U(0.1 * s, e, n);
            function o(t) {
              for (var i = 0, s = 1; 10 !== s && r[s] <= t; ++s) i += 0.1;
              --s;
              var o = i + 0.1 * ((t - r[s]) / (r[s + 1] - r[s])),
                a = K(o, e, n);
              return a >= 0.001
                ? (function (e, t, n, i) {
                    for (var r = 0; r < 4; ++r) {
                      var s = K(t, n, i);
                      if (0 === s) return t;
                      t -= (U(t, n, i) - e) / s;
                    }
                    return t;
                  })(t, o, e, n)
                : 0 === a
                ? o
                : (function (e, t, n, i, r) {
                    var s,
                      o,
                      a = 0;
                    do {
                      (s = U((o = t + (n - t) / 2), i, r) - e) > 0
                        ? (n = o)
                        : (t = o);
                    } while (Math.abs(s) > 1e-7 && ++a < 10);
                    return o;
                  })(t, i, i + 0.1, e, n);
            }
            return function (e) {
              return 0 === e ? 0 : 1 === e ? 1 : U(o(e), t, i);
            };
          },
          J = 38,
          ee = 40,
          te = 32,
          ne = 9,
          ie = 33,
          re = 34,
          se = 36,
          oe = 35,
          ae = (function (e) {
            function t() {
              var e,
                i =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
              return (
                n(this, t),
                window.scrollTo(0, 0),
                (history.scrollRestoration = "manual"),
                (e = h(this, c(t).call(this, i))).inertia &&
                  (e.lerp = 0.1 * e.inertia),
                (e.isScrolling = !1),
                (e.isDraggingScrollbar = !1),
                (e.isTicking = !1),
                (e.hasScrollTicking = !1),
                (e.parallaxElements = []),
                (e.stop = !1),
                (e.checkKey = e.checkKey.bind(d(e))),
                window.addEventListener("keydown", e.checkKey, !1),
                e
              );
            }
            return (
              l(t, e),
              r(t, [
                {
                  key: "init",
                  value: function () {
                    var e = this;
                    this.html.classList.add(this.smoothClass),
                      (this.instance = a(
                        { delta: { x: 0, y: 0 } },
                        this.instance
                      )),
                      (this.vs = new $({
                        el: this.scrollFromAnywhere ? document : this.el,
                        mouseMultiplier:
                          navigator.platform.indexOf("Win") > -1 ? 1 : 0.4,
                        firefoxMultiplier: this.firefoxMultiplier,
                        touchMultiplier: this.touchMultiplier,
                        useKeyboard: !1,
                        passive: !0,
                      })),
                      this.vs.on(function (t) {
                        e.stop ||
                          (e.isTicking ||
                            e.isDraggingScrollbar ||
                            (requestAnimationFrame(function () {
                              e.updateDelta(t),
                                e.isScrolling || e.startScrolling();
                            }),
                            (e.isTicking = !0)),
                          (e.isTicking = !1));
                      }),
                      this.setScrollLimit(),
                      this.initScrollBar(),
                      this.addSections(),
                      this.addElements(),
                      this.detectElements(),
                      this.transformElements(!0, !0),
                      this.checkScroll(!0),
                      p(c(t.prototype), "init", this).call(this);
                  },
                },
                {
                  key: "setScrollLimit",
                  value: function () {
                    this.instance.limit =
                      this.el.offsetHeight - this.windowHeight;
                  },
                },
                {
                  key: "startScrolling",
                  value: function () {
                    (this.isScrolling = !0),
                      this.checkScroll(),
                      this.html.classList.add(this.scrollingClass);
                  },
                },
                {
                  key: "stopScrolling",
                  value: function () {
                    this.scrollToRaf &&
                      (cancelAnimationFrame(this.scrollToRaf),
                      (this.scrollToRaf = null)),
                      (this.isScrolling = !1),
                      (this.instance.scroll.y = Math.round(
                        this.instance.scroll.y
                      )),
                      this.html.classList.remove(this.scrollingClass);
                  },
                },
                {
                  key: "checkKey",
                  value: function (e) {
                    var t = this;
                    if (this.stop)
                      e.keyCode == ne &&
                        requestAnimationFrame(function () {
                          (t.html.scrollTop = 0), (document.body.scrollTop = 0);
                        });
                    else {
                      switch (e.keyCode) {
                        case ne:
                          requestAnimationFrame(function () {
                            (t.html.scrollTop = 0),
                              (document.body.scrollTop = 0),
                              t.scrollTo(
                                document.activeElement,
                                -window.innerHeight / 2
                              );
                          });
                          break;
                        case J:
                          this.instance.delta.y -= 240;
                          break;
                        case ee:
                          this.instance.delta.y += 240;
                          break;
                        case ie:
                          this.instance.delta.y -= window.innerHeight;
                          break;
                        case re:
                          this.instance.delta.y += window.innerHeight;
                          break;
                        case se:
                          this.instance.delta.y -= this.instance.limit;
                          break;
                        case oe:
                          this.instance.delta.y += this.instance.limit;
                          break;
                        case te:
                          document.activeElement instanceof HTMLInputElement ||
                            document.activeElement instanceof
                              HTMLTextAreaElement ||
                            (e.shiftKey
                              ? (this.instance.delta.y -= window.innerHeight)
                              : (this.instance.delta.y += window.innerHeight));
                          break;
                        default:
                          return;
                      }
                      this.instance.delta.y < 0 && (this.instance.delta.y = 0),
                        this.instance.delta.y > this.instance.limit &&
                          (this.instance.delta.y = this.instance.limit),
                        (this.isScrolling = !0),
                        this.checkScroll(),
                        this.html.classList.add(this.scrollingClass);
                    }
                  },
                },
                {
                  key: "checkScroll",
                  value: function () {
                    var e = this,
                      n =
                        arguments.length > 0 &&
                        void 0 !== arguments[0] &&
                        arguments[0];
                    if (n || this.isScrolling || this.isDraggingScrollbar) {
                      this.hasScrollTicking ||
                        (requestAnimationFrame(function () {
                          return e.checkScroll();
                        }),
                        (this.hasScrollTicking = !0)),
                        this.updateScroll();
                      var i = Math.abs(
                        this.instance.delta.y - this.instance.scroll.y
                      );
                      !this.animatingScroll &&
                        ((i < 0.5 && 0 != this.instance.delta.y) ||
                          (i < 0.5 && 0 == this.instance.delta.y)) &&
                        this.stopScrolling();
                      for (var r = this.sections.length - 1; r >= 0; r--)
                        this.sections[r].persistent ||
                        (this.instance.scroll.y > this.sections[r].offset &&
                          this.instance.scroll.y < this.sections[r].limit)
                          ? (this.transform(
                              this.sections[r].el,
                              0,
                              -this.instance.scroll.y
                            ),
                            this.sections[r].inView ||
                              ((this.sections[r].inView = !0),
                              (this.sections[r].el.style.opacity = 1),
                              (this.sections[r].el.style.pointerEvents = "all"),
                              this.sections[r].el.setAttribute(
                                "data-".concat(this.name, "-section-inview"),
                                ""
                              )))
                          : (this.sections[r].inView &&
                              ((this.sections[r].inView = !1),
                              (this.sections[r].el.style.opacity = 0),
                              (this.sections[r].el.style.pointerEvents =
                                "none"),
                              this.sections[r].el.removeAttribute(
                                "data-".concat(this.name, "-section-inview")
                              )),
                            this.transform(this.sections[r].el, 0, 0));
                      this.getDirection && this.addDirection(),
                        this.getSpeed &&
                          (this.addSpeed(), (this.timestamp = Date.now())),
                        this.detectElements(),
                        this.transformElements();
                      var s =
                        (this.instance.scroll.y / this.instance.limit) *
                        this.scrollBarLimit;
                      this.transform(this.scrollbarThumb, 0, s),
                        p(c(t.prototype), "checkScroll", this).call(this),
                        (this.hasScrollTicking = !1);
                    }
                  },
                },
                {
                  key: "resize",
                  value: function () {
                    (this.windowHeight = window.innerHeight),
                      (this.windowMiddle = this.windowHeight / 2),
                      this.update();
                  },
                },
                {
                  key: "updateDelta",
                  value: function (e) {
                    (this.instance.delta.y -= e.deltaY * this.multiplier),
                      this.instance.delta.y < 0 && (this.instance.delta.y = 0),
                      this.instance.delta.y > this.instance.limit &&
                        (this.instance.delta.y = this.instance.limit);
                  },
                },
                {
                  key: "updateScroll",
                  value: function (e) {
                    this.isScrolling || this.isDraggingScrollbar
                      ? (this.instance.scroll.y = q(
                          this.instance.scroll.y,
                          this.instance.delta.y,
                          this.lerp
                        ))
                      : this.instance.scroll.y > this.instance.limit
                      ? this.setScroll(
                          this.instance.scroll.x,
                          this.instance.limit
                        )
                      : this.instance.scroll.y < 0
                      ? this.setScroll(this.instance.scroll.x, 0)
                      : this.setScroll(
                          this.instance.scroll.x,
                          this.instance.delta.y
                        );
                  },
                },
                {
                  key: "addDirection",
                  value: function () {
                    this.instance.delta.y > this.instance.scroll.y
                      ? "down" !== this.instance.direction &&
                        (this.instance.direction = "down")
                      : this.instance.delta.y < this.instance.scroll.y &&
                        "up" !== this.instance.direction &&
                        (this.instance.direction = "up");
                  },
                },
                {
                  key: "addSpeed",
                  value: function () {
                    this.instance.delta.y != this.instance.scroll.y
                      ? (this.instance.speed =
                          (this.instance.delta.y - this.instance.scroll.y) /
                          Math.max(1, Date.now() - this.timestamp))
                      : (this.instance.speed = 0);
                  },
                },
                {
                  key: "initScrollBar",
                  value: function () {
                    (this.scrollbar = document.createElement("span")),
                      (this.scrollbarThumb = document.createElement("span")),
                      this.scrollbar.classList.add(
                        "".concat(this.scrollbarClass)
                      ),
                      this.scrollbarThumb.classList.add(
                        "".concat(this.scrollbarClass, "_thumb")
                      ),
                      this.scrollbar.append(this.scrollbarThumb),
                      document.body.append(this.scrollbar),
                      (this.getScrollBar = this.getScrollBar.bind(this)),
                      (this.releaseScrollBar =
                        this.releaseScrollBar.bind(this)),
                      (this.moveScrollBar = this.moveScrollBar.bind(this)),
                      this.scrollbarThumb.addEventListener(
                        "mousedown",
                        this.getScrollBar
                      ),
                      window.addEventListener("mouseup", this.releaseScrollBar),
                      window.addEventListener("mousemove", this.moveScrollBar),
                      this.instance.limit + this.windowHeight <=
                        this.windowHeight ||
                        ((this.scrollbarHeight =
                          this.scrollbar.getBoundingClientRect().height),
                        (this.scrollbarThumb.style.height = "".concat(
                          (this.scrollbarHeight * this.scrollbarHeight) /
                            (this.instance.limit + this.scrollbarHeight),
                          "px"
                        )),
                        (this.scrollBarLimit =
                          this.scrollbarHeight -
                          this.scrollbarThumb.getBoundingClientRect().height));
                  },
                },
                {
                  key: "reinitScrollBar",
                  value: function () {
                    this.instance.limit + this.windowHeight <=
                      this.windowHeight ||
                      ((this.scrollbarHeight =
                        this.scrollbar.getBoundingClientRect().height),
                      (this.scrollbarThumb.style.height = "".concat(
                        (this.scrollbarHeight * this.scrollbarHeight) /
                          (this.instance.limit + this.scrollbarHeight),
                        "px"
                      )),
                      (this.scrollBarLimit =
                        this.scrollbarHeight -
                        this.scrollbarThumb.getBoundingClientRect().height));
                  },
                },
                {
                  key: "destroyScrollBar",
                  value: function () {
                    this.scrollbarThumb.removeEventListener(
                      "mousedown",
                      this.getScrollBar
                    ),
                      window.removeEventListener(
                        "mouseup",
                        this.releaseScrollBar
                      ),
                      window.removeEventListener(
                        "mousemove",
                        this.moveScrollBar
                      ),
                      this.scrollbar.remove();
                  },
                },
                {
                  key: "getScrollBar",
                  value: function (e) {
                    (this.isDraggingScrollbar = !0),
                      this.checkScroll(),
                      this.html.classList.remove(this.scrollingClass),
                      this.html.classList.add(this.draggingClass);
                  },
                },
                {
                  key: "releaseScrollBar",
                  value: function (e) {
                    (this.isDraggingScrollbar = !1),
                      this.html.classList.add(this.scrollingClass),
                      this.html.classList.remove(this.draggingClass);
                  },
                },
                {
                  key: "moveScrollBar",
                  value: function (e) {
                    var t = this;
                    !this.isTicking &&
                      this.isDraggingScrollbar &&
                      (requestAnimationFrame(function () {
                        var n =
                          (((100 * e.clientY) / t.scrollbarHeight) *
                            t.instance.limit) /
                          100;
                        n > 0 &&
                          n < t.instance.limit &&
                          (t.instance.delta.y = n);
                      }),
                      (this.isTicking = !0)),
                      (this.isTicking = !1);
                  },
                },
                {
                  key: "addElements",
                  value: function () {
                    var e = this;
                    (this.els = []),
                      (this.parallaxElements = []),
                      this.sections.forEach(function (t, n) {
                        e.sections[n].el
                          .querySelectorAll("[data-".concat(e.name, "]"))
                          .forEach(function (t, i) {
                            var r,
                              s,
                              o = t.dataset[e.name + "Class"] || e.class,
                              a = t.dataset[e.name + "Repeat"],
                              l = t.dataset[e.name + "Call"],
                              c = t.dataset[e.name + "Position"],
                              u = t.dataset[e.name + "Delay"],
                              d = t.dataset[e.name + "Direction"],
                              h =
                                "string" == typeof t.dataset[e.name + "Sticky"],
                              p =
                                !!t.dataset[e.name + "Speed"] &&
                                parseFloat(t.dataset[e.name + "Speed"]) / 10,
                              f =
                                "string" == typeof t.dataset[e.name + "Offset"]
                                  ? t.dataset[e.name + "Offset"].split(",")
                                  : e.offset,
                              m = t.dataset[e.name + "Target"];
                            s =
                              void 0 !== m
                                ? document.querySelector("".concat(m))
                                : t;
                            var g =
                                (r = e.sections[n].inView
                                  ? s.getBoundingClientRect().top +
                                    e.instance.scroll.y -
                                    F(s).y
                                  : s.getBoundingClientRect().top -
                                    F(e.sections[n].el).y -
                                    F(s).y) + s.offsetHeight,
                              v = (g - r) / 2 + r;
                            if (h) {
                              var y = t.getBoundingClientRect().top,
                                b = y - r;
                              (r += window.innerHeight),
                                (v =
                                  ((g =
                                    y + s.offsetHeight - t.offsetHeight - b) -
                                    r) /
                                    2 +
                                  r);
                            }
                            a = "false" != a && (null != a || e.repeat);
                            var w = [0, 0];
                            if (f)
                              for (var x = 0; x < f.length; x++)
                                "string" == typeof f[x]
                                  ? f[x].includes("%")
                                    ? (w[x] = parseInt(
                                        (f[x].replace("%", "") *
                                          e.windowHeight) /
                                          100
                                      ))
                                    : (w[x] = parseInt(f[x]))
                                  : (w[x] = f[x]);
                            var T = {
                              el: t,
                              id: i,
                              class: o,
                              top: r + w[0],
                              middle: v,
                              bottom: g - w[1],
                              offset: f,
                              repeat: a,
                              inView: !!t.classList.contains(o),
                              call: l,
                              speed: p,
                              delay: u,
                              position: c,
                              target: s,
                              direction: d,
                              sticky: h,
                            };
                            e.els.push(T),
                              (!1 !== p || h) && e.parallaxElements.push(T);
                          });
                      });
                  },
                },
                {
                  key: "addSections",
                  value: function () {
                    var e = this;
                    this.sections = [];
                    var t = this.el.querySelectorAll(
                      "[data-".concat(this.name, "-section]")
                    );
                    0 === t.length && (t = [this.el]),
                      t.forEach(function (t, n) {
                        var i =
                            t.getBoundingClientRect().top -
                            1.5 * window.innerHeight -
                            F(t).y,
                          r =
                            i +
                            t.getBoundingClientRect().height +
                            2 * window.innerHeight,
                          s = {
                            el: t,
                            offset: i,
                            limit: r,
                            inView: !1,
                            persistent:
                              "string" ==
                              typeof t.dataset[e.name + "Persistent"],
                          };
                        e.sections[n] = s;
                      });
                  },
                },
                {
                  key: "transform",
                  value: function (e, t, n, i) {
                    var r;
                    if (i) {
                      var s = F(e),
                        o = q(s.x, t, i),
                        a = q(s.y, n, i);
                      r = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,"
                        .concat(o, ",")
                        .concat(a, ",0,1)");
                    } else
                      r = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,"
                        .concat(t, ",")
                        .concat(n, ",0,1)");
                    (e.style.webkitTransform = r),
                      (e.style.msTransform = r),
                      (e.style.transform = r);
                  },
                },
                {
                  key: "transformElements",
                  value: function (e) {
                    var t = this,
                      n =
                        arguments.length > 1 &&
                        void 0 !== arguments[1] &&
                        arguments[1],
                      i = this.instance.scroll.y + this.windowHeight,
                      r = this.instance.scroll.y + this.windowMiddle;
                    this.parallaxElements.forEach(function (s, o) {
                      var a = !1;
                      if ((e && (a = 0), s.inView || n))
                        switch (s.position) {
                          case "top":
                            a = t.instance.scroll.y * -s.speed;
                            break;
                          case "elementTop":
                            a = (i - s.top) * -s.speed;
                            break;
                          case "bottom":
                            a =
                              (t.instance.limit - i + t.windowHeight) * s.speed;
                            break;
                          default:
                            a = (r - s.middle) * -s.speed;
                        }
                      s.sticky &&
                        (a = s.inView
                          ? t.instance.scroll.y - s.top + window.innerHeight
                          : t.instance.scroll.y < s.top - window.innerHeight &&
                            t.instance.scroll.y < s.top - window.innerHeight / 2
                          ? 0
                          : t.instance.scroll.y > s.bottom &&
                            t.instance.scroll.y > s.bottom + 100 &&
                            s.bottom - s.top + window.innerHeight),
                        !1 !== a &&
                          ("horizontal" === s.direction
                            ? t.transform(s.el, a, 0, !e && s.delay)
                            : t.transform(s.el, 0, a, !e && s.delay));
                    });
                  },
                },
                {
                  key: "scrollTo",
                  value: function (e, t) {
                    var n,
                      i = this,
                      r =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : 1e3,
                      s =
                        arguments.length > 3 && void 0 !== arguments[3]
                          ? arguments[3]
                          : [0.25, 0, 0.35, 1],
                      o =
                        arguments.length > 4 &&
                        void 0 !== arguments[4] &&
                        arguments[4],
                      a = arguments.length > 5 ? arguments[5] : void 0,
                      l = t ? parseInt(t) : 0;
                    if (((s = Z.apply(void 0, f(s))), "string" == typeof e)) {
                      if ("top" === e) n = 0;
                      else if ("bottom" === e) n = this.instance.limit;
                      else if (!(n = document.querySelector(e))) return;
                    } else if ("number" == typeof e) n = parseInt(e);
                    else {
                      if (!e || !e.tagName)
                        return void console.warn(
                          "`targetOption` parameter is not valid"
                        );
                      n = e;
                    }
                    if ("number" != typeof n) {
                      var c = W(n).includes(this.el);
                      if (!c) return;
                      var u = n.getBoundingClientRect(),
                        d = u.top,
                        h = W(n),
                        p = h.find(function (e) {
                          return i.sections.find(function (t) {
                            return t.el == e;
                          });
                        }),
                        m = 0;
                      p && (m = F(p).y), (l = d + l - m);
                    } else l = n + l;
                    var g = parseFloat(this.instance.delta.y),
                      v = Math.max(0, Math.min(l, this.instance.limit)),
                      y = v - g,
                      b = function (e) {
                        o
                          ? i.setScroll(i.instance.delta.x, g + y * e)
                          : (i.instance.delta.y = g + y * e);
                      };
                    (this.animatingScroll = !0),
                      this.stopScrolling(),
                      this.startScrolling();
                    var w = Date.now(),
                      x = function e() {
                        var t = (Date.now() - w) / r;
                        t > 1
                          ? (b(1),
                            (i.animatingScroll = !1),
                            0 == r && i.update(),
                            a && a())
                          : ((i.scrollToRaf = requestAnimationFrame(e)),
                            b(s(t)));
                      };
                    x();
                  },
                },
                {
                  key: "update",
                  value: function () {
                    this.setScrollLimit(),
                      this.addSections(),
                      this.addElements(),
                      this.detectElements(),
                      this.updateScroll(),
                      this.transformElements(!0),
                      this.reinitScrollBar(),
                      this.checkScroll(!0);
                  },
                },
                {
                  key: "startScroll",
                  value: function () {
                    this.stop = !1;
                  },
                },
                {
                  key: "stopScroll",
                  value: function () {
                    this.stop = !0;
                  },
                },
                {
                  key: "setScroll",
                  value: function (e, t) {
                    this.instance = a({}, this.instance, {
                      scroll: { x: e, y: t },
                      delta: { x: e, y: t },
                      speed: 0,
                    });
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    p(c(t.prototype), "destroy", this).call(this),
                      this.stopScrolling(),
                      this.html.classList.remove(this.smoothClass),
                      this.vs.destroy(),
                      this.destroyScrollBar(),
                      window.removeEventListener("keydown", this.checkKey, !1);
                  },
                },
              ]),
              t
            );
          })(g),
          le = (function () {
            function e() {
              var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              n(this, e),
                (this.options = t),
                Object.assign(this, m, t),
                this.init();
            }
            return (
              r(e, [
                {
                  key: "init",
                  value: function () {
                    if (
                      (this.smoothMobile ||
                        (this.isMobile =
                          /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                            navigator.userAgent
                          ) ||
                          ("MacIntel" === navigator.platform &&
                            navigator.maxTouchPoints > 1)),
                      !0 !== this.smooth || this.isMobile
                        ? (this.scroll = new w(this.options))
                        : (this.scroll = new ae(this.options)),
                      this.scroll.init(),
                      window.location.hash)
                    ) {
                      var e = window.location.hash.slice(
                          1,
                          window.location.hash.length
                        ),
                        t = document.getElementById(e);
                      t && this.scroll.scrollTo(t);
                    }
                  },
                },
                {
                  key: "update",
                  value: function () {
                    this.scroll.update();
                  },
                },
                {
                  key: "start",
                  value: function () {
                    this.scroll.startScroll();
                  },
                },
                {
                  key: "stop",
                  value: function () {
                    this.scroll.stopScroll();
                  },
                },
                {
                  key: "scrollTo",
                  value: function (e, t, n, i, r, s) {
                    this.scroll.scrollTo(e, t, n, i, r, s);
                  },
                },
                {
                  key: "setScroll",
                  value: function (e, t) {
                    this.scroll.setScroll(e, t);
                  },
                },
                {
                  key: "on",
                  value: function (e, t) {
                    this.scroll.setEvents(e, t);
                  },
                },
                {
                  key: "off",
                  value: function (e, t) {
                    this.scroll.unsetEvents(e, t);
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    this.scroll.destroy();
                  },
                },
              ]),
              e
            );
          })();
        t.a = le;
      }.call(this, n(53)));
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {
      var i, r, s, o, a, l, c, u, d, h, p, f, m, g, v;
      /*!
       * Masonry PACKAGED v4.2.2
       * Cascading grid layout library
       * https://masonry.desandro.com
       * MIT License
       * by David DeSandro
       */
      !(function (i, r) {
        (g = [n(1)]),
          void 0 ===
            (v = function (e) {
              return (function (e, t) {
                "use strict";
                var n = Array.prototype.slice,
                  i = e.console,
                  r =
                    void 0 === i
                      ? function () {}
                      : function (e) {
                          i.error(e);
                        };
                function s(i, s, a) {
                  function l(e, t, n) {
                    var s,
                      o = "$()." + i + '("' + t + '")';
                    return (
                      e.each(function (e, l) {
                        var c = a.data(l, i);
                        if (c) {
                          var u = c[t];
                          if (u && "_" != t.charAt(0)) {
                            var d = u.apply(c, n);
                            s = void 0 === s ? d : s;
                          } else r(o + " is not a valid method");
                        } else r(i + " not initialized. Cannot call methods, i.e. " + o);
                      }),
                      void 0 !== s ? s : e
                    );
                  }
                  function c(e, t) {
                    e.each(function (e, n) {
                      var r = a.data(n, i);
                      r
                        ? (r.option(t), r._init())
                        : ((r = new s(n, t)), a.data(n, i, r));
                    });
                  }
                  (a = a || t || e.jQuery) &&
                    (s.prototype.option ||
                      (s.prototype.option = function (e) {
                        a.isPlainObject(e) &&
                          (this.options = a.extend(!0, this.options, e));
                      }),
                    (a.fn[i] = function (e) {
                      if ("string" == typeof e) {
                        var t = n.call(arguments, 1);
                        return l(this, e, t);
                      }
                      return c(this, e), this;
                    }),
                    o(a));
                }
                function o(e) {
                  !e || (e && e.bridget) || (e.bridget = s);
                }
                return o(t || e.jQuery), s;
              })(i, e);
            }.apply(t, g)) || (e.exports = v);
      })(window),
        "undefined" != typeof window && window,
        (s = { id: "ev-emitter/ev-emitter", exports: {}, loaded: !1 }),
        (i =
          "function" ==
          typeof (r = function () {
            function e() {}
            var t = e.prototype;
            return (
              (t.on = function (e, t) {
                if (e && t) {
                  var n = (this._events = this._events || {}),
                    i = (n[e] = n[e] || []);
                  return -1 == i.indexOf(t) && i.push(t), this;
                }
              }),
              (t.once = function (e, t) {
                if (e && t) {
                  this.on(e, t);
                  var n = (this._onceEvents = this._onceEvents || {});
                  return ((n[e] = n[e] || {})[t] = !0), this;
                }
              }),
              (t.off = function (e, t) {
                var n = this._events && this._events[e];
                if (n && n.length) {
                  var i = n.indexOf(t);
                  return -1 != i && n.splice(i, 1), this;
                }
              }),
              (t.emitEvent = function (e, t) {
                var n = this._events && this._events[e];
                if (n && n.length) {
                  (n = n.slice(0)), (t = t || []);
                  for (
                    var i = this._onceEvents && this._onceEvents[e], r = 0;
                    r < n.length;
                    r++
                  ) {
                    var s = n[r];
                    i && i[s] && (this.off(e, s), delete i[s]),
                      s.apply(this, t);
                  }
                  return this;
                }
              }),
              (t.allOff = function () {
                delete this._events, delete this._onceEvents;
              }),
              e
            );
          })
            ? r.call(s.exports, n, s.exports, s)
            : r),
        (s.loaded = !0),
        void 0 !== i || (i = s.exports),
        window,
        (l = { id: "get-size/get-size", exports: {}, loaded: !1 }),
        (o =
          "function" ==
          typeof (a = function () {
            "use strict";
            function e(e) {
              var t = parseFloat(e);
              return -1 == e.indexOf("%") && !isNaN(t) && t;
            }
            var t =
                "undefined" == typeof console
                  ? function () {}
                  : function (e) {
                      console.error(e);
                    },
              n = [
                "paddingLeft",
                "paddingRight",
                "paddingTop",
                "paddingBottom",
                "marginLeft",
                "marginRight",
                "marginTop",
                "marginBottom",
                "borderLeftWidth",
                "borderRightWidth",
                "borderTopWidth",
                "borderBottomWidth",
              ],
              i = n.length;
            function r(e) {
              var n = getComputedStyle(e);
              return (
                n ||
                  t(
                    "Style returned " +
                      n +
                      ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"
                  ),
                n
              );
            }
            var s,
              o = !1;
            function a(t) {
              if (
                ((function () {
                  if (!o) {
                    o = !0;
                    var t = document.createElement("div");
                    (t.style.width = "200px"),
                      (t.style.padding = "1px 2px 3px 4px"),
                      (t.style.borderStyle = "solid"),
                      (t.style.borderWidth = "1px 2px 3px 4px"),
                      (t.style.boxSizing = "border-box");
                    var n = document.body || document.documentElement;
                    n.appendChild(t);
                    var i = r(t);
                    (s = 200 == Math.round(e(i.width))),
                      (a.isBoxSizeOuter = s),
                      n.removeChild(t);
                  }
                })(),
                "string" == typeof t && (t = document.querySelector(t)),
                t && "object" == typeof t && t.nodeType)
              ) {
                var l = r(t);
                if ("none" == l.display)
                  return (function () {
                    for (
                      var e = {
                          width: 0,
                          height: 0,
                          innerWidth: 0,
                          innerHeight: 0,
                          outerWidth: 0,
                          outerHeight: 0,
                        },
                        t = 0;
                      t < i;
                      t++
                    )
                      e[n[t]] = 0;
                    return e;
                  })();
                var c = {};
                (c.width = t.offsetWidth), (c.height = t.offsetHeight);
                for (
                  var u = (c.isBorderBox = "border-box" == l.boxSizing), d = 0;
                  d < i;
                  d++
                ) {
                  var h = n[d],
                    p = l[h],
                    f = parseFloat(p);
                  c[h] = isNaN(f) ? 0 : f;
                }
                var m = c.paddingLeft + c.paddingRight,
                  g = c.paddingTop + c.paddingBottom,
                  v = c.marginLeft + c.marginRight,
                  y = c.marginTop + c.marginBottom,
                  b = c.borderLeftWidth + c.borderRightWidth,
                  w = c.borderTopWidth + c.borderBottomWidth,
                  x = u && s,
                  T = e(l.width);
                !1 !== T && (c.width = T + (x ? 0 : m + b));
                var E = e(l.height);
                return (
                  !1 !== E && (c.height = E + (x ? 0 : g + w)),
                  (c.innerWidth = c.width - (m + b)),
                  (c.innerHeight = c.height - (g + w)),
                  (c.outerWidth = c.width + v),
                  (c.outerHeight = c.height + y),
                  c
                );
              }
            }
            return a;
          })
            ? a.call(l.exports, n, l.exports, l)
            : a),
        (l.loaded = !0),
        void 0 !== o || (o = l.exports),
        (function (e, t) {
          "use strict";
          (d = {
            id: "desandro-matches-selector/matches-selector",
            exports: {},
            loaded: !1,
          }),
            (c =
              "function" == typeof (u = t)
                ? u.call(d.exports, n, d.exports, d)
                : u),
            (d.loaded = !0),
            void 0 !== c || (c = d.exports);
        })(window, function () {
          "use strict";
          var e = (function () {
            var e = window.Element.prototype;
            if (e.matches) return "matches";
            if (e.matchesSelector) return "matchesSelector";
            for (
              var t = ["webkit", "moz", "ms", "o"], n = 0;
              n < t.length;
              n++
            ) {
              var i = t[n] + "MatchesSelector";
              if (e[i]) return i;
            }
          })();
          return function (t, n) {
            return t[e](n);
          };
        }),
        (function (e, n) {
          h = function (t) {
            return (function (e, t) {
              var n = {
                  extend: function (e, t) {
                    for (var n in t) e[n] = t[n];
                    return e;
                  },
                  modulo: function (e, t) {
                    return ((e % t) + t) % t;
                  },
                },
                i = Array.prototype.slice;
              (n.makeArray = function (e) {
                return Array.isArray(e)
                  ? e
                  : null == e
                  ? []
                  : "object" == typeof e && "number" == typeof e.length
                  ? i.call(e)
                  : [e];
              }),
                (n.removeFrom = function (e, t) {
                  var n = e.indexOf(t);
                  -1 != n && e.splice(n, 1);
                }),
                (n.getParent = function (e, n) {
                  for (; e.parentNode && e != document.body; )
                    if (((e = e.parentNode), t(e, n))) return e;
                }),
                (n.getQueryElement = function (e) {
                  return "string" == typeof e ? document.querySelector(e) : e;
                }),
                (n.handleEvent = function (e) {
                  var t = "on" + e.type;
                  this[t] && this[t](e);
                }),
                (n.filterFindElements = function (e, i) {
                  e = n.makeArray(e);
                  var r = [];
                  return (
                    e.forEach(function (e) {
                      if (e instanceof HTMLElement)
                        if (i) {
                          t(e, i) && r.push(e);
                          for (
                            var n = e.querySelectorAll(i), s = 0;
                            s < n.length;
                            s++
                          )
                            r.push(n[s]);
                        } else r.push(e);
                    }),
                    r
                  );
                }),
                (n.debounceMethod = function (e, t, n) {
                  n = n || 100;
                  var i = e.prototype[t],
                    r = t + "Timeout";
                  e.prototype[t] = function () {
                    var e = this[r];
                    clearTimeout(e);
                    var t = arguments,
                      s = this;
                    this[r] = setTimeout(function () {
                      i.apply(s, t), delete s[r];
                    }, n);
                  };
                }),
                (n.docReady = function (e) {
                  var t = document.readyState;
                  "complete" == t || "interactive" == t
                    ? setTimeout(e)
                    : document.addEventListener("DOMContentLoaded", e);
                }),
                (n.toDashed = function (e) {
                  return e
                    .replace(/(.)([A-Z])/g, function (e, t, n) {
                      return t + "-" + n;
                    })
                    .toLowerCase();
                });
              var r = e.console;
              return (
                (n.htmlInit = function (t, i) {
                  n.docReady(function () {
                    var s = n.toDashed(i),
                      o = "data-" + s,
                      a = document.querySelectorAll("[" + o + "]"),
                      l = document.querySelectorAll(".js-" + s),
                      c = n.makeArray(a).concat(n.makeArray(l)),
                      u = o + "-options",
                      d = e.jQuery;
                    c.forEach(function (e) {
                      var n,
                        s = e.getAttribute(o) || e.getAttribute(u);
                      try {
                        n = s && JSON.parse(s);
                      } catch (t) {
                        return void (
                          r &&
                          r.error(
                            "Error parsing " +
                              o +
                              " on " +
                              e.className +
                              ": " +
                              t
                          )
                        );
                      }
                      var a = new t(e, n);
                      d && d.data(e, i, a);
                    });
                  });
                }),
                n
              );
            })(e, t);
          }.apply(t, (g = [c]));
        })(window),
        window,
        (g = [i, o]),
        (p =
          "function" ==
          typeof (m = function (e, t) {
            "use strict";
            var n = document.documentElement.style,
              i =
                "string" == typeof n.transition
                  ? "transition"
                  : "WebkitTransition",
              r =
                "string" == typeof n.transform
                  ? "transform"
                  : "WebkitTransform",
              s = {
                WebkitTransition: "webkitTransitionEnd",
                transition: "transitionend",
              }[i],
              o = {
                transform: r,
                transition: i,
                transitionDuration: i + "Duration",
                transitionProperty: i + "Property",
                transitionDelay: i + "Delay",
              };
            function a(e, t) {
              e &&
                ((this.element = e),
                (this.layout = t),
                (this.position = { x: 0, y: 0 }),
                this._create());
            }
            var l = (a.prototype = Object.create(e.prototype));
            (l.constructor = a),
              (l._create = function () {
                (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }),
                  this.css({ position: "absolute" });
              }),
              (l.handleEvent = function (e) {
                var t = "on" + e.type;
                this[t] && this[t](e);
              }),
              (l.getSize = function () {
                this.size = t(this.element);
              }),
              (l.css = function (e) {
                var t = this.element.style;
                for (var n in e) t[o[n] || n] = e[n];
              }),
              (l.getPosition = function () {
                var e = getComputedStyle(this.element),
                  t = this.layout._getOption("originLeft"),
                  n = this.layout._getOption("originTop"),
                  i = e[t ? "left" : "right"],
                  r = e[n ? "top" : "bottom"],
                  s = parseFloat(i),
                  o = parseFloat(r),
                  a = this.layout.size;
                -1 != i.indexOf("%") && (s = (s / 100) * a.width),
                  -1 != r.indexOf("%") && (o = (o / 100) * a.height),
                  (s = isNaN(s) ? 0 : s),
                  (o = isNaN(o) ? 0 : o),
                  (s -= t ? a.paddingLeft : a.paddingRight),
                  (o -= n ? a.paddingTop : a.paddingBottom),
                  (this.position.x = s),
                  (this.position.y = o);
              }),
              (l.layoutPosition = function () {
                var e = this.layout.size,
                  t = {},
                  n = this.layout._getOption("originLeft"),
                  i = this.layout._getOption("originTop"),
                  r = n ? "paddingLeft" : "paddingRight",
                  s = n ? "left" : "right",
                  o = n ? "right" : "left",
                  a = this.position.x + e[r];
                (t[s] = this.getXValue(a)), (t[o] = "");
                var l = i ? "paddingTop" : "paddingBottom",
                  c = i ? "top" : "bottom",
                  u = i ? "bottom" : "top",
                  d = this.position.y + e[l];
                (t[c] = this.getYValue(d)),
                  (t[u] = ""),
                  this.css(t),
                  this.emitEvent("layout", [this]);
              }),
              (l.getXValue = function (e) {
                var t = this.layout._getOption("horizontal");
                return this.layout.options.percentPosition && !t
                  ? (e / this.layout.size.width) * 100 + "%"
                  : e + "px";
              }),
              (l.getYValue = function (e) {
                var t = this.layout._getOption("horizontal");
                return this.layout.options.percentPosition && t
                  ? (e / this.layout.size.height) * 100 + "%"
                  : e + "px";
              }),
              (l._transitionTo = function (e, t) {
                this.getPosition();
                var n = this.position.x,
                  i = this.position.y,
                  r = e == this.position.x && t == this.position.y;
                if ((this.setPosition(e, t), !r || this.isTransitioning)) {
                  var s = e - n,
                    o = t - i,
                    a = {};
                  (a.transform = this.getTranslate(s, o)),
                    this.transition({
                      to: a,
                      onTransitionEnd: { transform: this.layoutPosition },
                      isCleaning: !0,
                    });
                } else this.layoutPosition();
              }),
              (l.getTranslate = function (e, t) {
                return (
                  "translate3d(" +
                  (e = this.layout._getOption("originLeft") ? e : -e) +
                  "px, " +
                  (t = this.layout._getOption("originTop") ? t : -t) +
                  "px, 0)"
                );
              }),
              (l.goTo = function (e, t) {
                this.setPosition(e, t), this.layoutPosition();
              }),
              (l.moveTo = l._transitionTo),
              (l.setPosition = function (e, t) {
                (this.position.x = parseFloat(e)),
                  (this.position.y = parseFloat(t));
              }),
              (l._nonTransition = function (e) {
                for (var t in (this.css(e.to),
                e.isCleaning && this._removeStyles(e.to),
                e.onTransitionEnd))
                  e.onTransitionEnd[t].call(this);
              }),
              (l.transition = function (e) {
                if (parseFloat(this.layout.options.transitionDuration)) {
                  var t = this._transn;
                  for (var n in e.onTransitionEnd)
                    t.onEnd[n] = e.onTransitionEnd[n];
                  for (n in e.to)
                    (t.ingProperties[n] = !0),
                      e.isCleaning && (t.clean[n] = !0);
                  e.from && (this.css(e.from), this.element.offsetHeight),
                    this.enableTransition(e.to),
                    this.css(e.to),
                    (this.isTransitioning = !0);
                } else this._nonTransition(e);
              });
            var c =
              "opacity," +
              r.replace(/([A-Z])/g, function (e) {
                return "-" + e.toLowerCase();
              });
            (l.enableTransition = function () {
              if (!this.isTransitioning) {
                var e = this.layout.options.transitionDuration;
                (e = "number" == typeof e ? e + "ms" : e),
                  this.css({
                    transitionProperty: c,
                    transitionDuration: e,
                    transitionDelay: this.staggerDelay || 0,
                  }),
                  this.element.addEventListener(s, this, !1);
              }
            }),
              (l.onwebkitTransitionEnd = function (e) {
                this.ontransitionend(e);
              }),
              (l.onotransitionend = function (e) {
                this.ontransitionend(e);
              });
            var u = { "-webkit-transform": "transform" };
            (l.ontransitionend = function (e) {
              if (e.target === this.element) {
                var t = this._transn,
                  n = u[e.propertyName] || e.propertyName;
                delete t.ingProperties[n],
                  (function (e) {
                    for (var t in e) return !1;
                    return !0;
                  })(t.ingProperties) && this.disableTransition(),
                  n in t.clean &&
                    ((this.element.style[e.propertyName] = ""),
                    delete t.clean[n]),
                  n in t.onEnd && (t.onEnd[n].call(this), delete t.onEnd[n]),
                  this.emitEvent("transitionEnd", [this]);
              }
            }),
              (l.disableTransition = function () {
                this.removeTransitionStyles(),
                  this.element.removeEventListener(s, this, !1),
                  (this.isTransitioning = !1);
              }),
              (l._removeStyles = function (e) {
                var t = {};
                for (var n in e) t[n] = "";
                this.css(t);
              });
            var d = {
              transitionProperty: "",
              transitionDuration: "",
              transitionDelay: "",
            };
            return (
              (l.removeTransitionStyles = function () {
                this.css(d);
              }),
              (l.stagger = function (e) {
                (e = isNaN(e) ? 0 : e), (this.staggerDelay = e + "ms");
              }),
              (l.removeElem = function () {
                this.element.parentNode.removeChild(this.element),
                  this.css({ display: "" }),
                  this.emitEvent("remove", [this]);
              }),
              (l.remove = function () {
                i && parseFloat(this.layout.options.transitionDuration)
                  ? (this.once("transitionEnd", function () {
                      this.removeElem();
                    }),
                    this.hide())
                  : this.removeElem();
              }),
              (l.reveal = function () {
                delete this.isHidden, this.css({ display: "" });
                var e = this.layout.options,
                  t = {};
                (t[this.getHideRevealTransitionEndProperty("visibleStyle")] =
                  this.onRevealTransitionEnd),
                  this.transition({
                    from: e.hiddenStyle,
                    to: e.visibleStyle,
                    isCleaning: !0,
                    onTransitionEnd: t,
                  });
              }),
              (l.onRevealTransitionEnd = function () {
                this.isHidden || this.emitEvent("reveal");
              }),
              (l.getHideRevealTransitionEndProperty = function (e) {
                var t = this.layout.options[e];
                if (t.opacity) return "opacity";
                for (var n in t) return n;
              }),
              (l.hide = function () {
                (this.isHidden = !0), this.css({ display: "" });
                var e = this.layout.options,
                  t = {};
                (t[this.getHideRevealTransitionEndProperty("hiddenStyle")] =
                  this.onHideTransitionEnd),
                  this.transition({
                    from: e.visibleStyle,
                    to: e.hiddenStyle,
                    isCleaning: !0,
                    onTransitionEnd: t,
                  });
              }),
              (l.onHideTransitionEnd = function () {
                this.isHidden &&
                  (this.css({ display: "none" }), this.emitEvent("hide"));
              }),
              (l.destroy = function () {
                this.css({
                  position: "",
                  left: "",
                  right: "",
                  top: "",
                  bottom: "",
                  transition: "",
                  transform: "",
                });
              }),
              a
            );
          })
            ? m.apply(t, g)
            : m),
        /*!
         * Outlayer v2.1.1
         * the brains and guts of a layout library
         * MIT license
         */
        (function (e, n) {
          "use strict";
          f = function (t, n, i, r) {
            return (function (e, t, n, i, r) {
              var s = e.console,
                o = e.jQuery,
                a = function () {},
                l = 0,
                c = {};
              function u(e, t) {
                var n = i.getQueryElement(e);
                if (n) {
                  (this.element = n),
                    o && (this.$element = o(this.element)),
                    (this.options = i.extend({}, this.constructor.defaults)),
                    this.option(t);
                  var r = ++l;
                  (this.element.outlayerGUID = r),
                    (c[r] = this),
                    this._create(),
                    this._getOption("initLayout") && this.layout();
                } else
                  s &&
                    s.error(
                      "Bad element for " +
                        this.constructor.namespace +
                        ": " +
                        (n || e)
                    );
              }
              (u.namespace = "outlayer"),
                (u.Item = r),
                (u.defaults = {
                  containerStyle: { position: "relative" },
                  initLayout: !0,
                  originLeft: !0,
                  originTop: !0,
                  resize: !0,
                  resizeContainer: !0,
                  transitionDuration: "0.4s",
                  hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
                  visibleStyle: { opacity: 1, transform: "scale(1)" },
                });
              var d = u.prototype;
              function h(e) {
                function t() {
                  e.apply(this, arguments);
                }
                return (
                  (t.prototype = Object.create(e.prototype)),
                  (t.prototype.constructor = t),
                  t
                );
              }
              i.extend(d, t.prototype),
                (d.option = function (e) {
                  i.extend(this.options, e);
                }),
                (d._getOption = function (e) {
                  var t = this.constructor.compatOptions[e];
                  return t && void 0 !== this.options[t]
                    ? this.options[t]
                    : this.options[e];
                }),
                (u.compatOptions = {
                  initLayout: "isInitLayout",
                  horizontal: "isHorizontal",
                  layoutInstant: "isLayoutInstant",
                  originLeft: "isOriginLeft",
                  originTop: "isOriginTop",
                  resize: "isResizeBound",
                  resizeContainer: "isResizingContainer",
                }),
                (d._create = function () {
                  this.reloadItems(),
                    (this.stamps = []),
                    this.stamp(this.options.stamp),
                    i.extend(this.element.style, this.options.containerStyle),
                    this._getOption("resize") && this.bindResize();
                }),
                (d.reloadItems = function () {
                  this.items = this._itemize(this.element.children);
                }),
                (d._itemize = function (e) {
                  for (
                    var t = this._filterFindItemElements(e),
                      n = this.constructor.Item,
                      i = [],
                      r = 0;
                    r < t.length;
                    r++
                  ) {
                    var s = new n(t[r], this);
                    i.push(s);
                  }
                  return i;
                }),
                (d._filterFindItemElements = function (e) {
                  return i.filterFindElements(e, this.options.itemSelector);
                }),
                (d.getItemElements = function () {
                  return this.items.map(function (e) {
                    return e.element;
                  });
                }),
                (d.layout = function () {
                  this._resetLayout(), this._manageStamps();
                  var e = this._getOption("layoutInstant"),
                    t = void 0 !== e ? e : !this._isLayoutInited;
                  this.layoutItems(this.items, t), (this._isLayoutInited = !0);
                }),
                (d._init = d.layout),
                (d._resetLayout = function () {
                  this.getSize();
                }),
                (d.getSize = function () {
                  this.size = n(this.element);
                }),
                (d._getMeasurement = function (e, t) {
                  var i,
                    r = this.options[e];
                  r
                    ? ("string" == typeof r
                        ? (i = this.element.querySelector(r))
                        : r instanceof HTMLElement && (i = r),
                      (this[e] = i ? n(i)[t] : r))
                    : (this[e] = 0);
                }),
                (d.layoutItems = function (e, t) {
                  (e = this._getItemsForLayout(e)),
                    this._layoutItems(e, t),
                    this._postLayout();
                }),
                (d._getItemsForLayout = function (e) {
                  return e.filter(function (e) {
                    return !e.isIgnored;
                  });
                }),
                (d._layoutItems = function (e, t) {
                  if ((this._emitCompleteOnItems("layout", e), e && e.length)) {
                    var n = [];
                    e.forEach(function (e) {
                      var i = this._getItemLayoutPosition(e);
                      (i.item = e),
                        (i.isInstant = t || e.isLayoutInstant),
                        n.push(i);
                    }, this),
                      this._processLayoutQueue(n);
                  }
                }),
                (d._getItemLayoutPosition = function () {
                  return { x: 0, y: 0 };
                }),
                (d._processLayoutQueue = function (e) {
                  this.updateStagger(),
                    e.forEach(function (e, t) {
                      this._positionItem(e.item, e.x, e.y, e.isInstant, t);
                    }, this);
                }),
                (d.updateStagger = function () {
                  var e = this.options.stagger;
                  if (null != e)
                    return (
                      (this.stagger = (function (e) {
                        if ("number" == typeof e) return e;
                        var t = e.match(/(^\d*\.?\d*)(\w*)/),
                          n = t && t[1],
                          i = t && t[2];
                        if (!n.length) return 0;
                        return (n = parseFloat(n)) * (p[i] || 1);
                      })(e)),
                      this.stagger
                    );
                  this.stagger = 0;
                }),
                (d._positionItem = function (e, t, n, i, r) {
                  i
                    ? e.goTo(t, n)
                    : (e.stagger(r * this.stagger), e.moveTo(t, n));
                }),
                (d._postLayout = function () {
                  this.resizeContainer();
                }),
                (d.resizeContainer = function () {
                  if (this._getOption("resizeContainer")) {
                    var e = this._getContainerSize();
                    e &&
                      (this._setContainerMeasure(e.width, !0),
                      this._setContainerMeasure(e.height, !1));
                  }
                }),
                (d._getContainerSize = a),
                (d._setContainerMeasure = function (e, t) {
                  if (void 0 !== e) {
                    var n = this.size;
                    n.isBorderBox &&
                      (e += t
                        ? n.paddingLeft +
                          n.paddingRight +
                          n.borderLeftWidth +
                          n.borderRightWidth
                        : n.paddingBottom +
                          n.paddingTop +
                          n.borderTopWidth +
                          n.borderBottomWidth),
                      (e = Math.max(e, 0)),
                      (this.element.style[t ? "width" : "height"] = e + "px");
                  }
                }),
                (d._emitCompleteOnItems = function (e, t) {
                  var n = this;
                  function i() {
                    n.dispatchEvent(e + "Complete", null, [t]);
                  }
                  var r = t.length;
                  if (t && r) {
                    var s = 0;
                    t.forEach(function (t) {
                      t.once(e, o);
                    });
                  } else i();
                  function o() {
                    ++s == r && i();
                  }
                }),
                (d.dispatchEvent = function (e, t, n) {
                  var i = t ? [t].concat(n) : n;
                  if ((this.emitEvent(e, i), o))
                    if (
                      ((this.$element = this.$element || o(this.element)), t)
                    ) {
                      var r = o.Event(t);
                      (r.type = e), this.$element.trigger(r, n);
                    } else this.$element.trigger(e, n);
                }),
                (d.ignore = function (e) {
                  var t = this.getItem(e);
                  t && (t.isIgnored = !0);
                }),
                (d.unignore = function (e) {
                  var t = this.getItem(e);
                  t && delete t.isIgnored;
                }),
                (d.stamp = function (e) {
                  (e = this._find(e)) &&
                    ((this.stamps = this.stamps.concat(e)),
                    e.forEach(this.ignore, this));
                }),
                (d.unstamp = function (e) {
                  (e = this._find(e)) &&
                    e.forEach(function (e) {
                      i.removeFrom(this.stamps, e), this.unignore(e);
                    }, this);
                }),
                (d._find = function (e) {
                  if (e)
                    return (
                      "string" == typeof e &&
                        (e = this.element.querySelectorAll(e)),
                      (e = i.makeArray(e))
                    );
                }),
                (d._manageStamps = function () {
                  this.stamps &&
                    this.stamps.length &&
                    (this._getBoundingRect(),
                    this.stamps.forEach(this._manageStamp, this));
                }),
                (d._getBoundingRect = function () {
                  var e = this.element.getBoundingClientRect(),
                    t = this.size;
                  this._boundingRect = {
                    left: e.left + t.paddingLeft + t.borderLeftWidth,
                    top: e.top + t.paddingTop + t.borderTopWidth,
                    right: e.right - (t.paddingRight + t.borderRightWidth),
                    bottom: e.bottom - (t.paddingBottom + t.borderBottomWidth),
                  };
                }),
                (d._manageStamp = a),
                (d._getElementOffset = function (e) {
                  var t = e.getBoundingClientRect(),
                    i = this._boundingRect,
                    r = n(e);
                  return {
                    left: t.left - i.left - r.marginLeft,
                    top: t.top - i.top - r.marginTop,
                    right: i.right - t.right - r.marginRight,
                    bottom: i.bottom - t.bottom - r.marginBottom,
                  };
                }),
                (d.handleEvent = i.handleEvent),
                (d.bindResize = function () {
                  e.addEventListener("resize", this), (this.isResizeBound = !0);
                }),
                (d.unbindResize = function () {
                  e.removeEventListener("resize", this),
                    (this.isResizeBound = !1);
                }),
                (d.onresize = function () {
                  this.resize();
                }),
                i.debounceMethod(u, "onresize", 100),
                (d.resize = function () {
                  this.isResizeBound &&
                    this.needsResizeLayout() &&
                    this.layout();
                }),
                (d.needsResizeLayout = function () {
                  var e = n(this.element);
                  return (
                    this.size && e && e.innerWidth !== this.size.innerWidth
                  );
                }),
                (d.addItems = function (e) {
                  var t = this._itemize(e);
                  return t.length && (this.items = this.items.concat(t)), t;
                }),
                (d.appended = function (e) {
                  var t = this.addItems(e);
                  t.length && (this.layoutItems(t, !0), this.reveal(t));
                }),
                (d.prepended = function (e) {
                  var t = this._itemize(e);
                  if (t.length) {
                    var n = this.items.slice(0);
                    (this.items = t.concat(n)),
                      this._resetLayout(),
                      this._manageStamps(),
                      this.layoutItems(t, !0),
                      this.reveal(t),
                      this.layoutItems(n);
                  }
                }),
                (d.reveal = function (e) {
                  if ((this._emitCompleteOnItems("reveal", e), e && e.length)) {
                    var t = this.updateStagger();
                    e.forEach(function (e, n) {
                      e.stagger(n * t), e.reveal();
                    });
                  }
                }),
                (d.hide = function (e) {
                  if ((this._emitCompleteOnItems("hide", e), e && e.length)) {
                    var t = this.updateStagger();
                    e.forEach(function (e, n) {
                      e.stagger(n * t), e.hide();
                    });
                  }
                }),
                (d.revealItemElements = function (e) {
                  var t = this.getItems(e);
                  this.reveal(t);
                }),
                (d.hideItemElements = function (e) {
                  var t = this.getItems(e);
                  this.hide(t);
                }),
                (d.getItem = function (e) {
                  for (var t = 0; t < this.items.length; t++) {
                    var n = this.items[t];
                    if (n.element == e) return n;
                  }
                }),
                (d.getItems = function (e) {
                  e = i.makeArray(e);
                  var t = [];
                  return (
                    e.forEach(function (e) {
                      var n = this.getItem(e);
                      n && t.push(n);
                    }, this),
                    t
                  );
                }),
                (d.remove = function (e) {
                  var t = this.getItems(e);
                  this._emitCompleteOnItems("remove", t),
                    t &&
                      t.length &&
                      t.forEach(function (e) {
                        e.remove(), i.removeFrom(this.items, e);
                      }, this);
                }),
                (d.destroy = function () {
                  var e = this.element.style;
                  (e.height = ""),
                    (e.position = ""),
                    (e.width = ""),
                    this.items.forEach(function (e) {
                      e.destroy();
                    }),
                    this.unbindResize();
                  var t = this.element.outlayerGUID;
                  delete c[t],
                    delete this.element.outlayerGUID,
                    o && o.removeData(this.element, this.constructor.namespace);
                }),
                (u.data = function (e) {
                  var t = (e = i.getQueryElement(e)) && e.outlayerGUID;
                  return t && c[t];
                }),
                (u.create = function (e, t) {
                  var n = h(u);
                  return (
                    (n.defaults = i.extend({}, u.defaults)),
                    i.extend(n.defaults, t),
                    (n.compatOptions = i.extend({}, u.compatOptions)),
                    (n.namespace = e),
                    (n.data = u.data),
                    (n.Item = h(r)),
                    i.htmlInit(n, e),
                    o && o.bridget && o.bridget(e, n),
                    n
                  );
                });
              var p = { ms: 1, s: 1e3 };
              return (u.Item = r), u;
            })(e, t, n, i, r);
          }.apply(t, (g = [i, o, h, p]));
        })(window),
        window,
        (g = [f, o]),
        void 0 ===
          (v =
            "function" ==
            typeof (m = function (e, t) {
              var n = e.create("masonry");
              n.compatOptions.fitWidth = "isFitWidth";
              var i = n.prototype;
              return (
                (i._resetLayout = function () {
                  this.getSize(),
                    this._getMeasurement("columnWidth", "outerWidth"),
                    this._getMeasurement("gutter", "outerWidth"),
                    this.measureColumns(),
                    (this.colYs = []);
                  for (var e = 0; e < this.cols; e++) this.colYs.push(0);
                  (this.maxY = 0), (this.horizontalColIndex = 0);
                }),
                (i.measureColumns = function () {
                  if ((this.getContainerWidth(), !this.columnWidth)) {
                    var e = this.items[0],
                      n = e && e.element;
                    this.columnWidth =
                      (n && t(n).outerWidth) || this.containerWidth;
                  }
                  var i = (this.columnWidth += this.gutter),
                    r = this.containerWidth + this.gutter,
                    s = r / i,
                    o = i - (r % i);
                  (s = Math[o && o < 1 ? "round" : "floor"](s)),
                    (this.cols = Math.max(s, 1));
                }),
                (i.getContainerWidth = function () {
                  var e = this._getOption("fitWidth")
                      ? this.element.parentNode
                      : this.element,
                    n = t(e);
                  this.containerWidth = n && n.innerWidth;
                }),
                (i._getItemLayoutPosition = function (e) {
                  e.getSize();
                  var t = e.size.outerWidth % this.columnWidth,
                    n = Math[t && t < 1 ? "round" : "ceil"](
                      e.size.outerWidth / this.columnWidth
                    );
                  n = Math.min(n, this.cols);
                  for (
                    var i = this[
                        this.options.horizontalOrder
                          ? "_getHorizontalColPosition"
                          : "_getTopColPosition"
                      ](n, e),
                      r = { x: this.columnWidth * i.col, y: i.y },
                      s = i.y + e.size.outerHeight,
                      o = n + i.col,
                      a = i.col;
                    a < o;
                    a++
                  )
                    this.colYs[a] = s;
                  return r;
                }),
                (i._getTopColPosition = function (e) {
                  var t = this._getTopColGroup(e),
                    n = Math.min.apply(Math, t);
                  return { col: t.indexOf(n), y: n };
                }),
                (i._getTopColGroup = function (e) {
                  if (e < 2) return this.colYs;
                  for (var t = [], n = this.cols + 1 - e, i = 0; i < n; i++)
                    t[i] = this._getColGroupY(i, e);
                  return t;
                }),
                (i._getColGroupY = function (e, t) {
                  if (t < 2) return this.colYs[e];
                  var n = this.colYs.slice(e, e + t);
                  return Math.max.apply(Math, n);
                }),
                (i._getHorizontalColPosition = function (e, t) {
                  var n = this.horizontalColIndex % this.cols;
                  n = e > 1 && n + e > this.cols ? 0 : n;
                  var i = t.size.outerWidth && t.size.outerHeight;
                  return (
                    (this.horizontalColIndex = i
                      ? n + e
                      : this.horizontalColIndex),
                    { col: n, y: this._getColGroupY(n, e) }
                  );
                }),
                (i._manageStamp = function (e) {
                  var n = t(e),
                    i = this._getElementOffset(e),
                    r = this._getOption("originLeft") ? i.left : i.right,
                    s = r + n.outerWidth,
                    o = Math.floor(r / this.columnWidth);
                  o = Math.max(0, o);
                  var a = Math.floor(s / this.columnWidth);
                  (a -= s % this.columnWidth ? 0 : 1),
                    (a = Math.min(this.cols - 1, a));
                  for (
                    var l =
                        (this._getOption("originTop") ? i.top : i.bottom) +
                        n.outerHeight,
                      c = o;
                    c <= a;
                    c++
                  )
                    this.colYs[c] = Math.max(l, this.colYs[c]);
                }),
                (i._getContainerSize = function () {
                  this.maxY = Math.max.apply(Math, this.colYs);
                  var e = { height: this.maxY };
                  return (
                    this._getOption("fitWidth") &&
                      (e.width = this._getContainerFitWidth()),
                    e
                  );
                }),
                (i._getContainerFitWidth = function () {
                  for (var e = 0, t = this.cols; --t && 0 === this.colYs[t]; )
                    e++;
                  return (this.cols - e) * this.columnWidth - this.gutter;
                }),
                (i.needsResizeLayout = function () {
                  var e = this.containerWidth;
                  return this.getContainerWidth(), e != this.containerWidth;
                }),
                n
              );
            })
              ? m.apply(t, g)
              : m) || (e.exports = v);
    },
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t) {
      /*! modernizr 3.6.0 (Custom Build) | MIT *
       * https://modernizr.com/download/?-backdropfilter-csspointerevents-objectfit-srcset-touchevents-webgl-setclasses !*/
      !(function (e, t, n) {
        function i(e, t) {
          return typeof e === t;
        }
        function r() {
          return "function" != typeof t.createElement
            ? t.createElement(arguments[0])
            : w
            ? t.createElementNS.call(
                t,
                "http://www.w3.org/2000/svg",
                arguments[0]
              )
            : t.createElement.apply(t, arguments);
        }
        function s(e) {
          return e
            .replace(/([a-z])-([a-z])/g, function (e, t, n) {
              return t + n.toUpperCase();
            })
            .replace(/^-/, "");
        }
        function o(e, n, i, s) {
          var o,
            a,
            l,
            c,
            u = "modernizr",
            d = r("div"),
            h = (function () {
              var e = t.body;
              return e || ((e = r(w ? "svg" : "body")).fake = !0), e;
            })();
          if (parseInt(i, 10))
            for (; i--; )
              ((l = r("div")).id = s ? s[i] : u + (i + 1)), d.appendChild(l);
          return (
            ((o = r("style")).type = "text/css"),
            (o.id = "s" + u),
            (h.fake ? h : d).appendChild(o),
            h.appendChild(d),
            o.styleSheet
              ? (o.styleSheet.cssText = e)
              : o.appendChild(t.createTextNode(e)),
            (d.id = u),
            h.fake &&
              ((h.style.background = ""),
              (h.style.overflow = "hidden"),
              (c = b.style.overflow),
              (b.style.overflow = "hidden"),
              b.appendChild(h)),
            (a = n(d, e)),
            h.fake
              ? (h.parentNode.removeChild(h),
                (b.style.overflow = c),
                b.offsetHeight)
              : d.parentNode.removeChild(d),
            !!a
          );
        }
        function a(e, t) {
          return function () {
            return e.apply(t, arguments);
          };
        }
        function l(e, t) {
          return !!~("" + e).indexOf(t);
        }
        function c(e) {
          return e
            .replace(/([A-Z])/g, function (e, t) {
              return "-" + t.toLowerCase();
            })
            .replace(/^ms-/, "-ms-");
        }
        function u(t, n, i) {
          var r;
          if ("getComputedStyle" in e) {
            r = getComputedStyle.call(e, t, n);
            var s = e.console;
            if (null !== r) i && (r = r.getPropertyValue(i));
            else if (s) {
              s[s.error ? "error" : "log"].call(
                s,
                "getComputedStyle returning null, its possible modernizr test results are inaccurate"
              );
            }
          } else r = !n && t.currentStyle && t.currentStyle[i];
          return r;
        }
        function d(t, i) {
          var r = t.length;
          if ("CSS" in e && "supports" in e.CSS) {
            for (; r--; ) if (e.CSS.supports(c(t[r]), i)) return !0;
            return !1;
          }
          if ("CSSSupportsRule" in e) {
            for (var s = []; r--; ) s.push("(" + c(t[r]) + ":" + i + ")");
            return o(
              "@supports (" +
                (s = s.join(" or ")) +
                ") { #modernizr { position: absolute; } }",
              function (e) {
                return "absolute" == u(e, null, "position");
              }
            );
          }
          return n;
        }
        function h(e, t, o, a) {
          function c() {
            h && (delete M.style, delete M.modElem);
          }
          if (((a = !i(a, "undefined") && a), !i(o, "undefined"))) {
            var u = d(e, o);
            if (!i(u, "undefined")) return u;
          }
          for (
            var h, p, f, m, g, v = ["modernizr", "tspan", "samp"];
            !M.style && v.length;

          )
            (h = !0), (M.modElem = r(v.shift())), (M.style = M.modElem.style);
          for (f = e.length, p = 0; f > p; p++)
            if (
              ((m = e[p]),
              (g = M.style[m]),
              l(m, "-") && (m = s(m)),
              M.style[m] !== n)
            ) {
              if (a || i(o, "undefined")) return c(), "pfx" != t || m;
              try {
                M.style[m] = o;
              } catch (e) {}
              if (M.style[m] != g) return c(), "pfx" != t || m;
            }
          return c(), !1;
        }
        function p(e, t, n, r, s) {
          var o = e.charAt(0).toUpperCase() + e.slice(1),
            l = (e + " " + S.join(o + " ") + o).split(" ");
          return i(t, "string") || i(t, "undefined")
            ? h(l, t, r, s)
            : (function (e, t, n) {
                var r;
                for (var s in e)
                  if (e[s] in t)
                    return !1 === n
                      ? e[s]
                      : i((r = t[e[s]]), "function")
                      ? a(r, n || t)
                      : r;
                return !1;
              })((l = (e + " " + _.join(o + " ") + o).split(" ")), t, n);
        }
        function f(e, t, i) {
          return p(e, n, n, t, i);
        }
        var m = [],
          g = [],
          v = {
            _version: "3.6.0",
            _config: {
              classPrefix: "",
              enableClasses: !0,
              enableJSClass: !0,
              usePrefixes: !0,
            },
            _q: [],
            on: function (e, t) {
              var n = this;
              setTimeout(function () {
                t(n[e]);
              }, 0);
            },
            addTest: function (e, t, n) {
              g.push({ name: e, fn: t, options: n });
            },
            addAsyncTest: function (e) {
              g.push({ name: null, fn: e });
            },
          },
          y = function () {};
        (y.prototype = v), (y = new y());
        var b = t.documentElement,
          w = "svg" === b.nodeName.toLowerCase(),
          x = v._config.usePrefixes
            ? " -webkit- -moz- -o- -ms- ".split(" ")
            : ["", ""];
        (v._prefixes = x),
          y.addTest("webgl", function () {
            var t = r("canvas"),
              n =
                "probablySupportsContext" in t
                  ? "probablySupportsContext"
                  : "supportsContext";
            return n in t
              ? t[n]("webgl") || t[n]("experimental-webgl")
              : "WebGLRenderingContext" in e;
          }),
          y.addTest("csspointerevents", function () {
            var e = r("a").style;
            return (
              (e.cssText = "pointer-events:auto"), "auto" === e.pointerEvents
            );
          }),
          y.addTest("srcset", "srcset" in r("img"));
        var T = (v.testStyles = o);
        y.addTest("touchevents", function () {
          var n;
          if (
            "ontouchstart" in e ||
            (e.DocumentTouch && t instanceof DocumentTouch)
          )
            n = !0;
          else {
            var i = [
              "@media (",
              x.join("touch-enabled),("),
              "heartz",
              ")",
              "{#modernizr{top:9px;position:absolute}}",
            ].join("");
            T(i, function (e) {
              n = 9 === e.offsetTop;
            });
          }
          return n;
        });
        var E = "Moz O ms Webkit",
          S = v._config.usePrefixes ? E.split(" ") : [];
        v._cssomPrefixes = S;
        var C = function (t) {
          var i,
            r = x.length,
            s = e.CSSRule;
          if (void 0 === s) return n;
          if (!t) return !1;
          if (
            (i =
              (t = t.replace(/^@/, "")).replace(/-/g, "_").toUpperCase() +
              "_RULE") in s
          )
            return "@" + t;
          for (var o = 0; r > o; o++) {
            var a = x[o];
            if (a.toUpperCase() + "_" + i in s)
              return "@-" + a.toLowerCase() + "-" + t;
          }
          return !1;
        };
        v.atRule = C;
        var _ = v._config.usePrefixes ? E.toLowerCase().split(" ") : [];
        v._domPrefixes = _;
        var k = { elem: r("modernizr") };
        y._q.push(function () {
          delete k.elem;
        });
        var M = { style: k.elem.style };
        y._q.unshift(function () {
          delete M.style;
        }),
          (v.testAllProps = p);
        var L = (v.prefixed = function (e, t, n) {
          return 0 === e.indexOf("@")
            ? C(e)
            : (-1 != e.indexOf("-") && (e = s(e)),
              t ? p(e, t, n) : p(e, "pfx"));
        });
        y.addTest("objectfit", !!L("objectFit"), { aliases: ["object-fit"] }),
          (v.testAllProps = f),
          y.addTest("backdropfilter", f("backdropFilter")),
          (function () {
            var e, t, n, r, s, o;
            for (var a in g)
              if (g.hasOwnProperty(a)) {
                if (
                  ((e = []),
                  (t = g[a]).name &&
                    (e.push(t.name.toLowerCase()),
                    t.options && t.options.aliases && t.options.aliases.length))
                )
                  for (n = 0; n < t.options.aliases.length; n++)
                    e.push(t.options.aliases[n].toLowerCase());
                for (
                  r = i(t.fn, "function") ? t.fn() : t.fn, s = 0;
                  s < e.length;
                  s++
                )
                  1 === (o = e[s].split(".")).length
                    ? (y[o[0]] = r)
                    : (!y[o[0]] ||
                        y[o[0]] instanceof Boolean ||
                        (y[o[0]] = new Boolean(y[o[0]])),
                      (y[o[0]][o[1]] = r)),
                    m.push((r ? "" : "no-") + o.join("-"));
              }
          })(),
          (function (e) {
            var t = b.className,
              n = y._config.classPrefix || "";
            if ((w && (t = t.baseVal), y._config.enableJSClass)) {
              var i = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
              t = t.replace(i, "$1" + n + "js$2");
            }
            y._config.enableClasses &&
              ((t += " " + n + e.join(" " + n)),
              w ? (b.className.baseVal = t) : (b.className = t));
          })(m),
          delete v.addTest,
          delete v.addAsyncTest;
        for (var P = 0; P < y._q.length; P++) y._q[P]();
        e.Modernizr = y;
      })(window, document);
    },
    ,
    ,
    function (e, t, n) {
      var i, r;
      "undefined" != typeof window && window,
        void 0 ===
          (r =
            "function" ==
            typeof (i = function () {
              "use strict";
              function e() {}
              var t = e.prototype;
              return (
                (t.on = function (e, t) {
                  if (e && t) {
                    var n = (this._events = this._events || {}),
                      i = (n[e] = n[e] || []);
                    return -1 == i.indexOf(t) && i.push(t), this;
                  }
                }),
                (t.once = function (e, t) {
                  if (e && t) {
                    this.on(e, t);
                    var n = (this._onceEvents = this._onceEvents || {});
                    return ((n[e] = n[e] || {})[t] = !0), this;
                  }
                }),
                (t.off = function (e, t) {
                  var n = this._events && this._events[e];
                  if (n && n.length) {
                    var i = n.indexOf(t);
                    return -1 != i && n.splice(i, 1), this;
                  }
                }),
                (t.emitEvent = function (e, t) {
                  var n = this._events && this._events[e];
                  if (n && n.length) {
                    (n = n.slice(0)), (t = t || []);
                    for (
                      var i = this._onceEvents && this._onceEvents[e], r = 0;
                      r < n.length;
                      r++
                    ) {
                      var s = n[r];
                      i && i[s] && (this.off(e, s), delete i[s]),
                        s.apply(this, t);
                    }
                    return this;
                  }
                }),
                (t.allOff = function () {
                  delete this._events, delete this._onceEvents;
                }),
                e
              );
            })
              ? i.call(t, n, t, e)
              : i) || (e.exports = r);
    },
    function (e, t) {
      var n;
      n = (function () {
        return this;
      })();
      try {
        n = n || new Function("return this")();
      } catch (e) {
        "object" == typeof window && (n = window);
      }
      e.exports = n;
    },
    ,
    function (e, t, n) {
      var i, r, s;
      /*! jQuery Validation Plugin - v1.19.1 - 6/15/2019
       * https://jqueryvalidation.org/
       * Copyright (c) 2019 Jörn Zaefferer; Licensed MIT */ (r = [n(1)]),
        void 0 ===
          (s =
            "function" ==
            typeof (i = function (e) {
              e.extend(e.fn, {
                validate: function (t) {
                  if (this.length) {
                    var n = e.data(this[0], "validator");
                    return (
                      n ||
                      (this.attr("novalidate", "novalidate"),
                      (n = new e.validator(t, this[0])),
                      e.data(this[0], "validator", n),
                      n.settings.onsubmit &&
                        (this.on("click.validate", ":submit", function (t) {
                          (n.submitButton = t.currentTarget),
                            e(this).hasClass("cancel") && (n.cancelSubmit = !0),
                            void 0 !== e(this).attr("formnovalidate") &&
                              (n.cancelSubmit = !0);
                        }),
                        this.on("submit.validate", function (t) {
                          function i() {
                            var i, r;
                            return (
                              n.submitButton &&
                                (n.settings.submitHandler || n.formSubmitted) &&
                                (i = e("<input type='hidden'/>")
                                  .attr("name", n.submitButton.name)
                                  .val(e(n.submitButton).val())
                                  .appendTo(n.currentForm)),
                              !(
                                n.settings.submitHandler && !n.settings.debug
                              ) ||
                                ((r = n.settings.submitHandler.call(
                                  n,
                                  n.currentForm,
                                  t
                                )),
                                i && i.remove(),
                                void 0 !== r && r)
                            );
                          }
                          return (
                            n.settings.debug && t.preventDefault(),
                            n.cancelSubmit
                              ? ((n.cancelSubmit = !1), i())
                              : n.form()
                              ? n.pendingRequest
                                ? ((n.formSubmitted = !0), !1)
                                : i()
                              : (n.focusInvalid(), !1)
                          );
                        })),
                      n)
                    );
                  }
                  t &&
                    t.debug &&
                    window.console &&
                    console.warn(
                      "Nothing selected, can't validate, returning nothing."
                    );
                },
                valid: function () {
                  var t, n, i;
                  return (
                    e(this[0]).is("form")
                      ? (t = this.validate().form())
                      : ((i = []),
                        (t = !0),
                        (n = e(this[0].form).validate()),
                        this.each(function () {
                          (t = n.element(this) && t) ||
                            (i = i.concat(n.errorList));
                        }),
                        (n.errorList = i)),
                    t
                  );
                },
                rules: function (t, n) {
                  var i,
                    r,
                    s,
                    o,
                    a,
                    l,
                    c = this[0],
                    u =
                      void 0 !== this.attr("contenteditable") &&
                      "false" !== this.attr("contenteditable");
                  if (
                    null != c &&
                    (!c.form &&
                      u &&
                      ((c.form = this.closest("form")[0]),
                      (c.name = this.attr("name"))),
                    null != c.form)
                  ) {
                    if (t)
                      switch (
                        ((i = e.data(c.form, "validator").settings),
                        (r = i.rules),
                        (s = e.validator.staticRules(c)),
                        t)
                      ) {
                        case "add":
                          e.extend(s, e.validator.normalizeRule(n)),
                            delete s.messages,
                            (r[c.name] = s),
                            n.messages &&
                              (i.messages[c.name] = e.extend(
                                i.messages[c.name],
                                n.messages
                              ));
                          break;
                        case "remove":
                          return n
                            ? ((l = {}),
                              e.each(n.split(/\s/), function (e, t) {
                                (l[t] = s[t]), delete s[t];
                              }),
                              l)
                            : (delete r[c.name], s);
                      }
                    return (
                      (o = e.validator.normalizeRules(
                        e.extend(
                          {},
                          e.validator.classRules(c),
                          e.validator.attributeRules(c),
                          e.validator.dataRules(c),
                          e.validator.staticRules(c)
                        ),
                        c
                      )).required &&
                        ((a = o.required),
                        delete o.required,
                        (o = e.extend({ required: a }, o))),
                      o.remote &&
                        ((a = o.remote),
                        delete o.remote,
                        (o = e.extend(o, { remote: a }))),
                      o
                    );
                  }
                },
              }),
                e.extend(e.expr.pseudos || e.expr[":"], {
                  blank: function (t) {
                    return !e.trim("" + e(t).val());
                  },
                  filled: function (t) {
                    var n = e(t).val();
                    return null !== n && !!e.trim("" + n);
                  },
                  unchecked: function (t) {
                    return !e(t).prop("checked");
                  },
                }),
                (e.validator = function (t, n) {
                  (this.settings = e.extend(!0, {}, e.validator.defaults, t)),
                    (this.currentForm = n),
                    this.init();
                }),
                (e.validator.format = function (t, n) {
                  return 1 === arguments.length
                    ? function () {
                        var n = e.makeArray(arguments);
                        return n.unshift(t), e.validator.format.apply(this, n);
                      }
                    : (void 0 === n ||
                        (arguments.length > 2 &&
                          n.constructor !== Array &&
                          (n = e.makeArray(arguments).slice(1)),
                        n.constructor !== Array && (n = [n]),
                        e.each(n, function (e, n) {
                          t = t.replace(
                            new RegExp("\\{" + e + "\\}", "g"),
                            function () {
                              return n;
                            }
                          );
                        })),
                      t);
                }),
                e.extend(e.validator, {
                  defaults: {
                    messages: {},
                    groups: {},
                    rules: {},
                    errorClass: "error",
                    pendingClass: "pending",
                    validClass: "valid",
                    errorElement: "label",
                    focusCleanup: !1,
                    focusInvalid: !0,
                    errorContainer: e([]),
                    errorLabelContainer: e([]),
                    onsubmit: !0,
                    ignore: ":hidden",
                    ignoreTitle: !1,
                    onfocusin: function (e) {
                      (this.lastActive = e),
                        this.settings.focusCleanup &&
                          (this.settings.unhighlight &&
                            this.settings.unhighlight.call(
                              this,
                              e,
                              this.settings.errorClass,
                              this.settings.validClass
                            ),
                          this.hideThese(this.errorsFor(e)));
                    },
                    onfocusout: function (e) {
                      this.checkable(e) ||
                        (!(e.name in this.submitted) && this.optional(e)) ||
                        this.element(e);
                    },
                    onkeyup: function (t, n) {
                      (9 === n.which && "" === this.elementValue(t)) ||
                        -1 !==
                          e.inArray(
                            n.keyCode,
                            [
                              16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144,
                              225,
                            ]
                          ) ||
                        ((t.name in this.submitted || t.name in this.invalid) &&
                          this.element(t));
                    },
                    onclick: function (e) {
                      e.name in this.submitted
                        ? this.element(e)
                        : e.parentNode.name in this.submitted &&
                          this.element(e.parentNode);
                    },
                    highlight: function (t, n, i) {
                      "radio" === t.type
                        ? this.findByName(t.name).addClass(n).removeClass(i)
                        : e(t).addClass(n).removeClass(i);
                    },
                    unhighlight: function (t, n, i) {
                      "radio" === t.type
                        ? this.findByName(t.name).removeClass(n).addClass(i)
                        : e(t).removeClass(n).addClass(i);
                    },
                  },
                  setDefaults: function (t) {
                    e.extend(e.validator.defaults, t);
                  },
                  messages: {
                    required: "This field is required.",
                    remote: "Please fix this field.",
                    email: "Please enter a valid email address.",
                    url: "Please enter a valid URL.",
                    date: "Please enter a valid date.",
                    dateISO: "Please enter a valid date (ISO).",
                    number: "Please enter a valid number.",
                    digits: "Please enter only digits.",
                    equalTo: "Please enter the same value again.",
                    maxlength: e.validator.format(
                      "Please enter no more than {0} characters."
                    ),
                    minlength: e.validator.format(
                      "Please enter at least {0} characters."
                    ),
                    rangelength: e.validator.format(
                      "Please enter a value between {0} and {1} characters long."
                    ),
                    range: e.validator.format(
                      "Please enter a value between {0} and {1}."
                    ),
                    max: e.validator.format(
                      "Please enter a value less than or equal to {0}."
                    ),
                    min: e.validator.format(
                      "Please enter a value greater than or equal to {0}."
                    ),
                    step: e.validator.format("Please enter a multiple of {0}."),
                  },
                  autoCreateRanges: !1,
                  prototype: {
                    init: function () {
                      function t(t) {
                        var n =
                          void 0 !== e(this).attr("contenteditable") &&
                          "false" !== e(this).attr("contenteditable");
                        if (
                          (!this.form &&
                            n &&
                            ((this.form = e(this).closest("form")[0]),
                            (this.name = e(this).attr("name"))),
                          i === this.form)
                        ) {
                          var r = e.data(this.form, "validator"),
                            s = "on" + t.type.replace(/^validate/, ""),
                            o = r.settings;
                          o[s] &&
                            !e(this).is(o.ignore) &&
                            o[s].call(r, this, t);
                        }
                      }
                      (this.labelContainer = e(
                        this.settings.errorLabelContainer
                      )),
                        (this.errorContext =
                          (this.labelContainer.length && this.labelContainer) ||
                          e(this.currentForm)),
                        (this.containers = e(this.settings.errorContainer).add(
                          this.settings.errorLabelContainer
                        )),
                        (this.submitted = {}),
                        (this.valueCache = {}),
                        (this.pendingRequest = 0),
                        (this.pending = {}),
                        (this.invalid = {}),
                        this.reset();
                      var n,
                        i = this.currentForm,
                        r = (this.groups = {});
                      e.each(this.settings.groups, function (t, n) {
                        "string" == typeof n && (n = n.split(/\s/)),
                          e.each(n, function (e, n) {
                            r[n] = t;
                          });
                      }),
                        (n = this.settings.rules),
                        e.each(n, function (t, i) {
                          n[t] = e.validator.normalizeRule(i);
                        }),
                        e(this.currentForm)
                          .on(
                            "focusin.validate focusout.validate keyup.validate",
                            ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']",
                            t
                          )
                          .on(
                            "click.validate",
                            "select, option, [type='radio'], [type='checkbox']",
                            t
                          ),
                        this.settings.invalidHandler &&
                          e(this.currentForm).on(
                            "invalid-form.validate",
                            this.settings.invalidHandler
                          );
                    },
                    form: function () {
                      return (
                        this.checkForm(),
                        e.extend(this.submitted, this.errorMap),
                        (this.invalid = e.extend({}, this.errorMap)),
                        this.valid() ||
                          e(this.currentForm).triggerHandler("invalid-form", [
                            this,
                          ]),
                        this.showErrors(),
                        this.valid()
                      );
                    },
                    checkForm: function () {
                      this.prepareForm();
                      for (
                        var e = 0, t = (this.currentElements = this.elements());
                        t[e];
                        e++
                      )
                        this.check(t[e]);
                      return this.valid();
                    },
                    element: function (t) {
                      var n,
                        i,
                        r = this.clean(t),
                        s = this.validationTargetFor(r),
                        o = this,
                        a = !0;
                      return (
                        void 0 === s
                          ? delete this.invalid[r.name]
                          : (this.prepareElement(s),
                            (this.currentElements = e(s)),
                            (i = this.groups[s.name]) &&
                              e.each(this.groups, function (e, t) {
                                t === i &&
                                  e !== s.name &&
                                  (r = o.validationTargetFor(
                                    o.clean(o.findByName(e))
                                  )) &&
                                  r.name in o.invalid &&
                                  (o.currentElements.push(r),
                                  (a = o.check(r) && a));
                              }),
                            (n = !1 !== this.check(s)),
                            (a = a && n),
                            (this.invalid[s.name] = !n),
                            this.numberOfInvalids() ||
                              (this.toHide = this.toHide.add(this.containers)),
                            this.showErrors(),
                            e(t).attr("aria-invalid", !n)),
                        a
                      );
                    },
                    showErrors: function (t) {
                      if (t) {
                        var n = this;
                        e.extend(this.errorMap, t),
                          (this.errorList = e.map(
                            this.errorMap,
                            function (e, t) {
                              return {
                                message: e,
                                element: n.findByName(t)[0],
                              };
                            }
                          )),
                          (this.successList = e.grep(
                            this.successList,
                            function (e) {
                              return !(e.name in t);
                            }
                          ));
                      }
                      this.settings.showErrors
                        ? this.settings.showErrors.call(
                            this,
                            this.errorMap,
                            this.errorList
                          )
                        : this.defaultShowErrors();
                    },
                    resetForm: function () {
                      e.fn.resetForm && e(this.currentForm).resetForm(),
                        (this.invalid = {}),
                        (this.submitted = {}),
                        this.prepareForm(),
                        this.hideErrors();
                      var t = this.elements()
                        .removeData("previousValue")
                        .removeAttr("aria-invalid");
                      this.resetElements(t);
                    },
                    resetElements: function (e) {
                      var t;
                      if (this.settings.unhighlight)
                        for (t = 0; e[t]; t++)
                          this.settings.unhighlight.call(
                            this,
                            e[t],
                            this.settings.errorClass,
                            ""
                          ),
                            this.findByName(e[t].name).removeClass(
                              this.settings.validClass
                            );
                      else
                        e.removeClass(this.settings.errorClass).removeClass(
                          this.settings.validClass
                        );
                    },
                    numberOfInvalids: function () {
                      return this.objectLength(this.invalid);
                    },
                    objectLength: function (e) {
                      var t,
                        n = 0;
                      for (t in e)
                        void 0 !== e[t] && null !== e[t] && !1 !== e[t] && n++;
                      return n;
                    },
                    hideErrors: function () {
                      this.hideThese(this.toHide);
                    },
                    hideThese: function (e) {
                      e.not(this.containers).text(""),
                        this.addWrapper(e).hide();
                    },
                    valid: function () {
                      return 0 === this.size();
                    },
                    size: function () {
                      return this.errorList.length;
                    },
                    focusInvalid: function () {
                      if (this.settings.focusInvalid)
                        try {
                          e(
                            this.findLastActive() ||
                              (this.errorList.length &&
                                this.errorList[0].element) ||
                              []
                          )
                            .filter(":visible")
                            .trigger("focus")
                            .trigger("focusin");
                        } catch (e) {}
                    },
                    findLastActive: function () {
                      var t = this.lastActive;
                      return (
                        t &&
                        1 ===
                          e.grep(this.errorList, function (e) {
                            return e.element.name === t.name;
                          }).length &&
                        t
                      );
                    },
                    elements: function () {
                      var t = this,
                        n = {};
                      return e(this.currentForm)
                        .find("input, select, textarea, [contenteditable]")
                        .not(":submit, :reset, :image, :disabled")
                        .not(this.settings.ignore)
                        .filter(function () {
                          var i = this.name || e(this).attr("name"),
                            r =
                              void 0 !== e(this).attr("contenteditable") &&
                              "false" !== e(this).attr("contenteditable");
                          return (
                            !i &&
                              t.settings.debug &&
                              window.console &&
                              console.error("%o has no name assigned", this),
                            r &&
                              ((this.form = e(this).closest("form")[0]),
                              (this.name = i)),
                            !(
                              this.form !== t.currentForm ||
                              i in n ||
                              !t.objectLength(e(this).rules()) ||
                              ((n[i] = !0), 0)
                            )
                          );
                        });
                    },
                    clean: function (t) {
                      return e(t)[0];
                    },
                    errors: function () {
                      var t = this.settings.errorClass.split(" ").join(".");
                      return e(
                        this.settings.errorElement + "." + t,
                        this.errorContext
                      );
                    },
                    resetInternals: function () {
                      (this.successList = []),
                        (this.errorList = []),
                        (this.errorMap = {}),
                        (this.toShow = e([])),
                        (this.toHide = e([]));
                    },
                    reset: function () {
                      this.resetInternals(), (this.currentElements = e([]));
                    },
                    prepareForm: function () {
                      this.reset(),
                        (this.toHide = this.errors().add(this.containers));
                    },
                    prepareElement: function (e) {
                      this.reset(), (this.toHide = this.errorsFor(e));
                    },
                    elementValue: function (t) {
                      var n,
                        i,
                        r = e(t),
                        s = t.type,
                        o =
                          void 0 !== r.attr("contenteditable") &&
                          "false" !== r.attr("contenteditable");
                      return "radio" === s || "checkbox" === s
                        ? this.findByName(t.name).filter(":checked").val()
                        : "number" === s && void 0 !== t.validity
                        ? t.validity.badInput
                          ? "NaN"
                          : r.val()
                        : ((n = o ? r.text() : r.val()),
                          "file" === s
                            ? "C:\\fakepath\\" === n.substr(0, 12)
                              ? n.substr(12)
                              : (i = n.lastIndexOf("/")) >= 0 ||
                                (i = n.lastIndexOf("\\")) >= 0
                              ? n.substr(i + 1)
                              : n
                            : "string" == typeof n
                            ? n.replace(/\r/g, "")
                            : n);
                    },
                    check: function (t) {
                      t = this.validationTargetFor(this.clean(t));
                      var n,
                        i,
                        r,
                        s,
                        o = e(t).rules(),
                        a = e.map(o, function (e, t) {
                          return t;
                        }).length,
                        l = !1,
                        c = this.elementValue(t);
                      for (i in ("function" == typeof o.normalizer
                        ? (s = o.normalizer)
                        : "function" == typeof this.settings.normalizer &&
                          (s = this.settings.normalizer),
                      s && ((c = s.call(t, c)), delete o.normalizer),
                      o)) {
                        r = { method: i, parameters: o[i] };
                        try {
                          if (
                            "dependency-mismatch" ===
                              (n = e.validator.methods[i].call(
                                this,
                                c,
                                t,
                                r.parameters
                              )) &&
                            1 === a
                          ) {
                            l = !0;
                            continue;
                          }
                          if (((l = !1), "pending" === n))
                            return void (this.toHide = this.toHide.not(
                              this.errorsFor(t)
                            ));
                          if (!n) return this.formatAndAdd(t, r), !1;
                        } catch (e) {
                          throw (
                            (this.settings.debug &&
                              window.console &&
                              console.log(
                                "Exception occurred when checking element " +
                                  t.id +
                                  ", check the '" +
                                  r.method +
                                  "' method.",
                                e
                              ),
                            e instanceof TypeError &&
                              (e.message +=
                                ".  Exception occurred when checking element " +
                                t.id +
                                ", check the '" +
                                r.method +
                                "' method."),
                            e)
                          );
                        }
                      }
                      if (!l)
                        return (
                          this.objectLength(o) && this.successList.push(t), !0
                        );
                    },
                    customDataMessage: function (t, n) {
                      return (
                        e(t).data(
                          "msg" +
                            n.charAt(0).toUpperCase() +
                            n.substring(1).toLowerCase()
                        ) || e(t).data("msg")
                      );
                    },
                    customMessage: function (e, t) {
                      var n = this.settings.messages[e];
                      return n && (n.constructor === String ? n : n[t]);
                    },
                    findDefined: function () {
                      for (var e = 0; e < arguments.length; e++)
                        if (void 0 !== arguments[e]) return arguments[e];
                    },
                    defaultMessage: function (t, n) {
                      "string" == typeof n && (n = { method: n });
                      var i = this.findDefined(
                          this.customMessage(t.name, n.method),
                          this.customDataMessage(t, n.method),
                          (!this.settings.ignoreTitle && t.title) || void 0,
                          e.validator.messages[n.method],
                          "<strong>Warning: No message defined for " +
                            t.name +
                            "</strong>"
                        ),
                        r = /\$?\{(\d+)\}/g;
                      return (
                        "function" == typeof i
                          ? (i = i.call(this, n.parameters, t))
                          : r.test(i) &&
                            (i = e.validator.format(
                              i.replace(r, "{$1}"),
                              n.parameters
                            )),
                        i
                      );
                    },
                    formatAndAdd: function (e, t) {
                      var n = this.defaultMessage(e, t);
                      this.errorList.push({
                        message: n,
                        element: e,
                        method: t.method,
                      }),
                        (this.errorMap[e.name] = n),
                        (this.submitted[e.name] = n);
                    },
                    addWrapper: function (e) {
                      return (
                        this.settings.wrapper &&
                          (e = e.add(e.parent(this.settings.wrapper))),
                        e
                      );
                    },
                    defaultShowErrors: function () {
                      var e, t, n;
                      for (e = 0; this.errorList[e]; e++)
                        (n = this.errorList[e]),
                          this.settings.highlight &&
                            this.settings.highlight.call(
                              this,
                              n.element,
                              this.settings.errorClass,
                              this.settings.validClass
                            ),
                          this.showLabel(n.element, n.message);
                      if (
                        (this.errorList.length &&
                          (this.toShow = this.toShow.add(this.containers)),
                        this.settings.success)
                      )
                        for (e = 0; this.successList[e]; e++)
                          this.showLabel(this.successList[e]);
                      if (this.settings.unhighlight)
                        for (e = 0, t = this.validElements(); t[e]; e++)
                          this.settings.unhighlight.call(
                            this,
                            t[e],
                            this.settings.errorClass,
                            this.settings.validClass
                          );
                      (this.toHide = this.toHide.not(this.toShow)),
                        this.hideErrors(),
                        this.addWrapper(this.toShow).show();
                    },
                    validElements: function () {
                      return this.currentElements.not(this.invalidElements());
                    },
                    invalidElements: function () {
                      return e(this.errorList).map(function () {
                        return this.element;
                      });
                    },
                    showLabel: function (t, n) {
                      var i,
                        r,
                        s,
                        o,
                        a = this.errorsFor(t),
                        l = this.idOrName(t),
                        c = e(t).attr("aria-describedby");
                      a.length
                        ? (a
                            .removeClass(this.settings.validClass)
                            .addClass(this.settings.errorClass),
                          a.html(n))
                        : ((i = a =
                            e("<" + this.settings.errorElement + ">")
                              .attr("id", l + "-error")
                              .addClass(this.settings.errorClass)
                              .html(n || "")),
                          this.settings.wrapper &&
                            (i = a
                              .hide()
                              .show()
                              .wrap("<" + this.settings.wrapper + "/>")
                              .parent()),
                          this.labelContainer.length
                            ? this.labelContainer.append(i)
                            : this.settings.errorPlacement
                            ? this.settings.errorPlacement.call(this, i, e(t))
                            : i.insertAfter(t),
                          a.is("label")
                            ? a.attr("for", l)
                            : 0 ===
                                a.parents(
                                  "label[for='" + this.escapeCssMeta(l) + "']"
                                ).length &&
                              ((s = a.attr("id")),
                              c
                                ? c.match(
                                    new RegExp(
                                      "\\b" + this.escapeCssMeta(s) + "\\b"
                                    )
                                  ) || (c += " " + s)
                                : (c = s),
                              e(t).attr("aria-describedby", c),
                              (r = this.groups[t.name]) &&
                                ((o = this),
                                e.each(o.groups, function (t, n) {
                                  n === r &&
                                    e(
                                      "[name='" + o.escapeCssMeta(t) + "']",
                                      o.currentForm
                                    ).attr("aria-describedby", a.attr("id"));
                                })))),
                        !n &&
                          this.settings.success &&
                          (a.text(""),
                          "string" == typeof this.settings.success
                            ? a.addClass(this.settings.success)
                            : this.settings.success(a, t)),
                        (this.toShow = this.toShow.add(a));
                    },
                    errorsFor: function (t) {
                      var n = this.escapeCssMeta(this.idOrName(t)),
                        i = e(t).attr("aria-describedby"),
                        r = "label[for='" + n + "'], label[for='" + n + "'] *";
                      return (
                        i &&
                          (r =
                            r +
                            ", #" +
                            this.escapeCssMeta(i).replace(/\s+/g, ", #")),
                        this.errors().filter(r)
                      );
                    },
                    escapeCssMeta: function (e) {
                      return e.replace(
                        /([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g,
                        "\\$1"
                      );
                    },
                    idOrName: function (e) {
                      return (
                        this.groups[e.name] ||
                        (this.checkable(e) ? e.name : e.id || e.name)
                      );
                    },
                    validationTargetFor: function (t) {
                      return (
                        this.checkable(t) && (t = this.findByName(t.name)),
                        e(t).not(this.settings.ignore)[0]
                      );
                    },
                    checkable: function (e) {
                      return /radio|checkbox/i.test(e.type);
                    },
                    findByName: function (t) {
                      return e(this.currentForm).find(
                        "[name='" + this.escapeCssMeta(t) + "']"
                      );
                    },
                    getLength: function (t, n) {
                      switch (n.nodeName.toLowerCase()) {
                        case "select":
                          return e("option:selected", n).length;
                        case "input":
                          if (this.checkable(n))
                            return this.findByName(n.name).filter(":checked")
                              .length;
                      }
                      return t.length;
                    },
                    depend: function (e, t) {
                      return (
                        !this.dependTypes[typeof e] ||
                        this.dependTypes[typeof e](e, t)
                      );
                    },
                    dependTypes: {
                      boolean: function (e) {
                        return e;
                      },
                      string: function (t, n) {
                        return !!e(t, n.form).length;
                      },
                      function: function (e, t) {
                        return e(t);
                      },
                    },
                    optional: function (t) {
                      var n = this.elementValue(t);
                      return (
                        !e.validator.methods.required.call(this, n, t) &&
                        "dependency-mismatch"
                      );
                    },
                    startRequest: function (t) {
                      this.pending[t.name] ||
                        (this.pendingRequest++,
                        e(t).addClass(this.settings.pendingClass),
                        (this.pending[t.name] = !0));
                    },
                    stopRequest: function (t, n) {
                      this.pendingRequest--,
                        this.pendingRequest < 0 && (this.pendingRequest = 0),
                        delete this.pending[t.name],
                        e(t).removeClass(this.settings.pendingClass),
                        n &&
                        0 === this.pendingRequest &&
                        this.formSubmitted &&
                        this.form()
                          ? (e(this.currentForm).submit(),
                            this.submitButton &&
                              e(
                                "input:hidden[name='" +
                                  this.submitButton.name +
                                  "']",
                                this.currentForm
                              ).remove(),
                            (this.formSubmitted = !1))
                          : !n &&
                            0 === this.pendingRequest &&
                            this.formSubmitted &&
                            (e(this.currentForm).triggerHandler(
                              "invalid-form",
                              [this]
                            ),
                            (this.formSubmitted = !1));
                    },
                    previousValue: function (t, n) {
                      return (
                        (n = ("string" == typeof n && n) || "remote"),
                        e.data(t, "previousValue") ||
                          e.data(t, "previousValue", {
                            old: null,
                            valid: !0,
                            message: this.defaultMessage(t, { method: n }),
                          })
                      );
                    },
                    destroy: function () {
                      this.resetForm(),
                        e(this.currentForm)
                          .off(".validate")
                          .removeData("validator")
                          .find(".validate-equalTo-blur")
                          .off(".validate-equalTo")
                          .removeClass("validate-equalTo-blur")
                          .find(".validate-lessThan-blur")
                          .off(".validate-lessThan")
                          .removeClass("validate-lessThan-blur")
                          .find(".validate-lessThanEqual-blur")
                          .off(".validate-lessThanEqual")
                          .removeClass("validate-lessThanEqual-blur")
                          .find(".validate-greaterThanEqual-blur")
                          .off(".validate-greaterThanEqual")
                          .removeClass("validate-greaterThanEqual-blur")
                          .find(".validate-greaterThan-blur")
                          .off(".validate-greaterThan")
                          .removeClass("validate-greaterThan-blur");
                    },
                  },
                  classRuleSettings: {
                    required: { required: !0 },
                    email: { email: !0 },
                    url: { url: !0 },
                    date: { date: !0 },
                    dateISO: { dateISO: !0 },
                    number: { number: !0 },
                    digits: { digits: !0 },
                    creditcard: { creditcard: !0 },
                  },
                  addClassRules: function (t, n) {
                    t.constructor === String
                      ? (this.classRuleSettings[t] = n)
                      : e.extend(this.classRuleSettings, t);
                  },
                  classRules: function (t) {
                    var n = {},
                      i = e(t).attr("class");
                    return (
                      i &&
                        e.each(i.split(" "), function () {
                          this in e.validator.classRuleSettings &&
                            e.extend(n, e.validator.classRuleSettings[this]);
                        }),
                      n
                    );
                  },
                  normalizeAttributeRule: function (e, t, n, i) {
                    /min|max|step/.test(n) &&
                      (null === t || /number|range|text/.test(t)) &&
                      ((i = Number(i)), isNaN(i) && (i = void 0)),
                      i || 0 === i
                        ? (e[n] = i)
                        : t === n && "range" !== t && (e[n] = !0);
                  },
                  attributeRules: function (t) {
                    var n,
                      i,
                      r = {},
                      s = e(t),
                      o = t.getAttribute("type");
                    for (n in e.validator.methods)
                      "required" === n
                        ? ("" === (i = t.getAttribute(n)) && (i = !0),
                          (i = !!i))
                        : (i = s.attr(n)),
                        this.normalizeAttributeRule(r, o, n, i);
                    return (
                      r.maxlength &&
                        /-1|2147483647|524288/.test(r.maxlength) &&
                        delete r.maxlength,
                      r
                    );
                  },
                  dataRules: function (t) {
                    var n,
                      i,
                      r = {},
                      s = e(t),
                      o = t.getAttribute("type");
                    for (n in e.validator.methods)
                      "" ===
                        (i = s.data(
                          "rule" +
                            n.charAt(0).toUpperCase() +
                            n.substring(1).toLowerCase()
                        )) && (i = !0),
                        this.normalizeAttributeRule(r, o, n, i);
                    return r;
                  },
                  staticRules: function (t) {
                    var n = {},
                      i = e.data(t.form, "validator");
                    return (
                      i.settings.rules &&
                        (n =
                          e.validator.normalizeRule(i.settings.rules[t.name]) ||
                          {}),
                      n
                    );
                  },
                  normalizeRules: function (t, n) {
                    return (
                      e.each(t, function (i, r) {
                        if (!1 !== r) {
                          if (r.param || r.depends) {
                            var s = !0;
                            switch (typeof r.depends) {
                              case "string":
                                s = !!e(r.depends, n.form).length;
                                break;
                              case "function":
                                s = r.depends.call(n, n);
                            }
                            s
                              ? (t[i] = void 0 === r.param || r.param)
                              : (e
                                  .data(n.form, "validator")
                                  .resetElements(e(n)),
                                delete t[i]);
                          }
                        } else delete t[i];
                      }),
                      e.each(t, function (i, r) {
                        t[i] = e.isFunction(r) && "normalizer" !== i ? r(n) : r;
                      }),
                      e.each(["minlength", "maxlength"], function () {
                        t[this] && (t[this] = Number(t[this]));
                      }),
                      e.each(["rangelength", "range"], function () {
                        var n;
                        t[this] &&
                          (e.isArray(t[this])
                            ? (t[this] = [
                                Number(t[this][0]),
                                Number(t[this][1]),
                              ])
                            : "string" == typeof t[this] &&
                              ((n = t[this]
                                .replace(/[\[\]]/g, "")
                                .split(/[\s,]+/)),
                              (t[this] = [Number(n[0]), Number(n[1])])));
                      }),
                      e.validator.autoCreateRanges &&
                        (null != t.min &&
                          null != t.max &&
                          ((t.range = [t.min, t.max]),
                          delete t.min,
                          delete t.max),
                        null != t.minlength &&
                          null != t.maxlength &&
                          ((t.rangelength = [t.minlength, t.maxlength]),
                          delete t.minlength,
                          delete t.maxlength)),
                      t
                    );
                  },
                  normalizeRule: function (t) {
                    if ("string" == typeof t) {
                      var n = {};
                      e.each(t.split(/\s/), function () {
                        n[this] = !0;
                      }),
                        (t = n);
                    }
                    return t;
                  },
                  addMethod: function (t, n, i) {
                    (e.validator.methods[t] = n),
                      (e.validator.messages[t] =
                        void 0 !== i ? i : e.validator.messages[t]),
                      n.length < 3 &&
                        e.validator.addClassRules(
                          t,
                          e.validator.normalizeRule(t)
                        );
                  },
                  methods: {
                    required: function (t, n, i) {
                      if (!this.depend(i, n)) return "dependency-mismatch";
                      if ("select" === n.nodeName.toLowerCase()) {
                        var r = e(n).val();
                        return r && r.length > 0;
                      }
                      return this.checkable(n)
                        ? this.getLength(t, n) > 0
                        : null != t && t.length > 0;
                    },
                    email: function (e, t) {
                      return (
                        this.optional(t) ||
                        /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
                          e
                        )
                      );
                    },
                    url: function (e, t) {
                      return (
                        this.optional(t) ||
                        /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(
                          e
                        )
                      );
                    },
                    date: (function () {
                      var e = !1;
                      return function (t, n) {
                        return (
                          e ||
                            ((e = !0),
                            this.settings.debug &&
                              window.console &&
                              console.warn(
                                "The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`."
                              )),
                          this.optional(n) ||
                            !/Invalid|NaN/.test(new Date(t).toString())
                        );
                      };
                    })(),
                    dateISO: function (e, t) {
                      return (
                        this.optional(t) ||
                        /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(
                          e
                        )
                      );
                    },
                    number: function (e, t) {
                      return (
                        this.optional(t) ||
                        /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e)
                      );
                    },
                    digits: function (e, t) {
                      return this.optional(t) || /^\d+$/.test(e);
                    },
                    minlength: function (t, n, i) {
                      var r = e.isArray(t) ? t.length : this.getLength(t, n);
                      return this.optional(n) || r >= i;
                    },
                    maxlength: function (t, n, i) {
                      var r = e.isArray(t) ? t.length : this.getLength(t, n);
                      return this.optional(n) || r <= i;
                    },
                    rangelength: function (t, n, i) {
                      var r = e.isArray(t) ? t.length : this.getLength(t, n);
                      return this.optional(n) || (r >= i[0] && r <= i[1]);
                    },
                    min: function (e, t, n) {
                      return this.optional(t) || e >= n;
                    },
                    max: function (e, t, n) {
                      return this.optional(t) || e <= n;
                    },
                    range: function (e, t, n) {
                      return this.optional(t) || (e >= n[0] && e <= n[1]);
                    },
                    step: function (t, n, i) {
                      var r,
                        s = e(n).attr("type"),
                        o =
                          "Step attribute on input type " +
                          s +
                          " is not supported.",
                        a = new RegExp("\\b" + s + "\\b"),
                        l = function (e) {
                          var t = ("" + e).match(/(?:\.(\d+))?$/);
                          return t && t[1] ? t[1].length : 0;
                        },
                        c = function (e) {
                          return Math.round(e * Math.pow(10, r));
                        },
                        u = !0;
                      if (s && !a.test(["text", "number", "range"].join()))
                        throw new Error(o);
                      return (
                        (r = l(i)),
                        (l(t) > r || c(t) % c(i) != 0) && (u = !1),
                        this.optional(n) || u
                      );
                    },
                    equalTo: function (t, n, i) {
                      var r = e(i);
                      return (
                        this.settings.onfocusout &&
                          r.not(".validate-equalTo-blur").length &&
                          r
                            .addClass("validate-equalTo-blur")
                            .on("blur.validate-equalTo", function () {
                              e(n).valid();
                            }),
                        t === r.val()
                      );
                    },
                    remote: function (t, n, i, r) {
                      if (this.optional(n)) return "dependency-mismatch";
                      r = ("string" == typeof r && r) || "remote";
                      var s,
                        o,
                        a,
                        l = this.previousValue(n, r);
                      return (
                        this.settings.messages[n.name] ||
                          (this.settings.messages[n.name] = {}),
                        (l.originalMessage =
                          l.originalMessage ||
                          this.settings.messages[n.name][r]),
                        (this.settings.messages[n.name][r] = l.message),
                        (i = ("string" == typeof i && { url: i }) || i),
                        (a = e.param(e.extend({ data: t }, i.data))),
                        l.old === a
                          ? l.valid
                          : ((l.old = a),
                            (s = this),
                            this.startRequest(n),
                            ((o = {})[n.name] = t),
                            e.ajax(
                              e.extend(
                                !0,
                                {
                                  mode: "abort",
                                  port: "validate" + n.name,
                                  dataType: "json",
                                  data: o,
                                  context: s.currentForm,
                                  success: function (e) {
                                    var i,
                                      o,
                                      a,
                                      c = !0 === e || "true" === e;
                                    (s.settings.messages[n.name][r] =
                                      l.originalMessage),
                                      c
                                        ? ((a = s.formSubmitted),
                                          s.resetInternals(),
                                          (s.toHide = s.errorsFor(n)),
                                          (s.formSubmitted = a),
                                          s.successList.push(n),
                                          (s.invalid[n.name] = !1),
                                          s.showErrors())
                                        : ((i = {}),
                                          (o =
                                            e ||
                                            s.defaultMessage(n, {
                                              method: r,
                                              parameters: t,
                                            })),
                                          (i[n.name] = l.message = o),
                                          (s.invalid[n.name] = !0),
                                          s.showErrors(i)),
                                      (l.valid = c),
                                      s.stopRequest(n, c);
                                  },
                                },
                                i
                              )
                            ),
                            "pending")
                      );
                    },
                  },
                });
              var t,
                n = {};
              return (
                e.ajaxPrefilter
                  ? e.ajaxPrefilter(function (e, t, i) {
                      var r = e.port;
                      "abort" === e.mode && (n[r] && n[r].abort(), (n[r] = i));
                    })
                  : ((t = e.ajax),
                    (e.ajax = function (i) {
                      var r = ("mode" in i ? i : e.ajaxSettings).mode,
                        s = ("port" in i ? i : e.ajaxSettings).port;
                      return "abort" === r
                        ? (n[s] && n[s].abort(),
                          (n[s] = t.apply(this, arguments)),
                          n[s])
                        : t.apply(this, arguments);
                    })),
                e
              );
            })
              ? i.apply(t, r)
              : i) || (e.exports = s);
    },
  ],
]);
