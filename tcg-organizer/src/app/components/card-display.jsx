"use client";
import scrollbar from "../scrollbar.module.css"
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

  useEffect(() => {
    setAltCard(null)
  }, [props.apiSwitch])

  function cardHandler(card) {
    if (props.apiSwitch === "mtg") {
      let img =
        (card).imageUrl ||
        `https://placehold.co/265x370?text=${card.name}+Image+Not+Found`;
      setCardImage(img);
      setAltCard(card);
    }
    if (props.apiSwitch === "pokemon") {
      let img =
        (card).images.small ||
        `https://placehold.co/265x370?text=${card.name}+Image+Not+Found`;
      setCardImage(img);
      setAltCard(card);
    }
    if (props.apiSwitch === "yugioh") {
      let img =
        (card).imageUrl ||
        `https://placehold.co/265x370?text=${card.name}+Image+Not+Found`;
      setCardImage(img);
      setAltCard(card);
    }
  }
  if (cardData) {

    if (props.apiSwitch === "mtg") {
      return (
        <div>
        <div className="row">
          <div className="col-6">
            <div>
              <div className={`list-group`} style={{ height: "340px"}}>
                {cardData.map((card, i) => {
                  // let originalText = card.originalText || card.text;
                  // originalText = originalText.replace(/{T}, /g, "");
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
            <div className="list-group overflow" style={{overflowY: "scroll", height: "340px"}}>
              {cardData.map((card, i) => {
                let cardName = card.name;
                let setName = card.set.name;
                // let originalText = card.originalText || card.text;
                // originalText = originalText.replace(/{T}, /g, "");
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
    )
  }
  
  if (props.apiSwitch === "yugioh") {
    return(
      <div>
        <div className="row">
          <div className="col-6">
            <div className="list-group overflow" style={{overflowY: "scroll", height: "340px"}}>
              {cardData.map((card, i) => {
                let cardName = card.name;
                console.log(cardName)
                // let setName = () => {
                  //   array = [];
                  //   card.card_sets.forEach(set => {
                    //     array.push(set)
                    //   });
                    //   return array[0].set_name;
                    // }
                    // let originalText = card.originalText || card.text;
                    // originalText = originalText.replace(/{T}, /g, "");
                    return (
                      <div style={{}} key={cardName + i} className="">
                      <button
                        id={"li" + i + cardName}
                        className="list-group-item list-group-item-action"
                        onClick={() => cardHandler(card)}
                        >
                        <strong>{cardName}</strong> - {cardName}
                      </button>
                    </div>
                  );
                })}
            </div>
          </div>
          {/* <div className="col-6">
            {altCard && (
              <div className="selected-card">
              <img src={cardImage} alt={altCard.name} />
              </div>
              )}
            </div> */}
        </div>
      </div>
    )
  } 
}

}
