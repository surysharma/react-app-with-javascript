import React from 'react'

const TodoListFn = (props) => {
        return props.entries.filter(it => it.item !== '').map(it =>
            <li key={it.id}>{it.item} <button onClick={props.deleteRef.bind(this, it.id, it.item)}>Delete</button></li>
        )}

export default TodoListFn;