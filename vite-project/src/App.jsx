import { useState, useEffect } from "react";

import Btn from "./Btn";
import styles from "./App.module.css";

function App() {
  const [count, setCount] = useState(0);
  const plusCount = () => setCount((current) => current + 1);

  const runOnce = () => console.log("call API");
  // 이 코드까지 모두 실행된다. 난 이게 처음 로딩시에만 실행되었으면 함
  // console.log("call API");
  useEffect(runOnce, []);

  return (
    <div>
      <h1 className={styles.title}>{count}</h1>
      <Btn onClick={plusCount} text={"Welcome"}></Btn>
    </div>
  );
}

export default App;
