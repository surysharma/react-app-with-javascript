import React from 'react'

const TodoListItem = (props) => {
        return <li key={props.id}>{props.item}</li>
}

export default TodoListItem;