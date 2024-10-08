import React from 'react';

const Post = ({ user, profilePic, message, photos = [], date }) => {
  return (
    <div className="post">
      <div className="postonetwo">
        <img src={profilePic} alt={`${user}'s profile`} className="profilepost" />
        <h2 className="namepost">{user}</h2>
        <p className="postmessage">{message}</p>
        <div className="photopost">
          {photos.map((photo, idx) => (
            <img key={idx} src={photo} alt={`Post photo ${idx + 1}`} className={`photopost${idx + 1}`} />
          ))}
        </div>
        <hr className="line2" />
        <h5 className="datepost">{date}</h5>
      </div>
    </div>
  );
};

export default Post;
