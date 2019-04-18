<template>
  <div class="layout">
    <Header />
    <article>
      <h1 class="post-title">{{ page.attributes.title }}</h1>
      <p class="post-meta">
        <time
        class="post-published"
        :datetime="page.attributes.createdAt"
        itemprop="datePublished"
        >{{ formatDate(page.attributes.createdAt) }}
        </time>
      </p>
      <section class="post-content e-content">
        <script type="text/x-mathjax-config">
          MathJax.Hub.Config({
            extensions: ["tex2jax.js"],
            jax: ["input/TeX", "output/HTML-CSS"],
            tex2jax: {
              inlineMath: [ ['$','$'], ["\\(","\\)"] ],
              displayMath: [ ['$$','$$'], ["\\[","\\]"] ],
              processEscapes: true
            },
            "HTML-CSS": { fonts: ["TeX"] }
          });
        </script>
        <slot name="default"/>
      </section>
    </article>
    <div class="pagination">
      <router-link class="prev" v-if="page.prevPost" :to="page.prevPost.attributes.permalink">
        <em> &#8592; {{ $siteConfig.pagination && $siteConfig.pagination.prevPost || 'Previous' }} </em>
        <p class="subtitle">{{ page.prevPost.attributes.title }}</p>
      </router-link>
      <router-link class="next" v-if="page.nextPost" :to="page.nextPost.attributes.permalink">
        <em>{{ $siteConfig.pagination && $siteConfig.pagination.nextPost || 'Next' }} &#8594;</em>
        <p class="subtitle">{{ page.nextPost.attributes.title }}</p>
      </router-link>
    </div>
    <Footer />
  </div>
</template>

<script>
import formatDate from '../util/formatDate'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  },
  props: ['page'],
  methods: {
    formatDate
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
.pagination {
  max-width: 50%;
  padding-bottom: 1.5rem;
}
.prev {
  float: left;
  padding-bottom: 0.5rem;
}
.next {
  float: right;
  padding-bottom: 0.5rem;
}
.pagination a:link {
  text-decoration: none;
  background: none;
}
.pagination a {
  padding: .5em 1.2em;
  position: relative;
  text-decoration: none;
  background: none;
}
.pagination a::before,
.pagination a::after {
  content: '';
  height: 14px;
  width: 14px;
  position: absolute;
  transition: all .35s ease;
  opacity: 0;
}
.pagination a::before {
  content: '';
  right: 0;
  top: 0;
  border-top: 4px solid #690013;
  border-right: 4px solid #690013;
  transform: translate(-100%, 50%);
}
.pagination a:after {
  content: '';
  left: 0;
  bottom: 0;
  border-bottom: 4px solid #690013;
  border-left: 4px solid #690013;
  transform: translate(100%, -50%)
}
.pagination a:hover:before,
.pagination a:hover:after{
  transform: translate(0,0);
  opacity: 1;
}
.pagination a:hover {
  color: #690013;
}
</style>