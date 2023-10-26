"use client";
import React from "react";
import { useState, useEffect } from "react";

export default function CardDisplay(props) {
  console.log(props)
  // console.log(props.cardData, "card data")
  // console.log(props,"props")
  let [altCard, setAltCard] = useState(null);
  let [cardImage, setCardImage] = useState("");
  let [cardData, setCardData] = useState([])

  useEffect(() => {
    setCardData(props.cardData);
  }, [props.cardData]);

  function cardHandler(card) {
    let img =
      (card).imageUrl ||
      `https://placehold.co/265x370?text=${card.name}+Image+Not+Found`;
    setCardImage(img);
    setAltCard(card);
  }
  if (cardData) {

    if (props.apiSwitch === "mtg") {
      return (
        <div>
        <div className="row">
          <div className="col-6">
            <div className="list-group">
              {cardData.map((card, i) => {
                let originalText = card.originalText || card.text;
                originalText = originalText.replace(/{T}, /g, "");
                return (
                  <div style={{}} key={card.name + i} className="">
                      <button
                        id={"li" + i + card.name}
                        className="list-group-item list-group-item-action"
                        onClick={() => cardHandler(card)}
                        >
                        <strong>{card.name}</strong> - {card.setName}
                      </button>
                    </div>
                  );
                })}
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
  
  if (props.apiSwitch === "pokemon") {
    console.log(cardData)
    return (
      <div>
        <div className="row">
          <div className="col-6">
            <div className="list-group">
              {/* {cardData.map((card, i) => {
                let cardName = card.name;
                let setName = card.setName;
                let originalText = card.originalText || card.text;
                originalText = originalText.replace(/{T}, /g, "");
                return (
                  <div style={{}} key={cardName + i} className="">
                  <button
                  id={"li" + i + cardName}
                  className="list-group-item list-group-item-action"
                  onClick={() => cardHandler(card)}
                  >
                  <strong>{cardName}</strong> - {setName}
                  </button>
                  </div>
                  );
                })} */}
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
    )
  }
  
  if (props.apiSwitch === "yugioh") {
    <div>
        <div className="row">
          <div className="col-6">
            <div className="list-group">
              {cardData.map((card, i) => {
                let cardName = card.name;
                let setName = card.setName;
                let originalText = card.originalText || card.text;
                originalText = originalText.replace(/{T}, /g, "");
                return (
                  <div style={{}} key={cardName + i} className="">
                      <button
                        id={"li" + i + cardName}
                        className="list-group-item list-group-item-action"
                        onClick={() => cardHandler(card)}
                        >
                        <strong>{cardName}</strong> - {setName}
                      </button>
                    </div>
                  );
                })}
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
  } 
}
  
}
