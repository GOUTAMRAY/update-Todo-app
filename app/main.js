
const createTodoButton = document.querySelector(".todo .add-new-todo button");
const createTodoInput = document.querySelector(".todo .add-new-todo input");
const todoList = document.querySelector(".todo ul");



// show todo data

const showTodos = () => {
  const todos = getData("todos");

  let content = "";

  todos.forEach((item, index) => {
    content += `<li>
                  <p><i class="fa fa-check"></i> ${item}</p>
                  <button onclick="deleteTodo('${item}')"><i class="fa fa-trash"></i></button>
                </li>`;
  });

  todoList.innerHTML = content;
};

showTodos();



// create todo

createTodoButton.onclick = () =>{
  const todo = createTodoInput.value;


  // todo validation

  if(todo){
      
    insertData("todos" , todo)

     createTodoInput.value = "";
  }else{
    alert("todo must be empty");
  }

 


  showTodos();
};


// update data 

const deleteTodo = (item) => {
  const todos = getData("todos");
  const updateTodos = todos.filter((data) => data != item);

  updateData("todos", updateTodos);

  showTodos();
};











