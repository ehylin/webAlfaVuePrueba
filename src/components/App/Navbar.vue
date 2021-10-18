<template>
    <div>
        <v-app-bar app color="purple" dark>
            <v-app-bar-nav-icon @click="$emit('toggle-drawer')"></v-app-bar-nav-icon>
            <v-toolbar-title>Cursos Alfa Web</v-toolbar-title>

            <v-spacer></v-spacer>
               
                
                <v-btn v-show="!$store.state.sesion.usuario" color="purple" >   
                  <router-link to="/iniciarsesion" class="btn-iniciar-sesion">Inicia sesión</router-link>
                    <v-icon>mdi-login</v-icon>
                </v-btn>
  
            <!-- <SingInDialog v-show="!$store.state.sesion.usuario"/>-->
             <SingOutDialog v-show="$store.state.sesion.usuario"/> 
        </v-app-bar>
    </div>
</template>

<script>

export default {
    name: 'Navbar',

    components:{
        // SingInDialog: () => import("../Sing/SingInDialog.vue"),
        SingOutDialog: () => import("../Sing/SingOutDialog.vue")
    },

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
.btn-iniciar-sesion{
    color: #fff;
}
</style>