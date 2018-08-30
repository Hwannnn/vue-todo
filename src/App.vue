<template>
  <div id="app">
    <TodoHeader></TodoHeader>

    <TodoInput v-on:addTodo="addTodoItem"></TodoInput>

    <TodoList v-bind:todoItemList="todoItemList"
              v-on:removeTodo="removeTodoItem"
              v-on:toggleTodoStatus="toggleTodoItemStatus"></TodoList>

    <TodoFooter v-on:clearAllTodo="clearAllTodoItem"></TodoFooter>
  </div>
</template>

<script>
  import TodoHeader from "./components/TodoHeader.vue";
  import TodoInput from "./components/TodoInput.vue";
  import TodoList from "./components/TodoList.vue";
  import TodoFooter from "./components/TodoFooter.vue";

  export default {
    data() {
      return {
        todoItemList: []
      }
    },
    methods: {
      addTodoItem(todoItem) {
        let obj = {
          completed: false,
          item: todoItem
        };

        localStorage.setItem(todoItem, JSON.stringify(obj));
        this.todoItemList.push(obj);
      },
      removeTodoItem(todoItem, index) {
        localStorage.removeItem(todoItem.item);
        this.todoItemList.splice(index, 1);
      },
      toggleTodoItemStatus(todoItem, index) {
        this.todoItemList[index].completed = !this.todoItemList[index].completed;
        localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
      },
      clearAllTodoItem() {
        localStorage.clear();
        this.todoItemList = [];
      }
    },
    created() {
      if (localStorage.length > 0) {
        for (let i = 0; i < localStorage.length; i++) {
          if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
            let obj = JSON.parse(localStorage.getItem(localStorage.key(i)));
            this.todoItemList.push(obj);
          }
        }
      }
    },
    components: {
      TodoHeader,
      TodoInput,
      TodoList,
      TodoFooter
    }
  }
</script>

<style>
  body {
    text-align: center;
    background-color: #F6F6F6;
  }

  input {
    border-style: groove;
    width: 200px;
  }

  button {
    border-style: groove;
  }

  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
  }
</style>
