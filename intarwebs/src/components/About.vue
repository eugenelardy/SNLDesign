<template>
  <div id="about" class="about">
  <h2>Streetwear Night Live</h2>
  <div id="twitch-embed"></div>
  <p>
  Streetwear Night Live is a show on streetwear culture & everything in between that is hosted by most savage duo on the internet, Eugene and P-Money. Join the hosts are they talk about the latest trends, collabs, and anything related to the culture. Live every Thursday at 8pm EST.
  </p>
  <br>
  <p class="text-center">
    <a class="text-warning" href="https://www.twitch.tv/streetwearnightlive">The Show</a> &middot;
    <a class="text-warning" href="https://twitter.com/StreetNightLive">Twitter</a> &middot;
    <a class="text-warning" href="https://www.instagram.com/streetwearnightlive/">Instagram</a>
  </p>
  </div>
</template>

<script>
export default {
  name: 'about',
  mounted: function () {
    /* eslint-disable no-new */
    new window.Twitch.Embed('twitch-embed', {
      width: '100%',
      height: 480,
      channel: 'streetwearnightlive'
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
