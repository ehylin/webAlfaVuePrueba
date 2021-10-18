<template>
    <v-card class="mx-auto card-vue" >
        <v-img height="330px" :src="curso.imagen" contain></v-img>
         <v-card-text class="grey lighten-2">
         <v-toolbar-title class="text-h6  pl-0">{{curso.nombre}}</v-toolbar-title>
          <div class="font-weight-bold ml-8 mb-2">
            Información
          </div>
          <v-timeline align-top dense>
            <v-timeline-item color="purple" small>
              <div>
                <div class="font-weight-normal">
                  <strong>Costo: {{ curso.costo }}</strong> 
                </div>
                <div>Duración: {{ curso.duracion }}</div>
              </div>
            </v-timeline-item>
          </v-timeline>
          <v-timeline align-top dense>
            <v-timeline-item color="green" small>
              <div>
                <div class="font-weight-normal">
                  <strong>Cupos:{{ curso.cupos }}</strong> 
                </div>
                <div>Completado: {{ curso.estado ? 'Si' : 'No' }}</div>
              </div>
            </v-timeline-item>
          </v-timeline>
          <v-timeline align-top dense>
            <v-timeline-item color="purple" small>
              <div>
                <div class="font-weight-normal">
                  <strong>Fecha de registro</strong> 
                </div>
                <div>: {{ fecha_registro }}</div>
              </div>
            </v-timeline-item>
          </v-timeline>
          <v-timeline align-top dense>
            <v-timeline-item color="green" small>
              <div>
                <div class="font-weight-normal">
                  <strong>Descripción:</strong>
                <div> {{ curso.descripcion }} </div>
                </div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
    </v-card>
</template>
<script>
export default {
    name: 'Cursoslista',
    props: {
        curso: { type: Object, required: true }
    },
    data: () => ({
    }),
};
</script>
<style lang="scss" scoped></style>