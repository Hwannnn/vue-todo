import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const storage = {
  fetch() {
    let storageDataList = [];

    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          let obj = JSON.parse(localStorage.getItem(localStorage.key(i)));
          storageDataList.push(obj);
        }
      }
    }

    return storageDataList;
  },
};

export const store = new Vuex.Store({
  state: {
    todoItems: storage.fetch(),
    sum: 0
  },
  getters: {
    getTodoItems(state) {
      return state.todoItems;
    }
  },
  mutations: {
    addTodoItem(state, todoItem) {
      let obj = {
        completed: false,
        item: todoItem
      };

      localStorage.setItem(todoItem, JSON.stringify(obj));
      state.todoItems.push(obj);
    },
    removeTodoItem(state, todoItemInfo) {
      localStorage.removeItem(todoItemInfo.todoItem.item);
      state.todoItems.splice(todoItemInfo.index, 1);
    },
    toggleTodoItemStatus(state, todoItemInfo) {
      state.todoItems[todoItemInfo.index].completed = !state.todoItems[todoItemInfo.index].completed;
      localStorage.setItem(todoItemInfo.todoItem.item, JSON.stringify(todoItemInfo.todoItem));
    },
    clearAllTodoItem(state) {
      localStorage.clear();
      state.todoItems = [];
    }
  }
});
