<template>
    <div>
        <v-layout align-center justify-space-between>
            <v-flex shrink>
                <h1>Administración</h1>
            </v-flex>
            <v-flex shrink>
                 <SingInDialog/>
            </v-flex>
        </v-layout>
        
         <CursosTables  />
    </div>
</template>

<script>
import Store from '../store'
export default {
    name: 'Cursos',
    components:{
        CursosTables: () => import('../components/Cursos/CursosTables.vue'),
        SingInDialog: () => import("../components/Sing/SingInDialog.vue")
    },
     beforeRouteEnter (to, from, next) {
       Store.dispatch('cursos/traerCursos');
       next()
  },

    data() {
        return {
             cursos: []
            
        };
    },

    mounted() {
      
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>