import { useParams } from "react-router-dom";
import axios from "axios";
import { useState ,useEffect } from "react";
import { useSelector ,useDispatch } from "react-redux";
import { addToCart} from '../../Features/Counter/CartSlice';

function ProductDetail(){
    const [ Data ,setData] = useState([]);
    const { id } = useParams();
    console.log(id + "hello")


const dispatch = useDispatch()
const cart = useSelector(state=>state.cart)


const handleCart =(prod)=>{
   dispatch(addToCart(prod));
}

    // useEffect(()=>{
    //     axios.get("http://localhost:3000/MyColldata.json").then(response => setData(response.data.category))
    //     .catch((error)=> console.log(error))
    // },[catId]);

    useEffect(()=>{
        const getItems= async()=>{
            const result = await axios.get("http://localhost:3000/MyColldata.json");
            const allItems = result.data.category;
            const categoryItems = allItems.filter(item => item.id === parseInt(id));
            setData(categoryItems)
        }
        getItems()
    },[id])
    return(
        <div className="coln-1">
         {Data.map((item)=> 
           <div key= {item.id}className="coln-2">
                <div className="coln-detail">
                    <div className="big-image">
                         <img src={item.image} alt="category"/>
                    </div>
                    <div >
                    <h1></h1>
                    </div>
                    <div className="small-img">
                        <img src={item.image} alt="category"/>
                    </div>                 
                </div>      
                     <div className="coln-info">
                        <div className="product-right">
                            <h3>{item.title}</h3>
                            <h4><del>$450</del><span>10% Off</span></h4>
                            <h4>${item.price}</h4>
                            <i class="fas fa-check"></i>
                            <div class="product-desc-border">
                                <div class="product-size">
                                    <p>Select Size</p>
                                    <span><a href="">Size Chart</a></span>
                                </div>
                                <div class="active">
                                    <i class="fas fa-circle"></i>
                                </div>
                                <div class="avalability">
                                    <span>In Stock</span>
                                </div>
                                <div class="quantity-row">
                                    <div class="title">
                                        <h3>Quantity</h3>         
                                    </div>
                                   <div class="input-row">
                                        <div class="input-group">
                                             <button type="button" data-type="minus"><i class="fas fa-chevron-left"></i></button>
                                        </div>
                                        <div class="input-group">
                                         <input type="text" name="quantity" value="1"/>
                                        </div>
                                        <div class="input-group">
                                            <button type="button" data-type="plus"><i class="fas fa-chevron-right"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                <div class="product-buttons">
                                    <button type="button" onClick={()=>handleCart(item)}>ADD TO CART</button>
                                    <button type="button">BUY NOW</button>
                                </div>
                                <div class="border-product">
                                    <div class="product-description">
                                        <h3>Product details</h3>
                                        <p>{item.Description}</p>
                                    </div>
                                </div>
                                <div class="border-product">
                                    <div class="title">
                                        <h3>Share It</h3>
                                    </div>
                                    <div class="media-list">
                                        <ul>
                                            <li><a href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a></li>
                                            <li><a href="https://www.facebook.com/"><i class="fab fa-google-plus-g"></i></a></li>
                                            <li><a href="https://twitter.com/"><i class="fab fa-twitter"></i></a></li>
                                            <li><a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a></li>
                                            <li><a href="https://www.linkedin.com/"><i class="fab fa-linkedin-in"></i></a></li>
                                            <li><a href=""><i class="fas fa-heart"></i> Add To Wishlist</a></li> 
                                        </ul>
                                    </div>
                                </div>
                                    <div class="border-product">
                                        <div class="title">
                                            <h3>Time Reminder</h3>
                                        </div>
                                        <div class="time-detail">
                                            <p>
                                            <span>
                                                    <span class="timer-num">112</span>
                                                    <span class="padding-1">:</span>
                                                    <span class="timer-cal">Days</span>
                                                </span>
                                                <span>
                                                    <span class="timer-num">0</span>
                                                    <span class="padding-1">:</span>
                                                    <span class="timer-cal">Hrs</span>
                                                </span>
                                                <span>
                                                    <span class="timer-num">7</span>
                                                    <span class="padding-1">:</span>
                                                    <span class="timer-cal">Min</span>
                                                </span>
                                                <span>
                                                    <span class="timer-num">32</span>
                                                    <span class="padding-1">:</span>
                                                    <span class="timer-cal">Sec</span>
                                                </span>
                                               </p>
                                        </div>
                                    </div>                                                      
                                 </div>
                               
                            </div>
                      
                        </div>
         )}
                    </div>

           
    );
}
export default ProductDetail;