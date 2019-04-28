<template>
<div>
    <Header />
    <div class="layout">
    <article class="post-content e-content">
      <slot name="default"/>
    </article>
    
    <Footer />
    </div>
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
