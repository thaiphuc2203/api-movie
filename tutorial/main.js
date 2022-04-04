console.log('thaiphuc', window.Redux)
const { createStore } = window.Redux

initialState = ['learn Redux']

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      const newState = [...state]
      newState.push(action.payload)
      return newState;
    }
    default:
      return state ;
  }
 
}

const store = createStore(todoReducer)


// render todo list 

const renderTodoList = (todoList) => {
  if(!Array.isArray(todoList) || todoList.length === 0) return;
  const ulElement = document.querySelector('#todoListId')
  if(!ulElement) return;
  ulElement.innerHTML = '';
  
  for (const todo of todoList) {
    const liElement = document.createElement('li');
    liElement.textContent = todo;
    ulElement.appendChild(liElement);
  }

}

const initialTodoList = store.getState()
console.log(initialTodoList)
renderTodoList(initialTodoList)


// handle submit todolist 
const todoForm = document.querySelector('#formTodoId')

if (todoForm) {

  const handleFormSubmit = (e) =>{
    e.preventDefault()
    const todoText = document.querySelector("#todoTextId")
    console.log('submit', todoText.value)
    action ={
      type: "ADD_TODO",
      payload:todoText.value
    }
    store.dispatch(action)
    todoForm.reset()
  }
  todoForm.addEventListener('submit', handleFormSubmit);

}


store.subscribe( () => {
  const newToto = store.getState()
  renderTodoList(newToto)
})