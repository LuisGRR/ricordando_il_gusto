<template>
  <ButtonCategorias
    v-for="(datos, indice) of buttonsData"
    :key="indice"
    backgoung="bg-slate-800 hover:bg-slate-900"
    :categoria="datos.name"
    :id="indice + 1"
    @click.prevent="posicionButton(datos.name)"
  >
    {{ datos.name }}
  </ButtonCategorias>
</template>

<script>
import ButtonCategorias from "../components/ButtonCategorias.vue";

export default {
  data() {
    return {
      estadoButon: false,
    };
  },
  props: {
    buttonsData: Array,
  },
  emits: ["categoria"],
  components: {
    ButtonCategorias,
  },
  setup() {},
  methods: {
    posicionButton(cat) {
      this.$emit("categoria", cat);
    },
  },
};
</script>
