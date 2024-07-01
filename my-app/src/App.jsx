import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import { ThemeContext, CounterContext } from './components/ThemeContext.js';
import Counter from './components/Counter';
import Products from './components/Products.jsx';
import { Outlet } from 'react-router-dom';


function App() {
  const [theme, setTheme] = useState("Light");
  const[count,setCount]=useState(0);
  const toggleTheme = () => {
    theme == "Light" ? setTheme("Dark") : setTheme("Light")
    setCount(count+1)
  }
 const increment=()=>{
  setCount(count+1);
 }
  useEffect(() => {
    document.body.className = theme
    document.body.backgroundColor = theme === "Light"? '#ffffff' : '#333333'
  },[theme])
  return (
    <>
     <Header/>
     <Outlet/>
    </>
  )
}

export default App
