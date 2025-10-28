import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import NotFound from "./routes/NotFound";

// 라우터를 렌더링 하자
// 라우터로 URL 경로에 따라서 routers 의 컴포넌트를 보여주자
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<Detail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
