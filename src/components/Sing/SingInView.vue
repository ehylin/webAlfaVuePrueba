<template>
    <div>
    <v-card>
        <v-card-title>Inicia Sesión</v-card-title>
        <v-card-text>
            <UserForm />
        </v-card-text>  
    </v-card>
    </div>
</template>

<script>

export default {
    name: 'Singindialog',
    components: {
        UserForm: () => import("./UserForm.vue") 
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