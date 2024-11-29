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
      <v-card class="card-shadow border-radius-xl">
                           <form @submit.prevent="handleSubmit">
                               <div class="card-header-padding card-border-bottom">
                                   <span class="font-weight-bold text-h5 text-typo mb-0">
                                        Crear un nuevo Centro Poblado
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
            :items="province"
            item-text="nombre" 
            item-value="id_province" 
            v-model="selectedProvince"
            @change="fetchDistrict"
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
            :items="districts"
            item-text="nombre"
            item-value="id_districts"
            v-model="selectedDistrict"
            :disabled="!selectedProvince"
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
            v-model="form.nombre"
            @input="form.nombre = form.nombre.toUpperCase()"
          >
          </v-text-field>
          <p v-if="errors.nombre" class="text-danger ">{{ errors.nombre }}</p>

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
  import ubicacionService from '../../modules/services/ubicacionService';
  export default {
    name: "CentroForm",
    data() {
      return {
        fileName: "",
        dialog: false,
        form: {},
        province: {},
        districts: {},
        errors: {
                nombre: null,
                descripcion: null
            },
        selectedProvince:null
      };
    },
    methods: {
        close() {
            this.dialog = false;
        },
        triggerFileInput() {
      this.$refs.fileInput.click();
    },
    validateForm() {
            this.errors.nombre = null;
            this.errors.descripcion = null;

            let isValid = true;
            if (!this.form.nombre.trim()) {
                this.errors.nombre = 'Nombre de centro poblado es obligatorio.';
                isValid = false;
            }

            return isValid;
        },
        handleSubmit() {
          if (!this.validateForm()) {
                return;
            }
            this.$emit('submit', this.form);
        },
        reset() {
            this.form.nombre = '';
            this.errors.nombre = null;
            this.errors.descripcion = null;
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
    async mounted(){
      try {
        this.province = await ubicacionService.getProvince();
        this.districts = await ubicacionService.getDistricts();
      } catch (error) {
        this.error = 'Hubo un problema al obtener los centros poblados';
      }
  },
  };
  </script>
  