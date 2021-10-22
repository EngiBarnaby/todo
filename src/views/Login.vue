<template>
    <div class="container">
        <div class="register-form">
           <form @submit.prevent>
                <h2 class="text-center">Войти</h2>
                <div class="form-group">
                    <input type="text" 
                        class="form-control" 
                        placeholder="Username" 
                        required="required"
                        v-model="username">
                </div>
                <div class="form-group">
                    <input 
                        type="password" 
                        class="form-control" 
                        placeholder="Password" 
                        required="required"
                        v-model="password">
                </div>
                <div class="form-group" @click="login">
                    <button type="submit" class="btn btn-primary btn-block">Войти</button>
                </div>
           </form>
           <p class="text-center">Ещё нет аккаунта
               <router-link :to="{ name : 'register' }">
                   Зарегистрироваться
               </router-link>
           </p>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex"
export default {
    name : "login",
    data(){
        return {
            username : "",
            password : "",
        }
    },
    methods : {
        ...mapActions(["loginUser"]),

        login(){
            this.loginUser({username : this.username, password : this.password})
            this.username = ""
            this.password = ""
            this.$router.push('/')
            
        }
    },

}
</script>

<style scoped>

.register-form {
    width: 340px;
    margin: 50px auto;
    font-size: 15px;
}

.form-group {
    margin-bottom: 1rem;
}

.btn {
    font-size: 15px;
    font-weight: bold;
}

.btn-block {
    display: block;
    width: 100%;
}
</style>