<script>
import SlideInfo from "./SlideInfo.vue";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";

export default {
  data: function () {
    return {
      slideIlimitados: [
        {
          src: "src/assets/cafeSilideHome.jpg",
          alt: "HomeSlide",
          titulo: "Bienvenido",
          rangoFecha: "",
        },
        {
          src: "src/assets/img/macaroons-gcd7d91ab3_1280.jpg",
          alt: "macaroons",
          titulo: "Maracrrones",
          rangoFecha: "1.oct - 3.oct",
        },
        {
          src: "src/assets/img/bruschetta-ge0e14da1f_1280.jpg",
          alt: "bruschetta",
          titulo: "Bruschetta",
          rangoFecha: "1.oct - 3.oct",
        },
        {
          src: "src/assets/img/pasta-g50004fa61_1280.jpg",
          alt: "pasta",
          titulo: "Pasta",
          rangoFecha: "12.oct - 3.oct",
        },
      ],
    };
  },
  components: {
    Splide,
    SplideSlide,
    SplideTrack,
    SlideInfo,
  },
  setup() {
    const options = {
      rewind: true,
      autoplay: true,
      pauseOnHover: false,
    };
    return { options };
  },
  created() {},
  methods: {
    muestraSlides(n) {
      let i;
      let slides = document.querySelectorAll("#miSlider");
      let barras = document.querySelectorAll("#barra");
      if (n > slides.length) {
        this.indice = 1;
      }
      if (n < 1) {
        this.indice = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].classList.replace("block", "hidden");
      }
      for (i = 0; i < barras.length; i++) {
        barras[i].className = barras[i].className.replace(
          " bg-orange-500",
          " bg-black"
        );
      }
      slides[this.indice - 1].classList.replace("hidden", "block");
      barras[this.indice - 1].classList.replace("bg-black", "bg-orange-500");
    },
    avanzaSlide(n) {
      this.muestraSlides((this.indice += n));
    },
    posicionSlide(n) {
      this.muestraSlides((this.indice = n));
    },
    tiempoInterval(tiempo) {
      this.polling = setInterval(() => {
        this.muestraSlides((this.indice += 1));
      }, tiempo);
    },
  },
};
</script>
<template>
  <div class="w-full h-full">
    <div class="max-w-full">
      <splide
        :options="options"
        :has-track="false"
        aria-label="My Favorite Images"
        style="padding: 0px"
      >
        <SplideTrack>
          <splide-slide v-for="slide in slideIlimitados" :key="slide.length">
            <SlideInfo
              :srcImg="slide.src"
              :altImg="slide.rangoFecha"
              :titulo="slide.titulo"
              :rangoFecha="slide.rangoFecha"
            />
          </splide-slide>
        </SplideTrack>

        <div class="splide__arrows">
          <button class="splide__arrow splide__arrow--prev">
            <font-awesome-icon icon="fa-solid fa-arrow-right" />
          </button>
          <button class="splide__arrow splide__arrow--next">
            <font-awesome-icon icon="fa-solid fa-arrow-right" />
          </button>
        </div>
      </splide>
    </div>
  </div>
</template>
<style>
.miSliderImg {
  height: inherit;
}
</style>
