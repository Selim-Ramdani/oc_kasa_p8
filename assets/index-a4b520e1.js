function Af(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const l = Object.getOwnPropertyDescriptor(r, o);
          l &&
            Object.defineProperty(
              e,
              o,
              l.get ? l : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const l of o)
      if (l.type === "childList")
        for (const i of l.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const l = {};
    return (
      o.integrity && (l.integrity = o.integrity),
      o.referrerPolicy && (l.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (l.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (l.credentials = "omit")
        : (l.credentials = "same-origin"),
      l
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const l = n(o);
    fetch(o.href, l);
  }
})();
function Ff(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Ju = { exports: {} },
  dl = {},
  Gu = { exports: {} },
  V = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var br = Symbol.for("react.element"),
  If = Symbol.for("react.portal"),
  Of = Symbol.for("react.fragment"),
  Uf = Symbol.for("react.strict_mode"),
  Bf = Symbol.for("react.profiler"),
  Hf = Symbol.for("react.provider"),
  Wf = Symbol.for("react.context"),
  Vf = Symbol.for("react.forward_ref"),
  Qf = Symbol.for("react.suspense"),
  Kf = Symbol.for("react.memo"),
  qf = Symbol.for("react.lazy"),
  ks = Symbol.iterator;
function $f(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ks && e[ks]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Yu = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Xu = Object.assign,
  Zu = {};
function nr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Zu),
    (this.updater = n || Yu);
}
nr.prototype.isReactComponent = {};
nr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
nr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function bu() {}
bu.prototype = nr.prototype;
function fa(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Zu),
    (this.updater = n || Yu);
}
var pa = (fa.prototype = new bu());
pa.constructor = fa;
Xu(pa, nr.prototype);
pa.isPureReactComponent = !0;
var Ss = Array.isArray,
  ec = Object.prototype.hasOwnProperty,
  ma = { current: null },
  tc = { key: !0, ref: !0, __self: !0, __source: !0 };
function nc(e, t, n) {
  var r,
    o = {},
    l = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (l = "" + t.key),
    t))
      ec.call(t, r) && !tc.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var s = Array(a), u = 0; u < a; u++) s[u] = arguments[u + 2];
    o.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r]);
  return {
    $$typeof: br,
    type: e,
    key: l,
    ref: i,
    props: o,
    _owner: ma.current,
  };
}
function Jf(e, t) {
  return {
    $$typeof: br,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ha(e) {
  return typeof e == "object" && e !== null && e.$$typeof === br;
}
function Gf(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var xs = /\/+/g;
function Ul(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Gf("" + e.key)
    : t.toString(36);
}
function zo(e, t, n, r, o) {
  var l = typeof e;
  (l === "undefined" || l === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (l) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case br:
          case If:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (o = o(i)),
      (e = r === "" ? "." + Ul(i, 0) : r),
      Ss(o)
        ? ((n = ""),
          e != null && (n = e.replace(xs, "$&/") + "/"),
          zo(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (ha(o) &&
            (o = Jf(
              o,
              n +
                (!o.key || (i && i.key === o.key)
                  ? ""
                  : ("" + o.key).replace(xs, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Ss(e)))
    for (var a = 0; a < e.length; a++) {
      l = e[a];
      var s = r + Ul(l, a);
      i += zo(l, t, n, s, o);
    }
  else if (((s = $f(e)), typeof s == "function"))
    for (e = s.call(e), a = 0; !(l = e.next()).done; )
      (l = l.value), (s = r + Ul(l, a++)), (i += zo(l, t, n, s, o));
  else if (l === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function uo(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    zo(e, r, "", "", function (l) {
      return t.call(n, l, o++);
    }),
    r
  );
}
function Yf(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var _e = { current: null },
  Ro = { transition: null },
  Xf = {
    ReactCurrentDispatcher: _e,
    ReactCurrentBatchConfig: Ro,
    ReactCurrentOwner: ma,
  };
V.Children = {
  map: uo,
  forEach: function (e, t, n) {
    uo(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      uo(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      uo(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ha(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
V.Component = nr;
V.Fragment = Of;
V.Profiler = Bf;
V.PureComponent = fa;
V.StrictMode = Uf;
V.Suspense = Qf;
V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xf;
V.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Xu({}, e.props),
    o = e.key,
    l = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (i = ma.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (s in t)
      ec.call(t, s) &&
        !tc.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && a !== void 0 ? a[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    a = Array(s);
    for (var u = 0; u < s; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: br, type: e.type, key: o, ref: l, props: r, _owner: i };
};
V.createContext = function (e) {
  return (
    (e = {
      $$typeof: Wf,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Hf, _context: e }),
    (e.Consumer = e)
  );
};
V.createElement = nc;
V.createFactory = function (e) {
  var t = nc.bind(null, e);
  return (t.type = e), t;
};
V.createRef = function () {
  return { current: null };
};
V.forwardRef = function (e) {
  return { $$typeof: Vf, render: e };
};
V.isValidElement = ha;
V.lazy = function (e) {
  return { $$typeof: qf, _payload: { _status: -1, _result: e }, _init: Yf };
};
V.memo = function (e, t) {
  return { $$typeof: Kf, type: e, compare: t === void 0 ? null : t };
};
V.startTransition = function (e) {
  var t = Ro.transition;
  Ro.transition = {};
  try {
    e();
  } finally {
    Ro.transition = t;
  }
};
V.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
V.useCallback = function (e, t) {
  return _e.current.useCallback(e, t);
};
V.useContext = function (e) {
  return _e.current.useContext(e);
};
V.useDebugValue = function () {};
V.useDeferredValue = function (e) {
  return _e.current.useDeferredValue(e);
};
V.useEffect = function (e, t) {
  return _e.current.useEffect(e, t);
};
V.useId = function () {
  return _e.current.useId();
};
V.useImperativeHandle = function (e, t, n) {
  return _e.current.useImperativeHandle(e, t, n);
};
V.useInsertionEffect = function (e, t) {
  return _e.current.useInsertionEffect(e, t);
};
V.useLayoutEffect = function (e, t) {
  return _e.current.useLayoutEffect(e, t);
};
V.useMemo = function (e, t) {
  return _e.current.useMemo(e, t);
};
V.useReducer = function (e, t, n) {
  return _e.current.useReducer(e, t, n);
};
V.useRef = function (e) {
  return _e.current.useRef(e);
};
V.useState = function (e) {
  return _e.current.useState(e);
};
V.useSyncExternalStore = function (e, t, n) {
  return _e.current.useSyncExternalStore(e, t, n);
};
V.useTransition = function () {
  return _e.current.useTransition();
};
V.version = "18.2.0";
Gu.exports = V;
var P = Gu.exports;
const rc = Ff(P),
  Zf = Af({ __proto__: null, default: rc }, [P]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var bf = P,
  ep = Symbol.for("react.element"),
  tp = Symbol.for("react.fragment"),
  np = Object.prototype.hasOwnProperty,
  rp = bf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  op = { key: !0, ref: !0, __self: !0, __source: !0 };
function oc(e, t, n) {
  var r,
    o = {},
    l = null,
    i = null;
  n !== void 0 && (l = "" + n),
    t.key !== void 0 && (l = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) np.call(t, r) && !op.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: ep,
    type: e,
    key: l,
    ref: i,
    props: o,
    _owner: rp.current,
  };
}
dl.Fragment = tp;
dl.jsx = oc;
dl.jsxs = oc;
Ju.exports = dl;
var C = Ju.exports,
  mi = {},
  lc = { exports: {} },
  Ve = {},
  ic = { exports: {} },
  ac = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(N, A) {
    var B = N.length;
    N.push(A);
    e: for (; 0 < B; ) {
      var ne = (B - 1) >>> 1,
        fe = N[ne];
      if (0 < o(fe, A)) (N[ne] = A), (N[B] = fe), (B = ne);
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var A = N[0],
      B = N.pop();
    if (B !== A) {
      N[0] = B;
      e: for (var ne = 0, fe = N.length, Sn = fe >>> 1; ne < Sn; ) {
        var X = 2 * (ne + 1) - 1,
          ht = N[X],
          ut = X + 1,
          xn = N[ut];
        if (0 > o(ht, B))
          ut < fe && 0 > o(xn, ht)
            ? ((N[ne] = xn), (N[ut] = B), (ne = ut))
            : ((N[ne] = ht), (N[X] = B), (ne = X));
        else if (ut < fe && 0 > o(xn, B)) (N[ne] = xn), (N[ut] = B), (ne = ut);
        else break e;
      }
    }
    return A;
  }
  function o(N, A) {
    var B = N.sortIndex - A.sortIndex;
    return B !== 0 ? B : N.id - A.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var l = performance;
    e.unstable_now = function () {
      return l.now();
    };
  } else {
    var i = Date,
      a = i.now();
    e.unstable_now = function () {
      return i.now() - a;
    };
  }
  var s = [],
    u = [],
    p = 1,
    v = null,
    h = 3,
    k = !1,
    w = !1,
    y = !1,
    z = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(N) {
    for (var A = n(u); A !== null; ) {
      if (A.callback === null) r(u);
      else if (A.startTime <= N)
        r(u), (A.sortIndex = A.expirationTime), t(s, A);
      else break;
      A = n(u);
    }
  }
  function d(N) {
    if (((y = !1), m(N), !w))
      if (n(s) !== null) (w = !0), Oe(x);
      else {
        var A = n(u);
        A !== null && st(d, A.startTime - N);
      }
  }
  function x(N, A) {
    (w = !1), y && ((y = !1), f(T), (T = -1)), (k = !0);
    var B = h;
    try {
      for (
        m(A), v = n(s);
        v !== null && (!(v.expirationTime > A) || (N && !ye()));

      ) {
        var ne = v.callback;
        if (typeof ne == "function") {
          (v.callback = null), (h = v.priorityLevel);
          var fe = ne(v.expirationTime <= A);
          (A = e.unstable_now()),
            typeof fe == "function" ? (v.callback = fe) : v === n(s) && r(s),
            m(A);
        } else r(s);
        v = n(s);
      }
      if (v !== null) var Sn = !0;
      else {
        var X = n(u);
        X !== null && st(d, X.startTime - A), (Sn = !1);
      }
      return Sn;
    } finally {
      (v = null), (h = B), (k = !1);
    }
  }
  var L = !1,
    R = null,
    T = -1,
    Q = 5,
    I = -1;
  function ye() {
    return !(e.unstable_now() - I < Q);
  }
  function Y() {
    if (R !== null) {
      var N = e.unstable_now();
      I = N;
      var A = !0;
      try {
        A = R(!0, N);
      } finally {
        A ? at() : ((L = !1), (R = null));
      }
    } else L = !1;
  }
  var at;
  if (typeof c == "function")
    at = function () {
      c(Y);
    };
  else if (typeof MessageChannel < "u") {
    var _t = new MessageChannel(),
      Mt = _t.port2;
    (_t.port1.onmessage = Y),
      (at = function () {
        Mt.postMessage(null);
      });
  } else
    at = function () {
      z(Y, 0);
    };
  function Oe(N) {
    (R = N), L || ((L = !0), at());
  }
  function st(N, A) {
    T = z(function () {
      N(e.unstable_now());
    }, A);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (N) {
      N.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || k || ((w = !0), Oe(x));
    }),
    (e.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (Q = 0 < N ? Math.floor(1e3 / N) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (N) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var A = 3;
          break;
        default:
          A = h;
      }
      var B = h;
      h = A;
      try {
        return N();
      } finally {
        h = B;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (N, A) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var B = h;
      h = N;
      try {
        return A();
      } finally {
        h = B;
      }
    }),
    (e.unstable_scheduleCallback = function (N, A, B) {
      var ne = e.unstable_now();
      switch (
        (typeof B == "object" && B !== null
          ? ((B = B.delay), (B = typeof B == "number" && 0 < B ? ne + B : ne))
          : (B = ne),
        N)
      ) {
        case 1:
          var fe = -1;
          break;
        case 2:
          fe = 250;
          break;
        case 5:
          fe = 1073741823;
          break;
        case 4:
          fe = 1e4;
          break;
        default:
          fe = 5e3;
      }
      return (
        (fe = B + fe),
        (N = {
          id: p++,
          callback: A,
          priorityLevel: N,
          startTime: B,
          expirationTime: fe,
          sortIndex: -1,
        }),
        B > ne
          ? ((N.sortIndex = B),
            t(u, N),
            n(s) === null &&
              N === n(u) &&
              (y ? (f(T), (T = -1)) : (y = !0), st(d, B - ne)))
          : ((N.sortIndex = fe), t(s, N), w || k || ((w = !0), Oe(x))),
        N
      );
    }),
    (e.unstable_shouldYield = ye),
    (e.unstable_wrapCallback = function (N) {
      var A = h;
      return function () {
        var B = h;
        h = A;
        try {
          return N.apply(this, arguments);
        } finally {
          h = B;
        }
      };
    });
})(ac);
ic.exports = ac;
var lp = ic.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sc = P,
  We = lp;
function E(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var uc = new Set(),
  Ar = {};
function wn(e, t) {
  $n(e, t), $n(e + "Capture", t);
}
function $n(e, t) {
  for (Ar[e] = t, e = 0; e < t.length; e++) uc.add(t[e]);
}
var Et = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  hi = Object.prototype.hasOwnProperty,
  ip =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Es = {},
  Cs = {};
function ap(e) {
  return hi.call(Cs, e)
    ? !0
    : hi.call(Es, e)
    ? !1
    : ip.test(e)
    ? (Cs[e] = !0)
    : ((Es[e] = !0), !1);
}
function sp(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function up(e, t, n, r) {
  if (t === null || typeof t > "u" || sp(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Me(e, t, n, r, o, l, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = i);
}
var xe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    xe[e] = new Me(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  xe[t] = new Me(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  xe[e] = new Me(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  xe[e] = new Me(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    xe[e] = new Me(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  xe[e] = new Me(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  xe[e] = new Me(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  xe[e] = new Me(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  xe[e] = new Me(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var va = /[\-:]([a-z])/g;
function ga(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(va, ga);
    xe[t] = new Me(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(va, ga);
    xe[t] = new Me(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(va, ga);
  xe[t] = new Me(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  xe[e] = new Me(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
xe.xlinkHref = new Me(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  xe[e] = new Me(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ya(e, t, n, r) {
  var o = xe.hasOwnProperty(t) ? xe[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (up(t, n, o, r) && (n = null),
    r || o === null
      ? ap(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Rt = sc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  co = Symbol.for("react.element"),
  Pn = Symbol.for("react.portal"),
  zn = Symbol.for("react.fragment"),
  wa = Symbol.for("react.strict_mode"),
  vi = Symbol.for("react.profiler"),
  cc = Symbol.for("react.provider"),
  dc = Symbol.for("react.context"),
  ja = Symbol.for("react.forward_ref"),
  gi = Symbol.for("react.suspense"),
  yi = Symbol.for("react.suspense_list"),
  ka = Symbol.for("react.memo"),
  Ft = Symbol.for("react.lazy"),
  fc = Symbol.for("react.offscreen"),
  Ps = Symbol.iterator;
function ur(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ps && e[Ps]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ae = Object.assign,
  Bl;
function kr(e) {
  if (Bl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Bl = (t && t[1]) || "";
    }
  return (
    `
` +
    Bl +
    e
  );
}
var Hl = !1;
function Wl(e, t) {
  if (!e || Hl) return "";
  Hl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          l = r.stack.split(`
`),
          i = o.length - 1,
          a = l.length - 1;
        1 <= i && 0 <= a && o[i] !== l[a];

      )
        a--;
      for (; 1 <= i && 0 <= a; i--, a--)
        if (o[i] !== l[a]) {
          if (i !== 1 || a !== 1)
            do
              if ((i--, a--, 0 > a || o[i] !== l[a])) {
                var s =
                  `
` + o[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= i && 0 <= a);
          break;
        }
    }
  } finally {
    (Hl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? kr(e) : "";
}
function cp(e) {
  switch (e.tag) {
    case 5:
      return kr(e.type);
    case 16:
      return kr("Lazy");
    case 13:
      return kr("Suspense");
    case 19:
      return kr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Wl(e.type, !1)), e;
    case 11:
      return (e = Wl(e.type.render, !1)), e;
    case 1:
      return (e = Wl(e.type, !0)), e;
    default:
      return "";
  }
}
function wi(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case zn:
      return "Fragment";
    case Pn:
      return "Portal";
    case vi:
      return "Profiler";
    case wa:
      return "StrictMode";
    case gi:
      return "Suspense";
    case yi:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case dc:
        return (e.displayName || "Context") + ".Consumer";
      case cc:
        return (e._context.displayName || "Context") + ".Provider";
      case ja:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case ka:
        return (
          (t = e.displayName || null), t !== null ? t : wi(e.type) || "Memo"
        );
      case Ft:
        (t = e._payload), (e = e._init);
        try {
          return wi(e(t));
        } catch {}
    }
  return null;
}
function dp(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return wi(t);
    case 8:
      return t === wa ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Yt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function pc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function fp(e) {
  var t = pc(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      l = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (i) {
          (r = "" + i), l.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function fo(e) {
  e._valueTracker || (e._valueTracker = fp(e));
}
function mc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = pc(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Uo(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ji(e, t) {
  var n = t.checked;
  return ae({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function zs(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Yt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function hc(e, t) {
  (t = t.checked), t != null && ya(e, "checked", t, !1);
}
function ki(e, t) {
  hc(e, t);
  var n = Yt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Si(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Si(e, t.type, Yt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Rs(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Si(e, t, n) {
  (t !== "number" || Uo(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Sr = Array.isArray;
function Bn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Yt(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function xi(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(E(91));
  return ae({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Ls(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(E(92));
      if (Sr(n)) {
        if (1 < n.length) throw Error(E(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Yt(n) };
}
function vc(e, t) {
  var n = Yt(t.value),
    r = Yt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Ns(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function gc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ei(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? gc(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var po,
  yc = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        po = po || document.createElement("div"),
          po.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = po.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Fr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Cr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  pp = ["Webkit", "ms", "Moz", "O"];
Object.keys(Cr).forEach(function (e) {
  pp.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Cr[t] = Cr[e]);
  });
});
function wc(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Cr.hasOwnProperty(e) && Cr[e])
    ? ("" + t).trim()
    : t + "px";
}
function jc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = wc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var mp = ae(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Ci(e, t) {
  if (t) {
    if (mp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(E(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(E(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(E(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(E(62));
  }
}
function Pi(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var zi = null;
function Sa(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ri = null,
  Hn = null,
  Wn = null;
function _s(e) {
  if ((e = no(e))) {
    if (typeof Ri != "function") throw Error(E(280));
    var t = e.stateNode;
    t && ((t = vl(t)), Ri(e.stateNode, e.type, t));
  }
}
function kc(e) {
  Hn ? (Wn ? Wn.push(e) : (Wn = [e])) : (Hn = e);
}
function Sc() {
  if (Hn) {
    var e = Hn,
      t = Wn;
    if (((Wn = Hn = null), _s(e), t)) for (e = 0; e < t.length; e++) _s(t[e]);
  }
}
function xc(e, t) {
  return e(t);
}
function Ec() {}
var Vl = !1;
function Cc(e, t, n) {
  if (Vl) return e(t, n);
  Vl = !0;
  try {
    return xc(e, t, n);
  } finally {
    (Vl = !1), (Hn !== null || Wn !== null) && (Ec(), Sc());
  }
}
function Ir(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = vl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(E(231, t, typeof n));
  return n;
}
var Li = !1;
if (Et)
  try {
    var cr = {};
    Object.defineProperty(cr, "passive", {
      get: function () {
        Li = !0;
      },
    }),
      window.addEventListener("test", cr, cr),
      window.removeEventListener("test", cr, cr);
  } catch {
    Li = !1;
  }
function hp(e, t, n, r, o, l, i, a, s) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (p) {
    this.onError(p);
  }
}
var Pr = !1,
  Bo = null,
  Ho = !1,
  Ni = null,
  vp = {
    onError: function (e) {
      (Pr = !0), (Bo = e);
    },
  };
function gp(e, t, n, r, o, l, i, a, s) {
  (Pr = !1), (Bo = null), hp.apply(vp, arguments);
}
function yp(e, t, n, r, o, l, i, a, s) {
  if ((gp.apply(this, arguments), Pr)) {
    if (Pr) {
      var u = Bo;
      (Pr = !1), (Bo = null);
    } else throw Error(E(198));
    Ho || ((Ho = !0), (Ni = u));
  }
}
function jn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Pc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Ms(e) {
  if (jn(e) !== e) throw Error(E(188));
}
function wp(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = jn(e)), t === null)) throw Error(E(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var l = o.alternate;
    if (l === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === l.child) {
      for (l = o.child; l; ) {
        if (l === n) return Ms(o), e;
        if (l === r) return Ms(o), t;
        l = l.sibling;
      }
      throw Error(E(188));
    }
    if (n.return !== r.return) (n = o), (r = l);
    else {
      for (var i = !1, a = o.child; a; ) {
        if (a === n) {
          (i = !0), (n = o), (r = l);
          break;
        }
        if (a === r) {
          (i = !0), (r = o), (n = l);
          break;
        }
        a = a.sibling;
      }
      if (!i) {
        for (a = l.child; a; ) {
          if (a === n) {
            (i = !0), (n = l), (r = o);
            break;
          }
          if (a === r) {
            (i = !0), (r = l), (n = o);
            break;
          }
          a = a.sibling;
        }
        if (!i) throw Error(E(189));
      }
    }
    if (n.alternate !== r) throw Error(E(190));
  }
  if (n.tag !== 3) throw Error(E(188));
  return n.stateNode.current === n ? e : t;
}
function zc(e) {
  return (e = wp(e)), e !== null ? Rc(e) : null;
}
function Rc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Rc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Lc = We.unstable_scheduleCallback,
  Ts = We.unstable_cancelCallback,
  jp = We.unstable_shouldYield,
  kp = We.unstable_requestPaint,
  de = We.unstable_now,
  Sp = We.unstable_getCurrentPriorityLevel,
  xa = We.unstable_ImmediatePriority,
  Nc = We.unstable_UserBlockingPriority,
  Wo = We.unstable_NormalPriority,
  xp = We.unstable_LowPriority,
  _c = We.unstable_IdlePriority,
  fl = null,
  pt = null;
function Ep(e) {
  if (pt && typeof pt.onCommitFiberRoot == "function")
    try {
      pt.onCommitFiberRoot(fl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var ot = Math.clz32 ? Math.clz32 : zp,
  Cp = Math.log,
  Pp = Math.LN2;
function zp(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Cp(e) / Pp) | 0)) | 0;
}
var mo = 64,
  ho = 4194304;
function xr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Vo(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    l = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var a = i & ~o;
    a !== 0 ? (r = xr(a)) : ((l &= i), l !== 0 && (r = xr(l)));
  } else (i = n & ~o), i !== 0 ? (r = xr(i)) : l !== 0 && (r = xr(l));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (l = t & -t), o >= l || (o === 16 && (l & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - ot(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function Rp(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Lp(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      l = e.pendingLanes;
    0 < l;

  ) {
    var i = 31 - ot(l),
      a = 1 << i,
      s = o[i];
    s === -1
      ? (!(a & n) || a & r) && (o[i] = Rp(a, t))
      : s <= t && (e.expiredLanes |= a),
      (l &= ~a);
  }
}
function _i(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Mc() {
  var e = mo;
  return (mo <<= 1), !(mo & 4194240) && (mo = 64), e;
}
function Ql(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function eo(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - ot(t)),
    (e[t] = n);
}
function Np(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - ot(n),
      l = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~l);
  }
}
function Ea(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - ot(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var $ = 0;
function Tc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Dc,
  Ca,
  Ac,
  Fc,
  Ic,
  Mi = !1,
  vo = [],
  Wt = null,
  Vt = null,
  Qt = null,
  Or = new Map(),
  Ur = new Map(),
  Ot = [],
  _p =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Ds(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Wt = null;
      break;
    case "dragenter":
    case "dragleave":
      Vt = null;
      break;
    case "mouseover":
    case "mouseout":
      Qt = null;
      break;
    case "pointerover":
    case "pointerout":
      Or.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ur.delete(t.pointerId);
  }
}
function dr(e, t, n, r, o, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: l,
        targetContainers: [o],
      }),
      t !== null && ((t = no(t)), t !== null && Ca(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function Mp(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (Wt = dr(Wt, e, t, n, r, o)), !0;
    case "dragenter":
      return (Vt = dr(Vt, e, t, n, r, o)), !0;
    case "mouseover":
      return (Qt = dr(Qt, e, t, n, r, o)), !0;
    case "pointerover":
      var l = o.pointerId;
      return Or.set(l, dr(Or.get(l) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (l = o.pointerId), Ur.set(l, dr(Ur.get(l) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function Oc(e) {
  var t = an(e.target);
  if (t !== null) {
    var n = jn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Pc(n)), t !== null)) {
          (e.blockedOn = t),
            Ic(e.priority, function () {
              Ac(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Lo(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ti(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (zi = r), n.target.dispatchEvent(r), (zi = null);
    } else return (t = no(n)), t !== null && Ca(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function As(e, t, n) {
  Lo(e) && n.delete(t);
}
function Tp() {
  (Mi = !1),
    Wt !== null && Lo(Wt) && (Wt = null),
    Vt !== null && Lo(Vt) && (Vt = null),
    Qt !== null && Lo(Qt) && (Qt = null),
    Or.forEach(As),
    Ur.forEach(As);
}
function fr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Mi ||
      ((Mi = !0),
      We.unstable_scheduleCallback(We.unstable_NormalPriority, Tp)));
}
function Br(e) {
  function t(o) {
    return fr(o, e);
  }
  if (0 < vo.length) {
    fr(vo[0], e);
    for (var n = 1; n < vo.length; n++) {
      var r = vo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Wt !== null && fr(Wt, e),
      Vt !== null && fr(Vt, e),
      Qt !== null && fr(Qt, e),
      Or.forEach(t),
      Ur.forEach(t),
      n = 0;
    n < Ot.length;
    n++
  )
    (r = Ot[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Ot.length && ((n = Ot[0]), n.blockedOn === null); )
    Oc(n), n.blockedOn === null && Ot.shift();
}
var Vn = Rt.ReactCurrentBatchConfig,
  Qo = !0;
function Dp(e, t, n, r) {
  var o = $,
    l = Vn.transition;
  Vn.transition = null;
  try {
    ($ = 1), Pa(e, t, n, r);
  } finally {
    ($ = o), (Vn.transition = l);
  }
}
function Ap(e, t, n, r) {
  var o = $,
    l = Vn.transition;
  Vn.transition = null;
  try {
    ($ = 4), Pa(e, t, n, r);
  } finally {
    ($ = o), (Vn.transition = l);
  }
}
function Pa(e, t, n, r) {
  if (Qo) {
    var o = Ti(e, t, n, r);
    if (o === null) ei(e, t, r, Ko, n), Ds(e, r);
    else if (Mp(o, e, t, n, r)) r.stopPropagation();
    else if ((Ds(e, r), t & 4 && -1 < _p.indexOf(e))) {
      for (; o !== null; ) {
        var l = no(o);
        if (
          (l !== null && Dc(l),
          (l = Ti(e, t, n, r)),
          l === null && ei(e, t, r, Ko, n),
          l === o)
        )
          break;
        o = l;
      }
      o !== null && r.stopPropagation();
    } else ei(e, t, r, null, n);
  }
}
var Ko = null;
function Ti(e, t, n, r) {
  if (((Ko = null), (e = Sa(r)), (e = an(e)), e !== null))
    if (((t = jn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Pc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ko = e), null;
}
function Uc(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Sp()) {
        case xa:
          return 1;
        case Nc:
          return 4;
        case Wo:
        case xp:
          return 16;
        case _c:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Bt = null,
  za = null,
  No = null;
function Bc() {
  if (No) return No;
  var e,
    t = za,
    n = t.length,
    r,
    o = "value" in Bt ? Bt.value : Bt.textContent,
    l = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[l - r]; r++);
  return (No = o.slice(e, 1 < r ? 1 - r : void 0));
}
function _o(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function go() {
  return !0;
}
function Fs() {
  return !1;
}
function Qe(e) {
  function t(n, r, o, l, i) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = l),
      (this.target = i),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(l) : l[a]));
    return (
      (this.isDefaultPrevented = (
        l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
      )
        ? go
        : Fs),
      (this.isPropagationStopped = Fs),
      this
    );
  }
  return (
    ae(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = go));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = go));
      },
      persist: function () {},
      isPersistent: go,
    }),
    t
  );
}
var rr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ra = Qe(rr),
  to = ae({}, rr, { view: 0, detail: 0 }),
  Fp = Qe(to),
  Kl,
  ql,
  pr,
  pl = ae({}, to, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: La,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== pr &&
            (pr && e.type === "mousemove"
              ? ((Kl = e.screenX - pr.screenX), (ql = e.screenY - pr.screenY))
              : (ql = Kl = 0),
            (pr = e)),
          Kl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ql;
    },
  }),
  Is = Qe(pl),
  Ip = ae({}, pl, { dataTransfer: 0 }),
  Op = Qe(Ip),
  Up = ae({}, to, { relatedTarget: 0 }),
  $l = Qe(Up),
  Bp = ae({}, rr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Hp = Qe(Bp),
  Wp = ae({}, rr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Vp = Qe(Wp),
  Qp = ae({}, rr, { data: 0 }),
  Os = Qe(Qp),
  Kp = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  qp = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  $p = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Jp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = $p[e]) ? !!t[e] : !1;
}
function La() {
  return Jp;
}
var Gp = ae({}, to, {
    key: function (e) {
      if (e.key) {
        var t = Kp[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = _o(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? qp[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: La,
    charCode: function (e) {
      return e.type === "keypress" ? _o(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? _o(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Yp = Qe(Gp),
  Xp = ae({}, pl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Us = Qe(Xp),
  Zp = ae({}, to, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: La,
  }),
  bp = Qe(Zp),
  em = ae({}, rr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  tm = Qe(em),
  nm = ae({}, pl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  rm = Qe(nm),
  om = [9, 13, 27, 32],
  Na = Et && "CompositionEvent" in window,
  zr = null;
Et && "documentMode" in document && (zr = document.documentMode);
var lm = Et && "TextEvent" in window && !zr,
  Hc = Et && (!Na || (zr && 8 < zr && 11 >= zr)),
  Bs = String.fromCharCode(32),
  Hs = !1;
function Wc(e, t) {
  switch (e) {
    case "keyup":
      return om.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Vc(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Rn = !1;
function im(e, t) {
  switch (e) {
    case "compositionend":
      return Vc(t);
    case "keypress":
      return t.which !== 32 ? null : ((Hs = !0), Bs);
    case "textInput":
      return (e = t.data), e === Bs && Hs ? null : e;
    default:
      return null;
  }
}
function am(e, t) {
  if (Rn)
    return e === "compositionend" || (!Na && Wc(e, t))
      ? ((e = Bc()), (No = za = Bt = null), (Rn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Hc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var sm = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Ws(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!sm[e.type] : t === "textarea";
}
function Qc(e, t, n, r) {
  kc(r),
    (t = qo(t, "onChange")),
    0 < t.length &&
      ((n = new Ra("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Rr = null,
  Hr = null;
function um(e) {
  td(e, 0);
}
function ml(e) {
  var t = _n(e);
  if (mc(t)) return e;
}
function cm(e, t) {
  if (e === "change") return t;
}
var Kc = !1;
if (Et) {
  var Jl;
  if (Et) {
    var Gl = "oninput" in document;
    if (!Gl) {
      var Vs = document.createElement("div");
      Vs.setAttribute("oninput", "return;"),
        (Gl = typeof Vs.oninput == "function");
    }
    Jl = Gl;
  } else Jl = !1;
  Kc = Jl && (!document.documentMode || 9 < document.documentMode);
}
function Qs() {
  Rr && (Rr.detachEvent("onpropertychange", qc), (Hr = Rr = null));
}
function qc(e) {
  if (e.propertyName === "value" && ml(Hr)) {
    var t = [];
    Qc(t, Hr, e, Sa(e)), Cc(um, t);
  }
}
function dm(e, t, n) {
  e === "focusin"
    ? (Qs(), (Rr = t), (Hr = n), Rr.attachEvent("onpropertychange", qc))
    : e === "focusout" && Qs();
}
function fm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ml(Hr);
}
function pm(e, t) {
  if (e === "click") return ml(t);
}
function mm(e, t) {
  if (e === "input" || e === "change") return ml(t);
}
function hm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var it = typeof Object.is == "function" ? Object.is : hm;
function Wr(e, t) {
  if (it(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!hi.call(t, o) || !it(e[o], t[o])) return !1;
  }
  return !0;
}
function Ks(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function qs(e, t) {
  var n = Ks(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Ks(n);
  }
}
function $c(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? $c(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Jc() {
  for (var e = window, t = Uo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Uo(e.document);
  }
  return t;
}
function _a(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function vm(e) {
  var t = Jc(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    $c(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && _a(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          l = Math.min(r.start, o);
        (r = r.end === void 0 ? l : Math.min(r.end, o)),
          !e.extend && l > r && ((o = r), (r = l), (l = o)),
          (o = qs(n, l));
        var i = qs(n, r);
        o &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          l > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var gm = Et && "documentMode" in document && 11 >= document.documentMode,
  Ln = null,
  Di = null,
  Lr = null,
  Ai = !1;
function $s(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ai ||
    Ln == null ||
    Ln !== Uo(r) ||
    ((r = Ln),
    "selectionStart" in r && _a(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Lr && Wr(Lr, r)) ||
      ((Lr = r),
      (r = qo(Di, "onSelect")),
      0 < r.length &&
        ((t = new Ra("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Ln))));
}
function yo(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Nn = {
    animationend: yo("Animation", "AnimationEnd"),
    animationiteration: yo("Animation", "AnimationIteration"),
    animationstart: yo("Animation", "AnimationStart"),
    transitionend: yo("Transition", "TransitionEnd"),
  },
  Yl = {},
  Gc = {};
Et &&
  ((Gc = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Nn.animationend.animation,
    delete Nn.animationiteration.animation,
    delete Nn.animationstart.animation),
  "TransitionEvent" in window || delete Nn.transitionend.transition);
function hl(e) {
  if (Yl[e]) return Yl[e];
  if (!Nn[e]) return e;
  var t = Nn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Gc) return (Yl[e] = t[n]);
  return e;
}
var Yc = hl("animationend"),
  Xc = hl("animationiteration"),
  Zc = hl("animationstart"),
  bc = hl("transitionend"),
  ed = new Map(),
  Js =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Zt(e, t) {
  ed.set(e, t), wn(t, [e]);
}
for (var Xl = 0; Xl < Js.length; Xl++) {
  var Zl = Js[Xl],
    ym = Zl.toLowerCase(),
    wm = Zl[0].toUpperCase() + Zl.slice(1);
  Zt(ym, "on" + wm);
}
Zt(Yc, "onAnimationEnd");
Zt(Xc, "onAnimationIteration");
Zt(Zc, "onAnimationStart");
Zt("dblclick", "onDoubleClick");
Zt("focusin", "onFocus");
Zt("focusout", "onBlur");
Zt(bc, "onTransitionEnd");
$n("onMouseEnter", ["mouseout", "mouseover"]);
$n("onMouseLeave", ["mouseout", "mouseover"]);
$n("onPointerEnter", ["pointerout", "pointerover"]);
$n("onPointerLeave", ["pointerout", "pointerover"]);
wn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
wn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
wn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
wn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
wn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
wn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Er =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  jm = new Set("cancel close invalid load scroll toggle".split(" ").concat(Er));
function Gs(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), yp(r, t, void 0, e), (e.currentTarget = null);
}
function td(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var a = r[i],
            s = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), s !== l && o.isPropagationStopped())) break e;
          Gs(o, a, u), (l = s);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((a = r[i]),
            (s = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            s !== l && o.isPropagationStopped())
          )
            break e;
          Gs(o, a, u), (l = s);
        }
    }
  }
  if (Ho) throw ((e = Ni), (Ho = !1), (Ni = null), e);
}
function b(e, t) {
  var n = t[Bi];
  n === void 0 && (n = t[Bi] = new Set());
  var r = e + "__bubble";
  n.has(r) || (nd(t, e, 2, !1), n.add(r));
}
function bl(e, t, n) {
  var r = 0;
  t && (r |= 4), nd(n, e, r, t);
}
var wo = "_reactListening" + Math.random().toString(36).slice(2);
function Vr(e) {
  if (!e[wo]) {
    (e[wo] = !0),
      uc.forEach(function (n) {
        n !== "selectionchange" && (jm.has(n) || bl(n, !1, e), bl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[wo] || ((t[wo] = !0), bl("selectionchange", !1, t));
  }
}
function nd(e, t, n, r) {
  switch (Uc(t)) {
    case 1:
      var o = Dp;
      break;
    case 4:
      o = Ap;
      break;
    default:
      o = Pa;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Li ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function ei(e, t, n, r, o) {
  var l = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var a = r.stateNode.containerInfo;
        if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var s = i.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = i.stateNode.containerInfo),
              s === o || (s.nodeType === 8 && s.parentNode === o))
            )
              return;
            i = i.return;
          }
        for (; a !== null; ) {
          if (((i = an(a)), i === null)) return;
          if (((s = i.tag), s === 5 || s === 6)) {
            r = l = i;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Cc(function () {
    var u = l,
      p = Sa(n),
      v = [];
    e: {
      var h = ed.get(e);
      if (h !== void 0) {
        var k = Ra,
          w = e;
        switch (e) {
          case "keypress":
            if (_o(n) === 0) break e;
          case "keydown":
          case "keyup":
            k = Yp;
            break;
          case "focusin":
            (w = "focus"), (k = $l);
            break;
          case "focusout":
            (w = "blur"), (k = $l);
            break;
          case "beforeblur":
          case "afterblur":
            k = $l;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k = Is;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k = Op;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k = bp;
            break;
          case Yc:
          case Xc:
          case Zc:
            k = Hp;
            break;
          case bc:
            k = tm;
            break;
          case "scroll":
            k = Fp;
            break;
          case "wheel":
            k = rm;
            break;
          case "copy":
          case "cut":
          case "paste":
            k = Vp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k = Us;
        }
        var y = (t & 4) !== 0,
          z = !y && e === "scroll",
          f = y ? (h !== null ? h + "Capture" : null) : h;
        y = [];
        for (var c = u, m; c !== null; ) {
          m = c;
          var d = m.stateNode;
          if (
            (m.tag === 5 &&
              d !== null &&
              ((m = d),
              f !== null && ((d = Ir(c, f)), d != null && y.push(Qr(c, d, m)))),
            z)
          )
            break;
          c = c.return;
        }
        0 < y.length &&
          ((h = new k(h, w, null, n, p)), v.push({ event: h, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (k = e === "mouseout" || e === "pointerout"),
          h &&
            n !== zi &&
            (w = n.relatedTarget || n.fromElement) &&
            (an(w) || w[Ct]))
        )
          break e;
        if (
          (k || h) &&
          ((h =
            p.window === p
              ? p
              : (h = p.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          k
            ? ((w = n.relatedTarget || n.toElement),
              (k = u),
              (w = w ? an(w) : null),
              w !== null &&
                ((z = jn(w)), w !== z || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((k = null), (w = u)),
          k !== w)
        ) {
          if (
            ((y = Is),
            (d = "onMouseLeave"),
            (f = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = Us),
              (d = "onPointerLeave"),
              (f = "onPointerEnter"),
              (c = "pointer")),
            (z = k == null ? h : _n(k)),
            (m = w == null ? h : _n(w)),
            (h = new y(d, c + "leave", k, n, p)),
            (h.target = z),
            (h.relatedTarget = m),
            (d = null),
            an(p) === u &&
              ((y = new y(f, c + "enter", w, n, p)),
              (y.target = m),
              (y.relatedTarget = z),
              (d = y)),
            (z = d),
            k && w)
          )
            t: {
              for (y = k, f = w, c = 0, m = y; m; m = En(m)) c++;
              for (m = 0, d = f; d; d = En(d)) m++;
              for (; 0 < c - m; ) (y = En(y)), c--;
              for (; 0 < m - c; ) (f = En(f)), m--;
              for (; c--; ) {
                if (y === f || (f !== null && y === f.alternate)) break t;
                (y = En(y)), (f = En(f));
              }
              y = null;
            }
          else y = null;
          k !== null && Ys(v, h, k, y, !1),
            w !== null && z !== null && Ys(v, z, w, y, !0);
        }
      }
      e: {
        if (
          ((h = u ? _n(u) : window),
          (k = h.nodeName && h.nodeName.toLowerCase()),
          k === "select" || (k === "input" && h.type === "file"))
        )
          var x = cm;
        else if (Ws(h))
          if (Kc) x = mm;
          else {
            x = fm;
            var L = dm;
          }
        else
          (k = h.nodeName) &&
            k.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (x = pm);
        if (x && (x = x(e, u))) {
          Qc(v, x, n, p);
          break e;
        }
        L && L(e, h, u),
          e === "focusout" &&
            (L = h._wrapperState) &&
            L.controlled &&
            h.type === "number" &&
            Si(h, "number", h.value);
      }
      switch (((L = u ? _n(u) : window), e)) {
        case "focusin":
          (Ws(L) || L.contentEditable === "true") &&
            ((Ln = L), (Di = u), (Lr = null));
          break;
        case "focusout":
          Lr = Di = Ln = null;
          break;
        case "mousedown":
          Ai = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Ai = !1), $s(v, n, p);
          break;
        case "selectionchange":
          if (gm) break;
        case "keydown":
        case "keyup":
          $s(v, n, p);
      }
      var R;
      if (Na)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        Rn
          ? Wc(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T &&
        (Hc &&
          n.locale !== "ko" &&
          (Rn || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && Rn && (R = Bc())
            : ((Bt = p),
              (za = "value" in Bt ? Bt.value : Bt.textContent),
              (Rn = !0))),
        (L = qo(u, T)),
        0 < L.length &&
          ((T = new Os(T, e, null, n, p)),
          v.push({ event: T, listeners: L }),
          R ? (T.data = R) : ((R = Vc(n)), R !== null && (T.data = R)))),
        (R = lm ? im(e, n) : am(e, n)) &&
          ((u = qo(u, "onBeforeInput")),
          0 < u.length &&
            ((p = new Os("onBeforeInput", "beforeinput", null, n, p)),
            v.push({ event: p, listeners: u }),
            (p.data = R)));
    }
    td(v, t);
  });
}
function Qr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function qo(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      l = o.stateNode;
    o.tag === 5 &&
      l !== null &&
      ((o = l),
      (l = Ir(e, n)),
      l != null && r.unshift(Qr(e, l, o)),
      (l = Ir(e, t)),
      l != null && r.push(Qr(e, l, o))),
      (e = e.return);
  }
  return r;
}
function En(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ys(e, t, n, r, o) {
  for (var l = t._reactName, i = []; n !== null && n !== r; ) {
    var a = n,
      s = a.alternate,
      u = a.stateNode;
    if (s !== null && s === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      o
        ? ((s = Ir(n, l)), s != null && i.unshift(Qr(n, s, a)))
        : o || ((s = Ir(n, l)), s != null && i.push(Qr(n, s, a)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var km = /\r\n?/g,
  Sm = /\u0000|\uFFFD/g;
function Xs(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      km,
      `
`
    )
    .replace(Sm, "");
}
function jo(e, t, n) {
  if (((t = Xs(t)), Xs(e) !== t && n)) throw Error(E(425));
}
function $o() {}
var Fi = null,
  Ii = null;
function Oi(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Ui = typeof setTimeout == "function" ? setTimeout : void 0,
  xm = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Zs = typeof Promise == "function" ? Promise : void 0,
  Em =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Zs < "u"
      ? function (e) {
          return Zs.resolve(null).then(e).catch(Cm);
        }
      : Ui;
function Cm(e) {
  setTimeout(function () {
    throw e;
  });
}
function ti(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), Br(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  Br(t);
}
function Kt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function bs(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var or = Math.random().toString(36).slice(2),
  ft = "__reactFiber$" + or,
  Kr = "__reactProps$" + or,
  Ct = "__reactContainer$" + or,
  Bi = "__reactEvents$" + or,
  Pm = "__reactListeners$" + or,
  zm = "__reactHandles$" + or;
function an(e) {
  var t = e[ft];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ct] || n[ft])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = bs(e); e !== null; ) {
          if ((n = e[ft])) return n;
          e = bs(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function no(e) {
  return (
    (e = e[ft] || e[Ct]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function _n(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(E(33));
}
function vl(e) {
  return e[Kr] || null;
}
var Hi = [],
  Mn = -1;
function bt(e) {
  return { current: e };
}
function ee(e) {
  0 > Mn || ((e.current = Hi[Mn]), (Hi[Mn] = null), Mn--);
}
function Z(e, t) {
  Mn++, (Hi[Mn] = e.current), (e.current = t);
}
var Xt = {},
  Re = bt(Xt),
  Ae = bt(!1),
  pn = Xt;
function Jn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Xt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    l;
  for (l in n) o[l] = t[l];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Fe(e) {
  return (e = e.childContextTypes), e != null;
}
function Jo() {
  ee(Ae), ee(Re);
}
function eu(e, t, n) {
  if (Re.current !== Xt) throw Error(E(168));
  Z(Re, t), Z(Ae, n);
}
function rd(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(E(108, dp(e) || "Unknown", o));
  return ae({}, n, r);
}
function Go(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Xt),
    (pn = Re.current),
    Z(Re, e),
    Z(Ae, Ae.current),
    !0
  );
}
function tu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(E(169));
  n
    ? ((e = rd(e, t, pn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ee(Ae),
      ee(Re),
      Z(Re, e))
    : ee(Ae),
    Z(Ae, n);
}
var wt = null,
  gl = !1,
  ni = !1;
function od(e) {
  wt === null ? (wt = [e]) : wt.push(e);
}
function Rm(e) {
  (gl = !0), od(e);
}
function en() {
  if (!ni && wt !== null) {
    ni = !0;
    var e = 0,
      t = $;
    try {
      var n = wt;
      for ($ = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (wt = null), (gl = !1);
    } catch (o) {
      throw (wt !== null && (wt = wt.slice(e + 1)), Lc(xa, en), o);
    } finally {
      ($ = t), (ni = !1);
    }
  }
  return null;
}
var Tn = [],
  Dn = 0,
  Yo = null,
  Xo = 0,
  qe = [],
  $e = 0,
  mn = null,
  jt = 1,
  kt = "";
function on(e, t) {
  (Tn[Dn++] = Xo), (Tn[Dn++] = Yo), (Yo = e), (Xo = t);
}
function ld(e, t, n) {
  (qe[$e++] = jt), (qe[$e++] = kt), (qe[$e++] = mn), (mn = e);
  var r = jt;
  e = kt;
  var o = 32 - ot(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var l = 32 - ot(t) + o;
  if (30 < l) {
    var i = o - (o % 5);
    (l = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (o -= i),
      (jt = (1 << (32 - ot(t) + o)) | (n << o) | r),
      (kt = l + e);
  } else (jt = (1 << l) | (n << o) | r), (kt = e);
}
function Ma(e) {
  e.return !== null && (on(e, 1), ld(e, 1, 0));
}
function Ta(e) {
  for (; e === Yo; )
    (Yo = Tn[--Dn]), (Tn[Dn] = null), (Xo = Tn[--Dn]), (Tn[Dn] = null);
  for (; e === mn; )
    (mn = qe[--$e]),
      (qe[$e] = null),
      (kt = qe[--$e]),
      (qe[$e] = null),
      (jt = qe[--$e]),
      (qe[$e] = null);
}
var He = null,
  Be = null,
  te = !1,
  rt = null;
function id(e, t) {
  var n = Je(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function nu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (He = e), (Be = Kt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (He = e), (Be = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = mn !== null ? { id: jt, overflow: kt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Je(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (He = e),
            (Be = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Wi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Vi(e) {
  if (te) {
    var t = Be;
    if (t) {
      var n = t;
      if (!nu(e, t)) {
        if (Wi(e)) throw Error(E(418));
        t = Kt(n.nextSibling);
        var r = He;
        t && nu(e, t)
          ? id(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (te = !1), (He = e));
      }
    } else {
      if (Wi(e)) throw Error(E(418));
      (e.flags = (e.flags & -4097) | 2), (te = !1), (He = e);
    }
  }
}
function ru(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  He = e;
}
function ko(e) {
  if (e !== He) return !1;
  if (!te) return ru(e), (te = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Oi(e.type, e.memoizedProps))),
    t && (t = Be))
  ) {
    if (Wi(e)) throw (ad(), Error(E(418)));
    for (; t; ) id(e, t), (t = Kt(t.nextSibling));
  }
  if ((ru(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(E(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Be = Kt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Be = null;
    }
  } else Be = He ? Kt(e.stateNode.nextSibling) : null;
  return !0;
}
function ad() {
  for (var e = Be; e; ) e = Kt(e.nextSibling);
}
function Gn() {
  (Be = He = null), (te = !1);
}
function Da(e) {
  rt === null ? (rt = [e]) : rt.push(e);
}
var Lm = Rt.ReactCurrentBatchConfig;
function et(e, t) {
  if (e && e.defaultProps) {
    (t = ae({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Zo = bt(null),
  bo = null,
  An = null,
  Aa = null;
function Fa() {
  Aa = An = bo = null;
}
function Ia(e) {
  var t = Zo.current;
  ee(Zo), (e._currentValue = t);
}
function Qi(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Qn(e, t) {
  (bo = e),
    (Aa = An = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (De = !0), (e.firstContext = null));
}
function Ye(e) {
  var t = e._currentValue;
  if (Aa !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), An === null)) {
      if (bo === null) throw Error(E(308));
      (An = e), (bo.dependencies = { lanes: 0, firstContext: e });
    } else An = An.next = e;
  return t;
}
var sn = null;
function Oa(e) {
  sn === null ? (sn = [e]) : sn.push(e);
}
function sd(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Oa(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Pt(e, r)
  );
}
function Pt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var It = !1;
function Ua(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function ud(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function St(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function qt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), K & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Pt(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Oa(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Pt(e, n)
  );
}
function Mo(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ea(e, n);
  }
}
function ou(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      l = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        l === null ? (o = l = i) : (l = l.next = i), (n = n.next);
      } while (n !== null);
      l === null ? (o = l = t) : (l = l.next = t);
    } else o = l = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: l,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function el(e, t, n, r) {
  var o = e.updateQueue;
  It = !1;
  var l = o.firstBaseUpdate,
    i = o.lastBaseUpdate,
    a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var s = a,
      u = s.next;
    (s.next = null), i === null ? (l = u) : (i.next = u), (i = s);
    var p = e.alternate;
    p !== null &&
      ((p = p.updateQueue),
      (a = p.lastBaseUpdate),
      a !== i &&
        (a === null ? (p.firstBaseUpdate = u) : (a.next = u),
        (p.lastBaseUpdate = s)));
  }
  if (l !== null) {
    var v = o.baseState;
    (i = 0), (p = u = s = null), (a = l);
    do {
      var h = a.lane,
        k = a.eventTime;
      if ((r & h) === h) {
        p !== null &&
          (p = p.next =
            {
              eventTime: k,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var w = e,
            y = a;
          switch (((h = t), (k = n), y.tag)) {
            case 1:
              if (((w = y.payload), typeof w == "function")) {
                v = w.call(k, v, h);
                break e;
              }
              v = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = y.payload),
                (h = typeof w == "function" ? w.call(k, v, h) : w),
                h == null)
              )
                break e;
              v = ae({}, v, h);
              break e;
            case 2:
              It = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (h = o.effects),
          h === null ? (o.effects = [a]) : h.push(a));
      } else
        (k = {
          eventTime: k,
          lane: h,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          p === null ? ((u = p = k), (s = v)) : (p = p.next = k),
          (i |= h);
      if (((a = a.next), a === null)) {
        if (((a = o.shared.pending), a === null)) break;
        (h = a),
          (a = h.next),
          (h.next = null),
          (o.lastBaseUpdate = h),
          (o.shared.pending = null);
      }
    } while (1);
    if (
      (p === null && (s = v),
      (o.baseState = s),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = p),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (i |= o.lane), (o = o.next);
      while (o !== t);
    } else l === null && (o.shared.lanes = 0);
    (vn |= i), (e.lanes = i), (e.memoizedState = v);
  }
}
function lu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(E(191, o));
        o.call(r);
      }
    }
}
var cd = new sc.Component().refs;
function Ki(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ae({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var yl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? jn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ne(),
      o = Jt(e),
      l = St(r, o);
    (l.payload = t),
      n != null && (l.callback = n),
      (t = qt(e, l, o)),
      t !== null && (lt(t, e, o, r), Mo(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ne(),
      o = Jt(e),
      l = St(r, o);
    (l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      (t = qt(e, l, o)),
      t !== null && (lt(t, e, o, r), Mo(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ne(),
      r = Jt(e),
      o = St(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = qt(e, o, r)),
      t !== null && (lt(t, e, r, n), Mo(t, e, r));
  },
};
function iu(e, t, n, r, o, l, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, l, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Wr(n, r) || !Wr(o, l)
      : !0
  );
}
function dd(e, t, n) {
  var r = !1,
    o = Xt,
    l = t.contextType;
  return (
    typeof l == "object" && l !== null
      ? (l = Ye(l))
      : ((o = Fe(t) ? pn : Re.current),
        (r = t.contextTypes),
        (l = (r = r != null) ? Jn(e, o) : Xt)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = yl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  );
}
function au(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && yl.enqueueReplaceState(t, t.state, null);
}
function qi(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = cd), Ua(e);
  var l = t.contextType;
  typeof l == "object" && l !== null
    ? (o.context = Ye(l))
    : ((l = Fe(t) ? pn : Re.current), (o.context = Jn(e, l))),
    (o.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == "function" && (Ki(e, t, l, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && yl.enqueueReplaceState(o, o.state, null),
      el(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function mr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(E(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(E(147, e));
      var o = r,
        l = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === l
        ? t.ref
        : ((t = function (i) {
            var a = o.refs;
            a === cd && (a = o.refs = {}),
              i === null ? delete a[l] : (a[l] = i);
          }),
          (t._stringRef = l),
          t);
    }
    if (typeof e != "string") throw Error(E(284));
    if (!n._owner) throw Error(E(290, e));
  }
  return e;
}
function So(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      E(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function su(e) {
  var t = e._init;
  return t(e._payload);
}
function fd(e) {
  function t(f, c) {
    if (e) {
      var m = f.deletions;
      m === null ? ((f.deletions = [c]), (f.flags |= 16)) : m.push(c);
    }
  }
  function n(f, c) {
    if (!e) return null;
    for (; c !== null; ) t(f, c), (c = c.sibling);
    return null;
  }
  function r(f, c) {
    for (f = new Map(); c !== null; )
      c.key !== null ? f.set(c.key, c) : f.set(c.index, c), (c = c.sibling);
    return f;
  }
  function o(f, c) {
    return (f = Gt(f, c)), (f.index = 0), (f.sibling = null), f;
  }
  function l(f, c, m) {
    return (
      (f.index = m),
      e
        ? ((m = f.alternate),
          m !== null
            ? ((m = m.index), m < c ? ((f.flags |= 2), c) : m)
            : ((f.flags |= 2), c))
        : ((f.flags |= 1048576), c)
    );
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function a(f, c, m, d) {
    return c === null || c.tag !== 6
      ? ((c = ui(m, f.mode, d)), (c.return = f), c)
      : ((c = o(c, m)), (c.return = f), c);
  }
  function s(f, c, m, d) {
    var x = m.type;
    return x === zn
      ? p(f, c, m.props.children, d, m.key)
      : c !== null &&
        (c.elementType === x ||
          (typeof x == "object" &&
            x !== null &&
            x.$$typeof === Ft &&
            su(x) === c.type))
      ? ((d = o(c, m.props)), (d.ref = mr(f, c, m)), (d.return = f), d)
      : ((d = Oo(m.type, m.key, m.props, null, f.mode, d)),
        (d.ref = mr(f, c, m)),
        (d.return = f),
        d);
  }
  function u(f, c, m, d) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== m.containerInfo ||
      c.stateNode.implementation !== m.implementation
      ? ((c = ci(m, f.mode, d)), (c.return = f), c)
      : ((c = o(c, m.children || [])), (c.return = f), c);
  }
  function p(f, c, m, d, x) {
    return c === null || c.tag !== 7
      ? ((c = fn(m, f.mode, d, x)), (c.return = f), c)
      : ((c = o(c, m)), (c.return = f), c);
  }
  function v(f, c, m) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = ui("" + c, f.mode, m)), (c.return = f), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case co:
          return (
            (m = Oo(c.type, c.key, c.props, null, f.mode, m)),
            (m.ref = mr(f, null, c)),
            (m.return = f),
            m
          );
        case Pn:
          return (c = ci(c, f.mode, m)), (c.return = f), c;
        case Ft:
          var d = c._init;
          return v(f, d(c._payload), m);
      }
      if (Sr(c) || ur(c))
        return (c = fn(c, f.mode, m, null)), (c.return = f), c;
      So(f, c);
    }
    return null;
  }
  function h(f, c, m, d) {
    var x = c !== null ? c.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return x !== null ? null : a(f, c, "" + m, d);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case co:
          return m.key === x ? s(f, c, m, d) : null;
        case Pn:
          return m.key === x ? u(f, c, m, d) : null;
        case Ft:
          return (x = m._init), h(f, c, x(m._payload), d);
      }
      if (Sr(m) || ur(m)) return x !== null ? null : p(f, c, m, d, null);
      So(f, m);
    }
    return null;
  }
  function k(f, c, m, d, x) {
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return (f = f.get(m) || null), a(c, f, "" + d, x);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case co:
          return (f = f.get(d.key === null ? m : d.key) || null), s(c, f, d, x);
        case Pn:
          return (f = f.get(d.key === null ? m : d.key) || null), u(c, f, d, x);
        case Ft:
          var L = d._init;
          return k(f, c, m, L(d._payload), x);
      }
      if (Sr(d) || ur(d)) return (f = f.get(m) || null), p(c, f, d, x, null);
      So(c, d);
    }
    return null;
  }
  function w(f, c, m, d) {
    for (
      var x = null, L = null, R = c, T = (c = 0), Q = null;
      R !== null && T < m.length;
      T++
    ) {
      R.index > T ? ((Q = R), (R = null)) : (Q = R.sibling);
      var I = h(f, R, m[T], d);
      if (I === null) {
        R === null && (R = Q);
        break;
      }
      e && R && I.alternate === null && t(f, R),
        (c = l(I, c, T)),
        L === null ? (x = I) : (L.sibling = I),
        (L = I),
        (R = Q);
    }
    if (T === m.length) return n(f, R), te && on(f, T), x;
    if (R === null) {
      for (; T < m.length; T++)
        (R = v(f, m[T], d)),
          R !== null &&
            ((c = l(R, c, T)), L === null ? (x = R) : (L.sibling = R), (L = R));
      return te && on(f, T), x;
    }
    for (R = r(f, R); T < m.length; T++)
      (Q = k(R, f, T, m[T], d)),
        Q !== null &&
          (e && Q.alternate !== null && R.delete(Q.key === null ? T : Q.key),
          (c = l(Q, c, T)),
          L === null ? (x = Q) : (L.sibling = Q),
          (L = Q));
    return (
      e &&
        R.forEach(function (ye) {
          return t(f, ye);
        }),
      te && on(f, T),
      x
    );
  }
  function y(f, c, m, d) {
    var x = ur(m);
    if (typeof x != "function") throw Error(E(150));
    if (((m = x.call(m)), m == null)) throw Error(E(151));
    for (
      var L = (x = null), R = c, T = (c = 0), Q = null, I = m.next();
      R !== null && !I.done;
      T++, I = m.next()
    ) {
      R.index > T ? ((Q = R), (R = null)) : (Q = R.sibling);
      var ye = h(f, R, I.value, d);
      if (ye === null) {
        R === null && (R = Q);
        break;
      }
      e && R && ye.alternate === null && t(f, R),
        (c = l(ye, c, T)),
        L === null ? (x = ye) : (L.sibling = ye),
        (L = ye),
        (R = Q);
    }
    if (I.done) return n(f, R), te && on(f, T), x;
    if (R === null) {
      for (; !I.done; T++, I = m.next())
        (I = v(f, I.value, d)),
          I !== null &&
            ((c = l(I, c, T)), L === null ? (x = I) : (L.sibling = I), (L = I));
      return te && on(f, T), x;
    }
    for (R = r(f, R); !I.done; T++, I = m.next())
      (I = k(R, f, T, I.value, d)),
        I !== null &&
          (e && I.alternate !== null && R.delete(I.key === null ? T : I.key),
          (c = l(I, c, T)),
          L === null ? (x = I) : (L.sibling = I),
          (L = I));
    return (
      e &&
        R.forEach(function (Y) {
          return t(f, Y);
        }),
      te && on(f, T),
      x
    );
  }
  function z(f, c, m, d) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === zn &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case co:
          e: {
            for (var x = m.key, L = c; L !== null; ) {
              if (L.key === x) {
                if (((x = m.type), x === zn)) {
                  if (L.tag === 7) {
                    n(f, L.sibling),
                      (c = o(L, m.props.children)),
                      (c.return = f),
                      (f = c);
                    break e;
                  }
                } else if (
                  L.elementType === x ||
                  (typeof x == "object" &&
                    x !== null &&
                    x.$$typeof === Ft &&
                    su(x) === L.type)
                ) {
                  n(f, L.sibling),
                    (c = o(L, m.props)),
                    (c.ref = mr(f, L, m)),
                    (c.return = f),
                    (f = c);
                  break e;
                }
                n(f, L);
                break;
              } else t(f, L);
              L = L.sibling;
            }
            m.type === zn
              ? ((c = fn(m.props.children, f.mode, d, m.key)),
                (c.return = f),
                (f = c))
              : ((d = Oo(m.type, m.key, m.props, null, f.mode, d)),
                (d.ref = mr(f, c, m)),
                (d.return = f),
                (f = d));
          }
          return i(f);
        case Pn:
          e: {
            for (L = m.key; c !== null; ) {
              if (c.key === L)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === m.containerInfo &&
                  c.stateNode.implementation === m.implementation
                ) {
                  n(f, c.sibling),
                    (c = o(c, m.children || [])),
                    (c.return = f),
                    (f = c);
                  break e;
                } else {
                  n(f, c);
                  break;
                }
              else t(f, c);
              c = c.sibling;
            }
            (c = ci(m, f.mode, d)), (c.return = f), (f = c);
          }
          return i(f);
        case Ft:
          return (L = m._init), z(f, c, L(m._payload), d);
      }
      if (Sr(m)) return w(f, c, m, d);
      if (ur(m)) return y(f, c, m, d);
      So(f, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        c !== null && c.tag === 6
          ? (n(f, c.sibling), (c = o(c, m)), (c.return = f), (f = c))
          : (n(f, c), (c = ui(m, f.mode, d)), (c.return = f), (f = c)),
        i(f))
      : n(f, c);
  }
  return z;
}
var Yn = fd(!0),
  pd = fd(!1),
  ro = {},
  mt = bt(ro),
  qr = bt(ro),
  $r = bt(ro);
function un(e) {
  if (e === ro) throw Error(E(174));
  return e;
}
function Ba(e, t) {
  switch ((Z($r, t), Z(qr, e), Z(mt, ro), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ei(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ei(t, e));
  }
  ee(mt), Z(mt, t);
}
function Xn() {
  ee(mt), ee(qr), ee($r);
}
function md(e) {
  un($r.current);
  var t = un(mt.current),
    n = Ei(t, e.type);
  t !== n && (Z(qr, e), Z(mt, n));
}
function Ha(e) {
  qr.current === e && (ee(mt), ee(qr));
}
var le = bt(0);
function tl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var ri = [];
function Wa() {
  for (var e = 0; e < ri.length; e++)
    ri[e]._workInProgressVersionPrimary = null;
  ri.length = 0;
}
var To = Rt.ReactCurrentDispatcher,
  oi = Rt.ReactCurrentBatchConfig,
  hn = 0,
  ie = null,
  ve = null,
  we = null,
  nl = !1,
  Nr = !1,
  Jr = 0,
  Nm = 0;
function Ce() {
  throw Error(E(321));
}
function Va(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!it(e[n], t[n])) return !1;
  return !0;
}
function Qa(e, t, n, r, o, l) {
  if (
    ((hn = l),
    (ie = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (To.current = e === null || e.memoizedState === null ? Dm : Am),
    (e = n(r, o)),
    Nr)
  ) {
    l = 0;
    do {
      if (((Nr = !1), (Jr = 0), 25 <= l)) throw Error(E(301));
      (l += 1),
        (we = ve = null),
        (t.updateQueue = null),
        (To.current = Fm),
        (e = n(r, o));
    } while (Nr);
  }
  if (
    ((To.current = rl),
    (t = ve !== null && ve.next !== null),
    (hn = 0),
    (we = ve = ie = null),
    (nl = !1),
    t)
  )
    throw Error(E(300));
  return e;
}
function Ka() {
  var e = Jr !== 0;
  return (Jr = 0), e;
}
function dt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return we === null ? (ie.memoizedState = we = e) : (we = we.next = e), we;
}
function Xe() {
  if (ve === null) {
    var e = ie.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ve.next;
  var t = we === null ? ie.memoizedState : we.next;
  if (t !== null) (we = t), (ve = e);
  else {
    if (e === null) throw Error(E(310));
    (ve = e),
      (e = {
        memoizedState: ve.memoizedState,
        baseState: ve.baseState,
        baseQueue: ve.baseQueue,
        queue: ve.queue,
        next: null,
      }),
      we === null ? (ie.memoizedState = we = e) : (we = we.next = e);
  }
  return we;
}
function Gr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function li(e) {
  var t = Xe(),
    n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = ve,
    o = r.baseQueue,
    l = n.pending;
  if (l !== null) {
    if (o !== null) {
      var i = o.next;
      (o.next = l.next), (l.next = i);
    }
    (r.baseQueue = o = l), (n.pending = null);
  }
  if (o !== null) {
    (l = o.next), (r = r.baseState);
    var a = (i = null),
      s = null,
      u = l;
    do {
      var p = u.lane;
      if ((hn & p) === p)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var v = {
          lane: p,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        s === null ? ((a = s = v), (i = r)) : (s = s.next = v),
          (ie.lanes |= p),
          (vn |= p);
      }
      u = u.next;
    } while (u !== null && u !== l);
    s === null ? (i = r) : (s.next = a),
      it(r, t.memoizedState) || (De = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (l = o.lane), (ie.lanes |= l), (vn |= l), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ii(e) {
  var t = Xe(),
    n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    l = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var i = (o = o.next);
    do (l = e(l, i.action)), (i = i.next);
    while (i !== o);
    it(l, t.memoizedState) || (De = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l);
  }
  return [l, r];
}
function hd() {}
function vd(e, t) {
  var n = ie,
    r = Xe(),
    o = t(),
    l = !it(r.memoizedState, o);
  if (
    (l && ((r.memoizedState = o), (De = !0)),
    (r = r.queue),
    qa(wd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || l || (we !== null && we.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Yr(9, yd.bind(null, n, r, o, t), void 0, null),
      je === null)
    )
      throw Error(E(349));
    hn & 30 || gd(n, t, o);
  }
  return o;
}
function gd(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ie.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ie.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function yd(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), jd(t) && kd(e);
}
function wd(e, t, n) {
  return n(function () {
    jd(t) && kd(e);
  });
}
function jd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !it(e, n);
  } catch {
    return !0;
  }
}
function kd(e) {
  var t = Pt(e, 1);
  t !== null && lt(t, e, 1, -1);
}
function uu(e) {
  var t = dt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Gr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Tm.bind(null, ie, e)),
    [t.memoizedState, e]
  );
}
function Yr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ie.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ie.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Sd() {
  return Xe().memoizedState;
}
function Do(e, t, n, r) {
  var o = dt();
  (ie.flags |= e),
    (o.memoizedState = Yr(1 | t, n, void 0, r === void 0 ? null : r));
}
function wl(e, t, n, r) {
  var o = Xe();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (ve !== null) {
    var i = ve.memoizedState;
    if (((l = i.destroy), r !== null && Va(r, i.deps))) {
      o.memoizedState = Yr(t, n, l, r);
      return;
    }
  }
  (ie.flags |= e), (o.memoizedState = Yr(1 | t, n, l, r));
}
function cu(e, t) {
  return Do(8390656, 8, e, t);
}
function qa(e, t) {
  return wl(2048, 8, e, t);
}
function xd(e, t) {
  return wl(4, 2, e, t);
}
function Ed(e, t) {
  return wl(4, 4, e, t);
}
function Cd(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Pd(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), wl(4, 4, Cd.bind(null, t, e), n)
  );
}
function $a() {}
function zd(e, t) {
  var n = Xe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Va(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Rd(e, t) {
  var n = Xe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Va(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Ld(e, t, n) {
  return hn & 21
    ? (it(n, t) || ((n = Mc()), (ie.lanes |= n), (vn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (De = !0)), (e.memoizedState = n));
}
function _m(e, t) {
  var n = $;
  ($ = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = oi.transition;
  oi.transition = {};
  try {
    e(!1), t();
  } finally {
    ($ = n), (oi.transition = r);
  }
}
function Nd() {
  return Xe().memoizedState;
}
function Mm(e, t, n) {
  var r = Jt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    _d(e))
  )
    Md(t, n);
  else if (((n = sd(e, t, n, r)), n !== null)) {
    var o = Ne();
    lt(n, e, r, o), Td(n, t, r);
  }
}
function Tm(e, t, n) {
  var r = Jt(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (_d(e)) Md(t, o);
  else {
    var l = e.alternate;
    if (
      e.lanes === 0 &&
      (l === null || l.lanes === 0) &&
      ((l = t.lastRenderedReducer), l !== null)
    )
      try {
        var i = t.lastRenderedState,
          a = l(i, n);
        if (((o.hasEagerState = !0), (o.eagerState = a), it(a, i))) {
          var s = t.interleaved;
          s === null
            ? ((o.next = o), Oa(t))
            : ((o.next = s.next), (s.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = sd(e, t, o, r)),
      n !== null && ((o = Ne()), lt(n, e, r, o), Td(n, t, r));
  }
}
function _d(e) {
  var t = e.alternate;
  return e === ie || (t !== null && t === ie);
}
function Md(e, t) {
  Nr = nl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Td(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ea(e, n);
  }
}
var rl = {
    readContext: Ye,
    useCallback: Ce,
    useContext: Ce,
    useEffect: Ce,
    useImperativeHandle: Ce,
    useInsertionEffect: Ce,
    useLayoutEffect: Ce,
    useMemo: Ce,
    useReducer: Ce,
    useRef: Ce,
    useState: Ce,
    useDebugValue: Ce,
    useDeferredValue: Ce,
    useTransition: Ce,
    useMutableSource: Ce,
    useSyncExternalStore: Ce,
    useId: Ce,
    unstable_isNewReconciler: !1,
  },
  Dm = {
    readContext: Ye,
    useCallback: function (e, t) {
      return (dt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ye,
    useEffect: cu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Do(4194308, 4, Cd.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Do(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Do(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = dt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = dt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Mm.bind(null, ie, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = dt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: uu,
    useDebugValue: $a,
    useDeferredValue: function (e) {
      return (dt().memoizedState = e);
    },
    useTransition: function () {
      var e = uu(!1),
        t = e[0];
      return (e = _m.bind(null, e[1])), (dt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ie,
        o = dt();
      if (te) {
        if (n === void 0) throw Error(E(407));
        n = n();
      } else {
        if (((n = t()), je === null)) throw Error(E(349));
        hn & 30 || gd(r, t, n);
      }
      o.memoizedState = n;
      var l = { value: n, getSnapshot: t };
      return (
        (o.queue = l),
        cu(wd.bind(null, r, l, e), [e]),
        (r.flags |= 2048),
        Yr(9, yd.bind(null, r, l, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = dt(),
        t = je.identifierPrefix;
      if (te) {
        var n = kt,
          r = jt;
        (n = (r & ~(1 << (32 - ot(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Jr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Nm++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Am = {
    readContext: Ye,
    useCallback: zd,
    useContext: Ye,
    useEffect: qa,
    useImperativeHandle: Pd,
    useInsertionEffect: xd,
    useLayoutEffect: Ed,
    useMemo: Rd,
    useReducer: li,
    useRef: Sd,
    useState: function () {
      return li(Gr);
    },
    useDebugValue: $a,
    useDeferredValue: function (e) {
      var t = Xe();
      return Ld(t, ve.memoizedState, e);
    },
    useTransition: function () {
      var e = li(Gr)[0],
        t = Xe().memoizedState;
      return [e, t];
    },
    useMutableSource: hd,
    useSyncExternalStore: vd,
    useId: Nd,
    unstable_isNewReconciler: !1,
  },
  Fm = {
    readContext: Ye,
    useCallback: zd,
    useContext: Ye,
    useEffect: qa,
    useImperativeHandle: Pd,
    useInsertionEffect: xd,
    useLayoutEffect: Ed,
    useMemo: Rd,
    useReducer: ii,
    useRef: Sd,
    useState: function () {
      return ii(Gr);
    },
    useDebugValue: $a,
    useDeferredValue: function (e) {
      var t = Xe();
      return ve === null ? (t.memoizedState = e) : Ld(t, ve.memoizedState, e);
    },
    useTransition: function () {
      var e = ii(Gr)[0],
        t = Xe().memoizedState;
      return [e, t];
    },
    useMutableSource: hd,
    useSyncExternalStore: vd,
    useId: Nd,
    unstable_isNewReconciler: !1,
  };
function Zn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += cp(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (l) {
    o =
      `
Error generating stack: ` +
      l.message +
      `
` +
      l.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function ai(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function $i(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Im = typeof WeakMap == "function" ? WeakMap : Map;
function Dd(e, t, n) {
  (n = St(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ll || ((ll = !0), (ra = r)), $i(e, t);
    }),
    n
  );
}
function Ad(e, t, n) {
  (n = St(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        $i(e, t);
      });
  }
  var l = e.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == "function" &&
      (n.callback = function () {
        $i(e, t),
          typeof r != "function" &&
            ($t === null ? ($t = new Set([this])) : $t.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function du(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Im();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = Xm.bind(null, e, t, n)), t.then(e, e));
}
function fu(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function pu(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = St(-1, 1)), (t.tag = 2), qt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Om = Rt.ReactCurrentOwner,
  De = !1;
function Le(e, t, n, r) {
  t.child = e === null ? pd(t, null, n, r) : Yn(t, e.child, n, r);
}
function mu(e, t, n, r, o) {
  n = n.render;
  var l = t.ref;
  return (
    Qn(t, o),
    (r = Qa(e, t, n, r, l, o)),
    (n = Ka()),
    e !== null && !De
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        zt(e, t, o))
      : (te && n && Ma(t), (t.flags |= 1), Le(e, t, r, o), t.child)
  );
}
function hu(e, t, n, r, o) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" &&
      !ts(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), Fd(e, t, l, r, o))
      : ((e = Oo(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((l = e.child), !(e.lanes & o))) {
    var i = l.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Wr), n(i, r) && e.ref === t.ref)
    )
      return zt(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Gt(l, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Fd(e, t, n, r, o) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (Wr(l, r) && e.ref === t.ref)
      if (((De = !1), (t.pendingProps = r = l), (e.lanes & o) !== 0))
        e.flags & 131072 && (De = !0);
      else return (t.lanes = e.lanes), zt(e, t, o);
  }
  return Ji(e, t, n, r, o);
}
function Id(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Z(In, Ue),
        (Ue |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = l !== null ? l.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Z(In, Ue),
          (Ue |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = l !== null ? l.baseLanes : n),
        Z(In, Ue),
        (Ue |= r);
    }
  else
    l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Z(In, Ue),
      (Ue |= r);
  return Le(e, t, o, n), t.child;
}
function Od(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ji(e, t, n, r, o) {
  var l = Fe(n) ? pn : Re.current;
  return (
    (l = Jn(t, l)),
    Qn(t, o),
    (n = Qa(e, t, n, r, l, o)),
    (r = Ka()),
    e !== null && !De
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        zt(e, t, o))
      : (te && r && Ma(t), (t.flags |= 1), Le(e, t, n, o), t.child)
  );
}
function vu(e, t, n, r, o) {
  if (Fe(n)) {
    var l = !0;
    Go(t);
  } else l = !1;
  if ((Qn(t, o), t.stateNode === null))
    Ao(e, t), dd(t, n, r), qi(t, n, r, o), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      a = t.memoizedProps;
    i.props = a;
    var s = i.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Ye(u))
      : ((u = Fe(n) ? pn : Re.current), (u = Jn(t, u)));
    var p = n.getDerivedStateFromProps,
      v =
        typeof p == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    v ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== r || s !== u) && au(t, i, r, u)),
      (It = !1);
    var h = t.memoizedState;
    (i.state = h),
      el(t, r, i, o),
      (s = t.memoizedState),
      a !== r || h !== s || Ae.current || It
        ? (typeof p == "function" && (Ki(t, n, p, r), (s = t.memoizedState)),
          (a = It || iu(t, n, a, r, h, s, u))
            ? (v ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (i.props = r),
          (i.state = s),
          (i.context = u),
          (r = a))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      ud(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : et(t.type, a)),
      (i.props = u),
      (v = t.pendingProps),
      (h = i.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = Ye(s))
        : ((s = Fe(n) ? pn : Re.current), (s = Jn(t, s)));
    var k = n.getDerivedStateFromProps;
    (p =
      typeof k == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== v || h !== s) && au(t, i, r, s)),
      (It = !1),
      (h = t.memoizedState),
      (i.state = h),
      el(t, r, i, o);
    var w = t.memoizedState;
    a !== v || h !== w || Ae.current || It
      ? (typeof k == "function" && (Ki(t, n, k, r), (w = t.memoizedState)),
        (u = It || iu(t, n, u, r, h, w, s) || !1)
          ? (p ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, w, s),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, w, s)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (i.props = r),
        (i.state = w),
        (i.context = s),
        (r = u))
      : (typeof i.componentDidUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Gi(e, t, n, r, l, o);
}
function Gi(e, t, n, r, o, l) {
  Od(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return o && tu(t, n, !1), zt(e, t, l);
  (r = t.stateNode), (Om.current = t);
  var a =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = Yn(t, e.child, null, l)), (t.child = Yn(t, null, a, l)))
      : Le(e, t, a, l),
    (t.memoizedState = r.state),
    o && tu(t, n, !0),
    t.child
  );
}
function Ud(e) {
  var t = e.stateNode;
  t.pendingContext
    ? eu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && eu(e, t.context, !1),
    Ba(e, t.containerInfo);
}
function gu(e, t, n, r, o) {
  return Gn(), Da(o), (t.flags |= 256), Le(e, t, n, r), t.child;
}
var Yi = { dehydrated: null, treeContext: null, retryLane: 0 };
function Xi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Bd(e, t, n) {
  var r = t.pendingProps,
    o = le.current,
    l = !1,
    i = (t.flags & 128) !== 0,
    a;
  if (
    ((a = i) ||
      (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a
      ? ((l = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    Z(le, o & 1),
    e === null)
  )
    return (
      Vi(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          l
            ? ((r = t.mode),
              (l = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && l !== null
                ? ((l.childLanes = 0), (l.pendingProps = i))
                : (l = Sl(i, r, 0, null)),
              (e = fn(e, r, n, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = Xi(n)),
              (t.memoizedState = Yi),
              e)
            : Ja(t, i))
    );
  if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
    return Um(e, t, i, r, a, o, n);
  if (l) {
    (l = r.fallback), (i = t.mode), (o = e.child), (a = o.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = Gt(o, s)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      a !== null ? (l = Gt(a, l)) : ((l = fn(l, i, n, null)), (l.flags |= 2)),
      (l.return = t),
      (r.return = t),
      (r.sibling = l),
      (t.child = r),
      (r = l),
      (l = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Xi(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (l.memoizedState = i),
      (l.childLanes = e.childLanes & ~n),
      (t.memoizedState = Yi),
      r
    );
  }
  return (
    (l = e.child),
    (e = l.sibling),
    (r = Gt(l, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Ja(e, t) {
  return (
    (t = Sl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function xo(e, t, n, r) {
  return (
    r !== null && Da(r),
    Yn(t, e.child, null, n),
    (e = Ja(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Um(e, t, n, r, o, l, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ai(Error(E(422)))), xo(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((l = r.fallback),
        (o = t.mode),
        (r = Sl({ mode: "visible", children: r.children }, o, 0, null)),
        (l = fn(l, o, i, null)),
        (l.flags |= 2),
        (r.return = t),
        (l.return = t),
        (r.sibling = l),
        (t.child = r),
        t.mode & 1 && Yn(t, e.child, null, i),
        (t.child.memoizedState = Xi(i)),
        (t.memoizedState = Yi),
        l);
  if (!(t.mode & 1)) return xo(e, t, i, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (l = Error(E(419))), (r = ai(l, r, void 0)), xo(e, t, i, r);
  }
  if (((a = (i & e.childLanes) !== 0), De || a)) {
    if (((r = je), r !== null)) {
      switch (i & -i) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | i) ? 0 : o),
        o !== 0 &&
          o !== l.retryLane &&
          ((l.retryLane = o), Pt(e, o), lt(r, e, o, -1));
    }
    return es(), (r = ai(Error(E(421)))), xo(e, t, i, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Zm.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = l.treeContext),
      (Be = Kt(o.nextSibling)),
      (He = t),
      (te = !0),
      (rt = null),
      e !== null &&
        ((qe[$e++] = jt),
        (qe[$e++] = kt),
        (qe[$e++] = mn),
        (jt = e.id),
        (kt = e.overflow),
        (mn = t)),
      (t = Ja(t, r.children)),
      (t.flags |= 4096),
      t);
}
function yu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Qi(e.return, t, n);
}
function si(e, t, n, r, o) {
  var l = e.memoizedState;
  l === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((l.isBackwards = t),
      (l.rendering = null),
      (l.renderingStartTime = 0),
      (l.last = r),
      (l.tail = n),
      (l.tailMode = o));
}
function Hd(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    l = r.tail;
  if ((Le(e, t, r.children, n), (r = le.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && yu(e, n, t);
        else if (e.tag === 19) yu(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((Z(le, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && tl(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          si(t, !1, o, n, l);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && tl(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        si(t, !0, n, null, l);
        break;
      case "together":
        si(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ao(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function zt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (vn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(E(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Gt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Gt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Bm(e, t, n) {
  switch (t.tag) {
    case 3:
      Ud(t), Gn();
      break;
    case 5:
      md(t);
      break;
    case 1:
      Fe(t.type) && Go(t);
      break;
    case 4:
      Ba(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      Z(Zo, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Z(le, le.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Bd(e, t, n)
          : (Z(le, le.current & 1),
            (e = zt(e, t, n)),
            e !== null ? e.sibling : null);
      Z(le, le.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Hd(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        Z(le, le.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Id(e, t, n);
  }
  return zt(e, t, n);
}
var Wd, Zi, Vd, Qd;
Wd = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Zi = function () {};
Vd = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), un(mt.current);
    var l = null;
    switch (n) {
      case "input":
        (o = ji(e, o)), (r = ji(e, r)), (l = []);
        break;
      case "select":
        (o = ae({}, o, { value: void 0 })),
          (r = ae({}, r, { value: void 0 })),
          (l = []);
        break;
      case "textarea":
        (o = xi(e, o)), (r = xi(e, r)), (l = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = $o);
    }
    Ci(n, r);
    var i;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var a = o[u];
          for (i in a) a.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Ar.hasOwnProperty(u)
              ? l || (l = [])
              : (l = l || []).push(u, null));
    for (u in r) {
      var s = r[u];
      if (
        ((a = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && s !== a && (s != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (i in a)
              !a.hasOwnProperty(i) ||
                (s && s.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in s)
              s.hasOwnProperty(i) &&
                a[i] !== s[i] &&
                (n || (n = {}), (n[i] = s[i]));
          } else n || (l || (l = []), l.push(u, n)), (n = s);
        else
          u === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (a = a ? a.__html : void 0),
              s != null && a !== s && (l = l || []).push(u, s))
            : u === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (l = l || []).push(u, "" + s)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Ar.hasOwnProperty(u)
                ? (s != null && u === "onScroll" && b("scroll", e),
                  l || a === s || (l = []))
                : (l = l || []).push(u, s));
    }
    n && (l = l || []).push("style", n);
    var u = l;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Qd = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function hr(e, t) {
  if (!te)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Pe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Hm(e, t, n) {
  var r = t.pendingProps;
  switch ((Ta(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Pe(t), null;
    case 1:
      return Fe(t.type) && Jo(), Pe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Xn(),
        ee(Ae),
        ee(Re),
        Wa(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (ko(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), rt !== null && (ia(rt), (rt = null)))),
        Zi(e, t),
        Pe(t),
        null
      );
    case 5:
      Ha(t);
      var o = un($r.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Vd(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(E(166));
          return Pe(t), null;
        }
        if (((e = un(mt.current)), ko(t))) {
          (r = t.stateNode), (n = t.type);
          var l = t.memoizedProps;
          switch (((r[ft] = t), (r[Kr] = l), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              b("cancel", r), b("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              b("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Er.length; o++) b(Er[o], r);
              break;
            case "source":
              b("error", r);
              break;
            case "img":
            case "image":
            case "link":
              b("error", r), b("load", r);
              break;
            case "details":
              b("toggle", r);
              break;
            case "input":
              zs(r, l), b("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!l.multiple }),
                b("invalid", r);
              break;
            case "textarea":
              Ls(r, l), b("invalid", r);
          }
          Ci(n, l), (o = null);
          for (var i in l)
            if (l.hasOwnProperty(i)) {
              var a = l[i];
              i === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (l.suppressHydrationWarning !== !0 &&
                      jo(r.textContent, a, e),
                    (o = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (l.suppressHydrationWarning !== !0 &&
                      jo(r.textContent, a, e),
                    (o = ["children", "" + a]))
                : Ar.hasOwnProperty(i) &&
                  a != null &&
                  i === "onScroll" &&
                  b("scroll", r);
            }
          switch (n) {
            case "input":
              fo(r), Rs(r, l, !0);
              break;
            case "textarea":
              fo(r), Ns(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = $o);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = gc(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[ft] = t),
            (e[Kr] = r),
            Wd(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = Pi(n, r)), n)) {
              case "dialog":
                b("cancel", e), b("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                b("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Er.length; o++) b(Er[o], e);
                o = r;
                break;
              case "source":
                b("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                b("error", e), b("load", e), (o = r);
                break;
              case "details":
                b("toggle", e), (o = r);
                break;
              case "input":
                zs(e, r), (o = ji(e, r)), b("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = ae({}, r, { value: void 0 })),
                  b("invalid", e);
                break;
              case "textarea":
                Ls(e, r), (o = xi(e, r)), b("invalid", e);
                break;
              default:
                o = r;
            }
            Ci(n, o), (a = o);
            for (l in a)
              if (a.hasOwnProperty(l)) {
                var s = a[l];
                l === "style"
                  ? jc(e, s)
                  : l === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && yc(e, s))
                  : l === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && Fr(e, s)
                    : typeof s == "number" && Fr(e, "" + s)
                  : l !== "suppressContentEditableWarning" &&
                    l !== "suppressHydrationWarning" &&
                    l !== "autoFocus" &&
                    (Ar.hasOwnProperty(l)
                      ? s != null && l === "onScroll" && b("scroll", e)
                      : s != null && ya(e, l, s, i));
              }
            switch (n) {
              case "input":
                fo(e), Rs(e, r, !1);
                break;
              case "textarea":
                fo(e), Ns(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Yt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (l = r.value),
                  l != null
                    ? Bn(e, !!r.multiple, l, !1)
                    : r.defaultValue != null &&
                      Bn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = $o);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Pe(t), null;
    case 6:
      if (e && t.stateNode != null) Qd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(E(166));
        if (((n = un($r.current)), un(mt.current), ko(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[ft] = t),
            (l = r.nodeValue !== n) && ((e = He), e !== null))
          )
            switch (e.tag) {
              case 3:
                jo(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  jo(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[ft] = t),
            (t.stateNode = r);
      }
      return Pe(t), null;
    case 13:
      if (
        (ee(le),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (te && Be !== null && t.mode & 1 && !(t.flags & 128))
          ad(), Gn(), (t.flags |= 98560), (l = !1);
        else if (((l = ko(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(E(318));
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(E(317));
            l[ft] = t;
          } else
            Gn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Pe(t), (l = !1);
        } else rt !== null && (ia(rt), (rt = null)), (l = !0);
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || le.current & 1 ? ge === 0 && (ge = 3) : es())),
          t.updateQueue !== null && (t.flags |= 4),
          Pe(t),
          null);
    case 4:
      return (
        Xn(), Zi(e, t), e === null && Vr(t.stateNode.containerInfo), Pe(t), null
      );
    case 10:
      return Ia(t.type._context), Pe(t), null;
    case 17:
      return Fe(t.type) && Jo(), Pe(t), null;
    case 19:
      if ((ee(le), (l = t.memoizedState), l === null)) return Pe(t), null;
      if (((r = (t.flags & 128) !== 0), (i = l.rendering), i === null))
        if (r) hr(l, !1);
        else {
          if (ge !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = tl(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    hr(l, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (l = n),
                    (e = r),
                    (l.flags &= 14680066),
                    (i = l.alternate),
                    i === null
                      ? ((l.childLanes = 0),
                        (l.lanes = e),
                        (l.child = null),
                        (l.subtreeFlags = 0),
                        (l.memoizedProps = null),
                        (l.memoizedState = null),
                        (l.updateQueue = null),
                        (l.dependencies = null),
                        (l.stateNode = null))
                      : ((l.childLanes = i.childLanes),
                        (l.lanes = i.lanes),
                        (l.child = i.child),
                        (l.subtreeFlags = 0),
                        (l.deletions = null),
                        (l.memoizedProps = i.memoizedProps),
                        (l.memoizedState = i.memoizedState),
                        (l.updateQueue = i.updateQueue),
                        (l.type = i.type),
                        (e = i.dependencies),
                        (l.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return Z(le, (le.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          l.tail !== null &&
            de() > bn &&
            ((t.flags |= 128), (r = !0), hr(l, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = tl(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              hr(l, !0),
              l.tail === null && l.tailMode === "hidden" && !i.alternate && !te)
            )
              return Pe(t), null;
          } else
            2 * de() - l.renderingStartTime > bn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), hr(l, !1), (t.lanes = 4194304));
        l.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = l.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (l.last = i));
      }
      return l.tail !== null
        ? ((t = l.tail),
          (l.rendering = t),
          (l.tail = t.sibling),
          (l.renderingStartTime = de()),
          (t.sibling = null),
          (n = le.current),
          Z(le, r ? (n & 1) | 2 : n & 1),
          t)
        : (Pe(t), null);
    case 22:
    case 23:
      return (
        ba(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ue & 1073741824 && (Pe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Pe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(E(156, t.tag));
}
function Wm(e, t) {
  switch ((Ta(t), t.tag)) {
    case 1:
      return (
        Fe(t.type) && Jo(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Xn(),
        ee(Ae),
        ee(Re),
        Wa(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ha(t), null;
    case 13:
      if (
        (ee(le), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(E(340));
        Gn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ee(le), null;
    case 4:
      return Xn(), null;
    case 10:
      return Ia(t.type._context), null;
    case 22:
    case 23:
      return ba(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Eo = !1,
  ze = !1,
  Vm = typeof WeakSet == "function" ? WeakSet : Set,
  M = null;
function Fn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        se(e, t, r);
      }
    else n.current = null;
}
function bi(e, t, n) {
  try {
    n();
  } catch (r) {
    se(e, t, r);
  }
}
var wu = !1;
function Qm(e, t) {
  if (((Fi = Qo), (e = Jc()), _a(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            l = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, l.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            a = -1,
            s = -1,
            u = 0,
            p = 0,
            v = e,
            h = null;
          t: for (;;) {
            for (
              var k;
              v !== n || (o !== 0 && v.nodeType !== 3) || (a = i + o),
                v !== l || (r !== 0 && v.nodeType !== 3) || (s = i + r),
                v.nodeType === 3 && (i += v.nodeValue.length),
                (k = v.firstChild) !== null;

            )
              (h = v), (v = k);
            for (;;) {
              if (v === e) break t;
              if (
                (h === n && ++u === o && (a = i),
                h === l && ++p === r && (s = i),
                (k = v.nextSibling) !== null)
              )
                break;
              (v = h), (h = v.parentNode);
            }
            v = k;
          }
          n = a === -1 || s === -1 ? null : { start: a, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ii = { focusedElem: e, selectionRange: n }, Qo = !1, M = t; M !== null; )
    if (((t = M), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (M = e);
    else
      for (; M !== null; ) {
        t = M;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var y = w.memoizedProps,
                    z = w.memoizedState,
                    f = t.stateNode,
                    c = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : et(t.type, y),
                      z
                    );
                  f.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(E(163));
            }
        } catch (d) {
          se(t, t.return, d);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (M = e);
          break;
        }
        M = t.return;
      }
  return (w = wu), (wu = !1), w;
}
function _r(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var l = o.destroy;
        (o.destroy = void 0), l !== void 0 && bi(t, n, l);
      }
      o = o.next;
    } while (o !== r);
  }
}
function jl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function ea(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Kd(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Kd(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[ft], delete t[Kr], delete t[Bi], delete t[Pm], delete t[zm])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function qd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ju(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || qd(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ta(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = $o));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ta(e, t, n), e = e.sibling; e !== null; ) ta(e, t, n), (e = e.sibling);
}
function na(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (na(e, t, n), e = e.sibling; e !== null; ) na(e, t, n), (e = e.sibling);
}
var ke = null,
  tt = !1;
function At(e, t, n) {
  for (n = n.child; n !== null; ) $d(e, t, n), (n = n.sibling);
}
function $d(e, t, n) {
  if (pt && typeof pt.onCommitFiberUnmount == "function")
    try {
      pt.onCommitFiberUnmount(fl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ze || Fn(n, t);
    case 6:
      var r = ke,
        o = tt;
      (ke = null),
        At(e, t, n),
        (ke = r),
        (tt = o),
        ke !== null &&
          (tt
            ? ((e = ke),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ke.removeChild(n.stateNode));
      break;
    case 18:
      ke !== null &&
        (tt
          ? ((e = ke),
            (n = n.stateNode),
            e.nodeType === 8
              ? ti(e.parentNode, n)
              : e.nodeType === 1 && ti(e, n),
            Br(e))
          : ti(ke, n.stateNode));
      break;
    case 4:
      (r = ke),
        (o = tt),
        (ke = n.stateNode.containerInfo),
        (tt = !0),
        At(e, t, n),
        (ke = r),
        (tt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ze &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var l = o,
            i = l.destroy;
          (l = l.tag),
            i !== void 0 && (l & 2 || l & 4) && bi(n, t, i),
            (o = o.next);
        } while (o !== r);
      }
      At(e, t, n);
      break;
    case 1:
      if (
        !ze &&
        (Fn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          se(n, t, a);
        }
      At(e, t, n);
      break;
    case 21:
      At(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ze = (r = ze) || n.memoizedState !== null), At(e, t, n), (ze = r))
        : At(e, t, n);
      break;
    default:
      At(e, t, n);
  }
}
function ku(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Vm()),
      t.forEach(function (r) {
        var o = bm.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function be(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var l = e,
          i = t,
          a = i;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (ke = a.stateNode), (tt = !1);
              break e;
            case 3:
              (ke = a.stateNode.containerInfo), (tt = !0);
              break e;
            case 4:
              (ke = a.stateNode.containerInfo), (tt = !0);
              break e;
          }
          a = a.return;
        }
        if (ke === null) throw Error(E(160));
        $d(l, i, o), (ke = null), (tt = !1);
        var s = o.alternate;
        s !== null && (s.return = null), (o.return = null);
      } catch (u) {
        se(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Jd(t, e), (t = t.sibling);
}
function Jd(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((be(t, e), ct(e), r & 4)) {
        try {
          _r(3, e, e.return), jl(3, e);
        } catch (y) {
          se(e, e.return, y);
        }
        try {
          _r(5, e, e.return);
        } catch (y) {
          se(e, e.return, y);
        }
      }
      break;
    case 1:
      be(t, e), ct(e), r & 512 && n !== null && Fn(n, n.return);
      break;
    case 5:
      if (
        (be(t, e),
        ct(e),
        r & 512 && n !== null && Fn(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Fr(o, "");
        } catch (y) {
          se(e, e.return, y);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var l = e.memoizedProps,
          i = n !== null ? n.memoizedProps : l,
          a = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            a === "input" && l.type === "radio" && l.name != null && hc(o, l),
              Pi(a, i);
            var u = Pi(a, l);
            for (i = 0; i < s.length; i += 2) {
              var p = s[i],
                v = s[i + 1];
              p === "style"
                ? jc(o, v)
                : p === "dangerouslySetInnerHTML"
                ? yc(o, v)
                : p === "children"
                ? Fr(o, v)
                : ya(o, p, v, u);
            }
            switch (a) {
              case "input":
                ki(o, l);
                break;
              case "textarea":
                vc(o, l);
                break;
              case "select":
                var h = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!l.multiple;
                var k = l.value;
                k != null
                  ? Bn(o, !!l.multiple, k, !1)
                  : h !== !!l.multiple &&
                    (l.defaultValue != null
                      ? Bn(o, !!l.multiple, l.defaultValue, !0)
                      : Bn(o, !!l.multiple, l.multiple ? [] : "", !1));
            }
            o[Kr] = l;
          } catch (y) {
            se(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((be(t, e), ct(e), r & 4)) {
        if (e.stateNode === null) throw Error(E(162));
        (o = e.stateNode), (l = e.memoizedProps);
        try {
          o.nodeValue = l;
        } catch (y) {
          se(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (be(t, e), ct(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Br(t.containerInfo);
        } catch (y) {
          se(e, e.return, y);
        }
      break;
    case 4:
      be(t, e), ct(e);
      break;
    case 13:
      be(t, e),
        ct(e),
        (o = e.child),
        o.flags & 8192 &&
          ((l = o.memoizedState !== null),
          (o.stateNode.isHidden = l),
          !l ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Xa = de())),
        r & 4 && ku(e);
      break;
    case 22:
      if (
        ((p = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ze = (u = ze) || p), be(t, e), (ze = u)) : be(t, e),
        ct(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !p && e.mode & 1)
        )
          for (M = e, p = e.child; p !== null; ) {
            for (v = M = p; M !== null; ) {
              switch (((h = M), (k = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  _r(4, h, h.return);
                  break;
                case 1:
                  Fn(h, h.return);
                  var w = h.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (y) {
                      se(r, n, y);
                    }
                  }
                  break;
                case 5:
                  Fn(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    xu(v);
                    continue;
                  }
              }
              k !== null ? ((k.return = h), (M = k)) : xu(v);
            }
            p = p.sibling;
          }
        e: for (p = null, v = e; ; ) {
          if (v.tag === 5) {
            if (p === null) {
              p = v;
              try {
                (o = v.stateNode),
                  u
                    ? ((l = o.style),
                      typeof l.setProperty == "function"
                        ? l.setProperty("display", "none", "important")
                        : (l.display = "none"))
                    : ((a = v.stateNode),
                      (s = v.memoizedProps.style),
                      (i =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (a.style.display = wc("display", i)));
              } catch (y) {
                se(e, e.return, y);
              }
            }
          } else if (v.tag === 6) {
            if (p === null)
              try {
                v.stateNode.nodeValue = u ? "" : v.memoizedProps;
              } catch (y) {
                se(e, e.return, y);
              }
          } else if (
            ((v.tag !== 22 && v.tag !== 23) ||
              v.memoizedState === null ||
              v === e) &&
            v.child !== null
          ) {
            (v.child.return = v), (v = v.child);
            continue;
          }
          if (v === e) break e;
          for (; v.sibling === null; ) {
            if (v.return === null || v.return === e) break e;
            p === v && (p = null), (v = v.return);
          }
          p === v && (p = null), (v.sibling.return = v.return), (v = v.sibling);
        }
      }
      break;
    case 19:
      be(t, e), ct(e), r & 4 && ku(e);
      break;
    case 21:
      break;
    default:
      be(t, e), ct(e);
  }
}
function ct(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (qd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(E(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Fr(o, ""), (r.flags &= -33));
          var l = ju(e);
          na(e, l, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            a = ju(e);
          ta(e, a, i);
          break;
        default:
          throw Error(E(161));
      }
    } catch (s) {
      se(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Km(e, t, n) {
  (M = e), Gd(e);
}
function Gd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; M !== null; ) {
    var o = M,
      l = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || Eo;
      if (!i) {
        var a = o.alternate,
          s = (a !== null && a.memoizedState !== null) || ze;
        a = Eo;
        var u = ze;
        if (((Eo = i), (ze = s) && !u))
          for (M = o; M !== null; )
            (i = M),
              (s = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Eu(o)
                : s !== null
                ? ((s.return = i), (M = s))
                : Eu(o);
        for (; l !== null; ) (M = l), Gd(l), (l = l.sibling);
        (M = o), (Eo = a), (ze = u);
      }
      Su(e);
    } else
      o.subtreeFlags & 8772 && l !== null ? ((l.return = o), (M = l)) : Su(e);
  }
}
function Su(e) {
  for (; M !== null; ) {
    var t = M;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ze || jl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ze)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : et(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var l = t.updateQueue;
              l !== null && lu(t, l, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                lu(t, i, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var p = u.memoizedState;
                  if (p !== null) {
                    var v = p.dehydrated;
                    v !== null && Br(v);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(E(163));
          }
        ze || (t.flags & 512 && ea(t));
      } catch (h) {
        se(t, t.return, h);
      }
    }
    if (t === e) {
      M = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (M = n);
      break;
    }
    M = t.return;
  }
}
function xu(e) {
  for (; M !== null; ) {
    var t = M;
    if (t === e) {
      M = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (M = n);
      break;
    }
    M = t.return;
  }
}
function Eu(e) {
  for (; M !== null; ) {
    var t = M;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            jl(4, t);
          } catch (s) {
            se(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              se(t, o, s);
            }
          }
          var l = t.return;
          try {
            ea(t);
          } catch (s) {
            se(t, l, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            ea(t);
          } catch (s) {
            se(t, i, s);
          }
      }
    } catch (s) {
      se(t, t.return, s);
    }
    if (t === e) {
      M = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (M = a);
      break;
    }
    M = t.return;
  }
}
var qm = Math.ceil,
  ol = Rt.ReactCurrentDispatcher,
  Ga = Rt.ReactCurrentOwner,
  Ge = Rt.ReactCurrentBatchConfig,
  K = 0,
  je = null,
  me = null,
  Se = 0,
  Ue = 0,
  In = bt(0),
  ge = 0,
  Xr = null,
  vn = 0,
  kl = 0,
  Ya = 0,
  Mr = null,
  Te = null,
  Xa = 0,
  bn = 1 / 0,
  yt = null,
  ll = !1,
  ra = null,
  $t = null,
  Co = !1,
  Ht = null,
  il = 0,
  Tr = 0,
  oa = null,
  Fo = -1,
  Io = 0;
function Ne() {
  return K & 6 ? de() : Fo !== -1 ? Fo : (Fo = de());
}
function Jt(e) {
  return e.mode & 1
    ? K & 2 && Se !== 0
      ? Se & -Se
      : Lm.transition !== null
      ? (Io === 0 && (Io = Mc()), Io)
      : ((e = $),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Uc(e.type))),
        e)
    : 1;
}
function lt(e, t, n, r) {
  if (50 < Tr) throw ((Tr = 0), (oa = null), Error(E(185)));
  eo(e, n, r),
    (!(K & 2) || e !== je) &&
      (e === je && (!(K & 2) && (kl |= n), ge === 4 && Ut(e, Se)),
      Ie(e, r),
      n === 1 && K === 0 && !(t.mode & 1) && ((bn = de() + 500), gl && en()));
}
function Ie(e, t) {
  var n = e.callbackNode;
  Lp(e, t);
  var r = Vo(e, e === je ? Se : 0);
  if (r === 0)
    n !== null && Ts(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ts(n), t === 1))
      e.tag === 0 ? Rm(Cu.bind(null, e)) : od(Cu.bind(null, e)),
        Em(function () {
          !(K & 6) && en();
        }),
        (n = null);
    else {
      switch (Tc(r)) {
        case 1:
          n = xa;
          break;
        case 4:
          n = Nc;
          break;
        case 16:
          n = Wo;
          break;
        case 536870912:
          n = _c;
          break;
        default:
          n = Wo;
      }
      n = rf(n, Yd.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Yd(e, t) {
  if (((Fo = -1), (Io = 0), K & 6)) throw Error(E(327));
  var n = e.callbackNode;
  if (Kn() && e.callbackNode !== n) return null;
  var r = Vo(e, e === je ? Se : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = al(e, r);
  else {
    t = r;
    var o = K;
    K |= 2;
    var l = Zd();
    (je !== e || Se !== t) && ((yt = null), (bn = de() + 500), dn(e, t));
    do
      try {
        Gm();
        break;
      } catch (a) {
        Xd(e, a);
      }
    while (1);
    Fa(),
      (ol.current = l),
      (K = o),
      me !== null ? (t = 0) : ((je = null), (Se = 0), (t = ge));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = _i(e)), o !== 0 && ((r = o), (t = la(e, o)))), t === 1)
    )
      throw ((n = Xr), dn(e, 0), Ut(e, r), Ie(e, de()), n);
    if (t === 6) Ut(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !$m(o) &&
          ((t = al(e, r)),
          t === 2 && ((l = _i(e)), l !== 0 && ((r = l), (t = la(e, l)))),
          t === 1))
      )
        throw ((n = Xr), dn(e, 0), Ut(e, r), Ie(e, de()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(E(345));
        case 2:
          ln(e, Te, yt);
          break;
        case 3:
          if (
            (Ut(e, r), (r & 130023424) === r && ((t = Xa + 500 - de()), 10 < t))
          ) {
            if (Vo(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Ne(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Ui(ln.bind(null, e, Te, yt), t);
            break;
          }
          ln(e, Te, yt);
          break;
        case 4:
          if ((Ut(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - ot(r);
            (l = 1 << i), (i = t[i]), i > o && (o = i), (r &= ~l);
          }
          if (
            ((r = o),
            (r = de() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * qm(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ui(ln.bind(null, e, Te, yt), r);
            break;
          }
          ln(e, Te, yt);
          break;
        case 5:
          ln(e, Te, yt);
          break;
        default:
          throw Error(E(329));
      }
    }
  }
  return Ie(e, de()), e.callbackNode === n ? Yd.bind(null, e) : null;
}
function la(e, t) {
  var n = Mr;
  return (
    e.current.memoizedState.isDehydrated && (dn(e, t).flags |= 256),
    (e = al(e, t)),
    e !== 2 && ((t = Te), (Te = n), t !== null && ia(t)),
    e
  );
}
function ia(e) {
  Te === null ? (Te = e) : Te.push.apply(Te, e);
}
function $m(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            l = o.getSnapshot;
          o = o.value;
          try {
            if (!it(l(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Ut(e, t) {
  for (
    t &= ~Ya,
      t &= ~kl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - ot(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Cu(e) {
  if (K & 6) throw Error(E(327));
  Kn();
  var t = Vo(e, 0);
  if (!(t & 1)) return Ie(e, de()), null;
  var n = al(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = _i(e);
    r !== 0 && ((t = r), (n = la(e, r)));
  }
  if (n === 1) throw ((n = Xr), dn(e, 0), Ut(e, t), Ie(e, de()), n);
  if (n === 6) throw Error(E(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    ln(e, Te, yt),
    Ie(e, de()),
    null
  );
}
function Za(e, t) {
  var n = K;
  K |= 1;
  try {
    return e(t);
  } finally {
    (K = n), K === 0 && ((bn = de() + 500), gl && en());
  }
}
function gn(e) {
  Ht !== null && Ht.tag === 0 && !(K & 6) && Kn();
  var t = K;
  K |= 1;
  var n = Ge.transition,
    r = $;
  try {
    if (((Ge.transition = null), ($ = 1), e)) return e();
  } finally {
    ($ = r), (Ge.transition = n), (K = t), !(K & 6) && en();
  }
}
function ba() {
  (Ue = In.current), ee(In);
}
function dn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), xm(n)), me !== null))
    for (n = me.return; n !== null; ) {
      var r = n;
      switch ((Ta(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Jo();
          break;
        case 3:
          Xn(), ee(Ae), ee(Re), Wa();
          break;
        case 5:
          Ha(r);
          break;
        case 4:
          Xn();
          break;
        case 13:
          ee(le);
          break;
        case 19:
          ee(le);
          break;
        case 10:
          Ia(r.type._context);
          break;
        case 22:
        case 23:
          ba();
      }
      n = n.return;
    }
  if (
    ((je = e),
    (me = e = Gt(e.current, null)),
    (Se = Ue = t),
    (ge = 0),
    (Xr = null),
    (Ya = kl = vn = 0),
    (Te = Mr = null),
    sn !== null)
  ) {
    for (t = 0; t < sn.length; t++)
      if (((n = sn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          l = n.pending;
        if (l !== null) {
          var i = l.next;
          (l.next = o), (r.next = i);
        }
        n.pending = r;
      }
    sn = null;
  }
  return e;
}
function Xd(e, t) {
  do {
    var n = me;
    try {
      if ((Fa(), (To.current = rl), nl)) {
        for (var r = ie.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        nl = !1;
      }
      if (
        ((hn = 0),
        (we = ve = ie = null),
        (Nr = !1),
        (Jr = 0),
        (Ga.current = null),
        n === null || n.return === null)
      ) {
        (ge = 1), (Xr = t), (me = null);
        break;
      }
      e: {
        var l = e,
          i = n.return,
          a = n,
          s = t;
        if (
          ((t = Se),
          (a.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var u = s,
            p = a,
            v = p.tag;
          if (!(p.mode & 1) && (v === 0 || v === 11 || v === 15)) {
            var h = p.alternate;
            h
              ? ((p.updateQueue = h.updateQueue),
                (p.memoizedState = h.memoizedState),
                (p.lanes = h.lanes))
              : ((p.updateQueue = null), (p.memoizedState = null));
          }
          var k = fu(i);
          if (k !== null) {
            (k.flags &= -257),
              pu(k, i, a, l, t),
              k.mode & 1 && du(l, u, t),
              (t = k),
              (s = u);
            var w = t.updateQueue;
            if (w === null) {
              var y = new Set();
              y.add(s), (t.updateQueue = y);
            } else w.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              du(l, u, t), es();
              break e;
            }
            s = Error(E(426));
          }
        } else if (te && a.mode & 1) {
          var z = fu(i);
          if (z !== null) {
            !(z.flags & 65536) && (z.flags |= 256),
              pu(z, i, a, l, t),
              Da(Zn(s, a));
            break e;
          }
        }
        (l = s = Zn(s, a)),
          ge !== 4 && (ge = 2),
          Mr === null ? (Mr = [l]) : Mr.push(l),
          (l = i);
        do {
          switch (l.tag) {
            case 3:
              (l.flags |= 65536), (t &= -t), (l.lanes |= t);
              var f = Dd(l, s, t);
              ou(l, f);
              break e;
            case 1:
              a = s;
              var c = l.type,
                m = l.stateNode;
              if (
                !(l.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    ($t === null || !$t.has(m))))
              ) {
                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                var d = Ad(l, a, t);
                ou(l, d);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      ef(n);
    } catch (x) {
      (t = x), me === n && n !== null && (me = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Zd() {
  var e = ol.current;
  return (ol.current = rl), e === null ? rl : e;
}
function es() {
  (ge === 0 || ge === 3 || ge === 2) && (ge = 4),
    je === null || (!(vn & 268435455) && !(kl & 268435455)) || Ut(je, Se);
}
function al(e, t) {
  var n = K;
  K |= 2;
  var r = Zd();
  (je !== e || Se !== t) && ((yt = null), dn(e, t));
  do
    try {
      Jm();
      break;
    } catch (o) {
      Xd(e, o);
    }
  while (1);
  if ((Fa(), (K = n), (ol.current = r), me !== null)) throw Error(E(261));
  return (je = null), (Se = 0), ge;
}
function Jm() {
  for (; me !== null; ) bd(me);
}
function Gm() {
  for (; me !== null && !jp(); ) bd(me);
}
function bd(e) {
  var t = nf(e.alternate, e, Ue);
  (e.memoizedProps = e.pendingProps),
    t === null ? ef(e) : (me = t),
    (Ga.current = null);
}
function ef(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Wm(n, t)), n !== null)) {
        (n.flags &= 32767), (me = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ge = 6), (me = null);
        return;
      }
    } else if (((n = Hm(n, t, Ue)), n !== null)) {
      me = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      me = t;
      return;
    }
    me = t = e;
  } while (t !== null);
  ge === 0 && (ge = 5);
}
function ln(e, t, n) {
  var r = $,
    o = Ge.transition;
  try {
    (Ge.transition = null), ($ = 1), Ym(e, t, n, r);
  } finally {
    (Ge.transition = o), ($ = r);
  }
  return null;
}
function Ym(e, t, n, r) {
  do Kn();
  while (Ht !== null);
  if (K & 6) throw Error(E(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(E(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var l = n.lanes | n.childLanes;
  if (
    (Np(e, l),
    e === je && ((me = je = null), (Se = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Co ||
      ((Co = !0),
      rf(Wo, function () {
        return Kn(), null;
      })),
    (l = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || l)
  ) {
    (l = Ge.transition), (Ge.transition = null);
    var i = $;
    $ = 1;
    var a = K;
    (K |= 4),
      (Ga.current = null),
      Qm(e, n),
      Jd(n, e),
      vm(Ii),
      (Qo = !!Fi),
      (Ii = Fi = null),
      (e.current = n),
      Km(n),
      kp(),
      (K = a),
      ($ = i),
      (Ge.transition = l);
  } else e.current = n;
  if (
    (Co && ((Co = !1), (Ht = e), (il = o)),
    (l = e.pendingLanes),
    l === 0 && ($t = null),
    Ep(n.stateNode),
    Ie(e, de()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (ll) throw ((ll = !1), (e = ra), (ra = null), e);
  return (
    il & 1 && e.tag !== 0 && Kn(),
    (l = e.pendingLanes),
    l & 1 ? (e === oa ? Tr++ : ((Tr = 0), (oa = e))) : (Tr = 0),
    en(),
    null
  );
}
function Kn() {
  if (Ht !== null) {
    var e = Tc(il),
      t = Ge.transition,
      n = $;
    try {
      if (((Ge.transition = null), ($ = 16 > e ? 16 : e), Ht === null))
        var r = !1;
      else {
        if (((e = Ht), (Ht = null), (il = 0), K & 6)) throw Error(E(331));
        var o = K;
        for (K |= 4, M = e.current; M !== null; ) {
          var l = M,
            i = l.child;
          if (M.flags & 16) {
            var a = l.deletions;
            if (a !== null) {
              for (var s = 0; s < a.length; s++) {
                var u = a[s];
                for (M = u; M !== null; ) {
                  var p = M;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      _r(8, p, l);
                  }
                  var v = p.child;
                  if (v !== null) (v.return = p), (M = v);
                  else
                    for (; M !== null; ) {
                      p = M;
                      var h = p.sibling,
                        k = p.return;
                      if ((Kd(p), p === u)) {
                        M = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = k), (M = h);
                        break;
                      }
                      M = k;
                    }
                }
              }
              var w = l.alternate;
              if (w !== null) {
                var y = w.child;
                if (y !== null) {
                  w.child = null;
                  do {
                    var z = y.sibling;
                    (y.sibling = null), (y = z);
                  } while (y !== null);
                }
              }
              M = l;
            }
          }
          if (l.subtreeFlags & 2064 && i !== null) (i.return = l), (M = i);
          else
            e: for (; M !== null; ) {
              if (((l = M), l.flags & 2048))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    _r(9, l, l.return);
                }
              var f = l.sibling;
              if (f !== null) {
                (f.return = l.return), (M = f);
                break e;
              }
              M = l.return;
            }
        }
        var c = e.current;
        for (M = c; M !== null; ) {
          i = M;
          var m = i.child;
          if (i.subtreeFlags & 2064 && m !== null) (m.return = i), (M = m);
          else
            e: for (i = c; M !== null; ) {
              if (((a = M), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      jl(9, a);
                  }
                } catch (x) {
                  se(a, a.return, x);
                }
              if (a === i) {
                M = null;
                break e;
              }
              var d = a.sibling;
              if (d !== null) {
                (d.return = a.return), (M = d);
                break e;
              }
              M = a.return;
            }
        }
        if (
          ((K = o), en(), pt && typeof pt.onPostCommitFiberRoot == "function")
        )
          try {
            pt.onPostCommitFiberRoot(fl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ($ = n), (Ge.transition = t);
    }
  }
  return !1;
}
function Pu(e, t, n) {
  (t = Zn(n, t)),
    (t = Dd(e, t, 1)),
    (e = qt(e, t, 1)),
    (t = Ne()),
    e !== null && (eo(e, 1, t), Ie(e, t));
}
function se(e, t, n) {
  if (e.tag === 3) Pu(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Pu(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            ($t === null || !$t.has(r)))
        ) {
          (e = Zn(n, e)),
            (e = Ad(t, e, 1)),
            (t = qt(t, e, 1)),
            (e = Ne()),
            t !== null && (eo(t, 1, e), Ie(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Xm(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ne()),
    (e.pingedLanes |= e.suspendedLanes & n),
    je === e &&
      (Se & n) === n &&
      (ge === 4 || (ge === 3 && (Se & 130023424) === Se && 500 > de() - Xa)
        ? dn(e, 0)
        : (Ya |= n)),
    Ie(e, t);
}
function tf(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ho), (ho <<= 1), !(ho & 130023424) && (ho = 4194304))
      : (t = 1));
  var n = Ne();
  (e = Pt(e, t)), e !== null && (eo(e, t, n), Ie(e, n));
}
function Zm(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), tf(e, n);
}
function bm(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(E(314));
  }
  r !== null && r.delete(t), tf(e, n);
}
var nf;
nf = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ae.current) De = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (De = !1), Bm(e, t, n);
      De = !!(e.flags & 131072);
    }
  else (De = !1), te && t.flags & 1048576 && ld(t, Xo, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ao(e, t), (e = t.pendingProps);
      var o = Jn(t, Re.current);
      Qn(t, n), (o = Qa(null, t, r, e, o, n));
      var l = Ka();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Fe(r) ? ((l = !0), Go(t)) : (l = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Ua(t),
            (o.updater = yl),
            (t.stateNode = o),
            (o._reactInternals = t),
            qi(t, r, e, n),
            (t = Gi(null, t, r, !0, l, n)))
          : ((t.tag = 0), te && l && Ma(t), Le(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ao(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = th(r)),
          (e = et(r, e)),
          o)
        ) {
          case 0:
            t = Ji(null, t, r, e, n);
            break e;
          case 1:
            t = vu(null, t, r, e, n);
            break e;
          case 11:
            t = mu(null, t, r, e, n);
            break e;
          case 14:
            t = hu(null, t, r, et(r.type, e), n);
            break e;
        }
        throw Error(E(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : et(r, o)),
        Ji(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : et(r, o)),
        vu(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((Ud(t), e === null)) throw Error(E(387));
        (r = t.pendingProps),
          (l = t.memoizedState),
          (o = l.element),
          ud(e, t),
          el(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), l.isDehydrated))
          if (
            ((l = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = l),
            (t.memoizedState = l),
            t.flags & 256)
          ) {
            (o = Zn(Error(E(423)), t)), (t = gu(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Zn(Error(E(424)), t)), (t = gu(e, t, r, n, o));
            break e;
          } else
            for (
              Be = Kt(t.stateNode.containerInfo.firstChild),
                He = t,
                te = !0,
                rt = null,
                n = pd(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Gn(), r === o)) {
            t = zt(e, t, n);
            break e;
          }
          Le(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        md(t),
        e === null && Vi(t),
        (r = t.type),
        (o = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (i = o.children),
        Oi(r, o) ? (i = null) : l !== null && Oi(r, l) && (t.flags |= 32),
        Od(e, t),
        Le(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Vi(t), null;
    case 13:
      return Bd(e, t, n);
    case 4:
      return (
        Ba(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Yn(t, null, r, n)) : Le(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : et(r, o)),
        mu(e, t, r, o, n)
      );
    case 7:
      return Le(e, t, t.pendingProps, n), t.child;
    case 8:
      return Le(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Le(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (l = t.memoizedProps),
          (i = o.value),
          Z(Zo, r._currentValue),
          (r._currentValue = i),
          l !== null)
        )
          if (it(l.value, i)) {
            if (l.children === o.children && !Ae.current) {
              t = zt(e, t, n);
              break e;
            }
          } else
            for (l = t.child, l !== null && (l.return = t); l !== null; ) {
              var a = l.dependencies;
              if (a !== null) {
                i = l.child;
                for (var s = a.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (l.tag === 1) {
                      (s = St(-1, n & -n)), (s.tag = 2);
                      var u = l.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var p = u.pending;
                        p === null
                          ? (s.next = s)
                          : ((s.next = p.next), (p.next = s)),
                          (u.pending = s);
                      }
                    }
                    (l.lanes |= n),
                      (s = l.alternate),
                      s !== null && (s.lanes |= n),
                      Qi(l.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (l.tag === 10) i = l.type === t.type ? null : l.child;
              else if (l.tag === 18) {
                if (((i = l.return), i === null)) throw Error(E(341));
                (i.lanes |= n),
                  (a = i.alternate),
                  a !== null && (a.lanes |= n),
                  Qi(i, n, t),
                  (i = l.sibling);
              } else i = l.child;
              if (i !== null) i.return = l;
              else
                for (i = l; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((l = i.sibling), l !== null)) {
                    (l.return = i.return), (i = l);
                    break;
                  }
                  i = i.return;
                }
              l = i;
            }
        Le(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Qn(t, n),
        (o = Ye(o)),
        (r = r(o)),
        (t.flags |= 1),
        Le(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = et(r, t.pendingProps)),
        (o = et(r.type, o)),
        hu(e, t, r, o, n)
      );
    case 15:
      return Fd(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : et(r, o)),
        Ao(e, t),
        (t.tag = 1),
        Fe(r) ? ((e = !0), Go(t)) : (e = !1),
        Qn(t, n),
        dd(t, r, o),
        qi(t, r, o, n),
        Gi(null, t, r, !0, e, n)
      );
    case 19:
      return Hd(e, t, n);
    case 22:
      return Id(e, t, n);
  }
  throw Error(E(156, t.tag));
};
function rf(e, t) {
  return Lc(e, t);
}
function eh(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Je(e, t, n, r) {
  return new eh(e, t, n, r);
}
function ts(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function th(e) {
  if (typeof e == "function") return ts(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ja)) return 11;
    if (e === ka) return 14;
  }
  return 2;
}
function Gt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Je(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Oo(e, t, n, r, o, l) {
  var i = 2;
  if (((r = e), typeof e == "function")) ts(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case zn:
        return fn(n.children, o, l, t);
      case wa:
        (i = 8), (o |= 8);
        break;
      case vi:
        return (
          (e = Je(12, n, t, o | 2)), (e.elementType = vi), (e.lanes = l), e
        );
      case gi:
        return (e = Je(13, n, t, o)), (e.elementType = gi), (e.lanes = l), e;
      case yi:
        return (e = Je(19, n, t, o)), (e.elementType = yi), (e.lanes = l), e;
      case fc:
        return Sl(n, o, l, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case cc:
              i = 10;
              break e;
            case dc:
              i = 9;
              break e;
            case ja:
              i = 11;
              break e;
            case ka:
              i = 14;
              break e;
            case Ft:
              (i = 16), (r = null);
              break e;
          }
        throw Error(E(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Je(i, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = l), t
  );
}
function fn(e, t, n, r) {
  return (e = Je(7, e, r, t)), (e.lanes = n), e;
}
function Sl(e, t, n, r) {
  return (
    (e = Je(22, e, r, t)),
    (e.elementType = fc),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ui(e, t, n) {
  return (e = Je(6, e, null, t)), (e.lanes = n), e;
}
function ci(e, t, n) {
  return (
    (t = Je(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function nh(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ql(0)),
    (this.expirationTimes = Ql(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ql(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function ns(e, t, n, r, o, l, i, a, s) {
  return (
    (e = new nh(e, t, n, a, s)),
    t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
    (l = Je(3, null, null, t)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ua(l),
    e
  );
}
function rh(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Pn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function of(e) {
  if (!e) return Xt;
  e = e._reactInternals;
  e: {
    if (jn(e) !== e || e.tag !== 1) throw Error(E(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Fe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(E(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Fe(n)) return rd(e, n, t);
  }
  return t;
}
function lf(e, t, n, r, o, l, i, a, s) {
  return (
    (e = ns(n, r, !0, e, o, l, i, a, s)),
    (e.context = of(null)),
    (n = e.current),
    (r = Ne()),
    (o = Jt(n)),
    (l = St(r, o)),
    (l.callback = t ?? null),
    qt(n, l, o),
    (e.current.lanes = o),
    eo(e, o, r),
    Ie(e, r),
    e
  );
}
function xl(e, t, n, r) {
  var o = t.current,
    l = Ne(),
    i = Jt(o);
  return (
    (n = of(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = St(l, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = qt(o, t, i)),
    e !== null && (lt(e, o, i, l), Mo(e, o, i)),
    i
  );
}
function sl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function zu(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function rs(e, t) {
  zu(e, t), (e = e.alternate) && zu(e, t);
}
function oh() {
  return null;
}
var af =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function os(e) {
  this._internalRoot = e;
}
El.prototype.render = os.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(E(409));
  xl(e, t, null, null);
};
El.prototype.unmount = os.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    gn(function () {
      xl(null, e, null, null);
    }),
      (t[Ct] = null);
  }
};
function El(e) {
  this._internalRoot = e;
}
El.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Fc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Ot.length && t !== 0 && t < Ot[n].priority; n++);
    Ot.splice(n, 0, e), n === 0 && Oc(e);
  }
};
function ls(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Cl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Ru() {}
function lh(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var l = r;
      r = function () {
        var u = sl(i);
        l.call(u);
      };
    }
    var i = lf(t, r, e, 0, null, !1, !1, "", Ru);
    return (
      (e._reactRootContainer = i),
      (e[Ct] = i.current),
      Vr(e.nodeType === 8 ? e.parentNode : e),
      gn(),
      i
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = sl(s);
      a.call(u);
    };
  }
  var s = ns(e, 0, !1, null, null, !1, !1, "", Ru);
  return (
    (e._reactRootContainer = s),
    (e[Ct] = s.current),
    Vr(e.nodeType === 8 ? e.parentNode : e),
    gn(function () {
      xl(t, s, n, r);
    }),
    s
  );
}
function Pl(e, t, n, r, o) {
  var l = n._reactRootContainer;
  if (l) {
    var i = l;
    if (typeof o == "function") {
      var a = o;
      o = function () {
        var s = sl(i);
        a.call(s);
      };
    }
    xl(t, i, e, o);
  } else i = lh(n, t, e, o, r);
  return sl(i);
}
Dc = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = xr(t.pendingLanes);
        n !== 0 &&
          (Ea(t, n | 1), Ie(t, de()), !(K & 6) && ((bn = de() + 500), en()));
      }
      break;
    case 13:
      gn(function () {
        var r = Pt(e, 1);
        if (r !== null) {
          var o = Ne();
          lt(r, e, 1, o);
        }
      }),
        rs(e, 1);
  }
};
Ca = function (e) {
  if (e.tag === 13) {
    var t = Pt(e, 134217728);
    if (t !== null) {
      var n = Ne();
      lt(t, e, 134217728, n);
    }
    rs(e, 134217728);
  }
};
Ac = function (e) {
  if (e.tag === 13) {
    var t = Jt(e),
      n = Pt(e, t);
    if (n !== null) {
      var r = Ne();
      lt(n, e, t, r);
    }
    rs(e, t);
  }
};
Fc = function () {
  return $;
};
Ic = function (e, t) {
  var n = $;
  try {
    return ($ = e), t();
  } finally {
    $ = n;
  }
};
Ri = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ki(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = vl(r);
            if (!o) throw Error(E(90));
            mc(r), ki(r, o);
          }
        }
      }
      break;
    case "textarea":
      vc(e, n);
      break;
    case "select":
      (t = n.value), t != null && Bn(e, !!n.multiple, t, !1);
  }
};
xc = Za;
Ec = gn;
var ih = { usingClientEntryPoint: !1, Events: [no, _n, vl, kc, Sc, Za] },
  vr = {
    findFiberByHostInstance: an,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  ah = {
    bundleType: vr.bundleType,
    version: vr.version,
    rendererPackageName: vr.rendererPackageName,
    rendererConfig: vr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Rt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = zc(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: vr.findFiberByHostInstance || oh,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Po = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Po.isDisabled && Po.supportsFiber)
    try {
      (fl = Po.inject(ah)), (pt = Po);
    } catch {}
}
Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ih;
Ve.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ls(t)) throw Error(E(200));
  return rh(e, t, null, n);
};
Ve.createRoot = function (e, t) {
  if (!ls(e)) throw Error(E(299));
  var n = !1,
    r = "",
    o = af;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = ns(e, 1, !1, null, null, n, !1, r, o)),
    (e[Ct] = t.current),
    Vr(e.nodeType === 8 ? e.parentNode : e),
    new os(t)
  );
};
Ve.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(E(188))
      : ((e = Object.keys(e).join(",")), Error(E(268, e)));
  return (e = zc(t)), (e = e === null ? null : e.stateNode), e;
};
Ve.flushSync = function (e) {
  return gn(e);
};
Ve.hydrate = function (e, t, n) {
  if (!Cl(t)) throw Error(E(200));
  return Pl(null, e, t, !0, n);
};
Ve.hydrateRoot = function (e, t, n) {
  if (!ls(e)) throw Error(E(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    l = "",
    i = af;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = lf(t, null, e, 1, n ?? null, o, !1, l, i)),
    (e[Ct] = t.current),
    Vr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new El(t);
};
Ve.render = function (e, t, n) {
  if (!Cl(t)) throw Error(E(200));
  return Pl(null, e, t, !1, n);
};
Ve.unmountComponentAtNode = function (e) {
  if (!Cl(e)) throw Error(E(40));
  return e._reactRootContainer
    ? (gn(function () {
        Pl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ct] = null);
        });
      }),
      !0)
    : !1;
};
Ve.unstable_batchedUpdates = Za;
Ve.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Cl(n)) throw Error(E(200));
  if (e == null || e._reactInternals === void 0) throw Error(E(38));
  return Pl(e, t, n, !1, r);
};
Ve.version = "18.2.0-next-9e3b772b8-20220608";
function sf() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sf);
    } catch (e) {
      console.error(e);
    }
}
sf(), (lc.exports = Ve);
var sh = lc.exports,
  Lu = sh;
(mi.createRoot = Lu.createRoot), (mi.hydrateRoot = Lu.hydrateRoot);
/**
 * @remix-run/router v1.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function oe() {
  return (
    (oe = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    oe.apply(this, arguments)
  );
}
var pe;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(pe || (pe = {}));
const Nu = "popstate";
function uh(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: l, search: i, hash: a } = r.location;
    return Zr(
      "",
      { pathname: l, search: i, hash: a },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : yn(o);
  }
  return dh(t, n, null, e);
}
function W(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function er(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function ch() {
  return Math.random().toString(36).substr(2, 8);
}
function _u(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Zr(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    oe(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Lt(t) : t,
      { state: n, key: (t && t.key) || r || ch() }
    )
  );
}
function yn(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Lt(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function dh(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: l = !1 } = r,
    i = o.history,
    a = pe.Pop,
    s = null,
    u = p();
  u == null && ((u = 0), i.replaceState(oe({}, i.state, { idx: u }), ""));
  function p() {
    return (i.state || { idx: null }).idx;
  }
  function v() {
    a = pe.Pop;
    let z = p(),
      f = z == null ? null : z - u;
    (u = z), s && s({ action: a, location: y.location, delta: f });
  }
  function h(z, f) {
    a = pe.Push;
    let c = Zr(y.location, z, f);
    n && n(c, z), (u = p() + 1);
    let m = _u(c, u),
      d = y.createHref(c);
    try {
      i.pushState(m, "", d);
    } catch (x) {
      if (x instanceof DOMException && x.name === "DataCloneError") throw x;
      o.location.assign(d);
    }
    l && s && s({ action: a, location: y.location, delta: 1 });
  }
  function k(z, f) {
    a = pe.Replace;
    let c = Zr(y.location, z, f);
    n && n(c, z), (u = p());
    let m = _u(c, u),
      d = y.createHref(c);
    i.replaceState(m, "", d),
      l && s && s({ action: a, location: y.location, delta: 0 });
  }
  function w(z) {
    let f = o.location.origin !== "null" ? o.location.origin : o.location.href,
      c = typeof z == "string" ? z : yn(z);
    return (
      W(
        f,
        "No window.location.(origin|href) available to create URL for href: " +
          c
      ),
      new URL(c, f)
    );
  }
  let y = {
    get action() {
      return a;
    },
    get location() {
      return e(o, i);
    },
    listen(z) {
      if (s) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(Nu, v),
        (s = z),
        () => {
          o.removeEventListener(Nu, v), (s = null);
        }
      );
    },
    createHref(z) {
      return t(o, z);
    },
    createURL: w,
    encodeLocation(z) {
      let f = w(z);
      return { pathname: f.pathname, search: f.search, hash: f.hash };
    },
    push: h,
    replace: k,
    go(z) {
      return i.go(z);
    },
  };
  return y;
}
var ce;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(ce || (ce = {}));
const fh = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function ph(e) {
  return e.index === !0;
}
function aa(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((o, l) => {
      let i = [...n, l],
        a = typeof o.id == "string" ? o.id : i.join("-");
      if (
        (W(
          o.index !== !0 || !o.children,
          "Cannot specify children on an index route"
        ),
        W(
          !r[a],
          'Found a route id collision on id "' +
            a +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        ph(o))
      ) {
        let s = oe({}, o, t(o), { id: a });
        return (r[a] = s), s;
      } else {
        let s = oe({}, o, t(o), { id: a, children: void 0 });
        return (
          (r[a] = s), o.children && (s.children = aa(o.children, t, i, r)), s
        );
      }
    })
  );
}
function On(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Lt(t) : t,
    o = lr(r.pathname || "/", n);
  if (o == null) return null;
  let l = uf(e);
  hh(l);
  let i = null;
  for (let a = 0; i == null && a < l.length; ++a) i = Eh(l[a], zh(o));
  return i;
}
function mh(e, t) {
  let { route: n, pathname: r, params: o } = e;
  return { id: n.id, pathname: r, params: o, data: t[n.id], handle: n.handle };
}
function uf(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (l, i, a) => {
    let s = {
      relativePath: a === void 0 ? l.path || "" : a,
      caseSensitive: l.caseSensitive === !0,
      childrenIndex: i,
      route: l,
    };
    s.relativePath.startsWith("/") &&
      (W(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (s.relativePath = s.relativePath.slice(r.length)));
    let u = xt([r, s.relativePath]),
      p = n.concat(s);
    l.children &&
      l.children.length > 0 &&
      (W(
        l.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      uf(l.children, t, p, u)),
      !(l.path == null && !l.index) &&
        t.push({ path: u, score: Sh(u, l.index), routesMeta: p });
  };
  return (
    e.forEach((l, i) => {
      var a;
      if (l.path === "" || !((a = l.path) != null && a.includes("?"))) o(l, i);
      else for (let s of cf(l.path)) o(l, i, s);
    }),
    t
  );
}
function cf(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    l = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [l, ""] : [l];
  let i = cf(r.join("/")),
    a = [];
  return (
    a.push(...i.map((s) => (s === "" ? l : [l, s].join("/")))),
    o && a.push(...i),
    a.map((s) => (e.startsWith("/") && s === "" ? "/" : s))
  );
}
function hh(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : xh(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const vh = /^:\w+$/,
  gh = 3,
  yh = 2,
  wh = 1,
  jh = 10,
  kh = -2,
  Mu = (e) => e === "*";
function Sh(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Mu) && (r += kh),
    t && (r += yh),
    n
      .filter((o) => !Mu(o))
      .reduce((o, l) => o + (vh.test(l) ? gh : l === "" ? wh : jh), r)
  );
}
function xh(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Eh(e, t) {
  let { routesMeta: n } = e,
    r = {},
    o = "/",
    l = [];
  for (let i = 0; i < n.length; ++i) {
    let a = n[i],
      s = i === n.length - 1,
      u = o === "/" ? t : t.slice(o.length) || "/",
      p = Ch(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: s },
        u
      );
    if (!p) return null;
    Object.assign(r, p.params);
    let v = a.route;
    l.push({
      params: r,
      pathname: xt([o, p.pathname]),
      pathnameBase: _h(xt([o, p.pathnameBase])),
      route: v,
    }),
      p.pathnameBase !== "/" && (o = xt([o, p.pathnameBase]));
  }
  return l;
}
function Ch(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Ph(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let l = o[0],
    i = l.replace(/(.)\/+$/, "$1"),
    a = o.slice(1);
  return {
    params: r.reduce((u, p, v) => {
      if (p === "*") {
        let h = a[v] || "";
        i = l.slice(0, l.length - h.length).replace(/(.)\/+$/, "$1");
      }
      return (u[p] = Rh(a[v] || "", p)), u;
    }, {}),
    pathname: l,
    pathnameBase: i,
    pattern: e,
  };
}
function Ph(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    er(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/\/:(\w+)/g, (i, a) => (r.push(a), "/([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (r.push("*"),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (o += "\\/*$")
      : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function zh(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      er(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Rh(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      er(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      e
    );
  }
}
function lr(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Lh(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: o = "",
  } = typeof e == "string" ? Lt(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : Nh(n, t)) : t,
    search: Mh(r),
    hash: Th(o),
  };
}
function Nh(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function di(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function zl(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function is(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == "string"
    ? (o = Lt(e))
    : ((o = oe({}, e)),
      W(
        !o.pathname || !o.pathname.includes("?"),
        di("?", "pathname", "search", o)
      ),
      W(
        !o.pathname || !o.pathname.includes("#"),
        di("#", "pathname", "hash", o)
      ),
      W(!o.search || !o.search.includes("#"), di("#", "search", "hash", o)));
  let l = e === "" || o.pathname === "",
    i = l ? "/" : o.pathname,
    a;
  if (r || i == null) a = n;
  else {
    let v = t.length - 1;
    if (i.startsWith("..")) {
      let h = i.split("/");
      for (; h[0] === ".."; ) h.shift(), (v -= 1);
      o.pathname = h.join("/");
    }
    a = v >= 0 ? t[v] : "/";
  }
  let s = Lh(o, a),
    u = i && i !== "/" && i.endsWith("/"),
    p = (l || i === ".") && n.endsWith("/");
  return !s.pathname.endsWith("/") && (u || p) && (s.pathname += "/"), s;
}
const xt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  _h = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Mh = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Th = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class as {
  constructor(t, n, r, o) {
    o === void 0 && (o = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = o),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function df(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const ff = ["post", "put", "patch", "delete"],
  Dh = new Set(ff),
  Ah = ["get", ...ff],
  Fh = new Set(Ah),
  Ih = new Set([301, 302, 303, 307, 308]),
  Oh = new Set([307, 308]),
  fi = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Uh = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  gr = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  pf = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Bh = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary });
function Hh(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    n =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u",
    r = !n;
  W(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let o;
  if (e.mapRouteProperties) o = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let g = e.detectErrorBoundary;
    o = (j) => ({ hasErrorBoundary: g(j) });
  } else o = Bh;
  let l = {},
    i = aa(e.routes, o, void 0, l),
    a,
    s = e.basename || "/",
    u = oe({ v7_normalizeFormMethod: !1, v7_prependBasename: !1 }, e.future),
    p = null,
    v = new Set(),
    h = null,
    k = null,
    w = null,
    y = e.hydrationData != null,
    z = On(i, e.history.location, s),
    f = null;
  if (z == null) {
    let g = Ke(404, { pathname: e.history.location.pathname }),
      { matches: j, route: S } = Bu(i);
    (z = j), (f = { [S.id]: g });
  }
  let c =
      !z.some((g) => g.route.lazy) &&
      (!z.some((g) => g.route.loader) || e.hydrationData != null),
    m,
    d = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: z,
      initialized: c,
      navigation: fi,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || f,
      fetchers: new Map(),
      blockers: new Map(),
    },
    x = pe.Pop,
    L = !1,
    R,
    T = !1,
    Q = !1,
    I = [],
    ye = [],
    Y = new Map(),
    at = 0,
    _t = -1,
    Mt = new Map(),
    Oe = new Set(),
    st = new Map(),
    N = new Map(),
    A = new Map(),
    B = !1;
  function ne() {
    return (
      (p = e.history.listen((g) => {
        let { action: j, location: S, delta: _ } = g;
        if (B) {
          B = !1;
          return;
        }
        er(
          A.size === 0 || _ != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let U = gs({
          currentLocation: d.location,
          nextLocation: S,
          historyAction: j,
        });
        if (U && _ != null) {
          (B = !0),
            e.history.go(_ * -1),
            ao(U, {
              state: "blocked",
              location: S,
              proceed() {
                ao(U, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: S,
                }),
                  e.history.go(_);
              },
              reset() {
                let O = new Map(d.blockers);
                O.set(U, gr), X({ blockers: O });
              },
            });
          return;
        }
        return tn(j, S);
      })),
      d.initialized || tn(pe.Pop, d.location),
      m
    );
  }
  function fe() {
    p && p(),
      v.clear(),
      R && R.abort(),
      d.fetchers.forEach((g, j) => Ml(j)),
      d.blockers.forEach((g, j) => vs(j));
  }
  function Sn(g) {
    return v.add(g), () => v.delete(g);
  }
  function X(g) {
    (d = oe({}, d, g)), v.forEach((j) => j(d));
  }
  function ht(g, j) {
    var S, _;
    let U =
        d.actionData != null &&
        d.navigation.formMethod != null &&
        nt(d.navigation.formMethod) &&
        d.navigation.state === "loading" &&
        ((S = g.state) == null ? void 0 : S._isRedirect) !== !0,
      O;
    j.actionData
      ? Object.keys(j.actionData).length > 0
        ? (O = j.actionData)
        : (O = null)
      : U
      ? (O = d.actionData)
      : (O = null);
    let H = j.loaderData
        ? Uu(d.loaderData, j.loaderData, j.matches || [], j.errors)
        : d.loaderData,
      F = d.blockers;
    F.size > 0 && ((F = new Map(F)), F.forEach((re, Ee) => F.set(Ee, gr)));
    let D =
      L === !0 ||
      (d.navigation.formMethod != null &&
        nt(d.navigation.formMethod) &&
        ((_ = g.state) == null ? void 0 : _._isRedirect) !== !0);
    a && ((i = a), (a = void 0)),
      T ||
        x === pe.Pop ||
        (x === pe.Push
          ? e.history.push(g, g.state)
          : x === pe.Replace && e.history.replace(g, g.state)),
      X(
        oe({}, j, {
          actionData: O,
          loaderData: H,
          historyAction: x,
          location: g,
          initialized: !0,
          navigation: fi,
          revalidation: "idle",
          restoreScrollPosition: ws(g, j.matches || d.matches),
          preventScrollReset: D,
          blockers: F,
        })
      ),
      (x = pe.Pop),
      (L = !1),
      (T = !1),
      (Q = !1),
      (I = []),
      (ye = []);
  }
  async function ut(g, j) {
    if (typeof g == "number") {
      e.history.go(g);
      return;
    }
    let S = sa(
        d.location,
        d.matches,
        s,
        u.v7_prependBasename,
        g,
        j == null ? void 0 : j.fromRouteId,
        j == null ? void 0 : j.relative
      ),
      {
        path: _,
        submission: U,
        error: O,
      } = Tu(u.v7_normalizeFormMethod, !1, S, j),
      H = d.location,
      F = Zr(d.location, _, j && j.state);
    F = oe({}, F, e.history.encodeLocation(F));
    let D = j && j.replace != null ? j.replace : void 0,
      re = pe.Push;
    D === !0
      ? (re = pe.Replace)
      : D === !1 ||
        (U != null &&
          nt(U.formMethod) &&
          U.formAction === d.location.pathname + d.location.search &&
          (re = pe.Replace));
    let Ee =
        j && "preventScrollReset" in j ? j.preventScrollReset === !0 : void 0,
      q = gs({ currentLocation: H, nextLocation: F, historyAction: re });
    if (q) {
      ao(q, {
        state: "blocked",
        location: F,
        proceed() {
          ao(q, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: F,
          }),
            ut(g, j);
        },
        reset() {
          let G = new Map(d.blockers);
          G.set(q, gr), X({ blockers: G });
        },
      });
      return;
    }
    return await tn(re, F, {
      submission: U,
      pendingError: O,
      preventScrollReset: Ee,
      replace: j && j.replace,
    });
  }
  function xn() {
    if (
      (_l(),
      X({ revalidation: "loading" }),
      d.navigation.state !== "submitting")
    ) {
      if (d.navigation.state === "idle") {
        tn(d.historyAction, d.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      tn(x || d.historyAction, d.navigation.location, {
        overrideNavigation: d.navigation,
      });
    }
  }
  async function tn(g, j, S) {
    R && R.abort(),
      (R = null),
      (x = g),
      (T = (S && S.startUninterruptedRevalidation) === !0),
      Mf(d.location, d.matches),
      (L = (S && S.preventScrollReset) === !0);
    let _ = a || i,
      U = S && S.overrideNavigation,
      O = On(_, j, s);
    if (!O) {
      let G = Ke(404, { pathname: j.pathname }),
        { matches: ue, route: nn } = Bu(_);
      Tl(), ht(j, { matches: ue, loaderData: {}, errors: { [nn.id]: G } });
      return;
    }
    if (
      d.initialized &&
      !Q &&
      qh(d.location, j) &&
      !(S && S.submission && nt(S.submission.formMethod))
    ) {
      ht(j, { matches: O });
      return;
    }
    R = new AbortController();
    let H = wr(e.history, j, R.signal, S && S.submission),
      F,
      D;
    if (S && S.pendingError) D = { [Un(O).route.id]: S.pendingError };
    else if (S && S.submission && nt(S.submission.formMethod)) {
      let G = await Cf(H, j, S.submission, O, { replace: S.replace });
      if (G.shortCircuited) return;
      (F = G.pendingActionData),
        (D = G.pendingActionError),
        (U = pi(j, S.submission)),
        (H = new Request(H.url, { signal: H.signal }));
    }
    let {
      shortCircuited: re,
      loaderData: Ee,
      errors: q,
    } = await Pf(
      H,
      j,
      O,
      U,
      S && S.submission,
      S && S.fetcherSubmission,
      S && S.replace,
      F,
      D
    );
    re ||
      ((R = null),
      ht(
        j,
        oe({ matches: O }, F ? { actionData: F } : {}, {
          loaderData: Ee,
          errors: q,
        })
      ));
  }
  async function Cf(g, j, S, _, U) {
    U === void 0 && (U = {}), _l();
    let O = Yh(j, S);
    X({ navigation: O });
    let H,
      F = ca(_, j);
    if (!F.route.action && !F.route.lazy)
      H = {
        type: ce.error,
        error: Ke(405, {
          method: g.method,
          pathname: j.pathname,
          routeId: F.route.id,
        }),
      };
    else if (((H = await yr("action", g, F, _, l, o, s)), g.signal.aborted))
      return { shortCircuited: !0 };
    if (qn(H)) {
      let D;
      return (
        U && U.replace != null
          ? (D = U.replace)
          : (D = H.location === d.location.pathname + d.location.search),
        await ir(d, H, { submission: S, replace: D }),
        { shortCircuited: !0 }
      );
    }
    if (Dr(H)) {
      let D = Un(_, F.route.id);
      return (
        (U && U.replace) !== !0 && (x = pe.Push),
        { pendingActionData: {}, pendingActionError: { [D.route.id]: H.error } }
      );
    }
    if (cn(H)) throw Ke(400, { type: "defer-action" });
    return { pendingActionData: { [F.route.id]: H.data } };
  }
  async function Pf(g, j, S, _, U, O, H, F, D) {
    let re = _ || pi(j, U),
      Ee = U || O || Vu(re),
      q = a || i,
      [G, ue] = Du(e.history, d, S, Ee, j, Q, I, ye, st, Oe, q, s, F, D);
    if (
      (Tl(
        (J) =>
          !(S && S.some((Ze) => Ze.route.id === J)) ||
          (G && G.some((Ze) => Ze.route.id === J))
      ),
      (_t = ++at),
      G.length === 0 && ue.length === 0)
    ) {
      let J = ms();
      return (
        ht(
          j,
          oe(
            { matches: S, loaderData: {}, errors: D || null },
            F ? { actionData: F } : {},
            J ? { fetchers: new Map(d.fetchers) } : {}
          )
        ),
        { shortCircuited: !0 }
      );
    }
    if (!T) {
      ue.forEach((Ze) => {
        let Dt = d.fetchers.get(Ze.key),
          Ol = jr(void 0, Dt ? Dt.data : void 0);
        d.fetchers.set(Ze.key, Ol);
      });
      let J = F || d.actionData;
      X(
        oe(
          { navigation: re },
          J
            ? Object.keys(J).length === 0
              ? { actionData: null }
              : { actionData: J }
            : {},
          ue.length > 0 ? { fetchers: new Map(d.fetchers) } : {}
        )
      );
    }
    ue.forEach((J) => {
      Y.has(J.key) && Tt(J.key), J.controller && Y.set(J.key, J.controller);
    });
    let nn = () => ue.forEach((J) => Tt(J.key));
    R && R.signal.addEventListener("abort", nn);
    let {
      results: rn,
      loaderResults: ar,
      fetcherResults: Dl,
    } = await fs(d.matches, S, G, ue, g);
    if (g.signal.aborted) return { shortCircuited: !0 };
    R && R.signal.removeEventListener("abort", nn),
      ue.forEach((J) => Y.delete(J.key));
    let vt = Hu(rn);
    if (vt) {
      if (vt.idx >= G.length) {
        let J = ue[vt.idx - G.length].key;
        Oe.add(J);
      }
      return await ir(d, vt.result, { replace: H }), { shortCircuited: !0 };
    }
    let { loaderData: gt, errors: so } = Ou(d, S, G, ar, D, ue, Dl, N);
    N.forEach((J, Ze) => {
      J.subscribe((Dt) => {
        (Dt || J.done) && N.delete(Ze);
      });
    });
    let Al = ms(),
      Fl = hs(_t),
      Il = Al || Fl || ue.length > 0;
    return oe(
      { loaderData: gt, errors: so },
      Il ? { fetchers: new Map(d.fetchers) } : {}
    );
  }
  function ds(g) {
    return d.fetchers.get(g) || Uh;
  }
  function zf(g, j, S, _) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    Y.has(g) && Tt(g);
    let U = a || i,
      O = sa(
        d.location,
        d.matches,
        s,
        u.v7_prependBasename,
        S,
        j,
        _ == null ? void 0 : _.relative
      ),
      H = On(U, O, s);
    if (!H) {
      io(g, j, Ke(404, { pathname: O }));
      return;
    }
    let {
      path: F,
      submission: D,
      error: re,
    } = Tu(u.v7_normalizeFormMethod, !0, O, _);
    if (re) {
      io(g, j, re);
      return;
    }
    let Ee = ca(H, F);
    if (((L = (_ && _.preventScrollReset) === !0), D && nt(D.formMethod))) {
      Rf(g, j, F, Ee, H, D);
      return;
    }
    st.set(g, { routeId: j, path: F }), Lf(g, j, F, Ee, H, D);
  }
  async function Rf(g, j, S, _, U, O) {
    if ((_l(), st.delete(g), !_.route.action && !_.route.lazy)) {
      let he = Ke(405, { method: O.formMethod, pathname: S, routeId: j });
      io(g, j, he);
      return;
    }
    let H = d.fetchers.get(g),
      F = Xh(O, H);
    d.fetchers.set(g, F), X({ fetchers: new Map(d.fetchers) });
    let D = new AbortController(),
      re = wr(e.history, S, D.signal, O);
    Y.set(g, D);
    let Ee = at,
      q = await yr("action", re, _, U, l, o, s);
    if (re.signal.aborted) {
      Y.get(g) === D && Y.delete(g);
      return;
    }
    if (qn(q))
      if ((Y.delete(g), _t > Ee)) {
        let he = Cn(void 0);
        d.fetchers.set(g, he), X({ fetchers: new Map(d.fetchers) });
        return;
      } else {
        Oe.add(g);
        let he = jr(O);
        return (
          d.fetchers.set(g, he),
          X({ fetchers: new Map(d.fetchers) }),
          ir(d, q, { fetcherSubmission: O })
        );
      }
    if (Dr(q)) {
      io(g, j, q.error);
      return;
    }
    if (cn(q)) throw Ke(400, { type: "defer-action" });
    let G = d.navigation.location || d.location,
      ue = wr(e.history, G, D.signal),
      nn = a || i,
      rn =
        d.navigation.state !== "idle"
          ? On(nn, d.navigation.location, s)
          : d.matches;
    W(rn, "Didn't find any matches after fetcher action");
    let ar = ++at;
    Mt.set(g, ar);
    let Dl = jr(O, q.data);
    d.fetchers.set(g, Dl);
    let [vt, gt] = Du(
      e.history,
      d,
      rn,
      O,
      G,
      Q,
      I,
      ye,
      st,
      Oe,
      nn,
      s,
      { [_.route.id]: q.data },
      void 0
    );
    gt
      .filter((he) => he.key !== g)
      .forEach((he) => {
        let sr = he.key,
          js = d.fetchers.get(sr),
          Df = jr(void 0, js ? js.data : void 0);
        d.fetchers.set(sr, Df),
          Y.has(sr) && Tt(sr),
          he.controller && Y.set(sr, he.controller);
      }),
      X({ fetchers: new Map(d.fetchers) });
    let so = () => gt.forEach((he) => Tt(he.key));
    D.signal.addEventListener("abort", so);
    let {
      results: Al,
      loaderResults: Fl,
      fetcherResults: Il,
    } = await fs(d.matches, rn, vt, gt, ue);
    if (D.signal.aborted) return;
    D.signal.removeEventListener("abort", so),
      Mt.delete(g),
      Y.delete(g),
      gt.forEach((he) => Y.delete(he.key));
    let J = Hu(Al);
    if (J) {
      if (J.idx >= vt.length) {
        let he = gt[J.idx - vt.length].key;
        Oe.add(he);
      }
      return ir(d, J.result);
    }
    let { loaderData: Ze, errors: Dt } = Ou(
      d,
      d.matches,
      vt,
      Fl,
      void 0,
      gt,
      Il,
      N
    );
    if (d.fetchers.has(g)) {
      let he = Cn(q.data);
      d.fetchers.set(g, he);
    }
    let Ol = hs(ar);
    d.navigation.state === "loading" && ar > _t
      ? (W(x, "Expected pending action"),
        R && R.abort(),
        ht(d.navigation.location, {
          matches: rn,
          loaderData: Ze,
          errors: Dt,
          fetchers: new Map(d.fetchers),
        }))
      : (X(
          oe(
            { errors: Dt, loaderData: Uu(d.loaderData, Ze, rn, Dt) },
            Ol || gt.length > 0 ? { fetchers: new Map(d.fetchers) } : {}
          )
        ),
        (Q = !1));
  }
  async function Lf(g, j, S, _, U, O) {
    let H = d.fetchers.get(g),
      F = jr(O, H ? H.data : void 0);
    d.fetchers.set(g, F), X({ fetchers: new Map(d.fetchers) });
    let D = new AbortController(),
      re = wr(e.history, S, D.signal);
    Y.set(g, D);
    let Ee = at,
      q = await yr("loader", re, _, U, l, o, s);
    if (
      (cn(q) && (q = (await vf(q, re.signal, !0)) || q),
      Y.get(g) === D && Y.delete(g),
      re.signal.aborted)
    )
      return;
    if (qn(q))
      if (_t > Ee) {
        let ue = Cn(void 0);
        d.fetchers.set(g, ue), X({ fetchers: new Map(d.fetchers) });
        return;
      } else {
        Oe.add(g), await ir(d, q);
        return;
      }
    if (Dr(q)) {
      let ue = Un(d.matches, j);
      d.fetchers.delete(g),
        X({
          fetchers: new Map(d.fetchers),
          errors: { [ue.route.id]: q.error },
        });
      return;
    }
    W(!cn(q), "Unhandled fetcher deferred data");
    let G = Cn(q.data);
    d.fetchers.set(g, G), X({ fetchers: new Map(d.fetchers) });
  }
  async function ir(g, j, S) {
    let {
      submission: _,
      fetcherSubmission: U,
      replace: O,
    } = S === void 0 ? {} : S;
    j.revalidate && (Q = !0);
    let H = Zr(g.location, j.location, { _isRedirect: !0 });
    if ((W(H, "Expected a location on the redirect navigation"), n)) {
      let G = !1;
      if (j.reloadDocument) G = !0;
      else if (pf.test(j.location)) {
        const ue = e.history.createURL(j.location);
        G = ue.origin !== t.location.origin || lr(ue.pathname, s) == null;
      }
      if (G) {
        O ? t.location.replace(j.location) : t.location.assign(j.location);
        return;
      }
    }
    R = null;
    let F = O === !0 ? pe.Replace : pe.Push,
      { formMethod: D, formAction: re, formEncType: Ee } = g.navigation;
    !_ && !U && D && re && Ee && (_ = Vu(g.navigation));
    let q = _ || U;
    if (Oh.has(j.status) && q && nt(q.formMethod))
      await tn(F, H, {
        submission: oe({}, q, { formAction: j.location }),
        preventScrollReset: L,
      });
    else {
      let G = pi(H, _);
      await tn(F, H, {
        overrideNavigation: G,
        fetcherSubmission: U,
        preventScrollReset: L,
      });
    }
  }
  async function fs(g, j, S, _, U) {
    let O = await Promise.all([
        ...S.map((D) => yr("loader", U, D, j, l, o, s)),
        ..._.map((D) =>
          D.matches && D.match && D.controller
            ? yr(
                "loader",
                wr(e.history, D.path, D.controller.signal),
                D.match,
                D.matches,
                l,
                o,
                s
              )
            : { type: ce.error, error: Ke(404, { pathname: D.path }) }
        ),
      ]),
      H = O.slice(0, S.length),
      F = O.slice(S.length);
    return (
      await Promise.all([
        Wu(
          g,
          S,
          H,
          H.map(() => U.signal),
          !1,
          d.loaderData
        ),
        Wu(
          g,
          _.map((D) => D.match),
          F,
          _.map((D) => (D.controller ? D.controller.signal : null)),
          !0
        ),
      ]),
      { results: O, loaderResults: H, fetcherResults: F }
    );
  }
  function _l() {
    (Q = !0),
      I.push(...Tl()),
      st.forEach((g, j) => {
        Y.has(j) && (ye.push(j), Tt(j));
      });
  }
  function io(g, j, S) {
    let _ = Un(d.matches, j);
    Ml(g), X({ errors: { [_.route.id]: S }, fetchers: new Map(d.fetchers) });
  }
  function Ml(g) {
    let j = d.fetchers.get(g);
    Y.has(g) && !(j && j.state === "loading" && Mt.has(g)) && Tt(g),
      st.delete(g),
      Mt.delete(g),
      Oe.delete(g),
      d.fetchers.delete(g);
  }
  function Tt(g) {
    let j = Y.get(g);
    W(j, "Expected fetch controller: " + g), j.abort(), Y.delete(g);
  }
  function ps(g) {
    for (let j of g) {
      let S = ds(j),
        _ = Cn(S.data);
      d.fetchers.set(j, _);
    }
  }
  function ms() {
    let g = [],
      j = !1;
    for (let S of Oe) {
      let _ = d.fetchers.get(S);
      W(_, "Expected fetcher: " + S),
        _.state === "loading" && (Oe.delete(S), g.push(S), (j = !0));
    }
    return ps(g), j;
  }
  function hs(g) {
    let j = [];
    for (let [S, _] of Mt)
      if (_ < g) {
        let U = d.fetchers.get(S);
        W(U, "Expected fetcher: " + S),
          U.state === "loading" && (Tt(S), Mt.delete(S), j.push(S));
      }
    return ps(j), j.length > 0;
  }
  function Nf(g, j) {
    let S = d.blockers.get(g) || gr;
    return A.get(g) !== j && A.set(g, j), S;
  }
  function vs(g) {
    d.blockers.delete(g), A.delete(g);
  }
  function ao(g, j) {
    let S = d.blockers.get(g) || gr;
    W(
      (S.state === "unblocked" && j.state === "blocked") ||
        (S.state === "blocked" && j.state === "blocked") ||
        (S.state === "blocked" && j.state === "proceeding") ||
        (S.state === "blocked" && j.state === "unblocked") ||
        (S.state === "proceeding" && j.state === "unblocked"),
      "Invalid blocker state transition: " + S.state + " -> " + j.state
    );
    let _ = new Map(d.blockers);
    _.set(g, j), X({ blockers: _ });
  }
  function gs(g) {
    let { currentLocation: j, nextLocation: S, historyAction: _ } = g;
    if (A.size === 0) return;
    A.size > 1 && er(!1, "A router only supports one blocker at a time");
    let U = Array.from(A.entries()),
      [O, H] = U[U.length - 1],
      F = d.blockers.get(O);
    if (
      !(F && F.state === "proceeding") &&
      H({ currentLocation: j, nextLocation: S, historyAction: _ })
    )
      return O;
  }
  function Tl(g) {
    let j = [];
    return (
      N.forEach((S, _) => {
        (!g || g(_)) && (S.cancel(), j.push(_), N.delete(_));
      }),
      j
    );
  }
  function _f(g, j, S) {
    if (((h = g), (w = j), (k = S || null), !y && d.navigation === fi)) {
      y = !0;
      let _ = ws(d.location, d.matches);
      _ != null && X({ restoreScrollPosition: _ });
    }
    return () => {
      (h = null), (w = null), (k = null);
    };
  }
  function ys(g, j) {
    return (
      (k &&
        k(
          g,
          j.map((_) => mh(_, d.loaderData))
        )) ||
      g.key
    );
  }
  function Mf(g, j) {
    if (h && w) {
      let S = ys(g, j);
      h[S] = w();
    }
  }
  function ws(g, j) {
    if (h) {
      let S = ys(g, j),
        _ = h[S];
      if (typeof _ == "number") return _;
    }
    return null;
  }
  function Tf(g) {
    (l = {}), (a = aa(g, o, void 0, l));
  }
  return (
    (m = {
      get basename() {
        return s;
      },
      get state() {
        return d;
      },
      get routes() {
        return i;
      },
      initialize: ne,
      subscribe: Sn,
      enableScrollRestoration: _f,
      navigate: ut,
      fetch: zf,
      revalidate: xn,
      createHref: (g) => e.history.createHref(g),
      encodeLocation: (g) => e.history.encodeLocation(g),
      getFetcher: ds,
      deleteFetcher: Ml,
      dispose: fe,
      getBlocker: Nf,
      deleteBlocker: vs,
      _internalFetchControllers: Y,
      _internalActiveDeferreds: N,
      _internalSetRoutes: Tf,
    }),
    m
  );
}
function Wh(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function sa(e, t, n, r, o, l, i) {
  let a, s;
  if (l != null && i !== "path") {
    a = [];
    for (let p of t)
      if ((a.push(p), p.route.id === l)) {
        s = p;
        break;
      }
  } else (a = t), (s = t[t.length - 1]);
  let u = is(
    o || ".",
    zl(a).map((p) => p.pathnameBase),
    lr(e.pathname, n) || e.pathname,
    i === "path"
  );
  return (
    o == null && ((u.search = e.search), (u.hash = e.hash)),
    (o == null || o === "" || o === ".") &&
      s &&
      s.route.index &&
      !ss(u.search) &&
      (u.search = u.search ? u.search.replace(/^\?/, "?index&") : "?index"),
    r &&
      n !== "/" &&
      (u.pathname = u.pathname === "/" ? n : xt([n, u.pathname])),
    yn(u)
  );
}
function Tu(e, t, n, r) {
  if (!r || !Wh(r)) return { path: n };
  if (r.formMethod && !Gh(r.formMethod))
    return { path: n, error: Ke(405, { method: r.formMethod }) };
  let o = () => ({ path: n, error: Ke(400, { type: "invalid-body" }) }),
    l = r.formMethod || "get",
    i = e ? l.toUpperCase() : l.toLowerCase(),
    a = hf(n);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!nt(i)) return o();
      let h =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
          ? Array.from(r.body.entries()).reduce((k, w) => {
              let [y, z] = w;
              return (
                "" +
                k +
                y +
                "=" +
                z +
                `
`
              );
            }, "")
          : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: i,
          formAction: a,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: h,
        },
      };
    } else if (r.formEncType === "application/json") {
      if (!nt(i)) return o();
      try {
        let h = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: i,
            formAction: a,
            formEncType: r.formEncType,
            formData: void 0,
            json: h,
            text: void 0,
          },
        };
      } catch {
        return o();
      }
    }
  }
  W(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let s, u;
  if (r.formData) (s = ua(r.formData)), (u = r.formData);
  else if (r.body instanceof FormData) (s = ua(r.body)), (u = r.body);
  else if (r.body instanceof URLSearchParams) (s = r.body), (u = Iu(s));
  else if (r.body == null) (s = new URLSearchParams()), (u = new FormData());
  else
    try {
      (s = new URLSearchParams(r.body)), (u = Iu(s));
    } catch {
      return o();
    }
  let p = {
    formMethod: i,
    formAction: a,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: u,
    json: void 0,
    text: void 0,
  };
  if (nt(p.formMethod)) return { path: n, submission: p };
  let v = Lt(n);
  return (
    t && v.search && ss(v.search) && s.append("index", ""),
    (v.search = "?" + s),
    { path: yn(v), submission: p }
  );
}
function Vh(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((o) => o.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function Du(e, t, n, r, o, l, i, a, s, u, p, v, h, k) {
  let w = k ? Object.values(k)[0] : h ? Object.values(h)[0] : void 0,
    y = e.createURL(t.location),
    z = e.createURL(o),
    f = k ? Object.keys(k)[0] : void 0,
    m = Vh(n, f).filter((x, L) => {
      if (x.route.lazy) return !0;
      if (x.route.loader == null) return !1;
      if (Qh(t.loaderData, t.matches[L], x) || i.some((Q) => Q === x.route.id))
        return !0;
      let R = t.matches[L],
        T = x;
      return Au(
        x,
        oe(
          {
            currentUrl: y,
            currentParams: R.params,
            nextUrl: z,
            nextParams: T.params,
          },
          r,
          {
            actionResult: w,
            defaultShouldRevalidate:
              l ||
              y.pathname + y.search === z.pathname + z.search ||
              y.search !== z.search ||
              mf(R, T),
          }
        )
      );
    }),
    d = [];
  return (
    s.forEach((x, L) => {
      if (!n.some((ye) => ye.route.id === x.routeId)) return;
      let R = On(p, x.path, v);
      if (!R) {
        d.push({
          key: L,
          routeId: x.routeId,
          path: x.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let T = t.fetchers.get(L),
        Q = ca(R, x.path),
        I = !1;
      u.has(L)
        ? (I = !1)
        : a.includes(L)
        ? (I = !0)
        : T && T.state !== "idle" && T.data === void 0
        ? (I = l)
        : (I = Au(
            Q,
            oe(
              {
                currentUrl: y,
                currentParams: t.matches[t.matches.length - 1].params,
                nextUrl: z,
                nextParams: n[n.length - 1].params,
              },
              r,
              { actionResult: w, defaultShouldRevalidate: l }
            )
          )),
        I &&
          d.push({
            key: L,
            routeId: x.routeId,
            path: x.path,
            matches: R,
            match: Q,
            controller: new AbortController(),
          });
    }),
    [m, d]
  );
}
function Qh(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    o = e[n.route.id] === void 0;
  return r || o;
}
function mf(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function Au(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
async function Fu(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let o = n[e.id];
  W(o, "No route found in manifest");
  let l = {};
  for (let i in r) {
    let s = o[i] !== void 0 && i !== "hasErrorBoundary";
    er(
      !s,
      'Route "' +
        o.id +
        '" has a static property "' +
        i +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + i + '" will be ignored.')
    ),
      !s && !fh.has(i) && (l[i] = r[i]);
  }
  Object.assign(o, l), Object.assign(o, oe({}, t(o), { lazy: void 0 }));
}
async function yr(e, t, n, r, o, l, i, a) {
  a === void 0 && (a = {});
  let s,
    u,
    p,
    v = (w) => {
      let y,
        z = new Promise((f, c) => (y = c));
      return (
        (p = () => y()),
        t.signal.addEventListener("abort", p),
        Promise.race([
          w({ request: t, params: n.params, context: a.requestContext }),
          z,
        ])
      );
    };
  try {
    let w = n.route[e];
    if (n.route.lazy)
      if (w) {
        let y,
          z = await Promise.all([
            v(w).catch((f) => {
              y = f;
            }),
            Fu(n.route, l, o),
          ]);
        if (y) throw y;
        u = z[0];
      } else if ((await Fu(n.route, l, o), (w = n.route[e]), w)) u = await v(w);
      else if (e === "action") {
        let y = new URL(t.url),
          z = y.pathname + y.search;
        throw Ke(405, { method: t.method, pathname: z, routeId: n.route.id });
      } else return { type: ce.data, data: void 0 };
    else if (w) u = await v(w);
    else {
      let y = new URL(t.url),
        z = y.pathname + y.search;
      throw Ke(404, { pathname: z });
    }
    W(
      u !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          n.route.id +
          "\" but didn't return anything from your `" +
          e +
          "` ") +
        "function. Please return a value or `null`."
    );
  } catch (w) {
    (s = ce.error), (u = w);
  } finally {
    p && t.signal.removeEventListener("abort", p);
  }
  if (Jh(u)) {
    let w = u.status;
    if (Ih.has(w)) {
      let f = u.headers.get("Location");
      if (
        (W(
          f,
          "Redirects returned/thrown from loaders/actions must have a Location header"
        ),
        !pf.test(f))
      )
        f = sa(new URL(t.url), r.slice(0, r.indexOf(n) + 1), i, !0, f);
      else if (!a.isStaticRequest) {
        let c = new URL(t.url),
          m = f.startsWith("//") ? new URL(c.protocol + f) : new URL(f),
          d = lr(m.pathname, i) != null;
        m.origin === c.origin && d && (f = m.pathname + m.search + m.hash);
      }
      if (a.isStaticRequest) throw (u.headers.set("Location", f), u);
      return {
        type: ce.redirect,
        status: w,
        location: f,
        revalidate: u.headers.get("X-Remix-Revalidate") !== null,
        reloadDocument: u.headers.get("X-Remix-Reload-Document") !== null,
      };
    }
    if (a.isRouteRequest)
      throw { type: s === ce.error ? ce.error : ce.data, response: u };
    let y,
      z = u.headers.get("Content-Type");
    return (
      z && /\bapplication\/json\b/.test(z)
        ? (y = await u.json())
        : (y = await u.text()),
      s === ce.error
        ? { type: s, error: new as(w, u.statusText, y), headers: u.headers }
        : { type: ce.data, data: y, statusCode: u.status, headers: u.headers }
    );
  }
  if (s === ce.error) return { type: s, error: u };
  if ($h(u)) {
    var h, k;
    return {
      type: ce.deferred,
      deferredData: u,
      statusCode: (h = u.init) == null ? void 0 : h.status,
      headers:
        ((k = u.init) == null ? void 0 : k.headers) &&
        new Headers(u.init.headers),
    };
  }
  return { type: ce.data, data: u };
}
function wr(e, t, n, r) {
  let o = e.createURL(hf(t)).toString(),
    l = { signal: n };
  if (r && nt(r.formMethod)) {
    let { formMethod: i, formEncType: a } = r;
    (l.method = i.toUpperCase()),
      a === "application/json"
        ? ((l.headers = new Headers({ "Content-Type": a })),
          (l.body = JSON.stringify(r.json)))
        : a === "text/plain"
        ? (l.body = r.text)
        : a === "application/x-www-form-urlencoded" && r.formData
        ? (l.body = ua(r.formData))
        : (l.body = r.formData);
  }
  return new Request(o, l);
}
function ua(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == "string" ? r : r.name);
  return t;
}
function Iu(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function Kh(e, t, n, r, o) {
  let l = {},
    i = null,
    a,
    s = !1,
    u = {};
  return (
    n.forEach((p, v) => {
      let h = t[v].route.id;
      if (
        (W(!qn(p), "Cannot handle redirect results in processLoaderData"),
        Dr(p))
      ) {
        let k = Un(e, h),
          w = p.error;
        r && ((w = Object.values(r)[0]), (r = void 0)),
          (i = i || {}),
          i[k.route.id] == null && (i[k.route.id] = w),
          (l[h] = void 0),
          s || ((s = !0), (a = df(p.error) ? p.error.status : 500)),
          p.headers && (u[h] = p.headers);
      } else
        cn(p)
          ? (o.set(h, p.deferredData), (l[h] = p.deferredData.data))
          : (l[h] = p.data),
          p.statusCode != null &&
            p.statusCode !== 200 &&
            !s &&
            (a = p.statusCode),
          p.headers && (u[h] = p.headers);
    }),
    r && ((i = r), (l[Object.keys(r)[0]] = void 0)),
    { loaderData: l, errors: i, statusCode: a || 200, loaderHeaders: u }
  );
}
function Ou(e, t, n, r, o, l, i, a) {
  let { loaderData: s, errors: u } = Kh(t, n, r, o, a);
  for (let p = 0; p < l.length; p++) {
    let { key: v, match: h, controller: k } = l[p];
    W(
      i !== void 0 && i[p] !== void 0,
      "Did not find corresponding fetcher result"
    );
    let w = i[p];
    if (!(k && k.signal.aborted))
      if (Dr(w)) {
        let y = Un(e.matches, h == null ? void 0 : h.route.id);
        (u && u[y.route.id]) || (u = oe({}, u, { [y.route.id]: w.error })),
          e.fetchers.delete(v);
      } else if (qn(w)) W(!1, "Unhandled fetcher revalidation redirect");
      else if (cn(w)) W(!1, "Unhandled fetcher deferred data");
      else {
        let y = Cn(w.data);
        e.fetchers.set(v, y);
      }
  }
  return { loaderData: s, errors: u };
}
function Uu(e, t, n, r) {
  let o = oe({}, t);
  for (let l of n) {
    let i = l.route.id;
    if (
      (t.hasOwnProperty(i)
        ? t[i] !== void 0 && (o[i] = t[i])
        : e[i] !== void 0 && l.route.loader && (o[i] = e[i]),
      r && r.hasOwnProperty(i))
    )
      break;
  }
  return o;
}
function Un(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function Bu(e) {
  let t = e.find((n) => n.index || !n.path || n.path === "/") || {
    id: "__shim-error-route__",
  };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function Ke(e, t) {
  let { pathname: n, routeId: r, method: o, type: l } = t === void 0 ? {} : t,
    i = "Unknown Server Error",
    a = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((i = "Bad Request"),
        o && n && r
          ? (a =
              "You made a " +
              o +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : l === "defer-action"
          ? (a = "defer() is not supported in actions")
          : l === "invalid-body" && (a = "Unable to encode submission body"))
      : e === 403
      ? ((i = "Forbidden"),
        (a = 'Route "' + r + '" does not match URL "' + n + '"'))
      : e === 404
      ? ((i = "Not Found"), (a = 'No route matches URL "' + n + '"'))
      : e === 405 &&
        ((i = "Method Not Allowed"),
        o && n && r
          ? (a =
              "You made a " +
              o.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : o && (a = 'Invalid request method "' + o.toUpperCase() + '"')),
    new as(e || 500, i, new Error(a), !0)
  );
}
function Hu(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (qn(n)) return { result: n, idx: t };
  }
}
function hf(e) {
  let t = typeof e == "string" ? Lt(e) : e;
  return yn(oe({}, t, { hash: "" }));
}
function qh(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
    ? t.hash !== ""
    : e.hash === t.hash
    ? !0
    : t.hash !== "";
}
function cn(e) {
  return e.type === ce.deferred;
}
function Dr(e) {
  return e.type === ce.error;
}
function qn(e) {
  return (e && e.type) === ce.redirect;
}
function $h(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function Jh(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function Gh(e) {
  return Fh.has(e.toLowerCase());
}
function nt(e) {
  return Dh.has(e.toLowerCase());
}
async function Wu(e, t, n, r, o, l) {
  for (let i = 0; i < n.length; i++) {
    let a = n[i],
      s = t[i];
    if (!s) continue;
    let u = e.find((v) => v.route.id === s.route.id),
      p = u != null && !mf(u, s) && (l && l[s.route.id]) !== void 0;
    if (cn(a) && (o || p)) {
      let v = r[i];
      W(v, "Expected an AbortSignal for revalidating fetcher deferred result"),
        await vf(a, v, o).then((h) => {
          h && (n[i] = h || n[i]);
        });
    }
  }
}
async function vf(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: ce.data, data: e.deferredData.unwrappedData };
      } catch (o) {
        return { type: ce.error, error: o };
      }
    return { type: ce.data, data: e.deferredData.data };
  }
}
function ss(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function ca(e, t) {
  let n = typeof t == "string" ? Lt(t).search : t.search;
  if (e[e.length - 1].route.index && ss(n || "")) return e[e.length - 1];
  let r = zl(e);
  return r[r.length - 1];
}
function Vu(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: o,
    formData: l,
    json: i,
  } = e;
  if (!(!t || !n || !r)) {
    if (o != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: o,
      };
    if (l != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: l,
        json: void 0,
        text: void 0,
      };
    if (i !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: i,
        text: void 0,
      };
  }
}
function pi(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function Yh(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function jr(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function Xh(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function Cn(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
/**
 * React Router v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ul() {
  return (
    (ul = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ul.apply(this, arguments)
  );
}
const Rl = P.createContext(null),
  us = P.createContext(null),
  kn = P.createContext(null),
  Ll = P.createContext(null),
  Nt = P.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  gf = P.createContext(null);
function Zh(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  oo() || W(!1);
  let { basename: r, navigator: o } = P.useContext(kn),
    { hash: l, pathname: i, search: a } = cs(e, { relative: n }),
    s = i;
  return (
    r !== "/" && (s = i === "/" ? r : xt([r, i])),
    o.createHref({ pathname: s, search: a, hash: l })
  );
}
function oo() {
  return P.useContext(Ll) != null;
}
function lo() {
  return oo() || W(!1), P.useContext(Ll).location;
}
function yf(e) {
  P.useContext(kn).static || P.useLayoutEffect(e);
}
function wf() {
  let { isDataRoute: e } = P.useContext(Nt);
  return e ? pv() : bh();
}
function bh() {
  oo() || W(!1);
  let e = P.useContext(Rl),
    { basename: t, navigator: n } = P.useContext(kn),
    { matches: r } = P.useContext(Nt),
    { pathname: o } = lo(),
    l = JSON.stringify(zl(r).map((s) => s.pathnameBase)),
    i = P.useRef(!1);
  return (
    yf(() => {
      i.current = !0;
    }),
    P.useCallback(
      function (s, u) {
        if ((u === void 0 && (u = {}), !i.current)) return;
        if (typeof s == "number") {
          n.go(s);
          return;
        }
        let p = is(s, JSON.parse(l), o, u.relative === "path");
        e == null &&
          t !== "/" &&
          (p.pathname = p.pathname === "/" ? t : xt([t, p.pathname])),
          (u.replace ? n.replace : n.push)(p, u.state, u);
      },
      [t, n, l, o, e]
    )
  );
}
const ev = P.createContext(null);
function tv(e) {
  let t = P.useContext(Nt).outlet;
  return t && P.createElement(ev.Provider, { value: e }, t);
}
function nv() {
  let { matches: e } = P.useContext(Nt),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function cs(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = P.useContext(Nt),
    { pathname: o } = lo(),
    l = JSON.stringify(zl(r).map((i) => i.pathnameBase));
  return P.useMemo(() => is(e, JSON.parse(l), o, n === "path"), [e, l, o, n]);
}
function rv(e, t, n) {
  oo() || W(!1);
  let { navigator: r } = P.useContext(kn),
    { matches: o } = P.useContext(Nt),
    l = o[o.length - 1],
    i = l ? l.params : {};
  l && l.pathname;
  let a = l ? l.pathnameBase : "/";
  l && l.route;
  let s = lo(),
    u;
  if (t) {
    var p;
    let y = typeof t == "string" ? Lt(t) : t;
    a === "/" || ((p = y.pathname) != null && p.startsWith(a)) || W(!1),
      (u = y);
  } else u = s;
  let v = u.pathname || "/",
    h = a === "/" ? v : v.slice(a.length) || "/",
    k = On(e, { pathname: h }),
    w = sv(
      k &&
        k.map((y) =>
          Object.assign({}, y, {
            params: Object.assign({}, i, y.params),
            pathname: xt([
              a,
              r.encodeLocation
                ? r.encodeLocation(y.pathname).pathname
                : y.pathname,
            ]),
            pathnameBase:
              y.pathnameBase === "/"
                ? a
                : xt([
                    a,
                    r.encodeLocation
                      ? r.encodeLocation(y.pathnameBase).pathname
                      : y.pathnameBase,
                  ]),
          })
        ),
      o,
      n
    );
  return t && w
    ? P.createElement(
        Ll.Provider,
        {
          value: {
            location: ul(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              u
            ),
            navigationType: pe.Pop,
          },
        },
        w
      )
    : w;
}
function ov() {
  let e = fv(),
    t = df(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    l = null;
  return P.createElement(
    P.Fragment,
    null,
    P.createElement("h2", null, "Unexpected Application Error!"),
    P.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? P.createElement("pre", { style: o }, n) : null,
    l
  );
}
const lv = P.createElement(ov, null);
class iv extends P.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error || n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error
      ? P.createElement(
          Nt.Provider,
          { value: this.props.routeContext },
          P.createElement(gf.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function av(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = P.useContext(Rl);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    P.createElement(Nt.Provider, { value: t }, r)
  );
}
function sv(e, t, n) {
  var r;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
    var o;
    if ((o = n) != null && o.errors) e = n.matches;
    else return null;
  }
  let l = e,
    i = (r = n) == null ? void 0 : r.errors;
  if (i != null) {
    let a = l.findIndex(
      (s) => s.route.id && (i == null ? void 0 : i[s.route.id])
    );
    a >= 0 || W(!1), (l = l.slice(0, Math.min(l.length, a + 1)));
  }
  return l.reduceRight((a, s, u) => {
    let p = s.route.id ? (i == null ? void 0 : i[s.route.id]) : null,
      v = null;
    n && (v = s.route.errorElement || lv);
    let h = t.concat(l.slice(0, u + 1)),
      k = () => {
        let w;
        return (
          p
            ? (w = v)
            : s.route.Component
            ? (w = P.createElement(s.route.Component, null))
            : s.route.element
            ? (w = s.route.element)
            : (w = a),
          P.createElement(av, {
            match: s,
            routeContext: { outlet: a, matches: h, isDataRoute: n != null },
            children: w,
          })
        );
      };
    return n && (s.route.ErrorBoundary || s.route.errorElement || u === 0)
      ? P.createElement(iv, {
          location: n.location,
          revalidation: n.revalidation,
          component: v,
          error: p,
          children: k(),
          routeContext: { outlet: null, matches: h, isDataRoute: !0 },
        })
      : k();
  }, null);
}
var jf = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(jf || {}),
  cl = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(cl || {});
function uv(e) {
  let t = P.useContext(Rl);
  return t || W(!1), t;
}
function cv(e) {
  let t = P.useContext(us);
  return t || W(!1), t;
}
function dv(e) {
  let t = P.useContext(Nt);
  return t || W(!1), t;
}
function kf(e) {
  let t = dv(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || W(!1), n.route.id;
}
function fv() {
  var e;
  let t = P.useContext(gf),
    n = cv(cl.UseRouteError),
    r = kf(cl.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function pv() {
  let { router: e } = uv(jf.UseNavigateStable),
    t = kf(cl.UseNavigateStable),
    n = P.useRef(!1);
  return (
    yf(() => {
      n.current = !0;
    }),
    P.useCallback(
      function (o, l) {
        l === void 0 && (l = {}),
          n.current &&
            (typeof o == "number"
              ? e.navigate(o)
              : e.navigate(o, ul({ fromRouteId: t }, l)));
      },
      [e, t]
    )
  );
}
const mv = "startTransition",
  Qu = Zf[mv];
function hv(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [o, l] = P.useState(n.state),
    { v7_startTransition: i } = r || {},
    a = P.useCallback(
      (v) => {
        i && Qu ? Qu(() => l(v)) : l(v);
      },
      [l, i]
    );
  P.useLayoutEffect(() => n.subscribe(a), [n, a]);
  let s = P.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (v) => n.navigate(v),
        push: (v, h, k) =>
          n.navigate(v, {
            state: h,
            preventScrollReset: k == null ? void 0 : k.preventScrollReset,
          }),
        replace: (v, h, k) =>
          n.navigate(v, {
            replace: !0,
            state: h,
            preventScrollReset: k == null ? void 0 : k.preventScrollReset,
          }),
      }),
      [n]
    ),
    u = n.basename || "/",
    p = P.useMemo(
      () => ({ router: n, navigator: s, static: !1, basename: u }),
      [n, s, u]
    );
  return P.createElement(
    P.Fragment,
    null,
    P.createElement(
      Rl.Provider,
      { value: p },
      P.createElement(
        us.Provider,
        { value: o },
        P.createElement(
          yv,
          {
            basename: u,
            location: o.location,
            navigationType: o.historyAction,
            navigator: s,
          },
          o.initialized
            ? P.createElement(vv, { routes: n.routes, state: o })
            : t
        )
      )
    ),
    null
  );
}
function vv(e) {
  let { routes: t, state: n } = e;
  return rv(t, void 0, n);
}
function gv(e) {
  return tv(e.context);
}
function yv(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = pe.Pop,
    navigator: l,
    static: i = !1,
  } = e;
  oo() && W(!1);
  let a = t.replace(/^\/*/, "/"),
    s = P.useMemo(() => ({ basename: a, navigator: l, static: i }), [a, l, i]);
  typeof r == "string" && (r = Lt(r));
  let {
      pathname: u = "/",
      search: p = "",
      hash: v = "",
      state: h = null,
      key: k = "default",
    } = r,
    w = P.useMemo(() => {
      let y = lr(u, a);
      return y == null
        ? null
        : {
            location: { pathname: y, search: p, hash: v, state: h, key: k },
            navigationType: o,
          };
    }, [a, u, p, v, h, k, o]);
  return w == null
    ? null
    : P.createElement(
        kn.Provider,
        { value: s },
        P.createElement(Ll.Provider, { children: n, value: w })
      );
}
new Promise(() => {});
function wv(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: P.createElement(e.Component),
        Component: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: P.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function tr() {
  return (
    (tr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    tr.apply(this, arguments)
  );
}
function Sf(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    l;
  for (l = 0; l < r.length; l++)
    (o = r[l]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function jv(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function kv(e, t) {
  return e.button === 0 && (!t || t === "_self") && !jv(e);
}
const Sv = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
  ],
  xv = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "children",
  ];
function Ev(e, t) {
  return Hh({
    basename: t == null ? void 0 : t.basename,
    future: tr({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
    history: uh({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || Cv(),
    routes: e,
    mapRouteProperties: wv,
  }).initialize();
}
function Cv() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = tr({}, t, { errors: Pv(t.errors) })), t;
}
function Pv(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, o] of t)
    if (o && o.__type === "RouteErrorResponse")
      n[r] = new as(o.status, o.statusText, o.data, o.internal === !0);
    else if (o && o.__type === "Error") {
      if (o.__subType) {
        let l = window[o.__subType];
        if (typeof l == "function")
          try {
            let i = new l(o.message);
            (i.stack = ""), (n[r] = i);
          } catch {}
      }
      if (n[r] == null) {
        let l = new Error(o.message);
        (l.stack = ""), (n[r] = l);
      }
    } else n[r] = o;
  return n;
}
const zv =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Rv = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Nl = P.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: o,
        reloadDocument: l,
        replace: i,
        state: a,
        target: s,
        to: u,
        preventScrollReset: p,
      } = t,
      v = Sf(t, Sv),
      { basename: h } = P.useContext(kn),
      k,
      w = !1;
    if (typeof u == "string" && Rv.test(u) && ((k = u), zv))
      try {
        let c = new URL(window.location.href),
          m = u.startsWith("//") ? new URL(c.protocol + u) : new URL(u),
          d = lr(m.pathname, h);
        m.origin === c.origin && d != null
          ? (u = d + m.search + m.hash)
          : (w = !0);
      } catch {}
    let y = Zh(u, { relative: o }),
      z = Lv(u, {
        replace: i,
        state: a,
        target: s,
        preventScrollReset: p,
        relative: o,
      });
    function f(c) {
      r && r(c), c.defaultPrevented || z(c);
    }
    return P.createElement(
      "a",
      tr({}, v, { href: k || y, onClick: w || l ? r : f, ref: n, target: s })
    );
  }),
  Ku = P.forwardRef(function (t, n) {
    let {
        "aria-current": r = "page",
        caseSensitive: o = !1,
        className: l = "",
        end: i = !1,
        style: a,
        to: s,
        children: u,
      } = t,
      p = Sf(t, xv),
      v = cs(s, { relative: p.relative }),
      h = lo(),
      k = P.useContext(us),
      { navigator: w } = P.useContext(kn),
      y = w.encodeLocation ? w.encodeLocation(v).pathname : v.pathname,
      z = h.pathname,
      f =
        k && k.navigation && k.navigation.location
          ? k.navigation.location.pathname
          : null;
    o ||
      ((z = z.toLowerCase()),
      (f = f ? f.toLowerCase() : null),
      (y = y.toLowerCase()));
    let c = z === y || (!i && z.startsWith(y) && z.charAt(y.length) === "/"),
      m =
        f != null &&
        (f === y || (!i && f.startsWith(y) && f.charAt(y.length) === "/")),
      d = c ? r : void 0,
      x;
    typeof l == "function"
      ? (x = l({ isActive: c, isPending: m }))
      : (x = [l, c ? "active" : null, m ? "pending" : null]
          .filter(Boolean)
          .join(" "));
    let L = typeof a == "function" ? a({ isActive: c, isPending: m }) : a;
    return P.createElement(
      Nl,
      tr({}, p, { "aria-current": d, className: x, ref: n, style: L, to: s }),
      typeof u == "function" ? u({ isActive: c, isPending: m }) : u
    );
  });
var qu;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher");
})(qu || (qu = {}));
var $u;
(function (e) {
  (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})($u || ($u = {}));
function Lv(e, t) {
  let {
      target: n,
      replace: r,
      state: o,
      preventScrollReset: l,
      relative: i,
    } = t === void 0 ? {} : t,
    a = wf(),
    s = lo(),
    u = cs(e, { relative: i });
  return P.useCallback(
    (p) => {
      if (kv(p, n)) {
        p.preventDefault();
        let v = r !== void 0 ? r : yn(s) === yn(u);
        a(e, { replace: v, state: o, preventScrollReset: l, relative: i });
      }
    },
    [s, a, u, r, o, n, e, l, i]
  );
}
const xf = [
    {
      id: "c67ab8a7",
      title: "Appartement cosy",
      cover:
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
      pictures: [
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg",
      ],
      description:
        "Votre maison loin de chez vous. Que vous veniez de l'autre bout du monde, ou juste de quelques stations de RER, vous vous sentirez chez vous dans notre appartement.",
      host: {
        name: "Nathalie Jean",
        picture:
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg",
      },
      rating: "5",
      location: "Ile de France - Paris 17e",
      equipments: [
        "Équipements de base",
        "Micro-Ondes",
        "Douche italienne",
        "Frigo",
        "WIFI",
      ],
      tags: ["Batignolle", "Montmartre"],
    },
    {
      id: "b9123946",
      title: "Magnifique appartement proche Canal Saint Martin",
      cover:
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg",
      pictures: [
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-2.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-3.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-4.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-5.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-6.jpg",
      ],
      description:
        "Profitez du charme de la vie parisienne dans un magnifique appartement. A 3 minutes à pied du Canl Saint Martin, vous serez proche des transports, mais également de nombreux commerces. L'appartement est tout équipé, et possède également un parking pour ceux qui souhaitent se déplacer en voiture.",
      host: {
        name: "Della Case",
        picture:
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-1.jpg",
      },
      rating: "4",
      location: "Ile de France - Paris 10e",
      equipments: [
        "Parking",
        "Sèche Cheveux",
        "Machine à laver",
        "Wi-fi",
        "Cuisine équipée",
        "Télévision",
      ],
      tags: ["Canal Saint Martin", "République", "Appartement"],
    },
    {
      id: "46d188c5",
      title: "Studio de charme - Buttes Chaumont",
      cover:
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-1.jpg",
      pictures: [
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-1.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-2.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-3.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-4.jpg",
      ],
      description:
        "À seulement deux pas des Buttes Chaumont, venez découvrir Paris dans ce studio tout équipé. Entièrement équipé pour votre confort et élégamment décoré, il vous permettra de vivre comme un Parisien le temps de votre séjour.",
      host: {
        name: "Franck Maher",
        picture:
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-2.jpg",
      },
      rating: "3",
      location: "Ile de France - Paris 20e",
      equipments: ["Wi-fi", "Cuisine équipée", "Télévision", "Sèche Cheveux"],
      tags: ["Buttes Chaumont", "Laumière", "Studio"],
    },
    {
      id: "7af00cd6",
      title: "Nid douillet au coeur du 11ème",
      cover:
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-3-1.jpg",
      pictures: [
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-3-1.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-3-2.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-3-3.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-3-4.jpg",
      ],
      description:
        "Venez découvrir Paris en séjournant dans ce nid douillet au coeur du 11ème. La vue sur le parc résidentiel saura vous reposer de vos longues journées de tourisme dans la capitale française. Et pour les plus fêtards d'entre vous, la rue Jean Pierre Timbaud vous permettra de découvrir la night-life parisienne à seulement 5 minutes de l'appartement.",
      host: {
        name: "Della Case",
        picture:
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-1.jpg",
      },
      rating: "3",
      location: "Ile de France - Paris 11e",
      equipments: [
        "Micro-Ondes",
        "Wi-fi",
        "Chambre Séparée",
        "Climatisation",
        "Télévision",
      ],
      tags: ["Parmentier", "Marais", "Parc", "Night Life"],
    },
    {
      id: "0979876d",
      title: "Appartement de Standing - 10e",
      cover:
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-4-1.jpg",
      pictures: [
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-4-1.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-4-2.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-4-3.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-4-4.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-4-5.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-4-6.jpg",
      ],
      description:
        "Ce loft entièrement rénové, et équipé de meubles de luxe saura vous séduire. Idéalement situé dans le 10ème arrondissement, vous déplacer dans Paris sera un véritable jeu d'enfant.",
      host: {
        name: "Franck Maher",
        picture:
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-2.jpg",
      },
      rating: "5",
      location: "Ile de France - Paris 10e",
      equipments: [
        "Frigo Américain",
        "Sèche Cheveux",
        "Wi-fi",
        "Chambre Séparée",
        "Parking",
      ],
      tags: ["Goncourt", "Proche commerces"],
    },
    {
      id: "f72a452f",
      title: "Studio d'artiste",
      cover:
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-5-1.jpg",
      pictures: [
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-5-1.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-5-2.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-5-3.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-5-4.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-5-5.jpg",
      ],
      description:
        "Venez vous imprégner de la culture parisienne dans cet ancien studio d'artiste décoré avec goût, au coeur de Montmartre.",
      host: {
        name: "Line Rolland",
        picture:
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-3.jpg",
      },
      rating: "5",
      location: "Ile de France - Paris 18e",
      equipments: ["Chambre Séparée", "Parking"],
      tags: ["Montmartre", "Culture", "Charme"],
    },
    {
      id: "b4c67936",
      title: "Cheap - Studio 18ème",
      cover:
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-6-1.jpg",
      pictures: [
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-6-1.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-6-2.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-6-3.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-6-4.jpg",
      ],
      description:
        "Ce Studio entièrement fonctionnel sera votre parfait pied à terre pour toutes vos excursions parisiennes. Idéalement situé près des lignes 2 et 4, vous accéderez très rapidement à tous les points touristiques de Paris.",
      host: {
        name: "Hugo Perrier",
        picture:
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-4.jpg",
      },
      rating: "3",
      location: "Ile de France - Paris 18e",
      equipments: [
        "Salle de bains",
        "Frigo",
        "Wi-fi",
        "Sèche Cheveux",
        "Bureau",
        "Parking",
      ],
      tags: ["Transports", "Cheap", "18ème"],
    },
    {
      id: "bc6f7112",
      title: "Superbe appartement proche Tour Eiffel",
      cover:
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-7-1.jpg",
      pictures: [
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-7-1.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-7-2.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-7-3.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-7-4.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-7-5.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-7-6.jpg",
      ],
      description:
        "Ce superbe appartement vous surprendra par son charme. Entièrement refait à neuf, il est équipé avec goût. La taille des pièces vous fera douter que vous êtes à Paris. Mais il vous suffit de sortir pour voir que vous êtes au coeur des plus belles attractions de Paris : le Louvre, la Tour Eiffel, le Grand Palais sont à deux pas. À vous de venir découvrir Paris !",
      host: {
        name: "Sébastien Fournier",
        picture:
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-5.jpg",
      },
      rating: "5",
      location: "Ile de France - Paris 6e",
      equipments: [
        "Wi-fi",
        "Sèche Cheveux",
        "Machine à laver",
        "Parking",
        "Lit King Size",
        "Ascenseur",
      ],
      tags: ["Luxe", "Tour Eiffel", "T3", "6ème"],
    },
    {
      id: "cb2f9222",
      title: "Suite familiale",
      cover:
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-8-1.jpg",
      pictures: [
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-8-1.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-8-2.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-8-3.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-8-4.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-8-5.jpg",
      ],
      description:
        "Paris vous tend les bras ! En famille ou entre amis, venez découvrir la ville de l'amour dans un appartement de goût. Vous pourrez profiter de tous les commerces seulement à quelques minutes de l'appartement. Sa proximité avec la gare Montparnasse en fait également un choix idéal pour celles et ceux qui doivent prendre un train.",
      host: {
        name: "Adrien Chiran",
        picture:
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-6.jpg",
      },
      rating: "4",
      location: "Ile de France - Paris 14e",
      equipments: [
        "Climatisation",
        "Machine à laver",
        "Sèche Cheveux",
        "Wi-fi",
        "Parking",
      ],
      tags: ["Montparnasse", "Commerces", "Famille"],
    },
    {
      id: "d60ca600",
      title: "Appartement moderne sur parc",
      cover:
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-9-1.jpg",
      pictures: [
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-9-1.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-9-2.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-9-3.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-9-4.jpg",
      ],
      description:
        "Respirer en plein coeur de Paris ? C'est possible ! Avec vue sur un parc résidentiel, vous pourrez ouvrir les fenêtres sans avoir à souffrir du bruit des voitures et de la pollution. Au contraire, vous pourrez écouter les oiseaux. Notre appartement est également idéalement situé au coeur du 11ème arrondissement. Proche des lignes 3 et 2, vous pourrez découvrir Paris sans effort !",
      host: {
        name: "Adrien Chiran",
        picture:
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-6.jpg",
      },
      rating: "3",
      location: "Ile de France - Paris 11e",
      equipments: [
        "Vue Parc",
        "Chauffage",
        "Sèche linge",
        "Sèche Cheveux",
        "Wi-fi",
        "Ascenseur",
      ],
      tags: ["Père Lachaise", "11e", "Metro 3", "Metro 2"],
    },
    {
      id: "2cf259e1",
      title: "Charmant Studio Marais",
      cover:
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-10-1.jpg",
      pictures: [
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-10-1.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-10-2.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-10-3.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-10-4.jpg",
      ],
      description:
        "Situé en plein coeur du Marais, notre studio est idéal pour les touristes en quête de découverte. Sa cuisine toute équipée est particulièrement pratique.",
      host: {
        name: "Victor Moran",
        picture:
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-7.jpg",
      },
      rating: "4",
      location: "Ile de France - Paris 11e",
      equipments: ["Clic-clac", "Four", "Sèche Cheveux", "Wi-fi"],
      tags: ["Marais", "Studio", "Parc"],
    },
    {
      id: "5323c29b",
      title: "Studio fonctionnel République",
      cover:
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-11-3.jpg",
      pictures: [
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-11-3.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-11-2.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-11-4.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-11-5.jpg",
      ],
      description:
        "Idéalement situé à 2 pas de la place de la République, ce studio particulièrement fonctionnel est parfait pour découvrir Paris. Proche de tous les points d'intérêts grâce aux 5 lignes de métro qui sont à 5 minutes, vous pourrez rentabiliser votre temps passé à la capitale.",
      host: {
        name: "Sarah Devit",
        picture:
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-8.jpg",
      },
      rating: "3",
      location: "Ile de France - Paris 3e",
      equipments: [
        "Rangements",
        "Lit",
        "Sèche Cheveux",
        "Wi-fi",
        "TV",
        "Bouilloire",
      ],
      tags: ["Marais", "République", "Studio", "Proche Métros", "Commerces"],
    },
    {
      id: "af6d2d48",
      title: "Bungalow dans la forêt",
      cover:
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-12-1.jpg",
      pictures: [
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-12-1.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-12-2.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-12-3.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-12-4.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-12-5.jpg",
      ],
      description:
        "Quittez Paris pour vous mettre au vert. À seulement 30 minutes de la Gare du Nord, venez découvrir la forêt d'Ecouen directement depuis la fenêtre de votre bungalow. Entièrement équipé, ce logement saura vous accueillir dans le confort, tout en vous permettant de vous concentrer sur l'essentiel. Le matin, ouvrez les fenêtres, et profitez du chant des oiseaux.",
      host: {
        name: "Sarah Devit",
        picture:
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-8.jpg",
      },
      rating: "5",
      location: "Ile de France - Ecouen",
      equipments: [
        "SDB",
        "Cuisine équipée",
        "Toilettes sèches",
        "Frigo",
        "Bouilloire",
      ],
      tags: ["Forêt", "Nature", "Musée d'Ecouen"],
    },
    {
      id: "7cbb378e",
      title: "Grande Maison proche banlieue",
      cover:
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-13-2.jpg",
      pictures: [
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-13-2.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-13-3.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-13-4.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-13-5.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-13-6.jpg",
      ],
      description:
        "Vous chercher un endroit pour fêter un anniversaire entre amis tout en restant proche de Paris ? Ne cherchez plus ! Entièrement équipée, cette maison est l'endroit idéal pour se regrouper.",
      host: {
        name: "Karen Guillet",
        picture:
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-9.jpg",
      },
      rating: "4",
      location: "Ile de France - Arnouville",
      equipments: [
        "SDB",
        "Cuisine équipée",
        "Frigo",
        "Bouilloire",
        "WIFI",
        "Télévision",
        "Cintres",
        "Équipements de base",
      ],
      tags: ["Forêt", "Nature", "Grande maison"],
    },
    {
      id: "ba55a0cc",
      title: "Maison T5 - Le Vésinet",
      cover:
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-14-1.jpg",
      pictures: [
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-14-1.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-14-2.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-14-3.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-14-4.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-14-5.jpg",
      ],
      description:
        "Maison T5. Idéale pour grands groupes. 45 minutes de Paris Saint-Lazare.",
      host: {
        name: "Karen Guillet",
        picture:
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-9.jpg",
      },
      rating: "3",
      location: "Ile de France - Arnouville",
      equipments: [
        "Bouilloire",
        "SDB",
        "Cuisine équipée",
        "Frigo",
        "WIFI",
        "TV",
        "Cintres",
        "Four",
        "Micro-Ondes",
        "Parking",
      ],
      tags: ["Nature", "Groupe", "Maison"],
    },
    {
      id: "1e181317",
      title: "Loft de Luxe à la Défense",
      cover:
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-15-1.jpg",
      pictures: [
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-15-1.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-15-2.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-15-3.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-15-4.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-15-5.jpg",
      ],
      description:
        "Si vous êtes à la recherche de l'endroit idéal pour poser vos valises entre deux rdvs d'affaire, ne cherchez plus. Notre loft est l'endroit idéal. En plein coeur de la Défense, il dispose également de tous les équipements pour que vous soyez comme chez vous.",
      host: {
        name: "Julie Donatella",
        picture:
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-10.jpg",
      },
      rating: "3",
      location: "Ile de France - La Défense",
      equipments: [
        "Baie vitrée",
        "Télévision",
        "Four",
        "Frigo",
        "Wi-fi",
        "Micro-Ondes",
        "Parking",
      ],
      tags: ["La Défense", "Loft", "Luxe"],
    },
    {
      id: "1e180563",
      title: "Charmant apt aux portes de Paris",
      cover:
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-16-1.jpg",
      pictures: [
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-16-1.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-16-2.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-16-3.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-16-4.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-16-5.jpg",
      ],
      description:
        "Ce charmant appartement offre des prestations de luxe, aux portes de Paris. À deux pas de la ligne 3, vous pourrez accéder à toutes les attractions touristiques dont vous avez toujours rêvées.",
      host: {
        name: "Julie Donatella",
        picture:
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-10.jpg",
      },
      rating: "4",
      location: "Ile de France - Levallois",
      equipments: [
        "Télévision",
        "Four",
        "Frigo",
        "Hotte",
        "Wi-fi",
        "Micro-Ondes",
      ],
      tags: ["Vue Parc", "Apt de Charme"],
    },
    {
      id: "2139a317",
      title: "Cheap - Chambre Paris 20",
      cover:
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-17-1.jpg",
      pictures: [
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-17-1.jpg",
      ],
      description:
        "Cette chambre dispose de toutes les facilités nécessaires. Proche métro et commerces.",
      host: {
        name: "Hugo Perrier",
        picture:
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-4.jpg",
      },
      rating: "2",
      location: "Ile de France - Paris 20e",
      equipments: ["Bouilloire", "Wi-fi", "Micro-Ondes"],
      tags: ["Vue Parc", "Métros"],
    },
    {
      id: "6ff132c6",
      title: "Charmant studio",
      cover:
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-18-1.jpg",
      pictures: [
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-18-1.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-18-2.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-18-3.jpg",
      ],
      description:
        "Ce studio décoré avec goût sera votre nid douillet après une longue journée passée à découvrir Paris.",
      host: {
        name: "Michel Romy",
        picture:
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-11.jpg",
      },
      rating: "4",
      location: "Ile de France - Paris 13e",
      equipments: [
        "Équipements de base",
        "Four",
        "Frigo",
        "Wi-fi",
        "Micro-Ondes",
      ],
      tags: ["Studio", "Charmant", "13e"],
    },
    {
      id: "cb02d69b",
      title: "Magnifique appartement Rivoli",
      cover:
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-19-1.jpg",
      pictures: [
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-19-1.jpg",
      ],
      description:
        "Au coeur du quartier historique du Marais, cet appartement est idéal pour un couple à la découverte de Paris. Situé sur la rue de Rivoli, il est à 5 minutes du Louvre.",
      host: {
        name: "Nathalie Jean",
        picture:
          "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg",
      },
      rating: "4",
      location: "Ile de France - Paris 13e",
      equipments: [
        "Wi-fi",
        "Équipements de base",
        "Micro-Ondes",
        "Frigo",
        "Baignoire",
      ],
      tags: ["Louvre", "Marais", "Rivoli"],
    },
  ],
  Nv = "/assets/arrow_left-46efa093.svg",
  _v = "/assets/arrow_right-71015803.svg";
function Mv({ slideshow: e }) {
  const [t, n] = P.useState(0),
    r = e.length,
    o = t + 1,
    l = () => {
      n(t === r - 1 ? 0 : t + 1);
    },
    i = () => {
      n(t === 0 ? r - 1 : t - 1);
    };
  return C.jsxs("div", {
    id: "slideshow-container",
    children: [
      C.jsx("img", {
        src: Nv,
        alt: "flèche gauche carroussel",
        id: "arrow_left_svg",
        onClick: i,
      }),
      C.jsx("img", {
        src: e[t],
        alt: "image dans le carroussel",
        id: "slideshow-container_img",
      }),
      C.jsx("img", {
        src: _v,
        alt: "flèche droite carroussel",
        id: "arrow_right_svg",
        onClick: l,
      }),
      C.jsxs("div", { id: "slideshow-position", children: [o, "/", r] }),
    ],
  });
}
function Tv({ tags: e }) {
  return (
    e &&
    Array.isArray(e) &&
    C.jsx("ul", {
      className: "accommodations-container__tags",
      children: e.map((t, n) => C.jsx("li", { children: t }, n)),
    })
  );
}
const Dv = "/assets/dropdown_open-7b782203.svg",
  Av = "/assets/dropdown_close-0a0622ab.svg";
function da({ title: e, content: t }) {
  const [n, r] = P.useState(!1),
    o = () => {
      r(!n);
    };
  return C.jsxs("div", {
    id: "collapse-wrapper",
    children: [
      C.jsxs("div", {
        id: "collapse-wrapper__title",
        children: [
          C.jsx("img", {
            src: n ? Av : Dv,
            id: n ? "dropdown_close" : "dropdown_open",
            onClick: o,
          }),
          C.jsx("h3", { children: e }),
        ],
      }),
      C.jsx("div", {
        id: n
          ? "collapse-wrapper__content"
          : "collapse-wrapper-content__hidden",
        children: Array.isArray(t)
          ? t.map((l, i) => C.jsx("p", { children: l }, i))
          : C.jsx("p", { children: t }),
      }),
    ],
  });
}
const Fv = "/assets/empty_star-29a6bb58.svg",
  Iv = "/assets/full_star-ace9170c.svg";
function Ov({ dataCurrentAccommodation: e }) {
  const t = e.rating,
    n = [];
  for (let r = 1; r <= 5; r++)
    r <= t
      ? n.push(
          C.jsx(
            "span",
            {
              children: C.jsx("img", {
                src: Iv,
                alt: "étoile pleine",
                className: "star",
              }),
            },
            r
          )
        )
      : n.push(
          C.jsx(
            "span",
            {
              children: C.jsx("img", {
                src: Fv,
                alt: "étoile vide",
                className: "star",
              }),
            },
            r
          )
        );
  return C.jsx("div", { className: "ratings-container", children: n });
}
function Uv({
  title: e,
  location: t,
  tags: n,
  host: r,
  dataCurrentAccommodation: o,
}) {
  return C.jsxs(C.Fragment, {
    children: [
      C.jsxs("main", {
        className: "accommodations-container__infos",
        children: [
          C.jsxs("section", {
            className: "accommodations-container-infos__leftPart",
            children: [
              C.jsx("h1", {
                className: "accommodations-container__title",
                children: e,
              }),
              C.jsx("h2", {
                className: "accommodations-container__location",
                children: t,
              }),
              C.jsx(Tv, { tags: n }),
            ],
          }),
          C.jsxs("section", {
            className: "accommodations-container-infos__rightPart",
            children: [
              C.jsxs("div", {
                className: "host-infos",
                children: [
                  C.jsx("h3", {
                    className: "accommodations-container__name",
                    children: r == null ? void 0 : r.name,
                  }),
                  C.jsx("img", {
                    src: r == null ? void 0 : r.picture,
                    className: "profil",
                    alt: "image du propriétaire",
                  }),
                ],
              }),
              C.jsx(Ov, { dataCurrentAccommodation: o }),
            ],
          }),
        ],
      }),
      C.jsxs("section", {
        className: "accommodations-collapse",
        children: [
          C.jsx("div", {
            className: "accommodations-collapse__item",
            children: C.jsx(da, {
              title: "Description",
              content: o.description,
            }),
          }),
          C.jsx("div", {
            className: "accommodations-collapse__item",
            children: C.jsx(da, {
              title: "Equipements",
              content: o.equipments,
            }),
          }),
        ],
      }),
    ],
  });
}
function Bv() {
  const [e, t] = P.useState([]),
    [n, r] = P.useState({}),
    o = nv().id,
    l = wf();
  return (
    P.useEffect(() => {
      const i = xf.find((a) => a.id === o);
      if (i) {
        const a = i.pictures || [];
        t(a), r(i);
      } else l("*");
    }, [o, l]),
    C.jsxs("main", {
      className: "accommodations-container",
      children: [
        C.jsx(Mv, { slideshow: e }),
        C.jsx(Uv, {
          title: n.title || "",
          location: n.location || "",
          tags: n.tags || [],
          host: n.host || {},
          dataCurrentAccommodation: n,
        }),
      ],
    })
  );
}
const Hv = "/assets/homepage_bg-f7f52dd6.png",
  Wv = "/assets/about_bg-500d7faf.png";
function Ef({ isAbout: e = !1 }) {
  return C.jsxs("div", {
    id: "banner-container",
    children: [
      C.jsx("img", {
        src: e ? Wv : Hv,
        alt: "homepage_background",
        id: "banner-container__img",
      }),
      e
        ? null
        : C.jsx("h1", {
            id: "banner-container__title",
            children: "Chez vous, partout et ailleurs",
          }),
    ],
  });
}
function Vv({ title: e, cover: t, id: n }) {
  return C.jsx(Nl, {
    to: `logements/${n}`,
    children: C.jsxs("div", {
      id: "cards-container",
      children: [
        C.jsx("img", { src: t, alt: "cover", id: "card-container__img" }),
        C.jsx("h2", { id: "card-container__title", children: e }),
      ],
    }),
  });
}
function Qv() {
  const [e] = P.useState(xf),
    [t, n] = P.useState(6),
    r = () => {
      n(t + 6);
    };
  return C.jsx(C.Fragment, {
    children: C.jsxs("main", {
      className: "gallery-container",
      children: [
        C.jsx("div", {
          className: "gallery",
          children: e
            .slice(0, t)
            .map((o) =>
              C.jsx(Vv, { id: o.id, title: o.title, cover: o.cover }, o.id)
            ),
        }),
        t < e.length &&
          C.jsx("button", {
            id: "display-more",
            onClick: r,
            children: "Afficher plus",
          }),
      ],
    }),
  });
}
function Kv() {
  return C.jsxs(C.Fragment, {
    children: [C.jsx(Ef, { isAbout: !1 }), C.jsx(Qv, {})],
  });
}
const qv = [
  {
    title: "Fiabilité",
    description:
      "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
  },
  {
    title: "Respect",
    description:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    title: "Service",
    description:
      "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
  },
  {
    title: "Sécurité",
    description:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
];
function $v() {
  return C.jsxs(C.Fragment, {
    children: [
      C.jsx(Ef, { isAbout: !0 }),
      C.jsx("div", {
        id: "about-collapse",
        children: qv.map((e, t) =>
          C.jsx(
            da,
            { title: e.title, content: e.description },
            `${e.title}-${t}`
          )
        ),
      }),
    ],
  });
}
const Jv =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANMAAABECAYAAAAbZAAiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAsOSURBVHgB7Z3/dds2EMe/6uv/yQaFJ0g8QZgJ0kwQeoLGE5SZwM4EkSeIPUHpCaJOEHQDdwIVJxwshpHEAwESoIrPe3xKLJjmD3yBw+EOWG3rugHwJ05ztVqv10iIuc4b8/FRUPSTudYGhcLM/IIFYIREYi9CKmRN9mJiITWCop+LkAopyVpMHkK6M0KS9FyFwmRkKyYPIT0aIdUoFBKTpZg8hLQxx+8oFDIgOzF5CEmb463plZ5QKGRAVmLaXl19QBFSYaFkI6adkLbbtaCohhWSRqGQEVmIqQipcA4kF5MZI70uQiqcA0nFtBMS8JegKI2N3hchFXImmZg6Qno5UJSERD3SBoVCxiQRkxGSgkxIxHURUmEJ/IqZ8RRSDtHqL/+vLni6d/OhYN+V6n2t+XOT8/Pp3ANZQi9xuN5pPp5CGu5ZxdQRkhIU/5RaSMw3c930mcv1TIa5z8p8vIGtePRvSYNHv0di0nw8mqNNZU1wHaOomFew96A8f5/uha79AZ73sZorn2mEkBokxlxzbT6+dH50D2t2apwJ3HL/AZviIhKPEG2O1hwP5nndY0I690Aieo24kJg+S+r/LGJaqJDoBX3D4Wtew16nxkKZUESH0LDCivrMuCelulthejSsDtpjBSZ3QCxRSAxVNHXku9ocf3HPtTi4ElJD0WB6IREK9pl9p9hLFvJoqE6ZYw1bryrMg4J950c7nknF5CmkbJL7+LqbgWJU5ospSxVkMZHr5lqpJ5K+kymoQxwWfP3UEHxAGhpzDV8OfTGZmLj1kb603JL7Go+yyhxf6QGzCLOFK+IN0vIJI+EhCV3/HL3pKepDgppETJ5Cyiq5jyeTx7R6NSKZMVPAQg8R0j+9Yww60JHVIh9qbpyeie4a7whJ4lXJMbnvK8JoYB90bq50SdiWg8ywO9jKuznmNOjM4dBR8fHqxHmvEAAN/s3fbCEfJ5HoqTzVM82fdB7N196dg6LjDfzM3xtznnv3fKaYZ5IKSSOznCR2KCiEo2DHUzRYTR6c63FfGgMeqy787jZ83PPfUrANZN+Bs5aedwAyE6sT3z/ytaxP1S3+zs2Pte7n/KzovSnIIHPv7e6cMV3jbEfWGEYjswjwAVd4KGskdKWbe5N4vUgQURu3XsW8iHX/7Mnrm+IkoiaSYCHUheOSJnejjZmWLCTmlCs8lBrWrTq7k4UbiWqgmMYEVgI1wOa4QPz33XT+/cjnr2IJiWDPstRZshuqRBHT0oUkdIWHomBt7Lld6RKT+9OU5nbMSs7n07AV/Tq2iHp/pwGbrwPsesngMROPC2pBUY18k/sazIeCdaWvMY/ppwRlksTRhTDjnOQ1huMUaRJZBfVMHisJAennBg4S4AoPpUY+rnSNwkG4sXsUFK1Gi8lTSMTOZZ7hHEyoKzyUBjYyvUY6smzoMmItKPN6lJhGCMmhkL7yPhPRFR6KgnWlf0sURVGjcIpWUOaFt5gChOSoeHuYpHAPKXV9TgFNYNIgWnd+Ribn98ihSa2gzB9s7hYO0JmTOsWFl5giCMnxMYWbuMeUrvAhHtht3MBO+N31vq8RyZXONv9QRXiJRK77BfHvwPcvxJO2sA88Zo+SbKEUbvW/Ix0/TWDyNZEJ3O8hqNx1SIKdOfctbOMhQcP2mG2mntckmGeozcdvJ4poac/0DnIh/S0sR+L8mmiM0CAd60OVlH5mjkvYhqv7vYJ9Tg0C/qZHWQUbIvOdx3C3NC9WzMBhpD2TFAr6e38k3OMY0cNYTsGV4hvSoCGcazvwXii6vsJIPHunY7hYPGowNf87qwVVOhEf9J5/w34hFUJhOnTMQFd6sC4qmGxvih6WtGZU5gaBEcUepHQD30lNJxpPcaNEvUSFQChfzJzPLZYyFldRq+4PzXldsKtbTEVjRjop+BXmy7z9iVixeT/0Lvz5HvLJwPpUOvCZoH1n7T0mDKWQs6NFfEigNfbm4S6lf2oTnkTE9YbGvw0SComIIaaDZhpXBHp5UhOg2S4o/XsE0qDJyaB3ZI63M1xLhb2wJslA5rriRJTS2ngmVEwnxzsdQUnJPvV7JJucEgW5h6Ro7jtMT43Ii89wb0SezyxE5AgRk8hxwK5v6Xgo15CjUN4jM9h7WMOKit5PTHOyj8I+WTIIngtrkCFjHRAaHh44apW5x5E8TCpHrY5Pj5Yz65zna/ja1ny4ZcDooHEQOZEU4kGm/L/mb95iBCPWsaC09XvYht9l1Y71PNI1vztVYIyYNEa4stk75bwuQ+xCjszvXGP5JB8r+cC5Qa37P78zt0aCwl5kY62HP7vrJnjSCMtFzboltnbZ5JP4ikkjICeJ3bNuDeghqOw/Y1uxTFj0qq8EN5otel5Anq9TsFmmPguRuEgaL9OXeyXJ3GWyhUx9xkwacZL7fFzmN2x2LBG9ymd12ujQWJhCnGjc5VLTIR93/T5iXCzx9CZdEVgqJo1IWbLc0r2FXFCxQ4405mFR5l0oZFJxhIbUNPedBnk38H3yxksqpqjmCp+LeijJuGuJHj6vxRbPyXvJZrmkIfGNxBgq3yIxybbh9HSZK/y4tUvuiMYDZMLyMlznNllNghpqKF/Aj6EGRxpgPZbBBi/pBtGcViA2CxYScqSH0ko4DIYG4XPu4jAbbMrrgWIXECLsuce6vKW8GiqQVEyEh1lANNurqxSLn0SDJx0pDOYjzpunwO+fEU7DKEyEdHmD5GIieOAoC23Zbm8XnluTZBeHrd3TSGE+ht6Rhh9DgnqDCfAINshDTAy11BtBuZRJhUumwUwbtPHfGGowJO+6ix74vpqoTlA0jpIUzEZMnmkbClZQZ+MFm5LOhCd9ug3aakyAR0vewg/JHFY0JxWPa+l8Yisop57JN22DbvLcc6Bi0a9kCntRfYllNvMEu2RfrscRUy33gjLV9siufj7w86D7qH1+b4otZYLgvXNIUJLUcgo5ohydc58g9fF6/kAncPUQCrbC1LxgSAvbA2xWwoVu2Dog1/4HyD2Ta3jisTdTzffsvT8Wi4iGG6OcXNmJiaAXaW6M5qAkrQwF0D56BDVSr/cZ4eshzMWtb1BxD2lLrcDCov9srRXYjbbu49ZWUPBjHZDbNbQ3k0Nhn/LxANtIaHM8uR5xu9/szAXuVgicpshSTIRn2gaNny4lpgNXzI+8wMhgWH1qVmGbKdcIcxnH9ppqBIRZce/k0xAqLvtcfjt+qEje5pM9VlZjpj7sMv8sKOodcsTJcWSe9JfWOidyctBoRIjvXNmNxGXTKPGgBmA9VChrMRH88FpBUYUR65h3NuQ6u3EXT4jTvT0gLTQOu1xFiu/kDGFJIxsDcSR69mJipC7z0euYz7wuQpfd8liYiE4P7JMiEQsyUa94Q7KQcd9PcCN7jenCiHZTNT6R6IsQk2faxuh1zDvrIvjkXI2F7sntfKcxMZ0UCddgaEwHiZYq+sVqwoVkuOelVXBjNoD0XshKuVh5LkkddYPoqen4/yVjgctV4DrmLErfBf41m43HzrmFNVGa2K21L/w8K1jXdkgqOt0HRW23sItQtpgZdlZVsN5I39Aiun5qAEg894feS2cO7Rh6xRehcJpslsAVXi+hY7T42/1+t9K5hyExvV4l2KxAQme9B8WHcx/30di7zDdz9Ky+cOV399O/D3ftu5R84XLV7lzHeFqhIIJFJZndPymmwvmyFAdEcng85daY0ygUehQxecJjR3KGzOWaLSyEIqYRcC9FzolDczhZjC0L81PGTBHgsB0SF3mDQmPpCgvlPyMSMGYzTfwAAAAAAElFTkSuQmCC";
function Gv() {
  return C.jsxs("header", {
    children: [
      C.jsx(Nl, {
        to: "/",
        children: C.jsx("img", {
          src: Jv,
          alt: "logo_kasa",
          id: "header-logo",
        }),
      }),
      C.jsxs("div", {
        className: "header-links",
        children: [
          C.jsx(Ku, {
            to: "/",
            className: ({ isActive: e }) =>
              e ? "header-links__homepage active" : "header-links__homepage",
            children: "Accueil",
          }),
          C.jsx(Ku, {
            to: "/a-propos",
            className: ({ isActive: e }) =>
              e ? "header-links__homepage active" : "header-links__homepage",
            children: "A propos",
          }),
        ],
      }),
    ],
  });
}
const Yv =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAAoCAYAAAAxH+4YAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVuSURBVHgB7Zvtkds2EIb3Mvl/KoHu4EpgOlAqOLqCKBWIqcBKBVIHvlRAdSClAigV6FLBa6wJ+mho8UlQupvRMwPLRwK7KyzxsQuKIFNRAViOLkqQr0rpuBPJXI7WMhZ3J78j5nC0cfLh7uR3RGlHe5x81uWJ7tyGGRx9d/J7pKSjdbutQ96S7tyWUo72OLmhO7enhKM9Tm7pzrvgV5qIduZafzTCrb8eHh5aKsDw4Gl5J7ox2paF/qh04T3HwpSBoy6v/KltfaVCGJ210cvl0dz6f9BndJ58QrJHNDv5GiNZy9sZuVvcKDzTemtdOvQbyxh4U7pB5iYUffSyhry59elsXAIlqghD1o62LRVEy1ta8hWuuO6jz+51mMYh1maj7yumoWD70FGxChizdrTbUGEgZ9eGL1PTjGj5T4gfwSG2EfpWBfX9HNI6KlUeY9aONjsqjJbZIMwWM0zncOfpB0667HV5MYX/f/TUryJ0hkbyeaT3iPBDcf6hN8UouJ38lQqDcEfbrKkgeNsX2GzgHwi8ti6t9m2kzkrQx05deXzCbRpPX3VDRYlKELh21OX1Z0GF0TK/IB2FAus3emdJNIly2AmblP4x9Rl2cJ3QroJ74/YU5Wj997Oj3lxOrjCNA6alcWtB5p6uAPqHbEUZmH6TpvP2l4jGz/pj57j9T8l4cURL0+BNiEL++l0J1xRdAe5PXbI2tSaO/lu45R/RcI/kMUUPK3AZTk1FIX3KlWzo6AMAeTZSTkcjPrRQKLjrRdoGzAdvUNrRd1CIPFyBe+kouuGbAzj2Fy5HL5EWzxVZqxEXTsWwHclkp+3G9xAX6rg2NsrYGZRxKySjH/gfoS6vu5LjPuvCT3Ul3NvpNeIz5RvH+g4O2al8svO+xjGdkR+0Ff3oD4WNJ+rzzP+az5OWe6SCoF8ahzLkuO0cu00tCYqlGRTDPdonTW0owzag4wURWSpTt0U63Dec+Mge9XjLc5fKkiG2cxvLkNpT95kywXQUwulbnsajHG3q+5IRIdhRSQ8/+oGkUJiYzm0cBq0c9bNfG8J0gvEnEh09ajdkuxTSUYjbF7ji4DGniHJBqHObgGHtlC8myJtCVJyLTEdbMnjULc3356XgGGFfMDyD/BCdjZ7owQPB2b7ObSKF7hztD5QIptFE6pjsaIdcXldruPuDqT3txfgXeQMm2tFtglDX673MF0oA+ewTdMziaEtHBXl0bjxtNkL93FTohaNdKdAdRWJSoL9TH2rYrHKNTaSxL+Bt53r114xNaCeFb5WnmXQvN1R7tC8Ec90xmC/2G/Xxtw2fQtU0HychZuYYmJeOlvzx5pychGs+Wx6pAKavL/QUcTQTcDbHlRVdD54iK5qAmX4bykeaSXwHQP8J12pKAH3SSVyWijmaMVmhP4VbbECHGY40Z6TVZYv+fbE6od3Q4dL+5MXTTJqm/4gdICMnV64KEhVNAO6wqwu0y0EJcsabkdq6t0HgcAPyoYZCnyfnsOrJ026FjF+Rot9TnB3tmkC7JQLx/SyONgZsHLLXnjYN0hMSSY6OtD32LUw1KiGaCL2rgC62i/uVB9LW/C09HBfXZnO0MbxzyF8F2o2PF0MUdTT6EbJDWdoE/RtMg/uusy/O7ejsn9Di8njRhc/Re+QfLNSm/RS4fU2JIP8wpTHtO/vmrI42Sl3JA4W4/G8oyS85mh+uIvE73t6y3CNuluGHjEdlTRMwetnhofTq3tRbjNp2dqUHqbNL/8bJGCHtuF9j3zlD/7RKZ+EcR3+y9c30LtvwXYbZqBpsoD50Os2hV9D5XZdLn6e/PwaQp/OrvLR35wbg53eYkw9P7nww0MePH3eKuiLfAJK26zeCzVzXAAAAAElFTkSuQmCC";
function Xv() {
  return C.jsxs("footer", {
    children: [
      C.jsx("div", {
        id: "footer-logo",
        children: C.jsx("img", { src: Yv, alt: "logo kasa footer" }),
      }),
      C.jsx("div", {
        id: "footer-copyright",
        children: C.jsx("h3", { children: "© 2023 Kasa. All rights reserved" }),
      }),
    ],
  });
}
function Zv() {
  return C.jsxs(C.Fragment, {
    children: [
      C.jsx(Gv, {}),
      C.jsx("main", { children: C.jsx(gv, {}) }),
      C.jsx(Xv, {}),
    ],
  });
}
const bv = "/assets/404-e2e4e723.png";
function eg() {
  return C.jsx(C.Fragment, {
    children: C.jsxs("div", {
      id: "notFound__container",
      children: [
        C.jsx("img", { src: bv, alt: "Page not found logo" }),
        C.jsx("h1", {
          children: "Oups! La page que vous demandez n’existe pas.",
        }),
        C.jsx("p", {
          children: C.jsx(Nl, {
            to: "/",
            children: "Retourner sur la page d’accueil",
          }),
        }),
      ],
    }),
  });
}
const tg = Ev([
  {
    path: "/",
    element: C.jsx(Zv, {}),
    children: [
      { path: "/", element: C.jsx(Kv, {}) },
      { path: "/logements/:id", element: C.jsx(Bv, {}) },
      { path: "/a-propos", element: C.jsx($v, {}) },
      { path: "*", element: C.jsx(eg, {}) },
    ],
  },
]);
mi.createRoot(document.getElementById("root")).render(
  C.jsx(rc.StrictMode, { children: C.jsx(hv, { router: tg }) })
);
