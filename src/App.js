import './App.scss';
import { Header } from "./components/header/Header";
import Description from "./components/description/Description";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import ContactUs from "./components/contactus/Contactus";

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="main">
        <Description />
        <Experience />
        <Projects />
        <ContactUs />
      </div>
    </div>
  );
}

export default App;
