(window.webpackJsonp = window.webpackJsonp || []).push([
    [7], {
        76: function (t, e, a) {
            "use strict";
            a.r(e);
            var s = a(0),
                n = function (t) {
                    var e, a, s, n = (s = void 0, {
                            attributes: {
                                slug: "about",
                                layout: e = "page",
                                title: "About",
                                markdownHeadings: [{
                                    text: a = "saber-theme-tufte",
                                    slug: a,
                                    level: 1
                                }, {
                                    text: "Install",
                                    slug: "install",
                                    level: 2
                                }, {
                                    text: "Layouts",
                                    slug: "layouts",
                                    level: 2
                                }, {
                                    text: "Site Config",
                                    slug: "site-config",
                                    level: 2
                                }, {
                                    text: "Theme Config",
                                    slug: "theme-config",
                                    level: 2
                                }, {
                                    text: "Navbar",
                                    slug: "navbar",
                                    level: 3
                                }, {
                                    text: "License",
                                    slug: "license",
                                    level: 2
                                }],
                                excerpt: '<p><a href="https://npm.im/saber-theme-tufte" target="_blank" rel="noopener noreferrer"><img src="https://badgen.net/npm/v/saber-theme-tufte" alt="npm"></a></p>\n',
                                createdAt: new Date(1555660243931),
                                updatedAt: new Date(1555660243931),
                                type: e,
                                permalink: "/about.html"
                            },
                            internal: s,
                            contentType: "markdown",
                            content: s
                        }),
                        r = t.options.beforeCreate || [];
                    t.options.beforeCreate = [function () {
                        this.$page = n
                    }].concat(r);
                    ["layout", "transition"].forEach(function (e) {
                        var a = t.options.PageComponent;
                        a && (t.options[e] = a[e]), void 0 === t.options[e] && (t.options[e] = n.attributes[e])
                    }), t.options.name = "page-wrapper-" + n.attributes.slug.replace(/[^0-9a-z\-]/i, "-")
                },
                r = Object(s.a)({}, function () {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("layout-manager", [a("h1", {
                        attrs: {
                            id: "saber-theme-tufte"
                        }
                    }, [t._v("saber-theme-tufte")]), t._v(" "), a("p", [a("a", {
                        attrs: {
                            href: "https://npm.im/saber-theme-tufte",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }
                    }, [a("img", {
                        attrs: {
                            src: "https://badgen.net/npm/v/saber-theme-tufte",
                            alt: "npm"
                        }
                    })])]), t._v(" "), a("blockquote", [a("p", [t._v("A "), a("a", {
                        attrs: {
                            href: "https://saber.land/",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }
                    }, [t._v("Saber")]), t._v(" theme inspired by "), a("a", {
                        attrs: {
                            href: "https://edwardtufte.github.io/tufte-css/",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }
                    }, [t._v("Tufte")]), t._v(".")])]), t._v(" "), a("h2", {
                        attrs: {
                            id: "install"
                        }
                    }, [t._v("Install")]), t._v(" "), a("div", {
                        pre: !0,
                        attrs: {
                            class: "saber-highlight",
                            "data-lang": "bash"
                        }
                    }, [a("pre", {
                        pre: !0,
                        attrs: {
                            class: "saber-highlight-code language-bash"
                        }
                    }, [a("code", {
                        pre: !0,
                        attrs: {
                            class: "language-bash"
                        }
                    }, [a("span", {
                        pre: !0,
                        attrs: {
                            class: "token function"
                        }
                    }, [t._v("yarn")]), t._v(" "), a("span", {
                        pre: !0,
                        attrs: {
                            class: "token function"
                        }
                    }, [t._v("add")]), t._v(" saber-theme-tufte")])])]), a("p", [t._v("In your "), a("code", {
                        pre: !0
                    }, [t._v("saber-config.yml")]), t._v(":")]), t._v(" "), a("div", {
                        pre: !0,
                        attrs: {
                            class: "saber-highlight",
                            "data-lang": "yml"
                        }
                    }, [a("pre", {
                        pre: !0,
                        attrs: {
                            class: "saber-highlight-code language-yml"
                        }
                    }, [a("code", {
                        pre: !0,
                        attrs: {
                            class: "language-yml"
                        }
                    }, [a("span", {
                        pre: !0,
                        attrs: {
                            class: "token key atrule"
                        }
                    }, [t._v("theme")]), a("span", {
                        pre: !0,
                        attrs: {
                            class: "token punctuation"
                        }
                    }, [t._v(":")]), t._v(" tufte")])])]), a("p", [t._v("This theme works best with following plugins:")]), t._v(" "), a("ul", [a("li", [a("code", {
                        pre: !0
                    }, [t._v("saber-plugin-query-posts")]), t._v(": Inject "), a("code", {
                        pre: !0
                    }, [t._v("posts")]), t._v(" to homepage's "), a("code", {
                        pre: !0
                    }, [t._v("page")]), t._v(" prop, generate tag pages")])]), t._v(" "), a("div", {
                        pre: !0,
                        attrs: {
                            class: "saber-highlight",
                            "data-lang": "bash"
                        }
                    }, [a("pre", {
                        pre: !0,
                        attrs: {
                            class: "saber-highlight-code language-bash"
                        }
                    }, [a("code", {
                        pre: !0,
                        attrs: {
                            class: "language-bash"
                        }
                    }, [a("span", {
                        pre: !0,
                        attrs: {
                            class: "token function"
                        }
                    }, [t._v("yarn")]), t._v(" "), a("span", {
                        pre: !0,
                        attrs: {
                            class: "token function"
                        }
                    }, [t._v("add")]), t._v(" saber-plugin-query-posts")])])]), a("div", {
                        pre: !0,
                        attrs: {
                            class: "saber-highlight",
                            "data-lang": "yml"
                        }
                    }, [a("pre", {
                        pre: !0,
                        attrs: {
                            class: "saber-highlight-code language-yml"
                        }
                    }, [a("code", {
                        pre: !0,
                        attrs: {
                            class: "language-yml"
                        }
                    }, [a("span", {
                        pre: !0,
                        attrs: {
                            class: "token key atrule"
                        }
                    }, [t._v("plugins")]), a("span", {
                        pre: !0,
                        attrs: {
                            class: "token punctuation"
                        }
                    }, [t._v(":")]), t._v("\n  "), a("span", {
                        pre: !0,
                        attrs: {
                            class: "token punctuation"
                        }
                    }, [t._v("-")]), t._v(" "), a("span", {
                        pre: !0,
                        attrs: {
                            class: "token key atrule"
                        }
                    }, [t._v("resolve")]), a("span", {
                        pre: !0,
                        attrs: {
                            class: "token punctuation"
                        }
                    }, [t._v(":")]), t._v(" saber"), a("span", {
                        pre: !0,
                        attrs: {
                            class: "token punctuation"
                        }
                    }, [t._v("-")]), t._v("plugin"), a("span", {
                        pre: !0,
                        attrs: {
                            class: "token punctuation"
                        }
                    }, [t._v("-")]), t._v("query"), a("span", {
                        pre: !0,
                        attrs: {
                            class: "token punctuation"
                        }
                    }, [t._v("-")]), t._v("posts")])])]), a("h2", {
                        attrs: {
                            id: "layouts"
                        }
                    }, [t._v("Layouts")]), t._v(" "), a("ul", [a("li", [a("code", {
                        pre: !0
                    }, [t._v("post")]), t._v(": For individual blog posts.")]), t._v(" "), a("li", [a("code", {
                        pre: !0
                    }, [t._v("page")]), t._v(": For normal page with only the header and footer.")]), t._v(" "), a("li", [a("code", {
                        pre: !0
                    }, [t._v("default")]), t._v(": A home page to show all your posts.")])]), t._v(" "), a("p", [t._v("The default page can be customized with a title, subtitle, and description:")]), t._v(" "), a("div", {
                        pre: !0,
                        attrs: {
                            class: "saber-highlight",
                            "data-lang": "yml"
                        }
                    }, [a("pre", {
                        pre: !0,
                        attrs: {
                            class: "saber-highlight-code language-yml"
                        }
                    }, [a("code", {
                        pre: !0,
                        attrs: {
                            class: "language-yml"
                        }
                    }, [a("span", {
                        pre: !0,
                        attrs: {
                            class: "token key atrule"
                        }
                    }, [t._v("layout")]), a("span", {
                        pre: !0,
                        attrs: {
                            class: "token punctuation"
                        }
                    }, [t._v(":")]), t._v(" default\n"), a("span", {
                        pre: !0,
                        attrs: {
                            class: "token comment"
                        }
                    }, [t._v("# Inject post list as `page.posts` (by saber-plugin-query-posts)")]), t._v("\n"), a("span", {
                        pre: !0,
                        attrs: {
                            class: "token key atrule"
                        }
                    }, [t._v("injectAllPosts")]), a("span", {
                        pre: !0,
                        attrs: {
                            class: "token punctuation"
                        }
                    }, [t._v(":")]), t._v(" "), a("span", {
                        pre: !0,
                        attrs: {
                            class: "token boolean important"
                        }
                    }, [t._v("true")]), t._v("\n"), a("span", {
                        pre: !0,
                        attrs: {
                            class: "token key atrule"
                        }
                    }, [t._v("title")]), a("span", {
                        pre: !0,
                        attrs: {
                            class: "token punctuation"
                        }
                    }, [t._v(":")]), t._v("\n"), a("span", {
                        pre: !0,
                        attrs: {
                            class: "token key atrule"
                        }
                    }, [t._v("subtitle")]), a("span", {
                        pre: !0,
                        attrs: {
                            class: "token punctuation"
                        }
                    }, [t._v(":")]), t._v(" \n"), a("span", {
                        pre: !0,
                        attrs: {
                            class: "token key atrule"
                        }
                    }, [t._v("description")]), a("span", {
                        pre: !0,
                        attrs: {
                            class: "token punctuation"
                        }
                    }, [t._v(":")])])])]), a("h2", {
                        attrs: {
                            id: "site-config"
                        }
                    }, [t._v("Site Config")]), t._v(" "), a("p", [t._v("Configure site title, description etc in your "), a("code", {
                        pre: !0
                    }, [t._v("saber-config.yml")]), t._v(":")]), t._v(" "), a("div", {
                        pre: !0,
                        attrs: {
                            class: "saber-highlight",
                            "data-lang": "yml"
                        }
                    }, [a("pre", {
                        pre: !0,
                        attrs: {
                            class: "saber-highlight-code language-yml"
                        }
                    }, [a("code", {
                        pre: !0,
                        attrs: {
                            class: "language-yml"
                        }
                    }, [a("span", {
                        pre: !0,
                        attrs: {
                            class: "token key atrule"
                        }
                    }, [t._v("siteConfig")]), a("span", {
                        pre: !0,
                        attrs: {
                            class: "token punctuation"
                        }
                    }, [t._v(":")]), t._v("\n  "), a("span", {
                        pre: !0,
                        attrs: {
                            class: "token key atrule"
                        }
                    }, [t._v("title")]), a("span", {
                        pre: !0,
                        attrs: {
                            class: "token punctuation"
                        }
                    }, [t._v(":")]), t._v(" My Site\n  "), a("span", {
                        pre: !0,
                        attrs: {
                            class: "token key atrule"
                        }
                    }, [t._v("description")]), a("span", {
                        pre: !0,
                        attrs: {
                            class: "token punctuation"
                        }
                    }, [t._v(":")]), t._v(" About this website.\n  "), a("span", {
                        pre: !0,
                        attrs: {
                            class: "token key atrule"
                        }
                    }, [t._v("author")]), a("span", {
                        pre: !0,
                        attrs: {
                            class: "token punctuation"
                        }
                    }, [t._v(":")]), t._v(" My Name\n  "), a("span", {
                        pre: !0,
                        attrs: {
                            class: "token key atrule"
                        }
                    }, [t._v("email")]), a("span", {
                        pre: !0,
                        attrs: {
                            class: "token punctuation"
                        }
                    }, [t._v(":")]), t._v(" my@email.com")])])]), a("h2", {
                        attrs: {
                            id: "theme-config"
                        }
                    }, [t._v("Theme Config")]), t._v(" "), a("h3", {
                        attrs: {
                            id: "navbar"
                        }
                    }, [t._v("Navbar")]), t._v(" "), a("p", [t._v("Configure "), a("code", {
                        pre: !0
                    }, [t._v("nav")]), t._v(" to show a set of links in header and optional repository link:")]), t._v(" "), a("div", {
                        pre: !0,
                        attrs: {
                            class: "saber-highlight",
                            "data-lang": "yml"
                        }
                    }, [a("pre", {
                        pre: !0,
                        attrs: {
                            class: "saber-highlight-code language-yml"
                        }
                    }, [a("code", {
                        pre: !0,
                        attrs: {
                            class: "language-yml"
                        }
                    }, [a("span", {
                        pre: !0,
                        attrs: {
                            class: "token key atrule"
                        }
                    }, [t._v("themeConfig")]), a("span", {
                        pre: !0,
                        attrs: {
                            class: "token punctuation"
                        }
                    }, [t._v(":")]), t._v("\n  "), a("span", {
                        pre: !0,
                        attrs: {
                            class: "token key atrule"
                        }
                    }, [t._v("nav")]), a("span", {
                        pre: !0,
                        attrs: {
                            class: "token punctuation"
                        }
                    }, [t._v(":")]), t._v("\n    "), a("span", {
                        pre: !0,
                        attrs: {
                            class: "token punctuation"
                        }
                    }, [t._v("-")]), t._v(" "), a("span", {
                        pre: !0,
                        attrs: {
                            class: "token key atrule"
                        }
                    }, [t._v("text")]), a("span", {
                        pre: !0,
                        attrs: {
                            class: "token punctuation"
                        }
                    }, [t._v(":")]), t._v(" Home\n      "), a("span", {
                        pre: !0,
                        attrs: {
                            class: "token key atrule"
                        }
                    }, [t._v("link")]), a("span", {
                        pre: !0,
                        attrs: {
                            class: "token punctuation"
                        }
                    }, [t._v(":")]), t._v(" /\n    "), a("span", {
                        pre: !0,
                        attrs: {
                            class: "token punctuation"
                        }
                    }, [t._v("-")]), t._v(" "), a("span", {
                        pre: !0,
                        attrs: {
                            class: "token key atrule"
                        }
                    }, [t._v("text")]), a("span", {
                        pre: !0,
                        attrs: {
                            class: "token punctuation"
                        }
                    }, [t._v(":")]), t._v(" About\n      "), a("span", {
                        pre: !0,
                        attrs: {
                            class: "token key atrule"
                        }
                    }, [t._v("link")]), a("span", {
                        pre: !0,
                        attrs: {
                            class: "token punctuation"
                        }
                    }, [t._v(":")]), t._v(" /about.html")])])]), a("h2", {
                        attrs: {
                            id: "license"
                        }
                    }, [t._v("License")]), t._v(" "), a("p", [t._v("MIT.")])])
                }, [], !1, null, null, null);
            "function" == typeof n && n(r);
            e.default = r.exports
        }
    }
]);