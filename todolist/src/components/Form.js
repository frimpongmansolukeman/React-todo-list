import React, {useState} from 'react'

function Form(props) {
    const [task, setTask] = useState('');

    const handleChange = (e) => {
        setTask(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // NOTE! Not the best way to generate a unique ID. 
        // There are libraries that are more suitable for this job
        const randomId = Math.random() * 1000;

        const newTodo = {id: randomId, task: task};

        // Using the spread operator to add a new element to an array, 
        // because its not allowed to change the state directly
        // The spread operator returns a new array instead of changing the original one
        props.addTodo(newTodo);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={task} onChange={handleChange} />
            <button>Add</button>
        </form>
    )
}

export default Form
