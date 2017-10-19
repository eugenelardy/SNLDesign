<template>
  <div class="home">
    <div class="container-fluid bg-3 text-left">    
      <div class="snlcontainer">
        <snl-item
           v-for="item in snlshowlist"
           v-bind:show="item"
           v-bind:key="item.id">
        </snl-item>
      </div>
    </div><br>
    <div class="container-fluid bg-3 text-left">    
      <h3>The Casual</h3>
      <div class="snlcontainer">
        <casual-item
           v-for="item in thecasualshowlist"
           v-bind:show="item"
           v-bind:key="item._id">
        </casual-item>
      </div>
    </div><br><br>
  </div>
</template>

<script>
import db from '../db.js'

export default {
  name: 'Home',
  firebase: {
    snlshowlist: db.ref('videos/').limitToFirst(12),
    thecasualshowlist: db.ref('thecasual/items/').limitToFirst(12)
  },
  data () {
    return {
      msg: 'main home index'
    }
  }
}
</script>

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
