import {useState} from 'react'
import '../css/Header.css';
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { GiClothes } from "react-icons/gi";


function Header() {
  return (
    <div>
      <div className='header'>
      <div>
        <img className= 'resim' src="./src/images/3.png"/>
        <div className='baslik'>
        <p>HESTİA</p>
      </div>
      <div className='instagram'>
      <FaInstagram />
      <div className='twitter'>
      <FaXTwitter />
      <div className='home'> 
        <IoMdHome />
        <div className='phone'>
        <FaPhone />
        <div className='envelope'>
        <FaEnvelope />
        </div>
        
        
        </div>
      </div>
      </div>
      </div>
      </div>
    </div>
     </div>
  )
}

export default Header
