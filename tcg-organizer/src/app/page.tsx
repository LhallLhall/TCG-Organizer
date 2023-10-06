"use client";
// import "./page.module.css";
// import "./page.css";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";

export default function Home() {
  let [cardData, setcardData] = useState([]);
  let [altCard, setAltCard] = useState(null);
  let [cardImage, setCardImage] = useState("");
  const [searchValue, setSearchValue] = useState("");
  // let inputField = document.getElementById("inputField");

  // const search = (e) => {
  //   setSearchValue(e.target.value);
  //   console.log(e.target.value);
  // };

  const submit = () => {
    if (searchValue !== "") {
      try {
        Axios.get(
          `https://api.magicthegathering.io/v1/cards?name=${searchValue}`
        ).then((response) => {
          setcardData(response.data.cards);
        });
        setSearchValue("");
      } catch {
        toast.error("Search Was Invalid");
        position: toast.POSITION.TOP_CENTER;
      }
    } else {
      toast.error("Search is empty");
      position: toast.POSITION.TOP_CENTER;
    }
  };

  function cardHandler(card) {
    let img =
      (card as any).imageUrl ||
      "https://placehold.co/265x370?text=Card+Not+Found";
    setCardImage(img);
    setAltCard(card);
  }

  // Map the card data to render the list
  let mappedData = cardData.map((card, i) => {
    let originalText = (card as any).originalText || (card as any).text;

    originalText = originalText.replace(/{T}, /g, "");

    return (
      <div key={i} className="">
        <li
          style={{}}
          id={"li" + i}
          className="list-group-item"
          onClick={() => cardHandler(card)}
        >
          <strong>{(card as any).name}</strong> - {(card as any).setName}
        </li>
      </div>
    );
  });

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
              />
              <label className="btn btn-outline-secondary" htmlFor="btnradio3">
                Yu-Gi-Oh!
              </label>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center p-3">
          <div className="input-group mb-3">
            <input
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
              onClick={submit}
            >
              Find Card
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="list-group">{mappedData}</div>
          </div>
          <div className="col-6">
            {/* Display selected card */}
            {altCard && (
              <div className="selected-card">
                <img
                  src={cardImage}
                  alt={(altCard as any).name}
                  // width="370px"
                  // height="265px"
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <ToastContainer />
    </main>
  );
}

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
