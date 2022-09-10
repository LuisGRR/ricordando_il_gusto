<template>
  <section>
    <div
      class="flex flex-col justify-center items-center py-10 px-10 space-y-10"
    >
      <div class="flex w-full flex-col space-y-5">
        <div class="text-center">
          <h3 class="md:text-5xl text-3xl">Prueba nuestros platillos</h3>
        </div>

        <div class="flex justify-start h-8">
          <transition name="butonFiltro">
            <button
              v-show="estado"
              class="h-full basis-32 text-lg w-full text-center rounded-md border bg-slate-800 text-white hover:text-orange-500"
              @click="resetFiltre"
            >
              Eliminar filtro
            </button>
          </transition>
        </div>
      </div>
      <div class="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-1 h-96">
        <aside class="lg:col-span-1 md:col-span-4">
          <AcordionCategoria title="DESAYUNOS">
            <ContenedorButton
              :buttonsData="DesayunoArray"
              @categoria="filtre"
            ></ContenedorButton>
          </AcordionCategoria>
          <AcordionCategoria title="COMIDAS Y CENAS">
            <ContenedorButton
              :buttonsData="ComidasCenasArray"
              @categoria="filtre"
            ></ContenedorButton>
          </AcordionCategoria>
        </aside>
        <div class="lg:col-span-4 md:col-span-5">
          <div class="grid md:grid-cols-4 col-span-1">
            <TransitionGroup name="card">
              <CardPlatillos
                v-for="(datos, indice) of filtredPlatillos"
                :key="indice"
                :srcUrl="datos.src"
                :titulo="datos.titulo"
                :precio="datos.precio"
              ></CardPlatillos>
            </TransitionGroup>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import AcordionCategoria from "../components/AcordionCategoria.vue";
import ContenedorButton from "../components/ContenedorButtons.vue";
import CardPlatillos from "../components/PlatillosCarta.vue";
export default {
  name: "Platillos-home",
  setup() {},
  data() {
    return {
      estado: false,
      search: "",
      DesayunoArray: [
        { name: "Hot cakes y Pan francés" },
        { name: "Huevos y Omelettes" },
        { name: "Enchiladas y Chilaquiles" },
      ],
      ComidasCenasArray: [
        { name: "Entradas" },
        { name: "Sopas" },
        { name: "Ensaladas y Crepas" },
      ],
      ProductosArray: [
        {
          etiqueta: "Hot cakes y Pan francés",
          src: "src/assets/img/macaroons-gcd7d91ab3_1280.jpg",
          titulo: "macaroons",
          precio: "45",
        },
        {
          etiqueta: "Hot cakes y Pan francés",
          src: "src/assets/img/macaroons-gcd7d91ab3_1280.jpg",
          titulo: "macaroons",
          precio: "45",
        },
        {
          etiqueta: "Huevos y Omelettes",
          src: "src/assets/img/macaroons-gcd7d91ab3_1280.jpg",
          titulo: "macaroons",
          precio: "45",
        },
        {
          etiqueta: "Huevos y Omelettes",
          src: "src/assets/img/macaroons-gcd7d91ab3_1280.jpg",
          titulo: "macaroons",
          precio: "45",
        },
        {
          etiqueta: "Huevos y Omelettes",
          src: "src/assets/img/macaroons-gcd7d91ab3_1280.jpg",
          titulo: "macaroons",
          precio: "45",
        },
        {
          etiqueta: "Entradas",
          src: "src/assets/img/macaroons-gcd7d91ab3_1280.jpg",
          titulo: "macaroons",
          precio: "45",
        },
        {
          etiqueta: "Enchiladas y Chilaquiles",
          src: "src/assets/img/macaroons-gcd7d91ab3_1280.jpg",
          titulo: "Enchiladas",
          precio: "45",
        },
        {
          etiqueta: "Entradas",
          src: "src/assets/img/macaroons-gcd7d91ab3_1280.jpg",
          titulo: "macaroons",
          precio: "45",
        },
        {
          etiqueta: "Hot cakes y Pan francés",
          src: "src/assets/img/macaroons-gcd7d91ab3_1280.jpg",
          titulo: "macaroons",
          precio: "45",
        },
        {
          etiqueta: "Hot cakes y Pan francés",
          src: "src/assets/img/macaroons-gcd7d91ab3_1280.jpg",
          titulo: "macaroons",
          precio: "45",
        },
        {
          etiqueta: "Huevos y Omelettes",
          src: "src/assets/img/macaroons-gcd7d91ab3_1280.jpg",
          titulo: "macaroons",
          precio: "45",
        },
        {
          etiqueta: "Huevos y Omelettes",
          src: "src/assets/img/macaroons-gcd7d91ab3_1280.jpg",
          titulo: "macaroons",
          precio: "45",
        },
        {
          etiqueta: "Hot cakes y Pan francés",
          src: "src/assets/img/macaroons-gcd7d91ab3_1280.jpg",
          titulo: "macaroons",
          precio: "45",
        },
        {
          etiqueta: "Hot cakes y Pan francés",
          src: "src/assets/img/macaroons-gcd7d91ab3_1280.jpg",
          titulo: "macaroons",
          precio: "45",
        },
        {
          etiqueta: "Huevos y Omelettes",
          src: "src/assets/img/macaroons-gcd7d91ab3_1280.jpg",
          titulo: "macaroons",
          precio: "45",
        },
        {
          etiqueta: "Huevos y Omelettes",
          src: "src/assets/img/macaroons-gcd7d91ab3_1280.jpg",
          titulo: "macaroons",
          precio: "45",
        },
      ],
    };
  },
  components: {
    CardPlatillos,
    AcordionCategoria,
    ContenedorButton,
  },
  methods: {
    filtre(cat) {
      this.estado = true;

      this.search = cat;
    },
    resetFiltre() {
      this.search = "";
      this.estado = false;
    },
  },
  computed: {
    filtredPlatillos() {
      return this.ProductosArray.filter((productos) => {
        return productos.etiqueta
          .toLocaleLowerCase()
          .includes(this.search.toLocaleLowerCase());
      });
    },
  },
};
</script>
<style>
.butonFiltro-enter-active {
  transition: all 0.3s ease-in-out;
}

.butonFiltro-leave-active {
  transition: all 0.3s ease-in;
}

.butonFiltro-enter-from,
.butonFiltro-leave-to {
  transform: translateX(-30px);
  opacity: 0;
}

.card-enter-active {
  transition: all 0.3s ease-in-out;
}

.card-leave-active {
  transition: all 0.3s ease-in;
}

.card-enter-from,
.card-leave-to {
  transform: translateX(-30px);
  opacity: 0;
}
</style>
