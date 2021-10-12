import React from 'react'
import useFireStore from '../hooks/useFireStore'
import {motion} from 'framer-motion'

export default function ImageList({setselectedImage}) {
    const {docs}= useFireStore('images');
    console.log("Docs",docs);
    return (
        <div className="img-grid">
            {
                docs && docs.length > 0 &&
                docs.map(doc =>(
                <motion.div  layout whileHover={{opacity: 1}} className="img-wrap" key={doc.id} onClick={()=>setselectedImage(doc.url)}>
                    <img src={doc.url} alt="No image found" />
                </motion.div>
                ))
            }
        </div>
    )
}
