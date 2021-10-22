<template>
    <div>
        <div class="input-group mb-3">
            <button class="btn btn-outline-primary" 
                @click="createList"
                type="button" 
                id="button-addon1">Добавить список</button>
            <input type="text" 
                class="form-control" 
                v-model="name"
                placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1">
        </div>
    </div>
</template>

<script>
export default {
    
    data(){
        return {
            name : ''
        }
    },

    methods : {
        createList(){
            this.$emit("create", {"name" : this.name})
            this.name = ""
        }
    }

}
</script>