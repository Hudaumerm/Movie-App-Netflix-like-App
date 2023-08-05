import React from 'react'
import './Footer.css'
import {MDBFooter} from 'mdb-ui-kit'
import FooterColumn from './FooterColumn';
import { BsFacebook, BsInstagram, BsLinkedin, BsTiktok, BsTwitter, BsYoutube } from 'react-icons/bs';
import { footerData } from '../../Request';

function Footer() {
  return (
    <footer className="bg-dark text-center text-lg-start">
   
    <div className="container p-4">
      
      <div className="row footer-row">
        <p className="h6">Questions?Call 1-844-505-2993</p>
       {footerData.map((item,index)=>{
        if(index%4 === 0){
        const nextFourLinks=footerData.slice(index,index+4)
          
           
               return(<FooterColumn keys={item.id} linksToDisplay={nextFourLinks}/>)
          
       
        
 } })}
       
       
       
      </div>
     
    </div>
    <div className="text-center pt-4">
        <BsFacebook/><BsTwitter/><BsInstagram/><BsYoutube/><BsTiktok/><BsLinkedin/>
    </div>
  
   
    <div className="text-center p-3">
      © 2023 Copyright:
      <a className="text-dark" href="#">Netflix.com</a>
    </div>
   
  </footer>






    
  )
}

export default Footer