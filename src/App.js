import React  from "react";
import "./App.css";
import{
  Routes,
  Route,
  RouterProvider,
} from "react-router-dom"; 
import Login from "./pages/Login"
import  Signup from "./pages/Signup"

 import routes from "./routes";



function App() {
  return (
    <>
      <RouterProvider router={routes} />
      </>
  );
}
 
export default App;
