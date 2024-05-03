import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Carousel,CarouselItem } from "react-bootstrap"
let Navbar=()=>{
    let[id,updateid]=useState()
    let sub=(event)=>{

        updateid(event.target.value)
        
    }
    let na=useNavigate()
    let x=useNavigate()
    let submitHandler=(event)=>{
        event.preventDefault();
        na('/One',{state:id})
        window.location.reload()
        // na(0)
    }
    // let cl=()=>{
    //     window.location.reload();
    // }
    return <>
    <nav className="navbar bg-dark navbar-dark navbar-expand-lg">
    <div className="container">
        <Link to="/home" className="navbar-brand" >MySite</Link>
        
        <form className="frm1"  role="search" onSubmit={submitHandler}>
          <label for="search">Search for stuff</label>
          <input onInput={sub} className="input input1 ipt1" id="search" name="x" type="number" placeholder="Search product by id..." autofocus required />
          <button  className="bbtn bbtn1" type="submit">Go</button>    
        </form>

        <div className="ml-auto">
        <ul className="navbar-nav">
            <Link to="/allproduct" className="nav-link"><li>AllProducts</li></Link>
            <Link to="/Addproduct" className="nav-link"><li>AddProducts</li></Link>
            <Link to="/updateproduct" className="nav-link"><li>UpdateProducts</li></Link>
            <Link to="/deleteproduct" className="nav-link"><li>DeleteProducts</li></Link>
            <Link to="/contact" className="nav-link"><li>Contact</li></Link>
        </ul>
        </div>
        </div>
    </nav>

    </>
}
export default Navbar