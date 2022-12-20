import {BrowserRouter, Route, Routes} from "react-router-dom";


import NavBar from "./components/NavBar";
import Schedule from "./pages/Schedule";
import Me from "./pages/Me";
import Contact from "./pages/Contact";


function App() {
  return (
      <BrowserRouter>
          <NavBar/>
          <Routes>
              <Route path={"schedule"} element={<Schedule/>}/>
              <Route path={"*"} element={<Schedule/>}/>
              <Route path={"me"} element={<Me/>}/>
              <Route path={"contact"} element={<Contact/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
