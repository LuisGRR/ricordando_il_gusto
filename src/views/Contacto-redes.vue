<template>
  <section class="flex flex-col space-y-8 lg:px-96 px-5 py-14 top-10">
    <div class="flex flex-col space-y-8">
      <font-awesome-icon icon="fa-solid fa-square" class="text-6xl" />
      <h2 class="w-full text-center text-4xl">Contacto</h2>
    </div>

    <section class="flex flex-col space-y-8 py-12 px-20">
      <ButtonRedes
        url="https://es.vuejs.org/v2/api/"
        backgoung="bg-blue-500 hover:bg-blue-600 "
        ><font-awesome-icon icon="fa-brands fa-facebook" />
        Facebook</ButtonRedes
      >
      <ButtonRedes
        url="https://es.vuejs.org/v2/api/"
        backgoung="bg-orange-500 hover:bg-orange-600"
        ><font-awesome-icon icon="fa-solid fa-envelope" /> Correo</ButtonRedes
      >
      <ButtonRedes
        url="https://es.vuejs.org/v2/api/"
        backgoung="bg-sky-300 hover:bg-sky-400"
        ><font-awesome-icon icon="fa-brands fa-twitter" /> Twitter</ButtonRedes
      >
      <ButtonRedes
        url="https://es.vuejs.org/v2/api/"
        backgoung="bg-pink-400 hover:bg-pink-500"
        ><font-awesome-icon icon="fa-brands fa-instagram" />
        Instagram</ButtonRedes
      >
    </section>
  </section>
</template>
<script>
import ButtonRedes from "../components/ButtonRedes.vue";
export default {
  components: {
    ButtonRedes,
  },
  setup() {},
};
</script>
