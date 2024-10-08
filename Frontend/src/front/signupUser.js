"use client";

import './all.css';
import { useState } from 'react';

export default function Signup() {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');
  const [text4, setText4] = useState('');
  const [text5, setText5] = useState('');
  const [text6, setText6] = useState('');
  const [text7, setText7] = useState('');
  const [text8, setText8] = useState('');
  const [text9, setText9] = useState('');
  const [text10, setText10] = useState(''); 
  const [text11, setText11] = useState('');
  const [text12, setText12] = useState('');
  const [text13, setText13] = useState('');
  const [text14, setText14] = useState('');
  const [text15, setText15] = useState('');

  const [activeField, setActiveField] = useState('');

  const handleChange1 = (event) => {
    setText1(event.target.value);
    setActiveField('text1');
  };

  const handleChange2 = (event) => {
    setText2(event.target.value);
    setActiveField('text2');
  };

  const handleChange3 = (event) => {
    setText3(event.target.value);
    setActiveField('text3');
  };

  const handleChange4 = (event) => {
    setText4(event.target.value);
    setActiveField('text4');
  };

  const handleChange5 = (event) => {
    setText5(event.target.value);
    setActiveField('text5');
  };

  const handleChange6 = (event) => {
    setText6(event.target.value);
    setActiveField('text6');
  };

  const handleChange7 = (event) => {
    setText7(event.target.value);
    setActiveField('text7');
  };

  const handleChange8 = (event) => {
    setText8(event.target.value);
    setActiveField('text8');
  };

  const handleChange9 = (event) => {
    setText9(event.target.value);
    setActiveField('text9');
  };

  const handleChange10 = (event) => {
    setText10(event.target.value);
    setActiveField('text10');
  };

  const handleChange11 = (event) => {
    setText11(event.target.value);
    setActiveField('text11');
  };

  const handleChange12 = (event) => {
    setText12(event.target.value);
    setActiveField('text12');
  };

  const handleChange13 = (event) => {
    setText13(event.target.value);
    setActiveField('text13');
  };

  const handleChange14 = (event) => {
    setText14(event.target.value);
    setActiveField('text14');
  };

  const handleChange15 = (event) => {
    setText15(event.target.value);
    setActiveField('text15');
  };

  const handleClick = () => {
    // You can implement your signup logic here
    console.log('Sign up button clicked');
    console.log('Username:', text1);
    console.log('Password:', text2);
    // Add further logic for processing form data here
  };
  const [selectedRole, setSelectedRole] = useState('');

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };
 
  const [selectedIssue, setSelectedIssue] = useState('');

  const handleIssueChange = (event) => {
    setSelectedIssue(event.target.value);
  };
  
  return (
    <section>
      <div className="back">
        <h1 className="signup">SIGN UP</h1>
        <div className="front">
          <h1 className="name">Bettertogether Pets</h1>

          <div className="all">
            <div className="photo">
              <h1>อัปโหลดรูปภาพ</h1>
              <form action="/upload" method="post" enctype="multipart/form-data">
                <input type="file" name="file" accept="image/*" />
              </form>
            </div>
            <h3>Role</h3>
      <div className="check">
        <label>
          <input
            type="checkbox"
            value="Users"
            checked={selectedRole === 'Users'}
            onChange={handleRoleChange}
          />
          Users
        </label>
        <p></p>
        <label>
          <input
            type="checkbox"
            value="Volunteer"
            checked={selectedRole === 'Volunteer'}
            onChange={handleRoleChange}
          />
          Volunteer
        </label>
      </div>
            <section className="boxtext">
              <div>
                <h4>Username</h4>
                <input
                  type="text"
                  value={text1}
                  onChange={handleChange1}
                  className="text-input"
                />
              </div>
              <div>
                <h4>Password</h4>
                <input
                  type="text"
                  value={text2}
                  onChange={handleChange2}
                  className="text-input1"
                />
              </div>
            </section>

            <h3>Work Issues</h3>
            <div className="checky">
              <input type="checkbox" name="option3" />
              Accommodation
              <input type="checkbox" name="option4" />
              Medicine
              <input type="checkbox" name="option5" />
              Responsible for temporary care
            </div>

            <div className="column">
              <h4>Name</h4>
              <input
                type="text"
                value={text3}
                onChange={handleChange3}
                className="text-input2"
              />
              <h4>Last Name</h4>
              <input
                type="text"
                value={text4}
                onChange={handleChange4}
                className="text-input3"
              />
            </div>

            <div className="column1">
              <h4>E-mail</h4>
              <input
                type="text"
                value={text5}
                onChange={handleChange5}
                className="text-input4"
              />
              <h4>Phone number</h4>
              <input
                type="text"
                value={text6}
                onChange={handleChange6}
                className="text-input5"
              />
            </div>
            <div className="column2">
              <h4>Age</h4>
              <input
                type="text"
                value={text7}
                onChange={handleChange7}
                className="text-input6"
              />
              <h4>Date of birth</h4>
              <input
                type="text"
                value={text8}
                onChange={handleChange8}
                className="text-input7"
              />
            </div>
            <div className="column3">
              <h4>Identification Number</h4>
              <input
                type="text"
                value={text9}
                onChange={handleChange9}
                className="text-input8"
              />
              <h4>Laser Code</h4>
              <input
                type="text"
                value={text10}
                onChange={handleChange10}
                className="text-input9"
              />
            </div>
            <div className="column4">
              <h4>Date of issue</h4>
              <input
                type="text"
                value={text11}
                onChange={handleChange11}
                className="text-input10"
              />
              <h4>Date of expiry</h4>
              <input
                type="text"
                value={text12}
                onChange={handleChange12}
                className="text-input11"
              />
            </div>
            <h4>Address</h4>
            <input
              type="text"
              value={text13}
              onChange={handleChange13}
              className="text-input12"
            />
          </div>

          <button className="click" onClick={handleClick}>
            SIGN UP
          </button>
        </div>
      </div>
    </section>
  );
}
