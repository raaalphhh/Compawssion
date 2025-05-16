import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PetsViewer from '../Pets/PetsViewer'; // Adjust the import path if needed
import footPrint from "./images/footPrint.png"; // Keep the footprint

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const MeetYourFurryFriend = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    // ✅ Fetch pets from your backend API
    fetch("https://compawssion.onrender.com/approvedPets")
      .then((res) => res.json())
      .then((data) => setPets(data.slice(0, 3))) // 👈 Show only 3 pets
      .catch((error) => console.error("Error fetching pets:", error));
  }, []);

  return (
    <div className='meetyourfurryfriend-container'>
      <h1>meet your furry friend</h1>

      <div className='meetyourfurryfriendboxes-container'>
        {pets.length === 0 ? (
          <p>Loading pets...</p>
        ) : (
          pets.map((pet) => <PetsViewer key={pet._id} pet={pet} />)
        )}
      </div>

      <div className="adopt-btn">
        <Link to="./pets">
          <button className="Home-button" onClick={scrollToTop}>
            <p>See more</p>
            <img src={footPrint} alt="footprint" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MeetYourFurryFriend;