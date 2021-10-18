import router from '../../router'
export const moduloSesion = {
    namespaced: true,
    state: {
        usuario: null
    },
    mutations:{
        SET_USUARIO(state, nuevoUsuario){
            state.usuario = nuevoUsuario
        }
    },

    actions:{
        configurarUsuario(context, usuario){
            context.commit("SET_USUARIO", usuario)
           
        },
        cerrarSesion({commit}){
            commit('SET_USUARIO', null)
            router.push('/iniciarsesion')
        },
    }
}