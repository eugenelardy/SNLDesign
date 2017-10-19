<template>
<div class="casualitem">
  <p class="casualtitle">{{ show.snippet.title }}</p>
  <div class="snlthumb">
    <a :href="show.id.videoId">
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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 350px;
}

.casualtitle {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
