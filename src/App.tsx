import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/pages/home";
import ManagementEmployee from "./components/pages/Management Employee";
import Header from "./components/pages/header";
import Footer from "./components/pages/footer";
import AllEmployees from "./components/pages/All Employees";
import styled from 'styled-components';
import { Provider } from "react-redux";
import { store } from "./redux/store";
import AddEmployee from "./components/pages/add Employee";
import ModalEror from "./components/global components/modal error/index";

const Container = styled.div`
display: flex;
justify-content: center;
align-content: flex-start;
flex-wrap: wrap;
width: 100%;
height: 100vh;
`;


function App() {

  return (
    <Provider store={store}>
      <Container>
        <ModalEror />
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AllEmployees" element={<AllEmployees />} />
            <Route path="/ManagementEmployee" element={<ManagementEmployee />} />
            <Route path="/AddEmployee" element={<AddEmployee />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Container>
    </Provider>

  );
}

export default App;
