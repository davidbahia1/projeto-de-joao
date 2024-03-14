import { useState } from "react";
import imglogo from '../assets/logo.png'
import './Footer.css'
import imginstagram from '../assets/instagram.svg'
import imgwhatsapp from '../assets/whatsapp.svg'
function Footer(){
    return (
        
       <section className="footer"> 
        <div>
        <div className="dive">
        <img src={imglogo} alt=""></img>
        </div>
       
        </div>
    
        <div className="div-loc">
        <h4>LOCALIZAÇÃO</h4>
            <h4>CONTATOS</h4>
        </div>
        <div className="div-img">
           <a href="" target="blank"> <img src={imgwhatsapp}alt="logo wpp" /></a>
          <a  href="" target="blank"> <img src={imginstagram} alt="logo insta" /></a> 
        </div>
        </section>
    )
}

export default Footer