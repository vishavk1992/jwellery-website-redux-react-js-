import './App.css';
import { BrowserRouter, Routes,Route} from 'react-router-dom';
import Header from './Component/Sections/Header';
import Home from './Component/pages/Home';
import Login from './Component/pages/Login';
import Product from './Component/pages/Product';
import AboutUs from './Component/pages/AboutUs';
import CartItem from './Component/pages/CartItem';
import Footer from './Component/Sections/Footer';
import ProductDetail from './Component/Sections/ProductDetail';
import CollectionList from './Component/Sections/CollectionList';
import ProductBlock from './Component/Sections/Products/ProductBlock'
import Shop from './Component/pages/Shop';

function App() {
  return (
    <div className="App">  
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Header/>}>
          <Route index element={<Home/>}/>
          <Route path="/cart" element={<CartItem/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/product" element={<Product/>} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/product/:productId" element={<ProductBlock/>} /> 
          <Route path="/collection" element={<CollectionList/>} />               
          <Route path="/productdetail/:id" element={<ProductDetail/>} />
          <Route path="/productdetail" element={<ProductDetail/>} />
          <Route path="/shop/:shopId" element={<Shop/>} />
          <Route path="/shop" element={<Shop/>} />
        </Route> 
      </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
  );
};

export default App;
