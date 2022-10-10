import React from "react";

function home(){

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
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <div class="d-flex ml-auto flex-column flex-lg-row align-items-center">
                    <ul class="navbar-nav  ">
                        <li class="nav-item active">
                        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="/about"> บริการของเรา</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="service.html"> ประเภทรถบริการ </a>
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
            {/* <!-- end header section --> */}
            {/* <!-- slider section --> */}
            <section class=" slider_section ">
            <div class="container-fluid">
                <div class="row">
                <div class="col-md-7 ">
                    <div class="box">
                    <div class="detail-box">
                        <h4>
                        Welcome to
                        </h4>
                        <h1>
                        AKE TAXI
                        </h1>
                    </div>
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                        </ol>
                        <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="img-box">
                            <img src="assets/images/slider-img.jpg" alt=""></img>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="img-box">
                            <img src="assets/images/slider-img.png" alt=""></img>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="img-box">
                            <img src="assets/images/slider-img.png" alt=""></img>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="img-box">
                            <img src="assets/images/slider-img.png" alt=""></img>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="img-box">
                            <img src="assets/images/slider-img.png" alt=""></img>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div class="btn-box">
                        <a href="" class="btn-1">
                        อ่านต่อ
                        </a>
                    </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-5 ">
                </div>
                </div>
            </div>

            </section>
            {/* <!-- end slider section --> */}
        </div>
        {/* <!-- about section --> */}
        <section class="about_section layout_padding">
            <div class="container-fluid">
            <div class="row">
                <div class="col-lg-4 col-md-5 offset-lg-2 offset-md-1">
                <div class="detail-box">
                    <h2>
                    เกี่ยวกับ <br></br>
                    Ake Taxi 
                    </h2>
                    <p>
                        <li>บริการรถยนต์พร้อมคนขับทั่วไทย เหมาแท็กซี่-เช่าเหมาคัน ทั้งเที่ยวเดียว และไป-กลับ</li>
                        <li>บริการรับส่งไปยังสนามบิน ทั้งสุวรรณภูมิ และดอนเมือง และบริการับส่งสนามบิน ระหว่างทั้งสองสนามบิน</li>
                        <li>ศูนย์บริการจองรถยนต์พร้อมคนขับออนไลน์ในระบบ ทุกประเภท</li>
                        <li>เหมารถพร้อมคนขับ 24 ชั่วโมง</li>
                        <li>เหมารถพร้อมคนขับ ทั่วประเทศ</li>
                        <li>ยินดีให้คำปรึกษา</li>
                    </p>
                    <a href="">
                    อ่านต่อ
                    </a>
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

        {/* <!-- why section --> */}

        <section class="why_section layout_padding">
            <div class="container">
            <div class="heading_container">
                <h2>
                ทำไม <br></br>
                ต้องใช้บริการเรา
                </h2>
            </div>
            <div class="why_container">
                <div class="box">
                <div class="img-box">
                    <img src="assets/images/delivery-man-white.png" alt="" class="img-1"></img>
                    <img src="assets/images/delivery-man-black.png" alt="" class="img-2"></img>
                </div>
                <div class="detail-box">
                    <h5>
                    Best Drivers
                    </h5>
                    <p>
                    ผู้ขับมีตัวตน และ ชำนาญในเส้นทาง
                    </p>
                </div>
                </div>
                <div class="box">
                <div class="img-box">
                    <img src="assets/images/shield-white.png" alt="" class="img-1"></img>
                    <img src="assets/images/shield-black.png" alt="" class="img-2"></img>
                </div>
                <div class="detail-box">
                    <h5>
                    Safe and Secure
                    </h5>
                    <p>
                    มีความปลอดภัยตลอดระยะเวลาเดินทาง
                    </p>
                </div>
                </div>
                <div class="box">
                <div class="img-box">
                    <img src="assets/images/repairing-service-white.png" alt="" class="img-1"></img>
                    <img src="assets/images/repairing-service-black.png" alt="" class="img-2"></img>
                </div>
                <div class="detail-box">
                    <h5>
                    24x7 support
                    </h5>
                    <p>
                    สามารถติดต่อได้ตลอด 24 ชั่วโมง
                    </p>
                </div>
                </div>
            </div>
            </div>
        </section>

        {/* <!-- end why section --> */}
        </>
    )

}

export default home