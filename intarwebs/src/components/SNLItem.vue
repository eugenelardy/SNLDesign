<template>
<div class="snlitem">
  <div class="container">
    <div class="vover">{{ show.title }} &#x1F552; &nbsp; {{ this.secondsToHms(show.length) }}</div>
    <div class="snlthumb">
      <a :href="show.url">
        <img :src="show.thumbnails.medium[1].url" class="img-responsive" style="max-width:100%" :alt="show.title" :title="show.title">
      </a>
    </div>
  </div>
</div>
</template>

<script>

export default {
  props: ['show'],
  name: 'snl-item',
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
.snlitem {
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
