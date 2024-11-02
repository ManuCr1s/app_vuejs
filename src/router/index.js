import Vue from "vue";
import VueRouter from "vue-router";
import DashboardLayout from "../views/Layout/DashboardLayout.vue";
import ProfileLayout from "../views/Layout/ProfileLayout.vue";
import DashboardLayoutVr from "../views/Layout/DashboardLayoutVr.vue";
import PageLayout from "../views/Layout/PageLayout";
import AuthBasicLayout from "../views/Layout/AuthBasicLayout";
import { Title } from "chart.js";

const Sales = () => import("../views/Dashboard/Sales.vue");
const Automotive = () => import("../views/Dashboard/Automotive.vue");
const Datatables = () => import( "@/views/Applications/Datatables.vue");
const SignUpBasic = () => import( "@/views/Pages/Authentication/SignUp/Basic.vue");
Vue.use(VueRouter);
let authBasicPages = {
    path: "/login",
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
  {
    path: "/",
    name: "Dashboard",
    component: DashboardLayout,
    children: [
    {
      path: "/dashboard",
      name: "Sales",
      component: Sales,
      meta: {
        groupName: "Dashboards",
      },
    },
    {
      path: "/productor",
      name: "Automotive",
      component: Automotive,
      meta: {
        groupName: "Dashboards",
      },
    },
    {
      path: "/list",
      name: "Datatables",
      component: Datatables,
      meta: {
        groupName: "Applications",
      },
    },
  ]
},
  authBasicPages,
];
const router = new VueRouter({
    routes,
  });
export default router;