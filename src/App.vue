<template>
  <div id="app">
    <input type="text" ref="todoinput" v-model='todo' @keydown="doAdd($event)" />
    <button @click="doAdd($event)"> 增加</button>
    <br>
    <hr>
    <br>
    <h2>进行中</h2>
    <ul>
      <li v-for="(value,key) in list" v-if="!value.finished">
        <span @click="doFinishTodo(key)"><input type="checkbox" v-model="value.finished" /> {{value.title}}--------</span>
        <button @click="removeTodo(key)">删除</button>
      </li>
    </ul>

    <h2>已完成</h2>
    <ul>
      <li v-for="(value,key) in list" v-if="value.finished">
        <span @click="doFinishTodo(key)"><input type="checkbox" v-model="value.finished" /> {{value.title}}--------</span>
        <button @click="removeTodo(key)">删除</button>
      </li>
    </ul>
  </div>
</template>

<script>
  import storage from './model/storage.js'

  export default {
    name: 'app',
    data() {
      return {
        todo: '',
        list: []
      }
    },
    methods: {
      doAdd(e) {
        if (!this.todo||!e){
          return;
        }
        console.log("增加todo");
        //  1.获取文本框的值
        //  2.把文本框的值push到list中
        if (e.key === "Enter" || e instanceof (MouseEvent)) {
          let todo = {title: this.todo, finished: false};
          this.list.push(todo);
          this.todo = '';
          this.saveTodoList();
        }
      },
      removeTodo(key) {
        console.log("删除todo");
        this.list.pop(key);
        this.saveTodoList();
      },
      doFinishTodo(e) {
        console.log("完成todo");
        this.list[e].finished = !this.list[e].finished;
        this.saveTodoList();
      },
      saveTodoList(){
        //  对数据操作需要加入缓存；
        storage.set("todoList",this.list);
      }

    },
    mounted() {
      // 加载todoList缓存
      this.list = storage.get("todoList") ? storage.get("todoList") : [];
    }
  }
</script>


<style>
  html {
      background-color: #cacaca;
  }
</style>
