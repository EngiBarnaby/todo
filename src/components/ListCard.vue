<template>
    <div class="card text-center text-dark bg-light mb-5">
        <div class="card-header">{{item.name}}</div>
            <div class="card-body">
                <h5 class="card-title">Прогресс </h5>
                <div class="progress">
                    <div class="progress-bar bg-success" role="progressbar" :style="{width: item.completion_progress +'%'}" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"> {{ item.completion_progress }}%</div>
                </div>
            </div>
        <div class="btn-group">
            <button
            class="btn btn-outline-primary"
            @click="$router.push(`/task-list/${item.id}`)"
            >Перейти к задачам
        </button>
        <button 
            class="btn btn-outline-danger"
            @click="$emit('remove', item)"
            >Удалить
        </button>
        </div>
    </div>
</template>

<script>
export default {
    name : "card-list",

    props : {
        item : {
            type : Object,
            required : true
        }
    }
}
</script>

<style scoped>

button {
    display: inline;
}

</style>