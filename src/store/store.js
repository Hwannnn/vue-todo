import Vue from "vue";
import Vuex from "vuex";
import Todo from "./modules/todo/todo.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    Todo
  }
});
