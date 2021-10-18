<template>
  <v-app>
    <Navbar @toggle-drawer="drawer = !drawer" />
    <Sidebar v-model="drawer" />
    <v-main>
      <v-container>
          <router-view />
      </v-container> 
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: "App",
  components:{
    Navbar: () => import("@/components/App/Navbar"),
    Sidebar: () => import("@/components/App/Sidebar")
  },
  data: () => ({
    drawer: false,
    cursos: []
  }),
  mounted(){
    // Firebase.firestore().collection("cursos").get().then(documents =>{
    //   documents.forEach(document => {
    //     this.cursos.push({id: document.id, ...document.data() })
    //   })
    // })
  }
};
</script>
