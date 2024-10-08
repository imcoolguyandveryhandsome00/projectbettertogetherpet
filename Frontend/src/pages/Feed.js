import React, { useState } from 'react';
import PostForm from './PostForm';
import Post from './Post';
import './Feed.css';
import Navbar from './Navbar';
import photo1 from "../front/photo1/profile.jpg"
import photo2 from "../front/photo1/post1.jpg"
import photo3 from "../front/photo1/post2.jpg"
import photo4 from "../front/photo1/post3.jpg"
function Feed() {
  const [posts, setPosts] = useState([]);

  const handleAddPost = (post) => {
    const newPost = {
      user: 'Current User', // Name of the user posting
      profilePic: 'https://via.placeholder.com/50', // Placeholder profile picture
      message: post.text, // Use postText from PostForm
      photos: post.image ? [post.image] : [], // If there's an image, include it in an array
      date: new Date().toLocaleDateString(), // Current date
    };
    setPosts([newPost, ...posts]); // Add new post to the beginning of the list
  };

  return (
    <div>
      <Navbar />
      <div className="feed-container">
        <h1 className="login-title-2">Bettertogether <span className="pets">Pets</span></h1>
        <h4 className="foundation-title">FEED</h4>
        <PostForm addPost={handleAddPost} />
      </div>
      
      <div className="post-list">
        {posts.map((post, index) => (
          <Post
            key={index}
            user={post.user}
            profilePic={post.profilePic}
            message={post.message}
            photos={post.photos} 
            date={post.date}
          />
        ))}
      </div>
      <div className="post">
        <div className="postonetwo">
            <img src={photo1} className="profilepost"/>
            <h2 className="namepost">Pcusawmvi_</h2>
            <p className="postmessage">รับบริจาคค่าอาหารให้น้องแมวและน้องหมาจรบริเวณแถวบ้าน
            ช่องทาง (  ธนาคารกรุงไทย  123-34552-123124 น.ส กรนิต ทองสุข )</p>
            <div className="photopost">
                <img src={photo2} className="photopost1"/><p></p>
                <img src={photo3} className="photopost2"/><p></p>
                <img src={photo4} className="photopost3"/>
            </div>
            <hr className="line2"></hr>
            <h5 className="datepost">17 Aug 24</h5>
        </div>
      </div>
      <div className="post">
        <div className="postonetwo">
            <img src={photo1} className="profilepost"/>
            <h2 className="namepost">Pcusawmvi_</h2>
            <p className="postmessage">รับบริจาคค่าอาหารให้น้องแมวและน้องหมาจรบริเวณแถวบ้าน
            ช่องทาง (  ธนาคารกรุงไทย  123-34552-123124 น.ส กรนิต ทองสุข )</p>
            <div className="photopost">
                <img src={photo2} className="photopost1"/><p></p>
                <img src={photo3} className="photopost2"/><p></p>
                <img src={photo4} className="photopost3"/>
            </div>
            <hr className="line2"></hr>
            <h5 className="datepost">17 Aug 24</h5>
        </div>
    </div>
    
      <footer className="footer">
    <div class="footer-column">
    <h3>เกี่ยวกับเรา</h3>
    <p>เป็นองค์กรไม่แสวงหากำไรที่ได้จัดทำเว็บไซต์เพื่อให้มูลนิธิและผู้ที่ต้องการช่วยเหลือสัตว์เลี้ยงได้เข้าถึงการช่วยเหลือ บริจาคได้ง่ายและสะดวกมากขึ้น</p>
  </div>
  <div class="footer-column">
    <h3>ช่องทางการติดต่อ</h3>
    <p>เบอร์โทรศัพท์ : 123-4567890</p>
    <p>ที่อยู่ : 8239 หมู่ 8 ต.ขัวมุง อ.สารภี จ.เชียงใหม่ 50140</p>
  </div>
  <div class="footer-column">
    <h3>ช่องทางออนไลน์</h3>
    <p>facebook : องค์กรไม่สแวงหากำไร</p>
    <p>LINE : @องค์กรไม่สแวงหากำไร</p>
    <p>TIKTOK : องค์กรไม่สแวงหากำไร</p>
    <p>G-mail : องค์กรไม่สแวงหากำไร@gmail.com</p>
  </div>
    </footer>
    </div>
  );
}

export default Feed;
