import axios from "@/plugins/axios/index.js"

export default {
    state: {
        user: {},
        isLogin : false
    },
    mutations: {
        setUser(state, data) {
            state.user = data
            state.isLogin = true
        },

        logOut(state) {
            state.user = null
            state.isLogin = false
        }
    },
    actions: {

        async registerUser(contex, user) {
            try {
                await axios.post("accounts/authentication/reg/", user)

            }
            catch (error) {
                console.log(error);
            }
        },

        async loginUser(context, user) {
            try {
                let { data } = await axios.post("accounts/authentication/auth/", user)
                let token = data.token
                localStorage.setItem("token", token)
                context.commit("setUser", data.user)
            }
            catch (error) {
                console.log(error);
            }
        },

        logOut(context) {
            context.commit("logOut")
            localStorage.removeItem("token")
        }
    },
    getters: {
        getUserStatus : state => state.isLogin,
    },
    
}