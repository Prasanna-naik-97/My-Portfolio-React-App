import './App.scss';
import { Header } from "./components/header/Header";
import Description from "./components/description/Description";
import Experience from "./components/experience/Experience";

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="main">
        <Description />
        <Experience />
      </div>
    </div>
  );
}

export default App;
