<template>
  <div class="input-box shadow">
    <input type="text" v-model="newTodo" v-on:keyup.enter="addTodo"/>

    <span class="todo-input-container" v-on:click="addTodo">
      <i class="add-button fas fa-plus" aria-hidden="true"></i>
    </span>

    <Modal v-if="showModal" v-on:close="showModal = false">
      <h3 slot="header">
        경고
        <i class="fa fa-times" aria-hidden="true" v-on:click="showModal = false"></i>
      </h3>

      <h4 slot="body">
        할 일을 입력해주세요.
      </h4>

      <p slot="footer">
        copy right. changhwan-sin
      </p>
    </Modal>
  </div>
</template>

<script>
  import { mapMutations } from "vuex";
  import Modal from "./common/Modal.vue";

  const EMPTY = "";

  export default {
    data() {
      return {
        newTodo: EMPTY,
        showModal: false
      }
    },
    methods: {
      ...mapMutations(["addTodoItem"]),

      addTodo() {
        if (this.newTodo === EMPTY) {
          this.showModal = !this.showModal;

        } else {
          this.addTodoItem(this.newTodo);
          this.clearInput();
        }
      },
      clearInput() {
        this.newTodo = EMPTY;
      }
    },
    components: {
      Modal
    }
  }
</script>

<style scoped>
  input:focus {
    outline: none;
  }

  .input-box {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
  }

  .input-box input {
    border-style: none;
    font-size: 0.9rem;
  }

  .todo-input-container {
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
  }

  .add-button {
    color: white;
    vertical-align: middle;
  }
</style>
