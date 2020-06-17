import React from 'react'


const Todo = ({todos,deletetodo}) =>{

    const todosList = todos.length ? (
        todos.map(todo => {
            return(
                <div className="collection-item row" key={todo.id}>
                    <span className="col s4 ">{todo.content}</span>
                    <span className="col s3 center push-s5">
                    <span className="centre">
                        <button className="waves-effect waves-green blue btn "onClick={()=>{deletetodo(todo.id)}}><i className="material-icons right">check</i>Done</button>
                    </span></span>
                </div>
            )
        })
    ) : (
        <p className="center">You have nothing</p>
    ) 
    return(
        <div className="todos collection">
        {todosList}
        </div>
    )
}

export default Todo