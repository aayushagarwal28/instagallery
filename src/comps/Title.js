import React,{useEffect} from 'react';
import { fire } from '../firebase/config'

const Title = ({logoutUser}) => {


  return (
    <section className="navBar">

      <nav>
        <h2>Insta Gallery</h2>
        <button onClick={logoutUser}>Logout </button>
      </nav>
          {/*
    <div className="title">
      <h1>InstaGallery</h1>
      <h2>Your Pictures</h2>
      <p>Welcome to the insta gallery</p>
    </div>
    */}
    </section>

    
  )
}

export default Title;