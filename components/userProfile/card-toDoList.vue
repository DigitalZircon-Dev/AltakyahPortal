<template>
  <div class="toDoList">
    <div class="toDo-title">
      ToDo List
    </div>
    <div class="toDo-day">
      Tuesday
    </div>
    <div class="toDo-date">
      29 April 2020
    </div>
    <ul class="todolist-items">
      <li>
        <span class="toDo-item-time">10:30 am</span>
        <span class="toDo-item-title">Meet My Friend</span>
        <a href="#" class="toDo-item-option">
          <img src="~/assets/images/all/todolist-close.svg" alt="" />
        </a>
      </li>
      <li>
        <span class="toDo-item-time">10:30 am</span>
        <span class="toDo-item-title">Meet My Friend</span>
        <a href="#" class="toDo-item-option">
          <img src="~/assets/images/all/todolist-close.svg" alt="" />
        </a>
      </li>
    </ul>
    <a href="#" class="todolist-action">
      <img src="~/assets/images/all/todoList-add.svg" alt="" />
      ADD NOTE HERE
    </a>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'cardToDoList'
}
</script>
