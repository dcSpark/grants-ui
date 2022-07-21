import U, { useLayoutEffect as xt, useEffect as $, useRef as C, useState as ce, forwardRef as ht, Fragment as se, isValidElement as Et, cloneElement as jt, createElement as It, createContext as ie, useContext as K, useReducer as Ur, useMemo as W } from "react";
const At = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxNCAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAuNzMzMDIyIDAuNTAwMDA1QzAuNTQ4MjgxIDAuNDk5MjkyIDAuMzcwNzQ4IDAuNTcxNDg3IDAuMjM5MDk2IDAuNzAwODUxQzAuMTA3NDQzIDAuODMwMjE2IDAuMDMyMzM2IDEuMDA2MjcgMC4wMzAxNTM4IDEuMTkwNjZMNC44NjI5NWUtMDUgNC43MDk0MkMtMC4wMDEwMzUyMiA0LjgwMTE5IDAuMDE2MDA4MyA0Ljg5MjI5IDAuMDUwMTk1NSA0Ljk3NzQ5QzAuMDg0MzgyNyA1LjA2MjY5IDAuMTM1MDQ4IDUuMTQwMzMgMC4xOTkzMDEgNS4yMDU5OEMwLjI2MzU1MyA1LjI3MTY0IDAuMzQwMTI4IDUuMzI0MDIgMC40MjQ2NjMgNS4zNjAxNEMwLjUwOTE5NyA1LjM5NjI1IDAuNjAwMDMzIDUuNDE1MzggMC42OTE5NzcgNS40MTY0NUMwLjc4NDQ5MyA1LjQxNzUzIDAuODc2MzA4IDUuNDAwMyAwLjk2MjExMiA1LjM2NTc2QzEuMDQ3OTIgNS4zMzEyMSAxLjEyNjAxIDUuMjgwMDIgMS4xOTE4OCA1LjIxNTE3QzEuMjU3NzQgNS4xNTAzMSAxLjMxMDA3IDUuMDczMDYgMS4zNDU4NSA0Ljk4NzlDMS4zODE2MyA0LjkwMjczIDEuNDAwMTQgNC44MTEzMyAxLjQwMDMyIDQuNzE4OTdMMS40MjYzIDEuODk3NjhIMTIuNTk5N1YxMy4wODE4TDkuNzkzNzMgMTMuMTAyM0M5LjYwODc2IDEzLjEwNDEgOS40MzIwMiAxMy4xNzg5IDkuMzAyMTEgMTMuMzEwNEM5LjE3MjIxIDEzLjQ0MTggOS4wOTk3IDEzLjYxOTMgOS4xMDA0NCAxMy44MDM5QzkuMTAwNzkgMTMuODk1NyA5LjExOTI1IDEzLjk4NjUgOS4xNTQ3NyAxNC4wNzExQzkuMTkwMjkgMTQuMTU1OCA5LjI0MjE2IDE0LjIzMjYgOS4zMDc0MyAxNC4yOTczQzkuMzcyNyAxNC4zNjE5IDkuNDUwMDggMTQuNDEzMSA5LjUzNTE3IDE0LjQ0NzlDOS42MjAyNSAxNC40ODI2IDkuNzExMzYgMTQuNTAwNCA5LjgwMzMgMTQuNUwxMy4zMDI2IDE0LjQ3NDFDMTMuNDg3MyAxNC40NzMzIDEzLjY2NDMgMTQuMzk5OCAxMy43OTQ5IDE0LjI2OTRDMTMuOTI1NiAxNC4xMzkgMTMuOTk5MyAxMy45NjIzIDE0IDEzLjc3OFYxLjE5NjExQzEzLjk5OTMgMS4wMTA3OCAxMy45MjQ4IDAuODMzMzIzIDEzLjc5MyAwLjcwMjc4MUMxMy42NjEyIDAuNTcyMjQgMTMuNDgyOCAwLjQ5OTI5OCAxMy4yOTcxIDAuNTAwMDA1SDAuNzMzMDIyWk0yLjEzMzI5IDYuNzg5NTZDMi4wNDEyMyA2Ljc4OTIgMS45NSA2LjgwNjk3IDEuODY0ODMgNi44NDE4NEMxLjc3OTY2IDYuODc2NzIgMS43MDIyMiA2LjkyODAxIDEuNjM2OTQgNi45OTI3OUMxLjU3MTY1IDcuMDU3NTggMS41MTk4MSA3LjEzNDU4IDEuNDg0MzcgNy4yMTkzOUMxLjQ0ODkzIDcuMzA0MiAxLjQzMDYgNy4zOTUxNSAxLjQzMDQyIDcuNDg3MDNDMS40MzAwNiA3LjU3OTI3IDEuNDQ4IDcuNjcwNjUgMS40ODMyIDcuNzU1OTNDMS41MTgzOSA3Ljg0MTIxIDEuNTcwMTUgNy45MTg3IDEuNjM1NDggNy45ODM5MkMxLjcwMDgyIDguMDQ5MTQgMS43Nzg0NSA4LjEwMDgxIDEuODYzODkgOC4xMzU5NEMxLjk0OTMzIDguMTcxMDcgMi4wNDA4OSA4LjE4ODk2IDIuMTMzMjkgOC4xODg2SDUuMzI3NjVMMC4yMzY2MzggMTMuMjg1MkMwLjEwNjIwNCAxMy40MTYyIDAuMDMyOTk1NiAxMy41OTMzIDAuMDMyOTk1NiAxMy43NzhDMC4wMzI5OTU2IDEzLjk2MjYgMC4xMDYyMDQgMTQuMTM5NyAwLjIzNjYzOCAxNC4yNzA3QzAuMzA0MTAxIDE0LjMzODUgMC4zODQ3ODIgMTQuMzkxOCAwLjQ3MzY4OCAxNC40MjcyQzAuNTYyNTk0IDE0LjQ2MjcgMC42NTc4MzYgMTQuNDc5NSAwLjc1MzUzNCAxNC40NzY4QzAuOTMyNzQ1IDE0LjQ3MTQgMS4xMDMwNyAxNC4zOTc3IDEuMjI5NDEgMTQuMjcwN0w2LjMzNTQ2IDkuMTY0NTJWMTIuMzc3NUM2LjMzNTEgMTIuNDY5MyA2LjM1Mjg0IDEyLjU2MDMgNi4zODc3IDEyLjY0NTJDNi40MjI1NSAxMi43MzAxIDYuNDczODMgMTIuODA3NCA2LjUzODU5IDEyLjg3MjVDNi42MDMzNSAxMi45Mzc2IDYuNjgwMzMgMTIuOTg5NCA2Ljc2NTEzIDEzLjAyNDlDNi44NDk5NCAxMy4wNjAzIDYuOTQwOTEgMTMuMDc4OCA3LjAzMjg1IDEzLjA3OTFDNy4xMjUyNiAxMy4wNzk1IDcuMjE2ODIgMTMuMDYxNiA3LjMwMjI2IDEzLjAyNjRDNy4zODc3IDEyLjk5MTMgNy40NjUzMiAxMi45Mzk2IDcuNTMwNjYgMTIuODc0NEM3LjU5NiAxMi44MDkyIDcuNjQ3NzYgMTIuNzMxNyA3LjY4Mjk2IDEyLjY0NjRDNy43MTgxNSAxMi41NjEyIDcuNzM2MDggMTIuNDY5OCA3LjczNTcyIDEyLjM3NzVWNy40ODcwM0M3LjczNTUzIDcuMzk1MTUgNy43MTcxOSA3LjMwNDIxIDcuNjgxNzUgNy4yMTk0QzcuNjQ2MzEgNy4xMzQ2IDcuNTk0NDcgNy4wNTc2IDcuNTI5MTggNi45OTI4MkM3LjQ2MzkgNi45MjgwMyA3LjM4NjQ3IDYuODc2NzQgNy4zMDEzIDYuODQxODZDNy4yMTYxNCA2LjgwNjk5IDcuMTI0OTEgNi43ODkyMSA3LjAzMjg1IDYuNzg5NTZIMi4xMzMyOVoiIGZpbGw9IiNGRjk4MjgiLz4KPC9zdmc+Cg==", wt = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE4LjcwNzEgMTQuNzA3MUMxOC4zMTY2IDE1LjA5NzYgMTcuNjgzNCAxNS4wOTc2IDE3LjI5MjkgMTQuNzA3MUwxMiA5LjQxNDIxTDYuNzA3MTEgMTQuNzA3MUM2LjMxNjU4IDE1LjA5NzYgNS42ODM0MiAxNS4wOTc2IDUuMjkyODkgMTQuNzA3MUM0LjkwMjM3IDE0LjMxNjYgNC45MDIzNyAxMy42ODM0IDUuMjkyODkgMTMuMjkyOUwxMS4yOTI5IDcuMjkyODlDMTEuNjgzNCA2LjkwMjM3IDEyLjMxNjYgNi45MDIzNyAxMi43MDcxIDcuMjkyODlMMTguNzA3MSAxMy4yOTI5QzE5LjA5NzYgMTMuNjgzNCAxOS4wOTc2IDE0LjMxNjYgMTguNzA3MSAxNC43MDcxWiIgZmlsbD0iIzgwODA4MCIvPgo8L3N2Zz4K";
let q = typeof window < "u" ? xt : $;
function ae(e) {
  let t = C(e);
  return q(() => {
    t.current = e;
  }, [e]), t;
}
function Ce() {
  let e = [], t = [], n = { enqueue(a) {
    t.push(a);
  }, addEventListener(a, i, o, s) {
    return a.addEventListener(i, o, s), n.add(() => a.removeEventListener(i, o, s));
  }, requestAnimationFrame(...a) {
    let i = requestAnimationFrame(...a);
    return n.add(() => cancelAnimationFrame(i));
  }, nextFrame(...a) {
    return n.requestAnimationFrame(() => n.requestAnimationFrame(...a));
  }, setTimeout(...a) {
    let i = setTimeout(...a);
    return n.add(() => clearTimeout(i));
  }, add(a) {
    return e.push(a), () => {
      let i = e.indexOf(a);
      if (i >= 0) {
        let [o] = e.splice(i, 1);
        o();
      }
    };
  }, dispose() {
    for (let a of e.splice(0))
      a();
  }, async workQueue() {
    for (let a of t.splice(0))
      await a();
  } };
  return n;
}
function Ot() {
  let [e] = ce(Ce);
  return $(() => () => e.dispose(), [e]), e;
}
let Q = function(e) {
  let t = ae(e);
  return U.useCallback((...n) => t.current(...n), [t]);
}, Ve = { serverHandoffComplete: !1 };
function tr() {
  let [e, t] = ce(Ve.serverHandoffComplete);
  return $(() => {
    e !== !0 && t(!0);
  }, [e]), $(() => {
    Ve.serverHandoffComplete === !1 && (Ve.serverHandoffComplete = !0);
  }, []), e;
}
var Pr;
let St = 0;
function Cr() {
  return ++St;
}
let Te = (Pr = U.useId) != null ? Pr : function() {
  let e = tr(), [t, n] = U.useState(e ? Cr : null);
  return q(() => {
    t === null && n(Cr());
  }, [t]), t != null ? "" + t : void 0;
};
function L(e, t, ...n) {
  if (e in t) {
    let i = t[e];
    return typeof i == "function" ? i(...n) : i;
  }
  let a = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((i) => `"${i}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(a, L), a;
}
function zt(e) {
  return typeof window > "u" ? null : e instanceof Node ? e.ownerDocument : e != null && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document;
}
let Pt = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var V = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(V || {}), Ct = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Ct || {}), Lt = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Lt || {});
function kt(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(Pt));
}
var Rt = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Rt || {});
let _t = ["textarea", "input"].join(",");
function $t(e) {
  var t, n;
  return (n = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, _t)) != null ? n : !1;
}
function Xe(e, t = (n) => n) {
  return e.slice().sort((n, a) => {
    let i = t(n), o = t(a);
    if (i === null || o === null)
      return 0;
    let s = i.compareDocumentPosition(o);
    return s & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : s & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Me(e, t, n = !0) {
  let a = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument, i = Array.isArray(e) ? n ? Xe(e) : e : kt(e), o = a.activeElement, s = (() => {
    if (t & 5)
      return 1;
    if (t & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), d = (() => {
    if (t & 1)
      return 0;
    if (t & 2)
      return Math.max(0, i.indexOf(o)) - 1;
    if (t & 4)
      return Math.max(0, i.indexOf(o)) + 1;
    if (t & 8)
      return i.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), c = t & 32 ? { preventScroll: !0 } : {}, f = 0, p = i.length, M;
  do {
    if (f >= p || f + p <= 0)
      return 0;
    let g = d + f;
    if (t & 16)
      g = (g + p) % p;
    else {
      if (g < 0)
        return 3;
      if (g >= p)
        return 1;
    }
    M = i[g], M == null || M.focus(c), f += s;
  } while (M !== a.activeElement);
  return t & 6 && $t(M) && M.select(), M.hasAttribute("tabindex") || M.setAttribute("tabindex", "0"), 2;
}
function Lr(e) {
  var t;
  if (e.type)
    return e.type;
  let n = (t = e.as) != null ? t : "button";
  if (typeof n == "string" && n.toLowerCase() === "button")
    return "button";
}
function Fr(e, t) {
  let [n, a] = ce(() => Lr(e));
  return q(() => {
    a(Lr(e));
  }, [e.type, e.as]), q(() => {
    n || !t.current || t.current instanceof HTMLButtonElement && !t.current.hasAttribute("type") && a("button");
  }, [n, t]), n;
}
let Qr = Symbol();
function Ut(e, t = !0) {
  return Object.assign(e, { [Qr]: t });
}
function J(...e) {
  let t = C(e);
  $(() => {
    t.current = e;
  }, [e]);
  let n = Q((a) => {
    for (let i of t.current)
      i != null && (typeof i == "function" ? i(a) : i.current = a);
  });
  return e.every((a) => a == null || (a == null ? void 0 : a[Qr])) ? void 0 : n;
}
var ve = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(ve || {}), ne = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(ne || {});
function Z({ ourProps: e, theirProps: t, slot: n, defaultTag: a, features: i, visible: o = !0, name: s }) {
  let d = Yr(t, e);
  if (o)
    return ze(d, n, a, s);
  let c = i != null ? i : 0;
  if (c & 2) {
    let { static: f = !1, ...p } = d;
    if (f)
      return ze(p, n, a, s);
  }
  if (c & 1) {
    let { unmount: f = !0, ...p } = d;
    return L(f ? 0 : 1, { [0]() {
      return null;
    }, [1]() {
      return ze({ ...p, hidden: !0, style: { display: "none" } }, n, a, s);
    } });
  }
  return ze(d, n, a, s);
}
function ze(e, t = {}, n, a) {
  let { as: i = n, children: o, refName: s = "ref", ...d } = Ze(e, ["unmount", "static"]), c = e.ref !== void 0 ? { [s]: e.ref } : {}, f = typeof o == "function" ? o(t) : o;
  d.className && typeof d.className == "function" && (d.className = d.className(t));
  let p = {};
  if (i === se && Object.keys(kr(d)).length > 0) {
    if (!Et(f) || Array.isArray(f) && f.length > 1)
      throw new Error(['Passing props on "Fragment"!', "", `The current component <${a} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(d).map((M) => `  - ${M}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((M) => `  - ${M}`).join(`
`)].join(`
`));
    return jt(f, Object.assign({}, Yr(f.props, kr(Ze(d, ["ref"]))), p, c));
  }
  return It(i, Object.assign({}, Ze(d, ["ref"]), i !== se && c, i !== se && p), f);
}
function Yr(...e) {
  if (e.length === 0)
    return {};
  if (e.length === 1)
    return e[0];
  let t = {}, n = {};
  for (let a of e)
    for (let i in a)
      i.startsWith("on") && typeof a[i] == "function" ? (n[i] != null || (n[i] = []), n[i].push(a[i])) : t[i] = a[i];
  if (t.disabled || t["aria-disabled"])
    return Object.assign(t, Object.fromEntries(Object.keys(n).map((a) => [a, void 0])));
  for (let a in n)
    Object.assign(t, { [a](i, ...o) {
      let s = n[a];
      for (let d of s) {
        if (i.defaultPrevented)
          return;
        d(i, ...o);
      }
    } });
  return t;
}
function H(e) {
  var t;
  return Object.assign(ht(e), { displayName: (t = e.displayName) != null ? t : e.name });
}
function kr(e) {
  let t = Object.assign({}, e);
  for (let n in t)
    t[n] === void 0 && delete t[n];
  return t;
}
function Ze(e, t = []) {
  let n = Object.assign({}, e);
  for (let a of t)
    a in n && delete n[a];
  return n;
}
function Ft(e) {
  let t = e.parentElement, n = null;
  for (; t && !(t instanceof HTMLFieldSetElement); )
    t instanceof HTMLLegendElement && (n = t), t = t.parentElement;
  let a = (t == null ? void 0 : t.getAttribute("disabled")) === "";
  return a && Qt(n) ? !1 : a;
}
function Qt(e) {
  if (!e)
    return !1;
  let t = e.previousElementSibling;
  for (; t !== null; ) {
    if (t instanceof HTMLLegendElement)
      return !1;
    t = t.previousElementSibling;
  }
  return !0;
}
let Yt = "div";
var Wr = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Wr || {});
let Wt = H(function(e, t) {
  let { features: n = 1, ...a } = e, i = { ref: t, "aria-hidden": (n & 2) === 2 ? !0 : void 0, style: { position: "absolute", width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n & 4) === 4 && (n & 2) !== 2 && { display: "none" } } };
  return Z({ ourProps: i, theirProps: a, slot: {}, defaultTag: Yt, name: "Hidden" });
}), nr = ie(null);
nr.displayName = "OpenClosedContext";
var le = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(le || {});
function ar() {
  return K(nr);
}
function Hr({ value: e, children: t }) {
  return U.createElement(nr.Provider, { value: e }, t);
}
var R = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(R || {}), Le = { exports: {} }, be = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rr;
function Ht() {
  if (Rr)
    return be;
  Rr = 1;
  var e = U, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(d, c, f) {
    var p, M = {}, g = null, j = null;
    f !== void 0 && (g = "" + f), c.key !== void 0 && (g = "" + c.key), c.ref !== void 0 && (j = c.ref);
    for (p in c)
      a.call(c, p) && !o.hasOwnProperty(p) && (M[p] = c[p]);
    if (d && d.defaultProps)
      for (p in c = d.defaultProps, c)
        M[p] === void 0 && (M[p] = c[p]);
    return { $$typeof: t, type: d, key: g, ref: j, props: M, _owner: i.current };
  }
  return be.Fragment = n, be.jsx = s, be.jsxs = s, be;
}
var Ne = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _r;
function Bt() {
  return _r || (_r = 1, process.env.NODE_ENV !== "production" && function() {
    var e = U, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), d = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), M = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), j = Symbol.for("react.offscreen"), I = Symbol.iterator, x = "@@iterator";
    function N(r) {
      if (r === null || typeof r != "object")
        return null;
      var l = I && r[I] || r[x];
      return typeof l == "function" ? l : null;
    }
    var E = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function D(r) {
      {
        for (var l = arguments.length, u = new Array(l > 1 ? l - 1 : 0), v = 1; v < l; v++)
          u[v - 1] = arguments[v];
        k("error", r, u);
      }
    }
    function k(r, l, u) {
      {
        var v = E.ReactDebugCurrentFrame, T = v.getStackAddendum();
        T !== "" && (l += "%s", u = u.concat([T]));
        var A = u.map(function(b) {
          return String(b);
        });
        A.unshift("Warning: " + l), Function.prototype.apply.call(console[r], console, A);
      }
    }
    var oe = !1, z = !1, B = !1, G = !1, h = !1, P;
    P = Symbol.for("react.module.reference");
    function me(r) {
      return !!(typeof r == "string" || typeof r == "function" || r === a || r === o || h || r === i || r === f || r === p || G || r === j || oe || z || B || typeof r == "object" && r !== null && (r.$$typeof === g || r.$$typeof === M || r.$$typeof === s || r.$$typeof === d || r.$$typeof === c || r.$$typeof === P || r.getModuleId !== void 0));
    }
    function $e(r, l, u) {
      var v = r.displayName;
      if (v)
        return v;
      var T = l.displayName || l.name || "";
      return T !== "" ? u + "(" + T + ")" : u;
    }
    function de(r) {
      return r.displayName || "Context";
    }
    function F(r) {
      if (r == null)
        return null;
      if (typeof r.tag == "number" && D("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
        return r.displayName || r.name || null;
      if (typeof r == "string")
        return r;
      switch (r) {
        case a:
          return "Fragment";
        case n:
          return "Portal";
        case o:
          return "Profiler";
        case i:
          return "StrictMode";
        case f:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case d:
            var l = r;
            return de(l) + ".Consumer";
          case s:
            var u = r;
            return de(u._context) + ".Provider";
          case c:
            return $e(r, r.render, "ForwardRef");
          case M:
            var v = r.displayName || null;
            return v !== null ? v : F(r.type) || "Memo";
          case g: {
            var T = r, A = T._payload, b = T._init;
            try {
              return F(b(A));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var X = Object.assign, ee = 0, ye, he, Ee, je, gr, vr, mr;
    function yr() {
    }
    yr.__reactDisabledLog = !0;
    function Jr() {
      {
        if (ee === 0) {
          ye = console.log, he = console.info, Ee = console.warn, je = console.error, gr = console.group, vr = console.groupCollapsed, mr = console.groupEnd;
          var r = {
            configurable: !0,
            enumerable: !0,
            value: yr,
            writable: !0
          };
          Object.defineProperties(console, {
            info: r,
            log: r,
            warn: r,
            error: r,
            group: r,
            groupCollapsed: r,
            groupEnd: r
          });
        }
        ee++;
      }
    }
    function Xr() {
      {
        if (ee--, ee === 0) {
          var r = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: X({}, r, {
              value: ye
            }),
            info: X({}, r, {
              value: he
            }),
            warn: X({}, r, {
              value: Ee
            }),
            error: X({}, r, {
              value: je
            }),
            group: X({}, r, {
              value: gr
            }),
            groupCollapsed: X({}, r, {
              value: vr
            }),
            groupEnd: X({}, r, {
              value: mr
            })
          });
        }
        ee < 0 && D("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ue = E.ReactCurrentDispatcher, Fe;
    function Ie(r, l, u) {
      {
        if (Fe === void 0)
          try {
            throw Error();
          } catch (T) {
            var v = T.stack.trim().match(/\n( *(at )?)/);
            Fe = v && v[1] || "";
          }
        return `
` + Fe + r;
      }
    }
    var Qe = !1, Ae;
    {
      var et = typeof WeakMap == "function" ? WeakMap : Map;
      Ae = new et();
    }
    function Dr(r, l) {
      if (!r || Qe)
        return "";
      {
        var u = Ae.get(r);
        if (u !== void 0)
          return u;
      }
      var v;
      Qe = !0;
      var T = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var A;
      A = Ue.current, Ue.current = null, Jr();
      try {
        if (l) {
          var b = function() {
            throw Error();
          };
          if (Object.defineProperty(b.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(b, []);
            } catch (re) {
              v = re;
            }
            Reflect.construct(r, [], b);
          } else {
            try {
              b.call();
            } catch (re) {
              v = re;
            }
            r.call(b.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (re) {
            v = re;
          }
          r();
        }
      } catch (re) {
        if (re && v && typeof re.stack == "string") {
          for (var y = re.stack.split(`
`), _ = v.stack.split(`
`), w = y.length - 1, S = _.length - 1; w >= 1 && S >= 0 && y[w] !== _[S]; )
            S--;
          for (; w >= 1 && S >= 0; w--, S--)
            if (y[w] !== _[S]) {
              if (w !== 1 || S !== 1)
                do
                  if (w--, S--, S < 0 || y[w] !== _[S]) {
                    var Y = `
` + y[w].replace(" at new ", " at ");
                    return r.displayName && Y.includes("<anonymous>") && (Y = Y.replace("<anonymous>", r.displayName)), typeof r == "function" && Ae.set(r, Y), Y;
                  }
                while (w >= 1 && S >= 0);
              break;
            }
        }
      } finally {
        Qe = !1, Ue.current = A, Xr(), Error.prepareStackTrace = T;
      }
      var pe = r ? r.displayName || r.name : "", zr = pe ? Ie(pe) : "";
      return typeof r == "function" && Ae.set(r, zr), zr;
    }
    function rt(r, l, u) {
      return Dr(r, !1);
    }
    function tt(r) {
      var l = r.prototype;
      return !!(l && l.isReactComponent);
    }
    function we(r, l, u) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return Dr(r, tt(r));
      if (typeof r == "string")
        return Ie(r);
      switch (r) {
        case f:
          return Ie("Suspense");
        case p:
          return Ie("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case c:
            return rt(r.render);
          case M:
            return we(r.type, l, u);
          case g: {
            var v = r, T = v._payload, A = v._init;
            try {
              return we(A(T), l, u);
            } catch {
            }
          }
        }
      return "";
    }
    var Oe = Object.prototype.hasOwnProperty, br = {}, Nr = E.ReactDebugCurrentFrame;
    function Se(r) {
      if (r) {
        var l = r._owner, u = we(r.type, r._source, l ? l.type : null);
        Nr.setExtraStackFrame(u);
      } else
        Nr.setExtraStackFrame(null);
    }
    function nt(r, l, u, v, T) {
      {
        var A = Function.call.bind(Oe);
        for (var b in r)
          if (A(r, b)) {
            var y = void 0;
            try {
              if (typeof r[b] != "function") {
                var _ = Error((v || "React class") + ": " + u + " type `" + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[b] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw _.name = "Invariant Violation", _;
              }
              y = r[b](l, b, v, u, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (w) {
              y = w;
            }
            y && !(y instanceof Error) && (Se(T), D("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", v || "React class", u, b, typeof y), Se(null)), y instanceof Error && !(y.message in br) && (br[y.message] = !0, Se(T), D("Failed %s type: %s", u, y.message), Se(null));
          }
      }
    }
    var at = Array.isArray;
    function Ye(r) {
      return at(r);
    }
    function it(r) {
      {
        var l = typeof Symbol == "function" && Symbol.toStringTag, u = l && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return u;
      }
    }
    function lt(r) {
      try {
        return Tr(r), !1;
      } catch {
        return !0;
      }
    }
    function Tr(r) {
      return "" + r;
    }
    function xr(r) {
      if (lt(r))
        return D("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", it(r)), Tr(r);
    }
    var De = E.ReactCurrentOwner, ot = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, hr, Er, We;
    We = {};
    function ut(r) {
      if (Oe.call(r, "ref")) {
        var l = Object.getOwnPropertyDescriptor(r, "ref").get;
        if (l && l.isReactWarning)
          return !1;
      }
      return r.ref !== void 0;
    }
    function st(r) {
      if (Oe.call(r, "key")) {
        var l = Object.getOwnPropertyDescriptor(r, "key").get;
        if (l && l.isReactWarning)
          return !1;
      }
      return r.key !== void 0;
    }
    function ct(r, l) {
      if (typeof r.ref == "string" && De.current && l && De.current.stateNode !== l) {
        var u = F(De.current.type);
        We[u] || (D('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', F(De.current.type), r.ref), We[u] = !0);
      }
    }
    function dt(r, l) {
      {
        var u = function() {
          hr || (hr = !0, D("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", l));
        };
        u.isReactWarning = !0, Object.defineProperty(r, "key", {
          get: u,
          configurable: !0
        });
      }
    }
    function ft(r, l) {
      {
        var u = function() {
          Er || (Er = !0, D("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", l));
        };
        u.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: u,
          configurable: !0
        });
      }
    }
    var pt = function(r, l, u, v, T, A, b) {
      var y = {
        $$typeof: t,
        type: r,
        key: l,
        ref: u,
        props: b,
        _owner: A
      };
      return y._store = {}, Object.defineProperty(y._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(y, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: v
      }), Object.defineProperty(y, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: T
      }), Object.freeze && (Object.freeze(y.props), Object.freeze(y)), y;
    };
    function Mt(r, l, u, v, T) {
      {
        var A, b = {}, y = null, _ = null;
        u !== void 0 && (xr(u), y = "" + u), st(l) && (xr(l.key), y = "" + l.key), ut(l) && (_ = l.ref, ct(l, T));
        for (A in l)
          Oe.call(l, A) && !ot.hasOwnProperty(A) && (b[A] = l[A]);
        if (r && r.defaultProps) {
          var w = r.defaultProps;
          for (A in w)
            b[A] === void 0 && (b[A] = w[A]);
        }
        if (y || _) {
          var S = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          y && dt(b, S), _ && ft(b, S);
        }
        return pt(r, y, _, T, v, De.current, b);
      }
    }
    var He = E.ReactCurrentOwner, jr = E.ReactDebugCurrentFrame;
    function fe(r) {
      if (r) {
        var l = r._owner, u = we(r.type, r._source, l ? l.type : null);
        jr.setExtraStackFrame(u);
      } else
        jr.setExtraStackFrame(null);
    }
    var Be;
    Be = !1;
    function Ge(r) {
      return typeof r == "object" && r !== null && r.$$typeof === t;
    }
    function Ir() {
      {
        if (He.current) {
          var r = F(He.current.type);
          if (r)
            return `

Check the render method of \`` + r + "`.";
        }
        return "";
      }
    }
    function gt(r) {
      {
        if (r !== void 0) {
          var l = r.fileName.replace(/^.*[\\\/]/, ""), u = r.lineNumber;
          return `

Check your code at ` + l + ":" + u + ".";
        }
        return "";
      }
    }
    var Ar = {};
    function vt(r) {
      {
        var l = Ir();
        if (!l) {
          var u = typeof r == "string" ? r : r.displayName || r.name;
          u && (l = `

Check the top-level render call using <` + u + ">.");
        }
        return l;
      }
    }
    function wr(r, l) {
      {
        if (!r._store || r._store.validated || r.key != null)
          return;
        r._store.validated = !0;
        var u = vt(l);
        if (Ar[u])
          return;
        Ar[u] = !0;
        var v = "";
        r && r._owner && r._owner !== He.current && (v = " It was passed a child from " + F(r._owner.type) + "."), fe(r), D('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', u, v), fe(null);
      }
    }
    function Or(r, l) {
      {
        if (typeof r != "object")
          return;
        if (Ye(r))
          for (var u = 0; u < r.length; u++) {
            var v = r[u];
            Ge(v) && wr(v, l);
          }
        else if (Ge(r))
          r._store && (r._store.validated = !0);
        else if (r) {
          var T = N(r);
          if (typeof T == "function" && T !== r.entries)
            for (var A = T.call(r), b; !(b = A.next()).done; )
              Ge(b.value) && wr(b.value, l);
        }
      }
    }
    function mt(r) {
      {
        var l = r.type;
        if (l == null || typeof l == "string")
          return;
        var u;
        if (typeof l == "function")
          u = l.propTypes;
        else if (typeof l == "object" && (l.$$typeof === c || l.$$typeof === M))
          u = l.propTypes;
        else
          return;
        if (u) {
          var v = F(l);
          nt(u, r.props, "prop", v, r);
        } else if (l.PropTypes !== void 0 && !Be) {
          Be = !0;
          var T = F(l);
          D("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", T || "Unknown");
        }
        typeof l.getDefaultProps == "function" && !l.getDefaultProps.isReactClassApproved && D("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function yt(r) {
      {
        for (var l = Object.keys(r.props), u = 0; u < l.length; u++) {
          var v = l[u];
          if (v !== "children" && v !== "key") {
            fe(r), D("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", v), fe(null);
            break;
          }
        }
        r.ref !== null && (fe(r), D("Invalid attribute `ref` supplied to `React.Fragment`."), fe(null));
      }
    }
    function Sr(r, l, u, v, T, A) {
      {
        var b = me(r);
        if (!b) {
          var y = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (y += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _ = gt(T);
          _ ? y += _ : y += Ir();
          var w;
          r === null ? w = "null" : Ye(r) ? w = "array" : r !== void 0 && r.$$typeof === t ? (w = "<" + (F(r.type) || "Unknown") + " />", y = " Did you accidentally export a JSX literal instead of a component?") : w = typeof r, D("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", w, y);
        }
        var S = Mt(r, l, u, T, A);
        if (S == null)
          return S;
        if (b) {
          var Y = l.children;
          if (Y !== void 0)
            if (v)
              if (Ye(Y)) {
                for (var pe = 0; pe < Y.length; pe++)
                  Or(Y[pe], r);
                Object.freeze && Object.freeze(Y);
              } else
                D("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Or(Y, r);
        }
        return r === a ? yt(S) : mt(S), S;
      }
    }
    function Dt(r, l, u) {
      return Sr(r, l, u, !0);
    }
    function bt(r, l, u) {
      return Sr(r, l, u, !1);
    }
    var Nt = bt, Tt = Dt;
    Ne.Fragment = a, Ne.jsx = Nt, Ne.jsxs = Tt;
  }()), Ne;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Ht() : e.exports = Bt();
})(Le);
const ir = Le.exports.Fragment, m = Le.exports.jsx, O = Le.exports.jsxs;
function Br() {
  let e = C(!1);
  return q(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
function Gt(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
var Vt = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Vt || {}), Zt = ((e) => (e[e.ToggleDisclosure = 0] = "ToggleDisclosure", e[e.CloseDisclosure = 1] = "CloseDisclosure", e[e.SetButtonId = 2] = "SetButtonId", e[e.SetPanelId = 3] = "SetPanelId", e[e.LinkPanel = 4] = "LinkPanel", e[e.UnlinkPanel = 5] = "UnlinkPanel", e))(Zt || {});
let qt = {
  [0]: (e) => ({
    ...e,
    disclosureState: L(e.disclosureState, {
      [0]: 1,
      [1]: 0
    })
  }),
  [1]: (e) => e.disclosureState === 1 ? e : {
    ...e,
    disclosureState: 1
  },
  [4](e) {
    return e.linkedPanel === !0 ? e : {
      ...e,
      linkedPanel: !0
    };
  },
  [5](e) {
    return e.linkedPanel === !1 ? e : {
      ...e,
      linkedPanel: !1
    };
  },
  [2](e, t) {
    return e.buttonId === t.buttonId ? e : {
      ...e,
      buttonId: t.buttonId
    };
  },
  [3](e, t) {
    return e.panelId === t.panelId ? e : {
      ...e,
      panelId: t.panelId
    };
  }
}, lr = ie(null);
lr.displayName = "DisclosureContext";
function or(e) {
  let t = K(lr);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, or), n;
  }
  return t;
}
let ur = ie(null);
ur.displayName = "DisclosureAPIContext";
function Gr(e) {
  let t = K(ur);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Gr), n;
  }
  return t;
}
let sr = ie(null);
sr.displayName = "DisclosurePanelContext";
function Kt() {
  return K(sr);
}
function Jt(e, t) {
  return L(t.type, qt, e, t);
}
let Xt = se, en = H(function(e, t) {
  let {
    defaultOpen: n = !1,
    ...a
  } = e, i = `headlessui-disclosure-button-${Te()}`, o = `headlessui-disclosure-panel-${Te()}`, s = C(null), d = J(t, Ut((E) => {
    s.current = E;
  }, e.as === void 0 || e.as === React.Fragment)), c = C(null), f = C(null), p = Ur(Jt, {
    disclosureState: n ? 0 : 1,
    linkedPanel: !1,
    buttonRef: f,
    panelRef: c,
    buttonId: i,
    panelId: o
  }), [{
    disclosureState: M
  }, g] = p;
  $(() => g({
    type: 2,
    buttonId: i
  }), [i, g]), $(() => g({
    type: 3,
    panelId: o
  }), [o, g]);
  let j = Q((E) => {
    g({
      type: 1
    });
    let D = zt(s);
    if (!D)
      return;
    let k = (() => E ? E instanceof HTMLElement ? E : E.current instanceof HTMLElement ? E.current : D.getElementById(i) : D.getElementById(i))();
    k == null || k.focus();
  }), I = W(() => ({
    close: j
  }), [j]), x = W(() => ({
    open: M === 0,
    close: j
  }), [M, j]), N = {
    ref: d
  };
  return U.createElement(lr.Provider, {
    value: p
  }, /* @__PURE__ */ m(ur.Provider, {
    value: I,
    children: U.createElement(Hr, {
      value: L(M, {
        [0]: le.Open,
        [1]: le.Closed
      })
    }, Z({
      ourProps: N,
      theirProps: a,
      slot: x,
      defaultTag: Xt,
      name: "Disclosure"
    }))
  }));
}), rn = "button", tn = H(function(e, t) {
  let [n, a] = or("Disclosure.Button"), i = Kt(), o = i === null ? !1 : i === n.panelId, s = C(null), d = J(s, t, o ? null : n.buttonRef), c = Q((x) => {
    var N;
    if (o) {
      if (n.disclosureState === 1)
        return;
      switch (x.key) {
        case R.Space:
        case R.Enter:
          x.preventDefault(), x.stopPropagation(), a({
            type: 0
          }), (N = n.buttonRef.current) == null || N.focus();
          break;
      }
    } else
      switch (x.key) {
        case R.Space:
        case R.Enter:
          x.preventDefault(), x.stopPropagation(), a({
            type: 0
          });
          break;
      }
  }), f = Q((x) => {
    switch (x.key) {
      case R.Space:
        x.preventDefault();
        break;
    }
  }), p = Q((x) => {
    var N;
    Ft(x.currentTarget) || e.disabled || (o ? (a({
      type: 0
    }), (N = n.buttonRef.current) == null || N.focus()) : a({
      type: 0
    }));
  }), M = W(() => ({
    open: n.disclosureState === 0
  }), [n]), g = Fr(e, s), j = e, I = o ? {
    ref: d,
    type: g,
    onKeyDown: c,
    onClick: p
  } : {
    ref: d,
    id: n.buttonId,
    type: g,
    "aria-expanded": e.disabled ? void 0 : n.disclosureState === 0,
    "aria-controls": n.linkedPanel ? n.panelId : void 0,
    onKeyDown: c,
    onKeyUp: f,
    onClick: p
  };
  return Z({
    ourProps: I,
    theirProps: j,
    slot: M,
    defaultTag: rn,
    name: "Disclosure.Button"
  });
}), nn = "div", an = ve.RenderStrategy | ve.Static, ln = H(function(e, t) {
  let [n, a] = or("Disclosure.Panel"), {
    close: i
  } = Gr("Disclosure.Panel"), o = J(t, n.panelRef, () => {
    n.linkedPanel || a({
      type: 4
    });
  }), s = ar(), d = (() => s !== null ? s === le.Open : n.disclosureState === 0)();
  $(() => () => a({
    type: 5
  }), [a]), $(() => {
    var M;
    n.disclosureState === 1 && ((M = e.unmount) != null ? M : !0) && a({
      type: 5
    });
  }, [n.disclosureState, e.unmount, a]);
  let c = W(() => ({
    open: n.disclosureState === 0,
    close: i
  }), [n, i]), f = e, p = {
    ref: o,
    id: n.panelId
  };
  return U.createElement(sr.Provider, {
    value: n.panelId
  }, Z({
    ourProps: p,
    theirProps: f,
    slot: c,
    defaultTag: nn,
    features: an,
    visible: d,
    name: "Disclosure.Panel"
  }));
}), qe = Object.assign(en, {
  Button: tn,
  Panel: ln
});
function on({ onFocus: e }) {
  let [t, n] = ce(!0);
  return t ? U.createElement(Wt, { as: "button", type: "button", features: Wr.Focusable, onFocus: (a) => {
    a.preventDefault();
    let i, o = 50;
    function s() {
      if (o-- <= 0) {
        i && cancelAnimationFrame(i);
        return;
      }
      if (e()) {
        n(!1), cancelAnimationFrame(i);
        return;
      }
      i = requestAnimationFrame(s);
    }
    i = requestAnimationFrame(s);
  } }) : null;
}
var un = ((e) => (e[e.SetSelectedIndex = 0] = "SetSelectedIndex", e[e.RegisterTab = 1] = "RegisterTab", e[e.UnregisterTab = 2] = "UnregisterTab", e[e.RegisterPanel = 3] = "RegisterPanel", e[e.UnregisterPanel = 4] = "UnregisterPanel", e[e.ForceRerender = 5] = "ForceRerender", e))(un || {});
let sn = {
  [0](e, t) {
    let n = e.tabs.filter((o) => {
      var s;
      return !((s = o.current) != null && s.hasAttribute("disabled"));
    });
    if (t.index < 0)
      return {
        ...e,
        selectedIndex: e.tabs.indexOf(n[0])
      };
    if (t.index > e.tabs.length)
      return {
        ...e,
        selectedIndex: e.tabs.indexOf(n[n.length - 1])
      };
    let a = e.tabs.slice(0, t.index), i = [...e.tabs.slice(t.index), ...a].find((o) => n.includes(o));
    return i ? {
      ...e,
      selectedIndex: e.tabs.indexOf(i)
    } : e;
  },
  [1](e, t) {
    return e.tabs.includes(t.tab) ? e : {
      ...e,
      tabs: Xe([...e.tabs, t.tab], (n) => n.current)
    };
  },
  [2](e, t) {
    return {
      ...e,
      tabs: Xe(e.tabs.filter((n) => n !== t.tab), (n) => n.current)
    };
  },
  [3](e, t) {
    return e.panels.includes(t.panel) ? e : {
      ...e,
      panels: [...e.panels, t.panel]
    };
  },
  [4](e, t) {
    return {
      ...e,
      panels: e.panels.filter((n) => n !== t.panel)
    };
  },
  [5](e) {
    return {
      ...e
    };
  }
}, cr = ie(null);
cr.displayName = "TabsSSRContext";
function dr(e) {
  let t = K(cr);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, dr), n;
  }
  return t;
}
let fr = ie(null);
fr.displayName = "TabsDataContext";
function xe(e) {
  let t = K(fr);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, xe), n;
  }
  return t;
}
let pr = ie(null);
pr.displayName = "TabsActionsContext";
function Mr(e) {
  let t = K(pr);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Mr), n;
  }
  return t;
}
function cn(e, t) {
  return L(t.type, sn, e, t);
}
let dn = se, fn = H(function(e, t) {
  let {
    defaultIndex: n = 0,
    vertical: a = !1,
    manual: i = !1,
    onChange: o,
    selectedIndex: s = null,
    ...d
  } = e;
  const c = a ? "vertical" : "horizontal", f = i ? "manual" : "auto";
  let p = J(t), [M, g] = Ur(cn, {
    selectedIndex: s != null ? s : n,
    tabs: [],
    panels: []
  }), j = W(() => ({
    selectedIndex: M.selectedIndex
  }), [M.selectedIndex]), I = ae(o || (() => {
  })), x = ae(M.tabs), N = W(() => ({
    orientation: c,
    activation: f,
    ...M
  }), [c, f, M]), E = ae(M.selectedIndex), D = W(() => ({
    registerTab(z) {
      return g({
        type: 1,
        tab: z
      }), () => g({
        type: 2,
        tab: z
      });
    },
    registerPanel(z) {
      return g({
        type: 3,
        panel: z
      }), () => g({
        type: 4,
        panel: z
      });
    },
    forceRerender() {
      g({
        type: 5
      });
    },
    change(z) {
      E.current !== z && I.current(z), E.current = z, g({
        type: 0,
        index: z
      });
    }
  }), [g]);
  q(() => {
    g({
      type: 0,
      index: s != null ? s : n
    });
  }, [s]);
  let k = C({
    tabs: [],
    panels: []
  }), oe = {
    ref: p
  };
  return /* @__PURE__ */ m(cr.Provider, {
    value: k,
    children: U.createElement(pr.Provider, {
      value: D
    }, /* @__PURE__ */ O(fr.Provider, {
      value: N,
      children: [N.tabs.length <= 0 && U.createElement(on, {
        onFocus: () => {
          var z, B;
          for (let G of x.current)
            if (((z = G.current) == null ? void 0 : z.tabIndex) === 0)
              return (B = G.current) == null || B.focus(), !0;
          return !1;
        }
      }), Z({
        ourProps: oe,
        theirProps: d,
        slot: j,
        defaultTag: dn,
        name: "Tabs"
      })]
    }))
  });
}), pn = "div", Mn = H(function(e, t) {
  let {
    orientation: n,
    selectedIndex: a
  } = xe("Tab.List"), i = J(t);
  return Z({
    ourProps: {
      ref: i,
      role: "tablist",
      "aria-orientation": n
    },
    theirProps: e,
    slot: {
      selectedIndex: a
    },
    defaultTag: pn,
    name: "Tabs.List"
  });
}), gn = "button", vn = H(function(e, t) {
  var n, a;
  let i = `headlessui-tabs-tab-${Te()}`, {
    orientation: o,
    activation: s,
    selectedIndex: d,
    tabs: c,
    panels: f
  } = xe("Tab"), p = Mr("Tab"), M = dr("Tab"), g = C(null), j = J(g, t, (h) => {
    !h || p.forceRerender();
  });
  q(() => p.registerTab(g), [p, g]);
  let I = M.current.tabs.indexOf(i);
  I === -1 && (I = M.current.tabs.push(i) - 1);
  let x = c.indexOf(g);
  x === -1 && (x = I);
  let N = x === d, E = Q((h) => {
    let P = c.map((me) => me.current).filter(Boolean);
    if (h.key === R.Space || h.key === R.Enter) {
      h.preventDefault(), h.stopPropagation(), p.change(x);
      return;
    }
    switch (h.key) {
      case R.Home:
      case R.PageUp:
        return h.preventDefault(), h.stopPropagation(), Me(P, V.First);
      case R.End:
      case R.PageDown:
        return h.preventDefault(), h.stopPropagation(), Me(P, V.Last);
    }
    if (L(o, {
      vertical() {
        if (h.key === R.ArrowUp)
          return Me(P, V.Previous | V.WrapAround);
        if (h.key === R.ArrowDown)
          return Me(P, V.Next | V.WrapAround);
      },
      horizontal() {
        if (h.key === R.ArrowLeft)
          return Me(P, V.Previous | V.WrapAround);
        if (h.key === R.ArrowRight)
          return Me(P, V.Next | V.WrapAround);
      }
    }))
      return h.preventDefault();
  }), D = Q(() => {
    var h;
    (h = g.current) == null || h.focus();
  }), k = Q(() => {
    var h;
    (h = g.current) == null || h.focus(), p.change(x);
  }), oe = Q((h) => {
    h.preventDefault();
  }), z = W(() => ({
    selected: N
  }), [N]), B = e, G = {
    ref: j,
    onKeyDown: E,
    onFocus: s === "manual" ? D : k,
    onMouseDown: oe,
    onClick: k,
    id: i,
    role: "tab",
    type: Fr(e, g),
    "aria-controls": (a = (n = f[x]) == null ? void 0 : n.current) == null ? void 0 : a.id,
    "aria-selected": N,
    tabIndex: N ? 0 : -1
  };
  return Z({
    ourProps: G,
    theirProps: B,
    slot: z,
    defaultTag: gn,
    name: "Tabs.Tab"
  });
}), mn = "div", yn = H(function(e, t) {
  let {
    selectedIndex: n
  } = xe("Tab.Panels"), a = J(t), i = W(() => ({
    selectedIndex: n
  }), [n]);
  return Z({
    ourProps: {
      ref: a
    },
    theirProps: e,
    slot: i,
    defaultTag: mn,
    name: "Tabs.Panels"
  });
}), Dn = "div", bn = ve.RenderStrategy | ve.Static, Nn = H(function(e, t) {
  var n, a;
  let {
    selectedIndex: i,
    tabs: o,
    panels: s
  } = xe("Tab.Panel"), d = Mr("Tab.Panel"), c = dr("Tab.Panel"), f = `headlessui-tabs-panel-${Te()}`, p = C(null), M = J(p, t, (D) => {
    !D || d.forceRerender();
  });
  q(() => d.registerPanel(p), [d, p]);
  let g = c.current.panels.indexOf(f);
  g === -1 && (g = c.current.panels.push(f) - 1);
  let j = s.indexOf(p);
  j === -1 && (j = g);
  let I = j === i, x = W(() => ({
    selected: I
  }), [I]), N = e, E = {
    ref: M,
    id: f,
    role: "tabpanel",
    "aria-labelledby": (a = (n = o[j]) == null ? void 0 : n.current) == null ? void 0 : a.id,
    tabIndex: I ? 0 : -1
  };
  return Z({
    ourProps: E,
    theirProps: N,
    slot: x,
    defaultTag: Dn,
    features: bn,
    visible: I,
    name: "Tabs.Panel"
  });
}), ge = Object.assign(vn, {
  Group: fn,
  List: Mn,
  Panels: yn,
  Panel: Nn
});
function Tn(e) {
  let t = { called: !1 };
  return (...n) => {
    if (!t.called)
      return t.called = !0, e(...n);
  };
}
function Ke(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function Je(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var er = ((e) => (e.Ended = "ended", e.Cancelled = "cancelled", e))(er || {});
function xn(e, t) {
  let n = Ce();
  if (!e)
    return n.dispose;
  let { transitionDuration: a, transitionDelay: i } = getComputedStyle(e), [o, s] = [a, i].map((d) => {
    let [c = 0] = d.split(",").filter(Boolean).map((f) => f.includes("ms") ? parseFloat(f) : parseFloat(f) * 1e3).sort((f, p) => p - f);
    return c;
  });
  if (o + s !== 0) {
    let d = [];
    d.push(n.addEventListener(e, "transitionrun", (c) => {
      c.target === c.currentTarget && (d.splice(0).forEach((f) => f()), d.push(n.addEventListener(e, "transitionend", (f) => {
        f.target === f.currentTarget && (t("ended"), d.splice(0).forEach((p) => p()));
      }), n.addEventListener(e, "transitioncancel", (f) => {
        f.target === f.currentTarget && (t("cancelled"), d.splice(0).forEach((p) => p()));
      })));
    }));
  } else
    t("ended");
  return n.add(() => t("cancelled")), n.dispose;
}
function hn(e, t, n, a) {
  let i = n ? "enter" : "leave", o = Ce(), s = a !== void 0 ? Tn(a) : () => {
  }, d = L(i, { enter: () => t.enter, leave: () => t.leave }), c = L(i, { enter: () => t.enterTo, leave: () => t.leaveTo }), f = L(i, { enter: () => t.enterFrom, leave: () => t.leaveFrom });
  return Je(e, ...t.enter, ...t.enterTo, ...t.enterFrom, ...t.leave, ...t.leaveFrom, ...t.leaveTo, ...t.entered), Ke(e, ...d, ...f), o.nextFrame(() => {
    Je(e, ...f), Ke(e, ...c), xn(e, (p) => (p === "ended" && (Je(e, ...d), Ke(e, ...t.entered)), s(p)));
  }), o.dispose;
}
function En({ container: e, direction: t, classes: n, events: a, onStart: i, onStop: o }) {
  let s = Br(), d = Ot(), c = ae(t), f = Q(() => L(c.current, { enter: () => a.current.beforeEnter(), leave: () => a.current.beforeLeave(), idle: () => {
  } })), p = Q(() => L(c.current, { enter: () => a.current.afterEnter(), leave: () => a.current.afterLeave(), idle: () => {
  } }));
  q(() => {
    let M = Ce();
    d.add(M.dispose);
    let g = e.current;
    if (!!g && c.current !== "idle" && !!s.current)
      return M.dispose(), f(), i.current(c.current), M.add(hn(g, n.current, c.current === "enter", (j) => {
        M.dispose(), L(j, { [er.Ended]() {
          p(), o.current(c.current);
        }, [er.Cancelled]: () => {
        } });
      })), M.dispose;
  }, [t]);
}
function ue(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let ke = ie(null);
ke.displayName = "TransitionContext";
var jn = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(jn || {});
function In() {
  let e = K(ke);
  if (e === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
function An() {
  let e = K(Re);
  if (e === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
let Re = ie(null);
Re.displayName = "NestingContext";
function _e(e) {
  return "children" in e ? _e(e.children) : e.current.filter(({
    state: t
  }) => t === "visible").length > 0;
}
function Vr(e) {
  let t = ae(e), n = C([]), a = Br(), i = Q((s, d = ne.Hidden) => {
    let c = n.current.findIndex(({
      id: f
    }) => f === s);
    c !== -1 && (L(d, {
      [ne.Unmount]() {
        n.current.splice(c, 1);
      },
      [ne.Hidden]() {
        n.current[c].state = "hidden";
      }
    }), Gt(() => {
      var f;
      !_e(n) && a.current && ((f = t.current) == null || f.call(t));
    }));
  }), o = Q((s) => {
    let d = n.current.find(({
      id: c
    }) => c === s);
    return d ? d.state !== "visible" && (d.state = "visible") : n.current.push({
      id: s,
      state: "visible"
    }), () => i(s, ne.Unmount);
  });
  return W(() => ({
    children: n,
    register: o,
    unregister: i
  }), [o, i, n]);
}
function wn() {
}
let On = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function $r(e) {
  var t;
  let n = {};
  for (let a of On)
    n[a] = (t = e[a]) != null ? t : wn;
  return n;
}
function Sn(e) {
  let t = C($r(e));
  return $(() => {
    t.current = $r(e);
  }, [e]), t;
}
let zn = "div", Zr = ve.RenderStrategy, qr = H(function(e, t) {
  let {
    beforeEnter: n,
    afterEnter: a,
    beforeLeave: i,
    afterLeave: o,
    enter: s,
    enterFrom: d,
    enterTo: c,
    entered: f,
    leave: p,
    leaveFrom: M,
    leaveTo: g,
    ...j
  } = e, I = C(null), x = J(I, t), [N, E] = ce("visible"), D = j.unmount ? ne.Unmount : ne.Hidden, {
    show: k,
    appear: oe,
    initial: z
  } = In(), {
    register: B,
    unregister: G
  } = An(), h = C(null), P = Te();
  $(() => {
    if (P)
      return B(P);
  }, [B, P]), $(() => {
    if (D === ne.Hidden && !!P) {
      if (k && N !== "visible") {
        E("visible");
        return;
      }
      L(N, {
        hidden: () => G(P),
        visible: () => B(P)
      });
    }
  }, [N, P, B, G, k, D]);
  let me = ae({
    enter: ue(s),
    enterFrom: ue(d),
    enterTo: ue(c),
    entered: ue(f),
    leave: ue(p),
    leaveFrom: ue(M),
    leaveTo: ue(g)
  }), $e = Sn({
    beforeEnter: n,
    afterEnter: a,
    beforeLeave: i,
    afterLeave: o
  }), de = tr();
  $(() => {
    if (de && N === "visible" && I.current === null)
      throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [I, N, de]);
  let F = z && !oe, X = (() => !de || F || h.current === k ? "idle" : k ? "enter" : "leave")(), ee = C(!1), ye = Vr(() => {
    ee.current || (E("hidden"), G(P));
  });
  En({
    container: I,
    classes: me,
    events: $e,
    direction: X,
    onStart: ae(() => {
      ee.current = !0;
    }),
    onStop: ae((je) => {
      ee.current = !1, je === "leave" && !_e(ye) && (E("hidden"), G(P));
    })
  }), $(() => {
    !F || (D === ne.Hidden ? h.current = null : h.current = k);
  }, [k, F, N]);
  let he = j, Ee = {
    ref: x
  };
  return /* @__PURE__ */ m(Re.Provider, {
    value: ye,
    children: U.createElement(Hr, {
      value: L(N, {
        visible: le.Open,
        hidden: le.Closed
      })
    }, Z({
      ourProps: Ee,
      theirProps: he,
      defaultTag: zn,
      features: Zr,
      visible: N === "visible",
      name: "Transition.Child"
    }))
  });
}), rr = H(function(e, t) {
  let {
    show: n,
    appear: a = !1,
    unmount: i,
    ...o
  } = e, s = C(null), d = J(s, t);
  tr();
  let c = ar();
  if (n === void 0 && c !== null && (n = L(c, {
    [le.Open]: !0,
    [le.Closed]: !1
  })), ![!0, !1].includes(n))
    throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [f, p] = ce(n ? "visible" : "hidden"), M = Vr(() => {
    p("hidden");
  }), [g, j] = ce(!0), I = C([n]);
  q(() => {
    g !== !1 && I.current[I.current.length - 1] !== n && (I.current.push(n), j(!1));
  }, [I, n]);
  let x = W(() => ({
    show: n,
    appear: a,
    initial: g
  }), [n, a, g]);
  $(() => {
    if (n)
      p("visible");
    else if (!_e(M))
      p("hidden");
    else {
      let E = s.current;
      if (!E)
        return;
      let D = E.getBoundingClientRect();
      D.x === 0 && D.y === 0 && D.width === 0 && D.height === 0 && p("hidden");
    }
  }, [n, M]);
  let N = {
    unmount: i
  };
  return /* @__PURE__ */ m(Re.Provider, {
    value: M,
    children: /* @__PURE__ */ m(ke.Provider, {
      value: x,
      children: Z({
        ourProps: {
          ...N,
          as: se,
          children: U.createElement(qr, {
            ref: d,
            ...N,
            ...o
          })
        },
        theirProps: {},
        defaultTag: se,
        features: Zr,
        visible: f === "visible",
        name: "Transition"
      })
    })
  });
}), Pn = H(function(e, t) {
  let n = K(ke) !== null, a = ar() !== null;
  return /* @__PURE__ */ m(ir, {
    children: !n && a ? /* @__PURE__ */ m(rr, {
      ref: t,
      ...e
    }) : U.createElement(qr, {
      ref: t,
      ...e
    })
  });
}), Cn = Object.assign(rr, {
  Child: Pn,
  Root: rr
});
var Kr = { exports: {} };
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function n() {
      for (var a = [], i = 0; i < arguments.length; i++) {
        var o = arguments[i];
        if (!!o) {
          var s = typeof o;
          if (s === "string" || s === "number")
            a.push(o);
          else if (Array.isArray(o)) {
            if (o.length) {
              var d = n.apply(null, o);
              d && a.push(d);
            }
          } else if (s === "object")
            if (o.toString === Object.prototype.toString)
              for (var c in o)
                t.call(o, c) && o[c] && a.push(c);
            else
              a.push(o.toString());
        }
      }
      return a.join(" ");
    }
    e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
  })();
})(Kr);
const te = Kr.exports, Ln = ["Description", "Status"], kn = ({
  description: e,
  statusTitle: t,
  statusDescription: n,
  statusLink: a,
  startDate: i,
  endDate: o
}) => {
  const s = t || n || a;
  return /* @__PURE__ */ m(ir, {
    children: /* @__PURE__ */ O("div", {
      className: "flex flex-col md:flex-row text-primaryText",
      children: [/* @__PURE__ */ O(ge.Group, {
        as: "div",
        className: "flex-1",
        children: [/* @__PURE__ */ m(ge.List, {
          className: "flex space-x-1 border-b-[1px] border-b-borderTabs",
          children: Ln.map((d) => /* @__PURE__ */ m(ge, {
            className: ({
              selected: c
            }) => te("text-xs py-1 px-5 border-b-2 hover:text-orange hover:border-orange uppercase tracking-widest", "focus:outline-none focus-visible:ring focus-visible:ring-orange-600 focus-visible:ring-opacity-75", c ? "text-orange-600" : "text-borderTab hover:text-orange-600"),
            children: d
          }, d))
        }), /* @__PURE__ */ O(ge.Panels, {
          className: "mt-2",
          children: [/* @__PURE__ */ m(ge.Panel, {
            className: te("p-1", "focus:outline-none focus-visible:ring focus-visible:ring-orange-600 focus-visible:ring-opacity-75"),
            children: /* @__PURE__ */ m("dl", {
              className: "space-y-4",
              children: /* @__PURE__ */ O("div", {
                children: [/* @__PURE__ */ m("dt", {
                  className: "text-sm text-secondaryText leading-5",
                  children: "Problem statement / Description"
                }), /* @__PURE__ */ m("dd", {
                  className: "text-sm",
                  children: e
                })]
              })
            })
          }), s ? /* @__PURE__ */ m(ge.Panel, {
            className: te("p-1 text-primaryText", "ring-orange-600 ring-opacity-60 ring-offset-1 ring-offset-orange-600 focus:outline-none focus:ring-1"),
            children: /* @__PURE__ */ O("dl", {
              className: "space-y-4",
              children: [t ? /* @__PURE__ */ O("div", {
                children: [/* @__PURE__ */ m("dt", {
                  className: "text-sm text-secondaryText leading-5",
                  children: "Status"
                }), /* @__PURE__ */ m("dd", {
                  className: "text-sm",
                  children: t
                })]
              }) : null, n ? /* @__PURE__ */ O("div", {
                children: [/* @__PURE__ */ m("dt", {
                  className: "sr-only",
                  children: "Description"
                }), /* @__PURE__ */ m("dd", {
                  className: "text-sm",
                  children: n
                })]
              }) : null, a ? /* @__PURE__ */ O("div", {
                children: [/* @__PURE__ */ m("dt", {
                  className: "text-sm text-secondaryText leading-5",
                  children: "Read more:"
                }), /* @__PURE__ */ m("dd", {
                  className: "text-sm text-orange-600",
                  children: /* @__PURE__ */ m("a", {
                    href: a,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "ring-blue-400 focus:outline-none focus:ring-2",
                    children: a
                  })
                })]
              }) : null]
            })
          }) : null]
        })]
      }), /* @__PURE__ */ O("dl", {
        className: "flex flex-row gap-8 text-sm mt-[26px] px-1 md:px-0 md:pt-4 md:border-t-[1px] md:border-t-borderTabs md:gap-0 md:flex-col md:pl-7 md:basis-[260px] md:min-w-[260px]",
        children: [i ? /* @__PURE__ */ O("div", {
          children: [/* @__PURE__ */ m("dt", {
            className: "text-gray-500",
            children: "Start Date"
          }), /* @__PURE__ */ m("dd", {
            children: i
          })]
        }) : null, o ? /* @__PURE__ */ O("div", {
          children: [/* @__PURE__ */ m("dt", {
            className: "text-gray-500",
            children: "End Date"
          }), /* @__PURE__ */ m("dd", {
            children: o
          })]
        }) : null]
      })]
    })
  });
}, Pe = ({
  label: e,
  value: t
}) => /* @__PURE__ */ O("p", {
  className: "flex flex-col",
  children: [/* @__PURE__ */ m("span", {
    className: " text-secondaryText text-sm",
    children: e
  }), /* @__PURE__ */ m("span", {
    className: "text-primaryText text-sm font-bold",
    children: t
  })]
}), Rn = {
  Completed: "bg-[#39e27f]",
  Ongoing: "bg-[#f2ca4e]",
  Canceled: "bg-[#dc4747]",
  Default: "bg-gray-600"
}, $n = (e) => /* @__PURE__ */ m(qe, {
  as: "div",
  className: te(e.theme, "px-0 rounded-r-2xl shadow-card bg-card"),
  children: ({
    open: t
  }) => {
    var n, a;
    return /* @__PURE__ */ O(ir, {
      children: [/* @__PURE__ */ O(qe.Button, {
        className: te("flex flex-col min-h-[133px] w-full justify-between pr-4 rounded-r-2xl text-left", "focus:outline-none focus-visible:ring focus-visible:ring-orange-600 focus-visible:ring-opacity-75", "md:flex-row"),
        children: [/* @__PURE__ */ O("div", {
          className: te("relative w-full pl-12 flex flex-1 flex-col space-x-4 justify-between py-4", "md:flex-row md:pl-[60px]"),
          children: [/* @__PURE__ */ m("div", {
            className: te("absolute left-0 top-[122px] w-[122px] h-[42px] transform rotate-[270deg] origin-top-left rounded-bl-[16px]", "flex items-center justify-center text-white font-bold text-xs uppercase tracking-[2px]", Rn[(n = e.Status) != null ? n : "Default"]),
            children: e.Status
          }), /* @__PURE__ */ m("div", {
            className: "flex flex-1 pb-8 md:py-0 border-b-gray-500 border-b-[1px] border-dashed md:border-b-0",
            children: /* @__PURE__ */ O("div", {
              children: [/* @__PURE__ */ m("span", {
                className: "text-secondaryText text-sm",
                children: "Proposal"
              }), /* @__PURE__ */ m("h2", {
                className: "text-lg text-primaryText",
                children: e.Project_name
              }), /* @__PURE__ */ O("a", {
                href: "https://paulccari.com",
                target: "_blank",
                onClick: (i) => i.stopPropagation(),
                rel: "noopener noreferrer",
                className: "text-md text-orange-600 pointer flex items-center no-underline",
                children: ["Read More", /* @__PURE__ */ m("img", {
                  src: At,
                  className: "w-4 h-4 ml-1",
                  alt: ""
                })]
              })]
            })
          }), /* @__PURE__ */ O("div", {
            className: te("flex flex-1 space-x-4 py-4", "md:border-l-gray-500 md:border-l-[1px] md:border-dashed md:pr-4 md:pl-8 md:py-0"),
            children: [e.Fund ? /* @__PURE__ */ O("div", {
              className: "flex-1",
              children: [/* @__PURE__ */ m(Pe, {
                label: "Challenge",
                value: e.Category
              }), /* @__PURE__ */ m(Pe, {
                label: "Fund",
                value: `Fund ${e.Fund}`
              })]
            }) : null, /* @__PURE__ */ O("div", {
              className: "flex-1 space-y-1",
              children: [e.USD_equivalent ? /* @__PURE__ */ m(Pe, {
                label: "Amount Requested",
                value: `${(a = e.USD_equivalent) != null ? a : ""} in ${e.Currency} `
              }) : null, /* @__PURE__ */ m(Pe, {
                label: "Project Lead",
                value: e.Project_Lead
              })]
            })]
          })]
        }), /* @__PURE__ */ m("img", {
          src: wt,
          alt: "",
          className: te("transform rotate-180 h-5 w-5 self-center mb-2 md:mb-0", t && "rotate-[360deg]")
        })]
      }), /* @__PURE__ */ m(Cn, {
        enter: "transition duration-100 ease-out",
        enterFrom: "transform scale-95 opacity-0",
        enterTo: "transform scale-100 opacity-100",
        leave: "transition duration-75 ease-out",
        leaveFrom: "transform scale-100 opacity-100",
        leaveTo: "transform scale-95 opacity-0",
        children: /* @__PURE__ */ m(qe.Panel, {
          className: "border-t-[1px] border-t-gray-500 border-dashed ml-16 md:ml-[60px] pt-5 pb-6 mr-4",
          children: /* @__PURE__ */ m(kn, {
            description: e.Description,
            startDate: e.Started_on,
            endDate: e.Completed_on,
            statusTitle: e.Status,
            statusDescription: e.Status_description,
            statusLink: e.Status_desc_link1
          })
        })
      })]
    });
  }
});
export {
  $n as GrantProposalItem
};
