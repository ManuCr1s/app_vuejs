<template>
  <v-container fluid class="py-6">
    <v-row class="px-4">
      
      <v-col lg="12">
        <v-row>
            <v-col lg="12" class="d-flex justify-end">
              <CreateRole ref="createRole" :form="form" @submit="handleFormSubmit"/>
            </v-col>
        </v-row>
        <v-row>
          <v-col md="6" v-for="billing in billings" :key="billing.id_rol">
            <v-card class="mb-3 card-shadow border-radius-xl py-4">
              <v-row no-gutters class="px-4">
                <v-col sm="4">
                  <v-avatar
                    color="bg-gradient-success shadow border-radius-xl mt-n8"
                    class="shadow-dark"
                    height="64"
                    width="64"
                  >
                    <v-icon class="material-icons-round text-white" size="24">account_circle</v-icon>
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
                    <span class="text-sm font-weight-bolder">DETALLE</span>
                    <span class="text-sm font-weight-light ms-5">{{
                          billing.descripcion
                        }}</span>
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
import rolesService from '../../../modules/services/roleService';
import CreateRole from '@/component/roles/CreateRole.vue';
import EditRole from '@/component/roles/EditRole.vue';
export default {
  name: "Roles",
  components: {
    CreateRole,EditRole
  },
    data: function () {
      return {
          billings: [],
          form:{
            nombre:'',
            descripcion:'',
          },
          data:{}
      };
    },
  methods:{
    showCancelAlert(rol) {
      this.$swal({
        title: "¿Esta seguro de eliminar el Rol?",
        text: "Asegurese de no tener un usuario registrado con ese Rol",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Si, Eliminar Rol",
        customClass: {
          confirmButton: "btn bg-gradient-success",
          cancelButton: "btn bg-gradient-danger",
        },
      }).then((result) => {
        if (result.isConfirmed) {
          rolesService.deleteRole(rol)
          .then(() => {
                    this.billings = this.billings.filter(item => item.id_rol !== rol);
                    this.$swal.fire("Registro Eliminado!", "El Rol fue eliminado exitosamente", "success");
                })
          .catch((error) => {
                  console.log(this.billings);
                  this.$swal.fire("Error", "No se pudo eliminar el Rol", "error");
              });
      }
      });
    },
    handleFormSubmit(formData) {
         rolesService.createRole(formData)
         .then((response) => {
              this.$refs.createRole.close();
              this.$refs.createRole.reset();
              this.$swal.fire("Registro Agregado!", "El Rol fue agregado exitosamente", "success");
              this.billings.push(response.data);
          })
          .catch(error => {
                this.$swal.fire("Error", "No se pudo crear el Rol"+error, "error");
                throw error;  
          });
        
    },
    handleSubmitUpdate(formData) {
         rolesService.updateRole(formData.id_rol,formData)
         .then(response => {
              const index = this.billings.findIndex(item => item.id_rol === formData.id_rol);
              if (index !== -1) {
                  this.$set(this.billings, index, { ...this.billings[index], ...formData });
              }
              this.$swal.fire("Registro Actualizado!", "El Rol fue actualizado exitosamente", "success");
              this.$refs.editRole.close();
          })
          .catch(error => {
                throw error;  
          });
        
    },
  },

  async mounted(){
    try {
      this.billings = await rolesService.getRole();
    } catch (error) {
      this.error = 'Hubo un problema al obtener los roles';
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
