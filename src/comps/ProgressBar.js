import React,{useEffect} from 'react'
import useStorage from '../hooks/useStorage'
import {motion} from 'framer-motion'

export default function ProgressBar({file,setfile}) {
    const {url,progress}=useStorage(file,setfile);

    //disable progress bar once we get the url 
    useEffect(() => {
        if(url)
        setfile(null)
       
    }, [url])
    return (
        <motion.div className="progress-bar" 
        initial={{width: 0}}
        animate={{width: progress + '%'}}>  
        </motion.div>
    )
}
