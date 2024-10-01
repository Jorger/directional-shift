// import Editor from "./components/editor";
import Game from "./components/game";
import AppWrapper from "./components/wrapper/app";
import testLevel from "./utils/levels/testLevel";

function App() {
  return (
    <AppWrapper>
      {/* <Editor /> */}
      <Game level={testLevel} />
    </AppWrapper>
  );
}

export default App;
// 227 294
// 134 387
