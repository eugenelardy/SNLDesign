<template>
<div class="casualitem">
  <div class="container">
    <div class="vover">{{ show.snippet.title }}</div>
    <div class="snlthumb">
      <a :href="'https://www.youtube.com/watch?v=' + show.id.videoId">
      <img :src="show.snippet.thumbnails.medium.url" class="img-responsive" style="max-width:100%" :alt="show.snippet.title" :title="show.title">
      </a>
    </div>
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

.vover {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  float: left;
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 1000;
  color: #FFFFFF;
  opacity: 0;
  background-color: rgba(2, 2, 2, 0.6);
  transition: .5s ease;
  width: 100%;
}

.container {
  position: relative;
}

.container:hover .vover {
  opacity: 1;
}
</style>
