import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Foundation.css';
import Navbar from './Navbar';
import CheckboxDropdown from '../CheckboxDropdown';  // Import the custom dropdown component
import axios from 'axios';

function Foundation() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [foundation, setFoundation] = useState([]); // Initialize foundation state

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleOptionChange = (value) => {
    setSelectedOptions(prevState =>
      prevState.includes(value)
        ? prevState.filter(option => option !== value)
        : [...prevState, value]
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/foundations'); // Update this URL based on your server
        console.log("Fetched data:", response.data);
        setFoundation(response.data); // Store fetched foundation data
      } catch (error) {
        console.error("Error fetching foundation data:", error);
      }
    };
    
    fetchData();
  }, []);
  
  const options = [ 
    { value: 'ขาดแคลนอาหาร', label: 'ขาดแคลนอาหาร' },
    { value: 'ขาดแคลนทุนทรัพย์', label: 'ขาดแคลนทุนทรัพย์' }
  ];

  return (
    <div>
      <Navbar />
      <div className="foundation-container">
        <h1 className="login-title-2">Bettertogether <span className="pets">Pets</span></h1>
        <h1 className="foundation-title">FOUNDATION</h1>
        <div className="form-container">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search foundation"
            className="search-bar"
          />
          <CheckboxDropdown
            options={options}
            selectedOptions={selectedOptions}
            onOptionChange={handleOptionChange}
          />
        </div>
        
        {foundation
          .filter(item => 
            item.name.includes(searchQuery) && 
            (selectedOptions.length === 0 || selectedOptions.includes(item.isFoodShortage ? 'ขาดแคลนอาหาร' : 'ขาดแคลนทุนทรัพย์'))
          )
          .map((postItem, index) => (
            <article key={index} className="element-item svc-col-md-12 svc-grid-cat-328">
              <div className="svc-col-md-4">
                <a href={postItem.imageUrl} target="_self">
                  <img
                    width="360"
                    height="270"
                    src={postItem.imageUrl || "default-image-url.jpg"} // ใช้ค่า imageUrl ของโพสต์
                    className="svc_post_image"
                    alt={postItem.name} // ใช้ชื่อมูลนิธิเป็น alt text
                  />
                </a>
              </div>
              <div className="svc-col-md-8">
                <p>
                  <Link to={`/foundation/${postItem.id}`} className="svc_title"> {/* Update with the correct route */}
                    {postItem.name}
                  </Link>
                </p>
                <p className="svc_info">{postItem.content}</p>
                <div>
                  <Link to="/foundation1" className="button-link">
                    <button className="button">เพิ่มเติม</button>
                  </Link>
                </div>
              </div>
            </article>
          ))}
      </div>
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

export default Foundation;
