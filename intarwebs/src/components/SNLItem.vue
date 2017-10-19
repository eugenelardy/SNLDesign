<template>
<div class="snlitem">
  <p class="vtitle">{{ show.title }}</p>
  <div class="snlthumb">
    <a :href="show.url">
      <img :src="show.thumbnails.medium[1].url" class="img-responsive" style="max-width:100%" :alt="show.title" :title="show.title">
    </a>
  </div>
</div>
</template>

<script>

export default {
  props: ['show'],
  name: 'snl-item'
}
</script>

<style scoped>
.snlitem {
  padding: 1em;
}

.vtitle {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
