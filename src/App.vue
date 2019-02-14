<template>
  <div id="app">
    <input type="text" v-model='todo' @keydown="doAdd($event)" />
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
  export default {
    name: 'app',
    data() {
      return {
        todo: '',
        list: [{}]
      }
    },
    methods: {
      doAdd(e) {
        //  1.获取文本框的值
        //  2.把文本框的值push到list中
        if (e.key === "Enter" || e instanceof(MouseEvent)) {
          let todo = {title: this.todo, finished: false};
          this.list.push(todo);
        }
      },
      removeTodo(key) {
        console.log("删除todo");
        this.list.pop(key);
      },
      doFinishTodo(e) {
        console.log(e);
        this.list[e].finished = true;
      }

    },
  }
</script>


<style>

</style>
