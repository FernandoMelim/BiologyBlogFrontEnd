<template>
  <b-carousel :indicator-inside="false">
    <b-carousel-item>
      <span class="image">
        <img src="@/assets/images/moment-together1.webp">
      </span>
    </b-carousel-item>
    <b-carousel-item>
      <span class="image">
        <img src="@/assets/images/moment-together2.webp">
      </span>
    </b-carousel-item>
    <b-carousel-item>
      <span class="image">
        <img src="@/assets/images/moment-together3.webp">
      </span>
    </b-carousel-item>
  </b-carousel>
</template>

<script>
export default {
  data () {
    return {
      imagesPaths: [
        '@/assets/images/moment-together1.webp',
        '@/assets/images/moment-together2.webp',
        '@/assets/images/moment-together3.webp'
      ]
    }
  },
  methods: {
    getImage (key) {
      return this.imagesPaths[key].toString()
    }
  }
}
</script>

<style scoped>
.is-active .al img {
    filter: grayscale(0%);
}
.al img {
    filter: grayscale(100%);
}

img {
    width: 600px;
    height: 500px;
}
</style>
