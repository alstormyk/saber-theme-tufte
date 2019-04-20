<template>
  <article class="footer">
    <section>
      <ul class="footer-top">
        <li class="footer-title">{{ $siteConfig.title }}
        </li>
        <li class="author">
          {{ $siteConfig.author }}
        </li>
        <li v-if="$siteConfig.email">
          <a class="site-email" :href="`mailto:${$siteConfig.email}`">{{ $siteConfig.email }}</a>
        </li>
        <li class="footer-right">
          {{ $siteConfig.description }}
        </li>
      </ul>
      <ul class="footer-bottom">
        <Social />
      </ul>
    </section>
  </article>
</template>

<script>
import Social from './Social.vue'

export default {
  components: {
    Social
  }
}
</script>

<style>
.footer {
  margin: 4rem 0;
  padding: 1.5rem .5rem .5rem;
  min-width: 50%;
  font-size: 1.1rem;
}
.footer-title {
  font-size: 1.7rem;
  font-style: italic;
}
a.site-email:link {
  text-decoration: none;
  background: none;
}
ul.footer-top {
  font-size: 1.1rem;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  width: 80%
}
li.footer-right {
  max-width: 40%;
}
li {
  padding: 0 1rem;
}
</style>
