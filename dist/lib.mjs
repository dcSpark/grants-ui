const Zn = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxNCAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAuNzMzMDIyIDAuNTAwMDA1QzAuNTQ4MjgxIDAuNDk5MjkyIDAuMzcwNzQ4IDAuNTcxNDg3IDAuMjM5MDk2IDAuNzAwODUxQzAuMTA3NDQzIDAuODMwMjE2IDAuMDMyMzM2IDEuMDA2MjcgMC4wMzAxNTM4IDEuMTkwNjZMNC44NjI5NWUtMDUgNC43MDk0MkMtMC4wMDEwMzUyMiA0LjgwMTE5IDAuMDE2MDA4MyA0Ljg5MjI5IDAuMDUwMTk1NSA0Ljk3NzQ5QzAuMDg0MzgyNyA1LjA2MjY5IDAuMTM1MDQ4IDUuMTQwMzMgMC4xOTkzMDEgNS4yMDU5OEMwLjI2MzU1MyA1LjI3MTY0IDAuMzQwMTI4IDUuMzI0MDIgMC40MjQ2NjMgNS4zNjAxNEMwLjUwOTE5NyA1LjM5NjI1IDAuNjAwMDMzIDUuNDE1MzggMC42OTE5NzcgNS40MTY0NUMwLjc4NDQ5MyA1LjQxNzUzIDAuODc2MzA4IDUuNDAwMyAwLjk2MjExMiA1LjM2NTc2QzEuMDQ3OTIgNS4zMzEyMSAxLjEyNjAxIDUuMjgwMDIgMS4xOTE4OCA1LjIxNTE3QzEuMjU3NzQgNS4xNTAzMSAxLjMxMDA3IDUuMDczMDYgMS4zNDU4NSA0Ljk4NzlDMS4zODE2MyA0LjkwMjczIDEuNDAwMTQgNC44MTEzMyAxLjQwMDMyIDQuNzE4OTdMMS40MjYzIDEuODk3NjhIMTIuNTk5N1YxMy4wODE4TDkuNzkzNzMgMTMuMTAyM0M5LjYwODc2IDEzLjEwNDEgOS40MzIwMiAxMy4xNzg5IDkuMzAyMTEgMTMuMzEwNEM5LjE3MjIxIDEzLjQ0MTggOS4wOTk3IDEzLjYxOTMgOS4xMDA0NCAxMy44MDM5QzkuMTAwNzkgMTMuODk1NyA5LjExOTI1IDEzLjk4NjUgOS4xNTQ3NyAxNC4wNzExQzkuMTkwMjkgMTQuMTU1OCA5LjI0MjE2IDE0LjIzMjYgOS4zMDc0MyAxNC4yOTczQzkuMzcyNyAxNC4zNjE5IDkuNDUwMDggMTQuNDEzMSA5LjUzNTE3IDE0LjQ0NzlDOS42MjAyNSAxNC40ODI2IDkuNzExMzYgMTQuNTAwNCA5LjgwMzMgMTQuNUwxMy4zMDI2IDE0LjQ3NDFDMTMuNDg3MyAxNC40NzMzIDEzLjY2NDMgMTQuMzk5OCAxMy43OTQ5IDE0LjI2OTRDMTMuOTI1NiAxNC4xMzkgMTMuOTk5MyAxMy45NjIzIDE0IDEzLjc3OFYxLjE5NjExQzEzLjk5OTMgMS4wMTA3OCAxMy45MjQ4IDAuODMzMzIzIDEzLjc5MyAwLjcwMjc4MUMxMy42NjEyIDAuNTcyMjQgMTMuNDgyOCAwLjQ5OTI5OCAxMy4yOTcxIDAuNTAwMDA1SDAuNzMzMDIyWk0yLjEzMzI5IDYuNzg5NTZDMi4wNDEyMyA2Ljc4OTIgMS45NSA2LjgwNjk3IDEuODY0ODMgNi44NDE4NEMxLjc3OTY2IDYuODc2NzIgMS43MDIyMiA2LjkyODAxIDEuNjM2OTQgNi45OTI3OUMxLjU3MTY1IDcuMDU3NTggMS41MTk4MSA3LjEzNDU4IDEuNDg0MzcgNy4yMTkzOUMxLjQ0ODkzIDcuMzA0MiAxLjQzMDYgNy4zOTUxNSAxLjQzMDQyIDcuNDg3MDNDMS40MzAwNiA3LjU3OTI3IDEuNDQ4IDcuNjcwNjUgMS40ODMyIDcuNzU1OTNDMS41MTgzOSA3Ljg0MTIxIDEuNTcwMTUgNy45MTg3IDEuNjM1NDggNy45ODM5MkMxLjcwMDgyIDguMDQ5MTQgMS43Nzg0NSA4LjEwMDgxIDEuODYzODkgOC4xMzU5NEMxLjk0OTMzIDguMTcxMDcgMi4wNDA4OSA4LjE4ODk2IDIuMTMzMjkgOC4xODg2SDUuMzI3NjVMMC4yMzY2MzggMTMuMjg1MkMwLjEwNjIwNCAxMy40MTYyIDAuMDMyOTk1NiAxMy41OTMzIDAuMDMyOTk1NiAxMy43NzhDMC4wMzI5OTU2IDEzLjk2MjYgMC4xMDYyMDQgMTQuMTM5NyAwLjIzNjYzOCAxNC4yNzA3QzAuMzA0MTAxIDE0LjMzODUgMC4zODQ3ODIgMTQuMzkxOCAwLjQ3MzY4OCAxNC40MjcyQzAuNTYyNTk0IDE0LjQ2MjcgMC42NTc4MzYgMTQuNDc5NSAwLjc1MzUzNCAxNC40NzY4QzAuOTMyNzQ1IDE0LjQ3MTQgMS4xMDMwNyAxNC4zOTc3IDEuMjI5NDEgMTQuMjcwN0w2LjMzNTQ2IDkuMTY0NTJWMTIuMzc3NUM2LjMzNTEgMTIuNDY5MyA2LjM1Mjg0IDEyLjU2MDMgNi4zODc3IDEyLjY0NTJDNi40MjI1NSAxMi43MzAxIDYuNDczODMgMTIuODA3NCA2LjUzODU5IDEyLjg3MjVDNi42MDMzNSAxMi45Mzc2IDYuNjgwMzMgMTIuOTg5NCA2Ljc2NTEzIDEzLjAyNDlDNi44NDk5NCAxMy4wNjAzIDYuOTQwOTEgMTMuMDc4OCA3LjAzMjg1IDEzLjA3OTFDNy4xMjUyNiAxMy4wNzk1IDcuMjE2ODIgMTMuMDYxNiA3LjMwMjI2IDEzLjAyNjRDNy4zODc3IDEyLjk5MTMgNy40NjUzMiAxMi45Mzk2IDcuNTMwNjYgMTIuODc0NEM3LjU5NiAxMi44MDkyIDcuNjQ3NzYgMTIuNzMxNyA3LjY4Mjk2IDEyLjY0NjRDNy43MTgxNSAxMi41NjEyIDcuNzM2MDggMTIuNDY5OCA3LjczNTcyIDEyLjM3NzVWNy40ODcwM0M3LjczNTUzIDcuMzk1MTUgNy43MTcxOSA3LjMwNDIxIDcuNjgxNzUgNy4yMTk0QzcuNjQ2MzEgNy4xMzQ2IDcuNTk0NDcgNy4wNTc2IDcuNTI5MTggNi45OTI4MkM3LjQ2MzkgNi45MjgwMyA3LjM4NjQ3IDYuODc2NzQgNy4zMDEzIDYuODQxODZDNy4yMTYxNCA2LjgwNjk5IDcuMTI0OTEgNi43ODkyMSA3LjAzMjg1IDYuNzg5NTZIMi4xMzMyOVoiIGZpbGw9IiNGRjk4MjgiLz4KPC9zdmc+Cg==", Jn = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE4LjcwNzEgMTQuNzA3MUMxOC4zMTY2IDE1LjA5NzYgMTcuNjgzNCAxNS4wOTc2IDE3LjI5MjkgMTQuNzA3MUwxMiA5LjQxNDIxTDYuNzA3MTEgMTQuNzA3MUM2LjMxNjU4IDE1LjA5NzYgNS42ODM0MiAxNS4wOTc2IDUuMjkyODkgMTQuNzA3MUM0LjkwMjM3IDE0LjMxNjYgNC45MDIzNyAxMy42ODM0IDUuMjkyODkgMTMuMjkyOUwxMS4yOTI5IDcuMjkyODlDMTEuNjgzNCA2LjkwMjM3IDEyLjMxNjYgNi45MDIzNyAxMi43MDcxIDcuMjkyODlMMTguNzA3MSAxMy4yOTI5QzE5LjA5NzYgMTMuNjgzNCAxOS4wOTc2IDE0LjMxNjYgMTguNzA3MSAxNC43MDcxWiIgZmlsbD0iIzgwODA4MCIvPgo8L3N2Zz4K";
var ft = { exports: {} }, L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nn;
function Xn() {
  if (nn)
    return L;
  nn = 1;
  var r = Symbol.for("react.element"), t = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), v = Symbol.for("react.provider"), m = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), E = Symbol.for("react.memo"), M = Symbol.for("react.lazy"), T = Symbol.iterator;
  function N(u) {
    return u === null || typeof u != "object" ? null : (u = T && u[T] || u["@@iterator"], typeof u == "function" ? u : null);
  }
  var P = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, F = Object.assign, U = {};
  function R(u, y, O) {
    this.props = u, this.context = y, this.refs = U, this.updater = O || P;
  }
  R.prototype.isReactComponent = {}, R.prototype.setState = function(u, y) {
    if (typeof u != "object" && typeof u != "function" && u != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, u, y, "setState");
  }, R.prototype.forceUpdate = function(u) {
    this.updater.enqueueForceUpdate(this, u, "forceUpdate");
  };
  function Q() {
  }
  Q.prototype = R.prototype;
  function S(u, y, O) {
    this.props = u, this.context = y, this.refs = U, this.updater = O || P;
  }
  var te = S.prototype = new Q();
  te.constructor = S, F(te, R.prototype), te.isPureReactComponent = !0;
  var de = Array.isArray, I = Object.prototype.hasOwnProperty, Z = { current: null }, se = { key: !0, ref: !0, __self: !0, __source: !0 };
  function A(u, y, O) {
    var V, z = {}, K = null, J = null;
    if (y != null)
      for (V in y.ref !== void 0 && (J = y.ref), y.key !== void 0 && (K = "" + y.key), y)
        I.call(y, V) && !se.hasOwnProperty(V) && (z[V] = y[V]);
    var q = arguments.length - 2;
    if (q === 1)
      z.children = O;
    else if (1 < q) {
      for (var H = Array(q), fe = 0; fe < q; fe++)
        H[fe] = arguments[fe + 2];
      z.children = H;
    }
    if (u && u.defaultProps)
      for (V in q = u.defaultProps, q)
        z[V] === void 0 && (z[V] = q[V]);
    return { $$typeof: r, type: u, key: K, ref: J, props: z, _owner: Z.current };
  }
  function X(u, y) {
    return { $$typeof: r, type: u.type, key: y, ref: u.ref, props: u.props, _owner: u._owner };
  }
  function De(u) {
    return typeof u == "object" && u !== null && u.$$typeof === r;
  }
  function Ye(u) {
    var y = { "=": "=0", ":": "=2" };
    return "$" + u.replace(/[=:]/g, function(O) {
      return y[O];
    });
  }
  var xe = /\/+/g;
  function ce(u, y) {
    return typeof u == "object" && u !== null && u.key != null ? Ye("" + u.key) : y.toString(36);
  }
  function me(u, y, O, V, z) {
    var K = typeof u;
    (K === "undefined" || K === "boolean") && (u = null);
    var J = !1;
    if (u === null)
      J = !0;
    else
      switch (K) {
        case "string":
        case "number":
          J = !0;
          break;
        case "object":
          switch (u.$$typeof) {
            case r:
            case t:
              J = !0;
          }
      }
    if (J)
      return J = u, z = z(J), u = V === "" ? "." + ce(J, 0) : V, de(z) ? (O = "", u != null && (O = u.replace(xe, "$&/") + "/"), me(z, y, O, "", function(fe) {
        return fe;
      })) : z != null && (De(z) && (z = X(z, O + (!z.key || J && J.key === z.key ? "" : ("" + z.key).replace(xe, "$&/") + "/") + u)), y.push(z)), 1;
    if (J = 0, V = V === "" ? "." : V + ":", de(u))
      for (var q = 0; q < u.length; q++) {
        K = u[q];
        var H = V + ce(K, q);
        J += me(K, y, O, H, z);
      }
    else if (H = N(u), typeof H == "function")
      for (u = H.call(u), q = 0; !(K = u.next()).done; )
        K = K.value, H = V + ce(K, q++), J += me(K, y, O, H, z);
    else if (K === "object")
      throw y = String(u), Error("Objects are not valid as a React child (found: " + (y === "[object Object]" ? "object with keys {" + Object.keys(u).join(", ") + "}" : y) + "). If you meant to render a collection of children, use an array instead.");
    return J;
  }
  function ue(u, y, O) {
    if (u == null)
      return u;
    var V = [], z = 0;
    return me(u, V, "", "", function(K) {
      return y.call(O, K, z++);
    }), V;
  }
  function he(u) {
    if (u._status === -1) {
      var y = u._result;
      y = y(), y.then(function(O) {
        (u._status === 0 || u._status === -1) && (u._status = 1, u._result = O);
      }, function(O) {
        (u._status === 0 || u._status === -1) && (u._status = 2, u._result = O);
      }), u._status === -1 && (u._status = 0, u._result = y);
    }
    if (u._status === 1)
      return u._result.default;
    throw u._result;
  }
  var w = { current: null }, Ee = { transition: null }, Re = { ReactCurrentDispatcher: w, ReactCurrentBatchConfig: Ee, ReactCurrentOwner: Z };
  return L.Children = { map: ue, forEach: function(u, y, O) {
    ue(u, function() {
      y.apply(this, arguments);
    }, O);
  }, count: function(u) {
    var y = 0;
    return ue(u, function() {
      y++;
    }), y;
  }, toArray: function(u) {
    return ue(u, function(y) {
      return y;
    }) || [];
  }, only: function(u) {
    if (!De(u))
      throw Error("React.Children.only expected to receive a single React element child.");
    return u;
  } }, L.Component = R, L.Fragment = o, L.Profiler = c, L.PureComponent = S, L.StrictMode = s, L.Suspense = g, L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Re, L.cloneElement = function(u, y, O) {
    if (u == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + u + ".");
    var V = F({}, u.props), z = u.key, K = u.ref, J = u._owner;
    if (y != null) {
      if (y.ref !== void 0 && (K = y.ref, J = Z.current), y.key !== void 0 && (z = "" + y.key), u.type && u.type.defaultProps)
        var q = u.type.defaultProps;
      for (H in y)
        I.call(y, H) && !se.hasOwnProperty(H) && (V[H] = y[H] === void 0 && q !== void 0 ? q[H] : y[H]);
    }
    var H = arguments.length - 2;
    if (H === 1)
      V.children = O;
    else if (1 < H) {
      q = Array(H);
      for (var fe = 0; fe < H; fe++)
        q[fe] = arguments[fe + 2];
      V.children = q;
    }
    return { $$typeof: r, type: u.type, key: z, ref: K, props: V, _owner: J };
  }, L.createContext = function(u) {
    return u = { $$typeof: m, _currentValue: u, _currentValue2: u, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, u.Provider = { $$typeof: v, _context: u }, u.Consumer = u;
  }, L.createElement = A, L.createFactory = function(u) {
    var y = A.bind(null, u);
    return y.type = u, y;
  }, L.createRef = function() {
    return { current: null };
  }, L.forwardRef = function(u) {
    return { $$typeof: h, render: u };
  }, L.isValidElement = De, L.lazy = function(u) {
    return { $$typeof: M, _payload: { _status: -1, _result: u }, _init: he };
  }, L.memo = function(u, y) {
    return { $$typeof: E, type: u, compare: y === void 0 ? null : y };
  }, L.startTransition = function(u) {
    var y = Ee.transition;
    Ee.transition = {};
    try {
      u();
    } finally {
      Ee.transition = y;
    }
  }, L.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, L.useCallback = function(u, y) {
    return w.current.useCallback(u, y);
  }, L.useContext = function(u) {
    return w.current.useContext(u);
  }, L.useDebugValue = function() {
  }, L.useDeferredValue = function(u) {
    return w.current.useDeferredValue(u);
  }, L.useEffect = function(u, y) {
    return w.current.useEffect(u, y);
  }, L.useId = function() {
    return w.current.useId();
  }, L.useImperativeHandle = function(u, y, O) {
    return w.current.useImperativeHandle(u, y, O);
  }, L.useInsertionEffect = function(u, y) {
    return w.current.useInsertionEffect(u, y);
  }, L.useLayoutEffect = function(u, y) {
    return w.current.useLayoutEffect(u, y);
  }, L.useMemo = function(u, y) {
    return w.current.useMemo(u, y);
  }, L.useReducer = function(u, y, O) {
    return w.current.useReducer(u, y, O);
  }, L.useRef = function(u) {
    return w.current.useRef(u);
  }, L.useState = function(u) {
    return w.current.useState(u);
  }, L.useSyncExternalStore = function(u, y, O) {
    return w.current.useSyncExternalStore(u, y, O);
  }, L.useTransition = function() {
    return w.current.useTransition();
  }, L.version = "18.2.0", L;
}
var kr = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var an;
function ea() {
  return an || (an = 1, function(r, t) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var o = "18.2.0", s = Symbol.for("react.element"), c = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), h = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), E = Symbol.for("react.context"), M = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), N = Symbol.for("react.suspense_list"), P = Symbol.for("react.memo"), F = Symbol.for("react.lazy"), U = Symbol.for("react.offscreen"), R = Symbol.iterator, Q = "@@iterator";
      function S(e) {
        if (e === null || typeof e != "object")
          return null;
        var n = R && e[R] || e[Q];
        return typeof n == "function" ? n : null;
      }
      var te = {
        current: null
      }, de = {
        transition: null
      }, I = {
        current: null,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, Z = {
        current: null
      }, se = {}, A = null;
      function X(e) {
        A = e;
      }
      se.setExtraStackFrame = function(e) {
        A = e;
      }, se.getCurrentStack = null, se.getStackAddendum = function() {
        var e = "";
        A && (e += A);
        var n = se.getCurrentStack;
        return n && (e += n() || ""), e;
      };
      var De = !1, Ye = !1, xe = !1, ce = !1, me = !1, ue = {
        ReactCurrentDispatcher: te,
        ReactCurrentBatchConfig: de,
        ReactCurrentOwner: Z
      };
      ue.ReactDebugCurrentFrame = se, ue.ReactCurrentActQueue = I;
      function he(e) {
        {
          for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), l = 1; l < n; l++)
            i[l - 1] = arguments[l];
          Ee("warn", e, i);
        }
      }
      function w(e) {
        {
          for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), l = 1; l < n; l++)
            i[l - 1] = arguments[l];
          Ee("error", e, i);
        }
      }
      function Ee(e, n, i) {
        {
          var l = ue.ReactDebugCurrentFrame, p = l.getStackAddendum();
          p !== "" && (n += "%s", i = i.concat([p]));
          var j = i.map(function(x) {
            return String(x);
          });
          j.unshift("Warning: " + n), Function.prototype.apply.call(console[e], console, j);
        }
      }
      var Re = {};
      function u(e, n) {
        {
          var i = e.constructor, l = i && (i.displayName || i.name) || "ReactClass", p = l + "." + n;
          if (Re[p])
            return;
          w("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", n, l), Re[p] = !0;
        }
      }
      var y = {
        isMounted: function(e) {
          return !1;
        },
        enqueueForceUpdate: function(e, n, i) {
          u(e, "forceUpdate");
        },
        enqueueReplaceState: function(e, n, i, l) {
          u(e, "replaceState");
        },
        enqueueSetState: function(e, n, i, l) {
          u(e, "setState");
        }
      }, O = Object.assign, V = {};
      Object.freeze(V);
      function z(e, n, i) {
        this.props = e, this.context = n, this.refs = V, this.updater = i || y;
      }
      z.prototype.isReactComponent = {}, z.prototype.setState = function(e, n) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, n, "setState");
      }, z.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      {
        var K = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, J = function(e, n) {
          Object.defineProperty(z.prototype, e, {
            get: function() {
              he("%s(...) is deprecated in plain JavaScript React classes. %s", n[0], n[1]);
            }
          });
        };
        for (var q in K)
          K.hasOwnProperty(q) && J(q, K[q]);
      }
      function H() {
      }
      H.prototype = z.prototype;
      function fe(e, n, i) {
        this.props = e, this.context = n, this.refs = V, this.updater = i || y;
      }
      var Pe = fe.prototype = new H();
      Pe.constructor = fe, O(Pe, z.prototype), Pe.isPureReactComponent = !0;
      function Qr() {
        var e = {
          current: null
        };
        return Object.seal(e), e;
      }
      var mr = Array.isArray;
      function Je(e) {
        return mr(e);
      }
      function Wr(e) {
        {
          var n = typeof Symbol == "function" && Symbol.toStringTag, i = n && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return i;
        }
      }
      function Xe(e) {
        try {
          return Qe(e), !1;
        } catch {
          return !0;
        }
      }
      function Qe(e) {
        return "" + e;
      }
      function We(e) {
        if (Xe(e))
          return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Wr(e)), Qe(e);
      }
      function gr(e, n, i) {
        var l = e.displayName;
        if (l)
          return l;
        var p = n.displayName || n.name || "";
        return p !== "" ? i + "(" + p + ")" : i;
      }
      function Ve(e) {
        return e.displayName || "Context";
      }
      function _e(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case v:
            return "Fragment";
          case c:
            return "Portal";
          case h:
            return "Profiler";
          case m:
            return "StrictMode";
          case T:
            return "Suspense";
          case N:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case E:
              var n = e;
              return Ve(n) + ".Consumer";
            case g:
              var i = e;
              return Ve(i._context) + ".Provider";
            case M:
              return gr(e, e.render, "ForwardRef");
            case P:
              var l = e.displayName || null;
              return l !== null ? l : _e(e.type) || "Memo";
            case F: {
              var p = e, j = p._payload, x = p._init;
              try {
                return _e(x(j));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var He = Object.prototype.hasOwnProperty, er = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, hr, br, rr;
      rr = {};
      function sr(e) {
        if (He.call(e, "ref")) {
          var n = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (n && n.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function Le(e) {
        if (He.call(e, "key")) {
          var n = Object.getOwnPropertyDescriptor(e, "key").get;
          if (n && n.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function Vr(e, n) {
        var i = function() {
          hr || (hr = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: i,
          configurable: !0
        });
      }
      function Mr(e, n) {
        var i = function() {
          br || (br = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: i,
          configurable: !0
        });
      }
      function Er(e) {
        if (typeof e.ref == "string" && Z.current && e.__self && Z.current.stateNode !== e.__self) {
          var n = _e(Z.current.type);
          rr[n] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', n, e.ref), rr[n] = !0);
        }
      }
      var Be = function(e, n, i, l, p, j, x) {
        var _ = {
          $$typeof: s,
          type: e,
          key: n,
          ref: i,
          props: x,
          _owner: j
        };
        return _._store = {}, Object.defineProperty(_._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(_, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: l
        }), Object.defineProperty(_, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: p
        }), Object.freeze && (Object.freeze(_.props), Object.freeze(_)), _;
      };
      function Hr(e, n, i) {
        var l, p = {}, j = null, x = null, _ = null, Y = null;
        if (n != null) {
          sr(n) && (x = n.ref, Er(n)), Le(n) && (We(n.key), j = "" + n.key), _ = n.__self === void 0 ? null : n.__self, Y = n.__source === void 0 ? null : n.__source;
          for (l in n)
            He.call(n, l) && !er.hasOwnProperty(l) && (p[l] = n[l]);
        }
        var G = arguments.length - 2;
        if (G === 1)
          p.children = i;
        else if (G > 1) {
          for (var ee = Array(G), re = 0; re < G; re++)
            ee[re] = arguments[re + 2];
          Object.freeze && Object.freeze(ee), p.children = ee;
        }
        if (e && e.defaultProps) {
          var ae = e.defaultProps;
          for (l in ae)
            p[l] === void 0 && (p[l] = ae[l]);
        }
        if (j || x) {
          var le = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          j && Vr(p, le), x && Mr(p, le);
        }
        return Be(e, j, x, _, Y, Z.current, p);
      }
      function Br(e, n) {
        var i = Be(e.type, n, e.ref, e._self, e._source, e._owner, e.props);
        return i;
      }
      function qr(e, n, i) {
        if (e == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var l, p = O({}, e.props), j = e.key, x = e.ref, _ = e._self, Y = e._source, G = e._owner;
        if (n != null) {
          sr(n) && (x = n.ref, G = Z.current), Le(n) && (We(n.key), j = "" + n.key);
          var ee;
          e.type && e.type.defaultProps && (ee = e.type.defaultProps);
          for (l in n)
            He.call(n, l) && !er.hasOwnProperty(l) && (n[l] === void 0 && ee !== void 0 ? p[l] = ee[l] : p[l] = n[l]);
        }
        var re = arguments.length - 2;
        if (re === 1)
          p.children = i;
        else if (re > 1) {
          for (var ae = Array(re), le = 0; le < re; le++)
            ae[le] = arguments[le + 2];
          p.children = ae;
        }
        return Be(e.type, j, x, _, Y, G, p);
      }
      function ze(e) {
        return typeof e == "object" && e !== null && e.$$typeof === s;
      }
      var Tr = ".", Gr = ":";
      function Kr(e) {
        var n = /[=:]/g, i = {
          "=": "=0",
          ":": "=2"
        }, l = e.replace(n, function(p) {
          return i[p];
        });
        return "$" + l;
      }
      var tr = !1, Dr = /\/+/g;
      function Se(e) {
        return e.replace(Dr, "$&/");
      }
      function qe(e, n) {
        return typeof e == "object" && e !== null && e.key != null ? (We(e.key), Kr("" + e.key)) : n.toString(36);
      }
      function $e(e, n, i, l, p) {
        var j = typeof e;
        (j === "undefined" || j === "boolean") && (e = null);
        var x = !1;
        if (e === null)
          x = !0;
        else
          switch (j) {
            case "string":
            case "number":
              x = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case s:
                case c:
                  x = !0;
              }
          }
        if (x) {
          var _ = e, Y = p(_), G = l === "" ? Tr + qe(_, 0) : l;
          if (Je(Y)) {
            var ee = "";
            G != null && (ee = Se(G) + "/"), $e(Y, n, ee, "", function(Kn) {
              return Kn;
            });
          } else
            Y != null && (ze(Y) && (Y.key && (!_ || _.key !== Y.key) && We(Y.key), Y = Br(Y, i + (Y.key && (!_ || _.key !== Y.key) ? Se("" + Y.key) + "/" : "") + G)), n.push(Y));
          return 1;
        }
        var re, ae, le = 0, ve = l === "" ? Tr : l + Gr;
        if (Je(e))
          for (var Ar = 0; Ar < e.length; Ar++)
            re = e[Ar], ae = ve + qe(re, Ar), le += $e(re, n, i, ae, p);
        else {
          var ct = S(e);
          if (typeof ct == "function") {
            var en = e;
            ct === en.entries && (tr || he("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), tr = !0);
            for (var qn = ct.call(en), rn, Gn = 0; !(rn = qn.next()).done; )
              re = rn.value, ae = ve + qe(re, Gn++), le += $e(re, n, i, ae, p);
          } else if (j === "object") {
            var tn = String(e);
            throw new Error("Objects are not valid as a React child (found: " + (tn === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : tn) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return le;
      }
      function Ge(e, n, i) {
        if (e == null)
          return e;
        var l = [], p = 0;
        return $e(e, l, "", "", function(j) {
          return n.call(i, j, p++);
        }), l;
      }
      function Zr(e) {
        var n = 0;
        return Ge(e, function() {
          n++;
        }), n;
      }
      function xr(e, n, i) {
        Ge(e, function() {
          n.apply(this, arguments);
        }, i);
      }
      function Jr(e) {
        return Ge(e, function(n) {
          return n;
        }) || [];
      }
      function Nr(e) {
        if (!ze(e))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return e;
      }
      function wr(e) {
        var n = {
          $$typeof: E,
          _currentValue: e,
          _currentValue2: e,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null
        };
        n.Provider = {
          $$typeof: g,
          _context: n
        };
        var i = !1, l = !1, p = !1;
        {
          var j = {
            $$typeof: E,
            _context: n
          };
          Object.defineProperties(j, {
            Provider: {
              get: function() {
                return l || (l = !0, w("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), n.Provider;
              },
              set: function(x) {
                n.Provider = x;
              }
            },
            _currentValue: {
              get: function() {
                return n._currentValue;
              },
              set: function(x) {
                n._currentValue = x;
              }
            },
            _currentValue2: {
              get: function() {
                return n._currentValue2;
              },
              set: function(x) {
                n._currentValue2 = x;
              }
            },
            _threadCount: {
              get: function() {
                return n._threadCount;
              },
              set: function(x) {
                n._threadCount = x;
              }
            },
            Consumer: {
              get: function() {
                return i || (i = !0, w("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), n.Consumer;
              }
            },
            displayName: {
              get: function() {
                return n.displayName;
              },
              set: function(x) {
                p || (he("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", x), p = !0);
              }
            }
          }), n.Consumer = j;
        }
        return n._currentRenderer = null, n._currentRenderer2 = null, n;
      }
      var Ke = -1, lr = 0, cr = 1, Xr = 2;
      function et(e) {
        if (e._status === Ke) {
          var n = e._result, i = n();
          if (i.then(function(j) {
            if (e._status === lr || e._status === Ke) {
              var x = e;
              x._status = cr, x._result = j;
            }
          }, function(j) {
            if (e._status === lr || e._status === Ke) {
              var x = e;
              x._status = Xr, x._result = j;
            }
          }), e._status === Ke) {
            var l = e;
            l._status = lr, l._result = i;
          }
        }
        if (e._status === cr) {
          var p = e._result;
          return p === void 0 && w(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, p), "default" in p || w(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, p), p.default;
        } else
          throw e._result;
      }
      function rt(e) {
        var n = {
          _status: Ke,
          _result: e
        }, i = {
          $$typeof: F,
          _payload: n,
          _init: et
        };
        {
          var l, p;
          Object.defineProperties(i, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return l;
              },
              set: function(j) {
                w("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), l = j, Object.defineProperty(i, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return p;
              },
              set: function(j) {
                w("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), p = j, Object.defineProperty(i, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return i;
      }
      function tt(e) {
        e != null && e.$$typeof === P ? w("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof e != "function" ? w("forwardRef requires a render function but was given %s.", e === null ? "null" : typeof e) : e.length !== 0 && e.length !== 2 && w("forwardRef render functions accept exactly two parameters: props and ref. %s", e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), e != null && (e.defaultProps != null || e.propTypes != null) && w("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var n = {
          $$typeof: M,
          render: e
        };
        {
          var i;
          Object.defineProperty(n, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return i;
            },
            set: function(l) {
              i = l, !e.name && !e.displayName && (e.displayName = l);
            }
          });
        }
        return n;
      }
      var a;
      a = Symbol.for("react.module.reference");
      function f(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === v || e === h || me || e === m || e === T || e === N || ce || e === U || De || Ye || xe || typeof e == "object" && e !== null && (e.$$typeof === F || e.$$typeof === P || e.$$typeof === g || e.$$typeof === E || e.$$typeof === M || e.$$typeof === a || e.getModuleId !== void 0));
      }
      function b(e, n) {
        f(e) || w("memo: The first argument must be a component. Instead received: %s", e === null ? "null" : typeof e);
        var i = {
          $$typeof: P,
          type: e,
          compare: n === void 0 ? null : n
        };
        {
          var l;
          Object.defineProperty(i, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return l;
            },
            set: function(p) {
              l = p, !e.name && !e.displayName && (e.displayName = p);
            }
          });
        }
        return i;
      }
      function D() {
        var e = te.current;
        return e === null && w(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), e;
      }
      function W(e) {
        var n = D();
        if (e._context !== void 0) {
          var i = e._context;
          i.Consumer === e ? w("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : i.Provider === e && w("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return n.useContext(e);
      }
      function B(e) {
        var n = D();
        return n.useState(e);
      }
      function $(e, n, i) {
        var l = D();
        return l.useReducer(e, n, i);
      }
      function k(e) {
        var n = D();
        return n.useRef(e);
      }
      function pe(e, n) {
        var i = D();
        return i.useEffect(e, n);
      }
      function ne(e, n) {
        var i = D();
        return i.useInsertionEffect(e, n);
      }
      function oe(e, n) {
        var i = D();
        return i.useLayoutEffect(e, n);
      }
      function be(e, n) {
        var i = D();
        return i.useCallback(e, n);
      }
      function Fe(e, n) {
        var i = D();
        return i.useMemo(e, n);
      }
      function jr(e, n, i) {
        var l = D();
        return l.useImperativeHandle(e, n, i);
      }
      function Ne(e, n) {
        {
          var i = D();
          return i.useDebugValue(e, n);
        }
      }
      function Nn() {
        var e = D();
        return e.useTransition();
      }
      function wn(e) {
        var n = D();
        return n.useDeferredValue(e);
      }
      function jn() {
        var e = D();
        return e.useId();
      }
      function _n(e, n, i) {
        var l = D();
        return l.useSyncExternalStore(e, n, i);
      }
      var fr = 0, At, kt, Pt, Lt, zt, $t, Ft;
      function Ut() {
      }
      Ut.__reactDisabledLog = !0;
      function On() {
        {
          if (fr === 0) {
            At = console.log, kt = console.info, Pt = console.warn, Lt = console.error, zt = console.group, $t = console.groupCollapsed, Ft = console.groupEnd;
            var e = {
              configurable: !0,
              enumerable: !0,
              value: Ut,
              writable: !0
            };
            Object.defineProperties(console, {
              info: e,
              log: e,
              warn: e,
              error: e,
              group: e,
              groupCollapsed: e,
              groupEnd: e
            });
          }
          fr++;
        }
      }
      function Cn() {
        {
          if (fr--, fr === 0) {
            var e = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: O({}, e, {
                value: At
              }),
              info: O({}, e, {
                value: kt
              }),
              warn: O({}, e, {
                value: Pt
              }),
              error: O({}, e, {
                value: Lt
              }),
              group: O({}, e, {
                value: zt
              }),
              groupCollapsed: O({}, e, {
                value: $t
              }),
              groupEnd: O({}, e, {
                value: Ft
              })
            });
          }
          fr < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var nt = ue.ReactCurrentDispatcher, at;
      function _r(e, n, i) {
        {
          if (at === void 0)
            try {
              throw Error();
            } catch (p) {
              var l = p.stack.trim().match(/\n( *(at )?)/);
              at = l && l[1] || "";
            }
          return `
` + at + e;
        }
      }
      var ot = !1, Or;
      {
        var Rn = typeof WeakMap == "function" ? WeakMap : Map;
        Or = new Rn();
      }
      function Yt(e, n) {
        if (!e || ot)
          return "";
        {
          var i = Or.get(e);
          if (i !== void 0)
            return i;
        }
        var l;
        ot = !0;
        var p = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var j;
        j = nt.current, nt.current = null, On();
        try {
          if (n) {
            var x = function() {
              throw Error();
            };
            if (Object.defineProperty(x.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(x, []);
              } catch (ve) {
                l = ve;
              }
              Reflect.construct(e, [], x);
            } else {
              try {
                x.call();
              } catch (ve) {
                l = ve;
              }
              e.call(x.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (ve) {
              l = ve;
            }
            e();
          }
        } catch (ve) {
          if (ve && l && typeof ve.stack == "string") {
            for (var _ = ve.stack.split(`
`), Y = l.stack.split(`
`), G = _.length - 1, ee = Y.length - 1; G >= 1 && ee >= 0 && _[G] !== Y[ee]; )
              ee--;
            for (; G >= 1 && ee >= 0; G--, ee--)
              if (_[G] !== Y[ee]) {
                if (G !== 1 || ee !== 1)
                  do
                    if (G--, ee--, ee < 0 || _[G] !== Y[ee]) {
                      var re = `
` + _[G].replace(" at new ", " at ");
                      return e.displayName && re.includes("<anonymous>") && (re = re.replace("<anonymous>", e.displayName)), typeof e == "function" && Or.set(e, re), re;
                    }
                  while (G >= 1 && ee >= 0);
                break;
              }
          }
        } finally {
          ot = !1, nt.current = j, Cn(), Error.prepareStackTrace = p;
        }
        var ae = e ? e.displayName || e.name : "", le = ae ? _r(ae) : "";
        return typeof e == "function" && Or.set(e, le), le;
      }
      function Sn(e, n, i) {
        return Yt(e, !1);
      }
      function In(e) {
        var n = e.prototype;
        return !!(n && n.isReactComponent);
      }
      function Cr(e, n, i) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return Yt(e, In(e));
        if (typeof e == "string")
          return _r(e);
        switch (e) {
          case T:
            return _r("Suspense");
          case N:
            return _r("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case M:
              return Sn(e.render);
            case P:
              return Cr(e.type, n, i);
            case F: {
              var l = e, p = l._payload, j = l._init;
              try {
                return Cr(j(p), n, i);
              } catch {
              }
            }
          }
        return "";
      }
      var Qt = {}, Wt = ue.ReactDebugCurrentFrame;
      function Rr(e) {
        if (e) {
          var n = e._owner, i = Cr(e.type, e._source, n ? n.type : null);
          Wt.setExtraStackFrame(i);
        } else
          Wt.setExtraStackFrame(null);
      }
      function An(e, n, i, l, p) {
        {
          var j = Function.call.bind(He);
          for (var x in e)
            if (j(e, x)) {
              var _ = void 0;
              try {
                if (typeof e[x] != "function") {
                  var Y = Error((l || "React class") + ": " + i + " type `" + x + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[x] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw Y.name = "Invariant Violation", Y;
                }
                _ = e[x](n, x, l, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (G) {
                _ = G;
              }
              _ && !(_ instanceof Error) && (Rr(p), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", l || "React class", i, x, typeof _), Rr(null)), _ instanceof Error && !(_.message in Qt) && (Qt[_.message] = !0, Rr(p), w("Failed %s type: %s", i, _.message), Rr(null));
            }
        }
      }
      function nr(e) {
        if (e) {
          var n = e._owner, i = Cr(e.type, e._source, n ? n.type : null);
          X(i);
        } else
          X(null);
      }
      var ut;
      ut = !1;
      function Vt() {
        if (Z.current) {
          var e = _e(Z.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
      function kn(e) {
        if (e !== void 0) {
          var n = e.fileName.replace(/^.*[\\\/]/, ""), i = e.lineNumber;
          return `

Check your code at ` + n + ":" + i + ".";
        }
        return "";
      }
      function Pn(e) {
        return e != null ? kn(e.__source) : "";
      }
      var Ht = {};
      function Ln(e) {
        var n = Vt();
        if (!n) {
          var i = typeof e == "string" ? e : e.displayName || e.name;
          i && (n = `

Check the top-level render call using <` + i + ">.");
        }
        return n;
      }
      function Bt(e, n) {
        if (!(!e._store || e._store.validated || e.key != null)) {
          e._store.validated = !0;
          var i = Ln(n);
          if (!Ht[i]) {
            Ht[i] = !0;
            var l = "";
            e && e._owner && e._owner !== Z.current && (l = " It was passed a child from " + _e(e._owner.type) + "."), nr(e), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', i, l), nr(null);
          }
        }
      }
      function qt(e, n) {
        if (typeof e == "object") {
          if (Je(e))
            for (var i = 0; i < e.length; i++) {
              var l = e[i];
              ze(l) && Bt(l, n);
            }
          else if (ze(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var p = S(e);
            if (typeof p == "function" && p !== e.entries)
              for (var j = p.call(e), x; !(x = j.next()).done; )
                ze(x.value) && Bt(x.value, n);
          }
        }
      }
      function Gt(e) {
        {
          var n = e.type;
          if (n == null || typeof n == "string")
            return;
          var i;
          if (typeof n == "function")
            i = n.propTypes;
          else if (typeof n == "object" && (n.$$typeof === M || n.$$typeof === P))
            i = n.propTypes;
          else
            return;
          if (i) {
            var l = _e(n);
            An(i, e.props, "prop", l, e);
          } else if (n.PropTypes !== void 0 && !ut) {
            ut = !0;
            var p = _e(n);
            w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", p || "Unknown");
          }
          typeof n.getDefaultProps == "function" && !n.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function zn(e) {
        {
          for (var n = Object.keys(e.props), i = 0; i < n.length; i++) {
            var l = n[i];
            if (l !== "children" && l !== "key") {
              nr(e), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", l), nr(null);
              break;
            }
          }
          e.ref !== null && (nr(e), w("Invalid attribute `ref` supplied to `React.Fragment`."), nr(null));
        }
      }
      function Kt(e, n, i) {
        var l = f(e);
        if (!l) {
          var p = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (p += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var j = Pn(n);
          j ? p += j : p += Vt();
          var x;
          e === null ? x = "null" : Je(e) ? x = "array" : e !== void 0 && e.$$typeof === s ? (x = "<" + (_e(e.type) || "Unknown") + " />", p = " Did you accidentally export a JSX literal instead of a component?") : x = typeof e, w("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", x, p);
        }
        var _ = Hr.apply(this, arguments);
        if (_ == null)
          return _;
        if (l)
          for (var Y = 2; Y < arguments.length; Y++)
            qt(arguments[Y], e);
        return e === v ? zn(_) : Gt(_), _;
      }
      var Zt = !1;
      function $n(e) {
        var n = Kt.bind(null, e);
        return n.type = e, Zt || (Zt = !0, he("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(n, "type", {
          enumerable: !1,
          get: function() {
            return he("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: e
            }), e;
          }
        }), n;
      }
      function Fn(e, n, i) {
        for (var l = qr.apply(this, arguments), p = 2; p < arguments.length; p++)
          qt(arguments[p], l.type);
        return Gt(l), l;
      }
      function Un(e, n) {
        var i = de.transition;
        de.transition = {};
        var l = de.transition;
        de.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          e();
        } finally {
          if (de.transition = i, i === null && l._updatedFibers) {
            var p = l._updatedFibers.size;
            p > 10 && he("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), l._updatedFibers.clear();
          }
        }
      }
      var Jt = !1, Sr = null;
      function Yn(e) {
        if (Sr === null)
          try {
            var n = ("require" + Math.random()).slice(0, 7), i = r && r[n];
            Sr = i.call(r, "timers").setImmediate;
          } catch {
            Sr = function(p) {
              Jt === !1 && (Jt = !0, typeof MessageChannel > "u" && w("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var j = new MessageChannel();
              j.port1.onmessage = p, j.port2.postMessage(void 0);
            };
          }
        return Sr(e);
      }
      var ar = 0, Xt = !1;
      function Qn(e) {
        {
          var n = ar;
          ar++, I.current === null && (I.current = []);
          var i = I.isBatchingLegacy, l;
          try {
            if (I.isBatchingLegacy = !0, l = e(), !i && I.didScheduleLegacyUpdate) {
              var p = I.current;
              p !== null && (I.didScheduleLegacyUpdate = !1, lt(p));
            }
          } catch (ae) {
            throw Ir(n), ae;
          } finally {
            I.isBatchingLegacy = i;
          }
          if (l !== null && typeof l == "object" && typeof l.then == "function") {
            var j = l, x = !1, _ = {
              then: function(ae, le) {
                x = !0, j.then(function(ve) {
                  Ir(n), ar === 0 ? it(ve, ae, le) : ae(ve);
                }, function(ve) {
                  Ir(n), le(ve);
                });
              }
            };
            return !Xt && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              x || (Xt = !0, w("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), _;
          } else {
            var Y = l;
            if (Ir(n), ar === 0) {
              var G = I.current;
              G !== null && (lt(G), I.current = null);
              var ee = {
                then: function(ae, le) {
                  I.current === null ? (I.current = [], it(Y, ae, le)) : ae(Y);
                }
              };
              return ee;
            } else {
              var re = {
                then: function(ae, le) {
                  ae(Y);
                }
              };
              return re;
            }
          }
        }
      }
      function Ir(e) {
        e !== ar - 1 && w("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), ar = e;
      }
      function it(e, n, i) {
        {
          var l = I.current;
          if (l !== null)
            try {
              lt(l), Yn(function() {
                l.length === 0 ? (I.current = null, n(e)) : it(e, n, i);
              });
            } catch (p) {
              i(p);
            }
          else
            n(e);
        }
      }
      var st = !1;
      function lt(e) {
        if (!st) {
          st = !0;
          var n = 0;
          try {
            for (; n < e.length; n++) {
              var i = e[n];
              do
                i = i(!0);
              while (i !== null);
            }
            e.length = 0;
          } catch (l) {
            throw e = e.slice(n + 1), l;
          } finally {
            st = !1;
          }
        }
      }
      var Wn = Kt, Vn = Fn, Hn = $n, Bn = {
        map: Ge,
        forEach: xr,
        count: Zr,
        toArray: Jr,
        only: Nr
      };
      t.Children = Bn, t.Component = z, t.Fragment = v, t.Profiler = h, t.PureComponent = fe, t.StrictMode = m, t.Suspense = T, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ue, t.cloneElement = Vn, t.createContext = wr, t.createElement = Wn, t.createFactory = Hn, t.createRef = Qr, t.forwardRef = tt, t.isValidElement = ze, t.lazy = rt, t.memo = b, t.startTransition = Un, t.unstable_act = Qn, t.useCallback = be, t.useContext = W, t.useDebugValue = Ne, t.useDeferredValue = wn, t.useEffect = pe, t.useId = jn, t.useImperativeHandle = jr, t.useInsertionEffect = ne, t.useLayoutEffect = oe, t.useMemo = Fe, t.useReducer = $, t.useRef = k, t.useState = B, t.useSyncExternalStore = _n, t.useTransition = Nn, t.version = o, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(kr, kr.exports)), kr.exports;
}
var on;
function Mt() {
  return on || (on = 1, function(r) {
    process.env.NODE_ENV === "production" ? r.exports = Xn() : r.exports = ea();
  }(ft)), ft.exports;
}
var d = Mt();
let Oe = typeof window < "u" ? d.useLayoutEffect : d.useEffect;
function ke(r) {
  let t = d.useRef(r);
  return Oe(() => {
    t.current = r;
  }, [r]), t;
}
function zr() {
  let r = [], t = [], o = { enqueue(s) {
    t.push(s);
  }, addEventListener(s, c, v, m) {
    return s.addEventListener(c, v, m), o.add(() => s.removeEventListener(c, v, m));
  }, requestAnimationFrame(...s) {
    let c = requestAnimationFrame(...s);
    return o.add(() => cancelAnimationFrame(c));
  }, nextFrame(...s) {
    return o.requestAnimationFrame(() => o.requestAnimationFrame(...s));
  }, setTimeout(...s) {
    let c = setTimeout(...s);
    return o.add(() => clearTimeout(c));
  }, add(s) {
    return r.push(s), () => {
      let c = r.indexOf(s);
      if (c >= 0) {
        let [v] = r.splice(c, 1);
        v();
      }
    };
  }, dispose() {
    for (let s of r.splice(0))
      s();
  }, async workQueue() {
    for (let s of t.splice(0))
      await s();
  } };
  return o;
}
function ra() {
  let [r] = d.useState(zr);
  return d.useEffect(() => () => r.dispose(), [r]), r;
}
let Me = function(r) {
  let t = ke(r);
  return d.useCallback((...o) => t.current(...o), [t]);
}, dt = { serverHandoffComplete: !1 };
function Et() {
  let [r, t] = d.useState(dt.serverHandoffComplete);
  return d.useEffect(() => {
    r !== !0 && t(!0);
  }, [r]), d.useEffect(() => {
    dt.serverHandoffComplete === !1 && (dt.serverHandoffComplete = !0);
  }, []), r;
}
var un;
let ta = 0;
function sn() {
  return ++ta;
}
let vr = (un = d.useId) != null ? un : function() {
  let r = Et(), [t, o] = d.useState(r ? sn : null);
  return Oe(() => {
    t === null && o(sn());
  }, [t]), t != null ? "" + t : void 0;
};
function ye(r, t, ...o) {
  if (r in t) {
    let c = t[r];
    return typeof c == "function" ? c(...o) : c;
  }
  let s = new Error(`Tried to handle "${r}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((c) => `"${c}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(s, ye), s;
}
function na(r) {
  return typeof window > "u" ? null : r instanceof Node ? r.ownerDocument : r != null && r.hasOwnProperty("current") && r.current instanceof Node ? r.current.ownerDocument : document;
}
let aa = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((r) => `${r}:not([tabindex='-1'])`).join(",");
var we = ((r) => (r[r.First = 1] = "First", r[r.Previous = 2] = "Previous", r[r.Next = 4] = "Next", r[r.Last = 8] = "Last", r[r.WrapAround = 16] = "WrapAround", r[r.NoScroll = 32] = "NoScroll", r))(we || {}), oa = ((r) => (r[r.Error = 0] = "Error", r[r.Overflow = 1] = "Overflow", r[r.Success = 2] = "Success", r[r.Underflow = 3] = "Underflow", r))(oa || {}), ua = ((r) => (r[r.Previous = -1] = "Previous", r[r.Next = 1] = "Next", r))(ua || {});
function ia(r = document.body) {
  return r == null ? [] : Array.from(r.querySelectorAll(aa));
}
var sa = ((r) => (r[r.Strict = 0] = "Strict", r[r.Loose = 1] = "Loose", r))(sa || {});
let la = ["textarea", "input"].join(",");
function ca(r) {
  var t, o;
  return (o = (t = r == null ? void 0 : r.matches) == null ? void 0 : t.call(r, la)) != null ? o : !1;
}
function gt(r, t = (o) => o) {
  return r.slice().sort((o, s) => {
    let c = t(o), v = t(s);
    if (c === null || v === null)
      return 0;
    let m = c.compareDocumentPosition(v);
    return m & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : m & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function or(r, t, o = !0) {
  let s = Array.isArray(r) ? r.length > 0 ? r[0].ownerDocument : document : r.ownerDocument, c = Array.isArray(r) ? o ? gt(r) : r : ia(r), v = s.activeElement, m = (() => {
    if (t & 5)
      return 1;
    if (t & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), h = (() => {
    if (t & 1)
      return 0;
    if (t & 2)
      return Math.max(0, c.indexOf(v)) - 1;
    if (t & 4)
      return Math.max(0, c.indexOf(v)) + 1;
    if (t & 8)
      return c.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), g = t & 32 ? { preventScroll: !0 } : {}, E = 0, M = c.length, T;
  do {
    if (E >= M || E + M <= 0)
      return 0;
    let N = h + E;
    if (t & 16)
      N = (N + M) % M;
    else {
      if (N < 0)
        return 3;
      if (N >= M)
        return 1;
    }
    T = c[N], T == null || T.focus(g), E += m;
  } while (T !== s.activeElement);
  return t & 6 && ca(T) && T.select(), T.hasAttribute("tabindex") || T.setAttribute("tabindex", "0"), 2;
}
function ln(r) {
  var t;
  if (r.type)
    return r.type;
  let o = (t = r.as) != null ? t : "button";
  if (typeof o == "string" && o.toLowerCase() === "button")
    return "button";
}
function vn(r, t) {
  let [o, s] = d.useState(() => ln(r));
  return Oe(() => {
    s(ln(r));
  }, [r.type, r.as]), Oe(() => {
    o || !t.current || t.current instanceof HTMLButtonElement && !t.current.hasAttribute("type") && s("button");
  }, [o, t]), o;
}
let yn = Symbol();
function fa(r, t = !0) {
  return Object.assign(r, { [yn]: t });
}
function Ce(...r) {
  let t = d.useRef(r);
  d.useEffect(() => {
    t.current = r;
  }, [r]);
  let o = Me((s) => {
    for (let c of t.current)
      c != null && (typeof c == "function" ? c(s) : c.current = s);
  });
  return r.every((s) => s == null || (s == null ? void 0 : s[yn])) ? void 0 : o;
}
var ir = ((r) => (r[r.None = 0] = "None", r[r.RenderStrategy = 1] = "RenderStrategy", r[r.Static = 2] = "Static", r))(ir || {}), Ae = ((r) => (r[r.Unmount = 0] = "Unmount", r[r.Hidden = 1] = "Hidden", r))(Ae || {});
function je({ ourProps: r, theirProps: t, slot: o, defaultTag: s, features: c, visible: v = !0, name: m }) {
  let h = mn(t, r);
  if (v)
    return Pr(h, o, s, m);
  let g = c != null ? c : 0;
  if (g & 2) {
    let { static: E = !1, ...M } = h;
    if (E)
      return Pr(M, o, s, m);
  }
  if (g & 1) {
    let { unmount: E = !0, ...M } = h;
    return ye(E ? 0 : 1, { [0]() {
      return null;
    }, [1]() {
      return Pr({ ...M, hidden: !0, style: { display: "none" } }, o, s, m);
    } });
  }
  return Pr(h, o, s, m);
}
function Pr(r, t = {}, o, s) {
  let { as: c = o, children: v, refName: m = "ref", ...h } = pt(r, ["unmount", "static"]), g = r.ref !== void 0 ? { [m]: r.ref } : {}, E = typeof v == "function" ? v(t) : v;
  h.className && typeof h.className == "function" && (h.className = h.className(t));
  let M = {};
  if (c === d.Fragment && Object.keys(cn(h)).length > 0) {
    if (!d.isValidElement(E) || Array.isArray(E) && E.length > 1)
      throw new Error(['Passing props on "Fragment"!', "", `The current component <${s} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(h).map((T) => `  - ${T}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((T) => `  - ${T}`).join(`
`)].join(`
`));
    return d.cloneElement(E, Object.assign({}, mn(E.props, cn(pt(h, ["ref"]))), M, g));
  }
  return d.createElement(c, Object.assign({}, pt(h, ["ref"]), c !== d.Fragment && g, c !== d.Fragment && M), E);
}
function mn(...r) {
  if (r.length === 0)
    return {};
  if (r.length === 1)
    return r[0];
  let t = {}, o = {};
  for (let s of r)
    for (let c in s)
      c.startsWith("on") && typeof s[c] == "function" ? (o[c] != null || (o[c] = []), o[c].push(s[c])) : t[c] = s[c];
  if (t.disabled || t["aria-disabled"])
    return Object.assign(t, Object.fromEntries(Object.keys(o).map((s) => [s, void 0])));
  for (let s in o)
    Object.assign(t, { [s](c, ...v) {
      let m = o[s];
      for (let h of m) {
        if (c.defaultPrevented)
          return;
        h(c, ...v);
      }
    } });
  return t;
}
function Te(r) {
  var t;
  return Object.assign(d.forwardRef(r), { displayName: (t = r.displayName) != null ? t : r.name });
}
function cn(r) {
  let t = Object.assign({}, r);
  for (let o in t)
    t[o] === void 0 && delete t[o];
  return t;
}
function pt(r, t = []) {
  let o = Object.assign({}, r);
  for (let s of t)
    s in o && delete o[s];
  return o;
}
function da(r) {
  let t = r.parentElement, o = null;
  for (; t && !(t instanceof HTMLFieldSetElement); )
    t instanceof HTMLLegendElement && (o = t), t = t.parentElement;
  let s = (t == null ? void 0 : t.getAttribute("disabled")) === "";
  return s && pa(o) ? !1 : s;
}
function pa(r) {
  if (!r)
    return !1;
  let t = r.previousElementSibling;
  for (; t !== null; ) {
    if (t instanceof HTMLLegendElement)
      return !1;
    t = t.previousElementSibling;
  }
  return !0;
}
let va = "div";
var gn = ((r) => (r[r.None = 1] = "None", r[r.Focusable = 2] = "Focusable", r[r.Hidden = 4] = "Hidden", r))(gn || {});
let ya = Te(function(r, t) {
  let { features: o = 1, ...s } = r, c = { ref: t, "aria-hidden": (o & 2) === 2 ? !0 : void 0, style: { position: "absolute", width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(o & 4) === 4 && (o & 2) !== 2 && { display: "none" } } };
  return je({ ourProps: c, theirProps: s, slot: {}, defaultTag: va, name: "Hidden" });
}), Tt = d.createContext(null);
Tt.displayName = "OpenClosedContext";
var Ue = ((r) => (r[r.Open = 0] = "Open", r[r.Closed = 1] = "Closed", r))(Ue || {});
function Dt() {
  return d.useContext(Tt);
}
function hn({ value: r, children: t }) {
  return d.createElement(Tt.Provider, { value: r }, t);
}
var ge = ((r) => (r.Space = " ", r.Enter = "Enter", r.Escape = "Escape", r.Backspace = "Backspace", r.Delete = "Delete", r.ArrowLeft = "ArrowLeft", r.ArrowUp = "ArrowUp", r.ArrowRight = "ArrowRight", r.ArrowDown = "ArrowDown", r.Home = "Home", r.End = "End", r.PageUp = "PageUp", r.PageDown = "PageDown", r.Tab = "Tab", r))(ge || {}), $r = { exports: {} }, dr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fn;
function ma() {
  if (fn)
    return dr;
  fn = 1;
  var r = Mt(), t = Symbol.for("react.element"), o = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, c = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, v = { key: !0, ref: !0, __self: !0, __source: !0 };
  function m(h, g, E) {
    var M, T = {}, N = null, P = null;
    E !== void 0 && (N = "" + E), g.key !== void 0 && (N = "" + g.key), g.ref !== void 0 && (P = g.ref);
    for (M in g)
      s.call(g, M) && !v.hasOwnProperty(M) && (T[M] = g[M]);
    if (h && h.defaultProps)
      for (M in g = h.defaultProps, g)
        T[M] === void 0 && (T[M] = g[M]);
    return { $$typeof: t, type: h, key: N, ref: P, props: T, _owner: c.current };
  }
  return dr.Fragment = o, dr.jsx = m, dr.jsxs = m, dr;
}
var pr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dn;
function ga() {
  return dn || (dn = 1, process.env.NODE_ENV !== "production" && function() {
    var r = Mt(), t = Symbol.for("react.element"), o = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), v = Symbol.for("react.profiler"), m = Symbol.for("react.provider"), h = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), F = Symbol.iterator, U = "@@iterator";
    function R(a) {
      if (a === null || typeof a != "object")
        return null;
      var f = F && a[F] || a[U];
      return typeof f == "function" ? f : null;
    }
    var Q = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function S(a) {
      {
        for (var f = arguments.length, b = new Array(f > 1 ? f - 1 : 0), D = 1; D < f; D++)
          b[D - 1] = arguments[D];
        te("error", a, b);
      }
    }
    function te(a, f, b) {
      {
        var D = Q.ReactDebugCurrentFrame, W = D.getStackAddendum();
        W !== "" && (f += "%s", b = b.concat([W]));
        var B = b.map(function($) {
          return String($);
        });
        B.unshift("Warning: " + f), Function.prototype.apply.call(console[a], console, B);
      }
    }
    var de = !1, I = !1, Z = !1, se = !1, A = !1, X;
    X = Symbol.for("react.module.reference");
    function De(a) {
      return !!(typeof a == "string" || typeof a == "function" || a === s || a === v || A || a === c || a === E || a === M || se || a === P || de || I || Z || typeof a == "object" && a !== null && (a.$$typeof === N || a.$$typeof === T || a.$$typeof === m || a.$$typeof === h || a.$$typeof === g || a.$$typeof === X || a.getModuleId !== void 0));
    }
    function Ye(a, f, b) {
      var D = a.displayName;
      if (D)
        return D;
      var W = f.displayName || f.name || "";
      return W !== "" ? b + "(" + W + ")" : b;
    }
    function xe(a) {
      return a.displayName || "Context";
    }
    function ce(a) {
      if (a == null)
        return null;
      if (typeof a.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof a == "function")
        return a.displayName || a.name || null;
      if (typeof a == "string")
        return a;
      switch (a) {
        case s:
          return "Fragment";
        case o:
          return "Portal";
        case v:
          return "Profiler";
        case c:
          return "StrictMode";
        case E:
          return "Suspense";
        case M:
          return "SuspenseList";
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case h:
            var f = a;
            return xe(f) + ".Consumer";
          case m:
            var b = a;
            return xe(b._context) + ".Provider";
          case g:
            return Ye(a, a.render, "ForwardRef");
          case T:
            var D = a.displayName || null;
            return D !== null ? D : ce(a.type) || "Memo";
          case N: {
            var W = a, B = W._payload, $ = W._init;
            try {
              return ce($(B));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var me = Object.assign, ue = 0, he, w, Ee, Re, u, y, O;
    function V() {
    }
    V.__reactDisabledLog = !0;
    function z() {
      {
        if (ue === 0) {
          he = console.log, w = console.info, Ee = console.warn, Re = console.error, u = console.group, y = console.groupCollapsed, O = console.groupEnd;
          var a = {
            configurable: !0,
            enumerable: !0,
            value: V,
            writable: !0
          };
          Object.defineProperties(console, {
            info: a,
            log: a,
            warn: a,
            error: a,
            group: a,
            groupCollapsed: a,
            groupEnd: a
          });
        }
        ue++;
      }
    }
    function K() {
      {
        if (ue--, ue === 0) {
          var a = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: me({}, a, {
              value: he
            }),
            info: me({}, a, {
              value: w
            }),
            warn: me({}, a, {
              value: Ee
            }),
            error: me({}, a, {
              value: Re
            }),
            group: me({}, a, {
              value: u
            }),
            groupCollapsed: me({}, a, {
              value: y
            }),
            groupEnd: me({}, a, {
              value: O
            })
          });
        }
        ue < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var J = Q.ReactCurrentDispatcher, q;
    function H(a, f, b) {
      {
        if (q === void 0)
          try {
            throw Error();
          } catch (W) {
            var D = W.stack.trim().match(/\n( *(at )?)/);
            q = D && D[1] || "";
          }
        return `
` + q + a;
      }
    }
    var fe = !1, Pe;
    {
      var Qr = typeof WeakMap == "function" ? WeakMap : Map;
      Pe = new Qr();
    }
    function mr(a, f) {
      if (!a || fe)
        return "";
      {
        var b = Pe.get(a);
        if (b !== void 0)
          return b;
      }
      var D;
      fe = !0;
      var W = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var B;
      B = J.current, J.current = null, z();
      try {
        if (f) {
          var $ = function() {
            throw Error();
          };
          if (Object.defineProperty($.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct($, []);
            } catch (Ne) {
              D = Ne;
            }
            Reflect.construct(a, [], $);
          } else {
            try {
              $.call();
            } catch (Ne) {
              D = Ne;
            }
            a.call($.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ne) {
            D = Ne;
          }
          a();
        }
      } catch (Ne) {
        if (Ne && D && typeof Ne.stack == "string") {
          for (var k = Ne.stack.split(`
`), pe = D.stack.split(`
`), ne = k.length - 1, oe = pe.length - 1; ne >= 1 && oe >= 0 && k[ne] !== pe[oe]; )
            oe--;
          for (; ne >= 1 && oe >= 0; ne--, oe--)
            if (k[ne] !== pe[oe]) {
              if (ne !== 1 || oe !== 1)
                do
                  if (ne--, oe--, oe < 0 || k[ne] !== pe[oe]) {
                    var be = `
` + k[ne].replace(" at new ", " at ");
                    return a.displayName && be.includes("<anonymous>") && (be = be.replace("<anonymous>", a.displayName)), typeof a == "function" && Pe.set(a, be), be;
                  }
                while (ne >= 1 && oe >= 0);
              break;
            }
        }
      } finally {
        fe = !1, J.current = B, K(), Error.prepareStackTrace = W;
      }
      var Fe = a ? a.displayName || a.name : "", jr = Fe ? H(Fe) : "";
      return typeof a == "function" && Pe.set(a, jr), jr;
    }
    function Je(a, f, b) {
      return mr(a, !1);
    }
    function Wr(a) {
      var f = a.prototype;
      return !!(f && f.isReactComponent);
    }
    function Xe(a, f, b) {
      if (a == null)
        return "";
      if (typeof a == "function")
        return mr(a, Wr(a));
      if (typeof a == "string")
        return H(a);
      switch (a) {
        case E:
          return H("Suspense");
        case M:
          return H("SuspenseList");
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case g:
            return Je(a.render);
          case T:
            return Xe(a.type, f, b);
          case N: {
            var D = a, W = D._payload, B = D._init;
            try {
              return Xe(B(W), f, b);
            } catch {
            }
          }
        }
      return "";
    }
    var Qe = Object.prototype.hasOwnProperty, We = {}, gr = Q.ReactDebugCurrentFrame;
    function Ve(a) {
      if (a) {
        var f = a._owner, b = Xe(a.type, a._source, f ? f.type : null);
        gr.setExtraStackFrame(b);
      } else
        gr.setExtraStackFrame(null);
    }
    function _e(a, f, b, D, W) {
      {
        var B = Function.call.bind(Qe);
        for (var $ in a)
          if (B(a, $)) {
            var k = void 0;
            try {
              if (typeof a[$] != "function") {
                var pe = Error((D || "React class") + ": " + b + " type `" + $ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[$] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw pe.name = "Invariant Violation", pe;
              }
              k = a[$](f, $, D, b, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ne) {
              k = ne;
            }
            k && !(k instanceof Error) && (Ve(W), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", D || "React class", b, $, typeof k), Ve(null)), k instanceof Error && !(k.message in We) && (We[k.message] = !0, Ve(W), S("Failed %s type: %s", b, k.message), Ve(null));
          }
      }
    }
    var He = Array.isArray;
    function er(a) {
      return He(a);
    }
    function hr(a) {
      {
        var f = typeof Symbol == "function" && Symbol.toStringTag, b = f && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return b;
      }
    }
    function br(a) {
      try {
        return rr(a), !1;
      } catch {
        return !0;
      }
    }
    function rr(a) {
      return "" + a;
    }
    function sr(a) {
      if (br(a))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", hr(a)), rr(a);
    }
    var Le = Q.ReactCurrentOwner, Vr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Mr, Er, Be;
    Be = {};
    function Hr(a) {
      if (Qe.call(a, "ref")) {
        var f = Object.getOwnPropertyDescriptor(a, "ref").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return a.ref !== void 0;
    }
    function Br(a) {
      if (Qe.call(a, "key")) {
        var f = Object.getOwnPropertyDescriptor(a, "key").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return a.key !== void 0;
    }
    function qr(a, f) {
      if (typeof a.ref == "string" && Le.current && f && Le.current.stateNode !== f) {
        var b = ce(Le.current.type);
        Be[b] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', ce(Le.current.type), a.ref), Be[b] = !0);
      }
    }
    function ze(a, f) {
      {
        var b = function() {
          Mr || (Mr = !0, S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        b.isReactWarning = !0, Object.defineProperty(a, "key", {
          get: b,
          configurable: !0
        });
      }
    }
    function Tr(a, f) {
      {
        var b = function() {
          Er || (Er = !0, S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        b.isReactWarning = !0, Object.defineProperty(a, "ref", {
          get: b,
          configurable: !0
        });
      }
    }
    var Gr = function(a, f, b, D, W, B, $) {
      var k = {
        $$typeof: t,
        type: a,
        key: f,
        ref: b,
        props: $,
        _owner: B
      };
      return k._store = {}, Object.defineProperty(k._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(k, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: D
      }), Object.defineProperty(k, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: W
      }), Object.freeze && (Object.freeze(k.props), Object.freeze(k)), k;
    };
    function Kr(a, f, b, D, W) {
      {
        var B, $ = {}, k = null, pe = null;
        b !== void 0 && (sr(b), k = "" + b), Br(f) && (sr(f.key), k = "" + f.key), Hr(f) && (pe = f.ref, qr(f, W));
        for (B in f)
          Qe.call(f, B) && !Vr.hasOwnProperty(B) && ($[B] = f[B]);
        if (a && a.defaultProps) {
          var ne = a.defaultProps;
          for (B in ne)
            $[B] === void 0 && ($[B] = ne[B]);
        }
        if (k || pe) {
          var oe = typeof a == "function" ? a.displayName || a.name || "Unknown" : a;
          k && ze($, oe), pe && Tr($, oe);
        }
        return Gr(a, k, pe, W, D, Le.current, $);
      }
    }
    var tr = Q.ReactCurrentOwner, Dr = Q.ReactDebugCurrentFrame;
    function Se(a) {
      if (a) {
        var f = a._owner, b = Xe(a.type, a._source, f ? f.type : null);
        Dr.setExtraStackFrame(b);
      } else
        Dr.setExtraStackFrame(null);
    }
    var qe;
    qe = !1;
    function $e(a) {
      return typeof a == "object" && a !== null && a.$$typeof === t;
    }
    function Ge() {
      {
        if (tr.current) {
          var a = ce(tr.current.type);
          if (a)
            return `

Check the render method of \`` + a + "`.";
        }
        return "";
      }
    }
    function Zr(a) {
      {
        if (a !== void 0) {
          var f = a.fileName.replace(/^.*[\\\/]/, ""), b = a.lineNumber;
          return `

Check your code at ` + f + ":" + b + ".";
        }
        return "";
      }
    }
    var xr = {};
    function Jr(a) {
      {
        var f = Ge();
        if (!f) {
          var b = typeof a == "string" ? a : a.displayName || a.name;
          b && (f = `

Check the top-level render call using <` + b + ">.");
        }
        return f;
      }
    }
    function Nr(a, f) {
      {
        if (!a._store || a._store.validated || a.key != null)
          return;
        a._store.validated = !0;
        var b = Jr(f);
        if (xr[b])
          return;
        xr[b] = !0;
        var D = "";
        a && a._owner && a._owner !== tr.current && (D = " It was passed a child from " + ce(a._owner.type) + "."), Se(a), S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', b, D), Se(null);
      }
    }
    function wr(a, f) {
      {
        if (typeof a != "object")
          return;
        if (er(a))
          for (var b = 0; b < a.length; b++) {
            var D = a[b];
            $e(D) && Nr(D, f);
          }
        else if ($e(a))
          a._store && (a._store.validated = !0);
        else if (a) {
          var W = R(a);
          if (typeof W == "function" && W !== a.entries)
            for (var B = W.call(a), $; !($ = B.next()).done; )
              $e($.value) && Nr($.value, f);
        }
      }
    }
    function Ke(a) {
      {
        var f = a.type;
        if (f == null || typeof f == "string")
          return;
        var b;
        if (typeof f == "function")
          b = f.propTypes;
        else if (typeof f == "object" && (f.$$typeof === g || f.$$typeof === T))
          b = f.propTypes;
        else
          return;
        if (b) {
          var D = ce(f);
          _e(b, a.props, "prop", D, a);
        } else if (f.PropTypes !== void 0 && !qe) {
          qe = !0;
          var W = ce(f);
          S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", W || "Unknown");
        }
        typeof f.getDefaultProps == "function" && !f.getDefaultProps.isReactClassApproved && S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function lr(a) {
      {
        for (var f = Object.keys(a.props), b = 0; b < f.length; b++) {
          var D = f[b];
          if (D !== "children" && D !== "key") {
            Se(a), S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", D), Se(null);
            break;
          }
        }
        a.ref !== null && (Se(a), S("Invalid attribute `ref` supplied to `React.Fragment`."), Se(null));
      }
    }
    function cr(a, f, b, D, W, B) {
      {
        var $ = De(a);
        if (!$) {
          var k = "";
          (a === void 0 || typeof a == "object" && a !== null && Object.keys(a).length === 0) && (k += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var pe = Zr(W);
          pe ? k += pe : k += Ge();
          var ne;
          a === null ? ne = "null" : er(a) ? ne = "array" : a !== void 0 && a.$$typeof === t ? (ne = "<" + (ce(a.type) || "Unknown") + " />", k = " Did you accidentally export a JSX literal instead of a component?") : ne = typeof a, S("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ne, k);
        }
        var oe = Kr(a, f, b, W, B);
        if (oe == null)
          return oe;
        if ($) {
          var be = f.children;
          if (be !== void 0)
            if (D)
              if (er(be)) {
                for (var Fe = 0; Fe < be.length; Fe++)
                  wr(be[Fe], a);
                Object.freeze && Object.freeze(be);
              } else
                S("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              wr(be, a);
        }
        return a === s ? lr(oe) : Ke(oe), oe;
      }
    }
    function Xr(a, f, b) {
      return cr(a, f, b, !0);
    }
    function et(a, f, b) {
      return cr(a, f, b, !1);
    }
    var rt = et, tt = Xr;
    pr.Fragment = s, pr.jsx = rt, pr.jsxs = tt;
  }()), pr;
}
(function(r) {
  process.env.NODE_ENV === "production" ? r.exports = ma() : r.exports = ga();
})($r);
const xt = $r.exports.Fragment, C = $r.exports.jsx, ie = $r.exports.jsxs;
function bn() {
  let r = d.useRef(!1);
  return Oe(() => (r.current = !0, () => {
    r.current = !1;
  }), []), r;
}
function ha(r) {
  typeof queueMicrotask == "function" ? queueMicrotask(r) : Promise.resolve().then(r).catch((t) => setTimeout(() => {
    throw t;
  }));
}
var ba = ((r) => (r[r.Open = 0] = "Open", r[r.Closed = 1] = "Closed", r))(ba || {}), Ma = ((r) => (r[r.ToggleDisclosure = 0] = "ToggleDisclosure", r[r.CloseDisclosure = 1] = "CloseDisclosure", r[r.SetButtonId = 2] = "SetButtonId", r[r.SetPanelId = 3] = "SetPanelId", r[r.LinkPanel = 4] = "LinkPanel", r[r.UnlinkPanel = 5] = "UnlinkPanel", r))(Ma || {});
let Ea = {
  [0]: (r) => ({
    ...r,
    disclosureState: ye(r.disclosureState, {
      [0]: 1,
      [1]: 0
    })
  }),
  [1]: (r) => r.disclosureState === 1 ? r : {
    ...r,
    disclosureState: 1
  },
  [4](r) {
    return r.linkedPanel === !0 ? r : {
      ...r,
      linkedPanel: !0
    };
  },
  [5](r) {
    return r.linkedPanel === !1 ? r : {
      ...r,
      linkedPanel: !1
    };
  },
  [2](r, t) {
    return r.buttonId === t.buttonId ? r : {
      ...r,
      buttonId: t.buttonId
    };
  },
  [3](r, t) {
    return r.panelId === t.panelId ? r : {
      ...r,
      panelId: t.panelId
    };
  }
}, Nt = d.createContext(null);
Nt.displayName = "DisclosureContext";
function wt(r) {
  let t = d.useContext(Nt);
  if (t === null) {
    let o = new Error(`<${r} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o, wt), o;
  }
  return t;
}
let jt = d.createContext(null);
jt.displayName = "DisclosureAPIContext";
function Mn(r) {
  let t = d.useContext(jt);
  if (t === null) {
    let o = new Error(`<${r} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o, Mn), o;
  }
  return t;
}
let _t = d.createContext(null);
_t.displayName = "DisclosurePanelContext";
function Ta() {
  return d.useContext(_t);
}
function Da(r, t) {
  return ye(t.type, Ea, r, t);
}
let xa = d.Fragment, Na = Te(function(r, t) {
  let {
    defaultOpen: o = !1,
    ...s
  } = r, c = `headlessui-disclosure-button-${vr()}`, v = `headlessui-disclosure-panel-${vr()}`, m = d.useRef(null), h = Ce(t, fa((Q) => {
    m.current = Q;
  }, r.as === void 0 || r.as === React.Fragment)), g = d.useRef(null), E = d.useRef(null), M = d.useReducer(Da, {
    disclosureState: o ? 0 : 1,
    linkedPanel: !1,
    buttonRef: E,
    panelRef: g,
    buttonId: c,
    panelId: v
  }), [{
    disclosureState: T
  }, N] = M;
  d.useEffect(() => N({
    type: 2,
    buttonId: c
  }), [c, N]), d.useEffect(() => N({
    type: 3,
    panelId: v
  }), [v, N]);
  let P = Me((Q) => {
    N({
      type: 1
    });
    let S = na(m);
    if (!S)
      return;
    let te = (() => Q ? Q instanceof HTMLElement ? Q : Q.current instanceof HTMLElement ? Q.current : S.getElementById(c) : S.getElementById(c))();
    te == null || te.focus();
  }), F = d.useMemo(() => ({
    close: P
  }), [P]), U = d.useMemo(() => ({
    open: T === 0,
    close: P
  }), [T, P]), R = {
    ref: h
  };
  return d.createElement(Nt.Provider, {
    value: M
  }, /* @__PURE__ */ C(jt.Provider, {
    value: F,
    children: d.createElement(hn, {
      value: ye(T, {
        [0]: Ue.Open,
        [1]: Ue.Closed
      })
    }, je({
      ourProps: R,
      theirProps: s,
      slot: U,
      defaultTag: xa,
      name: "Disclosure"
    }))
  }));
}), wa = "button", ja = Te(function(r, t) {
  let [o, s] = wt("Disclosure.Button"), c = Ta(), v = c === null ? !1 : c === o.panelId, m = d.useRef(null), h = Ce(m, t, v ? null : o.buttonRef), g = Me((U) => {
    var R;
    if (v) {
      if (o.disclosureState === 1)
        return;
      switch (U.key) {
        case ge.Space:
        case ge.Enter:
          U.preventDefault(), U.stopPropagation(), s({
            type: 0
          }), (R = o.buttonRef.current) == null || R.focus();
          break;
      }
    } else
      switch (U.key) {
        case ge.Space:
        case ge.Enter:
          U.preventDefault(), U.stopPropagation(), s({
            type: 0
          });
          break;
      }
  }), E = Me((U) => {
    switch (U.key) {
      case ge.Space:
        U.preventDefault();
        break;
    }
  }), M = Me((U) => {
    var R;
    da(U.currentTarget) || r.disabled || (v ? (s({
      type: 0
    }), (R = o.buttonRef.current) == null || R.focus()) : s({
      type: 0
    }));
  }), T = d.useMemo(() => ({
    open: o.disclosureState === 0
  }), [o]), N = vn(r, m), P = r, F = v ? {
    ref: h,
    type: N,
    onKeyDown: g,
    onClick: M
  } : {
    ref: h,
    id: o.buttonId,
    type: N,
    "aria-expanded": r.disabled ? void 0 : o.disclosureState === 0,
    "aria-controls": o.linkedPanel ? o.panelId : void 0,
    onKeyDown: g,
    onKeyUp: E,
    onClick: M
  };
  return je({
    ourProps: F,
    theirProps: P,
    slot: T,
    defaultTag: wa,
    name: "Disclosure.Button"
  });
}), _a = "div", Oa = ir.RenderStrategy | ir.Static, Ca = Te(function(r, t) {
  let [o, s] = wt("Disclosure.Panel"), {
    close: c
  } = Mn("Disclosure.Panel"), v = Ce(t, o.panelRef, () => {
    o.linkedPanel || s({
      type: 4
    });
  }), m = Dt(), h = (() => m !== null ? m === Ue.Open : o.disclosureState === 0)();
  d.useEffect(() => () => s({
    type: 5
  }), [s]), d.useEffect(() => {
    var T;
    o.disclosureState === 1 && ((T = r.unmount) != null ? T : !0) && s({
      type: 5
    });
  }, [o.disclosureState, r.unmount, s]);
  let g = d.useMemo(() => ({
    open: o.disclosureState === 0,
    close: c
  }), [o, c]), E = r, M = {
    ref: v,
    id: o.panelId
  };
  return d.createElement(_t.Provider, {
    value: o.panelId
  }, je({
    ourProps: M,
    theirProps: E,
    slot: g,
    defaultTag: _a,
    features: Oa,
    visible: h,
    name: "Disclosure.Panel"
  }));
}), vt = Object.assign(Na, {
  Button: ja,
  Panel: Ca
});
function Ra({ onFocus: r }) {
  let [t, o] = d.useState(!0);
  return t ? d.createElement(ya, { as: "button", type: "button", features: gn.Focusable, onFocus: (s) => {
    s.preventDefault();
    let c, v = 50;
    function m() {
      if (v-- <= 0) {
        c && cancelAnimationFrame(c);
        return;
      }
      if (r()) {
        o(!1), cancelAnimationFrame(c);
        return;
      }
      c = requestAnimationFrame(m);
    }
    c = requestAnimationFrame(m);
  } }) : null;
}
var Sa = ((r) => (r[r.SetSelectedIndex = 0] = "SetSelectedIndex", r[r.RegisterTab = 1] = "RegisterTab", r[r.UnregisterTab = 2] = "UnregisterTab", r[r.RegisterPanel = 3] = "RegisterPanel", r[r.UnregisterPanel = 4] = "UnregisterPanel", r[r.ForceRerender = 5] = "ForceRerender", r))(Sa || {});
let Ia = {
  [0](r, t) {
    let o = r.tabs.filter((v) => {
      var m;
      return !((m = v.current) != null && m.hasAttribute("disabled"));
    });
    if (t.index < 0)
      return {
        ...r,
        selectedIndex: r.tabs.indexOf(o[0])
      };
    if (t.index > r.tabs.length)
      return {
        ...r,
        selectedIndex: r.tabs.indexOf(o[o.length - 1])
      };
    let s = r.tabs.slice(0, t.index), c = [...r.tabs.slice(t.index), ...s].find((v) => o.includes(v));
    return c ? {
      ...r,
      selectedIndex: r.tabs.indexOf(c)
    } : r;
  },
  [1](r, t) {
    return r.tabs.includes(t.tab) ? r : {
      ...r,
      tabs: gt([...r.tabs, t.tab], (o) => o.current)
    };
  },
  [2](r, t) {
    return {
      ...r,
      tabs: gt(r.tabs.filter((o) => o !== t.tab), (o) => o.current)
    };
  },
  [3](r, t) {
    return r.panels.includes(t.panel) ? r : {
      ...r,
      panels: [...r.panels, t.panel]
    };
  },
  [4](r, t) {
    return {
      ...r,
      panels: r.panels.filter((o) => o !== t.panel)
    };
  },
  [5](r) {
    return {
      ...r
    };
  }
}, Ot = d.createContext(null);
Ot.displayName = "TabsSSRContext";
function Ct(r) {
  let t = d.useContext(Ot);
  if (t === null) {
    let o = new Error(`<${r} /> is missing a parent <Tab.Group /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o, Ct), o;
  }
  return t;
}
let Rt = d.createContext(null);
Rt.displayName = "TabsDataContext";
function yr(r) {
  let t = d.useContext(Rt);
  if (t === null) {
    let o = new Error(`<${r} /> is missing a parent <Tab.Group /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o, yr), o;
  }
  return t;
}
let St = d.createContext(null);
St.displayName = "TabsActionsContext";
function It(r) {
  let t = d.useContext(St);
  if (t === null) {
    let o = new Error(`<${r} /> is missing a parent <Tab.Group /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o, It), o;
  }
  return t;
}
function Aa(r, t) {
  return ye(t.type, Ia, r, t);
}
let ka = d.Fragment, Pa = Te(function(r, t) {
  let {
    defaultIndex: o = 0,
    vertical: s = !1,
    manual: c = !1,
    onChange: v,
    selectedIndex: m = null,
    ...h
  } = r;
  const g = s ? "vertical" : "horizontal", E = c ? "manual" : "auto";
  let M = Ce(t), [T, N] = d.useReducer(Aa, {
    selectedIndex: m != null ? m : o,
    tabs: [],
    panels: []
  }), P = d.useMemo(() => ({
    selectedIndex: T.selectedIndex
  }), [T.selectedIndex]), F = ke(v || (() => {
  })), U = ke(T.tabs), R = d.useMemo(() => ({
    orientation: g,
    activation: E,
    ...T
  }), [g, E, T]), Q = ke(T.selectedIndex), S = d.useMemo(() => ({
    registerTab(I) {
      return N({
        type: 1,
        tab: I
      }), () => N({
        type: 2,
        tab: I
      });
    },
    registerPanel(I) {
      return N({
        type: 3,
        panel: I
      }), () => N({
        type: 4,
        panel: I
      });
    },
    forceRerender() {
      N({
        type: 5
      });
    },
    change(I) {
      Q.current !== I && F.current(I), Q.current = I, N({
        type: 0,
        index: I
      });
    }
  }), [N]);
  Oe(() => {
    N({
      type: 0,
      index: m != null ? m : o
    });
  }, [m]);
  let te = d.useRef({
    tabs: [],
    panels: []
  }), de = {
    ref: M
  };
  return /* @__PURE__ */ C(Ot.Provider, {
    value: te,
    children: d.createElement(St.Provider, {
      value: S
    }, /* @__PURE__ */ ie(Rt.Provider, {
      value: R,
      children: [R.tabs.length <= 0 && d.createElement(Ra, {
        onFocus: () => {
          var I, Z;
          for (let se of U.current)
            if (((I = se.current) == null ? void 0 : I.tabIndex) === 0)
              return (Z = se.current) == null || Z.focus(), !0;
          return !1;
        }
      }), je({
        ourProps: de,
        theirProps: h,
        slot: P,
        defaultTag: ka,
        name: "Tabs"
      })]
    }))
  });
}), La = "div", za = Te(function(r, t) {
  let {
    orientation: o,
    selectedIndex: s
  } = yr("Tab.List"), c = Ce(t);
  return je({
    ourProps: {
      ref: c,
      role: "tablist",
      "aria-orientation": o
    },
    theirProps: r,
    slot: {
      selectedIndex: s
    },
    defaultTag: La,
    name: "Tabs.List"
  });
}), $a = "button", Fa = Te(function(r, t) {
  var o, s;
  let c = `headlessui-tabs-tab-${vr()}`, {
    orientation: v,
    activation: m,
    selectedIndex: h,
    tabs: g,
    panels: E
  } = yr("Tab"), M = It("Tab"), T = Ct("Tab"), N = d.useRef(null), P = Ce(N, t, (A) => {
    !A || M.forceRerender();
  });
  Oe(() => M.registerTab(N), [M, N]);
  let F = T.current.tabs.indexOf(c);
  F === -1 && (F = T.current.tabs.push(c) - 1);
  let U = g.indexOf(N);
  U === -1 && (U = F);
  let R = U === h, Q = Me((A) => {
    let X = g.map((De) => De.current).filter(Boolean);
    if (A.key === ge.Space || A.key === ge.Enter) {
      A.preventDefault(), A.stopPropagation(), M.change(U);
      return;
    }
    switch (A.key) {
      case ge.Home:
      case ge.PageUp:
        return A.preventDefault(), A.stopPropagation(), or(X, we.First);
      case ge.End:
      case ge.PageDown:
        return A.preventDefault(), A.stopPropagation(), or(X, we.Last);
    }
    if (ye(v, {
      vertical() {
        if (A.key === ge.ArrowUp)
          return or(X, we.Previous | we.WrapAround);
        if (A.key === ge.ArrowDown)
          return or(X, we.Next | we.WrapAround);
      },
      horizontal() {
        if (A.key === ge.ArrowLeft)
          return or(X, we.Previous | we.WrapAround);
        if (A.key === ge.ArrowRight)
          return or(X, we.Next | we.WrapAround);
      }
    }))
      return A.preventDefault();
  }), S = Me(() => {
    var A;
    (A = N.current) == null || A.focus();
  }), te = Me(() => {
    var A;
    (A = N.current) == null || A.focus(), M.change(U);
  }), de = Me((A) => {
    A.preventDefault();
  }), I = d.useMemo(() => ({
    selected: R
  }), [R]), Z = r, se = {
    ref: P,
    onKeyDown: Q,
    onFocus: m === "manual" ? S : te,
    onMouseDown: de,
    onClick: te,
    id: c,
    role: "tab",
    type: vn(r, N),
    "aria-controls": (s = (o = E[U]) == null ? void 0 : o.current) == null ? void 0 : s.id,
    "aria-selected": R,
    tabIndex: R ? 0 : -1
  };
  return je({
    ourProps: se,
    theirProps: Z,
    slot: I,
    defaultTag: $a,
    name: "Tabs.Tab"
  });
}), Ua = "div", Ya = Te(function(r, t) {
  let {
    selectedIndex: o
  } = yr("Tab.Panels"), s = Ce(t), c = d.useMemo(() => ({
    selectedIndex: o
  }), [o]);
  return je({
    ourProps: {
      ref: s
    },
    theirProps: r,
    slot: c,
    defaultTag: Ua,
    name: "Tabs.Panels"
  });
}), Qa = "div", Wa = ir.RenderStrategy | ir.Static, Va = Te(function(r, t) {
  var o, s;
  let {
    selectedIndex: c,
    tabs: v,
    panels: m
  } = yr("Tab.Panel"), h = It("Tab.Panel"), g = Ct("Tab.Panel"), E = `headlessui-tabs-panel-${vr()}`, M = d.useRef(null), T = Ce(M, t, (S) => {
    !S || h.forceRerender();
  });
  Oe(() => h.registerPanel(M), [h, M]);
  let N = g.current.panels.indexOf(E);
  N === -1 && (N = g.current.panels.push(E) - 1);
  let P = m.indexOf(M);
  P === -1 && (P = N);
  let F = P === c, U = d.useMemo(() => ({
    selected: F
  }), [F]), R = r, Q = {
    ref: T,
    id: E,
    role: "tabpanel",
    "aria-labelledby": (s = (o = v[P]) == null ? void 0 : o.current) == null ? void 0 : s.id,
    tabIndex: F ? 0 : -1
  };
  return je({
    ourProps: Q,
    theirProps: R,
    slot: U,
    defaultTag: Qa,
    features: Wa,
    visible: F,
    name: "Tabs.Panel"
  });
}), ur = Object.assign(Fa, {
  Group: Pa,
  List: za,
  Panels: Ya,
  Panel: Va
});
function Ha(r) {
  let t = { called: !1 };
  return (...o) => {
    if (!t.called)
      return t.called = !0, r(...o);
  };
}
function yt(r, ...t) {
  r && t.length > 0 && r.classList.add(...t);
}
function mt(r, ...t) {
  r && t.length > 0 && r.classList.remove(...t);
}
var ht = ((r) => (r.Ended = "ended", r.Cancelled = "cancelled", r))(ht || {});
function Ba(r, t) {
  let o = zr();
  if (!r)
    return o.dispose;
  let { transitionDuration: s, transitionDelay: c } = getComputedStyle(r), [v, m] = [s, c].map((h) => {
    let [g = 0] = h.split(",").filter(Boolean).map((E) => E.includes("ms") ? parseFloat(E) : parseFloat(E) * 1e3).sort((E, M) => M - E);
    return g;
  });
  if (v + m !== 0) {
    let h = [];
    h.push(o.addEventListener(r, "transitionrun", (g) => {
      g.target === g.currentTarget && (h.splice(0).forEach((E) => E()), h.push(o.addEventListener(r, "transitionend", (E) => {
        E.target === E.currentTarget && (t("ended"), h.splice(0).forEach((M) => M()));
      }), o.addEventListener(r, "transitioncancel", (E) => {
        E.target === E.currentTarget && (t("cancelled"), h.splice(0).forEach((M) => M()));
      })));
    }));
  } else
    t("ended");
  return o.add(() => t("cancelled")), o.dispose;
}
function qa(r, t, o, s) {
  let c = o ? "enter" : "leave", v = zr(), m = s !== void 0 ? Ha(s) : () => {
  }, h = ye(c, { enter: () => t.enter, leave: () => t.leave }), g = ye(c, { enter: () => t.enterTo, leave: () => t.leaveTo }), E = ye(c, { enter: () => t.enterFrom, leave: () => t.leaveFrom });
  return mt(r, ...t.enter, ...t.enterTo, ...t.enterFrom, ...t.leave, ...t.leaveFrom, ...t.leaveTo, ...t.entered), yt(r, ...h, ...E), v.nextFrame(() => {
    mt(r, ...E), yt(r, ...g), Ba(r, (M) => (M === "ended" && (mt(r, ...h), yt(r, ...t.entered)), m(M)));
  }), v.dispose;
}
function Ga({ container: r, direction: t, classes: o, events: s, onStart: c, onStop: v }) {
  let m = bn(), h = ra(), g = ke(t), E = Me(() => ye(g.current, { enter: () => s.current.beforeEnter(), leave: () => s.current.beforeLeave(), idle: () => {
  } })), M = Me(() => ye(g.current, { enter: () => s.current.afterEnter(), leave: () => s.current.afterLeave(), idle: () => {
  } }));
  Oe(() => {
    let T = zr();
    h.add(T.dispose);
    let N = r.current;
    if (!!N && g.current !== "idle" && !!m.current)
      return T.dispose(), E(), c.current(g.current), T.add(qa(N, o.current, g.current === "enter", (P) => {
        T.dispose(), ye(P, { [ht.Ended]() {
          M(), v.current(g.current);
        }, [ht.Cancelled]: () => {
        } });
      })), T.dispose;
  }, [t]);
}
function Ze(r = "") {
  return r.split(" ").filter((t) => t.trim().length > 1);
}
let Fr = d.createContext(null);
Fr.displayName = "TransitionContext";
var Ka = ((r) => (r.Visible = "visible", r.Hidden = "hidden", r))(Ka || {});
function Za() {
  let r = d.useContext(Fr);
  if (r === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return r;
}
function Ja() {
  let r = d.useContext(Ur);
  if (r === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return r;
}
let Ur = d.createContext(null);
Ur.displayName = "NestingContext";
function Yr(r) {
  return "children" in r ? Yr(r.children) : r.current.filter(({
    state: t
  }) => t === "visible").length > 0;
}
function En(r) {
  let t = ke(r), o = d.useRef([]), s = bn(), c = Me((m, h = Ae.Hidden) => {
    let g = o.current.findIndex(({
      id: E
    }) => E === m);
    g !== -1 && (ye(h, {
      [Ae.Unmount]() {
        o.current.splice(g, 1);
      },
      [Ae.Hidden]() {
        o.current[g].state = "hidden";
      }
    }), ha(() => {
      var E;
      !Yr(o) && s.current && ((E = t.current) == null || E.call(t));
    }));
  }), v = Me((m) => {
    let h = o.current.find(({
      id: g
    }) => g === m);
    return h ? h.state !== "visible" && (h.state = "visible") : o.current.push({
      id: m,
      state: "visible"
    }), () => c(m, Ae.Unmount);
  });
  return d.useMemo(() => ({
    children: o,
    register: v,
    unregister: c
  }), [v, c, o]);
}
function Xa() {
}
let eo = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function pn(r) {
  var t;
  let o = {};
  for (let s of eo)
    o[s] = (t = r[s]) != null ? t : Xa;
  return o;
}
function ro(r) {
  let t = d.useRef(pn(r));
  return d.useEffect(() => {
    t.current = pn(r);
  }, [r]), t;
}
let to = "div", Tn = ir.RenderStrategy, Dn = Te(function(r, t) {
  let {
    beforeEnter: o,
    afterEnter: s,
    beforeLeave: c,
    afterLeave: v,
    enter: m,
    enterFrom: h,
    enterTo: g,
    entered: E,
    leave: M,
    leaveFrom: T,
    leaveTo: N,
    ...P
  } = r, F = d.useRef(null), U = Ce(F, t), [R, Q] = d.useState("visible"), S = P.unmount ? Ae.Unmount : Ae.Hidden, {
    show: te,
    appear: de,
    initial: I
  } = Za(), {
    register: Z,
    unregister: se
  } = Ja(), A = d.useRef(null), X = vr();
  d.useEffect(() => {
    if (X)
      return Z(X);
  }, [Z, X]), d.useEffect(() => {
    if (S === Ae.Hidden && !!X) {
      if (te && R !== "visible") {
        Q("visible");
        return;
      }
      ye(R, {
        hidden: () => se(X),
        visible: () => Z(X)
      });
    }
  }, [R, X, Z, se, te, S]);
  let De = ke({
    enter: Ze(m),
    enterFrom: Ze(h),
    enterTo: Ze(g),
    entered: Ze(E),
    leave: Ze(M),
    leaveFrom: Ze(T),
    leaveTo: Ze(N)
  }), Ye = ro({
    beforeEnter: o,
    afterEnter: s,
    beforeLeave: c,
    afterLeave: v
  }), xe = Et();
  d.useEffect(() => {
    if (xe && R === "visible" && F.current === null)
      throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [F, R, xe]);
  let ce = I && !de, me = (() => !xe || ce || A.current === te ? "idle" : te ? "enter" : "leave")(), ue = d.useRef(!1), he = En(() => {
    ue.current || (Q("hidden"), se(X));
  });
  Ga({
    container: F,
    classes: De,
    events: Ye,
    direction: me,
    onStart: ke(() => {
      ue.current = !0;
    }),
    onStop: ke((Re) => {
      ue.current = !1, Re === "leave" && !Yr(he) && (Q("hidden"), se(X));
    })
  }), d.useEffect(() => {
    !ce || (S === Ae.Hidden ? A.current = null : A.current = te);
  }, [te, ce, R]);
  let w = P, Ee = {
    ref: U
  };
  return /* @__PURE__ */ C(Ur.Provider, {
    value: he,
    children: d.createElement(hn, {
      value: ye(R, {
        visible: Ue.Open,
        hidden: Ue.Closed
      })
    }, je({
      ourProps: Ee,
      theirProps: w,
      defaultTag: to,
      features: Tn,
      visible: R === "visible",
      name: "Transition.Child"
    }))
  });
}), bt = Te(function(r, t) {
  let {
    show: o,
    appear: s = !1,
    unmount: c,
    ...v
  } = r, m = d.useRef(null), h = Ce(m, t);
  Et();
  let g = Dt();
  if (o === void 0 && g !== null && (o = ye(g, {
    [Ue.Open]: !0,
    [Ue.Closed]: !1
  })), ![!0, !1].includes(o))
    throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [E, M] = d.useState(o ? "visible" : "hidden"), T = En(() => {
    M("hidden");
  }), [N, P] = d.useState(!0), F = d.useRef([o]);
  Oe(() => {
    N !== !1 && F.current[F.current.length - 1] !== o && (F.current.push(o), P(!1));
  }, [F, o]);
  let U = d.useMemo(() => ({
    show: o,
    appear: s,
    initial: N
  }), [o, s, N]);
  d.useEffect(() => {
    if (o)
      M("visible");
    else if (!Yr(T))
      M("hidden");
    else {
      let Q = m.current;
      if (!Q)
        return;
      let S = Q.getBoundingClientRect();
      S.x === 0 && S.y === 0 && S.width === 0 && S.height === 0 && M("hidden");
    }
  }, [o, T]);
  let R = {
    unmount: c
  };
  return /* @__PURE__ */ C(Ur.Provider, {
    value: T,
    children: /* @__PURE__ */ C(Fr.Provider, {
      value: U,
      children: je({
        ourProps: {
          ...R,
          as: d.Fragment,
          children: d.createElement(Dn, {
            ref: h,
            ...R,
            ...v
          })
        },
        theirProps: {},
        defaultTag: d.Fragment,
        features: Tn,
        visible: E === "visible",
        name: "Transition"
      })
    })
  });
}), no = Te(function(r, t) {
  let o = d.useContext(Fr) !== null, s = Dt() !== null;
  return /* @__PURE__ */ C(xt, {
    children: !o && s ? /* @__PURE__ */ C(bt, {
      ref: t,
      ...r
    }) : d.createElement(Dn, {
      ref: t,
      ...r
    })
  });
}), ao = Object.assign(bt, {
  Child: no,
  Root: bt
});
var xn = { exports: {} };
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
(function(r) {
  (function() {
    var t = {}.hasOwnProperty;
    function o() {
      for (var s = [], c = 0; c < arguments.length; c++) {
        var v = arguments[c];
        if (!!v) {
          var m = typeof v;
          if (m === "string" || m === "number")
            s.push(v);
          else if (Array.isArray(v)) {
            if (v.length) {
              var h = o.apply(null, v);
              h && s.push(h);
            }
          } else if (m === "object")
            if (v.toString === Object.prototype.toString)
              for (var g in v)
                t.call(v, g) && v[g] && s.push(g);
            else
              s.push(v.toString());
        }
      }
      return s.join(" ");
    }
    r.exports ? (o.default = o, r.exports = o) : window.classNames = o;
  })();
})(xn);
const Ie = xn.exports, oo = ["Description", "Status"], uo = ({
  description: r,
  statusTitle: t,
  statusDescription: o,
  statusLink: s,
  startDate: c,
  endDate: v
}) => {
  const m = t || o || s;
  return /* @__PURE__ */ C(xt, {
    children: /* @__PURE__ */ ie("div", {
      className: "flex flex-col md:flex-row text-primaryText",
      children: [/* @__PURE__ */ ie(ur.Group, {
        as: "div",
        className: "flex-1",
        children: [/* @__PURE__ */ C(ur.List, {
          className: "flex space-x-1 border-b-[1px] border-b-borderTabs",
          children: oo.map((h) => /* @__PURE__ */ C(ur, {
            className: ({
              selected: g
            }) => Ie("text-xs py-1 px-5 border-b-2 hover:text-orange hover:border-orange uppercase tracking-widest", "focus:outline-none focus-visible:ring focus-visible:ring-orange-600 focus-visible:ring-opacity-75", g ? "text-orange-600" : "text-borderTab hover:text-orange-600"),
            children: h
          }, h))
        }), /* @__PURE__ */ ie(ur.Panels, {
          className: "mt-2",
          children: [/* @__PURE__ */ C(ur.Panel, {
            className: Ie("p-1", "focus:outline-none focus-visible:ring focus-visible:ring-orange-600 focus-visible:ring-opacity-75"),
            children: /* @__PURE__ */ C("dl", {
              className: "space-y-4",
              children: /* @__PURE__ */ ie("div", {
                children: [/* @__PURE__ */ C("dt", {
                  className: "text-sm text-secondaryText leading-5",
                  children: "Problem statement / Description"
                }), /* @__PURE__ */ C("dd", {
                  className: "text-sm",
                  children: r
                })]
              })
            })
          }), m ? /* @__PURE__ */ C(ur.Panel, {
            className: Ie("p-1 text-primaryText", "ring-orange-600 ring-opacity-60 ring-offset-1 ring-offset-orange-600 focus:outline-none focus:ring-1"),
            children: /* @__PURE__ */ ie("dl", {
              className: "space-y-4",
              children: [t ? /* @__PURE__ */ ie("div", {
                children: [/* @__PURE__ */ C("dt", {
                  className: "text-sm text-secondaryText leading-5",
                  children: "Status"
                }), /* @__PURE__ */ C("dd", {
                  className: "text-sm",
                  children: t
                })]
              }) : null, o ? /* @__PURE__ */ ie("div", {
                children: [/* @__PURE__ */ C("dt", {
                  className: "sr-only",
                  children: "Description"
                }), /* @__PURE__ */ C("dd", {
                  className: "text-sm",
                  children: o
                })]
              }) : null, s ? /* @__PURE__ */ ie("div", {
                children: [/* @__PURE__ */ C("dt", {
                  className: "text-sm text-secondaryText leading-5",
                  children: "Read more:"
                }), /* @__PURE__ */ C("dd", {
                  className: "text-sm text-orange-600",
                  children: /* @__PURE__ */ C("a", {
                    href: s,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "ring-blue-400 focus:outline-none focus:ring-2",
                    children: s
                  })
                })]
              }) : null]
            })
          }) : null]
        })]
      }), /* @__PURE__ */ ie("dl", {
        className: "flex flex-row gap-8 text-sm mt-[26px] px-1 md:px-0 md:pt-4 md:border-t-[1px] md:border-t-borderTabs md:gap-0 md:flex-col md:pl-7 md:basis-[260px] md:min-w-[260px]",
        children: [c ? /* @__PURE__ */ ie("div", {
          children: [/* @__PURE__ */ C("dt", {
            className: "text-gray-500",
            children: "Start Date"
          }), /* @__PURE__ */ C("dd", {
            children: c
          })]
        }) : null, v ? /* @__PURE__ */ ie("div", {
          children: [/* @__PURE__ */ C("dt", {
            className: "text-gray-500",
            children: "End Date"
          }), /* @__PURE__ */ C("dd", {
            children: v
          })]
        }) : null]
      })]
    })
  });
}, Lr = ({
  label: r,
  value: t
}) => /* @__PURE__ */ ie("p", {
  className: "flex flex-col",
  children: [/* @__PURE__ */ C("span", {
    className: " text-secondaryText text-sm",
    children: r
  }), /* @__PURE__ */ C("span", {
    className: "text-primaryText text-sm font-bold",
    children: t
  })]
}), io = {
  Completed: "bg-[#39e27f]",
  Ongoing: "bg-[#f2ca4e]",
  Canceled: "bg-[#dc4747]",
  Default: "bg-gray-600"
}, so = (r) => /* @__PURE__ */ C(vt, {
  as: "div",
  className: Ie(r.theme, "px-0 rounded-r-2xl shadow-card bg-card"),
  children: ({
    open: t
  }) => {
    var o, s;
    return /* @__PURE__ */ ie(xt, {
      children: [/* @__PURE__ */ ie(vt.Button, {
        className: Ie("flex flex-col min-h-[133px] w-full justify-between pr-4 rounded-r-2xl text-left", "focus:outline-none focus-visible:ring focus-visible:ring-orange-600 focus-visible:ring-opacity-75", "md:flex-row"),
        children: [/* @__PURE__ */ ie("div", {
          className: Ie("relative w-full pl-12 flex flex-1 flex-col space-x-4 justify-between py-4", "md:flex-row md:pl-[60px]"),
          children: [/* @__PURE__ */ C("div", {
            className: Ie("absolute left-0 top-[122px] w-[122px] h-[42px] transform rotate-[270deg] origin-top-left rounded-bl-[16px]", "flex items-center justify-center text-white font-bold text-xs uppercase tracking-[2px]", io[(o = r.Status) != null ? o : "Default"]),
            children: r.Status
          }), /* @__PURE__ */ C("div", {
            className: "flex flex-1 pb-8 md:py-0 border-b-gray-500 border-b-[1px] border-dashed md:border-b-0",
            children: /* @__PURE__ */ ie("div", {
              children: [/* @__PURE__ */ C("span", {
                className: "text-secondaryText text-sm",
                children: "Proposal"
              }), /* @__PURE__ */ C("h2", {
                className: "text-lg text-primaryText",
                children: r.Project_name
              }), /* @__PURE__ */ ie("a", {
                href: "https://paulccari.com",
                target: "_blank",
                onClick: (c) => c.stopPropagation(),
                rel: "noopener noreferrer",
                className: "text-md text-orange-600 pointer flex items-center no-underline",
                children: ["Read More", /* @__PURE__ */ C("img", {
                  src: Zn,
                  className: "w-4 h-4 ml-1",
                  alt: ""
                })]
              })]
            })
          }), /* @__PURE__ */ ie("div", {
            className: Ie("flex flex-1 space-x-4 py-4", "md:border-l-gray-500 md:border-l-[1px] md:border-dashed md:pr-4 md:pl-8 md:py-0"),
            children: [r.Fund ? /* @__PURE__ */ ie("div", {
              className: "flex-1",
              children: [/* @__PURE__ */ C(Lr, {
                label: "Challenge",
                value: r.Category
              }), /* @__PURE__ */ C(Lr, {
                label: "Fund",
                value: `Fund ${r.Fund}`
              })]
            }) : null, /* @__PURE__ */ ie("div", {
              className: "flex-1 space-y-1",
              children: [r.USD_equivalent ? /* @__PURE__ */ C(Lr, {
                label: "Amount Requested",
                value: `${(s = r.USD_equivalent) != null ? s : ""} in ${r.Currency} `
              }) : null, /* @__PURE__ */ C(Lr, {
                label: "Project Lead",
                value: r.Project_Lead
              })]
            })]
          })]
        }), /* @__PURE__ */ C("img", {
          src: Jn,
          alt: "",
          className: Ie("transform rotate-180 h-5 w-5 self-center mb-2 md:mb-0", t && "rotate-[360deg]")
        })]
      }), /* @__PURE__ */ C(ao, {
        enter: "transition duration-100 ease-out",
        enterFrom: "transform scale-95 opacity-0",
        enterTo: "transform scale-100 opacity-100",
        leave: "transition duration-75 ease-out",
        leaveFrom: "transform scale-100 opacity-100",
        leaveTo: "transform scale-95 opacity-0",
        children: /* @__PURE__ */ C(vt.Panel, {
          className: "border-t-[1px] border-t-gray-500 border-dashed ml-16 md:ml-[60px] pt-5 pb-6 mr-4",
          children: /* @__PURE__ */ C(uo, {
            description: r.Description,
            startDate: r.Started_on,
            endDate: r.Completed_on,
            statusTitle: r.Status,
            statusDescription: r.Status_description,
            statusLink: r.Status_desc_link1
          })
        })
      })]
    });
  }
});
export {
  so as GrantProposalItem
};
