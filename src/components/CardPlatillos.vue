<template>
  <article
    class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-col-1 border-b"
    v-on:click="Platillo"
  >
    <div>
      <img
        class="sm:h-72 sm:w-full"
        src="/src/assets/img/meal-g7fccfaafa_1280.jpg"
      />
    </div>
    <div class="flex flex-col justify-items-start mx-4 space-y-2">
      <h3 class="text-slate-800 text-4xl">Titulo Platillo</h3>
      <p class="text-orange-500 text-">
        <span class="mx-3"
          ><font-awesome-icon icon="fa-solid fa-calendar-days" /></span
        >Lorem ipsum dolor sit amet, consectet
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi facere,
        mollitia alias, ab tempore cupiditate voluptate commodi similique
        tenetur, accusantium itaque minus nulla? Totam commodi perspiciatis
        aliquid expedita quisquam est.
      </p>
    </div>
  </article>
</template>

<script>
export default {
  setup() {},
  methods: {
    Platillo() {
      this.$router.push("Platillo");
    },
  },
};
</script>
