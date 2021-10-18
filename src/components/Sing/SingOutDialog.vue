<template>
    <v-btn @click="$store.dispatch('sesion/cerrarSesion')" text depressed>
       {{ $store.state.sesion.usuario ? $store.state.sesion.usuario.email : "No existe" }}
        <v-icon right>mdi-logout</v-icon>
    </v-btn>
</template>

<script>
export default {
    name: 'Singoutdialog',

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

</style>