import React from "react";
import "./CharacterCard.scss";
const CharacterCard = ({ character }) => {
  return (
    <div className="character-card">
      <div className="character-card__card">
        <div className="character-card__card__img">
          <img src={character.image}></img>
        </div>
        <div className="character-card__card__detail">
          <div>
            <h2 className="character-card__margin-remove">
              <b>{character.name}</b>
            </h2>
            <p
              className="character-card__margin-remove"
              style={{ display: "flex", alignItems: "center" }}
            >
              <span
                className={`character-card__status-icon${
                  character.status === "Alive" ? "__alive" : "__dead"
                }`}
              ></span>
              {character.status} - {character.species}
            </p>
          </div>
          <div>
            <p className="character-card__card__detail__label character-card__margin-remove">
              Last known location:
            </p>
            <p className="character-card__margin-remove">
              {character.location.name}
            </p>
          </div>
          <div>
            <p className="character-card__card__detail__label character-card__margin-remove">
              First seen in:
            </p>
            <p className="character-card__margin-remove character-card__card__detail__last-seen">
              {character.origin.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
