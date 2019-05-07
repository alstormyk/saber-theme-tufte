---
title: Maths Page
date: 2019-04-18
layout: page
---

# Mathjax Example Tutorial

<section>

1. To see how any formula was written in any question or answer, including this one, right-click on the expression it and choose "Show Math As > TeX Commands". (When you do this, the '$' will not display. Make sure you add these. See the next point.)

2. For inline formulas, enclose the formula in `\\(...\\)` or `$...$`. For displayed formulas, use `\\[...\\]` or `$$...$$`.
These render differently.  
For example, type   
`\\(\sum_{i=0}^n i^2 = \frac{(n^2+n)(2n+1)}{6}\\)`  
$\sum_{i=0}^n i^2 = \frac{(n^2+n)(2n+1)}{6}$    
and then,  
`$$\sum_{i=0}^n i^2 = \frac{(n^2+n)(2n+1)}{6}$$`
$$\sum_{i=0}^n i^2 = \frac{(n^2+n)(2n+1)}{6}$$

3. For Greek letters, use `\alpha`, `\beta`, …, `\omega` \\(\alpha, \beta, …, \omega\\). For uppercase, use `\Gamma`, `\Delta`, …, `\Omega`: \\(\Gamma, \Delta, …, \Omega\\).

4. For superscripts and subscripts, use `^` and `_` For example:  
`x_i^2`  \\(x_i^2\\)    
`\log_2 x` \\(\log_2 x\\)   

5. Groups. Superscripts, subscripts, and other operations apply only to the next “group”. A “group” is either a single symbol, or any formula surrounded by curly braces `{…}`.  
If you do `10^10`, you will get a surprise: \\(10^10\\)   
But `10^{10}` gives what you probably wanted: \\(10^{10}\\)  
Use curly braces to delimit a formula to which a superscript or subscript applies:  
`x^5^6` is an error \\(x^5^6\\)  
`{x^y}^z` is \\({x^y}^z\\) and  
`x^{y^z}` is \\(x^{y^z}\\).  
Observe the difference between  
`x_i^2` \\(x_i^2\\) and `x_{i^2}` \\(x_{i^2}\\)

6. Parentheses Ordinary symbols `()[]` make parentheses and brackets \\((2+3)[4+4]\\)
Use `\{` and `\}` for curly braces \\(\{\}\\)  

These do not scale with the formula in between, so if you write `(\frac{\sqrt x}{y^3})` the parentheses will be too small: \\((\frac{\sqrt x}{y^3})\\)    
Using `\left(`…`\right)` will make the sizes adjust automatically to the formula they enclose: `\left(\frac{\sqrt x}{y^3}\right)` is \\(\left(\frac{\sqrt x}{y^3}\right)\\)

`\left` and `\right` apply to all the following sorts of parentheses: `(` and `)` \\((x)\\)  
`[` and `]`\\([x]\\),   
`|` \\(|x|\\),   
`\vert` \\(\vert x \vert\\)   
`\Vert` \\(\Vert x \Vert\\)   
`\langle` and `\rangle` \\(\langle x \rangle\\)   
`\lceil` and `\rceil` \\(\lceil x \rceil\\)   
`\lfloor` and `\rfloor` \\(\lfloor x \rfloor\\).   
`\middle` can be used to add additional dividers. There are also invisible parentheses, denoted by `.`  
`\left.\frac12\right\rbrace` \\(\left.\frac12\right\rbrace\\)  

If manual size adjustments are required: 
`\Biggl(\biggl(\Bigl(\bigl((x)\bigr)\Bigr)\biggr)\Biggr)`
$$\Biggl(\biggl(\Bigl(\bigl((x)\bigr)\Bigr)\biggr)\Biggr)$$


7. Sums and integrals `\sum` and `\int`; the subscript is the lower limit and the superscript is the upper limit, so for example `\sum_1^n` \\(\sum_1^n\\) 
Don't forget `{`…`}` if the limits are more than a single symbol.   
For example, `\sum_{i=0}^\infty i^2` is \\(\sum_{i=0}^\infty i^2\\).   
Similarly, `\prod` \\(\prod\\), `\int` \\(\int\\), `\bigcup` \\(\bigcup\\), `\bigcap` \\(\bigcap\\), `\iint` \\(\iint\\), `\iiint` \\(\iiint\\), `\idotsint` \\(\idotsint\\)


