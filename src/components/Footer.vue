<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="author">
        {{ $siteConfig.author }}
        <br>
        <a class="site-email" :href="`mailto:${$siteConfig.email}`">{{ $siteConfig.email }}</a>
      </div>
    </div>
  </footer>
</template>

<script>
</script>

<style scoped>
.footer {
  min-width: 100%;
  font-size: 1.1rem;
  line-height: 2rem;
  overflow: hidden;
  min-height: 10vh;
}
.footer-content {
  border-top: 1px solid rgba(140, 12, 35, 0.2);
  text-align: center;
  padding: 1rem;
}
a.site-email:link {
  text-decoration: none;
  background: none;
}
</style>
