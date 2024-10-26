{
  const e = () => {
    document.documentElement.style.setProperty(
      "--body-scroll-width",
      window.innerWidth - document.documentElement.clientWidth + "px",
    );
  };
  window.addEventListener("resize", e), e();
}
{
  const e = $(window),
    t = (t) => {
      const o = e.height() || 0,
        n = t.height() || 0,
        r = (t.offset() || { top: 0 }).top,
        s = r + n,
        i = e.scrollTop() || 0,
        a = i + o,
        l = n - (Math.max(s, a) - Math.min(r, i) - o);
      return l <= 0 ? 0 : l / n;
    },
    o = 0.25,
    n = $("[data-viewport-dark]")
      .toArray()
      .map((e) => ({
        ratio: parseFloat(e.getAttribute("data-viewport-dark") || "") || o,
        $el: $(e),
      }));
  if (n.length) {
    const o = () => {
      const e = n.some((e) => t(e.$el) > e.ratio);
      console.log("in here");
      setDarkMode(e);
    };
    e.on("scroll resize load", o), o();
  }
}
{
  class e {
    constructor(e) {
      (this.dd = e),
        (this.placeholder = this.dd.find("span")),
        (this.opts = this.dd.find(".uk-droplist-dropdown li")),
        (this.val = ""),
        (this.index = -1),
        this.initEvents(),
        (this.onChangeHandlers = new Set());
    }
    initEvents() {
      const e = this;
      e.dd.on("click", function (e) {
        e.preventDefault(),
          e.stopPropagation(),
          $(this).toggleClass("uk-active");
      }),
        e.opts
          .on("click", function () {
            const t = $(this);
            (e.val = t.text()),
              (e.index = t.index()),
              e.placeholder.text(e.val),
              t.siblings().removeClass("uk-active"),
              t.filter(':contains("' + e.val + '")').addClass("uk-active"),
              e.dd.trigger("change");
          })
          .trigger("change"),
        $(document).on("click", function () {
          e.dd.removeClass("uk-active");
        });
    }
    get options() {
      return this.opts;
    }
    get value() {
      return this.val;
    }
    get selectedIndex() {
      return this.index;
    }
  }
  $(function () {
    document.querySelectorAll(".uk-droplist").forEach((t) => {
      const o = new e($(t));
      t.classList.contains("uk-droplist-filter") &&
        o.dd.on("change", () => {
          const e = o.options[o.selectedIndex];
          UIkit.filter(o.dd.closest("[data-uk-filter]")).apply(e);
        });
    });
  });
}
{
  const e = [...document.querySelectorAll(".uk-navbar-nav ul")],
    t = () => {
      if (!e[0] || !e[0].offsetParent) return;
      const t = document.documentElement.clientWidth;
      e.forEach((e) => {
        e.classList.remove("reverse-submenu-open");
        e.getBoundingClientRect().right > t &&
          e.classList.add("reverse-submenu-open");
      });
    };
  window.addEventListener("load", t),
    window.addEventListener("resize", t),
    setInterval(t, 1e3);
}
{
  const e = document.querySelectorAll("[data-image-hover-revealer]");
  if (e.length) {
    const t = 17,
      o = 400,
      n = !0,
      r = document.createElement("img");
    let s, i;
    (r.alt = ""),
      (r.className = "image-hover-revealer"),
      document.body.append(r);
    let a = !1;
    e.forEach((e) => {
      if (!(e instanceof HTMLElement)) return;
      if (!(r instanceof Image)) return;
      const l = e.getAttribute("data-image-hover-revealer");
      e.addEventListener("mouseover", () => {
        r.setAttribute("src", l),
          r.classList.add("uk-active"),
          (s = Date.now()),
          (a = !0),
          clearTimeout(i);
      }),
        window.addEventListener("mousemove", (e) => {
          if (!a) return;
          let o = e.pageX,
            s = e.pageY;
          const i = r.clientWidth,
            l = r.clientHeight;
          o + i >= window.scrollX + window.innerWidth - t &&
            (n ? (o -= i) : (o = window.innerWidth - t - i)),
            s + l >= window.scrollY + window.innerHeight &&
              (n ? (s -= l) : (s = window.scrollY + window.innerHeight - l)),
            r.style.setProperty("--move-x", o + "px"),
            r.style.setProperty("--move-y", s + "px");
        }),
        e.addEventListener("mouseleave", () => {
          const e = Date.now() - s;
          i = setTimeout(
            () => {
              r.classList.remove("uk-active"),
                (i = setTimeout(() => {
                  (a = !1),
                    r.style.setProperty("--move-x", "0px"),
                    r.style.setProperty("--move-y", "0px");
                }, o));
            },
            Math.max(0, o - e),
          );
        });
    });
  }
}
const stickyItemContrast = (e, t, o, n = {}) => {
    n = Object.assign({ black: "contrast-black", white: "contrast-white" }, n);
    const r = ((e) => {
        const t = {};
        return (o) => {
          if (null != t[o]) return t[o];
          {
            const n = e(o);
            return (t[o] = n), n;
          }
        };
      })((e) => {
        if (!e.startsWith("rgb(")) return "black";
        const t = e.slice(4, -1).split(",").map(Number);
        return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 >= 128
          ? "black"
          : "white";
      }),
      s = $(window);
    let i = "";
    const a = () => {
      const s = "function" == typeof o ? o(t) : o,
        a = e
          .map(
            (e) =>
              e instanceof HTMLElement && window.scrollY + s >= e.offsetTop,
          )
          .lastIndexOf(!0);
      if (-1 === a) return;
      const l = ((e) => {
          let t = "";
          for (
            ;
            e &&
            ((t = window
              .getComputedStyle(e, null)
              .getPropertyValue("background-color")),
            /rgba\(.*?,\s*0\)$/.test(t));

          )
            e = e.parentElement;
          return t;
        })(e[a]),
        c = r(l);
      i !== c && n[i] && t.classList.remove(n[i]),
        n[c] && t.classList.add(n[c]),
        (i = c);
    };
    s.on("scroll resize load darkmodechange", a), a();
  },
  getElementParents = (e) => {
    const t = [];
    for (; (e = e.parentNode); ) t.push(e);
    return t;
  },
  stickyItemsDarkMode = (e, t) => {
    const o = [
        ...document.querySelectorAll('.uk-section, [class*="uk-section-"]'),
      ],
      n = [...document.querySelectorAll(e)];
    for (const e of n)
      stickyItemContrast(o, e, t, { black: "", white: "uk-dark" });
  };
