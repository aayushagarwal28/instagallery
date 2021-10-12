import React,{useState,useEffect} from 'react'
import { projectFireStorage, projectStorage, timestamp } from '../firebase/config'

export default function useStorage(file) {
    const [progress, setProgress] = useState(0);
    const [url, setUrl] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
      // references

      console.log("file",file);
      const storageRef = projectStorage.ref(file.name);//stores image file
     const collectionRef=projectFireStorage.collection('images'); //collection of image urls
      
      storageRef.put(file).on('state_changed', (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      }, (err) => {
        setError(err);
      }, async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt= timestamp(); //to store the time of file upload 
        collectionRef.add({url,createdAt});
        setUrl(url);
      });
    }, [file]);


    return {progress,error,url}
}
