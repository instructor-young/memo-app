import { Provider } from "react-redux";
import AppWrapper from "./components/AppWrapper";
import MemoEditor from "./components/MemoEditor";
import MemoList from "./components/MemoList";
import store from "./redux/store";
import { GlobalStyle } from "./styles/global";
import "./styles/index.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <AppWrapper>
          <MemoList />
          <MemoEditor />
        </AppWrapper>
      </Provider>
    </>
  );
}

export default App;
