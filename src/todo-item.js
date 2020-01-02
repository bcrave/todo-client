import React, { Component } from "react"

class TodoItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props)
        return(
            <div className="todo-item">
                <div className="todo-item">
                    <input
                        type="checkbox"
                    />
                    <p>{this.props.item.title}</p>
                </div>
            </div>
        )
    }
}

export default TodoItem