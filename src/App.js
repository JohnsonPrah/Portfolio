import About from "./About";
import Contact from "./Contact";
import Header from "./Header";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Footer from "./Footer";

function App() {
  return (
    <div className="bg-slate-900 overflow-x-hidden">
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
