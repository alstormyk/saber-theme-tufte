<template>
  <div>
    <Header />
    <div class="layout">
    <article class="post-content e-content">
      <slot name="default"/>
    </article>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  },
  props: ['page'],
  mounted () {
   if (window.MathJax) {
        window.MathJax.Hub.Config({
          tex2jax: {
            inlineMath: [['$', '$'], ["\\(","\\)"]],
            displayMath: [['$$', '$$'], ["\\[","\\]"]],
            processEscapes: true,
            processEnvironments: true
          },
          displayAlign: 'center',
          'HTML-CSS': {
            fonts: ["TeX"],
            styles: { '.MathJax_Display': { margin: 0 } },
            linebreaks: { automatic: true }
          }
        })
        window.MathJax.Hub.Queue([
          'Typeset',
          window.MathJax.Hub
        ])
      }
  },
  head() {
    const pageTitle = this.page.attributes.title
    return {
      title: pageTitle ?
        `${pageTitle} - ${this.$siteConfig.title}` :
        this.$siteConfig.title
      }
    }
}
</script>
<style>
</style>
