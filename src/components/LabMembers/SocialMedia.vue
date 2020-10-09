<template>
  <div class="social-media">
    <div v-if="socialMedia.facebook.length" class="icon">
      <a :href="socialMedia.facebook" class="fa fa-facebook"></a>
    </div>
    <div v-if="socialMedia.twitter.length" class="icon">
      <a :href="socialMedia.twitter" class="fa fa-twitter"></a>
    </div>
    <div v-if="socialMedia.linkedin.length" class="icon">
      <a :href="socialMedia.linkedin" class="fa fa-linkedin"></a>
    </div>
    <div v-if="socialMedia.orcid.length" class="icon">
      <a :href="socialMedia.orcid" class="fab fa-orcid"></a>
    </div>
    <div v-if="socialMedia.researchgate.length" class="icon">
      <a :href="socialMedia.researchgate" class="fab fa-researchgate"></a>
    </div>
    <div v-if="socialMedia.lattes.length" class="icon">
      <a :href="socialMedia.lattes" class="fas fa-coffee"></a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    socialMedia: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      suportedSocialMedia: ['facebook', 'twitter', 'linkedin', 'orcid', 'researchgate', 'lattes']
    }
  },
  methods: {
    getIcon () {

    }
  }
}
</script>

<style scoped>

.social-media {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
}

.icon {
    margin: 1%;
}

</style>
