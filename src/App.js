import React , {Component} from 'react';
import Todo from './Todos'
import AddTodo from './addtodo'


class App extends Component {

  state = {
    todos: [
      {id:1,content:'Watch some movies'},
      {id:2 , content:'Play games on PC'}
    ]
  }
deleteTodo = (id) =>{
  const todos = this.state.todos.filter(todo => {
    return todo.id !== id
  })
  this.setState({
    todos:todos 
  })
  console.log('Deleted: '+ id)
}
addtodo = (todo) =>{
  todo.id = Math.floor((new Date().getTime())*(Math.random()));
  
  
  let todolist = [...this.state.todos,todo] ;
  this.setState({
    todos:todolist
  })
}
render(){
  return (
    <div className="todoapp container">
     <h1 className = 'center blue-text'> Todo's (Made by Niket Kulkarni in React)</h1>
     <Todo todos={this.state.todos} deletetodo = {this.deleteTodo}/>
    <AddTodo addtodo={this.addtodo}/>
    </div>
  );}
}

export default App;
