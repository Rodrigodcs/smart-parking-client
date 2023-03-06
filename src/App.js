import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ParkingPage from "./pages/ParkingPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import GlobalStyle from './styles/GlobalStyle';
import UserContext from "./contexts/UserContext"

function App() {
    const [userContextInfo, setUserContextInfo] = useState(
        JSON.parse(localStorage.getItem('smartParkingUserInfo'))!==null?
            JSON.parse(localStorage.getItem('smartParkingUserInfo')):
            ""
    );
    
  return (
    <UserContext.Provider value={{userContextInfo, setUserContextInfo}}>
        <GlobalStyle />
        <BrowserRouter>
            <Routes>
                <Route path="/cadastro" element={<SignUpPage />} />
                <Route path="/" element={userContextInfo.token ? <Navigate to="/estacionamento" /> : <LoginPage />} />
                <Route path="/estacionamento" element={!userContextInfo.token  ? <Navigate to="/" /> : <ParkingPage />} />
            </Routes>
        </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;