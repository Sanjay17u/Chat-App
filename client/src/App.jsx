/* eslint-disable no-unused-vars */
import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { useAuth } from "./context/Authprovider";
import Left from "./home/LeftPart/Left";
import Right from "./home/RightPart/Right";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            authUser ? (
              <div className="flex">
                <Left />
                <Right />
              </div>
            ) : (
              <Navigate to={"/login"} />
            )
          }
        />
        <Route path="/login" element= { authUser? <Navigate to={"/"}/> : <Login />} />
        <Route path="/signup" element={ authUser? <Navigate to={"/"}/> : <Signup />} />
      </Routes>
    </>
  );
}

export default App;
