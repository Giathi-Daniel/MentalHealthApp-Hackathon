import React, { useState } from 'react';
import { storage, db } from '../firebase'; 

const AvatarUpload = () => {
  const [avatar, setAvatar] = useState(null);
  const [avatarURL, setAvatarURL] = useState('');

  const handleAvatarUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const storageRef = storage.ref(`avatars/${file.name}`);
      await storageRef.put(file);
      const url = await storageRef.getDownloadURL();
      setAvatarURL(url);

      const userId = 'user123'; 
      await db.collection('users').doc(userId).update({ avatar: url });
    }
  };

  return (
    <div>
      <label htmlFor="avatar-upload" className="cursor-pointer">
        <img
          src={avatarURL || 'https://cdn.pixabay.com/photo/2021/03/03/08/56/woman-6064819_1280.jpg'}
          alt="avatar"
          className="w-10 h-10 rounded-full mr-4"
        />
      </label>
      <input
        id="avatar-upload"
        type="file"
        onChange={handleAvatarUpload}
        className="hidden"
        accept="image/*"
      />
    </div>
  );
};

export default AvatarUpload;
