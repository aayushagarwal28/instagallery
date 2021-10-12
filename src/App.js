import React,{useState} from 'react';
import FileUpload from './comps/FileUpload';
import ImageList from './comps/ImageList';
import Login from './comps/Login';
import Modal from './comps/Modal';
import Title from './comps/Title';

function App() {

  const [isUserAuthenticated, setisUserAuthenticated] = useState(false);
  const [selectedImage, setselectedImage] = useState(null)

  return (
    <div className="App">
      {isUserAuthenticated ?
      <>
      <Title authenticateUser={()=>setisUserAuthenticated(false)}/>
      <FileUpload/>
      <ImageList setselectedImage={setselectedImage}/>
      {selectedImage && <Modal selectedImage={selectedImage} setselectedImage={setselectedImage}/>}
      </>
      :
      <Login  authenticateUser={()=>setisUserAuthenticated(true)} />
      }
    </div>
  );
}

export default App;
