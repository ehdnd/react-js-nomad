import { useState, useEffect } from "react";

import Btn from "./Btn";
import styles from "./App.module.css";

function App() {
  const [count, setCount] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setCount((cur) => cur + 1);
  const onChange = (event) => setKeyword(event.target.value);

  console.log("run everythime");
  useEffect(() => console.log("API call"), []);

  // keyword 가 바뀔 때에만 이 코드를 호출
  // 즉 counter 변화할 때에는 이 코드 호출 안함
  useEffect(() => {
    if (keyword && keyword.length > 5) console.log("search for:", keyword);
  }, [keyword]);

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
