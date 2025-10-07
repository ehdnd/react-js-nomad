import { useState, useEffect } from "react";

import Btn from "./Btn";
import styles from "./App.module.css";

function App() {
  const [count, setCount] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setCount((cur) => cur + 1);
  const onChange = (event) => setKeyword(event.target.value);

  console.log("run");
  console.log("search API call:", keyword);

  return (
    <div>
      <input type="text" onChange={onChange} />
      <h1 className={styles.title}>{keyword}</h1>
      <Btn text={"Search"}></Btn>
      <h1 className={styles.title}>{count}</h1>
      <Btn text={"countup"} onClick={onClick}></Btn>
    </div>
  );
}

export default App;
