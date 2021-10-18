<template>
        <v-form ref="userForm" @submit.prevent="handleFormSubmit">
            <v-text-field 
                outlined 
                label="Correo electronico" 
                v-model="form.email"
                :rules="[required]"
                type="email"
            ></v-text-field>
            <v-text-field 
                outlined 
                label="Contraseña" 
                v-model="form.password"
                :rules="[required]"
                type="password"
            ></v-text-field>
            <v-layout justify-space-between>
                <v-btn color="success" type="submit">Registrar</v-btn>
                <v-btn color="amber" type="button" @click="resetValidation">Reiniciar validación</v-btn>
                <v-btn color="error" type="reset" @click="resetForm">Reiniciar formulario</v-btn>
            </v-layout>
          
        </v-form>
</template>

<script>
import Firebase from 'firebase'
export default {
    name: 'UserForm',

    data: () => ({
        form: {email: "", password: ""}
    }),
    methods: {
       async handleFormSubmit(){
            if( this.$refs.userForm.validate()){
                try{
                    await Firebase.auth().createUserWithEmailAndPassword(
                    this.form.email, 
                    this.form.password
                )
                this.$store.dispatch(
                    'sesion/configurarUsuario', 
                    Firebase.auth().currentUser
                )
                this.$emit("success")
                console.log("me fue bien con el formularioa")
                this.$router.push('/')
                //console.log(user)
                }catch(e){
                    console.error("me fue mal con el login")
                }
              
                
            } 
        },
        resetValidation(){
            this.$refs.userForm.resetValidation()
        },
        resetForm(){
            this.$refs.userForm.reset()
        },
        required(value){
            return !!value || "Este campo es obligatorio"
        }
    },
};
</script>

<style lang="scss" scoped>

</style>