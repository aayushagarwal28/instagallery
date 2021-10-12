import React from 'react'
import {motion} from 'framer-motion'    
export default function Modal({selectedImage,setselectedImage}) {

    const handleOutsideClick= (event)=>{
        //close only when user clicks on backdrop and not the image 
        if(event.target.classList.contains("backdrop")) 
        setselectedImage(null);
    }
    return (
        <div className="backdrop" onClick={handleOutsideClick}>
            <motion.img src={selectedImage} alt="" 
            initial={{y: "-100vh"}}
            animate={{y: 0}}
            /> 
        </div>
    )
}
