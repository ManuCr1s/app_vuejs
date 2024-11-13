<template>
  <div>
    <v-container fluid class="px-6 py-6">
      <v-row class="mt-8">
        <v-col cols="12">
          <datatable-search :current-route="routeTitle"></datatable-search>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import DatatableSimple from "./Widgets/DatatableSimple.vue";
import DatatableSearch from "./Widgets/DatatableSearch.vue";

export default {
  name: "datatables",
  components: {
    DatatableSimple,
    DatatableSearch,
  },
  computed: {
    routeTitle() {
      const currentPath = this.$route.path;
      if (currentPath.includes("llama")) {
        return "Llama";
      } else if (currentPath.includes("roles")) {
        return "Roles";
      }else if (currentPath.includes("centros")) {
        return "Centros Poblados";
      }else if (currentPath.includes("anexos")) {
        return "Anexos";
      }else if (currentPath.includes("usuarios")) {
        return "Usuarios";
      }else if (currentPath.includes("productores")) {
        return "Productores";
      }else if (currentPath.includes("llamas")) {
        return "Llamas";
      }
    }
  }
};
</script>
