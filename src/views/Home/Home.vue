<template>
  <div class="home-page">
    <span class="title">Our lab</span>

    <div class="introduction">
      <img
        src="@/assets/images/lab-image.webp"
        alt="Lab image"
        class="lab-image"
      />

      <div class="lab-text-introduction">
        The Molecular Immunology Lab (Bortoluci Lab), coordinated by Prof. Dr.
        Karina Ramalho Bortoluci, is mainly focused on the study of
        intracellular pathways involved on the activation and effector
        mechanisms mediated by inflammasomes to the control of infections.

        <br /><br />
        Using assays based on molecular and cellular biology, genetics, and
        biochemistry, we investigate how the activation of those platforms can
        contribute for the control of infections caused by intracellular
        pathogens, such as Salmonella typhimurium, Trypanosoma cruzi, Toxoplasma
        gondii and Zika virus by cells from Innate Immune System and glial cells
        from Central Nervous System.
      </div>
    </div>

    <div class="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.102217288901!2d-46.642690385021616!3d-23.6006667846633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a308c93dbf5%3A0xdab33b5ff8d187c2!2sR.%20Mirassol%2C%20207%20-%20Vila%20da%20Sa%C3%BAde%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004044-010!5e0!3m2!1spt-BR!2sbr!4v1599620348525!5m2!1spt-BR!2sbr"
        width="600"
        height="450"
        frameborder="0"
        style="border: 0"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      />
    </div>
    <span class="title">Moments together</span>
    <div class="carousel">
      <Carousel />
    </div>
  </div>
</template>

<script>
import Carousel from "@/components/Home/Carousel.vue";

export default {
  components: { Carousel },
};
</script>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  height: auto;
  margin: 3% 25%;
  align-items: center;
  justify-content: space-around;
}

.title {
  text-align: center;
  text-decoration: underline;
}

.introduction {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
}

.lab-image {
  width: 404px;
  height: 426px;
}

.lab-text-introduction {
  margin: 0 3%;
  text-align: justify;
  width: 100%;
  height: 426px;
  font-size: auto;
}

.map {
  margin: 6% 3%;
  width: 100%;
  height: 400px;
}

.map iframe {
  width: 100%;
  height: 100%;
}
</style>
