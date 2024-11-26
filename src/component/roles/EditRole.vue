<template>
    <v-dialog v-model="dialog" max-width="900px">
                       <template v-slot:activator="{ on, attrs }">   
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
                                        Crear un nuevo Rol
                                   </span>
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
                                       placeholder="Nombre de Rol"
                                       v-model="data.nombre"
                                       autocomplete="name"
                                       ></v-text-field>
                                   </v-col>
                                   <v-col cols="12">
                                       <v-textarea
                                       dense
                                       flat
                                       filled
                                       solo  
                                       hide-details
                                       placeholder="Ingrese Descripcion"
                                       class="
                                           input-style
                                           font-size-input
                                           text-light-input
                                           placeholder-light
                                           input-icon
                                       "
                                       v-model="data.descripcion"
                                       ></v-textarea>
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
export default{
    name:'RoleForm',
    data(){
        return {
            dialog:false,
            data: {
                nombre: '',
                descripcion: ''
            }
        }
    },
    methods:{
        close() {
            this.dialog = false;
        },
        handleSubmitUpdate() {
            this.$emit('submit', this.data);
            this.close();
        },
    },
    props:{
        data:{
            type:Object,
            required:true
        },
    }
}
</script>