8. Fractions There are three ways to make these. `\frac ab` applies to the next two groups, and produces \\(\frac ab\\); for more complicated numerators and denominators use `{`…`}`: `\frac{a+1}{b+1} `is \\(\frac{a+1}{b+1}\\). If the numerator and denominator are complicated, you may prefer `\over,` which splits up the group that it is in: `{a+1\over b+1}` is \\({a+1\over b+1}\\). Using `\cfrac{a}{b}` command is useful for continued fractions \\(\cfrac{a}{b}\\), more details for which are given in this sub-article.

9. Fonts:  
Use `\mathbb` or `\Bbb` for "blackboard bold":  
\\(\mathbb A \mathbb B \mathbb C \mathbb D \mathbb E \mathbb F \mathbb G \mathbb H \mathbb I \mathbb J \mathbb K \mathbb L \mathbb M \mathbb N \mathbb O \mathbb P \mathbb Q \mathbb R \mathbb S \mathbb T \mathbb U \mathbb V \mathbb W \mathbb X \mathbb Y \mathbb Z\\)
\\(\mathbb a \mathbb b \mathbb c \mathbb d \mathbb e \mathbb f \mathbb g \mathbb h \mathbb i \mathbb j \mathbb k \mathbb l \mathbb m \mathbb n \mathbb o \mathbb p \mathbb q \mathbb r \mathbb s \mathbb t \mathbb u \mathbb v \mathbb w \mathbb x \mathbb y \mathbb z\\)

Use `\mathbf` for boldface:  
\\(\mathbf A \mathbf B \mathbf C \mathbf D \mathbf E \mathbf F \mathbf G \mathbf H \mathbf I \mathbf J \mathbf K \mathbf L \mathbf M \mathbf N \mathbf O \mathbf P \mathbf Q \mathbf R \mathbf S \mathbf T \mathbf U \mathbf V \mathbf W \mathbf X \mathbf Y \mathbf Z\\)
\\(\mathbf a \mathbf b \mathbf c \mathbf d \mathbf e \mathbf f \mathbf g \mathbf h \mathbf i \mathbf j \mathbf k \mathbf l \mathbf m \mathbf n \mathbf o \mathbf p \mathbf q \mathbf r \mathbf s \mathbf t \mathbf u \mathbf v \mathbf w \mathbf x \mathbf y \mathbf z\\)

Use `\mathit` for italics:  
\\(\mathit A \mathit B \mathit C \mathit D \mathit E \mathit F \mathit G \mathit H \mathit I \mathit J \mathit K \mathit L \mathit M \mathit N \mathit O \mathit P \mathit Q \mathit R \mathit S \mathit T \mathit U \mathit V \mathit W \mathit X \mathit Y \mathit Z\\)
\\(\mathit a \mathit b \mathit c \mathit d \mathit e \mathit f \mathit g \mathit h \mathit i \mathit j \mathit k \mathit l \mathit m \mathit n \mathit o \mathit p \mathit q \mathit r \mathit s \mathit t \mathit u \mathit v \mathit w \mathit x \mathit y \mathit z\\)

Use `\pmb` for boldfaced italics:   
\\(\pmb A \pmb B \pmb C \pmb D \pmb E \pmb F \pmb G \pmb H \pmb I \pmb J \pmb K \pmb L \pmb M \pmb N \pmb O \pmb P \pmb Q \pmb R \pmb S \pmb T \pmb U \pmb V \pmb W \pmb X \pmb Y \pmb Z\\)
\\(\pmb a \pmb b \pmb c \pmb d \pmb e \pmb f \pmb g \pmb h \pmb i \pmb j \pmb k \pmb l \pmb m \pmb n \pmb o \pmb p \pmb q \pmb r \pmb s \pmb t \pmb u \pmb v \pmb w \pmb x \pmb y \pmb z\\)

Use `\mathtt` for "typewriter" font:  
\\(\mathtt A \mathtt B \mathtt C \mathtt D \mathtt E \mathtt F \mathtt G \mathtt H \mathtt I \mathtt J \mathtt K \mathtt L \mathtt M \mathtt N \mathtt O \mathtt P \mathtt Q \mathtt R \mathtt S \mathtt T \mathtt U \mathtt V \mathtt W \mathtt X \mathtt Y \mathtt Z\\)  
\\(\mathtt a \mathtt b \mathtt c \mathtt d \mathtt e \mathtt f \mathtt g \mathtt h \mathtt i \mathtt j \mathtt k \mathtt l \mathtt m \mathtt n \mathtt o \mathtt p \mathtt q \mathtt r \mathtt s \mathtt t \mathtt u \mathtt v \mathtt w \mathtt x \mathtt y \mathtt z\\)

