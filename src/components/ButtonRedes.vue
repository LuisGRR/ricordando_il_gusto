<template>
  <a
    v-bind:href="url"
    v-bind:class="backgoung"
    class="h-12 text-lg py-3 w-full rounded-full text-center text-white"
  >
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    url: String,
    backgoung: String,
  },
  setup() {},
};
</script>
