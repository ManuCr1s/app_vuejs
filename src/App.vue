<template>
  <div>
      <router-view></router-view>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  created(){
    this.setAuth();
  },
  computed:{
    ...mapState([
      'auth'
    ])
  },
  watch:{
    auth(newValue){
      if(newValue){
        this.axios.defaults.headers.common['Authorizacion'] = 'Bearer' + newValue.token.access_token;
      }
      this.setAuth();
    }
  },
  methods:{
    ...mapActions([
      'setAuth',
      'logout'
    ])
  }
};
</script>
