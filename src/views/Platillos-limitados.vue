<template>
  <section>
    <div
      class="flex flex-col justify-center items-center lg:py-10 lg:px-64 py-5 px-2 space-y-10"
    >
      <h3 class="md:text-5xl text-2xl">Prueba nuestros nuevos platillos</h3>
      <CardPlatillos></CardPlatillos>
      <CardPlatillos></CardPlatillos>
      <CardPlatillos></CardPlatillos>
    </div>
  </section>
</template>
<script>
import CardPlatillos from "../components/CardPlatillos.vue";
export default {
  name: "Platillos-home",
  setup() {},
  components: {
    CardPlatillos,
  },
};
</script>
