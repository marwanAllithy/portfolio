import Aboutme from "./compos/Aboutme";
import Footer from "./compos/Footer";
import Nav from "./compos/Nav";
import Projects from "./compos/Projects";
import Skills from "./compos/Skills";
import Contacts from "./compos/contants";
import Landing from "./compos/Landing";

function App() {
  return (
    <div
      className="App"
      style={{
        overflow: "hidden",
        background: "#171717",
        transition: "300ms",
      }}
    >
      <Nav />
      <Landing />
      <Aboutme />
      <Skills />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
