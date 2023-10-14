"use client";
import React from "react";
import { useState, useEffect } from "react";

export default function CardDisplay(props) {
  // console.log(props.cardData, "card data")
  // console.log(props,"props")
  let [altCard, setAltCard] = useState(null);
  let [cardImage, setCardImage] = useState("");
  let [cardData, setCardData] = useState([])

  useEffect(() => {
    setCardData(props.cardData);
  }, [props.cardData]);

  function cardHandler(card) {
    // let button = document.getElementById("li" + i)
    // if (button.classList.contains("active")) {
    //   button.classList.add("active")
    // } else {
    //   button.classList.remove("active")
    // }
    let img =
      (card).imageUrl ||
      `https://placehold.co/265x370?text=${card.name}+Image+Not+Found`;
    setCardImage(img);
    setAltCard(card);
  }
  
  return (
    <div>
      <div className="row">
        <div className="col-6">
          <div className="list-group">{
              cardData.map((card, i) => {
                let originalText = card.originalText || card.text;
                originalText = originalText.replace(/{T}, /g, "");
                return (
                  <div key={Date.now} className="">
                    <button
                      id={"li" + i + card.name}
                      className="list-group-item list-group-item-action"
                      onClick={() => cardHandler(card)}
                    >
                      <strong>{card.name}</strong> - {card.setName}
                    </button>
                  </div>
                );
              })
            }
          </div>
        </div>
        <div className="col-6">
          {altCard && (
            <div className="selected-card">
              <img src={cardImage} alt={altCard.name} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
