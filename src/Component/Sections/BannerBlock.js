import { Link } from "react-router-dom";
function BannerBlock(){
    return(
        <section className="banner-block space">
            <div className="container">
                <div className="title-block">
                    <h3>An Exemplart Gateway To Happiness</h3>
                    <h1>ALL JEWELLERY</h1>
                    <Link to ={`/shop`}> SHOP NOW <i class="fas fa-arrow-right"></i></Link>
                </div>
            </div>
        </section>
    );
}
export default BannerBlock;