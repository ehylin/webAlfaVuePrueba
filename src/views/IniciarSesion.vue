<template>
    <div>
        <h1>Iniciar sesion</h1>
        <SingInView />
    </div>
</template>

<script>
export default {
    name: 'Iniciarsesion',
    components:{
        SingInView: () =>import('../components/Sing/SingInView.vue')
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

</style>