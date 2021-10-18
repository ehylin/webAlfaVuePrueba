<template>
    <div>
    <v-card>
        <v-card-title>Registrar Usuario</v-card-title>
        <v-card-text>
            <UserFormAdd />
        </v-card-text>  
    </v-card>
    </div>
</template>

<script>

export default {
    name: 'SingNewUser',
    components: {
        UserFormAdd: () => import("./UserFormAdd.vue") 
    },

   data: () => ({
       //dialog: false,
   }),

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>