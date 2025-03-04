import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { RegistrationPage } from "./pages/Registration/RegistrationPage";

function App() {
  return (
    <>
      <div className="App">
        <div className="container">
          <BrowserRouter>  
          <Routes>
            <Route element={<LoginPage/>} path="/"/>
            <Route element={<RegistrationPage/>} path="/registration-page"/>
            <Route element={<MainPage/>} path="/main-page"/>
            <Route element={<ProfilePage/>} path="/profile-page"/>
          </Routes>   
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
