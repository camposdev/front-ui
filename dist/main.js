import * as l from "react";
import _e, { useLayoutEffect as ps, useEffect as ms, useState as gs, forwardRef as vr, createElement as sn } from "react";
import * as br from "react-dom";
import hs from "react-dom";
var Ct = { exports: {} }, it = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wn;
function vs() {
  if (Wn) return it;
  Wn = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(r, o, s) {
    var i = null;
    if (s !== void 0 && (i = "" + s), o.key !== void 0 && (i = "" + o.key), "key" in o) {
      s = {};
      for (var a in o)
        a !== "key" && (s[a] = o[a]);
    } else s = o;
    return o = s.ref, {
      $$typeof: e,
      type: r,
      key: i,
      ref: o !== void 0 ? o : null,
      props: s
    };
  }
  return it.Fragment = t, it.jsx = n, it.jsxs = n, it;
}
var at = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bn;
function bs() {
  return Bn || (Bn = 1, process.env.NODE_ENV !== "production" && function() {
    function e(f) {
      if (f == null) return null;
      if (typeof f == "function")
        return f.$$typeof === k ? null : f.displayName || f.name || null;
      if (typeof f == "string") return f;
      switch (f) {
        case x:
          return "Fragment";
        case M:
          return "Portal";
        case I:
          return "Profiler";
        case A:
          return "StrictMode";
        case U:
          return "Suspense";
        case $:
          return "SuspenseList";
      }
      if (typeof f == "object")
        switch (typeof f.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), f.$$typeof) {
          case L:
            return (f.displayName || "Context") + ".Provider";
          case W:
            return (f._context.displayName || "Context") + ".Consumer";
          case V:
            var O = f.render;
            return f = f.displayName, f || (f = O.displayName || O.name || "", f = f !== "" ? "ForwardRef(" + f + ")" : "ForwardRef"), f;
          case D:
            return O = f.displayName || null, O !== null ? O : e(f.type) || "Memo";
          case K:
            O = f._payload, f = f._init;
            try {
              return e(f(O));
            } catch {
            }
        }
      return null;
    }
    function t(f) {
      return "" + f;
    }
    function n(f) {
      try {
        t(f);
        var O = !1;
      } catch {
        O = !0;
      }
      if (O) {
        O = console;
        var T = O.error, G = typeof Symbol == "function" && Symbol.toStringTag && f[Symbol.toStringTag] || f.constructor.name || "Object";
        return T.call(
          O,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          G
        ), t(f);
      }
    }
    function r() {
    }
    function o() {
      if (J === 0) {
        ue = console.log, se = console.info, Z = console.warn, Se = console.error, ne = console.group, Re = console.groupCollapsed, rt = console.groupEnd;
        var f = {
          configurable: !0,
          enumerable: !0,
          value: r,
          writable: !0
        };
        Object.defineProperties(console, {
          info: f,
          log: f,
          warn: f,
          error: f,
          group: f,
          groupCollapsed: f,
          groupEnd: f
        });
      }
      J++;
    }
    function s() {
      if (J--, J === 0) {
        var f = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: H({}, f, { value: ue }),
          info: H({}, f, { value: se }),
          warn: H({}, f, { value: Z }),
          error: H({}, f, { value: Se }),
          group: H({}, f, { value: ne }),
          groupCollapsed: H({}, f, { value: Re }),
          groupEnd: H({}, f, { value: rt })
        });
      }
      0 > J && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function i(f) {
      if (Be === void 0)
        try {
          throw Error();
        } catch (T) {
          var O = T.stack.trim().match(/\n( *(at )?)/);
          Be = O && O[1] || "", Me = -1 < T.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < T.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + Be + f + Me;
    }
    function a(f, O) {
      if (!f || Ge) return "";
      var T = ot.get(f);
      if (T !== void 0) return T;
      Ge = !0, T = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var G = null;
      G = R.H, R.H = null, o();
      try {
        var Q = {
          DetermineComponentFrameRoot: function() {
            try {
              if (O) {
                var Ae = function() {
                  throw Error();
                };
                if (Object.defineProperty(Ae.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(Ae, []);
                  } catch (xe) {
                    var Et = xe;
                  }
                  Reflect.construct(f, [], Ae);
                } else {
                  try {
                    Ae.call();
                  } catch (xe) {
                    Et = xe;
                  }
                  f.call(Ae.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (xe) {
                  Et = xe;
                }
                (Ae = f()) && typeof Ae.catch == "function" && Ae.catch(function() {
                });
              }
            } catch (xe) {
              if (xe && Et && typeof xe.stack == "string")
                return [xe.stack, Et.stack];
            }
            return [null, null];
          }
        };
        Q.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var X = Object.getOwnPropertyDescriptor(
          Q.DetermineComponentFrameRoot,
          "name"
        );
        X && X.configurable && Object.defineProperty(
          Q.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var j = Q.DetermineComponentFrameRoot(), ye = j[0], Ue = j[1];
        if (ye && Ue) {
          var re = ye.split(`
`), je = Ue.split(`
`);
          for (j = X = 0; X < re.length && !re[X].includes(
            "DetermineComponentFrameRoot"
          ); )
            X++;
          for (; j < je.length && !je[j].includes(
            "DetermineComponentFrameRoot"
          ); )
            j++;
          if (X === re.length || j === je.length)
            for (X = re.length - 1, j = je.length - 1; 1 <= X && 0 <= j && re[X] !== je[j]; )
              j--;
          for (; 1 <= X && 0 <= j; X--, j--)
            if (re[X] !== je[j]) {
              if (X !== 1 || j !== 1)
                do
                  if (X--, j--, 0 > j || re[X] !== je[j]) {
                    var st = `
` + re[X].replace(
                      " at new ",
                      " at "
                    );
                    return f.displayName && st.includes("<anonymous>") && (st = st.replace("<anonymous>", f.displayName)), typeof f == "function" && ot.set(f, st), st;
                  }
                while (1 <= X && 0 <= j);
              break;
            }
        }
      } finally {
        Ge = !1, R.H = G, s(), Error.prepareStackTrace = T;
      }
      return re = (re = f ? f.displayName || f.name : "") ? i(re) : "", typeof f == "function" && ot.set(f, re), re;
    }
    function u(f) {
      if (f == null) return "";
      if (typeof f == "function") {
        var O = f.prototype;
        return a(
          f,
          !(!O || !O.isReactComponent)
        );
      }
      if (typeof f == "string") return i(f);
      switch (f) {
        case U:
          return i("Suspense");
        case $:
          return i("SuspenseList");
      }
      if (typeof f == "object")
        switch (f.$$typeof) {
          case V:
            return f = a(f.render, !1), f;
          case D:
            return u(f.type);
          case K:
            O = f._payload, f = f._init;
            try {
              return u(f(O));
            } catch {
            }
        }
      return "";
    }
    function c() {
      var f = R.A;
      return f === null ? null : f.getOwner();
    }
    function p(f) {
      if (B.call(f, "key")) {
        var O = Object.getOwnPropertyDescriptor(f, "key").get;
        if (O && O.isReactWarning) return !1;
      }
      return f.key !== void 0;
    }
    function d(f, O) {
      function T() {
        yt || (yt = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          O
        ));
      }
      T.isReactWarning = !0, Object.defineProperty(f, "key", {
        get: T,
        configurable: !0
      });
    }
    function g() {
      var f = e(this.type);
      return xt[f] || (xt[f] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), f = this.props.ref, f !== void 0 ? f : null;
    }
    function v(f, O, T, G, Q, X) {
      return T = X.ref, f = {
        $$typeof: C,
        type: f,
        key: O,
        props: X,
        _owner: Q
      }, (T !== void 0 ? T : null) !== null ? Object.defineProperty(f, "ref", {
        enumerable: !1,
        get: g
      }) : Object.defineProperty(f, "ref", { enumerable: !1, value: null }), f._store = {}, Object.defineProperty(f._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(f, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(f.props), Object.freeze(f)), f;
    }
    function h(f, O, T, G, Q, X) {
      if (typeof f == "string" || typeof f == "function" || f === x || f === I || f === A || f === U || f === $ || f === N || typeof f == "object" && f !== null && (f.$$typeof === K || f.$$typeof === D || f.$$typeof === L || f.$$typeof === W || f.$$typeof === V || f.$$typeof === te || f.getModuleId !== void 0)) {
        var j = O.children;
        if (j !== void 0)
          if (G)
            if (le(j)) {
              for (G = 0; G < j.length; G++)
                m(j[G], f);
              Object.freeze && Object.freeze(j);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else m(j, f);
      } else
        j = "", (f === void 0 || typeof f == "object" && f !== null && Object.keys(f).length === 0) && (j += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), f === null ? G = "null" : le(f) ? G = "array" : f !== void 0 && f.$$typeof === C ? (G = "<" + (e(f.type) || "Unknown") + " />", j = " Did you accidentally export a JSX literal instead of a component?") : G = typeof f, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          G,
          j
        );
      if (B.call(O, "key")) {
        j = e(f);
        var ye = Object.keys(O).filter(function(re) {
          return re !== "key";
        });
        G = 0 < ye.length ? "{key: someKey, " + ye.join(": ..., ") + ": ...}" : "{key: someKey}", De[j + G] || (ye = 0 < ye.length ? "{" + ye.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          G,
          j,
          ye,
          j
        ), De[j + G] = !0);
      }
      if (j = null, T !== void 0 && (n(T), j = "" + T), p(O) && (n(O.key), j = "" + O.key), "key" in O) {
        T = {};
        for (var Ue in O)
          Ue !== "key" && (T[Ue] = O[Ue]);
      } else T = O;
      return j && d(
        T,
        typeof f == "function" ? f.displayName || f.name || "Unknown" : f
      ), v(f, j, X, Q, c(), T);
    }
    function m(f, O) {
      if (typeof f == "object" && f && f.$$typeof !== Yt) {
        if (le(f))
          for (var T = 0; T < f.length; T++) {
            var G = f[T];
            b(G) && w(G, O);
          }
        else if (b(f))
          f._store && (f._store.validated = 1);
        else if (f === null || typeof f != "object" ? T = null : (T = Y && f[Y] || f["@@iterator"], T = typeof T == "function" ? T : null), typeof T == "function" && T !== f.entries && (T = T.call(f), T !== f))
          for (; !(f = T.next()).done; )
            b(f.value) && w(f.value, O);
      }
    }
    function b(f) {
      return typeof f == "object" && f !== null && f.$$typeof === C;
    }
    function w(f, O) {
      if (f._store && !f._store.validated && f.key == null && (f._store.validated = 1, O = E(O), !zn[O])) {
        zn[O] = !0;
        var T = "";
        f && f._owner != null && f._owner !== c() && (T = null, typeof f._owner.tag == "number" ? T = e(f._owner.type) : typeof f._owner.name == "string" && (T = f._owner.name), T = " It was passed a child from " + T + ".");
        var G = R.getCurrentStack;
        R.getCurrentStack = function() {
          var Q = u(f.type);
          return G && (Q += G() || ""), Q;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          O,
          T
        ), R.getCurrentStack = G;
      }
    }
    function E(f) {
      var O = "", T = c();
      return T && (T = e(T.type)) && (O = `

Check the render method of \`` + T + "`."), O || (f = e(f)) && (O = `

Check the top-level render call using <` + f + ">."), O;
    }
    var S = _e, C = Symbol.for("react.transitional.element"), M = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), I = Symbol.for("react.profiler"), W = Symbol.for("react.consumer"), L = Symbol.for("react.context"), V = Symbol.for("react.forward_ref"), U = Symbol.for("react.suspense"), $ = Symbol.for("react.suspense_list"), D = Symbol.for("react.memo"), K = Symbol.for("react.lazy"), N = Symbol.for("react.offscreen"), Y = Symbol.iterator, k = Symbol.for("react.client.reference"), R = S.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = Object.prototype.hasOwnProperty, H = Object.assign, te = Symbol.for("react.client.reference"), le = Array.isArray, J = 0, ue, se, Z, Se, ne, Re, rt;
    r.__reactDisabledLog = !0;
    var Be, Me, Ge = !1, ot = new (typeof WeakMap == "function" ? WeakMap : Map)(), Yt = Symbol.for("react.client.reference"), yt, xt = {}, De = {}, zn = {};
    at.Fragment = x, at.jsx = function(f, O, T, G, Q) {
      return h(f, O, T, !1, G, Q);
    }, at.jsxs = function(f, O, T, G, Q) {
      return h(f, O, T, !0, G, Q);
    };
  }()), at;
}
var Gn;
function ws() {
  return Gn || (Gn = 1, process.env.NODE_ENV === "production" ? Ct.exports = vs() : Ct.exports = bs()), Ct.exports;
}
var y = ws();
function Un(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function zt(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const s = Un(o, t);
      return !n && typeof s == "function" && (n = !0), s;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const s = r[o];
          typeof s == "function" ? s() : Un(e[o], null);
        }
      };
  };
}
function ie(...e) {
  return l.useCallback(zt(...e), e);
}
var Ze = l.forwardRef((e, t) => {
  const { children: n, ...r } = e, o = l.Children.toArray(n), s = o.find(xs);
  if (s) {
    const i = s.props.children, a = o.map((u) => u === s ? l.Children.count(i) > 1 ? l.Children.only(null) : l.isValidElement(i) ? i.props.children : null : u);
    return /* @__PURE__ */ y.jsx(an, { ...r, ref: t, children: l.isValidElement(i) ? l.cloneElement(i, void 0, a) : null });
  }
  return /* @__PURE__ */ y.jsx(an, { ...r, ref: t, children: n });
});
Ze.displayName = "Slot";
var an = l.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  if (l.isValidElement(n)) {
    const o = Cs(n), s = Es(r, n.props);
    return n.type !== l.Fragment && (s.ref = t ? zt(t, o) : o), l.cloneElement(n, s);
  }
  return l.Children.count(n) > 1 ? l.Children.only(null) : null;
});
an.displayName = "SlotClone";
var ys = ({ children: e }) => /* @__PURE__ */ y.jsx(y.Fragment, { children: e });
function xs(e) {
  return l.isValidElement(e) && e.type === ys;
}
function Es(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], s = t[r];
    /^on[A-Z]/.test(r) ? o && s ? n[r] = (...a) => {
      s(...a), o(...a);
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...s } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Cs(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function wr(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = wr(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function yr() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = wr(e)) && (r && (r += " "), r += t);
  return r;
}
const Vn = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Kn = yr, Ss = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return Kn(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: s } = t, i = Object.keys(o).map((c) => {
    const p = n == null ? void 0 : n[c], d = s == null ? void 0 : s[c];
    if (p === null) return null;
    const g = Vn(p) || Vn(d);
    return o[c][g];
  }), a = n && Object.entries(n).reduce((c, p) => {
    let [d, g] = p;
    return g === void 0 || (c[d] = g), c;
  }, {}), u = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((c, p) => {
    let { class: d, className: g, ...v } = p;
    return Object.entries(v).every((h) => {
      let [m, b] = h;
      return Array.isArray(b) ? b.includes({
        ...s,
        ...a
      }[m]) : {
        ...s,
        ...a
      }[m] === b;
    }) ? [
      ...c,
      d,
      g
    ] : c;
  }, []);
  return Kn(e, i, u, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, bn = "-", Rs = (e) => {
  const t = As(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (i) => {
      const a = i.split(bn);
      return a[0] === "" && a.length !== 1 && a.shift(), xr(a, t) || Ms(i);
    },
    getConflictingClassGroupIds: (i, a) => {
      const u = n[i] || [];
      return a && r[i] ? [...u, ...r[i]] : u;
    }
  };
}, xr = (e, t) => {
  var i;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? xr(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const s = e.join(bn);
  return (i = t.validators.find(({
    validator: a
  }) => a(s))) == null ? void 0 : i.classGroupId;
}, Yn = /^\[(.+)\]$/, Ms = (e) => {
  if (Yn.test(e)) {
    const t = Yn.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, As = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const o in n)
    cn(n[o], r, o, t);
  return r;
}, cn = (e, t, n, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const s = o === "" ? t : Hn(t, o);
      s.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (Ps(o)) {
        cn(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([s, i]) => {
      cn(i, Hn(t, s), n, r);
    });
  });
}, Hn = (e, t) => {
  let n = e;
  return t.split(bn).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, Ps = (e) => e.isThemeGetter, _s = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  const o = (s, i) => {
    n.set(s, i), t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(s) {
      let i = n.get(s);
      if (i !== void 0)
        return i;
      if ((i = r.get(s)) !== void 0)
        return o(s, i), i;
    },
    set(s, i) {
      n.has(s) ? n.set(s, i) : o(s, i);
    }
  };
}, ln = "!", un = ":", Os = un.length, Ts = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: n
  } = e;
  let r = (o) => {
    const s = [];
    let i = 0, a = 0, u = 0, c;
    for (let h = 0; h < o.length; h++) {
      let m = o[h];
      if (i === 0 && a === 0) {
        if (m === un) {
          s.push(o.slice(u, h)), u = h + Os;
          continue;
        }
        if (m === "/") {
          c = h;
          continue;
        }
      }
      m === "[" ? i++ : m === "]" ? i-- : m === "(" ? a++ : m === ")" && a--;
    }
    const p = s.length === 0 ? o : o.substring(u), d = Ns(p), g = d !== p, v = c && c > u ? c - u : void 0;
    return {
      modifiers: s,
      hasImportantModifier: g,
      baseClassName: d,
      maybePostfixModifierPosition: v
    };
  };
  if (t) {
    const o = t + un, s = r;
    r = (i) => i.startsWith(o) ? s(i.substring(o.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: i,
      maybePostfixModifierPosition: void 0
    };
  }
  if (n) {
    const o = r;
    r = (s) => n({
      className: s,
      parseClassName: o
    });
  }
  return r;
}, Ns = (e) => e.endsWith(ln) ? e.substring(0, e.length - 1) : e.startsWith(ln) ? e.substring(1) : e, ks = (e) => {
  const t = Object.fromEntries(e.orderSensitiveModifiers.map((r) => [r, !0]));
  return (r) => {
    if (r.length <= 1)
      return r;
    const o = [];
    let s = [];
    return r.forEach((i) => {
      i[0] === "[" || t[i] ? (o.push(...s.sort(), i), s = []) : s.push(i);
    }), o.push(...s.sort()), o;
  };
}, Is = (e) => ({
  cache: _s(e.cacheSize),
  parseClassName: Ts(e),
  sortModifiers: ks(e),
  ...Rs(e)
}), Ds = /\s+/, js = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o,
    sortModifiers: s
  } = t, i = [], a = e.trim().split(Ds);
  let u = "";
  for (let c = a.length - 1; c >= 0; c -= 1) {
    const p = a[c], {
      isExternal: d,
      modifiers: g,
      hasImportantModifier: v,
      baseClassName: h,
      maybePostfixModifierPosition: m
    } = n(p);
    if (d) {
      u = p + (u.length > 0 ? " " + u : u);
      continue;
    }
    let b = !!m, w = r(b ? h.substring(0, m) : h);
    if (!w) {
      if (!b) {
        u = p + (u.length > 0 ? " " + u : u);
        continue;
      }
      if (w = r(h), !w) {
        u = p + (u.length > 0 ? " " + u : u);
        continue;
      }
      b = !1;
    }
    const E = s(g).join(":"), S = v ? E + ln : E, C = S + w;
    if (i.includes(C))
      continue;
    i.push(C);
    const M = o(w, b);
    for (let x = 0; x < M.length; ++x) {
      const A = M[x];
      i.push(S + A);
    }
    u = p + (u.length > 0 ? " " + u : u);
  }
  return u;
};
function Ls() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Er(t)) && (r && (r += " "), r += n);
  return r;
}
const Er = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Er(e[r])) && (n && (n += " "), n += t);
  return n;
};
function Fs(e, ...t) {
  let n, r, o, s = i;
  function i(u) {
    const c = t.reduce((p, d) => d(p), e());
    return n = Is(c), r = n.cache.get, o = n.cache.set, s = a, a(u);
  }
  function a(u) {
    const c = r(u);
    if (c)
      return c;
    const p = js(u, n);
    return o(u, p), p;
  }
  return function() {
    return s(Ls.apply(null, arguments));
  };
}
const q = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, Cr = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Sr = /^\((?:(\w[\w-]*):)?(.+)\)$/i, $s = /^\d+\/\d+$/, zs = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ws = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Bs = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Gs = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Us = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ve = (e) => $s.test(e), F = (e) => !!e && !Number.isNaN(Number(e)), Le = (e) => !!e && Number.isInteger(Number(e)), Xn = (e) => e.endsWith("%") && F(e.slice(0, -1)), Pe = (e) => zs.test(e), Vs = () => !0, Ks = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Ws.test(e) && !Bs.test(e)
), wn = () => !1, Ys = (e) => Gs.test(e), Hs = (e) => Us.test(e), Xs = (e) => !P(e) && !_(e), qs = (e) => Qe(e, Ar, wn), P = (e) => Cr.test(e), Fe = (e) => Qe(e, Pr, Ks), Ht = (e) => Qe(e, ai, F), Zs = (e) => Qe(e, Rr, wn), Js = (e) => Qe(e, Mr, Hs), Qs = (e) => Qe(e, wn, Ys), _ = (e) => Sr.test(e), St = (e) => et(e, Pr), ei = (e) => et(e, ci), ti = (e) => et(e, Rr), ni = (e) => et(e, Ar), ri = (e) => et(e, Mr), oi = (e) => et(e, li, !0), Qe = (e, t, n) => {
  const r = Cr.exec(e);
  return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, et = (e, t, n = !1) => {
  const r = Sr.exec(e);
  return r ? r[1] ? t(r[1]) : n : !1;
}, Rr = (e) => e === "position", si = /* @__PURE__ */ new Set(["image", "url"]), Mr = (e) => si.has(e), ii = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Ar = (e) => ii.has(e), Pr = (e) => e === "length", ai = (e) => e === "number", ci = (e) => e === "family-name", li = (e) => e === "shadow", ui = () => {
  const e = q("color"), t = q("font"), n = q("text"), r = q("font-weight"), o = q("tracking"), s = q("leading"), i = q("breakpoint"), a = q("container"), u = q("spacing"), c = q("radius"), p = q("shadow"), d = q("inset-shadow"), g = q("drop-shadow"), v = q("blur"), h = q("perspective"), m = q("aspect"), b = q("ease"), w = q("animate"), E = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], S = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], C = () => ["auto", "hidden", "clip", "visible", "scroll"], M = () => ["auto", "contain", "none"], x = () => [_, P, u], A = () => [Ve, "full", "auto", ...x()], I = () => [Le, "none", "subgrid", _, P], W = () => ["auto", {
    span: ["full", Le, _, P]
  }, _, P], L = () => [Le, "auto", _, P], V = () => ["auto", "min", "max", "fr", _, P], U = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline"], $ = () => ["start", "end", "center", "stretch"], D = () => ["auto", ...x()], K = () => [Ve, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...x()], N = () => [e, _, P], Y = () => [Xn, Fe], k = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    c,
    _,
    P
  ], R = () => ["", F, St, Fe], B = () => ["solid", "dashed", "dotted", "double"], H = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], te = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    v,
    _,
    P
  ], le = () => ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", _, P], J = () => ["none", F, _, P], ue = () => ["none", F, _, P], se = () => [F, _, P], Z = () => [Ve, "full", ...x()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Pe],
      breakpoint: [Pe],
      color: [Vs],
      container: [Pe],
      "drop-shadow": [Pe],
      ease: ["in", "out", "in-out"],
      font: [Xs],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Pe],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Pe],
      shadow: [Pe],
      spacing: ["px", F],
      text: [Pe],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", Ve, P, _, m]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [F, P, _, a]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": E()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": E()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...S(), P, _]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: C()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": C()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": C()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: M()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": M()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": M()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: A()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": A()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": A()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: A()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: A()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: A()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: A()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: A()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: A()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [Le, "auto", _, P]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Ve, "full", "auto", a, ...x()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [F, Ve, "auto", "initial", "none", P]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", F, _, P]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", F, _, P]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Le, "first", "last", "none", _, P]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": I()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: W()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": L()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": L()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": I()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: W()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": L()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": L()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": V()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": V()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: x()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": x()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": x()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...U(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...$(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...$()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...U()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...$(), "baseline"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...$(), "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": U()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...$(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...$()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: x()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: x()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: x()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: x()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: x()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: x()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: x()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: x()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: x()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: D()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: D()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: D()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: D()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: D()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: D()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: D()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: D()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: D()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": x()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": x()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: K()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [a, "screen", ...K()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          a,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...K()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          a,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [i]
          },
          ...K()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", ...K()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "none", ...K()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", ...K()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", n, St, Fe]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [r, _, Ht]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Xn, P]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ei, P, t]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [o, _, P]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [F, "none", _, Ht]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          s,
          ...x()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", _, P]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", _, P]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: N()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: N()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...B(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [F, "from-font", "auto", _, Fe]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: N()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [F, "auto", _, P]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: x()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", _, P]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", _, P]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...S(), ti, Zs]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "space", "round"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", ni, qs]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Le, _, P],
          radial: ["", _, P],
          conic: [Le, _, P]
        }, ri, Js]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: N()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: Y()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: Y()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: Y()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: N()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: N()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: N()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: k()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": k()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": k()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": k()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": k()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": k()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": k()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": k()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": k()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": k()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": k()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": k()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": k()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": k()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": k()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: R()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": R()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": R()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": R()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": R()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": R()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": R()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": R()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": R()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": R()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": R()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...B(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...B(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: N()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": N()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": N()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": N()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": N()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": N()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": N()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": N()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": N()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: N()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...B(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [F, _, P]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", F, St, Fe]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          p,
          oi,
          Qs
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: N()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", _, P, d]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": N()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: R()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: N()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [F, Fe]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": N()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": R()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": N()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [F, _, P]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...H(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": H()
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          _,
          P
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: te()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [F, _, P]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [F, _, P]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          g,
          _,
          P
        ]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", F, _, P]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [F, _, P]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", F, _, P]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [F, _, P]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", F, _, P]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          _,
          P
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": te()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [F, _, P]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [F, _, P]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", F, _, P]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [F, _, P]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", F, _, P]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [F, _, P]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [F, _, P]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", F, _, P]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": x()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": x()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": x()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", _, P]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [F, "initial", _, P]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", b, _, P]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [F, _, P]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", w, _, P]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [h, _, P]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": le()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: J()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": J()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": J()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": J()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: ue()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": ue()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": ue()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": ue()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: se()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": se()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": se()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [_, P, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: le()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: Z()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": Z()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": Z()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": Z()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: N()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: N()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", _, P]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": x()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": x()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": x()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": x()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": x()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": x()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": x()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": x()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": x()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": x()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": x()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": x()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": x()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": x()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": x()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": x()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": x()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": x()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", _, P]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...N()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [F, St, Fe, Ht]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...N()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
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
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
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
    orderSensitiveModifiers: ["before", "after", "placeholder", "file", "marker", "selection", "first-line", "first-letter", "backdrop", "*", "**"]
  };
}, di = /* @__PURE__ */ Fs(ui);
function be(...e) {
  return di(yr(e));
}
const fi = Ss(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
        outline: "border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function yu({
  className: e,
  variant: t,
  size: n,
  asChild: r = !1,
  ...o
}) {
  const s = r ? Ze : "button";
  return /* @__PURE__ */ y.jsx(
    s,
    {
      "data-slot": "button",
      className: be(fi({ variant: t, size: n, className: e })),
      ...o
    }
  );
}
function z(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function mt(e, t = []) {
  let n = [];
  function r(s, i) {
    const a = l.createContext(i), u = n.length;
    n = [...n, i];
    const c = (d) => {
      var w;
      const { scope: g, children: v, ...h } = d, m = ((w = g == null ? void 0 : g[e]) == null ? void 0 : w[u]) || a, b = l.useMemo(() => h, Object.values(h));
      return /* @__PURE__ */ y.jsx(m.Provider, { value: b, children: v });
    };
    c.displayName = s + "Provider";
    function p(d, g) {
      var m;
      const v = ((m = g == null ? void 0 : g[e]) == null ? void 0 : m[u]) || a, h = l.useContext(v);
      if (h) return h;
      if (i !== void 0) return i;
      throw new Error(`\`${d}\` must be used within \`${s}\``);
    }
    return [c, p];
  }
  const o = () => {
    const s = n.map((i) => l.createContext(i));
    return function(a) {
      const u = (a == null ? void 0 : a[e]) || s;
      return l.useMemo(
        () => ({ [`__scope${e}`]: { ...a, [e]: u } }),
        [a, u]
      );
    };
  };
  return o.scopeName = e, [r, pi(o, ...t)];
}
function pi(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(s) {
      const i = r.reduce((a, { useScope: u, scopeName: c }) => {
        const d = u(s)[`__scope${c}`];
        return { ...a, ...d };
      }, {});
      return l.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function fe(e) {
  const t = l.useRef(e);
  return l.useEffect(() => {
    t.current = e;
  }), l.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function yn({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  }
}) {
  const [r, o] = mi({ defaultProp: t, onChange: n }), s = e !== void 0, i = s ? e : r, a = fe(n), u = l.useCallback(
    (c) => {
      if (s) {
        const d = typeof c == "function" ? c(e) : c;
        d !== e && a(d);
      } else
        o(c);
    },
    [s, e, o, a]
  );
  return [i, u];
}
function mi({
  defaultProp: e,
  onChange: t
}) {
  const n = l.useState(e), [r] = n, o = l.useRef(r), s = fe(t);
  return l.useEffect(() => {
    o.current !== r && (s(r), o.current = r);
  }, [r, o, s]), n;
}
var gi = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], oe = gi.reduce((e, t) => {
  const n = l.forwardRef((r, o) => {
    const { asChild: s, ...i } = r, a = s ? Ze : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ y.jsx(a, { ...i, ref: o });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {});
function _r(e, t) {
  e && br.flushSync(() => e.dispatchEvent(t));
}
function Or(e) {
  const t = e + "CollectionProvider", [n, r] = mt(t), [o, s] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), i = (v) => {
    const { scope: h, children: m } = v, b = _e.useRef(null), w = _e.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ y.jsx(o, { scope: h, itemMap: w, collectionRef: b, children: m });
  };
  i.displayName = t;
  const a = e + "CollectionSlot", u = _e.forwardRef(
    (v, h) => {
      const { scope: m, children: b } = v, w = s(a, m), E = ie(h, w.collectionRef);
      return /* @__PURE__ */ y.jsx(Ze, { ref: E, children: b });
    }
  );
  u.displayName = a;
  const c = e + "CollectionItemSlot", p = "data-radix-collection-item", d = _e.forwardRef(
    (v, h) => {
      const { scope: m, children: b, ...w } = v, E = _e.useRef(null), S = ie(h, E), C = s(c, m);
      return _e.useEffect(() => (C.itemMap.set(E, { ref: E, ...w }), () => void C.itemMap.delete(E))), /* @__PURE__ */ y.jsx(Ze, { [p]: "", ref: S, children: b });
    }
  );
  d.displayName = c;
  function g(v) {
    const h = s(e + "CollectionConsumer", v);
    return _e.useCallback(() => {
      const b = h.collectionRef.current;
      if (!b) return [];
      const w = Array.from(b.querySelectorAll(`[${p}]`));
      return Array.from(h.itemMap.values()).sort(
        (C, M) => w.indexOf(C.ref.current) - w.indexOf(M.ref.current)
      );
    }, [h.collectionRef, h.itemMap]);
  }
  return [
    { Provider: i, Slot: u, ItemSlot: d },
    g,
    r
  ];
}
var hi = l.createContext(void 0);
function Tr(e) {
  const t = l.useContext(hi);
  return e || t || "ltr";
}
function vi(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = fe(e);
  l.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var bi = "DismissableLayer", dn = "dismissableLayer.update", wi = "dismissableLayer.pointerDownOutside", yi = "dismissableLayer.focusOutside", qn, Nr = l.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), kr = l.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: s,
      onInteractOutside: i,
      onDismiss: a,
      ...u
    } = e, c = l.useContext(Nr), [p, d] = l.useState(null), g = (p == null ? void 0 : p.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, v] = l.useState({}), h = ie(t, (A) => d(A)), m = Array.from(c.layers), [b] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), w = m.indexOf(b), E = p ? m.indexOf(p) : -1, S = c.layersWithOutsidePointerEventsDisabled.size > 0, C = E >= w, M = Ci((A) => {
      const I = A.target, W = [...c.branches].some((L) => L.contains(I));
      !C || W || (o == null || o(A), i == null || i(A), A.defaultPrevented || a == null || a());
    }, g), x = Si((A) => {
      const I = A.target;
      [...c.branches].some((L) => L.contains(I)) || (s == null || s(A), i == null || i(A), A.defaultPrevented || a == null || a());
    }, g);
    return vi((A) => {
      E === c.layers.size - 1 && (r == null || r(A), !A.defaultPrevented && a && (A.preventDefault(), a()));
    }, g), l.useEffect(() => {
      if (p)
        return n && (c.layersWithOutsidePointerEventsDisabled.size === 0 && (qn = g.body.style.pointerEvents, g.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(p)), c.layers.add(p), Zn(), () => {
          n && c.layersWithOutsidePointerEventsDisabled.size === 1 && (g.body.style.pointerEvents = qn);
        };
    }, [p, g, n, c]), l.useEffect(() => () => {
      p && (c.layers.delete(p), c.layersWithOutsidePointerEventsDisabled.delete(p), Zn());
    }, [p, c]), l.useEffect(() => {
      const A = () => v({});
      return document.addEventListener(dn, A), () => document.removeEventListener(dn, A);
    }, []), /* @__PURE__ */ y.jsx(
      oe.div,
      {
        ...u,
        ref: h,
        style: {
          pointerEvents: S ? C ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: z(e.onFocusCapture, x.onFocusCapture),
        onBlurCapture: z(e.onBlurCapture, x.onBlurCapture),
        onPointerDownCapture: z(
          e.onPointerDownCapture,
          M.onPointerDownCapture
        )
      }
    );
  }
);
kr.displayName = bi;
var xi = "DismissableLayerBranch", Ei = l.forwardRef((e, t) => {
  const n = l.useContext(Nr), r = l.useRef(null), o = ie(t, r);
  return l.useEffect(() => {
    const s = r.current;
    if (s)
      return n.branches.add(s), () => {
        n.branches.delete(s);
      };
  }, [n.branches]), /* @__PURE__ */ y.jsx(oe.div, { ...e, ref: o });
});
Ei.displayName = xi;
function Ci(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = fe(e), r = l.useRef(!1), o = l.useRef(() => {
  });
  return l.useEffect(() => {
    const s = (a) => {
      if (a.target && !r.current) {
        let u = function() {
          Ir(
            wi,
            n,
            c,
            { discrete: !0 }
          );
        };
        const c = { originalEvent: a };
        a.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = u, t.addEventListener("click", o.current, { once: !0 })) : u();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, i = window.setTimeout(() => {
      t.addEventListener("pointerdown", s);
    }, 0);
    return () => {
      window.clearTimeout(i), t.removeEventListener("pointerdown", s), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function Si(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = fe(e), r = l.useRef(!1);
  return l.useEffect(() => {
    const o = (s) => {
      s.target && !r.current && Ir(yi, n, { originalEvent: s }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Zn() {
  const e = new CustomEvent(dn);
  document.dispatchEvent(e);
}
function Ir(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? _r(o, s) : o.dispatchEvent(s);
}
var Xt = 0;
function Ri() {
  l.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Jn()), document.body.insertAdjacentElement("beforeend", e[1] ?? Jn()), Xt++, () => {
      Xt === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Xt--;
    };
  }, []);
}
function Jn() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var qt = "focusScope.autoFocusOnMount", Zt = "focusScope.autoFocusOnUnmount", Qn = { bubbles: !1, cancelable: !0 }, Mi = "FocusScope", Dr = l.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: s,
    ...i
  } = e, [a, u] = l.useState(null), c = fe(o), p = fe(s), d = l.useRef(null), g = ie(t, (m) => u(m)), v = l.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  l.useEffect(() => {
    if (r) {
      let m = function(S) {
        if (v.paused || !a) return;
        const C = S.target;
        a.contains(C) ? d.current = C : Oe(d.current, { select: !0 });
      }, b = function(S) {
        if (v.paused || !a) return;
        const C = S.relatedTarget;
        C !== null && (a.contains(C) || Oe(d.current, { select: !0 }));
      }, w = function(S) {
        if (document.activeElement === document.body)
          for (const M of S)
            M.removedNodes.length > 0 && Oe(a);
      };
      document.addEventListener("focusin", m), document.addEventListener("focusout", b);
      const E = new MutationObserver(w);
      return a && E.observe(a, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", m), document.removeEventListener("focusout", b), E.disconnect();
      };
    }
  }, [r, a, v.paused]), l.useEffect(() => {
    if (a) {
      tr.add(v);
      const m = document.activeElement;
      if (!a.contains(m)) {
        const w = new CustomEvent(qt, Qn);
        a.addEventListener(qt, c), a.dispatchEvent(w), w.defaultPrevented || (Ai(Ni(jr(a)), { select: !0 }), document.activeElement === m && Oe(a));
      }
      return () => {
        a.removeEventListener(qt, c), setTimeout(() => {
          const w = new CustomEvent(Zt, Qn);
          a.addEventListener(Zt, p), a.dispatchEvent(w), w.defaultPrevented || Oe(m ?? document.body, { select: !0 }), a.removeEventListener(Zt, p), tr.remove(v);
        }, 0);
      };
    }
  }, [a, c, p, v]);
  const h = l.useCallback(
    (m) => {
      if (!n && !r || v.paused) return;
      const b = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey, w = document.activeElement;
      if (b && w) {
        const E = m.currentTarget, [S, C] = Pi(E);
        S && C ? !m.shiftKey && w === C ? (m.preventDefault(), n && Oe(S, { select: !0 })) : m.shiftKey && w === S && (m.preventDefault(), n && Oe(C, { select: !0 })) : w === E && m.preventDefault();
      }
    },
    [n, r, v.paused]
  );
  return /* @__PURE__ */ y.jsx(oe.div, { tabIndex: -1, ...i, ref: g, onKeyDown: h });
});
Dr.displayName = Mi;
function Ai(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Oe(r, { select: t }), document.activeElement !== n) return;
}
function Pi(e) {
  const t = jr(e), n = er(t, e), r = er(t.reverse(), e);
  return [n, r];
}
function jr(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function er(e, t) {
  for (const n of e)
    if (!_i(n, { upTo: t })) return n;
}
function _i(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Oi(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Oe(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Oi(e) && t && e.select();
  }
}
var tr = Ti();
function Ti() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = nr(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = nr(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function nr(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Ni(e) {
  return e.filter((t) => t.tagName !== "A");
}
var $e = globalThis != null && globalThis.document ? l.useLayoutEffect : () => {
}, ki = l.useId || (() => {
}), Ii = 0;
function lt(e) {
  const [t, n] = l.useState(ki());
  return $e(() => {
    n((r) => r ?? String(Ii++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
const Di = ["top", "right", "bottom", "left"], Te = Math.min, ae = Math.max, It = Math.round, Rt = Math.floor, he = (e) => ({
  x: e,
  y: e
}), ji = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Li = {
  start: "end",
  end: "start"
};
function fn(e, t, n) {
  return ae(e, Te(t, n));
}
function Ee(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ce(e) {
  return e.split("-")[0];
}
function tt(e) {
  return e.split("-")[1];
}
function xn(e) {
  return e === "x" ? "y" : "x";
}
function En(e) {
  return e === "y" ? "height" : "width";
}
function Ne(e) {
  return ["top", "bottom"].includes(Ce(e)) ? "y" : "x";
}
function Cn(e) {
  return xn(Ne(e));
}
function Fi(e, t, n) {
  n === void 0 && (n = !1);
  const r = tt(e), o = Cn(e), s = En(o);
  let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (i = Dt(i)), [i, Dt(i)];
}
function $i(e) {
  const t = Dt(e);
  return [pn(e), t, pn(t)];
}
function pn(e) {
  return e.replace(/start|end/g, (t) => Li[t]);
}
function zi(e, t, n) {
  const r = ["left", "right"], o = ["right", "left"], s = ["top", "bottom"], i = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
      return t ? s : i;
    default:
      return [];
  }
}
function Wi(e, t, n, r) {
  const o = tt(e);
  let s = zi(Ce(e), n === "start", r);
  return o && (s = s.map((i) => i + "-" + o), t && (s = s.concat(s.map(pn)))), s;
}
function Dt(e) {
  return e.replace(/left|right|bottom|top/g, (t) => ji[t]);
}
function Bi(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Lr(e) {
  return typeof e != "number" ? Bi(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function jt(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n
  };
}
function rr(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const s = Ne(t), i = Cn(t), a = En(i), u = Ce(t), c = s === "y", p = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, g = r[a] / 2 - o[a] / 2;
  let v;
  switch (u) {
    case "top":
      v = {
        x: p,
        y: r.y - o.height
      };
      break;
    case "bottom":
      v = {
        x: p,
        y: r.y + r.height
      };
      break;
    case "right":
      v = {
        x: r.x + r.width,
        y: d
      };
      break;
    case "left":
      v = {
        x: r.x - o.width,
        y: d
      };
      break;
    default:
      v = {
        x: r.x,
        y: r.y
      };
  }
  switch (tt(t)) {
    case "start":
      v[i] -= g * (n && c ? -1 : 1);
      break;
    case "end":
      v[i] += g * (n && c ? -1 : 1);
      break;
  }
  return v;
}
const Gi = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: s = [],
    platform: i
  } = n, a = s.filter(Boolean), u = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let c = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: p,
    y: d
  } = rr(c, r, u), g = r, v = {}, h = 0;
  for (let m = 0; m < a.length; m++) {
    const {
      name: b,
      fn: w
    } = a[m], {
      x: E,
      y: S,
      data: C,
      reset: M
    } = await w({
      x: p,
      y: d,
      initialPlacement: r,
      placement: g,
      strategy: o,
      middlewareData: v,
      rects: c,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    p = E ?? p, d = S ?? d, v = {
      ...v,
      [b]: {
        ...v[b],
        ...C
      }
    }, M && h <= 50 && (h++, typeof M == "object" && (M.placement && (g = M.placement), M.rects && (c = M.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : M.rects), {
      x: p,
      y: d
    } = rr(c, g, u)), m = -1);
  }
  return {
    x: p,
    y: d,
    placement: g,
    strategy: o,
    middlewareData: v
  };
};
async function ut(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: s,
    rects: i,
    elements: a,
    strategy: u
  } = e, {
    boundary: c = "clippingAncestors",
    rootBoundary: p = "viewport",
    elementContext: d = "floating",
    altBoundary: g = !1,
    padding: v = 0
  } = Ee(t, e), h = Lr(v), b = a[g ? d === "floating" ? "reference" : "floating" : d], w = jt(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(b))) == null || n ? b : b.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: p,
    strategy: u
  })), E = d === "floating" ? {
    x: r,
    y: o,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, S = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a.floating)), C = await (s.isElement == null ? void 0 : s.isElement(S)) ? await (s.getScale == null ? void 0 : s.getScale(S)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, M = jt(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: E,
    offsetParent: S,
    strategy: u
  }) : E);
  return {
    top: (w.top - M.top + h.top) / C.y,
    bottom: (M.bottom - w.bottom + h.bottom) / C.y,
    left: (w.left - M.left + h.left) / C.x,
    right: (M.right - w.right + h.right) / C.x
  };
}
const Ui = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: s,
      platform: i,
      elements: a,
      middlewareData: u
    } = t, {
      element: c,
      padding: p = 0
    } = Ee(e, t) || {};
    if (c == null)
      return {};
    const d = Lr(p), g = {
      x: n,
      y: r
    }, v = Cn(o), h = En(v), m = await i.getDimensions(c), b = v === "y", w = b ? "top" : "left", E = b ? "bottom" : "right", S = b ? "clientHeight" : "clientWidth", C = s.reference[h] + s.reference[v] - g[v] - s.floating[h], M = g[v] - s.reference[v], x = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(c));
    let A = x ? x[S] : 0;
    (!A || !await (i.isElement == null ? void 0 : i.isElement(x))) && (A = a.floating[S] || s.floating[h]);
    const I = C / 2 - M / 2, W = A / 2 - m[h] / 2 - 1, L = Te(d[w], W), V = Te(d[E], W), U = L, $ = A - m[h] - V, D = A / 2 - m[h] / 2 + I, K = fn(U, D, $), N = !u.arrow && tt(o) != null && D !== K && s.reference[h] / 2 - (D < U ? L : V) - m[h] / 2 < 0, Y = N ? D < U ? D - U : D - $ : 0;
    return {
      [v]: g[v] + Y,
      data: {
        [v]: K,
        centerOffset: D - K - Y,
        ...N && {
          alignmentOffset: Y
        }
      },
      reset: N
    };
  }
}), Vi = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: s,
        rects: i,
        initialPlacement: a,
        platform: u,
        elements: c
      } = t, {
        mainAxis: p = !0,
        crossAxis: d = !0,
        fallbackPlacements: g,
        fallbackStrategy: v = "bestFit",
        fallbackAxisSideDirection: h = "none",
        flipAlignment: m = !0,
        ...b
      } = Ee(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const w = Ce(o), E = Ne(a), S = Ce(a) === a, C = await (u.isRTL == null ? void 0 : u.isRTL(c.floating)), M = g || (S || !m ? [Dt(a)] : $i(a)), x = h !== "none";
      !g && x && M.push(...Wi(a, m, h, C));
      const A = [a, ...M], I = await ut(t, b), W = [];
      let L = ((r = s.flip) == null ? void 0 : r.overflows) || [];
      if (p && W.push(I[w]), d) {
        const D = Fi(o, i, C);
        W.push(I[D[0]], I[D[1]]);
      }
      if (L = [...L, {
        placement: o,
        overflows: W
      }], !W.every((D) => D <= 0)) {
        var V, U;
        const D = (((V = s.flip) == null ? void 0 : V.index) || 0) + 1, K = A[D];
        if (K)
          return {
            data: {
              index: D,
              overflows: L
            },
            reset: {
              placement: K
            }
          };
        let N = (U = L.filter((Y) => Y.overflows[0] <= 0).sort((Y, k) => Y.overflows[1] - k.overflows[1])[0]) == null ? void 0 : U.placement;
        if (!N)
          switch (v) {
            case "bestFit": {
              var $;
              const Y = ($ = L.filter((k) => {
                if (x) {
                  const R = Ne(k.placement);
                  return R === E || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  R === "y";
                }
                return !0;
              }).map((k) => [k.placement, k.overflows.filter((R) => R > 0).reduce((R, B) => R + B, 0)]).sort((k, R) => k[1] - R[1])[0]) == null ? void 0 : $[0];
              Y && (N = Y);
              break;
            }
            case "initialPlacement":
              N = a;
              break;
          }
        if (o !== N)
          return {
            reset: {
              placement: N
            }
          };
      }
      return {};
    }
  };
};
function or(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function sr(e) {
  return Di.some((t) => e[t] >= 0);
}
const Ki = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = Ee(e, t);
      switch (r) {
        case "referenceHidden": {
          const s = await ut(t, {
            ...o,
            elementContext: "reference"
          }), i = or(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: sr(i)
            }
          };
        }
        case "escaped": {
          const s = await ut(t, {
            ...o,
            altBoundary: !0
          }), i = or(s, n.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: sr(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function Yi(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = Ce(n), a = tt(n), u = Ne(n) === "y", c = ["left", "top"].includes(i) ? -1 : 1, p = s && u ? -1 : 1, d = Ee(t, e);
  let {
    mainAxis: g,
    crossAxis: v,
    alignmentAxis: h
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return a && typeof h == "number" && (v = a === "end" ? h * -1 : h), u ? {
    x: v * p,
    y: g * c
  } : {
    x: g * c,
    y: v * p
  };
}
const Hi = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: s,
        placement: i,
        middlewareData: a
      } = t, u = await Yi(t, e);
      return i === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
        x: o + u.x,
        y: s + u.y,
        data: {
          ...u,
          placement: i
        }
      };
    }
  };
}, Xi = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: s = !0,
        crossAxis: i = !1,
        limiter: a = {
          fn: (b) => {
            let {
              x: w,
              y: E
            } = b;
            return {
              x: w,
              y: E
            };
          }
        },
        ...u
      } = Ee(e, t), c = {
        x: n,
        y: r
      }, p = await ut(t, u), d = Ne(Ce(o)), g = xn(d);
      let v = c[g], h = c[d];
      if (s) {
        const b = g === "y" ? "top" : "left", w = g === "y" ? "bottom" : "right", E = v + p[b], S = v - p[w];
        v = fn(E, v, S);
      }
      if (i) {
        const b = d === "y" ? "top" : "left", w = d === "y" ? "bottom" : "right", E = h + p[b], S = h - p[w];
        h = fn(E, h, S);
      }
      const m = a.fn({
        ...t,
        [g]: v,
        [d]: h
      });
      return {
        ...m,
        data: {
          x: m.x - n,
          y: m.y - r,
          enabled: {
            [g]: s,
            [d]: i
          }
        }
      };
    }
  };
}, qi = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: s,
        middlewareData: i
      } = t, {
        offset: a = 0,
        mainAxis: u = !0,
        crossAxis: c = !0
      } = Ee(e, t), p = {
        x: n,
        y: r
      }, d = Ne(o), g = xn(d);
      let v = p[g], h = p[d];
      const m = Ee(a, t), b = typeof m == "number" ? {
        mainAxis: m,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...m
      };
      if (u) {
        const S = g === "y" ? "height" : "width", C = s.reference[g] - s.floating[S] + b.mainAxis, M = s.reference[g] + s.reference[S] - b.mainAxis;
        v < C ? v = C : v > M && (v = M);
      }
      if (c) {
        var w, E;
        const S = g === "y" ? "width" : "height", C = ["top", "left"].includes(Ce(o)), M = s.reference[d] - s.floating[S] + (C && ((w = i.offset) == null ? void 0 : w[d]) || 0) + (C ? 0 : b.crossAxis), x = s.reference[d] + s.reference[S] + (C ? 0 : ((E = i.offset) == null ? void 0 : E[d]) || 0) - (C ? b.crossAxis : 0);
        h < M ? h = M : h > x && (h = x);
      }
      return {
        [g]: v,
        [d]: h
      };
    }
  };
}, Zi = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        rects: s,
        platform: i,
        elements: a
      } = t, {
        apply: u = () => {
        },
        ...c
      } = Ee(e, t), p = await ut(t, c), d = Ce(o), g = tt(o), v = Ne(o) === "y", {
        width: h,
        height: m
      } = s.floating;
      let b, w;
      d === "top" || d === "bottom" ? (b = d, w = g === (await (i.isRTL == null ? void 0 : i.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (w = d, b = g === "end" ? "top" : "bottom");
      const E = m - p.top - p.bottom, S = h - p.left - p.right, C = Te(m - p[b], E), M = Te(h - p[w], S), x = !t.middlewareData.shift;
      let A = C, I = M;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (I = S), (r = t.middlewareData.shift) != null && r.enabled.y && (A = E), x && !g) {
        const L = ae(p.left, 0), V = ae(p.right, 0), U = ae(p.top, 0), $ = ae(p.bottom, 0);
        v ? I = h - 2 * (L !== 0 || V !== 0 ? L + V : ae(p.left, p.right)) : A = m - 2 * (U !== 0 || $ !== 0 ? U + $ : ae(p.top, p.bottom));
      }
      await u({
        ...t,
        availableWidth: I,
        availableHeight: A
      });
      const W = await i.getDimensions(a.floating);
      return h !== W.width || m !== W.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Wt() {
  return typeof window < "u";
}
function nt(e) {
  return Fr(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ce(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function we(e) {
  var t;
  return (t = (Fr(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Fr(e) {
  return Wt() ? e instanceof Node || e instanceof ce(e).Node : !1;
}
function pe(e) {
  return Wt() ? e instanceof Element || e instanceof ce(e).Element : !1;
}
function ve(e) {
  return Wt() ? e instanceof HTMLElement || e instanceof ce(e).HTMLElement : !1;
}
function ir(e) {
  return !Wt() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof ce(e).ShadowRoot;
}
function gt(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = me(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function Ji(e) {
  return ["table", "td", "th"].includes(nt(e));
}
function Bt(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Sn(e) {
  const t = Rn(), n = pe(e) ? me(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function Qi(e) {
  let t = ke(e);
  for (; ve(t) && !Je(t); ) {
    if (Sn(t))
      return t;
    if (Bt(t))
      return null;
    t = ke(t);
  }
  return null;
}
function Rn() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Je(e) {
  return ["html", "body", "#document"].includes(nt(e));
}
function me(e) {
  return ce(e).getComputedStyle(e);
}
function Gt(e) {
  return pe(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function ke(e) {
  if (nt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    ir(e) && e.host || // Fallback.
    we(e)
  );
  return ir(t) ? t.host : t;
}
function $r(e) {
  const t = ke(e);
  return Je(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ve(t) && gt(t) ? t : $r(t);
}
function dt(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = $r(e), s = o === ((r = e.ownerDocument) == null ? void 0 : r.body), i = ce(o);
  if (s) {
    const a = mn(i);
    return t.concat(i, i.visualViewport || [], gt(o) ? o : [], a && n ? dt(a) : []);
  }
  return t.concat(o, dt(o, [], n));
}
function mn(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function zr(e) {
  const t = me(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = ve(e), s = o ? e.offsetWidth : n, i = o ? e.offsetHeight : r, a = It(n) !== s || It(r) !== i;
  return a && (n = s, r = i), {
    width: n,
    height: r,
    $: a
  };
}
function Mn(e) {
  return pe(e) ? e : e.contextElement;
}
function Xe(e) {
  const t = Mn(e);
  if (!ve(t))
    return he(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: s
  } = zr(t);
  let i = (s ? It(n.width) : n.width) / r, a = (s ? It(n.height) : n.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: i,
    y: a
  };
}
const ea = /* @__PURE__ */ he(0);
function Wr(e) {
  const t = ce(e);
  return !Rn() || !t.visualViewport ? ea : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function ta(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== ce(e) ? !1 : t;
}
function ze(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), s = Mn(e);
  let i = he(1);
  t && (r ? pe(r) && (i = Xe(r)) : i = Xe(e));
  const a = ta(s, n, r) ? Wr(s) : he(0);
  let u = (o.left + a.x) / i.x, c = (o.top + a.y) / i.y, p = o.width / i.x, d = o.height / i.y;
  if (s) {
    const g = ce(s), v = r && pe(r) ? ce(r) : r;
    let h = g, m = mn(h);
    for (; m && r && v !== h; ) {
      const b = Xe(m), w = m.getBoundingClientRect(), E = me(m), S = w.left + (m.clientLeft + parseFloat(E.paddingLeft)) * b.x, C = w.top + (m.clientTop + parseFloat(E.paddingTop)) * b.y;
      u *= b.x, c *= b.y, p *= b.x, d *= b.y, u += S, c += C, h = ce(m), m = mn(h);
    }
  }
  return jt({
    width: p,
    height: d,
    x: u,
    y: c
  });
}
function An(e, t) {
  const n = Gt(e).scrollLeft;
  return t ? t.left + n : ze(we(e)).left + n;
}
function Br(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    An(e, r)
  )), s = r.top + t.scrollTop;
  return {
    x: o,
    y: s
  };
}
function na(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const s = o === "fixed", i = we(r), a = t ? Bt(t.floating) : !1;
  if (r === i || a && s)
    return n;
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = he(1);
  const p = he(0), d = ve(r);
  if ((d || !d && !s) && ((nt(r) !== "body" || gt(i)) && (u = Gt(r)), ve(r))) {
    const v = ze(r);
    c = Xe(r), p.x = v.x + r.clientLeft, p.y = v.y + r.clientTop;
  }
  const g = i && !d && !s ? Br(i, u, !0) : he(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - u.scrollLeft * c.x + p.x + g.x,
    y: n.y * c.y - u.scrollTop * c.y + p.y + g.y
  };
}
function ra(e) {
  return Array.from(e.getClientRects());
}
function oa(e) {
  const t = we(e), n = Gt(e), r = e.ownerDocument.body, o = ae(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), s = ae(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + An(e);
  const a = -n.scrollTop;
  return me(r).direction === "rtl" && (i += ae(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: s,
    x: i,
    y: a
  };
}
function sa(e, t) {
  const n = ce(e), r = we(e), o = n.visualViewport;
  let s = r.clientWidth, i = r.clientHeight, a = 0, u = 0;
  if (o) {
    s = o.width, i = o.height;
    const c = Rn();
    (!c || c && t === "fixed") && (a = o.offsetLeft, u = o.offsetTop);
  }
  return {
    width: s,
    height: i,
    x: a,
    y: u
  };
}
function ia(e, t) {
  const n = ze(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, s = ve(e) ? Xe(e) : he(1), i = e.clientWidth * s.x, a = e.clientHeight * s.y, u = o * s.x, c = r * s.y;
  return {
    width: i,
    height: a,
    x: u,
    y: c
  };
}
function ar(e, t, n) {
  let r;
  if (t === "viewport")
    r = sa(e, n);
  else if (t === "document")
    r = oa(we(e));
  else if (pe(t))
    r = ia(t, n);
  else {
    const o = Wr(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return jt(r);
}
function Gr(e, t) {
  const n = ke(e);
  return n === t || !pe(n) || Je(n) ? !1 : me(n).position === "fixed" || Gr(n, t);
}
function aa(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = dt(e, [], !1).filter((a) => pe(a) && nt(a) !== "body"), o = null;
  const s = me(e).position === "fixed";
  let i = s ? ke(e) : e;
  for (; pe(i) && !Je(i); ) {
    const a = me(i), u = Sn(i);
    !u && a.position === "fixed" && (o = null), (s ? !u && !o : !u && a.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || gt(i) && !u && Gr(e, i)) ? r = r.filter((p) => p !== i) : o = a, i = ke(i);
  }
  return t.set(e, r), r;
}
function ca(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? Bt(t) ? [] : aa(t, this._c) : [].concat(n), r], a = i[0], u = i.reduce((c, p) => {
    const d = ar(t, p, o);
    return c.top = ae(d.top, c.top), c.right = Te(d.right, c.right), c.bottom = Te(d.bottom, c.bottom), c.left = ae(d.left, c.left), c;
  }, ar(t, a, o));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function la(e) {
  const {
    width: t,
    height: n
  } = zr(e);
  return {
    width: t,
    height: n
  };
}
function ua(e, t, n) {
  const r = ve(t), o = we(t), s = n === "fixed", i = ze(e, !0, s, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = he(0);
  if (r || !r && !s)
    if ((nt(t) !== "body" || gt(o)) && (a = Gt(t)), r) {
      const g = ze(t, !0, s, t);
      u.x = g.x + t.clientLeft, u.y = g.y + t.clientTop;
    } else o && (u.x = An(o));
  const c = o && !r && !s ? Br(o, a) : he(0), p = i.left + a.scrollLeft - u.x - c.x, d = i.top + a.scrollTop - u.y - c.y;
  return {
    x: p,
    y: d,
    width: i.width,
    height: i.height
  };
}
function Jt(e) {
  return me(e).position === "static";
}
function cr(e, t) {
  if (!ve(e) || me(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return we(e) === n && (n = n.ownerDocument.body), n;
}
function Ur(e, t) {
  const n = ce(e);
  if (Bt(e))
    return n;
  if (!ve(e)) {
    let o = ke(e);
    for (; o && !Je(o); ) {
      if (pe(o) && !Jt(o))
        return o;
      o = ke(o);
    }
    return n;
  }
  let r = cr(e, t);
  for (; r && Ji(r) && Jt(r); )
    r = cr(r, t);
  return r && Je(r) && Jt(r) && !Sn(r) ? n : r || Qi(e) || n;
}
const da = async function(e) {
  const t = this.getOffsetParent || Ur, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: ua(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function fa(e) {
  return me(e).direction === "rtl";
}
const pa = {
  convertOffsetParentRelativeRectToViewportRelativeRect: na,
  getDocumentElement: we,
  getClippingRect: ca,
  getOffsetParent: Ur,
  getElementRects: da,
  getClientRects: ra,
  getDimensions: la,
  getScale: Xe,
  isElement: pe,
  isRTL: fa
};
function Vr(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function ma(e, t) {
  let n = null, r;
  const o = we(e);
  function s() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), n = null;
  }
  function i(a, u) {
    a === void 0 && (a = !1), u === void 0 && (u = 1), s();
    const c = e.getBoundingClientRect(), {
      left: p,
      top: d,
      width: g,
      height: v
    } = c;
    if (a || t(), !g || !v)
      return;
    const h = Rt(d), m = Rt(o.clientWidth - (p + g)), b = Rt(o.clientHeight - (d + v)), w = Rt(p), S = {
      rootMargin: -h + "px " + -m + "px " + -b + "px " + -w + "px",
      threshold: ae(0, Te(1, u)) || 1
    };
    let C = !0;
    function M(x) {
      const A = x[0].intersectionRatio;
      if (A !== u) {
        if (!C)
          return i();
        A ? i(!1, A) : r = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      A === 1 && !Vr(c, e.getBoundingClientRect()) && i(), C = !1;
    }
    try {
      n = new IntersectionObserver(M, {
        ...S,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(M, S);
    }
    n.observe(e);
  }
  return i(!0), s;
}
function ga(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = r, c = Mn(e), p = o || s ? [...c ? dt(c) : [], ...dt(t)] : [];
  p.forEach((w) => {
    o && w.addEventListener("scroll", n, {
      passive: !0
    }), s && w.addEventListener("resize", n);
  });
  const d = c && a ? ma(c, n) : null;
  let g = -1, v = null;
  i && (v = new ResizeObserver((w) => {
    let [E] = w;
    E && E.target === c && v && (v.unobserve(t), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
      var S;
      (S = v) == null || S.observe(t);
    })), n();
  }), c && !u && v.observe(c), v.observe(t));
  let h, m = u ? ze(e) : null;
  u && b();
  function b() {
    const w = ze(e);
    m && !Vr(m, w) && n(), m = w, h = requestAnimationFrame(b);
  }
  return n(), () => {
    var w;
    p.forEach((E) => {
      o && E.removeEventListener("scroll", n), s && E.removeEventListener("resize", n);
    }), d == null || d(), (w = v) == null || w.disconnect(), v = null, u && cancelAnimationFrame(h);
  };
}
const ha = Hi, va = Xi, ba = Vi, wa = Zi, ya = Ki, lr = Ui, xa = qi, Ea = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: pa,
    ...n
  }, s = {
    ...o.platform,
    _c: r
  };
  return Gi(e, t, {
    ...o,
    platform: s
  });
};
var Tt = typeof document < "u" ? ps : ms;
function Lt(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!Lt(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const s = o[r];
      if (!(s === "_owner" && e.$$typeof) && !Lt(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Kr(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ur(e, t) {
  const n = Kr(e);
  return Math.round(t * n) / n;
}
function Qt(e) {
  const t = l.useRef(e);
  return Tt(() => {
    t.current = e;
  }), t;
}
function Ca(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: s,
      floating: i
    } = {},
    transform: a = !0,
    whileElementsMounted: u,
    open: c
  } = e, [p, d] = l.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [g, v] = l.useState(r);
  Lt(g, r) || v(r);
  const [h, m] = l.useState(null), [b, w] = l.useState(null), E = l.useCallback((k) => {
    k !== x.current && (x.current = k, m(k));
  }, []), S = l.useCallback((k) => {
    k !== A.current && (A.current = k, w(k));
  }, []), C = s || h, M = i || b, x = l.useRef(null), A = l.useRef(null), I = l.useRef(p), W = u != null, L = Qt(u), V = Qt(o), U = Qt(c), $ = l.useCallback(() => {
    if (!x.current || !A.current)
      return;
    const k = {
      placement: t,
      strategy: n,
      middleware: g
    };
    V.current && (k.platform = V.current), Ea(x.current, A.current, k).then((R) => {
      const B = {
        ...R,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: U.current !== !1
      };
      D.current && !Lt(I.current, B) && (I.current = B, br.flushSync(() => {
        d(B);
      }));
    });
  }, [g, t, n, V, U]);
  Tt(() => {
    c === !1 && I.current.isPositioned && (I.current.isPositioned = !1, d((k) => ({
      ...k,
      isPositioned: !1
    })));
  }, [c]);
  const D = l.useRef(!1);
  Tt(() => (D.current = !0, () => {
    D.current = !1;
  }), []), Tt(() => {
    if (C && (x.current = C), M && (A.current = M), C && M) {
      if (L.current)
        return L.current(C, M, $);
      $();
    }
  }, [C, M, $, L, W]);
  const K = l.useMemo(() => ({
    reference: x,
    floating: A,
    setReference: E,
    setFloating: S
  }), [E, S]), N = l.useMemo(() => ({
    reference: C,
    floating: M
  }), [C, M]), Y = l.useMemo(() => {
    const k = {
      position: n,
      left: 0,
      top: 0
    };
    if (!N.floating)
      return k;
    const R = ur(N.floating, p.x), B = ur(N.floating, p.y);
    return a ? {
      ...k,
      transform: "translate(" + R + "px, " + B + "px)",
      ...Kr(N.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: R,
      top: B
    };
  }, [n, a, N.floating, p.x, p.y]);
  return l.useMemo(() => ({
    ...p,
    update: $,
    refs: K,
    elements: N,
    floatingStyles: Y
  }), [p, $, K, N, Y]);
}
const Sa = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: r,
        padding: o
      } = typeof e == "function" ? e(n) : e;
      return r && t(r) ? r.current != null ? lr({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? lr({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, Ra = (e, t) => ({
  ...ha(e),
  options: [e, t]
}), Ma = (e, t) => ({
  ...va(e),
  options: [e, t]
}), Aa = (e, t) => ({
  ...xa(e),
  options: [e, t]
}), Pa = (e, t) => ({
  ...ba(e),
  options: [e, t]
}), _a = (e, t) => ({
  ...wa(e),
  options: [e, t]
}), Oa = (e, t) => ({
  ...ya(e),
  options: [e, t]
}), Ta = (e, t) => ({
  ...Sa(e),
  options: [e, t]
});
var Na = "Arrow", Yr = l.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...s } = e;
  return /* @__PURE__ */ y.jsx(
    oe.svg,
    {
      ...s,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ y.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Yr.displayName = Na;
var ka = Yr;
function Ia(e) {
  const [t, n] = l.useState(void 0);
  return $e(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const s = o[0];
        let i, a;
        if ("borderBoxSize" in s) {
          const u = s.borderBoxSize, c = Array.isArray(u) ? u[0] : u;
          i = c.inlineSize, a = c.blockSize;
        } else
          i = e.offsetWidth, a = e.offsetHeight;
        n({ width: i, height: a });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var Pn = "Popper", [Hr, Xr] = mt(Pn), [Da, qr] = Hr(Pn), Zr = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = l.useState(null);
  return /* @__PURE__ */ y.jsx(Da, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
Zr.displayName = Pn;
var Jr = "PopperAnchor", Qr = l.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, s = qr(Jr, n), i = l.useRef(null), a = ie(t, i);
    return l.useEffect(() => {
      s.onAnchorChange((r == null ? void 0 : r.current) || i.current);
    }), r ? null : /* @__PURE__ */ y.jsx(oe.div, { ...o, ref: a });
  }
);
Qr.displayName = Jr;
var _n = "PopperContent", [ja, La] = Hr(_n), eo = l.forwardRef(
  (e, t) => {
    var Z, Se, ne, Re, rt, Be;
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: o = 0,
      align: s = "center",
      alignOffset: i = 0,
      arrowPadding: a = 0,
      avoidCollisions: u = !0,
      collisionBoundary: c = [],
      collisionPadding: p = 0,
      sticky: d = "partial",
      hideWhenDetached: g = !1,
      updatePositionStrategy: v = "optimized",
      onPlaced: h,
      ...m
    } = e, b = qr(_n, n), [w, E] = l.useState(null), S = ie(t, (Me) => E(Me)), [C, M] = l.useState(null), x = Ia(C), A = (x == null ? void 0 : x.width) ?? 0, I = (x == null ? void 0 : x.height) ?? 0, W = r + (s !== "center" ? "-" + s : ""), L = typeof p == "number" ? p : { top: 0, right: 0, bottom: 0, left: 0, ...p }, V = Array.isArray(c) ? c : [c], U = V.length > 0, $ = {
      padding: L,
      boundary: V.filter($a),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: U
    }, { refs: D, floatingStyles: K, placement: N, isPositioned: Y, middlewareData: k } = Ca({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: W,
      whileElementsMounted: (...Me) => ga(...Me, {
        animationFrame: v === "always"
      }),
      elements: {
        reference: b.anchor
      },
      middleware: [
        Ra({ mainAxis: o + I, alignmentAxis: i }),
        u && Ma({
          mainAxis: !0,
          crossAxis: !1,
          limiter: d === "partial" ? Aa() : void 0,
          ...$
        }),
        u && Pa({ ...$ }),
        _a({
          ...$,
          apply: ({ elements: Me, rects: Ge, availableWidth: ot, availableHeight: Yt }) => {
            const { width: yt, height: xt } = Ge.reference, De = Me.floating.style;
            De.setProperty("--radix-popper-available-width", `${ot}px`), De.setProperty("--radix-popper-available-height", `${Yt}px`), De.setProperty("--radix-popper-anchor-width", `${yt}px`), De.setProperty("--radix-popper-anchor-height", `${xt}px`);
          }
        }),
        C && Ta({ element: C, padding: a }),
        za({ arrowWidth: A, arrowHeight: I }),
        g && Oa({ strategy: "referenceHidden", ...$ })
      ]
    }), [R, B] = ro(N), H = fe(h);
    $e(() => {
      Y && (H == null || H());
    }, [Y, H]);
    const te = (Z = k.arrow) == null ? void 0 : Z.x, le = (Se = k.arrow) == null ? void 0 : Se.y, J = ((ne = k.arrow) == null ? void 0 : ne.centerOffset) !== 0, [ue, se] = l.useState();
    return $e(() => {
      w && se(window.getComputedStyle(w).zIndex);
    }, [w]), /* @__PURE__ */ y.jsx(
      "div",
      {
        ref: D.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...K,
          transform: Y ? K.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: ue,
          "--radix-popper-transform-origin": [
            (Re = k.transformOrigin) == null ? void 0 : Re.x,
            (rt = k.transformOrigin) == null ? void 0 : rt.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((Be = k.hide) == null ? void 0 : Be.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ y.jsx(
          ja,
          {
            scope: n,
            placedSide: R,
            onArrowChange: M,
            arrowX: te,
            arrowY: le,
            shouldHideArrow: J,
            children: /* @__PURE__ */ y.jsx(
              oe.div,
              {
                "data-side": R,
                "data-align": B,
                ...m,
                ref: S,
                style: {
                  ...m.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: Y ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
eo.displayName = _n;
var to = "PopperArrow", Fa = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, no = l.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, s = La(to, r), i = Fa[s.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ y.jsx(
      "span",
      {
        ref: s.onArrowChange,
        style: {
          position: "absolute",
          left: s.arrowX,
          top: s.arrowY,
          [i]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[s.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[s.placedSide],
          visibility: s.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ y.jsx(
          ka,
          {
            ...o,
            ref: n,
            style: {
              ...o.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
no.displayName = to;
function $a(e) {
  return e !== null;
}
var za = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var b, w, E;
    const { placement: n, rects: r, middlewareData: o } = t, i = ((b = o.arrow) == null ? void 0 : b.centerOffset) !== 0, a = i ? 0 : e.arrowWidth, u = i ? 0 : e.arrowHeight, [c, p] = ro(n), d = { start: "0%", center: "50%", end: "100%" }[p], g = (((w = o.arrow) == null ? void 0 : w.x) ?? 0) + a / 2, v = (((E = o.arrow) == null ? void 0 : E.y) ?? 0) + u / 2;
    let h = "", m = "";
    return c === "bottom" ? (h = i ? d : `${g}px`, m = `${-u}px`) : c === "top" ? (h = i ? d : `${g}px`, m = `${r.floating.height + u}px`) : c === "right" ? (h = `${-u}px`, m = i ? d : `${v}px`) : c === "left" && (h = `${r.floating.width + u}px`, m = i ? d : `${v}px`), { data: { x: h, y: m } };
  }
});
function ro(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var oo = Zr, Wa = Qr, Ba = eo, Ga = no, Ua = "Portal", so = l.forwardRef((e, t) => {
  var a;
  const { container: n, ...r } = e, [o, s] = l.useState(!1);
  $e(() => s(!0), []);
  const i = n || o && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
  return i ? hs.createPortal(/* @__PURE__ */ y.jsx(oe.div, { ...r, ref: t }), i) : null;
});
so.displayName = Ua;
function Va(e, t) {
  return l.useReducer((n, r) => t[n][r] ?? n, e);
}
var ht = (e) => {
  const { present: t, children: n } = e, r = Ka(t), o = typeof n == "function" ? n({ present: r.isPresent }) : l.Children.only(n), s = ie(r.ref, Ya(o));
  return typeof n == "function" || r.isPresent ? l.cloneElement(o, { ref: s }) : null;
};
ht.displayName = "Presence";
function Ka(e) {
  const [t, n] = l.useState(), r = l.useRef({}), o = l.useRef(e), s = l.useRef("none"), i = e ? "mounted" : "unmounted", [a, u] = Va(i, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return l.useEffect(() => {
    const c = Mt(r.current);
    s.current = a === "mounted" ? c : "none";
  }, [a]), $e(() => {
    const c = r.current, p = o.current;
    if (p !== e) {
      const g = s.current, v = Mt(c);
      e ? u("MOUNT") : v === "none" || (c == null ? void 0 : c.display) === "none" ? u("UNMOUNT") : u(p && g !== v ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, u]), $e(() => {
    if (t) {
      let c;
      const p = t.ownerDocument.defaultView ?? window, d = (v) => {
        const m = Mt(r.current).includes(v.animationName);
        if (v.target === t && m && (u("ANIMATION_END"), !o.current)) {
          const b = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", c = p.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = b);
          });
        }
      }, g = (v) => {
        v.target === t && (s.current = Mt(r.current));
      };
      return t.addEventListener("animationstart", g), t.addEventListener("animationcancel", d), t.addEventListener("animationend", d), () => {
        p.clearTimeout(c), t.removeEventListener("animationstart", g), t.removeEventListener("animationcancel", d), t.removeEventListener("animationend", d);
      };
    } else
      u("ANIMATION_END");
  }, [t, u]), {
    isPresent: ["mounted", "unmountSuspended"].includes(a),
    ref: l.useCallback((c) => {
      c && (r.current = getComputedStyle(c)), n(c);
    }, [])
  };
}
function Mt(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Ya(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var en = "rovingFocusGroup.onEntryFocus", Ha = { bubbles: !1, cancelable: !0 }, Ut = "RovingFocusGroup", [gn, io, Xa] = Or(Ut), [qa, ao] = mt(
  Ut,
  [Xa]
), [Za, Ja] = qa(Ut), co = l.forwardRef(
  (e, t) => /* @__PURE__ */ y.jsx(gn.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ y.jsx(gn.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ y.jsx(Qa, { ...e, ref: t }) }) })
);
co.displayName = Ut;
var Qa = l.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: n,
    orientation: r,
    loop: o = !1,
    dir: s,
    currentTabStopId: i,
    defaultCurrentTabStopId: a,
    onCurrentTabStopIdChange: u,
    onEntryFocus: c,
    preventScrollOnEntryFocus: p = !1,
    ...d
  } = e, g = l.useRef(null), v = ie(t, g), h = Tr(s), [m = null, b] = yn({
    prop: i,
    defaultProp: a,
    onChange: u
  }), [w, E] = l.useState(!1), S = fe(c), C = io(n), M = l.useRef(!1), [x, A] = l.useState(0);
  return l.useEffect(() => {
    const I = g.current;
    if (I)
      return I.addEventListener(en, S), () => I.removeEventListener(en, S);
  }, [S]), /* @__PURE__ */ y.jsx(
    Za,
    {
      scope: n,
      orientation: r,
      dir: h,
      loop: o,
      currentTabStopId: m,
      onItemFocus: l.useCallback(
        (I) => b(I),
        [b]
      ),
      onItemShiftTab: l.useCallback(() => E(!0), []),
      onFocusableItemAdd: l.useCallback(
        () => A((I) => I + 1),
        []
      ),
      onFocusableItemRemove: l.useCallback(
        () => A((I) => I - 1),
        []
      ),
      children: /* @__PURE__ */ y.jsx(
        oe.div,
        {
          tabIndex: w || x === 0 ? -1 : 0,
          "data-orientation": r,
          ...d,
          ref: v,
          style: { outline: "none", ...e.style },
          onMouseDown: z(e.onMouseDown, () => {
            M.current = !0;
          }),
          onFocus: z(e.onFocus, (I) => {
            const W = !M.current;
            if (I.target === I.currentTarget && W && !w) {
              const L = new CustomEvent(en, Ha);
              if (I.currentTarget.dispatchEvent(L), !L.defaultPrevented) {
                const V = C().filter((N) => N.focusable), U = V.find((N) => N.active), $ = V.find((N) => N.id === m), K = [U, $, ...V].filter(
                  Boolean
                ).map((N) => N.ref.current);
                fo(K, p);
              }
            }
            M.current = !1;
          }),
          onBlur: z(e.onBlur, () => E(!1))
        }
      )
    }
  );
}), lo = "RovingFocusGroupItem", uo = l.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: s,
      ...i
    } = e, a = lt(), u = s || a, c = Ja(lo, n), p = c.currentTabStopId === u, d = io(n), { onFocusableItemAdd: g, onFocusableItemRemove: v } = c;
    return l.useEffect(() => {
      if (r)
        return g(), () => v();
    }, [r, g, v]), /* @__PURE__ */ y.jsx(
      gn.ItemSlot,
      {
        scope: n,
        id: u,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ y.jsx(
          oe.span,
          {
            tabIndex: p ? 0 : -1,
            "data-orientation": c.orientation,
            ...i,
            ref: t,
            onMouseDown: z(e.onMouseDown, (h) => {
              r ? c.onItemFocus(u) : h.preventDefault();
            }),
            onFocus: z(e.onFocus, () => c.onItemFocus(u)),
            onKeyDown: z(e.onKeyDown, (h) => {
              if (h.key === "Tab" && h.shiftKey) {
                c.onItemShiftTab();
                return;
              }
              if (h.target !== h.currentTarget) return;
              const m = nc(h, c.orientation, c.dir);
              if (m !== void 0) {
                if (h.metaKey || h.ctrlKey || h.altKey || h.shiftKey) return;
                h.preventDefault();
                let w = d().filter((E) => E.focusable).map((E) => E.ref.current);
                if (m === "last") w.reverse();
                else if (m === "prev" || m === "next") {
                  m === "prev" && w.reverse();
                  const E = w.indexOf(h.currentTarget);
                  w = c.loop ? rc(w, E + 1) : w.slice(E + 1);
                }
                setTimeout(() => fo(w));
              }
            })
          }
        )
      }
    );
  }
);
uo.displayName = lo;
var ec = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function tc(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function nc(e, t, n) {
  const r = tc(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return ec[r];
}
function fo(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function rc(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var oc = co, sc = uo, ic = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Ke = /* @__PURE__ */ new WeakMap(), At = /* @__PURE__ */ new WeakMap(), Pt = {}, tn = 0, po = function(e) {
  return e && (e.host || po(e.parentNode));
}, ac = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = po(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, cc = function(e, t, n, r) {
  var o = ac(t, Array.isArray(e) ? e : [e]);
  Pt[n] || (Pt[n] = /* @__PURE__ */ new WeakMap());
  var s = Pt[n], i = [], a = /* @__PURE__ */ new Set(), u = new Set(o), c = function(d) {
    !d || a.has(d) || (a.add(d), c(d.parentNode));
  };
  o.forEach(c);
  var p = function(d) {
    !d || u.has(d) || Array.prototype.forEach.call(d.children, function(g) {
      if (a.has(g))
        p(g);
      else
        try {
          var v = g.getAttribute(r), h = v !== null && v !== "false", m = (Ke.get(g) || 0) + 1, b = (s.get(g) || 0) + 1;
          Ke.set(g, m), s.set(g, b), i.push(g), m === 1 && h && At.set(g, !0), b === 1 && g.setAttribute(n, "true"), h || g.setAttribute(r, "true");
        } catch (w) {
          console.error("aria-hidden: cannot operate on ", g, w);
        }
    });
  };
  return p(t), a.clear(), tn++, function() {
    i.forEach(function(d) {
      var g = Ke.get(d) - 1, v = s.get(d) - 1;
      Ke.set(d, g), s.set(d, v), g || (At.has(d) || d.removeAttribute(r), At.delete(d)), v || d.removeAttribute(n);
    }), tn--, tn || (Ke = /* @__PURE__ */ new WeakMap(), Ke = /* @__PURE__ */ new WeakMap(), At = /* @__PURE__ */ new WeakMap(), Pt = {});
  };
}, lc = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = ic(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), cc(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, ge = function() {
  return ge = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, ge.apply(this, arguments);
};
function mo(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function uc(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, s; r < o; r++)
    (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var Nt = "right-scroll-bar-position", kt = "width-before-scroll-bar", dc = "with-scroll-bars-hidden", fc = "--removed-body-scroll-bar-size";
function nn(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function pc(e, t) {
  var n = gs(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var mc = typeof window < "u" ? l.useLayoutEffect : l.useEffect, dr = /* @__PURE__ */ new WeakMap();
function gc(e, t) {
  var n = pc(null, function(r) {
    return e.forEach(function(o) {
      return nn(o, r);
    });
  });
  return mc(function() {
    var r = dr.get(n);
    if (r) {
      var o = new Set(r), s = new Set(e), i = n.current;
      o.forEach(function(a) {
        s.has(a) || nn(a, null);
      }), s.forEach(function(a) {
        o.has(a) || nn(a, i);
      });
    }
    dr.set(n, e);
  }, [e]), n;
}
function hc(e) {
  return e;
}
function vc(e, t) {
  t === void 0 && (t = hc);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(s) {
      var i = t(s, r);
      return n.push(i), function() {
        n = n.filter(function(a) {
          return a !== i;
        });
      };
    },
    assignSyncMedium: function(s) {
      for (r = !0; n.length; ) {
        var i = n;
        n = [], i.forEach(s);
      }
      n = {
        push: function(a) {
          return s(a);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(s) {
      r = !0;
      var i = [];
      if (n.length) {
        var a = n;
        n = [], a.forEach(s), i = n;
      }
      var u = function() {
        var p = i;
        i = [], p.forEach(s);
      }, c = function() {
        return Promise.resolve().then(u);
      };
      c(), n = {
        push: function(p) {
          i.push(p), c();
        },
        filter: function(p) {
          return i = i.filter(p), n;
        }
      };
    }
  };
  return o;
}
function bc(e) {
  e === void 0 && (e = {});
  var t = vc(null);
  return t.options = ge({ async: !0, ssr: !1 }, e), t;
}
var go = function(e) {
  var t = e.sideCar, n = mo(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return l.createElement(r, ge({}, n));
};
go.isSideCarExport = !0;
function wc(e, t) {
  return e.useMedium(t), go;
}
var ho = bc(), rn = function() {
}, Vt = l.forwardRef(function(e, t) {
  var n = l.useRef(null), r = l.useState({
    onScrollCapture: rn,
    onWheelCapture: rn,
    onTouchMoveCapture: rn
  }), o = r[0], s = r[1], i = e.forwardProps, a = e.children, u = e.className, c = e.removeScrollBar, p = e.enabled, d = e.shards, g = e.sideCar, v = e.noIsolation, h = e.inert, m = e.allowPinchZoom, b = e.as, w = b === void 0 ? "div" : b, E = e.gapMode, S = mo(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), C = g, M = gc([n, t]), x = ge(ge({}, S), o);
  return l.createElement(
    l.Fragment,
    null,
    p && l.createElement(C, { sideCar: ho, removeScrollBar: c, shards: d, noIsolation: v, inert: h, setCallbacks: s, allowPinchZoom: !!m, lockRef: n, gapMode: E }),
    i ? l.cloneElement(l.Children.only(a), ge(ge({}, x), { ref: M })) : l.createElement(w, ge({}, x, { className: u, ref: M }), a)
  );
});
Vt.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Vt.classNames = {
  fullWidth: kt,
  zeroRight: Nt
};
var yc = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function xc() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = yc();
  return t && e.setAttribute("nonce", t), e;
}
function Ec(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Cc(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Sc = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = xc()) && (Ec(t, n), Cc(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Rc = function() {
  var e = Sc();
  return function(t, n) {
    l.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, vo = function() {
  var e = Rc(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, Mc = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, on = function(e) {
  return parseInt(e || "", 10) || 0;
}, Ac = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [on(n), on(r), on(o)];
}, Pc = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Mc;
  var t = Ac(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, _c = vo(), qe = "data-scroll-locked", Oc = function(e, t, n, r) {
  var o = e.left, s = e.top, i = e.right, a = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(dc, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(a, "px ").concat(r, `;
  }
  body[`).concat(qe, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(s, `px;
    padding-right: `).concat(i, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(a, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Nt, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(kt, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(Nt, " .").concat(Nt, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(kt, " .").concat(kt, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(qe, `] {
    `).concat(fc, ": ").concat(a, `px;
  }
`);
}, fr = function() {
  var e = parseInt(document.body.getAttribute(qe) || "0", 10);
  return isFinite(e) ? e : 0;
}, Tc = function() {
  l.useEffect(function() {
    return document.body.setAttribute(qe, (fr() + 1).toString()), function() {
      var e = fr() - 1;
      e <= 0 ? document.body.removeAttribute(qe) : document.body.setAttribute(qe, e.toString());
    };
  }, []);
}, Nc = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  Tc();
  var s = l.useMemo(function() {
    return Pc(o);
  }, [o]);
  return l.createElement(_c, { styles: Oc(s, !t, o, n ? "" : "!important") });
}, hn = !1;
if (typeof window < "u")
  try {
    var _t = Object.defineProperty({}, "passive", {
      get: function() {
        return hn = !0, !0;
      }
    });
    window.addEventListener("test", _t, _t), window.removeEventListener("test", _t, _t);
  } catch {
    hn = !1;
  }
var Ye = hn ? { passive: !1 } : !1, kc = function(e) {
  return e.tagName === "TEXTAREA";
}, bo = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !kc(e) && n[t] === "visible")
  );
}, Ic = function(e) {
  return bo(e, "overflowY");
}, Dc = function(e) {
  return bo(e, "overflowX");
}, pr = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = wo(e, r);
    if (o) {
      var s = yo(e, r), i = s[1], a = s[2];
      if (i > a)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, jc = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, Lc = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, wo = function(e, t) {
  return e === "v" ? Ic(t) : Dc(t);
}, yo = function(e, t) {
  return e === "v" ? jc(t) : Lc(t);
}, Fc = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, $c = function(e, t, n, r, o) {
  var s = Fc(e, window.getComputedStyle(t).direction), i = s * r, a = n.target, u = t.contains(a), c = !1, p = i > 0, d = 0, g = 0;
  do {
    var v = yo(e, a), h = v[0], m = v[1], b = v[2], w = m - b - s * h;
    (h || w) && wo(e, a) && (d += w, g += h), a instanceof ShadowRoot ? a = a.host : a = a.parentNode;
  } while (
    // portaled content
    !u && a !== document.body || // self content
    u && (t.contains(a) || t === a)
  );
  return (p && Math.abs(d) < 1 || !p && Math.abs(g) < 1) && (c = !0), c;
}, Ot = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, mr = function(e) {
  return [e.deltaX, e.deltaY];
}, gr = function(e) {
  return e && "current" in e ? e.current : e;
}, zc = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Wc = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Bc = 0, He = [];
function Gc(e) {
  var t = l.useRef([]), n = l.useRef([0, 0]), r = l.useRef(), o = l.useState(Bc++)[0], s = l.useState(vo)[0], i = l.useRef(e);
  l.useEffect(function() {
    i.current = e;
  }, [e]), l.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var m = uc([e.lockRef.current], (e.shards || []).map(gr), !0).filter(Boolean);
      return m.forEach(function(b) {
        return b.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), m.forEach(function(b) {
          return b.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = l.useCallback(function(m, b) {
    if ("touches" in m && m.touches.length === 2 || m.type === "wheel" && m.ctrlKey)
      return !i.current.allowPinchZoom;
    var w = Ot(m), E = n.current, S = "deltaX" in m ? m.deltaX : E[0] - w[0], C = "deltaY" in m ? m.deltaY : E[1] - w[1], M, x = m.target, A = Math.abs(S) > Math.abs(C) ? "h" : "v";
    if ("touches" in m && A === "h" && x.type === "range")
      return !1;
    var I = pr(A, x);
    if (!I)
      return !0;
    if (I ? M = A : (M = A === "v" ? "h" : "v", I = pr(A, x)), !I)
      return !1;
    if (!r.current && "changedTouches" in m && (S || C) && (r.current = M), !M)
      return !0;
    var W = r.current || M;
    return $c(W, b, m, W === "h" ? S : C);
  }, []), u = l.useCallback(function(m) {
    var b = m;
    if (!(!He.length || He[He.length - 1] !== s)) {
      var w = "deltaY" in b ? mr(b) : Ot(b), E = t.current.filter(function(M) {
        return M.name === b.type && (M.target === b.target || b.target === M.shadowParent) && zc(M.delta, w);
      })[0];
      if (E && E.should) {
        b.cancelable && b.preventDefault();
        return;
      }
      if (!E) {
        var S = (i.current.shards || []).map(gr).filter(Boolean).filter(function(M) {
          return M.contains(b.target);
        }), C = S.length > 0 ? a(b, S[0]) : !i.current.noIsolation;
        C && b.cancelable && b.preventDefault();
      }
    }
  }, []), c = l.useCallback(function(m, b, w, E) {
    var S = { name: m, delta: b, target: w, should: E, shadowParent: Uc(w) };
    t.current.push(S), setTimeout(function() {
      t.current = t.current.filter(function(C) {
        return C !== S;
      });
    }, 1);
  }, []), p = l.useCallback(function(m) {
    n.current = Ot(m), r.current = void 0;
  }, []), d = l.useCallback(function(m) {
    c(m.type, mr(m), m.target, a(m, e.lockRef.current));
  }, []), g = l.useCallback(function(m) {
    c(m.type, Ot(m), m.target, a(m, e.lockRef.current));
  }, []);
  l.useEffect(function() {
    return He.push(s), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: g
    }), document.addEventListener("wheel", u, Ye), document.addEventListener("touchmove", u, Ye), document.addEventListener("touchstart", p, Ye), function() {
      He = He.filter(function(m) {
        return m !== s;
      }), document.removeEventListener("wheel", u, Ye), document.removeEventListener("touchmove", u, Ye), document.removeEventListener("touchstart", p, Ye);
    };
  }, []);
  var v = e.removeScrollBar, h = e.inert;
  return l.createElement(
    l.Fragment,
    null,
    h ? l.createElement(s, { styles: Wc(o) }) : null,
    v ? l.createElement(Nc, { gapMode: e.gapMode }) : null
  );
}
function Uc(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Vc = wc(ho, Gc);
var xo = l.forwardRef(function(e, t) {
  return l.createElement(Vt, ge({}, e, { ref: t, sideCar: Vc }));
});
xo.classNames = Vt.classNames;
var vn = ["Enter", " "], Kc = ["ArrowDown", "PageUp", "Home"], Eo = ["ArrowUp", "PageDown", "End"], Yc = [...Kc, ...Eo], Hc = {
  ltr: [...vn, "ArrowRight"],
  rtl: [...vn, "ArrowLeft"]
}, Xc = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, vt = "Menu", [ft, qc, Zc] = Or(vt), [We, Co] = mt(vt, [
  Zc,
  Xr,
  ao
]), bt = Xr(), So = ao(), [Ro, Ie] = We(vt), [Jc, wt] = We(vt), Mo = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: s, modal: i = !0 } = e, a = bt(t), [u, c] = l.useState(null), p = l.useRef(!1), d = fe(s), g = Tr(o);
  return l.useEffect(() => {
    const v = () => {
      p.current = !0, document.addEventListener("pointerdown", h, { capture: !0, once: !0 }), document.addEventListener("pointermove", h, { capture: !0, once: !0 });
    }, h = () => p.current = !1;
    return document.addEventListener("keydown", v, { capture: !0 }), () => {
      document.removeEventListener("keydown", v, { capture: !0 }), document.removeEventListener("pointerdown", h, { capture: !0 }), document.removeEventListener("pointermove", h, { capture: !0 });
    };
  }, []), /* @__PURE__ */ y.jsx(oo, { ...a, children: /* @__PURE__ */ y.jsx(
    Ro,
    {
      scope: t,
      open: n,
      onOpenChange: d,
      content: u,
      onContentChange: c,
      children: /* @__PURE__ */ y.jsx(
        Jc,
        {
          scope: t,
          onClose: l.useCallback(() => d(!1), [d]),
          isUsingKeyboardRef: p,
          dir: g,
          modal: i,
          children: r
        }
      )
    }
  ) });
};
Mo.displayName = vt;
var Qc = "MenuAnchor", On = l.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = bt(n);
    return /* @__PURE__ */ y.jsx(Wa, { ...o, ...r, ref: t });
  }
);
On.displayName = Qc;
var Tn = "MenuPortal", [el, Ao] = We(Tn, {
  forceMount: void 0
}), Po = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, s = Ie(Tn, t);
  return /* @__PURE__ */ y.jsx(el, { scope: t, forceMount: n, children: /* @__PURE__ */ y.jsx(ht, { present: n || s.open, children: /* @__PURE__ */ y.jsx(so, { asChild: !0, container: o, children: r }) }) });
};
Po.displayName = Tn;
var de = "MenuContent", [tl, Nn] = We(de), _o = l.forwardRef(
  (e, t) => {
    const n = Ao(de, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, s = Ie(de, e.__scopeMenu), i = wt(de, e.__scopeMenu);
    return /* @__PURE__ */ y.jsx(ft.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ y.jsx(ht, { present: r || s.open, children: /* @__PURE__ */ y.jsx(ft.Slot, { scope: e.__scopeMenu, children: i.modal ? /* @__PURE__ */ y.jsx(nl, { ...o, ref: t }) : /* @__PURE__ */ y.jsx(rl, { ...o, ref: t }) }) }) });
  }
), nl = l.forwardRef(
  (e, t) => {
    const n = Ie(de, e.__scopeMenu), r = l.useRef(null), o = ie(t, r);
    return l.useEffect(() => {
      const s = r.current;
      if (s) return lc(s);
    }, []), /* @__PURE__ */ y.jsx(
      kn,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: z(
          e.onFocusOutside,
          (s) => s.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => n.onOpenChange(!1)
      }
    );
  }
), rl = l.forwardRef((e, t) => {
  const n = Ie(de, e.__scopeMenu);
  return /* @__PURE__ */ y.jsx(
    kn,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), kn = l.forwardRef(
  (e, t) => {
    const {
      __scopeMenu: n,
      loop: r = !1,
      trapFocus: o,
      onOpenAutoFocus: s,
      onCloseAutoFocus: i,
      disableOutsidePointerEvents: a,
      onEntryFocus: u,
      onEscapeKeyDown: c,
      onPointerDownOutside: p,
      onFocusOutside: d,
      onInteractOutside: g,
      onDismiss: v,
      disableOutsideScroll: h,
      ...m
    } = e, b = Ie(de, n), w = wt(de, n), E = bt(n), S = So(n), C = qc(n), [M, x] = l.useState(null), A = l.useRef(null), I = ie(t, A, b.onContentChange), W = l.useRef(0), L = l.useRef(""), V = l.useRef(0), U = l.useRef(null), $ = l.useRef("right"), D = l.useRef(0), K = h ? xo : l.Fragment, N = h ? { as: Ze, allowPinchZoom: !0 } : void 0, Y = (R) => {
      var Z, Se;
      const B = L.current + R, H = C().filter((ne) => !ne.disabled), te = document.activeElement, le = (Z = H.find((ne) => ne.ref.current === te)) == null ? void 0 : Z.textValue, J = H.map((ne) => ne.textValue), ue = gl(J, B, le), se = (Se = H.find((ne) => ne.textValue === ue)) == null ? void 0 : Se.ref.current;
      (function ne(Re) {
        L.current = Re, window.clearTimeout(W.current), Re !== "" && (W.current = window.setTimeout(() => ne(""), 1e3));
      })(B), se && setTimeout(() => se.focus());
    };
    l.useEffect(() => () => window.clearTimeout(W.current), []), Ri();
    const k = l.useCallback((R) => {
      var H, te;
      return $.current === ((H = U.current) == null ? void 0 : H.side) && vl(R, (te = U.current) == null ? void 0 : te.area);
    }, []);
    return /* @__PURE__ */ y.jsx(
      tl,
      {
        scope: n,
        searchRef: L,
        onItemEnter: l.useCallback(
          (R) => {
            k(R) && R.preventDefault();
          },
          [k]
        ),
        onItemLeave: l.useCallback(
          (R) => {
            var B;
            k(R) || ((B = A.current) == null || B.focus(), x(null));
          },
          [k]
        ),
        onTriggerLeave: l.useCallback(
          (R) => {
            k(R) && R.preventDefault();
          },
          [k]
        ),
        pointerGraceTimerRef: V,
        onPointerGraceIntentChange: l.useCallback((R) => {
          U.current = R;
        }, []),
        children: /* @__PURE__ */ y.jsx(K, { ...N, children: /* @__PURE__ */ y.jsx(
          Dr,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: z(s, (R) => {
              var B;
              R.preventDefault(), (B = A.current) == null || B.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: i,
            children: /* @__PURE__ */ y.jsx(
              kr,
              {
                asChild: !0,
                disableOutsidePointerEvents: a,
                onEscapeKeyDown: c,
                onPointerDownOutside: p,
                onFocusOutside: d,
                onInteractOutside: g,
                onDismiss: v,
                children: /* @__PURE__ */ y.jsx(
                  oc,
                  {
                    asChild: !0,
                    ...S,
                    dir: w.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: M,
                    onCurrentTabStopIdChange: x,
                    onEntryFocus: z(u, (R) => {
                      w.isUsingKeyboardRef.current || R.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ y.jsx(
                      Ba,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": Ko(b.open),
                        "data-radix-menu-content": "",
                        dir: w.dir,
                        ...E,
                        ...m,
                        ref: I,
                        style: { outline: "none", ...m.style },
                        onKeyDown: z(m.onKeyDown, (R) => {
                          const H = R.target.closest("[data-radix-menu-content]") === R.currentTarget, te = R.ctrlKey || R.altKey || R.metaKey, le = R.key.length === 1;
                          H && (R.key === "Tab" && R.preventDefault(), !te && le && Y(R.key));
                          const J = A.current;
                          if (R.target !== J || !Yc.includes(R.key)) return;
                          R.preventDefault();
                          const se = C().filter((Z) => !Z.disabled).map((Z) => Z.ref.current);
                          Eo.includes(R.key) && se.reverse(), pl(se);
                        }),
                        onBlur: z(e.onBlur, (R) => {
                          R.currentTarget.contains(R.target) || (window.clearTimeout(W.current), L.current = "");
                        }),
                        onPointerMove: z(
                          e.onPointerMove,
                          pt((R) => {
                            const B = R.target, H = D.current !== R.clientX;
                            if (R.currentTarget.contains(B) && H) {
                              const te = R.clientX > D.current ? "right" : "left";
                              $.current = te, D.current = R.clientX;
                            }
                          })
                        )
                      }
                    )
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
_o.displayName = de;
var ol = "MenuGroup", In = l.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ y.jsx(oe.div, { role: "group", ...r, ref: t });
  }
);
In.displayName = ol;
var sl = "MenuLabel", Oo = l.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ y.jsx(oe.div, { ...r, ref: t });
  }
);
Oo.displayName = sl;
var Ft = "MenuItem", hr = "menu.itemSelect", Kt = l.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e, s = l.useRef(null), i = wt(Ft, e.__scopeMenu), a = Nn(Ft, e.__scopeMenu), u = ie(t, s), c = l.useRef(!1), p = () => {
      const d = s.current;
      if (!n && d) {
        const g = new CustomEvent(hr, { bubbles: !0, cancelable: !0 });
        d.addEventListener(hr, (v) => r == null ? void 0 : r(v), { once: !0 }), _r(d, g), g.defaultPrevented ? c.current = !1 : i.onClose();
      }
    };
    return /* @__PURE__ */ y.jsx(
      To,
      {
        ...o,
        ref: u,
        disabled: n,
        onClick: z(e.onClick, p),
        onPointerDown: (d) => {
          var g;
          (g = e.onPointerDown) == null || g.call(e, d), c.current = !0;
        },
        onPointerUp: z(e.onPointerUp, (d) => {
          var g;
          c.current || (g = d.currentTarget) == null || g.click();
        }),
        onKeyDown: z(e.onKeyDown, (d) => {
          const g = a.searchRef.current !== "";
          n || g && d.key === " " || vn.includes(d.key) && (d.currentTarget.click(), d.preventDefault());
        })
      }
    );
  }
);
Kt.displayName = Ft;
var To = l.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...s } = e, i = Nn(Ft, n), a = So(n), u = l.useRef(null), c = ie(t, u), [p, d] = l.useState(!1), [g, v] = l.useState("");
    return l.useEffect(() => {
      const h = u.current;
      h && v((h.textContent ?? "").trim());
    }, [s.children]), /* @__PURE__ */ y.jsx(
      ft.ItemSlot,
      {
        scope: n,
        disabled: r,
        textValue: o ?? g,
        children: /* @__PURE__ */ y.jsx(sc, { asChild: !0, ...a, focusable: !r, children: /* @__PURE__ */ y.jsx(
          oe.div,
          {
            role: "menuitem",
            "data-highlighted": p ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...s,
            ref: c,
            onPointerMove: z(
              e.onPointerMove,
              pt((h) => {
                r ? i.onItemLeave(h) : (i.onItemEnter(h), h.defaultPrevented || h.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: z(
              e.onPointerLeave,
              pt((h) => i.onItemLeave(h))
            ),
            onFocus: z(e.onFocus, () => d(!0)),
            onBlur: z(e.onBlur, () => d(!1))
          }
        ) })
      }
    );
  }
), il = "MenuCheckboxItem", No = l.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return /* @__PURE__ */ y.jsx(Lo, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ y.jsx(
      Kt,
      {
        role: "menuitemcheckbox",
        "aria-checked": $t(n) ? "mixed" : n,
        ...o,
        ref: t,
        "data-state": Ln(n),
        onSelect: z(
          o.onSelect,
          () => r == null ? void 0 : r($t(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
No.displayName = il;
var ko = "MenuRadioGroup", [al, cl] = We(
  ko,
  { value: void 0, onValueChange: () => {
  } }
), Io = l.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: r, ...o } = e, s = fe(r);
    return /* @__PURE__ */ y.jsx(al, { scope: e.__scopeMenu, value: n, onValueChange: s, children: /* @__PURE__ */ y.jsx(In, { ...o, ref: t }) });
  }
);
Io.displayName = ko;
var Do = "MenuRadioItem", jo = l.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = cl(Do, e.__scopeMenu), s = n === o.value;
    return /* @__PURE__ */ y.jsx(Lo, { scope: e.__scopeMenu, checked: s, children: /* @__PURE__ */ y.jsx(
      Kt,
      {
        role: "menuitemradio",
        "aria-checked": s,
        ...r,
        ref: t,
        "data-state": Ln(s),
        onSelect: z(
          r.onSelect,
          () => {
            var i;
            return (i = o.onValueChange) == null ? void 0 : i.call(o, n);
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
jo.displayName = Do;
var Dn = "MenuItemIndicator", [Lo, ll] = We(
  Dn,
  { checked: !1 }
), Fo = l.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e, s = ll(Dn, n);
    return /* @__PURE__ */ y.jsx(
      ht,
      {
        present: r || $t(s.checked) || s.checked === !0,
        children: /* @__PURE__ */ y.jsx(
          oe.span,
          {
            ...o,
            ref: t,
            "data-state": Ln(s.checked)
          }
        )
      }
    );
  }
);
Fo.displayName = Dn;
var ul = "MenuSeparator", $o = l.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ y.jsx(
      oe.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...r,
        ref: t
      }
    );
  }
);
$o.displayName = ul;
var dl = "MenuArrow", zo = l.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = bt(n);
    return /* @__PURE__ */ y.jsx(Ga, { ...o, ...r, ref: t });
  }
);
zo.displayName = dl;
var jn = "MenuSub", [fl, Wo] = We(jn), Bo = (e) => {
  const { __scopeMenu: t, children: n, open: r = !1, onOpenChange: o } = e, s = Ie(jn, t), i = bt(t), [a, u] = l.useState(null), [c, p] = l.useState(null), d = fe(o);
  return l.useEffect(() => (s.open === !1 && d(!1), () => d(!1)), [s.open, d]), /* @__PURE__ */ y.jsx(oo, { ...i, children: /* @__PURE__ */ y.jsx(
    Ro,
    {
      scope: t,
      open: r,
      onOpenChange: d,
      content: c,
      onContentChange: p,
      children: /* @__PURE__ */ y.jsx(
        fl,
        {
          scope: t,
          contentId: lt(),
          triggerId: lt(),
          trigger: a,
          onTriggerChange: u,
          children: n
        }
      )
    }
  ) });
};
Bo.displayName = jn;
var ct = "MenuSubTrigger", Go = l.forwardRef(
  (e, t) => {
    const n = Ie(ct, e.__scopeMenu), r = wt(ct, e.__scopeMenu), o = Wo(ct, e.__scopeMenu), s = Nn(ct, e.__scopeMenu), i = l.useRef(null), { pointerGraceTimerRef: a, onPointerGraceIntentChange: u } = s, c = { __scopeMenu: e.__scopeMenu }, p = l.useCallback(() => {
      i.current && window.clearTimeout(i.current), i.current = null;
    }, []);
    return l.useEffect(() => p, [p]), l.useEffect(() => {
      const d = a.current;
      return () => {
        window.clearTimeout(d), u(null);
      };
    }, [a, u]), /* @__PURE__ */ y.jsx(On, { asChild: !0, ...c, children: /* @__PURE__ */ y.jsx(
      To,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": o.contentId,
        "data-state": Ko(n.open),
        ...e,
        ref: zt(t, o.onTriggerChange),
        onClick: (d) => {
          var g;
          (g = e.onClick) == null || g.call(e, d), !(e.disabled || d.defaultPrevented) && (d.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: z(
          e.onPointerMove,
          pt((d) => {
            s.onItemEnter(d), !d.defaultPrevented && !e.disabled && !n.open && !i.current && (s.onPointerGraceIntentChange(null), i.current = window.setTimeout(() => {
              n.onOpenChange(!0), p();
            }, 100));
          })
        ),
        onPointerLeave: z(
          e.onPointerLeave,
          pt((d) => {
            var v, h;
            p();
            const g = (v = n.content) == null ? void 0 : v.getBoundingClientRect();
            if (g) {
              const m = (h = n.content) == null ? void 0 : h.dataset.side, b = m === "right", w = b ? -5 : 5, E = g[b ? "left" : "right"], S = g[b ? "right" : "left"];
              s.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: d.clientX + w, y: d.clientY },
                  { x: E, y: g.top },
                  { x: S, y: g.top },
                  { x: S, y: g.bottom },
                  { x: E, y: g.bottom }
                ],
                side: m
              }), window.clearTimeout(a.current), a.current = window.setTimeout(
                () => s.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (s.onTriggerLeave(d), d.defaultPrevented) return;
              s.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: z(e.onKeyDown, (d) => {
          var v;
          const g = s.searchRef.current !== "";
          e.disabled || g && d.key === " " || Hc[r.dir].includes(d.key) && (n.onOpenChange(!0), (v = n.content) == null || v.focus(), d.preventDefault());
        })
      }
    ) });
  }
);
Go.displayName = ct;
var Uo = "MenuSubContent", Vo = l.forwardRef(
  (e, t) => {
    const n = Ao(de, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, s = Ie(de, e.__scopeMenu), i = wt(de, e.__scopeMenu), a = Wo(Uo, e.__scopeMenu), u = l.useRef(null), c = ie(t, u);
    return /* @__PURE__ */ y.jsx(ft.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ y.jsx(ht, { present: r || s.open, children: /* @__PURE__ */ y.jsx(ft.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ y.jsx(
      kn,
      {
        id: a.contentId,
        "aria-labelledby": a.triggerId,
        ...o,
        ref: c,
        align: "start",
        side: i.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (p) => {
          var d;
          i.isUsingKeyboardRef.current && ((d = u.current) == null || d.focus()), p.preventDefault();
        },
        onCloseAutoFocus: (p) => p.preventDefault(),
        onFocusOutside: z(e.onFocusOutside, (p) => {
          p.target !== a.trigger && s.onOpenChange(!1);
        }),
        onEscapeKeyDown: z(e.onEscapeKeyDown, (p) => {
          i.onClose(), p.preventDefault();
        }),
        onKeyDown: z(e.onKeyDown, (p) => {
          var v;
          const d = p.currentTarget.contains(p.target), g = Xc[i.dir].includes(p.key);
          d && g && (s.onOpenChange(!1), (v = a.trigger) == null || v.focus(), p.preventDefault());
        })
      }
    ) }) }) });
  }
);
Vo.displayName = Uo;
function Ko(e) {
  return e ? "open" : "closed";
}
function $t(e) {
  return e === "indeterminate";
}
function Ln(e) {
  return $t(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function pl(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function ml(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function gl(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((c) => c === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let i = ml(e, Math.max(s, 0));
  o.length === 1 && (i = i.filter((c) => c !== n));
  const u = i.find(
    (c) => c.toLowerCase().startsWith(o.toLowerCase())
  );
  return u !== n ? u : void 0;
}
function hl(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let s = 0, i = t.length - 1; s < t.length; i = s++) {
    const a = t[s].x, u = t[s].y, c = t[i].x, p = t[i].y;
    u > r != p > r && n < (c - a) * (r - u) / (p - u) + a && (o = !o);
  }
  return o;
}
function vl(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return hl(n, t);
}
function pt(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var bl = Mo, wl = On, yl = Po, xl = _o, El = In, Cl = Oo, Sl = Kt, Rl = No, Ml = Io, Al = jo, Pl = Fo, _l = $o, Ol = zo, Tl = Bo, Nl = Go, kl = Vo, Fn = "DropdownMenu", [Il, xu] = mt(
  Fn,
  [Co]
), ee = Co(), [Dl, Yo] = Il(Fn), Ho = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: r,
    open: o,
    defaultOpen: s,
    onOpenChange: i,
    modal: a = !0
  } = e, u = ee(t), c = l.useRef(null), [p = !1, d] = yn({
    prop: o,
    defaultProp: s,
    onChange: i
  });
  return /* @__PURE__ */ y.jsx(
    Dl,
    {
      scope: t,
      triggerId: lt(),
      triggerRef: c,
      contentId: lt(),
      open: p,
      onOpenChange: d,
      onOpenToggle: l.useCallback(() => d((g) => !g), [d]),
      modal: a,
      children: /* @__PURE__ */ y.jsx(bl, { ...u, open: p, onOpenChange: d, dir: r, modal: a, children: n })
    }
  );
};
Ho.displayName = Fn;
var Xo = "DropdownMenuTrigger", qo = l.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, s = Yo(Xo, n), i = ee(n);
    return /* @__PURE__ */ y.jsx(wl, { asChild: !0, ...i, children: /* @__PURE__ */ y.jsx(
      oe.button,
      {
        type: "button",
        id: s.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": s.open,
        "aria-controls": s.open ? s.contentId : void 0,
        "data-state": s.open ? "open" : "closed",
        "data-disabled": r ? "" : void 0,
        disabled: r,
        ...o,
        ref: zt(t, s.triggerRef),
        onPointerDown: z(e.onPointerDown, (a) => {
          !r && a.button === 0 && a.ctrlKey === !1 && (s.onOpenToggle(), s.open || a.preventDefault());
        }),
        onKeyDown: z(e.onKeyDown, (a) => {
          r || (["Enter", " "].includes(a.key) && s.onOpenToggle(), a.key === "ArrowDown" && s.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(a.key) && a.preventDefault());
        })
      }
    ) });
  }
);
qo.displayName = Xo;
var jl = "DropdownMenuPortal", Zo = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = ee(t);
  return /* @__PURE__ */ y.jsx(yl, { ...r, ...n });
};
Zo.displayName = jl;
var Jo = "DropdownMenuContent", Qo = l.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Yo(Jo, n), s = ee(n), i = l.useRef(!1);
    return /* @__PURE__ */ y.jsx(
      xl,
      {
        id: o.contentId,
        "aria-labelledby": o.triggerId,
        ...s,
        ...r,
        ref: t,
        onCloseAutoFocus: z(e.onCloseAutoFocus, (a) => {
          var u;
          i.current || (u = o.triggerRef.current) == null || u.focus(), i.current = !1, a.preventDefault();
        }),
        onInteractOutside: z(e.onInteractOutside, (a) => {
          const u = a.detail.originalEvent, c = u.button === 0 && u.ctrlKey === !0, p = u.button === 2 || c;
          (!o.modal || p) && (i.current = !0);
        }),
        style: {
          ...e.style,
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
Qo.displayName = Jo;
var Ll = "DropdownMenuGroup", es = l.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = ee(n);
    return /* @__PURE__ */ y.jsx(El, { ...o, ...r, ref: t });
  }
);
es.displayName = Ll;
var Fl = "DropdownMenuLabel", ts = l.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = ee(n);
    return /* @__PURE__ */ y.jsx(Cl, { ...o, ...r, ref: t });
  }
);
ts.displayName = Fl;
var $l = "DropdownMenuItem", ns = l.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = ee(n);
    return /* @__PURE__ */ y.jsx(Sl, { ...o, ...r, ref: t });
  }
);
ns.displayName = $l;
var zl = "DropdownMenuCheckboxItem", rs = l.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = ee(n);
  return /* @__PURE__ */ y.jsx(Rl, { ...o, ...r, ref: t });
});
rs.displayName = zl;
var Wl = "DropdownMenuRadioGroup", os = l.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = ee(n);
  return /* @__PURE__ */ y.jsx(Ml, { ...o, ...r, ref: t });
});
os.displayName = Wl;
var Bl = "DropdownMenuRadioItem", ss = l.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = ee(n);
  return /* @__PURE__ */ y.jsx(Al, { ...o, ...r, ref: t });
});
ss.displayName = Bl;
var Gl = "DropdownMenuItemIndicator", is = l.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = ee(n);
  return /* @__PURE__ */ y.jsx(Pl, { ...o, ...r, ref: t });
});
is.displayName = Gl;
var Ul = "DropdownMenuSeparator", as = l.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = ee(n);
  return /* @__PURE__ */ y.jsx(_l, { ...o, ...r, ref: t });
});
as.displayName = Ul;
var Vl = "DropdownMenuArrow", Kl = l.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = ee(n);
    return /* @__PURE__ */ y.jsx(Ol, { ...o, ...r, ref: t });
  }
);
Kl.displayName = Vl;
var Yl = (e) => {
  const { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: o, defaultOpen: s } = e, i = ee(t), [a = !1, u] = yn({
    prop: r,
    defaultProp: s,
    onChange: o
  });
  return /* @__PURE__ */ y.jsx(Tl, { ...i, open: a, onOpenChange: u, children: n });
}, Hl = "DropdownMenuSubTrigger", cs = l.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = ee(n);
  return /* @__PURE__ */ y.jsx(Nl, { ...o, ...r, ref: t });
});
cs.displayName = Hl;
var Xl = "DropdownMenuSubContent", ls = l.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = ee(n);
  return /* @__PURE__ */ y.jsx(
    kl,
    {
      ...o,
      ...r,
      ref: t,
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
ls.displayName = Xl;
var ql = Ho, Zl = qo, us = Zo, Jl = Qo, Ql = es, eu = ts, tu = ns, nu = rs, ru = os, ou = ss, ds = is, su = as, iu = Yl, au = cs, cu = ls;
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lu = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), fs = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var uu = {
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
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const du = vr(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: s,
    iconNode: i,
    ...a
  }, u) => sn(
    "svg",
    {
      ref: u,
      ...uu,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: fs("lucide", o),
      ...a
    },
    [
      ...i.map(([c, p]) => sn(c, p)),
      ...Array.isArray(s) ? s : [s]
    ]
  )
);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $n = (e, t) => {
  const n = vr(
    ({ className: r, ...o }, s) => sn(du, {
      ref: s,
      iconNode: t,
      className: fs(`lucide-${lu(e)}`, r),
      ...o
    })
  );
  return n.displayName = `${e}`, n;
};
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fu = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], pu = $n("Check", fu);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mu = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], gu = $n("ChevronRight", mu);
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hu = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], vu = $n("Circle", hu);
function Eu({
  ...e
}) {
  return /* @__PURE__ */ y.jsx(ql, { "data-slot": "dropdown-menu", ...e });
}
function Cu({
  ...e
}) {
  return /* @__PURE__ */ y.jsx(us, { "data-slot": "dropdown-menu-portal", ...e });
}
function Su({
  ...e
}) {
  return /* @__PURE__ */ y.jsx(
    Zl,
    {
      "data-slot": "dropdown-menu-trigger",
      ...e
    }
  );
}
function Ru({
  className: e,
  sideOffset: t = 4,
  ...n
}) {
  return /* @__PURE__ */ y.jsx(us, { children: /* @__PURE__ */ y.jsx(
    Jl,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset: t,
      className: be(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        e
      ),
      ...n
    }
  ) });
}
function Mu({
  ...e
}) {
  return /* @__PURE__ */ y.jsx(Ql, { "data-slot": "dropdown-menu-group", ...e });
}
function Au({
  className: e,
  inset: t,
  variant: n = "default",
  ...r
}) {
  return /* @__PURE__ */ y.jsx(
    tu,
    {
      "data-slot": "dropdown-menu-item",
      "data-inset": t,
      "data-variant": n,
      className: be(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive-foreground data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/40 data-[variant=destructive]:focus:text-destructive-foreground data-[variant=destructive]:*:[svg]:!text-destructive-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r
    }
  );
}
function Pu({
  className: e,
  children: t,
  checked: n,
  ...r
}) {
  return /* @__PURE__ */ y.jsxs(
    nu,
    {
      "data-slot": "dropdown-menu-checkbox-item",
      className: be(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      checked: n,
      ...r,
      children: [
        /* @__PURE__ */ y.jsx("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ y.jsx(ds, { children: /* @__PURE__ */ y.jsx(pu, { className: "size-4" }) }) }),
        t
      ]
    }
  );
}
function _u({
  ...e
}) {
  return /* @__PURE__ */ y.jsx(
    ru,
    {
      "data-slot": "dropdown-menu-radio-group",
      ...e
    }
  );
}
function Ou({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ y.jsxs(
    ou,
    {
      "data-slot": "dropdown-menu-radio-item",
      className: be(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ y.jsx("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ y.jsx(ds, { children: /* @__PURE__ */ y.jsx(vu, { className: "size-2 fill-current" }) }) }),
        t
      ]
    }
  );
}
function Tu({
  className: e,
  inset: t,
  ...n
}) {
  return /* @__PURE__ */ y.jsx(
    eu,
    {
      "data-slot": "dropdown-menu-label",
      "data-inset": t,
      className: be(
        "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        e
      ),
      ...n
    }
  );
}
function Nu({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ y.jsx(
    su,
    {
      "data-slot": "dropdown-menu-separator",
      className: be("bg-border -mx-1 my-1 h-px", e),
      ...t
    }
  );
}
function ku({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ y.jsx(
    "span",
    {
      "data-slot": "dropdown-menu-shortcut",
      className: be(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        e
      ),
      ...t
    }
  );
}
function Iu({
  ...e
}) {
  return /* @__PURE__ */ y.jsx(iu, { "data-slot": "dropdown-menu-sub", ...e });
}
function Du({
  className: e,
  inset: t,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ y.jsxs(
    au,
    {
      "data-slot": "dropdown-menu-sub-trigger",
      "data-inset": t,
      className: be(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8",
        e
      ),
      ...r,
      children: [
        n,
        /* @__PURE__ */ y.jsx(gu, { className: "ml-auto size-4" })
      ]
    }
  );
}
function ju({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ y.jsx(
    cu,
    {
      "data-slot": "dropdown-menu-sub-content",
      className: be(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-lg",
        e
      ),
      ...t
    }
  );
}
export {
  yu as Button,
  Eu as DropdownMenu,
  Pu as DropdownMenuCheckboxItem,
  Ru as DropdownMenuContent,
  Mu as DropdownMenuGroup,
  Au as DropdownMenuItem,
  Tu as DropdownMenuLabel,
  Cu as DropdownMenuPortal,
  _u as DropdownMenuRadioGroup,
  Ou as DropdownMenuRadioItem,
  Nu as DropdownMenuSeparator,
  ku as DropdownMenuShortcut,
  Iu as DropdownMenuSub,
  ju as DropdownMenuSubContent,
  Du as DropdownMenuSubTrigger,
  Su as DropdownMenuTrigger,
  fi as buttonVariants
};
