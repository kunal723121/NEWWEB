import { BrowserRouter, Form, Route, Routes } from "react-router-dom"
import Navbar from "./Navbar"
import Home from "./Home"
import Allproduct from "./Allproduct"
import Contact from "./Contact"
import About from "./About"
import Sign from "./Sign"
import Buy from "./Buy"
import Odet from "./Odet"
import One from "./One"
import Addproduct from "./Addproduct"
let All=()=>{
    return <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="/Allproduct" element={<Allproduct/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Sign/:par/:id" element={<Sign/>} />
        <Route path="/Buy" element={<Buy/>} />
        <Route path="/Odet" element={<Odet/>} />
        <Route path="/One" element={<One/>} />
        <Route path="/Addproduct" element={<Addproduct/>}/>
    </Routes>
    </BrowserRouter>
    </>
}
export default All