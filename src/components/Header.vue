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
export default {
    
}
</script>
<style>
.nav-bar {
  top: 0;
  position: fixed;
  z-index: 20;
  margin: 0;
  padding: 1.5rem .5rem .5rem;
  min-width: 60%;
  background: #fffff8;
}
ul.nav {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
li.nav-title {
  padding-top: 0.5rem;
  float: left;
  font-size: 1.3rem;
  font-weight: 600;
}
.nav-title a:link {
  text-decoration: none;
  background: transparent;
  text-shadow: none;
}
li a {
  display: block;
  text-align: center;
  text-decoration: none;
}
ul.nav-items {
  list-style-type: none;
  float: right;
}
li.nav-item {
  margin-top: 0;
  float: left;
  margin-left: 1.5rem;
}
li.nav-item:not(:first-child) {
  margin-top: 0;
}
.nav-item a:link {
  text-decoration: none;
  background: transparent;
  text-shadow: none;
}
.nav-item a {
  padding: .5em .8em;
  position: relative;
  text-decoration: none;
}
.nav-item a::before,
.nav-item a::after {
  content: '';
  height: 14px;
  width: 14px;
  position: absolute;
  transition: all .35s ease;
  opacity: 0;
}
.nav-item a::before {
  content: '';
  right: 0;
  top: 0;
  border-top: 3px solid #690013;
  border-right: 3px solid #690013;
  transform: translate(-100%, 50%);
}
.nav-item a:after {
  content: '';
  left: 0;
  bottom: 0;
  border-bottom: 3px solid #690013;
  border-left: 3px solid #690013;
  transform: translate(100%, -50%)
}
.nav-item a:hover:before,
.nav-item a:hover:after{
  transform: translate(0,0);
  opacity: 1;
}
.nav-item a:hover {
  color: #690013;
}
</style>