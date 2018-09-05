<template>
  <div class="todo-footer-container">
    <span class="clear-all-button" v-on:click="clearAllTodo">Clear All</span>
  </div>
</template>

<script>
  import { mapMutations } from "vuex";

  export default {
    methods: {
      ...mapMutations({"clearAllTodo": "clearAllTodoItem"})
    }
  }
</script>

<style scoped>
  .todo-footer-container {
    width: 8.5rem;
    height: 50px;
    line-height: 50px;
    background-color: white;
    border-radius: 5px;
    margin: 0 auto;
  }

  .clear-all-button {
    color: #e20303;
    display: block;
  }
</style>
