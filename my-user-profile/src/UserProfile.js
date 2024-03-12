import React, { useState } from 'react';
import './UserProfile.css'; 

function UserProfile() {
  const [userProfile, setUserProfile] = useState({
    name: '',
    email: '',
    address: {
      street: '',
      city: '',
      country: ''
    }
  });

  const [displayProfile, setDisplayProfile] = useState({ ...userProfile }); // New state for displaying profile

  const handleUserChange = (e, field) => {
    setUserProfile({ ...userProfile, [field]: e.target.value });
  };

  const handleAddressChange = (e, field) => {
    setUserProfile(prevState => ({
      ...prevState,
      address: {
        ...prevState.address,
        [field]: e.target.value
      }
    }));
  };

  const submitUpdates = () => {
    setDisplayProfile({ ...userProfile }); // Update displayed profile with current state
  };

  return (
    <div className="user-profile">
      <h1>Profile Information</h1>
      <input
        type="text"
        placeholder="Name"
        className="input-field"
        value={userProfile.name}
        onChange={(e) => handleUserChange(e, 'name')}
      />
      <input
        type="email"
        placeholder="Email"
        className="input-field"
        value={userProfile.email}
        onChange={(e) => handleUserChange(e, 'email')}
      />
      <input
        type="text"
        placeholder="Street"
        className="input-field"
        value={userProfile.address.street}
        onChange={(e) => handleAddressChange(e, 'street')}
      />
      <input
        type="text"
        placeholder="City"
        className="input-field"
        value={userProfile.address.city}
        onChange={(e) => handleAddressChange(e, 'city')}
      />
      <input
        type="text"
        placeholder="Country"
        className="input-field"
        value={userProfile.address.country}
        onChange={(e) => handleAddressChange(e, 'country')}
      />

      <button className="submit-button" onClick={submitUpdates}>Update Profile</button>

      <div className="profile-display">
        <p><strong>Name:</strong> {displayProfile.name}</p>
        <p><strong>Email:</strong> {displayProfile.email}</p>
        <p><strong>Address:</strong></p>
        <p>Street: {displayProfile.address.street}</p>
        <p>City: {displayProfile.address.city}</p>
        <p>Country: {displayProfile.address.country}</p>
      </div>
    </div>
  );
}

export default UserProfile;
