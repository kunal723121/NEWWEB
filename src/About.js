import { Link } from "react-router-dom"
let About=()=>{
    return <>
    <div className="container">
        <div className="row">
            <div className="mt-3 col-12">
                <h3>This is e-Commerce website, where you cn buy all the latest design product on discounted price.</h3>
                <h3>Click <Link to="/allproduct">here</Link> to see the latest collections</h3>
            </div>
        </div>
    </div>
    </>
}
export default About