<template>
  <footer class="footer">
    <hr>
    <div class="footer-bottom">
      <div class="author">
        {{ $siteConfig.author }}
        <a class="site-email" :href="`mailto:${$siteConfig.email}`">{{ $siteConfig.email }}</a>
      </div>
    </div>
  </footer>
</template>

<script>
</script>

<style scoped>
.footer {
  margin: 2rem;
  padding: 4rem 2rem 0;
  font-size: 1.1rem;
}
a.site-email:link {
  text-decoration: none;
  background: none;
  padding-left: 2rem;
}
</style>
