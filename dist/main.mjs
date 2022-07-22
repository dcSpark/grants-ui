import a, { useLayoutEffect as Ve, useEffect as v, useRef as E, useState as B, forwardRef as Je, Fragment as Z, isValidElement as Xe, cloneElement as et, createElement as tt, createContext as Y, useContext as k, useReducer as ke, useMemo as z } from "react";
const nt = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxNCAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAuNzMzMDIyIDAuNTAwMDA1QzAuNTQ4MjgxIDAuNDk5MjkyIDAuMzcwNzQ4IDAuNTcxNDg3IDAuMjM5MDk2IDAuNzAwODUxQzAuMTA3NDQzIDAuODMwMjE2IDAuMDMyMzM2IDEuMDA2MjcgMC4wMzAxNTM4IDEuMTkwNjZMNC44NjI5NWUtMDUgNC43MDk0MkMtMC4wMDEwMzUyMiA0LjgwMTE5IDAuMDE2MDA4MyA0Ljg5MjI5IDAuMDUwMTk1NSA0Ljk3NzQ5QzAuMDg0MzgyNyA1LjA2MjY5IDAuMTM1MDQ4IDUuMTQwMzMgMC4xOTkzMDEgNS4yMDU5OEMwLjI2MzU1MyA1LjI3MTY0IDAuMzQwMTI4IDUuMzI0MDIgMC40MjQ2NjMgNS4zNjAxNEMwLjUwOTE5NyA1LjM5NjI1IDAuNjAwMDMzIDUuNDE1MzggMC42OTE5NzcgNS40MTY0NUMwLjc4NDQ5MyA1LjQxNzUzIDAuODc2MzA4IDUuNDAwMyAwLjk2MjExMiA1LjM2NTc2QzEuMDQ3OTIgNS4zMzEyMSAxLjEyNjAxIDUuMjgwMDIgMS4xOTE4OCA1LjIxNTE3QzEuMjU3NzQgNS4xNTAzMSAxLjMxMDA3IDUuMDczMDYgMS4zNDU4NSA0Ljk4NzlDMS4zODE2MyA0LjkwMjczIDEuNDAwMTQgNC44MTEzMyAxLjQwMDMyIDQuNzE4OTdMMS40MjYzIDEuODk3NjhIMTIuNTk5N1YxMy4wODE4TDkuNzkzNzMgMTMuMTAyM0M5LjYwODc2IDEzLjEwNDEgOS40MzIwMiAxMy4xNzg5IDkuMzAyMTEgMTMuMzEwNEM5LjE3MjIxIDEzLjQ0MTggOS4wOTk3IDEzLjYxOTMgOS4xMDA0NCAxMy44MDM5QzkuMTAwNzkgMTMuODk1NyA5LjExOTI1IDEzLjk4NjUgOS4xNTQ3NyAxNC4wNzExQzkuMTkwMjkgMTQuMTU1OCA5LjI0MjE2IDE0LjIzMjYgOS4zMDc0MyAxNC4yOTczQzkuMzcyNyAxNC4zNjE5IDkuNDUwMDggMTQuNDEzMSA5LjUzNTE3IDE0LjQ0NzlDOS42MjAyNSAxNC40ODI2IDkuNzExMzYgMTQuNTAwNCA5LjgwMzMgMTQuNUwxMy4zMDI2IDE0LjQ3NDFDMTMuNDg3MyAxNC40NzMzIDEzLjY2NDMgMTQuMzk5OCAxMy43OTQ5IDE0LjI2OTRDMTMuOTI1NiAxNC4xMzkgMTMuOTk5MyAxMy45NjIzIDE0IDEzLjc3OFYxLjE5NjExQzEzLjk5OTMgMS4wMTA3OCAxMy45MjQ4IDAuODMzMzIzIDEzLjc5MyAwLjcwMjc4MUMxMy42NjEyIDAuNTcyMjQgMTMuNDgyOCAwLjQ5OTI5OCAxMy4yOTcxIDAuNTAwMDA1SDAuNzMzMDIyWk0yLjEzMzI5IDYuNzg5NTZDMi4wNDEyMyA2Ljc4OTIgMS45NSA2LjgwNjk3IDEuODY0ODMgNi44NDE4NEMxLjc3OTY2IDYuODc2NzIgMS43MDIyMiA2LjkyODAxIDEuNjM2OTQgNi45OTI3OUMxLjU3MTY1IDcuMDU3NTggMS41MTk4MSA3LjEzNDU4IDEuNDg0MzcgNy4yMTkzOUMxLjQ0ODkzIDcuMzA0MiAxLjQzMDYgNy4zOTUxNSAxLjQzMDQyIDcuNDg3MDNDMS40MzAwNiA3LjU3OTI3IDEuNDQ4IDcuNjcwNjUgMS40ODMyIDcuNzU1OTNDMS41MTgzOSA3Ljg0MTIxIDEuNTcwMTUgNy45MTg3IDEuNjM1NDggNy45ODM5MkMxLjcwMDgyIDguMDQ5MTQgMS43Nzg0NSA4LjEwMDgxIDEuODYzODkgOC4xMzU5NEMxLjk0OTMzIDguMTcxMDcgMi4wNDA4OSA4LjE4ODk2IDIuMTMzMjkgOC4xODg2SDUuMzI3NjVMMC4yMzY2MzggMTMuMjg1MkMwLjEwNjIwNCAxMy40MTYyIDAuMDMyOTk1NiAxMy41OTMzIDAuMDMyOTk1NiAxMy43NzhDMC4wMzI5OTU2IDEzLjk2MjYgMC4xMDYyMDQgMTQuMTM5NyAwLjIzNjYzOCAxNC4yNzA3QzAuMzA0MTAxIDE0LjMzODUgMC4zODQ3ODIgMTQuMzkxOCAwLjQ3MzY4OCAxNC40MjcyQzAuNTYyNTk0IDE0LjQ2MjcgMC42NTc4MzYgMTQuNDc5NSAwLjc1MzUzNCAxNC40NzY4QzAuOTMyNzQ1IDE0LjQ3MTQgMS4xMDMwNyAxNC4zOTc3IDEuMjI5NDEgMTQuMjcwN0w2LjMzNTQ2IDkuMTY0NTJWMTIuMzc3NUM2LjMzNTEgMTIuNDY5MyA2LjM1Mjg0IDEyLjU2MDMgNi4zODc3IDEyLjY0NTJDNi40MjI1NSAxMi43MzAxIDYuNDczODMgMTIuODA3NCA2LjUzODU5IDEyLjg3MjVDNi42MDMzNSAxMi45Mzc2IDYuNjgwMzMgMTIuOTg5NCA2Ljc2NTEzIDEzLjAyNDlDNi44NDk5NCAxMy4wNjAzIDYuOTQwOTEgMTMuMDc4OCA3LjAzMjg1IDEzLjA3OTFDNy4xMjUyNiAxMy4wNzk1IDcuMjE2ODIgMTMuMDYxNiA3LjMwMjI2IDEzLjAyNjRDNy4zODc3IDEyLjk5MTMgNy40NjUzMiAxMi45Mzk2IDcuNTMwNjYgMTIuODc0NEM3LjU5NiAxMi44MDkyIDcuNjQ3NzYgMTIuNzMxNyA3LjY4Mjk2IDEyLjY0NjRDNy43MTgxNSAxMi41NjEyIDcuNzM2MDggMTIuNDY5OCA3LjczNTcyIDEyLjM3NzVWNy40ODcwM0M3LjczNTUzIDcuMzk1MTUgNy43MTcxOSA3LjMwNDIxIDcuNjgxNzUgNy4yMTk0QzcuNjQ2MzEgNy4xMzQ2IDcuNTk0NDcgNy4wNTc2IDcuNTI5MTggNi45OTI4MkM3LjQ2MzkgNi45MjgwMyA3LjM4NjQ3IDYuODc2NzQgNy4zMDEzIDYuODQxODZDNy4yMTYxNCA2LjgwNjk5IDcuMTI0OTEgNi43ODkyMSA3LjAzMjg1IDYuNzg5NTZIMi4xMzMyOVoiIGZpbGw9IiNGRjk4MjgiLz4KPC9zdmc+Cg==", rt = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE4LjcwNzEgMTQuNzA3MUMxOC4zMTY2IDE1LjA5NzYgMTcuNjgzNCAxNS4wOTc2IDE3LjI5MjkgMTQuNzA3MUwxMiA5LjQxNDIxTDYuNzA3MTEgMTQuNzA3MUM2LjMxNjU4IDE1LjA5NzYgNS42ODM0MiAxNS4wOTc2IDUuMjkyODkgMTQuNzA3MUM0LjkwMjM3IDE0LjMxNjYgNC45MDIzNyAxMy42ODM0IDUuMjkyODkgMTMuMjkyOUwxMS4yOTI5IDcuMjkyODlDMTEuNjgzNCA2LjkwMjM3IDEyLjMxNjYgNi45MDIzNyAxMi43MDcxIDcuMjkyODlMMTguNzA3MSAxMy4yOTI5QzE5LjA5NzYgMTMuNjgzNCAxOS4wOTc2IDE0LjMxNjYgMTguNzA3MSAxNC43MDcxWiIgZmlsbD0iIzgwODA4MCIvPgo8L3N2Zz4K";
let S = typeof window < "u" ? Ve : v;
function F(e) {
  let t = E(e);
  return S(() => {
    t.current = e;
  }, [e]), t;
}
function ee() {
  let e = [], t = [], n = { enqueue(r) {
    t.push(r);
  }, addEventListener(r, l, u, i) {
    return r.addEventListener(l, u, i), n.add(() => r.removeEventListener(l, u, i));
  }, requestAnimationFrame(...r) {
    let l = requestAnimationFrame(...r);
    return n.add(() => cancelAnimationFrame(l));
  }, nextFrame(...r) {
    return n.requestAnimationFrame(() => n.requestAnimationFrame(...r));
  }, setTimeout(...r) {
    let l = setTimeout(...r);
    return n.add(() => clearTimeout(l));
  }, add(r) {
    return e.push(r), () => {
      let l = e.indexOf(r);
      if (l >= 0) {
        let [u] = e.splice(l, 1);
        u();
      }
    };
  }, dispose() {
    for (let r of e.splice(0))
      r();
  }, async workQueue() {
    for (let r of t.splice(0))
      await r();
  } };
  return n;
}
function lt() {
  let [e] = B(ee);
  return v(() => () => e.dispose(), [e]), e;
}
let w = function(e) {
  let t = F(e);
  return a.useCallback((...n) => t.current(...n), [t]);
}, oe = { serverHandoffComplete: !1 };
function ge() {
  let [e, t] = B(oe.serverHandoffComplete);
  return v(() => {
    e !== !0 && t(!0);
  }, [e]), v(() => {
    oe.serverHandoffComplete === !1 && (oe.serverHandoffComplete = !0);
  }, []), e;
}
var ze;
let at = 0;
function he() {
  return ++at;
}
let K = (ze = a.useId) != null ? ze : function() {
  let e = ge(), [t, n] = a.useState(e ? he : null);
  return S(() => {
    t === null && n(he());
  }, [t]), t != null ? "" + t : void 0;
};
function b(e, t, ...n) {
  if (e in t) {
    let l = t[e];
    return typeof l == "function" ? l(...n) : l;
  }
  let r = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((l) => `"${l}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(r, b), r;
}
function ut(e) {
  return typeof window > "u" ? null : e instanceof Node ? e.ownerDocument : e != null && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document;
}
let it = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var O = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(O || {}), ot = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(ot || {}), st = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(st || {});
function ct(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(it));
}
var dt = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(dt || {});
let Mt = ["textarea", "input"].join(",");
function ft(e) {
  var t, n;
  return (n = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Mt)) != null ? n : !1;
}
function fe(e, t = (n) => n) {
  return e.slice().sort((n, r) => {
    let l = t(n), u = t(r);
    if (l === null || u === null)
      return 0;
    let i = l.compareDocumentPosition(u);
    return i & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : i & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function W(e, t, n = !0) {
  let r = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument, l = Array.isArray(e) ? n ? fe(e) : e : ct(e), u = r.activeElement, i = (() => {
    if (t & 5)
      return 1;
    if (t & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), o = (() => {
    if (t & 1)
      return 0;
    if (t & 2)
      return Math.max(0, l.indexOf(u)) - 1;
    if (t & 4)
      return Math.max(0, l.indexOf(u)) + 1;
    if (t & 8)
      return l.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), c = t & 32 ? { preventScroll: !0 } : {}, s = 0, d = l.length, M;
  do {
    if (s >= d || s + d <= 0)
      return 0;
    let f = o + s;
    if (t & 16)
      f = (f + d) % d;
    else {
      if (f < 0)
        return 3;
      if (f >= d)
        return 1;
    }
    M = l[f], M == null || M.focus(c), s += i;
  } while (M !== r.activeElement);
  return t & 6 && ft(M) && M.select(), M.hasAttribute("tabindex") || M.setAttribute("tabindex", "0"), 2;
}
function Oe(e) {
  var t;
  if (e.type)
    return e.type;
  let n = (t = e.as) != null ? t : "button";
  if (typeof n == "string" && n.toLowerCase() === "button")
    return "button";
}
function Pe(e, t) {
  let [n, r] = B(() => Oe(e));
  return S(() => {
    r(Oe(e));
  }, [e.type, e.as]), S(() => {
    n || !t.current || t.current instanceof HTMLButtonElement && !t.current.hasAttribute("type") && r("button");
  }, [n, t]), n;
}
let Ce = Symbol();
function mt(e, t = !0) {
  return Object.assign(e, { [Ce]: t });
}
function P(...e) {
  let t = E(e);
  v(() => {
    t.current = e;
  }, [e]);
  let n = w((r) => {
    for (let l of t.current)
      l != null && (typeof l == "function" ? l(r) : l.current = r);
  });
  return e.every((r) => r == null || (r == null ? void 0 : r[Ce])) ? void 0 : n;
}
var _ = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(_ || {}), $ = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))($ || {});
function L({ ourProps: e, theirProps: t, slot: n, defaultTag: r, features: l, visible: u = !0, name: i }) {
  let o = Ue(t, e);
  if (u)
    return J(o, n, r, i);
  let c = l != null ? l : 0;
  if (c & 2) {
    let { static: s = !1, ...d } = o;
    if (s)
      return J(d, n, r, i);
  }
  if (c & 1) {
    let { unmount: s = !0, ...d } = o;
    return b(s ? 0 : 1, { [0]() {
      return null;
    }, [1]() {
      return J({ ...d, hidden: !0, style: { display: "none" } }, n, r, i);
    } });
  }
  return J(o, n, r, i);
}
function J(e, t = {}, n, r) {
  let { as: l = n, children: u, refName: i = "ref", ...o } = se(e, ["unmount", "static"]), c = e.ref !== void 0 ? { [i]: e.ref } : {}, s = typeof u == "function" ? u(t) : u;
  o.className && typeof o.className == "function" && (o.className = o.className(t));
  let d = {};
  if (l === Z && Object.keys(Le(o)).length > 0) {
    if (!Xe(s) || Array.isArray(s) && s.length > 1)
      throw new Error(['Passing props on "Fragment"!', "", `The current component <${r} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(o).map((M) => `  - ${M}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((M) => `  - ${M}`).join(`
`)].join(`
`));
    return et(s, Object.assign({}, Ue(s.props, Le(se(o, ["ref"]))), d, c));
  }
  return tt(l, Object.assign({}, se(o, ["ref"]), l !== Z && c, l !== Z && d), s);
}
function Ue(...e) {
  if (e.length === 0)
    return {};
  if (e.length === 1)
    return e[0];
  let t = {}, n = {};
  for (let r of e)
    for (let l in r)
      l.startsWith("on") && typeof r[l] == "function" ? (n[l] != null || (n[l] = []), n[l].push(r[l])) : t[l] = r[l];
  if (t.disabled || t["aria-disabled"])
    return Object.assign(t, Object.fromEntries(Object.keys(n).map((r) => [r, void 0])));
  for (let r in n)
    Object.assign(t, { [r](l, ...u) {
      let i = n[r];
      for (let o of i) {
        if (l.defaultPrevented)
          return;
        o(l, ...u);
      }
    } });
  return t;
}
function h(e) {
  var t;
  return Object.assign(Je(e), { displayName: (t = e.displayName) != null ? t : e.name });
}
function Le(e) {
  let t = Object.assign({}, e);
  for (let n in t)
    t[n] === void 0 && delete t[n];
  return t;
}
function se(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t)
    r in n && delete n[r];
  return n;
}
function pt(e) {
  let t = e.parentElement, n = null;
  for (; t && !(t instanceof HTMLFieldSetElement); )
    t instanceof HTMLLegendElement && (n = t), t = t.parentElement;
  let r = (t == null ? void 0 : t.getAttribute("disabled")) === "";
  return r && gt(n) ? !1 : r;
}
function gt(e) {
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
let Nt = "div";
var Qe = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Qe || {});
let Dt = h(function(e, t) {
  let { features: n = 1, ...r } = e, l = { ref: t, "aria-hidden": (n & 2) === 2 ? !0 : void 0, style: { position: "absolute", width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n & 4) === 4 && (n & 2) !== 2 && { display: "none" } } };
  return L({ ourProps: l, theirProps: r, slot: {}, defaultTag: Nt, name: "Hidden" });
}), Ne = Y(null);
Ne.displayName = "OpenClosedContext";
var R = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(R || {});
function De() {
  return k(Ne);
}
function $e({ value: e, children: t }) {
  return a.createElement(Ne.Provider, { value: e }, t);
}
var j = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(j || {});
function Fe() {
  let e = E(!1);
  return S(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
function xt(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
var Tt = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Tt || {}), yt = ((e) => (e[e.ToggleDisclosure = 0] = "ToggleDisclosure", e[e.CloseDisclosure = 1] = "CloseDisclosure", e[e.SetButtonId = 2] = "SetButtonId", e[e.SetPanelId = 3] = "SetPanelId", e[e.LinkPanel = 4] = "LinkPanel", e[e.UnlinkPanel = 5] = "UnlinkPanel", e))(yt || {});
let Et = { [0]: (e) => ({ ...e, disclosureState: b(e.disclosureState, { [0]: 1, [1]: 0 }) }), [1]: (e) => e.disclosureState === 1 ? e : { ...e, disclosureState: 1 }, [4](e) {
  return e.linkedPanel === !0 ? e : { ...e, linkedPanel: !0 };
}, [5](e) {
  return e.linkedPanel === !1 ? e : { ...e, linkedPanel: !1 };
}, [2](e, t) {
  return e.buttonId === t.buttonId ? e : { ...e, buttonId: t.buttonId };
}, [3](e, t) {
  return e.panelId === t.panelId ? e : { ...e, panelId: t.panelId };
} }, xe = Y(null);
xe.displayName = "DisclosureContext";
function Te(e) {
  let t = k(xe);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Te), n;
  }
  return t;
}
let ye = Y(null);
ye.displayName = "DisclosureAPIContext";
function Ye(e) {
  let t = k(ye);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Ye), n;
  }
  return t;
}
let Ee = Y(null);
Ee.displayName = "DisclosurePanelContext";
function bt() {
  return k(Ee);
}
function It(e, t) {
  return b(t.type, Et, e, t);
}
let jt = Z, vt = h(function(e, t) {
  let { defaultOpen: n = !1, ...r } = e, l = `headlessui-disclosure-button-${K()}`, u = `headlessui-disclosure-panel-${K()}`, i = E(null), o = P(t, mt((x) => {
    i.current = x;
  }, e.as === void 0 || e.as === a.Fragment)), c = E(null), s = E(null), d = ke(It, { disclosureState: n ? 0 : 1, linkedPanel: !1, buttonRef: s, panelRef: c, buttonId: l, panelId: u }), [{ disclosureState: M }, f] = d;
  v(() => f({ type: 2, buttonId: l }), [l, f]), v(() => f({ type: 3, panelId: u }), [u, f]);
  let D = w((x) => {
    f({ type: 1 });
    let T = ut(i);
    if (!T)
      return;
    let A = (() => x ? x instanceof HTMLElement ? x : x.current instanceof HTMLElement ? x.current : T.getElementById(l) : T.getElementById(l))();
    A == null || A.focus();
  }), N = z(() => ({ close: D }), [D]), p = z(() => ({ open: M === 0, close: D }), [M, D]), m = { ref: o };
  return a.createElement(xe.Provider, { value: d }, a.createElement(ye.Provider, { value: N }, a.createElement($e, { value: b(M, { [0]: R.Open, [1]: R.Closed }) }, L({ ourProps: m, theirProps: r, slot: p, defaultTag: jt, name: "Disclosure" }))));
}), At = "button", wt = h(function(e, t) {
  let [n, r] = Te("Disclosure.Button"), l = bt(), u = l === null ? !1 : l === n.panelId, i = E(null), o = P(i, t, u ? null : n.buttonRef), c = w((p) => {
    var m;
    if (u) {
      if (n.disclosureState === 1)
        return;
      switch (p.key) {
        case j.Space:
        case j.Enter:
          p.preventDefault(), p.stopPropagation(), r({ type: 0 }), (m = n.buttonRef.current) == null || m.focus();
          break;
      }
    } else
      switch (p.key) {
        case j.Space:
        case j.Enter:
          p.preventDefault(), p.stopPropagation(), r({ type: 0 });
          break;
      }
  }), s = w((p) => {
    switch (p.key) {
      case j.Space:
        p.preventDefault();
        break;
    }
  }), d = w((p) => {
    var m;
    pt(p.currentTarget) || e.disabled || (u ? (r({ type: 0 }), (m = n.buttonRef.current) == null || m.focus()) : r({ type: 0 }));
  }), M = z(() => ({ open: n.disclosureState === 0 }), [n]), f = Pe(e, i), D = e, N = u ? { ref: o, type: f, onKeyDown: c, onClick: d } : { ref: o, id: n.buttonId, type: f, "aria-expanded": e.disabled ? void 0 : n.disclosureState === 0, "aria-controls": n.linkedPanel ? n.panelId : void 0, onKeyDown: c, onKeyUp: s, onClick: d };
  return L({ ourProps: N, theirProps: D, slot: M, defaultTag: At, name: "Disclosure.Button" });
}), zt = "div", ht = _.RenderStrategy | _.Static, Ot = h(function(e, t) {
  let [n, r] = Te("Disclosure.Panel"), { close: l } = Ye("Disclosure.Panel"), u = P(t, n.panelRef, () => {
    n.linkedPanel || r({ type: 4 });
  }), i = De(), o = (() => i !== null ? i === R.Open : n.disclosureState === 0)();
  v(() => () => r({ type: 5 }), [r]), v(() => {
    var M;
    n.disclosureState === 1 && ((M = e.unmount) != null ? M : !0) && r({ type: 5 });
  }, [n.disclosureState, e.unmount, r]);
  let c = z(() => ({ open: n.disclosureState === 0, close: l }), [n, l]), s = e, d = { ref: u, id: n.panelId };
  return a.createElement(Ee.Provider, { value: n.panelId }, L({ ourProps: d, theirProps: s, slot: c, defaultTag: zt, features: ht, visible: o, name: "Disclosure.Panel" }));
}), ce = Object.assign(vt, { Button: wt, Panel: Ot });
function Lt({ onFocus: e }) {
  let [t, n] = B(!0);
  return t ? a.createElement(Dt, { as: "button", type: "button", features: Qe.Focusable, onFocus: (r) => {
    r.preventDefault();
    let l, u = 50;
    function i() {
      if (u-- <= 0) {
        l && cancelAnimationFrame(l);
        return;
      }
      if (e()) {
        n(!1), cancelAnimationFrame(l);
        return;
      }
      l = requestAnimationFrame(i);
    }
    l = requestAnimationFrame(i);
  } }) : null;
}
var St = ((e) => (e[e.SetSelectedIndex = 0] = "SetSelectedIndex", e[e.RegisterTab = 1] = "RegisterTab", e[e.UnregisterTab = 2] = "UnregisterTab", e[e.RegisterPanel = 3] = "RegisterPanel", e[e.UnregisterPanel = 4] = "UnregisterPanel", e[e.ForceRerender = 5] = "ForceRerender", e))(St || {});
let kt = { [0](e, t) {
  let n = e.tabs.filter((u) => {
    var i;
    return !((i = u.current) != null && i.hasAttribute("disabled"));
  });
  if (t.index < 0)
    return { ...e, selectedIndex: e.tabs.indexOf(n[0]) };
  if (t.index > e.tabs.length)
    return { ...e, selectedIndex: e.tabs.indexOf(n[n.length - 1]) };
  let r = e.tabs.slice(0, t.index), l = [...e.tabs.slice(t.index), ...r].find((u) => n.includes(u));
  return l ? { ...e, selectedIndex: e.tabs.indexOf(l) } : e;
}, [1](e, t) {
  return e.tabs.includes(t.tab) ? e : { ...e, tabs: fe([...e.tabs, t.tab], (n) => n.current) };
}, [2](e, t) {
  return { ...e, tabs: fe(e.tabs.filter((n) => n !== t.tab), (n) => n.current) };
}, [3](e, t) {
  return e.panels.includes(t.panel) ? e : { ...e, panels: [...e.panels, t.panel] };
}, [4](e, t) {
  return { ...e, panels: e.panels.filter((n) => n !== t.panel) };
}, [5](e) {
  return { ...e };
} }, be = Y(null);
be.displayName = "TabsSSRContext";
function Ie(e) {
  let t = k(be);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Ie), n;
  }
  return t;
}
let je = Y(null);
je.displayName = "TabsDataContext";
function V(e) {
  let t = k(je);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, V), n;
  }
  return t;
}
let ve = Y(null);
ve.displayName = "TabsActionsContext";
function Ae(e) {
  let t = k(ve);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Ae), n;
  }
  return t;
}
function Pt(e, t) {
  return b(t.type, kt, e, t);
}
let Ct = Z, Ut = h(function(e, t) {
  let { defaultIndex: n = 0, vertical: r = !1, manual: l = !1, onChange: u, selectedIndex: i = null, ...o } = e;
  const c = r ? "vertical" : "horizontal", s = l ? "manual" : "auto";
  let d = P(t), [M, f] = ke(Pt, { selectedIndex: i != null ? i : n, tabs: [], panels: [] }), D = z(() => ({ selectedIndex: M.selectedIndex }), [M.selectedIndex]), N = F(u || (() => {
  })), p = F(M.tabs), m = z(() => ({ orientation: c, activation: s, ...M }), [c, s, M]), x = F(M.selectedIndex), T = z(() => ({ registerTab(y) {
    return f({ type: 1, tab: y }), () => f({ type: 2, tab: y });
  }, registerPanel(y) {
    return f({ type: 3, panel: y }), () => f({ type: 4, panel: y });
  }, forceRerender() {
    f({ type: 5 });
  }, change(y) {
    x.current !== y && N.current(y), x.current = y, f({ type: 0, index: y });
  } }), [f]);
  S(() => {
    f({ type: 0, index: i != null ? i : n });
  }, [i]);
  let A = E({ tabs: [], panels: [] }), q = { ref: d };
  return a.createElement(be.Provider, { value: A }, a.createElement(ve.Provider, { value: T }, a.createElement(je.Provider, { value: m }, m.tabs.length <= 0 && a.createElement(Lt, { onFocus: () => {
    var y, C;
    for (let U of p.current)
      if (((y = U.current) == null ? void 0 : y.tabIndex) === 0)
        return (C = U.current) == null || C.focus(), !0;
    return !1;
  } }), L({ ourProps: q, theirProps: o, slot: D, defaultTag: Ct, name: "Tabs" }))));
}), Qt = "div", $t = h(function(e, t) {
  let { orientation: n, selectedIndex: r } = V("Tab.List"), l = P(t);
  return L({ ourProps: { ref: l, role: "tablist", "aria-orientation": n }, theirProps: e, slot: { selectedIndex: r }, defaultTag: Qt, name: "Tabs.List" });
}), Ft = "button", Yt = h(function(e, t) {
  var n, r;
  let l = `headlessui-tabs-tab-${K()}`, { orientation: u, activation: i, selectedIndex: o, tabs: c, panels: s } = V("Tab"), d = Ae("Tab"), M = Ie("Tab"), f = E(null), D = P(f, t, (g) => {
    !g || d.forceRerender();
  });
  S(() => d.registerTab(f), [d, f]);
  let N = M.current.tabs.indexOf(l);
  N === -1 && (N = M.current.tabs.push(l) - 1);
  let p = c.indexOf(f);
  p === -1 && (p = N);
  let m = p === o, x = w((g) => {
    let I = c.map((le) => le.current).filter(Boolean);
    if (g.key === j.Space || g.key === j.Enter) {
      g.preventDefault(), g.stopPropagation(), d.change(p);
      return;
    }
    switch (g.key) {
      case j.Home:
      case j.PageUp:
        return g.preventDefault(), g.stopPropagation(), W(I, O.First);
      case j.End:
      case j.PageDown:
        return g.preventDefault(), g.stopPropagation(), W(I, O.Last);
    }
    if (b(u, { vertical() {
      if (g.key === j.ArrowUp)
        return W(I, O.Previous | O.WrapAround);
      if (g.key === j.ArrowDown)
        return W(I, O.Next | O.WrapAround);
    }, horizontal() {
      if (g.key === j.ArrowLeft)
        return W(I, O.Previous | O.WrapAround);
      if (g.key === j.ArrowRight)
        return W(I, O.Next | O.WrapAround);
    } }))
      return g.preventDefault();
  }), T = w(() => {
    var g;
    (g = f.current) == null || g.focus();
  }), A = w(() => {
    var g;
    (g = f.current) == null || g.focus(), d.change(p);
  }), q = w((g) => {
    g.preventDefault();
  }), y = z(() => ({ selected: m }), [m]), C = e, U = { ref: D, onKeyDown: x, onFocus: i === "manual" ? T : A, onMouseDown: q, onClick: A, id: l, role: "tab", type: Pe(e, f), "aria-controls": (r = (n = s[p]) == null ? void 0 : n.current) == null ? void 0 : r.id, "aria-selected": m, tabIndex: m ? 0 : -1 };
  return L({ ourProps: U, theirProps: C, slot: y, defaultTag: Ft, name: "Tabs.Tab" });
}), Rt = "div", Ht = h(function(e, t) {
  let { selectedIndex: n } = V("Tab.Panels"), r = P(t), l = z(() => ({ selectedIndex: n }), [n]);
  return L({ ourProps: { ref: r }, theirProps: e, slot: l, defaultTag: Rt, name: "Tabs.Panels" });
}), Zt = "div", Bt = _.RenderStrategy | _.Static, Wt = h(function(e, t) {
  var n, r;
  let { selectedIndex: l, tabs: u, panels: i } = V("Tab.Panel"), o = Ae("Tab.Panel"), c = Ie("Tab.Panel"), s = `headlessui-tabs-panel-${K()}`, d = E(null), M = P(d, t, (T) => {
    !T || o.forceRerender();
  });
  S(() => o.registerPanel(d), [o, d]);
  let f = c.current.panels.indexOf(s);
  f === -1 && (f = c.current.panels.push(s) - 1);
  let D = i.indexOf(d);
  D === -1 && (D = f);
  let N = D === l, p = z(() => ({ selected: N }), [N]), m = e, x = { ref: M, id: s, role: "tabpanel", "aria-labelledby": (r = (n = u[D]) == null ? void 0 : n.current) == null ? void 0 : r.id, tabIndex: N ? 0 : -1 };
  return L({ ourProps: x, theirProps: m, slot: p, defaultTag: Zt, features: Bt, visible: N, name: "Tabs.Panel" });
}), G = Object.assign(Yt, { Group: Ut, List: $t, Panels: Ht, Panel: Wt });
function Gt(e) {
  let t = { called: !1 };
  return (...n) => {
    if (!t.called)
      return t.called = !0, e(...n);
  };
}
function de(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function Me(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var me = ((e) => (e.Ended = "ended", e.Cancelled = "cancelled", e))(me || {});
function _t(e, t) {
  let n = ee();
  if (!e)
    return n.dispose;
  let { transitionDuration: r, transitionDelay: l } = getComputedStyle(e), [u, i] = [r, l].map((o) => {
    let [c = 0] = o.split(",").filter(Boolean).map((s) => s.includes("ms") ? parseFloat(s) : parseFloat(s) * 1e3).sort((s, d) => d - s);
    return c;
  });
  if (u + i !== 0) {
    let o = [];
    o.push(n.addEventListener(e, "transitionrun", (c) => {
      c.target === c.currentTarget && (o.splice(0).forEach((s) => s()), o.push(n.addEventListener(e, "transitionend", (s) => {
        s.target === s.currentTarget && (t("ended"), o.splice(0).forEach((d) => d()));
      }), n.addEventListener(e, "transitioncancel", (s) => {
        s.target === s.currentTarget && (t("cancelled"), o.splice(0).forEach((d) => d()));
      })));
    }));
  } else
    t("ended");
  return n.add(() => t("cancelled")), n.dispose;
}
function qt(e, t, n, r) {
  let l = n ? "enter" : "leave", u = ee(), i = r !== void 0 ? Gt(r) : () => {
  }, o = b(l, { enter: () => t.enter, leave: () => t.leave }), c = b(l, { enter: () => t.enterTo, leave: () => t.leaveTo }), s = b(l, { enter: () => t.enterFrom, leave: () => t.leaveFrom });
  return Me(e, ...t.enter, ...t.enterTo, ...t.enterFrom, ...t.leave, ...t.leaveFrom, ...t.leaveTo, ...t.entered), de(e, ...o, ...s), u.nextFrame(() => {
    Me(e, ...s), de(e, ...c), _t(e, (d) => (d === "ended" && (Me(e, ...o), de(e, ...t.entered)), i(d)));
  }), u.dispose;
}
function Kt({ container: e, direction: t, classes: n, events: r, onStart: l, onStop: u }) {
  let i = Fe(), o = lt(), c = F(t), s = w(() => b(c.current, { enter: () => r.current.beforeEnter(), leave: () => r.current.beforeLeave(), idle: () => {
  } })), d = w(() => b(c.current, { enter: () => r.current.afterEnter(), leave: () => r.current.afterLeave(), idle: () => {
  } }));
  S(() => {
    let M = ee();
    o.add(M.dispose);
    let f = e.current;
    if (!!f && c.current !== "idle" && !!i.current)
      return M.dispose(), s(), l.current(c.current), M.add(qt(f, n.current, c.current === "enter", (D) => {
        M.dispose(), b(D, { [me.Ended]() {
          d(), u.current(c.current);
        }, [me.Cancelled]: () => {
        } });
      })), M.dispose;
  }, [t]);
}
function H(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let te = Y(null);
te.displayName = "TransitionContext";
var Vt = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(Vt || {});
function Jt() {
  let e = k(te);
  if (e === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
function Xt() {
  let e = k(ne);
  if (e === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
let ne = Y(null);
ne.displayName = "NestingContext";
function re(e) {
  return "children" in e ? re(e.children) : e.current.filter(({ state: t }) => t === "visible").length > 0;
}
function Re(e) {
  let t = F(e), n = E([]), r = Fe(), l = w((i, o = $.Hidden) => {
    let c = n.current.findIndex(({ id: s }) => s === i);
    c !== -1 && (b(o, { [$.Unmount]() {
      n.current.splice(c, 1);
    }, [$.Hidden]() {
      n.current[c].state = "hidden";
    } }), xt(() => {
      var s;
      !re(n) && r.current && ((s = t.current) == null || s.call(t));
    }));
  }), u = w((i) => {
    let o = n.current.find(({ id: c }) => c === i);
    return o ? o.state !== "visible" && (o.state = "visible") : n.current.push({ id: i, state: "visible" }), () => l(i, $.Unmount);
  });
  return z(() => ({ children: n, register: u, unregister: l }), [u, l, n]);
}
function en() {
}
let tn = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function Se(e) {
  var t;
  let n = {};
  for (let r of tn)
    n[r] = (t = e[r]) != null ? t : en;
  return n;
}
function nn(e) {
  let t = E(Se(e));
  return v(() => {
    t.current = Se(e);
  }, [e]), t;
}
let rn = "div", He = _.RenderStrategy, Ze = h(function(e, t) {
  let { beforeEnter: n, afterEnter: r, beforeLeave: l, afterLeave: u, enter: i, enterFrom: o, enterTo: c, entered: s, leave: d, leaveFrom: M, leaveTo: f, ...D } = e, N = E(null), p = P(N, t), [m, x] = B("visible"), T = D.unmount ? $.Unmount : $.Hidden, { show: A, appear: q, initial: y } = Jt(), { register: C, unregister: U } = Xt(), g = E(null), I = K();
  v(() => {
    if (I)
      return C(I);
  }, [C, I]), v(() => {
    if (T === $.Hidden && !!I) {
      if (A && m !== "visible") {
        x("visible");
        return;
      }
      b(m, { hidden: () => U(I), visible: () => C(I) });
    }
  }, [m, I, C, U, A, T]);
  let le = F({ enter: H(i), enterFrom: H(o), enterTo: H(c), entered: H(s), leave: H(d), leaveFrom: H(M), leaveTo: H(f) }), We = nn({ beforeEnter: n, afterEnter: r, beforeLeave: l, afterLeave: u }), ae = ge();
  v(() => {
    if (ae && m === "visible" && N.current === null)
      throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [N, m, ae]);
  let ue = y && !q, Ge = (() => !ae || ue || g.current === A ? "idle" : A ? "enter" : "leave")(), ie = E(!1), we = Re(() => {
    ie.current || (x("hidden"), U(I));
  });
  Kt({ container: N, classes: le, events: We, direction: Ge, onStart: F(() => {
    ie.current = !0;
  }), onStop: F((Ke) => {
    ie.current = !1, Ke === "leave" && !re(we) && (x("hidden"), U(I));
  }) }), v(() => {
    !ue || (T === $.Hidden ? g.current = null : g.current = A);
  }, [A, ue, m]);
  let _e = D, qe = { ref: p };
  return a.createElement(ne.Provider, { value: we }, a.createElement($e, { value: b(m, { visible: R.Open, hidden: R.Closed }) }, L({ ourProps: qe, theirProps: _e, defaultTag: rn, features: He, visible: m === "visible", name: "Transition.Child" })));
}), pe = h(function(e, t) {
  let { show: n, appear: r = !1, unmount: l, ...u } = e, i = E(null), o = P(i, t);
  ge();
  let c = De();
  if (n === void 0 && c !== null && (n = b(c, { [R.Open]: !0, [R.Closed]: !1 })), ![!0, !1].includes(n))
    throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [s, d] = B(n ? "visible" : "hidden"), M = Re(() => {
    d("hidden");
  }), [f, D] = B(!0), N = E([n]);
  S(() => {
    f !== !1 && N.current[N.current.length - 1] !== n && (N.current.push(n), D(!1));
  }, [N, n]);
  let p = z(() => ({ show: n, appear: r, initial: f }), [n, r, f]);
  v(() => {
    if (n)
      d("visible");
    else if (!re(M))
      d("hidden");
    else {
      let x = i.current;
      if (!x)
        return;
      let T = x.getBoundingClientRect();
      T.x === 0 && T.y === 0 && T.width === 0 && T.height === 0 && d("hidden");
    }
  }, [n, M]);
  let m = { unmount: l };
  return a.createElement(ne.Provider, { value: M }, a.createElement(te.Provider, { value: p }, L({ ourProps: { ...m, as: Z, children: a.createElement(Ze, { ref: o, ...m, ...u }) }, theirProps: {}, defaultTag: Z, features: He, visible: s === "visible", name: "Transition" })));
}), ln = h(function(e, t) {
  let n = k(te) !== null, r = De() !== null;
  return a.createElement(a.Fragment, null, !n && r ? a.createElement(pe, { ref: t, ...e }) : a.createElement(Ze, { ref: t, ...e }));
}), an = Object.assign(pe, { Child: ln, Root: pe });
var Be = { exports: {} };
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function n() {
      for (var r = [], l = 0; l < arguments.length; l++) {
        var u = arguments[l];
        if (!!u) {
          var i = typeof u;
          if (i === "string" || i === "number")
            r.push(u);
          else if (Array.isArray(u)) {
            if (u.length) {
              var o = n.apply(null, u);
              o && r.push(o);
            }
          } else if (i === "object")
            if (u.toString === Object.prototype.toString)
              for (var c in u)
                t.call(u, c) && u[c] && r.push(c);
            else
              r.push(u.toString());
        }
      }
      return r.join(" ");
    }
    e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
  })();
})(Be);
const Q = Be.exports, un = ["Description", "Status"], on = ({
  description: e,
  statusTitle: t,
  statusDescription: n,
  statusLink: r,
  startDate: l,
  endDate: u
}) => {
  const i = t || n || r;
  return /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("div", {
    className: "flex flex-col md:flex-row text-primaryText"
  }, /* @__PURE__ */ a.createElement(G.Group, {
    as: "div",
    className: "flex-1"
  }, /* @__PURE__ */ a.createElement(G.List, {
    className: "flex space-x-1 border-b-[1px] border-b-borderTabs"
  }, un.map((o) => /* @__PURE__ */ a.createElement(G, {
    key: o,
    className: ({ selected: c }) => Q("text-xs py-1 px-5 border-b-2 hover:text-orange hover:border-orange uppercase tracking-widest", "focus:outline-none focus-visible:ring focus-visible:ring-orange-600 focus-visible:ring-opacity-75", c ? "text-orange-600" : "text-borderTab hover:text-orange-600")
  }, o))), /* @__PURE__ */ a.createElement(G.Panels, {
    className: "mt-2"
  }, /* @__PURE__ */ a.createElement(G.Panel, {
    className: Q("p-1", "focus:outline-none focus-visible:ring focus-visible:ring-orange-600 focus-visible:ring-opacity-75")
  }, /* @__PURE__ */ a.createElement("dl", {
    className: "space-y-4"
  }, /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement("dt", {
    className: "text-sm text-secondaryText leading-5"
  }, "Problem statement / Description"), /* @__PURE__ */ a.createElement("dd", {
    className: "text-sm"
  }, e)))), i ? /* @__PURE__ */ a.createElement(G.Panel, {
    className: Q("p-1 text-primaryText", "ring-orange-600 ring-opacity-60 ring-offset-1 ring-offset-orange-600 focus:outline-none focus:ring-1")
  }, /* @__PURE__ */ a.createElement("dl", {
    className: "space-y-4"
  }, t ? /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement("dt", {
    className: "text-sm text-secondaryText leading-5"
  }, "Status"), /* @__PURE__ */ a.createElement("dd", {
    className: "text-sm"
  }, t)) : null, n ? /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement("dt", {
    className: "sr-only"
  }, "Description"), /* @__PURE__ */ a.createElement("dd", {
    className: "text-sm"
  }, n)) : null, r ? /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement("dt", {
    className: "text-sm text-secondaryText leading-5"
  }, "Read more:"), /* @__PURE__ */ a.createElement("dd", {
    className: "text-sm text-orange-600"
  }, /* @__PURE__ */ a.createElement("a", {
    href: r,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "ring-blue-400 focus:outline-none focus:ring-2"
  }, r))) : null)) : null)), /* @__PURE__ */ a.createElement("dl", {
    className: "flex flex-row gap-8 text-sm mt-[26px] px-1 md:px-0 md:pt-4 md:border-t-[1px] md:border-t-borderTabs md:gap-0 md:flex-col md:pl-7 md:basis-[260px] md:min-w-[260px]"
  }, l ? /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement("dt", {
    className: "text-gray-500"
  }, "Start Date"), /* @__PURE__ */ a.createElement("dd", null, l)) : null, u ? /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement("dt", {
    className: "text-gray-500"
  }, "End Date"), /* @__PURE__ */ a.createElement("dd", null, u)) : null)));
}, X = ({ label: e, value: t }) => /* @__PURE__ */ a.createElement("p", {
  className: "flex flex-col"
}, /* @__PURE__ */ a.createElement("span", {
  className: " text-secondaryText text-sm"
}, e), /* @__PURE__ */ a.createElement("span", {
  className: "text-primaryText text-sm font-bold"
}, t)), sn = {
  Completed: "bg-[#39e27f]",
  Ongoing: "bg-[#f2ca4e]",
  Canceled: "bg-[#dc4747]",
  Default: "bg-gray-600"
}, dn = (e) => /* @__PURE__ */ a.createElement(ce, {
  as: "div",
  className: Q(e.theme, "px-0 rounded-r-2xl shadow-card bg-card")
}, ({ open: t }) => {
  var n, r;
  return /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(ce.Button, {
    className: Q("flex flex-col min-h-[133px] w-full justify-between pr-4 rounded-r-2xl text-left", "focus:outline-none focus-visible:ring focus-visible:ring-orange-600 focus-visible:ring-opacity-75", "md:flex-row")
  }, /* @__PURE__ */ a.createElement("div", {
    className: Q("relative w-full pl-9 sm:pl-12 flex flex-1 flex-col space-x-4 justify-between py-4", "md:flex-row md:pl-[60px]")
  }, /* @__PURE__ */ a.createElement("div", {
    className: Q("absolute left-0 top-[122px] w-[122px] h-[42px] transform rotate-[270deg] origin-top-left rounded-bl-[16px]", "flex items-center justify-center text-white font-bold text-xs uppercase tracking-[2px]", sn[(n = e.Status) != null ? n : "Default"])
  }, e.Status), /* @__PURE__ */ a.createElement("div", {
    className: "flex flex-1 pb-8 md:py-0 border-b-gray-500 border-b-[1px] border-dashed md:border-b-0"
  }, /* @__PURE__ */ a.createElement("div", null, /* @__PURE__ */ a.createElement("span", {
    className: "text-secondaryText text-sm"
  }, "Proposal"), /* @__PURE__ */ a.createElement("h2", {
    className: "text-lg text-primaryText"
  }, e.Project_name), /* @__PURE__ */ a.createElement("a", {
    href: "https://paulccari.com",
    target: "_blank",
    onClick: (l) => l.stopPropagation(),
    rel: "noopener noreferrer",
    className: "text-md text-orange-600 pointer flex items-center no-underline"
  }, "Read More", /* @__PURE__ */ a.createElement("img", {
    src: nt,
    className: "w-4 h-4 ml-1",
    alt: ""
  })))), /* @__PURE__ */ a.createElement("div", {
    className: Q("flex flex-1 flex-col", "sm:flex-row sm:space-x-4 py-4", "md:border-l-gray-500 md:border-l-[1px] md:border-dashed md:pr-4 md:pl-8 md:py-0")
  }, e.Fund ? /* @__PURE__ */ a.createElement("div", {
    className: "flex-1 space-y-1 mb-1 md:mb-0"
  }, /* @__PURE__ */ a.createElement(X, {
    label: "Challenge",
    value: e.Category
  }), /* @__PURE__ */ a.createElement(X, {
    label: "Fund",
    value: `Fund ${e.Fund}`
  })) : null, /* @__PURE__ */ a.createElement("div", {
    className: "flex-1 space-y-1"
  }, e.USD_equivalent ? /* @__PURE__ */ a.createElement(X, {
    label: "Amount Requested",
    value: `${(r = e.USD_equivalent) != null ? r : ""} in ${e.Currency} `
  }) : null, /* @__PURE__ */ a.createElement(X, {
    label: "Project Lead",
    value: e.Project_Lead
  })))), /* @__PURE__ */ a.createElement("img", {
    src: rt,
    alt: "",
    className: Q("transform rotate-180 h-5 w-5 self-center mb-2 ml-4 md:mb-0 md:ml-0", t && "rotate-[360deg]")
  })), /* @__PURE__ */ a.createElement(an, {
    enter: "transition duration-100 ease-out",
    enterFrom: "transform scale-95 opacity-0",
    enterTo: "transform scale-100 opacity-100",
    leave: "transition duration-75 ease-out",
    leaveFrom: "transform scale-100 opacity-100",
    leaveTo: "transform scale-95 opacity-0"
  }, /* @__PURE__ */ a.createElement(ce.Panel, {
    className: "border-t-[1px] border-t-gray-500 border-dashed ml-12 sm:ml-16 md:ml-[60px] pt-5 pb-6 mr-4"
  }, /* @__PURE__ */ a.createElement(on, {
    description: e.Description,
    startDate: e.Started_on,
    endDate: e.Completed_on,
    statusTitle: e.Status,
    statusDescription: e.Status_description,
    statusLink: e.Status_desc_link1
  }))));
});
export {
  dn as GrantProposalItem
};
