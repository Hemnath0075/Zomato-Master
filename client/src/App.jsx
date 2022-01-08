import './App.css';


// importing layouts
import HomeLayoutHOC from "./HOC/Homepage.hoc"
  

// importing pages
import HomePage from "./Pages/HomePage";


function App() {
  return (
    <>
      <HomeLayoutHOC component={HomePage} path="/"/>
    </>
  )
}

export default App;
