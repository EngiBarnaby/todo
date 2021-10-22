<template>
  <div class="home container mt-5">
    <add-list @create="createList"/>
    <div class="row justify-content-md-center">
        <div class="col-md-8">
          <list-card v-for="item in getLists" 
            :key="item.id" 
            :item="item"
            @remove="removeList"
            />
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ListCard from "../components/ListCard.vue"
import { mapActions, mapGetters } from "vuex"
import AddList from "../components/AddLists.vue"
export default {
  name: 'Home',

  components : {
    ListCard,
    AddList
  },

  computed : {
    ...mapGetters(["getLists"])
  },

  methods : {
    ...mapActions(["fetchLists", "addList", "deleteList"]),

    createList(list){
      this.addList(list)
    },

    removeList(list){
      this.deleteList(list)
    }
  },

  mounted(){
    this.fetchLists()
  }
}
</script>

