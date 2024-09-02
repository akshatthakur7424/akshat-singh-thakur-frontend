import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import ImageSliding from "./components/ImageSliding";

function App() {
  return (
    <>
      <NavigationBar /> 
      <ImageSliding/>
    </>
  );
}

export default App;