Use `\mathrm` for roman font:  
\\(\mathrm A \mathrm B \mathrm C \mathrm D \mathrm E \mathrm F \mathrm G \mathrm H \mathrm I \mathrm J \mathrm K \mathrm L \mathrm M \mathrm N \mathrm O \mathrm P \mathrm Q \mathrm R \mathrm S \mathrm T \mathrm U \mathrm V \mathrm W \mathrm X \mathrm Y \mathrm Z\\)  
\\(\mathrm a \mathrm b \mathrm c \mathrm d \mathrm e \mathrm f \mathrm g \mathrm h \mathrm i \mathrm j \mathrm k \mathrm l \mathrm m \mathrm n \mathrm o \mathrm p \mathrm q \mathrm r \mathrm s \mathrm t \mathrm u \mathrm v \mathrm w \mathrm x \mathrm y \mathrm z\\)

Use `\mathsf` for sans-serif font:  
\\(\mathsf A \mathsf B \mathsf C \mathsf D \mathsf E \mathsf F \mathsf G \mathsf H \mathsf I \mathsf J \mathsf K \mathsf L \mathsf M \mathsf N \mathsf O \mathsf P \mathsf Q \mathsf R \mathsf S \mathsf T \mathsf U \mathsf V \mathsf W \mathsf X \mathsf Y \mathsf Z\\)  
\\(\mathsf a \mathsf b \mathsf c \mathsf d \mathsf e \mathsf f \mathsf g \mathsf h \mathsf i \mathsf j \mathsf k \mathsf l \mathsf m \mathsf n \mathsf o \mathsf p \mathsf q \mathsf r \mathsf s \mathsf t \mathsf u \mathsf v \mathsf w \mathsf x \mathsf y \mathsf z\\)

Use `\mathcal` for "calligraphic" letters:  
\\(\mathcal A \mathcal B \mathcal C \mathcal D \mathcal E \mathcal F \mathcal G \mathcal H \mathcal I \mathcal J \mathcal K \mathcal L \mathcal M \mathcal N \mathcal O \mathcal P \mathcal Q \mathcal R \mathcal S \mathcal T \mathcal U \mathcal V \mathcal W \mathcal X \mathcal Y \mathcal Z\\)  
\\(\mathcal a \mathcal b \mathcal c \mathcal d \mathcal e \mathcal f \mathcal g \mathcal h \mathcal i \mathcal j \mathcal k \mathcal l \mathcal m \mathcal n \mathcal o \mathcal p \mathcal q \mathcal r \mathcal s \mathcal t \mathcal u \mathcal v \mathcal w \mathcal x \mathcal y \mathcal z\\)

Use `\mathscr` for script letters:  
\\(\mathscr A \mathscr B \mathscr C \mathscr D \mathscr E \mathscr F \mathscr G \mathscr H \mathscr I \mathscr J \mathscr K \mathscr L \mathscr M \mathscr N \mathscr O \mathscr P \mathscr Q \mathscr R \mathscr S \mathscr T \mathscr U \mathscr V \mathscr W \mathscr X \mathscr Y \mathscr Z\\)  
\\(\mathscr a \mathscr b \mathscr c \mathscr d \mathscr e \mathscr f \mathscr g \mathscr h \mathscr i \mathscr j \mathscr k \mathscr l \mathscr m \mathscr n \mathscr o \mathscr p \mathscr q \mathscr r \mathscr s \mathscr t \mathscr u \mathscr v \mathscr w \mathscr x \mathscr y \mathscr z\\)

Use `\mathfrak` for "Fraktur" (old German style) letters:  
\\(\mathfrak A \mathfrak B \mathfrak C \mathfrak D \mathfrak E \mathfrak F \mathfrak G \mathfrak H \mathfrak I \mathfrak J \mathfrak K \mathfrak L \mathfrak M \mathfrak N \mathfrak O \mathfrak P \mathfrak Q \mathfrak R \mathfrak S \mathfrak T \mathfrak U \mathfrak V \mathfrak W \mathfrak X \mathfrak Y \mathfrak Z\\)  
\\(\mathfrak a \mathfrak b \mathfrak c \mathfrak d \mathfrak e \mathfrak f \mathfrak g \mathfrak h \mathfrak i \mathfrak j \mathfrak k \mathfrak l \mathfrak m \mathfrak n \mathfrak o \mathfrak p \mathfrak q \mathfrak r \mathfrak s \mathfrak t \mathfrak u \mathfrak v \mathfrak w \mathfrak x \mathfrak y \mathfrak z\\)


