import Axios from "axios"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

let One=()=>{
    let un=useLocation()
    let[ax,upax]=useState({})
    console.log(un.state);
    useEffect(()=>{
        Axios.get(`https://fakestoreapi.com/products/${un.state}`).then(res=>{
            upax(res.data);
        })
    })
    return <>
    {/* <pre>{JSON.stringify(ax)}</pre> */}
    <div className="container">
        <div className="Row">
        {
            Object.keys(ax).length > 0 ?  <>
             <div className="col-12">
                <div className="card-header">
                    <img height="300px" src={ax.image}/>
                </div>
                <div className="card-body">
                    <h5>ID:{ax.id}</h5>
                    
                    <h5>PRICE:{ax.price}$</h5>
                    <h5>TITLE:{ax.title}</h5>
                    <h5>DETAILS:{ax.description}</h5>
                </div>
            </div>
            
            </> : <h1>No data</h1>
        } 

           


        </div>
    </div>
    </>
}
export default One