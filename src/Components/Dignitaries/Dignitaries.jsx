import React from 'react';
import './Dignitaries.css';
import image1 from "../../assets/Diginitaries/Ameer_.jpg"
import image2 from "../../assets/Diginitaries/Kavish.jpg"
import image3 from "../../assets/Diginitaries/Shrey_s.jpg"
import image4 from "../../assets/Diginitaries/Rashi_k.jpg"
import image5 from "../../assets/Diginitaries/sakshi_p.jpg"
import image6 from "../../assets/Diginitaries/Amit_P.jpg"
import image7 from "../../assets/Diginitaries/Shrey_p.jpg"
import image8 from "../../assets/Diginitaries/krupesh_s.jpg"
import image9 from "../../assets/Diginitaries/Prahlad_R.jpg"


const dignitaries = [
    { name: 'Rtr. Ameer Shaikh', title: 'Club President 24-25', imgSrc: image1 },
    { name: 'Rtr. Kavish Vyas', title: 'Club Secretary 24-25', imgSrc: image2 },
    { name: 'Rtr. Shrey Shaparia', title: 'Immediate Past President & Entrepreneurship Development Director', imgSrc: image3 },
    { name: 'PP Rtr: Rashi Kewat', title: 'Treasurer & Club Advisor', imgSrc: image4 },
    { name: 'PP Rtr. Sakshi Patil', title: 'Sargent-At-Arms', imgSrc: image5 },
    { name: 'PP Rtn. Amit Patil', title: 'Club Moderator', imgSrc: image6 },
    { name: 'Rtr. Shrey Patil', title: 'Vice President', imgSrc: image7 },
    { name: 'Rtr. Krupesh Shinde', title: 'Joint Secretary', imgSrc: image8 },
    { name: 'Rtr. Prahlad Raval', title: 'HRD', imgSrc: image9 },
  ];
  
  const RotractPage = () => {
    return (
      <div className="rotary-page">
        <h2>Our Dignitaries Of Rotaract<br/>2024-2025</h2>
        <div className="dignitaries-grid">
          {dignitaries.map((dignitary, index) => (
            <div key={index} className="dignitary-card">
              <img src={dignitary.imgSrc} alt={dignitary.name} />
              <h3>{dignitary.name}</h3>
              <p>{dignitary.title}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default RotractPage;
