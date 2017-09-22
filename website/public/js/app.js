var db = firebase.database();

// show.preview.medium
// show.thumbnails.medium[1].url
Vue.component('snl-item', {
  props: ['show'],
  template: '<div class="snlitem"><p>{{ show.title }}</p><a :href="show.url"><img :src="show.thumbnails.medium[1].url" class="img-responsive" style="max-width:100%" :alt="show.title" :title="show.title"></a></div>'
})

var app7 = new Vue({
  el: '#snlweouthere',
  firebase: {
    showlist: db.ref('videos/')
  }
})
