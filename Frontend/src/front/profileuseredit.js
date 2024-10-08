"use client";

import './all.css';
import photo from "../front/photo1/backgroundprofile.jpg";
import photo1 from "../front/photo1/profile.jpg";
import photo2 from "../front/photo1/post1.jpg";
import photo3 from "../front/photo1/post2.jpg";
import photo4 from "../front/photo1/post3.jpg";
import Navbar from "../pages/Navbar";
import { useState } from 'react';

function Profileuseredit() {
  const [profileImage, setProfileImage] = useState(photo1);
    const [formData, setFormData] = useState({
      username: "Pcusawmvi_",
      accountType: "ผู้ใช้งานทั่วไป",
      status: "ปลอดภัยผ่านการตรวจสอบข้อมูลแล้ว",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditClick = () => {
    console.log("Edit button clicked");
    setIsModalOpen(true);  // เปิด Modal
};


  const handleCloseModal = () => {
      setIsModalOpen(false);
  };

    const handleFormChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
          ...prevData,
          [name]: value
      }));
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            setProfileImage(reader.result); // อัปเดตรูปโปรไฟล์ใหม่
        };
        reader.readAsDataURL(file);
    }
};


  const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Profile update:', formData);
      setIsModalOpen(false); 
  };
    return (
        <section>
            <Navbar />
            <div className="pro">
                <img src={photo} className="bcprofile" alt="Background Profile" />
                <div className="nameprofile">
                    <img src={photo1} className="profile" alt="Profile" />
                    <div className="nameid">
                        <h1 className="verified">{formData.username}</h1>
                        <h4>(ผู้ใช้ที่ได้รับการตรวจสอบแล้ว)</h4>
                    </div>
                </div>
                <div className="search-box">
                    <input type="text" className="search-input" placeholder="What do you want to say..." />
                    <button className="search-button">POST</button>
                </div>
                <div className="clickpro">
                    <button className="clickedit" onClick={handleEditClick}>
                        EDIT
                    </button>
                    <button className="clickshare" onClick={handleSubmit}>
                        SHARE
                    </button>
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
                    <img src={photo1} className="profilepost" alt="Profile" />
                    <h2 className="namepost">Pcusawmvi_</h2>
                    <p className="postmessage">รับบริจาคค่าอาหารให้น้องแมวและน้องหมาจรบริเวณแถวบ้าน
                        ช่องทาง (  ธนาคารกรุงไทย  123-34552-123124 น.ส กรนิต ทองสุข )</p>
                    <div className="photopost">
                        <img src={photo2} className="photopost1" alt="Post 1" />
                        <img src={photo3} className="photopost2" alt="Post 2" />
                        <img src={photo4} className="photopost3" alt="Post 3" />
                    </div>
                    <hr className="line1" />
                    <h5 className="datepost">17 Aug 24</h5>
                </div>
                <div className="postone">
                    <img src={photo1} className="profilepost" alt="Profile" />
                    <h2 className="namepost">Pcusawmvi_</h2>
                    <p className="postmessage">รับบริจาคค่าอาหารให้น้องแมวและน้องหมาจรบริเวณแถวบ้าน
                        ช่องทาง (  ธนาคารกรุงไทย  123-34552-123124 น.ส กรนิต ทองสุข )</p>
                    <div className="photopost">
                        <img src={photo2} className="photopost1" alt="Post 1" />
                        <img src={photo3} className="photopost2" alt="Post 2" />
                        <img src={photo4} className="photopost3" alt="Post 3" />
                    </div>
                    <hr className="line1" />
                    <h5 className="datepost">17 Aug 24</h5>
                </div>
            </div>

            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                    <h2>แก้ไขโปรไฟล์</h2>
                        <form onSubmit={handleSubmit}>
                            <input type="file" accept="image/*" onChange={handleImageChange} />
                        
                                Username:
                                <input
                                    type="text"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleFormChange}
                                />
                            <div className="modal-buttons">
                                <button type="submit">Save</button>
                                <button type="button" onClick={handleCloseModal}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}


            <footer className="footer">
                <div className="footer-column">
                    <h3>เกี่ยวกับเรา</h3>
                    <p>เป็นองค์กรไม่แสวงหากำไรที่ได้จัดทำเว็บไซต์เพื่อให้มูลนิธิและผู้ที่ต้องการช่วยเหลือสัตว์เลี้ยงได้เข้าถึงการช่วยเหลือ บริจาคได้ง่ายและสะดวกมากขึ้น</p>
                </div>
                <div className="footer-column">
                    <h3>ช่องทางการติดต่อ</h3>
                    <p>เบอร์โทรศัพท์ : 123-4567890</p>
                    <p>ที่อยู่ : 8239 หมู่ 8 ต.ขัวมุง อ.สารภี จ.เชียงใหม่ 50140</p>
                </div>
                <div className="footer-column">
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

export default Profileuseredit;
