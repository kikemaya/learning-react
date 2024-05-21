import { useRef, useState } from "react";

const NotControlled = () => {
  const form = useRef(null);

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Capture the data
    const dataOfTheForm = new FormData(form.current);
    const { title, description, state } = Object.fromEntries([
      ...dataOfTheForm.entries(),
    ]);

    // Validattions
    if (!title.trim() || !description.trim() || !state.trim())
      return setError("Fullfill all the fields...");

    // Send the data
    console.log(title, description, state);
  };

  return (
    <form onSubmit={handleSubmit} ref={form}>
      <input
        type="text"
        placeholder="Write a todo"
        className="form-control mb-2"
        name="title"
      />

      <textarea
        className="form-control mb-2"
        placeholder="Write description"
        name="description"
      />

      <select
        className="form-select mb-2"
        name="state"
        defaultValue="completed"
      >
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>

      <button type="submit" className="btn btn-primary">
        Process
      </button>

      {error !== "" && error}
    </form>
  );
};

export default NotControlled;
