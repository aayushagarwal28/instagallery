import React,{useState} from 'react'
import ProgressBar from './ProgressBar'

export default function FileUpload() {
    const [file, setfile] = useState(null)
    const [error, seterror] = useState("")
    const types=['image/png','image/jpeg','image/jpeg']


    const changeFile = (event)=>{
        let selected= event.target.files[0];
        if(selected && types.includes(selected.type))
        {
            setfile(selected);
            seterror("");
        }
        else{
            seterror("Please upload image file(png/jpg/jpeg)");
            setfile(null);
        }
    }
    return (
       <form className="uploadForm">
           <label>
           <input type="file" onChange={changeFile}/>
           <span>+</span>
           </label>
           <div className="output">
           {error && <div className="error">{error}</div>}
           {file && <div>{file.name}</div>}
           {file && <ProgressBar file={file} setfile={setfile}/>}
           </div>
       </form>
    )
}
