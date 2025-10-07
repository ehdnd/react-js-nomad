import { useState, useEffect } from "react";

import Btn from "./Btn";

function Greeting() {
  // Greeting 컴포넌트를 hide == 화면에서 지워버린다
  useEffect(() => {
    console.log("created");
    return () => {
      console.log("deleted");
    };
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [show, setShow] = useState(false);
  const onClick = () => setShow((cur) => !cur);

  return (
    <div>
      {show ? <Greeting> </Greeting> : null}
      <Btn onClick={onClick} text={show ? "Hide" : "Show"}></Btn>
    </div>
  );
}

export default App;
