import React, { useState, useEffect } from "react";
import './Rescued.css';
import Navbar from "./Navbar";
import { Link } from "react-router-dom"; 
import axios from 'axios'; 
import photo6 from "../photo/photo6.jpg";

function Rescued() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [rescuedAnimals, setRescuedAnimals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/pet');
        console.log("Fetched data:", response.data);
        setRescuedAnimals(response.data); 
      } catch (error) {
        console.error("Error fetching rescued animals:", error);
      }
    };
    
    fetchData();
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const filteredAnimals = rescuedAnimals.filter(animal => {
    return (
      animal.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedOption === "" || animal.type === selectedOption)
    );
  });

  const Status = ({ isAdopted }) => {
    return (
      <p>Status: {isAdopted ? 'มีคนรับไปแล้ว' : 'ยังไม่มีคนรับ'}</p>
    );
  };

  return (
    <div>
      <Navbar />
      <div className="foundation-container">
        <h1 className="login-title-2">Bettertogether <span className="pets">Pets</span></h1>
        <h1 className="foundation-title">RESCUED ANIMAL</h1>
        <div className="form-container">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search Animal"
            className="search-bar"
          />
          <select
            value={selectedOption}
            onChange={handleSelectChange}
            className="dropdown1"
          >
            <option value="">Select Type</option>
            <option value="chicken">Chicken</option>
            <option value="panda">Panda</option>
            <option value="cat">Cat</option>
          </select>
        </div>
        <div className="animal-list">
          {filteredAnimals.length > 0 ? (
            filteredAnimals.map((animal) => (
              <article key={animal.id} className="element-item svc-col-md-12 svc-grid-cat-328">
                <div className="svc-col-md-4">
                  <Link to={`/animal/${animal.id}`} className="animal-link">
                    <img
                      width="360"
                      height="270"
                      src={animal.image || photo6} // Default image if no image is provided
                      className="svc_post_image"
                      alt={animal.name}
                    />
                  </Link>
                </div>
                <div className="svc-col-md-8">
                  <p>
                    <Link to={`/animal/${animal.id}`} className="svc_title">
                      {animal.name}
                    </Link>
                  </p>
                  <p className="svc_info">Age: {animal.age} years</p> {/* Display age */}
                  <p className="svc_info">Type: {animal.type}</p> {/* Display type */}
                  <p className="svc_info">{animal.description}</p>
                  <Status isAdopted={animal.isAdopted} /> {/* Display adoption status */}
                  <div>
                    <Link to="/foundation1" className="button-link">
                      <button className="button">ติดต่อ</button>
                    </Link>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <p>No animals found.</p> 
          )}
        </div>
      </div>
      <footer className="footer">
        <div className="footer-column">
          <h3>เกี่ยวกับเรา</h3>
          <p>เป็นองค์กรไม่แสวงหากำไรที่ได้จัดทำเว็บไซต์เพื่อให้มูลนิธิและผู้ที่ต้องการช่วยเหลือสัตว์เลี้ยงได้เข้าถึงการช่วยเหลือ บริจาคได้ง่ายและสะดวกมากขึ้น</p>
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

export default Rescued;
