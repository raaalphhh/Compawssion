import React from "react";
import './Contact.css';
import iaImage from './images/ia.png';
import armImage from './images/arm.png';
import ralImage from './images/ral.png';
import yesImage from './images/yes.png';
import ryImage from './images/ry.png';
import comImage from './images/com.png';

const contacts = [
  {
    url: "mailto:compawssion@gmail.com", // Replace with your actual Gmail address
    image: comImage,                    // Same image, or change to Gmail icon if you want
  },
  {
    name: "Ia Micah G. Castro",
    position: "Head, Operations",
    url: "https://web.facebook.com/castroiamicah",
    image: iaImage,
  },
  {
    name: "Irysse J. Erfe",
    position: "Head Veterinarian",
    url: "https://web.facebook.com/aieriyosusae",
    image: ryImage,
  },
  {
    name: "James Neftali B. Armado",
    position: "Head, Logistics",
    url: "https://www.facebook.com/imveryweak",
    image: armImage,
  },
  {
    name: "Ralph D. Buenaventura",
    position: "Head, Technical",
    url: "https://web.facebook.com/raaalphhhb/",
    image: ralImage,
  },
  {
    name: "Yesuah Jirah D. Lorenzo",
    position: "Head, Marketing",
    url: "https://web.facebook.com/yesuhjirahdlorenzo",
    image: yesImage,
  },
];

const Contact = () => {
  return (
    <div className="contactUs-main-container">
      <div className="container">
        {contacts.map((contact, index) => (
          <div
            className="card"
            key={index}
            style={{ backgroundImage: `url(${contact.image})` }}
          >
            <div className="overlay"></div>

            <div className="border">
              <h2>{contact.name}</h2>
              {contact.position && <p className="position">{contact.position}</p>}
              <div className="icons">
                {contact.url && (
                  <a href={contact.url} target="_blank" rel="noopener noreferrer">
                    <i
                      className={`fa ${index === 0 ? 'fa-envelope' : 'fa-facebook'}`}
                      aria-hidden="true"
                      style={index === 0 ? { color: 'black' } : {}}
                    ></i>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;