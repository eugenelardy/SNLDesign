<template>
<div class="fsitem">
  <div class="container">
    <a :href="show.url">
      <div class="vover"><div class="vovertext text-center">{{ show.title }}</div></div>
      <div class="fsthumb">
        <img :src="show.thumbnails.medium[0].url" class="img-responsive" style="max-width:100%" :alt="show.title" :title="show.title">
      </div>
    </a>
  </div>
</div>
</template>

<script>

export default {
  props: ['show'],
  name: 'fs-item',
  methods: { secondsToHms: function (d) {
    d = Number(d)
    var h = Math.floor(d / 3600)
    var m = Math.floor(d % 3600 / 60)
    var s = Math.floor(d % 3600 % 60)
    return ('0' + h).slice(-2) + ':' + ('0' + m).slice(-2) + ':' + ('0' + s).slice(-2)
  }
  }
}
</script>

<style scoped>
.fsitem {
  padding: 1em;
  padding-left: 0;
  max-width: 350px;
}

.container {
  position: relative;
  padding-left: 0;
}

.container:hover .vover {
  opacity: 1;
}
</style>
