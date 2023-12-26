import GlobalStyles from "./GlobalStyles";
import Header from "./Header";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";


function App() {
  return (
    <AppWrap>
      <>
      <GlobalStyles/>
      <Header/>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </Router>
      </>
    </AppWrap>
  );
}

const AppWrap = styled.div`
`

export default App;
