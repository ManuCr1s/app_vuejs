import Vue from "vue";
import VueRouter from "vue-router";
import DashboardLayout from "../views/Layout/DashboardLayout.vue";
import AuthBasicLayout from "../views/Layout/AuthBasicLayout";
const Sales = () => import("../views/Dashboard/Sales.vue");
const Automotive = () => import("../views/Dashboard/Automotive.vue");
const Datatables = () => import( "@/views/Applications/Datatables.vue");
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
    component: DashboardLayout,
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
      path: "/list",
      name: "Datatables",
      component: Datatables,
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