import "./App.css";
import CircularProgressComp from "./pages/CircularProgress";
import { createTheme } from "./theme/createTheme";
import { ThemeProvider } from "./theme/ThemeProvider";

const customTheme = createTheme("light");

function App() {
  return (
    <ThemeProvider theme={customTheme}>

      <div className="App">
        <div style={{
          margin:30
        }}>
          <CircularProgressComp/>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
