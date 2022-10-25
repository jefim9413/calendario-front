
import { Form } from "./components/Form";
import { Grid } from "./components/Grid";
import {Navbar} from "./components/Navbar";
import { Route, Routes , BrowserRouter} from "react-router-dom";
import  {ThemeProvider} from 'styled-components'
import { darkTheme } from "./themes";



function App() {
  
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <Navbar />
          <Routes >
            <Route path="/" element={<Grid />}/>
            <Route path="/form" element={<Form/>} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
