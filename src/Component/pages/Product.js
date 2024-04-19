import axios from "axios";
import { useState ,useEffect } from "react";
function Product(){

    const [ Data ,setData] = useState([]);
    const [searchData ,setSearchdata] = useState([])
        useEffect(()=>{
        axios.get("http://localhost:3000/productData.json")
        .then(response =>{ setData(response.data);
        setSearchdata(response.data);
        console.log(response.data)
    })
        
        .catch((error)=> console.log(error))
        },[]);

        const handleFilter =(value)=>{
            const result  =searchData.filter(f=> f.title.toLowerCase().includes(value.toLowerCase()))
            setData(result);
            if(value === ""){
                setData([]);
            }
        }

    return(
        <>
        <section>
        <div className="search-top">
            <div className="search">
                <label>Search : </label>
                <input type="text"  placeholder="type text here...." onChange={e =>handleFilter(e.target.value)}/>
            </div>
            
        </div>
            
        </section>
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
    </>
    );
}
export default Product ;