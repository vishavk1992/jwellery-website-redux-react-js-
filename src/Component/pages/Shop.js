import '../CSS/Shop.css';
import { useState , useEffect } from 'react';
import axios from 'axios';
import CategoryList from '../Sections/CategoryList';
import { useParams } from 'react-router-dom';
import { useDispatch , useSelector } from 'react-redux';
import { addToCart} from '../../Features/Counter/CartSlice';



function Shop() {
const [data , setData] = useState([]);
const { shopId } = useParams();
// console.log(shopId + "hello")

const dispatch = useDispatch()
const {cart} = useSelector(state=>state)



const handleCart =(prod)=>{
   dispatch(addToCart(prod));
}

  
useEffect(()=>{
  const getItems= async()=>{
      const result = await axios.get("http://localhost:3000/productData.json");
      const allItems = result.data;
      if(shopId){
      const categoryItems = allItems.filter((item) => {
        return item.catId === shopId })
        setData(categoryItems)
      }
     else{
         return setData(allItems) 
        }
        }  
        getItems() 
  },[shopId]);
   
  return (
    <section>
      <div className="container">
        <div class="Title">
          <h2>CATEGORY LIST</h2>
          <CategoryList/>
        </div>
        <div className="row-mt-5">
          <div className="col-md-3">
            <h3>List</h3>
          </div>
          <div className="col-md-9">
            <div className="roww-card"> 
              <div className="col-md-4" >
              {data.map((value)=>
                <div className="card" key={value.id}>
                  <img className="card-img-top" src={value.image} alt="ring"/>
                    <span>Price: ${value.price}</span>
                    <div className="card-body">
                      <h5 className="card-title">{value.title}</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      
                      {
                        cart.cart.find(item=>item.id === value.id) ? <div><button>Allready added</button></div> : <button className="btn btn-primary" onClick={()=>handleCart(value)}>Add To Cart </button>
                      }  
                    </div>
                </div>
              )}
              </div> 
                  
            </div> 
              
          </div>    
        </div>
      </div>
    </section>
  )
}
export default Shop;