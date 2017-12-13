<template>
<div class="fsitem">
  <p class="vtitle">{{ show.title }}</p>
  <div class="fsthumb">
    <a :href="show.url">
      <img :src="show.thumbnails.medium[1].url" class="img-responsive" style="max-width:100%" :alt="show.title" :title="show.title">
    </a>
  </div>
</div>
</template>

<script>

export default {
  props: ['show'],
  name: 'fs-item'
}
</script>

<style scoped>
.fsitem {
  padding: 1em;
  max-width: 350px;
}

.vtitle {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
