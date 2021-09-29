import React, { useState } from 'react'
import Todo from './Todo';
import formStyle from './formStyle.module.css'
import Form from './Form';

/**
 * Part 1: Generate list (See generate-todo-list-solution-1 )
 * - generats a list from todos array below, with the array-method .map() 
 * - Refactor the code for listItems, into a new child component, may call it 'Todo'
 * - Add a key to every listItem
 *
 * Part 2: Form for adding new todo-items 
 * - Add a form with input field and a button
 * - Create a new state 'task' with default value '', that will be used for the controlled input field
 * - Create a new function handleChange(), that will be used for the controlled input field
 * - Add an onChange event on the controlled input field, that calls the method handleChange()
 * - Add an onSubmit event on the form, that calls the already defined method handleSubmit()
 * 
 * Part 3: Styling
 * - Style the app, using CSS modules
 * 
 * Part 4 (hard): Refactor form
 * - Refactor the code for the form, into a new child component
 * 
 * 
 * NOTE! Dont forget to add 'TodoApp' to App.js
 */




function TodoApp() {
    const defaultTodos = [
        {id: 1, task: 'Syssla 1'},
        {id: 2, task: 'Syssla 2'},
        {id: 3, task: 'Syssla 3'},
        {id: 4, task: 'Syssla 4'},
        {id: 5, task: 'Syssla 5'}
    ]
    const [todos, setTodos] = useState(defaultTodos);
    // const [task, setTask] = useState('');

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     // NOTE! Not the best way to generate a unique ID. 
    //     // There are libraries that are more suitable for this job
    //     const randomId = Math.random() * 1000;

    //     const newTodo = {id: randomId, task: task};

    //     // Using the spread operator to add a new element to an array, 
    //     // because its not allowed to change the state directly
    //     // The spread operator returns a new array instead of changing the original one
    //     setTodos([
    //         ...todos,
    //         newTodo
    //     ])
    // }

    // const handleChange = (e) => {
    //     setTask(e.target.value);
    // }


    const addTodo = (newTodo) => {
        setTodos([
            ...todos,
            newTodo
        ])
    }

    return (
        <div className={formStyle.wrapper}>
            {/* <form onSubmit={handleSubmit}>
                <input type="text" value={task} onChange={handleChange} />
                <button>Add</button>
            </form> */}

            <Form addTodo={addTodo} />
            
            <ul>
                {
                    todos.map( (todo) => {
                        return <Todo key={todo.id} task={todo.task} />
                    })
                }
            </ul>
        </div>
    )
}

export default TodoApp












/**
 * Exercieses
 * 
 * Part 1: Delete Btn
 * - Add a delete button for every todo item
 * - Add a click eventlistener on the button, that deletes the todo item from the list
 * 
 * Part 2: Complete Btn
 * - Add a Complete button for every todo item
 * - Add a click eventlistener on the button, that marks the todo item as completed ( HINT: add a new parameter "completed" that is set to either true/false)
 * 
 * Part 3: Complete List
 * - Add a new list (Färdiga), underneath the UnCompleted list (Att göra)
 * - Add a header "Färdiga", for the new list
 * - Add the id "completed-list", for the new list
 * - Make sure only the completed todo items are displayed in the new completed list
 * - Make sure only the uncompled todo items are displayed in the incompleded list
 * - (HARD) Accomplish all the steps in "Part 3", Without creating a new component like it was done for the uncomplete list. Rather use the same existing component "TodoList.js" to render both lists. This is accomplished by refactoring "TodoList.js" with props and conditional rendering
 * 
 * Part 4: Layout
 * - Add a header section to App.js, through a child component
 * - Add a footer section to App.js, through a child component
 * 
 * Part 5: Styling
 * - Style the Todo app with CSS modules
 * 
 * Extra
 * - Add a reset button, that clears the two lists from all todo items
 */
