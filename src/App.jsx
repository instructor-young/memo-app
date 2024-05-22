import AppWrapper from "./components/AppWrapper";
import MemoEditor from "./components/MemoEditor";
import MemoList from "./components/MemoList";
import { GlobalStyle } from "./styles/global";
import "./styles/index.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <MemoList />
        <MemoEditor />
      </AppWrapper>
    </>
  );
}

export default App;
