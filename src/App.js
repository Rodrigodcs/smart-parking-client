import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ParkingPage from "./pages/ParkingPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import GlobalStyle from './styles/GlobalStyle';
import UserContext from "./contexts/UserContext"

function App() {
    const [userToken, setUserToken] = useState(
        JSON.parse(localStorage.getItem('smartParkingUserToken'))!==null?
            JSON.parse(localStorage.getItem('smartParkingUserToken')):
            ""
    );

  return (
    <UserContext.Provider value={{userToken, setUserToken}}>
        <GlobalStyle />
        <BrowserRouter>
            <Routes>
                <Route path="/cadastro" element={<SignUpPage />} />
                <Route path="/" element={userToken !== "" ? <Navigate to="/estacionamento" /> : <LoginPage />} />
                <Route path="/estacionamento" element={<ParkingPage />} />
            </Routes>
        </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;