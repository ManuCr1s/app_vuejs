<template>
    <v-dialog v-model="dialog" max-width="900px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-show="updating"
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
        <v-btn v-show="!updating"
          v-bind="attrs"
          v-on="on"
          elevation="0"
          :ripple="false"
          color="transparent"
          class="text-dark font-weight-bolder py-6 px-5 shadow-0"
          small
          simple
        >
          <v-icon size="12" class="me-2 material-icons-round">edit</v-icon>
          Editar
        </v-btn>
      </template>
      <v-card class="card-shadow border-radius-xl">
        <form @submit.prevent="handleSubmit">
          <div class="card-header-padding card-border-bottom">
            <span class="font-weight-bold text-h5 text-typo mb-0">Formulario</span>
          </div>
          <v-card-text class="card-padding">
            <v-container class="px-0">
              <v-row>
                <v-col cols="12">
                <v-text-field
                    hide-details
                    class="
                        input-style
                        font-size-input
                        text-light-input
                        placeholder-light
                        input-icon
                    "
                    dense
                    flat
                    filled
                    solo
                    height="43"
                    placeholder="DNI"
                    v-model="form.dni"
                >
                    <template v-slot:append>
                    <v-btn
                        class="
                        font-weight-normal
                        text-capitalize
                        btn-primary
                        bg-gradient-success
                        py-2
                        px-4
                        "
                        elevation="0"
                        @click="validarDNI"
                    >
                        Validar
                    </v-btn>
                    </template>
                </v-text-field>
                </v-col>
  
                <v-col cols="12">
                  <v-text-field
                    hide-details
                    class="
                      input-style
                      font-size-input
                      text-light-input
                      placeholder-light
                      input-icon
                    "
                    dense
                    flat
                    filled
                    solo
                    height="43"
                    placeholder="Apellido Paterno"
                    v-model="form.apaterno"
                  ></v-text-field>
                </v-col>
    
                <v-col cols="12">
                  <v-text-field
                    hide-details
                    class="
                      input-style
                      font-size-input
                      text-light-input
                      placeholder-light
                      input-icon
                    "
                    dense
                    flat
                    filled
                    solo
                    height="43"
                    placeholder="Apellido Materno"
                    v-model="form.amaterno"
                  ></v-text-field>
                </v-col>
                                      <v-col cols="12">
                                          <v-text-field
                                          hide-details
                                          class="
                                              input-style
                                              font-size-input
                                              text-light-input
                                              placeholder-light
                                              input-icon
                                          "
                                          dense
                                          flat
                                          filled
                                          solo
                                          height="43"
                                          placeholder="Nombre"
                                          v-model="form.nombre"
                                          ></v-text-field>
                                      </v-col>
                                      <v-col cols="12">
                                          <v-text-field
                                          hide-details
                                          class="
                                              input-style
                                              font-size-input
                                              text-light-input
                                              placeholder-light
                                              input-icon
                                          "
                                          dense
                                          flat
                                          filled
                                          solo
                                          height="43"
                                          placeholder="Nombre de Fundo"
                                          v-model="form.fundo"
                                          ></v-text-field>
                                      </v-col>
                                      <v-col cols="12">
                                          <v-select
                                          hide-details
                                          class="
                                              input-style
                                              font-size-input
                                              text-light-input
                                              placeholder-light
                                              input-icon
                                          "
                                          dense
                                          flat
                                          filled
                                          solo
                                          height="43"
                                          placeholder="Seleccione provincia"
                                          v-model="form.provincia"
                                          :items="opciones"
                                          ></v-select>
                                      </v-col>
                                      <v-col cols="12">
                                          <v-select
                                          hide-details
                                          class="
                                              input-style
                                              font-size-input
                                              text-light-input
                                              placeholder-light
                                              input-icon
                                          "
                                          dense
                                          flat
                                          filled
                                          solo
                                          height="43"
                                          placeholder="Seleccione distrito"
                                          v-model="form.distrito"
                                          :items="opciones"
                                          ></v-select>
                                      </v-col>
                                      <v-col cols="12">
                                          <v-select
                                          hide-details
                                          class="
                                              input-style
                                              font-size-input
                                              text-light-input
                                              placeholder-light
                                              input-icon
                                          "
                                          dense
                                          flat
                                          filled
                                          solo
                                          height="43"
                                          placeholder="Seleccione centro poblado"
                                          v-model="form.cpoblado"
                                          :items="opciones"
                                          ></v-select>
                                      </v-col>
                                      <v-col cols="12">
                                          <v-select
                                          hide-details
                                          class="
                                              input-style
                                              font-size-input
                                              text-light-input
                                              placeholder-light
                                              input-icon
                                          "
                                          dense
                                          flat
                                          filled
                                          solo
                                          height="43"
                                          placeholder="Seleccione caserio/anexo"
                                          v-model="form.canexo"
                                          :items="opciones"
                                          ></v-select>
                                      </v-col>
                                      <v-col cols="12">
                                          <v-select
                                          hide-details
                                          class="
                                              input-style
                                              font-size-input
                                              text-light-input
                                              placeholder-light
                                              input-icon
                                          "
                                          dense
                                          flat
                                          filled
                                          solo
                                          height="43"
                                          placeholder="Estado de productor"
                                          v-model="form.estado"
                                          :items="opciones"
                                          ></v-select>
                                      </v-col>
  
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions class="card-padding d-flex justify-end">
            <v-btn
              @click="close"
              elevation="0"
              :ripple="false"
              height="43"
              class="
                font-weight-normal
                text-capitalize
                btn-ls btn-outline-secondary
                bg-transparent
                py-3
                px-6
              "
              >Cancelar</v-btn
            >
            <v-btn
              elevation="0"
              :ripple="false"
              height="43"
              class="
                font-weight-normal
                text-capitalize
                btn-ls btn-primary
                bg-gradient-success
                py-3
                px-6
              "
              type="submit"
              >Guardar</v-btn
            >
          </v-card-actions>
        </form>
      </v-card>
    </v-dialog>
  </template>
  
  <script>
  export default {
    name: "ProductorForm",
    data() {
      return {
        dialog: false,
        form: {
          nombre: "",
          descripcion: "",
          dni: "",
          apaterno: "",
          nombre: "",
          fundo: "",
          provincia: "",
          distrito: "",
          cpoblado: "",
          canexo: "",
          estado: "",
        },
        dniErrorMessage: "",
      };
    },
    methods: {
        close() {
            this.dialog = false;
        },
        handleSubmit() {
            this.$emit('submit', this.form);
        },
        reset() {
            this.form.nombre = '';
            this.form.descripcion = '';
        },
        validarDNI() {
            if (this.form.dni.trim() === '') {
            alert('Por favor, ingresa un DNI válido.');
            } else {
            alert(`Validando DNI: ${this.form.dni}`);
            }
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
  