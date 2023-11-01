"use client";
// import "./page.module.css";
// import "./page.css";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import CardDisplay from "./components/card-display";

export default function Home() {
  let [cardData, setcardData] = useState([]);
  let [apiCall, setApiCall] = useState(``);
  let [radioValue, setRadioValue] = useState("btnradio1");
  let [searchValue, setSearchValue] = useState("");
  let [apiSwitch, setApiSwitch] = useState("");
  // let inputField = document.getElementById("inputField");

  function submit() {
    console.log(apiCall);
    let apiUrl = "";
    if (radioValue === "btnradio1") {
      apiUrl = "https://api.magicthegathering.io/v1/cards";
      apiUrl += `?name=${searchValue}`;
    }
    if (radioValue === "btnradio2") {
      apiUrl = "https://api.pokemontcg.io/v2/cards";
      apiUrl += `?q=name:${searchValue}`;
      console.log(apiUrl, "apiUrl")
    }
    if (radioValue === "btnradio3") {
      apiUrl = "https://db.ygoprodeck.com/api/v7/cardinfo.php";
      apiUrl += `?name=${searchValue}`;
    }
    setApiCall(apiUrl);
    if (searchValue !== "") {
      try {
        Axios.get(apiCall).then((response) => {
          if (radioValue === "btnradio1") {
            setcardData(response.data.cards);
          }
          if (radioValue === "btnradio2") {
            setcardData(response.data.data)
          }
          if (radioValue === "btnradio3") {
            setcardData(response.data)
          }
          //make sure to change this to response.data when on pokemon api url
        });
        setSearchValue("");
        console.log(cardData)
      } catch {
        toast.error("Search Was Invalid");
        position: toast.POSITION.TOP_CENTER;
      }
    } else {
      toast.error("Search Is Empty");
      position: toast.POSITION.TOP_CENTER;
    }
  };


  let cardDisplayFunc = () => {
    // if (cardData){
      return <div><CardDisplay apiSwitch={apiSwitch} cardData={cardData} radioValue={radioValue}/></div>
    // }
  }

  return (
    <main style={{ height: "100vh", width: "100vw" }}>
      <div className="container w-100 h-100">
        <div className="row">
          <div className="col p-3 d-flex justify-content-center align-items-center">
            <div
              className="btn-group"
              role="group"
              aria-label="Basic radio toggle button group"
            >
              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio1"
                autoComplete="off"
                onClick={() => {
                  setcardData([])
                  setApiSwitch("mtg")
                  setRadioValue("btnradio1")
                }}
              />
              <label className="btn btn-outline-secondary" htmlFor="btnradio1">
                Magic the Gathering
              </label>

              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio2"
                autoComplete="off"
                onClick={() => {
                  setcardData([])
                  setApiSwitch("pokemon")
                  setRadioValue("btnradio2")
                }}
              />
              <label className="btn btn-outline-secondary" htmlFor="btnradio2">
                Pokémon
              </label>

              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio3"
                autoComplete="off"
                onClick={() => {
                  setcardData([])
                  setApiSwitch("yugioh")
                  setRadioValue("btnradio3")
                }}
              />
              <label className="btn btn-outline-secondary" htmlFor="btnradio3">
                Yu-Gi-Oh!
              </label>
            </div>
          </div>
        </div>
        <div id="cardDisplayContainer">
          <div className="row d-flex justify-content-center p-3">
            <div className="input-group mb-3">
              <input
                id="cardSearchInput"
                type="text"
                value={searchValue}
                className="form-control"
                placeholder="Card Name"
                aria-label="Card Name"
                aria-describedby="button-addon2"
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
                onClick={() => submit()}
              >
                Find Card
              </button>
            </div>
          </div>
          {cardDisplayFunc()}
        </div>
      </div>
      <ToastContainer />
    </main>
  );
}
