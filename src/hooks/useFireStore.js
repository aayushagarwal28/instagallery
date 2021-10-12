import React,{useState,useEffect} from 'react'
import { projectFireStorage } from '../firebase/config'

export default function useFireStore(collection) {

    //retrive the documents from specified firebase collections , order them based on created timestamp 
    // and set state. 

    const [docs, setdocs] = useState([])
    useEffect(() => {
        const unsub= projectFireStorage.collection(collection)
        .orderBy('createdAt','desc')
        .onSnapshot(snap =>{
            let documents= [];
            snap.forEach(doc =>{
                documents.push({...doc.data(),id: doc.id})
            });
            setdocs(documents);
        })
        return ()=>{
            unsub(); //unsubscribe on unmount
        }
    }, [collection])
        
    return {docs}
}
