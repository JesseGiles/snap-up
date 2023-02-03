import logo from "./favicon.ico";
import "./App.css";

import FlippableCard from "./components/flippable-card";
import FlippableCard2 from "./components/flippable-card2";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br></br>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Play Snap-up
        </a>
      </header>
      <FlippableCard />
      <FlippableCard2 />
    </div>
  );
}

export default App;
