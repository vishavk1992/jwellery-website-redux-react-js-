import { useState, useEffect } from "react";
import axios from "axios";
import { Link, Outlet } from "react-router-dom";


function  CategoryList(){
    const [Data , setData]= useState([]);

    useEffect(()=>{
        axios.get('MyCat.json').then(response => {setData(response.data)})
        .catch(error=> console.log(error))
    },[])

    return(
        
        <section className="category-block space">
            <div className="container">
            
                <div className="cat-list">
                {Data.map((cat)=>
                    <div className="cat-info">                   
                        <div className="cat-image">
                        <Link to={`/shop/${cat.id}`}><img src={cat.image} alt={cat.title}/></Link>
                        
                        </div>
                        <div className="cat-content">
                            <h4>{cat.title}</h4>
                            <p>{cat.number}</p>
                        </div>
                    
                    </div>
                    )}
                </div>
             
            </div>  
            <Outlet/>    
        </section>
   
    );
}
export default CategoryList;