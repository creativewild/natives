(this["webpackJsonpnative-reference-ng"] = this["webpackJsonpnative-reference-ng"] || []).push([
            [0], {
                155: function (e, t, a) {
                    e.exports = a(380)
                },
                161: function (e, t, a) {},
                380: function (e, t, a) {
                    "use strict";
                    a.r(t);
                    var n, r, i, c, l, s, o, u, m, f, v, p, h, d, g = a(0),
                        b = a.n(g),
                        w = a(34),
                        y = a.n(w),
                        E = a(22),
                        j = a(28),
                        N = a(36),
                        O = a(35),
                        L = a(41),
                        k = a(37),
                        R = a(23),
                        C = a(20),
                        T = (a(160), a(54)),
                        _ = a(57),
                        x = a(16),
                        S = a(3),
                        I = a(148),
                        P = function (e) {
                            return e.startsWith("_") && (e = e.slice(1)), e.startsWith("0x") && (e = "zzzz" + e), e
                        },
                        z = function (e) {
                            return (t = e.toLowerCase().replace("0x", "n_0x").replace(/_([a-z])/g, (function (e) {
                                return e[1].toUpperCase()
                            }))).charAt(0).toUpperCase() + t.slice(1);
                            var t
                        },
                        A = function (e) {
                            return e.name || e.hash
                        },
                        D = function (e) {
                            return "CFX" === e ? "___CFX" : e
                        },
                        F = function (e, t) {
                            return Object.entries(e).sort((function (e, t) {
                                return D(e[0]).localeCompare(D(t[0]))
                            })).map((function (e) {
                                var a = Object(x.a)(e, 2),
                                    n = a[0],
                                    r = a[1];
                                return {
                                    namespace: n,
                                    natives: Object.entries(r).filter((function (e) {
                                        var a = Object(x.a)(e, 1)[0];
                                        return !t || t.has(a)
                                    })).map((function (e) {
                                        var t, a = Object(x.a)(e, 2),
                                            n = a[0],
                                            r = a[1];
                                        return Object(_.a)(Object(_.a)({
                                            hash: n
                                        }, r), {}, {
                                            type: "native",
                                            name: r.name.startsWith("_0x") ? r.name.substr(1, -1) : r.name,
                                            results: null !== (t = r.return_type) && void 0 !== t ? t : r.results,
                                            description: r.comment ? "```\n" + r.comment + "\n```" : r.description
                                        })
                                    })).sort((function (e, t) {
                                        return P(A(e)).localeCompare(P(A(t)))
                                    }))
                                }
                            })).filter((function (e) {
                                return 0 !== e.natives.length
                            }))
                        };
                    RegExp.quote = function (e) {
                        return (e + "").replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")
                    };
                    var H = (n = function () {
                            function e() {
                                Object(E.a)(this, e), Object(R.a)(this, "rawNatives", r, this), Object(R.a)(this, "filter", i, this), Object(R.a)(this, "apiset", c, this), Object(R.a)(this, "language", l, this)
                            }
                            return Object(j.a)(e, [{
                                key: "setNatives",
                                value: function (e) {
                                    this.rawNatives = e.map((function (e) {
                                        return new $(e)
                                    }))
                                }
                            }, {
                                key: "findNative",
                                value: function (e) {
                                    return this.rawNatives.find((function (t) {
                                        return t.native.hash === e
                                    }))
                                }
                            }, {
                                key: "findNamespace",
                                value: function (e) {
                                    return this.rawNatives.find((function (t) {
                                        return "namespace" === t.native.type && t.native.name === e.substr(2)
                                    }))
                                }
                            }, {
                                key: "natives",
                                get: function () {
                                    var e, t = this,
                                        a = RegExp.quote(this.filter),
                                        n = new RegExp(a, "i"),
                                        r = this.rawNatives.filter((function (e) {
                                            if ("namespace" === e.native.type) return !0;
                                            if ("all" !== t.apiset && "shared" !== e.native.apiset && e.native.apiset !== t.apiset && ("client" !== t.apiset || e.native.apiset)) return !1;
                                            if (0 === a.length) return !0;
                                            if (e.native.name) {
                                                if (e.native.name.match(n)) return !0;
                                                if (z(e.native.name).match(n)) return !0
                                            }
                                            if (e.native.hash && e.native.hash.match(n)) return !0;
                                            var r, i = Object(T.a)(e.native.aliases || []);
                                            try {
                                                for (i.s(); !(r = i.n()).done;) {
                                                    var c = r.value;
                                                    if (c.match(n)) return !0;
                                                    if (z(c).match(n)) return !0
                                                }
                                            } catch (l) {
                                                i.e(l)
                                            } finally {
                                                i.f()
                                            }
                                            return !(!e.native.description || !e.native.description.match(n))
                                        })),
                                        i = {},
                                        c = Object(T.a)(r);
                                    try {
                                        for (c.s(); !(e = c.n()).done;) {
                                            var l = e.value;
                                            "native" === l.native.type && (i[l.native.namespace] || (i[l.native.namespace] = 0), i[l.native.namespace]++)
                                        }
                                    } catch (s) {
                                        c.e(s)
                                    } finally {
                                        c.f()
                                    }
                                    return r.filter((function (e) {
                                        return "namespace" !== e.native.type || i[e.native.name] > 0
                                    }))
                                }
                            }]), e
                        }(), r = Object(C.a)(n.prototype, "rawNatives", [S.m], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                                return []
                            }
                        }), i = Object(C.a)(n.prototype, "filter", [S.m], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                                return ""
                            }
                        }), c = Object(C.a)(n.prototype, "apiset", [S.m], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                                return "all"
                            }
                        }), l = Object(C.a)(n.prototype, "language", [S.m], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                                return window.localStorage.getItem("nativeRefLanguage") || "c"
                            }
                        }), Object(C.a)(n.prototype, "natives", [S.f], Object.getOwnPropertyDescriptor(n.prototype, "natives"), n.prototype), n),
                        $ = (s = function e(t) {
                            Object(E.a)(this, e), this.native = {}, Object(R.a)(this, "active", o, this), this.native = t
                        }, o = Object(C.a)(s.prototype, "active", [S.m], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                                return !1
                            }
                        }), s),
                        U = (u = function e() {
                            Object(E.a)(this, e), Object(R.a)(this, "curNative", m, this), Object(R.a)(this, "curIndex", f, this), Object(R.a)(this, "initialScroll", v, this)
                        }, m = Object(C.a)(u.prototype, "curNative", [S.m], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: null
                        }), f = Object(C.a)(u.prototype, "curIndex", [S.m], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {}
                        }), v = Object(C.a)(u.prototype, "initialScroll", [S.m], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: function () {
                                return !1
                            }
                        }), u),
                        W = new(p = function (e) {
                            Object(N.a)(a, e);
                            var t = Object(O.a)(a);

                            function a() {
                                var e;
                                return Object(E.a)(this, a), e = t.call(this), Object(R.a)(e, "viewNativeList", h, Object(k.a)(e)), Object(R.a)(e, "selection", d, Object(k.a)(e)), e.viewNativeList = new H, e.selection = new U, Promise.all([window.fetch("https://raw.githubusercontent.com/VORPCORE/RDR3natives/main/rdr3natives.json").then((function (e) {
                                    return e.json()
                                })).catch((function () {
                                    return window.reload()
                                })), window.fetch("https://runtime.fivem.net/doc/natives_cfx.json").then((function (e) {
                                    return e.json()
                                })).catch((function () {
                                    return window.reload()
                                }))]).then((function (t) {
                                    var a = Object(x.a)(t, 2),
                                        n = a[0],
                                        r = a[1];
                                    return e.setNatives(function (e) {
                                        var t, a = [],
                                            n = Object(T.a)(e);
                                        try {
                                            for (n.s(); !(t = n.n()).done;) {
                                                var r = t.value,
                                                    i = r.namespace,
                                                    c = r.natives;
                                                a.push({
                                                    type: "namespace",
                                                    name: i
                                                });
                                                var l, s = Object(T.a)(c);
                                                try {
                                                    for (s.s(); !(l = s.n()).done;) {
                                                        var o = l.value;
                                                        a.push(Object(_.a)(Object(_.a)({}, o), {}, {
                                                            namespace: i
                                                        }))
                                                    }
                                                } catch (u) {
                                                    s.e(u)
                                                } finally {
                                                    s.f()
                                                }
                                            }
                                        } catch (u) {
                                            n.e(u)
                                        } finally {
                                            n.f()
                                        }
                                        return a
                                    }([].concat(Object(L.a)(F(r)), Object(L.a)(F(n)))))
                                })).then((function () {
                                    return e.emit("loaded-natives")
                                })), e
                            }
                            return Object(j.a)(a, [{
                                key: "setNatives",
                                value: function (e) {
                                    this.viewNativeList.setNatives(e)
                                }
                            }, {
                                key: "findNative",
                                value: function (e) {
                                    return this.viewNativeList.findNative(e)
                                }
                            }, {
                                key: "findNamespace",
                                value: function (e) {
                                    return this.viewNativeList.findNamespace(e)
                                }
                            }]), a
                        }(I.EventEmitter2), h = Object(C.a)(p.prototype, "viewNativeList", [S.m], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: null
                        }), d = Object(C.a)(p.prototype, "selection", [S.m], {
                            configurable: !0,
                            enumerable: !0,
                            writable: !0,
                            initializer: null
                        }), p),
                        q = (a(161), a(162), a(27)),
                        B = a(19),
                        M = a.n(B),
                        J = a(73),
                        V = a.n(J),
                        X = a(97),
                        G = a.n(X),
                        K = a(74),
                        Q = a.n(K),
                        Y = a(98),
                        Z = a.n(Y),
                        ee = a(99),
                        te = a.n(ee),
                        ae = a(149),
                        ne = a.n(ae),
                        re = a(150),
                        ie = a.n(re),
                        ce = a(151),
                        le = a.n(ce),
                        se = (a(321), a(52)),
                        oe = document.querySelector("title").innerText,
                        ue = function (e, t, a) {
                            void 0 === t && (t = !1);
                            var n = e.substring(1);
                            W.selection.curNative && (W.selection.curNative.active = !1);
                            var r = oe;
                            if (n.startsWith("n_")) {
                                var i = W.findNamespace(n);
                                i && (W.selection.curIndex = W.viewNativeList.natives.indexOf(i), r = i.native.name + " - " + r)
                            } else {
                                var c = W.findNative(n.substr(1));
                                c && (c.active = !0, W.selection.curNative = c, W.selection.curIndex = W.viewNativeList.natives.indexOf(c), W.selection.initialScroll = t, r = (c.native.name || c.native.hash) + " - " + r)
                            }
                            window.location.search === e || a ? t && window.history.replaceState({
                                hash: e
                            }, r, e) : window.history.pushState({
                                hash: e
                            }, r, e), document.querySelector("title").innerText = r
                        },
                        me = function (e) {
                            return e.params.map((function (e) {
                                return "".concat(e.type, " ").concat(e.name)
                            })).join(", ")
                        },
                        fe = {
                            name: "c",
                            lowlightName: "cpp",
                            renderName: function (e) {
                                return e.name || e.hash
                            },
                            formatNativeCode: function (e) {
                                return "// ".concat(z(A(e)), "\n").concat(e.results, " ").concat(A(e), "(").concat(me(e), ");")
                            },
                            formatRefParams: function (e) {
                                return me(e)
                            }
                        },
                        ve = {
                            name: "lua",
                            lowlightName: "lua",
                            renderName: function (e) {
                                return z(A(e))
                            },
                            formatNativeCode: function (e) {
                                return "-- ".concat(A(e), "\n").concat(this.formatResults(e)).concat(this.renderName(e), "(").concat(this.formatParams(e), ")\n")
                            },
                            mapType: function (e) {
                                console.log("mapType called with:", e);
                                switch (e) {
                                    case "BOOL":
                                        return "boolean";
                                    case "int":
                                        return "integer";
                                    case "float":
                                        return "number";
                                    case "const char*":
                                        return "string";
                                    case "char*":
                                        return "string";
                                    case "Vector3":
                                        return "vector3"
                                }
                                return e
                            },
                            formatResults: function (e) {
                                var t = this,
                                    a = [];
                                return "void" !== e.results && a.push([this.mapType(e.results), "retval"]), a.push.apply(a, Object(L.a)(e.params.filter((function (e) {
                                    return /\*$/.test(e.type) && "char*" !== e.type
                                })).map((function (e) {
                                    return [t.mapType(e.type.replace("*", "")), e.name]
                                })))), 0 === a.length ? "" : "local " + a.map((function (e) {
                                    var t = Object(x.a)(e, 2),
                                        a = t[0],
                                        n = t[1];
                                    return "".concat(n, " --[[ ").concat(a, " ]]")
                                })).join(", ") + " =\n\t"
                            },
                            formatParams: function (e) {
                                var t = this,
                                    a = 0 === this.formatResults(e).length ? "" : "\t",
                                    n = e.params.filter((function (e) {
                                        return !/\*$/.test(e.type) || "char*" === e.type || e.type === "const char*"
                                    })).map((function (e) {
                                        return "".concat(e.name, " --[[ ").concat(t.mapType(e.type), " ]]")
                                    })).join(", \n".concat(a, "\t"));
                                return 0 === n.length ? "" : "\n".concat(a, "\t").concat(n, "\n").concat(a)
                            },
                            formatRefParams: function (e) {
                                return this.formatParams(e).replace(/\n\t/g, "").trim()
                            }

                        },
                        pe = {
                            name: "c#",
                            lowlightName: "cs",
                            renderName: function (e) {
                                return z(A(e))
                            },
                            formatNativeCode: function (e) {
                                return "// ".concat(A(e), "\n").concat(this.mapType(e.results), " ").concat(this.renderName(e), "(").concat(this.formatParams(e), ");")
                            },
                            mapType: function (e) {
                                switch (e) {
                                    case "char*":
                                        return "string";
                                    case "BOOL":
                                        return "bool";
                                    case "Hash":
                                        return "uint";
                                    case "Entity":
                                    case "Ped":
                                    case "Object":
                                    case "Vehicle":
                                        return "int /* ".concat(e, " */")
                                }
                                return /\*$/.test(e) && (e = "ref ".concat(this.mapType(e.replace("*", "")))), e
                            },
                            formatParams: function (e) {
                                var t = this;
                                return e.params.map((function (e) {
                                    return "".concat(t.mapType(e.type), " ").concat(e.name)
                                })).join(", ")
                            },
                            formatRefParams: function (e) {
                                return this.formatParams(e)
                            }
                        },
                        he = {
                            name: "js",
                            lowlightName: "typescript",
                            renderName: function (e) {
                                return z(A(e))
                            },
                            formatNativeCode: function (e) {
                                return "// ".concat(A(e), "\n").concat(this.formatResults(e)).concat(this.renderName(e), "(").concat(this.formatParams(e), ");\n")
                            },
                            mapType: function (e) {
                                switch (e) {
                                    case "BOOL":
                                        return "boolean";
                                    case "int":
                                    case "float":
                                        return "number";
                                    case "char*":
                                        return "string";
                                    case "Vector3":
                                        return "[ number, number, number ]"
                                }
                                return e
                            },
                            formatResults: function (e) {
                                var t = this,
                                    a = [];
                                "void" !== e.results && a.push([this.mapType(e.results), "retval"]), a.push.apply(a, Object(L.a)(e.params.filter((function (e) {
                                    return /\*$/.test(e.type) && "char*" !== e.type
                                })).map((function (e) {
                                    return [t.mapType(e.type.replace("*", "")), e.name]
                                }))));
                                var n = a.map((function (e) {
                                        var t = Object(x.a)(e, 2);
                                        t[0];
                                        return t[1]
                                    })).join(", "),
                                    r = a.map((function (e) {
                                        var t = Object(x.a)(e, 2),
                                            a = t[0];
                                        t[1];
                                        return a
                                    })).join(", ");
                                return 0 === a.length ? "" : 1 === a.length ? "const ".concat(n, ": ").concat(r, " = \n\t") : "const [".concat(n, "]: [").concat(r, "] = \n\t")
                            },
                            formatParams: function (e) {
                                var t = this,
                                    a = 0 === this.formatResults(e).length ? "" : "\t",
                                    n = e.params.filter((function (e) {
                                        return !/\*$/.test(e.type) || "char*" === e.type
                                    })).map((function (e) {
                                        return "".concat(e.name, ": ").concat(t.mapType(e.type))
                                    })).join(", \n".concat(a, "\t"));
                                return 0 === n.length ? "" : "\n".concat(a, "\t").concat(n, "\n").concat(a)
                            },
                            formatRefParams: function (e) {
                                return this.formatParams(e).replace(/\n\t/g, "").trim()
                            }
                        };
                    M.a.registerLanguage("js", Z.a), M.a.registerLanguage("cpp", V.a), M.a.registerLanguage("c", V.a), M.a.registerLanguage("lua", G.a), M.a.registerLanguage("cs", Q.a), M.a.registerLanguage("csharp", Q.a), M.a.registerLanguage("ts", te.a), M.a.registerLanguage("typescript", te.a);
                    var de = Object.assign({}, se, {
                            attributes: Object.assign({}, se.attributes, {
                                code: [].concat(Object(L.a)(se.attributes.code || []), ["className"])
                            })
                        }),
                        ge = function (e) {
                            var t = e.children;
                            return b.a.createElement("p", {
                                className: "inlined"
                            }, t)
                        },
                        be = function (e) {
                            var t = e.children;
                            return b.a.createElement("div", {
                                className: "inlined"
                            }, t)
                        },
                        we = function (e) {
                            var t = e.children;
                            return b.a.createElement("p", null, t)
                        },
                        ye = function (e) {
                            var t = e.children;
                            return b.a.createElement("div", null, t)
                        },
                        Ee = function (e) {
                            var t = e.children,
                                a = e.href;
                            if ("#" === a[0]) {
                                var n = a.replace("#", "?"),
                                    r = b.a.useCallback((function (e) {
                                        return e.preventDefault(), ue(n), !1
                                    }), [a]);
                                return b.a.createElement("a", {
                                    href: n,
                                    onClick: r
                                }, t)
                            }
                            return b.a.createElement("a", {
                                href: a,
                                target: "_blank"
                            }, t)
                        },
                        je = function (e, t) {
                            return ne()().use(ie.a, {
                                sanitize: de,
                                remarkReactComponents: {
                                    code: le()({
                                        js: Z.a,
                                        lua: G.a,
                                        c: V.a,
                                        cs: Q.a
                                    }),
                                    a: Ee,
                                    p: t ? ge : we,
                                    div: t ? be : ye
                                }
                            }).processSync(e).contents
                        },
                        Ne = a(11),
                        Oe = a(72);
                    var Le, ke = function (e) {
                        Object(N.a)(a, e);
                        var t = Object(O.a)(a);

                        function a() {
                            var e;
                            Object(E.a)(this, a);
                            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                            return (e = t.call.apply(t, [this].concat(r))).listRef = b.a.createRef(), e.state = {
                                scrollTop: null
                            }, e.onScroll = function (t) {
                                var a = t.scrollTop;
                                e._animationStartTime || (e._scrollTopInitial = a)
                            }, e
                        }
                        return Object(j.a)(a, [{
                            key: "componentDidMount",
                            value: function () {
                                this.props.scrollToIndex && this._initAnimation()
                            }
                        }, {
                            key: "componentDidUpdate",
                            value: function (e) {
                                this.props.scrollToIndex !== e.scrollToIndex && this._initAnimation()
                            }
                        }, {
                            key: "render",
                            value: function () {
                                return b.a.createElement(Oe.b, Object.assign({}, this.props, {
                                    onScroll: this.onScroll,
                                    ref: this.listRef,
                                    scrollToIndex: void 0,
                                    scrollTop: this.state.scrollTop
                                }))
                            }
                        }, {
                            key: "_animate",
                            value: function () {
                                var e = this;
                                requestAnimationFrame((function () {
                                    var t = e.props,
                                        a = t.duration,
                                        n = t.easing,
                                        r = performance.now() - e._animationStartTime,
                                        i = e._scrollTopFinal - e._scrollTopInitial,
                                        c = n(Math.min(1, r / a)),
                                        l = e._scrollTopInitial + i * c;
                                    e.setState({
                                        scrollTop: l
                                    }), r < a ? e._animate() : (e._animationStartTime = void 0, e._scrollTopInitial = e._scrollTopFinal, e.props.onAnimationComplete(), e.setState({
                                        scrollTop: null
                                    }))
                                }))
                            }
                        }, {
                            key: "_initAnimation",
                            value: function () {
                                var e = this.props.scrollToIndex;
                                this._animationStartTime || (this._animationStartTime = performance.now()), this._scrollTopFinal = this.listRef.current.getOffsetForRow({
                                    index: e,
                                    alignment: "center"
                                }), this._animate()
                            }
                        }]), a
                    }(b.a.Component);
                    ke.defaultProps = {
                        duration: 1e3,
                        easing: function (e) {
                            return e
                        },
                        onAnimationComplete: function () {}
                    };
                    var Re = Object(q.a)((function (e) {
                            var t = e.data,
                                a = e.addRefCb,
                                n = e.style,
                                r = e.language;
                            return b.a.createElement("div", {
                                className: (t.active ? "active " : "") + "native entry",
                                id: "li_" + t.native.hash,
                                ref: function (e) {
                                    return a(t.native.hash, e)
                                },
                                style: n
                            }, b.a.createElement("a", {
                                href: "?_" + t.native.hash,
                                onClick: function (e) {
                                    ue("?_" + t.native.hash), e.preventDefault()
                                }
                            }, r.renderName(t.native), b.a.createElement("span", {
                                className: 0 === t.native.params.length ? "hidden" : ""
                            }, "(", r.formatRefParams(t.native), ")")))
                        })),
                        Ce = Object(q.a)((function (e) {
                            var t = e.data,
                                a = e.style;
                            return b.a.createElement("div", {
                                className: "namespace entry",
                                style: a
                            }, b.a.createElement("a", {
                                href: "?n_" + t.native.name,
                                onClick: function (e, a) {
                                    ue("?n_" + t.native.name), e.preventDefault()
                                }
                            }, b.a.createElement("span", null, "Namespace:\xa0"), t.native.name))
                        })),
                        Te = Object(q.a)(Le = function (e) {
                            Object(N.a)(a, e);
                            var t = Object(O.a)(a);

                            function a(e) {
                                var n;
                                return Object(E.a)(this, a), (n = t.call(this, e)).renderRow = n.renderRow.bind(Object(k.a)(n)), n.getRowHeight = n.getRowHeight.bind(Object(k.a)(n)), n.aniListRef = b.a.createRef(), Object(S.n)(W.viewNativeList, (function () {
                                    n.aniListRef.current.listRef.current.recomputeRowHeights()
                                })), n
                            }
                            return Object(j.a)(a, [{
                                key: "renderRow",
                                value: function (e) {
                                    var t = e.key,
                                        a = e.index,
                                        n = e.style,
                                        r = this.props,
                                        i = r.language,
                                        c = r.addRefCb,
                                        l = r.followLink,
                                        s = W.viewNativeList.natives[a];
                                    return "namespace" === s.native.type ? b.a.createElement(Ce, {
                                        key: t,
                                        data: s,
                                        style: n,
                                        followLink: l
                                    }) : b.a.createElement(Re, {
                                        key: t,
                                        data: s,
                                        language: i,
                                        addRefCb: c,
                                        style: n
                                    })
                                }
                            }, {
                                key: "getRowHeight",
                                value: function (e) {
                                    var t = e.index;
                                    return W.viewNativeList.natives[t].native.type, 32
                                }
                            }, {
                                key: "render",
                                value: function () {
                                    var e = this;
                                    return b.a.createElement("section", null, b.a.createElement(Oe.a, null, (function (t) {
                                        var a = t.height,
                                            n = t.width;
                                        return b.a.createElement(Ne.a, null, (function () {
                                            return b.a.createElement(ke, {
                                                width: n,
                                                height: a,
                                                ref: e.aniListRef,
                                                rowCount: W.viewNativeList.natives.length,
                                                rowHeight: e.getRowHeight,
                                                rowRenderer: function (t) {
                                                    return b.a.createElement(Ne.a, {
                                                        key: t.key,
                                                        style: t.style
                                                    }, (function () {
                                                        return e.renderRow(t)
                                                    }))
                                                },
                                                scrollToIndex: W.selection.curIndex,
                                                duration: W.selection.initialScroll ? 0 : 150,
                                                easing: function (e) {
                                                    return e * e
                                                },
                                                onAnimationComplete: function () {
                                                    return W.selection.initialScroll = !1
                                                }
                                            })
                                        }))
                                    })))
                                }
                            }]), a
                        }(b.a.PureComponent)) || Le,
                        _e = a(56),
                        xe = function (e) {
                            return e.description ? b.a.createElement("div", {
                                className: "desc"
                            }, function (e) {
                                var t, a;
                                return (null === e || void 0 === e || null === (t = e.params) || void 0 === t || null === (a = t[0]) || void 0 === a ? void 0 : a.description) ? b.a.createElement("div", {
                                    className: "parameters"
                                }, b.a.createElement("strong", null, "Parameters:"), b.a.createElement("br", null), b.a.createElement("ul", null, e.params.map((function (e) {
                                    return b.a.createElement("li", {
                                        key: e.name
                                    }, b.a.createElement("strong", null, e.name), ": ", je(e.description, !0))
                                })))) : ""
                            }(e), function (e) {
                                if (e.resultsDescription) return b.a.createElement("div", {
                                    className: "returns"
                                }, b.a.createElement("strong", null, "Returns: "), b.a.createElement("div", null, je(e.resultsDescription)))
                            }(e), je(e.description)) : null
                        },
                        Se = function (e) {
                            var t = e.lang,
                                a = e.code;
                            return b.a.createElement(M.a, {
                                language: t,
                                value: a
                            })
                        },
                        Ie = {
                            cs: "C#",
                            lua: "Lua",
                            js: "JavaScript"
                        },
                        Pe = function (e) {
                            var t = e.set,
                                a = window.localStorage.getItem("lastLang"),
                                n = t.findIndex((function (e) {
                                    return e.lang === a
                                })),
                                r = b.a.useState(n < 0 ? 0 : n),
                                i = Object(x.a)(r, 2),
                                c = i[0],
                                l = i[1];
                            return b.a.createElement(_e.d, {
                                selectedIndex: c,
                                onSelect: function (e) {
                                    return function (e) {
                                        window.localStorage.setItem("lastLang", t[e].lang), l(e)
                                    }(e)
                                }
                            }, b.a.createElement(_e.b, null, t.map((function (e) {
                                return b.a.createElement(_e.a, {
                                    key: e.lang
                                }, (t = e.lang, Ie[t] || t));
                                var t
                            }))), t.map((function (e) {
                                return b.a.createElement(_e.c, {
                                    key: e.lang
                                }, b.a.createElement(Se, {
                                    lang: e.lang,
                                    code: e.code
                                }))
                            })))
                        },
                        ze = Object(q.a)((function (e) {
                            var t = e.language,
                                a = W.selection.curNative.native,
                                n = t.renderName(a);
                            return b.a.createElement("div", {
                                className: "details"
                            }, b.a.createElement("div", {
                                className: "info"
                            }, b.a.createElement("span", {
                                className: "namespace"
                            }, b.a.createElement("span", null, "Namespace:\xa0"), a.namespace), b.a.createElement("span", {
                                className: "apiset"
                            }, function (e) {
                                return e.apiset && e.apiset[0] ? b.a.createElement(b.a.Fragment, null, b.a.createElement("span", null, "API set:\xa0"), e.apiset) : null
                            }(a))), b.a.createElement("h2", {
                                title: n
                            }, n), b.a.createElement("div", {
                                className: "hash"
                            }, b.a.createElement("span", null, b.a.createElement("pre", null, a.hash)), b.a.createElement("span", null, b.a.createElement("pre", null, a.jhash))), b.a.createElement("div", {
                                className: "code"
                            }, b.a.createElement(M.a, {
                                language: t.lowlightName,
                                value: t.formatNativeCode(a)
                            })), xe(a), function (e) {
                                return (e.aliases || []).map((function (e) {
                                    return e.startsWith("0x") ? "" : b.a.createElement("p", {
                                        className: "old",
                                        key: e
                                    }, b.a.createElement("strong", null, "Old name: "), " ", e)
                                }))
                            }(a), function (e) {
                                var t = e.examples || [],
                                    a = t.length > 0 ? b.a.createElement("p", null, b.a.createElement("strong", null, "Examples:")) : "",
                                    n = t.length > 0 ? b.a.createElement(Pe, {
                                        key: e.hash,
                                        set: t
                                    }) : "";
                                return b.a.createElement("div", {
                                    className: "examples"
                                }, a, n)
                            }(a))
                        })),
                        Ae = Object(q.a)((function (e) {
                            var t = e.language,
                                a = W.selection.curNative ? b.a.createElement(ze, {
                                    language: t
                                }) : b.a.createElement("div", {
                                    className: "empty"
                                }, "Please select a native from the list.");
                            return b.a.createElement("aside", null, a)
                        })),
                        De = ["all", "server", "client"],
                        Fe = {
                            c: fe,
                            lua: ve,
                            cs: pe,
                            js: he
                        },
                        He = Object(q.a)((function (e) {
                                    var t = e.searchCb,
                                        a = e.addRefCb,
                                        n = e.setApiSetCb,
                                        r = e.setLanguageCb,
                                        i = De.map((function (e) {
                                            return b.a.createElement("li", {
                                                key: e,
                                                className: W.viewNativeList.apiset === e ? "active" : "",
                                                onClick: function (e) {
                                                    n(e.target.dataset.name), e.preventDefault()
                                                },
                                                "data-name": e
                                            }, e)
                                        })),
                                        c = Object.entries(Fe).map((function (e) {
                                            var t = Object(x.a)(e, 2),
                                                a = t[0],
                                                n = t[1];
                                            return b.a.createElement("li", {
                                                key: a,
                                                className: W.viewNativeList.language === a ? "active" : "",
                                                onClick: function (e) {
                                                    r(e.target.dataset.name), e.preventDefault()
                                                },
                                                "data-name": a
                                            }, n.name)
                                        }));
                                    return b.a.createElement(b.a.Fragment, null, b.a.createElement("header", null, b.a.createElement("div", {
                                        className: "branding"
                                    }, b.a.createElement("span", null, "RedM Native Reference")), b.a.createElement("input", {
                                        type: "search",
                                        placeholder: "Search...",
                                        name: "search",
                                        onChange: function (e) {
                                            return t(e.target.value)
                                        },
                                        ref: function (e) {
                                            return a("search", e)
                                        }
                                    })), b.a.createElement("nav", null, b.a.createElement("div", {
                                            className: "toggles"
                                        }, b.a.createElement("div", {
                                            className: "title"
                                        }, "API Set:"), b.a.createElement("ul", null, i)), b.a.createElement("div", {
                                            className: "toggles"
                                        }, b.a.createElement("div", {
                                            className: "title"
                                        }, "Language:"), b.a.createElement("ul", null, c)), b.a.createElement("button", {
                                            id: "darkModeToggle",
                                            onClick: () => toggleDarkMode()
                                        }, "Toggle Dark Mode"),
                                        b.a.createElement("div", {
                                            className: "github-link",
                                            style: {
                                                marginLeft: 'auto',
                                                paddingRight: '10px'
                                            }
                                        }, b.a.createElement("a", {
                                            href: "https://github.com/VORPCORE/RDR3natives",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            padding: '2px 2px 1px 1px',
                                            className: "github-link"
                                        }, b.a.createElement("i", {
                                            className: "fab fa-github",
                                            style: {
                                                fontSize: '18px',
                                                paddingRight: '4px'
                                            }
                                            
                                    }), " GITHUB"))))})),
                                $e = function (e) {
                                    return e.loading ? b.a.createElement("div", {
                                        className: "loading"
                                    }, b.a.createElement("div", {
                                        className: "lds-ripple"
                                    }, b.a.createElement("div", null), b.a.createElement("div", null))) : null
                                },
                                Ue = Object(q.a)((function (e) {
                                    var t = e.addRef,
                                        a = Fe[W.viewNativeList.language],
                                        n = 0 === W.viewNativeList.rawNatives.length,
                                        r = b.a.useCallback((function (e) {
                                            return W.viewNativeList.apiset = e
                                        }), []),
                                        i = b.a.useCallback((function (e) {
                                            return W.viewNativeList.filter = e
                                        }), []),
                                        c = b.a.useCallback((function (e) {
                                            W.viewNativeList.language = e, window.localStorage.setItem("nativeRefLanguage", e)
                                        }), []);
                                    return b.a.createElement(b.a.Fragment, null, b.a.createElement(He, {
                                        searchCb: i,
                                        addRefCb: t,
                                        setApiSetCb: r,
                                        setLanguageCb: c
                                    }), b.a.createElement("div", {
                                        className: "app"
                                    }, b.a.createElement($e, {
                                        loading: n
                                    }), !n && b.a.createElement(b.a.Fragment, null, b.a.createElement(Ae, {
                                        language: a
                                    }), b.a.createElement(Te, {
                                        addRefCb: t,
                                        language: a
                                    }))))
                                })),
                                We = function (e) {
                                    Object(N.a)(a, e);
                                    var t = Object(O.a)(a);

                                    function a(e) {
                                        var n;
                                        return Object(E.a)(this, a), (n = t.call(this, e)).addRef = function (e, t) {
                                            n.nativeRefs[e] = t
                                        }, W.on("loaded-natives", (function () {
                                            ue(window.location.hash || window.location.search, !0)
                                        })), n.nativeRefs = {}, n.listener = function (e) {
                                            ue(window.location.hash || window.location.search)
                                        }, n.stateListener = function (e) {
                                            ue(e.state.hash, !1, !0)
                                        }, n.keyListener = function (e) {
                                            if ("ArrowUp" === e.key || "ArrowDown" === e.key) {
                                                var t = "ArrowUp" === e.key ? -1 : 1,
                                                    a = W.viewNativeList.natives,
                                                    r = (W.selection.curIndex || 0) + t,
                                                    i = r < 0 ? a.length - 1 : r >= a.length ? 0 : r,
                                                    c = i + ("namespace" === a[i].native.type ? t : 0),
                                                    l = c < 0 ? a.length - 1 : c;
                                                ue("?_" + a[l].native.hash), e.preventDefault()
                                            } else "t" === e.key && document.activeElement !== n.nativeRefs.search && (n.nativeRefs.search.focus(), e.preventDefault())
                                        }, n
                                    }
                                    return Object(j.a)(a, [{
                                        key: "componentDidMount",
                                        value: function () {
                                            window.addEventListener("hashchange", this.listener), window.addEventListener("popstate", this.stateListener), window.addEventListener("keydown", this.keyListener)
                                        }
                                    }, {
                                        key: "componentWillUnmount",
                                        value: function () {
                                            window.removeEventListener("hashchange", this.listener), window.removeEventListener("popstate", this.stateListener), window.removeEventListener("keydown", this.keyListener)
                                        }
                                    }, {
                                        key: "render",
                                        value: function () {
                                            return b.a.createElement(Ue, {
                                                addRef: this.addRef
                                            })
                                        }
                                    }]), a
                                }(b.a.PureComponent); y.a.render(b.a.createElement(We, null), document.getElementById("root"))
                            }
                        },
                        [
                            [155, 1, 2]
                        ]
                ]);