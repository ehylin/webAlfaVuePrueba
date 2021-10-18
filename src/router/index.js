import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

import Store from "../store";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      login: true,
    },
  },
  {
    path: "/iniciarsesion",
    name: "IniciarSesion",
    component: () => import('../views/IniciarSesion.vue')
  },
  {
    path: "/agregarusuario",
    name: "RegistrarUsuario",
    component: () => import('../views/RegistroUsuario.vue')
  },
  {
    path: "/cursos",
    name: "Cursos",
    component: () => import('../views/Cursos.vue'),
    meta: {
      login: true,
    },
  },
  {
    path: "/cursos/:id",
    name: "EditarCurso",
    component: () => import('../views/EditarCurso.vue')
  },


];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.login) {
    if (Store.state.sesion.usuario) {
      next();
    } else {
      next("/iniciarsesion");
    }
  } else {
    next();
  }
});

export default router;
