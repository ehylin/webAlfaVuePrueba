<template>
    <div>
        <h3>Editando el curso: {{curso.nombre}}</h3>
            <v-form @submit.prevent="guardanCambios" ref="formulario">
                <v-text-field :disabled="loading" v-model="curso.nombre" label="Nombre"></v-text-field>
                <v-text-field :disabled="loading" v-model.number="curso.cupos" label="Cupos del curso" type="number"></v-text-field>
                <v-text-field :disabled="loading" v-model="curso.imagen" label="URL de la imagen del curso"></v-text-field>
                <v-text-field :disabled="loading" v-model.number="curso.inscritos" label="Inscritos en el curso" type="number"></v-text-field>
                <v-text-field :disabled="loading" v-model="curso.duracion" label="Duración del curso"></v-text-field>
                <v-text-field :disabled="loading" v-model.number="curso.costo" label="Costo del curso" type="number"></v-text-field>
                <v-textarea  name="input-7-1" v-model="curso.descripcion" label="Descripción del curso"></v-textarea>
                <v-switch :disabled="loading" v-model="curso.estado" label="Terminado"></v-switch>
                <v-text-field :disabled="loading" v-model="curso.fecha_registro" label="Fecha de registro"></v-text-field>

                <v-btn :loading="loading" color="success" type="submit">Actualizar</v-btn>
                <v-btn  color="error">Limpiar formulario</v-btn>
                <v-btn  color="warning">Limpiar validación</v-btn>
                <v-btn  color="primary">Regresar</v-btn>
            </v-form>
    </div>
</template>

<script>
import Firebase from 'firebase'
export default {
    name: 'Editarcurso',

    beforeRouteEnter (to, from, next) {
        Firebase.firestore()
        .collection("cursos")
        .doc(to.params.id)
        .get()
        .then(document =>{
            next(vm => {
                vm.curso = {id: document.id , ...document.data()}
            })
        })
    },

    data:() => ({
        curso: {},
        loading: false
    }),
    methods:{
        guardanCambios(){
            if(this.$refs.formulario.validate()){
                this.loading = true;
                Firebase.firestore()
                .collection("cursos")
                .doc(this.curso.id)
                .update(this.curso)
                .then(() =>{
                    this.loading = false
                    this.$router.push("/cursos")
                })
                .catch(() => {
                    this.loading = false
                })
                console.log('el formulario es valido')
            }
        }
    }
};
</script>

<style lang="scss" scoped>

</style>