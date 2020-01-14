import React, { useState } from "react";

function TodoItem(props) {
  const [done, setDone] = useState(props.item.done);

  const toggleDone = () => {
    fetch(`https://bac-todo-api.herokuapp.com/todo/${props.item.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        done: !done
      })
    })
      .then(setDone(!done))
      .catch((error) => console.log("toggleDone Error: ", error));
  };

  return (
    <div className="todo-item">
      <div className="todo-item">
        <input type="checkbox" defaultChecked={done} onClick={toggleDone} />
        <p className={done ? "done" : null}>{props.item.title}</p>
        <button onClick={() => props.deleteItem(props.item.id)}>X</button>
      </div>
    </div>
  );
}

export default TodoItem;
