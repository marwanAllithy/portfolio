import Nav from "./compos/Nav";
import { lazy, Suspense } from "react";
import Landing from "./compos/Landing";
const Aboutme = lazy(() => import("./compos/Aboutme"));
const Skills = lazy(() => import("./compos/Skills"));
const Projects = lazy(() => import("./compos/Projects"));
const Contacts = lazy(() => import("./compos/contants"));
const Footer = lazy(() => import("./compos/Footer"));
function App() {
  const renderLoader = () => <p>Loading</p>;
  return (
    <div className="App">
      <Nav />
      <Suspense fallback={renderLoader()}>
        <Landing />
        <Aboutme />
        <Skills />
        <Projects />
        <Contacts />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
