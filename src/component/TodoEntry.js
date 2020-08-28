import React, {Component} from 'react'

class TodoEntry extends Component {
    render() {
        return <div>
            <input type="text" onChange={this.props.inputEntry}/>
            <button onClick={this.props.submitEntry}>Submit</button>
        </div>
    }
}

export default TodoEntry;