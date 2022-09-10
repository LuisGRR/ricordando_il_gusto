<template>
  <div>
    <img
      :src="srcImg"
      :alt="altImg"
      class="w-full max-h-screen miSliderImg object-cover align-top blur-sm"
    />
    <div
      class="w-full h-full absolute top-0 flex justify-center items-center text-xl !bg-gray-900 !bg-opacity-50"
    >
      <div class="w-full h-full flex flex-col justify-center items-center">
        <h2 class="text-white text-5xl" v-if="rangoFecha">
          Platillo especial:
        </h2>
        <h2 class="text-white text-5xl">{{ titulo }}</h2>
        <p v-if="rangoFecha" class="text-orange-500 text-xl">
          <font-awesome-icon icon="fa-solid fa-calendar-days" />
          {{ rangoFecha }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SlideInfo",
  setup() {},
  props: {
    srcImg: String,
    altImg: String,
    titulo: String,
    rangoFecha: String,
  },
};
</script>
<style>
.miSliderImg {
  height: inherit;
}
</style>
