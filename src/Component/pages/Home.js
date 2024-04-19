import BannerBlock from "../Sections/BannerBlock";
import CategoryList from "../Sections/CategoryList";
import CollectionList from "../Sections/CollectionList";
import { Outlet } from "react-router-dom";
import Carousel from "../Sections/Slider/Carousel";
import '../CSS/Carousel.css';



function Home(){
   return(
    <>
      <BannerBlock/>
      <CategoryList/>
      <CollectionList/>
      <Carousel/>
      <Outlet/>
      
    </>
   )
}
export default Home;