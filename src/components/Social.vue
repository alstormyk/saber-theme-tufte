<template>
  <ul class="social-media-list">
    <li v-if="social.dribbble">
      <a :href="`https://dribbble.com/${social.dribbble}`" :title="social.dribbble">
        Dribble
      </a>
    </li>
    <li v-if="social.facebook">
      <a :href="`https://www.facebook.com/${social.facebook}`" :title="social.facebook">
        Facebook
      </a>
    </li>
    <li v-if="social.flickr">
      <a :href="`https://www.flickr.com/photos/${social.flickr}`" :title="social.flickr">
        Flickr
      </a>
    </li>
    <li v-if="social.github">
      <a :href="`https://github.com/${social.github}`" :title="social.github">
        GitHub
      </a>
    </li>
    <li v-if="social.instagram">
      <a :href="`https://www.instagram.com/${social.instagram}`" :title="social.instagram">
        Instagram
      </a>
    </li>
    <li v-if="social.linkedin">
      <a :href="`https://www.linkedin.com/in/${social.linkedin}`" :title="social.linkedin">
        LinkedIn
      </a>
    </li>
    <li v-if="social.pinterest">
      <a :href="`https://www.pinterest.com/${social.pinterest}`" :title="social.pinterest">
        Pinterest
      </a>
    </li>
    <li v-if="social.twitter">
      <a :href="`https://twitter.com/${social.twitter}`" :title="social.twitter">
        Twitter
      </a>
    </li>
    <li v-if="social.youtube">
      <a :href="`https://www.youtube.com/user/${social.youtube}`" :title="social.youtube">
        YouTube
      </a>
    </li>
    <li v-if="social.telegram">
      <a :href="`https://t.me/${social.telegram }`" :title="social.telegram">
        Telegram
      </a>
    </li>
    <li v-if="social.microdotblog">
      <a rel="me" :href="`https://micro.blog/${social.microdotblog}`" :title="social.microdotblog">
        MicroDotBlog
      </a>
    </li>
    <li v-if="social.googleplus">
      <a :href="`https://plus.google.com/${social.googleplus}`" :title="social.googleplus">
        GooglePlus
      </a>
    </li>
    <li v-if="social.rss && feedLink">
      <a :href="feedLink" title="rss">
        RSS
      </a>
    </li>
  </ul>
</template>

<script>
import variables from 'saber/variables'
export default {
  data() {
    return {
      feedLink: variables.feedLink
    }
  },
  computed: {
    social() {
      return this.$themeConfig.social
    }
  }
}
</script>
<style>
ul.social-media-list {
  list-style-type: none;
  display: flex;
  align-items: center;
}
</style>