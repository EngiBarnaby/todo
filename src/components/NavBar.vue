<template>
    <div>
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
                <router-link :to="{ name : 'home'}" class="navbar-brand">Todo</router-link>
                <!-- <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"> -->
                <div class="d-flex">
                    <!-- <router-link >
                    </router-link> -->
                        <button 
                            @click="$router.push('/login')"
                            class="btn btn-outline-primary mx-2"
                            v-if="!getUserStatus"
                            >Войти
                        </button>
                        <button 
                            class="btn btn-outline-primary mx-2"
                            @click="logOut"
                            v-else
                            >Выйти
                        </button>
                        <button 
                            v-if="!getUserStatus"
                            class="btn btn-outline-primary"
                            @click="$router.push('/register')"
                            >Региистрация
                        </button>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import { mapGetters, mapActions} from "vuex"
export default {
    name : "Navbar",

    methods : {
        ...mapActions(["logOut"]),
    },


    computed : {
        ...mapGetters(["getUserStatus"])
    }
}
</script>