<template>
    <v-dialog v-model="dialog" max-width="500px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          elevation="0"
          :ripple="false"
          height="43"
          class="font-weight-normal text-capitalize btn-primary bg-gradient-primary py-3 px-6 ms-3"
        >
          Nuevo Rol
        </v-btn>
      </template>
  
      <v-card class="card-shadow border-radius-xl">
        <div class="card-header-padding card-border-bottom">
          <span class="font-weight-bold text-h5 text-typo mb-0">{{ formTitle }}</span>
        </div>
  
        <v-card-text class="card-padding">
          <v-container class="px-0">
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="editedItem.name"
                  hide-details
                  class="input-style font-size-input text-light-input placeholder-light input-icon"
                  dense
                  flat
                  filled
                  solo
                  height="43"
                  placeholder="Nombre"
                ></v-text-field>
              </v-col>
  
              <v-col cols="12">
                <v-text-field
                  v-model="editedItem.age"
                  hide-details
                  class="input-style font-size-input text-light-input placeholder-light input-icon"
                  dense
                  flat
                  filled
                  solo
                  height="86"
                  placeholder="Descripcion"
                ></v-text-field>
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
            class="font-weight-normal text-capitalize btn-ls btn-outline-secondary bg-transparent py-3 px-6"
          >
            Cancelar
          </v-btn>
  
          <v-btn
            @click="save"
            elevation="0"
            :ripple="false"
            height="43"
            class="font-weight-normal text-capitalize btn-ls btn-primary bg-gradient-primary py-3 px-6"
          >
            Guardar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template>
  
  <script>
  export default {
    name: 'RolesModal',
    props: {
      dialog: {
        type: Boolean,
        required: true
      },
      formTitle: {
        type: String,
        default: 'Ingrese Nuevo Rol'
      },
      editedItem: {
        type: Object,
        default: () => ({
          name: '',
          email: '',
          age: '',
          salary: ''
        })
      }
    },
    methods: {
    close() {
         this.dialog = false;
         this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.users[this.editedIndex], this.editedItem);
      } else {
        this.users.push(this.editedItem);
      }
      this.close();
    },
    }
  };
  </script>
  
  <style scoped>
  /* Estilos específicos para este componente, si es necesario */
  </style>