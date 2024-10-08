import React, { useState } from "react";
import './all.css';
import photo4 from "../photo/post4.jpg";
import { Link } from "react-router-dom";

function Admintwo() {
    const [formData, setFormData] = useState({
        Date: '',
        topic: '',
        content: '',
        
      });

      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form data:', formData);
      };
    
  return (
    <section>
    <div className="adminbox">
        <div className="textadmin1">
        <h3><p>วัน / เดือน / ปี</p></h3>
              <input
                type="date"
                name="Date"
                value={formData.name}
                onChange={handleChange}
                className="text-inputadmin"
              />
        
        <div className="textadmin1">
        <h3><p>หัวข้อเรื่อง</p></h3>
              <input
                type="text"
                name="topic"
                value={formData.name}
                onChange={handleChange}
                className="text-inputadmin"
              />
        
        <div className="textadmin1">
        <h3><p>เนื้อหา</p></h3>
              <input
                type="text"
                name="content"
                value={formData.name}
                onChange={handleChange}
                className="text-inputadmin"
              />
        <div className="textadmin1">
        <h3>รูปภาพ/สื่อ</h3>
        <div className="photoadmin">
            <form action="/upload" method="post" enctype="multipart/form-data">
            <input type="file" name="file" accept="image/*" />
            </form>
            </div>
            </div>
          </div>
        </div>
        </div>
        <button className="clickadmin" onClick={handleSubmit}>
              อัพโหลด
            </button>
        </div>

        <div className="postadmin">
            <h3 className="adminpost">อัพโหลดล่าสุด</h3>
            <div className="adminlastpost">
                <img src={photo4} className="photoadminlastpost"/>
                <h3 className="admintextpost">เจ้าหน้าที่องค์กรอนุรักษ์สัตว์ และตำรวจ นำกำลังบุกบ้านหลังหนึ่ง
                ในกรุงเวียงจันทน์ ช่วยลูกหมีดำเอเชียได้ 16 ตัว </h3>
                <p>สำนักข่าวต่างประเทศรายงานเมื่อ 24 มี.ค. 2567 ว่า เจ้าหน้าที่จากองค์กรอนุรักษ์ ‘Wildlife’ บุกไปยังบ้านหลังหนึ่งในกรุงเวียงจันทน์ เมืองหลวงของประเทศ สปป.ลาว และสามารถช่วยเหลือลูกหมีดำเอเชีย จำนวน 16 ตัว ที่ถูกจับขังที่นั่นได้สำเร็จ นับเป็นการช่วยเหลือครั้งใหญ่ที่สุดในปีนี้
                หมีดำเอเชีย เป็นหนึ่งในสัตว์ที่ องค์การระหว่างประเทศเพื่อการอนุรักษ์ธรรมชาติ (IUCN) บรรจุในบัญชีแดงว่าเป็นสัตว์เสี่ยงสูญพันธุ์ แต่พวกมันรวมถึงสัตว์อื่นๆ...
                <button className="clickadmintwo" onClick={handleSubmit}>
                    แก้ไข
                </button>
                </p>
                </div>
               
                </div>
        </section>

  );
}

export default Admintwo;