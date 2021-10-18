import Firebase from "firebase"

export const cursosModulo ={
    namespaced: true,
    state:{
        cursos: [],
    },
    mutations: {
        SET_CURSOS_DATA(state, nuevoCurso){
            state.cursos = nuevoCurso;
        }
    },
    actions:{
         traerCursos(context){
            Firebase.firestore()
            .collection("cursos")
            .get()
            .then(documents => {
                const cursos = []
                documents.forEach(document => {
                    cursos.push({ id: document.id, ...document.data() })
                })
                context.commit("SET_CURSOS_DATA", cursos);
            })
        }
    }
}