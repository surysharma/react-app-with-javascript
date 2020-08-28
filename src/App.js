import React, {Fragment, Component} from 'react';
import TopHead from './component/TopHead'
import TodoEntry from "./component/TodoEntry";
import TodoList from "./component/TodoList";
import TodoListFn from "./component/TodoListFn";
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [{id: 1, item: ''}],
            latestTodoItem: ''
        }
    }

    todoEntryHandler = (event) => {
        this.setState({latestTodoItem:event.target.value})
    }

    todoSubmitHandler = () => {
        console.log('Submit value...')
        const updatedItems = [...this.state.items]
        updatedItems.push({id: Math.floor(Math.random() * 100), item: this.state.latestTodoItem})
        this.setState({items: updatedItems})
    }


    deleteHandler = (id, item) => {
        console.log(`Delete event clicked...id:${id}, item:${item} `)
        const reminderList = this.state.items.filter(it => it.id !== id)
        console.log("remaining list")
        console.log(reminderList)
        this.setState({items:reminderList})
    }

    render() {
    return <Fragment>
                <TopHead/>
                <TodoEntry inputEntry={this.todoEntryHandler} submitEntry={this.todoSubmitHandler}/>
                <ul><TodoListFn entries={this.state.items} deleteRef = {this.deleteHandler}/></ul>
          </Fragment>
  }

}

export default App;
