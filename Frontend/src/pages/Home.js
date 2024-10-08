import React, { useState, useEffect } from "react";
import './Home.css';
import Navbar from "./Navbar";
import DateDropdown from "../DateDropdown";
import { Link } from "react-router-dom";
import Banner from "./Banner";
import axios from "axios";

function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null); // State to handle errors

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/News');
        console.log("Fetched data:", response.data); // Log the fetched data
        setNews(response.data); 
      } catch (error) {
        console.error("Error fetching news:", error);
        setError("ไม่สามารถดึงข้อมูลข่าวสารได้."); // Set error message
      }
    };
    
    fetchData();
  }, []);

  const Post = ({ link, imageSrc, title, description }) => (
    <article className="element-item svc-col-md-12 svc-grid-cat-328">
      <div className="svc-col-md-4">
        <a href={link} target="_self">
          <img
            width="360"
            height="270"
            src={imageSrc}
            className="svc_post_image"
            alt={title}
          />
        </a>
      </div>
      <div className="svc-col-md-8">
        <p>
          <a href={link} target="_self" className="svc_title">
            {title}
          </a>
        </p>
        <p className="svc_info">{description}</p>
        <div>
          <Link to="/foundation1" className="button-link">
            <button className="button">เพิ่มเติม</button>
          </Link>
        </div>
      </div>
    </article>
  );

  return (
    <div>
      <Navbar />
      <h1 className="login-title-2">Bettertogether <span className="pets">Pets</span></h1>
      <Banner />
      <div className="foundation-container">
        <div className="form-container">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search"
            className="search-bar"
          />
          <DateDropdown />
        </div>
      </div>
      <h4 className="image-heading">New</h4>

      {error && <p className="error-message">{error}</p>} {/* Show error message if any */}

      {news.length > 0 ? ( // ตรวจสอบว่ามีข่าวสารหรือไม่
        news.map((item) => (
          <Post 
            key={item.id} // Assuming each news item has a unique id
            link={item.link} 
            imageSrc={item.image} 
            title={item.title} 
            description={item.description} 
          />
        ))
      ) : (
        <p>ไม่มีข่าวสารในขณะนี้</p> // แสดงข้อความเมื่อไม่มีข่าวสาร
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
          <p>facebook : องค์กรไม่แสวงหากำไร</p>
          <p>LINE : @องค์กรไม่แสวงหากำไร</p>
          <p>TIKTOK : องค์กรไม่แสวงหากำไร</p>
          <p>G-mail : องค์กรไม่แสวงหากำไร@gmail.com</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
