import React, { Component } from "react";
import "../App.css";

class price extends Component {
    
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
                    <header class="header_section">
                        <div class="container-fluid">
                        <nav class="navbar navbar-expand-lg custom_nav-container ">
                            <a class="navbar-brand" href="index.html">
                            <span>
                                Ake Taxi
                            </span>
                            <a></a>
                            </a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                            </button>

                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <div class="d-flex ml-auto flex-column flex-lg-row align-items-center">
                                <ul class="navbar-nav  ">
                                <li class="nav-item ">
                                    <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item active">
                                    <a class="nav-link" href="/about"> บริการของเรา</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/services"> ประเภทรถบริการ </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/price"> อัตตราค่าบริการ</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/contact">ติดต่อสอบถาม</a>
                                </li>
                                </ul>
                            </div>
                            </div>
                        </nav>
                        </div>
                    </header>
                    {/* <!-- end header section --> */}
                </div>

                {/* contact section */}

                <section class="contact_section layout_padding">
                    <div class="container">
                        <div class="heading_container">
                            <h2>
                                อัตรา <br></br>
                                ค่าบริการ
                            </h2>
                        </div>
                    </div>
                    <div class="container-fluid">
                        <div class="row">
                            
                        </div>
                    </div>
                </section>
            </>
        )
    }

}

export default price;