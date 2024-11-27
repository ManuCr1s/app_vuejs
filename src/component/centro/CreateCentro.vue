<template>
    <v-dialog v-model="dialog" max-width="900px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          elevation="0"
          :ripple="false"
          height="43"
          class="
            font-weight-normal
            text-capitalize
            btn-primary
            bg-gradient-success
            py-3
            px-6
            ms-3
          "
          >Nuevo registro</v-btn
        >
      </template>
      <v-card class="card-shadow border-radius-xl mt-6" id="basic">
    <div class="px-6 py-6">
      <h5 class="text-h5 font-weight-bold text-typo">Registrar nuevo centro poblado</h5>
    </div>
    <div class="px-6 pb-6 pt-0">
      <v-row class="mt-0">
        <v-col sm="4" cols="12">
          <v-select
            :items="gender"
            label="Seleccione provincia"
            color="#e91e63"
            class="font-size-input input-style"
            single-line
            height="36"
          >
          </v-select>
        </v-col>
        <v-col sm="4" cols="12">

          <v-select
            :items="gender"
            label="Seleccione distrito"
            color="#e91e63"
            class="font-size-input input-style"
            single-line
            height="36"
          >
          </v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" class="py-0">
          <v-text-field
            color="#e91e63"
            label="Ingrese nombre de centro poblado"
            placeholder="Ingrese nombre de centro poblado"
            class="font-size-input input-style"
          >
          </v-text-field>
        </v-col>
      </v-row>
    </div>
  </v-card>
    </v-dialog>
  </template>
  
  <script>
  export default {
    name: "CentroForm",
    data() {
      return {
        fileName: "",
        dialog: false,
        form: {

        },
      };
    },
    methods: {
        close() {
            this.dialog = false;
        },
        triggerFileInput() {
      this.$refs.fileInput.click();
    },
        handleSubmit() {
            this.$emit('submit', this.form);
        },
        reset() {
            this.form.nombre = '';
            this.form.descripcion = '';
        }
        },
    props: {
      updating: {
        type: Boolean,
        required: false,
        default: false,
      },
      form: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  