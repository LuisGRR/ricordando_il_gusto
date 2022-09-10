<template>
  <nav class="bg-slate-800 flex flex-col space-y-5 p-6">
    <div class="flex justify-center text-orange-500 text-3xl italic">
      <RouterLink to="/">recordando li gusto</RouterLink>
    </div>
    <div
      class="md:flex items-center space-x-20 justify-center text-white hidden"
    >
      <RouterLink class="justify-self-auto hover:text-orange-500" to="/"
        >Home</RouterLink
      >
      <RouterLink
        class="justify-self-auto hover:text-orange-500"
        to="/Ilimitados"
        >Limitados</RouterLink
      >
      <RouterLink
        class="justify-self-auto hover:text-orange-500"
        to="/Platillos"
        >Platillos</RouterLink
      >
      <RouterLink class="justify-self-auto hover:text-orange-500" to="/About"
        >Nosotros</RouterLink
      >
      <RouterLink class="justify-self-auto hover:text-orange-500" to="/Contacto"
        >Contacto</RouterLink
      >
    </div>
    <div class="flex flex-col items-center justify-center text-white md:hidden">
      <div>
        <button
          class="flex justify-center items-center h-12 w-12 bg-slate-800 hover:bg-slate-900 text-orange-500 focus:outline-none focus:ring focus:ring-orange-500"
          @click.prevent="active = !active"
        >
          <span v-show="!active">
            <font-awesome-icon icon="fa-solid fa-bars" />
          </span>
          <span v-show="active"
            ><font-awesome-icon icon="fa-solid fa-x" />
          </span>
        </button>
      </div>
      <transition duration="550" name="fade">
        <div
          class="flex flex-col justify-center justify-self-auto items-center py-1 border-x-0 rounded-lg border-slate-800"
          v-if="active"
        >
          <RouterLink class="py-1 hover:text-orange-500" to="/"
            >Home</RouterLink
          >
          <RouterLink class="py-1 hover:text-orange-500" to="/Ilimitados"
            >Limitados</RouterLink
          >
          <RouterLink class="py-1 hover:text-orange-500" to="/Platillos"
            >Platillos</RouterLink
          >
          <RouterLink class="py-1 hover:text-orange-500" to="/About"
            >Nosotros</RouterLink
          >
          <RouterLink class="py-1 hover:text-orange-500" to="/Contacto"
            >Contacto</RouterLink
          >
        </div></transition
      >
    </div>
  </nav>
</template>

<script>
export default {
  setup() {},
  data: () => ({
    active: false,
  }),
};
</script>
<style>
.fade-enter-active {
  transition: all 0.3s ease-in-out;
}

.fade-leave-active {
  transition: all 0.3s ease-in;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
