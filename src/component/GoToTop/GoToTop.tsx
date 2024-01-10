'use client'
import './GoToTop.css'
import Image from 'next/image';
import upparrow from "./nav-arrow-up.png";
import React from 'react'
import { Smooch } from 'next/font/google';


const GoToTop = () => {


      // When the user scrolls down 20px from the top of the document, show the button
      window.onscroll = function () { scrollFunction() };
  
      function scrollFunction() {
          if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn")!.style.display = "block";
    } else {
        document.getElementById("myBtn")!.style.display = "none";
    }
      } 
  
      // When the user clicks on the button, scroll to the top of the document
      function topFunction() {
        window.scroll({top:0,behavior:'smooth'})
         
          
      }
  

  return (
    <div className="GoToTop" onClick={topFunction} id="myBtn">
    <Image src={upparrow} alt='Up-arrow' />
   </div>
  )
}

export default GoToTop

