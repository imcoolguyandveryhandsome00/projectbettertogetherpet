"use client";

import './all.css';
import photo from "../photo/backgroundprofile.jpg";
import photo1 from "../photo/profile.jpg"
import photo2 from "../photo/post1.jpg"
import photo3 from "../photo/post2.jpg"
import photo4 from "../photo/post3.jpg"
import { useState } from 'react';



function Profilevolunteer() {
    const [formData, setFormData] = useState({
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form data:', formData);
      };
    return (
        <section>
    <div className="pro">
        <img src={photo} className="bcprofile"/>
        
        <div className="nameprofile">
        <img src={photo1} className="profile"/>

        <div className="nameid">
        <h1 class="verified">Pcusawmvi_ </h1>
        <h4>(ผู้ใช้ที่ได้รับการตรวจสอบแล้ว)</h4>
        </div>
        </div> 
    </div>

    <div className="post">
        <div className="sidebar">
            <div className="textinside">
            <h3><p>ประเภทบัญชี :</p></h3>
            <p>ผู้ใช้งานทั่วไป</p>
            <h3><p>สถานะโปรไฟล์ :</p></h3>
            <p>ปลอดภัยผ่านการตรวจสอบข้อมูลแล้ว</p>
            <h3><p>ประวัติการโกง : 0</p></h3>
            <h3><p>เลขบัญชีธนาคาร :</p></h3>
            <p>ธนาคารกรุงไทย 1233-34552-123124</p>
            </div>
        </div>

        <div className="postone">
            <img src={photo1} className="profilepost"/>
            <h2 className="namepost">Pcusawmvi_</h2>
            <p className="postmessage">รับบริจาคค่าอาหารให้น้องแมวและน้องหมาจรบริเวณแถวบ้าน
            ช่องทาง (  ธนาคารกรุงไทย  123-34552-123124 น.ส กรนิต ทองสุข )</p>
            <div className="photopost">
                <img src={photo2} className="photopost1"/><p></p>
                <img src={photo3} className="photopost2"/><p></p>
                <img src={photo4} className="photopost3"/>
            </div>
            <hr className="line"></hr>
            <h5 className="datepost">17 Aug 24</h5>
        </div>
    </div>
    
    <div className="sidebar1">
            <div className="textinside">
               <h3><p>อาสาสมัครไปแล้ว :</p></h3>
               <p>7 โครงการ</p>
               <h3><p>ประเภทงานที่เลือก :</p></h3>
               <p><input type="checkbox" name="option1" />  Accommodation
              <p></p>
              <input type="checkbox" name="option2" /> Medicine
              <p></p>
              <input type="checkbox" name="option2" /> Responsible for temporary care</p>
            </div>
    </div>

        <div className="postone">
            <img src={photo1} className="profilepost"/>
            <h2 className="namepost">Pcusawmvi_</h2>
            <p className="postmessage">รับบริจาคค่าอาหารให้น้องแมวและน้องหมาจรบริเวณแถวบ้าน
            ช่องทาง (  ธนาคารกรุงไทย  123-34552-123124 น.ส กรนิต ทองสุข )</p>
            <div className="photopost">
                <img src={photo2} className="photopost1"/><p></p>
                <img src={photo3} className="photopost2"/><p></p>
                <img src={photo4} className="photopost3"/>
            </div>
            <hr className="line"></hr>
            <h5 className="datepost">17 Aug 24</h5>
        </div>
        <footer className="footer">
    <div class="footer-column">
    <h3>เกี่ยวกับเรา</h3>
    <p>เป็นองค์กรไม่แสวงหากำไรที่ได้จัดทำเว็บไซต์เพื่อให้มูลนิธิและผู้ที่ต้องการช่วยเหลือสัตว์เลี้ยงได้เข้าถึงการช่วยเหลือ บริจาคได้ง่ายและสะดวกมากขึ้น</p>
  </div>
  <div class="footer-column">
    <h3>ช่องทางการติดต่อ</h3>
    <p>เบอร์โทรศัพท์ : 123-4567890</p>
    <p>ที่อยู่ : 8239 หมู่ 8 ต.ขัวมุง อ.สารภี จ.เชียงใหม่ 50140</p>
  </div>
  <div class="footer-column">
    <h3>ช่องทางออนไลน์</h3>
    <p>facebook : องค์กรไม่สแวงหากำไร</p>
    <p>LINE : @องค์กรไม่สแวงหากำไร</p>
    <p>TIKTOK : องค์กรไม่สแวงหากำไร</p>
    <p>G-mail : องค์กรไม่สแวงหากำไร@gmail.com</p>
  </div>
    </footer>

    </section>
  );
}


export default Profilevolunteer;