import { useEffect } from "react"
import { useState } from "react"
import  Axios  from "axios"
import { useNavigate } from "react-router-dom"
import Buy from "./Buy"
let Allproduct=()=>{
    let [st,upst]=useState([])
    useEffect(()=>{
        Axios.get('https://fakestoreapi.com/products').then((res)=>{
            upst(res.data)
        }).catch();
    })
    let navi=useNavigate()
    let sh=(data)=>{
        navi('/Buy',{state:data})
        // alert(data.image)
        }
    return <>
    {/* <pre>{JSON.stringify(st)}</pre> */}
    <div className="container">
        <div className="row">
            {
                st.map((x)=>{
                    return <div className="col-12">
                        <div className="card-header">
                        <img width="200px" src={x.image}/>
                        </div>
                        <div className="card-body">
                        <h6>Id:{x.id}</h6>
                        <h6>Price:{x.price}$</h6>
                        <h6>Category:{x.category}</h6>
                        <h6>About:{x.description}</h6>
                        <button className="btn btn-primary" onClick={sh.bind(null,x)}>Buy</button>
                        </div>
                        </div>
                })
            }
        </div>
    </div>
    </>
}
export default Allproduct