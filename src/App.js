import List from "./components/List"
import ColorContextProvider from "./contexts/ColorContextProvider"

function App() {
  return (
    <ColorContextProvider>
      <div className="App">
        <List />
      </div>
    </ColorContextProvider>
  );
}

export default App;
