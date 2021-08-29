import { createRouter, createWebHistory } from "vue-router";
import NotFound from "../views/vendor/NotFound.vue";
import User from "../views/users/User.vue";
import UserIndex from "../views/users/Index.vue";
import UserCreate from "../views/users/Create.vue";
import UserEdit from "../views/users/Edit.vue";
import Login from "../views/auth/Login.vue";
import Dashboard from "../views/dashboard/Dashboard.vue";
import Project from "../views/projects/Project.vue";
import Task from "../views/tasks/Task.vue";

const routes = [
  {
    path: "/login", component: Login,
  },
  {
    path: "/Dashboard",
    name: "Dashboard",
    component: Dashboard,
    title: "Dashboard"
  },
  {
    path: "/Project",
    name: "Project",
    component: Project,
    title: "Project Management"
  },
  {
    path: "/Task",
    name: "Task",
    component: Task,
    title: "Task Management"
  },
  {
    path: "/user",
    component: User,
    title: "User Management",
    name: "User",
    meta: {
      requireAuth: false,
    },
    children: [
      {
        path: "index", component: UserIndex, alias: ['/user']
      },
      {
        path: "create", component: UserCreate, name: "user.create"
      },
      {
        path: "edit", component: UserEdit, name: "user.edit"
      }
    ]
  },
  {
    path: "/:pathMatch(.*)", component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to) => {
  if (to.meta.requireAuth && !window.isAuth) {
    return {
      path: "/login",
      query: { redirect: to.fullPath }
    }
  }
})
export default router;
