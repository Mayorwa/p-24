const ENABLE_PAGE_REVEALER = !0,
  ENABLE_PAGE_PRELOADER = !1;
{
  const e = { xs: 480, s: 640, m: 960, l: 1200, xl: 1600 },
    t = document.documentElement,
    n = (e, n, a = "min") => {
      const o = matchMedia(`(${a}-width: ${n}px)`),
        r = () => {
          const n = "bp-" + e + ("max" === a ? "-max" : "");
          o.matches ? t.classList.add(n) : t.classList.remove(n);
        };
      (o.onchange = r), r();
    };
  Object.entries(e).forEach(([e, t]) => {
    n(e, t, "min"), n(e, t - 1, "max");
  });
}
document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.classList.add("dom-ready");
});
const isDarkMode = () => document.documentElement.classList.contains("uk-dark"),
  setDarkMode = (e = !0) => {
    document.documentElement.classList.contains("uk-dark") !== e &&
      (e
        ? document.documentElement.classList.add("uk-dark")
        : document.documentElement.classList.remove("uk-dark"),
      window.dispatchEvent(new CustomEvent("darkmodechange")));
  };
localStorage.getItem("darkMode")
  ? setDarkMode("1" === localStorage.getItem("darkMode"))
  : window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches &&
    setDarkMode(!0);
const ENABLE_PAGE_REVEALER_USED =
  "show" === localStorage.getItem("page-revealer");
{
  const e = "cubic-bezier(0.8, 0, 0.2, 1)",
    t = 1.1;
  {
    const e = document.createElement("style");
    e.append(
      "\n            .page-revealer {\n                pointer-events: none;\n                visibility: hidden;\n                height: 100%;\n                width: 100%;\n                position: fixed;\n                right: 0;\n                bottom: 0;\n                left: 0;\n                transform: scaleY(0);\n                z-index: 12000;\n                background-color: #fff;\n            }\n            .uk-dark .page-revealer {\n                background-color: #090909;\n            }\n        ",
    ),
      document.head.append(e);
  }
  const n = document.createElement("div");
  n.classList.add("page-revealer"),
    document.documentElement.append(n),
    ENABLE_PAGE_REVEALER_USED &&
      (async () => {
        localStorage.removeItem("page-revealer"),
          (n.style.transition = ""),
          (n.style.visibility = "visible"),
          (n.style.transform = "scaleY(1)"),
          (n.style.transformOrigin = "center bottom"),
          await new Promise((e) =>
            document.addEventListener("DOMContentLoaded", e),
          ),
          await new Promise((e) => requestAnimationFrame(e)),
          (n.style.transition = "transform " + t + "s " + e),
          (n.style.transform = "scaleY(0)"),
          (n.style.transformOrigin = "center top"),
          await new Promise((e) => setTimeout(e, 1100 * t)),
          (n.style.visibility = ""),
          (n.style.transform = ""),
          (n.style.transformOrigin = "");
      })();
  const a = (e) => {
    if (!(location.protocol === e.protocol && location.origin === e.origin))
      return !1;
    if ("_blank" === e.target) return !1;
    if (!(location.pathname === e.pathname && location.search === e.search))
      return !0;
    return !(e.hash || e.href !== e.origin + e.pathname + e.search + e.hash);
  };
  document.addEventListener("click", async (o) => {
    const r = o.target.closest("a");
    r &&
      r instanceof HTMLAnchorElement &&
      !o.defaultPrevented &&
      a(r) &&
      (o.preventDefault(),
      (n.style.transition = "transform " + t + "s " + e),
      (n.style.visibility = "visible"),
      (n.style.transform = "scaleY(1)"),
      (n.style.transformOrigin = "center bottom"),
      await new Promise((e) => setTimeout(e, 1e3 * t)),
      localStorage.setItem("page-revealer", "show"),
      (location.href = r.href));
  });
}
if (new URLSearchParams(location.search).get("editor")) import("./editor.js");
else {
  const e = new URL(location.href);
  e.searchParams.set("editor", "1");
  const t = [];
  t.push("You can enable the editor mode by adding ?editor=1 to the url"),
    t.push(`Example: ${e.href}`);
  const n = Math.max(...t.map((e) => e.length));
  console.log(
    "%c" + t.map((e) => e.padEnd(n, " ")).join("\n"),
    "\n    background-color: #222;\n    color: #bada55;\n    border: solid 1px #bada55;\n    padding: 5px 20px;\n    ",
  );
}
