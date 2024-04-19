import { useState ,useEffect } from "react";
import {FaCartPlus , FaHeart,FaSearch ,FaSpinner} from "react-icons/fa";
import axios from "axios";
import { Link, Outlet } from "react-router-dom";

function CollectionList(){
    const [ colData ,setData] = useState([]);

    useEffect(()=>{
        axios.get('MycollData.json').then(response => setData(response.data.category))
        .catch((error)=> console.log(error))
    },[]);

    return(
        <section className="collection-block space">
            <div className="container">
                <div className="collection-info">               
                    <div class="coll-title">
                        <h3>SPECIAL OFFER</h3>
                        <h2>TOP COLLECTION</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s</p>
                    </div>
                    <div class="collection-list">
                    {colData.map((item)=>{
                        const {id,image,title ,price } =item
                        return(

                        <div key ={id}className="collection-row">
                            <div class="coll-image">
                               <Link to={`/productdetail/${id}`}>
                                 <img src={image} alt="images"/></Link>
                                <div class="image-content">
                                    <ul>
                                    <li><a href=""><FaCartPlus/></a></li>
                                    <li><a href=""><FaHeart/></a></li> 
                                    <li><a href=""><FaSearch/></a></li> 
                                    <li><a href=""><FaSpinner/></a></li>    
                                    </ul>
                                </div>
                                
                            </div>    
                            <div class="coll-content">
                                <h4>{title}</h4>
                                <h3>{price}</h3>
                            </div>
                        </div>
                     ) }  )}
                    </div>
                
                </div>
            </div> 
            <Outlet/>       
        </section>

    )
}
export default CollectionList;