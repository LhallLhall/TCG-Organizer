"use client";
// import Image from 'next/image'
// import styles from "./page.module.css";
import Axios from "axios";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";

export default function Home() {
  let [cardData, setcardData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  let inputField = document.getElementById("inputField");

  const search = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setSearchValue(e.target.value);
    console.log(e.target.value);
  };

  const submit = () => {
    if(searchValue !== ""){
      try{
        Axios.get(
          `https://api.magicthegathering.io/v1/cards?name=${searchValue}`
        ).then((response) => {
          setcardData(response.data.cards);
          // console.log(typeof cardData)
          console.log(response.data.cards);
          // console.log(cardData, "first data");
        });
      }catch{
        toast.error("Search Was Invalid");
        position: toast.POSITION.TOP_CENTER
      }
    } else {
      toast.error("Search is empty");
      position: toast.POSITION.TOP_CENTER
    }
    
  };

  console.log(cardData);
  let mappedData = cardData.map((card, i) => {
    console.log(card);
    let originalText = (card as any).originalText;
    if (originalText == null) {
      originalText = (card as any).text;
      originalText = originalText.replace(/{T}, /g, "");
    }
    return (
        <a href="#" className="list-group-item list-group-item-action" aria-current="true">
          <strong>{(card as any).name}</strong> - {(card as any).setName}
        </a>
      // <div className="col-6 col-s-4 col-m-3" key={Date.now()}>
      //   <div className="card" style={{ width: "18rem" }}>
      //     <img src={(card as any).imageUrl} className="card-img-top" alt="..." />
      //     <div className="card-body">
      //       <h5 className="card-title">{(card as any).name}</h5>
      //       <p className="card-text">{originalText}</p>
      //       <a href="#" className="btn btn-primary">
      //         Go somewhere
      //       </a>
      //     </div>
      //   </div>
      // </div>
    );
  });
  //! This is the main return
  return (
    <main style={{ height: "100vh", width: "100vw" }}>
      <div className="container w-100 h-100">
        <div className="">
          <input type="text" onChange={search} id="inputField" />
          <button className="btn btn-light" onClick={submit}>Search</button>
        </div>

        <div className="row">
          <div className="list-group">
            {mappedData}
          </div> 
          </div>
      </div>
      <ToastContainer/>
    </main>
  );
}

/*
<div class="list-group">
  <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
    The current link item
  </a>
  <a href="#" class="list-group-item list-group-item-action">A second link item</a>
  <a href="#" class="list-group-item list-group-item-action">A third link item</a>
  <a href="#" class="list-group-item list-group-item-action">A fourth link item</a>
  <a class="list-group-item list-group-item-action disabled">A disabled link item</a>
</div> 
*/
