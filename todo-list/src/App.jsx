import { useState } from "react";

function App() {
  const [toDo, setToDO] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChange = (event) => setToDO(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") return;
    setToDos((curr) => [...curr, toDo]);
    setToDO("");
  };

  return (
    <div>
      <h1>My TODOs: {toDos.length}</h1>

      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="write what you want to do . . ."
          value={toDo}
          onChange={onChange}
        />
        <button>Add ToDo</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
