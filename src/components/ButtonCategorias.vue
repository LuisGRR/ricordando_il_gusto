<template>
  <button
    v-bind:class="backgoung"
    class="h-12 text-lg w-full text-center text-white hover:text-orange-500"
  >
    <slot></slot>
    <transition name="icon">
      <span v-show="active"
        ><font-awesome-icon icon="fa-solid fa-arrow-right"
      /></span>
    </transition>
  </button>
</template>

<script>
export default {
  props: {
    categoria: String,
    backgoung: String,
  },
  emits: ["EstadoB"],
  setup(props, { emit }) {
    const notify = () => {
      emit("EstadoB", props.categoria);
    };
    return { notify };
  },
  data() {
    return {
      active: false,
    };
  },
  methods: {},
};
</script>

<style>
.icon-enter-active {
  transition: all 0.3s ease-in-out;
}

.icon-leave-active {
  transition: all 0.3s ease-in;
}

.icon-enter-from,
.icon-leave-to {
  transform: translateX(-100px);
  opacity: 0;
}
</style>
