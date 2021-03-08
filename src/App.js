import logo from './logo.svg';
import './App.css';
import Header from "../src/components/Header";
import UberTable from "../src/components/UberTable";
import Footer from "../src/components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <UberTable />
      <Footer />
    </div>
  );
}

export default App;
