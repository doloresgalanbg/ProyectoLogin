import React from "react";
import "./App.css";
import { Formulario } from "./Formulario";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./Home";
import { Ejemplo } from "./Ejemplo";
const Box = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;
const H1 = styled.h1`
  text-align: center;
  margin-top: 40px;
`;
function App() {
  return (
    // <div>
    //   {/* <H1>Proyecto Login </H1>
    //   <Box >
    //     <Formulario />
    //   </Box> */}
    // </div>
      <Router>
        <Routes>
          <Route path="/" element={<Formulario />} />
          <Route path="/home" element={<Home />} />
        </Routes>
     
       </Router>
  );
}

export default App;
