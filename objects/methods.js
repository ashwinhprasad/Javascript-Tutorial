let todo = {

  totalTasks:0,
  tasksDone:0,
  tasksLeft:0,

  addTask : function(num) {
    this.totalTasks += num;
    this.tasksLeft += num;
  },

  completeTask : function(num) {
    this.tasksDone = num;
    this.tasksLeft = this.totalTasks - this.tasksDone;
  },

  summary : function(){
    return `You have ${this.tasksLeft} tasks left`
  }

}


todo.addTask(5);
todo.completeTask(2);
console.log(todo.summary());
