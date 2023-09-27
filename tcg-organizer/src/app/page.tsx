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

  // const mtg = require('mtgsdk')

  // partial name match

  const search = (e: { target: { value: React.SetStateAction<string> } }) => {
    setSearchValue(e.target.value);
    console.log(e.target.value);
  };

  const submit = () => {
    Axios.get(
      `https://api.magicthegathering.io/v1/cards?name=${searchValue}`
    ).then((response) => {
      setcardData(response.data);
      // console.log(typeof cardData)
      console.log(response.data);
      console.log(cardData, "first data");
    });

    console.log(cardData, "second data");
  };
  var isThisWorking = ["hello", "is", "this", "working?"];
  console.log(cardData);
  let mappedData = cardData.map((card, i) => {
    console.log(card);
    return (
      <div className="col-3" key={i}>
        <div className="card" style={{ width: "18rem" }}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"></h5>
            <p className="card-text"></p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  });
  console.log(typeof mappedData);
  //! This is the main return
  return (
    <main style={{ height: "100vh", width: "100vw" }}>
      <div className="container w-100 h-100">
        <div className="">
          <input type="text" onChange={search} id="inputField" />
          <button onClick={submit}>Search</button>
        </div>

        <div className="container">
          <div>{mappedData}</div>
        </div>
      </div>
    </main>
  );
}
