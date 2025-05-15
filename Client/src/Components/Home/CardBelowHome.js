import React from 'react';
import golden1 from "./images/golden1.png";

{/*
const formatNumber = (number) => {
    const suffixes = ['', 'k', 'M', 'B', 'T'];
    const suffixNum = Math.floor(('' + number).length / 3);
    const shortNumber = parseFloat((number / Math.pow(1000, suffixNum)).toFixed(1));
    return shortNumber >= 1 ? `${shortNumber}${suffixes[suffixNum]}${"+"}` : number.toString();
  };
*/}

const CardBelowHome = () => {
  return (
    <div className = "cardcontainer">
      <div className='left-pic'>
        <img src={golden1} alt="Dog with toy"/>
        {/*<div className='left-para'><p><p className='adopted-pets-num'>{adoptedPets}</p> Furry Friends<br/>Living Their Best Lives</p></div>
        <div className='right-pic'><img src={HomeDarkCardRightPic} alt="Dog pic" /></div>
        <div className='right-para'><p className='we-do'>WHAT WE DO?</p>With a focus on matching the right pet with the right family, PawFinds makes it easy to adopt love and foster happiness.</div>
          
        <div className='overlay-text'>
          Life is better<br />
          with fur,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;paws,<br />
          and a&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;little<br />
          chaos
        </div>*/}
      </div>
    </div>
  )
}

export default CardBelowHome;

