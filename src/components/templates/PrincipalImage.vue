<template>
  <section class="container">
    <div class="principalImage" />
    <div class="textCentered">
      <span class="mainTitle">BORTOLUCI LAB</span><br><br>
      <span class="subTitle">MOLECULAR IMMUNOLOGY</span>
    </div>
    <div class="loginButton">
      <LoginButtom />
    </div>
  </section>
</template>

<script>
import LoginButtom from '@/components/htmlElements/LoginButton.vue'

export default {
  components: {
    LoginButtom
  }
}
</script>

<style scoped>

.container{
  position: relative;
  text-align: center;
  color: #faf9f9;
  max-width: unset;
}

.principalImage {
  background-image: url("../../assets/images/principal-image.jpg");
  height: 300px;
  width: 100%;
}

.textCentered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.mainTitle {
    font-size: 60px;
    -webkit-text-stroke: 1px rgb(0, 0, 0);
    letter-spacing: 10px;
}

.subTitle {
    font-size: 30px;
    -webkit-text-stroke: 0.5px rgb(0, 0, 0);
    letter-spacing: 1px;
}

.loginButton {
  position: absolute;
  top: 8px;
  right: 16px;
}

</style>
