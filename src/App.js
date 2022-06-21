import React, { useState } from "react";
import Title from './comps/Title';
import ImageBlock from "./comps/ImageBlock";
import Modal from "./comps/Modal";
import Header from "./comps/Header";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./comps/LoginPage";
import { auth } from "./firebase/config";
import { onAuthStateChanged } from "@firebase/auth";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  })

  return (
    <div className="App">
      <Header user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={
          <>
            <Title />
            <ImageBlock user={user} setSelectedImg={setSelectedImg} />
            { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} /> }
          </>
        } />
        <Route path="/login" element={<LoginPage setUser={setUser} />} />
       
        <Route path="*" element={<p>Page Is Not Found</p>} />
      </Routes>
    </div>
  );
}

export default App;
