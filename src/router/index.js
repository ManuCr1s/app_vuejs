import Vue from "vue";
import VueRouter from "vue-router";
import AuthBasicLayout from "../views/Layout/AuthBasicLayout";

const SignUpBasic = () =>
  import(
    "@/views/Pages/Authentication/SignUp/Basic.vue"
  );
Vue.use(VueRouter);
let authBasicPages = {
    path: "/",
    component: AuthBasicLayout,
    name: "Authentication Basic",
    children: [
      {
        path: "/",
        name: "SignUpBasic",
        component: SignUpBasic,
      },
    ],
  };
const routes = [
    authBasicPages,
];
const router = new VueRouter({
    routes,
  });
export default router;