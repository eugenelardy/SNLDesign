<template>
<div id="app">
  <div class="jumbotron" style="padding-bottom: 0px;margin-bottom: 0px; padding-top:16px;">
    <div class="container text-center">
      <img src="./assets/img/snl-hero.png" class="img-responsive snl" style="width:250px">
    </div>
    <div class="container-fluid text-center">
      <p>
        <router-link v-bind:to="'/'">Home</router-link>   &middot;
        <a href="https://www.twitch.tv/supremenightlive">The Show</a>  &middot;
	<a href="https://twitter.com/supnightlive">Twitter</a>  &middot;
        <router-link v-bind:to="'/about'">About</router-link>
      </p>
    </div>
  </div>
  <router-view/>
</div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
.snl {
  margin: 0 auto;
}

.snlcontainer {
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
}
</style>
