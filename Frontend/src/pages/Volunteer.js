import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './Volunteer.css';
import Navbar from "./Navbar";
import photo7 from "../photo/photo7.jpg";
import axios from "axios";

function Volunteer() {
  const [searchQuery, setSearchQuery] = useState('');
  const [volunteers, setVolunteers] = useState([]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/volunteers');
        setVolunteers(response.data);
      } catch (error) {
        console.error("Error fetching volunteers:", error);
      }
    };
    fetchData();
  }, []);

  const filteredVolunteers = volunteers.filter(volunteer => 
    volunteer.title?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const post = {
    link: "https://www.volunteerspirit.org/mini-volunteer-fair/48687/",
    imageAlt: "",
    title: "Mini Volunteer Fair",
    description: "🌟 Join us for a meaningful volunteer event...!"
  };

  return (
    <div>
      <Navbar />
      <div className="foundation-container">
        <h3 className="login-title1">Bettertogether <span className="pets">Pets</span></h3>
        <h1 className="foundation-title">VOLUNTEER</h1>
        <div className="form-container">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search Volunteer"
            className="search-bar"
          />
        </div>
        {filteredVolunteers.map((volunteer, index) => (
          <article key={volunteer.id || index} className="element-item svc-col-md-12 svc-grid-cat-328">
            <div className="svc-col-md-4">
              <a href={post.link} target="_self">
                <img
                  width="360"
                  height="270"
                  src={photo7}
                  className="svc_post_image"
                  alt={post.imageAlt}
                />
              </a>
            </div>
            <div className="svc-col-md-8">
              <p>
                <a href={post.link} target="_self" className="svc_title">
                  {volunteer.title || post.title}
                </a>
              </p>
              <p className="svc_info">{volunteer.content || post.description}</p>
              <Link to="/foundation1" className="button-link">
                <button className="button">สมัคร</button>
              </Link>
              <Link to="/foundation1" className="button-link">
                <button className="button">เพิ่มเติม</button>
              </Link>
            </div>
          </article>
        ))}
      </div>
      <footer className="footer">
        <div className="footer-column">
          <h3>เกี่ยวกับเรา</h3>
          <p>เป็นองค์กรไม่แสวงหากำไรที่จัดทำเว็บไซต์เพื่อช่วยเหลือสัตว์เลี้ยงให้เข้าถึงการช่วยเหลือและบริจาคได้ง่ายขึ้น</p>
        </div>
        <div className="footer-column">
          <h3>ช่องทางการติดต่อ</h3>
          <p>เบอร์โทรศัพท์: 123-4567890</p>
          <p>ที่อยู่: 8239 หมู่ 8 ต.ขัวมุง อ.สารภี จ.เชียงใหม่ 50140</p>
        </div>
        <div className="footer-column">
          <h3>ช่องทางออนไลน์</h3>
          <p>Facebook: องค์กรไม่แสวงหากำไร</p>
          <p>LINE: @องค์กรไม่แสวงหากำไร</p>
          <p>TikTok: องค์กรไม่แสวงหากำไร</p>
          <p>Email: องค์กรไม่แสวงหากำไร@gmail.com</p>
        </div>
      </footer>
    </div>
  );
}

export default Volunteer;
