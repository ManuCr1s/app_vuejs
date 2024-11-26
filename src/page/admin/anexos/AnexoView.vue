<template>
  <v-container fluid class="py-6">
    <v-row class="px-4">
      <v-col md="12">
        <v-card class="card-shadow border-radius-xl">
          <div class="px-4 pt-5 d-flex justify-space-between">
                <h6 class="mb-0 text-typo text-h6 font-weight-bold">
                    Anexos o caseríos
                </h6>
              <AnexoForm :updating="true" ref="anexoForm" :form="form" @submit="handleFormSubmit"/>
          </div>
          <div class="px-4 pt-6 pb-1">
            <div v-for="billing in billings" :key="billing.id_rol">
              <v-list-item
                :key="billing.vat"
                class="px-0 py-3 bg-gray-100 border-radius-lg p-6 mb-6"
              >
                <v-list-item-content class="px-6">
                  <div class="d-flex flex-column">
                    <h6 class="mb-3 text-sm text-typo font-weight-bold">
                      {{ billing.nombre }}
                    </h6>
                    <span class="mb-2 text-xs text-body"
                      >CODIGO DE ROL:
                      <span class="text-dark font-weight-bold ms-sm-2">{{
                        billing.id_rol
                      }}</span></span
                    >
                  </div>
                </v-list-item-content>

                <v-list-item-content class="py-0 text-end">
                  <div class="d-flex align-center text-sm text-body">
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
                    <AnexoForm/>
                  </div>
                </v-list-item-content>
              </v-list-item>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import anexoService from '../../../modules/services/anexoService';
import AnexoForm from '@/component/anexo/CreateRole.vue';
export default {
  name: "Anexos",
  components: {
    AnexoForm
  },
  methods:{
    showCancelAlert(rol) {
      this.$swal({
        title: "¿Esta seguro de eliminar el Anexo?",
        text: "",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Si, Eliminar Anexo",
        customClass: {
          confirmButton: "btn bg-gradient-success",
          cancelButton: "btn bg-gradient-danger",
        },
      }).then(async (result) => {
        if (result.isConfirmed) {
          await anexoService.deleteAnexo(rol);
          this.$swal.fire("Registro Eliminado!", "El Anexo fue eliminado exitosamente", "success");
        }
      });
    },
    handleFormSubmit(formData) {
      anexoService.createAnexo(formData)
         .then(response => {
              this.billings.push(response.data);
              this.$refs.anexoForm.close();
              this.$refs.anexoForm.reset();
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
      this.billings = await anexoService.getAnexo();
    } catch (error) {
      this.error = 'Hubo un problema al obtener los Anexo';
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
