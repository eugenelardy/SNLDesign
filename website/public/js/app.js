var db = firebase.database();

// show.preview.medium
// show.thumbnails.medium[1].url
Vue.component('snl-item', {
  props: ['show'],
  methods: {
    secondsToHms: function(d) { d = Number(d); var h = Math.floor(d / 3600); var m = Math.floor(d % 3600 / 60); var s = Math.floor(d % 3600 % 60); return ('0' + h).slice(-2) + ":" + ('0' + m).slice(-2) + ":" + ('0' + s).slice(-2); }
  },
  template: '<div class="snlitem"><p>{{ show.title }}</p><div class="snlthumb"><div class="snlthumbtag">&#x1F552; &nbsp; {{ this.secondsToHms(show.length) }}</div><a :href="show.url"><img :src="show.thumbnails.medium[1].url" class="img-responsive" style="max-width:100%" :alt="show.title" :title="show.title"></a></div></div>'
})

var app = new Vue({
  el: '#snlweouthere',
  firebase: {
    showlist: db.ref('videos/').limitToFirst(12)
  },
})
