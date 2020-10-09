<template>
  <footer class="footer">
    <div class="lab-footer">
      <img src="../../assets/images/logo-lab.webp" class="lab-image">
      <span>Molecular Immunology Lab</span>
      <span>© 2020 Bortoluci's Lab - São Paulo Vila Clementino</span>
    </div>
    <div class="developer-footer">
      <div class="developer">Copyright © 2020. Todos Direitos Reservados. Desenvolvido por Fernando Melim Hottum <a href="https://www.linkedin.com/in/fernandomelim/"><i class="fa linkedIn-link">&#xf08c;</i></a></div>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: space-around;
  text-align: right;
  align-items: center;
  height: auto;
  background-color: white;
  padding: 0;
}

.lab-footer {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  color: grey;
}

.lab-image {
  width: 70px;
  height: 61px;
}

.developer {
  font-size: 13px;
  margin-right: 10px;
  color: grey;
  size: inline;
}

.linkedIn-link {
  color: Black;
}

</style>
