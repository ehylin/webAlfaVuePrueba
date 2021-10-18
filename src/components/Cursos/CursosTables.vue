<template>
<div>
  <v-data-table
    :headers="headers"
    :items="$store.state.cursos.cursos"
    class="elevation-1"
  >
  <template v-slot:[`item.costo`]="{item}" >
    <v-chip color="success"> ${{ item.costo.toLocaleString() }}</v-chip>
  </template>
   <template v-slot:[`item.estado`]="{item}" >
    <v-chip :color="item.estado ? 'info' : 'grey' ">{{ item.estado ? 'Si' : 'No' }}</v-chip>
  </template> 
   <template v-slot:[`item.fecha_registro`]="{item}" >
    <v-chip color="success">{{ item.fecha_registro }}</v-chip>
  </template>


   <template v-slot:[`item.acciones`]="{item}" >
    <div>
      <v-btn icon @click="irAEditarCurso(item)">
        <v-icon> mdi-pencil </v-icon>
      </v-btn>
    
      <v-btn icon @click="mostrarAlertaDeBorrar(item)">
         <v-icon> mdi-delete </v-icon>
      </v-btn>

      
    </div>
  </template>


  </v-data-table>
  <div>
    <v-alert
        dense
        outlined
        color="purple"
        >
         <v-icon>mdi-login</v-icon>
        Cantidad total de alumnos permitidos: <strong>{{this.totalItem()}}</strong> alumnos.
    </v-alert>
      <v-alert
        dense
        outlined
        color="purple"
        >
        Cantidad total de alumnos inscritos: <strong>{{this.totalInscritos()}}</strong> alumnos.
    </v-alert>
      <v-alert
        dense
        outlined
         color="blue-grey"
        >
        Cantidad total de cupos restantes: <strong>{{this.totalRestante()}}</strong> cupos.
    </v-alert>
      <v-alert
        dense
        outlined
        color="purple"
        >
        Cantidad total de cursos terminados: <strong>{{this.totalCursosTerminados()}}</strong> cursos.
    </v-alert>
      <v-alert
        dense
        outlined
        color="blue-grey"
        >
        Cantidad total de cursos activos: <strong>{{this.totalCursosActivos()}}</strong> cursos.
    </v-alert>
      <v-alert
        dense
        outlined
         color="blue-grey"
        >
        Cantidad total de cursos: <strong>{{this.totalCursos()}}</strong> cursos.
    </v-alert>
  </div>
</div>
</template>

<script>
import Firebase from 'firebase'
export default {
    name: 'Cursostables',
     data () {
      return {
        headers: [
          {
            text: 'Curso',
            align: 'start',
            sortable: false,
            value: 'nombre',
          },
          { text: 'Cupos', value: 'cupos' },
          { text: 'Inscritos', value: 'inscritos' },
          { text: 'Duración', value: 'duracion' },
          { text: 'Costo', value: 'costo' },
          { text: 'Terminado', value: 'estado' },
          { text: 'Fecha', value: 'fecha_registro' },
           { text: 'Acciones', value: 'acciones' },
        ],
      }
    },
    mounted(){
          //this.$store.dispatch('cursos/traerCursos');
    },
    methods: {
      irAEditarCurso(item){
        this.$router.push(`/cursos/${item.id}`)
        console.log("editar", item)
      },
      mostrarAlertaDeBorrar(item){
        this.$swal({
          title: "Estas seguro?",
          icon: "warning",
          showCancelButton : true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Si, eliminar!",
          cancelButtonText: "Cancelar"

        }).then((result) => {
          if(result.isConfirmed){
            Firebase.firestore()
            .collection("cursos")
            .doc(item.id)
            .delete()
            .then(()=>{
              this.$swal("Borrado con exito").then(()=>{
                this.$store.dispatch("cursos/traerCursos")
                console.log("borrar")
              })
            })
          }
        })
        
      },

       totalItem(){
         const totalCupos = this.$store.state.cursos.cursos.reduce((sum, value) => (sum + value.cupos), 0);
         return totalCupos;
        },
       totalInscritos(){
           const totalinscritos = this.$store.state.cursos.cursos.reduce((sum, value) => (sum + value.inscritos), 0);
         return totalinscritos;
       },
       totalRestante(){
        //    return this.$store.state.cursos.curso.reduce((restante, alumnos) => {
        //     restante -= alumnos.cupos - alumnos.inscritos 
        //     return restante
        // }, 0)
         const totalinscritos = this.$store.state.cursos.cursos.reduce((resto, value) => (resto, value.cupos - value.inscritos) , 0);
         return totalinscritos;
       },
       totalCursos(){
        const totalcursos = this.$store.state.cursos.cursos.length
        return totalcursos;
       },
       totalCursosTerminados(){
        const totalterminados = this.$store.state.cursos.cursos.reduce((sum, value) => (value.estado == true ? sum + value.estado : sum) , 0);
         return totalterminados;
       },
       totalCursosActivos(){
        const totalactivos = this.$store.state.cursos.cursos.reduce((sum, value) => ( value.estado == false ? sum + !value.estado : sum ) , 0);
         return totalactivos;
       },
    },
    computed: {
        
    }
};
</script>

<style lang="scss" scoped>

</style>