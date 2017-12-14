<template>
  <div id="about" class="about">
  <h2>FreshStock</h2>
  <div id="twitch-embed"></div>
  <p>
  FreshStock is a Twitch original live show that focuses on the culture around sneakers & streetwear. Join host Bash, Zhi and Ray as they talk about the hottest releases, fashion news, social trends and watch them debate over their pick for the coveted Sneaker of the Week. From the local streets of San Francisco to the busy streets of NYC we travel to sneaker boutiques to find sneakers that fit our guest’s individual taste. With live DJ performances, live chat interaction, style icons, and hilarious talk on all things streetwear, FreshStock is a live show you won’t want to miss.
  </p>
  <br>
  <p class="text-center">
    <a class="text-warning" href="https://www.twitch.tv/freshstock">The Show</a>
    <!--
    &middot;
    a class="text-warning" href="https://twitter.com/StreetNightLive">Twitter</a> &middot;
    <a class="text-warning" href="https://www.instagram.com/streetwearnightlive/">Instagram</a-->
  </p>
  </div>
</template>

<script>
export default {
  name: 'fs-about',
  mounted: function () {
    /* eslint-disable no-new */
    new window.Twitch.Embed('twitch-embed', {
      width: '100%',
      height: 480,
      channel: 'freshstock'
    })
  }
}
</script>

<style scoped>
.about {
  padding: 2em;
  padding-top: 0;
  font-size: 125%;
}
</style>
