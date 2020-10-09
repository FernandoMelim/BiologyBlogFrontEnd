<template>
  <b-navbar class="mainMenu">
    <template slot="brand">
      <b-navbar-item :to="{ path: '/Home'}" tag="router-link">
        Home
      </b-navbar-item>
      <b-navbar-item :to="{ path: '/ResearchInt'}" tag="router-link">
        Research Interests
      </b-navbar-item>
      <b-navbar-item :to="{ path: '/LabMembers'}" tag="router-link">
        Lab Members
      </b-navbar-item>
      <b-navbar-item :to="{ path: '/Publications'}" tag="router-link">
        Publications
      </b-navbar-item>
      <b-navbar-item :to="{ path: '/FormerStudents'}" tag="router-link">
        Graduates and Former Students
      </b-navbar-item>
      <b-navbar-item :to="{ path: '/CoursesEvents'}" tag="router-link">
        Courses & Events
      </b-navbar-item>
      <b-navbar-item :to="{ path: '/SocialProjects'}" tag="router-link">
        Social Projects
      </b-navbar-item>
      <b-navbar-item :to="{ path: '/Blog'}" tag="router-link">
        Blog
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {

}
</script>

<style>

 .mainMenu {
    -webkit-box-shadow: 0px 9px 12px -4px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 9px 12px -4px rgba(0,0,0,0.75);
    box-shadow: 0px 9px 12px -4px rgba(0,0,0,0.75);
}

.navbar-menu {
    width: 0!important;
    height: 0!important;
}

.navbar-brand {
    width: 100%;
    display: flex;
    justify-content: space-around;
}

</style>
