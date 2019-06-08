<template>
  <div>
    <Header />
    <div class="layout">
      <h1 class="site-title">
      {{ page.attributes.title || $themeConfig.headerTitle || $siteConfig.title }}
      </h1>
      <h2 class="site-subtitle"> {{ page.attributes.subtitle }}
      </h2>
      <p class="site-description">
        {{ page.attributes.description }}
      </p>
      <div class="tag" v-if="page.tag">
        <h2> Tag</h2>
        <h3># {{ page.tag }}</h3>
      </div>
      <div class="category" v-if="page.category">
        <h2>Category</h2>
        <h3 class="site-description"># {{ page.category }}</h3>
        </div>
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
  text-decoration-color: rgba(105, 0, 19, .50);
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
      var(--backgroundColor),
      var(--textColor),  
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
      var(--accentColor), 
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
.pagination a:hover {
  color: var(--accentColor);
}
</style>
