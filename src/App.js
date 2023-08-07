import './App.scss';
import { Header } from "./components/header/Header";
import Description from "./components/description/Description";

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="main">
        <Description />
      </div>
    </div>
  );
}

export default App;
