function Footer(){
    return(
        <footer>
            <div className="container-fluid">
                <div className="aboutus-coln">
                    <div className="aboutus-info">
                        <div className="logo-img">
                            <img src="images/logo.png" alt="multikart"/>
                        </div>
                        <div classNameName="logo-list">
                            <ul>
                                <li><a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="https://www.facebook.com/"><i className="fab fa-google-plus-g"></i></a></li>
                                <li><a href="https://twitter.com/"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
                                <li><a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="subscribe">
                        <div className="sub-title">
                            <h2>NEWSLETTER</h2>
                        </div>
                        <div className="subcribe-form">
                            <form>
                                <input type="Email" name="email" placeholder="Enter Email Address"/>
                                <button type="submit">SUBCRIBE </button>
                            </form>
                        </div>         
                    </div>
                    <div className="store-info">
                        <h3>STORE INFORMATION</h3>
                        <ul>
                            <li>Multikart Demo Store, Demo store India 345-659</li>
                            <li>Call Us: 123-456-7898</li>
                            <li><a href="mailto:Support@Fiot.com"> Email Us: Support@Fiot.com</a></li>
                            <li>Fax: 123456</li>
                        </ul>
                    </div>
                </div>
            </div>
            <section className="account-block">
                <div className="container">
                    <div className="account-info">
                        <div className="coll-title">
                            <h3>MY ACCOUNT</h3>
                        </div>
                        <div className="account-content">
                            <ul>
                                <li><a href="">Mens</a></li>
                                <li><a href="">Womens</a></li>
                                <li><a href="">Clothing</a></li>
                                <li><a href="">Accessories</a></li>
                                <li><a href="">Featured</a></li>
                                <li><a href="">Service</a></li>
                                <li><a href="">Cart</a></li>
                                <li><a href="">My Order</a></li>
                                <li><a href="">FAQ</a></li>
                                <li><a href="">New Product</a></li>
                                <li><a href="">Featured Product</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <div className="footer-bottom">
                <div className="bottom-row">
                    <div className="col-1">
                        <p> 2017-18 themeforest powered by pixelstrap</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;