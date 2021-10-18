<template>
    <v-dialog v-model="dialog" width="700">
    <template #activator="{ on }">
        <v-btn color="primary"  v-on="on">
           Agregar curso
      </v-btn>
    </template>  
    <v-card>
        <v-card-title>Agregando curso</v-card-title>
        <v-card-text>
           <v-form @submit.prevent="guardarCambios" ref="formulario">
                <v-text-field :disabled="loading" v-model="curso.nombre" label="Nombre" :rules="[required]"></v-text-field>
                <v-text-field :disabled="loading" v-model.number="curso.cupos" label="Cupos del curso" type="number" :rules="[required]"></v-text-field>
                <v-text-field :disabled="loading" v-model="curso.imagen" label="URL de la imagen del curso" :rules="[required]"></v-text-field>
                <v-text-field :disabled="loading" v-model.number="curso.inscritos" label="Inscritos en el curso" type="number" :rules="[required]"></v-text-field>
                <v-text-field :disabled="loading" v-model="curso.duracion" label="Duración del curso" :rules="[required]"></v-text-field>
                <v-text-field :disabled="loading" v-model.number="curso.costo" label="Costo del curso" type="number" :rules="[required]"></v-text-field>
                <v-textarea  solo name="input-7-4" label="Descripción del curso" v-model="curso.descripcion" :rules="[required]"></v-textarea>
                <v-switch :disabled="loading" v-model="curso.estado" label="Terminado"></v-switch>

                <v-btn :loading="loading" color="success" type="submit">Crear</v-btn>
                <v-btn  color="error">Limpiar formulario</v-btn>
                <v-btn  color="warning">Limpiar validación</v-btn>
                <v-btn  color="primary">Regresar</v-btn>
            </v-form>
        </v-card-text>  
    </v-card>
  </v-dialog>
</template>

<script>
import Firebase from 'firebase'
export default {
    name: 'Singindialog',
    components: {
       
    },

   data: () => ({
       dialog: false,
       loading: false,
       curso:{
           nombre: "",
           cupos: 0,
           inscritos: 0,
           imagen: "",
           duracion: "",
           costo: 0,
           descripcion: "",
           estado: false,

       }
   }),

    mounted() {
        
    },

    methods: {
        guardarCambios(){
            if(this.$refs.formulario.validate()){
                Firebase.firestore()
                .collection("cursos")
                .add(this.curso)
                .then(()=>{
                    this.loading= false;
                    this.$store.dispatch("cursos/traerCursos")
                    //this.$router.push('/')
                }).catch(()=>{
                    this.loading = false;
                    console.log("Ocurrio un error ")
                })
                console.log("crear curso nuevo", this.curso)
            }
        },
        required(v){
            return !!v || "Este campo es obligatorio"
        }
    },
};
</script>

<style lang="scss" scoped>

</style>