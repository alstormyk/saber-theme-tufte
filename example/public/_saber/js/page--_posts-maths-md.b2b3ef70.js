(window.webpackJsonp = window.webpackJsonp || []).push([
    [3], {
        73: function (t, a, e) {
            "use strict";
            e.r(a);
            var m = e(0),
                r = function (t) {
                    var a, e, m, r, h = (r = void 0, {
                            attributes: {
                                slug: a = "maths",
                                title: "Maths",
                                date: "2019-04-18",
                                layout: e = "post",
                                excerpt: "Mathjax examples",
                                tags: [m = "example"],
                                categories: [a],
                                markdownHeadings: [{
                                    text: "Mathjax Example Tutorial",
                                    slug: "mathjax-example-tutorial",
                                    level: 1
                                }],
                                createdAt: new Date(15555456e5),
                                updatedAt: new Date(1555667906672),
                                type: e,
                                permalink: "/posts/maths.html"
                            },
                            internal: r,
                            contentType: "markdown",
                            content: r,
                            tags: [{
                                name: m,
                                permalink: "/tags/example"
                            }],
                            categories: [{
                                name: a,
                                permalink: "/categories/maths"
                            }]
                        }),
                        o = t.options.beforeCreate || [];
                    t.options.beforeCreate = [function () {
                        this.$page = h
                    }].concat(o);
                    ["layout", "transition"].forEach(function (a) {
                        var e = t.options.PageComponent;
                        e && (t.options[a] = e[a]), void 0 === t.options[a] && (t.options[a] = h.attributes[a])
                    }), t.options.name = "page-wrapper-" + h.attributes.slug.replace(/[^0-9a-z\-]/i, "-")
                },
                h = Object(m.a)({}, function () {
                    var t = this,
                        a = t.$createElement,
                        e = t._self._c || a;
                    return e("layout-manager", [e("h1", {
                        attrs: {
                            id: "mathjax-example-tutorial"
                        }
                    }, [t._v("Mathjax Example Tutorial")]), t._v(" "), e("section", [e("ol", [e("li", [e("p", [t._v("To see how any formula was written in any question or answer, including this one, right-click on the expression it and choose \"Show Math As > TeX Commands\". (When you do this, the '$' will not display. Make sure you add these. See the next point.)")])]), t._v(" "), e("li", [e("p", [t._v("For inline formulas, enclose the formula in "), e("code", {
                        pre: !0
                    }, [t._v("\\\\(...\\\\)")]), t._v(" or "), e("code", {
                        pre: !0
                    }, [t._v("$...$")]), t._v(". For displayed formulas, use "), e("code", {
                        pre: !0
                    }, [t._v("\\\\[...\\\\]")]), t._v(" or "), e("code", {
                        pre: !0
                    }, [t._v("$$...$$")]), t._v(".\nThese render differently."), e("br"), t._v("\nFor example, type"), e("br"), t._v(" "), e("code", {
                        pre: !0
                    }, [t._v("\\\\(\\sum_{i=0}^n i^2 = \\frac{(n^2+n)(2n+1)}{6}\\\\)")]), e("br"), t._v("\n$\\sum_{i=0}^n i^2 = \\frac{(n^2+n)(2n+1)}{6}$"), e("br"), t._v("\nand then,"), e("br"), t._v(" "), e("code", {
                        pre: !0
                    }, [t._v("$$\\sum_{i=0}^n i^2 = \\frac{(n^2+n)(2n+1)}{6}$$")]), t._v("\n$$\\sum_{i=0}^n i^2 = \\frac{(n^2+n)(2n+1)}{6}$$")])]), t._v(" "), e("li", [e("p", [t._v("For Greek letters, use "), e("code", {
                        pre: !0
                    }, [t._v("\\alpha")]), t._v(", "), e("code", {
                        pre: !0
                    }, [t._v("\\beta")]), t._v(", …, "), e("code", {
                        pre: !0
                    }, [t._v("\\omega")]), t._v(" \\(\\alpha, \\beta, …, \\omega\\). For uppercase, use "), e("code", {
                        pre: !0
                    }, [t._v("\\Gamma")]), t._v(", "), e("code", {
                        pre: !0
                    }, [t._v("\\Delta")]), t._v(", …, "), e("code", {
                        pre: !0
                    }, [t._v("\\Omega")]), t._v(": \\(\\Gamma, \\Delta, …, \\Omega\\).")])]), t._v(" "), e("li", [e("p", [t._v("For superscripts and subscripts, use "), e("code", {
                        pre: !0
                    }, [t._v("^")]), t._v(" and "), e("code", {
                        pre: !0
                    }, [t._v("_")]), t._v(" For example:"), e("br"), t._v(" "), e("code", {
                        pre: !0
                    }, [t._v("x_i^2")]), t._v("  \\(x_i^2\\)"), e("br"), t._v(" "), e("code", {
                        pre: !0
                    }, [t._v("\\log_2 x")]), t._v(" \\(\\log_2 x\\)")])]), t._v(" "), e("li", [e("p", [t._v("Groups. Superscripts, subscripts, and other operations apply only to the next “group”. A “group” is either a single symbol, or any formula surrounded by curly braces "), e("code", {
                        pre: !0
                    }, [t._v("{…}")]), t._v("."), e("br"), t._v("\nIf you do "), e("code", {
                        pre: !0
                    }, [t._v("10^10")]), t._v(", you will get a surprise: \\(10^10\\)"), e("br"), t._v("\nBut "), e("code", {
                        pre: !0
                    }, [t._v("10^{10}")]), t._v(" gives what you probably wanted: \\(10^{10}\\)"), e("br"), t._v("\nUse curly braces to delimit a formula to which a superscript or subscript applies:"), e("br"), t._v(" "), e("code", {
                        pre: !0
                    }, [t._v("x^5^6")]), t._v(" is an error \\(x^5^6\\)"), e("br"), t._v(" "), e("code", {
                        pre: !0
                    }, [t._v("{x^y}^z")]), t._v(" is \\({x^y}^z\\) and"), e("br"), t._v(" "), e("code", {
                        pre: !0
                    }, [t._v("x^{y^z}")]), t._v(" is \\(x^{y^z}\\)."), e("br"), t._v("\nObserve the difference between"), e("br"), t._v(" "), e("code", {
                        pre: !0
                    }, [t._v("x_i^2")]), t._v(" \\(x_i^2\\) and "), e("code", {
                        pre: !0
                    }, [t._v("x_{i^2}")]), t._v(" \\(x_{i^2}\\)")])]), t._v(" "), e("li", [e("p", [t._v("Parentheses Ordinary symbols "), e("code", {
                        pre: !0
                    }, [t._v("()[]")]), t._v(" make parentheses and brackets \\((2+3)[4+4]\\)\nUse "), e("code", {
                        pre: !0
                    }, [t._v("\\{")]), t._v(" and "), e("code", {
                        pre: !0
                    }, [t._v("\\}")]), t._v(" for curly braces \\({}\\)")])])]), t._v(" "), e("p", [t._v("These do not scale with the formula in between, so if you write "), e("code", {
                        pre: !0
                    }, [t._v("(\\frac{\\sqrt x}{y^3})")]), t._v(" the parentheses will be too small: \\((\\frac{\\sqrt x}{y^3})\\)"), e("br"), t._v("\nUsing "), e("code", {
                        pre: !0
                    }, [t._v("\\left(")]), t._v("…"), e("code", {
                        pre: !0
                    }, [t._v("\\right)")]), t._v(" will make the sizes adjust automatically to the formula they enclose: "), e("code", {
                        pre: !0
                    }, [t._v("\\left(\\frac{\\sqrt x}{y^3}\\right)")]), t._v(" is \\(\\left(\\frac{\\sqrt x}{y^3}\\right)\\)")]), t._v(" "), e("p", [e("code", {
                        pre: !0
                    }, [t._v("\\left")]), t._v(" and "), e("code", {
                        pre: !0
                    }, [t._v("\\right")]), t._v(" apply to all the following sorts of parentheses: "), e("code", {
                        pre: !0
                    }, [t._v("(")]), t._v(" and "), e("code", {
                        pre: !0
                    }, [t._v(")")]), t._v(" \\((x)\\)"), e("br"), t._v(" "), e("code", {
                        pre: !0
                    }, [t._v("[")]), t._v(" and "), e("code", {
                        pre: !0
                    }, [t._v("]")]), t._v("\\([x]\\),"), e("br"), t._v(" "), e("code", {
                        pre: !0
                    }, [t._v("|")]), t._v(" \\(|x|\\),"), e("br"), t._v(" "), e("code", {
                        pre: !0
                    }, [t._v("\\vert")]), t._v(" \\(\\vert x \\vert\\)"), e("br"), t._v(" "), e("code", {
                        pre: !0
                    }, [t._v("\\Vert")]), t._v(" \\(\\Vert x \\Vert\\)"), e("br"), t._v(" "), e("code", {
                        pre: !0
                    }, [t._v("\\langle")]), t._v(" and "), e("code", {
                        pre: !0
                    }, [t._v("\\rangle")]), t._v(" \\(\\langle x \\rangle\\)"), e("br"), t._v(" "), e("code", {
                        pre: !0
                    }, [t._v("\\lceil")]), t._v(" and "), e("code", {
                        pre: !0
                    }, [t._v("\\rceil")]), t._v(" \\(\\lceil x \\rceil\\)"), e("br"), t._v(" "), e("code", {
                        pre: !0
                    }, [t._v("\\lfloor")]), t._v(" and "), e("code", {
                        pre: !0
                    }, [t._v("\\rfloor")]), t._v(" \\(\\lfloor x \\rfloor\\)."), e("br"), t._v(" "), e("code", {
                        pre: !0
                    }, [t._v("\\middle")]), t._v(" can be used to add additional dividers. There are also invisible parentheses, denoted by "), e("code", {
                        pre: !0
                    }, [t._v(".")]), e("br"), t._v(" "), e("code", {
                        pre: !0
                    }, [t._v("\\left.\\frac12\\right\\rbrace")]), t._v(" \\(\\left.\\frac12\\right\\rbrace\\)")]), t._v(" "), e("p", [t._v("If manual size adjustments are required:\n"), e("code", {
                        pre: !0
                    }, [t._v("\\Biggl(\\biggl(\\Bigl(\\bigl((x)\\bigr)\\Bigr)\\biggr)\\Biggr)")]), t._v("\n$$\\Biggl(\\biggl(\\Bigl(\\bigl((x)\\bigr)\\Bigr)\\biggr)\\Biggr)$$")]), t._v(" "), e("ol", {
                        attrs: {
                            start: "7"
                        }
                    }, [e("li", [e("p", [t._v("Sums and integrals "), e("code", {
                        pre: !0
                    }, [t._v("\\sum")]), t._v(" and "), e("code", {
                        pre: !0
                    }, [t._v("\\int")]), t._v("; the subscript is the lower limit and the superscript is the upper limit, so for example "), e("code", {
                        pre: !0
                    }, [t._v("\\sum_1^n")]), t._v(" \\(\\sum_1^n\\)\nDon't forget "), e("code", {
                        pre: !0
                    }, [t._v("{")]), t._v("…"), e("code", {
                        pre: !0
                    }, [t._v("}")]), t._v(" if the limits are more than a single symbol."), e("br"), t._v("\nFor example, "), e("code", {
                        pre: !0
                    }, [t._v("\\sum_{i=0}^\\infty i^2")]), t._v(" is \\(\\sum_{i=0}^\\infty i^2\\)."), e("br"), t._v("\nSimilarly, "), e("code", {
                        pre: !0
                    }, [t._v("\\prod")]), t._v(" \\(\\prod\\), "), e("code", {
                        pre: !0
                    }, [t._v("\\int")]), t._v(" \\(\\int\\), "), e("code", {
                        pre: !0
                    }, [t._v("\\bigcup")]), t._v(" \\(\\bigcup\\), "), e("code", {
                        pre: !0
                    }, [t._v("\\bigcap")]), t._v(" \\(\\bigcap\\), "), e("code", {
                        pre: !0
                    }, [t._v("\\iint")]), t._v(" \\(\\iint\\), "), e("code", {
                        pre: !0
                    }, [t._v("\\iiint")]), t._v(" \\(\\iiint\\), "), e("code", {
                        pre: !0
                    }, [t._v("\\idotsint")]), t._v(" \\(\\idotsint\\)")])]), t._v(" "), e("li", [e("p", [t._v("Fractions There are three ways to make these. "), e("code", {
                        pre: !0
                    }, [t._v("\\frac ab")]), t._v(" applies to the next two groups, and produces \\(\\frac ab\\); for more complicated numerators and denominators use "), e("code", {
                        pre: !0
                    }, [t._v("{")]), t._v("…"), e("code", {
                        pre: !0
                    }, [t._v("}")]), t._v(": "), e("code", {
                        pre: !0
                    }, [t._v("\\frac{a+1}{b+1}")]), t._v("is \\(\\frac{a+1}{b+1}\\). If the numerator and denominator are complicated, you may prefer "), e("code", {
                        pre: !0
                    }, [t._v("\\over,")]), t._v(" which splits up the group that it is in: "), e("code", {
                        pre: !0
                    }, [t._v("{a+1\\over b+1}")]), t._v(" is \\({a+1\\over b+1}\\). Using "), e("code", {
                        pre: !0
                    }, [t._v("\\cfrac{a}{b}")]), t._v(" command is useful for continued fractions \\(\\cfrac{a}{b}\\), more details for which are given in this sub-article.")])]), t._v(" "), e("li", [e("p", [t._v("Fonts:"), e("br"), t._v("\nUse "), e("code", {
                        pre: !0
                    }, [t._v("\\mathbb")]), t._v(" or "), e("code", {
                        pre: !0
                    }, [t._v("\\Bbb")]), t._v(' for "blackboard bold":'), e("br"), t._v("\n\\(\\mathbb A \\mathbb B \\mathbb C \\mathbb D \\mathbb E \\mathbb F \\mathbb G \\mathbb H \\mathbb I \\mathbb J \\mathbb K \\mathbb L \\mathbb M \\mathbb N \\mathbb O \\mathbb P \\mathbb Q \\mathbb R \\mathbb S \\mathbb T \\mathbb U \\mathbb V \\mathbb W \\mathbb X \\mathbb Y \\mathbb Z\\)\n\\(\\mathbb a \\mathbb b \\mathbb c \\mathbb d \\mathbb e \\mathbb f \\mathbb g \\mathbb h \\mathbb i \\mathbb j \\mathbb k \\mathbb l \\mathbb m \\mathbb n \\mathbb o \\mathbb p \\mathbb q \\mathbb r \\mathbb s \\mathbb t \\mathbb u \\mathbb v \\mathbb w \\mathbb x \\mathbb y \\mathbb z\\)")])])]), t._v(" "), e("p", [t._v("Use "), e("code", {
                        pre: !0
                    }, [t._v("\\mathbf")]), t._v(" for boldface:"), e("br"), t._v("\n\\(\\mathbf A \\mathbf B \\mathbf C \\mathbf D \\mathbf E \\mathbf F \\mathbf G \\mathbf H \\mathbf I \\mathbf J \\mathbf K \\mathbf L \\mathbf M \\mathbf N \\mathbf O \\mathbf P \\mathbf Q \\mathbf R \\mathbf S \\mathbf T \\mathbf U \\mathbf V \\mathbf W \\mathbf X \\mathbf Y \\mathbf Z\\)\n\\(\\mathbf a \\mathbf b \\mathbf c \\mathbf d \\mathbf e \\mathbf f \\mathbf g \\mathbf h \\mathbf i \\mathbf j \\mathbf k \\mathbf l \\mathbf m \\mathbf n \\mathbf o \\mathbf p \\mathbf q \\mathbf r \\mathbf s \\mathbf t \\mathbf u \\mathbf v \\mathbf w \\mathbf x \\mathbf y \\mathbf z\\)")]), t._v(" "), e("p", [t._v("Use "), e("code", {
                        pre: !0
                    }, [t._v("\\mathit")]), t._v(" for italics:"), e("br"), t._v("\n\\(\\mathit A \\mathit B \\mathit C \\mathit D \\mathit E \\mathit F \\mathit G \\mathit H \\mathit I \\mathit J \\mathit K \\mathit L \\mathit M \\mathit N \\mathit O \\mathit P \\mathit Q \\mathit R \\mathit S \\mathit T \\mathit U \\mathit V \\mathit W \\mathit X \\mathit Y \\mathit Z\\)\n\\(\\mathit a \\mathit b \\mathit c \\mathit d \\mathit e \\mathit f \\mathit g \\mathit h \\mathit i \\mathit j \\mathit k \\mathit l \\mathit m \\mathit n \\mathit o \\mathit p \\mathit q \\mathit r \\mathit s \\mathit t \\mathit u \\mathit v \\mathit w \\mathit x \\mathit y \\mathit z\\)")]), t._v(" "), e("p", [t._v("Use "), e("code", {
                        pre: !0
                    }, [t._v("\\pmb")]), t._v(" for boldfaced italics:"), e("br"), t._v("\n\\(\\pmb A \\pmb B \\pmb C \\pmb D \\pmb E \\pmb F \\pmb G \\pmb H \\pmb I \\pmb J \\pmb K \\pmb L \\pmb M \\pmb N \\pmb O \\pmb P \\pmb Q \\pmb R \\pmb S \\pmb T \\pmb U \\pmb V \\pmb W \\pmb X \\pmb Y \\pmb Z\\)\n\\(\\pmb a \\pmb b \\pmb c \\pmb d \\pmb e \\pmb f \\pmb g \\pmb h \\pmb i \\pmb j \\pmb k \\pmb l \\pmb m \\pmb n \\pmb o \\pmb p \\pmb q \\pmb r \\pmb s \\pmb t \\pmb u \\pmb v \\pmb w \\pmb x \\pmb y \\pmb z\\)")]), t._v(" "), e("p", [t._v("Use "), e("code", {
                        pre: !0
                    }, [t._v("\\mathtt")]), t._v(' for "typewriter" font:'), e("br"), t._v("\n\\(\\mathtt A \\mathtt B \\mathtt C \\mathtt D \\mathtt E \\mathtt F \\mathtt G \\mathtt H \\mathtt I \\mathtt J \\mathtt K \\mathtt L \\mathtt M \\mathtt N \\mathtt O \\mathtt P \\mathtt Q \\mathtt R \\mathtt S \\mathtt T \\mathtt U \\mathtt V \\mathtt W \\mathtt X \\mathtt Y \\mathtt Z\\)"), e("br"), t._v("\n\\(\\mathtt a \\mathtt b \\mathtt c \\mathtt d \\mathtt e \\mathtt f \\mathtt g \\mathtt h \\mathtt i \\mathtt j \\mathtt k \\mathtt l \\mathtt m \\mathtt n \\mathtt o \\mathtt p \\mathtt q \\mathtt r \\mathtt s \\mathtt t \\mathtt u \\mathtt v \\mathtt w \\mathtt x \\mathtt y \\mathtt z\\)")]), t._v(" "), e("p", [t._v("Use "), e("code", {
                        pre: !0
                    }, [t._v("\\mathrm")]), t._v(" for roman font:"), e("br"), t._v("\n\\(\\mathrm A \\mathrm B \\mathrm C \\mathrm D \\mathrm E \\mathrm F \\mathrm G \\mathrm H \\mathrm I \\mathrm J \\mathrm K \\mathrm L \\mathrm M \\mathrm N \\mathrm O \\mathrm P \\mathrm Q \\mathrm R \\mathrm S \\mathrm T \\mathrm U \\mathrm V \\mathrm W \\mathrm X \\mathrm Y \\mathrm Z\\)"), e("br"), t._v("\n\\(\\mathrm a \\mathrm b \\mathrm c \\mathrm d \\mathrm e \\mathrm f \\mathrm g \\mathrm h \\mathrm i \\mathrm j \\mathrm k \\mathrm l \\mathrm m \\mathrm n \\mathrm o \\mathrm p \\mathrm q \\mathrm r \\mathrm s \\mathrm t \\mathrm u \\mathrm v \\mathrm w \\mathrm x \\mathrm y \\mathrm z\\)")]), t._v(" "), e("p", [t._v("Use "), e("code", {
                        pre: !0
                    }, [t._v("\\mathsf")]), t._v(" for sans-serif font:"), e("br"), t._v("\n\\(\\mathsf A \\mathsf B \\mathsf C \\mathsf D \\mathsf E \\mathsf F \\mathsf G \\mathsf H \\mathsf I \\mathsf J \\mathsf K \\mathsf L \\mathsf M \\mathsf N \\mathsf O \\mathsf P \\mathsf Q \\mathsf R \\mathsf S \\mathsf T \\mathsf U \\mathsf V \\mathsf W \\mathsf X \\mathsf Y \\mathsf Z\\)"), e("br"), t._v("\n\\(\\mathsf a \\mathsf b \\mathsf c \\mathsf d \\mathsf e \\mathsf f \\mathsf g \\mathsf h \\mathsf i \\mathsf j \\mathsf k \\mathsf l \\mathsf m \\mathsf n \\mathsf o \\mathsf p \\mathsf q \\mathsf r \\mathsf s \\mathsf t \\mathsf u \\mathsf v \\mathsf w \\mathsf x \\mathsf y \\mathsf z\\)")]), t._v(" "), e("p", [t._v("Use "), e("code", {
                        pre: !0
                    }, [t._v("\\mathcal")]), t._v(' for "calligraphic" letters:'), e("br"), t._v("\n\\(\\mathcal A \\mathcal B \\mathcal C \\mathcal D \\mathcal E \\mathcal F \\mathcal G \\mathcal H \\mathcal I \\mathcal J \\mathcal K \\mathcal L \\mathcal M \\mathcal N \\mathcal O \\mathcal P \\mathcal Q \\mathcal R \\mathcal S \\mathcal T \\mathcal U \\mathcal V \\mathcal W \\mathcal X \\mathcal Y \\mathcal Z\\)"), e("br"), t._v("\n\\(\\mathcal a \\mathcal b \\mathcal c \\mathcal d \\mathcal e \\mathcal f \\mathcal g \\mathcal h \\mathcal i \\mathcal j \\mathcal k \\mathcal l \\mathcal m \\mathcal n \\mathcal o \\mathcal p \\mathcal q \\mathcal r \\mathcal s \\mathcal t \\mathcal u \\mathcal v \\mathcal w \\mathcal x \\mathcal y \\mathcal z\\)")]), t._v(" "), e("p", [t._v("Use "), e("code", {
                        pre: !0
                    }, [t._v("\\mathscr")]), t._v(" for script letters:"), e("br"), t._v("\n\\(\\mathscr A \\mathscr B \\mathscr C \\mathscr D \\mathscr E \\mathscr F \\mathscr G \\mathscr H \\mathscr I \\mathscr J \\mathscr K \\mathscr L \\mathscr M \\mathscr N \\mathscr O \\mathscr P \\mathscr Q \\mathscr R \\mathscr S \\mathscr T \\mathscr U \\mathscr V \\mathscr W \\mathscr X \\mathscr Y \\mathscr Z\\)"), e("br"), t._v("\n\\(\\mathscr a \\mathscr b \\mathscr c \\mathscr d \\mathscr e \\mathscr f \\mathscr g \\mathscr h \\mathscr i \\mathscr j \\mathscr k \\mathscr l \\mathscr m \\mathscr n \\mathscr o \\mathscr p \\mathscr q \\mathscr r \\mathscr s \\mathscr t \\mathscr u \\mathscr v \\mathscr w \\mathscr x \\mathscr y \\mathscr z\\)")]), t._v(" "), e("p", [t._v("Use "), e("code", {
                        pre: !0
                    }, [t._v("\\mathfrak")]), t._v(' for "Fraktur" (old German style) letters:'), e("br"), t._v("\n\\(\\mathfrak A \\mathfrak B \\mathfrak C \\mathfrak D \\mathfrak E \\mathfrak F \\mathfrak G \\mathfrak H \\mathfrak I \\mathfrak J \\mathfrak K \\mathfrak L \\mathfrak M \\mathfrak N \\mathfrak O \\mathfrak P \\mathfrak Q \\mathfrak R \\mathfrak S \\mathfrak T \\mathfrak U \\mathfrak V \\mathfrak W \\mathfrak X \\mathfrak Y \\mathfrak Z\\)"), e("br"), t._v("\n\\(\\mathfrak a \\mathfrak b \\mathfrak c \\mathfrak d \\mathfrak e \\mathfrak f \\mathfrak g \\mathfrak h \\mathfrak i \\mathfrak j \\mathfrak k \\mathfrak l \\mathfrak m \\mathfrak n \\mathfrak o \\mathfrak p \\mathfrak q \\mathfrak r \\mathfrak s \\mathfrak t \\mathfrak u \\mathfrak v \\mathfrak w \\mathfrak x \\mathfrak y \\mathfrak z\\)")]), t._v(" "), e("ol", {
                        attrs: {
                            start: "10"
                        }
                    }, [e("li", [t._v("Radical signs Use "), e("code", {
                        pre: !0
                    }, [t._v("sqrt")]), t._v(", which adjusts to the size of its argument: "), e("code", {
                        pre: !0
                    }, [t._v("\\sqrt{x^3}")]), t._v(" \\(\\sqrt{x^3}\\) ; "), e("code", {
                        pre: !0
                    }, [t._v("\\sqrt[3]{\\frac xy}")]), t._v(" \\(\\sqrt[3]{\\frac xy}\\)")])]), t._v(" "), e("p", [t._v("For complicated expressions, consider using "), e("code", {
                        pre: !0
                    }, [t._v("{...}^{1/2}")]), t._v(" instead.")]), t._v(" "), e("ol", {
                        attrs: {
                            start: "11"
                        }
                    }, [e("li", [e("p", [t._v('Some special functions such as "lim", "sin", "max", "ln", and so on are normally set in roman font instead of italic font. Use '), e("code", {
                        pre: !0
                    }, [t._v("\\lim")]), t._v(", "), e("code", {
                        pre: !0
                    }, [t._v("\\sin")]), t._v(", etc. to make these:"), e("br"), t._v(" "), e("code", {
                        pre: !0
                    }, [t._v("\\sin x")]), t._v(" \\(\\sin x\\), not "), e("code", {
                        pre: !0
                    }, [t._v("sin x")]), t._v(" \\(sin x\\)."), e("br"), t._v("\nUse subscripts to attach a notation to "), e("code", {
                        pre: !0
                    }, [t._v("\\lim")]), t._v(": "), e("code", {
                        pre: !0
                    }, [t._v("\\lim_{x\\to 0}")]), t._v(" \\(\\lim_{x\\to 0}\\)")])]), t._v(" "), e("li", [e("p", [t._v("There are a very large number of special symbols and notations, too many to list here; see this shorter listing, or this exhaustive listing. Some of the most common include:")])])]), t._v(" "), e("ul", [e("li", [e("code", {
                        pre: !0
                    }, [t._v("\\lt")]), t._v(" "), e("code", {
                        pre: !0
                    }, [t._v("\\gt")]), t._v(" "), e("code", {
                        pre: !0
                    }, [t._v("\\le")]), t._v(" "), e("code", {
                        pre: !0
                    }, [t._v("\\leq")]), t._v(" "), e("code", {
                        pre: !0
                    }, [t._v("\\leqq")]), t._v(" "), e("code", {
                        pre: !0
                    }, [t._v("\\leqslant")]), t._v(" "), e("code", {
                        pre: !0
                    }, [t._v("\\ge")]), t._v(" "), e("code", {
                        pre: !0
                    }, [t._v("\\geq")]), t._v(" "), e("code", {
                        pre: !0
                    }, [t._v("\\geqq")]), t._v(" "), e("code", {
                        pre: !0
                    }, [t._v("\\geqslant")]), t._v(" "), e("code", {
                        pre: !0
                    }, [t._v("\\neq")]), t._v(" \\(\\lt\\) \\(\\gt\\) \\(\\le\\) \\(\\leq\\) \\(\\leqq\\) \\(\\leqslant\\) \\(\\ge\\) \\(\\geq\\) \\(\\geq\\) \\(\\geqslant\\) \\(\\neq\\)")])]), t._v(" "), e("p", [t._v("You can use "), e("code", {
                        pre: !0
                    }, [t._v("\\not")]), t._v(" to put a slash through almost anything: "), e("code", {
                        pre: !0
                    }, [t._v("\\not\\lt")]), t._v(" \\(\\not\\lt\\)\nbut it often looks bad.")]), t._v(" "), e("ul", [e("li", [e("code", {
                        pre: !0
                    }, [t._v("\\times")]), t._v(" "), e("code", {
                        pre: !0
                    }, [t._v("\\div")]), t._v(" "), e("code", {
                        pre: !0
                    }, [t._v("\\pm")]), t._v(" "), e("code", {
                        pre: !0
                    }, [t._v("\\mp")]), t._v(" \\(\\times\\) \\(\\div\\) \\(\\pm\\) \\(\\mp\\)  "), e("code", {
                        pre: !0
                    }, [t._v("\\cdot")]), t._v(" is a centered dot: \\(x\\cdot y\\)")]), t._v(" "), e("li", [e("code", {
                        pre: !0
                    }, [t._v("\\cup")]), t._v(" "), e("code", {
                        pre: !0
                    }, [t._v("\\cap")]), t._v(" "), e("code", {
                        pre: !0
                    }, [t._v("\\setminus")]), t._v(" "), e("code", {
                        pre: !0
                    }, [t._v("\\subset")]), t._v(" "), e("code", {
                        pre: !0
                    }, [t._v("\\subseteq")]), t._v(" "), e("code", {
                        pre: !0
                    }, [t._v("\\subsetneq")]), t._v(" "), e("code", {
                        pre: !0
                    }, [t._v("\\supset")]), t._v(" "), e("code", {
                        pre: !0
                    }, [t._v("\\in")]), t._v(" "), e("code", {
                        pre: !0
                    }, [t._v("\\notin")]), t._v(" "), e("code", {
                        pre: !0
                    }, [t._v("\\emptyset")]), t._v(" "), e("code", {
                        pre: !0
                    }, [t._v("\\varnothing")]), t._v(" \\(\\cup\\) \\(\\cap\\) \\(\\setminus\\) \\(\\subset\\) \\(\\subseteq\\) \\(\\subsetneq\\) \\(\\supset\\) \\(\\in\\) \\(\\notin\\) \\(\\emptyset\\) \\(\\varnothing\\)")]), t._v(" "), e("li", [e("code", {
                        pre: !0
                    }, [t._v("{n+1 \\choose 2k}")]), t._v(" \\({n+1 \\choose 2k}\\) or "), e("code", {
                        pre: !0
                    }, [t._v("\\binom{n+1}{2k}")]), t._v(" \\(\\binom{n+1}{2k}\\)")]), t._v(" "), e("li", [e("code", {
                        pre: !0
                    }, [t._v("\\to")]), t._v(" "), e("code", {
                        pre: !0
                    }, [t._v("\\rightarrow")]), t._v(" "), e("code", {
                        pre: !0
                    }, [t._v("\\leftarrow")]), t._v(" "), e("code", {
                        pre: !0
                    }, [t._v("\\Rightarrow")]), t._v(" "), e("code", {
                        pre: !0
                    }, [t._v("\\Leftarrow")]), t._v(" "), e("code", {
                        pre: !0
                    }, [t._v("\\mapsto")]), t._v(" \\(\\to\\) \\(\\rightarrow\\) \\(\\leftarrow\\) \\(\\Rightarrow\\) \\(\\Leftarrow\\) \\(\\mapsto\\)")]), t._v(" "), e("li", [e("code", {
                        pre: !0
                    }, [t._v("\\land")]), t._v(" "), e("code", {
                        pre: !0
                    }, [t._v("\\lor")]), t._v(" "), e("code", {
                        pre: !0
                    }, [t._v("\\lnot")]), t._v(" "), e("code", {
                        pre: !0
                    }, [t._v("\\forall")]), t._v(" "), e("code", {
                        pre: !0
                    }, [t._v("\\exists\\")]), t._v(" "), e("code", {
                        pre: !0
                    }, [t._v("top")]), t._v(" "), e("code", {
                        pre: !0
                    }, [t._v("\\bot")]), t._v(" "), e("code", {
                        pre: !0
                    }, [t._v("\\vdash")]), t._v(" "), e("code", {
                        pre: !0
                    }, [t._v("\\vDash")]), t._v(" \\(\\land\\) \\(\\lor\\) \\(\\lnot\\) \\(\\forall\\) \\(\\exists\\) \\(top\\) \\(\\bot\\) \\(\\vdash\\) \\(\\vDash\\)")]), t._v(" "), e("li", [e("code", {
                        pre: !0
                    }, [t._v("\\star")]), t._v(" "), e("code", {
                        pre: !0
                    }, [t._v("\\ast")]), t._v(" "), e("code", {
                        pre: !0
                    }, [t._v("\\oplus")]), t._v(" "), e("code", {
                        pre: !0
                    }, [t._v("\\circ")]), t._v(" "), e("code", {
                        pre: !0
                    }, [t._v("\\bullet")]), t._v("  \\(\\star\\) \\(\\ast\\) \\(\\oplus\\) \\(\\circ\\) \\(\\bullet\\)")]), t._v(" "), e("li", [e("code", {
                        pre: !0
                    }, [t._v("\\approx")]), t._v(" "), e("code", {
                        pre: !0
                    }, [t._v("\\sim")]), t._v(" "), e("code", {
                        pre: !0
                    }, [t._v("\\simeq")]), t._v(" "), e("code", {
                        pre: !0
                    }, [t._v("\\cong")]), t._v(" "), e("code", {
                        pre: !0
                    }, [t._v("\\equiv")]), t._v(" "), e("code", {
                        pre: !0
                    }, [t._v("\\prec")]), t._v(" "), e("code", {
                        pre: !0
                    }, [t._v("\\lhd")]), t._v(" "), e("code", {
                        pre: !0
                    }, [t._v("\\therefore")]), t._v(" \\(\\approx\\) \\(\\sim\\) \\(\\simeq\\) \\(\\cong\\) \\(\\equiv\\) \\(\\prec\\) \\(\\lhd\\) \\(\\therefore\\)")]), t._v(" "), e("li", [e("code", {
                        pre: !0
                    }, [t._v("\\infty")]), t._v(" "), e("code", {
                        pre: !0
                    }, [t._v("\\aleph")]), t._v(" \\(\\infty\\) \\(\\aleph\\)")]), t._v(" "), e("li", [e("code", {
                        pre: !0
                    }, [t._v("\\nabla")]), t._v(" "), e("code", {
                        pre: !0
                    }, [t._v("\\partial")]), t._v("  \\(\\nabla\\) \\(\\partial\\)")]), t._v(" "), e("li", [t._v("For modular equivalence, use "), e("code", {
                        pre: !0
                    }, [t._v("\\pmod")]), t._v(" like this: "), e("code", {
                        pre: !0
                    }, [t._v("a\\equiv")]), t._v(" b"), e("code", {
                        pre: !0
                    }, [t._v("\\pmod")]), t._v(" n a≡b(modn)")]), t._v(" "), e("li", [e("code", {
                        pre: !0
                    }, [t._v("\\ldots")]), t._v(" is the dots in \\(a1,a2,\\ldots,\\)")]), t._v(" "), e("li", [e("code", {
                        pre: !0
                    }, [t._v("\\cdots")]), t._v(" is the dots in \\(a1+a2+\\cdots+\\)")]), t._v(" "), e("li", [t._v("Some Greek letters have variant forms: "), e("code", {
                        pre: !0
                    }, [t._v("\\epsilon")]), t._v(" \\(\\epsilon\\) "), e("code", {
                        pre: !0
                    }, [t._v("\\varepsilon")]), t._v(" \\(\\varepsilon\\), "), e("code", {
                        pre: !0
                    }, [t._v("\\phi")]), t._v(" \\(\\phi\\) "), e("code", {
                        pre: !0
                    }, [t._v("\\varphi")]), t._v(" \\(\\varphi\\), and others. Script lowercase l is "), e("code", {
                        pre: !0
                    }, [t._v("\\ell")]), t._v(" \\(\\ell\\)")])]), t._v(" "), e("p", [t._v("Detexify lets you draw a symbol on a web page and then lists the TEX\nsymbols that seem to resemble it. These are not guaranteed to work in MathJax but are a good place to start. To check that a command is supported, note that "), e("a", {
                        attrs: {
                            href: "http://MathJax.org",
                            target: "_blank",
                            rel: "noopener noreferrer"
                        }
                    }, [t._v("MathJax.org")]), t._v(" maintains a list of currently supported LATEX commands, and one can also check Dr. Carol JVF Burns's page of TEX")]), t._v(" "), e("p", [t._v("Commands Available in MathJax.")])])])
                }, [], !1, null, null, null);
            "function" == typeof r && r(h);
            a.default = h.exports
        }
    }
]);