import React, { Component } from "react";
import Nav from "./nav";
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
                    {/* <Nav/> */}
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
                                    <img src="assets/images/car_type/fortuner.jpg" alt=""></img>
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
                                    <img src="assets/images/car_type/camry.jpg" alt=""></img>
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
                                    <img src="assets/images/car_type/mux.jpg" alt=""></img>
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
                            <br></br>
                        </div>
                        <br></br>
                        <div class="news_container">
                        <div class="box">
                                <div class="date-box">
                                    <h6>
                                        Mitsubishi Pajero
                                    </h6>
                                </div>
                                <div class = "img-box">
                                    <img src="assets/images/car_type/pajero.jpg" alt=""></img>
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
                                    <img src="assets/images/car_type/alphard.jpg" alt=""></img>
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