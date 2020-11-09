(this["webpackJsonpmy-app"] = this["webpackJsonpmy-app"] || []).push([
    [0], {
        22: function (t, e, s) {},
        23: function (t, e, s) {},
        24: function (t, e, s) {},
        25: function (t, e, s) {},
        27: function (t, e, s) {},
        31: function (t, e, s) {
            "use strict";
            s.r(e);
            var n = s(0),
                a = s(2),
                i = s.n(a),
                c = s(14),
                r = s.n(c),
                l = s(3),
                o = s(4),
                u = s(7),
                j = s(6),
                h = s(34),
                p = s(32),
                b = s(33),
                f = s.p + "../../../static/media/Logo.8bb77c6b.svg",
                d = (s(22), s(23), function (t) {
                    Object(u.a)(s, t);
                    var e = Object(j.a)(s);

                    function s() {
                        return Object(l.a)(this, s), e.apply(this, arguments)
                    }
                    return Object(o.a)(s, [{
                        key: "render",
                        value: function () {
                            var t = this.props.onChange;
                            return Object(n.jsxs)("div", {
                                className: "filter",
                                children: [Object(n.jsx)("h5", {
                                    className: "filter__title",
                                    children: "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a"
                                }), Object(n.jsx)("form", {
                                    className: "folter__form",
                                    onChange: t,
                                    children: Object(n.jsxs)("ul", {
                                        className: "filter__ul",
                                        children: [Object(n.jsx)("li", {
                                            className: "filter__li",
                                            children: Object(n.jsxs)("label", {
                                                className: "filter__label",
                                                children: [Object(n.jsx)("input", {
                                                    type: "radio",
                                                    value: "8",
                                                    name: "landing",
                                                    className: "filter__input"
                                                }), Object(n.jsx)("span", {
                                                    className: "filter__span"
                                                }), "\u0412\u0441\u0435"]
                                            })
                                        }), Object(n.jsx)("li", {
                                            className: "filter__li",
                                            children: Object(n.jsxs)("label", {
                                                className: "filter__label",
                                                children: [Object(n.jsx)("input", {
                                                    type: "radio",
                                                    value: "0",
                                                    name: "landing",
                                                    className: "filter__input"
                                                }), Object(n.jsx)("span", {
                                                    className: "filter__span"
                                                }), "\u0411\u0435\u0437 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a"]
                                            })
                                        }), Object(n.jsx)("li", {
                                            className: "filter__li",
                                            children: Object(n.jsxs)("label", {
                                                className: "filter__label",
                                                children: [Object(n.jsx)("input", {
                                                    type: "radio",
                                                    value: "1",
                                                    name: "landing",
                                                    className: "filter__input"
                                                }), Object(n.jsx)("span", {
                                                    className: "filter__span"
                                                }), "1 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0430"]
                                            })
                                        }), Object(n.jsx)("li", {
                                            className: "filter__li",
                                            children: Object(n.jsxs)("label", {
                                                className: "filter__label",
                                                children: [Object(n.jsx)("input", {
                                                    type: "radio",
                                                    value: "2",
                                                    name: "landing",
                                                    className: "filter__input"
                                                }), Object(n.jsx)("span", {
                                                    className: "filter__span"
                                                }), "2 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0430"]
                                            })
                                        }), Object(n.jsx)("li", {
                                            className: "filter__li",
                                            children: Object(n.jsxs)("label", {
                                                className: "filter__label",
                                                children: [Object(n.jsx)("input", {
                                                    type: "radio",
                                                    value: "3",
                                                    name: "landing",
                                                    className: "filter__input"
                                                }), Object(n.jsx)("span", {
                                                    className: "filter__span"
                                                }), "3 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0430"]
                                            })
                                        })]
                                    })
                                })]
                            })
                        }
                    }]), s
                }(a.Component)),
                m = (s(24), function (t) {
                    Object(u.a)(s, t);
                    var e = Object(j.a)(s);

                    function s() {
                        var t;
                        Object(l.a)(this, s);
                        for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i];
                        return (t = e.call.apply(e, [this].concat(a))).state = {
                            chip: !0
                        }, t
                    }
                    return Object(o.a)(s, [{
                        key: "render",
                        value: function () {
                            var t = this.props,
                                e = t.onClick,
                                s = t.chip;
                            return Object(n.jsxs)("ul", {
                                className: "tabs",
                                onClick: e,
                                children: [Object(n.jsx)("li", {
                                    className: s ? "tabs__tab tabs__tab_active" : "tabs__tab",
                                    children: Object(n.jsx)("h5", {
                                        className: "tabs__title",
                                        children: "\u0421\u0430\u043c\u044b\u0439 \u0434\u0435\u0448\u0435\u0432\u044b\u0439"
                                    })
                                }), Object(n.jsx)("li", {
                                    className: s ? "tabs__tab" : "tabs__tab tabs__tab_active",
                                    children: Object(n.jsx)("h5", {
                                        className: "tabs__title",
                                        children: "\u0421\u0430\u043c\u044b\u0439 \u0431\u044b\u0441\u0442\u0440\u044b\u0439"
                                    })
                                })]
                            })
                        }
                    }]), s
                }(a.Component)),
                O = (s(25), function () {
                    return Object(n.jsx)("div", {
                        className: "loadingio-spinner-bars-90f24m2jt1t",
                        children: Object(n.jsxs)("div", {
                            className: "ldio-01hfyaegcmvg",
                            children: [Object(n.jsx)("div", {}), Object(n.jsx)("div", {}), Object(n.jsx)("div", {}), Object(n.jsx)("div", {})]
                        })
                    })
                }),
                v = s(8),
                _ = s.n(v),
                x = s(12),
                g = function () {
                    function t() {
                        var e = this;
                        Object(l.a)(this, t), this.getResource = function () {
                            var t = Object(x.a)(_.a.mark((function t(s) {
                                var n;
                                return _.a.wrap((function (t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, fetch("".concat(e._apiBase).concat(s));
                                        case 2:
                                            if ((n = t.sent).ok) {
                                                t.next = 5;
                                                break
                                            }
                                            throw new Error("Could not fetch ".concat(s) + ", received ".concat(n.status));
                                        case 5:
                                            return t.next = 7, n.json();
                                        case 7:
                                            return t.abrupt("return", t.sent);
                                        case 8:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function (e) {
                                return t.apply(this, arguments)
                            }
                        }(), this.getSearchId = function () {
                            var t = Object(x.a)(_.a.mark((function t(s) {
                                var n;
                                return _.a.wrap((function (t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, e.getResource("/search");
                                        case 2:
                                            return n = t.sent, t.next = 5, e.getAllTicket(n.searchId, s);
                                        case 5:
                                            return t.abrupt("return", t.sent);
                                        case 6:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function (e) {
                                return t.apply(this, arguments)
                            }
                        }(), this.getAllTicket = function () {
                            var t = Object(x.a)(_.a.mark((function t(s, n) {
                                var a;
                                return _.a.wrap((function (t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, e.getResource("/tickets?searchId=".concat(s));
                                        case 2:
                                            return a = t.sent, t.abrupt("return", e.findTickets(a.tickets, n));
                                        case 4:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function (e, s) {
                                return t.apply(this, arguments)
                            }
                        }(), this.findTickets = function () {
                            var t = Object(x.a)(_.a.mark((function t(s, n) {
                                var a, i, c;
                                return _.a.wrap((function (t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if (8 !== n) {
                                                t.next = 4;
                                                break
                                            }
                                            return a = s.map((function (t) {
                                                return e.transformTick(t)
                                            })), console.log(s), t.abrupt("return", a);
                                        case 4:
                                            return t.next = 6, s.filter((function (t) {
                                                return t.segments[0].stops.length === n & t.segments[1].stops.length === n
                                            }));
                                        case 6:
                                            return i = t.sent, c = i.map((function (t) {
                                                return e.transformTick(t)
                                            })), t.abrupt("return", c);
                                        case 9:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function (e, s) {
                                return t.apply(this, arguments)
                            }
                        }(), this._apiBase = "https://front-test.beta.aviasales.ru"
                    }
                    return Object(o.a)(t, [{
                        key: "isDate",
                        value: function (t) {
                            var e = new Date(t),
                                s = e.getHours(),
                                n = e.getMinutes();
                            return "".concat(("0" + s).slice(-2), ":").concat(("0" + n).slice(-2))
                        }
                    }, {
                        key: "isStops",
                        value: function (t) {
                            return 0 === t ? "\u0431\u0435\u0437 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a" : 1 === t ? "1 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0430" : t > 1 ? "".concat(t, " \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438") : void 0
                        }
                    }, {
                        key: "isRub",
                        value: function (t) {
                            return t.toLocaleString("ru") + " \u0420"
                        }
                    }, {
                        key: "isTime",
                        value: function (t) {
                            var e = Math.floor(t % 60),
                                s = Math.floor((t - e) / 60);
                            return "".concat(("0" + s).slice(-2), "\u0447 ").concat(("0" + e).slice(-2), "\u043c")
                        }
                    }, {
                        key: "isStopsVal",
                        value: function (t) {
                            return t.map((function (t) {
                                return " " + t
                            }))
                        }
                    }, {
                        key: "isArrival",
                        value: function (t, e) {
                            var s = new Date(t);
                            return this.isDate(s.setMinutes(s.getMinutes() + e))
                        }
                    }, {
                        key: "transformTick",
                        value: function (t) {
                            return {
                                priceNum: t.price,
                                price: this.isRub(t.price),
                                carrier: t.carrier,
                                stStop: this.isStops(t.segments[0].stops.length),
                                stStops: this.isStopsVal(t.segments[0].stops),
                                stDate: this.isDate(t.segments[0].date),
                                stDestination: t.segments[0].destination,
                                stDuration: this.isTime(t.segments[0].duration),
                                stDurationNum: t.segments[0].duration,
                                stArrival: this.isArrival(t.segments[0].date, t.segments[0].duration),
                                stOrigin: t.segments[0].origin,
                                finStop: this.isStops(t.segments[1].stops.length),
                                finStops: this.isStopsVal(t.segments[1].stops),
                                finDate: this.isDate(t.segments[1].date),
                                finDestination: t.segments[1].destination,
                                finDuration: this.isTime(t.segments[1].duration),
                                finDurationNum: t.segments[1].duration,
                                finArrival: this.isArrival(t.segments[1].date, t.segments[1].duration),
                                finOrigin: t.segments[1].origin
                            }
                        }
                    }]), t
                }(),
                k = (s(27), function (t) {
                    Object(u.a)(s, t);
                    var e = Object(j.a)(s);

                    function s() {
                        var t;
                        Object(l.a)(this, s);
                        for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i];
                        return (t = e.call.apply(e, [this].concat(a))).aviaService = new g, t.state = {
                            ticket: {}
                        }, t.onTicketLoaded = function (e) {
                            t.setState({
                                ticket: e
                            })
                        }, t.updateTick = function () {}, t
                    }
                    return Object(o.a)(s, [{
                        key: "componentDidMount",
                        value: function () {
                            var t = this.props.ticks;
                            this.onTicketLoaded(t)
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function (t) {
                            if (this.props.ticks !== t.ticks) {
                                console.log("updateTick");
                                var e = this.props.ticks;
                                this.onTicketLoaded(e)
                            }
                        }
                    }, {
                        key: "render",
                        value: function () {
                            var t = this.state.ticket,
                                e = t.price,
                                s = t.carrier,
                                a = t.stStop,
                                i = t.stStops,
                                c = t.stDate,
                                r = t.stDestination,
                                l = t.stDuration,
                                o = t.stArrival,
                                u = t.stOrigin,
                                j = t.finStop,
                                h = t.finStops,
                                f = t.finDate,
                                d = t.finDestination,
                                m = t.finDuration,
                                O = t.finArrival,
                                v = t.finOrigin,
                                _ = "https://pics.avs.io/99/36/".concat(s, ".png"),
                                x = this.props.key;
                            return Object(n.jsxs)("div", {
                                className: "ticket",
                                children: [Object(n.jsxs)(p.a, {
                                    children: [Object(n.jsx)(b.a, {
                                        children: Object(n.jsx)("h3", {
                                            className: "ticket__price",
                                            children: e
                                        })
                                    }), Object(n.jsx)(b.a, {}), Object(n.jsx)(b.a, {
                                        children: Object(n.jsx)("img", {
                                            className: "ticket__img",
                                            src: _,
                                            alt: s
                                        })
                                    })]
                                }), Object(n.jsxs)(p.a, {
                                    children: [Object(n.jsxs)(b.a, {
                                        children: [Object(n.jsxs)("h6", {
                                            className: "ticket__title",
                                            children: [u, " \u2013 ", r]
                                        }), Object(n.jsxs)("h6", {
                                            className: "ticket__value",
                                            children: [c, " \u2013 ", o]
                                        }), Object(n.jsxs)("h6", {
                                            className: "ticket__title",
                                            children: [v, " \u2013 ", d]
                                        }), Object(n.jsxs)("h6", {
                                            className: "ticket__value",
                                            children: [f, " \u2013 ", O]
                                        })]
                                    }), Object(n.jsxs)(b.a, {
                                        children: [Object(n.jsx)("h6", {
                                            className: "ticket__title",
                                            children: "\u0412 \u043f\u0443\u0442\u0438"
                                        }), Object(n.jsx)("h6", {
                                            className: "ticket__value",
                                            children: l
                                        }), Object(n.jsx)("h6", {
                                            className: "ticket__title",
                                            children: "\u0412 \u043f\u0443\u0442\u0438"
                                        }), Object(n.jsx)("h6", {
                                            className: "ticket__value",
                                            children: m
                                        })]
                                    }), Object(n.jsxs)(b.a, {
                                        children: [Object(n.jsx)("h6", {
                                            className: "ticket__title",
                                            children: a
                                        }), Object(n.jsxs)("h6", {
                                            className: "ticket__value",
                                            children: [i, " ", Object(n.jsx)("br", {})]
                                        }), Object(n.jsx)("h6", {
                                            className: "ticket__title",
                                            children: j
                                        }), Object(n.jsx)("h6", {
                                            className: "ticket__value",
                                            children: h
                                        })]
                                    })]
                                })]
                            }, x)
                        }
                    }]), s
                }(a.Component)),
                N = s(15),
                y = s.n(N),
                D = function (t) {
                    Object(u.a)(s, t);
                    var e = Object(j.a)(s);

                    function s() {
                        var t;
                        Object(l.a)(this, s);
                        for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i];
                        return (t = e.call.apply(e, [this].concat(a))).state = {
                            tickList: null,
                            chip: !0
                        }, t.updateTick = function (e) {
                            t.setState({
                                tickList: e
                            })
                        }, t
                    }
                    return Object(o.a)(s, [{
                        key: "componentDidUpdate",
                        value: function (t) {
                            var e = this.props,
                                s = e.getData,
                                n = e.chip;
                            if (this.props.chip !== t.chip) {
                                if (n) {
                                    function a(t, e) {
                                        return t.priceNum - e.priceNum
                                    }
                                    s.sort(a)
                                } else {
                                    s.sort((function (t, e) {
                                        return t.stDurationNum - e.stDurationNum
                                    }))
                                }
                                this.updateTick(s)
                            }
                            if (this.props.getData !== t.getData) {
                                if (n) {
                                    function a(t, e) {
                                        return t.priceNum - e.priceNum
                                    }
                                    s.sort(a)
                                }
                                this.updateTick(s)
                            }
                        }
                    }, {
                        key: "renderTickets",
                        value: function (t) {
                            return t.map((function (t) {
                                var e = y()();
                                return Object(n.jsx)(k, {
                                    ticks: t
                                }, e)
                            }))
                        }
                    }, {
                        key: "render",
                        value: function () {
                            var t = this.state.tickList;
                            if (!t) return Object(n.jsx)(O, {});
                            var e = this.renderTickets(t);
                            return Object(n.jsx)(n.Fragment, {
                                children: e
                            })
                        }
                    }]), s
                }(a.Component),
                S = function (t) {
                    Object(u.a)(s, t);
                    var e = Object(j.a)(s);

                    function s() {
                        var t;
                        Object(l.a)(this, s);
                        for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i];
                        return (t = e.call.apply(e, [this].concat(a))).aviaService = new g, t.state = {
                            data: null,
                            stops: 3,
                            chip: !0
                        }, t.onChange = function (e) {
                            var s = +e.target.value;
                            t.onLoaded(s)
                        }, t.onLoaded = function (e) {
                            t.aviaService.getSearchId(e).then((function (s) {
                                t.setState({
                                    data: s,
                                    stops: e
                                })
                            }))
                        }, t.onClick = function (e) {
                            var s = e.target;
                            s && s.classList.contains("tabs__tab") && t.setState((function (t) {
                                return {
                                    chip: !t.chip
                                }
                            }))
                        }, t
                    }
                    return Object(o.a)(s, [{
                        key: "componentDidMount",
                        value: function () {
                            this.onLoaded(3)
                        }
                    }, {
                        key: "render",
                        value: function () {
                            var t = this.state,
                                e = t.data,
                                s = t.chip;
                            return Object(n.jsxs)("div", {
                                className: "app",
                                children: [Object(n.jsx)(h.a, {
                                    children: Object(n.jsx)("img", {
                                        src: f,
                                        alt: "logo",
                                        className: "logo"
                                    })
                                }), Object(n.jsx)(h.a, {
                                    children: Object(n.jsxs)(p.a, {
                                        children: [Object(n.jsx)(b.a, {
                                            lg: {
                                                size: 3,
                                                offset: 1
                                            },
                                            children: Object(n.jsx)(d, {
                                                onChange: this.onChange
                                            })
                                        }), Object(n.jsxs)(b.a, {
                                            lg: {
                                                size: 7,
                                                offset: 0
                                            },
                                            children: [Object(n.jsx)(m, {
                                                onClick: this.onClick,
                                                chip: s
                                            }), Object(n.jsx)(D, {
                                                getData: e,
                                                chip: s
                                            })]
                                        })]
                                    })
                                })]
                            })
                        }
                    }]), s
                }(a.Component);
            s(30);
            r.a.render(Object(n.jsx)(i.a.StrictMode, {
                children: Object(n.jsx)(S, {})
            }), document.getElementById("root"))
        }
    },
    [
        [31, 1, 2]
    ]
]);
//# sourceMappingURL=main.38e7cbe5.chunk.js.map