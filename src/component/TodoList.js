import React, {Component} from 'react'

// TODO: This class based component is not used.
class TodoList extends Component {
    render() {
        return this.props.entries.filter(it => it.item !== '').map(it =>
                <li key={it.id}>{it.item} <button onClick={this.props.deleteRef.bind(this, it.id, it.item)}>Delete</button></li>
            )
    }
}

export default TodoList;