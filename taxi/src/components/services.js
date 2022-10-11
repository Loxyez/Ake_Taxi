import React, { Component } from "react";
import "../App.css";

class services extends Component{

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
                                Urotaxi
                                </span>
                            </a>
                            <a></a>
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
                                    <a class="nav-link" href="news.html"> อัตตราค่าบริการ</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="contact.html">ติดต่อสอบถาม</a>
                                </li>
                                </ul>
                                </div>
                            </div>
                            </nav>
                        </div>
                    </header>
                </div>

                <section class="service_section layout_padding">
                    <div class="container">
                    <div class="heading_container">
                        <h2>
                        ประเภท <br></br>
                        รถบริการ
                        </h2>
                    </div>
                    <div class="service_container">
                        <div class="box">
                        <div class="img-box">
                            <img src="assets/images/delivery-man.png" alt=""></img>
                        </div>
                        <div class="detail-box">
                            <h5>
                            คนขับส่วนตัว
                            </h5>
                            <p>
                            ผู้ขับมีตัวตน และ ชำนาญในเส้นทาง
                            </p>
                        </div>
                        </div>
                        <div class="box">
                        <div class="img-box">
                            <img src="assets/images/airplane.png" alt=""></img>
                        </div>
                        <div class="detail-box">
                            <h5>
                            บริการรับส่งสนามบิน
                            </h5>
                            <p>
                            บริการรับส่งไปยังสนามบิน ทั้งสุวรรณภูมิ และดอนเมือง
                            </p>
                        </div>
                        </div>
                        <div class="box">
                        <div class="img-box">
                            <img src="assets/images/backpack.png" alt=""></img>
                        </div>
                        <div class="detail-box">
                            <h5>
                            ดูแลทรัพย์สินของท่านด้วยความปลอดภัย
                            </h5>
                            <p>
                            เพิ่มความมั่นใจและความปลอดภัยตลอดระยะเวลาเดินทาง
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                {/* <!-- end service section --> */}

                {/* cars section */}
                <section class="news_section layout_padding">
                    <div class = "container">
                        <div class = "heading_container">
                            <h2>
                                ชนิด<br></br>
                                รถให้บริการ
                            </h2>
                        </div>
                        <div class="news_container">
                            <div class="box">
                                <div class="date-box">
                                    <h6>
                                        Toyota Fortuner
                                    </h6>
                                </div>
                                <div class = "img-box">
                                    <img src="assets/images/news-img.jpg" alt=""></img>
                                </div>
                                <div class="detail-box">
                                    <h6>
                                        Toyota Fortuner
                                    </h6>
                                    <p>
                                    รถยนต์ส่วนบุคคล 7 ที่นั่ง (SUV) Toyota Fortuner
                                    </p>
                                </div>
                            </div>
                            <div class="box">
                                <div class="date-box">
                                    <h6>
                                        Toyota Camry
                                    </h6>
                                </div>
                                <div class = "img-box">
                                    <img src="assets/images/news-img.jpg" alt=""></img>
                                </div>
                                <div class="detail-box">
                                    <h6>
                                        Toyota Camry
                                    </h6>
                                    <p>
                                        รถยนต์ส่วนบุคคล 4 ที่นั่ง Toyota Camry
                                    </p>
                                </div>
                            </div>
                            <div class="box">
                                <div class="date-box">
                                    <h6>
                                        Isuzu MU-X
                                    </h6>
                                </div>
                                <div class = "img-box">
                                    <img src="assets/images/news-img.jpg" alt=""></img>
                                </div>
                                <div class="detail-box">
                                    <h6>
                                        Isuzu MU-X
                                    </h6>
                                    <p>
                                        รถยนต์ส่วนบุคคล 7 ที่นั่ง (SUV) Isuzu MU-X
                                    </p>
                                </div>
                            </div>
                            <div class="box">
                                <div class="date-box">
                                    <h6>
                                        Mitsubishi Pajero
                                    </h6>
                                </div>
                                <div class = "img-box">
                                    <img src="assets/images/news-img.jpg" alt=""></img>
                                </div>
                                <div class="detail-box">
                                    <h6>
                                        Mitsubishi Pajero
                                    </h6>
                                    <p>
                                        รถยนต์ส่วนบุคคล 7 ที่นั่ง (SUV) Mitsubishi Pajero
                                    </p>
                                </div>
                            </div>
                            <div class="box">
                                <div class="date-box">
                                    <h6>
                                        Toyota Alphard
                                    </h6>
                                </div>
                                <div class = "img-box">
                                    <img src="assets/images/news-img.jpg" alt=""></img>
                                </div>
                                <div class="detail-box">
                                    <h6>
                                        Toyota Alphard
                                    </h6>
                                    <p>
                                        รถตู้ VIP Toyota Alphard
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* end cars section */}
            </>
        )
    }

}

export default services