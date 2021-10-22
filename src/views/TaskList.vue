<template>
    <div class="container">
        <h2>Todo List</h2>
        <h4>Добавить задачу</h4>
       <div class="input-group mb-3">
        <div class="input-group-prepend">
            <button class="btn btn-outline-secondary" @click="postTodo" type="button" id="button-addon1">Добавить</button>
        </div>
        <input type="text" class="form-control" placeholder="Ваше Todo" v-model="name"  aria-label="Example text with button addon" aria-describedby="button-addon1">
        </div>
        <h4>Todo</h4>
        <transition-group name="list" tag="div">
            <div v-for="todo in getNotCopletedTodos" :key="todo.id">
                <div class="input-group mb-3">
                <div class="input-group-text">
                    <input class="form-check-input mt-0" type="checkbox" @click="changeStatus(todo)" aria-label="Checkbox for following text input">
                    </div>
                    <input type="text" class="form-control" :value="todo.name" aria-label="Text input with checkbox">
                </div>
            </div>
        </transition-group>
        <h4>Завершенные</h4>
        <transition-group name="list" tag="div">
            <div v-for="todo in getCompletedTodos" :key="todo.id">
                <div class="input-group mb-3">
                <!-- <div class="input-group-text">
                    <input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input">
                </div> -->
                    <input type="text" class="form-control completed" readonly :value="todo.name" aria-label="Text input with checkbox">
                </div>
            </div>
        </transition-group>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
export default {

    data(){
        return {
            name : ""
        }
    },

    methods : {
        ...mapActions(["fetchTodos", "completeTask", "addTodo"]), 

        changeStatus(todo){
            todo.completed = true
            this.completeTask(todo)
        },

        postTodo(){
            let todo = {"completed" : false, "name" : this.name, "todo_list" : this.$route.params.id}
            this.addTodo(todo)
        }
    },

    computed : {
        ...mapGetters(["getTodos"]),

        getNotCopletedTodos(){
            return this.getTodos.filter(el => el.completed === false)
        },

        getCompletedTodos(){
            return this.getTodos.filter(el => el.completed !== false)
        }
    },

    mounted(){
        this.fetchTodos(this.$route.params.id)
    }

}
</script>

<style scoped>

.todo {
    display: block;
    padding: 20px;
    margin-top: 10px;
    border: 1px solid rgb(42, 42, 83);
}

h2 {
    text-align:center;
	padding-top:10px;
	margin-bottom:0px;
}

h4 {
    border-bottom: 1px solid #000;
    padding-bottom: 5px;
}

.completed {
    border-color: rgb(129, 180, 105);
}

.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.list-move {
  transition: transform 1s;
}

</style>