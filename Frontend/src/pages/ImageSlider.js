import React from 'react';
import Slider from 'react-slick';
import photo2 from '../photo/photo2.jpg'; // ตรวจสอบว่ามีการอิมพอร์ตไฟล์ภาพอย่างถูกต้อง
import './ImageSlider.css'
const ImageSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // เพิ่มการเลื่อนอัตโนมัติ
        autoplaySpeed: 3000, // ตั้งเวลาหยุดในแต่ละสไลด์
        fade: true, // เพิ่มการเลื่อนแบบเฟด
    };

    const images = [
        photo2,  // ไม่ต้องใช้เครื่องหมายวงเล็บปีกกา
        photo2,
        photo2,
    ];

    return (
        <Slider {...settings}>
            {images.map((img, index) => (
                <div key={index}>
                    <img src={img} alt={`Slide ${index}`} className='slide-image' />
                </div>
            ))}
        </Slider>
    );
};

export default ImageSlider;
