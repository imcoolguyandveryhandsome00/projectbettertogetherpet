import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 
import photo5 from "../photo/photo5.jpg";

function Dropdown({ title, links, isVisible, toggle }) {
  return (
    <div 
      className="dropdown2" 
      onMouseEnter={toggle} 
      onMouseLeave={toggle}
    >
      <Link to={`/${title.toLowerCase()}`} className="navbar-link">{title}</Link>
      {isVisible && (
        <div className="dropdown2-content">
          {links.map((link, index) => (
            <Link key={index} to={link.path} className="dropdown-link">{link.name}</Link>
          ))}
        </div>
      )}
    </div>
  );
}
function Navbar() {
  const [dropdownVisible, setDropdownVisible] = useState(false); 
  const [profileDropdownVisible, setProfileDropdownVisible] = useState(false);

  const toggleDropdown = useCallback(() => setDropdownVisible(prev => !prev), []);
  const toggleProfileDropdown = useCallback(() => setProfileDropdownVisible(prev => !prev), []);

  const profileLinks = [
    { name: "Profile", path: "/profileuseredit" },
    { name: "Logout", path: "/" }
  ];

  return (
    <div className="navbar">
      <div className="navbar-menu">
        <Link to="/Home" className="navbar-link">HOME</Link>

        <Dropdown 
          title="FOUNDATION" 
          links={[
            { name: "FOUNDATION", path: "/foundation" },
            { name: "VOLUNTEER", path: "/volunteer" }
          ]}
          isVisible={dropdownVisible}
          toggle={toggleDropdown}
        />

        <Link to="/rescued" className="navbar-link">RESCUED ANIMALS</Link>
        <Link to="/feed" className="navbar-link">FEED</Link>
      </div>

      <div 
        className="profile-container" 
        onMouseEnter={toggleProfileDropdown} 
        onMouseLeave={toggleProfileDropdown}
      >
        <img src={photo5} alt="User profile" className="profile-image" />
        {profileDropdownVisible && (
          <div className="dropdown2-content">
            {profileLinks.map((link, index) => (
              <Link key={index} to={link.path} className="dropdown-link">{link.name}</Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
