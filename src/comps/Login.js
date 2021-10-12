import { auth } from 'firebase'
import React,{useState,useEffect} from 'react'
import { fire } from '../firebase/config'
import '../login.css'
import FileUpload from './FileUpload'
import ImageList from './ImageList'
import Modal from './Modal'
import Title from './Title'
export default function Login() {

    const [user, setuser] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [emailError, setemailError] = useState('')
    const [pswdError, setpswdError] = useState('')
    const [hasAccount, sethasAccount] = useState(false)
    const [selectedImage, setselectedImage] = useState(null)

    const handleLogin = ()=>{
        clearErrors();
        fire
        .auth()
        .signInWithEmailAndPassword(email,password)
        .catch((err)=>{
            switch (err.code) {
                case 'auth/invalid-email':
                case 'auth/user-disabled':
                case 'auth/user-not-found':    
                   setemailError(err.message);
                   break;
                case 'auth/invalid-password':
                    setpswdError(err.message);
                    break;
               
            }
        })
    }

    const handleSignup = ()=>{

        clearErrors();

        fire
        .auth()
        .createUserWithEmailAndPassword(email,password)
        .catch((err)=>{
            switch (err.code) {
                case 'auth/email-already-in-use':
                case 'auth/invalid-email': 
                   setemailError(err.message);
                   break;
                case 'auth/weak-password':
                    setpswdError(err.message);
                    break;
               
            }
        })
    }
    const handlelogout = ()=>{
        fire
        .auth()
        .signOut();
    }
    const authListner = ()=>{
        fire.auth().onAuthStateChanged(
            user =>
            {
                if(user){
                setuser(user);
                clearInputs();
                }
                else
                setuser('');
            }
        )
    }
    useEffect(() => {
       authListner();
    }, [])

    const clearInputs = ()=>{
        setemail('');
        setpassword('');
    }
    const clearErrors = ()=>{
        setemailError('');
        setpswdError('');
    }
    
    return (
        <div>
            { user ?
      
      <>
      <Title logoutUser={handlelogout} />
      <FileUpload/>
      <ImageList setselectedImage={setselectedImage}/>
      {selectedImage && <Modal selectedImage={selectedImage} setselectedImage={setselectedImage}/>}
      </>
      :
            <section className="login">
                <div className="loginContainer">
                    <label>Username</label>
                    <input type="text" autoFocus required value={email} onChange={e=>setemail(e.target.value)} />
                    <p className="error Msg">{emailError}</p>

                    <label>Password</label>
                    <input type="password" autoFocus required value={password} onChange={e=>setpassword(e.target.value)} />
                    <p className="error Msg">{pswdError}</p>
                    <div className="btnContainer">
                        {hasAccount ?
                        <>
                        <button onClick={handleLogin} >Sign in</button>
                        <p>Don't have an account? <span onClick={()=>sethasAccount(!hasAccount)}>Sign up </span></p>
                        </>
                        :
                        <>
                        <button onClick={handleSignup}>Sign up</button>
                        <p>Have an account?  <span onClick={()=>sethasAccount(!hasAccount)}>Sign in </span></p>
                        </>
                       }
                    </div>
                </div>
            </section>
}
        </div>
    )
}
