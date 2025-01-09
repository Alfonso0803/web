if (function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document)
            throw new Error("jQuery requires a window with a document");
        return e(t)
    }
    : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
    function n(t) {
        var e = !!t && "length"in t && t.length
          , n = ot.type(t);
        return "function" !== n && !ot.isWindow(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
    }
    function r(t, e, n) {
        if (ot.isFunction(e))
            return ot.grep(t, function(t, r) {
                return !!e.call(t, r, t) !== n
            });
        if (e.nodeType)
            return ot.grep(t, function(t) {
                return t === e !== n
            });
        if ("string" == typeof e) {
            if (vt.test(e))
                return ot.filter(e, t, n);
            e = ot.filter(e, t)
        }
        return ot.grep(t, function(t) {
            return J.call(e, t) > -1 !== n
        })
    }
    function i(t, e) {
        for (; (t = t[e]) && 1 !== t.nodeType; )
            ;
        return t
    }
    function o(t) {
        var e = {};
        return ot.each(t.match(bt) || [], function(t, n) {
            e[n] = !0
        }),
        e
    }
    function s() {
        G.removeEventListener("DOMContentLoaded", s),
        t.removeEventListener("load", s),
        ot.ready()
    }
    function a() {
        this.expando = ot.expando + a.uid++
    }
    function u(t, e, n) {
        var r;
        if (void 0 === n && 1 === t.nodeType)
            if (r = "data-" + e.replace(St, "-$&").toLowerCase(),
            "string" == typeof (n = t.getAttribute(r))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : kt.test(n) ? ot.parseJSON(n) : n)
                } catch (t) {}
                Et.set(t, e, n)
            } else
                n = void 0;
        return n
    }
    function c(t, e, n, r) {
        var i, o = 1, s = 20, a = r ? function() {
            return r.cur()
        }
        : function() {
            return ot.css(t, e, "")
        }
        , u = a(), c = n && n[3] || (ot.cssNumber[e] ? "" : "px"), l = (ot.cssNumber[e] || "px" !== c && +u) && At.exec(ot.css(t, e));
        if (l && l[3] !== c) {
            c = c || l[3],
            n = n || [],
            l = +u || 1;
            do {
                o = o || ".5",
                l /= o,
                ot.style(t, e, l + c)
            } while (o !== (o = a() / u) && 1 !== o && --s)
        }
        return n && (l = +l || +u || 0,
        i = n[1] ? l + (n[1] + 1) * n[2] : +n[2],
        r && (r.unit = c,
        r.start = l,
        r.end = i)),
        i
    }
    function l(t, e) {
        var n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
        return void 0 === e || e && ot.nodeName(t, e) ? ot.merge([t], n) : n
    }
    function f(t, e) {
        for (var n = 0, r = t.length; r > n; n++)
            Ct.set(t[n], "globalEval", !e || Ct.get(e[n], "globalEval"))
    }
    function h(t, e, n, r, i) {
        for (var o, s, a, u, c, h, p = e.createDocumentFragment(), d = [], v = 0, g = t.length; g > v; v++)
            if ((o = t[v]) || 0 === o)
                if ("object" === ot.type(o))
                    ot.merge(d, o.nodeType ? [o] : o);
                else if (Nt.test(o)) {
                    for (s = s || p.appendChild(e.createElement("div")),
                    a = (Ft.exec(o) || ["", ""])[1].toLowerCase(),
                    u = It[a] || It._default,
                    s.innerHTML = u[1] + ot.htmlPrefilter(o) + u[2],
                    h = u[0]; h--; )
                        s = s.lastChild;
                    ot.merge(d, s.childNodes),
                    s = p.firstChild,
                    s.textContent = ""
                } else
                    d.push(e.createTextNode(o));
        for (p.textContent = "",
        v = 0; o = d[v++]; )
            if (r && ot.inArray(o, r) > -1)
                i && i.push(o);
            else if (c = ot.contains(o.ownerDocument, o),
            s = l(p.appendChild(o), "script"),
            c && f(s),
            n)
                for (h = 0; o = s[h++]; )
                    Dt.test(o.type || "") && n.push(o);
        return p
    }
    function p() {
        return !0
    }
    function d() {
        return !1
    }
    function v() {
        try {
            return G.activeElement
        } catch (t) {}
    }
    function g(t, e, n, r, i, o) {
        var s, a;
        if ("object" == typeof e) {
            "string" != typeof n && (r = r || n,
            n = void 0);
            for (a in e)
                g(t, a, n, r, e[a], o);
            return t
        }
        if (null == r && null == i ? (i = n,
        r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
        r = void 0) : (i = r,
        r = n,
        n = void 0)),
        !1 === i)
            i = d;
        else if (!i)
            return t;
        return 1 === o && (s = i,
        i = function(t) {
            return ot().off(t),
            s.apply(this, arguments)
        }
        ,
        i.guid = s.guid || (s.guid = ot.guid++)),
        t.each(function() {
            ot.event.add(this, e, i, r, n)
        })
    }
    function m(t, e) {
        return ot.nodeName(t, "table") && ot.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }
    function y(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type,
        t
    }
    function _(t) {
        var e = Mt.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"),
        t
    }
    function b(t, e) {
        var n, r, i, o, s, a, u, c;
        if (1 === e.nodeType) {
            if (Ct.hasData(t) && (o = Ct.access(t),
            s = Ct.set(e, o),
            c = o.events)) {
                delete s.handle,
                s.events = {};
                for (i in c)
                    for (n = 0,
                    r = c[i].length; r > n; n++)
                        ot.event.add(e, i, c[i][n])
            }
            Et.hasData(t) && (a = Et.access(t),
            u = ot.extend({}, a),
            Et.set(e, u))
        }
    }
    function w(t, e) {
        var n = e.nodeName.toLowerCase();
        "input" === n && Pt.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
    }
    function x(t, e, n, r) {
        e = K.apply([], e);
        var i, o, s, a, u, c, f = 0, p = t.length, d = p - 1, v = e[0], g = ot.isFunction(v);
        if (g || p > 1 && "string" == typeof v && !rt.checkClone && qt.test(v))
            return t.each(function(i) {
                var o = t.eq(i);
                g && (e[0] = v.call(this, i, o.html())),
                x(o, e, n, r)
            });
        if (p && (i = h(e, t[0].ownerDocument, !1, t, r),
        o = i.firstChild,
        1 === i.childNodes.length && (i = o),
        o || r)) {
            for (s = ot.map(l(i, "script"), y),
            a = s.length; p > f; f++)
                u = i,
                f !== d && (u = ot.clone(u, !0, !0),
                a && ot.merge(s, l(u, "script"))),
                n.call(t[f], u, f);
            if (a)
                for (c = s[s.length - 1].ownerDocument,
                ot.map(s, _),
                f = 0; a > f; f++)
                    u = s[f],
                    Dt.test(u.type || "") && !Ct.access(u, "globalEval") && ot.contains(c, u) && (u.src ? ot._evalUrl && ot._evalUrl(u.src) : ot.globalEval(u.textContent.replace(Wt, "")))
        }
        return t
    }
    function T(t, e, n) {
        for (var r, i = e ? ot.filter(e, t) : t, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || ot.cleanData(l(r)),
            r.parentNode && (n && ot.contains(r.ownerDocument, r) && f(l(r, "script")),
            r.parentNode.removeChild(r));
        return t
    }
    function C(t, e) {
        var n = ot(e.createElement(t)).appendTo(e.body)
          , r = ot.css(n[0], "display");
        return n.detach(),
        r
    }
    function E(t) {
        var e = G
          , n = Vt[t];
        return n || (n = C(t, e),
        "none" !== n && n || (Ut = (Ut || ot("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement),
        e = Ut[0].contentDocument,
        e.write(),
        e.close(),
        n = C(t, e),
        Ut.detach()),
        Vt[t] = n),
        n
    }
    function k(t, e, n) {
        var r, i, o, s, a = t.style;
        return n = n || Gt(t),
        s = n ? n.getPropertyValue(e) || n[e] : void 0,
        "" !== s && void 0 !== s || ot.contains(t.ownerDocument, t) || (s = ot.style(t, e)),
        n && !rt.pixelMarginRight() && Xt.test(s) && Qt.test(e) && (r = a.width,
        i = a.minWidth,
        o = a.maxWidth,
        a.minWidth = a.maxWidth = a.width = s,
        s = n.width,
        a.width = r,
        a.minWidth = i,
        a.maxWidth = o),
        void 0 !== s ? s + "" : s
    }
    function S(t, e) {
        return {
            get: function() {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }
    function j(t) {
        if (t in ne)
            return t;
        for (var e = t[0].toUpperCase() + t.slice(1), n = ee.length; n--; )
            if ((t = ee[n] + e)in ne)
                return t
    }
    function A(t, e, n) {
        var r = At.exec(e);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : e
    }
    function O(t, e, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > o; o += 2)
            "margin" === n && (s += ot.css(t, n + Ot[o], !0, i)),
            r ? ("content" === n && (s -= ot.css(t, "padding" + Ot[o], !0, i)),
            "margin" !== n && (s -= ot.css(t, "border" + Ot[o] + "Width", !0, i))) : (s += ot.css(t, "padding" + Ot[o], !0, i),
            "padding" !== n && (s += ot.css(t, "border" + Ot[o] + "Width", !0, i)));
        return s
    }
    function R(t, e, n) {
        var r = !0
          , i = "width" === e ? t.offsetWidth : t.offsetHeight
          , o = Gt(t)
          , s = "border-box" === ot.css(t, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = k(t, e, o),
            (0 > i || null == i) && (i = t.style[e]),
            Xt.test(i))
                return i;
            r = s && (rt.boxSizingReliable() || i === t.style[e]),
            i = parseFloat(i) || 0
        }
        return i + O(t, e, n || (s ? "border" : "content"), r, o) + "px"
    }
    function P(t, e) {
        for (var n, r, i, o = [], s = 0, a = t.length; a > s; s++)
            r = t[s],
            r.style && (o[s] = Ct.get(r, "olddisplay"),
            n = r.style.display,
            e ? (o[s] || "none" !== n || (r.style.display = ""),
            "" === r.style.display && Rt(r) && (o[s] = Ct.access(r, "olddisplay", E(r.nodeName)))) : (i = Rt(r),
            "none" === n && i || Ct.set(r, "olddisplay", i ? n : ot.css(r, "display"))));
        for (s = 0; a > s; s++)
            r = t[s],
            r.style && (e && "none" !== r.style.display && "" !== r.style.display || (r.style.display = e ? o[s] || "" : "none"));
        return t
    }
    function F(t, e, n, r, i) {
        return new F.prototype.init(t,e,n,r,i)
    }
    function D() {
        return t.setTimeout(function() {
            re = void 0
        }),
        re = ot.now()
    }
    function I(t, e) {
        var n, r = 0, i = {
            height: t
        };
        for (e = e ? 1 : 0; 4 > r; r += 2 - e)
            n = Ot[r],
            i["margin" + n] = i["padding" + n] = t;
        return e && (i.opacity = i.width = t),
        i
    }
    function N(t, e, n) {
        for (var r, i = (z.tweeners[e] || []).concat(z.tweeners["*"]), o = 0, s = i.length; s > o; o++)
            if (r = i[o].call(n, e, t))
                return r
    }
    function L(t, e, n) {
        var r, i, o, s, a, u, c, l = this, f = {}, h = t.style, p = t.nodeType && Rt(t), d = Ct.get(t, "fxshow");
        n.queue || (a = ot._queueHooks(t, "fx"),
        null == a.unqueued && (a.unqueued = 0,
        u = a.empty.fire,
        a.empty.fire = function() {
            a.unqueued || u()
        }
        ),
        a.unqueued++,
        l.always(function() {
            l.always(function() {
                a.unqueued--,
                ot.queue(t, "fx").length || a.empty.fire()
            })
        })),
        1 === t.nodeType && ("height"in e || "width"in e) && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
        c = ot.css(t, "display"),
        "inline" === ("none" === c ? Ct.get(t, "olddisplay") || E(t.nodeName) : c) && "none" === ot.css(t, "float") && (h.display = "inline-block")),
        n.overflow && (h.overflow = "hidden",
        l.always(function() {
            h.overflow = n.overflow[0],
            h.overflowX = n.overflow[1],
            h.overflowY = n.overflow[2]
        }));
        for (r in e)
            if (i = e[r],
            oe.exec(i)) {
                if (delete e[r],
                o = o || "toggle" === i,
                i === (p ? "hide" : "show")) {
                    if ("show" !== i || !d || void 0 === d[r])
                        continue;
                    p = !0
                }
                f[r] = d && d[r] || ot.style(t, r)
            } else
                c = void 0;
        if (ot.isEmptyObject(f))
            "inline" === ("none" === c ? E(t.nodeName) : c) && (h.display = c);
        else {
            d ? "hidden"in d && (p = d.hidden) : d = Ct.access(t, "fxshow", {}),
            o && (d.hidden = !p),
            p ? ot(t).show() : l.done(function() {
                ot(t).hide()
            }),
            l.done(function() {
                var e;
                Ct.remove(t, "fxshow");
                for (e in f)
                    ot.style(t, e, f[e])
            });
            for (r in f)
                s = N(p ? d[r] : 0, r, l),
                r in d || (d[r] = s.start,
                p && (s.end = s.start,
                s.start = "width" === r || "height" === r ? 1 : 0))
        }
    }
    function $(t, e) {
        var n, r, i, o, s;
        for (n in t)
            if (r = ot.camelCase(n),
            i = e[r],
            o = t[n],
            ot.isArray(o) && (i = o[1],
            o = t[n] = o[0]),
            n !== r && (t[r] = o,
            delete t[n]),
            (s = ot.cssHooks[r]) && "expand"in s) {
                o = s.expand(o),
                delete t[r];
                for (n in o)
                    n in t || (t[n] = o[n],
                    e[n] = i)
            } else
                e[r] = i
    }
    function z(t, e, n) {
        var r, i, o = 0, s = z.prefilters.length, a = ot.Deferred().always(function() {
            delete u.elem
        }), u = function() {
            if (i)
                return !1;
            for (var e = re || D(), n = Math.max(0, c.startTime + c.duration - e), r = n / c.duration || 0, o = 1 - r, s = 0, u = c.tweens.length; u > s; s++)
                c.tweens[s].run(o);
            return a.notifyWith(t, [c, o, n]),
            1 > o && u ? n : (a.resolveWith(t, [c]),
            !1)
        }, c = a.promise({
            elem: t,
            props: ot.extend({}, e),
            opts: ot.extend(!0, {
                specialEasing: {},
                easing: ot.easing._default
            }, n),
            originalProperties: e,
            originalOptions: n,
            startTime: re || D(),
            duration: n.duration,
            tweens: [],
            createTween: function(e, n) {
                var r = ot.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                return c.tweens.push(r),
                r
            },
            stop: function(e) {
                var n = 0
                  , r = e ? c.tweens.length : 0;
                if (i)
                    return this;
                for (i = !0; r > n; n++)
                    c.tweens[n].run(1);
                return e ? (a.notifyWith(t, [c, 1, 0]),
                a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]),
                this
            }
        }), l = c.props;
        for ($(l, c.opts.specialEasing); s > o; o++)
            if (r = z.prefilters[o].call(c, t, l, c.opts))
                return ot.isFunction(r.stop) && (ot._queueHooks(c.elem, c.opts.queue).stop = ot.proxy(r.stop, r)),
                r;
        return ot.map(l, N, c),
        ot.isFunction(c.opts.start) && c.opts.start.call(t, c),
        ot.fx.timer(ot.extend(u, {
            elem: t,
            anim: c,
            queue: c.opts.queue
        })),
        c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }
    function H(t) {
        return t.getAttribute && t.getAttribute("class") || ""
    }
    function B(t) {
        return function(e, n) {
            "string" != typeof e && (n = e,
            e = "*");
            var r, i = 0, o = e.toLowerCase().match(bt) || [];
            if (ot.isFunction(n))
                for (; r = o[i++]; )
                    "+" === r[0] ? (r = r.slice(1) || "*",
                    (t[r] = t[r] || []).unshift(n)) : (t[r] = t[r] || []).push(n)
        }
    }
    function q(t, e, n, r) {
        function i(a) {
            var u;
            return o[a] = !0,
            ot.each(t[a] || [], function(t, a) {
                var c = a(e, n, r);
                return "string" != typeof c || s || o[c] ? s ? !(u = c) : void 0 : (e.dataTypes.unshift(c),
                i(c),
                !1)
            }),
            u
        }
        var o = {}
          , s = t === Ee;
        return i(e.dataTypes[0]) || !o["*"] && i("*")
    }
    function M(t, e) {
        var n, r, i = ot.ajaxSettings.flatOptions || {};
        for (n in e)
            void 0 !== e[n] && ((i[n] ? t : r || (r = {}))[n] = e[n]);
        return r && ot.extend(!0, t, r),
        t
    }
    function W(t, e, n) {
        for (var r, i, o, s, a = t.contents, u = t.dataTypes; "*" === u[0]; )
            u.shift(),
            void 0 === r && (r = t.mimeType || e.getResponseHeader("Content-Type"));
        if (r)
            for (i in a)
                if (a[i] && a[i].test(r)) {
                    u.unshift(i);
                    break
                }
        if (u[0]in n)
            o = u[0];
        else {
            for (i in n) {
                if (!u[0] || t.converters[i + " " + u[0]]) {
                    o = i;
                    break
                }
                s || (s = i)
            }
            o = o || s
        }
        return o ? (o !== u[0] && u.unshift(o),
        n[o]) : void 0
    }
    function U(t, e, n, r) {
        var i, o, s, a, u, c = {}, l = t.dataTypes.slice();
        if (l[1])
            for (s in t.converters)
                c[s.toLowerCase()] = t.converters[s];
        for (o = l.shift(); o; )
            if (t.responseFields[o] && (n[t.responseFields[o]] = e),
            !u && r && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
            u = o,
            o = l.shift())
                if ("*" === o)
                    o = u;
                else if ("*" !== u && u !== o) {
                    if (!(s = c[u + " " + o] || c["* " + o]))
                        for (i in c)
                            if (a = i.split(" "),
                            a[1] === o && (s = c[u + " " + a[0]] || c["* " + a[0]])) {
                                !0 === s ? s = c[i] : !0 !== c[i] && (o = a[0],
                                l.unshift(a[1]));
                                break
                            }
                    if (!0 !== s)
                        if (s && t.throws)
                            e = s(e);
                        else
                            try {
                                e = s(e)
                            } catch (t) {
                                return {
                                    state: "parsererror",
                                    error: s ? t : "No conversion from " + u + " to " + o
                                }
                            }
                }
        return {
            state: "success",
            data: e
        }
    }
    function V(t, e, n, r) {
        var i;
        if (ot.isArray(e))
            ot.each(e, function(e, i) {
                n || Ae.test(t) ? r(t, i) : V(t + "[" + ("object" == typeof i && null != i ? e : "") + "]", i, n, r)
            });
        else if (n || "object" !== ot.type(e))
            r(t, e);
        else
            for (i in e)
                V(t + "[" + i + "]", e[i], n, r)
    }
    function Q(t) {
        return ot.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
    }
    var X = []
      , G = t.document
      , Y = X.slice
      , K = X.concat
      , Z = X.push
      , J = X.indexOf
      , tt = {}
      , et = tt.toString
      , nt = tt.hasOwnProperty
      , rt = {}
      , it = "2.2.4"
      , ot = function(t, e) {
        return new ot.fn.init(t,e)
    }
      , st = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , at = /^-ms-/
      , ut = /-([\da-z])/gi
      , ct = function(t, e) {
        return e.toUpperCase()
    };
    ot.fn = ot.prototype = {
        jquery: it,
        constructor: ot,
        selector: "",
        length: 0,
        toArray: function() {
            return Y.call(this)
        },
        get: function(t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : Y.call(this)
        },
        pushStack: function(t) {
            var e = ot.merge(this.constructor(), t);
            return e.prevObject = this,
            e.context = this.context,
            e
        },
        each: function(t) {
            return ot.each(this, t)
        },
        map: function(t) {
            return this.pushStack(ot.map(this, function(e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function() {
            return this.pushStack(Y.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length
              , n = +t + (0 > t ? e : 0);
            return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: Z,
        sort: X.sort,
        splice: X.splice
    },
    ot.extend = ot.fn.extend = function() {
        var t, e, n, r, i, o, s = arguments[0] || {}, a = 1, u = arguments.length, c = !1;
        for ("boolean" == typeof s && (c = s,
        s = arguments[a] || {},
        a++),
        "object" == typeof s || ot.isFunction(s) || (s = {}),
        a === u && (s = this,
        a--); u > a; a++)
            if (null != (t = arguments[a]))
                for (e in t)
                    n = s[e],
                    r = t[e],
                    s !== r && (c && r && (ot.isPlainObject(r) || (i = ot.isArray(r))) ? (i ? (i = !1,
                    o = n && ot.isArray(n) ? n : []) : o = n && ot.isPlainObject(n) ? n : {},
                    s[e] = ot.extend(c, o, r)) : void 0 !== r && (s[e] = r));
        return s
    }
    ,
    ot.extend({
        expando: "jQuery" + (it + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === ot.type(t)
        },
        isArray: Array.isArray,
        isWindow: function(t) {
            return null != t && t === t.window
        },
        isNumeric: function(t) {
            var e = t && t.toString();
            return !ot.isArray(t) && e - parseFloat(e) + 1 >= 0
        },
        isPlainObject: function(t) {
            var e;
            if ("object" !== ot.type(t) || t.nodeType || ot.isWindow(t))
                return !1;
            if (t.constructor && !nt.call(t, "constructor") && !nt.call(t.constructor.prototype || {}, "isPrototypeOf"))
                return !1;
            for (e in t)
                ;
            return void 0 === e || nt.call(t, e)
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t)
                return !1;
            return !0
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? tt[et.call(t)] || "object" : typeof t
        },
        globalEval: function(t) {
            var e, n = eval;
            (t = ot.trim(t)) && (1 === t.indexOf("use strict") ? (e = G.createElement("script"),
            e.text = t,
            G.head.appendChild(e).parentNode.removeChild(e)) : n(t))
        },
        camelCase: function(t) {
            return t.replace(at, "ms-").replace(ut, ct)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e) {
            var r, i = 0;
            if (n(t))
                for (r = t.length; r > i && !1 !== e.call(t[i], i, t[i]); i++)
                    ;
            else
                for (i in t)
                    if (!1 === e.call(t[i], i, t[i]))
                        break;
            return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(st, "")
        },
        makeArray: function(t, e) {
            var r = e || [];
            return null != t && (n(Object(t)) ? ot.merge(r, "string" == typeof t ? [t] : t) : Z.call(r, t)),
            r
        },
        inArray: function(t, e, n) {
            return null == e ? -1 : J.call(e, t, n)
        },
        merge: function(t, e) {
            for (var n = +e.length, r = 0, i = t.length; n > r; r++)
                t[i++] = e[r];
            return t.length = i,
            t
        },
        grep: function(t, e, n) {
            for (var r = [], i = 0, o = t.length, s = !n; o > i; i++)
                !e(t[i], i) !== s && r.push(t[i]);
            return r
        },
        map: function(t, e, r) {
            var i, o, s = 0, a = [];
            if (n(t))
                for (i = t.length; i > s; s++)
                    null != (o = e(t[s], s, r)) && a.push(o);
            else
                for (s in t)
                    null != (o = e(t[s], s, r)) && a.push(o);
            return K.apply([], a)
        },
        guid: 1,
        proxy: function(t, e) {
            var n, r, i;
            return "string" == typeof e && (n = t[e],
            e = t,
            t = n),
            ot.isFunction(t) ? (r = Y.call(arguments, 2),
            i = function() {
                return t.apply(e || this, r.concat(Y.call(arguments)))
            }
            ,
            i.guid = t.guid = t.guid || ot.guid++,
            i) : void 0
        },
        now: Date.now,
        support: rt
    }),
    "function" == typeof Symbol && (ot.fn[Symbol.iterator] = X[Symbol.iterator]),
    ot.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
        tt["[object " + e + "]"] = e.toLowerCase()
    });
    var lt = function(t) {
        function e(t, e, n, r) {
            var i, o, s, a, c, f, h, p, d = e && e.ownerDocument, v = e ? e.nodeType : 9;
            if (n = n || [],
            "string" != typeof t || !t || 1 !== v && 9 !== v && 11 !== v)
                return n;
            if (!r && ((e ? e.ownerDocument || e : $) !== O && A(e),
            e = e || O,
            P)) {
                if (11 !== v && (f = vt.exec(t)))
                    if (i = f[1]) {
                        if (9 === v) {
                            if (!(s = e.getElementById(i)))
                                return n;
                            if (s.id === i)
                                return n.push(s),
                                n
                        } else if (d && (s = d.getElementById(i)) && N(e, s) && s.id === i)
                            return n.push(s),
                            n
                    } else {
                        if (f[2])
                            return Y.apply(n, e.getElementsByTagName(t)),
                            n;
                        if ((i = f[3]) && _.getElementsByClassName && e.getElementsByClassName)
                            return Y.apply(n, e.getElementsByClassName(i)),
                            n
                    }
                if (_.qsa && !M[t + " "] && (!F || !F.test(t))) {
                    if (1 !== v)
                        d = e,
                        p = t;
                    else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((a = e.getAttribute("id")) ? a = a.replace(mt, "\\$&") : e.setAttribute("id", a = L),
                        h = T(t),
                        o = h.length,
                        c = lt.test(a) ? "#" + a : "[id='" + a + "']"; o--; )
                            h[o] = c + " " + l(h[o]);
                        p = h.join(","),
                        d = gt.test(t) && u(e.parentNode) || e
                    }
                    if (p)
                        try {
                            return Y.apply(n, d.querySelectorAll(p)),
                            n
                        } catch (t) {} finally {
                            a === L && e.removeAttribute("id")
                        }
                }
            }
            return E(t.replace(ot, "$1"), e, n, r)
        }
        function n() {
            function t(n, r) {
                return e.push(n + " ") > b.cacheLength && delete t[e.shift()],
                t[n + " "] = r
            }
            var e = [];
            return t
        }
        function r(t) {
            return t[L] = !0,
            t
        }
        function i(t) {
            var e = O.createElement("div");
            try {
                return !!t(e)
            } catch (t) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e),
                e = null
            }
        }
        function o(t, e) {
            for (var n = t.split("|"), r = n.length; r--; )
                b.attrHandle[n[r]] = e
        }
        function s(t, e) {
            var n = e && t
              , r = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || U) - (~t.sourceIndex || U);
            if (r)
                return r;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === e)
                        return -1;
            return t ? 1 : -1
        }
        function a(t) {
            return r(function(e) {
                return e = +e,
                r(function(n, r) {
                    for (var i, o = t([], n.length, e), s = o.length; s--; )
                        n[i = o[s]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }
        function u(t) {
            return t && void 0 !== t.getElementsByTagName && t
        }
        function c() {}
        function l(t) {
            for (var e = 0, n = t.length, r = ""; n > e; e++)
                r += t[e].value;
            return r
        }
        function f(t, e, n) {
            var r = e.dir
              , i = n && "parentNode" === r
              , o = H++;
            return e.first ? function(e, n, o) {
                for (; e = e[r]; )
                    if (1 === e.nodeType || i)
                        return t(e, n, o)
            }
            : function(e, n, s) {
                var a, u, c, l = [z, o];
                if (s) {
                    for (; e = e[r]; )
                        if ((1 === e.nodeType || i) && t(e, n, s))
                            return !0
                } else
                    for (; e = e[r]; )
                        if (1 === e.nodeType || i) {
                            if (c = e[L] || (e[L] = {}),
                            u = c[e.uniqueID] || (c[e.uniqueID] = {}),
                            (a = u[r]) && a[0] === z && a[1] === o)
                                return l[2] = a[2];
                            if (u[r] = l,
                            l[2] = t(e, n, s))
                                return !0
                        }
            }
        }
        function h(t) {
            return t.length > 1 ? function(e, n, r) {
                for (var i = t.length; i--; )
                    if (!t[i](e, n, r))
                        return !1;
                return !0
            }
            : t[0]
        }
        function p(t, n, r) {
            for (var i = 0, o = n.length; o > i; i++)
                e(t, n[i], r);
            return r
        }
        function d(t, e, n, r, i) {
            for (var o, s = [], a = 0, u = t.length, c = null != e; u > a; a++)
                (o = t[a]) && (n && !n(o, r, i) || (s.push(o),
                c && e.push(a)));
            return s
        }
        function v(t, e, n, i, o, s) {
            return i && !i[L] && (i = v(i)),
            o && !o[L] && (o = v(o, s)),
            r(function(r, s, a, u) {
                var c, l, f, h = [], v = [], g = s.length, m = r || p(e || "*", a.nodeType ? [a] : a, []), y = !t || !r && e ? m : d(m, h, t, a, u), _ = n ? o || (r ? t : g || i) ? [] : s : y;
                if (n && n(y, _, a, u),
                i)
                    for (c = d(_, v),
                    i(c, [], a, u),
                    l = c.length; l--; )
                        (f = c[l]) && (_[v[l]] = !(y[v[l]] = f));
                if (r) {
                    if (o || t) {
                        if (o) {
                            for (c = [],
                            l = _.length; l--; )
                                (f = _[l]) && c.push(y[l] = f);
                            o(null, _ = [], c, u)
                        }
                        for (l = _.length; l--; )
                            (f = _[l]) && (c = o ? Z(r, f) : h[l]) > -1 && (r[c] = !(s[c] = f))
                    }
                } else
                    _ = d(_ === s ? _.splice(g, _.length) : _),
                    o ? o(null, s, _, u) : Y.apply(s, _)
            })
        }
        function g(t) {
            for (var e, n, r, i = t.length, o = b.relative[t[0].type], s = o || b.relative[" "], a = o ? 1 : 0, u = f(function(t) {
                return t === e
            }, s, !0), c = f(function(t) {
                return Z(e, t) > -1
            }, s, !0), p = [function(t, n, r) {
                var i = !o && (r || n !== k) || ((e = n).nodeType ? u(t, n, r) : c(t, n, r));
                return e = null,
                i
            }
            ]; i > a; a++)
                if (n = b.relative[t[a].type])
                    p = [f(h(p), n)];
                else {
                    if (n = b.filter[t[a].type].apply(null, t[a].matches),
                    n[L]) {
                        for (r = ++a; i > r && !b.relative[t[r].type]; r++)
                            ;
                        return v(a > 1 && h(p), a > 1 && l(t.slice(0, a - 1).concat({
                            value: " " === t[a - 2].type ? "*" : ""
                        })).replace(ot, "$1"), n, r > a && g(t.slice(a, r)), i > r && g(t = t.slice(r)), i > r && l(t))
                    }
                    p.push(n)
                }
            return h(p)
        }
        function m(t, n) {
            var i = n.length > 0
              , o = t.length > 0
              , s = function(r, s, a, u, c) {
                var l, f, h, p = 0, v = "0", g = r && [], m = [], y = k, _ = r || o && b.find.TAG("*", c), w = z += null == y ? 1 : Math.random() || .1, x = _.length;
                for (c && (k = s === O || s || c); v !== x && null != (l = _[v]); v++) {
                    if (o && l) {
                        for (f = 0,
                        s || l.ownerDocument === O || (A(l),
                        a = !P); h = t[f++]; )
                            if (h(l, s || O, a)) {
                                u.push(l);
                                break
                            }
                        c && (z = w)
                    }
                    i && ((l = !h && l) && p--,
                    r && g.push(l))
                }
                if (p += v,
                i && v !== p) {
                    for (f = 0; h = n[f++]; )
                        h(g, m, s, a);
                    if (r) {
                        if (p > 0)
                            for (; v--; )
                                g[v] || m[v] || (m[v] = X.call(u));
                        m = d(m)
                    }
                    Y.apply(u, m),
                    c && !r && m.length > 0 && p + n.length > 1 && e.uniqueSort(u)
                }
                return c && (z = w,
                k = y),
                g
            };
            return i ? r(s) : s
        }
        var y, _, b, w, x, T, C, E, k, S, j, A, O, R, P, F, D, I, N, L = "sizzle" + 1 * new Date, $ = t.document, z = 0, H = 0, B = n(), q = n(), M = n(), W = function(t, e) {
            return t === e && (j = !0),
            0
        }, U = 1 << 31, V = {}.hasOwnProperty, Q = [], X = Q.pop, G = Q.push, Y = Q.push, K = Q.slice, Z = function(t, e) {
            for (var n = 0, r = t.length; r > n; n++)
                if (t[n] === e)
                    return n;
            return -1
        }, J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", tt = "[\\x20\\t\\r\\n\\f]", et = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", nt = "\\[" + tt + "*(" + et + ")(?:" + tt + "*([*^$|!~]?=)" + tt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + et + "))|)" + tt + "*\\]", rt = ":(" + et + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + nt + ")*)|.*)\\)|)", it = new RegExp(tt + "+","g"), ot = new RegExp("^" + tt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + tt + "+$","g"), st = new RegExp("^" + tt + "*," + tt + "*"), at = new RegExp("^" + tt + "*([>+~]|" + tt + ")" + tt + "*"), ut = new RegExp("=" + tt + "*([^\\]'\"]*?)" + tt + "*\\]","g"), ct = new RegExp(rt), lt = new RegExp("^" + et + "$"), ft = {
            ID: new RegExp("^#(" + et + ")"),
            CLASS: new RegExp("^\\.(" + et + ")"),
            TAG: new RegExp("^(" + et + "|[*])"),
            ATTR: new RegExp("^" + nt),
            PSEUDO: new RegExp("^" + rt),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + tt + "*(even|odd|(([+-]|)(\\d*)n|)" + tt + "*(?:([+-]|)" + tt + "*(\\d+)|))" + tt + "*\\)|)","i"),
            bool: new RegExp("^(?:" + J + ")$","i"),
            needsContext: new RegExp("^" + tt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + tt + "*((?:-\\d)?\\d*)" + tt + "*\\)|)(?=[^-]|$)","i")
        }, ht = /^(?:input|select|textarea|button)$/i, pt = /^h\d$/i, dt = /^[^{]+\{\s*\[native \w/, vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, gt = /[+~]/, mt = /'|\\/g, yt = new RegExp("\\\\([\\da-f]{1,6}" + tt + "?|(" + tt + ")|.)","ig"), _t = function(t, e, n) {
            var r = "0x" + e - 65536;
            return r !== r || n ? e : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        }, bt = function() {
            A()
        };
        try {
            Y.apply(Q = K.call($.childNodes), $.childNodes),
            Q[$.childNodes.length].nodeType
        } catch (t) {
            Y = {
                apply: Q.length ? function(t, e) {
                    G.apply(t, K.call(e))
                }
                : function(t, e) {
                    for (var n = t.length, r = 0; t[n++] = e[r++]; )
                        ;
                    t.length = n - 1
                }
            }
        }
        _ = e.support = {},
        x = e.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return !!e && "HTML" !== e.nodeName
        }
        ,
        A = e.setDocument = function(t) {
            var e, n, r = t ? t.ownerDocument || t : $;
            return r !== O && 9 === r.nodeType && r.documentElement ? (O = r,
            R = O.documentElement,
            P = !x(O),
            (n = O.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", bt, !1) : n.attachEvent && n.attachEvent("onunload", bt)),
            _.attributes = i(function(t) {
                return t.className = "i",
                !t.getAttribute("className")
            }),
            _.getElementsByTagName = i(function(t) {
                return t.appendChild(O.createComment("")),
                !t.getElementsByTagName("*").length
            }),
            _.getElementsByClassName = dt.test(O.getElementsByClassName),
            _.getById = i(function(t) {
                return R.appendChild(t).id = L,
                !O.getElementsByName || !O.getElementsByName(L).length
            }),
            _.getById ? (b.find.ID = function(t, e) {
                if (void 0 !== e.getElementById && P) {
                    var n = e.getElementById(t);
                    return n ? [n] : []
                }
            }
            ,
            b.filter.ID = function(t) {
                var e = t.replace(yt, _t);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }
            ) : (delete b.find.ID,
            b.filter.ID = function(t) {
                var e = t.replace(yt, _t);
                return function(t) {
                    var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                    return n && n.value === e
                }
            }
            ),
            b.find.TAG = _.getElementsByTagName ? function(t, e) {
                return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : _.qsa ? e.querySelectorAll(t) : void 0
            }
            : function(t, e) {
                var n, r = [], i = 0, o = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; n = o[i++]; )
                        1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }
            ,
            b.find.CLASS = _.getElementsByClassName && function(t, e) {
                return void 0 !== e.getElementsByClassName && P ? e.getElementsByClassName(t) : void 0
            }
            ,
            D = [],
            F = [],
            (_.qsa = dt.test(O.querySelectorAll)) && (i(function(t) {
                R.appendChild(t).innerHTML = "<a id='" + L + "'></a><select id='" + L + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                t.querySelectorAll("[msallowcapture^='']").length && F.push("[*^$]=" + tt + "*(?:''|\"\")"),
                t.querySelectorAll("[selected]").length || F.push("\\[" + tt + "*(?:value|" + J + ")"),
                t.querySelectorAll("[id~=" + L + "-]").length || F.push("~="),
                t.querySelectorAll(":checked").length || F.push(":checked"),
                t.querySelectorAll("a#" + L + "+*").length || F.push(".#.+[+~]")
            }),
            i(function(t) {
                var e = O.createElement("input");
                e.setAttribute("type", "hidden"),
                t.appendChild(e).setAttribute("name", "D"),
                t.querySelectorAll("[name=d]").length && F.push("name" + tt + "*[*^$|!~]?="),
                t.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"),
                t.querySelectorAll("*,:x"),
                F.push(",.*:")
            })),
            (_.matchesSelector = dt.test(I = R.matches || R.webkitMatchesSelector || R.mozMatchesSelector || R.oMatchesSelector || R.msMatchesSelector)) && i(function(t) {
                _.disconnectedMatch = I.call(t, "div"),
                I.call(t, "[s!='']:x"),
                D.push("!=", rt)
            }),
            F = F.length && new RegExp(F.join("|")),
            D = D.length && new RegExp(D.join("|")),
            e = dt.test(R.compareDocumentPosition),
            N = e || dt.test(R.contains) ? function(t, e) {
                var n = 9 === t.nodeType ? t.documentElement : t
                  , r = e && e.parentNode;
                return t === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(r)))
            }
            : function(t, e) {
                if (e)
                    for (; e = e.parentNode; )
                        if (e === t)
                            return !0;
                return !1
            }
            ,
            W = e ? function(t, e) {
                if (t === e)
                    return j = !0,
                    0;
                var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return n || (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1,
                1 & n || !_.sortDetached && e.compareDocumentPosition(t) === n ? t === O || t.ownerDocument === $ && N($, t) ? -1 : e === O || e.ownerDocument === $ && N($, e) ? 1 : S ? Z(S, t) - Z(S, e) : 0 : 4 & n ? -1 : 1)
            }
            : function(t, e) {
                if (t === e)
                    return j = !0,
                    0;
                var n, r = 0, i = t.parentNode, o = e.parentNode, a = [t], u = [e];
                if (!i || !o)
                    return t === O ? -1 : e === O ? 1 : i ? -1 : o ? 1 : S ? Z(S, t) - Z(S, e) : 0;
                if (i === o)
                    return s(t, e);
                for (n = t; n = n.parentNode; )
                    a.unshift(n);
                for (n = e; n = n.parentNode; )
                    u.unshift(n);
                for (; a[r] === u[r]; )
                    r++;
                return r ? s(a[r], u[r]) : a[r] === $ ? -1 : u[r] === $ ? 1 : 0
            }
            ,
            O) : O
        }
        ,
        e.matches = function(t, n) {
            return e(t, null, null, n)
        }
        ,
        e.matchesSelector = function(t, n) {
            if ((t.ownerDocument || t) !== O && A(t),
            n = n.replace(ut, "='$1']"),
            _.matchesSelector && P && !M[n + " "] && (!D || !D.test(n)) && (!F || !F.test(n)))
                try {
                    var r = I.call(t, n);
                    if (r || _.disconnectedMatch || t.document && 11 !== t.document.nodeType)
                        return r
                } catch (t) {}
            return e(n, O, null, [t]).length > 0
        }
        ,
        e.contains = function(t, e) {
            return (t.ownerDocument || t) !== O && A(t),
            N(t, e)
        }
        ,
        e.attr = function(t, e) {
            (t.ownerDocument || t) !== O && A(t);
            var n = b.attrHandle[e.toLowerCase()]
              , r = n && V.call(b.attrHandle, e.toLowerCase()) ? n(t, e, !P) : void 0;
            return void 0 !== r ? r : _.attributes || !P ? t.getAttribute(e) : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
        }
        ,
        e.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }
        ,
        e.uniqueSort = function(t) {
            var e, n = [], r = 0, i = 0;
            if (j = !_.detectDuplicates,
            S = !_.sortStable && t.slice(0),
            t.sort(W),
            j) {
                for (; e = t[i++]; )
                    e === t[i] && (r = n.push(i));
                for (; r--; )
                    t.splice(n[r], 1)
            }
            return S = null,
            t
        }
        ,
        w = e.getText = function(t) {
            var e, n = "", r = 0, i = t.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof t.textContent)
                        return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling)
                        n += w(t)
                } else if (3 === i || 4 === i)
                    return t.nodeValue
            } else
                for (; e = t[r++]; )
                    n += w(e);
            return n
        }
        ,
        b = e.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: ft,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(t) {
                    return t[1] = t[1].replace(yt, _t),
                    t[3] = (t[3] || t[4] || t[5] || "").replace(yt, _t),
                    "~=" === t[2] && (t[3] = " " + t[3] + " "),
                    t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(),
                    "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]),
                    t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])),
                    t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]),
                    t
                },
                PSEUDO: function(t) {
                    var e, n = !t[6] && t[2];
                    return ft.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && ct.test(n) && (e = T(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e),
                    t[2] = n.slice(0, e)),
                    t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(yt, _t).toLowerCase();
                    return "*" === t ? function() {
                        return !0
                    }
                    : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(t) {
                    var e = B[t + " "];
                    return e || (e = new RegExp("(^|" + tt + ")" + t + "(" + tt + "|$)")) && B(t, function(t) {
                        return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, n, r) {
                    return function(i) {
                        var o = e.attr(i, t);
                        return null == o ? "!=" === n : !n || (o += "",
                        "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(it, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
                    }
                },
                CHILD: function(t, e, n, r, i) {
                    var o = "nth" !== t.slice(0, 3)
                      , s = "last" !== t.slice(-4)
                      , a = "of-type" === e;
                    return 1 === r && 0 === i ? function(t) {
                        return !!t.parentNode
                    }
                    : function(e, n, u) {
                        var c, l, f, h, p, d, v = o !== s ? "nextSibling" : "previousSibling", g = e.parentNode, m = a && e.nodeName.toLowerCase(), y = !u && !a, _ = !1;
                        if (g) {
                            if (o) {
                                for (; v; ) {
                                    for (h = e; h = h[v]; )
                                        if (a ? h.nodeName.toLowerCase() === m : 1 === h.nodeType)
                                            return !1;
                                    d = v = "only" === t && !d && "nextSibling"
                                }
                                return !0
                            }
                            if (d = [s ? g.firstChild : g.lastChild],
                            s && y) {
                                for (h = g,
                                f = h[L] || (h[L] = {}),
                                l = f[h.uniqueID] || (f[h.uniqueID] = {}),
                                c = l[t] || [],
                                p = c[0] === z && c[1],
                                _ = p && c[2],
                                h = p && g.childNodes[p]; h = ++p && h && h[v] || (_ = p = 0) || d.pop(); )
                                    if (1 === h.nodeType && ++_ && h === e) {
                                        l[t] = [z, p, _];
                                        break
                                    }
                            } else if (y && (h = e,
                            f = h[L] || (h[L] = {}),
                            l = f[h.uniqueID] || (f[h.uniqueID] = {}),
                            c = l[t] || [],
                            p = c[0] === z && c[1],
                            _ = p),
                            !1 === _)
                                for (; (h = ++p && h && h[v] || (_ = p = 0) || d.pop()) && ((a ? h.nodeName.toLowerCase() !== m : 1 !== h.nodeType) || !++_ || (y && (f = h[L] || (h[L] = {}),
                                l = f[h.uniqueID] || (f[h.uniqueID] = {}),
                                l[t] = [z, _]),
                                h !== e)); )
                                    ;
                            return (_ -= i) === r || _ % r == 0 && _ / r >= 0
                        }
                    }
                },
                PSEUDO: function(t, n) {
                    var i, o = b.pseudos[t] || b.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return o[L] ? o(n) : o.length > 1 ? (i = [t, t, "", n],
                    b.setFilters.hasOwnProperty(t.toLowerCase()) ? r(function(t, e) {
                        for (var r, i = o(t, n), s = i.length; s--; )
                            r = Z(t, i[s]),
                            t[r] = !(e[r] = i[s])
                    }) : function(t) {
                        return o(t, 0, i)
                    }
                    ) : o
                }
            },
            pseudos: {
                not: r(function(t) {
                    var e = []
                      , n = []
                      , i = C(t.replace(ot, "$1"));
                    return i[L] ? r(function(t, e, n, r) {
                        for (var o, s = i(t, null, r, []), a = t.length; a--; )
                            (o = s[a]) && (t[a] = !(e[a] = o))
                    }) : function(t, r, o) {
                        return e[0] = t,
                        i(e, null, o, n),
                        e[0] = null,
                        !n.pop()
                    }
                }),
                has: r(function(t) {
                    return function(n) {
                        return e(t, n).length > 0
                    }
                }),
                contains: r(function(t) {
                    return t = t.replace(yt, _t),
                    function(e) {
                        return (e.textContent || e.innerText || w(e)).indexOf(t) > -1
                    }
                }),
                lang: r(function(t) {
                    return lt.test(t || "") || e.error("unsupported lang: " + t),
                    t = t.replace(yt, _t).toLowerCase(),
                    function(e) {
                        var n;
                        do {
                            if (n = P ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }),
                target: function(e) {
                    var n = t.location && t.location.hash;
                    return n && n.slice(1) === e.id
                },
                root: function(t) {
                    return t === R
                },
                focus: function(t) {
                    return t === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: function(t) {
                    return !1 === t.disabled
                },
                disabled: function(t) {
                    return !0 === t.disabled
                },
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex,
                    !0 === t.selected
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(t) {
                    return !b.pseudos.empty(t)
                },
                header: function(t) {
                    return pt.test(t.nodeName)
                },
                input: function(t) {
                    return ht.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: a(function() {
                    return [0]
                }),
                last: a(function(t, e) {
                    return [e - 1]
                }),
                eq: a(function(t, e, n) {
                    return [0 > n ? n + e : n]
                }),
                even: a(function(t, e) {
                    for (var n = 0; e > n; n += 2)
                        t.push(n);
                    return t
                }),
                odd: a(function(t, e) {
                    for (var n = 1; e > n; n += 2)
                        t.push(n);
                    return t
                }),
                lt: a(function(t, e, n) {
                    for (var r = 0 > n ? n + e : n; --r >= 0; )
                        t.push(r);
                    return t
                }),
                gt: a(function(t, e, n) {
                    for (var r = 0 > n ? n + e : n; ++r < e; )
                        t.push(r);
                    return t
                })
            }
        },
        b.pseudos.nth = b.pseudos.eq;
        for (y in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            b.pseudos[y] = function(t) {
                return function(e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t
                }
            }(y);
        for (y in {
            submit: !0,
            reset: !0
        })
            b.pseudos[y] = function(t) {
                return function(e) {
                    var n = e.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && e.type === t
                }
            }(y);
        return c.prototype = b.filters = b.pseudos,
        b.setFilters = new c,
        T = e.tokenize = function(t, n) {
            var r, i, o, s, a, u, c, l = q[t + " "];
            if (l)
                return n ? 0 : l.slice(0);
            for (a = t,
            u = [],
            c = b.preFilter; a; ) {
                r && !(i = st.exec(a)) || (i && (a = a.slice(i[0].length) || a),
                u.push(o = [])),
                r = !1,
                (i = at.exec(a)) && (r = i.shift(),
                o.push({
                    value: r,
                    type: i[0].replace(ot, " ")
                }),
                a = a.slice(r.length));
                for (s in b.filter)
                    !(i = ft[s].exec(a)) || c[s] && !(i = c[s](i)) || (r = i.shift(),
                    o.push({
                        value: r,
                        type: s,
                        matches: i
                    }),
                    a = a.slice(r.length));
                if (!r)
                    break
            }
            return n ? a.length : a ? e.error(t) : q(t, u).slice(0)
        }
        ,
        C = e.compile = function(t, e) {
            var n, r = [], i = [], o = M[t + " "];
            if (!o) {
                for (e || (e = T(t)),
                n = e.length; n--; )
                    o = g(e[n]),
                    o[L] ? r.push(o) : i.push(o);
                o = M(t, m(i, r)),
                o.selector = t
            }
            return o
        }
        ,
        E = e.select = function(t, e, n, r) {
            var i, o, s, a, c, f = "function" == typeof t && t, h = !r && T(t = f.selector || t);
            if (n = n || [],
            1 === h.length) {
                if (o = h[0] = h[0].slice(0),
                o.length > 2 && "ID" === (s = o[0]).type && _.getById && 9 === e.nodeType && P && b.relative[o[1].type]) {
                    if (!(e = (b.find.ID(s.matches[0].replace(yt, _t), e) || [])[0]))
                        return n;
                    f && (e = e.parentNode),
                    t = t.slice(o.shift().value.length)
                }
                for (i = ft.needsContext.test(t) ? 0 : o.length; i-- && (s = o[i],
                !b.relative[a = s.type]); )
                    if ((c = b.find[a]) && (r = c(s.matches[0].replace(yt, _t), gt.test(o[0].type) && u(e.parentNode) || e))) {
                        if (o.splice(i, 1),
                        !(t = r.length && l(o)))
                            return Y.apply(n, r),
                            n;
                        break
                    }
            }
            return (f || C(t, h))(r, e, !P, n, !e || gt.test(t) && u(e.parentNode) || e),
            n
        }
        ,
        _.sortStable = L.split("").sort(W).join("") === L,
        _.detectDuplicates = !!j,
        A(),
        _.sortDetached = i(function(t) {
            return 1 & t.compareDocumentPosition(O.createElement("div"))
        }),
        i(function(t) {
            return t.innerHTML = "<a href='#'></a>",
            "#" === t.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(t, e, n) {
            return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }),
        _.attributes && i(function(t) {
            return t.innerHTML = "<input/>",
            t.firstChild.setAttribute("value", ""),
            "" === t.firstChild.getAttribute("value")
        }) || o("value", function(t, e, n) {
            return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }),
        i(function(t) {
            return null == t.getAttribute("disabled")
        }) || o(J, function(t, e, n) {
            var r;
            return n ? void 0 : !0 === t[e] ? e.toLowerCase() : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
        }),
        e
    }(t);
    ot.find = lt,
    ot.expr = lt.selectors,
    ot.expr[":"] = ot.expr.pseudos,
    ot.uniqueSort = ot.unique = lt.uniqueSort,
    ot.text = lt.getText,
    ot.isXMLDoc = lt.isXML,
    ot.contains = lt.contains;
    var ft = function(t, e, n) {
        for (var r = [], i = void 0 !== n; (t = t[e]) && 9 !== t.nodeType; )
            if (1 === t.nodeType) {
                if (i && ot(t).is(n))
                    break;
                r.push(t)
            }
        return r
    }
      , ht = function(t, e) {
        for (var n = []; t; t = t.nextSibling)
            1 === t.nodeType && t !== e && n.push(t);
        return n
    }
      , pt = ot.expr.match.needsContext
      , dt = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/
      , vt = /^.[^:#\[\.,]*$/;
    ot.filter = function(t, e, n) {
        var r = e[0];
        return n && (t = ":not(" + t + ")"),
        1 === e.length && 1 === r.nodeType ? ot.find.matchesSelector(r, t) ? [r] : [] : ot.find.matches(t, ot.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }
    ,
    ot.fn.extend({
        find: function(t) {
            var e, n = this.length, r = [], i = this;
            if ("string" != typeof t)
                return this.pushStack(ot(t).filter(function() {
                    for (e = 0; n > e; e++)
                        if (ot.contains(i[e], this))
                            return !0
                }));
            for (e = 0; n > e; e++)
                ot.find(t, i[e], r);
            return r = this.pushStack(n > 1 ? ot.unique(r) : r),
            r.selector = this.selector ? this.selector + " " + t : t,
            r
        },
        filter: function(t) {
            return this.pushStack(r(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(r(this, t || [], !0))
        },
        is: function(t) {
            return !!r(this, "string" == typeof t && pt.test(t) ? ot(t) : t || [], !1).length
        }
    });
    var gt, mt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (ot.fn.init = function(t, e, n) {
        var r, i;
        if (!t)
            return this;
        if (n = n || gt,
        "string" == typeof t) {
            if (!(r = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : mt.exec(t)) || !r[1] && e)
                return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
            if (r[1]) {
                if (e = e instanceof ot ? e[0] : e,
                ot.merge(this, ot.parseHTML(r[1], e && e.nodeType ? e.ownerDocument || e : G, !0)),
                dt.test(r[1]) && ot.isPlainObject(e))
                    for (r in e)
                        ot.isFunction(this[r]) ? this[r](e[r]) : this.attr(r, e[r]);
                return this
            }
            return i = G.getElementById(r[2]),
            i && i.parentNode && (this.length = 1,
            this[0] = i),
            this.context = G,
            this.selector = t,
            this
        }
        return t.nodeType ? (this.context = this[0] = t,
        this.length = 1,
        this) : ot.isFunction(t) ? void 0 !== n.ready ? n.ready(t) : t(ot) : (void 0 !== t.selector && (this.selector = t.selector,
        this.context = t.context),
        ot.makeArray(t, this))
    }
    ).prototype = ot.fn,
    gt = ot(G);
    var yt = /^(?:parents|prev(?:Until|All))/
      , _t = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    ot.fn.extend({
        has: function(t) {
            var e = ot(t, this)
              , n = e.length;
            return this.filter(function() {
                for (var t = 0; n > t; t++)
                    if (ot.contains(this, e[t]))
                        return !0
            })
        },
        closest: function(t, e) {
            for (var n, r = 0, i = this.length, o = [], s = pt.test(t) || "string" != typeof t ? ot(t, e || this.context) : 0; i > r; r++)
                for (n = this[r]; n && n !== e; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && ot.find.matchesSelector(n, t))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? ot.uniqueSort(o) : o)
        },
        index: function(t) {
            return t ? "string" == typeof t ? J.call(ot(t), this[0]) : J.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(ot.uniqueSort(ot.merge(this.get(), ot(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }),
    ot.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return ft(t, "parentNode")
        },
        parentsUntil: function(t, e, n) {
            return ft(t, "parentNode", n)
        },
        next: function(t) {
            return i(t, "nextSibling")
        },
        prev: function(t) {
            return i(t, "previousSibling")
        },
        nextAll: function(t) {
            return ft(t, "nextSibling")
        },
        prevAll: function(t) {
            return ft(t, "previousSibling")
        },
        nextUntil: function(t, e, n) {
            return ft(t, "nextSibling", n)
        },
        prevUntil: function(t, e, n) {
            return ft(t, "previousSibling", n)
        },
        siblings: function(t) {
            return ht((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return ht(t.firstChild)
        },
        contents: function(t) {
            return t.contentDocument || ot.merge([], t.childNodes)
        }
    }, function(t, e) {
        ot.fn[t] = function(n, r) {
            var i = ot.map(this, e, n);
            return "Until" !== t.slice(-5) && (r = n),
            r && "string" == typeof r && (i = ot.filter(r, i)),
            this.length > 1 && (_t[t] || ot.uniqueSort(i),
            yt.test(t) && i.reverse()),
            this.pushStack(i)
        }
    });
    var bt = /\S+/g;
    ot.Callbacks = function(t) {
        t = "string" == typeof t ? o(t) : ot.extend({}, t);
        var e, n, r, i, s = [], a = [], u = -1, c = function() {
            for (i = t.once,
            r = e = !0; a.length; u = -1)
                for (n = a.shift(); ++u < s.length; )
                    !1 === s[u].apply(n[0], n[1]) && t.stopOnFalse && (u = s.length,
                    n = !1);
            t.memory || (n = !1),
            e = !1,
            i && (s = n ? [] : "")
        }, l = {
            add: function() {
                return s && (n && !e && (u = s.length - 1,
                a.push(n)),
                function e(n) {
                    ot.each(n, function(n, r) {
                        ot.isFunction(r) ? t.unique && l.has(r) || s.push(r) : r && r.length && "string" !== ot.type(r) && e(r)
                    })
                }(arguments),
                n && !e && c()),
                this
            },
            remove: function() {
                return ot.each(arguments, function(t, e) {
                    for (var n; (n = ot.inArray(e, s, n)) > -1; )
                        s.splice(n, 1),
                        u >= n && u--
                }),
                this
            },
            has: function(t) {
                return t ? ot.inArray(t, s) > -1 : s.length > 0
            },
            empty: function() {
                return s && (s = []),
                this
            },
            disable: function() {
                return i = a = [],
                s = n = "",
                this
            },
            disabled: function() {
                return !s
            },
            lock: function() {
                return i = a = [],
                n || (s = n = ""),
                this
            },
            locked: function() {
                return !!i
            },
            fireWith: function(t, n) {
                return i || (n = n || [],
                n = [t, n.slice ? n.slice() : n],
                a.push(n),
                e || c()),
                this
            },
            fire: function() {
                return l.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!r
            }
        };
        return l
    }
    ,
    ot.extend({
        Deferred: function(t) {
            var e = [["resolve", "done", ot.Callbacks("once memory"), "resolved"], ["reject", "fail", ot.Callbacks("once memory"), "rejected"], ["notify", "progress", ot.Callbacks("memory")]]
              , n = "pending"
              , r = {
                state: function() {
                    return n
                },
                always: function() {
                    return i.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var t = arguments;
                    return ot.Deferred(function(n) {
                        ot.each(e, function(e, o) {
                            var s = ot.isFunction(t[e]) && t[e];
                            i[o[1]](function() {
                                var t = s && s.apply(this, arguments);
                                t && ot.isFunction(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === r ? n.promise() : this, s ? [t] : arguments)
                            })
                        }),
                        t = null
                    }).promise()
                },
                promise: function(t) {
                    return null != t ? ot.extend(t, r) : r
                }
            }
              , i = {};
            return r.pipe = r.then,
            ot.each(e, function(t, o) {
                var s = o[2]
                  , a = o[3];
                r[o[1]] = s.add,
                a && s.add(function() {
                    n = a
                }, e[1 ^ t][2].disable, e[2][2].lock),
                i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments),
                    this
                }
                ,
                i[o[0] + "With"] = s.fireWith
            }),
            r.promise(i),
            t && t.call(i, i),
            i
        },
        when: function(t) {
            var e, n, r, i = 0, o = Y.call(arguments), s = o.length, a = 1 !== s || t && ot.isFunction(t.promise) ? s : 0, u = 1 === a ? t : ot.Deferred(), c = function(t, n, r) {
                return function(i) {
                    n[t] = this,
                    r[t] = arguments.length > 1 ? Y.call(arguments) : i,
                    r === e ? u.notifyWith(n, r) : --a || u.resolveWith(n, r)
                }
            };
            if (s > 1)
                for (e = new Array(s),
                n = new Array(s),
                r = new Array(s); s > i; i++)
                    o[i] && ot.isFunction(o[i].promise) ? o[i].promise().progress(c(i, n, e)).done(c(i, r, o)).fail(u.reject) : --a;
            return a || u.resolveWith(r, o),
            u.promise()
        }
    });
    var wt;
    ot.fn.ready = function(t) {
        return ot.ready.promise().done(t),
        this
    }
    ,
    ot.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? ot.readyWait++ : ot.ready(!0)
        },
        ready: function(t) {
            (!0 === t ? --ot.readyWait : ot.isReady) || (ot.isReady = !0,
            !0 !== t && --ot.readyWait > 0 || (wt.resolveWith(G, [ot]),
            ot.fn.triggerHandler && (ot(G).triggerHandler("ready"),
            ot(G).off("ready"))))
        }
    }),
    ot.ready.promise = function(e) {
        return wt || (wt = ot.Deferred(),
        "complete" === G.readyState || "loading" !== G.readyState && !G.documentElement.doScroll ? t.setTimeout(ot.ready) : (G.addEventListener("DOMContentLoaded", s),
        t.addEventListener("load", s))),
        wt.promise(e)
    }
    ,
    ot.ready.promise();
    var xt = function(t, e, n, r, i, o, s) {
        var a = 0
          , u = t.length
          , c = null == n;
        if ("object" === ot.type(n)) {
            i = !0;
            for (a in n)
                xt(t, e, a, n[a], !0, o, s)
        } else if (void 0 !== r && (i = !0,
        ot.isFunction(r) || (s = !0),
        c && (s ? (e.call(t, r),
        e = null) : (c = e,
        e = function(t, e, n) {
            return c.call(ot(t), n)
        }
        )),
        e))
            for (; u > a; a++)
                e(t[a], n, s ? r : r.call(t[a], a, e(t[a], n)));
        return i ? t : c ? e.call(t) : u ? e(t[0], n) : o
    }
      , Tt = function(t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
    };
    a.uid = 1,
    a.prototype = {
        register: function(t, e) {
            var n = e || {};
            return t.nodeType ? t[this.expando] = n : Object.defineProperty(t, this.expando, {
                value: n,
                writable: !0,
                configurable: !0
            }),
            t[this.expando]
        },
        cache: function(t) {
            if (!Tt(t))
                return {};
            var e = t[this.expando];
            return e || (e = {},
            Tt(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                value: e,
                configurable: !0
            }))),
            e
        },
        set: function(t, e, n) {
            var r, i = this.cache(t);
            if ("string" == typeof e)
                i[e] = n;
            else
                for (r in e)
                    i[r] = e[r];
            return i
        },
        get: function(t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][e]
        },
        access: function(t, e, n) {
            var r;
            return void 0 === e || e && "string" == typeof e && void 0 === n ? (r = this.get(t, e),
            void 0 !== r ? r : this.get(t, ot.camelCase(e))) : (this.set(t, e, n),
            void 0 !== n ? n : e)
        },
        remove: function(t, e) {
            var n, r, i, o = t[this.expando];
            if (void 0 !== o) {
                if (void 0 === e)
                    this.register(t);
                else {
                    ot.isArray(e) ? r = e.concat(e.map(ot.camelCase)) : (i = ot.camelCase(e),
                    e in o ? r = [e, i] : (r = i,
                    r = r in o ? [r] : r.match(bt) || [])),
                    n = r.length;
                    for (; n--; )
                        delete o[r[n]]
                }
                (void 0 === e || ot.isEmptyObject(o)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
            }
        },
        hasData: function(t) {
            var e = t[this.expando];
            return void 0 !== e && !ot.isEmptyObject(e)
        }
    };
    var Ct = new a
      , Et = new a
      , kt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , St = /[A-Z]/g;
    ot.extend({
        hasData: function(t) {
            return Et.hasData(t) || Ct.hasData(t)
        },
        data: function(t, e, n) {
            return Et.access(t, e, n)
        },
        removeData: function(t, e) {
            Et.remove(t, e)
        },
        _data: function(t, e, n) {
            return Ct.access(t, e, n)
        },
        _removeData: function(t, e) {
            Ct.remove(t, e)
        }
    }),
    ot.fn.extend({
        data: function(t, e) {
            var n, r, i, o = this[0], s = o && o.attributes;
            if (void 0 === t) {
                if (this.length && (i = Et.get(o),
                1 === o.nodeType && !Ct.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--; )
                        s[n] && (r = s[n].name,
                        0 === r.indexOf("data-") && (r = ot.camelCase(r.slice(5)),
                        u(o, r, i[r])));
                    Ct.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof t ? this.each(function() {
                Et.set(this, t)
            }) : xt(this, function(e) {
                var n, r;
                if (o && void 0 === e) {
                    if (void 0 !== (n = Et.get(o, t) || Et.get(o, t.replace(St, "-$&").toLowerCase())))
                        return n;
                    if (r = ot.camelCase(t),
                    void 0 !== (n = Et.get(o, r)))
                        return n;
                    if (void 0 !== (n = u(o, r, void 0)))
                        return n
                } else
                    r = ot.camelCase(t),
                    this.each(function() {
                        var n = Et.get(this, r);
                        Et.set(this, r, e),
                        t.indexOf("-") > -1 && void 0 !== n && Et.set(this, t, e)
                    })
            }, null, e, arguments.length > 1, null, !0)
        },
        removeData: function(t) {
            return this.each(function() {
                Et.remove(this, t)
            })
        }
    }),
    ot.extend({
        queue: function(t, e, n) {
            var r;
            return t ? (e = (e || "fx") + "queue",
            r = Ct.get(t, e),
            n && (!r || ot.isArray(n) ? r = Ct.access(t, e, ot.makeArray(n)) : r.push(n)),
            r || []) : void 0
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var n = ot.queue(t, e)
              , r = n.length
              , i = n.shift()
              , o = ot._queueHooks(t, e)
              , s = function() {
                ot.dequeue(t, e)
            };
            "inprogress" === i && (i = n.shift(),
            r--),
            i && ("fx" === e && n.unshift("inprogress"),
            delete o.stop,
            i.call(t, s, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(t, e) {
            var n = e + "queueHooks";
            return Ct.get(t, n) || Ct.access(t, n, {
                empty: ot.Callbacks("once memory").add(function() {
                    Ct.remove(t, [e + "queue", n])
                })
            })
        }
    }),
    ot.fn.extend({
        queue: function(t, e) {
            var n = 2;
            return "string" != typeof t && (e = t,
            t = "fx",
            n--),
            arguments.length < n ? ot.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                var n = ot.queue(this, t, e);
                ot._queueHooks(this, t),
                "fx" === t && "inprogress" !== n[0] && ot.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                ot.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var n, r = 1, i = ot.Deferred(), o = this, s = this.length, a = function() {
                --r || i.resolveWith(o, [o])
            };
            for ("string" != typeof t && (e = t,
            t = void 0),
            t = t || "fx"; s--; )
                (n = Ct.get(o[s], t + "queueHooks")) && n.empty && (r++,
                n.empty.add(a));
            return a(),
            i.promise(e)
        }
    });
    var jt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , At = new RegExp("^(?:([+-])=|)(" + jt + ")([a-z%]*)$","i")
      , Ot = ["Top", "Right", "Bottom", "Left"]
      , Rt = function(t, e) {
        return t = e || t,
        "none" === ot.css(t, "display") || !ot.contains(t.ownerDocument, t)
    }
      , Pt = /^(?:checkbox|radio)$/i
      , Ft = /<([\w:-]+)/
      , Dt = /^$|\/(?:java|ecma)script/i
      , It = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    It.optgroup = It.option,
    It.tbody = It.tfoot = It.colgroup = It.caption = It.thead,
    It.th = It.td;
    var Nt = /<|&#?\w+;/;
    !function() {
        var t = G.createDocumentFragment()
          , e = t.appendChild(G.createElement("div"))
          , n = G.createElement("input");
        n.setAttribute("type", "radio"),
        n.setAttribute("checked", "checked"),
        n.setAttribute("name", "t"),
        e.appendChild(n),
        rt.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked,
        e.innerHTML = "<textarea>x</textarea>",
        rt.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var Lt = /^key/
      , $t = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , zt = /^([^.]*)(?:\.(.+)|)/;
    ot.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, s, a, u, c, l, f, h, p, d, v, g = Ct.get(t);
            if (g)
                for (n.handler && (o = n,
                n = o.handler,
                i = o.selector),
                n.guid || (n.guid = ot.guid++),
                (u = g.events) || (u = g.events = {}),
                (s = g.handle) || (s = g.handle = function(e) {
                    return void 0 !== ot && ot.event.triggered !== e.type ? ot.event.dispatch.apply(t, arguments) : void 0
                }
                ),
                e = (e || "").match(bt) || [""],
                c = e.length; c--; )
                    a = zt.exec(e[c]) || [],
                    p = v = a[1],
                    d = (a[2] || "").split(".").sort(),
                    p && (f = ot.event.special[p] || {},
                    p = (i ? f.delegateType : f.bindType) || p,
                    f = ot.event.special[p] || {},
                    l = ot.extend({
                        type: p,
                        origType: v,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && ot.expr.match.needsContext.test(i),
                        namespace: d.join(".")
                    }, o),
                    (h = u[p]) || (h = u[p] = [],
                    h.delegateCount = 0,
                    f.setup && !1 !== f.setup.call(t, r, d, s) || t.addEventListener && t.addEventListener(p, s)),
                    f.add && (f.add.call(t, l),
                    l.handler.guid || (l.handler.guid = n.guid)),
                    i ? h.splice(h.delegateCount++, 0, l) : h.push(l),
                    ot.event.global[p] = !0)
        },
        remove: function(t, e, n, r, i) {
            var o, s, a, u, c, l, f, h, p, d, v, g = Ct.hasData(t) && Ct.get(t);
            if (g && (u = g.events)) {
                for (e = (e || "").match(bt) || [""],
                c = e.length; c--; )
                    if (a = zt.exec(e[c]) || [],
                    p = v = a[1],
                    d = (a[2] || "").split(".").sort(),
                    p) {
                        for (f = ot.event.special[p] || {},
                        p = (r ? f.delegateType : f.bindType) || p,
                        h = u[p] || [],
                        a = a[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        s = o = h.length; o--; )
                            l = h[o],
                            !i && v !== l.origType || n && n.guid !== l.guid || a && !a.test(l.namespace) || r && r !== l.selector && ("**" !== r || !l.selector) || (h.splice(o, 1),
                            l.selector && h.delegateCount--,
                            f.remove && f.remove.call(t, l));
                        s && !h.length && (f.teardown && !1 !== f.teardown.call(t, d, g.handle) || ot.removeEvent(t, p, g.handle),
                        delete u[p])
                    } else
                        for (p in u)
                            ot.event.remove(t, p + e[c], n, r, !0);
                ot.isEmptyObject(u) && Ct.remove(t, "handle events")
            }
        },
        dispatch: function(t) {
            t = ot.event.fix(t);
            var e, n, r, i, o, s = [], a = Y.call(arguments), u = (Ct.get(this, "events") || {})[t.type] || [], c = ot.event.special[t.type] || {};
            if (a[0] = t,
            t.delegateTarget = this,
            !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
                for (s = ot.event.handlers.call(this, t, u),
                e = 0; (i = s[e++]) && !t.isPropagationStopped(); )
                    for (t.currentTarget = i.elem,
                    n = 0; (o = i.handlers[n++]) && !t.isImmediatePropagationStopped(); )
                        t.rnamespace && !t.rnamespace.test(o.namespace) || (t.handleObj = o,
                        t.data = o.data,
                        void 0 !== (r = ((ot.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a)) && !1 === (t.result = r) && (t.preventDefault(),
                        t.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, t),
                t.result
            }
        },
        handlers: function(t, e) {
            var n, r, i, o, s = [], a = e.delegateCount, u = t.target;
            if (a && u.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && (!0 !== u.disabled || "click" !== t.type)) {
                        for (r = [],
                        n = 0; a > n; n++)
                            o = e[n],
                            i = o.selector + " ",
                            void 0 === r[i] && (r[i] = o.needsContext ? ot(i, this).index(u) > -1 : ot.find(i, this, null, [u]).length),
                            r[i] && r.push(o);
                        r.length && s.push({
                            elem: u,
                            handlers: r
                        })
                    }
            return a < e.length && s.push({
                elem: this,
                handlers: e.slice(a)
            }),
            s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode),
                t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var n, r, i, o = e.button;
                return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || G,
                r = n.documentElement,
                i = n.body,
                t.pageX = e.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0),
                t.pageY = e.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)),
                t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
                t
            }
        },
        fix: function(t) {
            if (t[ot.expando])
                return t;
            var e, n, r, i = t.type, o = t, s = this.fixHooks[i];
            for (s || (this.fixHooks[i] = s = $t.test(i) ? this.mouseHooks : Lt.test(i) ? this.keyHooks : {}),
            r = s.props ? this.props.concat(s.props) : this.props,
            t = new ot.Event(o),
            e = r.length; e--; )
                n = r[e],
                t[n] = o[n];
            return t.target || (t.target = G),
            3 === t.target.nodeType && (t.target = t.target.parentNode),
            s.filter ? s.filter(t, o) : t
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== v() && this.focus ? (this.focus(),
                    !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === v() && this.blur ? (this.blur(),
                    !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && ot.nodeName(this, "input") ? (this.click(),
                    !1) : void 0
                },
                _default: function(t) {
                    return ot.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        }
    },
    ot.removeEvent = function(t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n)
    }
    ,
    ot.Event = function(t, e) {
        return this instanceof ot.Event ? (t && t.type ? (this.originalEvent = t,
        this.type = t.type,
        this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? p : d) : this.type = t,
        e && ot.extend(this, e),
        this.timeStamp = t && t.timeStamp || ot.now(),
        void (this[ot.expando] = !0)) : new ot.Event(t,e)
    }
    ,
    ot.Event.prototype = {
        constructor: ot.Event,
        isDefaultPrevented: d,
        isPropagationStopped: d,
        isImmediatePropagationStopped: d,
        isSimulated: !1,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = p,
            t && !this.isSimulated && t.preventDefault()
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = p,
            t && !this.isSimulated && t.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = p,
            t && !this.isSimulated && t.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    ot.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, e) {
        ot.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var n, r = this, i = t.relatedTarget, o = t.handleObj;
                return i && (i === r || ot.contains(r, i)) || (t.type = o.origType,
                n = o.handler.apply(this, arguments),
                t.type = e),
                n
            }
        }
    }),
    ot.fn.extend({
        on: function(t, e, n, r) {
            return g(this, t, e, n, r)
        },
        one: function(t, e, n, r) {
            return g(this, t, e, n, r, 1)
        },
        off: function(t, e, n) {
            var r, i;
            if (t && t.preventDefault && t.handleObj)
                return r = t.handleObj,
                ot(t.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this;
            if ("object" == typeof t) {
                for (i in t)
                    this.off(i, e, t[i]);
                return this
            }
            return !1 !== e && "function" != typeof e || (n = e,
            e = void 0),
            !1 === n && (n = d),
            this.each(function() {
                ot.event.remove(this, t, n, e)
            })
        }
    });
    var Ht = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi
      , Bt = /<script|<style|<link/i
      , qt = /checked\s*(?:[^=]|=\s*.checked.)/i
      , Mt = /^true\/(.*)/
      , Wt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    ot.extend({
        htmlPrefilter: function(t) {
            return t.replace(Ht, "<$1></$2>")
        },
        clone: function(t, e, n) {
            var r, i, o, s, a = t.cloneNode(!0), u = ot.contains(t.ownerDocument, t);
            if (!(rt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ot.isXMLDoc(t)))
                for (s = l(a),
                o = l(t),
                r = 0,
                i = o.length; i > r; r++)
                    w(o[r], s[r]);
            if (e)
                if (n)
                    for (o = o || l(t),
                    s = s || l(a),
                    r = 0,
                    i = o.length; i > r; r++)
                        b(o[r], s[r]);
                else
                    b(t, a);
            return s = l(a, "script"),
            s.length > 0 && f(s, !u && l(t, "script")),
            a
        },
        cleanData: function(t) {
            for (var e, n, r, i = ot.event.special, o = 0; void 0 !== (n = t[o]); o++)
                if (Tt(n)) {
                    if (e = n[Ct.expando]) {
                        if (e.events)
                            for (r in e.events)
                                i[r] ? ot.event.remove(n, r) : ot.removeEvent(n, r, e.handle);
                        n[Ct.expando] = void 0
                    }
                    n[Et.expando] && (n[Et.expando] = void 0)
                }
        }
    }),
    ot.fn.extend({
        domManip: x,
        detach: function(t) {
            return T(this, t, !0)
        },
        remove: function(t) {
            return T(this, t)
        },
        text: function(t) {
            return xt(this, function(t) {
                return void 0 === t ? ot.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                })
            }, null, t, arguments.length)
        },
        append: function() {
            return x(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    m(this, t).appendChild(t)
                }
            })
        },
        prepend: function() {
            return x(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = m(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return x(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return x(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++)
                1 === t.nodeType && (ot.cleanData(l(t, !1)),
                t.textContent = "");
            return this
        },
        clone: function(t, e) {
            return t = null != t && t,
            e = null == e ? t : e,
            this.map(function() {
                return ot.clone(this, t, e)
            })
        },
        html: function(t) {
            return xt(this, function(t) {
                var e = this[0] || {}
                  , n = 0
                  , r = this.length;
                if (void 0 === t && 1 === e.nodeType)
                    return e.innerHTML;
                if ("string" == typeof t && !Bt.test(t) && !It[(Ft.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = ot.htmlPrefilter(t);
                    try {
                        for (; r > n; n++)
                            e = this[n] || {},
                            1 === e.nodeType && (ot.cleanData(l(e, !1)),
                            e.innerHTML = t);
                        e = 0
                    } catch (t) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = [];
            return x(this, arguments, function(e) {
                var n = this.parentNode;
                ot.inArray(this, t) < 0 && (ot.cleanData(l(this)),
                n && n.replaceChild(e, this))
            }, t)
        }
    }),
    ot.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        ot.fn[t] = function(t) {
            for (var n, r = [], i = ot(t), o = i.length - 1, s = 0; o >= s; s++)
                n = s === o ? this : this.clone(!0),
                ot(i[s])[e](n),
                Z.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var Ut, Vt = {
        HTML: "block",
        BODY: "block"
    }, Qt = /^margin/, Xt = new RegExp("^(" + jt + ")(?!px)[a-z%]+$","i"), Gt = function(e) {
        var n = e.ownerDocument.defaultView;
        return n && n.opener || (n = t),
        n.getComputedStyle(e)
    }, Yt = function(t, e, n, r) {
        var i, o, s = {};
        for (o in e)
            s[o] = t.style[o],
            t.style[o] = e[o];
        i = n.apply(t, r || []);
        for (o in e)
            t.style[o] = s[o];
        return i
    }, Kt = G.documentElement;
    !function() {
        function e() {
            a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
            a.innerHTML = "",
            Kt.appendChild(s);
            var e = t.getComputedStyle(a);
            n = "1%" !== e.top,
            o = "2px" === e.marginLeft,
            r = "4px" === e.width,
            a.style.marginRight = "50%",
            i = "4px" === e.marginRight,
            Kt.removeChild(s)
        }
        var n, r, i, o, s = G.createElement("div"), a = G.createElement("div");
        a.style && (a.style.backgroundClip = "content-box",
        a.cloneNode(!0).style.backgroundClip = "",
        rt.clearCloneStyle = "content-box" === a.style.backgroundClip,
        s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
        s.appendChild(a),
        ot.extend(rt, {
            pixelPosition: function() {
                return e(),
                n
            },
            boxSizingReliable: function() {
                return null == r && e(),
                r
            },
            pixelMarginRight: function() {
                return null == r && e(),
                i
            },
            reliableMarginLeft: function() {
                return null == r && e(),
                o
            },
            reliableMarginRight: function() {
                var e, n = a.appendChild(G.createElement("div"));
                return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                n.style.marginRight = n.style.width = "0",
                a.style.width = "1px",
                Kt.appendChild(s),
                e = !parseFloat(t.getComputedStyle(n).marginRight),
                Kt.removeChild(s),
                a.removeChild(n),
                e
            }
        }))
    }();
    var Zt = /^(none|table(?!-c[ea]).+)/
      , Jt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , te = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , ee = ["Webkit", "O", "Moz", "ms"]
      , ne = G.createElement("div").style;
    ot.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var n = k(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(t, e, n, r) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var i, o, s, a = ot.camelCase(e), u = t.style;
                return e = ot.cssProps[a] || (ot.cssProps[a] = j(a) || a),
                s = ot.cssHooks[e] || ot.cssHooks[a],
                void 0 === n ? s && "get"in s && void 0 !== (i = s.get(t, !1, r)) ? i : u[e] : (o = typeof n,
                "string" === o && (i = At.exec(n)) && i[1] && (n = c(t, e, i),
                o = "number"),
                void (null != n && n === n && ("number" === o && (n += i && i[3] || (ot.cssNumber[a] ? "" : "px")),
                rt.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (u[e] = "inherit"),
                s && "set"in s && void 0 === (n = s.set(t, n, r)) || (u[e] = n))))
            }
        },
        css: function(t, e, n, r) {
            var i, o, s, a = ot.camelCase(e);
            return e = ot.cssProps[a] || (ot.cssProps[a] = j(a) || a),
            s = ot.cssHooks[e] || ot.cssHooks[a],
            s && "get"in s && (i = s.get(t, !0, n)),
            void 0 === i && (i = k(t, e, r)),
            "normal" === i && e in te && (i = te[e]),
            "" === n || n ? (o = parseFloat(i),
            !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }),
    ot.each(["height", "width"], function(t, e) {
        ot.cssHooks[e] = {
            get: function(t, n, r) {
                return n ? Zt.test(ot.css(t, "display")) && 0 === t.offsetWidth ? Yt(t, Jt, function() {
                    return R(t, e, r)
                }) : R(t, e, r) : void 0
            },
            set: function(t, n, r) {
                var i, o = r && Gt(t), s = r && O(t, e, r, "border-box" === ot.css(t, "boxSizing", !1, o), o);
                return s && (i = At.exec(n)) && "px" !== (i[3] || "px") && (t.style[e] = n,
                n = ot.css(t, e)),
                A(t, n, s)
            }
        }
    }),
    ot.cssHooks.marginLeft = S(rt.reliableMarginLeft, function(t, e) {
        return e ? (parseFloat(k(t, "marginLeft")) || t.getBoundingClientRect().left - Yt(t, {
            marginLeft: 0
        }, function() {
            return t.getBoundingClientRect().left
        })) + "px" : void 0
    }),
    ot.cssHooks.marginRight = S(rt.reliableMarginRight, function(t, e) {
        return e ? Yt(t, {
            display: "inline-block"
        }, k, [t, "marginRight"]) : void 0
    }),
    ot.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        ot.cssHooks[t + e] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++)
                    i[t + Ot[r] + e] = o[r] || o[r - 2] || o[0];
                return i
            }
        },
        Qt.test(t) || (ot.cssHooks[t + e].set = A)
    }),
    ot.fn.extend({
        css: function(t, e) {
            return xt(this, function(t, e, n) {
                var r, i, o = {}, s = 0;
                if (ot.isArray(e)) {
                    for (r = Gt(t),
                    i = e.length; i > s; s++)
                        o[e[s]] = ot.css(t, e[s], !1, r);
                    return o
                }
                return void 0 !== n ? ot.style(t, e, n) : ot.css(t, e)
            }, t, e, arguments.length > 1)
        },
        show: function() {
            return P(this, !0)
        },
        hide: function() {
            return P(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                Rt(this) ? ot(this).show() : ot(this).hide()
            })
        }
    }),
    ot.Tween = F,
    F.prototype = {
        constructor: F,
        init: function(t, e, n, r, i, o) {
            this.elem = t,
            this.prop = n,
            this.easing = i || ot.easing._default,
            this.options = e,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (ot.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var t = F.propHooks[this.prop];
            return t && t.get ? t.get(this) : F.propHooks._default.get(this)
        },
        run: function(t) {
            var e, n = F.propHooks[this.prop];
            return this.options.duration ? this.pos = e = ot.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t,
            this.now = (this.end - this.start) * e + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : F.propHooks._default.set(this),
            this
        }
    },
    F.prototype.init.prototype = F.prototype,
    F.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = ot.css(t.elem, t.prop, ""),
                e && "auto" !== e ? e : 0)
            },
            set: function(t) {
                ot.fx.step[t.prop] ? ot.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[ot.cssProps[t.prop]] && !ot.cssHooks[t.prop] ? t.elem[t.prop] = t.now : ot.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    },
    F.propHooks.scrollTop = F.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    },
    ot.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    },
    ot.fx = F.prototype.init,
    ot.fx.step = {};
    var re, ie, oe = /^(?:toggle|show|hide)$/, se = /queueHooks$/;
    ot.Animation = ot.extend(z, {
        tweeners: {
            "*": [function(t, e) {
                var n = this.createTween(t, e);
                return c(n.elem, t, At.exec(e), n),
                n
            }
            ]
        },
        tweener: function(t, e) {
            ot.isFunction(t) ? (e = t,
            t = ["*"]) : t = t.match(bt);
            for (var n, r = 0, i = t.length; i > r; r++)
                n = t[r],
                z.tweeners[n] = z.tweeners[n] || [],
                z.tweeners[n].unshift(e)
        },
        prefilters: [L],
        prefilter: function(t, e) {
            e ? z.prefilters.unshift(t) : z.prefilters.push(t)
        }
    }),
    ot.speed = function(t, e, n) {
        var r = t && "object" == typeof t ? ot.extend({}, t) : {
            complete: n || !n && e || ot.isFunction(t) && t,
            duration: t,
            easing: n && e || e && !ot.isFunction(e) && e
        };
        return r.duration = ot.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in ot.fx.speeds ? ot.fx.speeds[r.duration] : ot.fx.speeds._default,
        null != r.queue && !0 !== r.queue || (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            ot.isFunction(r.old) && r.old.call(this),
            r.queue && ot.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    ot.fn.extend({
        fadeTo: function(t, e, n, r) {
            return this.filter(Rt).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, n, r)
        },
        animate: function(t, e, n, r) {
            var i = ot.isEmptyObject(t)
              , o = ot.speed(e, n, r)
              , s = function() {
                var e = z(this, ot.extend({}, t), o);
                (i || Ct.get(this, "finish")) && e.stop(!0)
            };
            return s.finish = s,
            i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function(t, e, n) {
            var r = function(t) {
                var e = t.stop;
                delete t.stop,
                e(n)
            };
            return "string" != typeof t && (n = e,
            e = t,
            t = void 0),
            e && !1 !== t && this.queue(t || "fx", []),
            this.each(function() {
                var e = !0
                  , i = null != t && t + "queueHooks"
                  , o = ot.timers
                  , s = Ct.get(this);
                if (i)
                    s[i] && s[i].stop && r(s[i]);
                else
                    for (i in s)
                        s[i] && s[i].stop && se.test(i) && r(s[i]);
                for (i = o.length; i--; )
                    o[i].elem !== this || null != t && o[i].queue !== t || (o[i].anim.stop(n),
                    e = !1,
                    o.splice(i, 1));
                !e && n || ot.dequeue(this, t)
            })
        },
        finish: function(t) {
            return !1 !== t && (t = t || "fx"),
            this.each(function() {
                var e, n = Ct.get(this), r = n[t + "queue"], i = n[t + "queueHooks"], o = ot.timers, s = r ? r.length : 0;
                for (n.finish = !0,
                ot.queue(this, t, []),
                i && i.stop && i.stop.call(this, !0),
                e = o.length; e--; )
                    o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0),
                    o.splice(e, 1));
                for (e = 0; s > e; e++)
                    r[e] && r[e].finish && r[e].finish.call(this);
                delete n.finish
            })
        }
    }),
    ot.each(["toggle", "show", "hide"], function(t, e) {
        var n = ot.fn[e];
        ot.fn[e] = function(t, r, i) {
            return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(I(e, !0), t, r, i)
        }
    }),
    ot.each({
        slideDown: I("show"),
        slideUp: I("hide"),
        slideToggle: I("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(t, e) {
        ot.fn[t] = function(t, n, r) {
            return this.animate(e, t, n, r)
        }
    }),
    ot.timers = [],
    ot.fx.tick = function() {
        var t, e = 0, n = ot.timers;
        for (re = ot.now(); e < n.length; e++)
            (t = n[e])() || n[e] !== t || n.splice(e--, 1);
        n.length || ot.fx.stop(),
        re = void 0
    }
    ,
    ot.fx.timer = function(t) {
        ot.timers.push(t),
        t() ? ot.fx.start() : ot.timers.pop()
    }
    ,
    ot.fx.interval = 13,
    ot.fx.start = function() {
        ie || (ie = t.setInterval(ot.fx.tick, ot.fx.interval))
    }
    ,
    ot.fx.stop = function() {
        t.clearInterval(ie),
        ie = null
    }
    ,
    ot.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    ot.fn.delay = function(e, n) {
        return e = ot.fx ? ot.fx.speeds[e] || e : e,
        n = n || "fx",
        this.queue(n, function(n, r) {
            var i = t.setTimeout(n, e);
            r.stop = function() {
                t.clearTimeout(i)
            }
        })
    }
    ,
    function() {
        var t = G.createElement("input")
          , e = G.createElement("select")
          , n = e.appendChild(G.createElement("option"));
        t.type = "checkbox",
        rt.checkOn = "" !== t.value,
        rt.optSelected = n.selected,
        e.disabled = !0,
        rt.optDisabled = !n.disabled,
        t = G.createElement("input"),
        t.value = "t",
        t.type = "radio",
        rt.radioValue = "t" === t.value
    }();
    var ae, ue = ot.expr.attrHandle;
    ot.fn.extend({
        attr: function(t, e) {
            return xt(this, ot.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                ot.removeAttr(this, t)
            })
        }
    }),
    ot.extend({
        attr: function(t, e, n) {
            var r, i, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return void 0 === t.getAttribute ? ot.prop(t, e, n) : (1 === o && ot.isXMLDoc(t) || (e = e.toLowerCase(),
                i = ot.attrHooks[e] || (ot.expr.match.bool.test(e) ? ae : void 0)),
                void 0 !== n ? null === n ? void ot.removeAttr(t, e) : i && "set"in i && void 0 !== (r = i.set(t, n, e)) ? r : (t.setAttribute(e, n + ""),
                n) : i && "get"in i && null !== (r = i.get(t, e)) ? r : (r = ot.find.attr(t, e),
                null == r ? void 0 : r))
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!rt.radioValue && "radio" === e && ot.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e),
                        n && (t.value = n),
                        e
                    }
                }
            }
        },
        removeAttr: function(t, e) {
            var n, r, i = 0, o = e && e.match(bt);
            if (o && 1 === t.nodeType)
                for (; n = o[i++]; )
                    r = ot.propFix[n] || n,
                    ot.expr.match.bool.test(n) && (t[r] = !1),
                    t.removeAttribute(n)
        }
    }),
    ae = {
        set: function(t, e, n) {
            return !1 === e ? ot.removeAttr(t, n) : t.setAttribute(n, n),
            n
        }
    },
    ot.each(ot.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var n = ue[e] || ot.find.attr;
        ue[e] = function(t, e, r) {
            var i, o;
            return r || (o = ue[e],
            ue[e] = i,
            i = null != n(t, e, r) ? e.toLowerCase() : null,
            ue[e] = o),
            i
        }
    });
    var ce = /^(?:input|select|textarea|button)$/i
      , le = /^(?:a|area)$/i;
    ot.fn.extend({
        prop: function(t, e) {
            return xt(this, ot.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return this.each(function() {
                delete this[ot.propFix[t] || t]
            })
        }
    }),
    ot.extend({
        prop: function(t, e, n) {
            var r, i, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && ot.isXMLDoc(t) || (e = ot.propFix[e] || e,
                i = ot.propHooks[e]),
                void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(t, n, e)) ? r : t[e] = n : i && "get"in i && null !== (r = i.get(t, e)) ? r : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = ot.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : ce.test(t.nodeName) || le.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    rt.optSelected || (ot.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex,
            null
        },
        set: function(t) {
            var e = t.parentNode;
            e && (e.selectedIndex,
            e.parentNode && e.parentNode.selectedIndex)
        }
    }),
    ot.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        ot.propFix[this.toLowerCase()] = this
    });
    var fe = /[\t\r\n\f]/g;
    ot.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, s, a, u = 0;
            if (ot.isFunction(t))
                return this.each(function(e) {
                    ot(this).addClass(t.call(this, e, H(this)))
                });
            if ("string" == typeof t && t)
                for (e = t.match(bt) || []; n = this[u++]; )
                    if (i = H(n),
                    r = 1 === n.nodeType && (" " + i + " ").replace(fe, " ")) {
                        for (s = 0; o = e[s++]; )
                            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        a = ot.trim(r),
                        i !== a && n.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, s, a, u = 0;
            if (ot.isFunction(t))
                return this.each(function(e) {
                    ot(this).removeClass(t.call(this, e, H(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ("string" == typeof t && t)
                for (e = t.match(bt) || []; n = this[u++]; )
                    if (i = H(n),
                    r = 1 === n.nodeType && (" " + i + " ").replace(fe, " ")) {
                        for (s = 0; o = e[s++]; )
                            for (; r.indexOf(" " + o + " ") > -1; )
                                r = r.replace(" " + o + " ", " ");
                        a = ot.trim(r),
                        i !== a && n.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(t, e) {
            var n = typeof t;
            return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : ot.isFunction(t) ? this.each(function(n) {
                ot(this).toggleClass(t.call(this, n, H(this), e), e)
            }) : this.each(function() {
                var e, r, i, o;
                if ("string" === n)
                    for (r = 0,
                    i = ot(this),
                    o = t.match(bt) || []; e = o[r++]; )
                        i.hasClass(e) ? i.removeClass(e) : i.addClass(e);
                else
                    void 0 !== t && "boolean" !== n || (e = H(this),
                    e && Ct.set(this, "__className__", e),
                    this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : Ct.get(this, "__className__") || ""))
            })
        },
        hasClass: function(t) {
            var e, n, r = 0;
            for (e = " " + t + " "; n = this[r++]; )
                if (1 === n.nodeType && (" " + H(n) + " ").replace(fe, " ").indexOf(e) > -1)
                    return !0;
            return !1
        }
    });
    var he = /\r/g
      , pe = /[\x20\t\r\n\f]+/g;
    ot.fn.extend({
        val: function(t) {
            var e, n, r, i = this[0];
            return arguments.length ? (r = ot.isFunction(t),
            this.each(function(n) {
                var i;
                1 === this.nodeType && (i = r ? t.call(this, n, ot(this).val()) : t,
                null == i ? i = "" : "number" == typeof i ? i += "" : ot.isArray(i) && (i = ot.map(i, function(t) {
                    return null == t ? "" : t + ""
                })),
                (e = ot.valHooks[this.type] || ot.valHooks[this.nodeName.toLowerCase()]) && "set"in e && void 0 !== e.set(this, i, "value") || (this.value = i))
            })) : i ? (e = ot.valHooks[i.type] || ot.valHooks[i.nodeName.toLowerCase()],
            e && "get"in e && void 0 !== (n = e.get(i, "value")) ? n : (n = i.value,
            "string" == typeof n ? n.replace(he, "") : null == n ? "" : n)) : void 0
        }
    }),
    ot.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = ot.find.attr(t, "value");
                    return null != e ? e : ot.trim(ot.text(t)).replace(pe, " ")
                }
            },
            select: {
                get: function(t) {
                    for (var e, n, r = t.options, i = t.selectedIndex, o = "select-one" === t.type || 0 > i, s = o ? null : [], a = o ? i + 1 : r.length, u = 0 > i ? a : o ? i : 0; a > u; u++)
                        if (n = r[u],
                        (n.selected || u === i) && (rt.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ot.nodeName(n.parentNode, "optgroup"))) {
                            if (e = ot(n).val(),
                            o)
                                return e;
                            s.push(e)
                        }
                    return s
                },
                set: function(t, e) {
                    for (var n, r, i = t.options, o = ot.makeArray(e), s = i.length; s--; )
                        r = i[s],
                        (r.selected = ot.inArray(ot.valHooks.option.get(r), o) > -1) && (n = !0);
                    return n || (t.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    ot.each(["radio", "checkbox"], function() {
        ot.valHooks[this] = {
            set: function(t, e) {
                return ot.isArray(e) ? t.checked = ot.inArray(ot(t).val(), e) > -1 : void 0
            }
        },
        rt.checkOn || (ot.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        }
        )
    });
    var de = /^(?:focusinfocus|focusoutblur)$/;
    ot.extend(ot.event, {
        trigger: function(e, n, r, i) {
            var o, s, a, u, c, l, f, h = [r || G], p = nt.call(e, "type") ? e.type : e, d = nt.call(e, "namespace") ? e.namespace.split(".") : [];
            if (s = a = r = r || G,
            3 !== r.nodeType && 8 !== r.nodeType && !de.test(p + ot.event.triggered) && (p.indexOf(".") > -1 && (d = p.split("."),
            p = d.shift(),
            d.sort()),
            c = p.indexOf(":") < 0 && "on" + p,
            e = e[ot.expando] ? e : new ot.Event(p,"object" == typeof e && e),
            e.isTrigger = i ? 2 : 3,
            e.namespace = d.join("."),
            e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            e.result = void 0,
            e.target || (e.target = r),
            n = null == n ? [e] : ot.makeArray(n, [e]),
            f = ot.event.special[p] || {},
            i || !f.trigger || !1 !== f.trigger.apply(r, n))) {
                if (!i && !f.noBubble && !ot.isWindow(r)) {
                    for (u = f.delegateType || p,
                    de.test(u + p) || (s = s.parentNode); s; s = s.parentNode)
                        h.push(s),
                        a = s;
                    a === (r.ownerDocument || G) && h.push(a.defaultView || a.parentWindow || t)
                }
                for (o = 0; (s = h[o++]) && !e.isPropagationStopped(); )
                    e.type = o > 1 ? u : f.bindType || p,
                    l = (Ct.get(s, "events") || {})[e.type] && Ct.get(s, "handle"),
                    l && l.apply(s, n),
                    (l = c && s[c]) && l.apply && Tt(s) && (e.result = l.apply(s, n),
                    !1 === e.result && e.preventDefault());
                return e.type = p,
                i || e.isDefaultPrevented() || f._default && !1 !== f._default.apply(h.pop(), n) || !Tt(r) || c && ot.isFunction(r[p]) && !ot.isWindow(r) && (a = r[c],
                a && (r[c] = null),
                ot.event.triggered = p,
                r[p](),
                ot.event.triggered = void 0,
                a && (r[c] = a)),
                e.result
            }
        },
        simulate: function(t, e, n) {
            var r = ot.extend(new ot.Event, n, {
                type: t,
                isSimulated: !0
            });
            ot.event.trigger(r, null, e)
        }
    }),
    ot.fn.extend({
        trigger: function(t, e) {
            return this.each(function() {
                ot.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var n = this[0];
            return n ? ot.event.trigger(t, e, n, !0) : void 0
        }
    }),
    ot.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        ot.fn[e] = function(t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }),
    ot.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    }),
    rt.focusin = "onfocusin"in t,
    rt.focusin || ot.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var n = function(t) {
            ot.event.simulate(e, t.target, ot.event.fix(t))
        };
        ot.event.special[e] = {
            setup: function() {
                var r = this.ownerDocument || this
                  , i = Ct.access(r, e);
                i || r.addEventListener(t, n, !0),
                Ct.access(r, e, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this
                  , i = Ct.access(r, e) - 1;
                i ? Ct.access(r, e, i) : (r.removeEventListener(t, n, !0),
                Ct.remove(r, e))
            }
        }
    });
    var ve = t.location
      , ge = ot.now()
      , me = /\?/;
    ot.parseJSON = function(t) {
        return JSON.parse(t + "")
    }
    ,
    ot.parseXML = function(e) {
        var n;
        if (!e || "string" != typeof e)
            return null;
        try {
            n = (new t.DOMParser).parseFromString(e, "text/xml")
        } catch (t) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || ot.error("Invalid XML: " + e),
        n
    }
    ;
    var ye = /#.*$/
      , _e = /([?&])_=[^&]*/
      , be = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , we = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
      , xe = /^(?:GET|HEAD)$/
      , Te = /^\/\//
      , Ce = {}
      , Ee = {}
      , ke = "*/".concat("*")
      , Se = G.createElement("a");
    Se.href = ve.href,
    ot.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ve.href,
            type: "GET",
            isLocal: we.test(ve.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": ke,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": ot.parseJSON,
                "text xml": ot.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? M(M(t, ot.ajaxSettings), e) : M(ot.ajaxSettings, t)
        },
        ajaxPrefilter: B(Ce),
        ajaxTransport: B(Ee),
        ajax: function(e, n) {
            function r(e, n, r, a) {
                var c, f, y, _, w, T = n;
                2 !== b && (b = 2,
                u && t.clearTimeout(u),
                i = void 0,
                s = a || "",
                x.readyState = e > 0 ? 4 : 0,
                c = e >= 200 && 300 > e || 304 === e,
                r && (_ = W(h, x, r)),
                _ = U(h, _, x, c),
                c ? (h.ifModified && (w = x.getResponseHeader("Last-Modified"),
                w && (ot.lastModified[o] = w),
                (w = x.getResponseHeader("etag")) && (ot.etag[o] = w)),
                204 === e || "HEAD" === h.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = _.state,
                f = _.data,
                y = _.error,
                c = !y)) : (y = T,
                !e && T || (T = "error",
                0 > e && (e = 0))),
                x.status = e,
                x.statusText = (n || T) + "",
                c ? v.resolveWith(p, [f, T, x]) : v.rejectWith(p, [x, T, y]),
                x.statusCode(m),
                m = void 0,
                l && d.trigger(c ? "ajaxSuccess" : "ajaxError", [x, h, c ? f : y]),
                g.fireWith(p, [x, T]),
                l && (d.trigger("ajaxComplete", [x, h]),
                --ot.active || ot.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (n = e,
            e = void 0),
            n = n || {};
            var i, o, s, a, u, c, l, f, h = ot.ajaxSetup({}, n), p = h.context || h, d = h.context && (p.nodeType || p.jquery) ? ot(p) : ot.event, v = ot.Deferred(), g = ot.Callbacks("once memory"), m = h.statusCode || {}, y = {}, _ = {}, b = 0, w = "canceled", x = {
                readyState: 0,
                getResponseHeader: function(t) {
                    var e;
                    if (2 === b) {
                        if (!a)
                            for (a = {}; e = be.exec(s); )
                                a[e[1].toLowerCase()] = e[2];
                        e = a[t.toLowerCase()]
                    }
                    return null == e ? null : e
                },
                getAllResponseHeaders: function() {
                    return 2 === b ? s : null
                },
                setRequestHeader: function(t, e) {
                    var n = t.toLowerCase();
                    return b || (t = _[n] = _[n] || t,
                    y[t] = e),
                    this
                },
                overrideMimeType: function(t) {
                    return b || (h.mimeType = t),
                    this
                },
                statusCode: function(t) {
                    var e;
                    if (t)
                        if (2 > b)
                            for (e in t)
                                m[e] = [m[e], t[e]];
                        else
                            x.always(t[x.status]);
                    return this
                },
                abort: function(t) {
                    var e = t || w;
                    return i && i.abort(e),
                    r(0, e),
                    this
                }
            };
            if (v.promise(x).complete = g.add,
            x.success = x.done,
            x.error = x.fail,
            h.url = ((e || h.url || ve.href) + "").replace(ye, "").replace(Te, ve.protocol + "//"),
            h.type = n.method || n.type || h.method || h.type,
            h.dataTypes = ot.trim(h.dataType || "*").toLowerCase().match(bt) || [""],
            null == h.crossDomain) {
                c = G.createElement("a");
                try {
                    c.href = h.url,
                    c.href = c.href,
                    h.crossDomain = Se.protocol + "//" + Se.host != c.protocol + "//" + c.host
                } catch (t) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = ot.param(h.data, h.traditional)),
            q(Ce, h, n, x),
            2 === b)
                return x;
            l = ot.event && h.global,
            l && 0 == ot.active++ && ot.event.trigger("ajaxStart"),
            h.type = h.type.toUpperCase(),
            h.hasContent = !xe.test(h.type),
            o = h.url,
            h.hasContent || (h.data && (o = h.url += (me.test(o) ? "&" : "?") + h.data,
            delete h.data),
            !1 === h.cache && (h.url = _e.test(o) ? o.replace(_e, "$1_=" + ge++) : o + (me.test(o) ? "&" : "?") + "_=" + ge++)),
            h.ifModified && (ot.lastModified[o] && x.setRequestHeader("If-Modified-Since", ot.lastModified[o]),
            ot.etag[o] && x.setRequestHeader("If-None-Match", ot.etag[o])),
            (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && x.setRequestHeader("Content-Type", h.contentType),
            x.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + ke + "; q=0.01" : "") : h.accepts["*"]);
            for (f in h.headers)
                x.setRequestHeader(f, h.headers[f]);
            if (h.beforeSend && (!1 === h.beforeSend.call(p, x, h) || 2 === b))
                return x.abort();
            w = "abort";
            for (f in {
                success: 1,
                error: 1,
                complete: 1
            })
                x[f](h[f]);
            if (i = q(Ee, h, n, x)) {
                if (x.readyState = 1,
                l && d.trigger("ajaxSend", [x, h]),
                2 === b)
                    return x;
                h.async && h.timeout > 0 && (u = t.setTimeout(function() {
                    x.abort("timeout")
                }, h.timeout));
                try {
                    b = 1,
                    i.send(y, r)
                } catch (t) {
                    if (!(2 > b))
                        throw t;
                    r(-1, t)
                }
            } else
                r(-1, "No Transport");
            return x
        },
        getJSON: function(t, e, n) {
            return ot.get(t, e, n, "json")
        },
        getScript: function(t, e) {
            return ot.get(t, void 0, e, "script")
        }
    }),
    ot.each(["get", "post"], function(t, e) {
        ot[e] = function(t, n, r, i) {
            return ot.isFunction(n) && (i = i || r,
            r = n,
            n = void 0),
            ot.ajax(ot.extend({
                url: t,
                type: e,
                dataType: i,
                data: n,
                success: r
            }, ot.isPlainObject(t) && t))
        }
    }),
    ot._evalUrl = function(t) {
        return ot.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    }
    ,
    ot.fn.extend({
        wrapAll: function(t) {
            var e;
            return ot.isFunction(t) ? this.each(function(e) {
                ot(this).wrapAll(t.call(this, e))
            }) : (this[0] && (e = ot(t, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && e.insertBefore(this[0]),
            e.map(function() {
                for (var t = this; t.firstElementChild; )
                    t = t.firstElementChild;
                return t
            }).append(this)),
            this)
        },
        wrapInner: function(t) {
            return ot.isFunction(t) ? this.each(function(e) {
                ot(this).wrapInner(t.call(this, e))
            }) : this.each(function() {
                var e = ot(this)
                  , n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = ot.isFunction(t);
            return this.each(function(n) {
                ot(this).wrapAll(e ? t.call(this, n) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                ot.nodeName(this, "body") || ot(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    ot.expr.filters.hidden = function(t) {
        return !ot.expr.filters.visible(t)
    }
    ,
    ot.expr.filters.visible = function(t) {
        return t.offsetWidth > 0 || t.offsetHeight > 0 || t.getClientRects().length > 0
    }
    ;
    var je = /%20/g
      , Ae = /\[\]$/
      , Oe = /\r?\n/g
      , Re = /^(?:submit|button|image|reset|file)$/i
      , Pe = /^(?:input|select|textarea|keygen)/i;
    ot.param = function(t, e) {
        var n, r = [], i = function(t, e) {
            e = ot.isFunction(e) ? e() : null == e ? "" : e,
            r[r.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
        };
        if (void 0 === e && (e = ot.ajaxSettings && ot.ajaxSettings.traditional),
        ot.isArray(t) || t.jquery && !ot.isPlainObject(t))
            ot.each(t, function() {
                i(this.name, this.value)
            });
        else
            for (n in t)
                V(n, t[n], e, i);
        return r.join("&").replace(je, "+")
    }
    ,
    ot.fn.extend({
        serialize: function() {
            return ot.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = ot.prop(this, "elements");
                return t ? ot.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !ot(this).is(":disabled") && Pe.test(this.nodeName) && !Re.test(t) && (this.checked || !Pt.test(t))
            }).map(function(t, e) {
                var n = ot(this).val();
                return null == n ? null : ot.isArray(n) ? ot.map(n, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(Oe, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(Oe, "\r\n")
                }
            }).get()
        }
    }),
    ot.ajaxSettings.xhr = function() {
        try {
            return new t.XMLHttpRequest
        } catch (t) {}
    }
    ;
    var Fe = {
        0: 200,
        1223: 204
    }
      , De = ot.ajaxSettings.xhr();
    rt.cors = !!De && "withCredentials"in De,
    rt.ajax = De = !!De,
    ot.ajaxTransport(function(e) {
        var n, r;
        return rt.cors || De && !e.crossDomain ? {
            send: function(i, o) {
                var s, a = e.xhr();
                if (a.open(e.type, e.url, e.async, e.username, e.password),
                e.xhrFields)
                    for (s in e.xhrFields)
                        a[s] = e.xhrFields[s];
                e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType),
                e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                for (s in i)
                    a.setRequestHeader(s, i[s]);
                n = function(t) {
                    return function() {
                        n && (n = r = a.onload = a.onerror = a.onabort = a.onreadystatechange = null,
                        "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Fe[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                            text: a.responseText
                        }, a.getAllResponseHeaders()))
                    }
                }
                ,
                a.onload = n(),
                r = a.onerror = n("error"),
                void 0 !== a.onabort ? a.onabort = r : a.onreadystatechange = function() {
                    4 === a.readyState && t.setTimeout(function() {
                        n && r()
                    })
                }
                ,
                n = n("abort");
                try {
                    a.send(e.hasContent && e.data || null)
                } catch (t) {
                    if (n)
                        throw t
                }
            },
            abort: function() {
                n && n()
            }
        } : void 0
    }),
    ot.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(t) {
                return ot.globalEval(t),
                t
            }
        }
    }),
    ot.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1),
        t.crossDomain && (t.type = "GET")
    }),
    ot.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var e, n;
            return {
                send: function(r, i) {
                    e = ot("<script>").prop({
                        charset: t.scriptCharset,
                        src: t.url
                    }).on("load error", n = function(t) {
                        e.remove(),
                        n = null,
                        t && i("error" === t.type ? 404 : 200, t.type)
                    }
                    ),
                    G.head.appendChild(e[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var Ie = []
      , Ne = /(=)\?(?=&|$)|\?\?/;
    ot.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = Ie.pop() || ot.expando + "_" + ge++;
            return this[t] = !0,
            t
        }
    }),
    ot.ajaxPrefilter("json jsonp", function(e, n, r) {
        var i, o, s, a = !1 !== e.jsonp && (Ne.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ne.test(e.data) && "data");
        return a || "jsonp" === e.dataTypes[0] ? (i = e.jsonpCallback = ot.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
        a ? e[a] = e[a].replace(Ne, "$1" + i) : !1 !== e.jsonp && (e.url += (me.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
        e.converters["script json"] = function() {
            return s || ot.error(i + " was not called"),
            s[0]
        }
        ,
        e.dataTypes[0] = "json",
        o = t[i],
        t[i] = function() {
            s = arguments
        }
        ,
        r.always(function() {
            void 0 === o ? ot(t).removeProp(i) : t[i] = o,
            e[i] && (e.jsonpCallback = n.jsonpCallback,
            Ie.push(i)),
            s && ot.isFunction(o) && o(s[0]),
            s = o = void 0
        }),
        "script") : void 0
    }),
    ot.parseHTML = function(t, e, n) {
        if (!t || "string" != typeof t)
            return null;
        "boolean" == typeof e && (n = e,
        e = !1),
        e = e || G;
        var r = dt.exec(t)
          , i = !n && [];
        return r ? [e.createElement(r[1])] : (r = h([t], e, i),
        i && i.length && ot(i).remove(),
        ot.merge([], r.childNodes))
    }
    ;
    var Le = ot.fn.load;
    ot.fn.load = function(t, e, n) {
        if ("string" != typeof t && Le)
            return Le.apply(this, arguments);
        var r, i, o, s = this, a = t.indexOf(" ");
        return a > -1 && (r = ot.trim(t.slice(a)),
        t = t.slice(0, a)),
        ot.isFunction(e) ? (n = e,
        e = void 0) : e && "object" == typeof e && (i = "POST"),
        s.length > 0 && ot.ajax({
            url: t,
            type: i || "GET",
            dataType: "html",
            data: e
        }).done(function(t) {
            o = arguments,
            s.html(r ? ot("<div>").append(ot.parseHTML(t)).find(r) : t)
        }).always(n && function(t, e) {
            s.each(function() {
                n.apply(this, o || [t.responseText, e, t])
            })
        }
        ),
        this
    }
    ,
    ot.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        ot.fn[e] = function(t) {
            return this.on(e, t)
        }
    }),
    ot.expr.filters.animated = function(t) {
        return ot.grep(ot.timers, function(e) {
            return t === e.elem
        }).length
    }
    ,
    ot.offset = {
        setOffset: function(t, e, n) {
            var r, i, o, s, a, u, c, l = ot.css(t, "position"), f = ot(t), h = {};
            "static" === l && (t.style.position = "relative"),
            a = f.offset(),
            o = ot.css(t, "top"),
            u = ot.css(t, "left"),
            c = ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1,
            c ? (r = f.position(),
            s = r.top,
            i = r.left) : (s = parseFloat(o) || 0,
            i = parseFloat(u) || 0),
            ot.isFunction(e) && (e = e.call(t, n, ot.extend({}, a))),
            null != e.top && (h.top = e.top - a.top + s),
            null != e.left && (h.left = e.left - a.left + i),
            "using"in e ? e.using.call(t, h) : f.css(h)
        }
    },
    ot.fn.extend({
        offset: function(t) {
            if (arguments.length)
                return void 0 === t ? this : this.each(function(e) {
                    ot.offset.setOffset(this, t, e)
                });
            var e, n, r = this[0], i = {
                top: 0,
                left: 0
            }, o = r && r.ownerDocument;
            return o ? (e = o.documentElement,
            ot.contains(e, r) ? (i = r.getBoundingClientRect(),
            n = Q(o),
            {
                top: i.top + n.pageYOffset - e.clientTop,
                left: i.left + n.pageXOffset - e.clientLeft
            }) : i) : void 0
        },
        position: function() {
            if (this[0]) {
                var t, e, n = this[0], r = {
                    top: 0,
                    left: 0
                };
                return "fixed" === ot.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(),
                e = this.offset(),
                ot.nodeName(t[0], "html") || (r = t.offset()),
                r.top += ot.css(t[0], "borderTopWidth", !0),
                r.left += ot.css(t[0], "borderLeftWidth", !0)),
                {
                    top: e.top - r.top - ot.css(n, "marginTop", !0),
                    left: e.left - r.left - ot.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent; t && "static" === ot.css(t, "position"); )
                    t = t.offsetParent;
                return t || Kt
            })
        }
    }),
    ot.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, e) {
        var n = "pageYOffset" === e;
        ot.fn[t] = function(r) {
            return xt(this, function(t, r, i) {
                var o = Q(t);
                return void 0 === i ? o ? o[e] : t[r] : void (o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : t[r] = i)
            }, t, r, arguments.length)
        }
    }),
    ot.each(["top", "left"], function(t, e) {
        ot.cssHooks[e] = S(rt.pixelPosition, function(t, n) {
            return n ? (n = k(t, e),
            Xt.test(n) ? ot(t).position()[e] + "px" : n) : void 0
        })
    }),
    ot.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        ot.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(n, r) {
            ot.fn[r] = function(r, i) {
                var o = arguments.length && (n || "boolean" != typeof r)
                  , s = n || (!0 === r || !0 === i ? "margin" : "border");
                return xt(this, function(e, n, r) {
                    var i;
                    return ot.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (i = e.documentElement,
                    Math.max(e.body["scroll" + t], i["scroll" + t], e.body["offset" + t], i["offset" + t], i["client" + t])) : void 0 === r ? ot.css(e, n, s) : ot.style(e, n, r, s)
                }, e, o ? r : void 0, o, null)
            }
        })
    }),
    ot.fn.extend({
        bind: function(t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, n, r) {
            return this.on(e, t, n, r)
        },
        undelegate: function(t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        },
        size: function() {
            return this.length
        }
    }),
    ot.fn.andSelf = ot.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return ot
    });
    var $e = t.jQuery
      , ze = t.$;
    return ot.noConflict = function(e) {
        return t.$ === ot && (t.$ = ze),
        e && t.jQuery === ot && (t.jQuery = $e),
        ot
    }
    ,
    e || (t.jQuery = t.$ = ot),
    ot
}),
"undefined" == typeof jQuery)
    throw new Error("Bootstrap's JavaScript requires jQuery");
!function(t) {
    "use strict";
    var e = jQuery.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || 3 < e[0])
        throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(),
function(t) {
    "use strict";
    t.fn.emulateTransitionEnd = function(e) {
        var n = !1
          , r = this;
        return t(this).one("bsTransitionEnd", function() {
            n = !0
        }),
        setTimeout(function() {
            n || t(r).trigger(t.support.transition.end)
        }, e),
        this
    }
    ,
    t(function() {
        t.support.transition = function() {
            var t = document.createElement("bootstrap")
              , e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
            for (var n in e)
                if (void 0 !== t.style[n])
                    return {
                        end: e[n]
                    };
            return !1
        }(),
        t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function(e) {
                if (t(e.target).is(this))
                    return e.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery),
function(t) {
    "use strict";
    var e = '[data-dismiss="alert"]'
      , n = function(n) {
        t(n).on("click", e, this.close)
    };
    n.VERSION = "3.4.1",
    n.TRANSITION_DURATION = 150,
    n.prototype.close = function(e) {
        function r() {
            s.detach().trigger("closed.bs.alert").remove()
        }
        var i = t(this)
          , o = i.attr("data-target");
        o || (o = (o = i.attr("href")) && o.replace(/.*(?=#[^\s]*$)/, "")),
        o = "#" === o ? [] : o;
        var s = t(document).find(o);
        e && e.preventDefault(),
        s.length || (s = i.closest(".alert")),
        s.trigger(e = t.Event("close.bs.alert")),
        e.isDefaultPrevented() || (s.removeClass("in"),
        t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", r).emulateTransitionEnd(n.TRANSITION_DURATION) : r())
    }
    ;
    var r = t.fn.alert;
    t.fn.alert = function(e) {
        return this.each(function() {
            var r = t(this)
              , i = r.data("bs.alert");
            i || r.data("bs.alert", i = new n(this)),
            "string" == typeof e && i[e].call(r)
        })
    }
    ,
    t.fn.alert.Constructor = n,
    t.fn.alert.noConflict = function() {
        return t.fn.alert = r,
        this
    }
    ,
    t(document).on("click.bs.alert.data-api", e, n.prototype.close)
}(jQuery),
function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var r = t(this)
              , i = r.data("bs.button")
              , o = "object" == typeof e && e;
            i || r.data("bs.button", i = new n(this,o)),
            "toggle" == e ? i.toggle() : e && i.setState(e)
        })
    }
    var n = function(e, r) {
        this.$element = t(e),
        this.options = t.extend({}, n.DEFAULTS, r),
        this.isLoading = !1
    };
    n.VERSION = "3.4.1",
    n.DEFAULTS = {
        loadingText: "loading..."
    },
    n.prototype.setState = function(e) {
        var n = "disabled"
          , r = this.$element
          , i = r.is("input") ? "val" : "html"
          , o = r.data();
        e += "Text",
        null == o.resetText && r.data("resetText", r[i]()),
        setTimeout(t.proxy(function() {
            r[i](null == o[e] ? this.options[e] : o[e]),
            "loadingText" == e ? (this.isLoading = !0,
            r.addClass(n).attr(n, n).prop(n, !0)) : this.isLoading && (this.isLoading = !1,
            r.removeClass(n).removeAttr(n).prop(n, !1))
        }, this), 0)
    }
    ,
    n.prototype.toggle = function() {
        var t = !0
          , e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") ? (n.prop("checked") && (t = !1),
            e.find(".active").removeClass("active"),
            this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1),
            this.$element.toggleClass("active")),
            n.prop("checked", this.$element.hasClass("active")),
            t && n.trigger("change")
        } else
            this.$element.attr("aria-pressed", !this.$element.hasClass("active")),
            this.$element.toggleClass("active")
    }
    ;
    var r = t.fn.button;
    t.fn.button = e,
    t.fn.button.Constructor = n,
    t.fn.button.noConflict = function() {
        return t.fn.button = r,
        this
    }
    ,
    t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(n) {
        var r = t(n.target).closest(".btn");
        e.call(r, "toggle"),
        t(n.target).is('input[type="radio"], input[type="checkbox"]') || (n.preventDefault(),
        r.is("input,button") ? r.trigger("focus") : r.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery),
function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var r = t(this)
              , i = r.data("bs.carousel")
              , o = t.extend({}, n.DEFAULTS, r.data(), "object" == typeof e && e)
              , s = "string" == typeof e ? e : o.slide;
            i || r.data("bs.carousel", i = new n(this,o)),
            "number" == typeof e ? i.to(e) : s ? i[s]() : o.interval && i.pause().cycle()
        })
    }
    var n = function(e, n) {
        this.$element = t(e),
        this.$indicators = this.$element.find(".carousel-indicators"),
        this.options = n,
        this.paused = null,
        this.sliding = null,
        this.interval = null,
        this.$active = null,
        this.$items = null,
        this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)),
        "hover" == this.options.pause && !("ontouchstart"in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    n.VERSION = "3.4.1",
    n.TRANSITION_DURATION = 600,
    n.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    },
    n.prototype.keydown = function(t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
            case 37:
                this.prev();
                break;
            case 39:
                this.next();
                break;
            default:
                return
            }
            t.preventDefault()
        }
    }
    ,
    n.prototype.cycle = function(e) {
        return e || (this.paused = !1),
        this.interval && clearInterval(this.interval),
        this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)),
        this
    }
    ,
    n.prototype.getItemIndex = function(t) {
        return this.$items = t.parent().children(".item"),
        this.$items.index(t || this.$active)
    }
    ,
    n.prototype.getItemForDirection = function(t, e) {
        var n = this.getItemIndex(e);
        if (("prev" == t && 0 === n || "next" == t && n == this.$items.length - 1) && !this.options.wrap)
            return e;
        var r = (n + ("prev" == t ? -1 : 1)) % this.$items.length;
        return this.$items.eq(r)
    }
    ,
    n.prototype.to = function(t) {
        var e = this
          , n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(t > this.$items.length - 1 || t < 0))
            return this.sliding ? this.$element.one("slid.bs.carousel", function() {
                e.to(t)
            }) : n == t ? this.pause().cycle() : this.slide(n < t ? "next" : "prev", this.$items.eq(t))
    }
    ,
    n.prototype.pause = function(e) {
        return e || (this.paused = !0),
        this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end),
        this.cycle(!0)),
        this.interval = clearInterval(this.interval),
        this
    }
    ,
    n.prototype.next = function() {
        if (!this.sliding)
            return this.slide("next")
    }
    ,
    n.prototype.prev = function() {
        if (!this.sliding)
            return this.slide("prev")
    }
    ,
    n.prototype.slide = function(e, r) {
        var i = this.$element.find(".item.active")
          , o = r || this.getItemForDirection(e, i)
          , s = this.interval
          , a = "next" == e ? "left" : "right"
          , u = this;
        if (o.hasClass("active"))
            return this.sliding = !1;
        var c = o[0]
          , l = t.Event("slide.bs.carousel", {
            relatedTarget: c,
            direction: a
        });
        if (this.$element.trigger(l),
        !l.isDefaultPrevented()) {
            if (this.sliding = !0,
            s && this.pause(),
            this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var f = t(this.$indicators.children()[this.getItemIndex(o)]);
                f && f.addClass("active")
            }
            var h = t.Event("slid.bs.carousel", {
                relatedTarget: c,
                direction: a
            });
            return t.support.transition && this.$element.hasClass("slide") ? (o.addClass(e),
            "object" == typeof o && o.length && o[0].offsetWidth,
            i.addClass(a),
            o.addClass(a),
            i.one("bsTransitionEnd", function() {
                o.removeClass([e, a].join(" ")).addClass("active"),
                i.removeClass(["active", a].join(" ")),
                u.sliding = !1,
                setTimeout(function() {
                    u.$element.trigger(h)
                }, 0)
            }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (i.removeClass("active"),
            o.addClass("active"),
            this.sliding = !1,
            this.$element.trigger(h)),
            s && this.cycle(),
            this
        }
    }
    ;
    var r = t.fn.carousel;
    t.fn.carousel = e,
    t.fn.carousel.Constructor = n,
    t.fn.carousel.noConflict = function() {
        return t.fn.carousel = r,
        this
    }
    ;
    var i = function(n) {
        var r = t(this)
          , i = r.attr("href");
        i && (i = i.replace(/.*(?=#[^\s]+$)/, ""));
        var o = r.attr("data-target") || i
          , s = t(document).find(o);
        if (s.hasClass("carousel")) {
            var a = t.extend({}, s.data(), r.data())
              , u = r.attr("data-slide-to");
            u && (a.interval = !1),
            e.call(s, a),
            u && s.data("bs.carousel").to(u),
            n.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", i).on("click.bs.carousel.data-api", "[data-slide-to]", i),
    t(window).on("load", function() {
        t('[data-ride="carousel"]').each(function() {
            var n = t(this);
            e.call(n, n.data())
        })
    })
}(jQuery),
function(t) {
    "use strict";
    function e(e) {
        var n, r = e.attr("data-target") || (n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
        return t(document).find(r)
    }
    function n(e) {
        return this.each(function() {
            var n = t(this)
              , i = n.data("bs.collapse")
              , o = t.extend({}, r.DEFAULTS, n.data(), "object" == typeof e && e);
            !i && o.toggle && /show|hide/.test(e) && (o.toggle = !1),
            i || n.data("bs.collapse", i = new r(this,o)),
            "string" == typeof e && i[e]()
        })
    }
    var r = function(e, n) {
        this.$element = t(e),
        this.options = t.extend({}, r.DEFAULTS, n),
        this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'),
        this.transitioning = null,
        this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
        this.options.toggle && this.toggle()
    };
    r.VERSION = "3.4.1",
    r.TRANSITION_DURATION = 350,
    r.DEFAULTS = {
        toggle: !0
    },
    r.prototype.dimension = function() {
        return this.$element.hasClass("width") ? "width" : "height"
    }
    ,
    r.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, i = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(i && i.length && (e = i.data("bs.collapse")) && e.transitioning)) {
                var o = t.Event("show.bs.collapse");
                if (this.$element.trigger(o),
                !o.isDefaultPrevented()) {
                    i && i.length && (n.call(i, "hide"),
                    e || i.data("bs.collapse", null));
                    var s = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded", !0),
                    this.$trigger.removeClass("collapsed").attr("aria-expanded", !0),
                    this.transitioning = 1;
                    var a = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[s](""),
                        this.transitioning = 0,
                        this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition)
                        return a.call(this);
                    var u = t.camelCase(["scroll", s].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(r.TRANSITION_DURATION)[s](this.$element[0][u])
                }
            }
        }
    }
    ,
    r.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e),
            !e.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight,
                this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1),
                this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
                this.transitioning = 1;
                var i = function() {
                    this.transitioning = 0,
                    this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                if (!t.support.transition)
                    return i.call(this);
                this.$element[n](0).one("bsTransitionEnd", t.proxy(i, this)).emulateTransitionEnd(r.TRANSITION_DURATION)
            }
        }
    }
    ,
    r.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }
    ,
    r.prototype.getParent = function() {
        return t(document).find(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(n, r) {
            var i = t(r);
            this.addAriaAndCollapsedClass(e(i), i)
        }, this)).end()
    }
    ,
    r.prototype.addAriaAndCollapsedClass = function(t, e) {
        var n = t.hasClass("in");
        t.attr("aria-expanded", n),
        e.toggleClass("collapsed", !n).attr("aria-expanded", n)
    }
    ;
    var i = t.fn.collapse;
    t.fn.collapse = n,
    t.fn.collapse.Constructor = r,
    t.fn.collapse.noConflict = function() {
        return t.fn.collapse = i,
        this
    }
    ,
    t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(r) {
        var i = t(this);
        i.attr("data-target") || r.preventDefault();
        var o = e(i)
          , s = o.data("bs.collapse") ? "toggle" : i.data();
        n.call(o, s)
    })
}(jQuery),
function(t) {
    "use strict";
    function e(e) {
        var n = e.attr("data-target");
        n || (n = (n = e.attr("href")) && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var r = "#" !== n ? t(document).find(n) : null;
        return r && r.length ? r : e.parent()
    }
    function n(n) {
        n && 3 === n.which || (t(".dropdown-backdrop").remove(),
        t(r).each(function() {
            var r = t(this)
              , i = e(r)
              , o = {
                relatedTarget: this
            };
            i.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && t.contains(i[0], n.target) || (i.trigger(n = t.Event("hide.bs.dropdown", o)),
            n.isDefaultPrevented() || (r.attr("aria-expanded", "false"),
            i.removeClass("open").trigger(t.Event("hidden.bs.dropdown", o)))))
        }))
    }
    var r = '[data-toggle="dropdown"]'
      , i = function(e) {
        t(e).on("click.bs.dropdown", this.toggle)
    };
    i.VERSION = "3.4.1",
    i.prototype.toggle = function(r) {
        var i = t(this);
        if (!i.is(".disabled, :disabled")) {
            var o = e(i)
              , s = o.hasClass("open");
            if (n(),
            !s) {
                "ontouchstart"in document.documentElement && !o.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", n);
                var a = {
                    relatedTarget: this
                };
                if (o.trigger(r = t.Event("show.bs.dropdown", a)),
                r.isDefaultPrevented())
                    return;
                i.trigger("focus").attr("aria-expanded", "true"),
                o.toggleClass("open").trigger(t.Event("shown.bs.dropdown", a))
            }
            return !1
        }
    }
    ,
    i.prototype.keydown = function(n) {
        if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
            var i = t(this);
            if (n.preventDefault(),
            n.stopPropagation(),
            !i.is(".disabled, :disabled")) {
                var o = e(i)
                  , s = o.hasClass("open");
                if (!s && 27 != n.which || s && 27 == n.which)
                    return 27 == n.which && o.find(r).trigger("focus"),
                    i.trigger("click");
                var a = o.find(".dropdown-menu li:not(.disabled):visible a");
                if (a.length) {
                    var u = a.index(n.target);
                    38 == n.which && 0 < u && u--,
                    40 == n.which && u < a.length - 1 && u++,
                    ~u || (u = 0),
                    a.eq(u).trigger("focus")
                }
            }
        }
    }
    ;
    var o = t.fn.dropdown;
    t.fn.dropdown = function(e) {
        return this.each(function() {
            var n = t(this)
              , r = n.data("bs.dropdown");
            r || n.data("bs.dropdown", r = new i(this)),
            "string" == typeof e && r[e].call(n)
        })
    }
    ,
    t.fn.dropdown.Constructor = i,
    t.fn.dropdown.noConflict = function() {
        return t.fn.dropdown = o,
        this
    }
    ,
    t(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", r, i.prototype.toggle).on("keydown.bs.dropdown.data-api", r, i.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", i.prototype.keydown)
}(jQuery),
function(t) {
    "use strict";
    function e(e, r) {
        return this.each(function() {
            var i = t(this)
              , o = i.data("bs.modal")
              , s = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e);
            o || i.data("bs.modal", o = new n(this,s)),
            "string" == typeof e ? o[e](r) : s.show && o.show(r)
        })
    }
    var n = function(e, n) {
        this.options = n,
        this.$body = t(document.body),
        this.$element = t(e),
        this.$dialog = this.$element.find(".modal-dialog"),
        this.$backdrop = null,
        this.isShown = null,
        this.originalBodyPad = null,
        this.scrollbarWidth = 0,
        this.ignoreBackdropClick = !1,
        this.fixedContent = ".navbar-fixed-top, .navbar-fixed-bottom",
        this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    n.VERSION = "3.4.1",
    n.TRANSITION_DURATION = 300,
    n.BACKDROP_TRANSITION_DURATION = 150,
    n.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    },
    n.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t)
    }
    ,
    n.prototype.show = function(e) {
        var r = this
          , i = t.Event("show.bs.modal", {
            relatedTarget: e
        });
        this.$element.trigger(i),
        this.isShown || i.isDefaultPrevented() || (this.isShown = !0,
        this.checkScrollbar(),
        this.setScrollbar(),
        this.$body.addClass("modal-open"),
        this.escape(),
        this.resize(),
        this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)),
        this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            r.$element.one("mouseup.dismiss.bs.modal", function(e) {
                t(e.target).is(r.$element) && (r.ignoreBackdropClick = !0)
            })
        }),
        this.backdrop(function() {
            var i = t.support.transition && r.$element.hasClass("fade");
            r.$element.parent().length || r.$element.appendTo(r.$body),
            r.$element.show().scrollTop(0),
            r.adjustDialog(),
            i && r.$element[0].offsetWidth,
            r.$element.addClass("in"),
            r.enforceFocus();
            var o = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            i ? r.$dialog.one("bsTransitionEnd", function() {
                r.$element.trigger("focus").trigger(o)
            }).emulateTransitionEnd(n.TRANSITION_DURATION) : r.$element.trigger("focus").trigger(o)
        }))
    }
    ,
    n.prototype.hide = function(e) {
        e && e.preventDefault(),
        e = t.Event("hide.bs.modal"),
        this.$element.trigger(e),
        this.isShown && !e.isDefaultPrevented() && (this.isShown = !1,
        this.escape(),
        this.resize(),
        t(document).off("focusin.bs.modal"),
        this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),
        this.$dialog.off("mousedown.dismiss.bs.modal"),
        t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
    }
    ,
    n.prototype.enforceFocus = function() {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
            document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }
    ,
    n.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }
    ,
    n.prototype.resize = function() {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }
    ,
    n.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(),
        this.backdrop(function() {
            t.$body.removeClass("modal-open"),
            t.resetAdjustments(),
            t.resetScrollbar(),
            t.$element.trigger("hidden.bs.modal")
        })
    }
    ,
    n.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(),
        this.$backdrop = null
    }
    ,
    n.prototype.backdrop = function(e) {
        var r = this
          , i = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var o = t.support.transition && i;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + i).appendTo(this.$body),
            this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                this.ignoreBackdropClick ? this.ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())
            }, this)),
            o && this.$backdrop[0].offsetWidth,
            this.$backdrop.addClass("in"),
            !e)
                return;
            o ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var s = function() {
                r.removeBackdrop(),
                e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : s()
        } else
            e && e()
    }
    ,
    n.prototype.handleUpdate = function() {
        this.adjustDialog()
    }
    ,
    n.prototype.adjustDialog = function() {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }
    ,
    n.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }
    ,
    n.prototype.checkScrollbar = function() {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t,
        this.scrollbarWidth = this.measureScrollbar()
    }
    ,
    n.prototype.setScrollbar = function() {
        var e = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "";
        var n = this.scrollbarWidth;
        this.bodyIsOverflowing && (this.$body.css("padding-right", e + n),
        t(this.fixedContent).each(function(e, r) {
            var i = r.style.paddingRight
              , o = t(r).css("padding-right");
            t(r).data("padding-right", i).css("padding-right", parseFloat(o) + n + "px")
        }))
    }
    ,
    n.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad),
        t(this.fixedContent).each(function(e, n) {
            var r = t(n).data("padding-right");
            t(n).removeData("padding-right"),
            n.style.paddingRight = r || ""
        })
    }
    ,
    n.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure",
        this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t),
        e
    }
    ;
    var r = t.fn.modal;
    t.fn.modal = e,
    t.fn.modal.Constructor = n,
    t.fn.modal.noConflict = function() {
        return t.fn.modal = r,
        this
    }
    ,
    t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
        var r = t(this)
          , i = r.attr("href")
          , o = r.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, "")
          , s = t(document).find(o)
          , a = s.data("bs.modal") ? "toggle" : t.extend({
            remote: !/#/.test(i) && i
        }, s.data(), r.data());
        r.is("a") && n.preventDefault(),
        s.one("show.bs.modal", function(t) {
            t.isDefaultPrevented() || s.one("hidden.bs.modal", function() {
                r.is(":visible") && r.trigger("focus")
            })
        }),
        e.call(s, a, this)
    })
}(jQuery),
function(t) {
    "use strict";
    function e(e, n) {
        var r = e.nodeName.toLowerCase();
        if (-1 !== t.inArray(r, n))
            return -1 === t.inArray(r, i) || Boolean(e.nodeValue.match(s) || e.nodeValue.match(a));
        for (var o = t(n).filter(function(t, e) {
            return e instanceof RegExp
        }), u = 0, c = o.length; u < c; u++)
            if (r.match(o[u]))
                return !0;
        return !1
    }
    function n(n, r, i) {
        if (0 === n.length)
            return n;
        if (i && "function" == typeof i)
            return i(n);
        if (!document.implementation || !document.implementation.createHTMLDocument)
            return n;
        var o = document.implementation.createHTMLDocument("sanitization");
        o.body.innerHTML = n;
        for (var s = t.map(r, function(t, e) {
            return e
        }), a = t(o.body).find("*"), u = 0, c = a.length; u < c; u++) {
            var l = a[u]
              , f = l.nodeName.toLowerCase();
            if (-1 !== t.inArray(f, s))
                for (var h = t.map(l.attributes, function(t) {
                    return t
                }), p = [].concat(r["*"] || [], r[f] || []), d = 0, v = h.length; d < v; d++)
                    e(h[d], p) || l.removeAttribute(h[d].nodeName);
            else
                l.parentNode.removeChild(l)
        }
        return o.body.innerHTML
    }
    var r = ["sanitize", "whiteList", "sanitizeFn"]
      , i = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]
      , o = {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: []
    }
      , s = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:\/?#]*(?:[\/?#]|$))/gi
      , a = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i
      , u = function(t, e) {
        this.type = null,
        this.options = null,
        this.enabled = null,
        this.timeout = null,
        this.hoverState = null,
        this.$element = null,
        this.inState = null,
        this.init("tooltip", t, e)
    };
    u.VERSION = "3.4.1",
    u.TRANSITION_DURATION = 150,
    u.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        },
        sanitize: !0,
        sanitizeFn: null,
        whiteList: o
    },
    u.prototype.init = function(e, n, r) {
        if (this.enabled = !0,
        this.type = e,
        this.$element = t(n),
        this.options = this.getOptions(r),
        this.$viewport = this.options.viewport && t(document).find(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport),
        this.inState = {
            click: !1,
            hover: !1,
            focus: !1
        },
        this.$element[0]instanceof document.constructor && !this.options.selector)
            throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var i = this.options.trigger.split(" "), o = i.length; o--; ) {
            var s = i[o];
            if ("click" == s)
                this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != s) {
                var a = "hover" == s ? "mouseenter" : "focusin"
                  , u = "hover" == s ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)),
                this.$element.on(u + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }
    ,
    u.prototype.getDefaults = function() {
        return u.DEFAULTS
    }
    ,
    u.prototype.getOptions = function(e) {
        var i = this.$element.data();
        for (var o in i)
            i.hasOwnProperty(o) && -1 !== t.inArray(o, r) && delete i[o];
        return (e = t.extend({}, this.getDefaults(), i, e)).delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }),
        e.sanitize && (e.template = n(e.template, e.whiteList, e.sanitizeFn)),
        e
    }
    ,
    u.prototype.getDelegateOptions = function() {
        var e = {}
          , n = this.getDefaults();
        return this._options && t.each(this._options, function(t, r) {
            n[t] != r && (e[t] = r)
        }),
        e
    }
    ,
    u.prototype.enter = function(e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        if (n || (n = new this.constructor(e.currentTarget,this.getDelegateOptions()),
        t(e.currentTarget).data("bs." + this.type, n)),
        e instanceof t.Event && (n.inState["focusin" == e.type ? "focus" : "hover"] = !0),
        n.tip().hasClass("in") || "in" == n.hoverState)
            n.hoverState = "in";
        else {
            if (clearTimeout(n.timeout),
            n.hoverState = "in",
            !n.options.delay || !n.options.delay.show)
                return n.show();
            n.timeout = setTimeout(function() {
                "in" == n.hoverState && n.show()
            }, n.options.delay.show)
        }
    }
    ,
    u.prototype.isInStateTrue = function() {
        for (var t in this.inState)
            if (this.inState[t])
                return !0;
        return !1
    }
    ,
    u.prototype.leave = function(e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        if (n || (n = new this.constructor(e.currentTarget,this.getDelegateOptions()),
        t(e.currentTarget).data("bs." + this.type, n)),
        e instanceof t.Event && (n.inState["focusout" == e.type ? "focus" : "hover"] = !1),
        !n.isInStateTrue()) {
            if (clearTimeout(n.timeout),
            n.hoverState = "out",
            !n.options.delay || !n.options.delay.hide)
                return n.hide();
            n.timeout = setTimeout(function() {
                "out" == n.hoverState && n.hide()
            }, n.options.delay.hide)
        }
    }
    ,
    u.prototype.show = function() {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var n = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !n)
                return;
            var r = this
              , i = this.tip()
              , o = this.getUID(this.type);
            this.setContent(),
            i.attr("id", o),
            this.$element.attr("aria-describedby", o),
            this.options.animation && i.addClass("fade");
            var s = "function" == typeof this.options.placement ? this.options.placement.call(this, i[0], this.$element[0]) : this.options.placement
              , a = /\s?auto?\s?/i
              , c = a.test(s);
            c && (s = s.replace(a, "") || "top"),
            i.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(s).data("bs." + this.type, this),
            this.options.container ? i.appendTo(t(document).find(this.options.container)) : i.insertAfter(this.$element),
            this.$element.trigger("inserted.bs." + this.type);
            var l = this.getPosition()
              , f = i[0].offsetWidth
              , h = i[0].offsetHeight;
            if (c) {
                var p = s
                  , d = this.getPosition(this.$viewport);
                s = "bottom" == s && l.bottom + h > d.bottom ? "top" : "top" == s && l.top - h < d.top ? "bottom" : "right" == s && l.right + f > d.width ? "left" : "left" == s && l.left - f < d.left ? "right" : s,
                i.removeClass(p).addClass(s)
            }
            var v = this.getCalculatedOffset(s, l, f, h);
            this.applyPlacement(v, s);
            var g = function() {
                var t = r.hoverState;
                r.$element.trigger("shown.bs." + r.type),
                r.hoverState = null,
                "out" == t && r.leave(r)
            };
            t.support.transition && this.$tip.hasClass("fade") ? i.one("bsTransitionEnd", g).emulateTransitionEnd(u.TRANSITION_DURATION) : g()
        }
    }
    ,
    u.prototype.applyPlacement = function(e, n) {
        var r = this.tip()
          , i = r[0].offsetWidth
          , o = r[0].offsetHeight
          , s = parseInt(r.css("margin-top"), 10)
          , a = parseInt(r.css("margin-left"), 10);
        isNaN(s) && (s = 0),
        isNaN(a) && (a = 0),
        e.top += s,
        e.left += a,
        t.offset.setOffset(r[0], t.extend({
            using: function(t) {
                r.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0),
        r.addClass("in");
        var u = r[0].offsetWidth
          , c = r[0].offsetHeight;
        "top" == n && c != o && (e.top = e.top + o - c);
        var l = this.getViewportAdjustedDelta(n, e, u, c);
        l.left ? e.left += l.left : e.top += l.top;
        var f = /top|bottom/.test(n)
          , h = f ? 2 * l.left - i + u : 2 * l.top - o + c
          , p = f ? "offsetWidth" : "offsetHeight";
        r.offset(e),
        this.replaceArrow(h, r[0][p], f)
    }
    ,
    u.prototype.replaceArrow = function(t, e, n) {
        this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "")
    }
    ,
    u.prototype.setContent = function() {
        var t = this.tip()
          , e = this.getTitle();
        this.options.html ? (this.options.sanitize && (e = n(e, this.options.whiteList, this.options.sanitizeFn)),
        t.find(".tooltip-inner").html(e)) : t.find(".tooltip-inner").text(e),
        t.removeClass("fade in top bottom left right")
    }
    ,
    u.prototype.hide = function(e) {
        function n() {
            "in" != r.hoverState && i.detach(),
            r.$element && r.$element.removeAttr("aria-describedby").trigger("hidden.bs." + r.type),
            e && e()
        }
        var r = this
          , i = t(this.$tip)
          , o = t.Event("hide.bs." + this.type);
        if (this.$element.trigger(o),
        !o.isDefaultPrevented())
            return i.removeClass("in"),
            t.support.transition && i.hasClass("fade") ? i.one("bsTransitionEnd", n).emulateTransitionEnd(u.TRANSITION_DURATION) : n(),
            this.hoverState = null,
            this
    }
    ,
    u.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }
    ,
    u.prototype.hasContent = function() {
        return this.getTitle()
    }
    ,
    u.prototype.getPosition = function(e) {
        var n = (e = e || this.$element)[0]
          , r = "BODY" == n.tagName
          , i = n.getBoundingClientRect();
        null == i.width && (i = t.extend({}, i, {
            width: i.right - i.left,
            height: i.bottom - i.top
        }));
        var o = window.SVGElement && n instanceof window.SVGElement
          , s = r ? {
            top: 0,
            left: 0
        } : o ? null : e.offset()
          , a = {
            scroll: r ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
        }
          , u = r ? {
            width: t(window).width(),
            height: t(window).height()
        } : null;
        return t.extend({}, i, a, u, s)
    }
    ,
    u.prototype.getCalculatedOffset = function(t, e, n, r) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - n / 2
        } : "top" == t ? {
            top: e.top - r,
            left: e.left + e.width / 2 - n / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - r / 2,
            left: e.left - n
        } : {
            top: e.top + e.height / 2 - r / 2,
            left: e.left + e.width
        }
    }
    ,
    u.prototype.getViewportAdjustedDelta = function(t, e, n, r) {
        var i = {
            top: 0,
            left: 0
        };
        if (!this.$viewport)
            return i;
        var o = this.options.viewport && this.options.viewport.padding || 0
          , s = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var a = e.top - o - s.scroll
              , u = e.top + o - s.scroll + r;
            a < s.top ? i.top = s.top - a : u > s.top + s.height && (i.top = s.top + s.height - u)
        } else {
            var c = e.left - o
              , l = e.left + o + n;
            c < s.left ? i.left = s.left - c : l > s.right && (i.left = s.left + s.width - l)
        }
        return i
    }
    ,
    u.prototype.getTitle = function() {
        var t = this.$element
          , e = this.options;
        return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
    }
    ,
    u.prototype.getUID = function(t) {
        for (; t += ~~(1e6 * Math.random()),
        document.getElementById(t); )
            ;
        return t
    }
    ,
    u.prototype.tip = function() {
        if (!this.$tip && (this.$tip = t(this.options.template),
        1 != this.$tip.length))
            throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }
    ,
    u.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }
    ,
    u.prototype.enable = function() {
        this.enabled = !0
    }
    ,
    u.prototype.disable = function() {
        this.enabled = !1
    }
    ,
    u.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }
    ,
    u.prototype.toggle = function(e) {
        var n = this;
        e && ((n = t(e.currentTarget).data("bs." + this.type)) || (n = new this.constructor(e.currentTarget,this.getDelegateOptions()),
        t(e.currentTarget).data("bs." + this.type, n))),
        e ? (n.inState.click = !n.inState.click,
        n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }
    ,
    u.prototype.destroy = function() {
        var t = this;
        clearTimeout(this.timeout),
        this.hide(function() {
            t.$element.off("." + t.type).removeData("bs." + t.type),
            t.$tip && t.$tip.detach(),
            t.$tip = null,
            t.$arrow = null,
            t.$viewport = null,
            t.$element = null
        })
    }
    ,
    u.prototype.sanitizeHtml = function(t) {
        return n(t, this.options.whiteList, this.options.sanitizeFn)
    }
    ;
    var c = t.fn.tooltip;
    t.fn.tooltip = function(e) {
        return this.each(function() {
            var n = t(this)
              , r = n.data("bs.tooltip")
              , i = "object" == typeof e && e;
            !r && /destroy|hide/.test(e) || (r || n.data("bs.tooltip", r = new u(this,i)),
            "string" == typeof e && r[e]())
        })
    }
    ,
    t.fn.tooltip.Constructor = u,
    t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = c,
        this
    }
}(jQuery),
function(t) {
    "use strict";
    var e = function(t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip)
        throw new Error("Popover requires tooltip.js");
    e.VERSION = "3.4.1",
    e.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }),
    ((e.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype)).constructor = e).prototype.getDefaults = function() {
        return e.DEFAULTS
    }
    ,
    e.prototype.setContent = function() {
        var t = this.tip()
          , e = this.getTitle()
          , n = this.getContent();
        if (this.options.html) {
            var r = typeof n;
            this.options.sanitize && (e = this.sanitizeHtml(e),
            "string" === r && (n = this.sanitizeHtml(n))),
            t.find(".popover-title").html(e),
            t.find(".popover-content").children().detach().end()["string" === r ? "html" : "append"](n)
        } else
            t.find(".popover-title").text(e),
            t.find(".popover-content").children().detach().end().text(n);
        t.removeClass("fade top bottom left right in"),
        t.find(".popover-title").html() || t.find(".popover-title").hide()
    }
    ,
    e.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }
    ,
    e.prototype.getContent = function() {
        var t = this.$element
          , e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }
    ,
    e.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }
    ;
    var n = t.fn.popover;
    t.fn.popover = function(n) {
        return this.each(function() {
            var r = t(this)
              , i = r.data("bs.popover")
              , o = "object" == typeof n && n;
            !i && /destroy|hide/.test(n) || (i || r.data("bs.popover", i = new e(this,o)),
            "string" == typeof n && i[n]())
        })
    }
    ,
    t.fn.popover.Constructor = e,
    t.fn.popover.noConflict = function() {
        return t.fn.popover = n,
        this
    }
}(jQuery),
function(t) {
    "use strict";
    function e(n, r) {
        this.$body = t(document.body),
        this.$scrollElement = t(t(n).is(document.body) ? window : n),
        this.options = t.extend({}, e.DEFAULTS, r),
        this.selector = (this.options.target || "") + " .nav li > a",
        this.offsets = [],
        this.targets = [],
        this.activeTarget = null,
        this.scrollHeight = 0,
        this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)),
        this.refresh(),
        this.process()
    }
    function n(n) {
        return this.each(function() {
            var r = t(this)
              , i = r.data("bs.scrollspy")
              , o = "object" == typeof n && n;
            i || r.data("bs.scrollspy", i = new e(this,o)),
            "string" == typeof n && i[n]()
        })
    }
    e.VERSION = "3.4.1",
    e.DEFAULTS = {
        offset: 10
    },
    e.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }
    ,
    e.prototype.refresh = function() {
        var e = this
          , n = "offset"
          , r = 0;
        this.offsets = [],
        this.targets = [],
        this.scrollHeight = this.getScrollHeight(),
        t.isWindow(this.$scrollElement[0]) || (n = "position",
        r = this.$scrollElement.scrollTop()),
        this.$body.find(this.selector).map(function() {
            var e = t(this)
              , i = e.data("target") || e.attr("href")
              , o = /^#./.test(i) && t(i);
            return o && o.length && o.is(":visible") && [[o[n]().top + r, i]] || null
        }).sort(function(t, e) {
            return t[0] - e[0]
        }).each(function() {
            e.offsets.push(this[0]),
            e.targets.push(this[1])
        })
    }
    ,
    e.prototype.process = function() {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset, n = this.getScrollHeight(), r = this.options.offset + n - this.$scrollElement.height(), i = this.offsets, o = this.targets, s = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(),
        r <= e)
            return s != (t = o[o.length - 1]) && this.activate(t);
        if (s && e < i[0])
            return this.activeTarget = null,
            this.clear();
        for (t = i.length; t--; )
            s != o[t] && e >= i[t] && (void 0 === i[t + 1] || e < i[t + 1]) && this.activate(o[t])
    }
    ,
    e.prototype.activate = function(e) {
        this.activeTarget = e,
        this.clear();
        var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]'
          , r = t(n).parents("li").addClass("active");
        r.parent(".dropdown-menu").length && (r = r.closest("li.dropdown").addClass("active")),
        r.trigger("activate.bs.scrollspy")
    }
    ,
    e.prototype.clear = function() {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    }
    ;
    var r = t.fn.scrollspy;
    t.fn.scrollspy = n,
    t.fn.scrollspy.Constructor = e,
    t.fn.scrollspy.noConflict = function() {
        return t.fn.scrollspy = r,
        this
    }
    ,
    t(window).on("load.bs.scrollspy.data-api", function() {
        t('[data-spy="scroll"]').each(function() {
            var e = t(this);
            n.call(e, e.data())
        })
    })
}(jQuery),
function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var r = t(this)
              , i = r.data("bs.tab");
            i || r.data("bs.tab", i = new n(this)),
            "string" == typeof e && i[e]()
        })
    }
    var n = function(e) {
        this.element = t(e)
    };
    n.VERSION = "3.4.1",
    n.TRANSITION_DURATION = 150,
    n.prototype.show = function() {
        var e = this.element
          , n = e.closest("ul:not(.dropdown-menu)")
          , r = e.data("target");
        if (r || (r = (r = e.attr("href")) && r.replace(/.*(?=#[^\s]*$)/, "")),
        !e.parent("li").hasClass("active")) {
            var i = n.find(".active:last a")
              , o = t.Event("hide.bs.tab", {
                relatedTarget: e[0]
            })
              , s = t.Event("show.bs.tab", {
                relatedTarget: i[0]
            });
            if (i.trigger(o),
            e.trigger(s),
            !s.isDefaultPrevented() && !o.isDefaultPrevented()) {
                var a = t(document).find(r);
                this.activate(e.closest("li"), n),
                this.activate(a, a.parent(), function() {
                    i.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: e[0]
                    }),
                    e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: i[0]
                    })
                })
            }
        }
    }
    ,
    n.prototype.activate = function(e, r, i) {
        function o() {
            s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1),
            e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0),
            a ? (e[0].offsetWidth,
            e.addClass("in")) : e.removeClass("fade"),
            e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0),
            i && i()
        }
        var s = r.find("> .active")
          , a = i && t.support.transition && (s.length && s.hasClass("fade") || !!r.find("> .fade").length);
        s.length && a ? s.one("bsTransitionEnd", o).emulateTransitionEnd(n.TRANSITION_DURATION) : o(),
        s.removeClass("in")
    }
    ;
    var r = t.fn.tab;
    t.fn.tab = e,
    t.fn.tab.Constructor = n,
    t.fn.tab.noConflict = function() {
        return t.fn.tab = r,
        this
    }
    ;
    var i = function(n) {
        n.preventDefault(),
        e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', i).on("click.bs.tab.data-api", '[data-toggle="pill"]', i)
}(jQuery),
function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var r = t(this)
              , i = r.data("bs.affix")
              , o = "object" == typeof e && e;
            i || r.data("bs.affix", i = new n(this,o)),
            "string" == typeof e && i[e]()
        })
    }
    var n = function(e, r) {
        this.options = t.extend({}, n.DEFAULTS, r);
        var i = this.options.target === n.DEFAULTS.target ? t(this.options.target) : t(document).find(this.options.target);
        this.$target = i.on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)),
        this.$element = t(e),
        this.affixed = null,
        this.unpin = null,
        this.pinnedOffset = null,
        this.checkPosition()
    };
    n.VERSION = "3.4.1",
    n.RESET = "affix affix-top affix-bottom",
    n.DEFAULTS = {
        offset: 0,
        target: window
    },
    n.prototype.getState = function(t, e, n, r) {
        var i = this.$target.scrollTop()
          , o = this.$element.offset()
          , s = this.$target.height();
        if (null != n && "top" == this.affixed)
            return i < n && "top";
        if ("bottom" == this.affixed)
            return null != n ? !(i + this.unpin <= o.top) && "bottom" : !(i + s <= t - r) && "bottom";
        var a = null == this.affixed
          , u = a ? i : o.top;
        return null != n && i <= n ? "top" : null != r && t - r <= u + (a ? s : e) && "bottom"
    }
    ,
    n.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset)
            return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var t = this.$target.scrollTop()
          , e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }
    ,
    n.prototype.checkPositionWithEventLoop = function() {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }
    ,
    n.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var e = this.$element.height()
              , r = this.options.offset
              , i = r.top
              , o = r.bottom
              , s = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof r && (o = i = r),
            "function" == typeof i && (i = r.top(this.$element)),
            "function" == typeof o && (o = r.bottom(this.$element));
            var a = this.getState(s, e, i, o);
            if (this.affixed != a) {
                null != this.unpin && this.$element.css("top", "");
                var u = "affix" + (a ? "-" + a : "")
                  , c = t.Event(u + ".bs.affix");
                if (this.$element.trigger(c),
                c.isDefaultPrevented())
                    return;
                this.affixed = a,
                this.unpin = "bottom" == a ? this.getPinnedOffset() : null,
                this.$element.removeClass(n.RESET).addClass(u).trigger(u.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == a && this.$element.offset({
                top: s - e - o
            })
        }
    }
    ;
    var r = t.fn.affix;
    t.fn.affix = e,
    t.fn.affix.Constructor = n,
    t.fn.affix.noConflict = function() {
        return t.fn.affix = r,
        this
    }
    ,
    t(window).on("load", function() {
        t('[data-spy="affix"]').each(function() {
            var n = t(this)
              , r = n.data();
            r.offset = r.offset || {},
            null != r.offsetBottom && (r.offset.bottom = r.offsetBottom),
            null != r.offsetTop && (r.offset.top = r.offsetTop),
            e.call(n, r)
        })
    })
}(jQuery),
function(t) {
    if ("object" == typeof exports && "undefined" != typeof module)
        module.exports = t();
    else if ("function" == typeof define && define.amd)
        define([], t);
    else {
        var e;
        "undefined" != typeof window ? e = window : "undefined" != typeof global ? e = global : "undefined" != typeof self && (e = self),
        e.Promise = t()
    }
}(function() {
    var t, e, n;
    return function t(e, n, r) {
        function i(s, a) {
            if (!n[s]) {
                if (!e[s]) {
                    var u = "function" == typeof _dereq_ && _dereq_;
                    if (!a && u)
                        return u(s, !0);
                    if (o)
                        return o(s, !0);
                    var c = new Error("Cannot find module '" + s + "'");
                    throw c.code = "MODULE_NOT_FOUND",
                    c
                }
                var l = n[s] = {
                    exports: {}
                };
                e[s][0].call(l.exports, function(t) {
                    var n = e[s][1][t];
                    return i(n || t)
                }, l, l.exports, t, e, n, r)
            }
            return n[s].exports
        }
        for (var o = "function" == typeof _dereq_ && _dereq_, s = 0; s < r.length; s++)
            i(r[s]);
        return i
    }({
        1: [function(t, e, n) {
            "use strict";
            e.exports = function(t) {
                function e(t) {
                    var e = new n(t)
                      , r = e.promise();
                    return e.setHowMany(1),
                    e.setUnwrap(),
                    e.init(),
                    r
                }
                var n = t._SomePromiseArray;
                t.any = function(t) {
                    return e(t)
                }
                ,
                t.prototype.any = function() {
                    return e(this)
                }
            }
        }
        , {}],
        2: [function(t, e, n) {
            "use strict";
            function r() {
                this._customScheduler = !1,
                this._isTickUsed = !1,
                this._lateQueue = new f(16),
                this._normalQueue = new f(16),
                this._haveDrainedQueues = !1;
                var t = this;
                this.drainQueues = function() {
                    t._drainQueues()
                }
                ,
                this._schedule = l
            }
            function i(t, e, n) {
                this._lateQueue.push(t, e, n),
                this._queueTick()
            }
            function o(t, e, n) {
                this._normalQueue.push(t, e, n),
                this._queueTick()
            }
            function s(t) {
                this._normalQueue._pushOne(t),
                this._queueTick()
            }
            function a(t) {
                for (; t.length() > 0; )
                    u(t)
            }
            function u(t) {
                var e = t.shift();
                if ("function" != typeof e)
                    e._settlePromises();
                else {
                    var n = t.shift()
                      , r = t.shift();
                    e.call(n, r)
                }
            }
            var c;
            try {
                throw new Error
            } catch (t) {
                c = t
            }
            var l = t("./schedule")
              , f = t("./queue");
            r.prototype.setScheduler = function(t) {
                var e = this._schedule;
                return this._schedule = t,
                this._customScheduler = !0,
                e
            }
            ,
            r.prototype.hasCustomScheduler = function() {
                return this._customScheduler
            }
            ,
            r.prototype.haveItemsQueued = function() {
                return this._isTickUsed || this._haveDrainedQueues
            }
            ,
            r.prototype.fatalError = function(t, e) {
                e ? (process.stderr.write("Fatal " + (t instanceof Error ? t.stack : t) + "\n"),
                process.exit(2)) : this.throwLater(t)
            }
            ,
            r.prototype.throwLater = function(t, e) {
                if (1 === arguments.length && (e = t,
                t = function() {
                    throw e
                }
                ),
                "undefined" != typeof setTimeout)
                    setTimeout(function() {
                        t(e)
                    }, 0);
                else
                    try {
                        this._schedule(function() {
                            t(e)
                        })
                    } catch (t) {
                        throw new Error("No async scheduler available\n\n    See http://goo.gl/MqrFmX\n")
                    }
            }
            ,
            r.prototype.invokeLater = i,
            r.prototype.invoke = o,
            r.prototype.settlePromises = s,
            r.prototype._drainQueues = function() {
                a(this._normalQueue),
                this._reset(),
                this._haveDrainedQueues = !0,
                a(this._lateQueue)
            }
            ,
            r.prototype._queueTick = function() {
                this._isTickUsed || (this._isTickUsed = !0,
                this._schedule(this.drainQueues))
            }
            ,
            r.prototype._reset = function() {
                this._isTickUsed = !1
            }
            ,
            e.exports = r,
            e.exports.firstLineError = c
        }
        , {
            "./queue": 26,
            "./schedule": 29
        }],
        3: [function(t, e, n) {
            "use strict";
            e.exports = function(t, e, n, r) {
                var i = !1
                  , o = function(t, e) {
                    this._reject(e)
                }
                  , s = function(t, e) {
                    e.promiseRejectionQueued = !0,
                    e.bindingPromise._then(o, o, null, this, t)
                }
                  , a = function(t, e) {
                    0 == (50397184 & this._bitField) && this._resolveCallback(e.target)
                }
                  , u = function(t, e) {
                    e.promiseRejectionQueued || this._reject(t)
                };
                t.prototype.bind = function(o) {
                    i || (i = !0,
                    t.prototype._propagateFrom = r.propagateFromFunction(),
                    t.prototype._boundValue = r.boundValueFunction());
                    var c = n(o)
                      , l = new t(e);
                    l._propagateFrom(this, 1);
                    var f = this._target();
                    if (l._setBoundTo(c),
                    c instanceof t) {
                        var h = {
                            promiseRejectionQueued: !1,
                            promise: l,
                            target: f,
                            bindingPromise: c
                        };
                        f._then(e, s, void 0, l, h),
                        c._then(a, u, void 0, l, h),
                        l._setOnCancel(c)
                    } else
                        l._resolveCallback(f);
                    return l
                }
                ,
                t.prototype._setBoundTo = function(t) {
                    void 0 !== t ? (this._bitField = 2097152 | this._bitField,
                    this._boundTo = t) : this._bitField = -2097153 & this._bitField
                }
                ,
                t.prototype._isBound = function() {
                    return 2097152 == (2097152 & this._bitField)
                }
                ,
                t.bind = function(e, n) {
                    return t.resolve(n).bind(e)
                }
            }
        }
        , {}],
        4: [function(t, e, n) {
            "use strict";
            function r() {
                try {
                    Promise === o && (Promise = i)
                } catch (t) {}
                return o
            }
            var i;
            "undefined" != typeof Promise && (i = Promise);
            var o = t("./promise")();
            o.noConflict = r,
            e.exports = o
        }
        , {
            "./promise": 22
        }],
        5: [function(t, e, n) {
            "use strict";
            var r = Object.create;
            if (r) {
                var i = r(null)
                  , o = r(null);
                i[" size"] = o[" size"] = 0
            }
            e.exports = function(e) {
                function n(t, n) {
                    var r;
                    if (null != t && (r = t[n]),
                    "function" != typeof r) {
                        var i = "Object " + a.classString(t) + " has no method '" + a.toString(n) + "'";
                        throw new e.TypeError(i)
                    }
                    return r
                }
                function r(t) {
                    return n(t, this.pop()).apply(t, this)
                }
                function i(t) {
                    return t[this]
                }
                function o(t) {
                    var e = +this;
                    return e < 0 && (e = Math.max(0, e + t.length)),
                    t[e]
                }
                var s, a = t("./util"), u = a.canEvaluate;
                a.isIdentifier;
                e.prototype.call = function(t) {
                    var e = [].slice.call(arguments, 1);
                    return e.push(t),
                    this._then(r, void 0, void 0, e, void 0)
                }
                ,
                e.prototype.get = function(t) {
                    var e, n = "number" == typeof t;
                    if (n)
                        e = o;
                    else if (u) {
                        var r = s(t);
                        e = null !== r ? r : i
                    } else
                        e = i;
                    return this._then(e, void 0, void 0, t, void 0)
                }
            }
        }
        , {
            "./util": 36
        }],
        6: [function(t, e, n) {
            "use strict";
            e.exports = function(e, n, r, i) {
                var o = t("./util")
                  , s = o.tryCatch
                  , a = o.errorObj
                  , u = e._async;
                e.prototype.break = e.prototype.cancel = function() {
                    if (!i.cancellation())
                        return this._warn("cancellation is disabled");
                    for (var t = this, e = t; t._isCancellable(); ) {
                        if (!t._cancelBy(e)) {
                            e._isFollowing() ? e._followee().cancel() : e._cancelBranched();
                            break
                        }
                        var n = t._cancellationParent;
                        if (null == n || !n._isCancellable()) {
                            t._isFollowing() ? t._followee().cancel() : t._cancelBranched();
                            break
                        }
                        t._isFollowing() && t._followee().cancel(),
                        t._setWillBeCancelled(),
                        e = t,
                        t = n
                    }
                }
                ,
                e.prototype._branchHasCancelled = function() {
                    this._branchesRemainingToCancel--
                }
                ,
                e.prototype._enoughBranchesHaveCancelled = function() {
                    return void 0 === this._branchesRemainingToCancel || this._branchesRemainingToCancel <= 0
                }
                ,
                e.prototype._cancelBy = function(t) {
                    return t === this ? (this._branchesRemainingToCancel = 0,
                    this._invokeOnCancel(),
                    !0) : (this._branchHasCancelled(),
                    !!this._enoughBranchesHaveCancelled() && (this._invokeOnCancel(),
                    !0))
                }
                ,
                e.prototype._cancelBranched = function() {
                    this._enoughBranchesHaveCancelled() && this._cancel()
                }
                ,
                e.prototype._cancel = function() {
                    this._isCancellable() && (this._setCancelled(),
                    u.invoke(this._cancelPromises, this, void 0))
                }
                ,
                e.prototype._cancelPromises = function() {
                    this._length() > 0 && this._settlePromises()
                }
                ,
                e.prototype._unsetOnCancel = function() {
                    this._onCancelField = void 0
                }
                ,
                e.prototype._isCancellable = function() {
                    return this.isPending() && !this._isCancelled()
                }
                ,
                e.prototype.isCancellable = function() {
                    return this.isPending() && !this.isCancelled()
                }
                ,
                e.prototype._doInvokeOnCancel = function(t, e) {
                    if (o.isArray(t))
                        for (var n = 0; n < t.length; ++n)
                            this._doInvokeOnCancel(t[n], e);
                    else if (void 0 !== t)
                        if ("function" == typeof t) {
                            if (!e) {
                                var r = s(t).call(this._boundValue());
                                r === a && (this._attachExtraTrace(r.e),
                                u.throwLater(r.e))
                            }
                        } else
                            t._resultCancelled(this)
                }
                ,
                e.prototype._invokeOnCancel = function() {
                    var t = this._onCancel();
                    this._unsetOnCancel(),
                    u.invoke(this._doInvokeOnCancel, this, t)
                }
                ,
                e.prototype._invokeInternalOnCancel = function() {
                    this._isCancellable() && (this._doInvokeOnCancel(this._onCancel(), !0),
                    this._unsetOnCancel())
                }
                ,
                e.prototype._resultCancelled = function() {
                    this.cancel()
                }
            }
        }
        , {
            "./util": 36
        }],
        7: [function(t, e, n) {
            "use strict";
            e.exports = function(e) {
                function n(t, n, a) {
                    return function(u) {
                        var c = a._boundValue();
                        t: for (var l = 0; l < t.length; ++l) {
                            var f = t[l];
                            if (f === Error || null != f && f.prototype instanceof Error) {
                                if (u instanceof f)
                                    return o(n).call(c, u)
                            } else if ("function" == typeof f) {
                                var h = o(f).call(c, u);
                                if (h === s)
                                    return h;
                                if (h)
                                    return o(n).call(c, u)
                            } else if (r.isObject(u)) {
                                for (var p = i(f), d = 0; d < p.length; ++d) {
                                    var v = p[d];
                                    if (f[v] != u[v])
                                        continue t
                                }
                                return o(n).call(c, u)
                            }
                        }
                        return e
                    }
                }
                var r = t("./util")
                  , i = t("./es5").keys
                  , o = r.tryCatch
                  , s = r.errorObj;
                return n
            }
        }
        , {
            "./es5": 13,
            "./util": 36
        }],
        8: [function(t, e, n) {
            "use strict";
            e.exports = function(t) {
                function e() {
                    this._trace = new e.CapturedTrace(r())
                }
                function n() {
                    if (i)
                        return new e
                }
                function r() {
                    var t = o.length - 1;
                    if (t >= 0)
                        return o[t]
                }
                var i = !1
                  , o = [];
                return t.prototype._promiseCreated = function() {}
                ,
                t.prototype._pushContext = function() {}
                ,
                t.prototype._popContext = function() {
                    return null
                }
                ,
                t._peekContext = t.prototype._peekContext = function() {}
                ,
                e.prototype._pushContext = function() {
                    void 0 !== this._trace && (this._trace._promiseCreated = null,
                    o.push(this._trace))
                }
                ,
                e.prototype._popContext = function() {
                    if (void 0 !== this._trace) {
                        var t = o.pop()
                          , e = t._promiseCreated;
                        return t._promiseCreated = null,
                        e
                    }
                    return null
                }
                ,
                e.CapturedTrace = null,
                e.create = n,
                e.deactivateLongStackTraces = function() {}
                ,
                e.activateLongStackTraces = function() {
                    var n = t.prototype._pushContext
                      , o = t.prototype._popContext
                      , s = t._peekContext
                      , a = t.prototype._peekContext
                      , u = t.prototype._promiseCreated;
                    e.deactivateLongStackTraces = function() {
                        t.prototype._pushContext = n,
                        t.prototype._popContext = o,
                        t._peekContext = s,
                        t.prototype._peekContext = a,
                        t.prototype._promiseCreated = u,
                        i = !1
                    }
                    ,
                    i = !0,
                    t.prototype._pushContext = e.prototype._pushContext,
                    t.prototype._popContext = e.prototype._popContext,
                    t._peekContext = t.prototype._peekContext = r,
                    t.prototype._promiseCreated = function() {
                        var t = this._peekContext();
                        t && null == t._promiseCreated && (t._promiseCreated = this)
                    }
                }
                ,
                e
            }
        }
        , {}],
        9: [function(t, e, n) {
            "use strict";
            e.exports = function(e, n, r, i) {
                function o(t, e) {
                    return {
                        promise: e
                    }
                }
                function s() {
                    return !1
                }
                function a(t, e, n) {
                    var r = this;
                    try {
                        t(e, n, function(t) {
                            if ("function" != typeof t)
                                throw new TypeError("onCancel must be a function, got: " + B.toString(t));
                            r._attachCancellationCallback(t)
                        })
                    } catch (t) {
                        return t
                    }
                }
                function u(t) {
                    if (!this._isCancellable())
                        return this;
                    var e = this._onCancel();
                    void 0 !== e ? B.isArray(e) ? e.push(t) : this._setOnCancel([e, t]) : this._setOnCancel(t)
                }
                function c() {
                    return this._onCancelField
                }
                function l(t) {
                    this._onCancelField = t
                }
                function f() {
                    this._cancellationParent = void 0,
                    this._onCancelField = void 0
                }
                function h(t, e) {
                    if (0 != (1 & e)) {
                        this._cancellationParent = t;
                        var n = t._branchesRemainingToCancel;
                        void 0 === n && (n = 0),
                        t._branchesRemainingToCancel = n + 1
                    }
                    0 != (2 & e) && t._isBound() && this._setBoundTo(t._boundTo)
                }
                function p(t, e) {
                    0 != (2 & e) && t._isBound() && this._setBoundTo(t._boundTo)
                }
                function d() {
                    var t = this._boundTo;
                    return void 0 !== t && t instanceof e ? t.isFulfilled() ? t.value() : void 0 : t
                }
                function v() {
                    this._trace = new D(this._peekContext())
                }
                function g(t, e) {
                    if (M(t)) {
                        var n = this._trace;
                        if (void 0 !== n && e && (n = n._parent),
                        void 0 !== n)
                            n.attachExtraTrace(t);
                        else if (!t.__stackCleaned__) {
                            var r = k(t);
                            B.notEnumerableProp(t, "stack", r.message + "\n" + r.stack.join("\n")),
                            B.notEnumerableProp(t, "__stackCleaned__", !0)
                        }
                    }
                }
                function m() {
                    this._trace = void 0
                }
                function y(t, e, n, r, i) {
                    if (void 0 === t && null !== e && J) {
                        if (void 0 !== i && i._returnedNonUndefined())
                            return;
                        if (0 == (65535 & r._bitField))
                            return;
                        n && (n += " ");
                        var o = ""
                          , s = "";
                        if (e._trace) {
                            for (var a = e._trace.stack.split("\n"), u = C(a), c = u.length - 1; c >= 0; --c) {
                                var l = u[c];
                                if (!U.test(l)) {
                                    var f = l.match(V);
                                    f && (o = "at " + f[1] + ":" + f[2] + ":" + f[3] + " ");
                                    break
                                }
                            }
                            if (u.length > 0)
                                for (var h = u[0], c = 0; c < a.length; ++c)
                                    if (a[c] === h) {
                                        c > 0 && (s = "\n" + a[c - 1]);
                                        break
                                    }
                        }
                        var p = "a promise was created in a " + n + "handler " + o + "but was not returned from it, see http://goo.gl/rRqMUw" + s;
                        r._warn(p, !0, e)
                    }
                }
                function _(t, e) {
                    var n = t + " is deprecated and will be removed in a future version.";
                    return e && (n += " Use " + e + " instead."),
                    b(n)
                }
                function b(t, n, r) {
                    if (lt.warnings) {
                        var i, o = new H(t);
                        if (n)
                            r._attachExtraTrace(o);
                        else if (lt.longStackTraces && (i = e._peekContext()))
                            i.attachExtraTrace(o);
                        else {
                            var s = k(o);
                            o.stack = s.message + "\n" + s.stack.join("\n")
                        }
                        ot("warning", o) || S(o, "", !0)
                    }
                }
                function w(t, e) {
                    for (var n = 0; n < e.length - 1; ++n)
                        e[n].push("From previous event:"),
                        e[n] = e[n].join("\n");
                    return n < e.length && (e[n] = e[n].join("\n")),
                    t + "\n" + e.join("\n")
                }
                function x(t) {
                    for (var e = 0; e < t.length; ++e)
                        (0 === t[e].length || e + 1 < t.length && t[e][0] === t[e + 1][0]) && (t.splice(e, 1),
                        e--)
                }
                function T(t) {
                    for (var e = t[0], n = 1; n < t.length; ++n) {
                        for (var r = t[n], i = e.length - 1, o = e[i], s = -1, a = r.length - 1; a >= 0; --a)
                            if (r[a] === o) {
                                s = a;
                                break
                            }
                        for (var a = s; a >= 0; --a) {
                            var u = r[a];
                            if (e[i] !== u)
                                break;
                            e.pop(),
                            i--
                        }
                        e = r
                    }
                }
                function C(t) {
                    for (var e = [], n = 0; n < t.length; ++n) {
                        var r = t[n]
                          , i = "    (No stack trace)" === r || Q.test(r)
                          , o = i && at(r);
                        i && !o && (G && " " !== r.charAt(0) && (r = "    " + r),
                        e.push(r))
                    }
                    return e
                }
                function E(t) {
                    for (var e = t.stack.replace(/\s+$/g, "").split("\n"), n = 0; n < e.length; ++n) {
                        var r = e[n];
                        if ("    (No stack trace)" === r || Q.test(r))
                            break
                    }
                    return n > 0 && "SyntaxError" != t.name && (e = e.slice(n)),
                    e
                }
                function k(t) {
                    var e = t.stack
                      , n = t.toString();
                    return e = "string" == typeof e && e.length > 0 ? E(t) : ["    (No stack trace)"],
                    {
                        message: n,
                        stack: "SyntaxError" == t.name ? e : C(e)
                    }
                }
                function S(t, e, n) {
                    if ("undefined" != typeof console) {
                        var r;
                        if (B.isObject(t)) {
                            var i = t.stack;
                            r = e + X(i, t)
                        } else
                            r = e + String(t);
                        "function" == typeof L ? L(r, n) : "function" != typeof console.log && "object" != typeof console.log || console.log(r)
                    }
                }
                function j(t, e, n, r) {
                    var i = !1;
                    try {
                        "function" == typeof e && (i = !0,
                        "rejectionHandled" === t ? e(r) : e(n, r))
                    } catch (t) {
                        z.throwLater(t)
                    }
                    "unhandledRejection" === t ? ot(t, n, r) || i || S(n, "Unhandled rejection ") : ot(t, r)
                }
                function A(t) {
                    var e;
                    if ("function" == typeof t)
                        e = "[function " + (t.name || "anonymous") + "]";
                    else {
                        e = t && "function" == typeof t.toString ? t.toString() : B.toString(t);
                        if (/\[object [a-zA-Z0-9$_]+\]/.test(e))
                            try {
                                e = JSON.stringify(t)
                            } catch (t) {}
                        0 === e.length && (e = "(empty array)")
                    }
                    return "(<" + O(e) + ">, no stack trace)"
                }
                function O(t) {
                    return t.length < 41 ? t : t.substr(0, 38) + "..."
                }
                function R() {
                    return "function" == typeof ct
                }
                function P(t) {
                    var e = t.match(ut);
                    if (e)
                        return {
                            fileName: e[1],
                            line: parseInt(e[2], 10)
                        }
                }
                function F(t, e) {
                    if (R()) {
                        for (var n, r, i = (t.stack || "").split("\n"), o = (e.stack || "").split("\n"), s = -1, a = -1, u = 0; u < i.length; ++u) {
                            var c = P(i[u]);
                            if (c) {
                                n = c.fileName,
                                s = c.line;
                                break
                            }
                        }
                        for (var u = 0; u < o.length; ++u) {
                            var c = P(o[u]);
                            if (c) {
                                r = c.fileName,
                                a = c.line;
                                break
                            }
                        }
                        s < 0 || a < 0 || !n || !r || n !== r || s >= a || (at = function(t) {
                            if (W.test(t))
                                return !0;
                            var e = P(t);
                            return !!(e && e.fileName === n && s <= e.line && e.line <= a)
                        }
                        )
                    }
                }
                function D(t) {
                    this._parent = t,
                    this._promisesCreated = 0;
                    var e = this._length = 1 + (void 0 === t ? 0 : t._length);
                    ct(this, D),
                    e > 32 && this.uncycle()
                }
                var I, N, L, $, z = e._async, H = t("./errors").Warning, B = t("./util"), q = t("./es5"), M = B.canAttachTrace, W = /[\\\/]bluebird[\\\/]js[\\\/](release|debug|instrumented)/, U = /\((?:timers\.js):\d+:\d+\)/, V = /[\/<\(](.+?):(\d+):(\d+)\)?\s*$/, Q = null, X = null, G = !1, Y = !(0 == B.env("BLUEBIRD_DEBUG")), K = !(0 == B.env("BLUEBIRD_WARNINGS") || !Y && !B.env("BLUEBIRD_WARNINGS")), Z = !(0 == B.env("BLUEBIRD_LONG_STACK_TRACES") || !Y && !B.env("BLUEBIRD_LONG_STACK_TRACES")), J = 0 != B.env("BLUEBIRD_W_FORGOTTEN_RETURN") && (K || !!B.env("BLUEBIRD_W_FORGOTTEN_RETURN"));
                !function() {
                    function t() {
                        for (var t = 0; t < r.length; ++t)
                            r[t]._notifyUnhandledRejection();
                        n()
                    }
                    function n() {
                        r.length = 0
                    }
                    var r = [];
                    $ = function(e) {
                        r.push(e),
                        setTimeout(t, 1)
                    }
                    ,
                    q.defineProperty(e, "_unhandledRejectionCheck", {
                        value: t
                    }),
                    q.defineProperty(e, "_unhandledRejectionClear", {
                        value: n
                    })
                }(),
                e.prototype.suppressUnhandledRejections = function() {
                    var t = this._target();
                    t._bitField = -1048577 & t._bitField | 524288
                }
                ,
                e.prototype._ensurePossibleRejectionHandled = function() {
                    0 == (524288 & this._bitField) && (this._setRejectionIsUnhandled(),
                    $(this))
                }
                ,
                e.prototype._notifyUnhandledRejectionIsHandled = function() {
                    j("rejectionHandled", I, void 0, this)
                }
                ,
                e.prototype._setReturnedNonUndefined = function() {
                    this._bitField = 268435456 | this._bitField
                }
                ,
                e.prototype._returnedNonUndefined = function() {
                    return 0 != (268435456 & this._bitField)
                }
                ,
                e.prototype._notifyUnhandledRejection = function() {
                    if (this._isRejectionUnhandled()) {
                        var t = this._settledValue();
                        this._setUnhandledRejectionIsNotified(),
                        j("unhandledRejection", N, t, this)
                    }
                }
                ,
                e.prototype._setUnhandledRejectionIsNotified = function() {
                    this._bitField = 262144 | this._bitField
                }
                ,
                e.prototype._unsetUnhandledRejectionIsNotified = function() {
                    this._bitField = -262145 & this._bitField
                }
                ,
                e.prototype._isUnhandledRejectionNotified = function() {
                    return (262144 & this._bitField) > 0
                }
                ,
                e.prototype._setRejectionIsUnhandled = function() {
                    this._bitField = 1048576 | this._bitField
                }
                ,
                e.prototype._unsetRejectionIsUnhandled = function() {
                    this._bitField = -1048577 & this._bitField,
                    this._isUnhandledRejectionNotified() && (this._unsetUnhandledRejectionIsNotified(),
                    this._notifyUnhandledRejectionIsHandled())
                }
                ,
                e.prototype._isRejectionUnhandled = function() {
                    return (1048576 & this._bitField) > 0
                }
                ,
                e.prototype._warn = function(t, e, n) {
                    return b(t, e, n || this)
                }
                ,
                e.onPossiblyUnhandledRejection = function(t) {
                    var n = e._getContext();
                    N = B.contextBind(n, t)
                }
                ,
                e.onUnhandledRejectionHandled = function(t) {
                    var n = e._getContext();
                    I = B.contextBind(n, t)
                }
                ;
                var tt = function() {};
                e.longStackTraces = function() {
                    if (z.haveItemsQueued() && !lt.longStackTraces)
                        throw new Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n");
                    if (!lt.longStackTraces && R()) {
                        var t = e.prototype._captureStackTrace
                          , r = e.prototype._attachExtraTrace
                          , i = e.prototype._dereferenceTrace;
                        lt.longStackTraces = !0,
                        tt = function() {
                            if (z.haveItemsQueued() && !lt.longStackTraces)
                                throw new Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n");
                            e.prototype._captureStackTrace = t,
                            e.prototype._attachExtraTrace = r,
                            e.prototype._dereferenceTrace = i,
                            n.deactivateLongStackTraces(),
                            lt.longStackTraces = !1
                        }
                        ,
                        e.prototype._captureStackTrace = v,
                        e.prototype._attachExtraTrace = g,
                        e.prototype._dereferenceTrace = m,
                        n.activateLongStackTraces()
                    }
                }
                ,
                e.hasLongStackTraces = function() {
                    return lt.longStackTraces && R()
                }
                ;
                var et = {
                    unhandledrejection: {
                        before: function() {
                            var t = B.global.onunhandledrejection;
                            return B.global.onunhandledrejection = null,
                            t
                        },
                        after: function(t) {
                            B.global.onunhandledrejection = t
                        }
                    },
                    rejectionhandled: {
                        before: function() {
                            var t = B.global.onrejectionhandled;
                            return B.global.onrejectionhandled = null,
                            t
                        },
                        after: function(t) {
                            B.global.onrejectionhandled = t
                        }
                    }
                }
                  , nt = function() {
                    var t = function(t, e) {
                        if (!t)
                            return !B.global.dispatchEvent(e);
                        var n;
                        try {
                            return n = t.before(),
                            !B.global.dispatchEvent(e)
                        } finally {
                            t.after(n)
                        }
                    };
                    try {
                        if ("function" == typeof CustomEvent) {
                            var e = new CustomEvent("CustomEvent");
                            return B.global.dispatchEvent(e),
                            function(e, n) {
                                e = e.toLowerCase();
                                var r = {
                                    detail: n,
                                    cancelable: !0
                                }
                                  , i = new CustomEvent(e,r);
                                return q.defineProperty(i, "promise", {
                                    value: n.promise
                                }),
                                q.defineProperty(i, "reason", {
                                    value: n.reason
                                }),
                                t(et[e], i)
                            }
                        }
                        if ("function" == typeof Event) {
                            var e = new Event("CustomEvent");
                            return B.global.dispatchEvent(e),
                            function(e, n) {
                                e = e.toLowerCase();
                                var r = new Event(e,{
                                    cancelable: !0
                                });
                                return r.detail = n,
                                q.defineProperty(r, "promise", {
                                    value: n.promise
                                }),
                                q.defineProperty(r, "reason", {
                                    value: n.reason
                                }),
                                t(et[e], r)
                            }
                        }
                        var e = document.createEvent("CustomEvent");
                        return e.initCustomEvent("testingtheevent", !1, !0, {}),
                        B.global.dispatchEvent(e),
                        function(e, n) {
                            e = e.toLowerCase();
                            var r = document.createEvent("CustomEvent");
                            return r.initCustomEvent(e, !1, !0, n),
                            t(et[e], r)
                        }
                    } catch (t) {}
                    return function() {
                        return !1
                    }
                }()
                  , rt = function() {
                    return B.isNode ? function() {
                        return process.emit.apply(process, arguments)
                    }
                    : B.global ? function(t) {
                        var e = "on" + t.toLowerCase()
                          , n = B.global[e];
                        return !!n && (n.apply(B.global, [].slice.call(arguments, 1)),
                        !0)
                    }
                    : function() {
                        return !1
                    }
                }()
                  , it = {
                    promiseCreated: o,
                    promiseFulfilled: o,
                    promiseRejected: o,
                    promiseResolved: o,
                    promiseCancelled: o,
                    promiseChained: function(t, e, n) {
                        return {
                            promise: e,
                            child: n
                        }
                    },
                    warning: function(t, e) {
                        return {
                            warning: e
                        }
                    },
                    unhandledRejection: function(t, e, n) {
                        return {
                            reason: e,
                            promise: n
                        }
                    },
                    rejectionHandled: o
                }
                  , ot = function(t) {
                    var e = !1;
                    try {
                        e = rt.apply(null, arguments)
                    } catch (t) {
                        z.throwLater(t),
                        e = !0
                    }
                    var n = !1;
                    try {
                        n = nt(t, it[t].apply(null, arguments))
                    } catch (t) {
                        z.throwLater(t),
                        n = !0
                    }
                    return n || e
                };
                e.config = function(t) {
                    if (t = Object(t),
                    "longStackTraces"in t && (t.longStackTraces ? e.longStackTraces() : !t.longStackTraces && e.hasLongStackTraces() && tt()),
                    "warnings"in t) {
                        var n = t.warnings;
                        lt.warnings = !!n,
                        J = lt.warnings,
                        B.isObject(n) && "wForgottenReturn"in n && (J = !!n.wForgottenReturn)
                    }
                    if ("cancellation"in t && t.cancellation && !lt.cancellation) {
                        if (z.haveItemsQueued())
                            throw new Error("cannot enable cancellation after promises are in use");
                        e.prototype._clearCancellationData = f,
                        e.prototype._propagateFrom = h,
                        e.prototype._onCancel = c,
                        e.prototype._setOnCancel = l,
                        e.prototype._attachCancellationCallback = u,
                        e.prototype._execute = a,
                        st = h,
                        lt.cancellation = !0
                    }
                    if ("monitoring"in t && (t.monitoring && !lt.monitoring ? (lt.monitoring = !0,
                    e.prototype._fireEvent = ot) : !t.monitoring && lt.monitoring && (lt.monitoring = !1,
                    e.prototype._fireEvent = s)),
                    "asyncHooks"in t && B.nodeSupportsAsyncResource) {
                        var o = lt.asyncHooks
                          , p = !!t.asyncHooks;
                        o !== p && (lt.asyncHooks = p,
                        p ? r() : i())
                    }
                    return e
                }
                ,
                e.prototype._fireEvent = s,
                e.prototype._execute = function(t, e, n) {
                    try {
                        t(e, n)
                    } catch (t) {
                        return t
                    }
                }
                ,
                e.prototype._onCancel = function() {}
                ,
                e.prototype._setOnCancel = function(t) {}
                ,
                e.prototype._attachCancellationCallback = function(t) {}
                ,
                e.prototype._captureStackTrace = function() {}
                ,
                e.prototype._attachExtraTrace = function() {}
                ,
                e.prototype._dereferenceTrace = function() {}
                ,
                e.prototype._clearCancellationData = function() {}
                ,
                e.prototype._propagateFrom = function(t, e) {}
                ;
                var st = p
                  , at = function() {
                    return !1
                }
                  , ut = /[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;
                B.inherits(D, Error),
                n.CapturedTrace = D,
                D.prototype.uncycle = function() {
                    var t = this._length;
                    if (!(t < 2)) {
                        for (var e = [], n = {}, r = 0, i = this; void 0 !== i; ++r)
                            e.push(i),
                            i = i._parent;
                        t = this._length = r;
                        for (var r = t - 1; r >= 0; --r) {
                            var o = e[r].stack;
                            void 0 === n[o] && (n[o] = r)
                        }
                        for (var r = 0; r < t; ++r) {
                            var s = e[r].stack
                              , a = n[s];
                            if (void 0 !== a && a !== r) {
                                a > 0 && (e[a - 1]._parent = void 0,
                                e[a - 1]._length = 1),
                                e[r]._parent = void 0,
                                e[r]._length = 1;
                                var u = r > 0 ? e[r - 1] : this;
                                a < t - 1 ? (u._parent = e[a + 1],
                                u._parent.uncycle(),
                                u._length = u._parent._length + 1) : (u._parent = void 0,
                                u._length = 1);
                                for (var c = u._length + 1, l = r - 2; l >= 0; --l)
                                    e[l]._length = c,
                                    c++;
                                return
                            }
                        }
                    }
                }
                ,
                D.prototype.attachExtraTrace = function(t) {
                    if (!t.__stackCleaned__) {
                        this.uncycle();
                        for (var e = k(t), n = e.message, r = [e.stack], i = this; void 0 !== i; )
                            r.push(C(i.stack.split("\n"))),
                            i = i._parent;
                        T(r),
                        x(r),
                        B.notEnumerableProp(t, "stack", w(n, r)),
                        B.notEnumerableProp(t, "__stackCleaned__", !0)
                    }
                }
                ;
                var ct = function() {
                    var t = /^\s*at\s*/
                      , e = function(t, e) {
                        return "string" == typeof t ? t : void 0 !== e.name && void 0 !== e.message ? e.toString() : A(e)
                    };
                    if ("number" == typeof Error.stackTraceLimit && "function" == typeof Error.captureStackTrace) {
                        Error.stackTraceLimit += 6,
                        Q = t,
                        X = e;
                        var n = Error.captureStackTrace;
                        return at = function(t) {
                            return W.test(t)
                        }
                        ,
                        function(t, e) {
                            Error.stackTraceLimit += 6,
                            n(t, e),
                            Error.stackTraceLimit -= 6
                        }
                    }
                    var r = new Error;
                    if ("string" == typeof r.stack && r.stack.split("\n")[0].indexOf("stackDetection@") >= 0)
                        return Q = /@/,
                        X = e,
                        G = !0,
                        function(t) {
                            t.stack = (new Error).stack
                        }
                        ;
                    var i;
                    try {
                        throw new Error
                    } catch (t) {
                        i = "stack"in t
                    }
                    return "stack"in r || !i || "number" != typeof Error.stackTraceLimit ? (X = function(t, e) {
                        return "string" == typeof t ? t : "object" != typeof e && "function" != typeof e || void 0 === e.name || void 0 === e.message ? A(e) : e.toString()
                    }
                    ,
                    null) : (Q = t,
                    X = e,
                    function(t) {
                        Error.stackTraceLimit += 6;
                        try {
                            throw new Error
                        } catch (e) {
                            t.stack = e.stack
                        }
                        Error.stackTraceLimit -= 6
                    }
                    )
                }();
                "undefined" != typeof console && void 0 !== console.warn && (L = function(t) {
                    console.warn(t)
                }
                ,
                B.isNode && process.stderr.isTTY ? L = function(t, e) {
                    var n = e ? "[33m" : "[31m";
                    console.warn(n + t + "[0m\n")
                }
                : B.isNode || "string" != typeof (new Error).stack || (L = function(t, e) {
                    console.warn("%c" + t, e ? "color: darkorange" : "color: red")
                }
                ));
                var lt = {
                    warnings: K,
                    longStackTraces: !1,
                    cancellation: !1,
                    monitoring: !1,
                    asyncHooks: !1
                };
                return Z && e.longStackTraces(),
                {
                    asyncHooks: function() {
                        return lt.asyncHooks
                    },
                    longStackTraces: function() {
                        return lt.longStackTraces
                    },
                    warnings: function() {
                        return lt.warnings
                    },
                    cancellation: function() {
                        return lt.cancellation
                    },
                    monitoring: function() {
                        return lt.monitoring
                    },
                    propagateFromFunction: function() {
                        return st
                    },
                    boundValueFunction: function() {
                        return d
                    },
                    checkForgottenReturns: y,
                    setBounds: F,
                    warn: b,
                    deprecated: _,
                    CapturedTrace: D,
                    fireDomEvent: nt,
                    fireGlobalEvent: rt
                }
            }
        }
        , {
            "./errors": 12,
            "./es5": 13,
            "./util": 36
        }],
        10: [function(t, e, n) {
            "use strict";
            e.exports = function(t) {
                function e() {
                    return this.value
                }
                function n() {
                    throw this.reason
                }
                t.prototype.return = t.prototype.thenReturn = function(n) {
                    return n instanceof t && n.suppressUnhandledRejections(),
                    this._then(e, void 0, void 0, {
                        value: n
                    }, void 0)
                }
                ,
                t.prototype.throw = t.prototype.thenThrow = function(t) {
                    return this._then(n, void 0, void 0, {
                        reason: t
                    }, void 0)
                }
                ,
                t.prototype.catchThrow = function(t) {
                    if (arguments.length <= 1)
                        return this._then(void 0, n, void 0, {
                            reason: t
                        }, void 0);
                    var e = arguments[1]
                      , r = function() {
                        throw e
                    };
                    return this.caught(t, r)
                }
                ,
                t.prototype.catchReturn = function(n) {
                    if (arguments.length <= 1)
                        return n instanceof t && n.suppressUnhandledRejections(),
                        this._then(void 0, e, void 0, {
                            value: n
                        }, void 0);
                    var r = arguments[1];
                    r instanceof t && r.suppressUnhandledRejections();
                    var i = function() {
                        return r
                    };
                    return this.caught(n, i)
                }
            }
        }
        , {}],
        11: [function(t, e, n) {
            "use strict";
            e.exports = function(t, e) {
                function n() {
                    return o(this)
                }
                function r(t, n) {
                    return i(t, n, e, e)
                }
                var i = t.reduce
                  , o = t.all;
                t.prototype.each = function(t) {
                    return i(this, t, e, 0)._then(n, void 0, void 0, this, void 0)
                }
                ,
                t.prototype.mapSeries = function(t) {
                    return i(this, t, e, e)
                }
                ,
                t.each = function(t, r) {
                    return i(t, r, e, 0)._then(n, void 0, void 0, t, void 0)
                }
                ,
                t.mapSeries = r
            }
        }
        , {}],
        12: [function(t, e, n) {
            "use strict";
            function r(t, e) {
                function n(r) {
                    if (!(this instanceof n))
                        return new n(r);
                    f(this, "message", "string" == typeof r ? r : e),
                    f(this, "name", t),
                    Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : Error.call(this)
                }
                return l(n, Error),
                n
            }
            function i(t) {
                if (!(this instanceof i))
                    return new i(t);
                f(this, "name", "OperationalError"),
                f(this, "message", t),
                this.cause = t,
                this.isOperational = !0,
                t instanceof Error ? (f(this, "message", t.message),
                f(this, "stack", t.stack)) : Error.captureStackTrace && Error.captureStackTrace(this, this.constructor)
            }
            var o, s, a = t("./es5"), u = a.freeze, c = t("./util"), l = c.inherits, f = c.notEnumerableProp, h = r("Warning", "warning"), p = r("CancellationError", "cancellation error"), d = r("TimeoutError", "timeout error"), v = r("AggregateError", "aggregate error");
            try {
                o = TypeError,
                s = RangeError
            } catch (t) {
                o = r("TypeError", "type error"),
                s = r("RangeError", "range error")
            }
            for (var g = "join pop push shift unshift slice filter forEach some every map indexOf lastIndexOf reduce reduceRight sort reverse".split(" "), m = 0; m < g.length; ++m)
                "function" == typeof Array.prototype[g[m]] && (v.prototype[g[m]] = Array.prototype[g[m]]);
            a.defineProperty(v.prototype, "length", {
                value: 0,
                configurable: !1,
                writable: !0,
                enumerable: !0
            }),
            v.prototype.isOperational = !0;
            var y = 0;
            v.prototype.toString = function() {
                var t = Array(4 * y + 1).join(" ")
                  , e = "\n" + t + "AggregateError of:\n";
                y++,
                t = Array(4 * y + 1).join(" ");
                for (var n = 0; n < this.length; ++n) {
                    for (var r = this[n] === this ? "[Circular AggregateError]" : this[n] + "", i = r.split("\n"), o = 0; o < i.length; ++o)
                        i[o] = t + i[o];
                    r = i.join("\n"),
                    e += r + "\n"
                }
                return y--,
                e
            }
            ,
            l(i, Error);
            var _ = Error.__BluebirdErrorTypes__;
            _ || (_ = u({
                CancellationError: p,
                TimeoutError: d,
                OperationalError: i,
                RejectionError: i,
                AggregateError: v
            }),
            a.defineProperty(Error, "__BluebirdErrorTypes__", {
                value: _,
                writable: !1,
                enumerable: !1,
                configurable: !1
            })),
            e.exports = {
                Error: Error,
                TypeError: o,
                RangeError: s,
                CancellationError: _.CancellationError,
                OperationalError: _.OperationalError,
                TimeoutError: _.TimeoutError,
                AggregateError: _.AggregateError,
                Warning: h
            }
        }
        , {
            "./es5": 13,
            "./util": 36
        }],
        13: [function(t, e, n) {
            var r = function() {
                "use strict";
                return void 0 === this
            }();
            if (r)
                e.exports = {
                    freeze: Object.freeze,
                    defineProperty: Object.defineProperty,
                    getDescriptor: Object.getOwnPropertyDescriptor,
                    keys: Object.keys,
                    names: Object.getOwnPropertyNames,
                    getPrototypeOf: Object.getPrototypeOf,
                    isArray: Array.isArray,
                    isES5: r,
                    propertyIsWritable: function(t, e) {
                        var n = Object.getOwnPropertyDescriptor(t, e);
                        return !(n && !n.writable && !n.set)
                    }
                };
            else {
                var i = {}.hasOwnProperty
                  , o = {}.toString
                  , s = {}.constructor.prototype
                  , a = function(t) {
                    var e = [];
                    for (var n in t)
                        i.call(t, n) && e.push(n);
                    return e
                }
                  , u = function(t, e) {
                    return {
                        value: t[e]
                    }
                }
                  , c = function(t, e, n) {
                    return t[e] = n.value,
                    t
                }
                  , l = function(t) {
                    return t
                }
                  , f = function(t) {
                    try {
                        return Object(t).constructor.prototype
                    } catch (t) {
                        return s
                    }
                }
                  , h = function(t) {
                    try {
                        return "[object Array]" === o.call(t)
                    } catch (t) {
                        return !1
                    }
                };
                e.exports = {
                    isArray: h,
                    keys: a,
                    names: a,
                    defineProperty: c,
                    getDescriptor: u,
                    freeze: l,
                    getPrototypeOf: f,
                    isES5: r,
                    propertyIsWritable: function() {
                        return !0
                    }
                }
            }
        }
        , {}],
        14: [function(t, e, n) {
            "use strict";
            e.exports = function(t, e) {
                var n = t.map;
                t.prototype.filter = function(t, r) {
                    return n(this, t, r, e)
                }
                ,
                t.filter = function(t, r, i) {
                    return n(t, r, i, e)
                }
            }
        }
        , {}],
        15: [function(t, e, n) {
            "use strict";
            e.exports = function(e, n, r) {
                function i(t, e, n) {
                    this.promise = t,
                    this.type = e,
                    this.handler = n,
                    this.called = !1,
                    this.cancelPromise = null
                }
                function o(t) {
                    this.finallyHandler = t
                }
                function s(t, e) {
                    return null != t.cancelPromise && (arguments.length > 1 ? t.cancelPromise._reject(e) : t.cancelPromise._cancel(),
                    t.cancelPromise = null,
                    !0)
                }
                function a() {
                    return c.call(this, this.promise._target()._settledValue())
                }
                function u(t) {
                    if (!s(this, t))
                        return h.e = t,
                        h
                }
                function c(t) {
                    var i = this.promise
                      , c = this.handler;
                    if (!this.called) {
                        this.called = !0;
                        var l = this.isFinallyHandler() ? c.call(i._boundValue()) : c.call(i._boundValue(), t);
                        if (l === r)
                            return l;
                        if (void 0 !== l) {
                            i._setReturnedNonUndefined();
                            var p = n(l, i);
                            if (p instanceof e) {
                                if (null != this.cancelPromise) {
                                    if (p._isCancelled()) {
                                        var d = new f("late cancellation observer");
                                        return i._attachExtraTrace(d),
                                        h.e = d,
                                        h
                                    }
                                    p.isPending() && p._attachCancellationCallback(new o(this))
                                }
                                return p._then(a, u, void 0, this, void 0)
                            }
                        }
                    }
                    return i.isRejected() ? (s(this),
                    h.e = t,
                    h) : (s(this),
                    t)
                }
                var l = t("./util")
                  , f = e.CancellationError
                  , h = l.errorObj
                  , p = t("./catch_filter")(r);
                return i.prototype.isFinallyHandler = function() {
                    return 0 === this.type
                }
                ,
                o.prototype._resultCancelled = function() {
                    s(this.finallyHandler)
                }
                ,
                e.prototype._passThrough = function(t, e, n, r) {
                    return "function" != typeof t ? this.then() : this._then(n, r, void 0, new i(this,e,t), void 0)
                }
                ,
                e.prototype.lastly = e.prototype.finally = function(t) {
                    return this._passThrough(t, 0, c, c)
                }
                ,
                e.prototype.tap = function(t) {
                    return this._passThrough(t, 1, c)
                }
                ,
                e.prototype.tapCatch = function(t) {
                    var n = arguments.length;
                    if (1 === n)
                        return this._passThrough(t, 1, void 0, c);
                    var r, i = new Array(n - 1), o = 0;
                    for (r = 0; r < n - 1; ++r) {
                        var s = arguments[r];
                        if (!l.isObject(s))
                            return e.reject(new TypeError("tapCatch statement predicate: expecting an object but got " + l.classString(s)));
                        i[o++] = s
                    }
                    i.length = o;
                    var a = arguments[r];
                    return this._passThrough(p(i, a, this), 1, void 0, c)
                }
                ,
                i
            }
        }
        , {
            "./catch_filter": 7,
            "./util": 36
        }],
        16: [function(t, e, n) {
            "use strict";
            e.exports = function(e, n, r, i, o, s) {
                function a(t, n, r) {
                    for (var o = 0; o < n.length; ++o) {
                        r._pushContext();
                        var s = p(n[o])(t);
                        if (r._popContext(),
                        s === h) {
                            r._pushContext();
                            var a = e.reject(h.e);
                            return r._popContext(),
                            a
                        }
                        var u = i(s, r);
                        if (u instanceof e)
                            return u
                    }
                    return null
                }
                function u(t, n, i, o) {
                    if (s.cancellation()) {
                        var a = new e(r)
                          , u = this._finallyPromise = new e(r);
                        this._promise = a.lastly(function() {
                            return u
                        }),
                        a._captureStackTrace(),
                        a._setOnCancel(this)
                    } else {
                        (this._promise = new e(r))._captureStackTrace()
                    }
                    this._stack = o,
                    this._generatorFunction = t,
                    this._receiver = n,
                    this._generator = void 0,
                    this._yieldHandlers = "function" == typeof i ? [i].concat(d) : d,
                    this._yieldedPromise = null,
                    this._cancellationPhase = !1
                }
                var c = t("./errors")
                  , l = c.TypeError
                  , f = t("./util")
                  , h = f.errorObj
                  , p = f.tryCatch
                  , d = [];
                f.inherits(u, o),
                u.prototype._isResolved = function() {
                    return null === this._promise
                }
                ,
                u.prototype._cleanup = function() {
                    this._promise = this._generator = null,
                    s.cancellation() && null !== this._finallyPromise && (this._finallyPromise._fulfill(),
                    this._finallyPromise = null)
                }
                ,
                u.prototype._promiseCancelled = function() {
                    if (!this._isResolved()) {
                        var t, n = void 0 !== this._generator.return;
                        if (n)
                            this._promise._pushContext(),
                            t = p(this._generator.return).call(this._generator, void 0),
                            this._promise._popContext();
                        else {
                            var r = new e.CancellationError("generator .return() sentinel");
                            e.coroutine.returnSentinel = r,
                            this._promise._attachExtraTrace(r),
                            this._promise._pushContext(),
                            t = p(this._generator.throw).call(this._generator, r),
                            this._promise._popContext()
                        }
                        this._cancellationPhase = !0,
                        this._yieldedPromise = null,
                        this._continue(t)
                    }
                }
                ,
                u.prototype._promiseFulfilled = function(t) {
                    this._yieldedPromise = null,
                    this._promise._pushContext();
                    var e = p(this._generator.next).call(this._generator, t);
                    this._promise._popContext(),
                    this._continue(e)
                }
                ,
                u.prototype._promiseRejected = function(t) {
                    this._yieldedPromise = null,
                    this._promise._attachExtraTrace(t),
                    this._promise._pushContext();
                    var e = p(this._generator.throw).call(this._generator, t);
                    this._promise._popContext(),
                    this._continue(e)
                }
                ,
                u.prototype._resultCancelled = function() {
                    if (this._yieldedPromise instanceof e) {
                        var t = this._yieldedPromise;
                        this._yieldedPromise = null,
                        t.cancel()
                    }
                }
                ,
                u.prototype.promise = function() {
                    return this._promise
                }
                ,
                u.prototype._run = function() {
                    this._generator = this._generatorFunction.call(this._receiver),
                    this._receiver = this._generatorFunction = void 0,
                    this._promiseFulfilled(void 0)
                }
                ,
                u.prototype._continue = function(t) {
                    var n = this._promise;
                    if (t === h)
                        return this._cleanup(),
                        this._cancellationPhase ? n.cancel() : n._rejectCallback(t.e, !1);
                    var r = t.value;
                    if (!0 === t.done)
                        return this._cleanup(),
                        this._cancellationPhase ? n.cancel() : n._resolveCallback(r);
                    var o = i(r, this._promise);
                    if (!(o instanceof e) && null === (o = a(o, this._yieldHandlers, this._promise)))
                        return void this._promiseRejected(new l("A value %s was yielded that could not be treated as a promise\n\n    See http://goo.gl/MqrFmX\n\n".replace("%s", String(r)) + "From coroutine:\n" + this._stack.split("\n").slice(1, -7).join("\n")));
                    o = o._target();
                    var s = o._bitField;
                    0 == (50397184 & s) ? (this._yieldedPromise = o,
                    o._proxy(this, null)) : 0 != (33554432 & s) ? e._async.invoke(this._promiseFulfilled, this, o._value()) : 0 != (16777216 & s) ? e._async.invoke(this._promiseRejected, this, o._reason()) : this._promiseCancelled()
                }
                ,
                e.coroutine = function(t, e) {
                    if ("function" != typeof t)
                        throw new l("generatorFunction must be a function\n\n    See http://goo.gl/MqrFmX\n");
                    var n = Object(e).yieldHandler
                      , r = u
                      , i = (new Error).stack;
                    return function() {
                        var e = t.apply(this, arguments)
                          , o = new r(void 0,void 0,n,i)
                          , s = o.promise();
                        return o._generator = e,
                        o._promiseFulfilled(void 0),
                        s
                    }
                }
                ,
                e.coroutine.addYieldHandler = function(t) {
                    if ("function" != typeof t)
                        throw new l("expecting a function but got " + f.classString(t));
                    d.push(t)
                }
                ,
                e.spawn = function(t) {
                    if (s.deprecated("Promise.spawn()", "Promise.coroutine()"),
                    "function" != typeof t)
                        return n("generatorFunction must be a function\n\n    See http://goo.gl/MqrFmX\n");
                    var r = new u(t,this)
                      , i = r.promise();
                    return r._run(e.spawn),
                    i
                }
            }
        }
        , {
            "./errors": 12,
            "./util": 36
        }],
        17: [function(t, e, n) {
            "use strict";
            e.exports = function(e, n, r, i, o) {
                var s = t("./util");
                s.canEvaluate,
                s.tryCatch,
                s.errorObj;
                e.join = function() {
                    var t, e = arguments.length - 1;
                    if (e > 0 && "function" == typeof arguments[e]) {
                        t = arguments[e];
                        var r
                    }
                    var i = [].slice.call(arguments);
                    t && i.pop();
                    var r = new n(i).promise();
                    return void 0 !== t ? r.spread(t) : r
                }
            }
        }
        , {
            "./util": 36
        }],
        18: [function(t, e, n) {
            "use strict";
            e.exports = function(e, n, r, i, o, s) {
                function a(t, n, r, i) {
                    this.constructor$(t),
                    this._promise._captureStackTrace();
                    var s = e._getContext();
                    if (this._callback = c.contextBind(s, n),
                    this._preservedValues = i === o ? new Array(this.length()) : null,
                    this._limit = r,
                    this._inFlight = 0,
                    this._queue = [],
                    h.invoke(this._asyncInit, this, void 0),
                    c.isArray(t))
                        for (var a = 0; a < t.length; ++a) {
                            var u = t[a];
                            u instanceof e && u.suppressUnhandledRejections()
                        }
                }
                function u(t, n, i, o) {
                    if ("function" != typeof n)
                        return r("expecting a function but got " + c.classString(n));
                    var s = 0;
                    if (void 0 !== i) {
                        if ("object" != typeof i || null === i)
                            return e.reject(new TypeError("options argument must be an object but it is " + c.classString(i)));
                        if ("number" != typeof i.concurrency)
                            return e.reject(new TypeError("'concurrency' must be a number but it is " + c.classString(i.concurrency)));
                        s = i.concurrency
                    }
                    return s = "number" == typeof s && isFinite(s) && s >= 1 ? s : 0,
                    new a(t,n,s,o).promise()
                }
                var c = t("./util")
                  , l = c.tryCatch
                  , f = c.errorObj
                  , h = e._async;
                c.inherits(a, n),
                a.prototype._asyncInit = function() {
                    this._init$(void 0, -2)
                }
                ,
                a.prototype._init = function() {}
                ,
                a.prototype._promiseFulfilled = function(t, n) {
                    var r = this._values
                      , o = this.length()
                      , a = this._preservedValues
                      , u = this._limit;
                    if (n < 0) {
                        if (n = -1 * n - 1,
                        r[n] = t,
                        u >= 1 && (this._inFlight--,
                        this._drainQueue(),
                        this._isResolved()))
                            return !0
                    } else {
                        if (u >= 1 && this._inFlight >= u)
                            return r[n] = t,
                            this._queue.push(n),
                            !1;
                        null !== a && (a[n] = t);
                        var c = this._promise
                          , h = this._callback
                          , p = c._boundValue();
                        c._pushContext();
                        var d = l(h).call(p, t, n, o)
                          , v = c._popContext();
                        if (s.checkForgottenReturns(d, v, null !== a ? "Promise.filter" : "Promise.map", c),
                        d === f)
                            return this._reject(d.e),
                            !0;
                        var g = i(d, this._promise);
                        if (g instanceof e) {
                            g = g._target();
                            var m = g._bitField;
                            if (0 == (50397184 & m))
                                return u >= 1 && this._inFlight++,
                                r[n] = g,
                                g._proxy(this, -1 * (n + 1)),
                                !1;
                            if (0 == (33554432 & m))
                                return 0 != (16777216 & m) ? (this._reject(g._reason()),
                                !0) : (this._cancel(),
                                !0);
                            d = g._value()
                        }
                        r[n] = d
                    }
                    return ++this._totalResolved >= o && (null !== a ? this._filter(r, a) : this._resolve(r),
                    !0)
                }
                ,
                a.prototype._drainQueue = function() {
                    for (var t = this._queue, e = this._limit, n = this._values; t.length > 0 && this._inFlight < e; ) {
                        if (this._isResolved())
                            return;
                        var r = t.pop();
                        this._promiseFulfilled(n[r], r)
                    }
                }
                ,
                a.prototype._filter = function(t, e) {
                    for (var n = e.length, r = new Array(n), i = 0, o = 0; o < n; ++o)
                        t[o] && (r[i++] = e[o]);
                    r.length = i,
                    this._resolve(r)
                }
                ,
                a.prototype.preservedValues = function() {
                    return this._preservedValues
                }
                ,
                e.prototype.map = function(t, e) {
                    return u(this, t, e, null)
                }
                ,
                e.map = function(t, e, n, r) {
                    return u(t, e, n, r)
                }
            }
        }
        , {
            "./util": 36
        }],
        19: [function(t, e, n) {
            "use strict";
            e.exports = function(e, n, r, i, o) {
                var s = t("./util")
                  , a = s.tryCatch;
                e.method = function(t) {
                    if ("function" != typeof t)
                        throw new e.TypeError("expecting a function but got " + s.classString(t));
                    return function() {
                        var r = new e(n);
                        r._captureStackTrace(),
                        r._pushContext();
                        var i = a(t).apply(this, arguments)
                          , s = r._popContext();
                        return o.checkForgottenReturns(i, s, "Promise.method", r),
                        r._resolveFromSyncValue(i),
                        r
                    }
                }
                ,
                e.attempt = e.try = function(t) {
                    if ("function" != typeof t)
                        return i("expecting a function but got " + s.classString(t));
                    var r = new e(n);
                    r._captureStackTrace(),
                    r._pushContext();
                    var u;
                    if (arguments.length > 1) {
                        o.deprecated("calling Promise.try with more than 1 argument");
                        var c = arguments[1]
                          , l = arguments[2];
                        u = s.isArray(c) ? a(t).apply(l, c) : a(t).call(l, c)
                    } else
                        u = a(t)();
                    var f = r._popContext();
                    return o.checkForgottenReturns(u, f, "Promise.try", r),
                    r._resolveFromSyncValue(u),
                    r
                }
                ,
                e.prototype._resolveFromSyncValue = function(t) {
                    t === s.errorObj ? this._rejectCallback(t.e, !1) : this._resolveCallback(t, !0)
                }
            }
        }
        , {
            "./util": 36
        }],
        20: [function(t, e, n) {
            "use strict";
            function r(t) {
                return t instanceof Error && l.getPrototypeOf(t) === Error.prototype
            }
            function i(t) {
                var e;
                if (r(t)) {
                    e = new c(t),
                    e.name = t.name,
                    e.message = t.message,
                    e.stack = t.stack;
                    for (var n = l.keys(t), i = 0; i < n.length; ++i) {
                        var o = n[i];
                        f.test(o) || (e[o] = t[o])
                    }
                    return e
                }
                return s.markAsOriginatingFromRejection(t),
                t
            }
            function o(t, e) {
                return function(n, r) {
                    if (null !== t) {
                        if (n) {
                            var o = i(a(n));
                            t._attachExtraTrace(o),
                            t._reject(o)
                        } else if (e) {
                            var s = [].slice.call(arguments, 1);
                            t._fulfill(s)
                        } else
                            t._fulfill(r);
                        t = null
                    }
                }
            }
            var s = t("./util")
              , a = s.maybeWrapAsError
              , u = t("./errors")
              , c = u.OperationalError
              , l = t("./es5")
              , f = /^(?:name|message|stack|cause)$/;
            e.exports = o
        }
        , {
            "./errors": 12,
            "./es5": 13,
            "./util": 36
        }],
        21: [function(t, e, n) {
            "use strict";
            e.exports = function(e) {
                function n(t, e) {
                    var n = this;
                    if (!o.isArray(t))
                        return r.call(n, t, e);
                    var i = a(e).apply(n._boundValue(), [null].concat(t));
                    i === u && s.throwLater(i.e)
                }
                function r(t, e) {
                    var n = this
                      , r = n._boundValue()
                      , i = void 0 === t ? a(e).call(r, null) : a(e).call(r, null, t);
                    i === u && s.throwLater(i.e)
                }
                function i(t, e) {
                    var n = this;
                    if (!t) {
                        var r = new Error(t + "");
                        r.cause = t,
                        t = r
                    }
                    var i = a(e).call(n._boundValue(), t);
                    i === u && s.throwLater(i.e)
                }
                var o = t("./util")
                  , s = e._async
                  , a = o.tryCatch
                  , u = o.errorObj;
                e.prototype.asCallback = e.prototype.nodeify = function(t, e) {
                    if ("function" == typeof t) {
                        var o = r;
                        void 0 !== e && Object(e).spread && (o = n),
                        this._then(o, i, void 0, this, t)
                    }
                    return this
                }
            }
        }
        , {
            "./util": 36
        }],
        22: [function(t, e, n) {
            "use strict";
            e.exports = function() {
                function n() {}
                function r(t, e) {
                    if (null == t || t.constructor !== i)
                        throw new E("the promise constructor cannot be invoked directly\n\n    See http://goo.gl/MqrFmX\n");
                    if ("function" != typeof e)
                        throw new E("expecting a function but got " + h.classString(e))
                }
                function i(t) {
                    t !== S && r(this, t),
                    this._bitField = 0,
                    this._fulfillmentHandler0 = void 0,
                    this._rejectionHandler0 = void 0,
                    this._promise0 = void 0,
                    this._receiver0 = void 0,
                    this._resolveFromExecutor(t),
                    this._promiseCreated(),
                    this._fireEvent("promiseCreated", this)
                }
                function o(t) {
                    this.promise._resolveCallback(t)
                }
                function s(t) {
                    this.promise._rejectCallback(t, !1)
                }
                function a(t) {
                    var e = new i(S);
                    e._fulfillmentHandler0 = t,
                    e._rejectionHandler0 = t,
                    e._promise0 = t,
                    e._receiver0 = t
                }
                var u = function() {
                    return new E("circular promise resolution chain\n\n    See http://goo.gl/MqrFmX\n")
                }
                  , c = function() {
                    return new i.PromiseInspection(this._target())
                }
                  , l = function(t) {
                    return i.reject(new E(t))
                }
                  , f = {}
                  , h = t("./util");
                h.setReflectHandler(c);
                var p = function() {
                    var t = process.domain;
                    return void 0 === t ? null : t
                }
                  , d = function() {
                    return null
                }
                  , v = function() {
                    return {
                        domain: p(),
                        async: null
                    }
                }
                  , g = h.isNode && h.nodeSupportsAsyncResource ? t("async_hooks").AsyncResource : null
                  , m = function() {
                    return {
                        domain: p(),
                        async: new g("Bluebird::Promise")
                    }
                }
                  , y = h.isNode ? v : d;
                h.notEnumerableProp(i, "_getContext", y);
                var _ = function() {
                    y = m,
                    h.notEnumerableProp(i, "_getContext", m)
                }
                  , b = function() {
                    y = v,
                    h.notEnumerableProp(i, "_getContext", v)
                }
                  , w = t("./es5")
                  , x = t("./async")
                  , T = new x;
                w.defineProperty(i, "_async", {
                    value: T
                });
                var C = t("./errors")
                  , E = i.TypeError = C.TypeError;
                i.RangeError = C.RangeError;
                var k = i.CancellationError = C.CancellationError;
                i.TimeoutError = C.TimeoutError,
                i.OperationalError = C.OperationalError,
                i.RejectionError = C.OperationalError,
                i.AggregateError = C.AggregateError;
                var S = function() {}
                  , j = {}
                  , A = {}
                  , O = t("./thenables")(i, S)
                  , R = t("./promise_array")(i, S, O, l, n)
                  , P = t("./context")(i)
                  , F = P.create
                  , D = t("./debuggability")(i, P, _, b)
                  , I = (D.CapturedTrace,
                t("./finally")(i, O, A))
                  , N = t("./catch_filter")(A)
                  , L = t("./nodeback")
                  , $ = h.errorObj
                  , z = h.tryCatch;
                return i.prototype.toString = function() {
                    return "[object Promise]"
                }
                ,
                i.prototype.caught = i.prototype.catch = function(t) {
                    var e = arguments.length;
                    if (e > 1) {
                        var n, r = new Array(e - 1), i = 0;
                        for (n = 0; n < e - 1; ++n) {
                            var o = arguments[n];
                            if (!h.isObject(o))
                                return l("Catch statement predicate: expecting an object but got " + h.classString(o));
                            r[i++] = o
                        }
                        if (r.length = i,
                        "function" != typeof (t = arguments[n]))
                            throw new E("The last argument to .catch() must be a function, got " + h.toString(t));
                        return this.then(void 0, N(r, t, this))
                    }
                    return this.then(void 0, t)
                }
                ,
                i.prototype.reflect = function() {
                    return this._then(c, c, void 0, this, void 0)
                }
                ,
                i.prototype.then = function(t, e) {
                    if (D.warnings() && arguments.length > 0 && "function" != typeof t && "function" != typeof e) {
                        var n = ".then() only accepts functions but was passed: " + h.classString(t);
                        arguments.length > 1 && (n += ", " + h.classString(e)),
                        this._warn(n)
                    }
                    return this._then(t, e, void 0, void 0, void 0)
                }
                ,
                i.prototype.done = function(t, e) {
                    this._then(t, e, void 0, void 0, void 0)._setIsFinal()
                }
                ,
                i.prototype.spread = function(t) {
                    return "function" != typeof t ? l("expecting a function but got " + h.classString(t)) : this.all()._then(t, void 0, void 0, j, void 0)
                }
                ,
                i.prototype.toJSON = function() {
                    var t = {
                        isFulfilled: !1,
                        isRejected: !1,
                        fulfillmentValue: void 0,
                        rejectionReason: void 0
                    };
                    return this.isFulfilled() ? (t.fulfillmentValue = this.value(),
                    t.isFulfilled = !0) : this.isRejected() && (t.rejectionReason = this.reason(),
                    t.isRejected = !0),
                    t
                }
                ,
                i.prototype.all = function() {
                    return arguments.length > 0 && this._warn(".all() was passed arguments but it does not take any"),
                    new R(this).promise()
                }
                ,
                i.prototype.error = function(t) {
                    return this.caught(h.originatesFromRejection, t)
                }
                ,
                i.getNewLibraryCopy = e.exports,
                i.is = function(t) {
                    return t instanceof i
                }
                ,
                i.fromNode = i.fromCallback = function(t) {
                    var e = new i(S);
                    e._captureStackTrace();
                    var n = arguments.length > 1 && !!Object(arguments[1]).multiArgs
                      , r = z(t)(L(e, n));
                    return r === $ && e._rejectCallback(r.e, !0),
                    e._isFateSealed() || e._setAsyncGuaranteed(),
                    e
                }
                ,
                i.all = function(t) {
                    return new R(t).promise()
                }
                ,
                i.cast = function(t) {
                    var e = O(t);
                    return e instanceof i || (e = new i(S),
                    e._captureStackTrace(),
                    e._setFulfilled(),
                    e._rejectionHandler0 = t),
                    e
                }
                ,
                i.resolve = i.fulfilled = i.cast,
                i.reject = i.rejected = function(t) {
                    var e = new i(S);
                    return e._captureStackTrace(),
                    e._rejectCallback(t, !0),
                    e
                }
                ,
                i.setScheduler = function(t) {
                    if ("function" != typeof t)
                        throw new E("expecting a function but got " + h.classString(t));
                    return T.setScheduler(t)
                }
                ,
                i.prototype._then = function(t, e, n, r, o) {
                    var s = void 0 !== o
                      , a = s ? o : new i(S)
                      , u = this._target()
                      , c = u._bitField;
                    s || (a._propagateFrom(this, 3),
                    a._captureStackTrace(),
                    void 0 === r && 0 != (2097152 & this._bitField) && (r = 0 != (50397184 & c) ? this._boundValue() : u === this ? void 0 : this._boundTo),
                    this._fireEvent("promiseChained", this, a));
                    var l = y();
                    if (0 != (50397184 & c)) {
                        var f, p, d = u._settlePromiseCtx;
                        0 != (33554432 & c) ? (p = u._rejectionHandler0,
                        f = t) : 0 != (16777216 & c) ? (p = u._fulfillmentHandler0,
                        f = e,
                        u._unsetRejectionIsUnhandled()) : (d = u._settlePromiseLateCancellationObserver,
                        p = new k("late cancellation observer"),
                        u._attachExtraTrace(p),
                        f = e),
                        T.invoke(d, u, {
                            handler: h.contextBind(l, f),
                            promise: a,
                            receiver: r,
                            value: p
                        })
                    } else
                        u._addCallbacks(t, e, a, r, l);
                    return a
                }
                ,
                i.prototype._length = function() {
                    return 65535 & this._bitField
                }
                ,
                i.prototype._isFateSealed = function() {
                    return 0 != (117506048 & this._bitField)
                }
                ,
                i.prototype._isFollowing = function() {
                    return 67108864 == (67108864 & this._bitField)
                }
                ,
                i.prototype._setLength = function(t) {
                    this._bitField = -65536 & this._bitField | 65535 & t
                }
                ,
                i.prototype._setFulfilled = function() {
                    this._bitField = 33554432 | this._bitField,
                    this._fireEvent("promiseFulfilled", this)
                }
                ,
                i.prototype._setRejected = function() {
                    this._bitField = 16777216 | this._bitField,
                    this._fireEvent("promiseRejected", this)
                }
                ,
                i.prototype._setFollowing = function() {
                    this._bitField = 67108864 | this._bitField,
                    this._fireEvent("promiseResolved", this)
                }
                ,
                i.prototype._setIsFinal = function() {
                    this._bitField = 4194304 | this._bitField
                }
                ,
                i.prototype._isFinal = function() {
                    return (4194304 & this._bitField) > 0
                }
                ,
                i.prototype._unsetCancelled = function() {
                    this._bitField = -65537 & this._bitField
                }
                ,
                i.prototype._setCancelled = function() {
                    this._bitField = 65536 | this._bitField,
                    this._fireEvent("promiseCancelled", this)
                }
                ,
                i.prototype._setWillBeCancelled = function() {
                    this._bitField = 8388608 | this._bitField
                }
                ,
                i.prototype._setAsyncGuaranteed = function() {
                    if (!T.hasCustomScheduler()) {
                        var t = this._bitField;
                        this._bitField = t | (536870912 & t) >> 2 ^ 134217728
                    }
                }
                ,
                i.prototype._setNoAsyncGuarantee = function() {
                    this._bitField = -134217729 & (536870912 | this._bitField)
                }
                ,
                i.prototype._receiverAt = function(t) {
                    var e = 0 === t ? this._receiver0 : this[4 * t - 4 + 3];
                    if (e !== f)
                        return void 0 === e && this._isBound() ? this._boundValue() : e
                }
                ,
                i.prototype._promiseAt = function(t) {
                    return this[4 * t - 4 + 2]
                }
                ,
                i.prototype._fulfillmentHandlerAt = function(t) {
                    return this[4 * t - 4 + 0]
                }
                ,
                i.prototype._rejectionHandlerAt = function(t) {
                    return this[4 * t - 4 + 1]
                }
                ,
                i.prototype._boundValue = function() {}
                ,
                i.prototype._migrateCallback0 = function(t) {
                    var e = (t._bitField,
                    t._fulfillmentHandler0)
                      , n = t._rejectionHandler0
                      , r = t._promise0
                      , i = t._receiverAt(0);
                    void 0 === i && (i = f),
                    this._addCallbacks(e, n, r, i, null)
                }
                ,
                i.prototype._migrateCallbackAt = function(t, e) {
                    var n = t._fulfillmentHandlerAt(e)
                      , r = t._rejectionHandlerAt(e)
                      , i = t._promiseAt(e)
                      , o = t._receiverAt(e);
                    void 0 === o && (o = f),
                    this._addCallbacks(n, r, i, o, null)
                }
                ,
                i.prototype._addCallbacks = function(t, e, n, r, i) {
                    var o = this._length();
                    if (o >= 65531 && (o = 0,
                    this._setLength(0)),
                    0 === o)
                        this._promise0 = n,
                        this._receiver0 = r,
                        "function" == typeof t && (this._fulfillmentHandler0 = h.contextBind(i, t)),
                        "function" == typeof e && (this._rejectionHandler0 = h.contextBind(i, e));
                    else {
                        var s = 4 * o - 4;
                        this[s + 2] = n,
                        this[s + 3] = r,
                        "function" == typeof t && (this[s + 0] = h.contextBind(i, t)),
                        "function" == typeof e && (this[s + 1] = h.contextBind(i, e))
                    }
                    return this._setLength(o + 1),
                    o
                }
                ,
                i.prototype._proxy = function(t, e) {
                    this._addCallbacks(void 0, void 0, e, t, null)
                }
                ,
                i.prototype._resolveCallback = function(t, e) {
                    if (0 == (117506048 & this._bitField)) {
                        if (t === this)
                            return this._rejectCallback(u(), !1);
                        var n = O(t, this);
                        if (!(n instanceof i))
                            return this._fulfill(t);
                        e && this._propagateFrom(n, 2);
                        var r = n._target();
                        if (r === this)
                            return void this._reject(u());
                        var o = r._bitField;
                        if (0 == (50397184 & o)) {
                            var s = this._length();
                            s > 0 && r._migrateCallback0(this);
                            for (var a = 1; a < s; ++a)
                                r._migrateCallbackAt(this, a);
                            this._setFollowing(),
                            this._setLength(0),
                            this._setFollowee(n)
                        } else if (0 != (33554432 & o))
                            this._fulfill(r._value());
                        else if (0 != (16777216 & o))
                            this._reject(r._reason());
                        else {
                            var c = new k("late cancellation observer");
                            r._attachExtraTrace(c),
                            this._reject(c)
                        }
                    }
                }
                ,
                i.prototype._rejectCallback = function(t, e, n) {
                    var r = h.ensureErrorObject(t)
                      , i = r === t;
                    if (!i && !n && D.warnings()) {
                        var o = "a promise was rejected with a non-error: " + h.classString(t);
                        this._warn(o, !0)
                    }
                    this._attachExtraTrace(r, !!e && i),
                    this._reject(t)
                }
                ,
                i.prototype._resolveFromExecutor = function(t) {
                    if (t !== S) {
                        var e = this;
                        this._captureStackTrace(),
                        this._pushContext();
                        var n = !0
                          , r = this._execute(t, function(t) {
                            e._resolveCallback(t)
                        }, function(t) {
                            e._rejectCallback(t, n)
                        });
                        n = !1,
                        this._popContext(),
                        void 0 !== r && e._rejectCallback(r, !0)
                    }
                }
                ,
                i.prototype._settlePromiseFromHandler = function(t, e, n, r) {
                    var i = r._bitField;
                    if (0 == (65536 & i)) {
                        r._pushContext();
                        var o;
                        e === j ? n && "number" == typeof n.length ? o = z(t).apply(this._boundValue(), n) : (o = $,
                        o.e = new E("cannot .spread() a non-array: " + h.classString(n))) : o = z(t).call(e, n);
                        var s = r._popContext();
                        i = r._bitField,
                        0 == (65536 & i) && (o === A ? r._reject(n) : o === $ ? r._rejectCallback(o.e, !1) : (D.checkForgottenReturns(o, s, "", r, this),
                        r._resolveCallback(o)))
                    }
                }
                ,
                i.prototype._target = function() {
                    for (var t = this; t._isFollowing(); )
                        t = t._followee();
                    return t
                }
                ,
                i.prototype._followee = function() {
                    return this._rejectionHandler0
                }
                ,
                i.prototype._setFollowee = function(t) {
                    this._rejectionHandler0 = t
                }
                ,
                i.prototype._settlePromise = function(t, e, r, o) {
                    var s = t instanceof i
                      , a = this._bitField
                      , u = 0 != (134217728 & a);
                    0 != (65536 & a) ? (s && t._invokeInternalOnCancel(),
                    r instanceof I && r.isFinallyHandler() ? (r.cancelPromise = t,
                    z(e).call(r, o) === $ && t._reject($.e)) : e === c ? t._fulfill(c.call(r)) : r instanceof n ? r._promiseCancelled(t) : s || t instanceof R ? t._cancel() : r.cancel()) : "function" == typeof e ? s ? (u && t._setAsyncGuaranteed(),
                    this._settlePromiseFromHandler(e, r, o, t)) : e.call(r, o, t) : r instanceof n ? r._isResolved() || (0 != (33554432 & a) ? r._promiseFulfilled(o, t) : r._promiseRejected(o, t)) : s && (u && t._setAsyncGuaranteed(),
                    0 != (33554432 & a) ? t._fulfill(o) : t._reject(o))
                }
                ,
                i.prototype._settlePromiseLateCancellationObserver = function(t) {
                    var e = t.handler
                      , n = t.promise
                      , r = t.receiver
                      , o = t.value;
                    "function" == typeof e ? n instanceof i ? this._settlePromiseFromHandler(e, r, o, n) : e.call(r, o, n) : n instanceof i && n._reject(o)
                }
                ,
                i.prototype._settlePromiseCtx = function(t) {
                    this._settlePromise(t.promise, t.handler, t.receiver, t.value)
                }
                ,
                i.prototype._settlePromise0 = function(t, e, n) {
                    var r = this._promise0
                      , i = this._receiverAt(0);
                    this._promise0 = void 0,
                    this._receiver0 = void 0,
                    this._settlePromise(r, t, i, e)
                }
                ,
                i.prototype._clearCallbackDataAtIndex = function(t) {
                    var e = 4 * t - 4;
                    this[e + 2] = this[e + 3] = this[e + 0] = this[e + 1] = void 0
                }
                ,
                i.prototype._fulfill = function(t) {
                    var e = this._bitField;
                    if (!((117506048 & e) >>> 16)) {
                        if (t === this) {
                            var n = u();
                            return this._attachExtraTrace(n),
                            this._reject(n)
                        }
                        this._setFulfilled(),
                        this._rejectionHandler0 = t,
                        (65535 & e) > 0 && (0 != (134217728 & e) ? this._settlePromises() : T.settlePromises(this),
                        this._dereferenceTrace())
                    }
                }
                ,
                i.prototype._reject = function(t) {
                    var e = this._bitField;
                    if (!((117506048 & e) >>> 16)) {
                        if (this._setRejected(),
                        this._fulfillmentHandler0 = t,
                        this._isFinal())
                            return T.fatalError(t, h.isNode);
                        (65535 & e) > 0 ? T.settlePromises(this) : this._ensurePossibleRejectionHandled()
                    }
                }
                ,
                i.prototype._fulfillPromises = function(t, e) {
                    for (var n = 1; n < t; n++) {
                        var r = this._fulfillmentHandlerAt(n)
                          , i = this._promiseAt(n)
                          , o = this._receiverAt(n);
                        this._clearCallbackDataAtIndex(n),
                        this._settlePromise(i, r, o, e)
                    }
                }
                ,
                i.prototype._rejectPromises = function(t, e) {
                    for (var n = 1; n < t; n++) {
                        var r = this._rejectionHandlerAt(n)
                          , i = this._promiseAt(n)
                          , o = this._receiverAt(n);
                        this._clearCallbackDataAtIndex(n),
                        this._settlePromise(i, r, o, e)
                    }
                }
                ,
                i.prototype._settlePromises = function() {
                    var t = this._bitField
                      , e = 65535 & t;
                    if (e > 0) {
                        if (0 != (16842752 & t)) {
                            var n = this._fulfillmentHandler0;
                            this._settlePromise0(this._rejectionHandler0, n, t),
                            this._rejectPromises(e, n)
                        } else {
                            var r = this._rejectionHandler0;
                            this._settlePromise0(this._fulfillmentHandler0, r, t),
                            this._fulfillPromises(e, r)
                        }
                        this._setLength(0)
                    }
                    this._clearCancellationData()
                }
                ,
                i.prototype._settledValue = function() {
                    var t = this._bitField;
                    return 0 != (33554432 & t) ? this._rejectionHandler0 : 0 != (16777216 & t) ? this._fulfillmentHandler0 : void 0
                }
                ,
                "undefined" != typeof Symbol && Symbol.toStringTag && w.defineProperty(i.prototype, Symbol.toStringTag, {
                    get: function() {
                        return "Object"
                    }
                }),
                i.defer = i.pending = function() {
                    return D.deprecated("Promise.defer", "new Promise"),
                    {
                        promise: new i(S),
                        resolve: o,
                        reject: s
                    }
                }
                ,
                h.notEnumerableProp(i, "_makeSelfResolutionError", u),
                t("./method")(i, S, O, l, D),
                t("./bind")(i, S, O, D),
                t("./cancel")(i, R, l, D),
                t("./direct_resolve")(i),
                t("./synchronous_inspection")(i),
                t("./join")(i, R, O, S, T),
                i.Promise = i,
                i.version = "3.7.2",
                t("./call_get.js")(i),
                t("./generators.js")(i, l, S, O, n, D),
                t("./map.js")(i, R, l, O, S, D),
                t("./nodeify.js")(i),
                t("./promisify.js")(i, S),
                t("./props.js")(i, R, O, l),
                t("./race.js")(i, S, O, l),
                t("./reduce.js")(i, R, l, O, S, D),
                t("./settle.js")(i, R, D),
                t("./some.js")(i, R, l),
                t("./timers.js")(i, S, D),
                t("./using.js")(i, l, O, F, S, D),
                t("./any.js")(i),
                t("./each.js")(i, S),
                t("./filter.js")(i, S),
                h.toFastProperties(i),
                h.toFastProperties(i.prototype),
                a({
                    a: 1
                }),
                a({
                    b: 2
                }),
                a({
                    c: 3
                }),
                a(1),
                a(function() {}),
                a(void 0),
                a(!1),
                a(new i(S)),
                D.setBounds(x.firstLineError, h.lastLineError),
                i
            }
        }
        , {
            "./any.js": 1,
            "./async": 2,
            "./bind": 3,
            "./call_get.js": 5,
            "./cancel": 6,
            "./catch_filter": 7,
            "./context": 8,
            "./debuggability": 9,
            "./direct_resolve": 10,
            "./each.js": 11,
            "./errors": 12,
            "./es5": 13,
            "./filter.js": 14,
            "./finally": 15,
            "./generators.js": 16,
            "./join": 17,
            "./map.js": 18,
            "./method": 19,
            "./nodeback": 20,
            "./nodeify.js": 21,
            "./promise_array": 23,
            "./promisify.js": 24,
            "./props.js": 25,
            "./race.js": 27,
            "./reduce.js": 28,
            "./settle.js": 30,
            "./some.js": 31,
            "./synchronous_inspection": 32,
            "./thenables": 33,
            "./timers.js": 34,
            "./using.js": 35,
            "./util": 36,
            async_hooks: void 0
        }],
        23: [function(t, e, n) {
            "use strict";
            e.exports = function(e, n, r, i, o) {
                function s(t) {
                    switch (t) {
                    case -2:
                        return [];
                    case -3:
                        return {};
                    case -6:
                        return new Map
                    }
                }
                function a(t) {
                    var r = this._promise = new e(n);
                    t instanceof e && (r._propagateFrom(t, 3),
                    t.suppressUnhandledRejections()),
                    r._setOnCancel(this),
                    this._values = t,
                    this._length = 0,
                    this._totalResolved = 0,
                    this._init(void 0, -2)
                }
                var u = t("./util");
                u.isArray;
                return u.inherits(a, o),
                a.prototype.length = function() {
                    return this._length
                }
                ,
                a.prototype.promise = function() {
                    return this._promise
                }
                ,
                a.prototype._init = function t(n, o) {
                    var a = r(this._values, this._promise);
                    if (a instanceof e) {
                        a = a._target();
                        var c = a._bitField;
                        if (this._values = a,
                        0 == (50397184 & c))
                            return this._promise._setAsyncGuaranteed(),
                            a._then(t, this._reject, void 0, this, o);
                        if (0 == (33554432 & c))
                            return 0 != (16777216 & c) ? this._reject(a._reason()) : this._cancel();
                        a = a._value()
                    }
                    if (null === (a = u.asArray(a))) {
                        var l = i("expecting an array or an iterable object but got " + u.classString(a)).reason();
                        return void this._promise._rejectCallback(l, !1)
                    }
                    if (0 === a.length)
                        return void (-5 === o ? this._resolveEmptyArray() : this._resolve(s(o)));
                    this._iterate(a)
                }
                ,
                a.prototype._iterate = function(t) {
                    var n = this.getActualLength(t.length);
                    this._length = n,
                    this._values = this.shouldCopyValues() ? new Array(n) : this._values;
                    for (var i = this._promise, o = !1, s = null, a = 0; a < n; ++a) {
                        var u = r(t[a], i);
                        u instanceof e ? (u = u._target(),
                        s = u._bitField) : s = null,
                        o ? null !== s && u.suppressUnhandledRejections() : null !== s ? 0 == (50397184 & s) ? (u._proxy(this, a),
                        this._values[a] = u) : o = 0 != (33554432 & s) ? this._promiseFulfilled(u._value(), a) : 0 != (16777216 & s) ? this._promiseRejected(u._reason(), a) : this._promiseCancelled(a) : o = this._promiseFulfilled(u, a)
                    }
                    o || i._setAsyncGuaranteed()
                }
                ,
                a.prototype._isResolved = function() {
                    return null === this._values
                }
                ,
                a.prototype._resolve = function(t) {
                    this._values = null,
                    this._promise._fulfill(t)
                }
                ,
                a.prototype._cancel = function() {
                    !this._isResolved() && this._promise._isCancellable() && (this._values = null,
                    this._promise._cancel())
                }
                ,
                a.prototype._reject = function(t) {
                    this._values = null,
                    this._promise._rejectCallback(t, !1)
                }
                ,
                a.prototype._promiseFulfilled = function(t, e) {
                    return this._values[e] = t,
                    ++this._totalResolved >= this._length && (this._resolve(this._values),
                    !0)
                }
                ,
                a.prototype._promiseCancelled = function() {
                    return this._cancel(),
                    !0
                }
                ,
                a.prototype._promiseRejected = function(t) {
                    return this._totalResolved++,
                    this._reject(t),
                    !0
                }
                ,
                a.prototype._resultCancelled = function() {
                    if (!this._isResolved()) {
                        var t = this._values;
                        if (this._cancel(),
                        t instanceof e)
                            t.cancel();
                        else
                            for (var n = 0; n < t.length; ++n)
                                t[n]instanceof e && t[n].cancel()
                    }
                }
                ,
                a.prototype.shouldCopyValues = function() {
                    return !0
                }
                ,
                a.prototype.getActualLength = function(t) {
                    return t
                }
                ,
                a
            }
        }
        , {
            "./util": 36
        }],
        24: [function(t, e, n) {
            "use strict";
            e.exports = function(e, n) {
                function r(t) {
                    return !w.test(t)
                }
                function i(t) {
                    try {
                        return !0 === t.__isPromisified__
                    } catch (t) {
                        return !1
                    }
                }
                function o(t, e, n) {
                    var r = p.getDataPropertyOrDefault(t, e + n, _);
                    return !!r && i(r)
                }
                function s(t, e, n) {
                    for (var r = 0; r < t.length; r += 2) {
                        var i = t[r];
                        if (n.test(i))
                            for (var o = i.replace(n, ""), s = 0; s < t.length; s += 2)
                                if (t[s] === o)
                                    throw new y("Cannot promisify an API that has normal methods with '%s'-suffix\n\n    See http://goo.gl/MqrFmX\n".replace("%s", e))
                    }
                }
                function a(t, e, n, r) {
                    for (var a = p.inheritedDataKeys(t), u = [], c = 0; c < a.length; ++c) {
                        var l = a[c]
                          , f = t[l]
                          , h = r === x || x(l, f, t);
                        "function" != typeof f || i(f) || o(t, l, e) || !r(l, f, t, h) || u.push(l, f)
                    }
                    return s(u, e, n),
                    u
                }
                function u(t, r, i, o, s, a) {
                    function u() {
                        var i = r;
                        r === h && (i = this);
                        var o = new e(n);
                        o._captureStackTrace();
                        var s = "string" == typeof l && this !== c ? this[l] : t
                          , u = d(o, a);
                        try {
                            s.apply(i, v(arguments, u))
                        } catch (t) {
                            o._rejectCallback(g(t), !0, !0)
                        }
                        return o._isFateSealed() || o._setAsyncGuaranteed(),
                        o
                    }
                    var c = function() {
                        return this
                    }()
                      , l = t;
                    return "string" == typeof l && (t = o),
                    p.notEnumerableProp(u, "__isPromisified__", !0),
                    u
                }
                function c(t, e, n, r, i) {
                    for (var o = new RegExp(T(e) + "$"), s = a(t, e, o, n), u = 0, c = s.length; u < c; u += 2) {
                        var l = s[u]
                          , f = s[u + 1]
                          , d = l + e;
                        if (r === C)
                            t[d] = C(l, h, l, f, e, i);
                        else {
                            var v = r(f, function() {
                                return C(l, h, l, f, e, i)
                            });
                            p.notEnumerableProp(v, "__isPromisified__", !0),
                            t[d] = v
                        }
                    }
                    return p.toFastProperties(t),
                    t
                }
                function l(t, e, n) {
                    return C(t, e, void 0, t, null, n)
                }
                var f, h = {}, p = t("./util"), d = t("./nodeback"), v = p.withAppended, g = p.maybeWrapAsError, m = p.canEvaluate, y = t("./errors").TypeError, _ = {
                    __isPromisified__: !0
                }, b = ["arity", "length", "name", "arguments", "caller", "callee", "prototype", "__isPromisified__"], w = new RegExp("^(?:" + b.join("|") + ")$"), x = function(t) {
                    return p.isIdentifier(t) && "_" !== t.charAt(0) && "constructor" !== t
                }, T = function(t) {
                    return t.replace(/([$])/, "\\$")
                }, C = m ? f : u;
                e.promisify = function(t, e) {
                    if ("function" != typeof t)
                        throw new y("expecting a function but got " + p.classString(t));
                    if (i(t))
                        return t;
                    e = Object(e);
                    var n = void 0 === e.context ? h : e.context
                      , o = !!e.multiArgs
                      , s = l(t, n, o);
                    return p.copyDescriptors(t, s, r),
                    s
                }
                ,
                e.promisifyAll = function(t, e) {
                    if ("function" != typeof t && "object" != typeof t)
                        throw new y("the target of promisifyAll must be an object or a function\n\n    See http://goo.gl/MqrFmX\n");
                    e = Object(e);
                    var n = !!e.multiArgs
                      , r = e.suffix;
                    "string" != typeof r && (r = "Async");
                    var i = e.filter;
                    "function" != typeof i && (i = x);
                    var o = e.promisifier;
                    if ("function" != typeof o && (o = C),
                    !p.isIdentifier(r))
                        throw new RangeError("suffix must be a valid identifier\n\n    See http://goo.gl/MqrFmX\n");
                    for (var s = p.inheritedDataKeys(t), a = 0; a < s.length; ++a) {
                        var u = t[s[a]];
                        "constructor" !== s[a] && p.isClass(u) && (c(u.prototype, r, i, o, n),
                        c(u, r, i, o, n))
                    }
                    return c(t, r, i, o, n)
                }
            }
        }
        , {
            "./errors": 12,
            "./nodeback": 20,
            "./util": 36
        }],
        25: [function(t, e, n) {
            "use strict";
            e.exports = function(e, n, r, i) {
                function o(t) {
                    var e, n = !1;
                    if (void 0 !== a && t instanceof a)
                        e = f(t),
                        n = !0;
                    else {
                        var r = l.keys(t)
                          , i = r.length;
                        e = new Array(2 * i);
                        for (var o = 0; o < i; ++o) {
                            var s = r[o];
                            e[o] = t[s],
                            e[o + i] = s
                        }
                    }
                    this.constructor$(e),
                    this._isMap = n,
                    this._init$(void 0, n ? -6 : -3)
                }
                function s(t) {
                    var n, s = r(t);
                    return c(s) ? (n = s instanceof e ? s._then(e.props, void 0, void 0, void 0, void 0) : new o(s).promise(),
                    s instanceof e && n._propagateFrom(s, 2),
                    n) : i("cannot await properties of a non-object\n\n    See http://goo.gl/MqrFmX\n")
                }
                var a, u = t("./util"), c = u.isObject, l = t("./es5");
                "function" == typeof Map && (a = Map);
                var f = function() {
                    function t(t, r) {
                        this[e] = t,
                        this[e + n] = r,
                        e++
                    }
                    var e = 0
                      , n = 0;
                    return function(r) {
                        n = r.size,
                        e = 0;
                        var i = new Array(2 * r.size);
                        return r.forEach(t, i),
                        i
                    }
                }()
                  , h = function(t) {
                    for (var e = new a, n = t.length / 2 | 0, r = 0; r < n; ++r) {
                        var i = t[n + r]
                          , o = t[r];
                        e.set(i, o)
                    }
                    return e
                };
                u.inherits(o, n),
                o.prototype._init = function() {}
                ,
                o.prototype._promiseFulfilled = function(t, e) {
                    if (this._values[e] = t,
                    ++this._totalResolved >= this._length) {
                        var n;
                        if (this._isMap)
                            n = h(this._values);
                        else {
                            n = {};
                            for (var r = this.length(), i = 0, o = this.length(); i < o; ++i)
                                n[this._values[i + r]] = this._values[i]
                        }
                        return this._resolve(n),
                        !0
                    }
                    return !1
                }
                ,
                o.prototype.shouldCopyValues = function() {
                    return !1
                }
                ,
                o.prototype.getActualLength = function(t) {
                    return t >> 1
                }
                ,
                e.prototype.props = function() {
                    return s(this)
                }
                ,
                e.props = function(t) {
                    return s(t)
                }
            }
        }
        , {
            "./es5": 13,
            "./util": 36
        }],
        26: [function(t, e, n) {
            "use strict";
            function r(t, e, n, r, i) {
                for (var o = 0; o < i; ++o)
                    n[o + r] = t[o + e],
                    t[o + e] = void 0
            }
            function i(t) {
                this._capacity = t,
                this._length = 0,
                this._front = 0
            }
            i.prototype._willBeOverCapacity = function(t) {
                return this._capacity < t
            }
            ,
            i.prototype._pushOne = function(t) {
                var e = this.length();
                this._checkCapacity(e + 1),
                this[this._front + e & this._capacity - 1] = t,
                this._length = e + 1
            }
            ,
            i.prototype.push = function(t, e, n) {
                var r = this.length() + 3;
                if (this._willBeOverCapacity(r))
                    return this._pushOne(t),
                    this._pushOne(e),
                    void this._pushOne(n);
                var i = this._front + r - 3;
                this._checkCapacity(r);
                var o = this._capacity - 1;
                this[i + 0 & o] = t,
                this[i + 1 & o] = e,
                this[i + 2 & o] = n,
                this._length = r
            }
            ,
            i.prototype.shift = function() {
                var t = this._front
                  , e = this[t];
                return this[t] = void 0,
                this._front = t + 1 & this._capacity - 1,
                this._length--,
                e
            }
            ,
            i.prototype.length = function() {
                return this._length
            }
            ,
            i.prototype._checkCapacity = function(t) {
                this._capacity < t && this._resizeTo(this._capacity << 1)
            }
            ,
            i.prototype._resizeTo = function(t) {
                var e = this._capacity;
                this._capacity = t,
                r(this, 0, this, e, this._front + this._length & e - 1)
            }
            ,
            e.exports = i
        }
        , {}],
        27: [function(t, e, n) {
            "use strict";
            e.exports = function(e, n, r, i) {
                function o(t, o) {
                    var u = r(t);
                    if (u instanceof e)
                        return a(u);
                    if (null === (t = s.asArray(t)))
                        return i("expecting an array or an iterable object but got " + s.classString(t));
                    var c = new e(n);
                    void 0 !== o && c._propagateFrom(o, 3);
                    for (var l = c._fulfill, f = c._reject, h = 0, p = t.length; h < p; ++h) {
                        var d = t[h];
                        (void 0 !== d || h in t) && e.cast(d)._then(l, f, void 0, c, null)
                    }
                    return c
                }
                var s = t("./util")
                  , a = function(t) {
                    return t.then(function(e) {
                        return o(e, t)
                    })
                };
                e.race = function(t) {
                    return o(t, void 0)
                }
                ,
                e.prototype.race = function() {
                    return o(this, void 0)
                }
            }
        }
        , {
            "./util": 36
        }],
        28: [function(t, e, n) {
            "use strict";
            e.exports = function(e, n, r, i, o, s) {
                function a(t, n, r, i) {
                    this.constructor$(t);
                    var s = e._getContext();
                    this._fn = h.contextBind(s, n),
                    void 0 !== r && (r = e.resolve(r),
                    r._attachCancellationCallback(this)),
                    this._initialValue = r,
                    this._currentCancellable = null,
                    this._eachValues = i === o ? Array(this._length) : 0 === i ? null : void 0,
                    this._promise._captureStackTrace(),
                    this._init$(void 0, -5)
                }
                function u(t, e) {
                    this.isFulfilled() ? e._resolve(t) : e._reject(t)
                }
                function c(t, e, n, i) {
                    return "function" != typeof e ? r("expecting a function but got " + h.classString(e)) : new a(t,e,n,i).promise()
                }
                function l(t) {
                    this.accum = t,
                    this.array._gotAccum(t);
                    var n = i(this.value, this.array._promise);
                    return n instanceof e ? (this.array._currentCancellable = n,
                    n._then(f, void 0, void 0, this, void 0)) : f.call(this, n)
                }
                function f(t) {
                    var n = this.array
                      , r = n._promise
                      , i = p(n._fn);
                    r._pushContext();
                    var o;
                    (o = void 0 !== n._eachValues ? i.call(r._boundValue(), t, this.index, this.length) : i.call(r._boundValue(), this.accum, t, this.index, this.length))instanceof e && (n._currentCancellable = o);
                    var a = r._popContext();
                    return s.checkForgottenReturns(o, a, void 0 !== n._eachValues ? "Promise.each" : "Promise.reduce", r),
                    o
                }
                var h = t("./util")
                  , p = h.tryCatch;
                h.inherits(a, n),
                a.prototype._gotAccum = function(t) {
                    void 0 !== this._eachValues && null !== this._eachValues && t !== o && this._eachValues.push(t)
                }
                ,
                a.prototype._eachComplete = function(t) {
                    return null !== this._eachValues && this._eachValues.push(t),
                    this._eachValues
                }
                ,
                a.prototype._init = function() {}
                ,
                a.prototype._resolveEmptyArray = function() {
                    this._resolve(void 0 !== this._eachValues ? this._eachValues : this._initialValue)
                }
                ,
                a.prototype.shouldCopyValues = function() {
                    return !1
                }
                ,
                a.prototype._resolve = function(t) {
                    this._promise._resolveCallback(t),
                    this._values = null
                }
                ,
                a.prototype._resultCancelled = function(t) {
                    if (t === this._initialValue)
                        return this._cancel();
                    this._isResolved() || (this._resultCancelled$(),
                    this._currentCancellable instanceof e && this._currentCancellable.cancel(),
                    this._initialValue instanceof e && this._initialValue.cancel())
                }
                ,
                a.prototype._iterate = function(t) {
                    this._values = t;
                    var n, r, i = t.length;
                    void 0 !== this._initialValue ? (n = this._initialValue,
                    r = 0) : (n = e.resolve(t[0]),
                    r = 1),
                    this._currentCancellable = n;
                    for (var o = r; o < i; ++o) {
                        var s = t[o];
                        s instanceof e && s.suppressUnhandledRejections()
                    }
                    if (!n.isRejected())
                        for (; r < i; ++r) {
                            var a = {
                                accum: null,
                                value: t[r],
                                index: r,
                                length: i,
                                array: this
                            };
                            n = n._then(l, void 0, void 0, a, void 0),
                            0 == (127 & r) && n._setNoAsyncGuarantee()
                        }
                    void 0 !== this._eachValues && (n = n._then(this._eachComplete, void 0, void 0, this, void 0)),
                    n._then(u, u, void 0, n, this)
                }
                ,
                e.prototype.reduce = function(t, e) {
                    return c(this, t, e, null)
                }
                ,
                e.reduce = function(t, e, n, r) {
                    return c(t, e, n, r)
                }
            }
        }
        , {
            "./util": 36
        }],
        29: [function(t, e, n) {
            "use strict";
            var r, i = t("./util"), o = function() {
                throw new Error("No async scheduler available\n\n    See http://goo.gl/MqrFmX\n")
            }, s = i.getNativePromise();
            if (i.isNode && "undefined" == typeof MutationObserver) {
                var a = global.setImmediate
                  , u = process.nextTick;
                r = i.isRecentNode ? function(t) {
                    a.call(global, t)
                }
                : function(t) {
                    u.call(process, t)
                }
            } else if ("function" == typeof s && "function" == typeof s.resolve) {
                var c = s.resolve();
                r = function(t) {
                    c.then(t)
                }
            } else
                r = "undefined" != typeof MutationObserver && ("undefined" == typeof window || !window.navigator || !window.navigator.standalone && !window.cordova) && "classList"in document.documentElement ? function() {
                    var t = document.createElement("div")
                      , e = {
                        attributes: !0
                    }
                      , n = !1
                      , r = document.createElement("div");
                    new MutationObserver(function() {
                        t.classList.toggle("foo"),
                        n = !1
                    }
                    ).observe(r, e);
                    var i = function() {
                        n || (n = !0,
                        r.classList.toggle("foo"))
                    };
                    return function(n) {
                        var r = new MutationObserver(function() {
                            r.disconnect(),
                            n()
                        }
                        );
                        r.observe(t, e),
                        i()
                    }
                }() : "undefined" != typeof setImmediate ? function(t) {
                    setImmediate(t)
                }
                : "undefined" != typeof setTimeout ? function(t) {
                    setTimeout(t, 0)
                }
                : o;
            e.exports = r
        }
        , {
            "./util": 36
        }],
        30: [function(t, e, n) {
            "use strict";
            e.exports = function(e, n, r) {
                function i(t) {
                    this.constructor$(t)
                }
                var o = e.PromiseInspection;
                t("./util").inherits(i, n),
                i.prototype._promiseResolved = function(t, e) {
                    return this._values[t] = e,
                    ++this._totalResolved >= this._length && (this._resolve(this._values),
                    !0)
                }
                ,
                i.prototype._promiseFulfilled = function(t, e) {
                    var n = new o;
                    return n._bitField = 33554432,
                    n._settledValueField = t,
                    this._promiseResolved(e, n)
                }
                ,
                i.prototype._promiseRejected = function(t, e) {
                    var n = new o;
                    return n._bitField = 16777216,
                    n._settledValueField = t,
                    this._promiseResolved(e, n)
                }
                ,
                e.settle = function(t) {
                    return r.deprecated(".settle()", ".reflect()"),
                    new i(t).promise()
                }
                ,
                e.allSettled = function(t) {
                    return new i(t).promise()
                }
                ,
                e.prototype.settle = function() {
                    return e.settle(this)
                }
            }
        }
        , {
            "./util": 36
        }],
        31: [function(t, e, n) {
            "use strict";
            e.exports = function(e, n, r) {
                function i(t) {
                    this.constructor$(t),
                    this._howMany = 0,
                    this._unwrap = !1,
                    this._initialized = !1
                }
                function o(t, e) {
                    if ((0 | e) !== e || e < 0)
                        return r("expecting a positive integer\n\n    See http://goo.gl/MqrFmX\n");
                    var n = new i(t)
                      , o = n.promise();
                    return n.setHowMany(e),
                    n.init(),
                    o
                }
                var s = t("./util")
                  , a = t("./errors").RangeError
                  , u = t("./errors").AggregateError
                  , c = s.isArray
                  , l = {};
                s.inherits(i, n),
                i.prototype._init = function() {
                    if (this._initialized) {
                        if (0 === this._howMany)
                            return void this._resolve([]);
                        this._init$(void 0, -5);
                        var t = c(this._values);
                        !this._isResolved() && t && this._howMany > this._canPossiblyFulfill() && this._reject(this._getRangeError(this.length()))
                    }
                }
                ,
                i.prototype.init = function() {
                    this._initialized = !0,
                    this._init()
                }
                ,
                i.prototype.setUnwrap = function() {
                    this._unwrap = !0
                }
                ,
                i.prototype.howMany = function() {
                    return this._howMany
                }
                ,
                i.prototype.setHowMany = function(t) {
                    this._howMany = t
                }
                ,
                i.prototype._promiseFulfilled = function(t) {
                    return this._addFulfilled(t),
                    this._fulfilled() === this.howMany() && (this._values.length = this.howMany(),
                    1 === this.howMany() && this._unwrap ? this._resolve(this._values[0]) : this._resolve(this._values),
                    !0)
                }
                ,
                i.prototype._promiseRejected = function(t) {
                    return this._addRejected(t),
                    this._checkOutcome()
                }
                ,
                i.prototype._promiseCancelled = function() {
                    return this._values instanceof e || null == this._values ? this._cancel() : (this._addRejected(l),
                    this._checkOutcome())
                }
                ,
                i.prototype._checkOutcome = function() {
                    if (this.howMany() > this._canPossiblyFulfill()) {
                        for (var t = new u, e = this.length(); e < this._values.length; ++e)
                            this._values[e] !== l && t.push(this._values[e]);
                        return t.length > 0 ? this._reject(t) : this._cancel(),
                        !0
                    }
                    return !1
                }
                ,
                i.prototype._fulfilled = function() {
                    return this._totalResolved
                }
                ,
                i.prototype._rejected = function() {
                    return this._values.length - this.length()
                }
                ,
                i.prototype._addRejected = function(t) {
                    this._values.push(t)
                }
                ,
                i.prototype._addFulfilled = function(t) {
                    this._values[this._totalResolved++] = t
                }
                ,
                i.prototype._canPossiblyFulfill = function() {
                    return this.length() - this._rejected()
                }
                ,
                i.prototype._getRangeError = function(t) {
                    var e = "Input array must contain at least " + this._howMany + " items but contains only " + t + " items";
                    return new a(e)
                }
                ,
                i.prototype._resolveEmptyArray = function() {
                    this._reject(this._getRangeError(0))
                }
                ,
                e.some = function(t, e) {
                    return o(t, e)
                }
                ,
                e.prototype.some = function(t) {
                    return o(this, t)
                }
                ,
                e._SomePromiseArray = i
            }
        }
        , {
            "./errors": 12,
            "./util": 36
        }],
        32: [function(t, e, n) {
            "use strict";
            e.exports = function(t) {
                function e(t) {
                    void 0 !== t ? (t = t._target(),
                    this._bitField = t._bitField,
                    this._settledValueField = t._isFateSealed() ? t._settledValue() : void 0) : (this._bitField = 0,
                    this._settledValueField = void 0)
                }
                e.prototype._settledValue = function() {
                    return this._settledValueField
                }
                ;
                var n = e.prototype.value = function() {
                    if (!this.isFulfilled())
                        throw new TypeError("cannot get fulfillment value of a non-fulfilled promise\n\n    See http://goo.gl/MqrFmX\n");
                    return this._settledValue()
                }
                  , r = e.prototype.error = e.prototype.reason = function() {
                    if (!this.isRejected())
                        throw new TypeError("cannot get rejection reason of a non-rejected promise\n\n    See http://goo.gl/MqrFmX\n");
                    return this._settledValue()
                }
                  , i = e.prototype.isFulfilled = function() {
                    return 0 != (33554432 & this._bitField)
                }
                  , o = e.prototype.isRejected = function() {
                    return 0 != (16777216 & this._bitField)
                }
                  , s = e.prototype.isPending = function() {
                    return 0 == (50397184 & this._bitField)
                }
                  , a = e.prototype.isResolved = function() {
                    return 0 != (50331648 & this._bitField)
                }
                ;
                e.prototype.isCancelled = function() {
                    return 0 != (8454144 & this._bitField)
                }
                ,
                t.prototype.__isCancelled = function() {
                    return 65536 == (65536 & this._bitField)
                }
                ,
                t.prototype._isCancelled = function() {
                    return this._target().__isCancelled()
                }
                ,
                t.prototype.isCancelled = function() {
                    return 0 != (8454144 & this._target()._bitField)
                }
                ,
                t.prototype.isPending = function() {
                    return s.call(this._target())
                }
                ,
                t.prototype.isRejected = function() {
                    return o.call(this._target())
                }
                ,
                t.prototype.isFulfilled = function() {
                    return i.call(this._target())
                }
                ,
                t.prototype.isResolved = function() {
                    return a.call(this._target())
                }
                ,
                t.prototype.value = function() {
                    return n.call(this._target())
                }
                ,
                t.prototype.reason = function() {
                    var t = this._target();
                    return t._unsetRejectionIsUnhandled(),
                    r.call(t)
                }
                ,
                t.prototype._value = function() {
                    return this._settledValue()
                }
                ,
                t.prototype._reason = function() {
                    return this._unsetRejectionIsUnhandled(),
                    this._settledValue()
                }
                ,
                t.PromiseInspection = e
            }
        }
        , {}],
        33: [function(t, e, n) {
            "use strict";
            e.exports = function(e, n) {
                function r(t, r) {
                    if (l(t)) {
                        if (t instanceof e)
                            return t;
                        var i = o(t);
                        if (i === c) {
                            r && r._pushContext();
                            var u = e.reject(i.e);
                            return r && r._popContext(),
                            u
                        }
                        if ("function" == typeof i) {
                            if (s(t)) {
                                var u = new e(n);
                                return t._then(u._fulfill, u._reject, void 0, u, null),
                                u
                            }
                            return a(t, i, r)
                        }
                    }
                    return t
                }
                function i(t) {
                    return t.then
                }
                function o(t) {
                    try {
                        return i(t)
                    } catch (t) {
                        return c.e = t,
                        c
                    }
                }
                function s(t) {
                    try {
                        return f.call(t, "_promise0")
                    } catch (t) {
                        return !1
                    }
                }
                function a(t, r, i) {
                    function o(t) {
                        a && (a._resolveCallback(t),
                        a = null)
                    }
                    function s(t) {
                        a && (a._rejectCallback(t, f, !0),
                        a = null)
                    }
                    var a = new e(n)
                      , l = a;
                    i && i._pushContext(),
                    a._captureStackTrace(),
                    i && i._popContext();
                    var f = !0
                      , h = u.tryCatch(r).call(t, o, s);
                    return f = !1,
                    a && h === c && (a._rejectCallback(h.e, !0, !0),
                    a = null),
                    l
                }
                var u = t("./util")
                  , c = u.errorObj
                  , l = u.isObject
                  , f = {}.hasOwnProperty;
                return r
            }
        }
        , {
            "./util": 36
        }],
        34: [function(t, e, n) {
            "use strict";
            e.exports = function(e, n, r) {
                function i(t) {
                    this.handle = t
                }
                function o(t) {
                    return clearTimeout(this.handle),
                    t
                }
                function s(t) {
                    throw clearTimeout(this.handle),
                    t
                }
                var a = t("./util")
                  , u = e.TimeoutError;
                i.prototype._resultCancelled = function() {
                    clearTimeout(this.handle)
                }
                ;
                var c = function(t) {
                    return l(+this).thenReturn(t)
                }
                  , l = e.delay = function(t, o) {
                    var s, a;
                    return void 0 !== o ? (s = e.resolve(o)._then(c, null, null, t, void 0),
                    r.cancellation() && o instanceof e && s._setOnCancel(o)) : (s = new e(n),
                    a = setTimeout(function() {
                        s._fulfill()
                    }, +t),
                    r.cancellation() && s._setOnCancel(new i(a)),
                    s._captureStackTrace()),
                    s._setAsyncGuaranteed(),
                    s
                }
                ;
                e.prototype.delay = function(t) {
                    return l(t, this)
                }
                ;
                var f = function(t, e, n) {
                    var r;
                    r = "string" != typeof e ? e instanceof Error ? e : new u("operation timed out") : new u(e),
                    a.markAsOriginatingFromRejection(r),
                    t._attachExtraTrace(r),
                    t._reject(r),
                    null != n && n.cancel()
                };
                e.prototype.timeout = function(t, e) {
                    t = +t;
                    var n, a, u = new i(setTimeout(function() {
                        n.isPending() && f(n, e, a)
                    }, t));
                    return r.cancellation() ? (a = this.then(),
                    n = a._then(o, s, void 0, u, void 0),
                    n._setOnCancel(u)) : n = this._then(o, s, void 0, u, void 0),
                    n
                }
            }
        }
        , {
            "./util": 36
        }],
        35: [function(t, e, n) {
            "use strict";
            e.exports = function(e, n, r, i, o, s) {
                function a(t) {
                    setTimeout(function() {
                        throw t
                    }, 0)
                }
                function u(t) {
                    var e = r(t);
                    return e !== t && "function" == typeof t._isDisposable && "function" == typeof t._getDisposer && t._isDisposable() && e._setDisposable(t._getDisposer()),
                    e
                }
                function c(t, n) {
                    function i() {
                        if (s >= c)
                            return l._fulfill();
                        var o = u(t[s++]);
                        if (o instanceof e && o._isDisposable()) {
                            try {
                                o = r(o._getDisposer().tryDispose(n), t.promise)
                            } catch (t) {
                                return a(t)
                            }
                            if (o instanceof e)
                                return o._then(i, a, null, null, null)
                        }
                        i()
                    }
                    var s = 0
                      , c = t.length
                      , l = new e(o);
                    return i(),
                    l
                }
                function l(t, e, n) {
                    this._data = t,
                    this._promise = e,
                    this._context = n
                }
                function f(t, e, n) {
                    this.constructor$(t, e, n)
                }
                function h(t) {
                    return l.isDisposer(t) ? (this.resources[this.index]._setDisposable(t),
                    t.promise()) : t
                }
                function p(t) {
                    this.length = t,
                    this.promise = null,
                    this[t - 1] = null
                }
                var d = t("./util")
                  , v = t("./errors").TypeError
                  , g = t("./util").inherits
                  , m = d.errorObj
                  , y = d.tryCatch
                  , _ = {};
                l.prototype.data = function() {
                    return this._data
                }
                ,
                l.prototype.promise = function() {
                    return this._promise
                }
                ,
                l.prototype.resource = function() {
                    return this.promise().isFulfilled() ? this.promise().value() : _
                }
                ,
                l.prototype.tryDispose = function(t) {
                    var e = this.resource()
                      , n = this._context;
                    void 0 !== n && n._pushContext();
                    var r = e !== _ ? this.doDispose(e, t) : null;
                    return void 0 !== n && n._popContext(),
                    this._promise._unsetDisposable(),
                    this._data = null,
                    r
                }
                ,
                l.isDisposer = function(t) {
                    return null != t && "function" == typeof t.resource && "function" == typeof t.tryDispose
                }
                ,
                g(f, l),
                f.prototype.doDispose = function(t, e) {
                    return this.data().call(t, t, e)
                }
                ,
                p.prototype._resultCancelled = function() {
                    for (var t = this.length, n = 0; n < t; ++n) {
                        var r = this[n];
                        r instanceof e && r.cancel()
                    }
                }
                ,
                e.using = function() {
                    var t = arguments.length;
                    if (t < 2)
                        return n("you must pass at least 2 arguments to Promise.using");
                    var i = arguments[t - 1];
                    if ("function" != typeof i)
                        return n("expecting a function but got " + d.classString(i));
                    var o, a = !0;
                    2 === t && Array.isArray(arguments[0]) ? (o = arguments[0],
                    t = o.length,
                    a = !1) : (o = arguments,
                    t--);
                    for (var u = new p(t), f = 0; f < t; ++f) {
                        var v = o[f];
                        if (l.isDisposer(v)) {
                            var g = v;
                            v = v.promise(),
                            v._setDisposable(g)
                        } else {
                            var _ = r(v);
                            _ instanceof e && (v = _._then(h, null, null, {
                                resources: u,
                                index: f
                            }, void 0))
                        }
                        u[f] = v
                    }
                    for (var b = new Array(u.length), f = 0; f < b.length; ++f)
                        b[f] = e.resolve(u[f]).reflect();
                    var w = e.all(b).then(function(t) {
                        for (var e = 0; e < t.length; ++e) {
                            var n = t[e];
                            if (n.isRejected())
                                return m.e = n.error(),
                                m;
                            if (!n.isFulfilled())
                                return void w.cancel();
                            t[e] = n.value()
                        }
                        x._pushContext(),
                        i = y(i);
                        var r = a ? i.apply(void 0, t) : i(t)
                          , o = x._popContext();
                        return s.checkForgottenReturns(r, o, "Promise.using", x),
                        r
                    })
                      , x = w.lastly(function() {
                        var t = new e.PromiseInspection(w);
                        return c(u, t)
                    });
                    return u.promise = x,
                    x._setOnCancel(u),
                    x
                }
                ,
                e.prototype._setDisposable = function(t) {
                    this._bitField = 131072 | this._bitField,
                    this._disposer = t
                }
                ,
                e.prototype._isDisposable = function() {
                    return (131072 & this._bitField) > 0
                }
                ,
                e.prototype._getDisposer = function() {
                    return this._disposer
                }
                ,
                e.prototype._unsetDisposable = function() {
                    this._bitField = -131073 & this._bitField,
                    this._disposer = void 0
                }
                ,
                e.prototype.disposer = function(t) {
                    if ("function" == typeof t)
                        return new f(t,this,i());
                    throw new v
                }
            }
        }
        , {
            "./errors": 12,
            "./util": 36
        }],
        36: [function(t, e, n) {
            "use strict";
            function r() {
                try {
                    var t = A;
                    return A = null,
                    t.apply(this, arguments)
                } catch (t) {
                    return j.e = t,
                    j
                }
            }
            function i(t) {
                return A = t,
                r
            }
            function o(t) {
                return null == t || !0 === t || !1 === t || "string" == typeof t || "number" == typeof t
            }
            function s(t) {
                return "function" == typeof t || "object" == typeof t && null !== t
            }
            function a(t) {
                return o(t) ? new Error(g(t)) : t
            }
            function u(t, e) {
                var n, r = t.length, i = new Array(r + 1);
                for (n = 0; n < r; ++n)
                    i[n] = t[n];
                return i[n] = e,
                i
            }
            function c(t, e, n) {
                if (!k.isES5)
                    return {}.hasOwnProperty.call(t, e) ? t[e] : void 0;
                var r = Object.getOwnPropertyDescriptor(t, e);
                return null != r ? null == r.get && null == r.set ? r.value : n : void 0
            }
            function l(t, e, n) {
                if (o(t))
                    return t;
                var r = {
                    value: n,
                    configurable: !0,
                    enumerable: !1,
                    writable: !0
                };
                return k.defineProperty(t, e, r),
                t
            }
            function f(t) {
                throw t
            }
            function h(t) {
                try {
                    if ("function" == typeof t) {
                        var e = k.names(t.prototype)
                          , n = k.isES5 && e.length > 1
                          , r = e.length > 0 && !(1 === e.length && "constructor" === e[0])
                          , i = F.test(t + "") && k.names(t).length > 0;
                        if (n || r || i)
                            return !0
                    }
                    return !1
                } catch (t) {
                    return !1
                }
            }
            function p(t) {
                function e() {}
                function n() {
                    return typeof r.foo
                }
                e.prototype = t;
                var r = new e;
                return n(),
                n(),
                t
            }
            function d(t) {
                return D.test(t)
            }
            function v(t, e, n) {
                for (var r = new Array(t), i = 0; i < t; ++i)
                    r[i] = e + i + n;
                return r
            }
            function g(t) {
                try {
                    return t + ""
                } catch (t) {
                    return "[no string representation]"
                }
            }
            function m(t) {
                return t instanceof Error || null !== t && "object" == typeof t && "string" == typeof t.message && "string" == typeof t.name
            }
            function y(t) {
                try {
                    l(t, "isOperational", !0)
                } catch (t) {}
            }
            function _(t) {
                return null != t && (t instanceof Error.__BluebirdErrorTypes__.OperationalError || !0 === t.isOperational)
            }
            function b(t) {
                return m(t) && k.propertyIsWritable(t, "stack")
            }
            function w(t) {
                return {}.toString.call(t)
            }
            function x(t, e, n) {
                for (var r = k.names(t), i = 0; i < r.length; ++i) {
                    var o = r[i];
                    if (n(o))
                        try {
                            k.defineProperty(e, o, k.getDescriptor(t, o))
                        } catch (t) {}
                }
            }
            function T(t) {
                return z ? process.env[t] : void 0
            }
            function C() {
                if ("function" == typeof Promise)
                    try {
                        if ("[object Promise]" === w(new Promise(function() {}
                        )))
                            return Promise
                    } catch (t) {}
            }
            function E(t, e) {
                if (null === t || "function" != typeof e || e === H)
                    return e;
                null !== t.domain && (e = t.domain.bind(e));
                var n = t.async;
                if (null !== n) {
                    var r = e;
                    e = function() {
                        var t = new Array(2).concat([].slice.call(arguments));
                        return t[0] = r,
                        t[1] = this,
                        n.runInAsyncScope.apply(n, t)
                    }
                }
                return e
            }
            var k = t("./es5"), S = "undefined" == typeof navigator, j = {
                e: {}
            }, A, O = "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : void 0 !== this ? this : null, R = function(t, e) {
                function n() {
                    this.constructor = t,
                    this.constructor$ = e;
                    for (var n in e.prototype)
                        r.call(e.prototype, n) && "$" !== n.charAt(n.length - 1) && (this[n + "$"] = e.prototype[n])
                }
                var r = {}.hasOwnProperty;
                return n.prototype = e.prototype,
                t.prototype = new n,
                t.prototype
            }, P = function() {
                var t = [Array.prototype, Object.prototype, Function.prototype]
                  , e = function(e) {
                    for (var n = 0; n < t.length; ++n)
                        if (t[n] === e)
                            return !0;
                    return !1
                };
                if (k.isES5) {
                    var n = Object.getOwnPropertyNames;
                    return function(t) {
                        for (var r = [], i = Object.create(null); null != t && !e(t); ) {
                            var o;
                            try {
                                o = n(t)
                            } catch (t) {
                                return r
                            }
                            for (var s = 0; s < o.length; ++s) {
                                var a = o[s];
                                if (!i[a]) {
                                    i[a] = !0;
                                    var u = Object.getOwnPropertyDescriptor(t, a);
                                    null != u && null == u.get && null == u.set && r.push(a)
                                }
                            }
                            t = k.getPrototypeOf(t)
                        }
                        return r
                    }
                }
                var r = {}.hasOwnProperty;
                return function(n) {
                    if (e(n))
                        return [];
                    var i = [];
                    t: for (var o in n)
                        if (r.call(n, o))
                            i.push(o);
                        else {
                            for (var s = 0; s < t.length; ++s)
                                if (r.call(t[s], o))
                                    continue t;
                            i.push(o)
                        }
                    return i
                }
            }(), F = /this\s*\.\s*\S+\s*=/, D = /^[a-z$_][a-z$_0-9]*$/i, I = function() {
                return "stack"in new Error ? function(t) {
                    return b(t) ? t : new Error(g(t))
                }
                : function(t) {
                    if (b(t))
                        return t;
                    try {
                        throw new Error(g(t))
                    } catch (t) {
                        return t
                    }
                }
            }(), N = function(t) {
                return k.isArray(t) ? t : null
            };
            if ("undefined" != typeof Symbol && Symbol.iterator) {
                var L = "function" == typeof Array.from ? function(t) {
                    return Array.from(t)
                }
                : function(t) {
                    for (var e, n = [], r = t[Symbol.iterator](); !(e = r.next()).done; )
                        n.push(e.value);
                    return n
                }
                ;
                N = function(t) {
                    return k.isArray(t) ? t : null != t && "function" == typeof t[Symbol.iterator] ? L(t) : null
                }
            }
            var $ = "undefined" != typeof process && "[object process]" === w(process).toLowerCase(), z = "undefined" != typeof process && void 0 !== process.env, H, B = {
                setReflectHandler: function(t) {
                    H = t
                },
                isClass: h,
                isIdentifier: d,
                inheritedDataKeys: P,
                getDataPropertyOrDefault: c,
                thrower: f,
                isArray: k.isArray,
                asArray: N,
                notEnumerableProp: l,
                isPrimitive: o,
                isObject: s,
                isError: m,
                canEvaluate: S,
                errorObj: j,
                tryCatch: i,
                inherits: R,
                withAppended: u,
                maybeWrapAsError: a,
                toFastProperties: p,
                filledRange: v,
                toString: g,
                canAttachTrace: b,
                ensureErrorObject: I,
                originatesFromRejection: _,
                markAsOriginatingFromRejection: y,
                classString: w,
                copyDescriptors: x,
                isNode: $,
                hasEnvVariables: z,
                env: T,
                global: O,
                getNativePromise: C,
                contextBind: E
            };
            B.isRecentNode = B.isNode && function() {
                var t;
                return process.versions && process.versions.node ? t = process.versions.node.split(".").map(Number) : process.version && (t = process.version.split(".").map(Number)),
                0 === t[0] && t[1] > 10 || t[0] > 0
            }(),
            B.nodeSupportsAsyncResource = B.isNode && function() {
                var e = !1;
                try {
                    var n = t("async_hooks").AsyncResource;
                    e = "function" == typeof n.prototype.runInAsyncScope
                } catch (t) {
                    e = !1
                }
                return e
            }(),
            B.isNode && B.toFastProperties(process);
            try {
                throw new Error
            } catch (t) {
                B.lastLineError = t
            }
            e.exports = B
        }
        , {
            "./es5": 13,
            async_hooks: void 0
        }]
    }, {}, [4])(4)
}),
"undefined" != typeof window && null !== window ? window.P = window.Promise : "undefined" != typeof self && null !== self && (self.P = self.Promise),
function(t, e, n) {
    "undefined" != typeof module && module.exports ? module.exports = n() : "function" == typeof define && define.amd ? define("bowser", n) : t.bowser = n()
}(this, 0, function() {
    function t(t) {
        function e(e) {
            var n = t.match(e);
            return n && n.length > 1 && n[1] || ""
        }
        function n(e) {
            var n = t.match(e);
            return n && n.length > 1 && n[2] || ""
        }
        var i, o = e(/(ipod|iphone|ipad)/i).toLowerCase(), a = /like android/i.test(t), u = !a && /android/i.test(t), c = /nexus\s*[0-6]\s*/i.test(t), l = !c && /nexus\s*[0-9]+/i.test(t), f = /CrOS/.test(t), h = /silk/i.test(t), p = /sailfish/i.test(t), d = /tizen/i.test(t), v = /(web|hpw)(o|0)s/i.test(t), g = /windows phone/i.test(t), m = (/SamsungBrowser/i.test(t),
        !g && /windows/i.test(t)), y = !o && !h && /macintosh/i.test(t), _ = !u && !p && !d && !v && /linux/i.test(t), b = n(/edg([ea]|ios)\/(\d+(\.\d+)?)/i), w = e(/version\/(\d+(\.\d+)?)/i), x = /tablet/i.test(t) && !/tablet pc/i.test(t), T = !x && /[^-]mobi/i.test(t), C = /xbox/i.test(t);
        /opera/i.test(t) ? i = {
            name: "Opera",
            opera: s,
            version: w || e(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
        } : /opr\/|opios/i.test(t) ? i = {
            name: "Opera",
            opera: s,
            version: e(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || w
        } : /SamsungBrowser/i.test(t) ? i = {
            name: "Samsung Internet for Android",
            samsungBrowser: s,
            version: w || e(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
        } : /Whale/i.test(t) ? i = {
            name: "NAVER Whale browser",
            whale: s,
            version: e(/(?:whale)[\s\/](\d+(?:\.\d+)+)/i)
        } : /MZBrowser/i.test(t) ? i = {
            name: "MZ Browser",
            mzbrowser: s,
            version: e(/(?:MZBrowser)[\s\/](\d+(?:\.\d+)+)/i)
        } : /coast/i.test(t) ? i = {
            name: "Opera Coast",
            coast: s,
            version: w || e(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
        } : /focus/i.test(t) ? i = {
            name: "Focus",
            focus: s,
            version: e(/(?:focus)[\s\/](\d+(?:\.\d+)+)/i)
        } : /yabrowser/i.test(t) ? i = {
            name: "Yandex Browser",
            yandexbrowser: s,
            version: w || e(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
        } : /ucbrowser/i.test(t) ? i = {
            name: "UC Browser",
            ucbrowser: s,
            version: e(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
        } : /mxios/i.test(t) ? i = {
            name: "Maxthon",
            maxthon: s,
            version: e(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
        } : /epiphany/i.test(t) ? i = {
            name: "Epiphany",
            epiphany: s,
            version: e(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
        } : /puffin/i.test(t) ? i = {
            name: "Puffin",
            puffin: s,
            version: e(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
        } : /sleipnir/i.test(t) ? i = {
            name: "Sleipnir",
            sleipnir: s,
            version: e(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
        } : /k-meleon/i.test(t) ? i = {
            name: "K-Meleon",
            kMeleon: s,
            version: e(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
        } : g ? (i = {
            name: "Windows Phone",
            osname: "Windows Phone",
            windowsphone: s
        },
        b ? (i.msedge = s,
        i.version = b) : (i.msie = s,
        i.version = e(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? i = {
            name: "Internet Explorer",
            msie: s,
            version: e(/(?:msie |rv:)(\d+(\.\d+)?)/i)
        } : f ? i = {
            name: "Chrome",
            osname: "Chrome OS",
            chromeos: s,
            chromeBook: s,
            chrome: s,
            version: e(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
        } : /edg([ea]|ios)/i.test(t) ? i = {
            name: "Microsoft Edge",
            msedge: s,
            version: b
        } : /vivaldi/i.test(t) ? i = {
            name: "Vivaldi",
            vivaldi: s,
            version: e(/vivaldi\/(\d+(\.\d+)?)/i) || w
        } : p ? i = {
            name: "Sailfish",
            osname: "Sailfish OS",
            sailfish: s,
            version: e(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
        } : /seamonkey\//i.test(t) ? i = {
            name: "SeaMonkey",
            seamonkey: s,
            version: e(/seamonkey\/(\d+(\.\d+)?)/i)
        } : /firefox|iceweasel|fxios/i.test(t) ? (i = {
            name: "Firefox",
            firefox: s,
            version: e(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
        },
        /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) && (i.firefoxos = s,
        i.osname = "Firefox OS")) : h ? i = {
            name: "Amazon Silk",
            silk: s,
            version: e(/silk\/(\d+(\.\d+)?)/i)
        } : /phantom/i.test(t) ? i = {
            name: "PhantomJS",
            phantom: s,
            version: e(/phantomjs\/(\d+(\.\d+)?)/i)
        } : /slimerjs/i.test(t) ? i = {
            name: "SlimerJS",
            slimer: s,
            version: e(/slimerjs\/(\d+(\.\d+)?)/i)
        } : /blackberry|\bbb\d+/i.test(t) || /rim\stablet/i.test(t) ? i = {
            name: "BlackBerry",
            osname: "BlackBerry OS",
            blackberry: s,
            version: w || e(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
        } : v ? (i = {
            name: "WebOS",
            osname: "WebOS",
            webos: s,
            version: w || e(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
        },
        /touchpad\//i.test(t) && (i.touchpad = s)) : /bada/i.test(t) ? i = {
            name: "Bada",
            osname: "Bada",
            bada: s,
            version: e(/dolfin\/(\d+(\.\d+)?)/i)
        } : d ? i = {
            name: "Tizen",
            osname: "Tizen",
            tizen: s,
            version: e(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || w
        } : /qupzilla/i.test(t) ? i = {
            name: "QupZilla",
            qupzilla: s,
            version: e(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || w
        } : /chromium/i.test(t) ? i = {
            name: "Chromium",
            chromium: s,
            version: e(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || w
        } : /chrome|crios|crmo/i.test(t) ? i = {
            name: "Chrome",
            chrome: s,
            version: e(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
        } : u ? i = {
            name: "Android",
            version: w
        } : /safari|applewebkit/i.test(t) ? (i = {
            name: "Safari",
            safari: s
        },
        w && (i.version = w)) : o ? (i = {
            name: "iphone" == o ? "iPhone" : "ipad" == o ? "iPad" : "iPod"
        },
        w && (i.version = w)) : i = /googlebot/i.test(t) ? {
            name: "Googlebot",
            googlebot: s,
            version: e(/googlebot\/(\d+(\.\d+))/i) || w
        } : {
            name: e(/^(.*)\/(.*) /),
            version: n(/^(.*)\/(.*) /)
        },
        !i.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (i.name = i.name || "Blink",
        i.blink = s) : (i.name = i.name || "Webkit",
        i.webkit = s),
        !i.version && w && (i.version = w)) : !i.opera && /gecko\//i.test(t) && (i.name = i.name || "Gecko",
        i.gecko = s,
        i.version = i.version || e(/gecko\/(\d+(\.\d+)?)/i)),
        i.windowsphone || !u && !i.silk ? !i.windowsphone && o ? (i[o] = s,
        i.ios = s,
        i.osname = "iOS") : y ? (i.mac = s,
        i.osname = "macOS") : C ? (i.xbox = s,
        i.osname = "Xbox") : m ? (i.windows = s,
        i.osname = "Windows") : _ && (i.linux = s,
        i.osname = "Linux") : (i.android = s,
        i.osname = "Android");
        var E = "";
        i.windows ? E = function(t) {
            switch (t) {
            case "NT":
                return "NT";
            case "XP":
                return "XP";
            case "NT 5.0":
                return "2000";
            case "NT 5.1":
                return "XP";
            case "NT 5.2":
                return "2003";
            case "NT 6.0":
                return "Vista";
            case "NT 6.1":
                return "7";
            case "NT 6.2":
                return "8";
            case "NT 6.3":
                return "8.1";
            case "NT 10.0":
                return "10";
            default:
                return
            }
        }(e(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : i.windowsphone ? E = e(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : i.mac ? (E = e(/Mac OS X (\d+([_\.\s]\d+)*)/i),
        E = E.replace(/[_\s]/g, ".")) : o ? (E = e(/os (\d+([_\s]\d+)*) like mac os x/i),
        E = E.replace(/[_\s]/g, ".")) : u ? E = e(/android[ \/-](\d+(\.\d+)*)/i) : i.webos ? E = e(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : i.blackberry ? E = e(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : i.bada ? E = e(/bada\/(\d+(\.\d+)*)/i) : i.tizen && (E = e(/tizen[\/\s](\d+(\.\d+)*)/i)),
        E && (i.osversion = E);
        var k = !i.windows && E.split(".")[0];
        return x || l || "ipad" == o || u && (3 == k || k >= 4 && !T) || i.silk ? i.tablet = s : (T || "iphone" == o || "ipod" == o || u || c || i.blackberry || i.webos || i.bada) && (i.mobile = s),
        i.msedge || i.msie && i.version >= 10 || i.yandexbrowser && i.version >= 15 || i.vivaldi && i.version >= 1 || i.chrome && i.version >= 20 || i.samsungBrowser && i.version >= 4 || i.whale && 1 === r([i.version, "1.0"]) || i.mzbrowser && 1 === r([i.version, "6.0"]) || i.focus && 1 === r([i.version, "1.0"]) || i.firefox && i.version >= 20 || i.safari && i.version >= 6 || i.opera && i.version >= 10 || i.ios && i.osversion && i.osversion.split(".")[0] >= 6 || i.blackberry && i.version >= 10.1 || i.chromium && i.version >= 20 ? i.a = s : i.msie && i.version < 10 || i.chrome && i.version < 20 || i.firefox && i.version < 20 || i.safari && i.version < 6 || i.opera && i.version < 10 || i.ios && i.osversion && i.osversion.split(".")[0] < 6 || i.chromium && i.version < 20 ? i.c = s : i.x = s,
        i
    }
    function e(t) {
        return t.split(".").length
    }
    function n(t, e) {
        var n, r = [];
        if (Array.prototype.map)
            return Array.prototype.map.call(t, e);
        for (n = 0; n < t.length; n++)
            r.push(e(t[n]));
        return r
    }
    function r(t) {
        for (var r = Math.max(e(t[0]), e(t[1])), i = n(t, function(t) {
            var i = r - e(t);
            return t += new Array(i + 1).join(".0"),
            n(t.split("."), function(t) {
                return new Array(20 - t.length).join("0") + t
            }).reverse()
        }); --r >= 0; ) {
            if (i[0][r] > i[1][r])
                return 1;
            if (i[0][r] !== i[1][r])
                return -1;
            if (0 === r)
                return 0
        }
    }
    function i(e, n, i) {
        var o = a;
        "string" == typeof n && (i = n,
        n = void 0),
        void 0 === n && (n = !1),
        i && (o = t(i));
        var s = "" + o.version;
        for (var u in e)
            if (e.hasOwnProperty(u) && o[u]) {
                if ("string" != typeof e[u])
                    throw new Error("Browser version in the minVersion map should be a string: " + u + ": " + String(e));
                return r([s, e[u]]) < 0
            }
        return n
    }
    function o(t, e, n) {
        return !i(t, e, n)
    }
    var s = !0
      , a = t("undefined" != typeof navigator ? navigator.userAgent || "" : "");
    return a.test = function(t) {
        for (var e = 0; e < t.length; ++e) {
            var n = t[e];
            if ("string" == typeof n && n in a)
                return !0
        }
        return !1
    }
    ,
    a.isUnsupportedBrowser = i,
    a.compareVersions = r,
    a.check = o,
    a._detect = t,
    a.detect = t,
    a
}),
function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function(t) {
    "use strict";
    function e(e) {
        return !e.nodeName || -1 !== t.inArray(e.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"])
    }
    function n(e) {
        return t.isFunction(e) || t.isPlainObject(e) ? e : {
            top: e,
            left: e
        }
    }
    var r = t.scrollTo = function(e, n, r) {
        return t(window).scrollTo(e, n, r)
    }
    ;
    return r.defaults = {
        axis: "xy",
        duration: 0,
        limit: !0
    },
    t.fn.scrollTo = function(i, o, s) {
        "object" == typeof o && (s = o,
        o = 0),
        "function" == typeof s && (s = {
            onAfter: s
        }),
        "max" === i && (i = 9e9),
        s = t.extend({}, r.defaults, s),
        o = o || s.duration;
        var a = s.queue && s.axis.length > 1;
        return a && (o /= 2),
        s.offset = n(s.offset),
        s.over = n(s.over),
        this.each(function() {
            function u(e) {
                var n = t.extend({}, s, {
                    queue: !0,
                    duration: o,
                    complete: e && function() {
                        e.call(f, p, s)
                    }
                });
                h.animate(d, n)
            }
            if (null !== i) {
                var c, l = e(this), f = l ? this.contentWindow || window : this, h = t(f), p = i, d = {};
                switch (typeof p) {
                case "number":
                case "string":
                    if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(p)) {
                        p = n(p);
                        break
                    }
                    p = l ? t(p) : t(p, f);
                case "object":
                    if (0 === p.length)
                        return;
                    (p.is || p.style) && (c = (p = t(p)).offset())
                }
                var v = t.isFunction(s.offset) && s.offset(f, p) || s.offset;
                t.each(s.axis.split(""), function(t, e) {
                    var n = "x" === e ? "Left" : "Top"
                      , i = n.toLowerCase()
                      , o = "scroll" + n
                      , g = h[o]()
                      , m = r.max(f, e);
                    if (c)
                        d[o] = c[i] + (l ? 0 : g - h.offset()[i]),
                        s.margin && (d[o] -= parseInt(p.css("margin" + n), 10) || 0,
                        d[o] -= parseInt(p.css("border" + n + "Width"), 10) || 0),
                        d[o] += v[i] || 0,
                        s.over[i] && (d[o] += p["x" === e ? "width" : "height"]() * s.over[i]);
                    else {
                        var y = p[i];
                        d[o] = y.slice && "%" === y.slice(-1) ? parseFloat(y) / 100 * m : y
                    }
                    s.limit && /^\d+$/.test(d[o]) && (d[o] = d[o] <= 0 ? 0 : Math.min(d[o], m)),
                    !t && s.axis.length > 1 && (g === d[o] ? d = {} : a && (u(s.onAfterFirst),
                    d = {}))
                }),
                u(s.onAfter)
            }
        })
    }
    ,
    r.max = function(n, r) {
        var i = "x" === r ? "Width" : "Height"
          , o = "scroll" + i;
        if (!e(n))
            return n[o] - t(n)[i.toLowerCase()]();
        var s = "client" + i
          , a = n.ownerDocument || n.document
          , u = a.documentElement
          , c = a.body;
        return Math.max(u[o], c[o]) - Math.min(u[s], c[s])
    }
    ,
    t.Tween.propHooks.scrollLeft = t.Tween.propHooks.scrollTop = {
        get: function(e) {
            return t(e.elem)[e.prop]()
        },
        set: function(e) {
            var n = this.get(e);
            if (e.options.interrupt && e._last && e._last !== n)
                return t(e.elem).stop();
            var r = Math.round(e.now);
            n !== r && (t(e.elem)[e.prop](r),
            e._last = this.get(e))
        }
    },
    r
}),
function() {
    function t(t, e, n) {
        switch (n.length) {
        case 0:
            return t.call(e);
        case 1:
            return t.call(e, n[0]);
        case 2:
            return t.call(e, n[0], n[1]);
        case 3:
            return t.call(e, n[0], n[1], n[2])
        }
        return t.apply(e, n)
    }
    function e(t, e, n, r) {
        for (var i = -1, o = null == t ? 0 : t.length; ++i < o; ) {
            var s = t[i];
            e(r, s, n(s), t)
        }
        return r
    }
    function n(t, e) {
        for (var n = -1, r = null == t ? 0 : t.length; ++n < r && !1 !== e(t[n], n, t); )
            ;
        return t
    }
    function r(t, e) {
        for (var n = null == t ? 0 : t.length; n-- && !1 !== e(t[n], n, t); )
            ;
        return t
    }
    function i(t, e) {
        for (var n = -1, r = null == t ? 0 : t.length; ++n < r; )
            if (!e(t[n], n, t))
                return !1;
        return !0
    }
    function o(t, e) {
        for (var n = -1, r = null == t ? 0 : t.length, i = 0, o = []; ++n < r; ) {
            var s = t[n];
            e(s, n, t) && (o[i++] = s)
        }
        return o
    }
    function s(t, e) {
        return !!(null == t ? 0 : t.length) && m(t, e, 0) > -1
    }
    function a(t, e, n) {
        for (var r = -1, i = null == t ? 0 : t.length; ++r < i; )
            if (n(e, t[r]))
                return !0;
        return !1
    }
    function u(t, e) {
        for (var n = -1, r = null == t ? 0 : t.length, i = Array(r); ++n < r; )
            i[n] = e(t[n], n, t);
        return i
    }
    function c(t, e) {
        for (var n = -1, r = e.length, i = t.length; ++n < r; )
            t[i + n] = e[n];
        return t
    }
    function l(t, e, n, r) {
        var i = -1
          , o = null == t ? 0 : t.length;
        for (r && o && (n = t[++i]); ++i < o; )
            n = e(n, t[i], i, t);
        return n
    }
    function f(t, e, n, r) {
        var i = null == t ? 0 : t.length;
        for (r && i && (n = t[--i]); i--; )
            n = e(n, t[i], i, t);
        return n
    }
    function h(t, e) {
        for (var n = -1, r = null == t ? 0 : t.length; ++n < r; )
            if (e(t[n], n, t))
                return !0;
        return !1
    }
    function p(t) {
        return t.split("")
    }
    function d(t) {
        return t.match(Pe) || []
    }
    function v(t, e, n) {
        var r;
        return n(t, function(t, n, i) {
            if (e(t, n, i))
                return r = n,
                !1
        }),
        r
    }
    function g(t, e, n, r) {
        for (var i = t.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i; )
            if (e(t[o], o, t))
                return o;
        return -1
    }
    function m(t, e, n) {
        return e === e ? W(t, e, n) : g(t, _, n)
    }
    function y(t, e, n, r) {
        for (var i = n - 1, o = t.length; ++i < o; )
            if (r(t[i], e))
                return i;
        return -1
    }
    function _(t) {
        return t !== t
    }
    function b(t, e) {
        var n = null == t ? 0 : t.length;
        return n ? E(t, e) / n : jt
    }
    function w(t) {
        return function(e) {
            return null == e ? K : e[t]
        }
    }
    function x(t) {
        return function(e) {
            return null == t ? K : t[e]
        }
    }
    function T(t, e, n, r, i) {
        return i(t, function(t, i, o) {
            n = r ? (r = !1,
            t) : e(n, t, i, o)
        }),
        n
    }
    function C(t, e) {
        var n = t.length;
        for (t.sort(e); n--; )
            t[n] = t[n].value;
        return t
    }
    function E(t, e) {
        for (var n, r = -1, i = t.length; ++r < i; ) {
            var o = e(t[r]);
            o !== K && (n = n === K ? o : n + o)
        }
        return n
    }
    function k(t, e) {
        for (var n = -1, r = Array(t); ++n < t; )
            r[n] = e(n);
        return r
    }
    function S(t, e) {
        return u(e, function(e) {
            return [e, t[e]]
        })
    }
    function j(t) {
        return function(e) {
            return t(e)
        }
    }
    function A(t, e) {
        return u(e, function(e) {
            return t[e]
        })
    }
    function O(t, e) {
        return t.has(e)
    }
    function R(t, e) {
        for (var n = -1, r = t.length; ++n < r && m(e, t[n], 0) > -1; )
            ;
        return n
    }
    function P(t, e) {
        for (var n = t.length; n-- && m(e, t[n], 0) > -1; )
            ;
        return n
    }
    function F(t, e) {
        for (var n = t.length, r = 0; n--; )
            t[n] === e && ++r;
        return r
    }
    function D(t) {
        return "\\" + bn[t]
    }
    function I(t, e) {
        return null == t ? K : t[e]
    }
    function N(t) {
        return fn.test(t)
    }
    function L(t) {
        return hn.test(t)
    }
    function $(t) {
        for (var e, n = []; !(e = t.next()).done; )
            n.push(e.value);
        return n
    }
    function z(t) {
        var e = -1
          , n = Array(t.size);
        return t.forEach(function(t, r) {
            n[++e] = [r, t]
        }),
        n
    }
    function H(t, e) {
        return function(n) {
            return t(e(n))
        }
    }
    function B(t, e) {
        for (var n = -1, r = t.length, i = 0, o = []; ++n < r; ) {
            var s = t[n];
            s !== e && s !== rt || (t[n] = rt,
            o[i++] = n)
        }
        return o
    }
    function q(t) {
        var e = -1
          , n = Array(t.size);
        return t.forEach(function(t) {
            n[++e] = t
        }),
        n
    }
    function M(t) {
        var e = -1
          , n = Array(t.size);
        return t.forEach(function(t) {
            n[++e] = [t, t]
        }),
        n
    }
    function W(t, e, n) {
        for (var r = n - 1, i = t.length; ++r < i; )
            if (t[r] === e)
                return r;
        return -1
    }
    function U(t, e, n) {
        for (var r = n + 1; r--; )
            if (t[r] === e)
                return r;
        return r
    }
    function V(t) {
        return N(t) ? X(t) : Ln(t)
    }
    function Q(t) {
        return N(t) ? G(t) : p(t)
    }
    function X(t) {
        for (var e = cn.lastIndex = 0; cn.test(t); )
            ++e;
        return e
    }
    function G(t) {
        return t.match(cn) || []
    }
    function Y(t) {
        return t.match(ln) || []
    }
    var K, Z = 200, J = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", tt = "Expected a function", et = "__lodash_hash_undefined__", nt = 500, rt = "__lodash_placeholder__", it = 1, ot = 2, st = 4, at = 1, ut = 2, ct = 1, lt = 2, ft = 4, ht = 8, pt = 16, dt = 32, vt = 64, gt = 128, mt = 256, yt = 512, _t = 30, bt = "...", wt = 800, xt = 16, Tt = 1, Ct = 2, Et = 1 / 0, kt = 9007199254740991, St = 1.7976931348623157e308, jt = NaN, At = 4294967295, Ot = At - 1, Rt = At >>> 1, Pt = [["ary", gt], ["bind", ct], ["bindKey", lt], ["curry", ht], ["curryRight", pt], ["flip", yt], ["partial", dt], ["partialRight", vt], ["rearg", mt]], Ft = "[object Arguments]", Dt = "[object Array]", It = "[object AsyncFunction]", Nt = "[object Boolean]", Lt = "[object Date]", $t = "[object DOMException]", zt = "[object Error]", Ht = "[object Function]", Bt = "[object GeneratorFunction]", qt = "[object Map]", Mt = "[object Number]", Wt = "[object Null]", Ut = "[object Object]", Vt = "[object Proxy]", Qt = "[object RegExp]", Xt = "[object Set]", Gt = "[object String]", Yt = "[object Symbol]", Kt = "[object Undefined]", Zt = "[object WeakMap]", Jt = "[object WeakSet]", te = "[object ArrayBuffer]", ee = "[object DataView]", ne = "[object Float32Array]", re = "[object Float64Array]", ie = "[object Int8Array]", oe = "[object Int16Array]", se = "[object Int32Array]", ae = "[object Uint8Array]", ue = "[object Uint8ClampedArray]", ce = "[object Uint16Array]", le = "[object Uint32Array]", fe = /\b__p \+= '';/g, he = /\b(__p \+=) '' \+/g, pe = /(__e\(.*?\)|\b__t\)) \+\n'';/g, de = /&(?:amp|lt|gt|quot|#39);/g, ve = /[&<>"']/g, ge = RegExp(de.source), me = RegExp(ve.source), ye = /<%-([\s\S]+?)%>/g, _e = /<%([\s\S]+?)%>/g, be = /<%=([\s\S]+?)%>/g, we = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, xe = /^\w*$/, Te = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Ce = /[\\^$.*+?()[\]{}|]/g, Ee = RegExp(Ce.source), ke = /^\s+|\s+$/g, Se = /^\s+/, je = /\s+$/, Ae = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Oe = /\{\n\/\* \[wrapped with (.+)\] \*/, Re = /,? & /, Pe = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Fe = /\\(\\)?/g, De = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Ie = /\w*$/, Ne = /^[-+]0x[0-9a-f]+$/i, Le = /^0b[01]+$/i, $e = /^\[object .+?Constructor\]$/, ze = /^0o[0-7]+$/i, He = /^(?:0|[1-9]\d*)$/, Be = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, qe = /($^)/, Me = /['\n\r\u2028\u2029\\]/g, We = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff", Ue = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Ve = "[" + Ue + "]", Qe = "[" + We + "]", Xe = "[a-z\\xdf-\\xf6\\xf8-\\xff]", Ge = "[^\\ud800-\\udfff" + Ue + "\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]", Ye = "\\ud83c[\\udffb-\\udfff]", Ke = "(?:\\ud83c[\\udde6-\\uddff]){2}", Ze = "[\\ud800-\\udbff][\\udc00-\\udfff]", Je = "[A-Z\\xc0-\\xd6\\xd8-\\xde]", tn = "(?:" + Xe + "|" + Ge + ")", en = "(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?", nn = "(?:\\u200d(?:" + ["[^\\ud800-\\udfff]", Ke, Ze].join("|") + ")[\\ufe0e\\ufe0f]?" + en + ")*", rn = "[\\ufe0e\\ufe0f]?" + en + nn, on = "(?:" + ["[\\u2700-\\u27bf]", Ke, Ze].join("|") + ")" + rn, sn = "(?:" + ["[^\\ud800-\\udfff]" + Qe + "?", Qe, Ke, Ze, "[\\ud800-\\udfff]"].join("|") + ")", an = RegExp("['’]", "g"), un = RegExp(Qe, "g"), cn = RegExp(Ye + "(?=" + Ye + ")|" + sn + rn, "g"), ln = RegExp([Je + "?" + Xe + "+(?:['’](?:d|ll|m|re|s|t|ve))?(?=" + [Ve, Je, "$"].join("|") + ")", "(?:[A-Z\\xc0-\\xd6\\xd8-\\xde]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=" + [Ve, Je + tn, "$"].join("|") + ")", Je + "?" + tn + "+(?:['’](?:d|ll|m|re|s|t|ve))?", Je + "+(?:['’](?:D|LL|M|RE|S|T|VE))?", "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", "\\d+", on].join("|"), "g"), fn = RegExp("[\\u200d\\ud800-\\udfff" + We + "\\ufe0e\\ufe0f]"), hn = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, pn = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"], dn = -1, vn = {};
    vn[ne] = vn[re] = vn[ie] = vn[oe] = vn[se] = vn[ae] = vn[ue] = vn[ce] = vn[le] = !0,
    vn[Ft] = vn[Dt] = vn[te] = vn[Nt] = vn[ee] = vn[Lt] = vn[zt] = vn[Ht] = vn[qt] = vn[Mt] = vn[Ut] = vn[Qt] = vn[Xt] = vn[Gt] = vn[Zt] = !1;
    var gn = {};
    gn[Ft] = gn[Dt] = gn[te] = gn[ee] = gn[Nt] = gn[Lt] = gn[ne] = gn[re] = gn[ie] = gn[oe] = gn[se] = gn[qt] = gn[Mt] = gn[Ut] = gn[Qt] = gn[Xt] = gn[Gt] = gn[Yt] = gn[ae] = gn[ue] = gn[ce] = gn[le] = !0,
    gn[zt] = gn[Ht] = gn[Zt] = !1;
    var mn = {
        "À": "A",
        "Á": "A",
        "Â": "A",
        "Ã": "A",
        "Ä": "A",
        "Å": "A",
        "à": "a",
        "á": "a",
        "â": "a",
        "ã": "a",
        "ä": "a",
        "å": "a",
        "Ç": "C",
        "ç": "c",
        "Ð": "D",
        "ð": "d",
        "È": "E",
        "É": "E",
        "Ê": "E",
        "Ë": "E",
        "è": "e",
        "é": "e",
        "ê": "e",
        "ë": "e",
        "Ì": "I",
        "Í": "I",
        "Î": "I",
        "Ï": "I",
        "ì": "i",
        "í": "i",
        "î": "i",
        "ï": "i",
        "Ñ": "N",
        "ñ": "n",
        "Ò": "O",
        "Ó": "O",
        "Ô": "O",
        "Õ": "O",
        "Ö": "O",
        "Ø": "O",
        "ò": "o",
        "ó": "o",
        "ô": "o",
        "õ": "o",
        "ö": "o",
        "ø": "o",
        "Ù": "U",
        "Ú": "U",
        "Û": "U",
        "Ü": "U",
        "ù": "u",
        "ú": "u",
        "û": "u",
        "ü": "u",
        "Ý": "Y",
        "ý": "y",
        "ÿ": "y",
        "Æ": "Ae",
        "æ": "ae",
        "Þ": "Th",
        "þ": "th",
        "ß": "ss",
        "Ā": "A",
        "Ă": "A",
        "Ą": "A",
        "ā": "a",
        "ă": "a",
        "ą": "a",
        "Ć": "C",
        "Ĉ": "C",
        "Ċ": "C",
        "Č": "C",
        "ć": "c",
        "ĉ": "c",
        "ċ": "c",
        "č": "c",
        "Ď": "D",
        "Đ": "D",
        "ď": "d",
        "đ": "d",
        "Ē": "E",
        "Ĕ": "E",
        "Ė": "E",
        "Ę": "E",
        "Ě": "E",
        "ē": "e",
        "ĕ": "e",
        "ė": "e",
        "ę": "e",
        "ě": "e",
        "Ĝ": "G",
        "Ğ": "G",
        "Ġ": "G",
        "Ģ": "G",
        "ĝ": "g",
        "ğ": "g",
        "ġ": "g",
        "ģ": "g",
        "Ĥ": "H",
        "Ħ": "H",
        "ĥ": "h",
        "ħ": "h",
        "Ĩ": "I",
        "Ī": "I",
        "Ĭ": "I",
        "Į": "I",
        "İ": "I",
        "ĩ": "i",
        "ī": "i",
        "ĭ": "i",
        "į": "i",
        "ı": "i",
        "Ĵ": "J",
        "ĵ": "j",
        "Ķ": "K",
        "ķ": "k",
        "ĸ": "k",
        "Ĺ": "L",
        "Ļ": "L",
        "Ľ": "L",
        "Ŀ": "L",
        "Ł": "L",
        "ĺ": "l",
        "ļ": "l",
        "ľ": "l",
        "ŀ": "l",
        "ł": "l",
        "Ń": "N",
        "Ņ": "N",
        "Ň": "N",
        "Ŋ": "N",
        "ń": "n",
        "ņ": "n",
        "ň": "n",
        "ŋ": "n",
        "Ō": "O",
        "Ŏ": "O",
        "Ő": "O",
        "ō": "o",
        "ŏ": "o",
        "ő": "o",
        "Ŕ": "R",
        "Ŗ": "R",
        "Ř": "R",
        "ŕ": "r",
        "ŗ": "r",
        "ř": "r",
        "Ś": "S",
        "Ŝ": "S",
        "Ş": "S",
        "Š": "S",
        "ś": "s",
        "ŝ": "s",
        "ş": "s",
        "š": "s",
        "Ţ": "T",
        "Ť": "T",
        "Ŧ": "T",
        "ţ": "t",
        "ť": "t",
        "ŧ": "t",
        "Ũ": "U",
        "Ū": "U",
        "Ŭ": "U",
        "Ů": "U",
        "Ű": "U",
        "Ų": "U",
        "ũ": "u",
        "ū": "u",
        "ŭ": "u",
        "ů": "u",
        "ű": "u",
        "ų": "u",
        "Ŵ": "W",
        "ŵ": "w",
        "Ŷ": "Y",
        "ŷ": "y",
        "Ÿ": "Y",
        "Ź": "Z",
        "Ż": "Z",
        "Ž": "Z",
        "ź": "z",
        "ż": "z",
        "ž": "z",
        "Ĳ": "IJ",
        "ĳ": "ij",
        "Œ": "Oe",
        "œ": "oe",
        "ŉ": "'n",
        "ſ": "s"
    }
      , yn = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    }
      , _n = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
    }
      , bn = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
    }
      , wn = parseFloat
      , xn = parseInt
      , Tn = "object" == typeof global && global && global.Object === Object && global
      , Cn = "object" == typeof self && self && self.Object === Object && self
      , En = Tn || Cn || Function("return this")()
      , kn = "object" == typeof exports && exports && !exports.nodeType && exports
      , Sn = kn && "object" == typeof module && module && !module.nodeType && module
      , jn = Sn && Sn.exports === kn
      , An = jn && Tn.process
      , On = function() {
        try {
            var t = Sn && Sn.require && Sn.require("util").types;
            return t || An && An.binding && An.binding("util")
        } catch (t) {}
    }()
      , Rn = On && On.isArrayBuffer
      , Pn = On && On.isDate
      , Fn = On && On.isMap
      , Dn = On && On.isRegExp
      , In = On && On.isSet
      , Nn = On && On.isTypedArray
      , Ln = w("length")
      , $n = x(mn)
      , zn = x(yn)
      , Hn = x(_n)
      , Bn = function p(x) {
        function W(t) {
            if (eu(t) && !ph(t) && !(t instanceof Pe)) {
                if (t instanceof G)
                    return t;
                if (hl.call(t, "__wrapped__"))
                    return Zo(t)
            }
            return new G(t)
        }
        function X() {}
        function G(t, e) {
            this.__wrapped__ = t,
            this.__actions__ = [],
            this.__chain__ = !!e,
            this.__index__ = 0,
            this.__values__ = K
        }
        function Pe(t) {
            this.__wrapped__ = t,
            this.__actions__ = [],
            this.__dir__ = 1,
            this.__filtered__ = !1,
            this.__iteratees__ = [],
            this.__takeCount__ = At,
            this.__views__ = []
        }
        function We() {
            var t = new Pe(this.__wrapped__);
            return t.__actions__ = Pi(this.__actions__),
            t.__dir__ = this.__dir__,
            t.__filtered__ = this.__filtered__,
            t.__iteratees__ = Pi(this.__iteratees__),
            t.__takeCount__ = this.__takeCount__,
            t.__views__ = Pi(this.__views__),
            t
        }
        function Ue() {
            if (this.__filtered__) {
                var t = new Pe(this);
                t.__dir__ = -1,
                t.__filtered__ = !0
            } else
                t = this.clone(),
                t.__dir__ *= -1;
            return t
        }
        function Ve() {
            var t = this.__wrapped__.value()
              , e = this.__dir__
              , n = ph(t)
              , r = e < 0
              , i = n ? t.length : 0
              , o = xo(0, i, this.__views__)
              , s = o.start
              , a = o.end
              , u = a - s
              , c = r ? a : s - 1
              , l = this.__iteratees__
              , f = l.length
              , h = 0
              , p = ql(u, this.__takeCount__);
            if (!n || !r && i == u && p == u)
                return vi(t, this.__actions__);
            var d = [];
            t: for (; u-- && h < p; ) {
                c += e;
                for (var v = -1, g = t[c]; ++v < f; ) {
                    var m = l[v]
                      , y = m.iteratee
                      , _ = m.type
                      , b = y(g);
                    if (_ == Ct)
                        g = b;
                    else if (!b) {
                        if (_ == Tt)
                            continue t;
                        break t
                    }
                }
                d[h++] = g
            }
            return d
        }
        function Qe(t) {
            var e = -1
              , n = null == t ? 0 : t.length;
            for (this.clear(); ++e < n; ) {
                var r = t[e];
                this.set(r[0], r[1])
            }
        }
        function Xe() {
            this.__data__ = Zl ? Zl(null) : {},
            this.size = 0
        }
        function Ge(t) {
            var e = this.has(t) && delete this.__data__[t];
            return this.size -= e ? 1 : 0,
            e
        }
        function Ye(t) {
            var e = this.__data__;
            if (Zl) {
                var n = e[t];
                return n === et ? K : n
            }
            return hl.call(e, t) ? e[t] : K
        }
        function Ke(t) {
            var e = this.__data__;
            return Zl ? e[t] !== K : hl.call(e, t)
        }
        function Ze(t, e) {
            var n = this.__data__;
            return this.size += this.has(t) ? 0 : 1,
            n[t] = Zl && e === K ? et : e,
            this
        }
        function Je(t) {
            var e = -1
              , n = null == t ? 0 : t.length;
            for (this.clear(); ++e < n; ) {
                var r = t[e];
                this.set(r[0], r[1])
            }
        }
        function tn() {
            this.__data__ = [],
            this.size = 0
        }
        function en(t) {
            var e = this.__data__
              , n = Qn(e, t);
            return !(n < 0) && (n == e.length - 1 ? e.pop() : kl.call(e, n, 1),
            --this.size,
            !0)
        }
        function nn(t) {
            var e = this.__data__
              , n = Qn(e, t);
            return n < 0 ? K : e[n][1]
        }
        function rn(t) {
            return Qn(this.__data__, t) > -1
        }
        function on(t, e) {
            var n = this.__data__
              , r = Qn(n, t);
            return r < 0 ? (++this.size,
            n.push([t, e])) : n[r][1] = e,
            this
        }
        function sn(t) {
            var e = -1
              , n = null == t ? 0 : t.length;
            for (this.clear(); ++e < n; ) {
                var r = t[e];
                this.set(r[0], r[1])
            }
        }
        function cn() {
            this.size = 0,
            this.__data__ = {
                hash: new Qe,
                map: new (Xl || Je),
                string: new Qe
            }
        }
        function ln(t) {
            var e = yo(this, t).delete(t);
            return this.size -= e ? 1 : 0,
            e
        }
        function fn(t) {
            return yo(this, t).get(t)
        }
        function hn(t) {
            return yo(this, t).has(t)
        }
        function mn(t, e) {
            var n = yo(this, t)
              , r = n.size;
            return n.set(t, e),
            this.size += n.size == r ? 0 : 1,
            this
        }
        function yn(t) {
            var e = -1
              , n = null == t ? 0 : t.length;
            for (this.__data__ = new sn; ++e < n; )
                this.add(t[e])
        }
        function _n(t) {
            return this.__data__.set(t, et),
            this
        }
        function bn(t) {
            return this.__data__.has(t)
        }
        function Tn(t) {
            var e = this.__data__ = new Je(t);
            this.size = e.size
        }
        function Cn() {
            this.__data__ = new Je,
            this.size = 0
        }
        function kn(t) {
            var e = this.__data__
              , n = e.delete(t);
            return this.size = e.size,
            n
        }
        function Sn(t) {
            return this.__data__.get(t)
        }
        function An(t) {
            return this.__data__.has(t)
        }
        function On(t, e) {
            var n = this.__data__;
            if (n instanceof Je) {
                var r = n.__data__;
                if (!Xl || r.length < Z - 1)
                    return r.push([t, e]),
                    this.size = ++n.size,
                    this;
                n = this.__data__ = new sn(r)
            }
            return n.set(t, e),
            this.size = n.size,
            this
        }
        function Ln(t, e) {
            var n = ph(t)
              , r = !n && hh(t)
              , i = !n && !r && vh(t)
              , o = !n && !r && !i && bh(t)
              , s = n || r || i || o
              , a = s ? k(t.length, ol) : []
              , u = a.length;
            for (var c in t)
                !e && !hl.call(t, c) || s && ("length" == c || i && ("offset" == c || "parent" == c) || o && ("buffer" == c || "byteLength" == c || "byteOffset" == c) || Oo(c, u)) || a.push(c);
            return a
        }
        function qn(t) {
            var e = t.length;
            return e ? t[Yr(0, e - 1)] : K
        }
        function Mn(t, e) {
            return Xo(Pi(t), Jn(e, 0, t.length))
        }
        function Wn(t) {
            return Xo(Pi(t))
        }
        function Un(t, e, n) {
            (n === K || Ba(t[e], n)) && (n !== K || e in t) || Kn(t, e, n)
        }
        function Vn(t, e, n) {
            var r = t[e];
            hl.call(t, e) && Ba(r, n) && (n !== K || e in t) || Kn(t, e, n)
        }
        function Qn(t, e) {
            for (var n = t.length; n--; )
                if (Ba(t[n][0], e))
                    return n;
            return -1
        }
        function Xn(t, e, n, r) {
            return ff(t, function(t, i, o) {
                e(r, t, n(t), o)
            }),
            r
        }
        function Gn(t, e) {
            return t && Fi(e, Nu(e), t)
        }
        function Yn(t, e) {
            return t && Fi(e, Lu(e), t)
        }
        function Kn(t, e, n) {
            "__proto__" == e && Ol ? Ol(t, e, {
                configurable: !0,
                enumerable: !0,
                value: n,
                writable: !0
            }) : t[e] = n
        }
        function Zn(t, e) {
            for (var n = -1, r = e.length, i = Zc(r), o = null == t; ++n < r; )
                i[n] = o ? K : Fu(t, e[n]);
            return i
        }
        function Jn(t, e, n) {
            return t === t && (n !== K && (t = t <= n ? t : n),
            e !== K && (t = t >= e ? t : e)),
            t
        }
        function tr(t, e, r, i, o, s) {
            var a, u = e & it, c = e & ot, l = e & st;
            if (r && (a = o ? r(t, i, o, s) : r(t)),
            a !== K)
                return a;
            if (!tu(t))
                return t;
            var f = ph(t);
            if (f) {
                if (a = Eo(t),
                !u)
                    return Pi(t, a)
            } else {
                var h = Tf(t)
                  , p = h == Ht || h == Bt;
                if (vh(t))
                    return xi(t, u);
                if (h == Ut || h == Ft || p && !o) {
                    if (a = c || p ? {} : ko(t),
                    !u)
                        return c ? Ii(t, Yn(a, t)) : Di(t, Gn(a, t))
                } else {
                    if (!gn[h])
                        return o ? t : {};
                    a = So(t, h, u)
                }
            }
            s || (s = new Tn);
            var d = s.get(t);
            if (d)
                return d;
            s.set(t, a),
            _h(t) ? t.forEach(function(n) {
                a.add(tr(n, e, r, n, t, s))
            }) : mh(t) && t.forEach(function(n, i) {
                a.set(i, tr(n, e, r, i, t, s))
            });
            var v = l ? c ? po : ho : c ? Lu : Nu
              , g = f ? K : v(t);
            return n(g || t, function(n, i) {
                g && (i = n,
                n = t[i]),
                Vn(a, i, tr(n, e, r, i, t, s))
            }),
            a
        }
        function er(t) {
            var e = Nu(t);
            return function(n) {
                return nr(n, t, e)
            }
        }
        function nr(t, e, n) {
            var r = n.length;
            if (null == t)
                return !r;
            for (t = rl(t); r--; ) {
                var i = n[r]
                  , o = e[i]
                  , s = t[i];
                if (s === K && !(i in t) || !o(s))
                    return !1
            }
            return !0
        }
        function rr(t, e, n) {
            if ("function" != typeof t)
                throw new sl(tt);
            return kf(function() {
                t.apply(K, n)
            }, e)
        }
        function ir(t, e, n, r) {
            var i = -1
              , o = s
              , c = !0
              , l = t.length
              , f = []
              , h = e.length;
            if (!l)
                return f;
            n && (e = u(e, j(n))),
            r ? (o = a,
            c = !1) : e.length >= Z && (o = O,
            c = !1,
            e = new yn(e));
            t: for (; ++i < l; ) {
                var p = t[i]
                  , d = null == n ? p : n(p);
                if (p = r || 0 !== p ? p : 0,
                c && d === d) {
                    for (var v = h; v--; )
                        if (e[v] === d)
                            continue t;
                    f.push(p)
                } else
                    o(e, d, r) || f.push(p)
            }
            return f
        }
        function or(t, e) {
            var n = !0;
            return ff(t, function(t, r, i) {
                return n = !!e(t, r, i)
            }),
            n
        }
        function sr(t, e, n) {
            for (var r = -1, i = t.length; ++r < i; ) {
                var o = t[r]
                  , s = e(o);
                if (null != s && (a === K ? s === s && !hu(s) : n(s, a)))
                    var a = s
                      , u = o
            }
            return u
        }
        function ar(t, e, n, r) {
            var i = t.length;
            for (n = yu(n),
            n < 0 && (n = -n > i ? 0 : i + n),
            r = r === K || r > i ? i : yu(r),
            r < 0 && (r += i),
            r = n > r ? 0 : _u(r); n < r; )
                t[n++] = e;
            return t
        }
        function ur(t, e) {
            var n = [];
            return ff(t, function(t, r, i) {
                e(t, r, i) && n.push(t)
            }),
            n
        }
        function cr(t, e, n, r, i) {
            var o = -1
              , s = t.length;
            for (n || (n = Ao),
            i || (i = []); ++o < s; ) {
                var a = t[o];
                e > 0 && n(a) ? e > 1 ? cr(a, e - 1, n, r, i) : c(i, a) : r || (i[i.length] = a)
            }
            return i
        }
        function lr(t, e) {
            return t && pf(t, e, Nu)
        }
        function fr(t, e) {
            return t && df(t, e, Nu)
        }
        function hr(t, e) {
            return o(e, function(e) {
                return Ka(t[e])
            })
        }
        function pr(t, e) {
            e = bi(e, t);
            for (var n = 0, r = e.length; null != t && n < r; )
                t = t[Go(e[n++])];
            return n && n == r ? t : K
        }
        function dr(t, e, n) {
            var r = e(t);
            return ph(t) ? r : c(r, n(t))
        }
        function vr(t) {
            return null == t ? t === K ? Kt : Wt : Al && Al in rl(t) ? wo(t) : Bo(t)
        }
        function gr(t, e) {
            return t > e
        }
        function mr(t, e) {
            return null != t && hl.call(t, e)
        }
        function yr(t, e) {
            return null != t && e in rl(t)
        }
        function _r(t, e, n) {
            return t >= ql(e, n) && t < Bl(e, n)
        }
        function br(t, e, n) {
            for (var r = n ? a : s, i = t[0].length, o = t.length, c = o, l = Zc(o), f = 1 / 0, h = []; c--; ) {
                var p = t[c];
                c && e && (p = u(p, j(e))),
                f = ql(p.length, f),
                l[c] = !n && (e || i >= 120 && p.length >= 120) ? new yn(c && p) : K
            }
            p = t[0];
            var d = -1
              , v = l[0];
            t: for (; ++d < i && h.length < f; ) {
                var g = p[d]
                  , m = e ? e(g) : g;
                if (g = n || 0 !== g ? g : 0,
                !(v ? O(v, m) : r(h, m, n))) {
                    for (c = o; --c; ) {
                        var y = l[c];
                        if (!(y ? O(y, m) : r(t[c], m, n)))
                            continue t
                    }
                    v && v.push(m),
                    h.push(g)
                }
            }
            return h
        }
        function wr(t, e, n, r) {
            return lr(t, function(t, i, o) {
                e(r, n(t), i, o)
            }),
            r
        }
        function xr(e, n, r) {
            n = bi(n, e),
            e = Mo(e, n);
            var i = null == e ? e : e[Go(ms(n))];
            return null == i ? K : t(i, e, r)
        }
        function Tr(t) {
            return eu(t) && vr(t) == Ft
        }
        function Cr(t) {
            return eu(t) && vr(t) == te
        }
        function Er(t) {
            return eu(t) && vr(t) == Lt
        }
        function kr(t, e, n, r, i) {
            return t === e || (null == t || null == e || !eu(t) && !eu(e) ? t !== t && e !== e : Sr(t, e, n, r, kr, i))
        }
        function Sr(t, e, n, r, i, o) {
            var s = ph(t)
              , a = ph(e)
              , u = s ? Dt : Tf(t)
              , c = a ? Dt : Tf(e);
            u = u == Ft ? Ut : u,
            c = c == Ft ? Ut : c;
            var l = u == Ut
              , f = c == Ut
              , h = u == c;
            if (h && vh(t)) {
                if (!vh(e))
                    return !1;
                s = !0,
                l = !1
            }
            if (h && !l)
                return o || (o = new Tn),
                s || bh(t) ? uo(t, e, n, r, i, o) : co(t, e, u, n, r, i, o);
            if (!(n & at)) {
                var p = l && hl.call(t, "__wrapped__")
                  , d = f && hl.call(e, "__wrapped__");
                if (p || d) {
                    var v = p ? t.value() : t
                      , g = d ? e.value() : e;
                    return o || (o = new Tn),
                    i(v, g, n, r, o)
                }
            }
            return !!h && (o || (o = new Tn),
            lo(t, e, n, r, i, o))
        }
        function jr(t) {
            return eu(t) && Tf(t) == qt
        }
        function Ar(t, e, n, r) {
            var i = n.length
              , o = i
              , s = !r;
            if (null == t)
                return !o;
            for (t = rl(t); i--; ) {
                var a = n[i];
                if (s && a[2] ? a[1] !== t[a[0]] : !(a[0]in t))
                    return !1
            }
            for (; ++i < o; ) {
                a = n[i];
                var u = a[0]
                  , c = t[u]
                  , l = a[1];
                if (s && a[2]) {
                    if (c === K && !(u in t))
                        return !1
                } else {
                    var f = new Tn;
                    if (r)
                        var h = r(c, l, u, t, e, f);
                    if (!(h === K ? kr(l, c, at | ut, r, f) : h))
                        return !1
                }
            }
            return !0
        }
        function Or(t) {
            return !(!tu(t) || Io(t)) && (Ka(t) ? yl : $e).test(Yo(t))
        }
        function Rr(t) {
            return eu(t) && vr(t) == Qt
        }
        function Pr(t) {
            return eu(t) && Tf(t) == Xt
        }
        function Fr(t) {
            return eu(t) && Ja(t.length) && !!vn[vr(t)]
        }
        function Dr(t) {
            return "function" == typeof t ? t : null == t ? kc : "object" == typeof t ? ph(t) ? Hr(t[0], t[1]) : zr(t) : Dc(t)
        }
        function Ir(t) {
            if (!No(t))
                return Hl(t);
            var e = [];
            for (var n in rl(t))
                hl.call(t, n) && "constructor" != n && e.push(n);
            return e
        }
        function Nr(t) {
            if (!tu(t))
                return Ho(t);
            var e = No(t)
              , n = [];
            for (var r in t)
                ("constructor" != r || !e && hl.call(t, r)) && n.push(r);
            return n
        }
        function Lr(t, e) {
            return t < e
        }
        function $r(t, e) {
            var n = -1
              , r = qa(t) ? Zc(t.length) : [];
            return ff(t, function(t, i, o) {
                r[++n] = e(t, i, o)
            }),
            r
        }
        function zr(t) {
            var e = _o(t);
            return 1 == e.length && e[0][2] ? $o(e[0][0], e[0][1]) : function(n) {
                return n === t || Ar(n, t, e)
            }
        }
        function Hr(t, e) {
            return Po(t) && Lo(e) ? $o(Go(t), e) : function(n) {
                var r = Fu(n, t);
                return r === K && r === e ? Iu(n, t) : kr(e, r, at | ut)
            }
        }
        function Br(t, e, n, r, i) {
            t !== e && pf(e, function(o, s) {
                if (i || (i = new Tn),
                tu(o))
                    qr(t, e, s, n, Br, r, i);
                else {
                    var a = r ? r(Uo(t, s), o, s + "", t, e, i) : K;
                    a === K && (a = o),
                    Un(t, s, a)
                }
            }, Lu)
        }
        function qr(t, e, n, r, i, o, s) {
            var a = Uo(t, n)
              , u = Uo(e, n)
              , c = s.get(u);
            if (c)
                return void Un(t, n, c);
            var l = o ? o(a, u, n + "", t, e, s) : K
              , f = l === K;
            if (f) {
                var h = ph(u)
                  , p = !h && vh(u)
                  , d = !h && !p && bh(u);
                l = u,
                h || p || d ? ph(a) ? l = a : Ma(a) ? l = Pi(a) : p ? (f = !1,
                l = xi(u, !0)) : d ? (f = !1,
                l = Si(u, !0)) : l = [] : cu(u) || hh(u) ? (l = a,
                hh(a) ? l = wu(a) : tu(a) && !Ka(a) || (l = ko(u))) : f = !1
            }
            f && (s.set(u, l),
            i(l, u, r, o, s),
            s.delete(u)),
            Un(t, n, l)
        }
        function Mr(t, e) {
            var n = t.length;
            if (n)
                return e += e < 0 ? n : 0,
                Oo(e, n) ? t[e] : K
        }
        function Wr(t, e, n) {
            var r = -1;
            return e = u(e.length ? e : [kc], j(mo())),
            C($r(t, function(t, n, i) {
                return {
                    criteria: u(e, function(e) {
                        return e(t)
                    }),
                    index: ++r,
                    value: t
                }
            }), function(t, e) {
                return Ai(t, e, n)
            })
        }
        function Ur(t, e) {
            return Vr(t, e, function(e, n) {
                return Iu(t, n)
            })
        }
        function Vr(t, e, n) {
            for (var r = -1, i = e.length, o = {}; ++r < i; ) {
                var s = e[r]
                  , a = pr(t, s);
                n(a, s) && ni(o, bi(s, t), a)
            }
            return o
        }
        function Qr(t) {
            return function(e) {
                return pr(e, t)
            }
        }
        function Xr(t, e, n, r) {
            var i = r ? y : m
              , o = -1
              , s = e.length
              , a = t;
            for (t === e && (e = Pi(e)),
            n && (a = u(t, j(n))); ++o < s; )
                for (var c = 0, l = e[o], f = n ? n(l) : l; (c = i(a, f, c, r)) > -1; )
                    a !== t && kl.call(a, c, 1),
                    kl.call(t, c, 1);
            return t
        }
        function Gr(t, e) {
            for (var n = t ? e.length : 0, r = n - 1; n--; ) {
                var i = e[n];
                if (n == r || i !== o) {
                    var o = i;
                    Oo(i) ? kl.call(t, i, 1) : hi(t, i)
                }
            }
            return t
        }
        function Yr(t, e) {
            return t + Il(Ul() * (e - t + 1))
        }
        function Kr(t, e, n, r) {
            for (var i = -1, o = Bl(Dl((e - t) / (n || 1)), 0), s = Zc(o); o--; )
                s[r ? o : ++i] = t,
                t += n;
            return s
        }
        function Zr(t, e) {
            var n = "";
            if (!t || e < 1 || e > kt)
                return n;
            do {
                e % 2 && (n += t),
                (e = Il(e / 2)) && (t += t)
            } while (e);
            return n
        }
        function Jr(t, e) {
            return Sf(qo(t, e, kc), t + "")
        }
        function ti(t) {
            return qn(Gu(t))
        }
        function ei(t, e) {
            var n = Gu(t);
            return Xo(n, Jn(e, 0, n.length))
        }
        function ni(t, e, n, r) {
            if (!tu(t))
                return t;
            e = bi(e, t);
            for (var i = -1, o = e.length, s = o - 1, a = t; null != a && ++i < o; ) {
                var u = Go(e[i])
                  , c = n;
                if (i != s) {
                    var l = a[u];
                    c = r ? r(l, u, a) : K,
                    c === K && (c = tu(l) ? l : Oo(e[i + 1]) ? [] : {})
                }
                Vn(a, u, c),
                a = a[u]
            }
            return t
        }
        function ri(t) {
            return Xo(Gu(t))
        }
        function ii(t, e, n) {
            var r = -1
              , i = t.length;
            e < 0 && (e = -e > i ? 0 : i + e),
            n = n > i ? i : n,
            n < 0 && (n += i),
            i = e > n ? 0 : n - e >>> 0,
            e >>>= 0;
            for (var o = Zc(i); ++r < i; )
                o[r] = t[r + e];
            return o
        }
        function oi(t, e) {
            var n;
            return ff(t, function(t, r, i) {
                return !(n = e(t, r, i))
            }),
            !!n
        }
        function si(t, e, n) {
            var r = 0
              , i = null == t ? r : t.length;
            if ("number" == typeof e && e === e && i <= Rt) {
                for (; r < i; ) {
                    var o = r + i >>> 1
                      , s = t[o];
                    null !== s && !hu(s) && (n ? s <= e : s < e) ? r = o + 1 : i = o
                }
                return i
            }
            return ai(t, e, kc, n)
        }
        function ai(t, e, n, r) {
            e = n(e);
            for (var i = 0, o = null == t ? 0 : t.length, s = e !== e, a = null === e, u = hu(e), c = e === K; i < o; ) {
                var l = Il((i + o) / 2)
                  , f = n(t[l])
                  , h = f !== K
                  , p = null === f
                  , d = f === f
                  , v = hu(f);
                if (s)
                    var g = r || d;
                else
                    g = c ? d && (r || h) : a ? d && h && (r || !p) : u ? d && h && !p && (r || !v) : !p && !v && (r ? f <= e : f < e);
                g ? i = l + 1 : o = l
            }
            return ql(o, Ot)
        }
        function ui(t, e) {
            for (var n = -1, r = t.length, i = 0, o = []; ++n < r; ) {
                var s = t[n]
                  , a = e ? e(s) : s;
                if (!n || !Ba(a, u)) {
                    var u = a;
                    o[i++] = 0 === s ? 0 : s
                }
            }
            return o
        }
        function ci(t) {
            return "number" == typeof t ? t : hu(t) ? jt : +t
        }
        function li(t) {
            if ("string" == typeof t)
                return t;
            if (ph(t))
                return u(t, li) + "";
            if (hu(t))
                return cf ? cf.call(t) : "";
            var e = t + "";
            return "0" == e && 1 / t == -Et ? "-0" : e
        }
        function fi(t, e, n) {
            var r = -1
              , i = s
              , o = t.length
              , u = !0
              , c = []
              , l = c;
            if (n)
                u = !1,
                i = a;
            else if (o >= Z) {
                var f = e ? null : _f(t);
                if (f)
                    return q(f);
                u = !1,
                i = O,
                l = new yn
            } else
                l = e ? [] : c;
            t: for (; ++r < o; ) {
                var h = t[r]
                  , p = e ? e(h) : h;
                if (h = n || 0 !== h ? h : 0,
                u && p === p) {
                    for (var d = l.length; d--; )
                        if (l[d] === p)
                            continue t;
                    e && l.push(p),
                    c.push(h)
                } else
                    i(l, p, n) || (l !== c && l.push(p),
                    c.push(h))
            }
            return c
        }
        function hi(t, e) {
            return e = bi(e, t),
            null == (t = Mo(t, e)) || delete t[Go(ms(e))]
        }
        function pi(t, e, n, r) {
            return ni(t, e, n(pr(t, e)), r)
        }
        function di(t, e, n, r) {
            for (var i = t.length, o = r ? i : -1; (r ? o-- : ++o < i) && e(t[o], o, t); )
                ;
            return n ? ii(t, r ? 0 : o, r ? o + 1 : i) : ii(t, r ? o + 1 : 0, r ? i : o)
        }
        function vi(t, e) {
            var n = t;
            return n instanceof Pe && (n = n.value()),
            l(e, function(t, e) {
                return e.func.apply(e.thisArg, c([t], e.args))
            }, n)
        }
        function gi(t, e, n) {
            var r = t.length;
            if (r < 2)
                return r ? fi(t[0]) : [];
            for (var i = -1, o = Zc(r); ++i < r; )
                for (var s = t[i], a = -1; ++a < r; )
                    a != i && (o[i] = ir(o[i] || s, t[a], e, n));
            return fi(cr(o, 1), e, n)
        }
        function mi(t, e, n) {
            for (var r = -1, i = t.length, o = e.length, s = {}; ++r < i; ) {
                var a = r < o ? e[r] : K;
                n(s, t[r], a)
            }
            return s
        }
        function yi(t) {
            return Ma(t) ? t : []
        }
        function _i(t) {
            return "function" == typeof t ? t : kc
        }
        function bi(t, e) {
            return ph(t) ? t : Po(t, e) ? [t] : jf(Tu(t))
        }
        function wi(t, e, n) {
            var r = t.length;
            return n = n === K ? r : n,
            !e && n >= r ? t : ii(t, e, n)
        }
        function xi(t, e) {
            if (e)
                return t.slice();
            var n = t.length
              , r = xl ? xl(n) : new t.constructor(n);
            return t.copy(r),
            r
        }
        function Ti(t) {
            var e = new t.constructor(t.byteLength);
            return new wl(e).set(new wl(t)),
            e
        }
        function Ci(t, e) {
            var n = e ? Ti(t.buffer) : t.buffer;
            return new t.constructor(n,t.byteOffset,t.byteLength)
        }
        function Ei(t) {
            var e = new t.constructor(t.source,Ie.exec(t));
            return e.lastIndex = t.lastIndex,
            e
        }
        function ki(t) {
            return uf ? rl(uf.call(t)) : {}
        }
        function Si(t, e) {
            var n = e ? Ti(t.buffer) : t.buffer;
            return new t.constructor(n,t.byteOffset,t.length)
        }
        function ji(t, e) {
            if (t !== e) {
                var n = t !== K
                  , r = null === t
                  , i = t === t
                  , o = hu(t)
                  , s = e !== K
                  , a = null === e
                  , u = e === e
                  , c = hu(e);
                if (!a && !c && !o && t > e || o && s && u && !a && !c || r && s && u || !n && u || !i)
                    return 1;
                if (!r && !o && !c && t < e || c && n && i && !r && !o || a && n && i || !s && i || !u)
                    return -1
            }
            return 0
        }
        function Ai(t, e, n) {
            for (var r = -1, i = t.criteria, o = e.criteria, s = i.length, a = n.length; ++r < s; ) {
                var u = ji(i[r], o[r]);
                if (u) {
                    if (r >= a)
                        return u;
                    return u * ("desc" == n[r] ? -1 : 1)
                }
            }
            return t.index - e.index
        }
        function Oi(t, e, n, r) {
            for (var i = -1, o = t.length, s = n.length, a = -1, u = e.length, c = Bl(o - s, 0), l = Zc(u + c), f = !r; ++a < u; )
                l[a] = e[a];
            for (; ++i < s; )
                (f || i < o) && (l[n[i]] = t[i]);
            for (; c--; )
                l[a++] = t[i++];
            return l
        }
        function Ri(t, e, n, r) {
            for (var i = -1, o = t.length, s = -1, a = n.length, u = -1, c = e.length, l = Bl(o - a, 0), f = Zc(l + c), h = !r; ++i < l; )
                f[i] = t[i];
            for (var p = i; ++u < c; )
                f[p + u] = e[u];
            for (; ++s < a; )
                (h || i < o) && (f[p + n[s]] = t[i++]);
            return f
        }
        function Pi(t, e) {
            var n = -1
              , r = t.length;
            for (e || (e = Zc(r)); ++n < r; )
                e[n] = t[n];
            return e
        }
        function Fi(t, e, n, r) {
            var i = !n;
            n || (n = {});
            for (var o = -1, s = e.length; ++o < s; ) {
                var a = e[o]
                  , u = r ? r(n[a], t[a], a, n, t) : K;
                u === K && (u = t[a]),
                i ? Kn(n, a, u) : Vn(n, a, u)
            }
            return n
        }
        function Di(t, e) {
            return Fi(t, wf(t), e)
        }
        function Ii(t, e) {
            return Fi(t, xf(t), e)
        }
        function Ni(t, n) {
            return function(r, i) {
                var o = ph(r) ? e : Xn
                  , s = n ? n() : {};
                return o(r, t, mo(i, 2), s)
            }
        }
        function Li(t) {
            return Jr(function(e, n) {
                var r = -1
                  , i = n.length
                  , o = i > 1 ? n[i - 1] : K
                  , s = i > 2 ? n[2] : K;
                for (o = t.length > 3 && "function" == typeof o ? (i--,
                o) : K,
                s && Ro(n[0], n[1], s) && (o = i < 3 ? K : o,
                i = 1),
                e = rl(e); ++r < i; ) {
                    var a = n[r];
                    a && t(e, a, r, o)
                }
                return e
            })
        }
        function $i(t, e) {
            return function(n, r) {
                if (null == n)
                    return n;
                if (!qa(n))
                    return t(n, r);
                for (var i = n.length, o = e ? i : -1, s = rl(n); (e ? o-- : ++o < i) && !1 !== r(s[o], o, s); )
                    ;
                return n
            }
        }
        function zi(t) {
            return function(e, n, r) {
                for (var i = -1, o = rl(e), s = r(e), a = s.length; a--; ) {
                    var u = s[t ? a : ++i];
                    if (!1 === n(o[u], u, o))
                        break
                }
                return e
            }
        }
        function Hi(t, e, n) {
            function r() {
                return (this && this !== En && this instanceof r ? o : t).apply(i ? n : this, arguments)
            }
            var i = e & ct
              , o = Mi(t);
            return r
        }
        function Bi(t) {
            return function(e) {
                e = Tu(e);
                var n = N(e) ? Q(e) : K
                  , r = n ? n[0] : e.charAt(0)
                  , i = n ? wi(n, 1).join("") : e.slice(1);
                return r[t]() + i
            }
        }
        function qi(t) {
            return function(e) {
                return l(wc(ec(e).replace(an, "")), t, "")
            }
        }
        function Mi(t) {
            return function() {
                var e = arguments;
                switch (e.length) {
                case 0:
                    return new t;
                case 1:
                    return new t(e[0]);
                case 2:
                    return new t(e[0],e[1]);
                case 3:
                    return new t(e[0],e[1],e[2]);
                case 4:
                    return new t(e[0],e[1],e[2],e[3]);
                case 5:
                    return new t(e[0],e[1],e[2],e[3],e[4]);
                case 6:
                    return new t(e[0],e[1],e[2],e[3],e[4],e[5]);
                case 7:
                    return new t(e[0],e[1],e[2],e[3],e[4],e[5],e[6])
                }
                var n = lf(t.prototype)
                  , r = t.apply(n, e);
                return tu(r) ? r : n
            }
        }
        function Wi(e, n, r) {
            function i() {
                for (var s = arguments.length, a = Zc(s), u = s, c = go(i); u--; )
                    a[u] = arguments[u];
                var l = s < 3 && a[0] !== c && a[s - 1] !== c ? [] : B(a, c);
                return (s -= l.length) < r ? eo(e, n, Qi, i.placeholder, K, a, l, K, K, r - s) : t(this && this !== En && this instanceof i ? o : e, this, a)
            }
            var o = Mi(e);
            return i
        }
        function Ui(t) {
            return function(e, n, r) {
                var i = rl(e);
                if (!qa(e)) {
                    var o = mo(n, 3);
                    e = Nu(e),
                    n = function(t) {
                        return o(i[t], t, i)
                    }
                }
                var s = t(e, n, r);
                return s > -1 ? i[o ? e[s] : s] : K
            }
        }
        function Vi(t) {
            return fo(function(e) {
                var n = e.length
                  , r = n
                  , i = G.prototype.thru;
                for (t && e.reverse(); r--; ) {
                    var o = e[r];
                    if ("function" != typeof o)
                        throw new sl(tt);
                    if (i && !s && "wrapper" == vo(o))
                        var s = new G([],!0)
                }
                for (r = s ? r : n; ++r < n; ) {
                    o = e[r];
                    var a = vo(o)
                      , u = "wrapper" == a ? bf(o) : K;
                    s = u && Do(u[0]) && u[1] == (gt | ht | dt | mt) && !u[4].length && 1 == u[9] ? s[vo(u[0])].apply(s, u[3]) : 1 == o.length && Do(o) ? s[a]() : s.thru(o)
                }
                return function() {
                    var t = arguments
                      , r = t[0];
                    if (s && 1 == t.length && ph(r))
                        return s.plant(r).value();
                    for (var i = 0, o = n ? e[i].apply(this, t) : r; ++i < n; )
                        o = e[i].call(this, o);
                    return o
                }
            })
        }
        function Qi(t, e, n, r, i, o, s, a, u, c) {
            function l() {
                for (var m = arguments.length, y = Zc(m), _ = m; _--; )
                    y[_] = arguments[_];
                if (d)
                    var b = go(l)
                      , w = F(y, b);
                if (r && (y = Oi(y, r, i, d)),
                o && (y = Ri(y, o, s, d)),
                m -= w,
                d && m < c) {
                    var x = B(y, b);
                    return eo(t, e, Qi, l.placeholder, n, y, x, a, u, c - m)
                }
                var T = h ? n : this
                  , C = p ? T[t] : t;
                return m = y.length,
                a ? y = Wo(y, a) : v && m > 1 && y.reverse(),
                f && u < m && (y.length = u),
                this && this !== En && this instanceof l && (C = g || Mi(C)),
                C.apply(T, y)
            }
            var f = e & gt
              , h = e & ct
              , p = e & lt
              , d = e & (ht | pt)
              , v = e & yt
              , g = p ? K : Mi(t);
            return l
        }
        function Xi(t, e) {
            return function(n, r) {
                return wr(n, t, e(r), {})
            }
        }
        function Gi(t, e) {
            return function(n, r) {
                var i;
                if (n === K && r === K)
                    return e;
                if (n !== K && (i = n),
                r !== K) {
                    if (i === K)
                        return r;
                    "string" == typeof n || "string" == typeof r ? (n = li(n),
                    r = li(r)) : (n = ci(n),
                    r = ci(r)),
                    i = t(n, r)
                }
                return i
            }
        }
        function Yi(e) {
            return fo(function(n) {
                return n = u(n, j(mo())),
                Jr(function(r) {
                    var i = this;
                    return e(n, function(e) {
                        return t(e, i, r)
                    })
                })
            })
        }
        function Ki(t, e) {
            e = e === K ? " " : li(e);
            var n = e.length;
            if (n < 2)
                return n ? Zr(e, t) : e;
            var r = Zr(e, Dl(t / V(e)));
            return N(e) ? wi(Q(r), 0, t).join("") : r.slice(0, t)
        }
        function Zi(e, n, r, i) {
            function o() {
                for (var n = -1, u = arguments.length, c = -1, l = i.length, f = Zc(l + u), h = this && this !== En && this instanceof o ? a : e; ++c < l; )
                    f[c] = i[c];
                for (; u--; )
                    f[c++] = arguments[++n];
                return t(h, s ? r : this, f)
            }
            var s = n & ct
              , a = Mi(e);
            return o
        }
        function Ji(t) {
            return function(e, n, r) {
                return r && "number" != typeof r && Ro(e, n, r) && (n = r = K),
                e = mu(e),
                n === K ? (n = e,
                e = 0) : n = mu(n),
                r = r === K ? e < n ? 1 : -1 : mu(r),
                Kr(e, n, r, t)
            }
        }
        function to(t) {
            return function(e, n) {
                return "string" == typeof e && "string" == typeof n || (e = bu(e),
                n = bu(n)),
                t(e, n)
            }
        }
        function eo(t, e, n, r, i, o, s, a, u, c) {
            var l = e & ht
              , f = l ? s : K
              , h = l ? K : s
              , p = l ? o : K
              , d = l ? K : o;
            e |= l ? dt : vt,
            (e &= ~(l ? vt : dt)) & ft || (e &= ~(ct | lt));
            var v = [t, e, i, p, f, d, h, a, u, c]
              , g = n.apply(K, v);
            return Do(t) && Ef(g, v),
            g.placeholder = r,
            Vo(g, t, e)
        }
        function no(t) {
            var e = nl[t];
            return function(t, n) {
                if (t = bu(t),
                (n = null == n ? 0 : ql(yu(n), 292)) && $l(t)) {
                    var r = (Tu(t) + "e").split("e");
                    return r = (Tu(e(r[0] + "e" + (+r[1] + n))) + "e").split("e"),
                    +(r[0] + "e" + (+r[1] - n))
                }
                return e(t)
            }
        }
        function ro(t) {
            return function(e) {
                var n = Tf(e);
                return n == qt ? z(e) : n == Xt ? M(e) : S(e, t(e))
            }
        }
        function io(t, e, n, r, i, o, s, a) {
            var u = e & lt;
            if (!u && "function" != typeof t)
                throw new sl(tt);
            var c = r ? r.length : 0;
            if (c || (e &= ~(dt | vt),
            r = i = K),
            s = s === K ? s : Bl(yu(s), 0),
            a = a === K ? a : yu(a),
            c -= i ? i.length : 0,
            e & vt) {
                var l = r
                  , f = i;
                r = i = K
            }
            var h = u ? K : bf(t)
              , p = [t, e, n, r, i, l, f, o, s, a];
            if (h && zo(p, h),
            t = p[0],
            e = p[1],
            n = p[2],
            r = p[3],
            i = p[4],
            a = p[9] = p[9] === K ? u ? 0 : t.length : Bl(p[9] - c, 0),
            !a && e & (ht | pt) && (e &= ~(ht | pt)),
            e && e != ct)
                d = e == ht || e == pt ? Wi(t, e, a) : e != dt && e != (ct | dt) || i.length ? Qi.apply(K, p) : Zi(t, e, n, r);
            else
                var d = Hi(t, e, n);
            return Vo((h ? vf : Ef)(d, p), t, e)
        }
        function oo(t, e, n, r) {
            return t === K || Ba(t, cl[n]) && !hl.call(r, n) ? e : t
        }
        function so(t, e, n, r, i, o) {
            return tu(t) && tu(e) && (o.set(e, t),
            Br(t, e, K, so, o),
            o.delete(e)),
            t
        }
        function ao(t) {
            return cu(t) ? K : t
        }
        function uo(t, e, n, r, i, o) {
            var s = n & at
              , a = t.length
              , u = e.length;
            if (a != u && !(s && u > a))
                return !1;
            var c = o.get(t);
            if (c && o.get(e))
                return c == e;
            var l = -1
              , f = !0
              , p = n & ut ? new yn : K;
            for (o.set(t, e),
            o.set(e, t); ++l < a; ) {
                var d = t[l]
                  , v = e[l];
                if (r)
                    var g = s ? r(v, d, l, e, t, o) : r(d, v, l, t, e, o);
                if (g !== K) {
                    if (g)
                        continue;
                    f = !1;
                    break
                }
                if (p) {
                    if (!h(e, function(t, e) {
                        if (!O(p, e) && (d === t || i(d, t, n, r, o)))
                            return p.push(e)
                    })) {
                        f = !1;
                        break
                    }
                } else if (d !== v && !i(d, v, n, r, o)) {
                    f = !1;
                    break
                }
            }
            return o.delete(t),
            o.delete(e),
            f
        }
        function co(t, e, n, r, i, o, s) {
            switch (n) {
            case ee:
                if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
                    return !1;
                t = t.buffer,
                e = e.buffer;
            case te:
                return !(t.byteLength != e.byteLength || !o(new wl(t), new wl(e)));
            case Nt:
            case Lt:
            case Mt:
                return Ba(+t, +e);
            case zt:
                return t.name == e.name && t.message == e.message;
            case Qt:
            case Gt:
                return t == e + "";
            case qt:
                var a = z;
            case Xt:
                var u = r & at;
                if (a || (a = q),
                t.size != e.size && !u)
                    return !1;
                var c = s.get(t);
                if (c)
                    return c == e;
                r |= ut,
                s.set(t, e);
                var l = uo(a(t), a(e), r, i, o, s);
                return s.delete(t),
                l;
            case Yt:
                if (uf)
                    return uf.call(t) == uf.call(e)
            }
            return !1
        }
        function lo(t, e, n, r, i, o) {
            var s = n & at
              , a = ho(t)
              , u = a.length;
            if (u != ho(e).length && !s)
                return !1;
            for (var c = u; c--; ) {
                var l = a[c];
                if (!(s ? l in e : hl.call(e, l)))
                    return !1
            }
            var f = o.get(t);
            if (f && o.get(e))
                return f == e;
            var h = !0;
            o.set(t, e),
            o.set(e, t);
            for (var p = s; ++c < u; ) {
                l = a[c];
                var d = t[l]
                  , v = e[l];
                if (r)
                    var g = s ? r(v, d, l, e, t, o) : r(d, v, l, t, e, o);
                if (!(g === K ? d === v || i(d, v, n, r, o) : g)) {
                    h = !1;
                    break
                }
                p || (p = "constructor" == l)
            }
            if (h && !p) {
                var m = t.constructor
                  , y = e.constructor;
                m != y && "constructor"in t && "constructor"in e && !("function" == typeof m && m instanceof m && "function" == typeof y && y instanceof y) && (h = !1)
            }
            return o.delete(t),
            o.delete(e),
            h
        }
        function fo(t) {
            return Sf(qo(t, K, cs), t + "")
        }
        function ho(t) {
            return dr(t, Nu, wf)
        }
        function po(t) {
            return dr(t, Lu, xf)
        }
        function vo(t) {
            for (var e = t.name + "", n = tf[e], r = hl.call(tf, e) ? n.length : 0; r--; ) {
                var i = n[r]
                  , o = i.func;
                if (null == o || o == t)
                    return i.name
            }
            return e
        }
        function go(t) {
            return (hl.call(W, "placeholder") ? W : t).placeholder
        }
        function mo() {
            var t = W.iteratee || Sc;
            return t = t === Sc ? Dr : t,
            arguments.length ? t(arguments[0], arguments[1]) : t
        }
        function yo(t, e) {
            var n = t.__data__;
            return Fo(e) ? n["string" == typeof e ? "string" : "hash"] : n.map
        }
        function _o(t) {
            for (var e = Nu(t), n = e.length; n--; ) {
                var r = e[n]
                  , i = t[r];
                e[n] = [r, i, Lo(i)]
            }
            return e
        }
        function bo(t, e) {
            var n = I(t, e);
            return Or(n) ? n : K
        }
        function wo(t) {
            var e = hl.call(t, Al)
              , n = t[Al];
            try {
                t[Al] = K;
                var r = !0
            } catch (t) {}
            var i = vl.call(t);
            return r && (e ? t[Al] = n : delete t[Al]),
            i
        }
        function xo(t, e, n) {
            for (var r = -1, i = n.length; ++r < i; ) {
                var o = n[r]
                  , s = o.size;
                switch (o.type) {
                case "drop":
                    t += s;
                    break;
                case "dropRight":
                    e -= s;
                    break;
                case "take":
                    e = ql(e, t + s);
                    break;
                case "takeRight":
                    t = Bl(t, e - s)
                }
            }
            return {
                start: t,
                end: e
            }
        }
        function To(t) {
            var e = t.match(Oe);
            return e ? e[1].split(Re) : []
        }
        function Co(t, e, n) {
            e = bi(e, t);
            for (var r = -1, i = e.length, o = !1; ++r < i; ) {
                var s = Go(e[r]);
                if (!(o = null != t && n(t, s)))
                    break;
                t = t[s]
            }
            return o || ++r != i ? o : !!(i = null == t ? 0 : t.length) && Ja(i) && Oo(s, i) && (ph(t) || hh(t))
        }
        function Eo(t) {
            var e = t.length
              , n = new t.constructor(e);
            return e && "string" == typeof t[0] && hl.call(t, "index") && (n.index = t.index,
            n.input = t.input),
            n
        }
        function ko(t) {
            return "function" != typeof t.constructor || No(t) ? {} : lf(Tl(t))
        }
        function So(t, e, n) {
            var r = t.constructor;
            switch (e) {
            case te:
                return Ti(t);
            case Nt:
            case Lt:
                return new r(+t);
            case ee:
                return Ci(t, n);
            case ne:
            case re:
            case ie:
            case oe:
            case se:
            case ae:
            case ue:
            case ce:
            case le:
                return Si(t, n);
            case qt:
                return new r;
            case Mt:
            case Gt:
                return new r(t);
            case Qt:
                return Ei(t);
            case Xt:
                return new r;
            case Yt:
                return ki(t)
            }
        }
        function jo(t, e) {
            var n = e.length;
            if (!n)
                return t;
            var r = n - 1;
            return e[r] = (n > 1 ? "& " : "") + e[r],
            e = e.join(n > 2 ? ", " : " "),
            t.replace(Ae, "{\n/* [wrapped with " + e + "] */\n")
        }
        function Ao(t) {
            return ph(t) || hh(t) || !!(Sl && t && t[Sl])
        }
        function Oo(t, e) {
            var n = typeof t;
            return !!(e = null == e ? kt : e) && ("number" == n || "symbol" != n && He.test(t)) && t > -1 && t % 1 == 0 && t < e
        }
        function Ro(t, e, n) {
            if (!tu(n))
                return !1;
            var r = typeof e;
            return !!("number" == r ? qa(n) && Oo(e, n.length) : "string" == r && e in n) && Ba(n[e], t)
        }
        function Po(t, e) {
            if (ph(t))
                return !1;
            var n = typeof t;
            return !("number" != n && "symbol" != n && "boolean" != n && null != t && !hu(t)) || (xe.test(t) || !we.test(t) || null != e && t in rl(e))
        }
        function Fo(t) {
            var e = typeof t;
            return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
        }
        function Do(t) {
            var e = vo(t)
              , n = W[e];
            if ("function" != typeof n || !(e in Pe.prototype))
                return !1;
            if (t === n)
                return !0;
            var r = bf(n);
            return !!r && t === r[0]
        }
        function Io(t) {
            return !!dl && dl in t
        }
        function No(t) {
            var e = t && t.constructor;
            return t === ("function" == typeof e && e.prototype || cl)
        }
        function Lo(t) {
            return t === t && !tu(t)
        }
        function $o(t, e) {
            return function(n) {
                return null != n && (n[t] === e && (e !== K || t in rl(n)))
            }
        }
        function zo(t, e) {
            var n = t[1]
              , r = e[1]
              , i = n | r
              , o = i < (ct | lt | gt)
              , s = r == gt && n == ht || r == gt && n == mt && t[7].length <= e[8] || r == (gt | mt) && e[7].length <= e[8] && n == ht;
            if (!o && !s)
                return t;
            r & ct && (t[2] = e[2],
            i |= n & ct ? 0 : ft);
            var a = e[3];
            if (a) {
                var u = t[3];
                t[3] = u ? Oi(u, a, e[4]) : a,
                t[4] = u ? B(t[3], rt) : e[4]
            }
            return a = e[5],
            a && (u = t[5],
            t[5] = u ? Ri(u, a, e[6]) : a,
            t[6] = u ? B(t[5], rt) : e[6]),
            a = e[7],
            a && (t[7] = a),
            r & gt && (t[8] = null == t[8] ? e[8] : ql(t[8], e[8])),
            null == t[9] && (t[9] = e[9]),
            t[0] = e[0],
            t[1] = i,
            t
        }
        function Ho(t) {
            var e = [];
            if (null != t)
                for (var n in rl(t))
                    e.push(n);
            return e
        }
        function Bo(t) {
            return vl.call(t)
        }
        function qo(e, n, r) {
            return n = Bl(n === K ? e.length - 1 : n, 0),
            function() {
                for (var i = arguments, o = -1, s = Bl(i.length - n, 0), a = Zc(s); ++o < s; )
                    a[o] = i[n + o];
                o = -1;
                for (var u = Zc(n + 1); ++o < n; )
                    u[o] = i[o];
                return u[n] = r(a),
                t(e, this, u)
            }
        }
        function Mo(t, e) {
            return e.length < 2 ? t : pr(t, ii(e, 0, -1))
        }
        function Wo(t, e) {
            for (var n = t.length, r = ql(e.length, n), i = Pi(t); r--; ) {
                var o = e[r];
                t[r] = Oo(o, n) ? i[o] : K
            }
            return t
        }
        function Uo(t, e) {
            if (("constructor" !== e || "function" != typeof t[e]) && "__proto__" != e)
                return t[e]
        }
        function Vo(t, e, n) {
            var r = e + "";
            return Sf(t, jo(r, Ko(To(r), n)))
        }
        function Qo(t) {
            var e = 0
              , n = 0;
            return function() {
                var r = Ml()
                  , i = xt - (r - n);
                if (n = r,
                i > 0) {
                    if (++e >= wt)
                        return arguments[0]
                } else
                    e = 0;
                return t.apply(K, arguments)
            }
        }
        function Xo(t, e) {
            var n = -1
              , r = t.length
              , i = r - 1;
            for (e = e === K ? r : e; ++n < e; ) {
                var o = Yr(n, i)
                  , s = t[o];
                t[o] = t[n],
                t[n] = s
            }
            return t.length = e,
            t
        }
        function Go(t) {
            if ("string" == typeof t || hu(t))
                return t;
            var e = t + "";
            return "0" == e && 1 / t == -Et ? "-0" : e
        }
        function Yo(t) {
            if (null != t) {
                try {
                    return fl.call(t)
                } catch (t) {}
                try {
                    return t + ""
                } catch (t) {}
            }
            return ""
        }
        function Ko(t, e) {
            return n(Pt, function(n) {
                var r = "_." + n[0];
                e & n[1] && !s(t, r) && t.push(r)
            }),
            t.sort()
        }
        function Zo(t) {
            if (t instanceof Pe)
                return t.clone();
            var e = new G(t.__wrapped__,t.__chain__);
            return e.__actions__ = Pi(t.__actions__),
            e.__index__ = t.__index__,
            e.__values__ = t.__values__,
            e
        }
        function Jo(t, e, n) {
            e = (n ? Ro(t, e, n) : e === K) ? 1 : Bl(yu(e), 0);
            var r = null == t ? 0 : t.length;
            if (!r || e < 1)
                return [];
            for (var i = 0, o = 0, s = Zc(Dl(r / e)); i < r; )
                s[o++] = ii(t, i, i += e);
            return s
        }
        function ts(t) {
            for (var e = -1, n = null == t ? 0 : t.length, r = 0, i = []; ++e < n; ) {
                var o = t[e];
                o && (i[r++] = o)
            }
            return i
        }
        function es() {
            var t = arguments.length;
            if (!t)
                return [];
            for (var e = Zc(t - 1), n = arguments[0], r = t; r--; )
                e[r - 1] = arguments[r];
            return c(ph(n) ? Pi(n) : [n], cr(e, 1))
        }
        function ns(t, e, n) {
            var r = null == t ? 0 : t.length;
            return r ? (e = n || e === K ? 1 : yu(e),
            ii(t, e < 0 ? 0 : e, r)) : []
        }
        function rs(t, e, n) {
            var r = null == t ? 0 : t.length;
            return r ? (e = n || e === K ? 1 : yu(e),
            e = r - e,
            ii(t, 0, e < 0 ? 0 : e)) : []
        }
        function is(t, e) {
            return t && t.length ? di(t, mo(e, 3), !0, !0) : []
        }
        function os(t, e) {
            return t && t.length ? di(t, mo(e, 3), !0) : []
        }
        function ss(t, e, n, r) {
            var i = null == t ? 0 : t.length;
            return i ? (n && "number" != typeof n && Ro(t, e, n) && (n = 0,
            r = i),
            ar(t, e, n, r)) : []
        }
        function as(t, e, n) {
            var r = null == t ? 0 : t.length;
            if (!r)
                return -1;
            var i = null == n ? 0 : yu(n);
            return i < 0 && (i = Bl(r + i, 0)),
            g(t, mo(e, 3), i)
        }
        function us(t, e, n) {
            var r = null == t ? 0 : t.length;
            if (!r)
                return -1;
            var i = r - 1;
            return n !== K && (i = yu(n),
            i = n < 0 ? Bl(r + i, 0) : ql(i, r - 1)),
            g(t, mo(e, 3), i, !0)
        }
        function cs(t) {
            return (null == t ? 0 : t.length) ? cr(t, 1) : []
        }
        function ls(t) {
            return (null == t ? 0 : t.length) ? cr(t, Et) : []
        }
        function fs(t, e) {
            return (null == t ? 0 : t.length) ? (e = e === K ? 1 : yu(e),
            cr(t, e)) : []
        }
        function hs(t) {
            for (var e = -1, n = null == t ? 0 : t.length, r = {}; ++e < n; ) {
                var i = t[e];
                r[i[0]] = i[1]
            }
            return r
        }
        function ps(t) {
            return t && t.length ? t[0] : K
        }
        function ds(t, e, n) {
            var r = null == t ? 0 : t.length;
            if (!r)
                return -1;
            var i = null == n ? 0 : yu(n);
            return i < 0 && (i = Bl(r + i, 0)),
            m(t, e, i)
        }
        function vs(t) {
            return (null == t ? 0 : t.length) ? ii(t, 0, -1) : []
        }
        function gs(t, e) {
            return null == t ? "" : zl.call(t, e)
        }
        function ms(t) {
            var e = null == t ? 0 : t.length;
            return e ? t[e - 1] : K
        }
        function ys(t, e, n) {
            var r = null == t ? 0 : t.length;
            if (!r)
                return -1;
            var i = r;
            return n !== K && (i = yu(n),
            i = i < 0 ? Bl(r + i, 0) : ql(i, r - 1)),
            e === e ? U(t, e, i) : g(t, _, i, !0)
        }
        function _s(t, e) {
            return t && t.length ? Mr(t, yu(e)) : K
        }
        function bs(t, e) {
            return t && t.length && e && e.length ? Xr(t, e) : t
        }
        function ws(t, e, n) {
            return t && t.length && e && e.length ? Xr(t, e, mo(n, 2)) : t
        }
        function xs(t, e, n) {
            return t && t.length && e && e.length ? Xr(t, e, K, n) : t
        }
        function Ts(t, e) {
            var n = [];
            if (!t || !t.length)
                return n;
            var r = -1
              , i = []
              , o = t.length;
            for (e = mo(e, 3); ++r < o; ) {
                var s = t[r];
                e(s, r, t) && (n.push(s),
                i.push(r))
            }
            return Gr(t, i),
            n
        }
        function Cs(t) {
            return null == t ? t : Vl.call(t)
        }
        function Es(t, e, n) {
            var r = null == t ? 0 : t.length;
            return r ? (n && "number" != typeof n && Ro(t, e, n) ? (e = 0,
            n = r) : (e = null == e ? 0 : yu(e),
            n = n === K ? r : yu(n)),
            ii(t, e, n)) : []
        }
        function ks(t, e) {
            return si(t, e)
        }
        function Ss(t, e, n) {
            return ai(t, e, mo(n, 2))
        }
        function js(t, e) {
            var n = null == t ? 0 : t.length;
            if (n) {
                var r = si(t, e);
                if (r < n && Ba(t[r], e))
                    return r
            }
            return -1
        }
        function As(t, e) {
            return si(t, e, !0)
        }
        function Os(t, e, n) {
            return ai(t, e, mo(n, 2), !0)
        }
        function Rs(t, e) {
            if (null == t ? 0 : t.length) {
                var n = si(t, e, !0) - 1;
                if (Ba(t[n], e))
                    return n
            }
            return -1
        }
        function Ps(t) {
            return t && t.length ? ui(t) : []
        }
        function Fs(t, e) {
            return t && t.length ? ui(t, mo(e, 2)) : []
        }
        function Ds(t) {
            var e = null == t ? 0 : t.length;
            return e ? ii(t, 1, e) : []
        }
        function Is(t, e, n) {
            return t && t.length ? (e = n || e === K ? 1 : yu(e),
            ii(t, 0, e < 0 ? 0 : e)) : []
        }
        function Ns(t, e, n) {
            var r = null == t ? 0 : t.length;
            return r ? (e = n || e === K ? 1 : yu(e),
            e = r - e,
            ii(t, e < 0 ? 0 : e, r)) : []
        }
        function Ls(t, e) {
            return t && t.length ? di(t, mo(e, 3), !1, !0) : []
        }
        function $s(t, e) {
            return t && t.length ? di(t, mo(e, 3)) : []
        }
        function zs(t) {
            return t && t.length ? fi(t) : []
        }
        function Hs(t, e) {
            return t && t.length ? fi(t, mo(e, 2)) : []
        }
        function Bs(t, e) {
            return e = "function" == typeof e ? e : K,
            t && t.length ? fi(t, K, e) : []
        }
        function qs(t) {
            if (!t || !t.length)
                return [];
            var e = 0;
            return t = o(t, function(t) {
                if (Ma(t))
                    return e = Bl(t.length, e),
                    !0
            }),
            k(e, function(e) {
                return u(t, w(e))
            })
        }
        function Ms(e, n) {
            if (!e || !e.length)
                return [];
            var r = qs(e);
            return null == n ? r : u(r, function(e) {
                return t(n, K, e)
            })
        }
        function Ws(t, e) {
            return mi(t || [], e || [], Vn)
        }
        function Us(t, e) {
            return mi(t || [], e || [], ni)
        }
        function Vs(t) {
            var e = W(t);
            return e.__chain__ = !0,
            e
        }
        function Qs(t, e) {
            return e(t),
            t
        }
        function Xs(t, e) {
            return e(t)
        }
        function Gs() {
            return Vs(this)
        }
        function Ys() {
            return new G(this.value(),this.__chain__)
        }
        function Ks() {
            this.__values__ === K && (this.__values__ = gu(this.value()));
            var t = this.__index__ >= this.__values__.length;
            return {
                done: t,
                value: t ? K : this.__values__[this.__index__++]
            }
        }
        function Zs() {
            return this
        }
        function Js(t) {
            for (var e, n = this; n instanceof X; ) {
                var r = Zo(n);
                r.__index__ = 0,
                r.__values__ = K,
                e ? i.__wrapped__ = r : e = r;
                var i = r;
                n = n.__wrapped__
            }
            return i.__wrapped__ = t,
            e
        }
        function ta() {
            var t = this.__wrapped__;
            if (t instanceof Pe) {
                var e = t;
                return this.__actions__.length && (e = new Pe(this)),
                e = e.reverse(),
                e.__actions__.push({
                    func: Xs,
                    args: [Cs],
                    thisArg: K
                }),
                new G(e,this.__chain__)
            }
            return this.thru(Cs)
        }
        function ea() {
            return vi(this.__wrapped__, this.__actions__)
        }
        function na(t, e, n) {
            var r = ph(t) ? i : or;
            return n && Ro(t, e, n) && (e = K),
            r(t, mo(e, 3))
        }
        function ra(t, e) {
            return (ph(t) ? o : ur)(t, mo(e, 3))
        }
        function ia(t, e) {
            return cr(la(t, e), 1)
        }
        function oa(t, e) {
            return cr(la(t, e), Et)
        }
        function sa(t, e, n) {
            return n = n === K ? 1 : yu(n),
            cr(la(t, e), n)
        }
        function aa(t, e) {
            return (ph(t) ? n : ff)(t, mo(e, 3))
        }
        function ua(t, e) {
            return (ph(t) ? r : hf)(t, mo(e, 3))
        }
        function ca(t, e, n, r) {
            t = qa(t) ? t : Gu(t),
            n = n && !r ? yu(n) : 0;
            var i = t.length;
            return n < 0 && (n = Bl(i + n, 0)),
            fu(t) ? n <= i && t.indexOf(e, n) > -1 : !!i && m(t, e, n) > -1
        }
        function la(t, e) {
            return (ph(t) ? u : $r)(t, mo(e, 3))
        }
        function fa(t, e, n, r) {
            return null == t ? [] : (ph(e) || (e = null == e ? [] : [e]),
            n = r ? K : n,
            ph(n) || (n = null == n ? [] : [n]),
            Wr(t, e, n))
        }
        function ha(t, e, n) {
            var r = ph(t) ? l : T
              , i = arguments.length < 3;
            return r(t, mo(e, 4), n, i, ff)
        }
        function pa(t, e, n) {
            var r = ph(t) ? f : T
              , i = arguments.length < 3;
            return r(t, mo(e, 4), n, i, hf)
        }
        function da(t, e) {
            return (ph(t) ? o : ur)(t, ja(mo(e, 3)))
        }
        function va(t) {
            return (ph(t) ? qn : ti)(t)
        }
        function ga(t, e, n) {
            return e = (n ? Ro(t, e, n) : e === K) ? 1 : yu(e),
            (ph(t) ? Mn : ei)(t, e)
        }
        function ma(t) {
            return (ph(t) ? Wn : ri)(t)
        }
        function ya(t) {
            if (null == t)
                return 0;
            if (qa(t))
                return fu(t) ? V(t) : t.length;
            var e = Tf(t);
            return e == qt || e == Xt ? t.size : Ir(t).length
        }
        function _a(t, e, n) {
            var r = ph(t) ? h : oi;
            return n && Ro(t, e, n) && (e = K),
            r(t, mo(e, 3))
        }
        function ba(t, e) {
            if ("function" != typeof e)
                throw new sl(tt);
            return t = yu(t),
            function() {
                if (--t < 1)
                    return e.apply(this, arguments)
            }
        }
        function wa(t, e, n) {
            return e = n ? K : e,
            e = t && null == e ? t.length : e,
            io(t, gt, K, K, K, K, e)
        }
        function xa(t, e) {
            var n;
            if ("function" != typeof e)
                throw new sl(tt);
            return t = yu(t),
            function() {
                return --t > 0 && (n = e.apply(this, arguments)),
                t <= 1 && (e = K),
                n
            }
        }
        function Ta(t, e, n) {
            e = n ? K : e;
            var r = io(t, ht, K, K, K, K, K, e);
            return r.placeholder = Ta.placeholder,
            r
        }
        function Ca(t, e, n) {
            e = n ? K : e;
            var r = io(t, pt, K, K, K, K, K, e);
            return r.placeholder = Ca.placeholder,
            r
        }
        function Ea(t, e, n) {
            function r(e) {
                var n = h
                  , r = p;
                return h = p = K,
                y = e,
                v = t.apply(r, n)
            }
            function i(t) {
                return y = t,
                g = kf(a, e),
                _ ? r(t) : v
            }
            function o(t) {
                var n = t - m
                  , r = t - y
                  , i = e - n;
                return b ? ql(i, d - r) : i
            }
            function s(t) {
                var n = t - m
                  , r = t - y;
                return m === K || n >= e || n < 0 || b && r >= d
            }
            function a() {
                var t = eh();
                if (s(t))
                    return u(t);
                g = kf(a, o(t))
            }
            function u(t) {
                return g = K,
                w && h ? r(t) : (h = p = K,
                v)
            }
            function c() {
                g !== K && yf(g),
                y = 0,
                h = m = p = g = K
            }
            function l() {
                return g === K ? v : u(eh())
            }
            function f() {
                var t = eh()
                  , n = s(t);
                if (h = arguments,
                p = this,
                m = t,
                n) {
                    if (g === K)
                        return i(m);
                    if (b)
                        return yf(g),
                        g = kf(a, e),
                        r(m)
                }
                return g === K && (g = kf(a, e)),
                v
            }
            var h, p, d, v, g, m, y = 0, _ = !1, b = !1, w = !0;
            if ("function" != typeof t)
                throw new sl(tt);
            return e = bu(e) || 0,
            tu(n) && (_ = !!n.leading,
            b = "maxWait"in n,
            d = b ? Bl(bu(n.maxWait) || 0, e) : d,
            w = "trailing"in n ? !!n.trailing : w),
            f.cancel = c,
            f.flush = l,
            f
        }
        function ka(t) {
            return io(t, yt)
        }
        function Sa(t, e) {
            if ("function" != typeof t || null != e && "function" != typeof e)
                throw new sl(tt);
            var n = function() {
                var r = arguments
                  , i = e ? e.apply(this, r) : r[0]
                  , o = n.cache;
                if (o.has(i))
                    return o.get(i);
                var s = t.apply(this, r);
                return n.cache = o.set(i, s) || o,
                s
            };
            return n.cache = new (Sa.Cache || sn),
            n
        }
        function ja(t) {
            if ("function" != typeof t)
                throw new sl(tt);
            return function() {
                var e = arguments;
                switch (e.length) {
                case 0:
                    return !t.call(this);
                case 1:
                    return !t.call(this, e[0]);
                case 2:
                    return !t.call(this, e[0], e[1]);
                case 3:
                    return !t.call(this, e[0], e[1], e[2])
                }
                return !t.apply(this, e)
            }
        }
        function Aa(t) {
            return xa(2, t)
        }
        function Oa(t, e) {
            if ("function" != typeof t)
                throw new sl(tt);
            return e = e === K ? e : yu(e),
            Jr(t, e)
        }
        function Ra(e, n) {
            if ("function" != typeof e)
                throw new sl(tt);
            return n = null == n ? 0 : Bl(yu(n), 0),
            Jr(function(r) {
                var i = r[n]
                  , o = wi(r, 0, n);
                return i && c(o, i),
                t(e, this, o)
            })
        }
        function Pa(t, e, n) {
            var r = !0
              , i = !0;
            if ("function" != typeof t)
                throw new sl(tt);
            return tu(n) && (r = "leading"in n ? !!n.leading : r,
            i = "trailing"in n ? !!n.trailing : i),
            Ea(t, e, {
                leading: r,
                maxWait: e,
                trailing: i
            })
        }
        function Fa(t) {
            return wa(t, 1)
        }
        function Da(t, e) {
            return ah(_i(e), t)
        }
        function Ia() {
            if (!arguments.length)
                return [];
            var t = arguments[0];
            return ph(t) ? t : [t]
        }
        function Na(t) {
            return tr(t, st)
        }
        function La(t, e) {
            return e = "function" == typeof e ? e : K,
            tr(t, st, e)
        }
        function $a(t) {
            return tr(t, it | st)
        }
        function za(t, e) {
            return e = "function" == typeof e ? e : K,
            tr(t, it | st, e)
        }
        function Ha(t, e) {
            return null == e || nr(t, e, Nu(e))
        }
        function Ba(t, e) {
            return t === e || t !== t && e !== e
        }
        function qa(t) {
            return null != t && Ja(t.length) && !Ka(t)
        }
        function Ma(t) {
            return eu(t) && qa(t)
        }
        function Wa(t) {
            return !0 === t || !1 === t || eu(t) && vr(t) == Nt
        }
        function Ua(t) {
            return eu(t) && 1 === t.nodeType && !cu(t)
        }
        function Va(t) {
            if (null == t)
                return !0;
            if (qa(t) && (ph(t) || "string" == typeof t || "function" == typeof t.splice || vh(t) || bh(t) || hh(t)))
                return !t.length;
            var e = Tf(t);
            if (e == qt || e == Xt)
                return !t.size;
            if (No(t))
                return !Ir(t).length;
            for (var n in t)
                if (hl.call(t, n))
                    return !1;
            return !0
        }
        function Qa(t, e) {
            return kr(t, e)
        }
        function Xa(t, e, n) {
            n = "function" == typeof n ? n : K;
            var r = n ? n(t, e) : K;
            return r === K ? kr(t, e, K, n) : !!r
        }
        function Ga(t) {
            if (!eu(t))
                return !1;
            var e = vr(t);
            return e == zt || e == $t || "string" == typeof t.message && "string" == typeof t.name && !cu(t)
        }
        function Ya(t) {
            return "number" == typeof t && $l(t)
        }
        function Ka(t) {
            if (!tu(t))
                return !1;
            var e = vr(t);
            return e == Ht || e == Bt || e == It || e == Vt
        }
        function Za(t) {
            return "number" == typeof t && t == yu(t)
        }
        function Ja(t) {
            return "number" == typeof t && t > -1 && t % 1 == 0 && t <= kt
        }
        function tu(t) {
            var e = typeof t;
            return null != t && ("object" == e || "function" == e)
        }
        function eu(t) {
            return null != t && "object" == typeof t
        }
        function nu(t, e) {
            return t === e || Ar(t, e, _o(e))
        }
        function ru(t, e, n) {
            return n = "function" == typeof n ? n : K,
            Ar(t, e, _o(e), n)
        }
        function iu(t) {
            return uu(t) && t != +t
        }
        function ou(t) {
            if (Cf(t))
                throw new tl(J);
            return Or(t)
        }
        function su(t) {
            return null === t
        }
        function au(t) {
            return null == t
        }
        function uu(t) {
            return "number" == typeof t || eu(t) && vr(t) == Mt
        }
        function cu(t) {
            if (!eu(t) || vr(t) != Ut)
                return !1;
            var e = Tl(t);
            if (null === e)
                return !0;
            var n = hl.call(e, "constructor") && e.constructor;
            return "function" == typeof n && n instanceof n && fl.call(n) == gl
        }
        function lu(t) {
            return Za(t) && t >= -kt && t <= kt
        }
        function fu(t) {
            return "string" == typeof t || !ph(t) && eu(t) && vr(t) == Gt
        }
        function hu(t) {
            return "symbol" == typeof t || eu(t) && vr(t) == Yt
        }
        function pu(t) {
            return t === K
        }
        function du(t) {
            return eu(t) && Tf(t) == Zt
        }
        function vu(t) {
            return eu(t) && vr(t) == Jt
        }
        function gu(t) {
            if (!t)
                return [];
            if (qa(t))
                return fu(t) ? Q(t) : Pi(t);
            if (jl && t[jl])
                return $(t[jl]());
            var e = Tf(t);
            return (e == qt ? z : e == Xt ? q : Gu)(t)
        }
        function mu(t) {
            if (!t)
                return 0 === t ? t : 0;
            if ((t = bu(t)) === Et || t === -Et) {
                return (t < 0 ? -1 : 1) * St
            }
            return t === t ? t : 0
        }
        function yu(t) {
            var e = mu(t)
              , n = e % 1;
            return e === e ? n ? e - n : e : 0
        }
        function _u(t) {
            return t ? Jn(yu(t), 0, At) : 0
        }
        function bu(t) {
            if ("number" == typeof t)
                return t;
            if (hu(t))
                return jt;
            if (tu(t)) {
                var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                t = tu(e) ? e + "" : e
            }
            if ("string" != typeof t)
                return 0 === t ? t : +t;
            t = t.replace(ke, "");
            var n = Le.test(t);
            return n || ze.test(t) ? xn(t.slice(2), n ? 2 : 8) : Ne.test(t) ? jt : +t
        }
        function wu(t) {
            return Fi(t, Lu(t))
        }
        function xu(t) {
            return t ? Jn(yu(t), -kt, kt) : 0 === t ? t : 0
        }
        function Tu(t) {
            return null == t ? "" : li(t)
        }
        function Cu(t, e) {
            var n = lf(t);
            return null == e ? n : Gn(n, e)
        }
        function Eu(t, e) {
            return v(t, mo(e, 3), lr)
        }
        function ku(t, e) {
            return v(t, mo(e, 3), fr)
        }
        function Su(t, e) {
            return null == t ? t : pf(t, mo(e, 3), Lu)
        }
        function ju(t, e) {
            return null == t ? t : df(t, mo(e, 3), Lu)
        }
        function Au(t, e) {
            return t && lr(t, mo(e, 3))
        }
        function Ou(t, e) {
            return t && fr(t, mo(e, 3))
        }
        function Ru(t) {
            return null == t ? [] : hr(t, Nu(t))
        }
        function Pu(t) {
            return null == t ? [] : hr(t, Lu(t))
        }
        function Fu(t, e, n) {
            var r = null == t ? K : pr(t, e);
            return r === K ? n : r
        }
        function Du(t, e) {
            return null != t && Co(t, e, mr)
        }
        function Iu(t, e) {
            return null != t && Co(t, e, yr)
        }
        function Nu(t) {
            return qa(t) ? Ln(t) : Ir(t)
        }
        function Lu(t) {
            return qa(t) ? Ln(t, !0) : Nr(t)
        }
        function $u(t, e) {
            var n = {};
            return e = mo(e, 3),
            lr(t, function(t, r, i) {
                Kn(n, e(t, r, i), t)
            }),
            n
        }
        function zu(t, e) {
            var n = {};
            return e = mo(e, 3),
            lr(t, function(t, r, i) {
                Kn(n, r, e(t, r, i))
            }),
            n
        }
        function Hu(t, e) {
            return Bu(t, ja(mo(e)))
        }
        function Bu(t, e) {
            if (null == t)
                return {};
            var n = u(po(t), function(t) {
                return [t]
            });
            return e = mo(e),
            Vr(t, n, function(t, n) {
                return e(t, n[0])
            })
        }
        function qu(t, e, n) {
            e = bi(e, t);
            var r = -1
              , i = e.length;
            for (i || (i = 1,
            t = K); ++r < i; ) {
                var o = null == t ? K : t[Go(e[r])];
                o === K && (r = i,
                o = n),
                t = Ka(o) ? o.call(t) : o
            }
            return t
        }
        function Mu(t, e, n) {
            return null == t ? t : ni(t, e, n)
        }
        function Wu(t, e, n, r) {
            return r = "function" == typeof r ? r : K,
            null == t ? t : ni(t, e, n, r)
        }
        function Uu(t, e, r) {
            var i = ph(t)
              , o = i || vh(t) || bh(t);
            if (e = mo(e, 4),
            null == r) {
                var s = t && t.constructor;
                r = o ? i ? new s : [] : tu(t) && Ka(s) ? lf(Tl(t)) : {}
            }
            return (o ? n : lr)(t, function(t, n, i) {
                return e(r, t, n, i)
            }),
            r
        }
        function Vu(t, e) {
            return null == t || hi(t, e)
        }
        function Qu(t, e, n) {
            return null == t ? t : pi(t, e, _i(n))
        }
        function Xu(t, e, n, r) {
            return r = "function" == typeof r ? r : K,
            null == t ? t : pi(t, e, _i(n), r)
        }
        function Gu(t) {
            return null == t ? [] : A(t, Nu(t))
        }
        function Yu(t) {
            return null == t ? [] : A(t, Lu(t))
        }
        function Ku(t, e, n) {
            return n === K && (n = e,
            e = K),
            n !== K && (n = bu(n),
            n = n === n ? n : 0),
            e !== K && (e = bu(e),
            e = e === e ? e : 0),
            Jn(bu(t), e, n)
        }
        function Zu(t, e, n) {
            return e = mu(e),
            n === K ? (n = e,
            e = 0) : n = mu(n),
            t = bu(t),
            _r(t, e, n)
        }
        function Ju(t, e, n) {
            if (n && "boolean" != typeof n && Ro(t, e, n) && (e = n = K),
            n === K && ("boolean" == typeof e ? (n = e,
            e = K) : "boolean" == typeof t && (n = t,
            t = K)),
            t === K && e === K ? (t = 0,
            e = 1) : (t = mu(t),
            e === K ? (e = t,
            t = 0) : e = mu(e)),
            t > e) {
                var r = t;
                t = e,
                e = r
            }
            if (n || t % 1 || e % 1) {
                var i = Ul();
                return ql(t + i * (e - t + wn("1e-" + ((i + "").length - 1))), e)
            }
            return Yr(t, e)
        }
        function tc(t) {
            return Vh(Tu(t).toLowerCase())
        }
        function ec(t) {
            return (t = Tu(t)) && t.replace(Be, $n).replace(un, "")
        }
        function nc(t, e, n) {
            t = Tu(t),
            e = li(e);
            var r = t.length;
            n = n === K ? r : Jn(yu(n), 0, r);
            var i = n;
            return (n -= e.length) >= 0 && t.slice(n, i) == e
        }
        function rc(t) {
            return t = Tu(t),
            t && me.test(t) ? t.replace(ve, zn) : t
        }
        function ic(t) {
            return t = Tu(t),
            t && Ee.test(t) ? t.replace(Ce, "\\$&") : t
        }
        function oc(t, e, n) {
            t = Tu(t),
            e = yu(e);
            var r = e ? V(t) : 0;
            if (!e || r >= e)
                return t;
            var i = (e - r) / 2;
            return Ki(Il(i), n) + t + Ki(Dl(i), n)
        }
        function sc(t, e, n) {
            t = Tu(t),
            e = yu(e);
            var r = e ? V(t) : 0;
            return e && r < e ? t + Ki(e - r, n) : t
        }
        function ac(t, e, n) {
            t = Tu(t),
            e = yu(e);
            var r = e ? V(t) : 0;
            return e && r < e ? Ki(e - r, n) + t : t
        }
        function uc(t, e, n) {
            return n || null == e ? e = 0 : e && (e = +e),
            Wl(Tu(t).replace(Se, ""), e || 0)
        }
        function cc(t, e, n) {
            return e = (n ? Ro(t, e, n) : e === K) ? 1 : yu(e),
            Zr(Tu(t), e)
        }
        function lc() {
            var t = arguments
              , e = Tu(t[0]);
            return t.length < 3 ? e : e.replace(t[1], t[2])
        }
        function fc(t, e, n) {
            return n && "number" != typeof n && Ro(t, e, n) && (e = n = K),
            (n = n === K ? At : n >>> 0) ? (t = Tu(t),
            t && ("string" == typeof e || null != e && !yh(e)) && !(e = li(e)) && N(t) ? wi(Q(t), 0, n) : t.split(e, n)) : []
        }
        function hc(t, e, n) {
            return t = Tu(t),
            n = null == n ? 0 : Jn(yu(n), 0, t.length),
            e = li(e),
            t.slice(n, n + e.length) == e
        }
        function pc(t, e, n) {
            var r = W.templateSettings;
            n && Ro(t, e, n) && (e = K),
            t = Tu(t),
            e = Eh({}, e, r, oo);
            var i, o, s = Eh({}, e.imports, r.imports, oo), a = Nu(s), u = A(s, a), c = 0, l = e.interpolate || qe, f = "__p += '", h = il((e.escape || qe).source + "|" + l.source + "|" + (l === be ? De : qe).source + "|" + (e.evaluate || qe).source + "|$", "g"), p = "//# sourceURL=" + (hl.call(e, "sourceURL") ? (e.sourceURL + "").replace(/[\r\n]/g, " ") : "lodash.templateSources[" + ++dn + "]") + "\n";
            t.replace(h, function(e, n, r, s, a, u) {
                return r || (r = s),
                f += t.slice(c, u).replace(Me, D),
                n && (i = !0,
                f += "' +\n__e(" + n + ") +\n'"),
                a && (o = !0,
                f += "';\n" + a + ";\n__p += '"),
                r && (f += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"),
                c = u + e.length,
                e
            }),
            f += "';\n";
            var d = hl.call(e, "variable") && e.variable;
            d || (f = "with (obj) {\n" + f + "\n}\n"),
            f = (o ? f.replace(fe, "") : f).replace(he, "$1").replace(pe, "$1;"),
            f = "function(" + (d || "obj") + ") {\n" + (d ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (i ? ", __e = _.escape" : "") + (o ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + f + "return __p\n}";
            var v = Qh(function() {
                return el(a, p + "return " + f).apply(K, u)
            });
            if (v.source = f,
            Ga(v))
                throw v;
            return v
        }
        function dc(t) {
            return Tu(t).toLowerCase()
        }
        function vc(t) {
            return Tu(t).toUpperCase()
        }
        function gc(t, e, n) {
            if ((t = Tu(t)) && (n || e === K))
                return t.replace(ke, "");
            if (!t || !(e = li(e)))
                return t;
            var r = Q(t)
              , i = Q(e);
            return wi(r, R(r, i), P(r, i) + 1).join("")
        }
        function mc(t, e, n) {
            if ((t = Tu(t)) && (n || e === K))
                return t.replace(je, "");
            if (!t || !(e = li(e)))
                return t;
            var r = Q(t);
            return wi(r, 0, P(r, Q(e)) + 1).join("")
        }
        function yc(t, e, n) {
            if ((t = Tu(t)) && (n || e === K))
                return t.replace(Se, "");
            if (!t || !(e = li(e)))
                return t;
            var r = Q(t);
            return wi(r, R(r, Q(e))).join("")
        }
        function _c(t, e) {
            var n = _t
              , r = bt;
            if (tu(e)) {
                var i = "separator"in e ? e.separator : i;
                n = "length"in e ? yu(e.length) : n,
                r = "omission"in e ? li(e.omission) : r
            }
            t = Tu(t);
            var o = t.length;
            if (N(t)) {
                var s = Q(t);
                o = s.length
            }
            if (n >= o)
                return t;
            var a = n - V(r);
            if (a < 1)
                return r;
            var u = s ? wi(s, 0, a).join("") : t.slice(0, a);
            if (i === K)
                return u + r;
            if (s && (a += u.length - a),
            yh(i)) {
                if (t.slice(a).search(i)) {
                    var c, l = u;
                    for (i.global || (i = il(i.source, Tu(Ie.exec(i)) + "g")),
                    i.lastIndex = 0; c = i.exec(l); )
                        var f = c.index;
                    u = u.slice(0, f === K ? a : f)
                }
            } else if (t.indexOf(li(i), a) != a) {
                var h = u.lastIndexOf(i);
                h > -1 && (u = u.slice(0, h))
            }
            return u + r
        }
        function bc(t) {
            return t = Tu(t),
            t && ge.test(t) ? t.replace(de, Hn) : t
        }
        function wc(t, e, n) {
            return t = Tu(t),
            e = n ? K : e,
            e === K ? L(t) ? Y(t) : d(t) : t.match(e) || []
        }
        function xc(e) {
            var n = null == e ? 0 : e.length
              , r = mo();
            return e = n ? u(e, function(t) {
                if ("function" != typeof t[1])
                    throw new sl(tt);
                return [r(t[0]), t[1]]
            }) : [],
            Jr(function(r) {
                for (var i = -1; ++i < n; ) {
                    var o = e[i];
                    if (t(o[0], this, r))
                        return t(o[1], this, r)
                }
            })
        }
        function Tc(t) {
            return er(tr(t, it))
        }
        function Cc(t) {
            return function() {
                return t
            }
        }
        function Ec(t, e) {
            return null == t || t !== t ? e : t
        }
        function kc(t) {
            return t
        }
        function Sc(t) {
            return Dr("function" == typeof t ? t : tr(t, it))
        }
        function jc(t) {
            return zr(tr(t, it))
        }
        function Ac(t, e) {
            return Hr(t, tr(e, it))
        }
        function Oc(t, e, r) {
            var i = Nu(e)
              , o = hr(e, i);
            null != r || tu(e) && (o.length || !i.length) || (r = e,
            e = t,
            t = this,
            o = hr(e, Nu(e)));
            var s = !(tu(r) && "chain"in r && !r.chain)
              , a = Ka(t);
            return n(o, function(n) {
                var r = e[n];
                t[n] = r,
                a && (t.prototype[n] = function() {
                    var e = this.__chain__;
                    if (s || e) {
                        var n = t(this.__wrapped__);
                        return (n.__actions__ = Pi(this.__actions__)).push({
                            func: r,
                            args: arguments,
                            thisArg: t
                        }),
                        n.__chain__ = e,
                        n
                    }
                    return r.apply(t, c([this.value()], arguments))
                }
                )
            }),
            t
        }
        function Rc() {
            return En._ === this && (En._ = ml),
            this
        }
        function Pc() {}
        function Fc(t) {
            return t = yu(t),
            Jr(function(e) {
                return Mr(e, t)
            })
        }
        function Dc(t) {
            return Po(t) ? w(Go(t)) : Qr(t)
        }
        function Ic(t) {
            return function(e) {
                return null == t ? K : pr(t, e)
            }
        }
        function Nc() {
            return []
        }
        function Lc() {
            return !1
        }
        function $c() {
            return {}
        }
        function zc() {
            return ""
        }
        function Hc() {
            return !0
        }
        function Bc(t, e) {
            if ((t = yu(t)) < 1 || t > kt)
                return [];
            var n = At
              , r = ql(t, At);
            e = mo(e),
            t -= At;
            for (var i = k(r, e); ++n < t; )
                e(n);
            return i
        }
        function qc(t) {
            return ph(t) ? u(t, Go) : hu(t) ? [t] : Pi(jf(Tu(t)))
        }
        function Mc(t) {
            var e = ++pl;
            return Tu(t) + e
        }
        function Wc(t) {
            return t && t.length ? sr(t, kc, gr) : K
        }
        function Uc(t, e) {
            return t && t.length ? sr(t, mo(e, 2), gr) : K
        }
        function Vc(t) {
            return b(t, kc)
        }
        function Qc(t, e) {
            return b(t, mo(e, 2))
        }
        function Xc(t) {
            return t && t.length ? sr(t, kc, Lr) : K
        }
        function Gc(t, e) {
            return t && t.length ? sr(t, mo(e, 2), Lr) : K
        }
        function Yc(t) {
            return t && t.length ? E(t, kc) : 0
        }
        function Kc(t, e) {
            return t && t.length ? E(t, mo(e, 2)) : 0
        }
        x = null == x ? En : Bn.defaults(En.Object(), x, Bn.pick(En, pn));
        var Zc = x.Array
          , Jc = x.Date
          , tl = x.Error
          , el = x.Function
          , nl = x.Math
          , rl = x.Object
          , il = x.RegExp
          , ol = x.String
          , sl = x.TypeError
          , al = Zc.prototype
          , ul = el.prototype
          , cl = rl.prototype
          , ll = x["__core-js_shared__"]
          , fl = ul.toString
          , hl = cl.hasOwnProperty
          , pl = 0
          , dl = function() {
            var t = /[^.]+$/.exec(ll && ll.keys && ll.keys.IE_PROTO || "");
            return t ? "Symbol(src)_1." + t : ""
        }()
          , vl = cl.toString
          , gl = fl.call(rl)
          , ml = En._
          , yl = il("^" + fl.call(hl).replace(Ce, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$")
          , _l = jn ? x.Buffer : K
          , bl = x.Symbol
          , wl = x.Uint8Array
          , xl = _l ? _l.allocUnsafe : K
          , Tl = H(rl.getPrototypeOf, rl)
          , Cl = rl.create
          , El = cl.propertyIsEnumerable
          , kl = al.splice
          , Sl = bl ? bl.isConcatSpreadable : K
          , jl = bl ? bl.iterator : K
          , Al = bl ? bl.toStringTag : K
          , Ol = function() {
            try {
                var t = bo(rl, "defineProperty");
                return t({}, "", {}),
                t
            } catch (t) {}
        }()
          , Rl = x.clearTimeout !== En.clearTimeout && x.clearTimeout
          , Pl = Jc && Jc.now !== En.Date.now && Jc.now
          , Fl = x.setTimeout !== En.setTimeout && x.setTimeout
          , Dl = nl.ceil
          , Il = nl.floor
          , Nl = rl.getOwnPropertySymbols
          , Ll = _l ? _l.isBuffer : K
          , $l = x.isFinite
          , zl = al.join
          , Hl = H(rl.keys, rl)
          , Bl = nl.max
          , ql = nl.min
          , Ml = Jc.now
          , Wl = x.parseInt
          , Ul = nl.random
          , Vl = al.reverse
          , Ql = bo(x, "DataView")
          , Xl = bo(x, "Map")
          , Gl = bo(x, "Promise")
          , Yl = bo(x, "Set")
          , Kl = bo(x, "WeakMap")
          , Zl = bo(rl, "create")
          , Jl = Kl && new Kl
          , tf = {}
          , ef = Yo(Ql)
          , nf = Yo(Xl)
          , rf = Yo(Gl)
          , of = Yo(Yl)
          , sf = Yo(Kl)
          , af = bl ? bl.prototype : K
          , uf = af ? af.valueOf : K
          , cf = af ? af.toString : K
          , lf = function() {
            function t() {}
            return function(e) {
                if (!tu(e))
                    return {};
                if (Cl)
                    return Cl(e);
                t.prototype = e;
                var n = new t;
                return t.prototype = K,
                n
            }
        }();
        W.templateSettings = {
            escape: ye,
            evaluate: _e,
            interpolate: be,
            variable: "",
            imports: {
                _: W
            }
        },
        W.prototype = X.prototype,
        W.prototype.constructor = W,
        G.prototype = lf(X.prototype),
        G.prototype.constructor = G,
        Pe.prototype = lf(X.prototype),
        Pe.prototype.constructor = Pe,
        Qe.prototype.clear = Xe,
        Qe.prototype.delete = Ge,
        Qe.prototype.get = Ye,
        Qe.prototype.has = Ke,
        Qe.prototype.set = Ze,
        Je.prototype.clear = tn,
        Je.prototype.delete = en,
        Je.prototype.get = nn,
        Je.prototype.has = rn,
        Je.prototype.set = on,
        sn.prototype.clear = cn,
        sn.prototype.delete = ln,
        sn.prototype.get = fn,
        sn.prototype.has = hn,
        sn.prototype.set = mn,
        yn.prototype.add = yn.prototype.push = _n,
        yn.prototype.has = bn,
        Tn.prototype.clear = Cn,
        Tn.prototype.delete = kn,
        Tn.prototype.get = Sn,
        Tn.prototype.has = An,
        Tn.prototype.set = On;
        var ff = $i(lr)
          , hf = $i(fr, !0)
          , pf = zi()
          , df = zi(!0)
          , vf = Jl ? function(t, e) {
            return Jl.set(t, e),
            t
        }
        : kc
          , gf = Ol ? function(t, e) {
            return Ol(t, "toString", {
                configurable: !0,
                enumerable: !1,
                value: Cc(e),
                writable: !0
            })
        }
        : kc
          , mf = Jr
          , yf = Rl || function(t) {
            return En.clearTimeout(t)
        }
          , _f = Yl && 1 / q(new Yl([, -0]))[1] == Et ? function(t) {
            return new Yl(t)
        }
        : Pc
          , bf = Jl ? function(t) {
            return Jl.get(t)
        }
        : Pc
          , wf = Nl ? function(t) {
            return null == t ? [] : (t = rl(t),
            o(Nl(t), function(e) {
                return El.call(t, e)
            }))
        }
        : Nc
          , xf = Nl ? function(t) {
            for (var e = []; t; )
                c(e, wf(t)),
                t = Tl(t);
            return e
        }
        : Nc
          , Tf = vr;
        (Ql && Tf(new Ql(new ArrayBuffer(1))) != ee || Xl && Tf(new Xl) != qt || Gl && "[object Promise]" != Tf(Gl.resolve()) || Yl && Tf(new Yl) != Xt || Kl && Tf(new Kl) != Zt) && (Tf = function(t) {
            var e = vr(t)
              , n = e == Ut ? t.constructor : K
              , r = n ? Yo(n) : "";
            if (r)
                switch (r) {
                case ef:
                    return ee;
                case nf:
                    return qt;
                case rf:
                    return "[object Promise]";
                case of:
                    return Xt;
                case sf:
                    return Zt
                }
            return e
        }
        );
        var Cf = ll ? Ka : Lc
          , Ef = Qo(vf)
          , kf = Fl || function(t, e) {
            return En.setTimeout(t, e)
        }
          , Sf = Qo(gf)
          , jf = function(t) {
            var e = Sa(t, function(t) {
                return n.size === nt && n.clear(),
                t
            })
              , n = e.cache;
            return e
        }(function(t) {
            var e = [];
            return 46 === t.charCodeAt(0) && e.push(""),
            t.replace(Te, function(t, n, r, i) {
                e.push(r ? i.replace(Fe, "$1") : n || t)
            }),
            e
        })
          , Af = Jr(function(t, e) {
            return Ma(t) ? ir(t, cr(e, 1, Ma, !0)) : []
        })
          , Of = Jr(function(t, e) {
            var n = ms(e);
            return Ma(n) && (n = K),
            Ma(t) ? ir(t, cr(e, 1, Ma, !0), mo(n, 2)) : []
        })
          , Rf = Jr(function(t, e) {
            var n = ms(e);
            return Ma(n) && (n = K),
            Ma(t) ? ir(t, cr(e, 1, Ma, !0), K, n) : []
        })
          , Pf = Jr(function(t) {
            var e = u(t, yi);
            return e.length && e[0] === t[0] ? br(e) : []
        })
          , Ff = Jr(function(t) {
            var e = ms(t)
              , n = u(t, yi);
            return e === ms(n) ? e = K : n.pop(),
            n.length && n[0] === t[0] ? br(n, mo(e, 2)) : []
        })
          , Df = Jr(function(t) {
            var e = ms(t)
              , n = u(t, yi);
            return e = "function" == typeof e ? e : K,
            e && n.pop(),
            n.length && n[0] === t[0] ? br(n, K, e) : []
        })
          , If = Jr(bs)
          , Nf = fo(function(t, e) {
            var n = null == t ? 0 : t.length
              , r = Zn(t, e);
            return Gr(t, u(e, function(t) {
                return Oo(t, n) ? +t : t
            }).sort(ji)),
            r
        })
          , Lf = Jr(function(t) {
            return fi(cr(t, 1, Ma, !0))
        })
          , $f = Jr(function(t) {
            var e = ms(t);
            return Ma(e) && (e = K),
            fi(cr(t, 1, Ma, !0), mo(e, 2))
        })
          , zf = Jr(function(t) {
            var e = ms(t);
            return e = "function" == typeof e ? e : K,
            fi(cr(t, 1, Ma, !0), K, e)
        })
          , Hf = Jr(function(t, e) {
            return Ma(t) ? ir(t, e) : []
        })
          , Bf = Jr(function(t) {
            return gi(o(t, Ma))
        })
          , qf = Jr(function(t) {
            var e = ms(t);
            return Ma(e) && (e = K),
            gi(o(t, Ma), mo(e, 2))
        })
          , Mf = Jr(function(t) {
            var e = ms(t);
            return e = "function" == typeof e ? e : K,
            gi(o(t, Ma), K, e)
        })
          , Wf = Jr(qs)
          , Uf = Jr(function(t) {
            var e = t.length
              , n = e > 1 ? t[e - 1] : K;
            return n = "function" == typeof n ? (t.pop(),
            n) : K,
            Ms(t, n)
        })
          , Vf = fo(function(t) {
            var e = t.length
              , n = e ? t[0] : 0
              , r = this.__wrapped__
              , i = function(e) {
                return Zn(e, t)
            };
            return !(e > 1 || this.__actions__.length) && r instanceof Pe && Oo(n) ? (r = r.slice(n, +n + (e ? 1 : 0)),
            r.__actions__.push({
                func: Xs,
                args: [i],
                thisArg: K
            }),
            new G(r,this.__chain__).thru(function(t) {
                return e && !t.length && t.push(K),
                t
            })) : this.thru(i)
        })
          , Qf = Ni(function(t, e, n) {
            hl.call(t, n) ? ++t[n] : Kn(t, n, 1)
        })
          , Xf = Ui(as)
          , Gf = Ui(us)
          , Yf = Ni(function(t, e, n) {
            hl.call(t, n) ? t[n].push(e) : Kn(t, n, [e])
        })
          , Kf = Jr(function(e, n, r) {
            var i = -1
              , o = "function" == typeof n
              , s = qa(e) ? Zc(e.length) : [];
            return ff(e, function(e) {
                s[++i] = o ? t(n, e, r) : xr(e, n, r)
            }),
            s
        })
          , Zf = Ni(function(t, e, n) {
            Kn(t, n, e)
        })
          , Jf = Ni(function(t, e, n) {
            t[n ? 0 : 1].push(e)
        }, function() {
            return [[], []]
        })
          , th = Jr(function(t, e) {
            if (null == t)
                return [];
            var n = e.length;
            return n > 1 && Ro(t, e[0], e[1]) ? e = [] : n > 2 && Ro(e[0], e[1], e[2]) && (e = [e[0]]),
            Wr(t, cr(e, 1), [])
        })
          , eh = Pl || function() {
            return En.Date.now()
        }
          , nh = Jr(function(t, e, n) {
            var r = ct;
            if (n.length) {
                var i = B(n, go(nh));
                r |= dt
            }
            return io(t, r, e, n, i)
        })
          , rh = Jr(function(t, e, n) {
            var r = ct | lt;
            if (n.length) {
                var i = B(n, go(rh));
                r |= dt
            }
            return io(e, r, t, n, i)
        })
          , ih = Jr(function(t, e) {
            return rr(t, 1, e)
        })
          , oh = Jr(function(t, e, n) {
            return rr(t, bu(e) || 0, n)
        });
        Sa.Cache = sn;
        var sh = mf(function(e, n) {
            n = 1 == n.length && ph(n[0]) ? u(n[0], j(mo())) : u(cr(n, 1), j(mo()));
            var r = n.length;
            return Jr(function(i) {
                for (var o = -1, s = ql(i.length, r); ++o < s; )
                    i[o] = n[o].call(this, i[o]);
                return t(e, this, i)
            })
        })
          , ah = Jr(function(t, e) {
            var n = B(e, go(ah));
            return io(t, dt, K, e, n)
        })
          , uh = Jr(function(t, e) {
            var n = B(e, go(uh));
            return io(t, vt, K, e, n)
        })
          , ch = fo(function(t, e) {
            return io(t, mt, K, K, K, e)
        })
          , lh = to(gr)
          , fh = to(function(t, e) {
            return t >= e
        })
          , hh = Tr(function() {
            return arguments
        }()) ? Tr : function(t) {
            return eu(t) && hl.call(t, "callee") && !El.call(t, "callee")
        }
          , ph = Zc.isArray
          , dh = Rn ? j(Rn) : Cr
          , vh = Ll || Lc
          , gh = Pn ? j(Pn) : Er
          , mh = Fn ? j(Fn) : jr
          , yh = Dn ? j(Dn) : Rr
          , _h = In ? j(In) : Pr
          , bh = Nn ? j(Nn) : Fr
          , wh = to(Lr)
          , xh = to(function(t, e) {
            return t <= e
        })
          , Th = Li(function(t, e) {
            if (No(e) || qa(e))
                return void Fi(e, Nu(e), t);
            for (var n in e)
                hl.call(e, n) && Vn(t, n, e[n])
        })
          , Ch = Li(function(t, e) {
            Fi(e, Lu(e), t)
        })
          , Eh = Li(function(t, e, n, r) {
            Fi(e, Lu(e), t, r)
        })
          , kh = Li(function(t, e, n, r) {
            Fi(e, Nu(e), t, r)
        })
          , Sh = fo(Zn)
          , jh = Jr(function(t, e) {
            t = rl(t);
            var n = -1
              , r = e.length
              , i = r > 2 ? e[2] : K;
            for (i && Ro(e[0], e[1], i) && (r = 1); ++n < r; )
                for (var o = e[n], s = Lu(o), a = -1, u = s.length; ++a < u; ) {
                    var c = s[a]
                      , l = t[c];
                    (l === K || Ba(l, cl[c]) && !hl.call(t, c)) && (t[c] = o[c])
                }
            return t
        })
          , Ah = Jr(function(e) {
            return e.push(K, so),
            t(Dh, K, e)
        })
          , Oh = Xi(function(t, e, n) {
            null != e && "function" != typeof e.toString && (e = vl.call(e)),
            t[e] = n
        }, Cc(kc))
          , Rh = Xi(function(t, e, n) {
            null != e && "function" != typeof e.toString && (e = vl.call(e)),
            hl.call(t, e) ? t[e].push(n) : t[e] = [n]
        }, mo)
          , Ph = Jr(xr)
          , Fh = Li(function(t, e, n) {
            Br(t, e, n)
        })
          , Dh = Li(function(t, e, n, r) {
            Br(t, e, n, r)
        })
          , Ih = fo(function(t, e) {
            var n = {};
            if (null == t)
                return n;
            var r = !1;
            e = u(e, function(e) {
                return e = bi(e, t),
                r || (r = e.length > 1),
                e
            }),
            Fi(t, po(t), n),
            r && (n = tr(n, it | ot | st, ao));
            for (var i = e.length; i--; )
                hi(n, e[i]);
            return n
        })
          , Nh = fo(function(t, e) {
            return null == t ? {} : Ur(t, e)
        })
          , Lh = ro(Nu)
          , $h = ro(Lu)
          , zh = qi(function(t, e, n) {
            return e = e.toLowerCase(),
            t + (n ? tc(e) : e)
        })
          , Hh = qi(function(t, e, n) {
            return t + (n ? "-" : "") + e.toLowerCase()
        })
          , Bh = qi(function(t, e, n) {
            return t + (n ? " " : "") + e.toLowerCase()
        })
          , qh = Bi("toLowerCase")
          , Mh = qi(function(t, e, n) {
            return t + (n ? "_" : "") + e.toLowerCase()
        })
          , Wh = qi(function(t, e, n) {
            return t + (n ? " " : "") + Vh(e)
        })
          , Uh = qi(function(t, e, n) {
            return t + (n ? " " : "") + e.toUpperCase()
        })
          , Vh = Bi("toUpperCase")
          , Qh = Jr(function(e, n) {
            try {
                return t(e, K, n)
            } catch (t) {
                return Ga(t) ? t : new tl(t)
            }
        })
          , Xh = fo(function(t, e) {
            return n(e, function(e) {
                e = Go(e),
                Kn(t, e, nh(t[e], t))
            }),
            t
        })
          , Gh = Vi()
          , Yh = Vi(!0)
          , Kh = Jr(function(t, e) {
            return function(n) {
                return xr(n, t, e)
            }
        })
          , Zh = Jr(function(t, e) {
            return function(n) {
                return xr(t, n, e)
            }
        })
          , Jh = Yi(u)
          , tp = Yi(i)
          , ep = Yi(h)
          , np = Ji()
          , rp = Ji(!0)
          , ip = Gi(function(t, e) {
            return t + e
        }, 0)
          , op = no("ceil")
          , sp = Gi(function(t, e) {
            return t / e
        }, 1)
          , ap = no("floor")
          , up = Gi(function(t, e) {
            return t * e
        }, 1)
          , cp = no("round")
          , lp = Gi(function(t, e) {
            return t - e
        }, 0);
        return W.after = ba,
        W.ary = wa,
        W.assign = Th,
        W.assignIn = Ch,
        W.assignInWith = Eh,
        W.assignWith = kh,
        W.at = Sh,
        W.before = xa,
        W.bind = nh,
        W.bindAll = Xh,
        W.bindKey = rh,
        W.castArray = Ia,
        W.chain = Vs,
        W.chunk = Jo,
        W.compact = ts,
        W.concat = es,
        W.cond = xc,
        W.conforms = Tc,
        W.constant = Cc,
        W.countBy = Qf,
        W.create = Cu,
        W.curry = Ta,
        W.curryRight = Ca,
        W.debounce = Ea,
        W.defaults = jh,
        W.defaultsDeep = Ah,
        W.defer = ih,
        W.delay = oh,
        W.difference = Af,
        W.differenceBy = Of,
        W.differenceWith = Rf,
        W.drop = ns,
        W.dropRight = rs,
        W.dropRightWhile = is,
        W.dropWhile = os,
        W.fill = ss,
        W.filter = ra,
        W.flatMap = ia,
        W.flatMapDeep = oa,
        W.flatMapDepth = sa,
        W.flatten = cs,
        W.flattenDeep = ls,
        W.flattenDepth = fs,
        W.flip = ka,
        W.flow = Gh,
        W.flowRight = Yh,
        W.fromPairs = hs,
        W.functions = Ru,
        W.functionsIn = Pu,
        W.groupBy = Yf,
        W.initial = vs,
        W.intersection = Pf,
        W.intersectionBy = Ff,
        W.intersectionWith = Df,
        W.invert = Oh,
        W.invertBy = Rh,
        W.invokeMap = Kf,
        W.iteratee = Sc,
        W.keyBy = Zf,
        W.keys = Nu,
        W.keysIn = Lu,
        W.map = la,
        W.mapKeys = $u,
        W.mapValues = zu,
        W.matches = jc,
        W.matchesProperty = Ac,
        W.memoize = Sa,
        W.merge = Fh,
        W.mergeWith = Dh,
        W.method = Kh,
        W.methodOf = Zh,
        W.mixin = Oc,
        W.negate = ja,
        W.nthArg = Fc,
        W.omit = Ih,
        W.omitBy = Hu,
        W.once = Aa,
        W.orderBy = fa,
        W.over = Jh,
        W.overArgs = sh,
        W.overEvery = tp,
        W.overSome = ep,
        W.partial = ah,
        W.partialRight = uh,
        W.partition = Jf,
        W.pick = Nh,
        W.pickBy = Bu,
        W.property = Dc,
        W.propertyOf = Ic,
        W.pull = If,
        W.pullAll = bs,
        W.pullAllBy = ws,
        W.pullAllWith = xs,
        W.pullAt = Nf,
        W.range = np,
        W.rangeRight = rp,
        W.rearg = ch,
        W.reject = da,
        W.remove = Ts,
        W.rest = Oa,
        W.reverse = Cs,
        W.sampleSize = ga,
        W.set = Mu,
        W.setWith = Wu,
        W.shuffle = ma,
        W.slice = Es,
        W.sortBy = th,
        W.sortedUniq = Ps,
        W.sortedUniqBy = Fs,
        W.split = fc,
        W.spread = Ra,
        W.tail = Ds,
        W.take = Is,
        W.takeRight = Ns,
        W.takeRightWhile = Ls,
        W.takeWhile = $s,
        W.tap = Qs,
        W.throttle = Pa,
        W.thru = Xs,
        W.toArray = gu,
        W.toPairs = Lh,
        W.toPairsIn = $h,
        W.toPath = qc,
        W.toPlainObject = wu,
        W.transform = Uu,
        W.unary = Fa,
        W.union = Lf,
        W.unionBy = $f,
        W.unionWith = zf,
        W.uniq = zs,
        W.uniqBy = Hs,
        W.uniqWith = Bs,
        W.unset = Vu,
        W.unzip = qs,
        W.unzipWith = Ms,
        W.update = Qu,
        W.updateWith = Xu,
        W.values = Gu,
        W.valuesIn = Yu,
        W.without = Hf,
        W.words = wc,
        W.wrap = Da,
        W.xor = Bf,
        W.xorBy = qf,
        W.xorWith = Mf,
        W.zip = Wf,
        W.zipObject = Ws,
        W.zipObjectDeep = Us,
        W.zipWith = Uf,
        W.entries = Lh,
        W.entriesIn = $h,
        W.extend = Ch,
        W.extendWith = Eh,
        Oc(W, W),
        W.add = ip,
        W.attempt = Qh,
        W.camelCase = zh,
        W.capitalize = tc,
        W.ceil = op,
        W.clamp = Ku,
        W.clone = Na,
        W.cloneDeep = $a,
        W.cloneDeepWith = za,
        W.cloneWith = La,
        W.conformsTo = Ha,
        W.deburr = ec,
        W.defaultTo = Ec,
        W.divide = sp,
        W.endsWith = nc,
        W.eq = Ba,
        W.escape = rc,
        W.escapeRegExp = ic,
        W.every = na,
        W.find = Xf,
        W.findIndex = as,
        W.findKey = Eu,
        W.findLast = Gf,
        W.findLastIndex = us,
        W.findLastKey = ku,
        W.floor = ap,
        W.forEach = aa,
        W.forEachRight = ua,
        W.forIn = Su,
        W.forInRight = ju,
        W.forOwn = Au,
        W.forOwnRight = Ou,
        W.get = Fu,
        W.gt = lh,
        W.gte = fh,
        W.has = Du,
        W.hasIn = Iu,
        W.head = ps,
        W.identity = kc,
        W.includes = ca,
        W.indexOf = ds,
        W.inRange = Zu,
        W.invoke = Ph,
        W.isArguments = hh,
        W.isArray = ph,
        W.isArrayBuffer = dh,
        W.isArrayLike = qa,
        W.isArrayLikeObject = Ma,
        W.isBoolean = Wa,
        W.isBuffer = vh,
        W.isDate = gh,
        W.isElement = Ua,
        W.isEmpty = Va,
        W.isEqual = Qa,
        W.isEqualWith = Xa,
        W.isError = Ga,
        W.isFinite = Ya,
        W.isFunction = Ka,
        W.isInteger = Za,
        W.isLength = Ja,
        W.isMap = mh,
        W.isMatch = nu,
        W.isMatchWith = ru,
        W.isNaN = iu,
        W.isNative = ou,
        W.isNil = au,
        W.isNull = su,
        W.isNumber = uu,
        W.isObject = tu,
        W.isObjectLike = eu,
        W.isPlainObject = cu,
        W.isRegExp = yh,
        W.isSafeInteger = lu,
        W.isSet = _h,
        W.isString = fu,
        W.isSymbol = hu,
        W.isTypedArray = bh,
        W.isUndefined = pu,
        W.isWeakMap = du,
        W.isWeakSet = vu,
        W.join = gs,
        W.kebabCase = Hh,
        W.last = ms,
        W.lastIndexOf = ys,
        W.lowerCase = Bh,
        W.lowerFirst = qh,
        W.lt = wh,
        W.lte = xh,
        W.max = Wc,
        W.maxBy = Uc,
        W.mean = Vc,
        W.meanBy = Qc,
        W.min = Xc,
        W.minBy = Gc,
        W.stubArray = Nc,
        W.stubFalse = Lc,
        W.stubObject = $c,
        W.stubString = zc,
        W.stubTrue = Hc,
        W.multiply = up,
        W.nth = _s,
        W.noConflict = Rc,
        W.noop = Pc,
        W.now = eh,
        W.pad = oc,
        W.padEnd = sc,
        W.padStart = ac,
        W.parseInt = uc,
        W.random = Ju,
        W.reduce = ha,
        W.reduceRight = pa,
        W.repeat = cc,
        W.replace = lc,
        W.result = qu,
        W.round = cp,
        W.runInContext = p,
        W.sample = va,
        W.size = ya,
        W.snakeCase = Mh,
        W.some = _a,
        W.sortedIndex = ks,
        W.sortedIndexBy = Ss,
        W.sortedIndexOf = js,
        W.sortedLastIndex = As,
        W.sortedLastIndexBy = Os,
        W.sortedLastIndexOf = Rs,
        W.startCase = Wh,
        W.startsWith = hc,
        W.subtract = lp,
        W.sum = Yc,
        W.sumBy = Kc,
        W.template = pc,
        W.times = Bc,
        W.toFinite = mu,
        W.toInteger = yu,
        W.toLength = _u,
        W.toLower = dc,
        W.toNumber = bu,
        W.toSafeInteger = xu,
        W.toString = Tu,
        W.toUpper = vc,
        W.trim = gc,
        W.trimEnd = mc,
        W.trimStart = yc,
        W.truncate = _c,
        W.unescape = bc,
        W.uniqueId = Mc,
        W.upperCase = Uh,
        W.upperFirst = Vh,
        W.each = aa,
        W.eachRight = ua,
        W.first = ps,
        Oc(W, function() {
            var t = {};
            return lr(W, function(e, n) {
                hl.call(W.prototype, n) || (t[n] = e)
            }),
            t
        }(), {
            chain: !1
        }),
        W.VERSION = "4.17.15",
        n(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
            W[t].placeholder = W
        }),
        n(["drop", "take"], function(t, e) {
            Pe.prototype[t] = function(n) {
                n = n === K ? 1 : Bl(yu(n), 0);
                var r = this.__filtered__ && !e ? new Pe(this) : this.clone();
                return r.__filtered__ ? r.__takeCount__ = ql(n, r.__takeCount__) : r.__views__.push({
                    size: ql(n, At),
                    type: t + (r.__dir__ < 0 ? "Right" : "")
                }),
                r
            }
            ,
            Pe.prototype[t + "Right"] = function(e) {
                return this.reverse()[t](e).reverse()
            }
        }),
        n(["filter", "map", "takeWhile"], function(t, e) {
            var n = e + 1
              , r = n == Tt || 3 == n;
            Pe.prototype[t] = function(t) {
                var e = this.clone();
                return e.__iteratees__.push({
                    iteratee: mo(t, 3),
                    type: n
                }),
                e.__filtered__ = e.__filtered__ || r,
                e
            }
        }),
        n(["head", "last"], function(t, e) {
            var n = "take" + (e ? "Right" : "");
            Pe.prototype[t] = function() {
                return this[n](1).value()[0]
            }
        }),
        n(["initial", "tail"], function(t, e) {
            var n = "drop" + (e ? "" : "Right");
            Pe.prototype[t] = function() {
                return this.__filtered__ ? new Pe(this) : this[n](1)
            }
        }),
        Pe.prototype.compact = function() {
            return this.filter(kc)
        }
        ,
        Pe.prototype.find = function(t) {
            return this.filter(t).head()
        }
        ,
        Pe.prototype.findLast = function(t) {
            return this.reverse().find(t)
        }
        ,
        Pe.prototype.invokeMap = Jr(function(t, e) {
            return "function" == typeof t ? new Pe(this) : this.map(function(n) {
                return xr(n, t, e)
            })
        }),
        Pe.prototype.reject = function(t) {
            return this.filter(ja(mo(t)))
        }
        ,
        Pe.prototype.slice = function(t, e) {
            t = yu(t);
            var n = this;
            return n.__filtered__ && (t > 0 || e < 0) ? new Pe(n) : (t < 0 ? n = n.takeRight(-t) : t && (n = n.drop(t)),
            e !== K && (e = yu(e),
            n = e < 0 ? n.dropRight(-e) : n.take(e - t)),
            n)
        }
        ,
        Pe.prototype.takeRightWhile = function(t) {
            return this.reverse().takeWhile(t).reverse()
        }
        ,
        Pe.prototype.toArray = function() {
            return this.take(At)
        }
        ,
        lr(Pe.prototype, function(t, e) {
            var n = /^(?:filter|find|map|reject)|While$/.test(e)
              , r = /^(?:head|last)$/.test(e)
              , i = W[r ? "take" + ("last" == e ? "Right" : "") : e]
              , o = r || /^find/.test(e);
            i && (W.prototype[e] = function() {
                var e = this.__wrapped__
                  , s = r ? [1] : arguments
                  , a = e instanceof Pe
                  , u = s[0]
                  , l = a || ph(e)
                  , f = function(t) {
                    var e = i.apply(W, c([t], s));
                    return r && h ? e[0] : e
                };
                l && n && "function" == typeof u && 1 != u.length && (a = l = !1);
                var h = this.__chain__
                  , p = !!this.__actions__.length
                  , d = o && !h
                  , v = a && !p;
                if (!o && l) {
                    e = v ? e : new Pe(this);
                    var g = t.apply(e, s);
                    return g.__actions__.push({
                        func: Xs,
                        args: [f],
                        thisArg: K
                    }),
                    new G(g,h)
                }
                return d && v ? t.apply(this, s) : (g = this.thru(f),
                d ? r ? g.value()[0] : g.value() : g)
            }
            )
        }),
        n(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
            var e = al[t]
              , n = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru"
              , r = /^(?:pop|shift)$/.test(t);
            W.prototype[t] = function() {
                var t = arguments;
                if (r && !this.__chain__) {
                    var i = this.value();
                    return e.apply(ph(i) ? i : [], t)
                }
                return this[n](function(n) {
                    return e.apply(ph(n) ? n : [], t)
                })
            }
        }),
        lr(Pe.prototype, function(t, e) {
            var n = W[e];
            if (n) {
                var r = n.name + "";
                hl.call(tf, r) || (tf[r] = []),
                tf[r].push({
                    name: e,
                    func: n
                })
            }
        }),
        tf[Qi(K, lt).name] = [{
            name: "wrapper",
            func: K
        }],
        Pe.prototype.clone = We,
        Pe.prototype.reverse = Ue,
        Pe.prototype.value = Ve,
        W.prototype.at = Vf,
        W.prototype.chain = Gs,
        W.prototype.commit = Ys,
        W.prototype.next = Ks,
        W.prototype.plant = Js,
        W.prototype.reverse = ta,
        W.prototype.toJSON = W.prototype.valueOf = W.prototype.value = ea,
        W.prototype.first = W.prototype.head,
        jl && (W.prototype[jl] = Zs),
        W
    }();
    "function" == typeof define && "object" == typeof define.amd && define.amd ? (En._ = Bn,
    define(function() {
        return Bn
    })) : Sn ? ((Sn.exports = Bn)._ = Bn,
    kn._ = Bn) : En._ = Bn
}
.call(this),
function(t, e) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(n) {
        return e(t, n)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, function(t, e) {
    "use strict";
    function n(n, o, a) {
        function u(t, e, r) {
            var i, o = "$()." + n + '("' + e + '")';
            return t.each(function(t, u) {
                var c = a.data(u, n);
                if (!c)
                    return void s(n + " not initialized. Cannot call methods, i.e. " + o);
                var l = c[e];
                if (!l || "_" == e.charAt(0))
                    return void s(o + " is not a valid method");
                var f = l.apply(c, r);
                i = void 0 === i ? f : i
            }),
            void 0 !== i ? i : t
        }
        function c(t, e) {
            t.each(function(t, r) {
                var i = a.data(r, n);
                i ? (i.option(e),
                i._init()) : (i = new o(r,e),
                a.data(r, n, i))
            })
        }
        (a = a || e || t.jQuery) && (o.prototype.option || (o.prototype.option = function(t) {
            a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
        }
        ),
        a.fn[n] = function(t) {
            if ("string" == typeof t) {
                return u(this, t, i.call(arguments, 1))
            }
            return c(this, t),
            this
        }
        ,
        r(a))
    }
    function r(t) {
        !t || t && t.bridget || (t.bridget = n)
    }
    var i = Array.prototype.slice
      , o = t.console
      , s = void 0 === o ? function() {}
    : function(t) {
        o.error(t)
    }
    ;
    return r(e || t.jQuery),
    n
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function() {
    "use strict";
    function t(t) {
        var e = parseFloat(t);
        return -1 == t.indexOf("%") && !isNaN(e) && e
    }
    function e() {}
    function n() {
        for (var t = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
        }, e = 0; c > e; e++) {
            t[u[e]] = 0
        }
        return t
    }
    function r(t) {
        var e = getComputedStyle(t);
        return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),
        e
    }
    function i() {
        if (!l) {
            l = !0;
            var e = document.createElement("div");
            e.style.width = "200px",
            e.style.padding = "1px 2px 3px 4px",
            e.style.borderStyle = "solid",
            e.style.borderWidth = "1px 2px 3px 4px",
            e.style.boxSizing = "border-box";
            var n = document.body || document.documentElement;
            n.appendChild(e);
            var i = r(e);
            s = 200 == Math.round(t(i.width)),
            o.isBoxSizeOuter = s,
            n.removeChild(e)
        }
    }
    function o(e) {
        if (i(),
        "string" == typeof e && (e = document.querySelector(e)),
        e && "object" == typeof e && e.nodeType) {
            var o = r(e);
            if ("none" == o.display)
                return n();
            var a = {};
            a.width = e.offsetWidth,
            a.height = e.offsetHeight;
            for (var l = a.isBorderBox = "border-box" == o.boxSizing, f = 0; c > f; f++) {
                var h = u[f]
                  , p = o[h]
                  , d = parseFloat(p);
                a[h] = isNaN(d) ? 0 : d
            }
            var v = a.paddingLeft + a.paddingRight
              , g = a.paddingTop + a.paddingBottom
              , m = a.marginLeft + a.marginRight
              , y = a.marginTop + a.marginBottom
              , _ = a.borderLeftWidth + a.borderRightWidth
              , b = a.borderTopWidth + a.borderBottomWidth
              , w = l && s
              , x = t(o.width);
            !1 !== x && (a.width = x + (w ? 0 : v + _));
            var T = t(o.height);
            return !1 !== T && (a.height = T + (w ? 0 : g + b)),
            a.innerWidth = a.width - (v + _),
            a.innerHeight = a.height - (g + b),
            a.outerWidth = a.width + m,
            a.outerHeight = a.height + y,
            a
        }
    }
    var s, a = "undefined" == typeof console ? e : function(t) {
        console.error(t)
    }
    , u = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"], c = u.length, l = !1;
    return o
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function() {
    function t() {}
    var e = t.prototype;
    return e.on = function(t, e) {
        if (t && e) {
            var n = this._events = this._events || {}
              , r = n[t] = n[t] || [];
            return -1 == r.indexOf(e) && r.push(e),
            this
        }
    }
    ,
    e.once = function(t, e) {
        if (t && e) {
            this.on(t, e);
            var n = this._onceEvents = this._onceEvents || {};
            return (n[t] = n[t] || {})[e] = !0,
            this
        }
    }
    ,
    e.off = function(t, e) {
        var n = this._events && this._events[t];
        if (n && n.length) {
            var r = n.indexOf(e);
            return -1 != r && n.splice(r, 1),
            this
        }
    }
    ,
    e.emitEvent = function(t, e) {
        var n = this._events && this._events[t];
        if (n && n.length) {
            n = n.slice(0),
            e = e || [];
            for (var r = this._onceEvents && this._onceEvents[t], i = 0; i < n.length; i++) {
                var o = n[i];
                r && r[o] && (this.off(t, o),
                delete r[o]),
                o.apply(this, e)
            }
            return this
        }
    }
    ,
    e.allOff = function() {
        delete this._events,
        delete this._onceEvents
    }
    ,
    t
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function() {
    "use strict";
    var t = function() {
        var t = window.Element.prototype;
        if (t.matches)
            return "matches";
        if (t.matchesSelector)
            return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], n = 0; n < e.length; n++) {
            var r = e[n]
              , i = r + "MatchesSelector";
            if (t[i])
                return i
        }
    }();
    return function(e, n) {
        return e[t](n)
    }
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(n) {
        return e(t, n)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
}(window, function(t, e) {
    var n = {};
    n.extend = function(t, e) {
        for (var n in e)
            t[n] = e[n];
        return t
    }
    ,
    n.modulo = function(t, e) {
        return (t % e + e) % e
    }
    ;
    var r = Array.prototype.slice;
    n.makeArray = function(t) {
        return Array.isArray(t) ? t : null === t || void 0 === t ? [] : "object" == typeof t && "number" == typeof t.length ? r.call(t) : [t]
    }
    ,
    n.removeFrom = function(t, e) {
        var n = t.indexOf(e);
        -1 != n && t.splice(n, 1)
    }
    ,
    n.getParent = function(t, n) {
        for (; t.parentNode && t != document.body; )
            if (t = t.parentNode,
            e(t, n))
                return t
    }
    ,
    n.getQueryElement = function(t) {
        return "string" == typeof t ? document.querySelector(t) : t
    }
    ,
    n.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }
    ,
    n.filterFindElements = function(t, r) {
        t = n.makeArray(t);
        var i = [];
        return t.forEach(function(t) {
            if (t instanceof HTMLElement) {
                if (!r)
                    return void i.push(t);
                e(t, r) && i.push(t);
                for (var n = t.querySelectorAll(r), o = 0; o < n.length; o++)
                    i.push(n[o])
            }
        }),
        i
    }
    ,
    n.debounceMethod = function(t, e, n) {
        n = n || 100;
        var r = t.prototype[e]
          , i = e + "Timeout";
        t.prototype[e] = function() {
            var t = this[i];
            clearTimeout(t);
            var e = arguments
              , o = this;
            this[i] = setTimeout(function() {
                r.apply(o, e),
                delete o[i]
            }, n)
        }
    }
    ,
    n.docReady = function(t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
    }
    ,
    n.toDashed = function(t) {
        return t.replace(/(.)([A-Z])/g, function(t, e, n) {
            return e + "-" + n
        }).toLowerCase()
    }
    ;
    var i = t.console;
    return n.htmlInit = function(e, r) {
        n.docReady(function() {
            var o = n.toDashed(r)
              , s = "data-" + o
              , a = document.querySelectorAll("[" + s + "]")
              , u = document.querySelectorAll(".js-" + o)
              , c = n.makeArray(a).concat(n.makeArray(u))
              , l = s + "-options"
              , f = t.jQuery;
            c.forEach(function(t) {
                var n, o = t.getAttribute(s) || t.getAttribute(l);
                try {
                    n = o && JSON.parse(o)
                } catch (e) {
                    return void (i && i.error("Error parsing " + s + " on " + t.className + ": " + e))
                }
                var a = new e(t,n);
                f && f.data(t, r, a)
            })
        })
    }
    ,
    n
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {},
    t.Outlayer.Item = e(t.EvEmitter, t.getSize))
}(window, function(t, e) {
    "use strict";
    function n(t) {
        for (var e in t)
            return !1;
        return null,
        !0
    }
    function r(t, e) {
        t && (this.element = t,
        this.layout = e,
        this.position = {
            x: 0,
            y: 0
        },
        this._create())
    }
    var i = document.documentElement.style
      , o = "string" == typeof i.transition ? "transition" : "WebkitTransition"
      , s = "string" == typeof i.transform ? "transform" : "WebkitTransform"
      , a = {
        WebkitTransition: "webkitTransitionEnd",
        transition: "transitionend"
    }[o]
      , u = {
        transform: s,
        transition: o,
        transitionDuration: o + "Duration",
        transitionProperty: o + "Property",
        transitionDelay: o + "Delay"
    }
      , c = r.prototype = Object.create(t.prototype);
    c.constructor = r,
    c._create = function() {
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        },
        this.css({
            position: "absolute"
        })
    }
    ,
    c.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }
    ,
    c.getSize = function() {
        this.size = e(this.element)
    }
    ,
    c.css = function(t) {
        var e = this.element.style;
        for (var n in t) {
            e[u[n] || n] = t[n]
        }
    }
    ,
    c.getPosition = function() {
        var t = getComputedStyle(this.element)
          , e = this.layout._getOption("originLeft")
          , n = this.layout._getOption("originTop")
          , r = t[e ? "left" : "right"]
          , i = t[n ? "top" : "bottom"]
          , o = parseFloat(r)
          , s = parseFloat(i)
          , a = this.layout.size;
        -1 != r.indexOf("%") && (o = o / 100 * a.width),
        -1 != i.indexOf("%") && (s = s / 100 * a.height),
        o = isNaN(o) ? 0 : o,
        s = isNaN(s) ? 0 : s,
        o -= e ? a.paddingLeft : a.paddingRight,
        s -= n ? a.paddingTop : a.paddingBottom,
        this.position.x = o,
        this.position.y = s
    }
    ,
    c.layoutPosition = function() {
        var t = this.layout.size
          , e = {}
          , n = this.layout._getOption("originLeft")
          , r = this.layout._getOption("originTop")
          , i = n ? "paddingLeft" : "paddingRight"
          , o = n ? "left" : "right"
          , s = n ? "right" : "left"
          , a = this.position.x + t[i];
        e[o] = this.getXValue(a),
        e[s] = "";
        var u = r ? "paddingTop" : "paddingBottom"
          , c = r ? "top" : "bottom"
          , l = r ? "bottom" : "top"
          , f = this.position.y + t[u];
        e[c] = this.getYValue(f),
        e[l] = "",
        this.css(e),
        this.emitEvent("layout", [this])
    }
    ,
    c.getXValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
    }
    ,
    c.getYValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
    }
    ,
    c._transitionTo = function(t, e) {
        this.getPosition();
        var n = this.position.x
          , r = this.position.y
          , i = t == this.position.x && e == this.position.y;
        if (this.setPosition(t, e),
        i && !this.isTransitioning)
            return void this.layoutPosition();
        var o = t - n
          , s = e - r
          , a = {};
        a.transform = this.getTranslate(o, s),
        this.transition({
            to: a,
            onTransitionEnd: {
                transform: this.layoutPosition
            },
            isCleaning: !0
        })
    }
    ,
    c.getTranslate = function(t, e) {
        var n = this.layout._getOption("originLeft")
          , r = this.layout._getOption("originTop");
        return t = n ? t : -t,
        e = r ? e : -e,
        "translate3d(" + t + "px, " + e + "px, 0)"
    }
    ,
    c.goTo = function(t, e) {
        this.setPosition(t, e),
        this.layoutPosition()
    }
    ,
    c.moveTo = c._transitionTo,
    c.setPosition = function(t, e) {
        this.position.x = parseFloat(t),
        this.position.y = parseFloat(e)
    }
    ,
    c._nonTransition = function(t) {
        this.css(t.to),
        t.isCleaning && this._removeStyles(t.to);
        for (var e in t.onTransitionEnd)
            t.onTransitionEnd[e].call(this)
    }
    ,
    c.transition = function(t) {
        if (!parseFloat(this.layout.options.transitionDuration))
            return void this._nonTransition(t);
        var e = this._transn;
        for (var n in t.onTransitionEnd)
            e.onEnd[n] = t.onTransitionEnd[n];
        for (n in t.to)
            e.ingProperties[n] = !0,
            t.isCleaning && (e.clean[n] = !0);
        if (t.from) {
            this.css(t.from);
            this.element.offsetHeight;
            null
        }
        this.enableTransition(t.to),
        this.css(t.to),
        this.isTransitioning = !0
    }
    ;
    var l = "opacity," + function(t) {
        return t.replace(/([A-Z])/g, function(t) {
            return "-" + t.toLowerCase()
        })
    }(s);
    c.enableTransition = function() {
        if (!this.isTransitioning) {
            var t = this.layout.options.transitionDuration;
            t = "number" == typeof t ? t + "ms" : t,
            this.css({
                transitionProperty: l,
                transitionDuration: t,
                transitionDelay: this.staggerDelay || 0
            }),
            this.element.addEventListener(a, this, !1)
        }
    }
    ,
    c.onwebkitTransitionEnd = function(t) {
        this.ontransitionend(t)
    }
    ,
    c.onotransitionend = function(t) {
        this.ontransitionend(t)
    }
    ;
    var f = {
        "-webkit-transform": "transform"
    };
    c.ontransitionend = function(t) {
        if (t.target === this.element) {
            var e = this._transn
              , r = f[t.propertyName] || t.propertyName;
            if (delete e.ingProperties[r],
            n(e.ingProperties) && this.disableTransition(),
            r in e.clean && (this.element.style[t.propertyName] = "",
            delete e.clean[r]),
            r in e.onEnd) {
                e.onEnd[r].call(this),
                delete e.onEnd[r]
            }
            this.emitEvent("transitionEnd", [this])
        }
    }
    ,
    c.disableTransition = function() {
        this.removeTransitionStyles(),
        this.element.removeEventListener(a, this, !1),
        this.isTransitioning = !1
    }
    ,
    c._removeStyles = function(t) {
        var e = {};
        for (var n in t)
            e[n] = "";
        this.css(e)
    }
    ;
    var h = {
        transitionProperty: "",
        transitionDuration: "",
        transitionDelay: ""
    };
    return c.removeTransitionStyles = function() {
        this.css(h)
    }
    ,
    c.stagger = function(t) {
        t = isNaN(t) ? 0 : t,
        this.staggerDelay = t + "ms"
    }
    ,
    c.removeElem = function() {
        this.element.parentNode.removeChild(this.element),
        this.css({
            display: ""
        }),
        this.emitEvent("remove", [this])
    }
    ,
    c.remove = function() {
        return o && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
            this.removeElem()
        }),
        void this.hide()) : void this.removeElem()
    }
    ,
    c.reveal = function() {
        delete this.isHidden,
        this.css({
            display: ""
        });
        var t = this.layout.options
          , e = {};
        e[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd,
        this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }
    ,
    c.onRevealTransitionEnd = function() {
        this.isHidden || this.emitEvent("reveal")
    }
    ,
    c.getHideRevealTransitionEndProperty = function(t) {
        var e = this.layout.options[t];
        if (e.opacity)
            return "opacity";
        for (var n in e)
            return n
    }
    ,
    c.hide = function() {
        this.isHidden = !0,
        this.css({
            display: ""
        });
        var t = this.layout.options
          , e = {};
        e[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd,
        this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }
    ,
    c.onHideTransitionEnd = function() {
        this.isHidden && (this.css({
            display: "none"
        }),
        this.emitEvent("hide"))
    }
    ,
    c.destroy = function() {
        this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: ""
        })
    }
    ,
    r
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(n, r, i, o) {
        return e(t, n, r, i, o)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, function(t, e, n, r, i) {
    "use strict";
    function o(t, e) {
        var n = r.getQueryElement(t);
        if (!n)
            return void (u && u.error("Bad element for " + this.constructor.namespace + ": " + (n || t)));
        this.element = n,
        c && (this.$element = c(this.element)),
        this.options = r.extend({}, this.constructor.defaults),
        this.option(e);
        var i = ++f;
        this.element.outlayerGUID = i,
        h[i] = this,
        this._create(),
        this._getOption("initLayout") && this.layout()
    }
    function s(t) {
        function e() {
            t.apply(this, arguments)
        }
        return e.prototype = Object.create(t.prototype),
        e.prototype.constructor = e,
        e
    }
    function a(t) {
        if ("number" == typeof t)
            return t;
        var e = t.match(/(^\d*\.?\d*)(\w*)/)
          , n = e && e[1]
          , r = e && e[2];
        return n.length ? (n = parseFloat(n)) * (d[r] || 1) : 0
    }
    var u = t.console
      , c = t.jQuery
      , l = function() {}
      , f = 0
      , h = {};
    o.namespace = "outlayer",
    o.Item = i,
    o.defaults = {
        containerStyle: {
            position: "relative"
        },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)"
        },
        visibleStyle: {
            opacity: 1,
            transform: "scale(1)"
        }
    };
    var p = o.prototype;
    r.extend(p, e.prototype),
    p.option = function(t) {
        r.extend(this.options, t)
    }
    ,
    p._getOption = function(t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
    }
    ,
    o.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
    },
    p._create = function() {
        this.reloadItems(),
        this.stamps = [],
        this.stamp(this.options.stamp),
        r.extend(this.element.style, this.options.containerStyle),
        this._getOption("resize") && this.bindResize()
    }
    ,
    p.reloadItems = function() {
        this.items = this._itemize(this.element.children)
    }
    ,
    p._itemize = function(t) {
        for (var e = this._filterFindItemElements(t), n = this.constructor.Item, r = [], i = 0; i < e.length; i++) {
            var o = e[i]
              , s = new n(o,this);
            r.push(s)
        }
        return r
    }
    ,
    p._filterFindItemElements = function(t) {
        return r.filterFindElements(t, this.options.itemSelector)
    }
    ,
    p.getItemElements = function() {
        return this.items.map(function(t) {
            return t.element
        })
    }
    ,
    p.layout = function() {
        this._resetLayout(),
        this._manageStamps();
        var t = this._getOption("layoutInstant")
          , e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e),
        this._isLayoutInited = !0
    }
    ,
    p._init = p.layout,
    p._resetLayout = function() {
        this.getSize()
    }
    ,
    p.getSize = function() {
        this.size = n(this.element)
    }
    ,
    p._getMeasurement = function(t, e) {
        var r, i = this.options[t];
        i ? ("string" == typeof i ? r = this.element.querySelector(i) : i instanceof HTMLElement && (r = i),
        this[t] = r ? n(r)[e] : i) : this[t] = 0
    }
    ,
    p.layoutItems = function(t, e) {
        t = this._getItemsForLayout(t),
        this._layoutItems(t, e),
        this._postLayout()
    }
    ,
    p._getItemsForLayout = function(t) {
        return t.filter(function(t) {
            return !t.isIgnored
        })
    }
    ,
    p._layoutItems = function(t, e) {
        if (this._emitCompleteOnItems("layout", t),
        t && t.length) {
            var n = [];
            t.forEach(function(t) {
                var r = this._getItemLayoutPosition(t);
                r.item = t,
                r.isInstant = e || t.isLayoutInstant,
                n.push(r)
            }, this),
            this._processLayoutQueue(n)
        }
    }
    ,
    p._getItemLayoutPosition = function() {
        return {
            x: 0,
            y: 0
        }
    }
    ,
    p._processLayoutQueue = function(t) {
        this.updateStagger(),
        t.forEach(function(t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e)
        }, this)
    }
    ,
    p.updateStagger = function() {
        var t = this.options.stagger;
        return null === t || void 0 === t ? void (this.stagger = 0) : (this.stagger = a(t),
        this.stagger)
    }
    ,
    p._positionItem = function(t, e, n, r, i) {
        r ? t.goTo(e, n) : (t.stagger(i * this.stagger),
        t.moveTo(e, n))
    }
    ,
    p._postLayout = function() {
        this.resizeContainer()
    }
    ,
    p.resizeContainer = function() {
        if (this._getOption("resizeContainer")) {
            var t = this._getContainerSize();
            t && (this._setContainerMeasure(t.width, !0),
            this._setContainerMeasure(t.height, !1))
        }
    }
    ,
    p._getContainerSize = l,
    p._setContainerMeasure = function(t, e) {
        if (void 0 !== t) {
            var n = this.size;
            n.isBorderBox && (t += e ? n.paddingLeft + n.paddingRight + n.borderLeftWidth + n.borderRightWidth : n.paddingBottom + n.paddingTop + n.borderTopWidth + n.borderBottomWidth),
            t = Math.max(t, 0),
            this.element.style[e ? "width" : "height"] = t + "px"
        }
    }
    ,
    p._emitCompleteOnItems = function(t, e) {
        function n() {
            i.dispatchEvent(t + "Complete", null, [e])
        }
        function r() {
            ++s == o && n()
        }
        var i = this
          , o = e.length;
        if (!e || !o)
            return void n();
        var s = 0;
        e.forEach(function(e) {
            e.once(t, r)
        })
    }
    ,
    p.dispatchEvent = function(t, e, n) {
        var r = e ? [e].concat(n) : n;
        if (this.emitEvent(t, r),
        c)
            if (this.$element = this.$element || c(this.element),
            e) {
                var i = c.Event(e);
                i.type = t,
                this.$element.trigger(i, n)
            } else
                this.$element.trigger(t, n)
    }
    ,
    p.ignore = function(t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0)
    }
    ,
    p.unignore = function(t) {
        var e = this.getItem(t);
        e && delete e.isIgnored
    }
    ,
    p.stamp = function(t) {
        (t = this._find(t)) && (this.stamps = this.stamps.concat(t),
        t.forEach(this.ignore, this))
    }
    ,
    p.unstamp = function(t) {
        (t = this._find(t)) && t.forEach(function(t) {
            r.removeFrom(this.stamps, t),
            this.unignore(t)
        }, this)
    }
    ,
    p._find = function(t) {
        return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)),
        t = r.makeArray(t)) : void 0
    }
    ,
    p._manageStamps = function() {
        this.stamps && this.stamps.length && (this._getBoundingRect(),
        this.stamps.forEach(this._manageStamp, this))
    }
    ,
    p._getBoundingRect = function() {
        var t = this.element.getBoundingClientRect()
          , e = this.size;
        this._boundingRect = {
            left: t.left + e.paddingLeft + e.borderLeftWidth,
            top: t.top + e.paddingTop + e.borderTopWidth,
            right: t.right - (e.paddingRight + e.borderRightWidth),
            bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
        }
    }
    ,
    p._manageStamp = l,
    p._getElementOffset = function(t) {
        var e = t.getBoundingClientRect()
          , r = this._boundingRect
          , i = n(t);
        return {
            left: e.left - r.left - i.marginLeft,
            top: e.top - r.top - i.marginTop,
            right: r.right - e.right - i.marginRight,
            bottom: r.bottom - e.bottom - i.marginBottom
        }
    }
    ,
    p.handleEvent = r.handleEvent,
    p.bindResize = function() {
        t.addEventListener("resize", this),
        this.isResizeBound = !0
    }
    ,
    p.unbindResize = function() {
        t.removeEventListener("resize", this),
        this.isResizeBound = !1
    }
    ,
    p.onresize = function() {
        this.resize()
    }
    ,
    r.debounceMethod(o, "onresize", 100),
    p.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }
    ,
    p.needsResizeLayout = function() {
        var t = n(this.element);
        return this.size && t && t.innerWidth !== this.size.innerWidth
    }
    ,
    p.addItems = function(t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)),
        e
    }
    ,
    p.appended = function(t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0),
        this.reveal(e))
    }
    ,
    p.prepended = function(t) {
        var e = this._itemize(t);
        if (e.length) {
            var n = this.items.slice(0);
            this.items = e.concat(n),
            this._resetLayout(),
            this._manageStamps(),
            this.layoutItems(e, !0),
            this.reveal(e),
            this.layoutItems(n)
        }
    }
    ,
    p.reveal = function(t) {
        if (this._emitCompleteOnItems("reveal", t),
        t && t.length) {
            var e = this.updateStagger();
            t.forEach(function(t, n) {
                t.stagger(n * e),
                t.reveal()
            })
        }
    }
    ,
    p.hide = function(t) {
        if (this._emitCompleteOnItems("hide", t),
        t && t.length) {
            var e = this.updateStagger();
            t.forEach(function(t, n) {
                t.stagger(n * e),
                t.hide()
            })
        }
    }
    ,
    p.revealItemElements = function(t) {
        var e = this.getItems(t);
        this.reveal(e)
    }
    ,
    p.hideItemElements = function(t) {
        var e = this.getItems(t);
        this.hide(e)
    }
    ,
    p.getItem = function(t) {
        for (var e = 0; e < this.items.length; e++) {
            var n = this.items[e];
            if (n.element == t)
                return n
        }
    }
    ,
    p.getItems = function(t) {
        t = r.makeArray(t);
        var e = [];
        return t.forEach(function(t) {
            var n = this.getItem(t);
            n && e.push(n)
        }, this),
        e
    }
    ,
    p.remove = function(t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e),
        e && e.length && e.forEach(function(t) {
            t.remove(),
            r.removeFrom(this.items, t)
        }, this)
    }
    ,
    p.destroy = function() {
        var t = this.element.style;
        t.height = "",
        t.position = "",
        t.width = "",
        this.items.forEach(function(t) {
            t.destroy()
        }),
        this.unbindResize();
        var e = this.element.outlayerGUID;
        delete h[e],
        delete this.element.outlayerGUID,
        c && c.removeData(this.element, this.constructor.namespace)
    }
    ,
    o.data = function(t) {
        t = r.getQueryElement(t);
        var e = t && t.outlayerGUID;
        return e && h[e]
    }
    ,
    o.create = function(t, e) {
        var n = s(o);
        return n.defaults = r.extend({}, o.defaults),
        r.extend(n.defaults, e),
        n.compatOptions = r.extend({}, o.compatOptions),
        n.namespace = t,
        n.data = o.data,
        n.Item = s(i),
        r.htmlInit(n, t),
        c && c.bridget && c.bridget(t, n),
        n
    }
    ;
    var d = {
        ms: 1,
        s: 1e3
    };
    return o.Item = i,
    o
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("packery/js/rect", e) : "object" == typeof module && module.exports ? module.exports = e() : (t.Packery = t.Packery || {},
    t.Packery.Rect = e())
}(window, function() {
    "use strict";
    function t(e) {
        for (var n in t.defaults)
            this[n] = t.defaults[n];
        for (n in e)
            this[n] = e[n]
    }
    t.defaults = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
    };
    var e = t.prototype;
    return e.contains = function(t) {
        var e = t.width || 0
          , n = t.height || 0;
        return this.x <= t.x && this.y <= t.y && this.x + this.width >= t.x + e && this.y + this.height >= t.y + n
    }
    ,
    e.overlaps = function(t) {
        var e = this.x + this.width
          , n = this.y + this.height
          , r = t.x + t.width
          , i = t.y + t.height;
        return this.x < r && e > t.x && this.y < i && n > t.y
    }
    ,
    e.getMaximalFreeRects = function(e) {
        if (!this.overlaps(e))
            return !1;
        var n, r = [], i = this.x + this.width, o = this.y + this.height, s = e.x + e.width, a = e.y + e.height;
        return this.y < e.y && (n = new t({
            x: this.x,
            y: this.y,
            width: this.width,
            height: e.y - this.y
        }),
        r.push(n)),
        i > s && (n = new t({
            x: s,
            y: this.y,
            width: i - s,
            height: this.height
        }),
        r.push(n)),
        o > a && (n = new t({
            x: this.x,
            y: a,
            width: this.width,
            height: o - a
        }),
        r.push(n)),
        this.x < e.x && (n = new t({
            x: this.x,
            y: this.y,
            width: e.x - this.x,
            height: this.height
        }),
        r.push(n)),
        r
    }
    ,
    e.canFit = function(t) {
        return this.width >= t.width && this.height >= t.height
    }
    ,
    t
}),
function(t, e) {
    if ("function" == typeof define && define.amd)
        define("packery/js/packer", ["./rect"], e);
    else if ("object" == typeof module && module.exports)
        module.exports = e(require("./rect"));
    else {
        var n = t.Packery = t.Packery || {};
        n.Packer = e(n.Rect)
    }
}(window, function(t) {
    "use strict";
    function e(t, e, n) {
        this.width = t || 0,
        this.height = e || 0,
        this.sortDirection = n || "downwardLeftToRight",
        this.reset()
    }
    var n = e.prototype;
    n.reset = function() {
        this.spaces = [];
        var e = new t({
            x: 0,
            y: 0,
            width: this.width,
            height: this.height
        });
        this.spaces.push(e),
        this.sorter = r[this.sortDirection] || r.downwardLeftToRight
    }
    ,
    n.pack = function(t) {
        for (var e = 0; e < this.spaces.length; e++) {
            var n = this.spaces[e];
            if (n.canFit(t)) {
                this.placeInSpace(t, n);
                break
            }
        }
    }
    ,
    n.columnPack = function(t) {
        for (var e = 0; e < this.spaces.length; e++) {
            var n = this.spaces[e];
            if (n.x <= t.x && n.x + n.width >= t.x + t.width && n.height >= t.height - .01) {
                t.y = n.y,
                this.placed(t);
                break
            }
        }
    }
    ,
    n.rowPack = function(t) {
        for (var e = 0; e < this.spaces.length; e++) {
            var n = this.spaces[e];
            if (n.y <= t.y && n.y + n.height >= t.y + t.height && n.width >= t.width - .01) {
                t.x = n.x,
                this.placed(t);
                break
            }
        }
    }
    ,
    n.placeInSpace = function(t, e) {
        t.x = e.x,
        t.y = e.y,
        this.placed(t)
    }
    ,
    n.placed = function(t) {
        for (var e = [], n = 0; n < this.spaces.length; n++) {
            var r = this.spaces[n]
              , i = r.getMaximalFreeRects(t);
            i ? e.push.apply(e, i) : e.push(r)
        }
        this.spaces = e,
        this.mergeSortSpaces()
    }
    ,
    n.mergeSortSpaces = function() {
        e.mergeRects(this.spaces),
        this.spaces.sort(this.sorter)
    }
    ,
    n.addSpace = function(t) {
        this.spaces.push(t),
        this.mergeSortSpaces()
    }
    ,
    e.mergeRects = function(t) {
        var e = 0
          , n = t[e];
        t: for (; n; ) {
            for (var r = 0, i = t[e + r]; i; ) {
                if (i == n)
                    r++;
                else {
                    if (i.contains(n)) {
                        t.splice(e, 1),
                        n = t[e];
                        continue t
                    }
                    n.contains(i) ? t.splice(e + r, 1) : r++
                }
                i = t[e + r]
            }
            e++,
            n = t[e]
        }
        return t
    }
    ;
    var r = {
        downwardLeftToRight: function(t, e) {
            return t.y - e.y || t.x - e.x
        },
        rightwardTopToBottom: function(t, e) {
            return t.x - e.x || t.y - e.y
        }
    };
    return e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("packery/js/item", ["outlayer/outlayer", "./rect"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("./rect")) : t.Packery.Item = e(t.Outlayer, t.Packery.Rect)
}(window, function(t, e) {
    "use strict";
    var n = document.documentElement.style
      , r = "string" == typeof n.transform ? "transform" : "WebkitTransform"
      , i = function() {
        t.Item.apply(this, arguments)
    }
      , o = i.prototype = Object.create(t.Item.prototype)
      , s = o._create;
    o._create = function() {
        s.call(this),
        this.rect = new e
    }
    ;
    var a = o.moveTo;
    return o.moveTo = function(t, e) {
        var n = Math.abs(this.position.x - t)
          , r = Math.abs(this.position.y - e);
        return this.layout.dragItemCount && !this.isPlacing && !this.isTransitioning && 1 > n && 1 > r ? void this.goTo(t, e) : void a.apply(this, arguments)
    }
    ,
    o.enablePlacing = function() {
        this.removeTransitionStyles(),
        this.isTransitioning && r && (this.element.style[r] = "none"),
        this.isTransitioning = !1,
        this.getSize(),
        this.layout._setRectSize(this.element, this.rect),
        this.isPlacing = !0
    }
    ,
    o.disablePlacing = function() {
        this.isPlacing = !1
    }
    ,
    o.removeElem = function() {
        var t = this.element.parentNode;
        t && t.removeChild(this.element),
        this.layout.packer.addSpace(this.rect),
        this.emitEvent("remove", [this])
    }
    ,
    o.showDropPlaceholder = function() {
        var t = this.dropPlaceholder;
        t || (t = this.dropPlaceholder = document.createElement("div"),
        t.className = "packery-drop-placeholder",
        t.style.position = "absolute"),
        t.style.width = this.size.width + "px",
        t.style.height = this.size.height + "px",
        this.positionDropPlaceholder(),
        this.layout.element.appendChild(t)
    }
    ,
    o.positionDropPlaceholder = function() {
        this.dropPlaceholder.style[r] = "translate(" + this.rect.x + "px, " + this.rect.y + "px)"
    }
    ,
    o.hideDropPlaceholder = function() {
        var t = this.dropPlaceholder.parentNode;
        t && t.removeChild(this.dropPlaceholder)
    }
    ,
    i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define(["get-size/get-size", "outlayer/outlayer", "packery/js/rect", "packery/js/packer", "packery/js/item"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer"), require("./rect"), require("./packer"), require("./item")) : t.Packery = e(t.getSize, t.Outlayer, t.Packery.Rect, t.Packery.Packer, t.Packery.Item)
}(window, function(t, e, n, r, i) {
    "use strict";
    function o(t, e) {
        return t.position.y - e.position.y || t.position.x - e.position.x
    }
    function s(t, e) {
        return t.position.x - e.position.x || t.position.y - e.position.y
    }
    function a(t, e) {
        var n = e.x - t.x
          , r = e.y - t.y;
        return Math.sqrt(n * n + r * r)
    }
    n.prototype.canFit = function(t) {
        return this.width >= t.width - 1 && this.height >= t.height - 1
    }
    ;
    var u = e.create("packery");
    u.Item = i;
    var c = u.prototype;
    c._create = function() {
        e.prototype._create.call(this),
        this.packer = new r,
        this.shiftPacker = new r,
        this.isEnabled = !0,
        this.dragItemCount = 0;
        var t = this;
        this.handleDraggabilly = {
            dragStart: function() {
                t.itemDragStart(this.element)
            },
            dragMove: function() {
                t.itemDragMove(this.element, this.position.x, this.position.y)
            },
            dragEnd: function() {
                t.itemDragEnd(this.element)
            }
        },
        this.handleUIDraggable = {
            start: function(e, n) {
                n && t.itemDragStart(e.currentTarget)
            },
            drag: function(e, n) {
                n && t.itemDragMove(e.currentTarget, n.position.left, n.position.top)
            },
            stop: function(e, n) {
                n && t.itemDragEnd(e.currentTarget)
            }
        }
    }
    ,
    c._resetLayout = function() {
        this.getSize(),
        this._getMeasurements();
        var t, e, n;
        this._getOption("horizontal") ? (t = 1 / 0,
        e = this.size.innerHeight + this.gutter,
        n = "rightwardTopToBottom") : (t = this.size.innerWidth + this.gutter,
        e = 1 / 0,
        n = "downwardLeftToRight"),
        this.packer.width = this.shiftPacker.width = t,
        this.packer.height = this.shiftPacker.height = e,
        this.packer.sortDirection = this.shiftPacker.sortDirection = n,
        this.packer.reset(),
        this.maxY = 0,
        this.maxX = 0
    }
    ,
    c._getMeasurements = function() {
        this._getMeasurement("columnWidth", "width"),
        this._getMeasurement("rowHeight", "height"),
        this._getMeasurement("gutter", "width")
    }
    ,
    c._getItemLayoutPosition = function(t) {
        if (this._setRectSize(t.element, t.rect),
        this.isShifting || this.dragItemCount > 0) {
            var e = this._getPackMethod();
            this.packer[e](t.rect)
        } else
            this.packer.pack(t.rect);
        return this._setMaxXY(t.rect),
        t.rect
    }
    ,
    c.shiftLayout = function() {
        this.isShifting = !0,
        this.layout(),
        delete this.isShifting
    }
    ,
    c._getPackMethod = function() {
        return this._getOption("horizontal") ? "rowPack" : "columnPack"
    }
    ,
    c._setMaxXY = function(t) {
        this.maxX = Math.max(t.x + t.width, this.maxX),
        this.maxY = Math.max(t.y + t.height, this.maxY)
    }
    ,
    c._setRectSize = function(e, n) {
        var r = t(e)
          , i = r.outerWidth
          , o = r.outerHeight;
        (i || o) && (i = this._applyGridGutter(i, this.columnWidth),
        o = this._applyGridGutter(o, this.rowHeight)),
        n.width = Math.min(i, this.packer.width),
        n.height = Math.min(o, this.packer.height)
    }
    ,
    c._applyGridGutter = function(t, e) {
        if (!e)
            return t + this.gutter;
        e += this.gutter;
        var n = t % e
          , r = n && 1 > n ? "round" : "ceil";
        return t = Math[r](t / e) * e
    }
    ,
    c._getContainerSize = function() {
        return this._getOption("horizontal") ? {
            width: this.maxX - this.gutter
        } : {
            height: this.maxY - this.gutter
        }
    }
    ,
    c._manageStamp = function(t) {
        var e, r = this.getItem(t);
        if (r && r.isPlacing)
            e = r.rect;
        else {
            var i = this._getElementOffset(t);
            e = new n({
                x: this._getOption("originLeft") ? i.left : i.right,
                y: this._getOption("originTop") ? i.top : i.bottom
            })
        }
        this._setRectSize(t, e),
        this.packer.placed(e),
        this._setMaxXY(e)
    }
    ,
    c.sortItemsByPosition = function() {
        var t = this._getOption("horizontal") ? s : o;
        this.items.sort(t)
    }
    ,
    c.fit = function(t, e, n) {
        var r = this.getItem(t);
        r && (this.stamp(r.element),
        r.enablePlacing(),
        this.updateShiftTargets(r),
        e = void 0 === e ? r.rect.x : e,
        n = void 0 === n ? r.rect.y : n,
        this.shift(r, e, n),
        this._bindFitEvents(r),
        r.moveTo(r.rect.x, r.rect.y),
        this.shiftLayout(),
        this.unstamp(r.element),
        this.sortItemsByPosition(),
        r.disablePlacing())
    }
    ,
    c._bindFitEvents = function(t) {
        function e() {
            2 == ++r && n.dispatchEvent("fitComplete", null, [t])
        }
        var n = this
          , r = 0;
        t.once("layout", e),
        this.once("layoutComplete", e)
    }
    ,
    c.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && (this.options.shiftPercentResize ? this.resizeShiftPercentLayout() : this.layout())
    }
    ,
    c.needsResizeLayout = function() {
        var e = t(this.element)
          , n = this._getOption("horizontal") ? "innerHeight" : "innerWidth";
        return e[n] != this.size[n]
    }
    ,
    c.resizeShiftPercentLayout = function() {
        var e = this._getItemsForLayout(this.items)
          , n = this._getOption("horizontal")
          , r = n ? "y" : "x"
          , i = n ? "height" : "width"
          , o = n ? "rowHeight" : "columnWidth"
          , s = n ? "innerHeight" : "innerWidth"
          , a = this[o];
        if (a = a && a + this.gutter) {
            this._getMeasurements();
            var u = this[o] + this.gutter;
            e.forEach(function(t) {
                var e = Math.round(t.rect[r] / a);
                t.rect[r] = e * u
            })
        } else {
            var c = t(this.element)[s] + this.gutter
              , l = this.packer[i];
            e.forEach(function(t) {
                t.rect[r] = t.rect[r] / l * c
            })
        }
        this.shiftLayout()
    }
    ,
    c.itemDragStart = function(t) {
        if (this.isEnabled) {
            this.stamp(t);
            var e = this.getItem(t);
            e && (e.enablePlacing(),
            e.showDropPlaceholder(),
            this.dragItemCount++,
            this.updateShiftTargets(e))
        }
    }
    ,
    c.updateShiftTargets = function(t) {
        this.shiftPacker.reset(),
        this._getBoundingRect();
        var e = this._getOption("originLeft")
          , r = this._getOption("originTop");
        this.stamps.forEach(function(t) {
            var i = this.getItem(t);
            if (!i || !i.isPlacing) {
                var o = this._getElementOffset(t)
                  , s = new n({
                    x: e ? o.left : o.right,
                    y: r ? o.top : o.bottom
                });
                this._setRectSize(t, s),
                this.shiftPacker.placed(s)
            }
        }, this);
        var i = this._getOption("horizontal")
          , o = i ? "rowHeight" : "columnWidth"
          , s = i ? "height" : "width";
        this.shiftTargetKeys = [],
        this.shiftTargets = [];
        var a, u = this[o];
        if (u = u && u + this.gutter) {
            var c = Math.ceil(t.rect[s] / u)
              , l = Math.floor((this.shiftPacker[s] + this.gutter) / u);
            a = (l - c) * u;
            for (var f = 0; l > f; f++) {
                var h = i ? 0 : f * u
                  , p = i ? f * u : 0;
                this._addShiftTarget(h, p, a)
            }
        } else
            a = this.shiftPacker[s] + this.gutter - t.rect[s],
            this._addShiftTarget(0, 0, a);
        var d = this._getItemsForLayout(this.items)
          , v = this._getPackMethod();
        d.forEach(function(t) {
            var e = t.rect;
            this._setRectSize(t.element, e),
            this.shiftPacker[v](e),
            this._addShiftTarget(e.x, e.y, a);
            var n = i ? e.x + e.width : e.x
              , r = i ? e.y : e.y + e.height;
            if (this._addShiftTarget(n, r, a),
            u)
                for (var o = Math.round(e[s] / u), c = 1; o > c; c++) {
                    var l = i ? n : e.x + u * c
                      , f = i ? e.y + u * c : r;
                    this._addShiftTarget(l, f, a)
                }
        }, this)
    }
    ,
    c._addShiftTarget = function(t, e, n) {
        var r = this._getOption("horizontal") ? e : t;
        if (!(0 !== r && r > n)) {
            var i = t + "," + e;
            -1 != this.shiftTargetKeys.indexOf(i) || (this.shiftTargetKeys.push(i),
            this.shiftTargets.push({
                x: t,
                y: e
            }))
        }
    }
    ,
    c.shift = function(t, e, n) {
        var r, i = 1 / 0, o = {
            x: e,
            y: n
        };
        this.shiftTargets.forEach(function(t) {
            var e = a(t, o);
            i > e && (r = t,
            i = e)
        }),
        t.rect.x = r.x,
        t.rect.y = r.y
    }
    ;
    c.itemDragMove = function(t, e, n) {
        function r() {
            o.shift(i, e, n),
            i.positionDropPlaceholder(),
            o.layout()
        }
        var i = this.isEnabled && this.getItem(t);
        if (i) {
            e -= this.size.paddingLeft,
            n -= this.size.paddingTop;
            var o = this
              , s = new Date;
            this._itemDragTime && s - this._itemDragTime < 120 ? (clearTimeout(this.dragTimeout),
            this.dragTimeout = setTimeout(r, 120)) : (r(),
            this._itemDragTime = s)
        }
    }
    ,
    c.itemDragEnd = function(t) {
        function e() {
            2 == ++r && (n.element.classList.remove("is-positioning-post-drag"),
            n.hideDropPlaceholder(),
            i.dispatchEvent("dragItemPositioned", null, [n]))
        }
        var n = this.isEnabled && this.getItem(t);
        if (n) {
            clearTimeout(this.dragTimeout),
            n.element.classList.add("is-positioning-post-drag");
            var r = 0
              , i = this;
            n.once("layout", e),
            this.once("layoutComplete", e),
            n.moveTo(n.rect.x, n.rect.y),
            this.layout(),
            this.dragItemCount = Math.max(0, this.dragItemCount - 1),
            this.sortItemsByPosition(),
            n.disablePlacing(),
            this.unstamp(n.element)
        }
    }
    ,
    c.bindDraggabillyEvents = function(t) {
        this._bindDraggabillyEvents(t, "on")
    }
    ,
    c.unbindDraggabillyEvents = function(t) {
        this._bindDraggabillyEvents(t, "off")
    }
    ,
    c._bindDraggabillyEvents = function(t, e) {
        var n = this.handleDraggabilly;
        t[e]("dragStart", n.dragStart),
        t[e]("dragMove", n.dragMove),
        t[e]("dragEnd", n.dragEnd)
    }
    ,
    c.bindUIDraggableEvents = function(t) {
        this._bindUIDraggableEvents(t, "on")
    }
    ,
    c.unbindUIDraggableEvents = function(t) {
        this._bindUIDraggableEvents(t, "off")
    }
    ,
    c._bindUIDraggableEvents = function(t, e) {
        var n = this.handleUIDraggable;
        t[e]("dragstart", n.start)[e]("drag", n.drag)[e]("dragstop", n.stop)
    }
    ;
    var l = c.destroy;
    return c.destroy = function() {
        l.apply(this, arguments),
        this.isEnabled = !1
    }
    ,
    u.Rect = n,
    u.Packer = r,
    u
});
var SiteBase = function() {
    this.DEBUG = siteConfig.debug || !1,
    this.className = "SiteBase",
    this.executionStopDefaultText = "Site forces to Stop JS Execution",
    this.memory = {},
    this.addToMainApi = function(e, t) {
        var n = e || {}
          , o = this.className;
        void 0 !== t && (o = t),
        siteConfig.api && $.isPlainObject(n) && Object.size(n) && (void 0 === window[siteConfig.api] && (window[siteConfig.api] = {
            version: siteConfig.version
        },
        this.log("Main API initialized -> " + siteConfig.api, window[siteConfig.api])),
        o ? void 0 === window[siteConfig.api][o] ? window[siteConfig.api][o] = n : window[siteConfig.api][o] = $.extend(window[siteConfig.api][o], n) : window[siteConfig.api] = $.extend(window[siteConfig.api], n))
    }
    ,
    this.log = function() {
        if (this.DEBUG) {
            var e = [].slice.apply(arguments)
              , t = this.getLineNumber();
            e.unshift("[" + this.className + "]" + (t.name ? " [" + t.name + "]" : " ") + "=> Line " + t.line + "\n"),
            console.info.apply(console, e)
        }
    }
    ,
    this.stopExecution = function(e) {
        var t = e || this.executionStopDefaultText;
        throw new Error("[" + t + "]")
    }
    ,
    this.getLineNumber = function() {
        var e = function() {
            try {
                throw Error("")
            } catch (e) {
                return e
            }
        }()
          , t = "unknown"
          , n = "unknown";
        if (void 0 !== e.stack) {
            var o = e.stack.split("\n")[5]
              , i = o.split(":");
            n = i[i.length - 2];
            var a = i[0].split("at ");
            t = !!a[1] && a[1].split(" ")[0]
        }
        return {
            line: n,
            name: t
        }
    }
};
$(window).load(function() {
    function e() {
        setTimeout(function() {
            Sections.init(),
            Navbar.init(),
            LangSelector.init(),
            Replaces.init(),
            $(document).triggerHandler("site:ready")
        }, 500)
    }
    siteManager = new SiteMain({
        lazy: !0,
        autoHideLoader: !1,
        afterInit: function() {
            HotConfig.reload().then(function() {
                if ("undefined" != typeof CustomMain) {
                    new CustomMain({
                        afterInit: e
                    })
                } else
                    e()
            })
        }
    }),
    siteManager.lazyInit()
}),
customConfig = {
    nav: {
        onePageNav: !1
    },
    paths: {
        core: {
            blocks: "web/core/layouts/blocks/",
            pages: "web/core/layouts/pages/",
            pieces: "web/core/layouts/pieces/"
        },
        custom: {
            blocks: "web/custom/layouts/blocks/",
            pages: "web/custom/layouts/pages/",
            pieces: "web/custom/layouts/pieces/"
        },
        main: {
            layouts: "web/main/layouts/"
        }
    },
    pages: {
        start: "landing.html",
        home: "index.html",
        error: {
            e403: "error-403.html",
            e404: "error-404.html",
            e500: "error-500.html"
        }
    },
    ui: {
        selectors: {
            loader: "#page-loader",
            mainWrapper: "#main-wrapper",
            mainHeader: "#main-header",
            mainFooter: "#main-footer",
            mainContent: "#main-content"
        },
        screen: {
            defaultState: "main"
        }
    },
    mocks: {
        loginCookie: !1
    },
    analytics: {
        events: {
            sections: {
                enabled: !1,
                event: "open",
                category: "autotest"
            }
        }
    }
},
function(e) {
    var t = e.LangSelector = {};
    t.defaultLanguage = "gl-ES",
    t.languageUrlParam = "lang",
    t.actualLanguage = t.defaultLanguage,
    t.getLanguages = function() {
        return [{
            code: "gl-ES",
            name: "Galego"
        }, {
            code: "es-ES",
            name: "Castellano"
        }]
    }
    ,
    t.setLanguage = function(e) {
        var n = $("[data-lang-select]");
        n.closest("li").removeClass("active"),
        n.filter('[data-lang-select="' + e + '"]').closest("li").addClass("active"),
        SiteURL.setParam(t.languageUrlParam, e),
        t.actualLanguage !== e && (t.actualLanguage = e,
        $(document).triggerHandler("languageChanged", e)),
        $("[data-localize]").localize("libs/i18n/" + e + "/main", {
            language: e,
            level: 3,
            fileExtension: "txt",
            callback: function(e, t) {
                t(e),
                $(document).triggerHandler("site:lang-ready", [e])
            }
        }),
        $("html").attr("lang", e)
    }
    ,
    t.getActualLanguage = function() {
        return t.actualLanguage
    }
    ,
    t.getSelector = function() {
        return $(".lang-selector")
    }
    ,
    t.updateFromUrl = function() {
        var e = SiteURL.getParam(t.languageUrlParam) || t.defaultLanguage;
        e && t.setLanguage(e)
    }
    ,
    t.init = function() {
        $(".lang-selector").first().clone().appendTo(".lang-selector-copy");
        var e = t.getSelector()
          , n = t.getLanguages();
        $.each(n, function(t, n) {
            var o = $('<li><a href="#" data-lang-select="' + n.code + '">' + n.name + "</a></li>");
            e.append(o)
        }),
        $("[data-lang-select]").on("click", function(e) {
            e.stopPropagation();
            var n = $(this)
              , o = n.data("lang-select");
            return t.setLanguage(o),
            !1
        }),
        t.updateFromUrl()
    }
}(window),
function(e) {
    function t() {
        var e = $("#menu-deploy")
          , t = $("header");
        e.height() + parseInt(t.height()) >= $(window).height() ? n() : o()
    }
    function n() {
        $("#menu-deploy").addClass("menu-deploy-scrollable-fixed")
    }
    function o() {
        $("#menu-deploy").removeClass("menu-deploy-scrollable-fixed")
    }
    (e.Navbar = {}).init = function() {
        function e() {
            $(window).width() < 768 ? a.stop(!0).collapse("hide") : a.not("[aria-expanded]").stop(!0).collapse("show")
        }
        var n = getMenuToggler();
        n.on("click", function() {
            n.is(".is-active") ? closeMenu() : openMenu()
        }),
        $(".menu-secondary").first().clone().appendTo(".menu-secondary-copy"),
        $(".partner-logos").first().clone().appendTo(".partner-logos-copy");
        var i = getMenu().find("#menu-deploy-links a[data-toggle]")
          , a = i.next(".collapse");
        a.on("hide.bs.collapse", function() {
            o(),
            $(this).closest("li").removeClass("active")
        }).on("show.bs.collapse", function() {
            $(window).width() < 768 && a.filter(".in").not(this).stop(!0).addClass("auto-hiding").collapse("hide"),
            $(this).removeClass("auto-hiding").closest("li").addClass("active")
        }).on("hidden.bs.collapse shown.bs.collapse", function() {
            $(this).hasClass("auto-hiding") || t()
        }),
        $(document).on("click", 'a[href^="#"]', function(e) {
            if (!$(this).is("[data-toggle]") && this.href.match(/#\w+/)) {
                e.stopPropagation();
                var t = $(this).data("goto");
                return goTo(this.href, t),
                !1
            }
        }),
        $("body").scrollspy({
            target: "#menu-deploy"
        }),
        $(window).resize(e),
        e()
    }
    ,
    window.getMenu = function() {
        return $("#menu-deploy")
    }
    ,
    window.getMenuToggler = function() {
        return $("#menu-toggler")
    }
    ,
    window.openMenu = function() {
        getMenuToggler().addClass("is-active"),
        getMenu().stop(!0, !0).slideDown(t)
    }
    ,
    window.closeMenu = function() {
        getMenuToggler().removeClass("is-active"),
        o(),
        siteManager.ui.layout.isPhoneDeviceLayout() && getMenu().find(".collapse").collapse("hide"),
        getMenu().stop(!0, !0).slideUp()
    }
    ,
    window.goTo = function(e, t) {
        var n = e.split("#")[1]
          , o = $("#" + n)
          , i = o.closest("section");
        if (i.length) {
            var a = i.attr("id").split("section-")[1]
              , s = "exact" != t && 300;
            goToSection(a, function() {
                window.goToExact(o)
            }, s)
        } else
            window.goToExact(o);
        closeMenu()
    }
    ,
    window.goToExact = function(e, t) {
        var n = -$("#main-header").height();
        $.scrollTo(e, 300, {
            offset: n,
            onAfter: t || $.noop
        })
    }
}(window),
function(e) {
    function t(e, t, n, o) {
        var i = _.get(n, t + ".url")
          , a = _.get(n, t + ".texto");
        _.isEmpty(i) || (_.isFunction(o) && (i = o(i)),
        e.attr("href", i),
        e.attr("target", "_blank"),
        _.isEmpty(e.text()) && a && e.text(a))
    }
    var n = e.Replaces = {};
    n.init = function() {
        $(document).on("site:lang-ready", function(e, t) {
            n.links(t),
            n.telephones(t)
        })
    }
    ,
    n.links = function(e) {
        $("a[data-link]").each(function() {
            var n = $(this);
            t(n, n.data("link"), e)
        })
    }
    ,
    n.telephones = function(e) {
        $("a[data-tel]").each(function() {
            var n = $(this);
            t(n, n.data("tel"), e, function(e) {
                return "tel:" + e
            })
        })
    }
}(window),
function(e) {
    var t = e.Sections = {};
    e.goToSection = function(e, t, n) {
        function o() {
            !1 === n ? t() : $.scrollTo(i, r, {
                offset: s,
                onAfter: t || $.noop
            })
        }
        var i = $("section#section-" + e)
          , a = $(".section-content.collapse", i)
          , s = siteManager.ui.layout.isPhoneDeviceLayout() ? -50 : -180
          , r = 300;
        i.hasClass("expanded") ? o() : (i.one("shown.bs.collapse", o),
        a.collapse("show"))
    }
    ,
    t.init = function() {
        var e = HotConfig.get("SECTIONS_COLLAPSED");
        $("section").each(function() {
            var t = $(this)
              , n = $("h1 .toggler", t)
              , o = $(".section-content", t);
            if (n.length) {
                _.isBoolean(e) && !!e || _.isArray(e) && _.includes(e, t.attr("id")) ? (n.attr("aria-expanded", !1),
                o.removeClass("in"),
                t.removeClass("expanded")) : (n.attr("aria-expanded", !0),
                o.addClass("in"),
                t.addClass("expanded")),
                o.off("hidden.bs.collapse").on("hidden.bs.collapse", function() {
                    var e = n.attr("aria-expanded");
                    t.toggleClass("expanded", "true" === e)
                }),
                o.off("shown.bs.collapse").on("shown.bs.collapse", function() {
                    n.attr("aria-expanded");
                    t.addClass("expanded"),
                    siteConfig.analytics.events.sections.enabled && gtag && gtag("event", siteConfig.analytics.events.sections.event, {
                        event_category: siteConfig.analytics.events.sections.category,
                        event_label: t.data("analytics-label")
                    })
                })
            }
            $(document).on("site:lang-ready", function(e, o) {
                var i = _.trim(t.find("h1").text());
                n.attr("aria-label", "Toggle " + i),
                t.find('.section-content .collapsible-wrapper [data-toggle="collapse"]').each(function() {
                    var e = $(this)
                      , t = i + ": " + e.text();
                    e.attr("aria-label", t)
                })
            })
        }),
        $(".collapsible-wrapper").each(function() {
            var e = $(this)
              , t = $(".collapsible-toggler", e)
              , n = $(".collapsible-content", e);
            t.length && (t.attr("aria-expanded", !1),
            n.removeClass("in"),
            e.removeClass("expanded"),
            n.off("hidden.bs.collapse").on("hidden.bs.collapse", function() {
                e.removeClass("expanded")
            }),
            n.off("shown.bs.collapse").on("shown.bs.collapse", function() {
                e.addClass("expanded")
            }))
        }),
        Autotest.init()
    }
}(window),
function(e) {
    e.SiteURL = {
        getQueryString: function() {
            return decodeURIComponent(window.location.search.substring(1))
        },
        setQueryString: function(e) {
            window.history.replaceState ? window.history.replaceState(null, null, window.location.pathname + "?" + e + window.location.hash) : location.search = e
        },
        getParams: function() {
            for (var e, t = /([^&=]+)=([^&]*)/g, n = {}; e = t.exec(this.getQueryString()); )
                n[decodeURIComponent(e[1])] = decodeURIComponent(e[2]);
            return n
        },
        setParams: function(e) {
            this.setQueryString($.param(e))
        },
        getParam: function(e) {
            return this.getParams()[e]
        },
        setParam: function(e, t) {
            var n = this.getParams();
            n[e] = t,
            this.setParams(n)
        }
    }
}(window);
var UiBase = function() {
    var e = new SiteBase;
    $.extend(!0, {}, e);
    e.className = "UiBase",
    e.ui = {},
    e.animationSpeed = 230,
    e.cssAnimationHandler = "animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
    e.init = function() {
        t()
    }
    ,
    e.refreshUi = function() {
        t()
    }
    ,
    e.showDelayed = function(e, t) {
        var n = t || 300
          , o = 0;
        e.each(function() {
            $(this).delay(n * o).fadeIn(),
            o++
        })
    }
    ,
    e.areColliding = function(e, t) {
        var n = e.offset().left
          , o = e.offset().top
          , i = e.outerHeight(!0)
          , a = e.outerWidth(!0)
          , s = o + i
          , r = n + a
          , u = t.offset().left
          , l = t.offset().top
          , c = t.outerHeight(!0)
          , d = t.outerWidth(!0)
          , f = l + c
          , g = u + d;
        return !(s < l || o > f || r < u || n > g)
    }
    ,
    e.isElementInView = function(e, t) {
        var n = Math.floor($(window).scrollTop())
          , o = Math.ceil(n + $(window).height())
          , i = Math.floor(e.offset().top)
          , a = Math.ceil(i + e.height()) + 1;
        return !0 === t ? n <= i && o >= a : n >= i && n <= a || o >= i && o <= a
    }
    ;
    var t = function() {
        e.ui.$loader = $(siteConfig.ui.selectors.loader),
        e.ui.$wrapper = $(siteConfig.ui.selectors.mainWrapper),
        e.ui.$header = $(siteConfig.ui.selectors.mainHeader),
        e.ui.$content = $(siteConfig.ui.selectors.mainContent),
        e.ui.$footer = $(siteConfig.ui.selectors.mainFooter),
        e.ui.$leftMenu = $(siteConfig.ui.selectors.leftMenu),
        e.ui.$topMenu = $(siteConfig.ui.selectors.topMenu),
        e.ui.$envDisplayTop = $(siteConfig.ui.selectors.envDisplayTop),
        e.ui.$envDisplay = $(siteConfig.ui.selectors.envDisplay)
    };
    return e
}
  , LayoutManager = function() {
    var e = new UiBase
      , t = $.extend(!0, {}, e);
    e.className = "LayoutManager",
    e.actualLayout = !1,
    e.reducedLayout = !1,
    e.deviceLayout = !1,
    e.orientation = !1,
    e.layouts = {
        retina: {
            label: "RT",
            min: 0,
            max: 529
        },
        mobile: {
            label: "XS",
            min: 530,
            max: 767
        },
        tablet: {
            label: "SM",
            min: 768,
            max: 991
        },
        medium: {
            label: "MD",
            min: 992,
            max: 1199
        },
        desktop: {
            label: "LG",
            min: 1200,
            max: 9999
        }
    },
    e.ui = {},
    e.init = function() {
        e.log("Init Layout Manager"),
        t.init(),
        o(),
        a(),
        s(),
        r(),
        n()
    }
    ,
    e.isReducedLayout = function() {
        return e.isMediumLayout() || e.isTabletLayout() || e.isMobileLayout() || e.isRetinaLayout()
    }
    ,
    e.isDeviceLayout = function() {
        return e.isTabletLayout() || e.isMobileLayout() || e.isRetinaLayout()
    }
    ,
    e.isPhoneDeviceLayout = function() {
        return l(e.layouts.mobile)
    }
    ,
    e.isDesktopLayout = function() {
        return u(e.layouts.desktop)
    }
    ,
    e.isMediumLayout = function() {
        return u(e.layouts.medium)
    }
    ,
    e.isTabletLayout = function() {
        return u(e.layouts.tablet)
    }
    ,
    e.isMobileLayout = function() {
        return u(e.layouts.mobile)
    }
    ,
    e.isRetinaLayout = function() {
        return u(e.layouts.retina)
    }
    ,
    e.getActualLayout = function() {
        var t = !1;
        return (t = e.isRetinaLayout()) ? t : (t = e.isMobileLayout()) ? t : (t = e.isTabletLayout()) ? t : (t = e.isMediumLayout()) ? t : (t = e.isDesktopLayout()) || void 0
    }
    ,
    e.isMinusThan = function(t, n) {
        if (!t)
            return !1;
        n = n || e.actualLayout.label;
        var o = !1
          , i = !1;
        return $.each(e.layouts, function(e, n) {
            n.label === t && (o = n)
        }),
        $.each(e.layouts, function(e, t) {
            t.label === n && (i = t)
        }),
        o.width <= i.width
    }
    ,
    e.getActualOrientation = function() {
        return e.orientation
    }
    ,
    e.isPortrait = function() {
        return "P" === e.orientation
    }
    ,
    e.isLandscape = function() {
        return "L" === e.orientation
    }
    ;
    var n = function() {
        e.addToMainApi({
            isDeviceLayout: e.isDeviceLayout,
            getActualLayout: e.getActualLayout,
            getActualOrientation: e.getActualOrientation
        }, "layout")
    }
      , o = function() {
        i()
    }
      , i = function() {
        e.ui.$layoutTextItems = $("[data-layout-text]"),
        e.ui.$layoutTextItems.each(function() {
            var e = $(this).text();
            $(this).data("initialLayoutText", e)
        })
    }
      , a = function() {
        customEvents.on("layoutChange", function() {
            f()
        }),
        $(window).on("resize", s),
        $(window).on("orientationchange", r)
    }
      , s = function() {
        c(),
        e.memory.actualLayout !== e.actualLayout && (e.log("Page Layout:", e.actualLayout, "Reduced: ", e.reducedLayout, "Device:", e.deviceLayout),
        customEvents.triggerHandler("layoutChange", [e.actualLayout]))
    }
      , r = function() {
        d(),
        e.memory.orientation !== e.orientation && (e.log("Orientation:", e.orientation),
        customEvents.triggerHandler("oriChange", [e.orientation]))
    }
      , u = function(e) {
        var t = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        return t <= e.max && t >= e.min && e.label
    }
      , l = function(e) {
        return Math.max(document.documentElement.clientWidth, window.innerWidth || 0) <= e.max
    }
      , c = function() {
        e.memory.reducedLayout = e.reducedLayout,
        e.memory.deviceLayout = e.deviceLayout,
        e.memory.actualLayout = e.actualLayout,
        e.reducedLayout = e.isReducedLayout(),
        e.deviceLayout = e.isDeviceLayout(),
        e.actualLayout = e.getActualLayout()
    }
      , d = function() {
        e.memory.orientation = e.orientation,
        window.innerHeight > window.innerWidth ? e.orientation = "P" : e.orientation = "L"
    }
      , f = function() {
        e.ui.$layoutTextItems.each(function() {
            var t = $(this)
              , n = t.data("layoutText")
              , o = n[e.actualLayout] || !1
              , i = o || t.data("initialLayoutText");
            t.text(i)
        })
    };
    return e.init(),
    e
};
siteConfig = {
    browser: {
        showSupportWarning: !0,
        minVersion: {
            msie: "10",
            chrome: "25",
            firefox: "30"
        }
    },
    layoutDisplay: !1,
    lang: {
        default: "gl",
        persistence: !1,
        enableLangSelector: !0,
        updateLangAttributes: !0
    },
    env: {
        type: "core",
        showEnvDisplay: !1
    },
    nav: {
        testServer: "localhost:888(.*)",
        onePageNav: !1
    },
    hotConfigPath: "libs/hot-config/hot-config.txt"
};
var SiteBrowser = function() {
    var e = new SiteBase;
    $.extend(!0, {}, e);
    e.className = "SiteBrowser",
    e.bowserLib = !1,
    e.info = {},
    e.ui = {},
    e.checked = !1,
    e.supported = !0,
    e.bodyClassPrefix = "bw-",
    e.init = function() {
        e.log("Init Site Browser Manager"),
        o(),
        n(),
        t(),
        i(),
        a()
    }
    ,
    e.getInfo = function() {
        return e.info
    }
    ,
    e.getBrowser = function() {
        return e.info.browser
    }
    ,
    e.getOs = function() {
        return e.info.os
    }
    ,
    e.isBrowser = function(t) {
        return e.info.browser[t.toLowerCase()] || !1
    }
    ,
    e.isOs = function(t) {
        return e.info.os[t.toLowerCase()] || !1
    }
    ,
    e.isSupportedBrowser = function() {
        return !siteConfig.browser.minVersion || e.bowserLib.check(siteConfig.browser.minVersion, window.navigator.userAgent)
    }
    ;
    var t = function() {
        e.addToMainApi({
            getInfo: e.getInfo,
            getBrowser: e.getBrowser,
            getOs: e.getOs,
            isBrowser: e.isBrowser,
            isOs: e.isOs,
            isSupportedBrowser: e.isSupportedBrowser
        }, "browser")
    }
      , n = function() {
        e.info = {
            browser: {
                actual: {
                    id: !!e.bowserLib.chrome && "chrome" || !!e.bowserLib.firefox && "firefox" || !!e.bowserLib.msedge && "msedge" || !!e.bowserLib.msie && "msie" || !!e.bowserLib.safari && "safari" || !!e.bowserLib.opera && "opera" || !!e.bowserLib.ios && "ios" || !!e.bowserLib.android && "android" || !!e.bowserLib.webos && "webos",
                    name: e.bowserLib.name || !1,
                    version: e.bowserLib.version || !1
                },
                chrome: e.bowserLib.chrome || !1,
                firefox: e.bowserLib.firefox || !1,
                ff_quantum: e.bowserLib.firefox && e.bowserLib.compareVersions([e.bowserLib.version, "57"]) > -1 || !1,
                msedge: e.bowserLib.msedge || !1,
                msie: e.bowserLib.msie || !1,
                safari: e.bowserLib.safari || !1,
                opera: e.bowserLib.opera || !1,
                ios: e.bowserLib.ios || !1,
                android: e.bowserLib.android || !1,
                webos: e.bowserLib.webos || !1,
                engine: {
                    webkit: e.bowserLib.webkit || !1,
                    blink: e.bowserLib.blink || !1,
                    gecko: e.bowserLib.gecko || !1,
                    msie: e.bowserLib.msie || !1,
                    msedge: e.bowserLib.msedge || !1
                }
            },
            os: {
                actual: {
                    id: !!e.bowserLib.mac && "mac" || !!e.bowserLib.windows && "windows" || !!e.bowserLib.linux && "linux" || !!e.bowserLib.android && "android" || !!e.bowserLib.ios && "ios" || !!e.bowserLib.webos && "webos",
                    name: e.bowserLib.osname || !1,
                    version: e.bowserLib.osversion || !1
                },
                mac: e.bowserLib.mac || !1,
                windows: e.bowserLib.windows || !1,
                linux: e.bowserLib.linux || !1,
                android: e.bowserLib.android || !1,
                ios: e.bowserLib.ios || !1,
                webos: e.bowserLib.webos || !1
            }
        }
    }
      , o = function() {
        bowser && (e.bowserLib = bowser)
    }
      , i = function() {
        e.ui.$supportInfoModal = $("#modal-support-info")
    }
      , a = function() {
        siteConfig.browser.minVersion && (e.supported = e.isSupportedBrowser(),
        e.log("Browser Supported:", e.supported, e.info.browser.actual, e.info.os.actual),
        e.info.browser.actual.name && $("body").addClass(e.bodyClassPrefix + e.info.browser.actual.id),
        e.supported && $("body").addClass(e.bodyClassPrefix + "supported"),
        siteConfig.browser.showSupportWarning && ($(document).on("maqint:ready", s),
        setTimeout(s, 3e3)))
    }
      , s = function() {
        e.checked || (e.supported ? (e.ui.$supportInfoModal = $("#modal-support-info"),
        e.ui.$supportInfoModal.remove()) : r(),
        e.checked = !0)
    }
      , r = function() {
        e.ui.$supportInfoModal = $("#modal-support-info"),
        e.ui.$supportInfoModal.find("#browser-info .description").text(e.info.browser.actual.name + " v." + e.info.browser.actual.version),
        e.ui.$supportInfoModal.find("#os-info .description").text(e.info.os.actual.name + " v." + e.info.os.actual.version);
        for (var t in siteConfig.browser.minVersion) {
            var n = siteConfig.browser.minVersion[t];
            e.ui.$supportInfoModal.find(".version." + t).text(" >= v." + n)
        }
        e.ui.$supportInfoModal.modal("show")
    };
    return e.init(),
    e
}
  , SiteMain = function(e) {
    var t = new SiteBase;
    $.extend(!0, {}, t);
    t.className = "SiteMain",
    t.lang = !1,
    t.nav = !1,
    t.utils = {},
    t.ui = {},
    t.blocks = {},
    t.pages = {},
    t.includes = {},
    t.options = {
        lazy: !1,
        autoHideLoader: !0,
        afterInit: $.noop
    },
    t.init = function() {
        t.log("Init Site", e),
        $.extend(!0, t.options, e),
        n(),
        i(),
        t.options.lazy || t.lazyInit()
    }
    ,
    t.lazyInit = function() {
        t.log("Lazy INIT"),
        s(),
        o(),
        a(),
        r()
    }
    ;
    var n = function() {
        window.customEvents = $(document)
    }
      , o = function() {
        t.browser = new SiteBrowser
    }
      , i = function() {
        t.utils = new Utils
    }
      , a = function() {
        t.nav = new SiteNavigation
    }
      , s = function() {
        if ("undefined" == typeof siteConfig)
            return void console.error("No config object avaliable!");
        "undefined" != typeof customConfig && $.extend(!0, siteConfig, customConfig),
        "undefined" != typeof customize && initCustomizeFile(customize)
    }
      , r = function() {
        var e = function() {
            u(),
            l(),
            $.isFunction(t.options.afterInit) && t.options.afterInit(),
            t.options.autoHideLoader && t.ui.components.loader.hideMainLoader()
        };
        siteConfig.nav.onePageNav ? t.nav.initActualPage(e) : e()
    }
      , u = function() {
        siteConfig.layoutDisplay && $("body").addClass("layd"),
        t.ui.layout = new LayoutManager
    }
      , l = function() {
        t.pages.dashboard = "function" == typeof Page_Dashboard ? new Page_Dashboard : null
    };
    return t.init(),
    t
}
  , SiteNavigation = function() {
    var e = new SiteBase;
    $.extend(!0, {}, e);
    e.className = "SiteNavigation",
    e.includes = {},
    e.init = function() {
        e.log("Init Site Navigation"),
        n(),
        $.ajaxSetup({
            cache: !1
        }),
        t()
    }
    ,
    e.initActualPage = function(e) {
        var t = e || $.noop;
        a(function() {
            $.isFunction(t) && t(),
            i()
        })
    }
    ,
    e.getActualPageName = function() {
        return siteConfig.nav.onePageNav ? siteManager.utils.getUrlParameter("page") + ".html" : window.location.pathname.split("/").pop()
    }
    ,
    e.pageExists = function(e) {
        return $.ajax({
            url: e,
            type: "HEAD"
        })
    }
    ,
    e.urlToSinglePageUrl = function(e) {
        return s(e)
    }
    ,
    e.goToHomePage = function() {
        r(siteConfig.pages.home)
    }
    ,
    e.goToPage = function(e) {
        r(e)
    }
    ,
    e.isTestServer = function() {
        return f()
    }
    ;
    var t = function() {
        e.addToMainApi({
            goToHomePage: e.goToHomePage,
            goToPage: e.goToPage,
            getActualPageName: e.getActualPageName
        }, "nav")
    }
      , n = function() {
        if (!siteConfig.nav.onePageNav) {
            var t = $("[data-redirect]");
            if (t.length) {
                var n = t.first().data();
                n.redirect && ("home" == n.redirect ? e.goToHomePage() : "start" == n.redirect ? e.goToPage(siteConfig.pages.start) : e.goToPage(n.redirect),
                e.stopExecution())
            }
        }
    }
      , o = function(e) {
        var t = $(e).attr("href")
          , n = !1;
        return !!t && (0 !== t.indexOf("http://") && 0 !== t.indexOf("https://") && 0 !== t.indexOf("#") && 0 !== t.indexOf("mailto:") && void 0 === $(e).attr("data-toggle") && (n = !0),
        n)
    }
      , i = function() {
        $("a[href!='']").not("[data-lightbox]").on("click", function(e) {
            var t = $(this)
              , n = $(this).attr("href");
            o(this) ? (e.preventDefault(),
            r(n)) : customEvents.trigger("maqint:linkHrefNoAction", [t])
        })
    }
      , a = function(t) {
        var n = !1
          , o = siteManager.utils.getUrlParameter("page");
        o ? n = siteConfig.paths.custom.pages + o + ".html" : siteConfig.pages.start && (n = siteConfig.paths.custom.pages + siteConfig.pages.start),
        n && e.pageExists(n).done(function(e) {
            l(n, t)
        }).fail(function() {
            if (-1 !== n.indexOf("/custom/")) {
                var o = n.replace("/custom/", "/core/");
                e.pageExists(o).done(function() {
                    l(o, t),
                    console.warn("Custom Page: '" + n + "' does not exist. Using Core page.")
                }).fail(function() {
                    c(n, t)
                })
            } else
                c(n, t)
        })
    }
      , s = function(e) {
        if (!e)
            return "";
        if (-1 !== e.indexOf("?page="))
            return e;
        var t = e.split("/")
          , n = t[t.length - 1];
        "home" != n && "index.html" != n || (n = siteConfig.pages.home);
        var o = n.split(".html")
          , i = o[1] ? o[1].replace("?", "&") : "";
        return "index.html?page=" + o[0] + i
    }
      , r = function(e) {
        if (siteConfig.nav.onePageNav) {
            var t = s(e);
            window.location.href = t
        } else
            window.location.href = e
    }
      , u = function(t) {
        var n = siteConfig.ui.screen.defaultState || "main"
          , o = t || n
          , i = siteConfig.paths.main.layouts + o + ".html"
          , a = $(siteConfig.ui.selectors.mainWrapper)
          , s = $.Deferred()
          , r = s.promise();
        return e.pageExists(i).done(function() {
            a.load(i, s.resolve)
        }).fail(function() {
            s.reject()
        }),
        r
    }
      , l = function(e, t) {
        var n = $("<div></div>")
          , o = ""
          , i = !1;
        n.load(e, function(e) {
            o = e.replace(/data-screen(\s*)=(\s*)[\'\"](.*?)[\'\"]/g, function(e, t, n, o) {
                return i = o,
                e
            }),
            u(i).done(function() {
                $(siteConfig.ui.selectors.mainContent).append(o),
                d(1, t)
            })
        })
    }
      , c = function(e, t) {
        page = siteConfig.paths.custom.pages + siteConfig.pages.error.e404,
        l(page, t),
        console.error("Page '" + e + "' does not exist. Using 404 page.")
    }
      , d = function(t, n) {
        var o = n || $.noop
          , i = $("[data-include]")
          , a = i.length
          , s = !0;
        i.each(function() {
            var n = $(this)
              , i = $(this).data()
              , r = i.include
              , u = i.force || !1;
            if (e.includes[r] && e.includes[r] < t && !u)
                return --a,
                !a && s && o(),
                !0;
            e.includes[r] = t,
            n.load(i.include, function(e, i) {
                e && -1 !== e.search("data-include") && (s = !1),
                n.children().unwrap("[data-include]"),
                --a || (s ? o() : d(++t, o))
            })
        })
    }
      , f = function() {
        return void 0 !== siteConfig.nav.testServer && new RegExp(siteConfig.nav.testServer).test(window.location.host)
    };
    return e.init(),
    e
};
!function(e) {
    e.fn.outerHtml = function() {
        return this[0].outerHTML
    }
    ,
    e.fn.setAccesibleClick = function() {
        return this.each(function() {
            e(this).off("keypress").on("keypress", function(t) {
                if (!e(this).is("a[href]")) {
                    "13" == (t.which || t.keyCode) && (t.preventDefault(),
                    e(this).trigger("click"))
                }
            })
        })
    }
    ,
    e.fn.detachItem = function() {
        return this.data("dt_placeholder", e('<span class="det-plh hidden" />').insertAfter(this)),
        this.detach()
    }
    ,
    e.fn.attachItem = function() {
        return this.data("dt_placeholder") ? (this.insertBefore(this.data("dt_placeholder")),
        this.data("dt_placeholder").remove(),
        this.removeData("dt_placeholder")) : window.console && console.error && console.error("Unable to reattach this element because its placeholder is not available."),
        this
    }
}(jQuery),
Object.size = function(e) {
    var t, n = 0;
    for (t in e)
        e.hasOwnProperty(t) && n++;
    return n
}
;
var HotConfig = {
    self: this,
    _config: null,
    reload: function() {
        var e = this;
        return new Promise(function(t, n) {
            return $.get(siteConfig.hotConfigPath, {
                _: $.now()
            }).done(function(o) {
                try {
                    e._config = e.unSerializeConfig(o),
                    t(e._config)
                } catch (e) {
                    n(e)
                }
            }).fail(function(e) {
                n(e)
            })
        }
        )
    },
    unSerializeConfig: function(e) {
        return JSON.parse(e)
    },
    get: function(e, t) {
        return _.get(this._config, e, t)
    },
    set: function(e, t) {
        _.set(this._config, e, t)
    }
}
  , Storage = {
    self: this,
    check: function(e) {
        try {
            var t = window[e]
              , n = "__storage_test__";
            return t.setItem(n, n),
            t.removeItem(n),
            !0
        } catch (e) {
            return !1
        }
    },
    tryParseJSON: function(e) {
        try {
            var t = JSON.parse(e);
            if (t && "object" == typeof t && null !== t)
                return t
        } catch (e) {}
        return !1
    },
    ls: {
        exists: function() {
            return Storage.check("localStorage")
        },
        set: function(e, t) {
            var n = "";
            n = "object" == typeof t ? JSON.stringify(t) : t,
            Storage.check("localStorage") && localStorage.setItem(e, n)
        },
        get: function(e, t) {
            var n = t || null
              , o = Storage.check("localStorage") ? localStorage.getItem(e) : null;
            return null === o ? n : Storage.tryParseJSON(o) ? JSON.parse(o) : o
        },
        remove: function(e) {
            Storage.check("localStorage") && localStorage.removeItem(e)
        }
    },
    ss: {
        exists: function() {
            return Storage.check("sessionStorage")
        },
        set: function(e, t) {
            var n = "";
            n = "object" == typeof t ? JSON.stringify(t) : t,
            Storage.check("sessionStorage") && sessionStorage.setItem(e, n)
        },
        get: function(e, t) {
            var n = Storage.check("sessionStorage") ? sessionStorage.getItem(e) : null;
            return null === n ? t : Storage.tryParseJSON(n) ? JSON.parse(n) : n
        },
        remove: function(e) {
            Storage.check("sessionStorage") && sessionStorage.removeItem(e)
        }
    }
}
  , Utils = function() {
    var e = this;
    return e.getUniqueId = function() {
        var e = (Math.floor(25 * Math.random()) + 10).toString(36) + "_";
        do {
            e += Math.floor(35 * Math.random()).toString(36)
        } while (e.length < 32);
        return e
    }
    ,
    e.getUrlParameter = function(e) {
        var t, n, o, i = decodeURIComponent(window.location.search.substring(1)), a = i.split("&");
        if (!i)
            return "";
        for (n = 0; n < a.length; n++)
            t = a[n].split("="),
            void 0 === e ? (o = o || {},
            o[t[0]] = t[1]) : t[0] === e && (o = void 0 === t[1] || t[1]);
        return o
    }
    ,
    e.replaceAll = function(e, t, n) {
        return e.replace(new RegExp(t,"g"), n)
    }
    ,
    e.copyToClipboard = function(e) {
        var t = e;
        e instanceof jQuery && (t = e.text());
        var n = $("<input>");
        $("body").append(n),
        n.val(t).select(),
        document.execCommand("copy"),
        n.remove()
    }
    ,
    e.readAllCssRules = function(e) {
        for (var t = [], n = document.styleSheets, o = 0; o < n.length; o++) {
            var i = document.styleSheets[o].cssRules;
            if (i && i.length > 0)
                for (var a = 0; a < i.length; a++) {
                    var s = i[a].selectorText;
                    s && (e && 0 !== s.search(e) || t.push(i[a].selectorText))
                }
        }
        return t
    }
    ,
    e
};
!function(ctx) {
    function build() {
        var e = HotConfig.get("AUTOTEST.STEPS");
        $section = $("#section-autotest"),
        $resultCommonText = $section.find(".result-common-text"),
        $stepTpl = $section.find(".step-tpl").removeClass("step-tpl").detach().removeAttr("aria-label"),
        $stepBtnTpl = $section.find(".step-btn-tpl").removeClass("step-btn-tpl").detach().removeAttr("aria-label"),
        $stepsContainer = $section.find(".autotest-flow-container").empty(),
        _.each(e, function(e, t) {
            e = buildStep(e, t),
            steps.push(e),
            e.$ui.appendTo($stepsContainer)
        })
    }
    function buildStep(e, t) {
        e = _.merge({}, stepDefaults, e);
        var n = $stepTpl.clone().hide();
        n.addClass("step-" + e.type),
        e.$ui = n,
        n.attr("id", e.getId()),
        e.start && n.addClass("start");
        var o = n.find(".step-icon .inner-icon");
        if (e.icon)
            o.addClass(e.icon),
            o.removeClass("text-icon");
        else {
            var i = e.number || t + 1;
            o.addClass("text-icon"),
            o.text(i)
        }
        var a = n.find(".block-actions").empty();
        e.answers = _.map(e.answers, function(t) {
            t = _.merge({}, stepBtnDefaults, t);
            var n = $stepBtnTpl.clone().addClass("step-btn");
            return t.$ui = n,
            n.on("click", function(n) {
                n.preventDefault(),
                doAnswer(t, e)
            }),
            n.appendTo(a),
            t
        }),
        "result" === e.type && $stepBtnTpl.clone().addClass("step-btn reset-btn").html('<span data-localize="autotest.reset"></span>').on("click", function(e) {
            e.preventDefault(),
            Autotest.reset()
        }).appendTo(a);
        var s = e.nested;
        return e.nested = [],
        e.$nested = n.find(".step-nested"),
        _.each(s, function(t, n) {
            t = buildStep(t, n),
            t.$ui.appendTo(e.$nested).show(),
            steps.push(t),
            e.nested.push(t)
        }),
        e
    }
    function transBuild(e) {
        _.each(steps, function(t) {
            var n = t.$ui
              , o = _.get(e, t.title)
              , i = n.find(".title").first();
            _.isEmpty(o) ? i.hide() : (i.html(o),
            i.show()),
            n.find(".text").first().html(_.get(e, t.text)),
            _.each(t.answers, function(t) {
                t.$ui.find(".btn-text").html(_.get(e, t.text))
            })
        })
    }
    function findStepById(e) {
        return _.find(steps, {
            id: e
        })
    }
    function findSteps(e) {
        return _.filter(steps, e)
    }
    function yes(e) {
        var t = findStepById(e);
        return !0 === _.get(t, "answered.value", !1)
    }
    function doAnswer(e, t) {
        t.answered && undoAnswer(t.answered, t),
        t.answered = e,
        e.$ui.addClass("selected"),
        triggerActions(_.castArray(e.action), t)
    }
    function triggerActions(actions, step) {
        actions = _.castArray(actions),
        _.each(actions, function(actionStr) {
            var actionParts = _.split(actionStr, ":")
              , action = actionParts[0]
              , arg = actionParts[1];
            if ("eval" === arg)
                var evalExpr = _.slice(actionParts, 2).join(":");
            switch (action) {
            case "step":
                var targetStepKey = evalExpr ? eval(evalExpr) : arg
                  , targetStep = goToStep(targetStepKey);
                targetStep.parentId = step.id,
                targetStep.$ui.data("parent", step.id);
                break;
            case "pts":
                var stepPts = parseFloat(arg);
                step.pts = stepPts,
                pts += stepPts;
                break;
            case "submit":
                submit(step)
            }
        })
    }
    function undoAnswer(e, t) {
        t.answered = null,
        e && e.$ui.removeClass("selected"),
        _.isNumber(t.pts) && (pts -= t.pts,
        t.pts = null),
        undoChildSteps(t)
    }
    function goToStep(e) {
        var t = findStepById(e);
        return showStep(t),
        scrollToStep(t),
        "result" === t.type ? showResultCommonText() : hideResultCommonText(),
        t
    }
    function showResultCommonText() {
        $resultCommonText.show()
    }
    function hideResultCommonText() {
        $resultCommonText.hide()
    }
    function scrollToStep(e) {
        var t = -$("#main-header").height() - 30;
        $.scrollTo(e.$ui, 300, {
            offset: t
        })
    }
    function showStep(e) {
        e.$ui.show(),
        e.$ui.addClass("visible")
    }
    function hideStep(e) {
        e.$ui.hide(),
        e.$ui.removeClass("visible")
    }
    function undoChildSteps(e) {
        var t = findSteps({
            parentId: e.id
        });
        _.each(t, function(e) {
            hideStep(e),
            undoAnswer(e.answered, e),
            _.each(e.nested, function(e) {
                undoAnswer(e.answered, e)
            })
        })
    }
    function submit(step) {
        var ptsMap = HotConfig.get("AUTOTEST.PTS_RESULT_MAP");
        _.each(ptsMap, function(action, comparison) {
            if (eval("pts" + comparison))
                return triggerActions(action, step),
                !1
        })
    }
    function showStartStep() {
        _.each(findSteps({
            start: !0
        }), function(e) {
            showStep(e)
        })
    }
    var Autotest = ctx.Autotest = {}, $section, $stepTpl, $stepBtnTpl, $stepsContainer, $resultCommonText, steps = [], pts, stepDefaults = {
        type: "question",
        start: !1,
        icon: null,
        number: null,
        title: null,
        text: void 0,
        $ui: void 0,
        answered: null,
        pts: null,
        getId: function() {
            return "autotest-step-" + this.id
        }
    }, stepBtnDefaults = {
        text: void 0,
        value: void 0,
        action: [],
        $ui: void 0
    };
    Autotest.init = function() {
        pts = 0,
        build(),
        $(document).on("site:lang-ready", function(e, t) {
            transBuild(t)
        }),
        showStartStep()
    }
    ,
    Autotest.reset = function() {
        var e = findSteps({
            start: !0
        })[0];
        undoAnswer(e.answered, e),
        showStartStep(),
        scrollToStep(e),
        hideResultCommonText(),
        pts = 0
    }
}(window),
$(document).on("sintomas:loaded", function() {
    function e(t) {
        var n = t.closest(".collapsible-content").find(t.data("action"));
        n.find(".block").hasClass("answered") && (e(n.find(".selected")),
        n.find(".selected").removeClass("selected")),
        n.collapse("hide")
    }
    var t = $("#section-sintomas-content")
      , n = $(".collapsible-content", t)
      , o = $(".block", t)
      , i = $("[data-action]", t);
    t.on("hidden.bs.collapse", function(e) {
        $(this).is(e.target) && n.collapse("hide")
    }),
    n.on("show.bs.collapse", function(e) {
        n.not($(this)).collapse("hide")
    }),
    n.on("hidden.bs.collapse", function(e) {
        $(this).is(e.target) && ($(this).find(".block").parent(".collapse").collapse("hide"),
        $(this).find(".block").removeClass("answered"),
        $(this).find(".button").removeClass("selected"))
    }),
    i.on("click", function(t) {
        t.preventDefault();
        var n = $(this).closest(".collapsible-content").find($(this).data("action"))
          , o = n.hasClass("in")
          , i = $(this).closest(".block");
        i.hasClass("answered") && e(i.find(".selected")),
        $(this).siblings().removeClass("selected"),
        $(this).addClass("selected"),
        i.addClass("answered"),
        setTimeout(function() {
            n.collapse("show")
        }, o ? 500 : 0)
    }),
    o.on("show.bs.collapse hidden.bs.collapse", function(e) {
        e.stopPropagation()
    })
});
var PageBase = function() {
    var e = new UiBase
      , t = $.extend(!0, {}, e);
    return e.className = "PageBase",
    e.pageSelector = "#_basePage_",
    e.init = function() {
        t.init(),
        e.ui.$page = e.ui.$content.find(e.pageSelector)
    }
    ,
    e.checkPage = function() {
        return e.ui.$page.length
    }
    ,
    e
};
