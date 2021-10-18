<template>
    <v-navigation-drawer :value="value" @input="$emit('input', $event)" app>
        <v-list>
            <v-list-item 
            v-for="(link, $index) in links" 
            :key="$index" 
            link
            :to="link.to"
            >
             <v-list-item-icon>
                 <v-icon>{{link.icon}}</v-icon>
             </v-list-item-icon>
             <v-list-item-content>
                 <v-list-item-title>
                     {{link.title}}
                 </v-list-item-title>
             </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    name: 'Sidebar',
    data: () =>({
        links:[
            {
                title: 'Home',
                icon: 'mdi-home',
                to: '/'
            },
            {
                title: 'Cursos admin',
                icon: 'mdi-apps',
                to: '/cursos'
            },
             {
                title: 'Iniciar sesion',
                icon: 'mdi-apps',
                to: '/iniciarsesion'
            },
            {
                title: 'Agregar usuario',
                icon: 'mdi-apps',
                to: '/agregarusuario'
            },
           
        ],
    }),
    props:["value"],
    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>