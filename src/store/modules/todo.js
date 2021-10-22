// import axios from "@/plugins/axios/index.js"
import axios from "@/plugins/axios/index.js"
export default {
    state: {
        lists: [],
        currentTodos : []
    },
    mutations: {

        setLists(state, data) {
            state.lists = data
        },

        addNewlist(state, data) {
            state.lists.push(data)
        },

        setTodos(state, data) {
            state.currentTodos = data
        },

        updateTodoList(state, data){
            let todo = state.currentTodos.find(todo => todo.id === data.id)
            Object.assign(todo, data);
        },

        addTodo(state, todo) {
            state.currentTodos.push(todo)
        },

        removeItem(state, item) {
            console.log(state.lists.filter(el => el.id !== item.id));
            state.lists = state.lists.filter(el => el.id !== item.id)
        }
    },
    actions: {
        async fetchLists(contex) {
            try {
                let {data} = await axios.get("todo/lists/")
                contex.commit("setLists", data)
            }
            catch (error) {
                console.log(error);
            }
        },

        async addList(context, list) {
            try {
                let { data } = await axios.post("todo/lists/", {"name" : list.name})
                context.commit("addNewlist", data)
            }
            catch (error) {
                console.log(error);
            }
        },


        async deleteList(context, list) {
            context.commit("removeItem", list)
            let { data } = await axios.delete(`todo/lists/${list.id}`)
            console.log(data);
        },

        async fetchTodos(context, id) {
            try {
                let { data } = await axios.get(`todo/tasks/?todo_list=${id}`)
                context.commit("setTodos", data)
            }
            catch (error) {
                console.log(error);
            }
        },

        async completeTask(context, todo) {
            try {
                let { data } = await axios.post(`todo/tasks/complete/${todo.id}/`, todo)
                context.commit("updateTodoList", data)
            }
            catch (error) {
                console.log(error);
            }
        },

        async addTodo(context, todo) {
            try {
                let { data } = await axios.post("todo/tasks/", todo)
                context.commit("addTodo", data)
            }
            catch (error) {
                console.log(error);
            }
        }
    },
    getters: {
        getLists: state => state.lists,
        getTodos : state => state.currentTodos
    },
    
}