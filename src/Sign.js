import { useParams } from "react-router-dom"
let Sign=()=>{
    let {par,id}=useParams()
    return <div>
        <h1>hello {par} {id}</h1>
    </div>
}
export default Sign