"use client";
// import Image from 'next/image'
// import styles from "./page.module.css";
import Axios from "axios";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";

export default function Home() {
  let [cardData, setcardData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  let inputField = document.getElementById("inputField");

  const search = (e: { target: { value: React.SetStateAction<string> } }) => {
    setSearchValue(e.target.value);
    console.log(e.target.value);
  };

  const submit = () => {
    Axios.get(
      `https://api.magicthegathering.io/v1/cards?name=${searchValue}`
    ).then((response: { data: { cards: React.SetStateAction<never[]>; }; }) => {
      setcardData(response.data.cards);
      // console.log(typeof cardData)
      console.log(response.data.cards);
      console.log(cardData, "first data");
    });
  };

  console.log(cardData);
  function CardsData() {
    let mappedData = cardData.map((card, i) => {
      console.log(card);
      let originalText = card.originalText;
      if (originalText == null) {
        originalText = card.text;
        originalText = originalText.replace(/{T}, /g, "");
      }
      return (
        <div className="col-3" key={i}>
          <div className="card" style={{ width: "18rem" }}>
            <img src={card.imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{card.name}</h5>
              <p className="card-text">{originalText}</p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      );
    });
    return mappedData
  }
  //! This is the main return
  return (
    <main style={{ height: "100vh", width: "100vw" }}>
      <div className="container w-100 h-100">
        <div className="">
          <input type="text" onChange={search} id="inputField" />
          <button onClick={submit}>Search</button>
        </div>

        <div className="row">{CardsData}</div>
      </div>
    </main>
  );
}
