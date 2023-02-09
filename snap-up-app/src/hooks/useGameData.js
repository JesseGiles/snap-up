import { useState } from "react";
import { shuffle } from "../helpers/selectors.js";
const { horrorDeck } = require("../db/DeckFiles/horrorDeck.js");
const { sailorMoonDeck } = require("../db/DeckFiles/sailorMoonDeck.js");
const { pusheenDeck } = require("../db/DeckFiles/pusheenDeck.js");
const { goldenGirlsDeck } = require("../db/DeckFiles/goldenGirlsDeck.js");
const { cerealDeck } = require("../db/DeckFiles/cerealDeck.js");
const {
  oppLeftCardZone,
  oppMiddleCardZone,
  oppRightCardZone,
} = require("../db/oppTestCards.js");

const useGameData = () => {
  const [state, setState] = useState({
    // shuffle calls the function and puts in the two 1/2 decks as one combined array of 12 cards
    deck: [],
    hand: [],
    energy: 0,
    turn: 0,
    leftCardZone: [],
    middleCardZone: [],
    rightCardZone: [],
    oppLeftCardZone: [],
    oppMiddleCardZone: [],
    oppRightCardZone: [],
    nextTurnIsAllowed: true,
  });

  function nextTurn(state, setState, socket, player) {
    if (!state.nextTurnIsAllowed) {
      alert("Please wait for the opponent to make their turn");
    }
    if (state.nextTurnIsAllowed) {
      if (state.deck.length > 0 && state.turn < 6) {
        const newDeck = [...state.deck];
        const draw = [...state.hand];
        draw.push(newDeck.pop());

        // map through each of the cardzone arrays and set cardPosition = 'fixed'
        const newLeftCardZone = [...state.leftCardZone];
        const newMiddleCardZone = [...state.middleCardZone];
        const newRightCardZone = [...state.rightCardZone];

        newLeftCardZone.map((card) => {
          card.cardPosition = "fixed";
        });
        newMiddleCardZone.map((card) => {
          card.cardPosition = "fixed";
        });
        newRightCardZone.map((card) => {
          card.cardPosition = "fixed";
        });

        // let middleLocation;
        // let rightLocation;
        // if (state.turn === 1) {
        //   middleLocation = getLocation();
        //   rightLocation = state.locationRight;
        // }
        // if (state.turn === 2) {
        //   rightLocation = getLocation();
        //   middleLocation = state.locationMiddle;
        // }

        setState((prev) => ({
          ...prev,
          leftCardZone: newLeftCardZone,
          middleCardZone: newMiddleCardZone,
          rightCardZone: newRightCardZone,
          hand: draw,
          deck: newDeck,
          turn: prev.turn + 1,
          energy: prev.turn + 1,
          nextTurnIsAllowed: false,
        }));

        socket.emit("nextTurn", {
          // data to send to server
          player: player,
          leftCardZone: state.leftCardZone,
          middleCardZone: state.middleCardZone,
          rightCardZone: state.rightCardZone,
        });

        socket.on("turnInfo", (data) => {
          console.log("TurnInfo data received from server is:", data);

          let opponent = {};
          if (data[0].player === player) {
            opponent = data[1];
          } else {
            opponent = data[0];
          }

          setState((prev) => ({
            ...prev,
            oppLeftCardZone: opponent.leftCardZone,
            oppMiddleCardZone: opponent.middleCardZone,
            oppRightCardZone: opponent.rightCardZone,
            nextTurnIsAllowed: true,
          }));
        });
      } else if (state.turn >= 0) {
        // this is where we'd call the final counts and stuff and determine the winner
        console.log("GAME OVER!");
      } else {
        console.log(
          "you've hit a case where you have run out of cards in deck???"
        );
        setState((prev) => ({
          ...prev,
          turn: prev.turn + 1,
          energy: prev.turn + 1,
        }));
      }
    }
  }

  function getInitialHand(state, setState, deckOne, deckTwo) {
    let startDeckOne;
    let startDeckTwo;
    switch (deckOne) {
      case 1:
        startDeckOne = horrorDeck;
        break;
      case 2:
        startDeckOne = pusheenDeck;
        break;
      case 3:
        startDeckOne = sailorMoonDeck;
        break;
      case 4:
        startDeckOne = goldenGirlsDeck;
        break;
      case 5:
        startDeckOne = cerealDeck;
        break;
      default:
        alert("ERROR! NO VALID DECK");
    }
    switch (deckTwo) {
      case 1:
        startDeckTwo = horrorDeck;
        break;
      case 2:
        startDeckTwo = pusheenDeck;
        break;
      case 3:
        startDeckTwo = sailorMoonDeck;
        break;
      case 4:
        startDeckTwo = goldenGirlsDeck;
        break;
      case 5:
        startDeckOne = cerealDeck;
        break;
      default:
        alert("ERROR! NO VALID DECK");
    }

    const newDeck = shuffle(startDeckOne.cards.concat(startDeckTwo.cards));
    const draw = [];
    draw.push(newDeck.pop());
    draw.push(newDeck.pop());
    draw.push(newDeck.pop());
    setState((prev) => ({
      ...prev,
      hand: draw,
      deck: newDeck,
      turn: 0,
      energy: 0,
    }));
    setTimeout(() => {
      console.log("SETTIMEOUT CALLED");
      draw.push(newDeck.pop());

      console.log("SETTIMEOUT draw and newDeck:", draw, newDeck);
      setState((prev) => ({
        ...prev,
        hand: draw,
        deck: newDeck,
        turn: 1,
        energy: 1,
      }));
    }, 2000);
  }

  function reduceEnergyOnDrop(energy, cost) {
    console.log("initial energyondrop: ", energy);

    energy -= cost;
    console.log("energy after reduce:", energy);
    return energy;
  }

  function addEnergyOnDrop(energy, cost) {
    if (energy + cost <= state.turn) {
      energy += cost;
    }
    return energy;
  }

  function moveCardBetween(card, srcZone, targetZone) {
    let srcArr = state[srcZone]; //array to remove card from, ie. hand
    let targetArr = state[targetZone]; //array to add card to, ie. cardzone
    let newEnergy;
    let cardObj = { ...card };
    console.log("card position before:", cardObj.cardPosition);
    console.log("TargetZone:", targetZone);
    cardObj["cardPosition"] = targetZone;
    if (srcZone !== targetZone) {
      targetArr.push(cardObj);
      srcArr = srcArr.filter((cardinHand) => cardinHand.id !== card.id);
    }

    //changes logic based on wher you are dropping
    if (srcZone === "hand" && targetZone !== "hand") {
      newEnergy = reduceEnergyOnDrop(state.energy, card.cost);
    } else if (targetZone === "hand" && srcZone !== "hand") {
      newEnergy = addEnergyOnDrop(state.energy, card.cost);
    } else {
      newEnergy = state.energy;
    }

    setState((prev) => ({
      ...prev,

      [targetZone]: targetArr,
      [srcZone]: srcArr,
      energy: newEnergy,
    }));
  }

  return { state, setState, moveCardBetween, nextTurn, getInitialHand };
};

export default useGameData;
