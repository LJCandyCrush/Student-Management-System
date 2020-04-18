import Vue from "vue";
import Router from "vue-router";
import student from "@/components/student";
import teacher from "@/components/teacher";
import login from "@/components/login";
import community from "@/components/community";

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", component: login },
    { path: "/student", component: student },
    { path: "/teacher", component: teacher },
    { path: "/community", component: community }
  ]
});
