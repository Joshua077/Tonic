import React from 'react'
import './style.css';
import Image1 from "../../Assets/Rectangle 4.png" 
import Image2 from "../../Assets/Rectangle1.png" 
import Image3 from "../../Assets/Rectangle2.png" 
import Image4 from "../../Assets/Rectangle3.png" 
import Image5 from "../../Assets/Large.png"

export default function Frame1(props) {
    
    return (
        <div className='frame1'>
            <div className="container1">
          
          <img src={Image1} alt="Logo" />
          <img src={Image3} alt="Logo" />
        
      </div>
      <div className="container2">
        <img src={Image5} alt="Logo" />
      </div>
      <div className="container3">
       
          <img src={Image4} alt="Logo" />
          <img src={Image2} alt="Logo" />
       
      </div>
        </div>
    )
}
