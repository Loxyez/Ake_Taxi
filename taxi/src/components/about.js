import React, { Component } from "react";
import "../App.css";

class about extends Component{

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

                {/* <!-- about section --> */}

                <section class="about_section layout_padding">
                    <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-4 col-md-5 offset-lg-2 offset-md-1">
                        <div class="detail-box">
                            <h2>
                            About <br></br>
                            Taxi Company
                            </h2>
                            <p>
                                <li>
                                    <b>แท็กซี่ไปต่างจังหวัด</b> ราคาประหยัดสุด ศูนย์บริการจองรถในระบบออนไลน์ทุกประเภท รับส่งต่างจังหวัดทั่วไทย อาทิเช่น รถ taxi รถเก๋ง รถแท็กซี่แวน รถแท็กซี่คันใหญ่ รถแท็กซี่ฟอร์จูนเนอร์ รถ SPORT SUV ทุกรุ่น และรถตู้ VIP การเดินทางแบบส่วนตัว เช่า เหมา จอง สะดวก สะอาด ปลอดภัย และเป็นส่วนตัว บริการจองรถแท็กซี่ออนไลน์ ทั่วไทย ตลอด 24 ชม.
                                </li>
                                <li>
                                    <b>บริการจองรถแท็กซี่ไปกรุงเทพฯ</b> บริการรถเหมาไปกรุงเทพฯ ทุกชนิด เหมาแท็กซี่จากกรุงเทพฯ ไปต่างจังหวัดทั่วไทย
                                </li>
                                <li>
                                    <b>จองรถแท็กซี่</b> ล่วงหน้า รอรับที่ สนามบิน สุวรรณภูมิ ดอนเมือง และอู่ตะเภา 
                                </li>
                                <li>
                                    <b>บริการรถแท็กซี่ส่วนบุคคล</b> รถรับส่งแบบส่วนตัว จากสนามบินสุวรรณภูมิ ไปยังเมืองพัทยา บริการ 24 ชั่วโมง เลือกขนาดรถได้
                                </li>
                                <li>
                                    <b>เช่ารถ รถเช่า +พร้อมคนขับ</b> ไปต่างจังหวัด ราคาถูก บริการรถเช่าพร้อมคนขับรับส่งสนามบิน บริการจองล่วงหน้า นัดหมายจองรถไว้ล่วงหน้า การันตีความสะดวก สะอาด ปลอดภัย คนขับสุภาพ
                                </li>
                            </p>
                        </div>
                        </div>
                        <div class="col-md-6">
                        <div class="img-box">
                            <img src="assets/images/about-img.png" alt=""></img>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>

                {/* <!-- end about section --> */}
            </>
        )
    }
}

export default about