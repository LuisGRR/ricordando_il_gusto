<template>
  <div class="flex flex-col border-x-0 rounded-lg border-slate-800 mb-2">
    <div>
      <a
        href="#"
        class="flex justify-between p-2 bg-slate-800 hover:bg-slate-900 text-orange-500 border-t-2 rounded-t-lg"
        @click.prevent="active = !active"
      >
        {{ title }}
        <span v-show="!active">
          <font-awesome-icon icon="fa-solid fa-arrow-down" />
        </span>
        <span v-show="active"><font-awesome-icon icon="fa-solid fa-x" /> </span>
      </a>
    </div>
    <transition duration="550" name="fade">
      <div v-if="active">
        <slot></slot></div
    ></transition>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
  data() {
    return {
      active: false,
    };
  },
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
  transform: translateY(-30px);
  opacity: 0;
}
</style>
