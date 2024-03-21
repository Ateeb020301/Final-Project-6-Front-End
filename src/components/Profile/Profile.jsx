import { useState ,useContext} from 'react';
import './profile.css'
import { MainContext } from '../../App';

export function Profile() {
const { person, error } = useContext(MainContext)
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  return (
    <div className="profile-container">
          <div className="image-upload-container">      
            {imagePreview && (
              <div className="image-preview">
                <img src={imagePreview} alt="Profile" />
              </div>
            )}
        <input type="file" onChange={handleImageChange} accept="image/*" />
      </div>
      <div className="profile-content">
        <h2>User Profile</h2>
        {error && <p className="error">{error}</p>}
        <div className="profile-info">
          <div>Username: {person.username}</div>
          <div>Email: {person.email}</div>
          {person.roles && <div>Roles: {person.roles.join(', ')}</div>}
        </div>
      
      </div>
    </div>
  );
}
