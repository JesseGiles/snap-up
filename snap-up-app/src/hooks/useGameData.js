import { useState, useEffect } from "react";
import { shuffle } from "../helpers/selectors.js";
import { useNavigate } from "react-router-dom";
import { decks } from "../db/decks.js";

const useGameData = (socket, playerName) => {
  console.log("socket at line 13 usegamedata: ", socket);

  const navigate = useNavigate();
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
    playerReady: false,
    opponentReady: false,
    playerAbilityQueue: [],
    oppAbilityQueue: [],
  });

  useEffect(() => {
    if (state.playerReady && state.opponentReady) {
      nextTurn(state, setState, socket, playerName);
    }
  }, [nextTurn, state.playerReady, state.opponentReady, socket]);

  function broadcastForNextTurn(setState, socket, player) {
    if (!state.playerReady) {
      socket.emit("opponentReady", {
        player: player,
      });
      setState((prev) => ({ ...prev, playerReady: true }));
    }
  }

  function nextTurn(state, setState, socket, player) {
    socket.emit("nextTurn", {
      // data to send to server
      player: player,
      leftCardZone: state.leftCardZone,
      middleCardZone: state.middleCardZone,
      rightCardZone: state.rightCardZone,
    });

    if (!state.opponentReady) {
      alert("Please wait for the opponent to make their turn");
    }
    if (state.opponentReady && state.playerReady) {
      if (state.deck.length > 0 && state.turn < 6) {
        const newDeck = [...state.deck];
        const draw = [...state.hand];
        draw.push(newDeck.pop());

        // map through each of the cardzone arrays and set cardPosition = 'fixed'
        const newLeftCardZone = [...state.leftCardZone];
        const newMiddleCardZone = [...state.middleCardZone];
        const newRightCardZone = [...state.rightCardZone];
        const playerAbilityQueue = [];

        newLeftCardZone.map((card) => {
          card.cardPosition = "fixed";
          if (card.ability) {
            playerAbilityQueue.push({
              lane: "left",
              cardName: card.name,
              cardAbility: card.ability.description,
            });
            card.ability = null;
          }
        });
        newMiddleCardZone.map((card) => {
          card.cardPosition = "fixed";
          if (card.ability) {
            playerAbilityQueue.push({
              lane: "middle",
              cardName: card.name,
              cardAbility: card.ability.description,
            });
            card.ability = null;
          }
        });
        newRightCardZone.map((card) => {
          card.cardPosition = "fixed";
          if (card.ability) {
            playerAbilityQueue.push({
              lane: "right",
              cardName: card.name,
              cardAbility: card.ability.description,
            });
            card.ability = null;
          }
        });
        console.log("ABILITY QUEUE:", playerAbilityQueue);

        // socket.emit("oppAbilities", {
        //   // data to send to server
        //   player: player,
        //   abilityQueue: abilityQueue,
        // });

        setState((prev) => ({
          ...prev,
          leftCardZone: newLeftCardZone,
          middleCardZone: newMiddleCardZone,
          rightCardZone: newRightCardZone,
          hand: draw,
          deck: newDeck,
          turn: prev.turn + 1,
          energy: prev.turn + 1,
          playerReady: false,
          opponentReady: false,
          playerAbilityQueue: playerAbilityQueue,
        }));
      } else if (state.turn >= 0) {
        // this is where we'd call the final counts and stuff and determine the winner
        console.log("GAME OVER!");
        navigate("/gameover");
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

  function getInitialHand(state, setState, deckOne, deckTwo, socket, player) {
    // console.log("Deck ONE:", deckOne);
    // console.log("Deck TWO:", deckTwo);
    // console.log("Decks import in usegamedata: ", decks);
    // console.log("Decks", decks.horrorDeck);

    let startDeckOne;
    let startDeckTwo;
    switch (deckOne) {
      case 1:
        startDeckOne = decks.horrorDeck;
        break;
      case 2:
        startDeckOne = decks.pusheenDeck;
        break;
      case 3:
        startDeckOne = decks.sailorMoonDeck;
        break;
      case 4:
        startDeckOne = decks.goldenGirlsDeck;
        break;
      case 5:
        startDeckOne = decks.cerealDeck;
        break;
      case 6:
        startDeckOne = decks.animalCrossingDeck;
        break;

      default:
        alert("ERROR! NO VALID DECK");
    }
    switch (deckTwo) {
      case 1:
        startDeckTwo = decks.horrorDeck;
        break;
      case 2:
        startDeckTwo = decks.pusheenDeck;
        break;
      case 3:
        startDeckTwo = decks.sailorMoonDeck;
        break;
      case 4:
        startDeckTwo = decks.goldenGirlsDeck;
        break;
      case 5:
        startDeckTwo = decks.cerealDeck;
        break;
      case 6:
        startDeckTwo = decks.animalCrossingDeck;
        break;
      default:
        alert("ERROR! NO VALID DECK");
    }

    //console.log("state before we shuffle a deck", state);
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
      //console.log("SETTIMEOUT CALLED");
      draw.push(newDeck.pop());

      //console.log("SETTIMEOUT draw and newDeck:", draw, newDeck);
      setState((prev) => ({
        ...prev,
        hand: draw,
        deck: newDeck,
        turn: 1,
        energy: 1,
      }));
    }, 2000);

    socket.on("opponentReady", (data) => {
      //console.log("line 198: socket opponent ready DATA IS:", data);
      //console.log("line 199: player IS:", player);
      if (data.player !== player) {
        setState((prev) => ({ ...prev, opponentReady: true }));
      }
    });

    socket.on("turnInfo", (data) => {
      console.log("TurnInfo data received from server is:", data);

      let opponent = {};
      if (data[0].player === player) {
        opponent = data[1];
      } else {
        opponent = data[0];
      }

      const oppLeftCardZone = opponent.leftCardZone;
      const oppMiddleCardZone = opponent.middleCardZone;
      const oppRightCardZone = opponent.rightCardZone;
      const oppAbilityQueue = [];

      oppLeftCardZone.map((card) => {
        card.cardPosition = "fixed";
        if (card.ability) {
          oppAbilityQueue.push({
            lane: "left",
            cardName: card.name,
            cardAbility: card.ability.description,
          });
          card.ability = null;
        }
      });
      oppMiddleCardZone.map((card) => {
        card.cardPosition = "fixed";
        if (card.ability) {
          oppAbilityQueue.push({
            lane: "middle",
            cardName: card.name,
            cardAbility: card.ability.description,
          });
          card.ability = null;
        }
      });
      oppRightCardZone.map((card) => {
        card.cardPosition = "fixed";
        if (card.ability) {
          oppAbilityQueue.push({
            lane: "right",
            cardName: card.name,
            cardAbility: card.ability.description,
          });
          card.ability = null;
        }
      });

      setState((prev) => ({
        ...prev,
        oppLeftCardZone: oppLeftCardZone,
        oppMiddleCardZone: oppMiddleCardZone,
        oppRightCardZone: oppRightCardZone,
        oppAbilityQueue: oppAbilityQueue,
      }));
    });
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

  return {
    state,
    setState,
    moveCardBetween,
    nextTurn,
    getInitialHand,
    broadcastForNextTurn,
  };
};

export default useGameData;
