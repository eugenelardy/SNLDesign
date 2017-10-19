<template>
<div class="casualitem">
  <p class="vtitle">{{ show.snippet.title }}</p>
  <div class="snlthumb">
    <a :href="'https://www.youtube.com/watch?v=' + show.id.videoId">
      <img :src="show.snippet.thumbnails.medium.url" class="img-responsive" style="max-width:100%" :alt="show.snippet.title" :title="show.title">
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
  max-width: 350px;
}

.vtitle {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
