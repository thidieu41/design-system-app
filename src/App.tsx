import "./App.css";
// import AccordionComp from "./pages/Accordion";
import PaginationComp from "./pages/Pagination";
// import ButtonPage from "./pages/Button";
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
          {/* <AccordionComp /> */}
          <PaginationComp/>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
