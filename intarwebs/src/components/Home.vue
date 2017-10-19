<template>
  <div class="home">
    <div class="container-fluid bg-3 text-left" id="snlweouthere">    
      <h3>Streetwear Night Live</h3>
      <div class="snlcontainer">
        <snl-item
           v-for="item in showlist"
           v-bind:show="item"
           v-bind:key="item.id">
        </snl-item>
      </div>
    </div><br><br>
  </div>
</template>

<script>
import db from '../db.js'

export default {
  name: 'Home',
  firebase: { showlist: db.ref('videos/').limitToFirst(12) },
  data () {
    return {
      msg: 'main home index'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
