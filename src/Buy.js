import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { useRef } from "react"
import emailjs from "@emailjs/browser";
let Buy=()=>{
    let a=useLocation()
    let [v,u]=useState({
        qty:1,
        price:a.state.price,
    })
    let ih=()=>{
        u({...v,qty:v.qty+1})
    }
    let dh=()=>{
        u({...v,qty:v.qty-1})
    }
    let n=useNavigate()   
    let sh=()=>{
        n('/Odet')
    }
    return <>
    {/* <h6>{JSON.stringify(a.state)}</h6> */}
    <div className="container">
        <div className="row">
            <div className="col-12">
                <form>
                    <table className="table taable-hover table-striped">
                        <thead className="bg-dark text-white">
                        <tr>
                        <th>Image</th> 
                        <th>Id</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>TotalPrice</th>
                        <th>Buy</th>
                        </tr> 
                        </thead>
                        <tbody>
                            <tr>
                                <td><img width="50px" src={a.state.image} /></td>
                                <td>{a.state.id}</td>
                                <td>{v.price}$</td>
                                <td><i onClick={dh} className="fa fa-minus-circle"/>{v.qty}<i onClick={ih} className="fa fa-plus-circle"/></td>
                                <td>{v.price*v.qty}$</td>
                                <td><button onClick={sh} className="btn btn-primary">Submit</button></td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    </div>
    </>
}
export default Buy