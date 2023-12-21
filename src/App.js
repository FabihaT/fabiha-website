import Navbar from "./components/Navbar/navbar";
import Header from "./components/Header/header";
import About from "./components/About/about";
import Portfolio from "./components/Portfolio/portfolio";
import Education from "./components/Education/education";
import Contact from "./components/Contact/contact";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Education />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
