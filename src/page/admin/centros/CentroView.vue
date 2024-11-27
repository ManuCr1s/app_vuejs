<template>
  <v-container fluid class="py-6">
    <v-row class="px-4">
      <v-col md="12">
        <v-row>
            <v-col lg="12" class="d-flex justify-end">
              <CreateCentro ref="createRole" :form="form" @submit="handleFormSubmit"/>
            </v-col>
        </v-row>
        <v-row>
          <v-col md="4" v-for="billing in billings" :key="billing.id_rol">
            <v-card class="mb-3 card-shadow border-radius-xl py-4">
              <v-row no-gutters class="px-4">
                <v-col sm="4">
                  <v-avatar
                    color="bg-gradient-success shadow border-radius-xl mt-n8"
                    class="shadow-dark"
                    height="64"
                    width="64"
                  >
                    <v-icon class="material-icons-round text-white" size="24">local_shipping</v-icon>
                  </v-avatar>
                </v-col>
                <v-col sm="8" class="text-end">
                  <p
                    class="
                      text-sm
                      mb-0
                      text-capitalize text-body
                      font-weight-light
                    "
                  >
                  
                  </p>
                  <h6 class="text-h6 text-typo mb-0">
                    {{ billing.nombre }} 
                  </h6>
                  <v-btn
                        :ripple="false"
                        color="transparent"
                        class="
                          text-danger
                          font-weight-bolder
                          py-6
                          px-5
                          shadow-0
                          ms-auto
                        "
                        small
                        simple
                        @click="showCancelAlert(billing.id_rol)"
                      >
                        <v-icon size="12" class="me-2 material-icons-round"
                          >delete</v-icon
                        >
                        Eliminar
                      </v-btn>
                      <EditRole :data="billing" @submit="handleSubmitUpdate"/>
                </v-col>
              </v-row>
              <hr class="dark horizontal mt-3 mb-4" />
              <v-row class="px-4">
                <v-col cols="12">
                  <p class="mb-0 text-body">
                    <span class="text-sm font-weight-bolder">IDENTIFICADOR</span>
                    <span class="text-sm font-weight-light ms-5">{{ billing.id_centro_poblado }}</span>
                  </p>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
          
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import centroService from '../../../modules/services/centroService';
import CreateCentro from '@/component/centro/CreateCentro.vue';
import EditCentro from '@/component/centro/EditCentro.vue';
export default {
  name: "Centro",
  components: {
        CreateCentro,EditCentro
    },
  methods:{
    showCancelAlert(rol) {
      this.$swal({
        title: "¿Esta seguro de eliminar el Centro?",
        text: "",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Si, ELiminar Rol",
        customClass: {
          confirmButton: "btn bg-gradient-success",
          cancelButton: "btn bg-gradient-danger",
        },
      }).then(async (result) => {
        if (result.isConfirmed) {
          await centroService.deleteCentro(rol);
          this.$swal.fire("Registro Eliminado!", "El Centro fue eliminado exitosamente", "success");
        }
      });
    },
    handleFormSubmit(formData) {
      centroService.createCentro(formData)
         .then(response => {
              this.billings.push(response.data);
              this.$refs.roleForm.close();
              this.$refs.roleForm.reset();
          })
          .catch(error => {
                throw error;  
          });
        
    }
  },
  data: function () {
    return {
      billings: [],
      form: {
                nombre: '',
                descripcion: ''
            }
    };
  },
 async mounted(){
    try {
      this.billings = await centroService.getCentro();
    } catch (error) {
      this.error = 'Hubo un problema al obtener los centros poblados';
    }
  },
  props:{
    roles:{
      type:Object,
      required:true
    }
  }
};
</script>
