import React, { Component } from "react"

class TodoItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            done: props.item.done
        }
    }

    toggleDone = () => {
        fetch(`http://localhost:5000/todo/${this.props.item.id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                done: !this.state.done
            })
        })
        .then(
            this.setState({

            })
        )
        .catch(error => console.log("toggleDone Error: ", error))
    }

    render() {
        console.log(this.props)
        return(
            <div className="todo-item">
                <div className="todo-item">
                    <input
                        type="checkbox" 
                        defaultChecked={this.state.done}
                        onClick={this.toggleDone}
                    />
                    <p className={this.state.done}>
                        {this.props.item.title}
                    </p>
                    <button onClick={() => this.props.deleteItem(this.props.item.id)}>X</button>
                </div>
            </div>
        )
    }
}

export default TodoItem