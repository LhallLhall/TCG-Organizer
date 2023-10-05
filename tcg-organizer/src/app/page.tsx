"use client";
// import Image from 'next/image'
// import styles from "./page.module.css";
import Axios from "axios";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";

export default function Home() {
  let [cardData, setcardData] = useState([]);
  let [altCard, setAltCard] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  let inputField = document.getElementById("inputField");

  const search = (e: { target: { value: React.SetStateAction<string> } }) => {
    setSearchValue(e.target.value);
    console.log(e.target.value);
  };

  const submit = () => {
    if (searchValue !== "") {
      try {
        Axios.get(
          `https://api.magicthegathering.io/v1/cards?name=${searchValue}`
        ).then((response) => {
          setcardData(response.data.cards);
        });
      } catch {
        toast.error("Search Was Invalid");
        position: toast.POSITION.TOP_CENTER;
      }
    } else {
      toast.error("Search is empty");
      position: toast.POSITION.TOP_CENTER;
    }
  };

  function cardHandler(card: React.SetStateAction<never[]>) {
    console.log("HELLO IS THIS HITTING?????");
    setAltCard(card);
    console.log("alt card", altCard);
    console.log(card);
  }
  console.log(cardData);

  let mappedData = cardData.map((card, i) => {
    console.log(card);
    let originalText = (card as any).originalText;
    if (originalText == null) {
      originalText = (card as any).text;
      originalText = originalText.replace(/{T}, /g, "");
    }
    let li = document.getElementById("li" + i);
    if (li) {
      li.addEventListener("click", (event: MouseEvent) => {
        cardHandler(card);
      });
    }
    return (
      <div key={i} className="">
        <li id={"li" + i} className="list-group-item">
          <strong>{(card as any).name}</strong> - {(card as any).setName}
        </li>
      </div>
    );
  });
  // <div id={"item" + i} className="collapse">
  //   <div className="row">
  //     <div className="col-6 d-flex align-items-center justify-content-center">
  //       <img src={(card as any).imageUrl} className="" alt="..." />
  //     </div>
  //     <div className="col-6 d-flex justify-content-center">
  //       <p>{originalText}</p>
  //     </div>
  //   </div>
  // </div>

  //! This is the main return
  return (
    <main style={{ height: "100vh", width: "100vw" }}>
      <div className="container w-100 h-100">
        <div className="d-flex">
          <input type="text" onChange={search} id="inputField" />
          <button className="btn btn-light" onClick={submit}>
            Search
          </button>
        </div>

        <div className="row">
          <div className="col-6">
            <div className="list-group">{mappedData}</div>
          </div>
          <div className="col-6"></div>
        </div>
      </div>
      <ToastContainer />
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

/* <a href="#" className="list-group-item list-group-item-action dropdown-toggle" aria-current="true" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <strong>{(card as any).name}</strong> - {(card as any).setName}
        </a>
        <div className="dropdown-menu">
          <p className="">{originalText}</p>
          <img
            src={(card as any).imageUrl}
            className="card-img-top"
            alt="..."
            width={"370px"}
            height={"265px"}
          />
        </div> */
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
