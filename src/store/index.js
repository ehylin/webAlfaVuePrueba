import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import { moduloSesion  } from "./modules/sesion";
import { cursosModulo  } from "./modules/cursos";

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    sesion: moduloSesion,
    cursos: cursosModulo
  },
});
