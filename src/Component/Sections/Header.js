import { NavLink, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


function Header(){

    const {cart} = useSelector(state=>state)
     console.log(cart)
     
    //  const {cartTotalQuantity} = useSelector(state=>state.cart)

    return(
        <header>
            <div className="top-row">
                <div className="logo">
                    <img src="images/logo.png" alt="logo"/>
                </div>
                <div className="nav-bar">
                    <ul>
                        <li><NavLink exact to="/">Home </NavLink></li>
                        <li><NavLink to="/shop" exact > Shop</NavLink></li>
                        <li><NavLink to="/product" exact >Product</NavLink></li>
                        <li><NavLink to="/about" exact >About Us</NavLink></li>
                    </ul>
                </div> 
                <div className="add-to-cart">
                    <Link to={`/login`}>LOGIN</Link>
                    <Link to={`/cart`}><img src="images/cart.png" alt="cart"/>
                    {cart.cart.length}</Link>

                    {/* <Link to={`/cart`}><img src="images/cart.png" alt="cart"/>
                    {cartTotalQuantity}</Link> */}
                    
                </div>              
            </div> 
            <Outlet/>           
         </header>    
      
    )
}
export default Header;