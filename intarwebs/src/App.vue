<template>
<div id="app">
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <router-link v-bind:to="'/'">
        <img src="./assets/img/snl-hero.png" class="img-responsive snl" style="width:250px; padding-top:16px;">
      </router-link>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav navbar-right">
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Programs<span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a></li>
          </ul>
        </li>
        <li><a href="https://www.twitch.tv/streetwearnightlive">The Show</a></li>
	<li><a href="https://twitter.com/StreetNightLive">Twitter</a></li>
        <li><router-link v-bind:to="'/about'">About</router-link></li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
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
