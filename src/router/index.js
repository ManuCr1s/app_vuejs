import Vue from "vue";
import VueRouter from "vue-router";
import DashboardLayout from "../views/Layout/DashboardLayout.vue";
import AuthBasicLayout from "../views/Layout/AuthBasicLayout";
const Sales = () => import("../views/Dashboard/Sales.vue");
const Automotive = () => import("../views/Dashboard/Automotive.vue");
const Productor = () => import( "@/page/productor/ProductorView.vue");
const Roles = () => import( "@/page/admin/roles/RoleView.vue");
const Llama = () => import( "@/page/productor/LlamaView.vue");
const Usuario = () => import( "@/views/Applications/Datatables/Datatables.vue");
const Centro = () => import( "@/page/admin/centros/CentroView.vue");
const Anexo = () => import( "@/page/admin/anexos/AnexoView.vue");
const AuthLogin  = () => import( "@/views/Pages/Authentication/SignUp/Basic.vue");
Vue.use(VueRouter);
let loginPage = {
    path: "/login",
    component: AuthBasicLayout,
    name: "Authentication Basic",
    children: [
      {
        path: "/login",
        name: "AuthLogin",
        component: AuthLogin,
        beforeEnter:(to,from,next)=>{
          if(localStorage.getItem('auth')){
            next('/dashboard');
          }else{
            next();
          }
        },
      },
    ],
  };
const routes = [
  {
    path: "/",
    name: "Dashboard",
    redirect: "/dashboard",
    component: DashboardLayout,
    meta: {
      requiresAuth:true,
    },
    children: [
    {
      path: "/dashboard",
      name: "Dash",
      component: Sales,
      meta: {
        requiresAuth:true,
        groupName: "Dashboards",
      },
    },
    {
      path: "/productor",
      name: "Automotive",
      component: Automotive,
      meta: {
        requiresAuth:true,
        groupName: "Dashboards",
      },
    },
    {
      path: "/roles",
      name: "Roles",
      component: Roles,
      meta: {
        requiresAuth:true,
        groupName: "Applications",
      },
    },
    {
      path: "/productores",
      name: "Productores",
      component: Productor,
      meta: {
        requiresAuth:true,
        groupName: "Applications",
      },
    },
    {
      path: "/llamas",
      name: "Llamas",
      component: Llama,
      meta: {
        requiresAuth:true,
        groupName: "Applications",
      },
    },
    {
      path: "/centros",
      name: "Centros",
      component: Centro,
      meta: {
        requiresAuth:true,
        groupName: "Applications",
      },
    },
    {
      path: "/anexos",
      name: "Anexo",
      component: Anexo,
      meta: {
        requiresAuth:true,
        groupName: "Applications",
      },
    },
    {
      path: "/usuarios",
      name: "Usuario",
      component: Usuario,
      meta: {
        requiresAuth:true,
        groupName: "Applications",
      },
    },
  ]
},
loginPage,
];
const router = new VueRouter({
    mode: 'history',
    routes,
  });
router.beforeEach((to,from,next)=>{
  const protectedRoute = to.matched.some(record => record.meta.requiresAuth);
  if(protectedRoute && !localStorage.getItem('auth')){
    next('/login');
  }else{
    next();
  }
})
export default router;