import React, { useState } from 'react';

const PostForm = ({ addPost }) => {
  const [postText, setPostText] = useState('');
  const [postImage, setPostImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (postText.trim() || postImage) {
      addPost({ text: postText, image: postImage });
      setPostText(''); // Clear the text area after posting
      setPostImage(null); // Clear the image after posting
    }
  };

  const handleImageChange = (e) => {
    setPostImage(URL.createObjectURL(e.target.files[0])); // Create URL for image preview
  };

  return (

    <div className='postt'>
    <div className="post-form">
      <form onSubmit={handleSubmit}>
        <textarea
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
          placeholder="คุณกำลังคิดอะไรอยู่?"
        />
        <div className='feedphoto'>
        <input type="file" onChange={handleImageChange} />
        <button type="submit">Post</button>
        </div>
      </form>
      {postImage && (
        <div className="preview-image">
          <img src={postImage} alt="Preview" width="100%" />
        </div>
      )}
    </div>
    </div>
  );
};

export default PostForm;
