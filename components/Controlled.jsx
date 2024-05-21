import { useState } from "react";

const Controlled = () => {
  //   const [title, setTitle] = useState("Todo #01");
  //   const [description, setDescription] = useState("Description #01");
  //   const [state, setState] = useState("pending");

  const [todo, setTodo] = useState({
    title: "Todo #01",
    description: "Description #01",
    state: "pending",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(todo.title, todo.description, todo.state);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Write a todo"
        className="form-control mb-2"
        name="title"
        value={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      />

      <textarea
        className="form-control mb-2"
        placeholder="Write description"
        name="description"
        value={todo.description}
        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
      />

      <select
        className="form-select mb-2"
        name="state"
        value={todo.state}
        onChange={(e) => setTodo({ ...todo, state: e.target.value })}
      >
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>

      <button type="submit" className="btn btn-primary">
        Process
      </button>
    </form>
  );
};

export default Controlled;
