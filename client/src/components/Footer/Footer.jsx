import React from "react";
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer" >
            <div className="footer-container" >
                <div>
                    <h3 style={{ fontWeight: "normal",textAlign:"center"}}>
                    | ☆ Made With ♡
                        <span>
                            <a href="https://in.linkedin.com/in/rajakunalpandit" 
                            style={{ color: "#ffffff" }} 
                            target="_blank"
                            rel="noreferrer"
                            > By Raja Kunal Pandit ☆ |</a>
                        </span>
                    </h3>
                </div>

            </div>
        </footer>
    );
};

export default Footer;