10. Radical signs Use `sqrt`, which adjusts to the size of its argument: `\sqrt{x^3}` \\(\sqrt{x^3}\\) ; `\sqrt[3]{\frac xy}` \\(\sqrt[3]{\frac xy}\\)

For complicated expressions, consider using `{...}^{1/2}` instead.

11. Some special functions such as "lim", "sin", "max", "ln", and so on are normally set in roman font instead of italic font. Use `\lim`, `\sin`, etc. to make these:   
`\sin x` \\(\sin x\\), not `sin x` \\(sin x\\).     
Use subscripts to attach a notation to `\lim`: `\lim_{x\to 0}` \\(\lim_{x\to 0}\\)

12. There are a very large number of special symbols and notations, too many to list here; see this shorter listing, or this exhaustive listing. Some of the most common include:
+ `\lt` `\gt` `\le` `\leq` `\leqq` `\leqslant` `\ge` `\geq` `\geqq` `\geqslant` `\neq` \\(\lt\\) \\(\gt\\) \\(\le\\) \\(\leq\\) \\(\leqq\\) \\(\leqslant\\) \\(\ge\\) \\(\geq\\) \\(\geq\\) \\(\geqslant\\) \\(\neq\\)    

You can use `\not` to put a slash through almost anything: `\not\lt` \\(\not\lt\\)
but it often looks bad.
+ `\times` `\div` `\pm` `\mp` \\(\times\\) \\(\div\\) \\(\pm\\) \\(\mp\\)  `\cdot` is a centered dot: \\(x\cdot y\\)
+ `\cup` `\cap` `\setminus` `\subset` `\subseteq` `\subsetneq` `\supset` `\in` `\notin` `\emptyset` `\varnothing` \\(\cup\\) \\(\cap\\) \\(\setminus\\) \\(\subset\\) \\(\subseteq\\) \\(\subsetneq\\) \\(\supset\\) \\(\in\\) \\(\notin\\) \\(\emptyset\\) \\(\varnothing\\)
+ `{n+1 \choose 2k}` \\({n+1 \choose 2k}\\) or `\binom{n+1}{2k}` \\(\binom{n+1}{2k}\\)
+ `\to` `\rightarrow` `\leftarrow` `\Rightarrow` `\Leftarrow` `\mapsto` \\(\to\\) \\(\rightarrow\\) \\(\leftarrow\\) \\(\Rightarrow\\) \\(\Leftarrow\\) \\(\mapsto\\)
+ `\land` `\lor` `\lnot` `\forall` `\exists\` `top` `\bot` `\vdash` `\vDash` \\(\land\\) \\(\lor\\) \\(\lnot\\) \\(\forall\\) \\(\exists\\\) \\(top\\) \\(\bot\\) \\(\vdash\\) \\(\vDash\\)
+ `\star` `\ast` `\oplus` `\circ` `\bullet`  \\(\star\\) \\(\ast\\) \\(\oplus\\) \\(\circ\\) \\(\bullet\\) 
+ `\approx` `\sim` `\simeq` `\cong` `\equiv` `\prec` `\lhd` `\therefore` \\(\approx\\) \\(\sim\\) \\(\simeq\\) \\(\cong\\) \\(\equiv\\) \\(\prec\\) \\(\lhd\\) \\(\therefore\\)
+ `\infty` `\aleph` \\(\infty\\) \\(\aleph\\)
+ `\nabla` `\partial`  \\(\nabla\\) \\(\partial\\)
+ For modular equivalence, use `\pmod` like this: `a\equiv` b`\pmod` n a≡b(modn)  
+ `\ldots` is the dots in \\(a1,a2,\ldots,\\)  
+ `\cdots` is the dots in \\(a1+a2+\cdots+\\)  
+ Some Greek letters have variant forms: `\epsilon` \\(\epsilon\\) `\varepsilon` \\(\varepsilon\\), `\phi` \\(\phi\\) `\varphi` \\(\varphi\\), and others. Script lowercase l is `\ell` \\(\ell\\)

Detexify lets you draw a symbol on a web page and then lists the TEX
symbols that seem to resemble it. These are not guaranteed to work in MathJax but are a good place to start. To check that a command is supported, note that MathJax.org maintains a list of currently supported LATEX commands, and one can also check Dr. Carol JVF Burns's page of TEX

Commands Available in MathJax. 

</section>