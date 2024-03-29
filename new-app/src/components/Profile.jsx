import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/Profile.css';
import HomeAppBar from "./FarmerHomeNavbar";

const Profile = () => {
  const [firstName, setFirstName] = useState('Jon');
  const [lastName, setLastName] = useState('Doe');
  const [email, setEmail] = useState('jondoe@example.com');
  const [contactNumber, setContactNumber] = useState('+91-8239635900');
  const [address, setAddress] = useState('301, Bakers Street');
  const [isEditing, setIsEditing] = useState(false);

  const navigate = useNavigate();

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div>
      <HomeAppBar/>
    <div id="prof">
      <div>
      

      <p>
        First Name: <input id="vino" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} disabled={!isEditing} />
      </p>
      <p>
        Last Name: <input id="vino" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} disabled={!isEditing} />
      </p>
      <p>
        Email: <input id="vino" type="email" value={email} onChange={(e) => setEmail(e.target.value)} disabled={!isEditing} />
      </p>
      <p>
        Contact Number: <input id="vino" type="tel" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} disabled={!isEditing} />
      </p>
      <p>
        Address: <input id="vino" type="text" value={address} onChange={(e) => setAddress(e.target.value)} disabled={!isEditing} />
      </p>
      
      <div style={{display:'flex',flexDirection:'column'}}>

      <div style={{ textAlign: 'center' }}>
        <button onClick={handleEditClick}>
          {isEditing ? 'Save Changes' : 'Edit Profile'}
        </button>
      </div>
      <div style={{ textAlign: 'center',paddingTop:'10px' }}>
        <button onClick={()=>navigate("/farmerhome")}>
          Back
        </button>
      </div>
      </div>

    </div>
    </div>
    </div>
  );
};

export default Profile;