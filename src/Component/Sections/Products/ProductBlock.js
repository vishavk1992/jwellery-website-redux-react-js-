import axios from "axios";
import { useState ,useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductBlock(){
        const [ Data ,setData] = useState([]);
        const { productId } = useParams();
           console.log(productId + "hello")
 
        // useEffect(()=>{
        //     axios.get("http://localhost:3000/productData.json").then(response => setData(response.data.category))
        //     .catch((error)=> console.log(error))
        // },[]);

        useEffect(()=>{
            const getItems= async()=>{
                const result = await axios.get("http://localhost:3000/productData.json");
                const allItems = result.data;
                const categoryItems = allItems.filter(item => item.catId === productId);
                setData(categoryItems)
            }
            getItems()
        },[productId])
     return(
    <section className="Product-block space">
    <div className="container">
        <div className="Product-info">
            <div className="coll-title">
                <h3>EXCLUSIVE PRODUCT</h3>
                <h2>SPECIAL PRODUCT</h2>
                <h3>ON SALE NEW ARIVAL</h3>
            </div>
            <div class="collection-list">
                       {Data.map((item)=>
                        <div class="collection-row">
                            <div class="coll-image">
                                <div class="picture">
                                    <img src={item.image}/>
                                </div>
                                <div class="image-content">
                                    <ul>
                                        <li><a href=""><i class="fas fa-cart-plus"></i></a></li>
                                        <li><a href=""><i class="far fa-heart"></i></a></li> 
                                        <li><a href=""><i class="fas fa-search"></i></a></li> 
                                        <li><a href=""><i class="fas fa-spinner"></i></a></li>    
                                    </ul>
                                </div>
                                <div class="sale-offer">
                                    <span class="label1">New</span>
                                    <span class="label2">On sale</span>
                                </div>
                            </div>    
                            <div class="coll-content">
                                <a href=""><h4>{item.title}</h4></a>
                                <h3>${item.price}</h3>
                            </div>          
                        </div>
                        )}
                </div>          
        </div>
    </div>        
</section>
);
}
export default ProductBlock;