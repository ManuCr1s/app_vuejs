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
                               >Nuevo registro</v-btn>
                       </template>
                       <v-card class="card-shadow border-radius-xl">
                           <form @submit.prevent="handleSubmit">
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
                                       v-model="form.nombre"
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
                                       v-model="form.descripcion"
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
    name:'CreateRole',
    data(){
        return {
            dialog:false,
            form: {
                nombre: '',
                descripcion: ''
            }
        }
    },
    methods:{
        close() {
            this.dialog = false;
        },
        handleSubmit() {
            this.$emit('submit', this.form);
            this.reset();
            this.close();

        },
        reset(){
            this.form.nombre ='';
            this.form.descripcion = '';
        }
    },
    props:{
        form:{
            type:Object,
            required:true
        },
    }
}
</script>