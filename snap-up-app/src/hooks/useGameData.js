import { useState, useEffect } from "react";
import { shuffle, enterBattlefield } from "../helpers/selectors.js";
import decks from "../db/decks.js";

const _ = require("lodash");

const useGameData = (socket, playerName) => {
  

  const [state, setState] = useState({
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
    isGameOver: false,
    waitingForNextTurn: false,
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
    if (!state.opponentReady) {
      setState((prev) => ({ ...prev, waitingForNextTurn: true }));
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

    if (state.turn < 6) {
      // map through each of the cardzone arrays and set cardPosition = 'fixed'
      const newLeftCardZone = [...state.leftCardZone];
      const newMiddleCardZone = [...state.middleCardZone];
      const newRightCardZone = [...state.rightCardZone];
      const newPlayerAbilityQueue = [];
      
      newLeftCardZone.map((card) => {
        
        card.cardPosition = "fixed";
        if (card.ability !== null) {
          newPlayerAbilityQueue.push({
            lane: "left",
            cardName: card.name,
            cardAbility: card.ability,
          });
          card.ability = null;
        }
      });
      newMiddleCardZone.map((card) => {
        
        card.cardPosition = "fixed";
        if (card.ability !== null) {
          newPlayerAbilityQueue.push({
            lane: "middle",
            cardName: card.name,
            cardAbility: card.ability,
          });
          card.ability = null;
        }
      });
      newRightCardZone.map((card) => {
        
        card.cardPosition = "fixed";
        if (card.ability !== null) {
          newPlayerAbilityQueue.push({
            lane: "right",
            cardName: card.name,
            cardAbility: card.ability,
          });
          card.ability = null;
        }
      });

      setState((prev) => ({
        ...prev,
        leftCardZone: newLeftCardZone,
        middleCardZone: newMiddleCardZone,
        rightCardZone: newRightCardZone,
        turn: prev.turn + 1,
        energy: prev.turn + 1,
        playerReady: false,
        opponentReady: false,
        playerAbilityQueue: newPlayerAbilityQueue,
        waitingForNextTurn: false,
      }));

      if (state.deck.length > 0) {
        
        const newDeck = [...state.deck];
        const draw = [...state.hand];
        draw.push(newDeck.pop());

        setState((prev) => ({
          ...prev,
          hand: draw,
          deck: newDeck,
        }));
      }
    } else if (state.turn >= 0) {
      
      const newLeftCardZone = [...state.leftCardZone];
      const newMiddleCardZone = [...state.middleCardZone];
      const newRightCardZone = [...state.rightCardZone];
      const newPlayerAbilityQueue = [];

      newLeftCardZone.map((card) => {
        
        card.cardPosition = "fixed";
        if (card.ability !== null && card.ability[0] !== 'playCardFromDeck')  {
          newPlayerAbilityQueue.push({
            lane: "left",
            cardName: card.name,
            cardAbility: card.ability,
          });
          card.ability = null;
        }
      });
      newMiddleCardZone.map((card) => {
        
        card.cardPosition = "fixed";
        if (card.ability !== null && card.ability[0] !== 'playCardFromDeck') {
          newPlayerAbilityQueue.push({
            lane: "middle",
            cardName: card.name,
            cardAbility: card.ability,
          });
          card.ability = null;
        }
      });
      newRightCardZone.map((card) => {
        
        card.cardPosition = "fixed";
        if (card.ability !== null && card.ability[0] !== 'playCardFromDeck') {
          newPlayerAbilityQueue.push({
            lane: "right",
            cardName: card.name,
            cardAbility: card.ability,
          });
          card.ability = null;
        }
      });
      

      setState((prev) => ({
        ...prev,
        leftCardZone: newLeftCardZone,
        middleCardZone: newMiddleCardZone,
        rightCardZone: newRightCardZone,
        playerReady: false,
        opponentReady: true,
        playerAbilityQueue: newPlayerAbilityQueue,
        isGameOver: true,
      }));
    }
  }

  function getInitialHand(state, setState, deckOne, deckTwo, socket, player) {

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
      case 7:
        startDeckOne = decks.friendsDeck;
        break;
      case 8:
        startDeckOne = decks.fireflyDeck;
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
      case 7:
        startDeckTwo = decks.friendsDeck;
        break;
      case 8:
        startDeckTwo = decks.fireflyDeck;
        break;
      default:
        alert("ERROR! NO VALID DECK");
    }

    const newDeck = shuffle(
      _.cloneDeep(startDeckOne.cards.concat(startDeckTwo.cards))
    );
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
      draw.push(newDeck.pop());
      setState((prev) => ({
        ...prev,
        hand: draw,
        deck: newDeck,
        turn: 1,
        energy: 1,
      }));
    }, 2000);

    socket.on("opponentReady", (data) => {
      if (data.player !== player) {
        setState((prev) => ({ ...prev, opponentReady: true }));
      }
    });

    socket.on("turnInfo", (data) => {

      let opponent = {};
      if (data[0].player === player) {
        opponent = data[1];
      } else {
        opponent = data[0];
      }

      //math their abilties

      const oppLeftCardZone = opponent.leftCardZone;
      const oppMiddleCardZone = opponent.middleCardZone;
      const oppRightCardZone = opponent.rightCardZone;
      const newOppAbilityQueue = [];

      oppLeftCardZone.map((card) => {
        card.cardPosition = "fixed";
        if (card.ability !== null) {
          newOppAbilityQueue.push({
            lane: "left",
            card: card,
            cardAbility: card.ability,
          });
          card.ability = null;
        }
      });
      oppMiddleCardZone.map((card) => {
        card.cardPosition = "fixed";
        if (card.ability !== null) {
          newOppAbilityQueue.push({
            lane: "middle",
            card: card,
            cardAbility: card.ability,
          });
          card.ability = null;
        }
      });
      oppRightCardZone.map((card) => {
        card.cardPosition = "fixed";
        if (card.ability !== null) {
          newOppAbilityQueue.push({
            lane: "right",
            card: card,
            cardAbility: card.ability,
          });
          card.ability = null;
        }
      });


      setState((prev) => ({
        ...prev,
        oppLeftCardZone: oppLeftCardZone,
        oppMiddleCardZone: oppMiddleCardZone,
        oppRightCardZone: oppRightCardZone,
        oppAbilityQueue: newOppAbilityQueue,
      }));
    });
  }

  function resolvePlayerAbilitiesQueue(queue) {
    let deckCopy = [...state.deck];
    let handCopy = [...state.hand];
    let leftCopy = [...state.leftCardZone];
    let middleCopy = [...state.middleCardZone];
    let rightCopy = [...state.rightCardZone];
    let energyCopy = state.energy;
    //friendlyTarget
    let targetArr;
    let updatedArr;
    let arrName;
    //drawCards
    let newHandAndDeck;
    //addEnergy
    let newEnergy;
    //playCardsFromDeck
    let newZoneAndDeck;

    for (let ability of queue) {
      if (ability.lane === "left") {
        targetArr = leftCopy;
        arrName = "leftCopy";
      }
      if (ability.lane === "middle") {
        targetArr = middleCopy;
        arrName = "middleCopy";
      }
      if (ability.lane === "right") {
        targetArr = rightCopy;
        arrName = "rightCopy";
      }

      if (ability.cardAbility[0] === "addPower") {
        updatedArr = enterBattlefield(
          ability.cardAbility[0],
          ability.cardAbility[1],
          targetArr
        );
        if (arrName === "leftCopy") {
          leftCopy = updatedArr;
        }
        if (arrName === "middleCopy") {
          middleCopy = updatedArr;
        }
        if (arrName === "rightCopy") {
          rightCopy = updatedArr;
        }
      }

      if (ability.cardAbility[0] === "drawCards") {
       
        newHandAndDeck = enterBattlefield(
          ability.cardAbility[0],
          ability.cardAbility[1],
          deckCopy,
          handCopy
        );
        deckCopy = newHandAndDeck[0];
        handCopy = newHandAndDeck[1];
      }
      if (ability.cardAbility[0] === "addEnergy") {
        newEnergy = enterBattlefield(
          ability.cardAbility[0],
          ability.cardAbility[1],
          energyCopy
        );
        energyCopy = newEnergy;
      }
      if (ability.cardAbility[0] === "playCardFromDeck") {
        newZoneAndDeck = enterBattlefield(
          ability.cardAbility[0],
          ability.cardAbility[1],
          targetArr,
          deckCopy
        );
        deckCopy = newZoneAndDeck[0];

        if (arrName === "leftCopy") {
          leftCopy = newZoneAndDeck[1];
        }
        if (arrName === "middleCopy") {
          middleCopy = newZoneAndDeck[1];
        }
        if (arrName === "rightCopy") {
          rightCopy = newZoneAndDeck[1];
        }
      }
      if (ability.cardAbility[0] === "shuffleHandIntoDeck") {
        newHandAndDeck = enterBattlefield(
          ability.cardAbility[0],
          ability.cardAbility[1],
          deckCopy,
          handCopy
        );

        deckCopy = newHandAndDeck[0];
        handCopy = newHandAndDeck[1];
      }

      setState((prev) => ({
        ...prev,
        deck: deckCopy,
        hand: handCopy,
        energy: energyCopy,
        leftCardZone: leftCopy,
        middleCardZone: middleCopy,
        rightCardZone: rightCopy,
      }));
    }
  }

  function resolveOppAbilitiesQueue(queue) {
    let leftCopy = [...state.oppLeftCardZone];
    let middleCopy = [...state.oppMiddleCardZone];
    let rightCopy = [...state.oppRightCardZone];
    let targetArr;
    let updatedArr;
    let arrName;
    for (let ability of queue) {
      if (ability.lane === "left") {
        targetArr = leftCopy;
        arrName = "leftCopy";
      }
      if (ability.lane === "middle") {
        targetArr = middleCopy;
        arrName = "middleCopy";
      }
      if (ability.lane === "right") {
        targetArr = rightCopy;
        arrName = "rightCopy";
      }
      if (ability.cardAbility[0] === "addPower") {
        updatedArr = enterBattlefield(
          ability.cardAbility[0],
          ability.cardAbility[1],
          targetArr
        );
        if (arrName === "leftCopy") {
          leftCopy = updatedArr;
        }
        if (arrName === "middleCopy") {
          middleCopy = updatedArr;
        }
        if (arrName === "rightCopy") {
          rightCopy = updatedArr;
        }
      }
    }
    setState((prev) => ({
      ...prev,
      oppLeftCardZone: leftCopy,
      oppMiddleCardZone: middleCopy,
      oppRightCardZone: rightCopy,
    }));
  }
  
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const buffOppCardsIfMatching = function(laneName, location) {
    let oppLaneName = "opp" + capitalizeFirstLetter(laneName)
    let oppCards = [...state[oppLaneName]]
    for ( let card of oppCards) {
      if(card.locationBonus === false && card.deck === location.deck) {
       
            card.power += 1
            card.locationBonus = true
      }
    }
  
    
    return [oppCards, oppLaneName]
  }

  const buffCardsIfMatching = function(laneName, location) {
    let playerCards = [...state[laneName]]
    for ( let card of playerCards) {
      if(card.locationBonus === false && card.deck === location.deck) {
            card.power += 1
            card.locationBonus = true
      }
    }
  
    
    return playerCards
  }

  //MOVE ALL OF ME LATER
  function reduceEnergyOnDrop(energy, cost) {
  
    energy -= cost;
    return energy;
  }

  function addEnergyOnDrop(energy, cost) {
    energy += cost;

    return energy;
  }

  function moveCardBetween(card, srcZone, targetZone) {
    let srcArr = state[srcZone]; //array to remove card from, ie. hand
    let targetArr = state[targetZone]; //array to add card to, ie. cardzone
    let currEnergy = state.energy;
    let newEnergy;
    let cardObj = { ...card };
    
    cardObj["cardPosition"] = targetZone;
    if (srcZone !== targetZone) {
      targetArr.push(cardObj);
      
      srcArr = srcArr.filter((cardToRemove) => cardToRemove.id !== card.id);
      
    }

    //changes logic based on wher you are dropping
    if (srcZone === "hand" && targetZone !== "hand") {
      newEnergy = reduceEnergyOnDrop(currEnergy, card.cost);
    } else if (targetZone === "hand" && srcZone !== "hand") {
      newEnergy = addEnergyOnDrop(currEnergy, card.cost);
    } else {
      newEnergy = currEnergy;
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
    buffCardsIfMatching,
    buffOppCardsIfMatching,
    getInitialHand,
    nextTurn,
    broadcastForNextTurn,
    resolvePlayerAbilitiesQueue,
    resolveOppAbilitiesQueue,
  };
};

export default useGameData;
