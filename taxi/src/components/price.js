import React, { Component } from "react";
import Nav from "./nav";
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
                    {/* <Nav/> */}
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
                    <div class="news_container">
                        <center>
                            <table class="table">

                                <col></col>
                                <col></col>
                                    <colgroup span="2"></colgroup>
                                    <colgroup span="2"></colgroup>
                                    <tr>
                                        <td rowspan="2"></td>
                                        <th colspan="2" scope="colgroup">4 ที่นั่ง</th>
                                        <th colspan="2" scope="colgroup">7 ที่นั่ง</th>
                                    </tr>
                                    <tr>
                                        <th scope="col">รอบเดียว</th>
                                        <th scope="col">ไป - กลับ</th>
                                        <th scope="col">รอบเดียว</th>
                                        <th scope="col">ไป - กลับ</th>
                                    </tr>
                                    <tr>
                                        <th scope="row">กระบี่</th>
                                        <td>8,200</td>
                                        <td>12,000</td>
                                        <td>8,500</td>
                                        <td>12,300</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">กาญจนบุรี</th>
                                        <td>2,000</td>
                                        <td>3,000</td>
                                        <td>2,200</td>
                                        <td>3,200</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">กาฬสินธุ์</th>
                                        <td>6,000</td>
                                        <td>8,500</td>
                                        <td>6,200</td>
                                        <td>8,700</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">กำแพงเพชร</th>
                                        <td>3,700</td>
                                        <td>5,200</td>
                                        <td>3,900</td>
                                        <td>5,400</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">เกาะช้าง</th>
                                        <td>4,000</td>
                                        <td>5,900</td>
                                        <td>4,200</td>
                                        <td>6,100</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">ขอนแก่น</th>
                                        <td>6,000</td>
                                        <td>8,500</td>
                                        <td>6,200</td>
                                        <td>8,700</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">จันทบุรี</th>
                                        <td>2,500</td>
                                        <td>4,200</td>
                                        <td>3,000</td>
                                        <td>4,400</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">ฉะเชิงเทรา</th>
                                        <td>900</td>
                                        <td>1,400</td>
                                        <td>1,100</td>
                                        <td>1,600</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">ชลบุรี </th>
                                        <td>1,200</td>
                                        <td>2,000</td>
                                        <td>1,400</td>
                                        <td>2,200</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">ชลบุรี (พัทยา)</th>
                                        <td>1,500</td>
                                        <td>2,300</td>
                                        <td>1,700</td>
                                        <td>2,500</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">ชลบุรี (ศรีราชา)</th>
                                        <td>1,400</td>
                                        <td>2,200</td>
                                        <td>1,600</td>
                                        <td>2,500</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">ชลบุรี (สัตหีบ)</th>
                                        <td>1,600</td>
                                        <td>2,400</td>
                                        <td>1,800</td>
                                        <td>2,600</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">ชะอำ </th>
                                        <td>2,000</td>
                                        <td>3,000</td>
                                        <td>2,300</td>
                                        <td>3,300</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">ชัยนาท </th>
                                        <td>2,200</td>
                                        <td>3,000</td>
                                        <td>2,400</td>
                                        <td>3,200</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">ชัยภูมิ </th>
                                        <td>2,200</td>
                                        <td>3,000</td>
                                        <td>2,400</td>
                                        <td>3,200</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">ชุมพร </th>
                                        <td>4,900</td>
                                        <td>7,000</td>
                                        <td>5,200</td>
                                        <td>7,300</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">เชียงราย </th>
                                        <td>8,300</td>
                                        <td>12,000</td>
                                        <td>8,500</td>
                                        <td>12,200</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">เชียงใหม่ </th>
                                        <td>7,500</td>
                                        <td>10,500</td>
                                        <td>7,700</td>
                                        <td>10,700</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">ตรัง </th>
                                        <td>8,700</td>
                                        <td>12,500</td>
                                        <td>9,000</td>
                                        <td>12,800</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">ตราด </th>
                                        <td>4,000</td>
                                        <td>6,000</td>
                                        <td>4,300</td>
                                        <td>6,200</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">ตาก </th>
                                        <td>4,400</td>
                                        <td>6,300</td>
                                        <td>4,600</td>
                                        <td>6,500</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">นครนายก </th>
                                        <td>1,100</td>
                                        <td>1,700</td>
                                        <td>1,300</td>
                                        <td>1,900</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">นครปฐม </th>
                                        <td>1,000</td>
                                        <td>1,500</td>
                                        <td>1,200</td>
                                        <td>1,700</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">นครพนม </th>
                                        <td>8,000</td>
                                        <td>11,000</td>
                                        <td>8,200</td>
                                        <td>11,200</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">นครราชสีมา </th>
                                        <td>2,500</td>
                                        <td>4,000</td>
                                        <td>2,700</td>
                                        <td>4,200</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">นครศรีธรรมราช </th>
                                        <td>8,100</td>
                                        <td>11,500</td>
                                        <td>8,400</td>
                                        <td>11,800</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">นครสวรรค์ </th>
                                        <td>2,500</td>
                                        <td>3,500</td>
                                        <td>2,700</td>
                                        <td>3,700</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">นราธิวาส </th>
                                        <td>12,000</td>
                                        <td>17,500</td>
                                        <td>12,300</td>
                                        <td>17,800</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">น่าน </th>
                                        <td>7,000</td>
                                        <td>10,000</td>
                                        <td>7,200</td>
                                        <td>10,200</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">บุรีรัมย์ </th>
                                        <td>4,000</td>
                                        <td>6,000</td>
                                        <td>4,200</td>
                                        <td>6,200</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">ประจวบคีรีขันธ์ </th>
                                        <td>3,000</td>
                                        <td>4,500</td>
                                        <td>3,200</td>
                                        <td>4,700</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">ปราจีนบุรี </th>
                                        <td>1,400</td>
                                        <td>2,100</td>
                                        <td>1,600</td>
                                        <td>2,300</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">ปัตตานี </th>
                                        <td>10,800</td>
                                        <td>15,800</td>
                                        <td>11,100</td>
                                        <td>16,100</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">พะเยา </th>
                                        <td>7,600</td>
                                        <td>10,500</td>
                                        <td>7,800</td>
                                        <td>10,700</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">พังงา </th>
                                        <td>7,900</td>
                                        <td>11,000</td>
                                        <td>8,200</td>
                                        <td>11,300</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">พัทลุง </th>
                                        <td>8,800</td>
                                        <td>13,000</td>
                                        <td>9,100</td>
                                        <td>13,300</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">พิจิตร </th>
                                        <td>3,500</td>
                                        <td>5,000</td>
                                        <td>3,700</td>
                                        <td>5,200</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">พิษณุโลก </th>
                                        <td>4,500</td>
                                        <td>6,500</td>
                                        <td>4,700</td>
                                        <td>6,700</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">เพชรบุรี </th>
                                        <td>1,600</td>
                                        <td>2,500</td>
                                        <td>1,800</td>
                                        <td>2,700</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">เพชรบูรณ์  </th>
                                        <td>3,700</td>
                                        <td>5,200</td>
                                        <td>3,900</td>
                                        <td>5,400</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">แพร่ </th>
                                        <td>5,900</td>
                                        <td>8,500</td>
                                        <td>6,100</td>
                                        <td>8,700</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">ภูเก็ต </th>
                                        <td>9,000</td>
                                        <td>13,000</td>
                                        <td>10,000</td>
                                        <td>14,000</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">มหาสารคาม </th>
                                        <td>5,400</td>
                                        <td>7,500</td>
                                        <td>5,600</td>
                                        <td>7,700</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">มุกดาหาร </th>
                                        <td>7,000</td>
                                        <td>10,000</td>
                                        <td>7,200</td>
                                        <td>10,200</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">แม่ฮ่องสอน  </th>
                                        <td>10,000</td>
                                        <td>14,000</td>
                                        <td>10,200</td>
                                        <td>14,200</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">ยโสธร </th>
                                        <td>5,700</td>
                                        <td>8,000</td>
                                        <td>5,900</td>
                                        <td>8,200</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">ยะลา </th>
                                        <td>11,000</td>
                                        <td>16,000</td>
                                        <td>11,300</td>
                                        <td>16,300</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">ร้อยเอ็ด </th>
                                        <td>5,500</td>
                                        <td>8,000</td>
                                        <td>5,700</td>
                                        <td>8,200</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">ระนอง </th>
                                        <td>6,200</td>
                                        <td>9,000</td>
                                        <td>6,500</td>
                                        <td>9,300</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">ระยอง </th>
                                        <td>2,200</td>
                                        <td>3,400</td>
                                        <td>2,400</td>
                                        <td>3,600</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">ระยอง (มาบตาพุด) </th>
                                        <td>1,700</td>
                                        <td>2,600</td>
                                        <td>1,900</td>
                                        <td>2,800</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">ราชบุรี (ดำเนินสะดวก) </th>
                                        <td>1,400</td>
                                        <td>2,200</td>
                                        <td>1,600</td>
                                        <td>2,400</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">ลพบุรี </th>
                                        <td>1,700</td>
                                        <td>2,600</td>
                                        <td>1,900</td>
                                        <td>2,800</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">ลำปาง </th>
                                        <td>6,300</td>
                                        <td>9,000</td>
                                        <td>6,500</td>
                                        <td>9,200</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">ลำพูน </th>
                                        <td>7,000</td>
                                        <td>10,000</td>
                                        <td>7,200</td>
                                        <td>10,200</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">เลย </th>
                                        <td>5,800</td>
                                        <td>8,000</td>
                                        <td>6,000</td>
                                        <td>8,200</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">ศรีสะเกษ </th>
                                        <td>5,600</td>
                                        <td>8,000</td>
                                        <td>5,800</td>
                                        <td>8,200</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">สกลนคร </th>
                                        <td>7,300</td>
                                        <td>10,500</td>
                                        <td>7,500</td>
                                        <td>10,700</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">สงขลา </th>
                                        <td>9,900</td>
                                        <td>14,500</td>
                                        <td>10,200</td>
                                        <td>14,800</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">สตูล </th>
                                        <td>10,000</td>
                                        <td>14,500</td>
                                        <td>10,300</td>
                                        <td>14,800</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">สมุทรสงคราม </th>
                                        <td>1,000</td>
                                        <td>1,500</td>
                                        <td>1,200</td>
                                        <td>1,700</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">สระแก้ว  </th>
                                        <td>2,500</td>
                                        <td>3,800</td>
                                        <td>2,700</td>
                                        <td>4,000</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">สระบุรี </th>
                                        <td>1,500</td>
                                        <td>2,500</td>
                                        <td>1,800</td>
                                        <td>2,800</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">สิงห์บุรี </th>
                                        <td>1,600</td>
                                        <td>2,400</td>
                                        <td>1,800</td>
                                        <td>2,600</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">สุโขทัย  </th>
                                        <td>4,400</td>
                                        <td>6,300</td>
                                        <td>4,600</td>
                                        <td>6,500</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">สุพรรณบุรี </th>
                                        <td>1,600</td>
                                        <td>2,500</td>
                                        <td>1,800</td>
                                        <td>2,700</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">สุราษฎร์ธานี </th>
                                        <td>6,700</td>
                                        <td>9,500</td>
                                        <td>7,000</td>
                                        <td>9,800</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">สุรินทร์  </th>
                                        <td>4,500</td>
                                        <td>6,500</td>
                                        <td>4,700</td>
                                        <td>6,700</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">หนองคาย </th>
                                        <td>7,300</td>
                                        <td>10,500</td>
                                        <td>7,500</td>
                                        <td>10,700</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">หนองบัวลำภู </th>
                                        <td>6,400</td>
                                        <td>9,000</td>
                                        <td>6,600</td>
                                        <td>9,200</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">หัวหิน </th>
                                        <td>2,500</td>
                                        <td>3,800</td>
                                        <td>2,800</td>
                                        <td>4,100</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">หาดใหญ่ </th>
                                        <td>9,800</td>
                                        <td>14,000</td>
                                        <td>10,100</td>
                                        <td>14,300</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">อยุธยา  </th>
                                        <td>1,400</td>
                                        <td>2,000</td>
                                        <td>1,600</td>
                                        <td>2,200</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">อรัญประเทศ </th>
                                        <td>2,500</td>
                                        <td>3,800</td>
                                        <td>2,700</td>
                                        <td>4,000</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">อ่างทอง </th>
                                        <td>1,200</td>
                                        <td>1,800</td>
                                        <td>1,400</td>
                                        <td>2,000</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">อำนาจเจริญ </th>
                                        <td>6,200</td>
                                        <td>9,000</td>
                                        <td>6,400</td>
                                        <td>9,200</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">อุดรธานี </th>
                                        <td>6,800</td>
                                        <td>10,000</td>
                                        <td>7,000</td>
                                        <td>10,200</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">อุตรดิตถ์ </th>
                                        <td>5,200</td>
                                        <td>7,500</td>
                                        <td>5,400</td>
                                        <td>7,700</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">อุทัยธานี </th>
                                        <td>2,600</td>
                                        <td>3,500</td>
                                        <td>2,800</td>
                                        <td>3,700</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">อุบลราชธานี </th>
                                        <td>6,300</td>
                                        <td>9,000</td>
                                        <td>6,500</td>
                                        <td>9,200</td>
                                    </tr>
                            </table>
                        </center>
                    </div>
                </section>
            </>
        )
    }

}

export default price;