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
      <v-card class="card-shadow border-radius-xl mt-6" id="basic">
    <div class="px-6 py-6">
      <h5 class="text-h5 font-weight-bold text-typo">Registrar nuevo usuario</h5>
    </div>
    <div class="px-6 pb-6 pt-0">
      <v-row>
        <v-col cols="12">
                <v-text-field
                    color="#e91e63"
                    class="font-size-input input-style"                       
                    label="DNI"
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
        <v-col cols="6" class="py-0">
          <v-text-field
            color="#e91e63"
            label="Nombres"
            placeholder="Nombres"
            class="font-size-input input-style"
            readonly
          >
          </v-text-field>
        </v-col>
        <v-col cols="6" class="py-0">
          <v-text-field
            color="#e91e63"
            label="Apellidos"
            placeholder="Apellidos"
            class="font-size-input input-style"
            readonly
          >
          </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" class="py-0">
          <v-text-field
            color="#e91e63"
            label="Correo electrónico"
            placeholder="Correo electrónico"
            class="font-size-input input-style"
          >
          </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" class="py-0">
      <v-text-field
        v-model="password"
        color="#e91e63"
        label="Contraseña"
        placeholder="Contraseña"
        type="password"
        class="font-size-input input-style"
        :rules="[rules.required]"
      >
      </v-text-field>
    </v-col>
    <v-col cols="6" class="py-0">
      <v-text-field
        v-model="confirmPassword"
        color="#e91e63"
        label="Verificar contraseña"
        placeholder="Verificar contraseña"
        type="password"
        class="font-size-input input-style"
        :rules="[rules.required, matchPassword]"
      >
      </v-text-field>
    </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" class="pb-0">
          <v-select
            label="Seleccione rol"
            color="#e91e63"
            class="font-size-input input-style"
            single-line
            height="36"
          >
          </v-select>
        </v-col>
        <v-col cols="6" class="pb-0">
          <v-select
            label="Estado de productor"
            color="#e91e63"
            class="font-size-input input-style"
            single-line
            height="36"
          >
          </v-select>
        </v-col>
      </v-row>
    </div>
  </v-card>
    </v-dialog>
  </template>
  
  <script>
export default {
  name: "UserForm",
  data() {
    return {
      form: {
        dni: '', // Propiedades dentro del formulario
        name: '',
        email: '',
      },
      password: "",
      confirmPassword: "",
      rules: {
        required: (value) => !!value || "Este campo es requerido.",
      },
      dialog: false,
    };
  },
  methods: {
    matchPassword(value) {
      return value === this.password || "Las contraseñas no coinciden.";
    },
    close() {
      this.dialog = false;
    },
    handleSubmit() {
      this.$emit("submit", this.form);
    },
    reset() {
      this.form.nombre = "";
      this.form.descripcion = "";
    },
    validarDNI() {
      if (this.form.dni.trim() === "") {
        alert("Por favor, ingresa un DNI válido.");
      } else {
        alert(`Validando DNI: ${this.form.dni}`);
      }
    },
  },
  props: {
    updating: {
      type: Boolean,
      required: false,
      default: false,
    },

  },
};
</script>
