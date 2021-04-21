import "./App.css";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import readingTime from "reading-time";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    background: "black",
  },
  input: {
    color: "white",
  },
};

const App = (props) => {
  const { classes } = props;
  let [readtime, setReadTime] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        <TextField
          style={{ width: "85%" }}
          // id="outlined-multiline-static"
          // label="Multiline"
          multiline
          onChange={(e) => {
            e.persist();
            const stats = readingTime(e.target.value);
            setReadTime(stats.text);
          }}
          InputProps={{
            className: classes.input,
          }}
          rows={25}
          color={"secondary"}
          // defaultValue="Default Value"
          // variant="outlined"
        />
        <div>{readtime}</div>
      </header>
    </div>
  );
};

export default withStyles(styles)(App);
