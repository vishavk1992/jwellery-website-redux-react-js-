import {BsArrowLeftCircleFill , BsArrowRightCircleFill} from "react-icons/bs"
import { useState } from "react";


function Carousel(){
   const slideImage = [{image:"./images/banner3.jpg" }, { image:"./images/banner2.jpg"}, { image:"./images/banner.jpg"}]
    
   const [slide ,setSlide] = useState(0);

   const nextSlide=()=>{
    setSlide( slide === slideImage.length - 1 ? 0 :slide + 1);
   }
   const prevSlide=()=>{
    setSlide( slide === 0 ? slideImage.length - 1: slide - 1);
   }
   
   return(
    <section className="banner-slide space">
        <div className="banner-blk ">  
        <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide}/>
        {
            slideImage.map((item,id)=> { 
                return(
                <img src={item.image} key={item.id} alt="banner" className= {slide === id ? "slider" : "slider slide-hidden"}/>)
            })
            
        }
          <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide}/>  
          <span className="indicators">
            {
                slideImage.map((_, index)=>{
                    return <button key={index}  onClick={()=>setSlide(index)}
                    className={slide === index ?"indicator": "indicator indicator-inactive"}></button>
                })
            }
          </span>
        </div>
        </section>

    )
}
export default Carousel;