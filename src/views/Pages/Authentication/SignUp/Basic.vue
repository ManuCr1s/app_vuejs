<template>
      <v-row class="align-center d-flex h-100">
            <v-col lg="4" md="7" class="mx-auto">
                  <v-card class="card-shadow border-radius-xl py-1">
                        <div class="card-padding text-center mt-n7 bg-gradient-success shadow-success border-radius-lg mx-4">
                              <h4 class="text-h4 text-white font-weight-bold">Iniciar Sesión</h4>
                        </div>
                        <form @submit.prevent="handleLogin">
                            <div class="mt-2 position-relative text-center">
                            </div>
                            <div class="card-padding">
                                    <v-text-field
                                      v-model="form.dni"
                                      label="DNI"
                                      placeholder="DNI"
                                      color="#3dc91e"
                                      required
                                      class="font-size-input input-style"
                                      maxlength="8"
                                    ></v-text-field>
                                    <v-text-field
                                      v-model="form.password"
                                      label="CONTRASEÑA"
                                      placeholder="CONTRASEÑA"
                                      color="#3dc91e"
                                      required
                                      type="password"
                                      class="font-size-input input-style"
                                    ></v-text-field>
                                    <v-btn
                                      type="submit"
                                      elevation="0"
                                      :ripple="false"
                                      height="43"
                                      class="
                                        font-weight-bold
                                        text-uppercase
                                        btn-default
                                        bg-gradient-default
                                        py-2
                                        px-6
                                        me-2
                                        mt-6
                                        mb-2
                                        w-100
                                      "
                                      color="#5e72e4"
                                      small>Ingresar</v-btn>
                            </div>
                        </form>
                  </v-card>
            </v-col>
      </v-row>
</template>
<script>
import authService  from '../../../../modules/auth/authService.js';
import { mapMutations,mapState } from 'vuex';
export default {
      name: "auth-login",
      data:()=>({
          form:{
              dni:"",
              password:""
          }
      }),
      computed:{
            ...mapState([
                  'auth'
            ])
      },
      methods: {
            ...mapMutations(['setAuth']),
            handleLogin() {
                  authService.login(this.form)
                  .then(response => {
                        localStorage.setItem('auth',JSON.stringify(response.data));
                        this.setAuth(response.data);
                        this.$router.push({
                              name:'Dash'
                        })
                  })
            }
    }
};
</script>
