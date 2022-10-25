import GlobalStyle from "./styles/global";
import { Form } from "./components/Form";
import { Grid } from "./components/Grid";
import {Navbar} from "./components/Navbar";
import { Route, Routes , BrowserRouter} from "react-router-dom";
import  {ThemeProvider} from 'styled-components'
import { darkTheme } from "./themes";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function App() {
  const [tasks, setTasks] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getTasks = async () => {
    try {
      const res = await axios.get("http://localhost:3333/task");
      setTasks(res.data);
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getTasks();
  }, [setTasks]);

  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Grid />} />
            <Route path="/account" element={<Form />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
