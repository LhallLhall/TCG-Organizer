"use client";
import React from "react";
import { useState, useEffect } from "react";

export default function CardDisplay(props) {
  let [altCard, setAltCard] = useState(null);
  let [cardImage, setCardImage] = useState("");

  function cardHandler(card: React.SetStateAction<null>) {
    let img =
      (card as any).imageUrl ||
      "https://placehold.co/265x370?text=Card+Not+Found";
    setCardImage(img);
    setAltCard(card);
  }

  let mappedData = props.cardData.map((card, i) => {
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
    <div>
      <div className="row">
        <div className="col-6">
          <div className="list-group">{mappedData}</div>
        </div>
        <div className="col-6">
          {altCard && (
            <div className="selected-card">
              <img src={cardImage} alt={(altCard as any).name} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