stickyItemsDarkMode(
  ".uni-header, .uni-sticky-menu, .uni-header-social",
  (e) => e.offsetTop + e.clientHeight / 2,
),
  stickyItemsDarkMode(
    ".uni-header-location, .uni-header-section-indicator",
    () => window.innerHeight / 2,
  );
{
  const e = document.querySelector(".uni-header-section-indicator");
  if (e) {
    const t = [...e.querySelectorAll("li[data-selector]")].map((e) =>
        document.querySelector(e.getAttribute("data-selector")),
      ),
      o = $(window);
    let n = 0;
    const r = () => {
      const o = window.innerHeight / 2,
        r = t
          .map(
            (e) =>
              e instanceof HTMLElement && window.scrollY + o >= e.offsetTop,
          )
          .lastIndexOf(!0);
      -1 !== r &&
        n !== r &&
        ((n = r), e.style.setProperty("--section-indicator-index", n + ""));
    };
    o.on("scroll resize load darkmodechange", r), r();
  }
}
document.querySelectorAll("[data-darkmode-toggle] input").forEach((e) => {
  e.addEventListener("change", () => {
    setDarkMode(!isDarkMode());
    const e = isDarkMode();
    localStorage.setItem("darkMode", e ? "1" : "0");
  }),
    (e.checked = isDarkMode());
}),
  document
    .querySelectorAll("[data-uk-modal] [data-uk-scrollspy-nav] a")
    .forEach((e) => {
      e.addEventListener("click", (t) => {
        UIkit.toggle(e.closest("[data-uk-modal].uk-open")).toggle();
      });
    }),
  document.querySelectorAll(".uk-horizontal-scroll").forEach((e) => {
    e.addEventListener("wheel", (t) => {
      t.preventDefault(), e.scrollBy(t.deltaY, 0);
    });
  });
