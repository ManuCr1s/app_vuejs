<template>
  <v-dialog v-model="dialog" max-width="900px">
                     <template v-slot:activator="{ on, attrs }">   
                          <v-btn 
                              v-bind="attrs"
                              v-on="on"
                              elevation="0"
                              :ripple="false"
                              color="transparent"
                              class="text-dark font-weight-bolder py-6 px-5 shadow-0"
                              small
                              simple
                          >
                          <v-icon size="12" class="me-2 material-icons-round"
                              >edit</v-icon
                          >
                              Editar
                          </v-btn>
                     </template>
                     <v-card class="card-shadow border-radius-xl">
                         <form @submit.prevent="handleSubmitUpdate">
                             <div class="card-header-padding card-border-bottom">
                                 <span class="font-weight-bold text-h5 text-typo mb-0">
                                      Editar Centro Poblado
                                 </span>
                             </div>
                             <v-card-text class="card-padding">
                             <v-container class="px-0">
                              <v-row class="mt-0">
        <v-col sm="4" cols="12">
          <v-select
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
            v-model="data.nombre"
            @input="data.nombre = form.nombre.toUpperCase()"
          >
          </v-text-field>
          <p v-if="errors.nombre" class="text-danger ml-3">{{ errors.nombre }}</p>

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
    name: "CentroForm",
    data() {
      return {
        dialog:false,
            data: {
                nombre: '',
                descripcion: ''
            },
            errors: {
                nombre: null,
                descripcion: null
            }
      };
    },
    methods: {
        close() {
            this.dialog = false;
        },
        validateData() {
            this.errors.nombre = null;
            this.errors.descripcion = null;

            let isValid = true;
            if (!this.data.nombre.trim()) {
                this.errors.nombre = 'Nombre de centro poblado es obligatorio.';
                isValid = false;
            }

            return isValid;
        },
        triggerFileInput() {
      this.$refs.fileInput.click();
    },
    handleSubmitUpdate() {
            if (!this.validateData()) {
                return;
            }
            this.$emit('submit', this.data);
            this.close();
        },

        }
  };
  </script>
  