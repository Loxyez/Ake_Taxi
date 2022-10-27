import React, { Component } from "react";
import Nav from "./nav";
import "../App.css";

class contact extends Component {

    constructor(props){
        super(props);

        let bodyElement = document.getElementsByTagName('body')[0];

        bodyElement.className = "sub_page";
    }

    componentDidMount(){
    }

    render(){
        return(
            <>
                <div class="hero_area">
                    {/* <!-- header section strats --> */}
                    <Nav/>
                </div>

                {/* Contact Section */}

                <section class="contact_section layout_padding">
                    <div class="container">
                        <div class="heading_container">
                            <h2>
                                ติดต่อสอบถาม<br></br>
                                จองเวลาเดินทาง
                            </h2>
                        </div>
                    </div>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-5 offset-md-1">
                                <div class="contact_form">
                                    <h4>
                                        ติดต่อ
                                    </h4>
                                    <a href="https://www.facebook.com/ChanatipDe/">
                                        <img src="assets/images/fb.png" alt="" height={40} width={42}></img> <b>Chanatip Deemee</b>
                                    </a><br></br>
                                    <br></br>
                                    <a href="https://line.me/ti/p/~chanatip1412">
                                        <img src="assets/images/line.png" alt="" height={40} width={42}></img> <b>Chanatip1412</b>
                                    </a><br></br>
                                    <br></br>
                                    <a href="https://www.instagram.com/sir_chanatip/">
                                        <img src="assets/images/instagram.png" alt="" height={40} width={42}></img> <b>0813204808</b>
                                    </a>
                                </div>
                            </div> 
                            <div class="col-md-6 px-0">
                                <div class="img-box">
                                    <img src="assets/images/feed_back/23305.jpg" alt=""></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default contact