<template>
  <div class="layout">
    <Header />
      <h1 class="site-title">
      {{ $themeConfig.headerTitle || $siteConfig.title }}
      </h1>
      <h2 class="site-subtitle"> {{ page.attributes.homeSubtitle }}
      </h2>
      <p class="site-description">
        {{ page.attributes.homeDescription }}
      </p>
      <article class="content" v-if="page.posts">
        <saber-link v-for="post in page.posts" :key="post.permalink"
          :to="post.attributes.permalink">
          <figure class="card">
          <div class="item-title">
            <h2> {{ post.attributes.title }} </h2>
          </div>
          <div class="item-time">
            {{ formatDate(post.attributes.createdAt) }}
          </div>
          <div v-if="post.attributes.cover">
            <label for="mn-demo" class="margin-toggle">&#8853;</label>
            <input type="checkbox" id="mn-demo" class="margin-toggle"/>
            <span class="marginnote">
              <img :src="`${post.attributes.cover}`"> 
            </span>
          </div>
          <p class="item-excerpt" v-html="post.attributes.excerpt">
            {{ post.attributes.excerpt }} 
          </p>
          </figure>
        </saber-link>
      </article>
      <div
        class="pagination"
        v-if="page.pagination && (page.pagination.hasNext || page.pagination.hasPrev)">
        <router-link
          class="prev"
          :to="page.pagination.prevLink"
          v-if="page.pagination.hasPrev">
          <em> &#8592;{{ $siteConfig.pagination && $siteConfig.pagination.nextPage || 'Previous' }} </em>
        </router-link>
        <router-link
          class="next"
          :to="page.pagination.nextLink"
          v-if="page.pagination.hasNext">
          <em> {{ $siteConfig.pagination && $siteConfig.pagination.prevPage || 'Next' }} &#8594;</em>
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
h1.site-title {
  padding-top: 15vh;
}
p.site-description {
  max-width: 60%;
}
.item-title h2 {
  text-decoration: underline;
  text-decoration-color: rgba(18, 18, 18, 0.50);
}
.item-time {
  font-style: italic;
  font-size: 1.1rem;
}
figure.card {
  padding-left: 10px;
  border-left: 5px;
  border-style: solid; 
    border-image: 
    linear-gradient(
      to bottom,
      #fffff8,
      #111,  
      rgba(255,255,248,1)
    ) 1 100%;
  transition: all .4s ease;
}
figure.card:hover {
  border-left: 5px; 
  border-style: solid;
    border-image: 
    linear-gradient(
      to bottom,
      #690013, 
      rgba(17,17,17,1)
    ) 1 100%;
}
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
