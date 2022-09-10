<template>
  <div
    class="m-1 rounded-lg border hover:-translate-y-1 hover:translate-x-1 hover:shadow-md hover:shadow-stone-500/50 hover:ease-in-out hover:duration-300"
  >
    <div class="w-full">
      <img class="rounded-t-lg" :src="srcUrl" alt="macaroons" />
    </div>
    <div class="flex flex-col text-center py-2 border-slate-500">
      <h3 class="mt-1 text-sm">{{ titulo }}</h3>
      <p>
        <span class="mx-1"
          ><font-awesome-icon icon="fa-solid fa-dollar-sign" /></span
        >{{ precio }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    srcUrl: String,
    titulo: String,
    precio: String,
  },
  data: () => ({}),

  setup() {},
};
</script>

<style></style>
