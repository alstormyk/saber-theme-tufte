<template>
  <header class="nav-bar">
  <ul class="nav">
    <li class="nav-title">
      <saber-link to="/">
      <span ref="siteName" class="site-name" v-if ="$themeConfig.title">
        {{ $themeConfig.title }}
      </span>
      <span ref="siteName" class="site-name" v-else>
        {{ $siteConfig.title }}
      </span>
    </saber-link>
    </li>
    <ul class="nav-items" v-if="$themeConfig.nav">
      <li v-for="(item, index) in $themeConfig.nav" class="nav-item" :key="index">
        <saber-link :to="item.link">{{ item.text }}</saber-link>
      </li>
    </ul>
  </ul>
  </header>
</template>

<script>
</script>
<style scoped>
.nav-bar {
  top: 0;
  left: 0;
  position: fixed;
  z-index: 20;
  margin: 0;
  padding: 1rem .5rem .5rem;
  min-width: 100%;
  background-color: var(--backgroundColor);
  border-bottom: 1px solid rgba(140, 12, 35, 0.2);
}
ul.nav {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
li.nav-title {
  padding-top: 0.5rem;
  padding-left: 0.5rem;
  padding-bottom: 0.1rem;
  float: left;
  font-size: 1.3rem;
  font-weight: 600;
}
.nav-title a:link {
  background: transparent;
}
li a {
  display: block;
  text-align: center;
}
ul.nav-items {
  font-size: 1.1rem;
  font-weight: 600;
  list-style-type: none;
  float: right;
  padding-right: 2rem;
  margin-top: 0.5rem;
}
li.nav-item {
  margin-top: 0;
  float: left;
  margin-left: 1.5rem;
}
li.nav-item:not(:first-child) {
  margin-top: 0;
}
.nav-item {
  position: relative;
  display: inline-block;
  padding: 0 7px;
}
.nav-item:hover {
  color: var(--accentColor);
}

@media (max-width: 700px) {
  li.nav-item {
    margin-left: 0;
  }
}
@media (max-width: 620px) {
  li {
    padding: 0;
  }
}
@media (max-width: 500px) {
  li.nav-title {
    padding-top: 0;
    font-size: 1rem;
  }
  ul.nav-items {
    font-size: 1rem;
    line-height: 1.1rem;
  }
}
</style>