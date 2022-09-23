<template>
  <div class="flex flex-col space-y-10 pb-80">
    <div>
      <img
        src="../assets/img/meal-g7fccfaafa_1280.jpg"
        alt="meal"
        class="w-full max-h-screen miSliderImg object-cover align-top"
      />
    </div>
    <div
      class="flex md:flex-row flex-col justify-start lg:px-64 px-6 md:space-x-10"
    >
      <ButtonRedes
        url="https://es.vuejs.org/v2/api/"
        backgoung="bg-blue-500 hover:bg-blue-600 w-40 mt-2"
        ><font-awesome-icon icon="fa-brands fa-facebook" />
        Facebook</ButtonRedes
      >
      <ButtonRedes
        url="https://es.vuejs.org/v2/api/"
        backgoung="bg-sky-300 hover:bg-sky-400 w-40 mt-2"
        ><font-awesome-icon icon="fa-brands fa-twitter" /> Twitter</ButtonRedes
      >
    </div>
    <div
      class="flex flex-col justify-center items-start space-y-5 lg:px-64 px-6"
    >
      <h2 class="text-5xl">Nuevo especial</h2>
      <p class="text-orange-500 text-lg">
        <font-awesome-icon icon="fa-solid fa-location-dot" /> Lorem ipsum dolor
        sit amet
      </p>
      <p class="text-orange-500 text-lg">
        <font-awesome-icon icon="fa-solid fa-calendar-days" /> Lorem ipsum dolor
        sit amet Lorem lorem ipsum dolor sit amet
      </p>
      <p class="text-lg">
        Descricion: Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Odit sapiente laboriosam aliquam ratione similique et voluptatem
        consectetur eligendi error libero dolore voluptates, cum repellat
        aperiam esse vitae atque qui amet! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Odit sapiente laboriosam aliquam ratione
        similique et voluptatem consectetur eligendi error libero dolore
        voluptates, cum repellat aperiam esse vitae atque qui amet!
      </p>
    </div>
  </div>
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
