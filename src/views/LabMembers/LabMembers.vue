<template>
  <div class="members-list">
    <ListMembers />
  </div>
</template>

<script>
import ListMembers from '@/components/LabMembers/ListMembers.vue'

export default {
  components: { ListMembers }
}
</script>

<style scoped>
.members-list {
    margin: 3% 5%;
    height: auto;
}
</style>
