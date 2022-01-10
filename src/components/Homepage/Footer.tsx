import './Footer.css';

export const Footer = ()=> {
    return (
        <>
        <div className="footer">
            <div className="foot">
                <div className="wrapper">
                <div className="col-a">
                    <div className="rocket">
                        <h4>Computer Science</h4>
                    </div>
                    <p>Create,prototype,collaborate and turn your</p> <br/><p> ideas into incredible products with the definitive</p> <br/><p> platform for digital design.</p>
                    <div className="us">
                        <h6>United States</h6>
                    </div>
                </div>
                </div>
                <div className="wrap">
                <div className="wrapping">
                <div className="col-b">
                    <h5>Themesberg</h5>
                    <p>Blog</p>
                    <p>Products</p>
                    <p>Contact Us</p>
                </div>
                <div className="col-c">
                    <h5>Rocket</h5>
                    <p>About</p>
                    <p>Pricing</p>
                    <p>Documentation</p>
                    <p>Contact</p>
                </div>
                </div>
                <div className="wrapped">
                <div className="col-d">
                    <h5>Subscribe</h5>
                    <p>The latest Rocket news, articles, and resources, sent <br/> straight to your inbox every month.</p>
                    <div className="form">
                        <input type="email" className="email" placeholder="Email Address" name="email" required></input>
                        <button className="customButton" type='button' >Subscribe</button>

                    </div>
                    <p>We'll never share your details. See our Privacy Policy.</p>

                </div>
                </div>
                </div>
            </div>
            <div className="themesberg">
                <p>Copyright &copy; Rishabh 2021. All rights reserved.</p>
            </div>
        </div>
        </>
    );
}



