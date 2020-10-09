<template>
  <div class="member-data">
    <div class="member-header">
      <img
        class="member-image"
        :src="image"
      />
      <div class="text-data">
        <div class="name">
          {{ member.name }}
        </div>
        <div class="role">
          {{ member.role }}
        </div>
        <div class="studies">
          {{ member.studies }}
        </div>
        <SocialMedia :socialMedia="member.socialMedia" />
      </div>
    </div>
    <div class="body">
      {{ member.biography }}
    </div>
  </div>
</template>

<script>
import SocialMedia from "@/components/LabMembers/SocialMedia.vue";

export default {
  components: { SocialMedia },
  props: {
    member: {
      type: Object,
      required: true,
    }
  },
  mounted(){
    this.image = this.member.image;
  }
};
</script>

<style scoped>
.member-data {
  padding: 1% 1%;
}

.member-header {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}

.member-image {
  border-radius: 50%;
  margin: 1% 1%;
  width: 243px;
  height: 243px;
}

.text-data {
  display: flex;
  flex-direction: column;
  margin: 0 2%;
}

.name {
  font-weight: bold;
  font-size: 20px;
  margin: 6% 0;
}

.role {
  margin: 6% 0;
  color: #a2230a;
  font-weight: 600;
}

.studies {
  margin: 6% 0;
  text-align: center;
  font-weight: 700;
  font-size: 17px;
}

.social-media {
  margin: 6% 0;
}

.body {
  margin: 6%;
  text-align: justify;
  line-height: 1.7;
}
</style>
