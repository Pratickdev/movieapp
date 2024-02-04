import "./App.css";
import Lander from "./Lander";
import Head from "./Head";
import Footer from "./Footer";
export default function App() {
  return (
    <>
      <div className="App bodycolor">
        <Head />
        <Lander />
        <Footer />
      </div>
    </>
  );
}
