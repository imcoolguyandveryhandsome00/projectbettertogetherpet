"use client";

import './all.css';
import { useState } from 'react';

export default function Signupvolunteer() {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');
  const [text4, setText4] = useState('');
  const [text5, setText5] = useState('');
  const [text6, setText6] = useState('');
  const [text7, setText7] = useState('');
  const [text8, setText8] = useState('');
  const [text9, setText9] = useState('');
  const [text10, setText10] = useState(''); // แก้เป็น setText10
  const [text11, setText11] = useState('');
  const [text12, setText12] = useState('');
  const [text13, setText13] = useState('');
  const [text14, setText14] = useState('');
  const [text15, setText15] = useState('');
  const [text16, setText16] = useState('');
  const [text17, setText17] = useState('');

  const [activeField, setActiveField] = useState('');

  // ฟังก์ชัน handleChange สำหรับฟิลด์ต่างๆ
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
    setText10(event.target.value); // ใช้ setText10 ในการจัดการ text10
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
  const handleChange16 = (event) => {
    setText16(event.target.value);
    setActiveField('text16');
  };
  const handleChange17 = (event) => {
    setText17(event.target.value);
    setActiveField('text17');
  };

  const handleSubmit = () => {
    // ฟังก์ชันสำหรับการ submit
    alert('Sign Up Successful');
  };

  return (
    <section>
      <div className="back">
        <h1 className="signup">SIGN UP</h1>
        <div className="front">
          <h1 className="name">Bettertogether Pets</h1>

          <div className="all">
            <h3>Role</h3>
            <div className="check">
              <input type="checkbox" name="option1" />
              Users
              <p></p>
              <input type="checkbox" name="option2" />
              Volunteer
            </div>

            <section className="boxtext">
              <div className="column7">
                <div>
                  <h4>Username</h4>
                  <input type="text" value={text1} onChange={handleChange1} className="text-input" />
                </div>
                <div>
                  <h4>Password</h4>
                  <input type="text" value={text2} onChange={handleChange2} className="text-input1" />
                </div>
              </div>
            </section>

            <div className="column">
              <h4>Name</h4>
              <input type="text" value={text3} onChange={handleChange3} className="text-input2" />
              <h4>Last Name</h4>
              <input type="text" value={text4} onChange={handleChange4} className="text-input3" />
            </div>

            <div className="column1">
              <h4>E-mail</h4>
              <input type="text" value={text5} onChange={handleChange5} className="text-input4" />
              <h4>Phone number</h4>
              <input type="text" value={text6} onChange={handleChange6} className="text-input5" />
            </div>

            <div className="column2">
              <h4>Age</h4>
              <input type="text" value={text7} onChange={handleChange7} className="text-input6" />
              <h4>Date of birth</h4>
              <input type="text" value={text8} onChange={handleChange8} className="text-input7" />
            </div>

            <div className="column3">
              <h4>Identification Number</h4>
              <input type="text" value={text9} onChange={handleChange9} className="text-input8" />
              <h4>Laser Code</h4>
              <input type="text" value={text10} onChange={handleChange10} className="text-input9" />
            </div>

            <div className="column4">
              <h4>Date of issue</h4>
              <input type="text" value={text11} onChange={handleChange11} className="text-input10" />
              <h4>Date of expiry</h4>
              <input type="text" value={text12} onChange={handleChange12} className="text-input11" />
            </div>

            <h4>Address</h4>
            <input type="text" value={text13} onChange={handleChange13} className="text-input12" />

            <div className="column5">
              <h4>Bank</h4>
              <input type="text" value={text14} onChange={handleChange14} className="text-input13" />
              <h4>Bank Branch</h4>
              <input type="text" value={text15} onChange={handleChange15} className="text-input14" />
            </div>

            <div className="column6">
              <h4>Account Name</h4>
              <input type="text" value={text16} onChange={handleChange16} className="text-input15" />
              <h4>Account Number</h4>
              <input type="text" value={text17} onChange={handleChange17} className="text-input16" />
            </div>

            <button className="click" onClick={handleSubmit}>
              SIGN UP
            </button>
          </div>
        </div>
      </div>
    </section>
  );
  
}
