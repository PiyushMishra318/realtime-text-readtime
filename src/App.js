import logo from './logo.svg';
import './App.css';
import TextField from "@material-ui/core/TextField";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <TextField
          // id="outlined-multiline-static"
          // label="Multiline"
          multiline
          // rows={4}
          // defaultValue="Default Value"
          // variant="outlined"
        />
      </header>
    </div>
  );
}

export default App;
