<template>
  <div>
    <h1 class="mb-6 text-center">Lista de cursos</h1>
      <v-row>
         <v-col v-for="curso in $store.state.cursos.cursos"  :key="curso.id" cols="12" md="6" lg="4">
            <CursosLista :curso="curso" class="mx-auto" />
         </v-col>
      </v-row>
  </div>
</template>

<script>
import Store from '../store'
export default {
  name: "Home",
  components:{
    CursosLista: () => import('../components/Cursos/CursosLista.vue')
  },
  data:() =>({
    cursos: []
  }),
  beforeRouteEnter (to, from, next) {
       Store.dispatch('cursos/traerCursos');
       next()
  },
};
</script>
