<template>
<div class="casualitem">
  <div class="hcontainer">
    <a :href="'https://www.youtube.com/watch?v=' + show.id.videoId">
      <div class="vover"><div class="vovertext text-center">{{ show.snippet.title }}</div></div>
      <div class="snlthumb">
        <img :src="show.snippet.thumbnails.medium.url" class="img-responsive" style="max-width:100%" :alt="show.snippet.title" :title="show.title">
      </div>
    </a>
  </div>
</div>
</template>

<script>

export default {
  props: ['show'],
  name: 'casual-item'
}
</script>

<style scoped>
.casualitem {
  padding: 1em;
  padding-left: 0;
  max-width: 350px;
}

.hcontainer {
  position: relative;
  padding: 0;
}

.hcontainer:hover .vover {
  opacity: 1;
}
</style>
