<script>
import SlideHome from "@/components/SlideHome.vue";
import CardPlatillos from "../components/CardPlatillos.vue";
export default {
  components: {
    SlideHome,
    CardPlatillos,
  },
};
</script>

<template>
  <div class="flex flex-col">
    <section class="">
      <SlideHome></SlideHome>
    </section>
    <section>
      <div
        class="grid lg:grid-cols-2 md:grid-col-1 lg:overflow-hidden lg:py-32 md:py-10 py-5"
      >
        <div
          class="flex flex-col justify-center items-center lg:p-10 lg:space-y-5 space-y-3 p-5"
        >
          <h2 class="lg:text-5xl text-4xl md:text-3xl">recordando li gusto</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            maiores optio quo minima iure pariatur veniam, illum totam dolore,
            ullam mollitia ipsum sed consequatur sunt est cupiditate, quae
            laborum. Eum!. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Nihil maiores optio quo minima iure pariatur veniam, illum
            totam dolore, ullam mollitia ipsum sed consequatur sunt est
            cupiditate, quae laborum. Eum!. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Nihil maiores optio quo minima iure
            pariatur veniam, illum totam dolore, ullam mollitia ipsum sed
            consequatur sunt est cupiditate, quae laborum. Eum!. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Nihil maiores optio quo
            minima iure pariatur veniam, illum totam dolore, ullam mollitia
            ipsum sed consequatur sunt est cupiditate, quae laborum. Eum!.
          </p>
        </div>
        <div class="p-10">
          <img src="src/assets/img/InfoRestaurant.jpg" alt="InfoRestaurant" />
        </div>
      </div>
    </section>
    <section>
      <div
        class="flex flex-col justify-center items-center lg:py-10 lg:px-64 px-2 space-y-10"
      >
        <h3 class="lg:text-5xl text-2xl md:text-3xl">
          Prueba nuestros nuevos platillos
        </h3>
        <CardPlatillos></CardPlatillos>
        <CardPlatillos></CardPlatillos>
        <CardPlatillos></CardPlatillos>
      </div>
    </section>
  </div>
</template>
