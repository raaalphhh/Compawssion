import React, { useState, useMemo } from 'react';
import AdoptForm from '../AdoptForm/AdoptForm';
import { formatDistanceToNow } from 'date-fns';

const PetsViewer = (props) => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const formatTimeAgo = (updatedAt) => {
    const date = new Date(updatedAt);
    return formatDistanceToNow(date, { addSuffix: true });
  };

 const colors = ['#EFCA3A', '#FEA3A4', '#BDD51E', '#1DD4CB', '#ED7BE2'];

  const randomColor = useMemo(() => {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
  }, []);

  return (
    <div className='pet-view-card'
    style={{
        backgroundColor: randomColor,
      }}
      >
  <div className="pet-card-pic">
    <img src={`https://compawssion.onrender.com/images/${props.pet.filename}`} alt={props.pet.name} />
  </div>

  <div className="pet-bottom-row">
    <div className="pet-card-details">
      <h2>{props.pet.name}</h2>
      <p>{props.pet.type}</p>
      <p>{props.pet.age}</p>
      <p>{props.pet.area}</p>
      <p>{formatTimeAgo(props.pet.updatedAt)}</p>
    </div>

    <div className="show-interest-btn-side">
      <button onClick={togglePopup}>
        Adopt <i className="fa fa-paw"></i>
      </button>
    </div>
  </div>
      {showPopup && (
  <>
    {/* Blur overlay */}
    <div className="blur-overlay"></div>

    {/* Popup */}
    <div className="popup">
      <div className="popup-content scrollable-popup">
        <AdoptForm closeForm={togglePopup} pet={props.pet} />
      </div>
      <button onClick={togglePopup} className="close-btn">
        Close <i className="fa fa-times"></i>
      </button>
    </div>
  </>
)}
    </div>
  );
};

export default PetsViewer;
